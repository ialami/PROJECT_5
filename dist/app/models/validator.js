"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validator {
    inputAssign(sources, input) {
        for (const source of sources) {
            try {
                if (input[source] === undefined || input[source] === null) {
                    throw new Error('Undefined or null');
                }
                this[source] = input[source];
            }
            catch (e) {
                throw new Error('Can not make "' + source + '" property mutable : ' + e.message);
            }
        }
    }
    inputAssignOptional(sources, input) {
        for (const source of sources) {
            try {
                this[source] = input[source];
            }
            catch (e) {
            }
        }
    }
    constructor(input, required, optional) {
        this.inputAssign(required, input);
        this.inputAssignOptional(optional, input);
    }
}
exports.Validator = Validator;
class ValidatorExport extends Validator {
    constructor(input, required, optional) {
        super(input, required, optional);
    }
    toJSON() {
        return JSON.parse(this.stringify());
    }
    stringify() {
        return JSON.stringify(this.toObject());
    }
    toObject() {
        const exclude = [
            'toJSON',
            'toObject',
            'stringify',
            'inputAssign',
            'inputAssignOptional'
        ];
        const clone = {};
        for (const key of Object.keys(this)) {
            if (this.hasOwnProperty(key)) {
                if (exclude.indexOf(key) === -1) {
                    clone[key] = this[key];
                }
            }
        }
        return clone;
    }
}
exports.ValidatorExport = ValidatorExport;
class ObjectEnrich {
    toJSON() {
        return JSON.parse(this.stringify());
    }
    stringify() {
        return JSON.stringify(this.toObject());
    }
    toObject() {
        const exclude = ['toJSON', 'stringify', 'toObject'];
        const clone = {};
        for (const key of Object.keys(this)) {
            if (this.hasOwnProperty(key)) {
                if (exclude.indexOf(key) === -1) {
                    clone[key] = this[key];
                }
            }
        }
        return clone;
    }
}
exports.ObjectEnrich = ObjectEnrich;
