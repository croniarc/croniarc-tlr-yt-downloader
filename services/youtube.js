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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YouTube = void 0;
var ytdl_core_1 = __importDefault(require("ytdl-core"));
var youtube_1 = require("../types/youtube");
var node_cache_1 = __importDefault(require("node-cache"));
var YouTube = /** @class */ (function () {
    function YouTube() {
    }
    YouTube.getVideoInfo = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var video, videoData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.cache.has(url)) {
                            return [2 /*return*/, this.cache.get(url)];
                        }
                        video = null;
                        videoData = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ytdl_core_1.default.getInfo(url.toString())];
                    case 2:
                        video = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 4:
                        // format info data
                        videoData.id = video.videoDetails.videoId;
                        videoData.url = video.videoDetails.video_url;
                        videoData.title = video.videoDetails.title;
                        videoData.author = video.videoDetails.author.name;
                        videoData.thumbnails = video.videoDetails.thumbnails.map(function (t) { return ({
                            url: t.url,
                            size: "".concat(t.width, "x").concat(t.height)
                        }); });
                        videoData.formats = video.formats.map(function (f) { return ({
                            type: f.hasVideo && f.hasAudio ? youtube_1.FormatType.main : f.hasVideo ? youtube_1.FormatType.video : youtube_1.FormatType.audio,
                            quality: f.qualityLabel,
                            container: f.container,
                            codecs: f.codecs,
                            url: f.url,
                            bitrate: f.bitrate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                        }); });
                        videoData.formats = videoData.formats.sort(function (a, b) { return a.type < b.type ? -1 : a.type > b.type ? 1 : 0; });
                        // Save to cache
                        if (!this.cache.has(url)) {
                            this.cache.set(url, videoData);
                        }
                        return [2 /*return*/, videoData];
                }
            });
        });
    };
    YouTube.cache = new node_cache_1.default({ stdTTL: 3600 });
    return YouTube;
}());
exports.YouTube = YouTube;
//# sourceMappingURL=youtube.js.map