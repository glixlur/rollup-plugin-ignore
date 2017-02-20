const emptyFile = 'export default {}';
const emptyFileName = '\0empty_module';

module.exports = function ignore(list) {
	return {
		resolveId: function (importee) {
			return list.indexOf(importee) > -1 ? emptyFileName : null;
		},
		load: function (id) {
			return id === emptyFileName ? emptyFile : null;
		}
	};
}

module.exports.default = module.exports;
