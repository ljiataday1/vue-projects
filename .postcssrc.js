/*
 * @Author: your name
 * @Date: 2020-08-27 10:45:54
 * @LastEditTime: 2020-09-03 11:35:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \projectname\.postcssrc.js
 */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-pxtorem':{
      rootValue:75,
      unitPrecision: 5,
      propList: ['*'],
      minPixelValue:12    
    }
  }
}
