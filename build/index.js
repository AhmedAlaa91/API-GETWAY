"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var PhoneNumbers_1 = require("./routes/PhoneNumbers");
var app = express();
var port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
(0, PhoneNumbers_1.default)(app);
app.listen(port, function () {
    console.log(" listening on port ".concat(port));
});
exports.default = app;
