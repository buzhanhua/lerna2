'use strict';

const create = require('..');

describe('@lerna2/create', () => {
    it("create", () => {
        expect(create()).toEqual("create");
    });
});
