'use strict';

const expect = require('chai').expect;
require('.')()

describe('effortless require', function () {
	it('should allow me to require one module', function () {
		expect(need).to.exist;
	})
	it('should allow me to require two or more modules', function () {
		const [fs, path] = need('fs', 'path');
		expect(fs).to.exist;
		expect(path).to.be.exist;
	})
	it('should be undefined on invalid module/s', function () {
		const [invalidModule] = need('invalidModule');
		expect(invalidModule).to.be.undefined;
	})
	it('should allow me to require two or more modules with basePath Option', function () {
		require('.')({
			basePath: '.'
		})
		const lodash = need('index');
		expect(lodash).to.exist;
	})
	it('should throw error on invalid basePath Option', function () {
		try {
			require('.')({
				basePath: ''
			})
			const invalidModule = need('asd');
		} catch (e) {
			expect(e.message).to.equal(`module not found`);
		}
	})
})