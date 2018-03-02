import pathToRegexp from 'path-to-regexp'

export default async function(ctx, next) {
  const pathNode = pathToRegexp('/mock/:projectId(.{24})/:mockURL*').exec(
    ctx.path
  )

  if (!pathNode) ctx.throw(404)

  ctx.pathNode = {
    projectId: pathNode[1],
    mockURL: '/' + (pathNode[2] || '')
  }

  return next()
}
