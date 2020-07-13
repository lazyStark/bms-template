/*
 * @Author: siwenfeng
 * @Date: 2020-07-06 17:09:18
 * @LastEditTime: 2020-07-06 17:09:30
 * @Description: this is ....
 */
let baseUrl = ''
const iconfontVersion = ['567566_pwc3oottzol', '1066523_v8rsbcusj5q']
const iconfontUrl = `//at.alicdn.com/t/font_$key.css`
const codeUrl = `${baseUrl}/code`
const env = process.env
if (env.NODE_ENV === 'development') {
  baseUrl = `` // 开发环境地址
} else if (env.NODE_ENV === 'production') {
  baseUrl = `` // 生产环境地址
} else if (env.NODE_ENV === 'test') {
  baseUrl = `` // 测试环境地址
}
export {
  baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
