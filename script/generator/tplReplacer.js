const handlebars = require('handlebars')
const fs = require('fs-extra')
const { resolve } = require('path')

const getTplFilePath = meta => ({
  docs_md: {
    from: './.template/packages/comp/docs/README.md.tpl',
    to: `../../packages/${meta.compName}/docs/README.md`
  },
  docs_demo: {
    from: './.template/packages/comp/docs/demo.vue.tpl',
    to: `../../packages/${meta.compName}/docs/demo.vue`
  },
  src_index: {
    from: './.template/packages/comp/src/index.vue.tpl',
    to: `../../packages/${meta.compName}/src/index.vue`
  },
  comp_index: {
    from: './.template/packages/comp/index.js.tpl',
    to: `../../packages/${meta.compName}/index.js`
  }
})

// 在 packages 中创建组件
const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach(key => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8')
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, err => {
      err && console.error(err)
    })
  })
}

// 读取 packages/componsnts.json 并更新
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../packages/components.json'
  const listFileContent = fs.readJsonSync(resolve(__dirname, listFilePath))
  listFileContent.push(meta)
  fs.writeFile(resolve(__dirname, listFilePath), JSON.stringify(listFileContent, null, 2), err => {
    err && console.error(err)
  })
  return listFileContent
}

// 更新 packages/index.js
const installTsTplReplacer = (listFileContent) => {
  const indexFileFrom = './.template/packages/index.js.tpl'
  const indexFileTo = '../../packages/index.js'
  const indexFileTpl = fs.readFileSync(resolve(__dirname, indexFileFrom), 'utf-8')
  const indexMeta = {
    importPlugins: listFileContent.map(({ compName }) => `import { ${compName}Plugin } from './${compName}'`).join('\n'),
    installPlugins: listFileContent.map(({ compName }) => `${compName}Plugin.install?.(Vue)`).join('\n    '),
    exportPlugins: listFileContent.map(({ compName }) => `export * from './${compName}'`).join('\n')
  }
  const installFileContent = handlebars.compile(indexFileTpl, { noEscape: true })(indexMeta)
  fs.outputFile(resolve(__dirname, indexFileTo), installFileContent, err => {
    err && console.error(err)
  })
}

// 更新 src/router/index.js
const routerTplReplacer = (listFileContent) => {
  const indexFileFrom = './.template/src/router/index.js.tpl'
  const indexFileTo = '../../src/router/index.js'
  const indexFileTpl = fs.readFileSync(resolve(__dirname, indexFileFrom), 'utf-8')
  const indexMeta = {
    routes: listFileContent.map(comp =>
      `{
        name: '${comp.compName}',
        path: '/components/${comp.compClassName}',
        meta: { title: '${comp.compClassName}' },
        component: () => import('../../packages/${comp.compName}/docs/README.md')
      }`
    )
  }
  const routerFileContent = handlebars.compile(indexFileTpl, { noEscape: true })(indexMeta)
  fs.outputFile(resolve(__dirname, indexFileTo), routerFileContent, err => {
    err && console.error(err)
  })
}

module.exports = (meta) => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  routerTplReplacer(listFileContent)
  installTsTplReplacer(listFileContent)
}
