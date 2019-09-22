"use strict";

var model = require("../models/valuesModel");

exports.get_all_values = async (req, res) => {
  try {
    res.json(await model.getAll());
  } catch (err) {
    res.json(err);
  }
};

exports.create_a_value = async (req, res) => {
  try {
    res.json(await model.create(req.body));
  } catch (err) {
    res.json(err);
  }
};

exports.read_a_value = async (req, res) => {
  try {
    res.json(await model.get(req.body.id));
  } catch (err) {
    res.json(err);
  }
};

exports.update_a_value = async (req, res) => {
  try {
    res.json(await model.update(req.body));
  } catch (err) {
    res.json(err);
  }
};

exports.delete_a_value = async (req, res) => {
  try {
    res.json(await model.delete(req.body.id));
  } catch (err) {
    res.json(err);
  }
};
