"use strict";

const store = require('./staticStore').valuesStore;

exports.getAll = async () => {
    return store;
}

exports.get = async (id) => {
    return store.find(v => v.id === id);
}

exports.create = async (value) => {
    store.push({ ...value, id: store.length + 1 });
}

exports.update = async (value) => {
    const index = store.findIndex(v => v.id === value.id);
    store[index] = value;
}

exports.delete = async (id) => {
    const index = store.findIndex(v => v.id === id);
    store.splice(index, 1);
}
