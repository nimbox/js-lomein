"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FetchError_1 = require("./FetchError");
var AxiosFetchError = /** @class */ (function (_super) {
    __extends(AxiosFetchError, _super);
    function AxiosFetchError(error) {
        var _this = this;
        if (error.response) {
            _this = _super.call(this, error.message, 'response') || this;
            _this.status = error.response.status;
            return;
        }
        if (error.request) {
            _this = _super.call(this, error.message, 'network') || this;
            _this.type = 'network';
            return;
        }
        _this = _super.call(this, error.message, 'error') || this;
        return _this;
    }
    return AxiosFetchError;
}(FetchError_1.FetchError));
exports.AxiosFetchError = AxiosFetchError;
