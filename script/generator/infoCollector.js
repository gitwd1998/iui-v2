const inquirer = require('inquirer')
const fs = require('fs-extra')
const { resolve } = require('path')

const listFilePath = '../../packages/components.json'

const RegxMap = {
  IS_COMP_NAME: /^[A-Z][a-zA-Z]*$/,
  IS_COMP_ZH_NAME: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
}

// 大驼峰 -> 连接符
const kebabCase = string => string.replace(/\B([A-Z])/g, '-$1').toLowerCase()
module.exports = async () => {
  const meta = await inquirer.prompt([
    {
      type: 'input',
      message: '请输入需要创建的组件的英文命名',
      name: 'compName',
      default: 'IDemo',
      prefix: '[?]',
      suffix: ':',
      validate (answer) {
        const done = this.async()
        const validateRes = RegxMap.IS_COMP_NAME.test(answer)
        if (!validateRes) {
          return done('请按要求输入正确的组件名！')
        }
        const listData = fs.readJsonSync(resolve(__dirname, listFilePath))
        if (listData.find(item => item.compName === answer)) {
          return done('已存在同名组件，请确认后更换名字再重试。')
        }
        done(null, true)
      }
    },
    {
      type: 'input',
      message: '请输入需要创建的组件中文命名',
      name: 'compZhName',
      default: '示例',
      prefix: '[?]',
      suffix: ':',
      validate (answer) {
        const done = this.async()
        const validateRes = RegxMap.IS_COMP_ZH_NAME.test(answer)
        if (!validateRes) {
          return done('请按要求输入正确的组件名！')
        }
        done(null, true)
      }
    },
    {
      type: 'input',
      message: '请输入该组件的功能描述',
      name: 'compDesc',
      default: '示例',
      prefix: '[?]',
      suffix: ':'
    }
  ])
  meta.compClassName = kebabCase(meta.compName)
  return meta
}
