const emptyFile = 'export default {}';
const emptyFileName = '\0empty_module';

module.exports = function ignore(list) {
	return {
		resolveId(importee) {
			return list.indexOf(importee) > -1 ? emptyFileName : null;
		},
		load(id) {
			return id === emptyFileName ? emptyFile : null;
		},
	};
}

ignore.__esModule = true;
ignore.default = ignore;
