"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = require("prop-types");
exports.Slider = function (sliderProps) {
    return react_1.default.createElement("div", null, "Swift - Slider");
};
exports.Slider.defaultProps = {
    data: [],
    height: 450,
    activeDotColor: '#e8784e',
    interval: 5000,
    dotColor: '#909192',
    showDots: true,
    enableNextAndPrev: true,
};
exports.Slider.propTypes = {
    data: prop_types_1.arrayOf(prop_types_1.exact({
        id: prop_types_1.string.isRequired,
        src: prop_types_1.string.isRequired,
    })).isRequired,
    height: prop_types_1.number,
    interval: prop_types_1.number,
    activeDotColor: prop_types_1.string,
    dotColor: prop_types_1.string,
    showDots: prop_types_1.bool,
    enableNextAndPrev: prop_types_1.bool,
};
exports.default = exports.Slider;
