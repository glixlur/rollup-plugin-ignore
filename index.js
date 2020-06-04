const emptyFile = "export default {}"
const emptyFileName = "\0rollup_plugin_ignore_empty_module_placeholder"

function ignore(list, options = {}) {
  return {
    resolveId(importee) {
      return list.includes(importee) ? emptyFileName : null
    },
    load(id) {
      return (options.commonjsBugFix ? id.includes(emptyFile) : id === emptyFileName)
        ? emptyFile
        : null
    },
  }
}

module.exports = ignore
ignore.default = ignore
