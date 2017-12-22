'use strict';

module.exports = (options = {}) => {
	const eRequire = (...args) => {
		const modules = [];
		args.forEach(arg => {
			try {
				modules.push(require(arg));
			} catch (error) {
				if (options.hasOwnProperty('basePath')) {
					if (!options.basePath) {
						throw new Error(`module not found`);
					} else {
						modules.push(require(`${options.basePath}/${arg}`));
					}
				}
			}
		});

		return modules;
	};

	global.need = eRequire;
};
