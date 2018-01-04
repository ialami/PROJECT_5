"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
exports.User = mongoose_1.model('User', schema_1.UserSchema);
