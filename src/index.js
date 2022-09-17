"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Markup = void 0;
/* This class is used to render html to image */
var fs_1 = require("fs");
var puppeteer = require("puppeteer");
var ejs = require("ejs");
var Markup = /** @class */ (function () {
    function Markup() {
        this.html = "".concat(__dirname, "/index.html");
        this.view = {
            width: 800,
            height: 600,
            deviceScaleFactor: 1
        };
    }
    ;
    /**
     * This is a function that is used to initialize.
     *
     * @returns
     */
    Markup.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, puppeteer.launch({ headless: 'chrome', args: ['--no-sandbox', '--disable-setuid-sandbox'] })];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        return [2 /*return*/, { browser: browser, page: page }];
                }
            });
        });
    };
    ;
    /**
     * Rendering the html file throw ejs.
     *
     * @param path path to html file.
     * @param data variables for ejs.
     * @param options options for ejs.
     */
    Markup.prototype.renderFile = function (path, data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                ejs.renderFile(path, data !== null && data !== void 0 ? data : {}, options !== null && options !== void 0 ? options : {}, function (err, str) {
                    if (err)
                        throw err;
                    (0, fs_1.writeFileSync)(_this.html, str, 'utf-8');
                });
                return [2 /*return*/];
            });
        });
    };
    ;
    /**
     * Rendering the html string throw ejs.
     *
     * @param template html string.
     * @param data variables for ejs.
     * @param options options for ejs.
     */
    Markup.prototype.render = function (template, data, options) {
        return __awaiter(this, void 0, void 0, function () {
            var str;
            return __generator(this, function (_a) {
                str = ejs.render(template, data !== null && data !== void 0 ? data : {}, options !== null && options !== void 0 ? options : {});
                (0, fs_1.writeFileSync)(this.html, str, 'utf-8');
                return [2 /*return*/];
            });
        });
    };
    ;
    /**
     * Setting the viewport of the display resolution.
     *
     * @param width pixels wide.
     * @param height pixels high.
     * @param deviceScaleFactor your display device.
     */
    Markup.prototype.setViewport = function (width, height, deviceScaleFactor) {
        if (width === void 0) { width = 800; }
        if (height === void 0) { height = 600; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.view = {
                    width: width,
                    height: height,
                    deviceScaleFactor: deviceScaleFactor !== null && deviceScaleFactor !== void 0 ? deviceScaleFactor : 1
                };
                return [2 /*return*/];
            });
        });
    };
    ;
    /**
     * This is a function that is used to save the rendered html.
     *
     * @param savePath is a path to save your rendered img.
     * @param fullPage save fullpage.
     * @param transparent it removes the white background.
     */
    Markup.prototype.save = function (savePath, fullPage, transparent) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var _g, browser, page, buffer, buffer;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, this.initialize()];
                    case 1:
                        _g = _h.sent(), browser = _g.browser, page = _g.page;
                        return [4 /*yield*/, page.setViewport({
                                width: (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 800,
                                height: (_d = (_c = this.view) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 600,
                                deviceScaleFactor: (_f = (_e = this.view) === null || _e === void 0 ? void 0 : _e.deviceScaleFactor) !== null && _f !== void 0 ? _f : 1
                            })];
                    case 2:
                        _h.sent();
                        return [4 /*yield*/, page.goto("file:///".concat(this.html), { waitUntil: 'load', timeout: 0 })];
                    case 3:
                        _h.sent();
                        if (!(typeof savePath == 'string')) return [3 /*break*/, 6];
                        return [4 /*yield*/, page.screenshot({ path: savePath, omitBackground: transparent !== null && transparent !== void 0 ? transparent : false, fullPage: fullPage !== null && fullPage !== void 0 ? fullPage : false })];
                    case 4:
                        buffer = _h.sent();
                        return [4 /*yield*/, browser.close()];
                    case 5:
                        _h.sent();
                        return [2 /*return*/, buffer];
                    case 6: return [4 /*yield*/, page.screenshot({ omitBackground: transparent !== null && transparent !== void 0 ? transparent : false, fullPage: fullPage !== null && fullPage !== void 0 ? fullPage : false })];
                    case 7:
                        buffer = _h.sent();
                        return [4 /*yield*/, browser.close()];
                    case 8:
                        _h.sent();
                        return [2 /*return*/, buffer];
                    case 9:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * This is a function that is used to save region the rendered html.
     *
     * @param savePath is a path to save your rendered img.
     * @param options options for save region.
     * * `x` - from x position
     * * `y` - from y position
     * * `width` - pixels wide
     * * `height` - pixels high
     * @param transparent it removes the white background.
     */
    Markup.prototype.saveRegion = function (savePath, options, transparent) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var _g, browser, page, buffer, buffer;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, this.initialize()];
                    case 1:
                        _g = _h.sent(), browser = _g.browser, page = _g.page;
                        return [4 /*yield*/, page.setViewport({
                                width: (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 800,
                                height: (_d = (_c = this.view) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : 600,
                                deviceScaleFactor: (_f = (_e = this.view) === null || _e === void 0 ? void 0 : _e.deviceScaleFactor) !== null && _f !== void 0 ? _f : 1
                            })];
                    case 2:
                        _h.sent();
                        return [4 /*yield*/, page.goto("file:///".concat(this.html), { waitUntil: 'load', timeout: 0 })];
                    case 3:
                        _h.sent();
                        if (!(typeof savePath == 'string')) return [3 /*break*/, 6];
                        return [4 /*yield*/, page.screenshot({ path: savePath, omitBackground: transparent !== null && transparent !== void 0 ? transparent : false, clip: options })];
                    case 4:
                        buffer = _h.sent();
                        return [4 /*yield*/, browser.close()];
                    case 5:
                        _h.sent();
                        return [2 /*return*/, buffer];
                    case 6: return [4 /*yield*/, page.screenshot({ omitBackground: transparent !== null && transparent !== void 0 ? transparent : false, clip: options })];
                    case 7:
                        buffer = _h.sent();
                        return [4 /*yield*/, browser.close()];
                    case 8:
                        _h.sent();
                        return [2 /*return*/, buffer];
                    case 9:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return Markup;
}());
exports.Markup = Markup;
