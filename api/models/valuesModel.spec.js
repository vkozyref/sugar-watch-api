const chai = require('chai');
const expect = chai.expect;
const sut = require('./valuesModel');
const sinon = require('sinon');
const store = require('./staticStore');

describe('Values Model', () => {

    describe('Get all values', () => {
        it('should return an empty array when there is no values in store', async () => {
            sinon.stub(store, 'valuesStore').returns([]);
            const actual = await sut.getAll();
            expect(actual).to.eql([]);
        })
    });
})