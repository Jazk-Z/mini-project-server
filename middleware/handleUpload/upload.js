const { UploadHelper } = require('../../utils/upload.helper.js')
const uploadMiddleware = config => {
  return async (ctx, next) => {
    if (!(ctx.uploadQiNiu instanceof UploadHelper)) {
      Object.defineProperty(ctx, 'uploadQiNiu', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: new UploadHelper(config)
      })
    }
    await next()
  }
}
module.exports = {
  uploadMiddleware
}
