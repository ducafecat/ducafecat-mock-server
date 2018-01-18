'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516168821635_152';

  // add your config here
  config.middleware = [];

  // 安全控制
  config.security = {
    // xframe: {
    //   enable: false,
    // },
    csrf: {
      // enable: false
      ignore: '/mock'
    },
  };

  return config;
};
