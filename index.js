const emptyFile = 'export default {}';
const emptyFileName = '\0empty_module';

function ignore(list) {
  return {
    resolveId(importee) {
      return list.indexOf(importee) > -1 ? emptyFileName : null;
    },
    load(id) {
      return id === emptyFileName ? emptyFile : null;
    },
  };
}

module.exports = ignore;
ignore.default = ignore;
