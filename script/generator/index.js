const infoCollector = require('./infoCollector')
const tplReplacer = require('./tplReplacer')

const run = async () => {
  const meta = await infoCollector()
  tplReplacer(meta)
  console.log('\x1B[36m%s\x1B[0m', meta)
  console.log('\x1B[36m%s\x1B[0m', `\n    ${meta.compName}组件新建完毕`)
  console.log('\x1B[36m%s\x1B[0m', `    cd packages/${meta.compName} \n`)
}

run()
