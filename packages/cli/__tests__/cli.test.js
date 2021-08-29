'use strict';

const cli = require('..');

describe('@lerna2/cli', () => {
    it("cli", () => {
        expect(cli()).toEqual("cli");
    });
});
