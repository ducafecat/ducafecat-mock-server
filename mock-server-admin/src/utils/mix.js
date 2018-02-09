import jsBeautify from 'js-beautify/js/lib/beautify'

export default {

    // 格式化json
    formatJson (str) {
        str = str.trim()
        if (str === '') {
            return str
        }
        try {
            return jsBeautify.js_beautify(str, { indent_size: 2 })
            // let obj = JSON.parse(str)
            // return JSON.stringify(obj, null, 4)
        } catch (err) {
            return str
        }
    },
    formatJson2 (json, options) {
        var reg = null
        var formatted = ''
        var pad = 0
        var PADDING = '    '
        options = options || {}
        options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false
        options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true
        if (typeof json !== 'string') {
            json = JSON.stringify(json)
        } else {
            json = JSON.parse(json)
            json = JSON.stringify(json)
        }
        reg = /([\{\}])/g
        json = json.replace(reg, '\r\n$1\r\n')
        reg = /([\[\]])/g
        json = json.replace(reg, '\r\n$1\r\n')
        reg = /(\,)/g
        json = json.replace(reg, '$1\r\n')
        reg = /(\r\n\r\n)/g
        json = json.replace(reg, '\r\n')
        reg = /\r\n\,/g
        json = json.replace(reg, ',')
        if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
            reg = /\:\r\n\{/g
            json = json.replace(reg, ':{')
            reg = /\:\r\n\[/g
            json = json.replace(reg, ':[')
        }
        if (options.spaceAfterColon) {
            reg = /\:/g
            json = json.replace(reg, ':')
        }
        (json.split('\r\n')).forEach(function (node, index) {
                var i = 0
                var indent = 0
                var padding = ''

                if (node.match(/\{$/) || node.match(/\[$/)) {
                    indent = 1
                } else if (node.match(/\}/) || node.match(/\]/)) {
                    if (pad !== 0) {
                        pad -= 1
                    }
                } else {
                    indent = 0
                }

                for (let i = 0; i < pad; i++) {
                    padding += PADDING
                }

                formatted += padding + node + '\r\n'
                pad += indent
            }
        )
        return formatted
    },
    // 格式化 markdown
    formatMarkdown (str) {
        str = str.trim()
        if (str === '') {
            return str
        }
        var prettify = require('prettify-markdown')
        return  prettify(str)
    },
    // 删除确认
    delConfirm() {
        var msg = '您真的确定要删除吗？\n\n请确认！'
        return confirm(msg)
    }
}
