'use strict';

const init = require('..');

describe('@lerna2/init', () => {
    it("init", () => {
        expect(init()).toEqual("init");
    });
});
