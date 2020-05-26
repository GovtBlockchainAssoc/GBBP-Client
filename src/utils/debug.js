"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// debugging utility function; use for alert(JSON.stringify(error, replaceErrors));
function replaceErrors(key, value) {
    if (value instanceof Error) {
        var error = {};
        Object.getOwnPropertyNames(value).forEach(function (key) { error[key] = value[key]; });
        return error;
    }
    return value;
}
exports.replaceErrors = replaceErrors;
//# sourceMappingURL=debug.js.map