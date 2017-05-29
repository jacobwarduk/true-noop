/* global describe it expect */

'use strict';

const noop = require('../index');

describe('noop', () => {
	it('it should return undefined', () => {
		expect(noop()).toBe(undefined);
	});
});
