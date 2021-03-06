const KoaRouter = require('koa-router')
const router = new KoaRouter()
const koaBody = require('koa-body')
const { bodyConfig, storePhotoDir } = require('../../config/koa-bady.config')
const { isExistDirOrMkDir } = require('../../utils/fs.helper')
// 检查是否存在这个目录
isExistDirOrMkDir(process.cwd(), storePhotoDir)
const { postImage, callback } = require('../../controller/upload')
router.prefix('/upload')
router.post('/', koaBody(bodyConfig), postImage)
router.get('/callback', callback)
module.exports = router
