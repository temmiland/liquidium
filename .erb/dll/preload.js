(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/custom-electron-titlebar/base/browser/browser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/browser/browser.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isEdgeWebView = exports.isIPad = exports.isWebkitWebView = exports.isSafari = exports.isChrome = exports.isWebKit = exports.isFirefox = exports.isOpera = exports.isEdgeOrIE = exports.isEdge = exports.isIE = exports.onDidChangeFullscreen = exports.isFullscreen = exports.setFullscreen = exports.getPixelRatio = exports.setZoomFactor = exports.getZoomFactor = exports.onDidChangeZoomLevel = exports.getTimeSinceLastZoomLevelChanged = exports.getZoomLevel = exports.setZoomLevel = void 0;
const event_1 = __webpack_require__(/*! ../common/event */ "./node_modules/custom-electron-titlebar/base/common/event.js");
class WindowManager {
  constructor() {
    this._zoomLevel = 0;
    this._lastZoomLevelChangeTime = 0;
    this._onDidChangeZoomLevel = new (_get__("event_1").Emitter)();
    this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    // --- Zoom Factor
    this._zoomFactor = 0;
    // --- Fullscreen
    this._fullscreen = false;
    this._onDidChangeFullscreen = new (_get__("event_1").Emitter)();
    this.onDidChangeFullscreen = this._onDidChangeFullscreen.event;
  }
  getZoomLevel() {
    return this._zoomLevel;
  }
  getTimeSinceLastZoomLevelChanged() {
    return Date.now() - this._lastZoomLevelChangeTime;
  }
  setZoomLevel(zoomLevel, isTrusted) {
    if (this._zoomLevel === zoomLevel) {
      return;
    }
    this._zoomLevel = zoomLevel;
    // See https://github.com/Microsoft/vscode/issues/26151
    this._lastZoomLevelChangeTime = isTrusted ? 0 : Date.now();
    this._onDidChangeZoomLevel.fire(this._zoomLevel);
  }
  getZoomFactor() {
    return this._zoomFactor;
  }
  setZoomFactor(zoomFactor) {
    this._zoomFactor = zoomFactor;
  }
  // --- Pixel Ratio
  getPixelRatio() {
    const ctx = document.createElement('canvas').getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    return dpr / bsr;
  }
  setFullscreen(fullscreen) {
    if (this._fullscreen === fullscreen) {
      return;
    }
    this._fullscreen = fullscreen;
    this._onDidChangeFullscreen.fire();
  }
  isFullscreen() {
    return this._fullscreen;
  }
}
_get__("WindowManager").INSTANCE = new (_get__("WindowManager"))();
/** A zoom index, e.g. 1, 2, 3 */
function setZoomLevel(zoomLevel, isTrusted) {
  _get__("WindowManager").INSTANCE.setZoomLevel(zoomLevel, isTrusted);
}
exports.setZoomLevel = _get__("setZoomLevel");
function getZoomLevel() {
  return _get__("WindowManager").INSTANCE.getZoomLevel();
}
exports.getZoomLevel = _get__("getZoomLevel");
/** Returns the time (in ms) since the zoom level was changed */
function getTimeSinceLastZoomLevelChanged() {
  return _get__("WindowManager").INSTANCE.getTimeSinceLastZoomLevelChanged();
}
exports.getTimeSinceLastZoomLevelChanged = _get__("getTimeSinceLastZoomLevelChanged");
function onDidChangeZoomLevel(callback) {
  return _get__("WindowManager").INSTANCE.onDidChangeZoomLevel(callback);
}
exports.onDidChangeZoomLevel = _get__("onDidChangeZoomLevel");
/** The zoom scale for an index, e.g. 1, 1.2, 1.4 */
function getZoomFactor() {
  return _get__("WindowManager").INSTANCE.getZoomFactor();
}
exports.getZoomFactor = _get__("getZoomFactor");
function setZoomFactor(zoomFactor) {
  _get__("WindowManager").INSTANCE.setZoomFactor(zoomFactor);
}
exports.setZoomFactor = _get__("setZoomFactor");
function getPixelRatio() {
  return _get__("WindowManager").INSTANCE.getPixelRatio();
}
exports.getPixelRatio = _get__("getPixelRatio");
function setFullscreen(fullscreen) {
  _get__("WindowManager").INSTANCE.setFullscreen(fullscreen);
}
exports.setFullscreen = _get__("setFullscreen");
function isFullscreen() {
  return _get__("WindowManager").INSTANCE.isFullscreen();
}
exports.isFullscreen = _get__("isFullscreen");
exports.onDidChangeFullscreen = _get__("WindowManager").INSTANCE.onDidChangeFullscreen;
const userAgent = navigator.userAgent;
exports.isIE = _get__("userAgent").indexOf('Trident') >= 0;
exports.isEdge = _get__("userAgent").indexOf('Edge/') >= 0;
exports.isEdgeOrIE = exports.isIE || exports.isEdge;
exports.isOpera = _get__("userAgent").indexOf('Opera') >= 0;
exports.isFirefox = _get__("userAgent").indexOf('Firefox') >= 0;
exports.isWebKit = _get__("userAgent").indexOf('AppleWebKit') >= 0;
exports.isChrome = _get__("userAgent").indexOf('Chrome') >= 0;
exports.isSafari = !exports.isChrome && _get__("userAgent").indexOf('Safari') >= 0;
exports.isWebkitWebView = !exports.isChrome && !exports.isSafari && exports.isWebKit;
exports.isIPad = _get__("userAgent").indexOf('iPad') >= 0;
exports.isEdgeWebView = exports.isEdge && _get__("userAgent").indexOf('WebView/') >= 0;
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "event_1":
      return event_1;
    case "WindowManager":
      return WindowManager;
    case "setZoomLevel":
      return setZoomLevel;
    case "getZoomLevel":
      return getZoomLevel;
    case "getTimeSinceLastZoomLevelChanged":
      return getTimeSinceLastZoomLevelChanged;
    case "onDidChangeZoomLevel":
      return onDidChangeZoomLevel;
    case "getZoomFactor":
      return getZoomFactor;
    case "setZoomFactor":
      return setZoomFactor;
    case "getPixelRatio":
      return getPixelRatio;
    case "setFullscreen":
      return setFullscreen;
    case "isFullscreen":
      return isFullscreen;
    case "userAgent":
      return userAgent;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/browser/event.js":
/*!*********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/browser/event.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.stop = exports.domEvent = void 0;
const event_1 = __webpack_require__(/*! ../common/event */ "./node_modules/custom-electron-titlebar/base/common/event.js");
const domEvent = (element, type, useCapture) => {
  const fn = e => emitter.fire(e);
  const emitter = new (_get__("event_1").Emitter)({
    onFirstListenerAdd: () => {
      element.addEventListener(type, fn, useCapture);
    },
    onLastListenerRemove: () => {
      element.removeEventListener(type, fn, useCapture);
    }
  });
  return emitter.event;
};
exports.domEvent = _get__("domEvent");
function stop(event) {
  return _get__("event_1").Event.map(event, e => {
    e.preventDefault();
    e.stopPropagation();
    return e;
  });
}
exports.stop = _get__("stop");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "event_1":
      return event_1;
    case "domEvent":
      return domEvent;
    case "stop":
      return stop;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/browser/keyboardEvent.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/browser/keyboardEvent.js ***!
  \*****************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _get__("__createBinding")(result, mod, k);
  _get__("__setModuleDefault")(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StandardKeyboardEvent = exports.getCodeForKeyCode = void 0;
const keyCodes_1 = __webpack_require__(/*! ../common/keyCodes */ "./node_modules/custom-electron-titlebar/base/common/keyCodes.js");
const platform = _get__("__importStar")(__webpack_require__(/*! ../common/platform */ "./node_modules/custom-electron-titlebar/base/common/platform.js"));
const KEY_CODE_MAP = new Array(230);
const INVERSE_KEY_CODE_MAP = new Array(112 /* KeyCode.MAX_VALUE */);
(function () {
  for (let i = 0; i < _get__("INVERSE_KEY_CODE_MAP").length; i++) {
    _get__("INVERSE_KEY_CODE_MAP")[i] = 0;
  }
  function define(code, keyCode) {
    _get__("KEY_CODE_MAP")[code] = keyCode;
    _get__("INVERSE_KEY_CODE_MAP")[keyCode] = code;
  }
  define(3, 7 /* KeyCode.PauseBreak */); // VK_CANCEL 0x03 Control-break processing
  define(8, 1 /* KeyCode.Backspace */);
  define(9, 2 /* KeyCode.Tab */);
  define(13, 3 /* KeyCode.Enter */);
  define(16, 4 /* KeyCode.Shift */);
  define(17, 5 /* KeyCode.Ctrl */);
  define(18, 6 /* KeyCode.Alt */);
  define(19, 7 /* KeyCode.PauseBreak */);
  define(20, 8 /* KeyCode.CapsLock */);
  define(27, 9 /* KeyCode.Escape */);
  define(32, 10 /* KeyCode.Space */);
  define(33, 11 /* KeyCode.PageUp */);
  define(34, 12 /* KeyCode.PageDown */);
  define(35, 13 /* KeyCode.End */);
  define(36, 14 /* KeyCode.Home */);
  define(37, 15 /* KeyCode.LeftArrow */);
  define(38, 16 /* KeyCode.UpArrow */);
  define(39, 17 /* KeyCode.RightArrow */);
  define(40, 18 /* KeyCode.DownArrow */);
  define(45, 19 /* KeyCode.Insert */);
  define(46, 20 /* KeyCode.Delete */);
  define(48, 21 /* KeyCode.KEY_0 */);
  define(49, 22 /* KeyCode.KEY_1 */);
  define(50, 23 /* KeyCode.KEY_2 */);
  define(51, 24 /* KeyCode.KEY_3 */);
  define(52, 25 /* KeyCode.KEY_4 */);
  define(53, 26 /* KeyCode.KEY_5 */);
  define(54, 27 /* KeyCode.KEY_6 */);
  define(55, 28 /* KeyCode.KEY_7 */);
  define(56, 29 /* KeyCode.KEY_8 */);
  define(57, 30 /* KeyCode.KEY_9 */);
  define(65, 31 /* KeyCode.KEY_A */);
  define(66, 32 /* KeyCode.KEY_B */);
  define(67, 33 /* KeyCode.KEY_C */);
  define(68, 34 /* KeyCode.KEY_D */);
  define(69, 35 /* KeyCode.KEY_E */);
  define(70, 36 /* KeyCode.KEY_F */);
  define(71, 37 /* KeyCode.KEY_G */);
  define(72, 38 /* KeyCode.KEY_H */);
  define(73, 39 /* KeyCode.KEY_I */);
  define(74, 40 /* KeyCode.KEY_J */);
  define(75, 41 /* KeyCode.KEY_K */);
  define(76, 42 /* KeyCode.KEY_L */);
  define(77, 43 /* KeyCode.KEY_M */);
  define(78, 44 /* KeyCode.KEY_N */);
  define(79, 45 /* KeyCode.KEY_O */);
  define(80, 46 /* KeyCode.KEY_P */);
  define(81, 47 /* KeyCode.KEY_Q */);
  define(82, 48 /* KeyCode.KEY_R */);
  define(83, 49 /* KeyCode.KEY_S */);
  define(84, 50 /* KeyCode.KEY_T */);
  define(85, 51 /* KeyCode.KEY_U */);
  define(86, 52 /* KeyCode.KEY_V */);
  define(87, 53 /* KeyCode.KEY_W */);
  define(88, 54 /* KeyCode.KEY_X */);
  define(89, 55 /* KeyCode.KEY_Y */);
  define(90, 56 /* KeyCode.KEY_Z */);
  define(93, 58 /* KeyCode.ContextMenu */);
  define(96, 93 /* KeyCode.NUMPAD_0 */);
  define(97, 94 /* KeyCode.NUMPAD_1 */);
  define(98, 95 /* KeyCode.NUMPAD_2 */);
  define(99, 96 /* KeyCode.NUMPAD_3 */);
  define(100, 97 /* KeyCode.NUMPAD_4 */);
  define(101, 98 /* KeyCode.NUMPAD_5 */);
  define(102, 99 /* KeyCode.NUMPAD_6 */);
  define(103, 100 /* KeyCode.NUMPAD_7 */);
  define(104, 101 /* KeyCode.NUMPAD_8 */);
  define(105, 102 /* KeyCode.NUMPAD_9 */);
  define(106, 103 /* KeyCode.NUMPAD_MULTIPLY */);
  define(107, 104 /* KeyCode.NUMPAD_ADD */);
  define(108, 105 /* KeyCode.NUMPAD_SEPARATOR */);
  define(109, 106 /* KeyCode.NUMPAD_SUBTRACT */);
  define(110, 107 /* KeyCode.NUMPAD_DECIMAL */);
  define(111, 108 /* KeyCode.NUMPAD_DIVIDE */);
  define(112, 59 /* KeyCode.F1 */);
  define(113, 60 /* KeyCode.F2 */);
  define(114, 61 /* KeyCode.F3 */);
  define(115, 62 /* KeyCode.F4 */);
  define(116, 63 /* KeyCode.F5 */);
  define(117, 64 /* KeyCode.F6 */);
  define(118, 65 /* KeyCode.F7 */);
  define(119, 66 /* KeyCode.F8 */);
  define(120, 67 /* KeyCode.F9 */);
  define(121, 68 /* KeyCode.F10 */);
  define(122, 69 /* KeyCode.F11 */);
  define(123, 70 /* KeyCode.F12 */);
  define(124, 71 /* KeyCode.F13 */);
  define(125, 72 /* KeyCode.F14 */);
  define(126, 73 /* KeyCode.F15 */);
  define(127, 74 /* KeyCode.F16 */);
  define(128, 75 /* KeyCode.F17 */);
  define(129, 76 /* KeyCode.F18 */);
  define(130, 77 /* KeyCode.F19 */);
  define(144, 78 /* KeyCode.NumLock */);
  define(145, 79 /* KeyCode.ScrollLock */);
  define(186, 80 /* KeyCode.US_SEMICOLON */);
  define(187, 81 /* KeyCode.US_EQUAL */);
  define(188, 82 /* KeyCode.US_COMMA */);
  define(189, 83 /* KeyCode.US_MINUS */);
  define(190, 84 /* KeyCode.US_DOT */);
  define(191, 85 /* KeyCode.US_SLASH */);
  define(192, 86 /* KeyCode.US_BACKTICK */);
  define(193, 110 /* KeyCode.ABNT_C1 */);
  define(194, 111 /* KeyCode.ABNT_C2 */);
  define(219, 87 /* KeyCode.US_OPEN_SQUARE_BRACKET */);
  define(220, 88 /* KeyCode.US_BACKSLASH */);
  define(221, 89 /* KeyCode.US_CLOSE_SQUARE_BRACKET */);
  define(222, 90 /* KeyCode.US_QUOTE */);
  define(223, 91 /* KeyCode.OEM_8 */);
  define(226, 92 /* KeyCode.OEM_102 */);
  /**
   * https://lists.w3.org/Archives/Public/www-dom/2010JulSep/att-0182/keyCode-spec.html
   * If an Input Method Editor is processing key input and the event is keydown, return 229.
   */
  define(229, 109 /* KeyCode.KEY_IN_COMPOSITION */);
  define(91, 57 /* KeyCode.Meta */);
  if (_get__("platform").isMacintosh) {
    // the two meta keys in the Mac have different key codes (91 and 93)
    define(93, 57 /* KeyCode.Meta */);
  } else {
    define(92, 57 /* KeyCode.Meta */);
  }
})();

function extractKeyCode(e) {
  if (e.charCode) {
    // "keypress" events mostly
    const char = String.fromCharCode(e.charCode).toUpperCase();
    return _get__("keyCodes_1").KeyCodeUtils.fromString(char);
  }
  return _get__("KEY_CODE_MAP")[e.keyCode] || 0 /* KeyCode.Unknown */;
}

function getCodeForKeyCode(keyCode) {
  return _get__("INVERSE_KEY_CODE_MAP")[keyCode];
}
exports.getCodeForKeyCode = _get__("getCodeForKeyCode");
const ctrlKeyMod = _get__("platform").isMacintosh ? 256 /* KeyMod.WinCtrl */ : 2048 /* KeyMod.CtrlCmd */;
const altKeyMod = 512 /* KeyMod.Alt */;
const shiftKeyMod = 1024 /* KeyMod.Shift */;
const metaKeyMod = _get__("platform").isMacintosh ? 2048 /* KeyMod.CtrlCmd */ : 256 /* KeyMod.WinCtrl */;
class StandardKeyboardEvent {
  constructor(source) {
    const e = source;
    this.browserEvent = e;
    this.target = e.target;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    this.keyCode = _get__("extractKeyCode")(e);
    this.code = e.code;
    // console.info(e.type + ": keyCode: " + e.keyCode + ", which: " + e.which + ", charCode: " + e.charCode + ", detail: " + e.detail + " ====> " + this.keyCode + ' -- ' + KeyCode[this.keyCode]);
    this.ctrlKey = this.ctrlKey || this.keyCode === 5 /* KeyCode.Ctrl */;
    this.altKey = this.altKey || this.keyCode === 6 /* KeyCode.Alt */;
    this.shiftKey = this.shiftKey || this.keyCode === 4 /* KeyCode.Shift */;
    this.metaKey = this.metaKey || this.keyCode === 57 /* KeyCode.Meta */;
    this._asKeybinding = this._computeKeybinding();
    this._asRuntimeKeybinding = this._computeRuntimeKeybinding();
  }
  preventDefault() {
    if (this.browserEvent && this.browserEvent.preventDefault) {
      this.browserEvent.preventDefault();
    }
  }
  stopPropagation() {
    if (this.browserEvent && this.browserEvent.stopPropagation) {
      this.browserEvent.stopPropagation();
    }
  }
  toKeybinding() {
    return this._asRuntimeKeybinding;
  }
  equals(other) {
    return this._asKeybinding === other;
  }
  _computeKeybinding() {
    let key = 0 /* KeyCode.Unknown */;
    if (this.keyCode !== 5 /* KeyCode.Ctrl */ && this.keyCode !== 4 /* KeyCode.Shift */ && this.keyCode !== 6 /* KeyCode.Alt */ && this.keyCode !== 57 /* KeyCode.Meta */) {
      key = this.keyCode;
    }
    let result = 0;
    if (this.ctrlKey) {
      result |= _get__("ctrlKeyMod");
    }
    if (this.altKey) {
      result |= _get__("altKeyMod");
    }
    if (this.shiftKey) {
      result |= _get__("shiftKeyMod");
    }
    if (this.metaKey) {
      result |= _get__("metaKeyMod");
    }
    result |= key;
    return result;
  }
  _computeRuntimeKeybinding() {
    let key = 0 /* KeyCode.Unknown */;
    if (this.keyCode !== 5 /* KeyCode.Ctrl */ && this.keyCode !== 4 /* KeyCode.Shift */ && this.keyCode !== 6 /* KeyCode.Alt */ && this.keyCode !== 57 /* KeyCode.Meta */) {
      key = this.keyCode;
    }
    return new (_get__("keyCodes_1").SimpleKeybinding)(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, key);
  }
}
exports.StandardKeyboardEvent = _get__("StandardKeyboardEvent");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "__createBinding":
      return __createBinding;
    case "__setModuleDefault":
      return __setModuleDefault;
    case "__importStar":
      return __importStar;
    case "INVERSE_KEY_CODE_MAP":
      return INVERSE_KEY_CODE_MAP;
    case "KEY_CODE_MAP":
      return KEY_CODE_MAP;
    case "platform":
      return platform;
    case "keyCodes_1":
      return keyCodes_1;
    case "getCodeForKeyCode":
      return getCodeForKeyCode;
    case "extractKeyCode":
      return extractKeyCode;
    case "ctrlKeyMod":
      return ctrlKeyMod;
    case "altKeyMod":
      return altKeyMod;
    case "shiftKeyMod":
      return shiftKeyMod;
    case "metaKeyMod":
      return metaKeyMod;
    case "StandardKeyboardEvent":
      return StandardKeyboardEvent;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/browser/mouseEvent.js":
/*!**************************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/browser/mouseEvent.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _get__("__createBinding")(result, mod, k);
  _get__("__setModuleDefault")(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StandardWheelEvent = exports.DragMouseEvent = exports.StandardMouseEvent = void 0;
const browser = _get__("__importStar")(__webpack_require__(/*! ../browser/browser */ "./node_modules/custom-electron-titlebar/base/browser/browser.js"));
const platform = _get__("__importStar")(__webpack_require__(/*! ../common/platform */ "./node_modules/custom-electron-titlebar/base/common/platform.js"));
class StandardMouseEvent {
  constructor(e) {
    this.timestamp = Date.now();
    this.browserEvent = e;
    this.leftButton = e.button === 0;
    this.middleButton = e.button === 1;
    this.rightButton = e.button === 2;
    this.target = e.target;
    this.detail = e.detail || 1;
    if (e.type === 'dblclick') {
      this.detail = 2;
    }
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
    this.altKey = e.altKey;
    this.metaKey = e.metaKey;
    if (typeof e.pageX === 'number') {
      this.posx = e.pageX;
      this.posy = e.pageY;
    } else {
      // Probably hit by MSGestureEvent
      this.posx = e.clientX + document.body.scrollLeft + document.documentElement?.scrollLeft;
      this.posy = e.clientY + document.body.scrollTop + document.documentElement?.scrollTop;
    }
  }
  preventDefault() {
    if (this.browserEvent.preventDefault) {
      this.browserEvent.preventDefault();
    }
  }
  stopPropagation() {
    if (this.browserEvent.stopPropagation) {
      this.browserEvent.stopPropagation();
    }
  }
}
exports.StandardMouseEvent = _get__("StandardMouseEvent");
class DragMouseEvent extends _get__("StandardMouseEvent") {
  constructor(e) {
    super(e);
    this.dataTransfer = e.dataTransfer;
  }
}
exports.DragMouseEvent = _get__("DragMouseEvent");
class StandardWheelEvent {
  constructor(e, deltaX = 0, deltaY = 0) {
    this.browserEvent = e || null;
    this.target = e ? e.target || e.targetNode || e.srcElement : null;
    this.deltaY = deltaY;
    this.deltaX = deltaX;
    if (e) {
      const e1 = e;
      const e2 = e;
      // vertical delta scroll
      if (typeof e1.wheelDeltaY !== 'undefined') {
        this.deltaY = e1.wheelDeltaY / 120;
      } else if (typeof e2.VERTICAL_AXIS !== 'undefined' && e2.axis === e2.VERTICAL_AXIS) {
        this.deltaY = -e2.detail / 3;
      }
      // horizontal delta scroll
      if (typeof e1.wheelDeltaX !== 'undefined') {
        if (_get__("browser").isSafari && _get__("platform").isWindows) {
          this.deltaX = -(e1.wheelDeltaX / 120);
        } else {
          this.deltaX = e1.wheelDeltaX / 120;
        }
      } else if (typeof e2.HORIZONTAL_AXIS !== 'undefined' && e2.axis === e2.HORIZONTAL_AXIS) {
        this.deltaX = -e.detail / 3;
      }
      // Assume a vertical scroll if nothing else worked
      if (this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta) {
        this.deltaY = e.wheelDelta / 120;
      }
    }
  }
  preventDefault() {
    if (this.browserEvent) {
      if (this.browserEvent.preventDefault) {
        this.browserEvent.preventDefault();
      }
    }
  }
  stopPropagation() {
    if (this.browserEvent) {
      if (this.browserEvent.stopPropagation) {
        this.browserEvent.stopPropagation();
      }
    }
  }
}
exports.StandardWheelEvent = _get__("StandardWheelEvent");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "__createBinding":
      return __createBinding;
    case "__setModuleDefault":
      return __setModuleDefault;
    case "__importStar":
      return __importStar;
    case "StandardMouseEvent":
      return StandardMouseEvent;
    case "DragMouseEvent":
      return DragMouseEvent;
    case "browser":
      return browser;
    case "platform":
      return platform;
    case "StandardWheelEvent":
      return StandardWheelEvent;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/browser/touch.js":
/*!*********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/browser/touch.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _get__("__createBinding")(result, mod, k);
  _get__("__setModuleDefault")(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Gesture = exports.EventType = void 0;
const DomUtils = _get__("__importStar")(__webpack_require__(/*! ../common/dom */ "./node_modules/custom-electron-titlebar/base/common/dom.js"));
const arrays = _get__("__importStar")(__webpack_require__(/*! ../common/arrays */ "./node_modules/custom-electron-titlebar/base/common/arrays.js"));
const lifecycle_1 = __webpack_require__(/*! ../common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const linkedList_1 = __webpack_require__(/*! ../common/linkedList */ "./node_modules/custom-electron-titlebar/base/common/linkedList.js");
var EventType;
(function (EventType) {
  EventType.Tap = '-monaco-gesturetap';
  EventType.Change = '-monaco-gesturechange';
  EventType.Start = '-monaco-gesturestart';
  EventType.End = '-monaco-gesturesend';
  EventType.Contextmenu = '-monaco-gesturecontextmenu';
})(_get__("EventType") || (exports.EventType = _assign__("EventType", {})));
class Gesture extends _get__("lifecycle_1").Disposable {
  constructor() {
    super();
    this.dispatched = false;
    this.targets = new (_get__("linkedList_1").LinkedList)();
    this.ignoreTargets = new (_get__("linkedList_1").LinkedList)();
    this.activeTouches = {};
    this.handle = null;
    this._lastSetTapCountTime = 0;
    this._register(_get__("DomUtils").addDisposableListener(document, 'touchstart', e => this.onTouchStart(e), {
      passive: false
    }));
    this._register(_get__("DomUtils").addDisposableListener(document, 'touchend', e => this.onTouchEnd(e)));
    this._register(_get__("DomUtils").addDisposableListener(document, 'touchmove', e => this.onTouchMove(e), {
      passive: false
    }));
  }
  static addTarget(element) {
    if (!_get__("Gesture").isTouchDevice()) {
      return _get__("lifecycle_1").Disposable.None;
    }
    if (!_get__("Gesture").INSTANCE) {
      _get__("Gesture").INSTANCE = new (_get__("Gesture"))();
    }
    const remove = _get__("Gesture").INSTANCE.targets.push(element);
    return (0, _get__("lifecycle_1").toDisposable)(remove);
  }
  static ignoreTarget(element) {
    if (!_get__("Gesture").isTouchDevice()) {
      return _get__("lifecycle_1").Disposable.None;
    }
    if (!_get__("Gesture").INSTANCE) {
      _get__("Gesture").INSTANCE = new (_get__("Gesture"))();
    }
    const remove = _get__("Gesture").INSTANCE.ignoreTargets.push(element);
    return (0, _get__("lifecycle_1").toDisposable)(remove);
  }
  static isTouchDevice() {
    // `'ontouchstart' in window` always evaluates to true with typescript's modern typings. This causes `window` to be
    // `never` later in `window.navigator`. That's why we need the explicit `window as Window` cast
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  dispose() {
    if (this.handle) {
      this.handle.dispose();
      this.handle = null;
    }
    super.dispose();
  }
  onTouchStart(e) {
    const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.
    if (this.handle) {
      this.handle.dispose();
      this.handle = null;
    }
    for (let i = 0, len = e.targetTouches.length; i < len; i++) {
      const touch = e.targetTouches.item(i);
      this.activeTouches[touch.identifier] = {
        id: touch.identifier,
        initialTarget: touch.target,
        initialTimeStamp: timestamp,
        initialPageX: touch.pageX,
        initialPageY: touch.pageY,
        rollingTimestamps: [timestamp],
        rollingPageX: [touch.pageX],
        rollingPageY: [touch.pageY]
      };
      const evt = this.newGestureEvent(_get__("EventType").Start, touch.target);
      evt.pageX = touch.pageX;
      evt.pageY = touch.pageY;
      this.dispatchEvent(evt);
    }
    if (this.dispatched) {
      e.preventDefault();
      e.stopPropagation();
      this.dispatched = false;
    }
  }
  onTouchEnd(e) {
    const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.
    const activeTouchCount = Object.keys(this.activeTouches).length;
    for (let i = 0, len = e.changedTouches.length; i < len; i++) {
      const touch = e.changedTouches.item(i);
      if (!this.activeTouches.hasOwnProperty(String(touch.identifier))) {
        console.warn('move of an UNKNOWN touch', touch);
        continue;
      }
      const data = this.activeTouches[touch.identifier],
        holdTime = Date.now() - data.initialTimeStamp;
      if (holdTime < _get__("Gesture").HOLD_DELAY && Math.abs(data.initialPageX - _get__("arrays").tail(data.rollingPageX)) < 30 && Math.abs(data.initialPageY - _get__("arrays").tail(data.rollingPageY)) < 30) {
        const evt = this.newGestureEvent(_get__("EventType").Tap, data.initialTarget);
        evt.pageX = _get__("arrays").tail(data.rollingPageX);
        evt.pageY = _get__("arrays").tail(data.rollingPageY);
        this.dispatchEvent(evt);
      } else if (holdTime >= _get__("Gesture").HOLD_DELAY && Math.abs(data.initialPageX - _get__("arrays").tail(data.rollingPageX)) < 30 && Math.abs(data.initialPageY - _get__("arrays").tail(data.rollingPageY)) < 30) {
        const evt = this.newGestureEvent(_get__("EventType").Contextmenu, data.initialTarget);
        evt.pageX = _get__("arrays").tail(data.rollingPageX);
        evt.pageY = _get__("arrays").tail(data.rollingPageY);
        this.dispatchEvent(evt);
      } else if (activeTouchCount === 1) {
        const finalX = _get__("arrays").tail(data.rollingPageX);
        const finalY = _get__("arrays").tail(data.rollingPageY);
        const deltaT = _get__("arrays").tail(data.rollingTimestamps) - data.rollingTimestamps[0];
        const deltaX = finalX - data.rollingPageX[0];
        const deltaY = finalY - data.rollingPageY[0];
      }
      this.dispatchEvent(this.newGestureEvent(_get__("EventType").End, data.initialTarget));
      // forget about this touch
      delete this.activeTouches[touch.identifier];
    }
    if (this.dispatched) {
      e.preventDefault();
      e.stopPropagation();
      this.dispatched = false;
    }
  }
  newGestureEvent(type, initialTarget) {
    const event = document.createEvent('CustomEvent');
    event.initEvent(type, false, true);
    event.initialTarget = initialTarget;
    event.tapCount = 0;
    return event;
  }
  dispatchEvent(event) {
    if (event.type === _get__("EventType").Tap) {
      const currentTime = new Date().getTime();
      let setTapCount = 0;
      if (currentTime - this._lastSetTapCountTime > _get__("Gesture").CLEAR_TAP_COUNT_TIME) {
        setTapCount = 1;
      } else {
        setTapCount = 2;
      }
      this._lastSetTapCountTime = currentTime;
      event.tapCount = setTapCount;
    } else if (event.type === _get__("EventType").Change || event.type === _get__("EventType").Contextmenu) {
      // tap is canceled by scrolling or context menu
      this._lastSetTapCountTime = 0;
    }
  }
  inertia(dispatchTo, t1, vX, dirX, x, vY, dirY, y) {
    this.handle = _get__("DomUtils").scheduleAtNextAnimationFrame(() => {
      const now = Date.now();
      // velocity: old speed + accel_over_time
      const deltaT = now - t1;
      let delta_pos_x = 0,
        delta_pos_y = 0;
      let stopped = true;
      vX += _get__("Gesture").SCROLL_FRICTION * deltaT;
      vY += _get__("Gesture").SCROLL_FRICTION * deltaT;
      if (vX > 0) {
        stopped = false;
        delta_pos_x = dirX * vX * deltaT;
      }
      if (vY > 0) {
        stopped = false;
        delta_pos_y = dirY * vY * deltaT;
      }
      // dispatch translation event
      const evt = this.newGestureEvent(_get__("EventType").Change);
      evt.translationX = delta_pos_x;
      evt.translationY = delta_pos_y;
      dispatchTo.forEach(d => d.dispatchEvent(evt));
      if (!stopped) {
        this.inertia(dispatchTo, now, vX, dirX, x + delta_pos_x, vY, dirY, y + delta_pos_y);
      }
    });
  }
  onTouchMove(e) {
    const timestamp = Date.now(); // use Date.now() because on FF e.timeStamp is not epoch based.
    for (let i = 0, len = e.changedTouches.length; i < len; i++) {
      const touch = e.changedTouches.item(i);
      if (!this.activeTouches.hasOwnProperty(String(touch.identifier))) {
        console.warn('end of an UNKNOWN touch', touch);
        continue;
      }
      const data = this.activeTouches[touch.identifier];
      const evt = this.newGestureEvent(_get__("EventType").Change, data.initialTarget);
      evt.translationX = touch.pageX - _get__("arrays").tail(data.rollingPageX);
      evt.translationY = touch.pageY - _get__("arrays").tail(data.rollingPageY);
      evt.pageX = touch.pageX;
      evt.pageY = touch.pageY;
      this.dispatchEvent(evt);
      // only keep a few data points, to average the final speed
      if (data.rollingPageX.length > 3) {
        data.rollingPageX.shift();
        data.rollingPageY.shift();
        data.rollingTimestamps.shift();
      }
      data.rollingPageX.push(touch.pageX);
      data.rollingPageY.push(touch.pageY);
      data.rollingTimestamps.push(timestamp);
    }
    if (this.dispatched) {
      e.preventDefault();
      e.stopPropagation();
      this.dispatched = false;
    }
  }
}
exports.Gesture = _get__("Gesture");
_get__("Gesture").SCROLL_FRICTION = -0.005;
_get__("Gesture").HOLD_DELAY = 700;
_get__("Gesture").CLEAR_TAP_COUNT_TIME = 400; // ms
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "__createBinding":
      return __createBinding;
    case "__setModuleDefault":
      return __setModuleDefault;
    case "__importStar":
      return __importStar;
    case "EventType":
      return EventType;
    case "linkedList_1":
      return linkedList_1;
    case "DomUtils":
      return DomUtils;
    case "Gesture":
      return Gesture;
    case "lifecycle_1":
      return lifecycle_1;
    case "arrays":
      return arrays;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "EventType":
      return EventType = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/arrays.js":
/*!*********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/arrays.js ***!
  \*********************************************************************/
/***/ ((module, exports) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.coalesce = exports.tail = void 0;
/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
function tail(array, n = 0) {
  return array[array.length - (1 + n)];
}
exports.tail = _get__("tail");
/**
 * @returns a new array with all falsy values removed. The original array IS NOT modified.
 */
function coalesce(array) {
  if (!array) {
    return array;
  }
  return array.filter(e => !!e);
}
exports.coalesce = _get__("coalesce");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "tail":
      return tail;
    case "coalesce":
      return coalesce;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/async.js":
/*!********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/async.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RunOnceScheduler = exports.TimeoutTimer = void 0;
const lifecycle_1 = __webpack_require__(/*! ../common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
class TimeoutTimer extends _get__("lifecycle_1").Disposable {
  constructor(runner, timeout) {
    super();
    this._token = -1;
    if (typeof runner === 'function' && typeof timeout === 'number') {
      this.setIfNotSet(runner, timeout);
    }
  }
  dispose() {
    this.cancel();
    super.dispose();
  }
  cancel() {
    if (this._token !== -1) {
      clearTimeout(this._token);
      this._token = -1;
    }
  }
  cancelAndSet(runner, timeout) {
    this.cancel();
    this._token = setTimeout(() => {
      this._token = -1;
      runner();
    }, timeout);
  }
  setIfNotSet(runner, timeout) {
    if (this._token !== -1) {
      // timer is already set
      return;
    }
    this._token = setTimeout(() => {
      this._token = -1;
      runner();
    }, timeout);
  }
}
exports.TimeoutTimer = _get__("TimeoutTimer");
class RunOnceScheduler {
  constructor(runner, timeout) {
    this.timeoutToken = -1;
    this.runner = runner;
    this.timeout = timeout;
    this.timeoutHandler = this.onTimeout.bind(this);
  }
  /**
   * Dispose RunOnceScheduler
   */
  dispose() {
    this.cancel();
    this.runner = null;
  }
  /**
   * Cancel current scheduled runner (if any).
   */
  cancel() {
    if (this.isScheduled()) {
      clearTimeout(this.timeoutToken);
      this.timeoutToken = -1;
    }
  }
  /**
   * Cancel previous runner (if any) & schedule a new runner.
   */
  schedule(delay = this.timeout) {
    this.cancel();
    this.timeoutToken = setTimeout(this.timeoutHandler, delay);
  }
  /**
   * Returns true if scheduled.
   */
  isScheduled() {
    return this.timeoutToken !== -1;
  }
  onTimeout() {
    this.timeoutToken = -1;
    if (this.runner) {
      this.doRun();
    }
  }
  doRun() {
    if (this.runner) {
      this.runner();
    }
  }
}
exports.RunOnceScheduler = _get__("RunOnceScheduler");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "lifecycle_1":
      return lifecycle_1;
    case "TimeoutTimer":
      return TimeoutTimer;
    case "RunOnceScheduler":
      return RunOnceScheduler;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/color.js":
/*!********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/color.js ***!
  \********************************************************************/
/***/ ((module, exports) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Color = exports.HSVA = exports.HSLA = exports.RGBA = void 0;
function roundFloat(number, decimalPoints) {
  const decimal = Math.pow(10, decimalPoints);
  return Math.round(number * decimal) / decimal;
}
class RGBA {
  constructor(r, g, b, a = 1) {
    this.r = Math.min(255, Math.max(0, r)) | 0;
    this.g = Math.min(255, Math.max(0, g)) | 0;
    this.b = Math.min(255, Math.max(0, b)) | 0;
    this.a = _get__("roundFloat")(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
  }
}
exports.RGBA = _get__("RGBA");
class HSLA {
  constructor(h, s, l, a) {
    this.h = Math.max(Math.min(360, h), 0) | 0;
    this.s = _get__("roundFloat")(Math.max(Math.min(1, s), 0), 3);
    this.l = _get__("roundFloat")(Math.max(Math.min(1, l), 0), 3);
    this.a = _get__("roundFloat")(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.h === b.h && a.s === b.s && a.l === b.l && a.a === b.a;
  }
  /**
   * Converts an RGB color value to HSL. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes r, g, and b are contained in the set [0, 255] and
   * returns h in the set [0, 360], s, and l in the set [0, 1].
   */
  static fromRGBA(rgba) {
    const r = rgba.r / 255;
    const g = rgba.g / 255;
    const b = rgba.b / 255;
    const a = rgba.a;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (min + max) / 2;
    const chroma = max - min;
    if (chroma > 0) {
      s = Math.min(l <= 0.5 ? chroma / (2 * l) : chroma / (2 - 2 * l), 1);
      switch (max) {
        case r:
          h = (g - b) / chroma + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / chroma + 2;
          break;
        case b:
          h = (r - g) / chroma + 4;
          break;
      }
      h *= 60;
      h = Math.round(h);
    }
    return new (_get__("HSLA"))(h, s, l, a);
  }
  static _hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h in the set [0, 360] s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   */
  static toRGBA(hsla) {
    const h = hsla.h / 360;
    const {
      s,
      l,
      a
    } = hsla;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = _get__("HSLA")._hue2rgb(p, q, h + 1 / 3);
      g = _get__("HSLA")._hue2rgb(p, q, h);
      b = _get__("HSLA")._hue2rgb(p, q, h - 1 / 3);
    }
    return new (_get__("RGBA"))(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a);
  }
}
exports.HSLA = _get__("HSLA");
class HSVA {
  constructor(h, s, v, a) {
    this.h = Math.max(Math.min(360, h), 0) | 0;
    this.s = _get__("roundFloat")(Math.max(Math.min(1, s), 0), 3);
    this.v = _get__("roundFloat")(Math.max(Math.min(1, v), 0), 3);
    this.a = _get__("roundFloat")(Math.max(Math.min(1, a), 0), 3);
  }
  static equals(a, b) {
    return a.h === b.h && a.s === b.s && a.v === b.v && a.a === b.a;
  }
  // from http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
  static fromRGBA(rgba) {
    const r = rgba.r / 255;
    const g = rgba.g / 255;
    const b = rgba.b / 255;
    const cmax = Math.max(r, g, b);
    const cmin = Math.min(r, g, b);
    const delta = cmax - cmin;
    const s = cmax === 0 ? 0 : delta / cmax;
    let m;
    if (delta === 0) {
      m = 0;
    } else if (cmax === r) {
      m = ((g - b) / delta % 6 + 6) % 6;
    } else if (cmax === g) {
      m = (b - r) / delta + 2;
    } else {
      m = (r - g) / delta + 4;
    }
    return new (_get__("HSVA"))(Math.round(m * 60), s, cmax, rgba.a);
  }
  // from http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
  static toRGBA(hsva) {
    const {
      h,
      s,
      v,
      a
    } = hsva;
    const c = v * s;
    const x = c * (1 - Math.abs(h / 60 % 2 - 1));
    const m = v - c;
    let [r, g, b] = [0, 0, 0];
    if (h < 60) {
      r = c;
      g = x;
    } else if (h < 120) {
      r = x;
      g = c;
    } else if (h < 180) {
      g = c;
      b = x;
    } else if (h < 240) {
      g = x;
      b = c;
    } else if (h < 300) {
      r = x;
      b = c;
    } else if (h < 360) {
      r = c;
      b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return new (_get__("RGBA"))(r, g, b, a);
  }
}
exports.HSVA = _get__("HSVA");
class Color {
  static fromHex(hex) {
    return _get__("Color").Format.CSS.parseHex(hex) || _get__("Color").RED;
  }
  get hsla() {
    if (this._hsla) {
      return this._hsla;
    } else {
      return _get__("HSLA").fromRGBA(this.rgba);
    }
  }
  get hsva() {
    if (this._hsva) {
      return this._hsva;
    }
    return _get__("HSVA").fromRGBA(this.rgba);
  }
  constructor(arg) {
    if (!arg) {
      throw new Error('Color needs a value');
    } else if (arg instanceof _get__("RGBA")) {
      this.rgba = arg;
    } else if (arg instanceof _get__("HSLA")) {
      this._hsla = arg;
      this.rgba = _get__("HSLA").toRGBA(arg);
    } else if (arg instanceof _get__("HSVA")) {
      this._hsva = arg;
      this.rgba = _get__("HSVA").toRGBA(arg);
    } else {
      throw new Error('Invalid color ctor argument');
    }
  }
  equals(other) {
    return !!other && _get__("RGBA").equals(this.rgba, other.rgba) && _get__("HSLA").equals(this.hsla, other.hsla) && _get__("HSVA").equals(this.hsva, other.hsva);
  }
  /**
   * http://www.w3.org/TR/WCAG20/#relativeluminancedef
   * Returns the number in the set [0, 1]. O => Darkest Black. 1 => Lightest white.
   */
  getRelativeLuminance() {
    const R = _get__("Color")._relativeLuminanceForComponent(this.rgba.r);
    const G = _get__("Color")._relativeLuminanceForComponent(this.rgba.g);
    const B = _get__("Color")._relativeLuminanceForComponent(this.rgba.b);
    const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
    return _get__("roundFloat")(luminance, 4);
  }
  static _relativeLuminanceForComponent(color) {
    const c = color / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  /**
   * http://www.w3.org/TR/WCAG20/#contrast-ratiodef
   * Returns the contrast ration number in the set [1, 21].
   */
  getContrastRatio(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
  }
  /**
   *	http://24ways.org/2010/calculating-color-contrast
   *  Return 'true' if darker color otherwise 'false'
   */
  isDarker() {
    const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1000;
    return yiq < 128;
  }
  /**
   *	http://24ways.org/2010/calculating-color-contrast
   *  Return 'true' if lighter color otherwise 'false'
   */
  isLighter() {
    const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1000;
    return yiq >= 128;
  }
  isLighterThan(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 > lum2;
  }
  isDarkerThan(another) {
    const lum1 = this.getRelativeLuminance();
    const lum2 = another.getRelativeLuminance();
    return lum1 < lum2;
  }
  lighten(factor) {
    return new (_get__("Color"))(new (_get__("HSLA"))(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * factor, this.hsla.a));
  }
  darken(factor) {
    return new (_get__("Color"))(new (_get__("HSLA"))(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * factor, this.hsla.a));
  }
  transparent(factor) {
    const {
      r,
      g,
      b,
      a
    } = this.rgba;
    return new (_get__("Color"))(new (_get__("RGBA"))(r, g, b, a * factor));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new (_get__("Color"))(new (_get__("RGBA"))(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(c) {
    const rgba = c.rgba;
    // Convert to 0..1 opacity
    const thisA = this.rgba.a;
    const colorA = rgba.a;
    const a = thisA + colorA * (1 - thisA);
    if (a < 1e-6) {
      return _get__("Color").TRANSPARENT;
    }
    const r = this.rgba.r * thisA / a + rgba.r * colorA * (1 - thisA) / a;
    const g = this.rgba.g * thisA / a + rgba.g * colorA * (1 - thisA) / a;
    const b = this.rgba.b * thisA / a + rgba.b * colorA * (1 - thisA) / a;
    return new (_get__("Color"))(new (_get__("RGBA"))(r, g, b, a));
  }
  flatten(...backgrounds) {
    const background = backgrounds.reduceRight((accumulator, color) => {
      return _get__("Color")._flatten(color, accumulator);
    });
    return _get__("Color")._flatten(this, background);
  }
  static _flatten(foreground, background) {
    const backgroundAlpha = 1 - foreground.rgba.a;
    return new (_get__("Color"))(new (_get__("RGBA"))(backgroundAlpha * background.rgba.r + foreground.rgba.a * foreground.rgba.r, backgroundAlpha * background.rgba.g + foreground.rgba.a * foreground.rgba.g, backgroundAlpha * background.rgba.b + foreground.rgba.a * foreground.rgba.b));
  }
  toString() {
    return '' + _get__("Color").Format.CSS.format(this);
  }
  static getLighterColor(of, relative, factor) {
    if (of.isLighterThan(relative)) {
      return of;
    }
    factor = factor || 0.5;
    const lum1 = of.getRelativeLuminance();
    const lum2 = relative.getRelativeLuminance();
    factor = factor * (lum2 - lum1) / lum2;
    return of.lighten(factor);
  }
  static getDarkerColor(of, relative, factor) {
    if (of.isDarkerThan(relative)) {
      return of;
    }
    factor = factor || 0.5;
    const lum1 = of.getRelativeLuminance();
    const lum2 = relative.getRelativeLuminance();
    factor = factor * (lum1 - lum2) / lum1;
    return of.darken(factor);
  }
}
exports.Color = _get__("Color");
_get__("Color").WHITE = new (_get__("Color"))(new (_get__("RGBA"))(255, 255, 255, 1));
_get__("Color").BLACK = new (_get__("Color"))(new (_get__("RGBA"))(0, 0, 0, 1));
_get__("Color").RED = new (_get__("Color"))(new (_get__("RGBA"))(255, 0, 0, 1));
_get__("Color").BLUE = new (_get__("Color"))(new (_get__("RGBA"))(0, 0, 255, 1));
_get__("Color").GREEN = new (_get__("Color"))(new (_get__("RGBA"))(0, 255, 0, 1));
_get__("Color").CYAN = new (_get__("Color"))(new (_get__("RGBA"))(0, 255, 255, 1));
_get__("Color").LIGHTGREY = new (_get__("Color"))(new (_get__("RGBA"))(211, 211, 211, 1));
_get__("Color").TRANSPARENT = new (_get__("Color"))(new (_get__("RGBA"))(0, 0, 0, 0));
(function (Color) {
  let Format;
  (function (Format) {
    let CSS;
    (function (CSS) {
      function formatRGB(color) {
        if (color.rgba.a === 1) {
          return `rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`;
        }
        return Color.Format.CSS.formatRGBA(color);
      }
      CSS.formatRGB = formatRGB;
      function formatRGBA(color) {
        return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${+color.rgba.a.toFixed(2)})`;
      }
      CSS.formatRGBA = formatRGBA;
      function formatHSL(color) {
        if (color.hsla.a === 1) {
          return `hsl(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%)`;
        }
        return Color.Format.CSS.formatHSLA(color);
      }
      CSS.formatHSL = formatHSL;
      function formatHSLA(color) {
        return `hsla(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%, ${color.hsla.a.toFixed(2)})`;
      }
      CSS.formatHSLA = formatHSLA;
      function _toTwoDigitHex(n) {
        const r = n.toString(16);
        return r.length !== 2 ? '0' + r : r;
      }
      /**
       * Formats the color as #RRGGBB
       */
      function formatHex(color) {
        return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}`;
      }
      CSS.formatHex = formatHex;
      /**
       * Formats the color as #RRGGBBAA
       * If 'compact' is set, colors without transparancy will be printed as #RRGGBB
       */
      function formatHexA(color, compact = false) {
        if (compact && color.rgba.a === 1) {
          return Color.Format.CSS.formatHex(color);
        }
        return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}${_toTwoDigitHex(Math.round(color.rgba.a * 255))}`;
      }
      CSS.formatHexA = formatHexA;
      /**
       * The default format will use HEX if opaque and RGBA otherwise.
       */
      function format(color) {
        if (!color) {
          return null;
        }
        if (color.isOpaque()) {
          return Color.Format.CSS.formatHex(color);
        }
        return Color.Format.CSS.formatRGBA(color);
      }
      CSS.format = format;
      /**
       * Converts an Hex color value to a Color.
       * returns r, g, and b are contained in the set [0, 255]
       * @param hex string (#RGB, #RGBA, #RRGGBB or #RRGGBBAA).
       */
      function parseHex(hex) {
        if (!hex) {
          // Invalid color
          return null;
        }
        const length = hex.length;
        if (length === 0) {
          // Invalid color
          return null;
        }
        if (hex.charCodeAt(0) !== 35 /* CharCode.Hash */) {
          // Does not begin with a #
          return null;
        }
        if (length === 7) {
          // #RRGGBB format
          const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
          const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
          const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
          return new Color(new (_get__("RGBA"))(r, g, b, 1));
        }
        if (length === 9) {
          // #RRGGBBAA format
          const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
          const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
          const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
          const a = 16 * _parseHexDigit(hex.charCodeAt(7)) + _parseHexDigit(hex.charCodeAt(8));
          return new Color(new (_get__("RGBA"))(r, g, b, a / 255));
        }
        if (length === 4) {
          // #RGB format
          const r = _parseHexDigit(hex.charCodeAt(1));
          const g = _parseHexDigit(hex.charCodeAt(2));
          const b = _parseHexDigit(hex.charCodeAt(3));
          return new Color(new (_get__("RGBA"))(16 * r + r, 16 * g + g, 16 * b + b));
        }
        if (length === 5) {
          // #RGBA format
          const r = _parseHexDigit(hex.charCodeAt(1));
          const g = _parseHexDigit(hex.charCodeAt(2));
          const b = _parseHexDigit(hex.charCodeAt(3));
          const a = _parseHexDigit(hex.charCodeAt(4));
          return new Color(new (_get__("RGBA"))(16 * r + r, 16 * g + g, 16 * b + b, (16 * a + a) / 255));
        }
        // Invalid color
        return null;
      }
      CSS.parseHex = parseHex;
      function _parseHexDigit(charCode) {
        switch (charCode) {
          case 48 /* CharCode.Digit0 */:
            return 0;
          case 49 /* CharCode.Digit1 */:
            return 1;
          case 50 /* CharCode.Digit2 */:
            return 2;
          case 51 /* CharCode.Digit3 */:
            return 3;
          case 52 /* CharCode.Digit4 */:
            return 4;
          case 53 /* CharCode.Digit5 */:
            return 5;
          case 54 /* CharCode.Digit6 */:
            return 6;
          case 55 /* CharCode.Digit7 */:
            return 7;
          case 56 /* CharCode.Digit8 */:
            return 8;
          case 57 /* CharCode.Digit9 */:
            return 9;
          case 97 /* CharCode.a */:
            return 10;
          case 65 /* CharCode.A */:
            return 10;
          case 98 /* CharCode.b */:
            return 11;
          case 66 /* CharCode.B */:
            return 11;
          case 99 /* CharCode.c */:
            return 12;
          case 67 /* CharCode.C */:
            return 12;
          case 100 /* CharCode.d */:
            return 13;
          case 68 /* CharCode.D */:
            return 13;
          case 101 /* CharCode.e */:
            return 14;
          case 69 /* CharCode.E */:
            return 14;
          case 102 /* CharCode.f */:
            return 15;
          case 70 /* CharCode.F */:
            return 15;
        }
        return 0;
      }
    })(CSS = Format.CSS || (Format.CSS = {}));
  })(Format = Color.Format || (Color.Format = {}));
})(_get__("Color") || (exports.Color = _assign__("Color", {})));
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "roundFloat":
      return roundFloat;
    case "RGBA":
      return RGBA;
    case "HSLA":
      return HSLA;
    case "HSVA":
      return HSVA;
    case "Color":
      return Color;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "Color":
      return Color = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/dom.js":
/*!******************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/dom.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _get__("__createBinding")(result, mod, k);
  _get__("__setModuleDefault")(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hide = exports.show = exports.join = exports.$ = exports.prepend = exports.append = exports.trackFocus = exports.restoreParentsScrollTop = exports.saveParentsScrollTop = exports.EventHelper = exports.EventType = exports.isHTMLElement = exports.removeCSSRulesContainingSelector = exports.createCSSRule = exports.createStyleSheet = exports.findParentWithClass = exports.isAncestor = exports.getLargestChildWidth = exports.getTotalHeight = exports.getContentHeight = exports.getTotalScrollWidth = exports.getContentWidth = exports.getTotalWidth = exports.StandardWindow = exports.getDomNodePagePosition = exports.position = exports.size = exports.getTopLeftOffset = exports.Dimension = exports.getDomNodeZoomLevel = exports.getClientArea = exports.getComputedStyle = exports.addDisposableThrottledListener = exports.modify = exports.measure = exports.scheduleAtNextAnimationFrame = exports.runAtThisOrScheduleAtNextAnimationFrame = exports.addDisposableNonBubblingMouseOutListener = exports.addStandardDisposableListener = exports.addDisposableListener = exports.toggleClass = exports.removeClasses = exports.removeClass = exports.addClasses = exports.addClass = exports.hasClass = exports.ModifierKeyEmitter = exports.isInDOM = exports.removeNode = exports.clearNode = void 0;
exports.animate = exports.windowOpenNoOpener = exports.computeScreenAwareSize = exports.domContentLoaded = exports.finalHandler = exports.getElementsByTagName = exports.removeTabIndexAndUpdateFocus = void 0;
const browser = _get__("__importStar")(__webpack_require__(/*! ../browser/browser */ "./node_modules/custom-electron-titlebar/base/browser/browser.js"));
const event_1 = __webpack_require__(/*! ../browser/event */ "./node_modules/custom-electron-titlebar/base/browser/event.js");
const keyboardEvent_1 = __webpack_require__(/*! ../browser/keyboardEvent */ "./node_modules/custom-electron-titlebar/base/browser/keyboardEvent.js");
const mouseEvent_1 = __webpack_require__(/*! ../browser/mouseEvent */ "./node_modules/custom-electron-titlebar/base/browser/mouseEvent.js");
const async_1 = __webpack_require__(/*! ../common/async */ "./node_modules/custom-electron-titlebar/base/common/async.js");
const event_2 = __webpack_require__(/*! ../common/event */ "./node_modules/custom-electron-titlebar/base/common/event.js");
const lifecycle_1 = __webpack_require__(/*! ../common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const platform = _get__("__importStar")(__webpack_require__(/*! ../common/platform */ "./node_modules/custom-electron-titlebar/base/common/platform.js"));
const arrays_1 = __webpack_require__(/*! ../common/arrays */ "./node_modules/custom-electron-titlebar/base/common/arrays.js");
function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
exports.clearNode = _get__("clearNode");
function removeNode(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
exports.removeNode = _get__("removeNode");
function isInDOM(node) {
  while (node) {
    if (node === document.body) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
exports.isInDOM = _get__("isInDOM");
class ModifierKeyEmitter extends _get__("event_2").Emitter {
  constructor() {
    super();
    this._keyStatus = {
      altKey: false,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    };
    _get__("addDisposableListener")(window, 'keydown', e => {
      if (e.defaultPrevented) {
        return;
      }
      const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
      // If Alt-key keydown event is repeated, ignore it #112347
      // Only known to be necessary for Alt-Key at the moment #115810
      if (event.keyCode === 6 /* KeyCode.Alt */ && e.repeat) {
        return;
      }
      if (e.altKey && !this._keyStatus.altKey) {
        this._keyStatus.lastKeyPressed = 'alt';
      } else if (e.ctrlKey && !this._keyStatus.ctrlKey) {
        this._keyStatus.lastKeyPressed = 'ctrl';
      } else if (e.metaKey && !this._keyStatus.metaKey) {
        this._keyStatus.lastKeyPressed = 'meta';
      } else if (e.shiftKey && !this._keyStatus.shiftKey) {
        this._keyStatus.lastKeyPressed = 'shift';
      } else if (event.keyCode !== 6 /* KeyCode.Alt */) {
        this._keyStatus.lastKeyPressed = undefined;
      } else {
        return;
      }
      this._keyStatus.altKey = e.altKey;
      this._keyStatus.ctrlKey = e.ctrlKey;
      this._keyStatus.metaKey = e.metaKey;
      this._keyStatus.shiftKey = e.shiftKey;
      if (this._keyStatus.lastKeyPressed) {
        this._keyStatus.event = e;
        this.fire(this._keyStatus);
      }
    }, true);
    _get__("addDisposableListener")(window, 'keyup', e => {
      if (e.defaultPrevented) {
        return;
      }
      if (!e.altKey && this._keyStatus.altKey) {
        this._keyStatus.lastKeyReleased = 'alt';
      } else if (!e.ctrlKey && this._keyStatus.ctrlKey) {
        this._keyStatus.lastKeyReleased = 'ctrl';
      } else if (!e.metaKey && this._keyStatus.metaKey) {
        this._keyStatus.lastKeyReleased = 'meta';
      } else if (!e.shiftKey && this._keyStatus.shiftKey) {
        this._keyStatus.lastKeyReleased = 'shift';
      } else {
        this._keyStatus.lastKeyReleased = undefined;
      }
      if (this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased) {
        this._keyStatus.lastKeyPressed = undefined;
      }
      this._keyStatus.altKey = e.altKey;
      this._keyStatus.ctrlKey = e.ctrlKey;
      this._keyStatus.metaKey = e.metaKey;
      this._keyStatus.shiftKey = e.shiftKey;
      if (this._keyStatus.lastKeyReleased) {
        this._keyStatus.event = e;
        this.fire(this._keyStatus);
      }
    }, true);
    _get__("addDisposableListener")(document.body, 'mousedown', () => {
      this._keyStatus.lastKeyPressed = undefined;
    }, true);
    _get__("addDisposableListener")(document.body, 'mouseup', () => {
      this._keyStatus.lastKeyPressed = undefined;
    }, true);
    _get__("addDisposableListener")(document.body, 'mousemove', e => {
      if (e.buttons) {
        this._keyStatus.lastKeyPressed = undefined;
      }
    }, true);
    _get__("addDisposableListener")(window, 'blur', () => {
      this.resetKeyStatus();
    });
  }
  get keyStatus() {
    return this._keyStatus;
  }
  get isModifierPressed() {
    return this._keyStatus.altKey || this._keyStatus.ctrlKey || this._keyStatus.metaKey || this._keyStatus.shiftKey;
  }
  /**
   * Allows to explicitly reset the key status based on more knowledge (#109062)
   */
  resetKeyStatus() {
    this.doResetKeyStatus();
    this.fire(this._keyStatus);
  }
  doResetKeyStatus() {
    this._keyStatus = {
      altKey: false,
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    };
  }
  static getInstance() {
    if (!_get__("ModifierKeyEmitter").instance) {
      _get__("ModifierKeyEmitter").instance = new (_get__("ModifierKeyEmitter"))();
    }
    return _get__("ModifierKeyEmitter").instance;
  }
  dispose() {
    super.dispose();
  }
}
exports.ModifierKeyEmitter = _get__("ModifierKeyEmitter");
const _manualClassList = new class {
  _findClassName(node, className) {
    const classes = node.className;
    if (!classes) {
      this._lastStart = -1;
      return;
    }
    className = className.trim();
    const classesLen = classes.length;
    const classLen = className.length;
    if (classLen === 0) {
      this._lastStart = -1;
      return;
    }
    if (classesLen < classLen) {
      this._lastStart = -1;
      return;
    }
    if (classes === className) {
      this._lastStart = 0;
      this._lastEnd = classesLen;
      return;
    }
    let idx = -1;
    let idxEnd;
    while ((idx = classes.indexOf(className, idx + 1)) >= 0) {
      idxEnd = idx + classLen;
      // a class that is followed by another class
      if ((idx === 0 || classes.charCodeAt(idx - 1) === 32 /* CharCode.Space */) && classes.charCodeAt(idxEnd) === 32 /* CharCode.Space */) {
        this._lastStart = idx;
        this._lastEnd = idxEnd + 1;
        return;
      }
      // last class
      if (idx > 0 && classes.charCodeAt(idx - 1) === 32 /* CharCode.Space */ && idxEnd === classesLen) {
        this._lastStart = idx - 1;
        this._lastEnd = idxEnd;
        return;
      }
      // equal - duplicate of cmp above
      if (idx === 0 && idxEnd === classesLen) {
        this._lastStart = 0;
        this._lastEnd = idxEnd;
        return;
      }
    }
    this._lastStart = -1;
  }
  hasClass(node, className) {
    this._findClassName(node, className);
    return this._lastStart !== -1;
  }
  addClasses(node, ...classNames) {
    classNames.forEach(nameValue => nameValue.split(' ').forEach(name => this.addClass(node, name)));
  }
  addClass(node, className) {
    if (!node.className) {
      // doesn't have it for sure
      node.className = className;
    } else {
      this._findClassName(node, className); // see if it's already there
      if (this._lastStart === -1) {
        node.className = node.className + ' ' + className;
      }
    }
  }
  removeClass(node, className) {
    this._findClassName(node, className);
    if (this._lastStart === -1) {
      // Prevent styles invalidation if not necessary
    } else {
      node.className = node.className.substring(0, this._lastStart) + node.className.substring(this._lastEnd || 0);
    }
  }
  removeClasses(node, ...classNames) {
    classNames.forEach(nameValue => nameValue.split(' ').forEach(name => this.removeClass(node, name)));
  }
  toggleClass(node, className, shouldHaveIt) {
    this._findClassName(node, className);
    if (this._lastStart !== -1 && (shouldHaveIt === undefined || !shouldHaveIt)) {
      this.removeClass(node, className);
    }
    if (this._lastStart === -1 && (shouldHaveIt === undefined || shouldHaveIt)) {
      this.addClass(node, className);
    }
  }
}();
const _nativeClassList = new class {
  hasClass(node, className) {
    return Boolean(className) && node.classList && node.classList.contains(className);
  }
  addClasses(node, ...classNames) {
    classNames.forEach(nameValue => nameValue.split(' ').forEach(name => this.addClass(node, name)));
  }
  addClass(node, className) {
    if (className && node.classList) {
      node.classList.add(className);
    }
  }
  removeClass(node, className) {
    if (className && node.classList) {
      node.classList.remove(className);
    }
  }
  removeClasses(node, ...classNames) {
    classNames.forEach(nameValue => nameValue.split(' ').forEach(name => this.removeClass(node, name)));
  }
  toggleClass(node, className, shouldHaveIt) {
    if (node.classList) {
      node.classList.toggle(className, shouldHaveIt);
    }
  }
}();
// In IE11 there is only partial support for `classList` which makes us keep our
// custom implementation. Otherwise use the native implementation, see: http://caniuse.com/#search=classlist
const _classList = _get__("browser").isIE ? _get__("_manualClassList") : _get__("_nativeClassList");
exports.hasClass = _get__("_classList").hasClass.bind(_get__("_classList"));
exports.addClass = _get__("_classList").addClass.bind(_get__("_classList"));
exports.addClasses = _get__("_classList").addClasses.bind(_get__("_classList"));
exports.removeClass = _get__("_classList").removeClass.bind(_get__("_classList"));
exports.removeClasses = _get__("_classList").removeClasses.bind(_get__("_classList"));
exports.toggleClass = _get__("_classList").toggleClass.bind(_get__("_classList"));
class DomListener {
  constructor(node, type, handler, options) {
    this._node = node;
    this._type = type;
    this._handler = handler;
    this._options = options || false;
    this._node.addEventListener(this._type, this._handler, this._options);
  }
  dispose() {
    if (!this._handler) {
      // Already disposed
      return;
    }
    this._node.removeEventListener(this._type, this._handler, this._options);
    // Prevent leakers from holding on to the dom or handler func
    this._node = null;
    this._handler = null;
  }
}
function addDisposableListener(node, type, handler, useCaptureOrOptions) {
  return new (_get__("DomListener"))(node, type, handler, useCaptureOrOptions);
}
exports.addDisposableListener = _get__("addDisposableListener");
function _wrapAsStandardMouseEvent(handler) {
  return function (e) {
    return handler(new (_get__("mouseEvent_1").StandardMouseEvent)(e));
  };
}
function _wrapAsStandardKeyboardEvent(handler) {
  return function (e) {
    return handler(new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e));
  };
}
const addStandardDisposableListener = function addStandardDisposableListener(node, type, handler, useCapture) {
  let wrapHandler = handler;
  if (type === 'click' || type === 'mousedown') {
    wrapHandler = _get__("_wrapAsStandardMouseEvent")(handler);
  } else if (type === 'keydown' || type === 'keypress' || type === 'keyup') {
    wrapHandler = _get__("_wrapAsStandardKeyboardEvent")(handler);
  }
  return _get__("addDisposableListener")(node, type, wrapHandler, useCapture);
};
exports.addStandardDisposableListener = _get__("addStandardDisposableListener");
function addDisposableNonBubblingMouseOutListener(node, handler) {
  return _get__("addDisposableListener")(node, 'mouseout', e => {
    // Mouse out bubbles, so this is an attempt to ignore faux mouse outs coming from children elements
    let toElement = e.relatedTarget || e.target;
    while (toElement && toElement !== node) {
      toElement = toElement.parentNode;
    }
    if (toElement === node) {
      return;
    }
    handler(e);
  });
}
exports.addDisposableNonBubblingMouseOutListener = _get__("addDisposableNonBubblingMouseOutListener");
let _animationFrame = null;
function doRequestAnimationFrame(callback) {
  if (!_get__("_animationFrame")) {
    const emulatedRequestAnimationFrame = callback => {
      return setTimeout(() => callback(new Date().getTime()), 0);
    };
    _assign__("_animationFrame", self.requestAnimationFrame || self.msRequestAnimationFrame || self.webkitRequestAnimationFrame || self.mozRequestAnimationFrame || self.oRequestAnimationFrame || emulatedRequestAnimationFrame);
  }
  return _get__("_animationFrame").call(self, callback);
}
class AnimationFrameQueueItem {
  constructor(runner, priority = 0) {
    this._runner = runner;
    this.priority = priority;
    this._canceled = false;
  }
  dispose() {
    this._canceled = true;
  }
  execute() {
    if (this._canceled) {
      return;
    }
    try {
      this._runner();
    } catch (e) {
      console.error(e);
    }
  }
  // Sort by priority (largest to lowest)
  static sort(a, b) {
    return b.priority - a.priority;
  }
}
(function () {
  /**
   * The runners scheduled at the next animation frame
   */
  let NEXT_QUEUE = [];
  /**
   * The runners scheduled at the current animation frame
   */
  let CURRENT_QUEUE = null;
  /**
   * A flag to keep track if the native requestAnimationFrame was already called
   */
  let animFrameRequested = false;
  /**
   * A flag to indicate if currently handling a native requestAnimationFrame callback
   */
  let inAnimationFrameRunner = false;
  const animationFrameRunner = () => {
    animFrameRequested = false;
    CURRENT_QUEUE = NEXT_QUEUE;
    NEXT_QUEUE = [];
    inAnimationFrameRunner = true;
    while (CURRENT_QUEUE.length > 0) {
      CURRENT_QUEUE.sort(_get__("AnimationFrameQueueItem").sort);
      const top = CURRENT_QUEUE.shift();
      top.execute();
    }
    inAnimationFrameRunner = false;
  };
  exports.scheduleAtNextAnimationFrame = (runner, priority = 0) => {
    const item = new (_get__("AnimationFrameQueueItem"))(runner, priority);
    NEXT_QUEUE.push(item);
    if (!animFrameRequested) {
      animFrameRequested = true;
      _get__("doRequestAnimationFrame")(animationFrameRunner);
    }
    return item;
  };
  exports.runAtThisOrScheduleAtNextAnimationFrame = (runner, priority) => {
    if (inAnimationFrameRunner) {
      const item = new (_get__("AnimationFrameQueueItem"))(runner, priority);
      CURRENT_QUEUE.push(item);
      return item;
    } else {
      return (0, exports.scheduleAtNextAnimationFrame)(runner, priority);
    }
  };
})();
function measure(callback) {
  return (0, exports.scheduleAtNextAnimationFrame)(callback, 10000 /* must be early */);
}

exports.measure = _get__("measure");
function modify(callback) {
  return (0, exports.scheduleAtNextAnimationFrame)(callback, -10000 /* must be late */);
}

exports.modify = _get__("modify");
const MINIMUM_TIME_MS = 16;
const DEFAULT_EVENT_MERGER = function (lastEvent, currentEvent) {
  return currentEvent;
};
class TimeoutThrottledDomListener extends _get__("lifecycle_1").Disposable {
  constructor(node, type, handler, eventMerger = _get__("DEFAULT_EVENT_MERGER"), minimumTimeMs = _get__("MINIMUM_TIME_MS")) {
    super();
    let lastEvent = null;
    let lastHandlerTime = 0;
    const timeout = this._register(new (_get__("async_1").TimeoutTimer)());
    const invokeHandler = () => {
      lastHandlerTime = new Date().getTime();
      handler(lastEvent);
      lastEvent = null;
    };
    this._register(_get__("addDisposableListener")(node, type, e => {
      lastEvent = eventMerger(lastEvent, e);
      const elapsedTime = new Date().getTime() - lastHandlerTime;
      if (elapsedTime >= minimumTimeMs) {
        timeout.cancel();
        invokeHandler();
      } else {
        timeout.setIfNotSet(invokeHandler, minimumTimeMs - elapsedTime);
      }
    }));
  }
}
function addDisposableThrottledListener(node, type, handler, eventMerger, minimumTimeMs) {
  return new (_get__("TimeoutThrottledDomListener"))(node, type, handler, eventMerger, minimumTimeMs);
}
exports.addDisposableThrottledListener = _get__("addDisposableThrottledListener");
function getComputedStyle(el) {
  return document.defaultView.getComputedStyle(el, null);
}
exports.getComputedStyle = _get__("getComputedStyle");
// Adapted from WinJS
// Converts a CSS positioning string for the specified element to pixels.
const convertToPixels = function () {
  return function (element, value) {
    return parseFloat(value) || 0;
  };
}();
function getDimension(element, cssPropertyName, jsPropertyName) {
  const computedStyle = _get__("getComputedStyle")(element);
  let value = '0';
  if (computedStyle) {
    if (computedStyle.getPropertyValue) {
      value = computedStyle.getPropertyValue(cssPropertyName);
    } else {
      // IE8
      value = computedStyle.getAttribute(jsPropertyName);
    }
  }
  return _get__("convertToPixels")(element, value);
}
function getClientArea(element) {
  // Try with DOM clientWidth / clientHeight
  if (element !== document.body) {
    return new (_get__("Dimension"))(element.clientWidth, element.clientHeight);
  }
  // Try innerWidth / innerHeight
  if (window.innerWidth && window.innerHeight) {
    return new (_get__("Dimension"))(window.innerWidth, window.innerHeight);
  }
  // Try with document.body.clientWidth / document.body.clientHeight
  if (document.body && document.body.clientWidth && document.body.clientHeight) {
    return new (_get__("Dimension"))(document.body.clientWidth, document.body.clientHeight);
  }
  // Try with document.documentElement.clientWidth / document.documentElement.clientHeight
  if (document.documentElement && document.documentElement.clientWidth && document.documentElement.clientHeight) {
    return new (_get__("Dimension"))(document.documentElement.clientWidth, document.documentElement.clientHeight);
  }
  throw new Error('Unable to figure out browser width and height');
}
exports.getClientArea = _get__("getClientArea");
/**
 * Returns the effective zoom on a given element before window zoom level is applied
 */
function getDomNodeZoomLevel(domNode) {
  let testElement = domNode;
  let zoom = 1.0;
  do {
    const elementZoomLevel = _get__("getComputedStyle")(testElement).zoom;
    if (elementZoomLevel !== null && elementZoomLevel !== undefined && elementZoomLevel !== '1') {
      zoom *= elementZoomLevel;
    }
    testElement = testElement.parentElement;
  } while (testElement !== null && testElement !== document.documentElement);
  return zoom;
}
exports.getDomNodeZoomLevel = _get__("getDomNodeZoomLevel");
const sizeUtils = {
  getBorderLeftWidth: function (element) {
    return _get__("getDimension")(element, 'border-left-width', 'borderLeftWidth');
  },
  getBorderRightWidth: function (element) {
    return _get__("getDimension")(element, 'border-right-width', 'borderRightWidth');
  },
  getBorderTopWidth: function (element) {
    return _get__("getDimension")(element, 'border-top-width', 'borderTopWidth');
  },
  getBorderBottomWidth: function (element) {
    return _get__("getDimension")(element, 'border-bottom-width', 'borderBottomWidth');
  },
  getPaddingLeft: function (element) {
    return _get__("getDimension")(element, 'padding-left', 'paddingLeft');
  },
  getPaddingRight: function (element) {
    return _get__("getDimension")(element, 'padding-right', 'paddingRight');
  },
  getPaddingTop: function (element) {
    return _get__("getDimension")(element, 'padding-top', 'paddingTop');
  },
  getPaddingBottom: function (element) {
    return _get__("getDimension")(element, 'padding-bottom', 'paddingBottom');
  },
  getMarginLeft: function (element) {
    return _get__("getDimension")(element, 'margin-left', 'marginLeft');
  },
  getMarginTop: function (element) {
    return _get__("getDimension")(element, 'margin-top', 'marginTop');
  },
  getMarginRight: function (element) {
    return _get__("getDimension")(element, 'margin-right', 'marginRight');
  },
  getMarginBottom: function (element) {
    return _get__("getDimension")(element, 'margin-bottom', 'marginBottom');
  },
  __commaSentinel: false
};
// ----------------------------------------------------------------------------------------
// Position & Dimension
class Dimension {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  static equals(a, b) {
    if (a === b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return a.width === b.width && a.height === b.height;
  }
}
exports.Dimension = _get__("Dimension");
function getTopLeftOffset(element) {
  // Adapted from WinJS.Utilities.getPosition
  // and added borders to the mix
  let offsetParent = element.offsetParent;
  let top = element.offsetTop;
  let left = element.offsetLeft;
  while ((element = element.parentNode) !== null && element !== document.body && element !== document.documentElement) {
    top -= element.scrollTop;
    const c = _get__("getComputedStyle")(element);
    if (c) {
      left -= c.direction !== 'rtl' ? element.scrollLeft : -element.scrollLeft;
    }
    if (element === offsetParent) {
      left += _get__("sizeUtils").getBorderLeftWidth(element);
      top += _get__("sizeUtils").getBorderTopWidth(element);
      top += element.offsetTop;
      left += element.offsetLeft;
      offsetParent = element.offsetParent;
    }
  }
  return {
    left,
    top
  };
}
exports.getTopLeftOffset = _get__("getTopLeftOffset");
function size(element, width, height) {
  if (typeof width === 'number') {
    element.style.width = `${width}px`;
  }
  if (typeof height === 'number') {
    element.style.height = `${height}px`;
  }
}
exports.size = _get__("size");
function position(element, top, right, bottom, left, position = 'absolute') {
  if (typeof top === 'number') {
    element.style.top = `${top}px`;
  }
  if (typeof right === 'number') {
    element.style.right = `${right}px`;
  }
  if (typeof bottom === 'number') {
    element.style.bottom = `${bottom}px`;
  }
  if (typeof left === 'number') {
    element.style.left = `${left}px`;
  }
  element.style.position = position;
}
exports.position = _get__("position");
/**
 * Returns the position of a dom node relative to the entire page.
 */
function getDomNodePagePosition(domNode) {
  const bb = domNode.getBoundingClientRect();
  return {
    left: bb.left + exports.StandardWindow.scrollX,
    top: bb.top + exports.StandardWindow.scrollY,
    width: bb.width,
    height: bb.height
  };
}
exports.getDomNodePagePosition = _get__("getDomNodePagePosition");
exports.StandardWindow = new class {
  get scrollX() {
    if (typeof window.scrollX === 'number') {
      // modern browsers
      return window.scrollX;
    } else {
      return document.body.scrollLeft + document.documentElement.scrollLeft;
    }
  }
  get scrollY() {
    if (typeof window.scrollY === 'number') {
      // modern browsers
      return window.scrollY;
    } else {
      return document.body.scrollTop + document.documentElement.scrollTop;
    }
  }
}();
// Adapted from WinJS
// Gets the width of the element, including margins.
function getTotalWidth(element) {
  const margin = _get__("sizeUtils").getMarginLeft(element) + _get__("sizeUtils").getMarginRight(element);
  return element.offsetWidth + margin;
}
exports.getTotalWidth = _get__("getTotalWidth");
function getContentWidth(element) {
  const border = _get__("sizeUtils").getBorderLeftWidth(element) + _get__("sizeUtils").getBorderRightWidth(element);
  const padding = _get__("sizeUtils").getPaddingLeft(element) + _get__("sizeUtils").getPaddingRight(element);
  return element.offsetWidth - border - padding;
}
exports.getContentWidth = _get__("getContentWidth");
function getTotalScrollWidth(element) {
  const margin = _get__("sizeUtils").getMarginLeft(element) + _get__("sizeUtils").getMarginRight(element);
  return element.scrollWidth + margin;
}
exports.getTotalScrollWidth = _get__("getTotalScrollWidth");
// Adapted from WinJS
// Gets the height of the content of the specified element. The content height does not include borders or padding.
function getContentHeight(element) {
  const border = _get__("sizeUtils").getBorderTopWidth(element) + _get__("sizeUtils").getBorderBottomWidth(element);
  const padding = _get__("sizeUtils").getPaddingTop(element) + _get__("sizeUtils").getPaddingBottom(element);
  return element.offsetHeight - border - padding;
}
exports.getContentHeight = _get__("getContentHeight");
// Adapted from WinJS
// Gets the height of the element, including its margins.
function getTotalHeight(element) {
  const margin = _get__("sizeUtils").getMarginTop(element) + _get__("sizeUtils").getMarginBottom(element);
  return element.offsetHeight + margin;
}
exports.getTotalHeight = _get__("getTotalHeight");
// Gets the left coordinate of the specified element relative to the specified parent.
function getRelativeLeft(element, parent) {
  if (element === null) {
    return 0;
  }
  const elementPosition = _get__("getTopLeftOffset")(element);
  const parentPosition = _get__("getTopLeftOffset")(parent);
  return elementPosition.left - parentPosition.left;
}
function getLargestChildWidth(parent, children) {
  const childWidths = children.map(child => {
    return Math.max(_get__("getTotalScrollWidth")(child), _get__("getTotalWidth")(child)) + _get__("getRelativeLeft")(child, parent) || 0;
  });
  const maxWidth = Math.max(...childWidths);
  return maxWidth;
}
exports.getLargestChildWidth = _get__("getLargestChildWidth");
// ----------------------------------------------------------------------------------------
function isAncestor(testChild, testAncestor) {
  while (testChild) {
    if (testChild === testAncestor) {
      return true;
    }
    testChild = testChild.parentNode;
  }
  return false;
}
exports.isAncestor = _get__("isAncestor");
function findParentWithClass(node, clazz, stopAtClazzOrNode) {
  while (node) {
    if ((0, exports.hasClass)(node, clazz)) {
      return node;
    }
    if (stopAtClazzOrNode) {
      if (typeof stopAtClazzOrNode === 'string') {
        if ((0, exports.hasClass)(node, stopAtClazzOrNode)) {
          return null;
        }
      } else {
        if (node === stopAtClazzOrNode) {
          return null;
        }
      }
    }
    node = node.parentNode;
  }
  return null;
}
exports.findParentWithClass = _get__("findParentWithClass");
function createStyleSheet(container = document.getElementsByTagName('head')[0]) {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.media = 'screen';
  container.appendChild(style);
  return style;
}
exports.createStyleSheet = _get__("createStyleSheet");
let _sharedStyleSheet = null;
function getSharedStyleSheet() {
  if (!_get__("_sharedStyleSheet")) {
    _assign__("_sharedStyleSheet", _get__("createStyleSheet")());
  }
  return _get__("_sharedStyleSheet");
}
function getDynamicStyleSheetRules(style) {
  if (style && style.sheet && style.sheet.rules) {
    // Chrome, IE
    return style.sheet.rules;
  }
  if (style && style.sheet && style.sheet.cssRules) {
    // FF
    return style.sheet.cssRules;
  }
  return [];
}
function createCSSRule(selector, cssText, style = _get__("getSharedStyleSheet")()) {
  if (!style || !cssText) {
    return;
  }
  style.sheet.insertRule(selector + '{' + cssText + '}', 0);
}
exports.createCSSRule = _get__("createCSSRule");
function removeCSSRulesContainingSelector(ruleName, style = _get__("getSharedStyleSheet")()) {
  if (!style) {
    return;
  }
  const rules = _get__("getDynamicStyleSheetRules")(style);
  const toDelete = [];
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (rule.selectorText.indexOf(ruleName) !== -1) {
      toDelete.push(i);
    }
  }
  for (let i = toDelete.length - 1; i >= 0; i--) {
    style.sheet.deleteRule(toDelete[i]);
  }
}
exports.removeCSSRulesContainingSelector = _get__("removeCSSRulesContainingSelector");
function isHTMLElement(o) {
  if (typeof HTMLElement === 'object') {
    return o instanceof HTMLElement;
  }
  return o && typeof o === 'object' && o.nodeType === 1 && typeof o.nodeName === 'string';
}
exports.isHTMLElement = _get__("isHTMLElement");
exports.EventType = {
  // Mouse
  CLICK: 'click',
  AUXCLICK: 'auxclick',
  DBLCLICK: 'dblclick',
  MOUSE_UP: 'mouseup',
  MOUSE_DOWN: 'mousedown',
  MOUSE_OVER: 'mouseover',
  MOUSE_MOVE: 'mousemove',
  MOUSE_OUT: 'mouseout',
  MOUSE_ENTER: 'mouseenter',
  MOUSE_LEAVE: 'mouseleave',
  MOUSE_WHEEL: 'wheel',
  POINTER_UP: 'pointerup',
  POINTER_DOWN: 'pointerdown',
  POINTER_MOVE: 'pointermove',
  POINTER_LEAVE: 'pointerleave',
  CONTEXT_MENU: 'contextmenu',
  WHEEL: 'wheel',
  // Keyboard
  KEY_DOWN: 'keydown',
  KEY_PRESS: 'keypress',
  KEY_UP: 'keyup',
  // HTML Document
  LOAD: 'load',
  BEFORE_UNLOAD: 'beforeunload',
  UNLOAD: 'unload',
  PAGE_SHOW: 'pageshow',
  PAGE_HIDE: 'pagehide',
  ABORT: 'abort',
  ERROR: 'error',
  RESIZE: 'resize',
  SCROLL: 'scroll',
  FULLSCREEN_CHANGE: 'fullscreenchange',
  WK_FULLSCREEN_CHANGE: 'webkitfullscreenchange',
  // Form
  SELECT: 'select',
  CHANGE: 'change',
  SUBMIT: 'submit',
  RESET: 'reset',
  FOCUS: 'focus',
  FOCUS_IN: 'focusin',
  FOCUS_OUT: 'focusout',
  BLUR: 'blur',
  INPUT: 'input',
  // Local Storage
  STORAGE: 'storage',
  // Drag
  DRAG_START: 'dragstart',
  DRAG: 'drag',
  DRAG_ENTER: 'dragenter',
  DRAG_LEAVE: 'dragleave',
  DRAG_OVER: 'dragover',
  DROP: 'drop',
  DRAG_END: 'dragend',
  // Animation
  ANIMATION_START: _get__("browser").isWebKit ? 'webkitAnimationStart' : 'animationstart',
  ANIMATION_END: _get__("browser").isWebKit ? 'webkitAnimationEnd' : 'animationend',
  ANIMATION_ITERATION: _get__("browser").isWebKit ? 'webkitAnimationIteration' : 'animationiteration'
};
exports.EventHelper = {
  stop: function (e, cancelBubble) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // IE8
      e.returnValue = false;
    }
    if (cancelBubble) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        // IE8
        e.cancelBubble = true;
      }
    }
  }
};
function saveParentsScrollTop(node) {
  const r = [];
  for (let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
    r[i] = node.scrollTop;
    node = node.parentNode;
  }
  return r;
}
exports.saveParentsScrollTop = _get__("saveParentsScrollTop");
function restoreParentsScrollTop(node, state) {
  for (let i = 0; node && node.nodeType === node.ELEMENT_NODE; i++) {
    if (node.scrollTop !== state[i]) {
      node.scrollTop = state[i];
    }
    node = node.parentNode;
  }
}
exports.restoreParentsScrollTop = _get__("restoreParentsScrollTop");
class FocusTracker {
  constructor(element) {
    this._onDidFocus = new (_get__("event_2").Emitter)();
    this.onDidFocus = this._onDidFocus.event;
    this._onDidBlur = new (_get__("event_2").Emitter)();
    this.onDidBlur = this._onDidBlur.event;
    this.disposables = [];
    let hasFocus = _get__("isAncestor")(document.activeElement, element);
    let loosingFocus = false;
    const onFocus = () => {
      loosingFocus = false;
      if (!hasFocus) {
        hasFocus = true;
        this._onDidFocus.fire();
      }
    };
    const onBlur = () => {
      if (hasFocus) {
        loosingFocus = true;
        window.setTimeout(() => {
          if (loosingFocus) {
            loosingFocus = false;
            hasFocus = false;
            this._onDidBlur.fire();
          }
        }, 0);
      }
    };
    (0, _get__("event_1").domEvent)(element, exports.EventType.FOCUS, true)(onFocus, null, this.disposables);
    (0, _get__("event_1").domEvent)(element, exports.EventType.BLUR, true)(onBlur, null, this.disposables);
  }
  dispose() {
    this.disposables = (0, _get__("lifecycle_1").dispose)(this.disposables);
    this._onDidFocus.dispose();
    this._onDidBlur.dispose();
  }
}
function trackFocus(element) {
  return new (_get__("FocusTracker"))(element);
}
exports.trackFocus = _get__("trackFocus");
function append(parent, ...children) {
  children.forEach(child => parent.appendChild(child));
  return children[children.length - 1];
}
exports.append = _get__("append");
function prepend(parent, child) {
  parent.insertBefore(child, parent.firstChild);
  return child;
}
exports.prepend = _get__("prepend");
const SELECTOR_REGEX = /([\w\\-]+)?(#([\w\\-]+))?((.([\w\\-]+))*)/;
function $(description, attrs, ...children) {
  const match = _get__("SELECTOR_REGEX").exec(description);
  if (!match) {
    throw new Error('Bad use of emmet');
  }
  const result = document.createElement(match[1] || 'div');
  if (match[3]) {
    result.id = match[3];
  }
  if (match[4]) {
    result.className = match[4].replace(/\./g, ' ').trim();
  }
  attrs = attrs || {};
  Object.keys(attrs).forEach(name => {
    const value = attrs[name];
    if (/^on\w+$/.test(name)) {
      result[name] = value;
    } else if (name === 'selected') {
      if (value) {
        result.setAttribute(name, 'true');
      }
    } else {
      result.setAttribute(name, value);
    }
  });
  (0, _get__("arrays_1").coalesce)(children).forEach(child => {
    if (child instanceof Node) {
      result.appendChild(child);
    } else {
      result.appendChild(document.createTextNode(child));
    }
  });
  return result;
}
exports.$ = _get__("$");
function join(nodes, separator) {
  const result = [];
  nodes.forEach((node, index) => {
    if (index > 0) {
      if (separator instanceof Node) {
        result.push(separator.cloneNode());
      } else {
        result.push(document.createTextNode(separator));
      }
    }
    result.push(node);
  });
  return result;
}
exports.join = _get__("join");
function show(...elements) {
  for (const element of elements) {
    if (element) {
      element.style.display = '';
      element.removeAttribute('aria-hidden');
    }
  }
}
exports.show = _get__("show");
function hide(...elements) {
  for (const element of elements) {
    if (element) {
      element.style.display = 'none';
      element.setAttribute('aria-hidden', 'true');
    }
  }
}
exports.hide = _get__("hide");
function findParentWithAttribute(node, attribute) {
  while (node) {
    if (node instanceof HTMLElement && node.hasAttribute(attribute)) {
      return node;
    }
    node = node.parentNode;
  }
  return null;
}
function removeTabIndexAndUpdateFocus(node) {
  if (!node || !node.hasAttribute('tabIndex')) {
    return;
  }
  // If we are the currently focused element and tabIndex is removed,
  // standard DOM behavior is to move focus to the <body> element. We
  // typically never want that, rather put focus to the closest element
  // in the hierarchy of the parent DOM nodes.
  if (document.activeElement === node) {
    const parentFocusable = _get__("findParentWithAttribute")(node.parentElement, 'tabIndex');
    if (parentFocusable) {
      parentFocusable.focus();
    }
  }
  node.removeAttribute('tabindex');
}
exports.removeTabIndexAndUpdateFocus = _get__("removeTabIndexAndUpdateFocus");
function getElementsByTagName(tag) {
  return Array.prototype.slice.call(document.getElementsByTagName(tag), 0);
}
exports.getElementsByTagName = _get__("getElementsByTagName");
function finalHandler(fn) {
  return e => {
    e.preventDefault();
    e.stopPropagation();
    fn(e);
  };
}
exports.finalHandler = _get__("finalHandler");
function domContentLoaded() {
  return new Promise(resolve => {
    const readyState = document.readyState;
    if (readyState === 'complete' || document && document.body !== null) {
      _get__("platform").setImmediate(resolve);
    } else {
      window.addEventListener('DOMContentLoaded', resolve, false);
    }
  });
}
exports.domContentLoaded = _get__("domContentLoaded");
/**
 * Find a value usable for a dom node size such that the likelihood that it would be
 * displayed with constant screen pixels size is as high as possible.
 *
 * e.g. We would desire for the cursors to be 2px (CSS px) wide. Under a devicePixelRatio
 * of 1.25, the cursor will be 2.5 screen pixels wide. Depending on how the dom node aligns/"snaps"
 * with the screen pixels, it will sometimes be rendered with 2 screen pixels, and sometimes with 3 screen pixels.
 */
function computeScreenAwareSize(cssPx) {
  const screenPx = window.devicePixelRatio * cssPx;
  return Math.max(1, Math.floor(screenPx)) / window.devicePixelRatio;
}
exports.computeScreenAwareSize = _get__("computeScreenAwareSize");
/**
 * See https://github.com/Microsoft/monaco-editor/issues/601
 * To protect against malicious code in the linked site, particularly phishing attempts,
 * the window.opener should be set to null to prevent the linked site from having access
 * to change the location of the current page.
 * See https://mathiasbynens.github.io/rel-noopener/
 */
function windowOpenNoOpener(url) {
  if (_get__("platform").isNative || _get__("browser").isEdgeWebView) {
    // In VSCode, window.open() always returns null...
    // The same is true for a WebView (see https://github.com/Microsoft/monaco-editor/issues/628)
    window.open(url);
  } else {
    const newTab = window.open();
    if (newTab) {
      newTab.opener = null;
      newTab.location.href = url;
    }
  }
}
exports.windowOpenNoOpener = _get__("windowOpenNoOpener");
function animate(fn) {
  const step = () => {
    fn();
    stepDisposable = (0, exports.scheduleAtNextAnimationFrame)(step);
  };
  let stepDisposable = (0, exports.scheduleAtNextAnimationFrame)(step);
  return (0, _get__("lifecycle_1").toDisposable)(() => stepDisposable.dispose());
}
exports.animate = _get__("animate");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "__createBinding":
      return __createBinding;
    case "__setModuleDefault":
      return __setModuleDefault;
    case "__importStar":
      return __importStar;
    case "clearNode":
      return clearNode;
    case "removeNode":
      return removeNode;
    case "isInDOM":
      return isInDOM;
    case "addDisposableListener":
      return addDisposableListener;
    case "keyboardEvent_1":
      return keyboardEvent_1;
    case "ModifierKeyEmitter":
      return ModifierKeyEmitter;
    case "event_2":
      return event_2;
    case "browser":
      return browser;
    case "_manualClassList":
      return _manualClassList;
    case "_nativeClassList":
      return _nativeClassList;
    case "_classList":
      return _classList;
    case "DomListener":
      return DomListener;
    case "mouseEvent_1":
      return mouseEvent_1;
    case "_wrapAsStandardMouseEvent":
      return _wrapAsStandardMouseEvent;
    case "_wrapAsStandardKeyboardEvent":
      return _wrapAsStandardKeyboardEvent;
    case "addStandardDisposableListener":
      return addStandardDisposableListener;
    case "addDisposableNonBubblingMouseOutListener":
      return addDisposableNonBubblingMouseOutListener;
    case "_animationFrame":
      return _animationFrame;
    case "AnimationFrameQueueItem":
      return AnimationFrameQueueItem;
    case "doRequestAnimationFrame":
      return doRequestAnimationFrame;
    case "measure":
      return measure;
    case "modify":
      return modify;
    case "DEFAULT_EVENT_MERGER":
      return DEFAULT_EVENT_MERGER;
    case "MINIMUM_TIME_MS":
      return MINIMUM_TIME_MS;
    case "async_1":
      return async_1;
    case "lifecycle_1":
      return lifecycle_1;
    case "TimeoutThrottledDomListener":
      return TimeoutThrottledDomListener;
    case "addDisposableThrottledListener":
      return addDisposableThrottledListener;
    case "getComputedStyle":
      return getComputedStyle;
    case "convertToPixels":
      return convertToPixels;
    case "Dimension":
      return Dimension;
    case "getClientArea":
      return getClientArea;
    case "getDomNodeZoomLevel":
      return getDomNodeZoomLevel;
    case "getDimension":
      return getDimension;
    case "sizeUtils":
      return sizeUtils;
    case "getTopLeftOffset":
      return getTopLeftOffset;
    case "size":
      return size;
    case "position":
      return position;
    case "getDomNodePagePosition":
      return getDomNodePagePosition;
    case "getTotalWidth":
      return getTotalWidth;
    case "getContentWidth":
      return getContentWidth;
    case "getTotalScrollWidth":
      return getTotalScrollWidth;
    case "getContentHeight":
      return getContentHeight;
    case "getTotalHeight":
      return getTotalHeight;
    case "getRelativeLeft":
      return getRelativeLeft;
    case "getLargestChildWidth":
      return getLargestChildWidth;
    case "isAncestor":
      return isAncestor;
    case "findParentWithClass":
      return findParentWithClass;
    case "createStyleSheet":
      return createStyleSheet;
    case "_sharedStyleSheet":
      return _sharedStyleSheet;
    case "getSharedStyleSheet":
      return getSharedStyleSheet;
    case "createCSSRule":
      return createCSSRule;
    case "getDynamicStyleSheetRules":
      return getDynamicStyleSheetRules;
    case "removeCSSRulesContainingSelector":
      return removeCSSRulesContainingSelector;
    case "isHTMLElement":
      return isHTMLElement;
    case "saveParentsScrollTop":
      return saveParentsScrollTop;
    case "restoreParentsScrollTop":
      return restoreParentsScrollTop;
    case "event_1":
      return event_1;
    case "FocusTracker":
      return FocusTracker;
    case "trackFocus":
      return trackFocus;
    case "append":
      return append;
    case "prepend":
      return prepend;
    case "SELECTOR_REGEX":
      return SELECTOR_REGEX;
    case "arrays_1":
      return arrays_1;
    case "$":
      return $;
    case "join":
      return join;
    case "show":
      return show;
    case "hide":
      return hide;
    case "findParentWithAttribute":
      return findParentWithAttribute;
    case "removeTabIndexAndUpdateFocus":
      return removeTabIndexAndUpdateFocus;
    case "getElementsByTagName":
      return getElementsByTagName;
    case "finalHandler":
      return finalHandler;
    case "platform":
      return platform;
    case "domContentLoaded":
      return domContentLoaded;
    case "computeScreenAwareSize":
      return computeScreenAwareSize;
    case "windowOpenNoOpener":
      return windowOpenNoOpener;
    case "animate":
      return animate;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "_animationFrame":
      return _animationFrame = _value;
    case "_sharedStyleSheet":
      return _sharedStyleSheet = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/event.js":
/*!********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/event.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Relay = exports.EventBufferer = exports.AsyncEmitter = exports.Emitter = exports.setGlobalLeakWarningThreshold = exports.Event = void 0;
const lifecycle_1 = __webpack_require__(/*! ../common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const linkedList_1 = __webpack_require__(/*! ../common/linkedList */ "./node_modules/custom-electron-titlebar/base/common/linkedList.js");
var Event;
(function (Event) {
  const _disposable = {
    dispose() {}
  };
  Event.None = function () {
    return _disposable;
  };
  /**
   * Given an event, returns another event which only fires once.
   */
  function once(event) {
    return (listener, thisArgs = null, disposables) => {
      // we need this, in case the event fires during the listener call
      let didFire = false;
      const result = event(e => {
        if (didFire) {
          return;
        } else if (result) {
          result.dispose();
        } else {
          didFire = true;
        }
        return listener.call(thisArgs, e);
      }, null, disposables);
      if (didFire) {
        result.dispose();
      }
      return result;
    };
  }
  Event.once = once;
  /**
   * Given an event and a `map` function, returns another event which maps each element
   * throught the mapping function.
   */
  function map(event, map) {
    return (listener, thisArgs = null, disposables) => event(i => listener.call(thisArgs, map(i)), null, disposables);
  }
  Event.map = map;
  /**
   * Given an event and an `each` function, returns another identical event and calls
   * the `each` function per each element.
   */
  function forEach(event, each) {
    return (listener, thisArgs = null, disposables) => event(i => {
      each(i);
      listener.call(thisArgs, i);
    }, null, disposables);
  }
  Event.forEach = forEach;
  function filter(event, filter) {
    return (listener, thisArgs = null, disposables) => event(e => filter(e) && listener.call(thisArgs, e), null, disposables);
  }
  Event.filter = filter;
  /**
   * Given an event, returns the same event but typed as `Event<void>`.
   */
  function signal(event) {
    return event;
  }
  Event.signal = signal;
  /**
   * Given a collection of events, returns a single event which emits
   * whenever any of the provided events emit.
   */
  function any(...events) {
    return (listener, thisArgs = null, disposables) => (0, _get__("lifecycle_1").combinedDisposable)(events.map(event => event(e => listener.call(thisArgs, e), null, disposables)));
  }
  Event.any = any;
  /**
   * Given an event and a `merge` function, returns another event which maps each element
   * and the cummulative result throught the `merge` function. Similar to `map`, but with memory.
   */
  function reduce(event, merge, initial) {
    let output = initial;
    return map(event, e => {
      output = merge(output, e);
      return output;
    });
  }
  Event.reduce = reduce;
  function debounce(event, merge, delay = 100, leading = false, leakWarningThreshold) {
    let subscription;
    let output;
    let handle;
    let numDebouncedCalls = 0;
    const emitter = new (_get__("Emitter"))({
      leakWarningThreshold,
      onFirstListenerAdd() {
        subscription = event(cur => {
          numDebouncedCalls++;
          output = merge(output, cur);
          if (leading && !handle) {
            emitter.fire(output);
          }
          clearTimeout(handle);
          handle = setTimeout(() => {
            const _output = output;
            output = undefined;
            handle = undefined;
            if (!leading || numDebouncedCalls > 1) {
              emitter.fire(_output);
            }
            numDebouncedCalls = 0;
          }, delay);
        });
      },
      onLastListenerRemove() {
        subscription.dispose();
      }
    });
    return emitter.event;
  }
  Event.debounce = debounce;
  /**
   * Given an event, it returns another event which fires only once and as soon as
   * the input event emits. The event data is the number of millis it took for the
   * event to fire.
   */
  function stopwatch(event) {
    const start = new Date().getTime();
    return map(once(event), _ => new Date().getTime() - start);
  }
  Event.stopwatch = stopwatch;
  /**
   * Given an event, it returns another event which fires only when the event
   * element changes.
   */
  function latch(event) {
    let firstCall = true;
    let cache;
    return filter(event, value => {
      const shouldEmit = firstCall || value !== cache;
      firstCall = false;
      cache = value;
      return shouldEmit;
    });
  }
  Event.latch = latch;
  /**
   * Buffers the provided event until a first listener comes
   * along, at which point fire all the events at once and
   * pipe the event from then on.
   *
   * ```typescript
   * const emitter = new Emitter<number>();
   * const event = emitter.event;
   * const bufferedEvent = buffer(event);
   *
   * emitter.fire(1);
   * emitter.fire(2);
   * emitter.fire(3);
   * // nothing...
   *
   * const listener = bufferedEvent(num => console.log(num));
   * // 1, 2, 3
   *
   * emitter.fire(4);
   * // 4
   * ```
   */
  function buffer(event, nextTick = false, _buffer = []) {
    let buffer = _buffer.slice();
    let listener = event(e => {
      if (buffer) {
        buffer.push(e);
      } else {
        emitter.fire(e);
      }
    });
    const flush = () => {
      if (buffer) {
        buffer.forEach(e => emitter.fire(e));
      }
      buffer = null;
    };
    const emitter = new (_get__("Emitter"))({
      onFirstListenerAdd() {
        if (!listener) {
          listener = event(e => emitter.fire(e));
        }
      },
      onFirstListenerDidAdd() {
        if (buffer) {
          if (nextTick) {
            setTimeout(flush);
          } else {
            flush();
          }
        }
      },
      onLastListenerRemove() {
        if (listener) {
          listener.dispose();
        }
        listener = null;
      }
    });
    return emitter.event;
  }
  Event.buffer = buffer;
  /**
   * Similar to `buffer` but it buffers indefinitely and repeats
   * the buffered events to every new listener.
   */
  function echo(event, nextTick = false, buffer = []) {
    buffer = buffer.slice();
    event(e => {
      buffer.push(e);
      emitter.fire(e);
    });
    const flush = (listener, thisArgs) => buffer.forEach(e => listener.call(thisArgs, e));
    const emitter = new (_get__("Emitter"))({
      onListenerDidAdd(emitter, listener, thisArgs) {
        if (nextTick) {
          setTimeout(() => flush(listener, thisArgs));
        } else {
          flush(listener, thisArgs);
        }
      }
    });
    return emitter.event;
  }
  Event.echo = echo;
  class ChainableEvent {
    get event() {
      return this._event;
    }
    constructor(_event) {
      this._event = _event;
    }
    map(fn) {
      return new ChainableEvent(map(this._event, fn));
    }
    forEach(fn) {
      return new ChainableEvent(forEach(this._event, fn));
    }
    filter(fn) {
      return new ChainableEvent(filter(this._event, fn));
    }
    reduce(merge, initial) {
      return new ChainableEvent(reduce(this._event, merge, initial));
    }
    latch() {
      return new ChainableEvent(latch(this._event));
    }
    on(listener, thisArgs, disposables) {
      return this._event(listener, thisArgs, disposables);
    }
    once(listener, thisArgs, disposables) {
      return once(this._event)(listener, thisArgs, disposables);
    }
  }
  function chain(event) {
    return new ChainableEvent(event);
  }
  Event.chain = chain;
  function fromNodeEventEmitter(emitter, eventName, map = id => id) {
    const fn = (...args) => result.fire(map(...args));
    const onFirstListenerAdd = () => emitter.on(eventName, fn);
    const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
    const result = new (_get__("Emitter"))({
      onFirstListenerAdd,
      onLastListenerRemove
    });
    return result.event;
  }
  Event.fromNodeEventEmitter = fromNodeEventEmitter;
  function fromPromise(promise) {
    const emitter = new (_get__("Emitter"))();
    let shouldEmit = false;
    promise.then(undefined, () => null).then(() => {
      if (!shouldEmit) {
        setTimeout(() => emitter.fire(undefined), 0);
      } else {
        emitter.fire(undefined);
      }
    });
    shouldEmit = true;
    return emitter.event;
  }
  Event.fromPromise = fromPromise;
  function toPromise(event) {
    // eslint-disable-next-line promise/param-names
    return new Promise(c => once(event)(c));
  }
  Event.toPromise = toPromise;
})(_get__("Event") || (exports.Event = _assign__("Event", {})));
let _globalLeakWarningThreshold = -1;
function setGlobalLeakWarningThreshold(n) {
  const oldValue = _get__("_globalLeakWarningThreshold");
  _assign__("_globalLeakWarningThreshold", n);
  return {
    dispose() {
      _assign__("_globalLeakWarningThreshold", oldValue);
    }
  };
}
exports.setGlobalLeakWarningThreshold = _get__("setGlobalLeakWarningThreshold");
class LeakageMonitor {
  constructor(customThreshold, name = Math.random().toString(18).slice(2, 5)) {
    this.customThreshold = customThreshold;
    this.name = name;
    this._warnCountdown = 0;
  }
  dispose() {
    if (this._stacks) {
      this._stacks.clear();
    }
  }
  check(listenerCount) {
    let threshold = _get__("_globalLeakWarningThreshold");
    if (typeof this.customThreshold === 'number') {
      threshold = this.customThreshold;
    }
    if (threshold <= 0 || listenerCount < threshold) {
      return undefined;
    }
    if (!this._stacks) {
      this._stacks = new Map();
    }
    const stack = new Error().stack.split('\n').slice(3).join('\n');
    const count = this._stacks.get(stack) || 0;
    this._stacks.set(stack, count + 1);
    this._warnCountdown -= 1;
    if (this._warnCountdown <= 0) {
      // only warn on first exceed and then every time the limit
      // is exceeded by 50% again
      this._warnCountdown = threshold * 0.5;
      // find most frequent listener and print warning
      let topStack;
      let topCount = 0;
      this._stacks.forEach((count, stack) => {
        if (!topStack || topCount < count) {
          topStack = stack;
          topCount = count;
        }
      });
      console.warn(`[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`);
      console.warn(topStack);
    }
    return () => {
      const count = this._stacks.get(stack) || 0;
      this._stacks.set(stack, count - 1);
    };
  }
}
/**
 * The Emitter can be used to expose an Event to the public
 * to fire it from the insides.
 * Sample:
    class Document {

        private _onDidChange = new Emitter<(value:string)=>any>();

        public onDidChange = this._onDidChange.event;

        // getter-style
        // get onDidChange(): Event<(value:string)=>any> {
        // 	return this._onDidChange.event;
        // }

        private _doIt() {
            //...
            this._onDidChange.fire(value);
        }
    }
 */
class Emitter {
  constructor(options) {
    this._disposed = false;
    this._options = options;
    this._leakageMon = _get__("_globalLeakWarningThreshold") > 0 ? new (_get__("LeakageMonitor"))(this._options && this._options.leakWarningThreshold) : undefined;
  }
  /**
   * For the public to allow to subscribe
   * to events from this Emitter
   */
  get event() {
    if (!this._event) {
      this._event = (listener, thisArgs, disposables) => {
        if (!this._listeners) {
          this._listeners = new (_get__("linkedList_1").LinkedList)();
        }
        const firstListener = this._listeners.isEmpty();
        if (firstListener && this._options && this._options.onFirstListenerAdd) {
          this._options.onFirstListenerAdd(this);
        }
        const remove = this._listeners.push(!thisArgs ? listener : [listener, thisArgs]);
        if (firstListener && this._options && this._options.onFirstListenerDidAdd) {
          this._options.onFirstListenerDidAdd(this);
        }
        if (this._options && this._options.onListenerDidAdd) {
          this._options.onListenerDidAdd(this, listener, thisArgs);
        }
        // check and record this emitter for potential leakage
        let removeMonitor;
        if (this._leakageMon) {
          removeMonitor = this._leakageMon.check(this._listeners.size);
        }
        const result = {
          dispose: () => {
            if (removeMonitor) {
              removeMonitor();
            }
            result.dispose = _get__("Emitter")._noop;
            if (!this._disposed) {
              remove();
              if (this._options && this._options.onLastListenerRemove) {
                const hasListeners = this._listeners && !this._listeners.isEmpty();
                if (!hasListeners) {
                  this._options.onLastListenerRemove(this);
                }
              }
            }
          }
        };
        if (Array.isArray(disposables)) {
          disposables.push(result);
        }
        return result;
      };
    }
    return this._event;
  }
  /**
   * To be kept private to fire an event to
   * subscribers
   */
  fire(event) {
    if (this._listeners) {
      // put all [listener,event]-pairs into delivery queue
      // then emit all event. an inner/nested event might be
      // the driver of this
      if (!this._deliveryQueue) {
        this._deliveryQueue = [];
      }
      for (let iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
        this._deliveryQueue.push([e.value, event]);
      }
      while (this._deliveryQueue.length > 0) {
        const [listener, event] = this._deliveryQueue.shift();
        try {
          if (typeof listener === 'function') {
            // eslint-disable-next-line no-useless-call
            listener.call(undefined, event);
          } else {
            listener[0].call(listener[1], event);
          }
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
  dispose() {
    if (this._listeners) {
      this._listeners = undefined;
    }
    if (this._deliveryQueue) {
      this._deliveryQueue.length = 0;
    }
    if (this._leakageMon) {
      this._leakageMon.dispose();
    }
    this._disposed = true;
  }
}
exports.Emitter = _get__("Emitter");
_get__("Emitter")._noop = function () {};
class AsyncEmitter extends _get__("Emitter") {
  async fireAsync(eventFn) {
    if (!this._listeners) {
      return;
    }
    // put all [listener,event]-pairs into delivery queue
    // then emit all event. an inner/nested event might be
    // the driver of this
    if (!this._asyncDeliveryQueue) {
      this._asyncDeliveryQueue = [];
    }
    for (let iter = this._listeners.iterator(), e = iter.next(); !e.done; e = iter.next()) {
      const thenables = [];
      this._asyncDeliveryQueue.push([e.value, eventFn(thenables, typeof e.value === 'function' ? e.value : e.value[0]), thenables]);
    }
    while (this._asyncDeliveryQueue.length > 0) {
      const [listener, event, thenables] = this._asyncDeliveryQueue.shift();
      try {
        if (typeof listener === 'function') {
          // eslint-disable-next-line no-useless-call
          listener.call(undefined, event);
        } else {
          listener[0].call(listener[1], event);
        }
      } catch (e) {
        console.error(e);
        continue;
      }
      // freeze thenables-collection to enforce sync-calls to
      // wait until and then wait for all thenables to resolve
      Object.freeze(thenables);
      await Promise.all(thenables);
    }
  }
}
exports.AsyncEmitter = _get__("AsyncEmitter");
/**
 * The EventBufferer is useful in situations in which you want
 * to delay firing your events during some code.
 * You can wrap that code and be sure that the event will not
 * be fired during that wrap.
 *
 * ```
 * const emitter: Emitter;
 * const delayer = new EventDelayer();
 * const delayedEvent = delayer.wrapEvent(emitter.event);
 *
 * delayedEvent(console.log);
 *
 * delayer.bufferEvents(() => {
 *   emitter.fire(); // event will not be fired yet
 * });
 *
 * // event will only be fired at this point
 * ```
 */
class EventBufferer {
  constructor() {
    this.buffers = [];
  }
  wrapEvent(event) {
    return (listener, thisArgs, disposables) => {
      return event(i => {
        const buffer = this.buffers[this.buffers.length - 1];
        if (buffer) {
          buffer.push(() => listener.call(thisArgs, i));
        } else {
          listener.call(thisArgs, i);
        }
      }, undefined, disposables);
    };
  }
  bufferEvents(fn) {
    const buffer = [];
    this.buffers.push(buffer);
    const r = fn();
    this.buffers.pop();
    buffer.forEach(flush => flush());
    return r;
  }
}
exports.EventBufferer = _get__("EventBufferer");
/**
 * A Relay is an event forwarder which functions as a replugabble event pipe.
 * Once created, you can connect an input event to it and it will simply forward
 * events from that input event through its own `event` property. The `input`
 * can be changed at any point in time.
 */
class Relay {
  constructor() {
    this.listening = false;
    this.inputEvent = _get__("Event").None;
    this.inputEventListener = _get__("lifecycle_1").Disposable.None;
    this.emitter = new (_get__("Emitter"))({
      onFirstListenerDidAdd: () => {
        this.listening = true;
        this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter);
      },
      onLastListenerRemove: () => {
        this.listening = false;
        this.inputEventListener.dispose();
      }
    });
    this.event = this.emitter.event;
  }
  // eslint-disable-next-line accessor-pairs
  set input(event) {
    this.inputEvent = event;
    if (this.listening) {
      this.inputEventListener.dispose();
      this.inputEventListener = event(this.emitter.fire, this.emitter);
    }
  }
  dispose() {
    this.inputEventListener.dispose();
    this.emitter.dispose();
  }
}
exports.Relay = _get__("Relay");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "lifecycle_1":
      return lifecycle_1;
    case "Emitter":
      return Emitter;
    case "Event":
      return Event;
    case "_globalLeakWarningThreshold":
      return _globalLeakWarningThreshold;
    case "setGlobalLeakWarningThreshold":
      return setGlobalLeakWarningThreshold;
    case "LeakageMonitor":
      return LeakageMonitor;
    case "linkedList_1":
      return linkedList_1;
    case "AsyncEmitter":
      return AsyncEmitter;
    case "EventBufferer":
      return EventBufferer;
    case "Relay":
      return Relay;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "Event":
      return Event = _value;
    case "_globalLeakWarningThreshold":
      return _globalLeakWarningThreshold = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/iterator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/iterator.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MappedNavigator = exports.MappedIterator = exports.ArrayNavigator = exports.ArrayIterator = exports.getSequenceIterator = exports.Iterator = exports.FIN = void 0;
exports.FIN = {
  done: true,
  value: undefined
};
var Iterator;
(function (Iterator) {
  const _empty = {
    next() {
      return exports.FIN;
    }
  };
  function empty() {
    return _empty;
  }
  Iterator.empty = empty;
  function fromArray(array, index = 0, length = array.length) {
    return {
      next() {
        if (index >= length) {
          return exports.FIN;
        }
        return {
          done: false,
          value: array[index++]
        };
      }
    };
  }
  Iterator.fromArray = fromArray;
  function from(elements) {
    if (!elements) {
      return Iterator.empty();
    } else if (Array.isArray(elements)) {
      return Iterator.fromArray(elements);
    } else {
      return elements;
    }
  }
  Iterator.from = from;
  function map(iterator, fn) {
    return {
      next() {
        const element = iterator.next();
        if (element.done) {
          return exports.FIN;
        } else {
          return {
            done: false,
            value: fn(element.value)
          };
        }
      }
    };
  }
  Iterator.map = map;
  function filter(iterator, fn) {
    return {
      next() {
        while (true) {
          const element = iterator.next();
          if (element.done) {
            return exports.FIN;
          }
          if (fn(element.value)) {
            return {
              done: false,
              value: element.value
            };
          }
        }
      }
    };
  }
  Iterator.filter = filter;
  function forEach(iterator, fn) {
    for (let next = iterator.next(); !next.done; next = iterator.next()) {
      fn(next.value);
    }
  }
  Iterator.forEach = forEach;
  function collect(iterator) {
    const result = [];
    forEach(iterator, value => result.push(value));
    return result;
  }
  Iterator.collect = collect;
})(_get__("Iterator") || (exports.Iterator = _assign__("Iterator", {})));
function getSequenceIterator(arg) {
  if (Array.isArray(arg)) {
    return _get__("Iterator").fromArray(arg);
  } else {
    return arg;
  }
}
exports.getSequenceIterator = _get__("getSequenceIterator");
class ArrayIterator {
  constructor(items, start = 0, end = items.length, index = start - 1) {
    this.items = items;
    this.start = start;
    this.end = end;
    this.index = index;
  }
  first() {
    this.index = this.start;
    return this.current();
  }
  next() {
    this.index = Math.min(this.index + 1, this.end);
    return this.current();
  }
  current() {
    if (this.index === this.start - 1 || this.index === this.end) {
      return null;
    }
    return this.items[this.index];
  }
}
exports.ArrayIterator = _get__("ArrayIterator");
class ArrayNavigator extends _get__("ArrayIterator") {
  constructor(items, start = 0, end = items.length, index = start - 1) {
    super(items, start, end, index);
  }
  current() {
    return super.current();
  }
  previous() {
    this.index = Math.max(this.index - 1, this.start - 1);
    return this.current();
  }
  first() {
    this.index = this.start;
    return this.current();
  }
  last() {
    this.index = this.end - 1;
    return this.current();
  }
  parent() {
    return null;
  }
}
exports.ArrayNavigator = _get__("ArrayNavigator");
class MappedIterator {
  constructor(iterator, fn) {
    this.iterator = iterator;
    this.fn = fn;
    // noop
  }

  next() {
    return this.fn(this.iterator.next());
  }
}
exports.MappedIterator = _get__("MappedIterator");
class MappedNavigator extends _get__("MappedIterator") {
  constructor(navigator, fn) {
    super(navigator, fn);
    this.navigator = navigator;
  }
  current() {
    return this.fn(this.navigator.current());
  }
  previous() {
    return this.fn(this.navigator.previous());
  }
  parent() {
    return this.fn(this.navigator.parent());
  }
  first() {
    return this.fn(this.navigator.first());
  }
  last() {
    return this.fn(this.navigator.last());
  }
  next() {
    return this.fn(this.navigator.next());
  }
}
exports.MappedNavigator = _get__("MappedNavigator");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "Iterator":
      return Iterator;
    case "getSequenceIterator":
      return getSequenceIterator;
    case "ArrayIterator":
      return ArrayIterator;
    case "ArrayNavigator":
      return ArrayNavigator;
    case "MappedIterator":
      return MappedIterator;
    case "MappedNavigator":
      return MappedNavigator;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "Iterator":
      return Iterator = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/keyCodes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/keyCodes.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ResolvedKeybinding = exports.ResolvedKeybindingPart = exports.createSimpleKeybinding = exports.createKeybinding = exports.ChordKeybinding = exports.SimpleKeybinding = exports.KeyChord = exports.KeyCodeUtils = exports.ScanCodeUtils = void 0;
class KeyCodeStrMap {
  constructor() {
    this._keyCodeToStr = [];
    this._strToKeyCode = Object.create(null);
  }
  define(keyCode, str) {
    this._keyCodeToStr[keyCode] = str;
    this._strToKeyCode[str.toLowerCase()] = keyCode;
  }
  keyCodeToStr(keyCode) {
    return this._keyCodeToStr[keyCode];
  }
  strToKeyCode(str) {
    return this._strToKeyCode[str.toLowerCase()] || 0 /* KeyCode.Unknown */;
  }
}

const scanCodeIntToStr = [];
const scanCodeStrToInt = Object.create(null);
const scanCodeLowerCaseStrToInt = Object.create(null);
exports.ScanCodeUtils = {
  lowerCaseToEnum: scanCode => _get__("scanCodeLowerCaseStrToInt")[scanCode] || 0 /* ScanCode.None */,
  toEnum: scanCode => _get__("scanCodeStrToInt")[scanCode] || 0 /* ScanCode.None */,
  toString: scanCode => _get__("scanCodeIntToStr")[scanCode] || 'None'
};
const uiMap = new (_get__("KeyCodeStrMap"))();
const userSettingsUSMap = new (_get__("KeyCodeStrMap"))();
const userSettingsGeneralMap = new (_get__("KeyCodeStrMap"))();
(function () {
  function define(keyCode, uiLabel, usUserSettingsLabel = uiLabel, generalUserSettingsLabel = usUserSettingsLabel) {
    _get__("uiMap").define(keyCode, uiLabel);
    _get__("userSettingsUSMap").define(keyCode, usUserSettingsLabel);
    _get__("userSettingsGeneralMap").define(keyCode, generalUserSettingsLabel);
  }
  define(0 /* KeyCode.Unknown */, 'unknown');
  define(1 /* KeyCode.Backspace */, 'Backspace');
  define(2 /* KeyCode.Tab */, 'Tab');
  define(3 /* KeyCode.Enter */, 'Enter');
  define(4 /* KeyCode.Shift */, 'Shift');
  define(5 /* KeyCode.Ctrl */, 'Ctrl');
  define(6 /* KeyCode.Alt */, 'Alt');
  define(7 /* KeyCode.PauseBreak */, 'PauseBreak');
  define(8 /* KeyCode.CapsLock */, 'CapsLock');
  define(9 /* KeyCode.Escape */, 'Escape');
  define(10 /* KeyCode.Space */, 'Space');
  define(11 /* KeyCode.PageUp */, 'PageUp');
  define(12 /* KeyCode.PageDown */, 'PageDown');
  define(13 /* KeyCode.End */, 'End');
  define(14 /* KeyCode.Home */, 'Home');
  define(15 /* KeyCode.LeftArrow */, 'LeftArrow', 'Left');
  define(16 /* KeyCode.UpArrow */, 'UpArrow', 'Up');
  define(17 /* KeyCode.RightArrow */, 'RightArrow', 'Right');
  define(18 /* KeyCode.DownArrow */, 'DownArrow', 'Down');
  define(19 /* KeyCode.Insert */, 'Insert');
  define(20 /* KeyCode.Delete */, 'Delete');
  define(21 /* KeyCode.KEY_0 */, '0');
  define(22 /* KeyCode.KEY_1 */, '1');
  define(23 /* KeyCode.KEY_2 */, '2');
  define(24 /* KeyCode.KEY_3 */, '3');
  define(25 /* KeyCode.KEY_4 */, '4');
  define(26 /* KeyCode.KEY_5 */, '5');
  define(27 /* KeyCode.KEY_6 */, '6');
  define(28 /* KeyCode.KEY_7 */, '7');
  define(29 /* KeyCode.KEY_8 */, '8');
  define(30 /* KeyCode.KEY_9 */, '9');
  define(31 /* KeyCode.KEY_A */, 'A');
  define(32 /* KeyCode.KEY_B */, 'B');
  define(33 /* KeyCode.KEY_C */, 'C');
  define(34 /* KeyCode.KEY_D */, 'D');
  define(35 /* KeyCode.KEY_E */, 'E');
  define(36 /* KeyCode.KEY_F */, 'F');
  define(37 /* KeyCode.KEY_G */, 'G');
  define(38 /* KeyCode.KEY_H */, 'H');
  define(39 /* KeyCode.KEY_I */, 'I');
  define(40 /* KeyCode.KEY_J */, 'J');
  define(41 /* KeyCode.KEY_K */, 'K');
  define(42 /* KeyCode.KEY_L */, 'L');
  define(43 /* KeyCode.KEY_M */, 'M');
  define(44 /* KeyCode.KEY_N */, 'N');
  define(45 /* KeyCode.KEY_O */, 'O');
  define(46 /* KeyCode.KEY_P */, 'P');
  define(47 /* KeyCode.KEY_Q */, 'Q');
  define(48 /* KeyCode.KEY_R */, 'R');
  define(49 /* KeyCode.KEY_S */, 'S');
  define(50 /* KeyCode.KEY_T */, 'T');
  define(51 /* KeyCode.KEY_U */, 'U');
  define(52 /* KeyCode.KEY_V */, 'V');
  define(53 /* KeyCode.KEY_W */, 'W');
  define(54 /* KeyCode.KEY_X */, 'X');
  define(55 /* KeyCode.KEY_Y */, 'Y');
  define(56 /* KeyCode.KEY_Z */, 'Z');
  define(57 /* KeyCode.Meta */, 'Meta');
  define(58 /* KeyCode.ContextMenu */, 'ContextMenu');
  define(59 /* KeyCode.F1 */, 'F1');
  define(60 /* KeyCode.F2 */, 'F2');
  define(61 /* KeyCode.F3 */, 'F3');
  define(62 /* KeyCode.F4 */, 'F4');
  define(63 /* KeyCode.F5 */, 'F5');
  define(64 /* KeyCode.F6 */, 'F6');
  define(65 /* KeyCode.F7 */, 'F7');
  define(66 /* KeyCode.F8 */, 'F8');
  define(67 /* KeyCode.F9 */, 'F9');
  define(68 /* KeyCode.F10 */, 'F10');
  define(69 /* KeyCode.F11 */, 'F11');
  define(70 /* KeyCode.F12 */, 'F12');
  define(71 /* KeyCode.F13 */, 'F13');
  define(72 /* KeyCode.F14 */, 'F14');
  define(73 /* KeyCode.F15 */, 'F15');
  define(74 /* KeyCode.F16 */, 'F16');
  define(75 /* KeyCode.F17 */, 'F17');
  define(76 /* KeyCode.F18 */, 'F18');
  define(77 /* KeyCode.F19 */, 'F19');
  define(78 /* KeyCode.NumLock */, 'NumLock');
  define(79 /* KeyCode.ScrollLock */, 'ScrollLock');
  define(80 /* KeyCode.US_SEMICOLON */, ';', ';', 'OEM_1');
  define(81 /* KeyCode.US_EQUAL */, '=', '=', 'OEM_PLUS');
  define(82 /* KeyCode.US_COMMA */, ',', ',', 'OEM_COMMA');
  define(83 /* KeyCode.US_MINUS */, '-', '-', 'OEM_MINUS');
  define(84 /* KeyCode.US_DOT */, '.', '.', 'OEM_PERIOD');
  define(85 /* KeyCode.US_SLASH */, '/', '/', 'OEM_2');
  define(86 /* KeyCode.US_BACKTICK */, '`', '`', 'OEM_3');
  define(110 /* KeyCode.ABNT_C1 */, 'ABNT_C1');
  define(111 /* KeyCode.ABNT_C2 */, 'ABNT_C2');
  define(87 /* KeyCode.US_OPEN_SQUARE_BRACKET */, '[', '[', 'OEM_4');
  define(88 /* KeyCode.US_BACKSLASH */, '\\', '\\', 'OEM_5');
  define(89 /* KeyCode.US_CLOSE_SQUARE_BRACKET */, ']', ']', 'OEM_6');
  define(90 /* KeyCode.US_QUOTE */, '\'', '\'', 'OEM_7');
  define(91 /* KeyCode.OEM_8 */, 'OEM_8');
  define(92 /* KeyCode.OEM_102 */, 'OEM_102');
  define(93 /* KeyCode.NUMPAD_0 */, 'NumPad0');
  define(94 /* KeyCode.NUMPAD_1 */, 'NumPad1');
  define(95 /* KeyCode.NUMPAD_2 */, 'NumPad2');
  define(96 /* KeyCode.NUMPAD_3 */, 'NumPad3');
  define(97 /* KeyCode.NUMPAD_4 */, 'NumPad4');
  define(98 /* KeyCode.NUMPAD_5 */, 'NumPad5');
  define(99 /* KeyCode.NUMPAD_6 */, 'NumPad6');
  define(100 /* KeyCode.NUMPAD_7 */, 'NumPad7');
  define(101 /* KeyCode.NUMPAD_8 */, 'NumPad8');
  define(102 /* KeyCode.NUMPAD_9 */, 'NumPad9');
  define(103 /* KeyCode.NUMPAD_MULTIPLY */, 'NumPad_Multiply');
  define(104 /* KeyCode.NUMPAD_ADD */, 'NumPad_Add');
  define(105 /* KeyCode.NUMPAD_SEPARATOR */, 'NumPad_Separator');
  define(106 /* KeyCode.NUMPAD_SUBTRACT */, 'NumPad_Subtract');
  define(107 /* KeyCode.NUMPAD_DECIMAL */, 'NumPad_Decimal');
  define(108 /* KeyCode.NUMPAD_DIVIDE */, 'NumPad_Divide');
})();
var KeyCodeUtils;
(function (KeyCodeUtils) {
  function toString(keyCode) {
    return _get__("uiMap").keyCodeToStr(keyCode);
  }
  KeyCodeUtils.toString = toString;
  function fromString(key) {
    return _get__("uiMap").strToKeyCode(key);
  }
  KeyCodeUtils.fromString = fromString;
  function toUserSettingsUS(keyCode) {
    return _get__("userSettingsUSMap").keyCodeToStr(keyCode);
  }
  KeyCodeUtils.toUserSettingsUS = toUserSettingsUS;
  function toUserSettingsGeneral(keyCode) {
    return _get__("userSettingsGeneralMap").keyCodeToStr(keyCode);
  }
  KeyCodeUtils.toUserSettingsGeneral = toUserSettingsGeneral;
  function fromUserSettings(key) {
    return _get__("userSettingsUSMap").strToKeyCode(key) || _get__("userSettingsGeneralMap").strToKeyCode(key);
  }
  KeyCodeUtils.fromUserSettings = fromUserSettings;
})(_get__("KeyCodeUtils") || (exports.KeyCodeUtils = _assign__("KeyCodeUtils", {})));
function KeyChord(firstPart, secondPart) {
  const chordPart = (secondPart & 0x0000FFFF) << 16 >>> 0;
  return (firstPart | chordPart) >>> 0;
}
exports.KeyChord = _get__("KeyChord");
class SimpleKeybinding {
  constructor(ctrlKey, shiftKey, altKey, metaKey, keyCode) {
    this.type = 1 /* KeybindingType.Simple */;
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.metaKey = metaKey;
    this.keyCode = keyCode;
  }
  // eslint-disable-next-line no-use-before-define
  equals(other) {
    if (other.type !== 1 /* KeybindingType.Simple */) {
      return false;
    }
    return this.ctrlKey === other.ctrlKey && this.shiftKey === other.shiftKey && this.altKey === other.altKey && this.metaKey === other.metaKey && this.keyCode === other.keyCode;
  }
  getHashCode() {
    const ctrl = this.ctrlKey ? '1' : '0';
    const shift = this.shiftKey ? '1' : '0';
    const alt = this.altKey ? '1' : '0';
    const meta = this.metaKey ? '1' : '0';
    return `${ctrl}${shift}${alt}${meta}${this.keyCode}`;
  }
  isModifierKey() {
    return this.keyCode === 0 /* KeyCode.Unknown */ || this.keyCode === 5 /* KeyCode.Ctrl */ || this.keyCode === 57 /* KeyCode.Meta */ || this.keyCode === 6 /* KeyCode.Alt */ || this.keyCode === 4 /* KeyCode.Shift */;
  }
  /**
   * Does this keybinding refer to the key code of a modifier and it also has the modifier flag?
   */
  isDuplicateModifierCase() {
    return this.ctrlKey && this.keyCode === 5 /* KeyCode.Ctrl */ || this.shiftKey && this.keyCode === 4 /* KeyCode.Shift */ || this.altKey && this.keyCode === 6 /* KeyCode.Alt */ || this.metaKey && this.keyCode === 57 /* KeyCode.Meta */;
  }
}

exports.SimpleKeybinding = _get__("SimpleKeybinding");
class ChordKeybinding {
  constructor(firstPart, chordPart) {
    this.type = 2 /* KeybindingType.Chord */;
    this.firstPart = firstPart;
    this.chordPart = chordPart;
  }
  getHashCode() {
    return `${this.firstPart.getHashCode()};${this.chordPart.getHashCode()}`;
  }
}
exports.ChordKeybinding = _get__("ChordKeybinding");
function createKeybinding(keybinding, OS) {
  if (keybinding === 0) {
    return null;
  }
  const firstPart = (keybinding & 0x0000FFFF) >>> 0;
  const chordPart = (keybinding & 0xFFFF0000) >>> 16;
  if (chordPart !== 0) {
    return new (_get__("ChordKeybinding"))(_get__("createSimpleKeybinding")(firstPart, OS), _get__("createSimpleKeybinding")(chordPart, OS));
  }
  return _get__("createSimpleKeybinding")(firstPart, OS);
}
exports.createKeybinding = _get__("createKeybinding");
function createSimpleKeybinding(keybinding, OS) {
  const ctrlCmd = !!(keybinding & 2048 /* BinaryKeybindingsMask.CtrlCmd */);
  const winCtrl = !!(keybinding & 256 /* BinaryKeybindingsMask.WinCtrl */);
  const ctrlKey = OS === 2 /* OperatingSystem.Macintosh */ ? winCtrl : ctrlCmd;
  const shiftKey = !!(keybinding & 1024 /* BinaryKeybindingsMask.Shift */);
  const altKey = !!(keybinding & 512 /* BinaryKeybindingsMask.Alt */);
  const metaKey = OS === 2 /* OperatingSystem.Macintosh */ ? ctrlCmd : winCtrl;
  const keyCode = keybinding & 255 /* BinaryKeybindingsMask.KeyCode */;
  return new (_get__("SimpleKeybinding"))(ctrlKey, shiftKey, altKey, metaKey, keyCode);
}
exports.createSimpleKeybinding = _get__("createSimpleKeybinding");
class ResolvedKeybindingPart {
  constructor(ctrlKey, shiftKey, altKey, metaKey, kbLabel, kbAriaLabel) {
    this.ctrlKey = ctrlKey;
    this.shiftKey = shiftKey;
    this.altKey = altKey;
    this.metaKey = metaKey;
    this.keyLabel = kbLabel;
    this.keyAriaLabel = kbAriaLabel;
  }
}
exports.ResolvedKeybindingPart = _get__("ResolvedKeybindingPart");
/**
 * A resolved keybinding. Can be a simple keybinding or a chord keybinding.
 */
class ResolvedKeybinding {}
exports.ResolvedKeybinding = _get__("ResolvedKeybinding");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "scanCodeLowerCaseStrToInt":
      return scanCodeLowerCaseStrToInt;
    case "scanCodeStrToInt":
      return scanCodeStrToInt;
    case "scanCodeIntToStr":
      return scanCodeIntToStr;
    case "KeyCodeStrMap":
      return KeyCodeStrMap;
    case "uiMap":
      return uiMap;
    case "userSettingsUSMap":
      return userSettingsUSMap;
    case "userSettingsGeneralMap":
      return userSettingsGeneralMap;
    case "KeyCodeUtils":
      return KeyCodeUtils;
    case "KeyChord":
      return KeyChord;
    case "SimpleKeybinding":
      return SimpleKeybinding;
    case "ChordKeybinding":
      return ChordKeybinding;
    case "createSimpleKeybinding":
      return createSimpleKeybinding;
    case "createKeybinding":
      return createKeybinding;
    case "ResolvedKeybindingPart":
      return ResolvedKeybindingPart;
    case "ResolvedKeybinding":
      return ResolvedKeybinding;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "KeyCodeUtils":
      return KeyCodeUtils = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js":
/*!************************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/lifecycle.js ***!
  \************************************************************************/
/***/ ((module, exports) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Disposable = exports.toDisposable = exports.combinedDisposable = exports.dispose = exports.isDisposable = void 0;
function isDisposable(thing) {
  return typeof thing.dispose === 'function' && thing.dispose.length === 0;
}
exports.isDisposable = _get__("isDisposable");
function dispose(first, ...rest) {
  if (Array.isArray(first)) {
    first.forEach(d => d && d.dispose());
    return [];
  } else if (rest.length === 0) {
    if (first) {
      first.dispose();
      return first;
    }
    return undefined;
  } else {
    _get__("dispose")(first);
    _get__("dispose")(rest);
    return [];
  }
}
exports.dispose = _get__("dispose");
function combinedDisposable(disposables) {
  return {
    dispose: () => _get__("dispose")(disposables)
  };
}
exports.combinedDisposable = _get__("combinedDisposable");
function toDisposable(fn) {
  return {
    dispose() {
      fn();
    }
  };
}
exports.toDisposable = _get__("toDisposable");
class Disposable {
  constructor() {
    this._toDispose = [];
    this._lifecycle_disposable_isDisposed = false;
  }
  get toDispose() {
    return this._toDispose;
  }
  dispose() {
    this._lifecycle_disposable_isDisposed = true;
    this._toDispose = _get__("dispose")(this._toDispose);
  }
  _register(t) {
    if (this._lifecycle_disposable_isDisposed) {
      console.warn('Registering disposable on object that has already been disposed.');
      t.dispose();
    } else {
      this._toDispose.push(t);
    }
    return t;
  }
}
exports.Disposable = _get__("Disposable");
_get__("Disposable").None = Object.freeze({
  dispose() {}
});
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "isDisposable":
      return isDisposable;
    case "dispose":
      return dispose;
    case "combinedDisposable":
      return combinedDisposable;
    case "toDisposable":
      return toDisposable;
    case "Disposable":
      return Disposable;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/linkedList.js":
/*!*************************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/linkedList.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.LinkedList = void 0;
const iterator_1 = __webpack_require__(/*! ../common/iterator */ "./node_modules/custom-electron-titlebar/base/common/iterator.js");
class Node {
  constructor(element) {
    this.element = element;
  }
}
class LinkedList {
  constructor() {
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return !this._first;
  }
  clear() {
    this._first = undefined;
    this._last = undefined;
    this._size = 0;
  }
  unshift(element) {
    return this._insert(element, false);
  }
  push(element) {
    return this._insert(element, true);
  }
  _insert(element, atTheEnd) {
    const newNode = new (_get__("Node"))(element);
    if (!this._first) {
      this._first = newNode;
      this._last = newNode;
    } else if (atTheEnd) {
      // push
      const oldLast = this._last;
      this._last = newNode;
      newNode.prev = oldLast;
      oldLast.next = newNode;
    } else {
      // unshift
      const oldFirst = this._first;
      this._first = newNode;
      newNode.next = oldFirst;
      oldFirst.prev = newNode;
    }
    this._size += 1;
    return this._remove.bind(this, newNode);
  }
  shift() {
    if (!this._first) {
      return undefined;
    } else {
      const res = this._first.element;
      this._remove(this._first);
      return res;
    }
  }
  pop() {
    if (!this._last) {
      return undefined;
    } else {
      const res = this._last.element;
      this._remove(this._last);
      return res;
    }
  }
  _remove(node) {
    let candidate = this._first;
    while (candidate instanceof _get__("Node")) {
      if (candidate !== node) {
        candidate = candidate.next;
        continue;
      }
      if (candidate.prev && candidate.next) {
        // middle
        const anchor = candidate.prev;
        anchor.next = candidate.next;
        candidate.next.prev = anchor;
      } else if (!candidate.prev && !candidate.next) {
        // only node
        this._first = undefined;
        this._last = undefined;
      } else if (!candidate.next) {
        // last
        this._last = this._last.prev;
        this._last.next = undefined;
      } else if (!candidate.prev) {
        // first
        this._first = this._first.next;
        this._first.prev = undefined;
      }
      // done
      this._size -= 1;
      break;
    }
  }
  iterator() {
    let element;
    let node = this._first;
    return {
      next() {
        if (!node) {
          return _get__("iterator_1").FIN;
        }
        if (!element) {
          element = {
            done: false,
            value: node.element
          };
        } else {
          element.value = node.element;
        }
        node = node.next;
        return element;
      }
    };
  }
  toArray() {
    const result = [];
    for (let node = this._first; node instanceof _get__("Node"); node = node.next) {
      result.push(node.element);
    }
    return result;
  }
}
exports.LinkedList = _get__("LinkedList");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "Node":
      return Node;
    case "iterator_1":
      return iterator_1;
    case "LinkedList":
      return LinkedList;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/platform.js":
/*!***********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/platform.js ***!
  \***********************************************************************/
/***/ ((module, exports) => {

"use strict";


/* eslint-disable indent */
/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OS = exports.setImmediate = exports.globals = exports.isRootUser = exports.platform = exports.isWeb = exports.isNative = exports.isFreeBSD = exports.isLinux = exports.isMacintosh = exports.isWindows = exports.PlatformToString = void 0;
let _isWindows = false;
let _isMacintosh = false;
let _isLinux = false;
let _isFreeBSD = false;
let _isNative = false;
let _isWeb = false;
const isElectronRenderer = typeof process !== 'undefined' && typeof process.versions !== 'undefined' && typeof process.versions.electron !== 'undefined' && process.type === 'renderer';
// OS detection
if (typeof navigator === 'object' && !_get__("isElectronRenderer")) {
  const userAgent = navigator.userAgent;
  _assign__("_isWindows", userAgent.indexOf('Windows') >= 0);
  _assign__("_isMacintosh", userAgent.indexOf('Macintosh') >= 0);
  _assign__("_isLinux", userAgent.indexOf('Linux') >= 0);
  _assign__("_isFreeBSD", userAgent.indexOf('FreeBSD') >= 0);
  _assign__("_isWeb", true);
} else if (typeof process === 'object') {
  _assign__("_isWindows", process.platform === 'win32');
  _assign__("_isMacintosh", process.platform === 'darwin');
  _assign__("_isLinux", process.platform === 'linux');
  _assign__("_isFreeBSD", process.platform === 'freebsd');
  _assign__("_isNative", true);
}
function PlatformToString(platform) {
  switch (platform) {
    case 0 /* Platform.Web */:
      return 'Web';
    case 1 /* Platform.Mac */:
      return 'Mac';
    case 2 /* Platform.Linux */:
      return 'Linux';
    case 3 /* Platform.FreeBSD */:
      return 'FreeBSD';
    case 4 /* Platform.Windows */:
      return 'Windows';
  }
}
exports.PlatformToString = _get__("PlatformToString");
let _platform = 0 /* Platform.Web */;
if (_get__("_isNative")) {
  if (_get__("_isMacintosh")) {
    _assign__("_platform", 1) /* Platform.Mac */;
  } else if (_get__("_isWindows")) {
    _assign__("_platform", 4) /* Platform.Windows */;
  } else if (_get__("_isLinux")) {
    _assign__("_platform", 2) /* Platform.Linux */;
  } else if (_get__("_isFreeBSD")) {
    _assign__("_platform", 3) /* Platform.FreeBSD */;
  }
}
exports.isWindows = _get__("_isWindows");
exports.isMacintosh = _get__("_isMacintosh");
exports.isLinux = _get__("_isLinux");
exports.isFreeBSD = _get__("_isFreeBSD");
exports.isNative = _get__("_isNative");
exports.isWeb = _get__("_isWeb");
exports.platform = _get__("_platform");
function isRootUser() {
  return _get__("_isNative") && !_get__("_isWindows") && process.getuid() === 0;
}
exports.isRootUser = _get__("isRootUser");
const g = typeof global === 'object' ? global : {};
const _globals = typeof self === 'object' ? self : _get__("g");
exports.globals = _get__("_globals");
let _setImmediate = null;
function setImmediate(callback) {
  if (_get__("_setImmediate") === null) {
    if (exports.globals.setImmediate) {
      _assign__("_setImmediate", exports.globals.setImmediate.bind(exports.globals));
    } else if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
      _assign__("_setImmediate", process.nextTick.bind(process));
    } else {
      _assign__("_setImmediate", exports.globals.setTimeout.bind(exports.globals));
    }
  }
  return _get__("_setImmediate")(callback);
}
exports.setImmediate = _get__("setImmediate");
const _wl = _get__("_isWindows") ? 1 /* OperatingSystem.Windows */ : 3 /* OperatingSystem.Linux */ | 4 /* OperatingSystem.FreeBSD */;
exports.OS = _get__("_isMacintosh") ? 2 /* OperatingSystem.Macintosh */ : _get__("_wl");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "isElectronRenderer":
      return isElectronRenderer;
    case "_isWindows":
      return _isWindows;
    case "_isMacintosh":
      return _isMacintosh;
    case "_isLinux":
      return _isLinux;
    case "_isFreeBSD":
      return _isFreeBSD;
    case "_isWeb":
      return _isWeb;
    case "_isNative":
      return _isNative;
    case "PlatformToString":
      return PlatformToString;
    case "_platform":
      return _platform;
    case "isRootUser":
      return isRootUser;
    case "g":
      return g;
    case "_globals":
      return _globals;
    case "_setImmediate":
      return _setImmediate;
    case "setImmediate":
      return setImmediate;
    case "_wl":
      return _wl;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "_isWindows":
      return _isWindows = _value;
    case "_isMacintosh":
      return _isMacintosh = _value;
    case "_isLinux":
      return _isLinux = _value;
    case "_isFreeBSD":
      return _isFreeBSD = _value;
    case "_isWeb":
      return _isWeb = _value;
    case "_isNative":
      return _isNative = _value;
    case "_platform":
      return _platform = _value;
    case "_setImmediate":
      return _setImmediate = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/base/common/strings.js":
/*!**********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/base/common/strings.js ***!
  \**********************************************************************/
/***/ ((module, exports) => {

"use strict";


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.rtrim = exports.ltrim = exports.trim = exports.escape = void 0;
/**
 * Converts HTML characters inside the string to use entities instead. Makes the string safe from
 * being used e.g. in HTMLElement.innerHTML.
 */
function escape(html) {
  return html.replace(/[<>&]/g, function (match) {
    switch (match) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      default:
        return match;
    }
  });
}
exports.escape = _get__("escape");
/**
 * Removes all occurrences of needle from the beginning and end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim (default is a blank)
 */
function trim(haystack, needle = ' ') {
  const trimmed = _get__("ltrim")(haystack, needle);
  return _get__("rtrim")(trimmed, needle);
}
exports.trim = _get__("trim");
/**
 * Removes all occurrences of needle from the beginning of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function ltrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }
  const needleLen = needle.length;
  if (needleLen === 0 || haystack.length === 0) {
    return haystack;
  }
  let offset = 0;
  while (haystack.indexOf(needle, offset) === offset) {
    offset = offset + needleLen;
  }
  return haystack.substring(offset);
}
exports.ltrim = _get__("ltrim");
/**
 * Removes all occurrences of needle from the end of haystack.
 * @param haystack string to trim
 * @param needle the thing to trim
 */
function rtrim(haystack, needle) {
  if (!haystack || !needle) {
    return haystack;
  }
  const needleLen = needle.length,
    haystackLen = haystack.length;
  if (needleLen === 0 || haystackLen === 0) {
    return haystack;
  }
  let offset = haystackLen,
    idx = -1;
  while (true) {
    idx = haystack.lastIndexOf(needle, offset - 1);
    if (idx === -1 || idx + needleLen !== offset) {
      break;
    }
    if (idx === 0) {
      return '';
    }
    offset = idx;
  }
  return haystack.substring(0, offset);
}
exports.rtrim = _get__("rtrim");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "escape":
      return escape;
    case "ltrim":
      return ltrim;
    case "rtrim":
      return rtrim;
    case "trim":
      return trim;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/consts.js":
/*!*********************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/consts.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.loadWindowIcons = exports.applyFill = exports.parseAccelerator = exports.cleanMnemonic = exports.mnemonicButtonLabel = exports.mnemonicMenuLabel = exports.getPx = exports.menuIcons = exports.MENU_ESCAPED_MNEMONIC_REGEX = exports.MENU_MNEMONIC_REGEX = exports.WINDOW_MIN_HEIGHT = exports.WINDOW_MIN_WIDTH = exports.TOP_TITLEBAR_HEIGHT_WIN = exports.TOP_TITLEBAR_HEIGHT_MAC = exports.BOTTOM_TITLEBAR_HEIGHT = exports.IS_MAC_BIGSUR_OR_LATER = exports.DEFAULT_ITEM_SELECTOR = exports.ACTIVE_FOREGROUND = exports.INACTIVE_FOREGROUND = exports.ACTIVE_FOREGROUND_DARK = exports.INACTIVE_FOREGROUND_DARK = void 0;
const color_1 = __webpack_require__(/*! ./base/common/color */ "./node_modules/custom-electron-titlebar/base/common/color.js");
const platform_1 = __webpack_require__(/*! ./base/common/platform */ "./node_modules/custom-electron-titlebar/base/common/platform.js");
exports.INACTIVE_FOREGROUND_DARK = _get__("color_1").Color.fromHex('#222222');
exports.ACTIVE_FOREGROUND_DARK = _get__("color_1").Color.fromHex('#333333');
exports.INACTIVE_FOREGROUND = _get__("color_1").Color.fromHex('#EEEEEE');
exports.ACTIVE_FOREGROUND = _get__("color_1").Color.fromHex('#FFFFFF');
exports.DEFAULT_ITEM_SELECTOR = _get__("color_1").Color.fromHex('#0000001F');
exports.IS_MAC_BIGSUR_OR_LATER = _get__("platform_1").isMacintosh && parseInt(process.getSystemVersion().split('.')[0]) >= 11;
exports.BOTTOM_TITLEBAR_HEIGHT = 60;
exports.TOP_TITLEBAR_HEIGHT_MAC = exports.IS_MAC_BIGSUR_OR_LATER ? 28 : 22;
exports.TOP_TITLEBAR_HEIGHT_WIN = 30;
exports.WINDOW_MIN_WIDTH = 400;
exports.WINDOW_MIN_HEIGHT = 270;
exports.MENU_MNEMONIC_REGEX = /\(&([^\s&])\)|(^|[^&])&([^\s&])/;
exports.MENU_ESCAPED_MNEMONIC_REGEX = /(&amp;)?(&amp;)([^\s&])/g;
exports.menuIcons = {
  submenuIndicator: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="9 6 15 12 9 18" /></svg>',
  checkbox: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>',
  radioChecked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M10,5 C7.2,5 5,7.2 5,10 C5,12.8 7.2,15 10,15 C12.8,15 15,12.8 15,10 C15,7.2 12.8,5 10,5 L10,5 Z M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z" /></svg>',
  radioUnchecked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C14.4,2 18,5.6 18,10 C18,14.4 14.4,18 10,18 L10,18 Z" /></svg>',
  linux: {
    minimize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M11,4.9v1.1H0V4.399h11z"/></svg>',
    maximize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M0,1.7v7.6C0,10.2,0.8,11,1.7,11h7.6c0.9,0,1.7-0.8,1.7-1.7V1.7C11,0.8,10.2,0,9.3,0H1.7C0.8,0,0,0.8,0,1.7z M8.8,9.9H2.2c-0.6,0-1.1-0.5-1.1-1.1V2.2c0-0.6,0.5-1.1,1.1-1.1h6.7c0.6,0,1.1,0.5,1.1,1.1v6.7C9.9,9.4,9.4,9.9,8.8,9.9z"/></svg>',
    restore: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M7.9,2.2h-7C0.4,2.2,0,2.6,0,3.1v7C0,10.6,0.4,11,0.9,11h7c0.5,0,0.9-0.4,0.9-0.9v-7C8.8,2.6,8.4,2.2,7.9,2.2z M7.7,9.6 c0,0.2-0.1,0.3-0.3,0.3h-6c-0.2,0-0.3-0.1-0.3-0.3v-6c0-0.2,0.1-0.3,0.3-0.3h6c0.2,0,0.3,0.1,0.3,0.3V9.6z M10,0.9 c0,0.5-0.4,0.9-0.9,0.9h-2.1 c-0.5,0-0.9-0.4-0.9-0.9V0.9c0-0.5,0.4-0.9,0.9-0.9h2.1C9.6,0,10,0.4,10,0.9z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z"/></svg>'
  },
  freebsd: {
    minimize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M11,4.9v1.1H0V4.399h11z"/></svg>',
    maximize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M0,1.7v7.6C0,10.2,0.8,11,1.7,11h7.6c0.9,0,1.7-0.8,1.7-1.7V1.7C11,0.8,10.2,0,9.3,0H1.7C0.8,0,0,0.8,0,1.7z M8.8,9.9H2.2c-0.6,0-1.1-0.5-1.1-1.1V2.2c0-0.6,0.5-1.1,1.1-1.1h6.7c0.6,0,1.1,0.5,1.1,1.1v6.7C9.9,9.4,9.4,9.9,8.8,9.9z"/></svg>',
    restore: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M7.9,2.2h-7C0.4,2.2,0,2.6,0,3.1v7C0,10.6,0.4,11,0.9,11h7c0.5,0,0.9-0.4,0.9-0.9v-7C8.8,2.6,8.4,2.2,7.9,2.2z M7.7,9.6 c0,0.2-0.1,0.3-0.3,0.3h-6c-0.2,0-0.3-0.1-0.3-0.3v-6c0-0.2,0.1-0.3,0.3-0.3h6c0.2,0,0.3,0.1,0.3,0.3V9.6z M10,0.9 c0,0.5-0.4,0.9-0.9,0.9h-2.1 c-0.5,0-0.9-0.4-0.9-0.9V0.9c0-0.5,0.4-0.9,0.9-0.9h2.1C9.6,0,10,0.4,10,0.9z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z"/></svg>'
  },
  windows: {
    minimize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M11,4.9v1.1H0V4.399h11z"/></svg>',
    maximize: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M0,1.7v7.6C0,10.2,0.8,11,1.7,11h7.6c0.9,0,1.7-0.8,1.7-1.7V1.7C11,0.8,10.2,0,9.3,0H1.7C0.8,0,0,0.8,0,1.7z M8.8,9.9H2.2c-0.6,0-1.1-0.5-1.1-1.1V2.2c0-0.6,0.5-1.1,1.1-1.1h6.7c0.6,0,1.1,0.5,1.1,1.1v6.7C9.9,9.4,9.4,9.9,8.8,9.9z"/></svg>',
    restore: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M7.9,2.2h-7C0.4,2.2,0,2.6,0,3.1v7C0,10.6,0.4,11,0.9,11h7c0.5,0,0.9-0.4,0.9-0.9v-7C8.8,2.6,8.4,2.2,7.9,2.2z M7.7,9.6 c0,0.2-0.1,0.3-0.3,0.3h-6c-0.2,0-0.3-0.1-0.3-0.3v-6c0-0.2,0.1-0.3,0.3-0.3h6c0.2,0,0.3,0.1,0.3,0.3V9.6z"/><path d="M10,0H3.5v1.1h6.1c0.2,0,0.3,0.1,0.3,0.3v6.1H11V1C11,0.4,10.6,0,10,0z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11"><path d="M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z"/></svg>'
  }
};
function getPx(value) {
  return `${value}px`;
}
exports.getPx = _get__("getPx");
/**
 * Handles mnemonics for menu items. Depending on OS:
 * - Windows: Supported via & character (replace && with &)
 * - Linux: Supported via & character (replace && with &)
 * - FreeBSD: Supported via & character (replace && with &)
 * - macOS: Unsupported (replace && with empty string)
 */
function mnemonicMenuLabel(label, forceDisableMnemonics) {
  if (_get__("platform_1").isMacintosh || forceDisableMnemonics) {
    return label.replace(/\(&&\w\)|&&/g, '').replace(/&/g, _get__("platform_1").isMacintosh ? '&' : '&&');
  }
  return label.replace(/&&|&/g, m => m === '&' ? '&&' : '&');
}
exports.mnemonicMenuLabel = _get__("mnemonicMenuLabel");
/**
 * Handles mnemonics for buttons. Depending on OS:
 * - Windows: Supported via & character (replace && with & and & with && for escaping)
 * - Linux: Supported via _ character (replace && with _)
 * - FreeBSD: Supported via _ character (replace && with _)
 * - macOS: Unsupported (replace && with empty string)
 */
function mnemonicButtonLabel(label, forceDisableMnemonics) {
  if (_get__("platform_1").isMacintosh || forceDisableMnemonics) {
    return label.replace(/\(&&\w\)|&&/g, '');
  }
  if (_get__("platform_1").isWindows) {
    return label.replace(/&&|&/g, m => m === '&' ? '&&' : '&');
  }
  return label.replace(/&&/g, '_');
}
exports.mnemonicButtonLabel = _get__("mnemonicButtonLabel");
function cleanMnemonic(label) {
  const regex = exports.MENU_MNEMONIC_REGEX;
  const matches = regex.exec(label);
  if (!matches) {
    return label;
  }
  const mnemonicInText = !matches[1];
  return label.replace(regex, mnemonicInText ? '$2$3' : '').trim();
}
exports.cleanMnemonic = _get__("cleanMnemonic");
function parseAccelerator(accelerator) {
  let acc = accelerator.toString();
  if (!_get__("platform_1").isMacintosh) {
    acc = acc.replace(/(Cmd)|(Command)/gi, '');
  } else {
    acc = acc.replace(/(Ctrl)|(Control)/gi, '');
  }
  acc = acc.replace(/(Or)/gi, '');
  return acc;
}
exports.parseAccelerator = _get__("parseAccelerator");
function applyFill(element, svgColor, fgColor, color = true) {
  let fillColor = '';
  if (svgColor) fillColor = svgColor.toString();else if (fgColor) fillColor = fgColor.toString();
  if (element && element !== null) {
    if (color) element.style.color = fillColor;else element.style.backgroundColor = fillColor;
  }
}
exports.applyFill = _get__("applyFill");
function loadWindowIcons(icons) {
  if (!icons) return;
  const jWindowsIcons = __webpack_require__("./node_modules/custom-electron-titlebar sync recursive")(icons);
  return {
    icons: jWindowsIcons,
    platformIcons: jWindowsIcons[(0, _get__("platform_1").PlatformToString)(_get__("platform_1").platform).toLocaleLowerCase()]
  };
}
exports.loadWindowIcons = _get__("loadWindowIcons");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "color_1":
      return color_1;
    case "platform_1":
      return platform_1;
    case "getPx":
      return getPx;
    case "mnemonicMenuLabel":
      return mnemonicMenuLabel;
    case "mnemonicButtonLabel":
      return mnemonicButtonLabel;
    case "cleanMnemonic":
      return cleanMnemonic;
    case "parseAccelerator":
      return parseAccelerator;
    case "applyFill":
      return applyFill;
    case "loadWindowIcons":
      return loadWindowIcons;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/index.js":
/*!********************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/index.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TitlebarColor = exports.Titlebar = exports.CustomTitlebar = void 0;
const titlebar_1 = __webpack_require__(/*! ./titlebar */ "./node_modules/custom-electron-titlebar/titlebar/index.js");
Object.defineProperty(exports, "CustomTitlebar", ({
  enumerable: true,
  get: function () {
    return _get__("titlebar_1").CustomTitlebar;
  }
}));
Object.defineProperty(exports, "Titlebar", ({
  enumerable: true,
  get: function () {
    return _get__("titlebar_1").CustomTitlebar;
  }
}));
const color_1 = __webpack_require__(/*! ./base/common/color */ "./node_modules/custom-electron-titlebar/base/common/color.js");
Object.defineProperty(exports, "TitlebarColor", ({
  enumerable: true,
  get: function () {
    return _get__("color_1").Color;
  }
}));
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "titlebar_1":
      return titlebar_1;
    case "color_1":
      return color_1;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/menubar/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/menubar/index.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _get__("__createBinding")(result, mod, k);
  _get__("__setModuleDefault")(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuBar = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const DOM = _get__("__importStar")(__webpack_require__(/*! ../base/common/dom */ "./node_modules/custom-electron-titlebar/base/common/dom.js"));
const event_1 = __webpack_require__(/*! ../base/common/event */ "./node_modules/custom-electron-titlebar/base/common/event.js");
const lifecycle_1 = __webpack_require__(/*! ../base/common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const platform_1 = __webpack_require__(/*! ../base/common/platform */ "./node_modules/custom-electron-titlebar/base/common/platform.js");
const keyboardEvent_1 = __webpack_require__(/*! ../base/browser/keyboardEvent */ "./node_modules/custom-electron-titlebar/base/browser/keyboardEvent.js");
const keyCodes_1 = __webpack_require__(/*! ../base/common/keyCodes */ "./node_modules/custom-electron-titlebar/base/common/keyCodes.js");
const consts_1 = __webpack_require__(/*! ../consts */ "./node_modules/custom-electron-titlebar/consts.js");
const menu_1 = __webpack_require__(/*! ./menu */ "./node_modules/custom-electron-titlebar/menubar/menu/index.js");
const async_1 = __webpack_require__(/*! ../base/common/async */ "./node_modules/custom-electron-titlebar/base/common/async.js");
const mouseEvent_1 = __webpack_require__(/*! ../base/browser/mouseEvent */ "./node_modules/custom-electron-titlebar/base/browser/mouseEvent.js");
const touch_1 = __webpack_require__(/*! ../base/browser/touch */ "./node_modules/custom-electron-titlebar/base/browser/touch.js");
const strings = _get__("__importStar")(__webpack_require__(/*! ../base/common/strings */ "./node_modules/custom-electron-titlebar/base/common/strings.js"));
const $ = _get__("DOM").$;
var MenubarState;
(function (MenubarState) {
  MenubarState[MenubarState["HIDDEN"] = 0] = "HIDDEN";
  MenubarState[MenubarState["VISIBLE"] = 1] = "VISIBLE";
  MenubarState[MenubarState["FOCUSED"] = 2] = "FOCUSED";
  MenubarState[MenubarState["OPEN"] = 3] = "OPEN";
})(_get__("MenubarState") || _assign__("MenubarState", {}));
class MenuBar extends _get__("lifecycle_1").Disposable {
  constructor(container, menuIcons, currentOptions, options, closeMenu = () => {}) {
    super();
    this.container = container;
    this.menuIcons = menuIcons;
    this.currentOptions = currentOptions;
    this.options = options;
    this.closeMenu = closeMenu;
    // Input-related
    this._mnemonicsInUse = false;
    this.openedViaKeyboard = false;
    this.awaitingAltRelease = false;
    this.ignoreNextMouseUp = false;
    this.updatePending = false;
    this.numMenusShown = 0;
    this.overflowLayoutScheduled = undefined;
    this.menuStyle = {};
    this.container.setAttribute('role', 'menubar');
    if (this.isCompact) {
      this.container.classList.add('compact');
    }
    this.menus = [];
    this.mnemonics = new Map();
    this._focusState = _get__("MenubarState").VISIBLE;
    this._onVisibilityChange = this._register(new (_get__("event_1").Emitter)());
    this._onFocusStateChange = this._register(new (_get__("event_1").Emitter)());
    this.createOverflowMenu();
    this.menuUpdater = this._register(new (_get__("async_1").RunOnceScheduler)(() => this.update(), 200));
    // this.actionRunner = this.options.actionRunner ?? this._register(new ActionRunner());
    this.registerListeners();
    this.setUnfocusedState();
  }
  registerListeners() {
    /* this._register(this.actionRunner.onWillRun(() => {
        this.setUnfocusedState();
    })); */
    if (!_get__("platform_1").isMacintosh) {
      this._register(_get__("DOM").addDisposableListener(window, _get__("DOM").EventType.RESIZE, () => {
        this.blur();
      }));
    }
    this._register(_get__("DOM").ModifierKeyEmitter.getInstance().event(this.onModifierKeyToggled, this));
    this._register(_get__("DOM").addDisposableListener(this.container, _get__("DOM").EventType.KEY_DOWN, e => {
      const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
      let eventHandled = true;
      const key = !!e.key ? e.key.toLocaleLowerCase() : '';
      const tabNav = _get__("platform_1").isMacintosh && !this.isCompact;
      if (event.equals(15 /* KeyCode.LeftArrow */) || tabNav && event.equals(2 /* KeyCode.Tab */ | 1024 /* KeyMod.Shift */)) {
        this.focusPrevious();
      } else if (event.equals(17 /* KeyCode.RightArrow */) || tabNav && event.equals(2 /* KeyCode.Tab */)) {
        this.focusNext();
      } else if (event.equals(9 /* KeyCode.Escape */) && this.isFocused && !this.isOpen) {
        this.setUnfocusedState();
      } else if (!this.isOpen && !event.ctrlKey && this.options.enableMnemonics && this.mnemonicsInUse && this.mnemonics.has(key)) {
        const menuIndex = this.mnemonics.get(key);
        this.onMenuTriggered(menuIndex, false);
      } else {
        eventHandled = false;
      }
      // Never allow default tab behavior when not compact
      if (!this.isCompact && (event.equals(2 /* KeyCode.Tab */ | 1024 /* KeyMod.Shift */) || event.equals(2 /* KeyCode.Tab */))) {
        event.preventDefault();
      }
      if (eventHandled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }));
    this._register(_get__("DOM").addDisposableListener(window, _get__("DOM").EventType.MOUSE_DOWN, () => {
      // This mouse event is outside the menubar so it counts as a focus out
      if (this.isFocused) {
        this.setUnfocusedState();
      }
    }));
    this._register(_get__("DOM").addDisposableListener(this.container, _get__("DOM").EventType.FOCUS_IN, e => {
      const event = e;
      if (event.relatedTarget) {
        if (!this.container.contains(event.relatedTarget)) {
          this.focusToReturn = event.relatedTarget;
        }
      }
    }));
    this._register(_get__("DOM").addDisposableListener(this.container, _get__("DOM").EventType.FOCUS_OUT, e => {
      const event = e;
      // We are losing focus and there is a target, reset focusToReturn value as not to redirect
      if (event.relatedTarget && !this.container.contains(event.relatedTarget)) {
        this.focusToReturn = undefined;
        this.setUnfocusedState();
      }
    }));
    this._register(_get__("DOM").addDisposableListener(window, _get__("DOM").EventType.KEY_DOWN, e => {
      if (!this.options.enableMnemonics || !e.altKey || e.ctrlKey || e.defaultPrevented) {
        return;
      }
      const key = e.key.toLocaleLowerCase();
      if (!this.mnemonics.has(key)) {
        return;
      }
      this.mnemonicsInUse = true;
      this.updateMnemonicVisibility(true);
      const menuIndex = this.mnemonics.get(key);
      this.onMenuTriggered(menuIndex, false);
    }));
  }
  push(menu) {
    const topLevelMenus = menu.items;
    topLevelMenus.forEach(menuBarMenu => {
      const menuIndex = this.menus.length;
      const cleanMenuLabel = (0, _get__("consts_1").cleanMnemonic)(menuBarMenu.label);
      const mnemonicMatches = _get__("consts_1").MENU_MNEMONIC_REGEX.exec(menuBarMenu.label);
      // Register mnemonics
      if (mnemonicMatches) {
        const mnemonic = !!mnemonicMatches[1] ? mnemonicMatches[1] : mnemonicMatches[3];
        this.registerMnemonic(this.menus.length, mnemonic);
      }
      if (this.isCompact) {
        this.menus.push({
          label: '',
          actions: menuBarMenu.submenu
        });
      } else {
        const buttonElement = _get__("$")('.cet-menubar-menu-button', {
          role: 'menuitem',
          tabindex: -1,
          'aria-label': cleanMenuLabel,
          'aria-haspopup': true
        });
        const titleElement = _get__("$")('.cet-menubar-menu-title', {
          role: 'none',
          'aria-hidden': true
        });
        buttonElement.appendChild(titleElement);
        this.container.insertBefore(buttonElement, this.overflowMenu.buttonElement);
        this.updateLabels(titleElement, buttonElement, menuBarMenu.label);
        this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.KEY_UP, e => {
          const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
          let eventHandled = true;
          if ((event.equals(18 /* KeyCode.DownArrow */) || event.equals(3 /* KeyCode.Enter */)) && !this.isOpen) {
            this.focusedMenu = {
              index: menuIndex
            };
            this.openedViaKeyboard = true;
            this.focusState = _get__("MenubarState").OPEN;
          } else {
            eventHandled = false;
          }
          if (eventHandled) {
            event.preventDefault();
            event.stopPropagation();
          }
        }));
        this._register(_get__("touch_1").Gesture.addTarget(buttonElement));
        this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("touch_1").EventType.Tap, e => {
          // Ignore this touch if the menu is touched
          if (this.isOpen && this.focusedMenu && this.focusedMenu.holder && _get__("DOM").isAncestor(e.initialTarget, this.focusedMenu.holder)) {
            return;
          }
          this.ignoreNextMouseUp = false;
          this.onMenuTriggered(menuIndex, true);
          e.preventDefault();
          e.stopPropagation();
        }));
        this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.MOUSE_DOWN, e => {
          // Ignore non-left-click
          const mouseEvent = new (_get__("mouseEvent_1").StandardMouseEvent)(e);
          if (!mouseEvent.leftButton) {
            e.preventDefault();
            return;
          }
          if (!this.isOpen) {
            // Open the menu with mouse down and ignore the following mouse up event
            this.ignoreNextMouseUp = true;
            this.onMenuTriggered(menuIndex, true);
          } else {
            this.ignoreNextMouseUp = false;
          }
          e.preventDefault();
          e.stopPropagation();
        }));
        this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.MOUSE_UP, e => {
          if (e.defaultPrevented) {
            return;
          }
          if (!this.ignoreNextMouseUp) {
            if (this.isFocused) {
              this.onMenuTriggered(menuIndex, true);
            }
          } else {
            this.ignoreNextMouseUp = false;
          }
        }));
        this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.MOUSE_ENTER, () => {
          if (this.isOpen && !this.isCurrentMenu(menuIndex)) {
            buttonElement.focus();
            this.cleanupMenu();
            this.showMenu(menuIndex, false);
          } else if (this.isFocused && !this.isOpen) {
            this.focusedMenu = {
              index: menuIndex
            };
            buttonElement.focus();
          }
        }));
        this.menus.push({
          label: menuBarMenu.label,
          actions: menuBarMenu.submenu,
          buttonElement,
          titleElement
        });
      }
    });
  }
  createOverflowMenu() {
    const label = this.isCompact ? 'Compact' : 'More';
    const buttonElement = _get__("$")('.cet-menubar-menu-button', {
      role: 'menuitem',
      tabindex: this.isCompact ? 0 : -1,
      'aria-label': label,
      'aria-haspopup': true
    });
    const titleElement = _get__("$")('.cet-menubar-menu-title.cet-toggle-more', {
      role: 'none',
      'aria-hidden': true
    });
    buttonElement.appendChild(titleElement);
    this.container.appendChild(buttonElement);
    buttonElement.style.visibility = 'hidden';
    this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.KEY_UP, e => {
      const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
      let eventHandled = true;
      const triggerKeys = [3 /* KeyCode.Enter */];
      if (!this.isCompact) {
        triggerKeys.push(18 /* KeyCode.DownArrow */);
      } else {
        triggerKeys.push(10 /* KeyCode.Space */);
        if (this.options.compactMode === _get__("menu_1").Direction.Right) {
          triggerKeys.push(17 /* KeyCode.RightArrow */);
        } else if (this.options.compactMode === _get__("menu_1").Direction.Left) {
          triggerKeys.push(15 /* KeyCode.LeftArrow */);
        }
      }

      if (triggerKeys.some(k => event.equals(k)) && !this.isOpen) {
        this.focusedMenu = {
          index: _get__("MenuBar").OVERFLOW_INDEX
        };
        this.openedViaKeyboard = true;
        this.focusState = _get__("MenubarState").OPEN;
      } else {
        eventHandled = false;
      }
      if (eventHandled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }));
    this._register(_get__("touch_1").Gesture.addTarget(buttonElement));
    this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("touch_1").EventType.Tap, e => {
      // Ignore this touch if the menu is touched
      if (this.isOpen && this.focusedMenu && this.focusedMenu.holder && _get__("DOM").isAncestor(e.initialTarget, this.focusedMenu.holder)) {
        return;
      }
      this.ignoreNextMouseUp = false;
      this.onMenuTriggered(_get__("MenuBar").OVERFLOW_INDEX, true);
      e.preventDefault();
      e.stopPropagation();
    }));
    this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.MOUSE_DOWN, e => {
      // Ignore non-left-click
      const mouseEvent = new (_get__("mouseEvent_1").StandardMouseEvent)(e);
      if (!mouseEvent.leftButton) {
        e.preventDefault();
        return;
      }
      if (!this.isOpen) {
        // Open the menu with mouse down and ignore the following mouse up event
        this.ignoreNextMouseUp = true;
        this.onMenuTriggered(_get__("MenuBar").OVERFLOW_INDEX, true);
      } else {
        this.ignoreNextMouseUp = false;
      }
      e.preventDefault();
      e.stopPropagation();
    }));
    this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.MOUSE_UP, e => {
      if (e.defaultPrevented) {
        return;
      }
      if (!this.ignoreNextMouseUp) {
        if (this.isFocused) {
          this.onMenuTriggered(_get__("MenuBar").OVERFLOW_INDEX, true);
        }
      } else {
        this.ignoreNextMouseUp = false;
      }
    }));
    this._register(_get__("DOM").addDisposableListener(buttonElement, _get__("DOM").EventType.MOUSE_ENTER, () => {
      if (this.isOpen && !this.isCurrentMenu(_get__("MenuBar").OVERFLOW_INDEX)) {
        this.overflowMenu.buttonElement.focus();
        this.cleanupMenu();
        this.showMenu(_get__("MenuBar").OVERFLOW_INDEX, false);
      } else if (this.isFocused && !this.isOpen) {
        this.focusedMenu = {
          index: _get__("MenuBar").OVERFLOW_INDEX
        };
        buttonElement.focus();
      }
    }));
    this.overflowMenu = {
      buttonElement,
      titleElement,
      label: 'More'
    };
  }
  setStyles(style) {
    this.menuStyle = style;
  }
  updateMenu(menu) {
    const menuToUpdate = this.menus.filter(menuBarMenu => menuBarMenu.label === menu.label);
    if (menuToUpdate && menuToUpdate.length) {
      // menuToUpdate[0].actions = menu.actions;
    }
  }
  dispose() {
    super.dispose();
    this.menus.forEach(menuBarMenu => {
      menuBarMenu.titleElement?.remove();
      menuBarMenu.buttonElement?.remove();
    });
    this.overflowMenu.titleElement.remove();
    this.overflowMenu.buttonElement.remove();
    (0, _get__("lifecycle_1").dispose)(this.overflowLayoutScheduled);
    this.overflowLayoutScheduled = undefined;
  }
  blur() {
    this.setUnfocusedState();
  }
  getWidth() {
    if (!this.isCompact && this.menus) {
      const left = this.menus[0].buttonElement.getBoundingClientRect().left;
      const right = this.hasOverflow ? this.overflowMenu.buttonElement.getBoundingClientRect().right : this.menus[this.menus.length - 1].buttonElement.getBoundingClientRect().right;
      return right - left;
    }
    return 0;
  }
  getHeight() {
    return this.container.clientHeight;
  }
  toggleFocus() {
    if (!this.isFocused && this.options.visibility !== 'hidden') {
      this.mnemonicsInUse = true;
      this.focusedMenu = {
        index: this.numMenusShown > 0 ? 0 : _get__("MenuBar").OVERFLOW_INDEX
      };
      this.focusState = _get__("MenubarState").FOCUSED;
    } else if (!this.isOpen) {
      this.setUnfocusedState();
    }
  }
  updateOverflowAction() {
    if (!this.menus || !this.menus.length) {
      return;
    }
    const overflowMenuOnlyClass = 'overflow-menu-only';
    // Remove overflow only restriction to allow the most space
    this.container.classList.toggle(overflowMenuOnlyClass, false);
    const sizeAvailable = this.container.offsetWidth;
    let currentSize = 0;
    let full = this.isCompact;
    const prevNumMenusShown = this.numMenusShown;
    this.numMenusShown = 0;
    const showableMenus = this.menus.filter(menu => menu.buttonElement !== undefined && menu.titleElement !== undefined);
    for (const menuBarMenu of showableMenus) {
      if (!full) {
        const size = menuBarMenu.buttonElement.offsetWidth;
        if (currentSize + size > sizeAvailable) {
          full = true;
        } else {
          currentSize += size;
          this.numMenusShown++;
          if (this.numMenusShown > prevNumMenusShown) {
            menuBarMenu.buttonElement.style.visibility = 'visible';
          }
        }
      }
      if (full) {
        menuBarMenu.buttonElement.style.visibility = 'hidden';
      }
    }
    // If below minimium menu threshold, show the overflow menu only as hamburger menu
    if (this.numMenusShown - 1 <= showableMenus.length / 2) {
      for (const menuBarMenu of showableMenus) {
        menuBarMenu.buttonElement.style.visibility = 'hidden';
      }
      full = true;
      this.numMenusShown = 0;
      currentSize = 0;
    }
    // Overflow
    if (this.isCompact) {
      // this.overflowMenu.actions = [];
      for (let idx = this.numMenusShown; idx < this.menus.length; idx++) {
        // this.overflowMenu.actions.push(new SubmenuAction(`menubar.submenu.${this.menus[idx].label}`, this.menus[idx].label, this.menus[idx].actions || []));
      }
      /* const compactMenuActions = this.options.getCompactMenuActions?.();
      if (compactMenuActions && compactMenuActions.length) {
          //this.overflowMenu.actions.push(new Separator());
          this.overflowMenu.actions.push(...compactMenuActions);
      } */
      this.overflowMenu.buttonElement.style.visibility = 'visible';
    } else if (full) {
      // Can't fit the more button, need to remove more menus
      while (currentSize + this.overflowMenu.buttonElement.offsetWidth > sizeAvailable && this.numMenusShown > 0) {
        this.numMenusShown--;
        const size = showableMenus[this.numMenusShown].buttonElement.offsetWidth;
        showableMenus[this.numMenusShown].buttonElement.style.visibility = 'hidden';
        currentSize -= size;
      }
      // this.overflowMenu.actions = [];
      for (let idx = this.numMenusShown; idx < showableMenus.length; idx++) {
        // this.overflowMenu.actions.push(new SubmenuAction(`menubar.submenu.${showableMenus[idx].label}`, showableMenus[idx].label, showableMenus[idx].actions || []));
      }
      if (this.overflowMenu.buttonElement.nextElementSibling !== showableMenus[this.numMenusShown].buttonElement) {
        this.overflowMenu.buttonElement.remove();
        this.container.insertBefore(this.overflowMenu.buttonElement, showableMenus[this.numMenusShown].buttonElement);
      }
      this.overflowMenu.buttonElement.style.visibility = 'visible';
    } else {
      this.overflowMenu.buttonElement.remove();
      this.container.appendChild(this.overflowMenu.buttonElement);
      this.overflowMenu.buttonElement.style.visibility = 'hidden';
    }
    // If we are only showing the overflow, add this class to avoid taking up space
    this.container.classList.toggle(overflowMenuOnlyClass, this.numMenusShown === 0);
  }
  updateLabels(titleElement, buttonElement, label) {
    const cleanMenuLabel = (0, _get__("consts_1").cleanMnemonic)(label);
    // Update the button label to reflect mnemonics
    if (this.options.enableMnemonics) {
      const cleanLabel = _get__("strings").escape(label);
      // This is global so reset it
      _get__("consts_1").MENU_ESCAPED_MNEMONIC_REGEX.lastIndex = 0;
      let escMatch = _get__("consts_1").MENU_ESCAPED_MNEMONIC_REGEX.exec(cleanLabel);
      // We can't use negative lookbehind so we match our negative and skip
      while (escMatch && escMatch[1]) {
        escMatch = _get__("consts_1").MENU_ESCAPED_MNEMONIC_REGEX.exec(cleanLabel);
      }
      const replaceDoubleEscapes = str => str.replace(/&amp;&amp;/g, '&amp;');
      if (escMatch) {
        titleElement.innerText = '';
        titleElement.append(_get__("strings").ltrim(replaceDoubleEscapes(cleanLabel.substring(0, escMatch.index)), ' '), _get__("$")('mnemonic', {
          'aria-hidden': 'true'
        }, escMatch[3]), _get__("strings").rtrim(replaceDoubleEscapes(cleanLabel.substring(escMatch.index + escMatch[0].length)), ' '));
      } else {
        titleElement.innerText = replaceDoubleEscapes(cleanLabel).trim();
      }
    } else {
      titleElement.innerText = cleanMenuLabel.replace(/&&/g, '&');
    }
    const mnemonicMatches = _get__("consts_1").MENU_MNEMONIC_REGEX.exec(label);
    // Register mnemonics
    if (mnemonicMatches) {
      const mnemonic = !!mnemonicMatches[1] ? mnemonicMatches[1] : mnemonicMatches[3];
      if (this.options.enableMnemonics) {
        buttonElement.setAttribute('aria-keyshortcuts', 'Alt+' + mnemonic.toLocaleLowerCase());
      } else {
        buttonElement.removeAttribute('aria-keyshortcuts');
      }
    }
  }
  update(options) {
    if (options) {
      this.options = options;
    }
    // Don't update while using the menu
    if (this.isFocused) {
      this.updatePending = true;
      return;
    }
    this.menus.forEach(menuBarMenu => {
      if (!menuBarMenu.buttonElement || !menuBarMenu.titleElement) {
        return;
      }
      this.updateLabels(menuBarMenu.titleElement, menuBarMenu.buttonElement, menuBarMenu.label);
    });
    if (!this.overflowLayoutScheduled) {
      this.overflowLayoutScheduled = _get__("DOM").scheduleAtNextAnimationFrame(() => {
        this.updateOverflowAction();
        this.overflowLayoutScheduled = undefined;
      });
    }
    this.setUnfocusedState();
  }
  registerMnemonic(menuIndex, mnemonic) {
    this.mnemonics.set(mnemonic.toLocaleLowerCase(), menuIndex);
  }
  hideMenubar() {
    if (this.container.style.display !== 'none') {
      this.container.style.display = 'none';
      this._onVisibilityChange.fire(false);
    }
  }
  showMenubar() {
    if (this.container.style.display !== 'flex') {
      this.container.style.display = 'flex';
      this._onVisibilityChange.fire(true);
      this.updateOverflowAction();
    }
  }
  get focusState() {
    return this._focusState;
  }
  set focusState(value) {
    if (this._focusState >= _get__("MenubarState").FOCUSED && value < _get__("MenubarState").FOCUSED) {
      // Losing focus, update the menu if needed
      if (this.updatePending) {
        this.menuUpdater.schedule();
        this.updatePending = false;
      }
    }
    if (value === this._focusState) {
      return;
    }
    const isVisible = this.isVisible;
    const isOpen = this.isOpen;
    const isFocused = this.isFocused;
    this._focusState = value;
    switch (value) {
      case _get__("MenubarState").HIDDEN:
        if (isVisible) {
          this.hideMenubar();
        }
        if (isOpen) {
          this.cleanupMenu();
        }
        if (isFocused) {
          this.focusedMenu = undefined;
          if (this.focusToReturn) {
            this.focusToReturn.focus();
            this.focusToReturn = undefined;
          }
        }
        break;
      case _get__("MenubarState").VISIBLE:
        if (!isVisible) {
          this.showMenubar();
        }
        if (isOpen) {
          this.cleanupMenu();
        }
        if (isFocused) {
          if (this.focusedMenu) {
            if (this.focusedMenu.index === _get__("MenuBar").OVERFLOW_INDEX) {
              this.overflowMenu.buttonElement.blur();
            } else {
              this.menus[this.focusedMenu.index].buttonElement?.blur();
            }
          }
          this.focusedMenu = undefined;
          if (this.focusToReturn) {
            this.focusToReturn.focus();
            this.focusToReturn = undefined;
          }
        }
        break;
      case _get__("MenubarState").FOCUSED:
        if (!isVisible) {
          this.showMenubar();
        }
        if (isOpen) {
          this.cleanupMenu();
        }
        if (this.focusedMenu) {
          if (this.focusedMenu.index === _get__("MenuBar").OVERFLOW_INDEX) {
            this.overflowMenu.buttonElement.focus();
          } else {
            this.menus[this.focusedMenu.index].buttonElement?.focus();
          }
        }
        break;
      case _get__("MenubarState").OPEN:
        if (!isVisible) {
          this.showMenubar();
        }
        if (this.focusedMenu) {
          this.showMenu(this.focusedMenu.index, this.openedViaKeyboard);
        }
        break;
    }
    this._focusState = value;
    this._onFocusStateChange.fire(this.focusState >= _get__("MenubarState").FOCUSED);
  }
  get isVisible() {
    return this.focusState >= _get__("MenubarState").VISIBLE;
  }
  get isFocused() {
    return this.focusState >= _get__("MenubarState").FOCUSED;
  }
  get isOpen() {
    return this.focusState >= _get__("MenubarState").OPEN;
  }
  get hasOverflow() {
    return this.isCompact || this.numMenusShown < this.menus.length;
  }
  get isCompact() {
    return this.options.compactMode !== undefined;
  }
  setUnfocusedState() {
    if (this.options.visibility === 'toggle' || this.options.visibility === 'hidden') {
      this.focusState = _get__("MenubarState").HIDDEN;
    } else if (this.options.visibility === 'classic') {
      this.focusState = _get__("MenubarState").HIDDEN;
    } else {
      this.focusState = _get__("MenubarState").VISIBLE;
    }
    this.ignoreNextMouseUp = false;
    this.mnemonicsInUse = false;
    this.updateMnemonicVisibility(false);
  }
  focusPrevious() {
    if (!this.focusedMenu || this.numMenusShown === 0) {
      return;
    }
    let newFocusedIndex = (this.focusedMenu.index - 1 + this.numMenusShown) % this.numMenusShown;
    if (this.focusedMenu.index === _get__("MenuBar").OVERFLOW_INDEX) {
      newFocusedIndex = this.numMenusShown - 1;
    } else if (this.focusedMenu.index === 0 && this.hasOverflow) {
      newFocusedIndex = _get__("MenuBar").OVERFLOW_INDEX;
    }
    if (newFocusedIndex === this.focusedMenu.index) {
      return;
    }
    if (this.isOpen) {
      this.cleanupMenu();
      this.showMenu(newFocusedIndex);
    } else if (this.isFocused) {
      this.focusedMenu.index = newFocusedIndex;
      if (newFocusedIndex === _get__("MenuBar").OVERFLOW_INDEX) {
        this.overflowMenu.buttonElement.focus();
      } else {
        this.menus[newFocusedIndex].buttonElement?.focus();
      }
    }
  }
  focusNext() {
    if (!this.focusedMenu || this.numMenusShown === 0) {
      return;
    }
    let newFocusedIndex = (this.focusedMenu.index + 1) % this.numMenusShown;
    if (this.focusedMenu.index === _get__("MenuBar").OVERFLOW_INDEX) {
      newFocusedIndex = 0;
    } else if (this.focusedMenu.index === this.numMenusShown - 1) {
      newFocusedIndex = _get__("MenuBar").OVERFLOW_INDEX;
    }
    if (newFocusedIndex === this.focusedMenu.index) {
      return;
    }
    if (this.isOpen) {
      this.cleanupMenu();
      this.showMenu(newFocusedIndex);
    } else if (this.isFocused) {
      this.focusedMenu.index = newFocusedIndex;
      if (newFocusedIndex === _get__("MenuBar").OVERFLOW_INDEX) {
        this.overflowMenu.buttonElement.focus();
      } else {
        this.menus[newFocusedIndex].buttonElement?.focus();
      }
    }
  }
  updateMnemonicVisibility(visible) {
    if (this.menus) {
      this.menus.forEach(menuBarMenu => {
        if (menuBarMenu.titleElement && menuBarMenu.titleElement.children.length) {
          const child = menuBarMenu.titleElement.children.item(0);
          if (child) {
            child.style.textDecoration = this.options.alwaysOnMnemonics || visible ? 'underline' : '';
          }
        }
      });
    }
  }
  get mnemonicsInUse() {
    return this._mnemonicsInUse;
  }
  set mnemonicsInUse(value) {
    this._mnemonicsInUse = value;
  }
  get shouldAltKeyFocus() {
    if (_get__("platform_1").isMacintosh) {
      return false;
    }
    if (!this.options.disableAltFocus) {
      return true;
    }
    if (this.options.visibility === 'toggle') {
      return true;
    }
    return false;
  }
  get onVisibilityChange() {
    return this._onVisibilityChange.event;
  }
  get onFocusStateChange() {
    return this._onFocusStateChange.event;
  }
  onMenuTriggered(menuIndex, clicked) {
    if (!this.menus[menuIndex].actions) {
      _get__("electron_1").ipcRenderer.send('menu-event', menuIndex + 1);
      return;
    }
    if (this.isOpen) {
      if (this.isCurrentMenu(menuIndex)) {
        this.setUnfocusedState();
      } else {
        this.cleanupMenu();
        this.showMenu(menuIndex, this.openedViaKeyboard);
      }
    } else {
      this.focusedMenu = {
        index: menuIndex
      };
      this.openedViaKeyboard = !clicked;
      this.focusState = _get__("MenubarState").OPEN;
    }
  }
  onModifierKeyToggled(modifierKeyStatus) {
    const allModifiersReleased = !modifierKeyStatus.altKey && !modifierKeyStatus.ctrlKey && !modifierKeyStatus.shiftKey && !modifierKeyStatus.metaKey;
    if (this.options.visibility === 'hidden') {
      return;
    }
    // Prevent alt-key default if the menu is not hidden and we use alt to focus
    if (modifierKeyStatus.event && this.shouldAltKeyFocus) {
      if (_get__("keyCodes_1").ScanCodeUtils.toEnum(modifierKeyStatus.event.code) === 159 /* ScanCode.AltLeft */) {
        modifierKeyStatus.event.preventDefault();
      }
    }
    // Alt key pressed while menu is focused. This should return focus away from the menubar
    if (this.isFocused && modifierKeyStatus.lastKeyPressed === 'alt' && modifierKeyStatus.altKey) {
      this.setUnfocusedState();
      this.mnemonicsInUse = false;
      this.awaitingAltRelease = true;
    }
    // Clean alt key press and release
    if (allModifiersReleased && modifierKeyStatus.lastKeyPressed === 'alt' && modifierKeyStatus.lastKeyReleased === 'alt') {
      if (!this.awaitingAltRelease) {
        if (!this.isFocused && this.shouldAltKeyFocus) {
          this.mnemonicsInUse = true;
          this.focusedMenu = {
            index: this.numMenusShown > 0 ? 0 : _get__("MenuBar").OVERFLOW_INDEX
          };
          this.focusState = _get__("MenubarState").FOCUSED;
        } else if (!this.isOpen) {
          this.setUnfocusedState();
        }
      }
    }
    // Alt key released
    if (!modifierKeyStatus.altKey && modifierKeyStatus.lastKeyReleased === 'alt') {
      this.awaitingAltRelease = false;
    }
    if (this.options.enableMnemonics && this.menus && !this.isOpen) {
      this.updateMnemonicVisibility(!this.awaitingAltRelease && modifierKeyStatus.altKey || this.mnemonicsInUse);
    }
  }
  isCurrentMenu(menuIndex) {
    if (!this.focusedMenu) {
      return false;
    }
    return this.focusedMenu.index === menuIndex;
  }
  cleanupMenu() {
    if (this.focusedMenu) {
      // Remove focus from the menus first
      if (this.focusedMenu.index === _get__("MenuBar").OVERFLOW_INDEX) {
        this.overflowMenu.buttonElement.focus();
      } else {
        this.menus[this.focusedMenu.index].buttonElement?.focus();
      }
      if (this.focusedMenu.holder) {
        this.focusedMenu.holder.parentElement?.classList.remove('open');
        this.focusedMenu.holder.remove();
      }
      this.focusedMenu.widget?.dispose();
      this.focusedMenu = {
        index: this.focusedMenu.index
      };
    }
  }
  showMenu(menuIndex, selectFirst = true) {
    const actualMenuIndex = menuIndex >= this.numMenusShown ? _get__("MenuBar").OVERFLOW_INDEX : menuIndex;
    const customMenu = actualMenuIndex === _get__("MenuBar").OVERFLOW_INDEX ? this.overflowMenu : this.menus[actualMenuIndex];
    if (!customMenu.actions || !customMenu.buttonElement || !customMenu.titleElement) {
      return;
    }
    const menuHolder = _get__("$")('.cet-menubar-menu-container', {
      title: ''
    });
    customMenu.buttonElement.classList.add('open');
    const titleBoundingRect = customMenu.titleElement.getBoundingClientRect();
    const titleBoundingRectZoom = _get__("DOM").getDomNodeZoomLevel(customMenu.titleElement);
    if (this.options.compactMode === _get__("menu_1").Direction.Right) {
      menuHolder.style.top = `${titleBoundingRect.top}px`;
      menuHolder.style.left = `${titleBoundingRect.left + this.container.clientWidth}px`;
    } else if (this.options.compactMode === _get__("menu_1").Direction.Left) {
      menuHolder.style.top = `${titleBoundingRect.top}px`;
      menuHolder.style.right = `${this.container.clientWidth}px`;
      menuHolder.style.left = 'auto';
    } else {
      menuHolder.style.top = `${titleBoundingRect.bottom * titleBoundingRectZoom}px`;
      menuHolder.style.left = `${titleBoundingRect.left * titleBoundingRectZoom}px`;
    }
    customMenu.buttonElement.appendChild(menuHolder);
    const menuOptions = {
      // getKeyBinding: this.options.getKeybinding,
      // actionRunner: this.actionRunner,
      enableMnemonics: this.options.alwaysOnMnemonics || this.mnemonicsInUse && this.options.enableMnemonics,
      ariaLabel: customMenu.buttonElement.getAttribute('aria-label') ?? undefined
      // expandDirection: this.isCompact ? this.options.compactMode : Direction.Right,
      // useEventAsContext: true
    };

    const menuWidget = this._register(new (_get__("menu_1").CETMenu)(menuHolder, this.menuIcons, this.currentOptions, menuOptions, this.closeMenu));
    menuWidget.createMenu(customMenu.actions?.items ?? []);
    menuWidget.applyStyle(this.menuStyle);
    this._register(menuWidget.onDidCancel(() => {
      this.focusState = _get__("MenubarState").FOCUSED;
    }));
    if (actualMenuIndex !== menuIndex) {
      menuWidget.trigger(menuIndex - this.numMenusShown);
    } else {
      menuWidget.focus(selectFirst);
    }
    this.focusedMenu = {
      index: actualMenuIndex,
      holder: menuHolder,
      widget: menuWidget
    };
  }
}
exports.MenuBar = _get__("MenuBar");
_get__("MenuBar").OVERFLOW_INDEX = -1;
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "__createBinding":
      return __createBinding;
    case "__setModuleDefault":
      return __setModuleDefault;
    case "__importStar":
      return __importStar;
    case "DOM":
      return DOM;
    case "MenubarState":
      return MenubarState;
    case "event_1":
      return event_1;
    case "async_1":
      return async_1;
    case "platform_1":
      return platform_1;
    case "keyboardEvent_1":
      return keyboardEvent_1;
    case "consts_1":
      return consts_1;
    case "$":
      return $;
    case "touch_1":
      return touch_1;
    case "mouseEvent_1":
      return mouseEvent_1;
    case "menu_1":
      return menu_1;
    case "MenuBar":
      return MenuBar;
    case "lifecycle_1":
      return lifecycle_1;
    case "strings":
      return strings;
    case "electron_1":
      return electron_1;
    case "keyCodes_1":
      return keyCodes_1;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "MenubarState":
      return MenubarState = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/menubar/menu/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/menubar/menu/index.js ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CETMenu = exports.Direction = void 0;
const dom_1 = __webpack_require__(/*! ../../base/common/dom */ "./node_modules/custom-electron-titlebar/base/common/dom.js");
const lifecycle_1 = __webpack_require__(/*! ../../base/common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const item_1 = __webpack_require__(/*! ./item */ "./node_modules/custom-electron-titlebar/menubar/menu/item.js");
const keyCodes_1 = __webpack_require__(/*! ../../base/common/keyCodes */ "./node_modules/custom-electron-titlebar/base/common/keyCodes.js");
const keyboardEvent_1 = __webpack_require__(/*! ../../base/browser/keyboardEvent */ "./node_modules/custom-electron-titlebar/base/browser/keyboardEvent.js");
const event_1 = __webpack_require__(/*! ../../base/common/event */ "./node_modules/custom-electron-titlebar/base/common/event.js");
const separator_1 = __webpack_require__(/*! ./separator */ "./node_modules/custom-electron-titlebar/menubar/menu/separator.js");
const submenu_1 = __webpack_require__(/*! ./submenu */ "./node_modules/custom-electron-titlebar/menubar/menu/submenu.js");
const platform_1 = __webpack_require__(/*! ../../base/common/platform */ "./node_modules/custom-electron-titlebar/base/common/platform.js");
var Direction;
(function (Direction) {
  Direction[Direction["Right"] = 0] = "Right";
  Direction[Direction["Left"] = 1] = "Left";
})(_get__("Direction") || (exports.Direction = _assign__("Direction", {})));
class CETMenu extends _get__("lifecycle_1").Disposable {
  constructor(menuContainer, menuIcons, parentOptions, currentOptions, closeSubMenu = () => {}) {
    super();
    this.menuContainer = menuContainer;
    this.menuIcons = menuIcons;
    this.parentOptions = parentOptions;
    this.currentOptions = currentOptions;
    this.closeSubMenu = closeSubMenu;
    this.focusedItem = undefined;
    this.items = [];
    this.triggerKeys = {
      keys: [3 /* KeyCode.Enter */, 10 /* KeyCode.Space */],
      keyDown: true
    };
    this.parentData = {
      parent: this
    };
    this._onDidCancel = this._register(new (_get__("event_1").Emitter)());
    this.mnemonics = new Map();
    this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.KEY_DOWN, e => {
      const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
      let eventHandled = true;
      if (event.equals(16 /* KeyCode.UpArrow */)) {
        this.focusPrevious();
      } else if (event.equals(18 /* KeyCode.DownArrow */)) {
        this.focusNext();
      } else if (event.equals(9 /* KeyCode.Escape */)) {
        this.cancel();
      } else if (this.isTriggerKeyEvent(event)) {
        // Staying out of the else branch even if not triggered
        if (this.triggerKeys && this.triggerKeys.keyDown) {
          this.doTrigger(event);
        }
      } else {
        eventHandled = false;
      }
      if (eventHandled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }));
    this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.KEY_UP, e => {
      const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
      // Run action on Enter/Space
      if (this.isTriggerKeyEvent(event)) {
        if (this.triggerKeys && !this.triggerKeys.keyDown) {
          this.doTrigger(event);
        }
        event.preventDefault();
        event.stopPropagation();
        // Recompute focused item
      } else if (event.equals(2 /* KeyCode.Tab */) || event.equals(1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */)) {
        this.updateFocusedItem();
      }
    }));
    if (this.currentOptions.enableMnemonics) {
      this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.KEY_DOWN, e => {
        const key = _get__("keyCodes_1").KeyCodeUtils.fromString(e.key);
        if (this.mnemonics.has(key)) {
          const items = this.mnemonics.get(key);
          if (items.length === 1) {
            if (items[0] instanceof _get__("submenu_1").CETSubMenu) {
              this.focusItemByElement(items[0].element);
            }
            items[0].onClick(e);
          }
          if (items.length > 1) {
            const item = items.shift();
            if (item) {
              this.focusItemByElement(item.element);
              items.push(item);
            }
            this.mnemonics.set(key, items);
          }
        }
      }));
    }
    if (_get__("platform_1").isLinux) {
      this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.KEY_DOWN, e => {
        const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
        if (event.equals(14 /* KeyCode.Home */) || event.equals(11 /* KeyCode.PageUp */)) {
          this.focusedItem = this.items.length - 1;
          this.focusNext();
          _get__("dom_1").EventHelper.stop(e, true);
        } else if (event.equals(13 /* KeyCode.End */) || event.equals(12 /* KeyCode.PageDown */)) {
          this.focusedItem = 0;
          this.focusPrevious();
          _get__("dom_1").EventHelper.stop(e, true);
        }
      }));
    }
    if (_get__("platform_1").isFreeBSD) {
      this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.KEY_DOWN, e => {
        const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
        if (event.equals(14 /* KeyCode.Home */) || event.equals(11 /* KeyCode.PageUp */)) {
          this.focusedItem = this.items.length - 1;
          this.focusNext();
          _get__("dom_1").EventHelper.stop(e, true);
        } else if (event.equals(13 /* KeyCode.End */) || event.equals(12 /* KeyCode.PageDown */)) {
          this.focusedItem = 0;
          this.focusPrevious();
          _get__("dom_1").EventHelper.stop(e, true);
        }
      }));
    }
    this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.MOUSE_OUT, e => {
      const relatedTarget = e.relatedTarget;
      if (!(0, _get__("dom_1").isAncestor)(relatedTarget, this.menuContainer)) {
        this.focusedItem = undefined;
        this.updateFocus();
        e.stopPropagation();
      }
    }));
    this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.MOUSE_UP, e => {
      // Absorb clicks in menu dead space https://github.com/Microsoft/vscode/issues/63575
      _get__("dom_1").EventHelper.stop(e, true);
    }));
    this._register((0, _get__("dom_1").addDisposableListener)(this.menuContainer, _get__("dom_1").EventType.MOUSE_OVER, e => {
      let target = e.target;
      if (!target || !(0, _get__("dom_1").isAncestor)(target, this.menuContainer) || target === this.menuContainer) {
        return;
      }
      while (target.parentElement !== this.menuContainer && target.parentElement !== null) {
        target = target.parentElement;
      }
      if ((0, _get__("dom_1").hasClass)(target, 'cet-action-item')) {
        const lastFocusedItem = this.focusedItem;
        this.setFocusedItem(target);
        if (lastFocusedItem !== this.focusedItem) {
          this.updateFocus();
        }
      }
    }));
    if (this.currentOptions.ariaLabel) {
      this.menuContainer.setAttribute('aria-label', this.currentOptions.ariaLabel);
    }
  }
  trigger(index) {
    if (index <= this.items.length && index >= 0) {
      const item = this.items[index];
      if (item instanceof _get__("submenu_1").CETSubMenu) {
        this.focus(index);
      }
    }
  }
  createMenu(menuItems) {
    if (!menuItems) return;
    menuItems.forEach(menuItem => {
      if (!menuItem) return;
      const itemElement = (0, _get__("dom_1").$)('li.cet-action-item', {
        role: 'presentation'
      });
      // Prevent native context menu on actions
      this._register((0, _get__("dom_1").addDisposableListener)(itemElement, _get__("dom_1").EventType.CONTEXT_MENU, e => {
        e.preventDefault();
        e.stopPropagation();
      }));
      let item;
      if (menuItem.type === 'separator') {
        item = new (_get__("separator_1").CETSeparator)(menuItem, this.menuIcons, this.parentOptions, this.currentOptions);
      } else if (menuItem.type === 'submenu' || menuItem.submenu) {
        const submenuItems = menuItem.submenu.items;
        item = new (_get__("submenu_1").CETSubMenu)(menuItem, this.menuIcons, submenuItems, this.parentData, this.parentOptions, this.currentOptions, this.closeSubMenu);
        if (this.currentOptions.enableMnemonics) {
          const mnemonic = item.mnemonic;
          if (mnemonic && item.isEnabled()) {
            let actionItems = [];
            if (this.mnemonics.has(mnemonic)) {
              actionItems = this.mnemonics.get(mnemonic);
            }
            actionItems.push(item);
            this.mnemonics.set(mnemonic, actionItems);
          }
        }
      } else {
        item = new (_get__("item_1").CETMenuItem)(menuItem, this.menuIcons, this.parentOptions, this.currentOptions, this.items, this.closeSubMenu);
        if (this.currentOptions.enableMnemonics) {
          const mnemonic = item.mnemonic;
          if (mnemonic && item.isEnabled()) {
            let actionItems = [];
            if (this.mnemonics.has(mnemonic)) {
              actionItems = this.mnemonics.get(mnemonic);
            }
            actionItems.push(item);
            this.mnemonics.set(mnemonic, actionItems);
          }
        }
      }
      item.render(itemElement);
      this.items.push(item);
      (0, _get__("dom_1").append)(this.menuContainer, itemElement);
    });
  }
  isTriggerKeyEvent(event) {
    let ret = false;
    if (this.triggerKeys) {
      this.triggerKeys.keys.forEach(keyCode => {
        ret = ret || event.equals(keyCode);
      });
    }
    return ret;
  }
  updateFocusedItem() {
    for (let i = 0; i < this.menuContainer.children.length; i++) {
      const elem = this.menuContainer.children[i];
      if ((0, _get__("dom_1").isAncestor)(document.activeElement, elem)) {
        this.focusedItem = i;
        break;
      }
    }
  }
  focus(arg) {
    let selectFirst = false;
    let index;
    if (arg === undefined) {
      selectFirst = true;
    } else if (typeof arg === 'number') {
      index = arg;
    } else if (typeof arg === 'boolean') {
      selectFirst = arg;
    }
    if (selectFirst && typeof this.focusedItem === 'undefined') {
      // Focus the first enabled item
      this.focusedItem = this.items.length - 1;
      this.focusNext();
    } else {
      if (index !== undefined) {
        this.focusedItem = index;
      }
      this.updateFocus();
    }
  }
  focusNext() {
    if (typeof this.focusedItem === 'undefined') {
      this.focusedItem = this.items.length - 1;
    }
    const startIndex = this.focusedItem;
    let item;
    do {
      this.focusedItem = (this.focusedItem + 1) % this.items.length;
      item = this.items[this.focusedItem];
    } while (this.focusedItem !== startIndex && !item.isEnabled() || item.isSeparator());
    if (this.focusedItem === startIndex && !item.isEnabled() || item.isSeparator()) {
      this.focusedItem = undefined;
    }
    this.updateFocus();
  }
  focusPrevious() {
    if (typeof this.focusedItem === 'undefined') {
      this.focusedItem = 0;
    }
    const startIndex = this.focusedItem;
    let item;
    do {
      this.focusedItem = this.focusedItem - 1;
      if (this.focusedItem < 0) {
        this.focusedItem = this.items.length - 1;
      }
      item = this.items[this.focusedItem];
    } while (this.focusedItem !== startIndex && !item.isEnabled() || item.isSeparator());
    if (this.focusedItem === startIndex && !item.isEnabled() || item.isSeparator()) {
      this.focusedItem = undefined;
    }
    this.updateFocus();
  }
  updateFocus() {
    if (typeof this.focusedItem === 'undefined') {
      this.menuContainer.focus();
    }
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (i === this.focusedItem) {
        if (item.isEnabled()) {
          item.focus();
        } else {
          this.menuContainer.focus();
        }
      } else {
        item.blur();
      }
    }
  }
  doTrigger(event) {
    if (typeof this.focusedItem === 'undefined') {
      return; // nothing to focus
    }
    // trigger action
    const item = this.items[this.focusedItem];
    if (item instanceof _get__("item_1").CETMenuItem) {
      item.onClick(event);
    }
  }
  cancel() {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur(); // remove focus from focused action
    }

    this._onDidCancel.fire();
  }
  focusItemByElement(element) {
    const lastFocusedItem = this.focusedItem;
    if (element) this.setFocusedItem(element);
    if (lastFocusedItem !== this.focusedItem) {
      this.updateFocus();
    }
  }
  setFocusedItem(element) {
    this.focusedItem = Array.prototype.findIndex.call(this.container.children, elem => elem === element);
  }
  applyStyle(style) {
    const container = this.menuContainer;
    if (style?.backgroundColor) {
      let transparency = this.parentOptions?.menuTransparency;
      if (transparency < 0) transparency = 0;
      if (transparency > 1) transparency = 1;
      const rgba = style.backgroundColor?.rgba;
      container.style.backgroundColor = `rgb(${rgba.r} ${rgba.g} ${rgba.b} / ${1 - transparency})`;
    }
    if (this.items) {
      this.items.forEach(item => {
        if (item instanceof _get__("item_1").CETMenuItem || item instanceof _get__("separator_1").CETSeparator) {
          item.updateStyle(style);
        }
      });
    }
  }
  get container() {
    return this.menuContainer;
  }
  get onDidCancel() {
    return this._onDidCancel.event;
  }
  dispose() {
    (0, _get__("lifecycle_1").dispose)(this.items);
    this.items = [];
    (0, _get__("dom_1").removeNode)(this.container);
    super.dispose();
  }
}
exports.CETMenu = _get__("CETMenu");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "Direction":
      return Direction;
    case "event_1":
      return event_1;
    case "dom_1":
      return dom_1;
    case "keyboardEvent_1":
      return keyboardEvent_1;
    case "keyCodes_1":
      return keyCodes_1;
    case "submenu_1":
      return submenu_1;
    case "platform_1":
      return platform_1;
    case "separator_1":
      return separator_1;
    case "item_1":
      return item_1;
    case "lifecycle_1":
      return lifecycle_1;
    case "CETMenu":
      return CETMenu;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {
    case "Direction":
      return Direction = _value;
  }
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/menubar/menu/item.js":
/*!********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/menubar/menu/item.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) _get__("__createBinding")(result, mod, k);
  _get__("__setModuleDefault")(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CETMenuItem = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const dom_1 = __webpack_require__(/*! ../../base/common/dom */ "./node_modules/custom-electron-titlebar/base/common/dom.js");
const keyCodes_1 = __webpack_require__(/*! ../../base/common/keyCodes */ "./node_modules/custom-electron-titlebar/base/common/keyCodes.js");
const lifecycle_1 = __webpack_require__(/*! ../../base/common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const consts_1 = __webpack_require__(/*! ../../consts */ "./node_modules/custom-electron-titlebar/consts.js");
const strings = _get__("__importStar")(__webpack_require__(/*! ../../base/common/strings */ "./node_modules/custom-electron-titlebar/base/common/strings.js"));
class CETMenuItem extends _get__("lifecycle_1").Disposable {
  constructor(_item, menuIcons, parentOptions, options, menuItems, closeSubMenu = () => {}) {
    super();
    this._item = _item;
    this.menuIcons = menuIcons;
    this.parentOptions = parentOptions;
    this.options = options;
    this.menuItems = menuItems;
    this.closeSubMenu = closeSubMenu;
    // Set mnemonic
    if (this._item.label && options.enableMnemonics) {
      const label = this._item.label;
      if (label) {
        const matches = _get__("consts_1").MENU_MNEMONIC_REGEX.exec(label);
        if (matches) {
          this._mnemonic = _get__("keyCodes_1").KeyCodeUtils.fromString((!!matches[1] ? matches[1] : matches[2]).toLocaleUpperCase());
        }
      }
    }
  }
  render(el) {
    this._currentElement = el;
    this._register((0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.MOUSE_DOWN, e => {
      if (this.item.enabled && e.button === 0 && this.element) {
        (0, _get__("dom_1").addClass)(this.element, 'active');
      }
    }));
    this._register((0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.CLICK, e => {
      if (this.item.enabled) {
        this.onClick(e);
      }
    }));
    this._register((0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.DBLCLICK, e => {
      _get__("dom_1").EventHelper.stop(e, true);
    }));
    [_get__("dom_1").EventType.MOUSE_UP, _get__("dom_1").EventType.MOUSE_OUT].forEach(event => {
      this._register((0, _get__("dom_1").addDisposableListener)(this.element, event, e => {
        _get__("dom_1").EventHelper.stop(e);
        (0, _get__("dom_1").removeClass)(this.element, 'active');
      }));
    });
    this.itemElement = (0, _get__("dom_1").append)(this.element, (0, _get__("dom_1").$)('a.cet-action-menu-item'));
    if (this.mnemonic) {
      this.itemElement.setAttribute('aria-keyshortcuts', `${this.mnemonic}`);
    }
    this.iconElement = (0, _get__("dom_1").append)(this.itemElement, (0, _get__("dom_1").$)('span.cet-menu-item-icon'));
    this.iconElement.setAttribute('role', 'none');
    this.labelElement = (0, _get__("dom_1").append)(this.itemElement, (0, _get__("dom_1").$)('span.cet-action-label'));
    this.updateLabel();
    this.setAccelerator();
    this.updateIcon();
    this.updateTooltip();
    this.updateEnabled();
    this.updateChecked();
    this.updateVisibility();
  }
  onClick(event) {
    _get__("dom_1").EventHelper.stop(event, true);
    _get__("electron_1").ipcRenderer.send('menu-event', this.item.commandId);
    if (this.item.type === 'checkbox') {
      this.item.checked = !this.item.checked;
      this.updateChecked();
    } else if (this.item.type === 'radio') {
      this.updateRadioGroup();
    }
    this.closeSubMenu();
  }
  applyStyle() {
    if (!this.menuStyle) {
      return;
    }
    const isSelected = this.element && (0, _get__("dom_1").hasClass)(this.element, 'focused');
    const fgColor = isSelected && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor;
    const bgColor = isSelected && this.menuStyle.selectionBackgroundColor ? this.menuStyle.selectionBackgroundColor : null;
    if (this.itemElement) {
      this.itemElement.style.color = fgColor ? fgColor.toString() : '';
      this.itemElement.style.backgroundColor = bgColor ? bgColor.toString() : '';
      if (this.iconElement) {
        if (this.iconElement.firstElementChild?.className === 'icon') {
          (0, _get__("consts_1").applyFill)(this.iconElement.firstElementChild, this.parentOptions?.svgColor, fgColor, false);
        } else {
          (0, _get__("consts_1").applyFill)(this.iconElement, this.parentOptions?.svgColor, fgColor);
        }
      }
    }
  }
  updateStyle(style) {
    this.menuStyle = style;
    this.applyStyle();
  }
  focus() {
    if (this.element) {
      this.element.focus();
      (0, _get__("dom_1").addClass)(this.element, 'focused');
    }
    this.applyStyle();
  }
  blur() {
    if (this.element) {
      this.element.blur();
      (0, _get__("dom_1").removeClass)(this.element, 'focused');
    }
    this.applyStyle();
  }
  setAccelerator() {
    let accelerator = null;
    if (this.item.role) {
      switch (this.item.role.toLocaleLowerCase()) {
        case 'undo':
          accelerator = 'CtrlOrCmd+Z';
          break;
        case 'redo':
          accelerator = 'CtrlOrCmd+Y';
          break;
        case 'cut':
          accelerator = 'CtrlOrCmd+X';
          break;
        case 'copy':
          accelerator = 'CtrlOrCmd+C';
          break;
        case 'paste':
          accelerator = 'CtrlOrCmd+V';
          break;
        case 'selectall':
          accelerator = 'CtrlOrCmd+A';
          break;
        case 'minimize':
          accelerator = 'CtrlOrCmd+M';
          break;
        case 'close':
          accelerator = 'CtrlOrCmd+W';
          break;
        case 'reload':
          accelerator = 'CtrlOrCmd+R';
          break;
        case 'forcereload':
          accelerator = 'CtrlOrCmd+Shift+R';
          break;
        case 'toggledevtools':
          accelerator = 'CtrlOrCmd+Shift+I';
          break;
        case 'togglefullscreen':
          accelerator = 'F11';
          break;
        case 'resetzoom':
          accelerator = 'CtrlOrCmd+0';
          break;
        case 'zoomin':
          accelerator = 'CtrlOrCmd++';
          break;
        case 'zoomout':
          accelerator = 'CtrlOrCmd+-';
          break;
      }
    }
    if (this.item.label && this.item.accelerator) {
      accelerator = this.item.accelerator;
    }
    if (this.itemElement && accelerator !== null) {
      (0, _get__("dom_1").append)(this.itemElement, (0, _get__("dom_1").$)('span.keybinding')).textContent = (0, _get__("consts_1").parseAccelerator)(accelerator);
    }
  }
  updateLabel() {
    const label = this.item.label || '';
    const cleanMenuLabel = (0, _get__("consts_1").cleanMnemonic)(label);
    // Update the button label to reflect mnemonics
    if (this.options.enableMnemonics) {
      const cleanLabel = _get__("strings").escape(label);
      // This is global so reset it
      _get__("consts_1").MENU_ESCAPED_MNEMONIC_REGEX.lastIndex = 0;
      let escMatch = _get__("consts_1").MENU_ESCAPED_MNEMONIC_REGEX.exec(cleanLabel);
      // We can't use negative lookbehind so we match our negative and skip
      while (escMatch && escMatch[1]) {
        escMatch = _get__("consts_1").MENU_ESCAPED_MNEMONIC_REGEX.exec(cleanLabel);
      }
      const replaceDoubleEscapes = str => str.replace(/&amp;&amp;/g, '&amp;');
      if (escMatch) {
        this.labelElement.innerText = '';
        this.labelElement.append(_get__("strings").ltrim(replaceDoubleEscapes(cleanLabel.substring(0, escMatch.index)), ' '), (0, _get__("dom_1").$)('mnemonic', {
          'aria-hidden': 'true'
        }, escMatch[3]), _get__("strings").rtrim(replaceDoubleEscapes(cleanLabel.substring(escMatch.index + escMatch[0].length)), ' '));
      } else {
        this.labelElement.innerText = replaceDoubleEscapes(cleanLabel).trim();
      }
    } else {
      this.labelElement.innerText = cleanMenuLabel.replace(/&&/g, '&');
    }
    const mnemonicMatches = _get__("consts_1").MENU_MNEMONIC_REGEX.exec(label);
    // Register mnemonics
    if (mnemonicMatches) {
      const mnemonic = !!mnemonicMatches[1] ? mnemonicMatches[1] : mnemonicMatches[3];
      if (this.options.enableMnemonics) {
        this.itemElement?.setAttribute('aria-keyshortcuts', 'Alt+' + mnemonic.toLocaleLowerCase());
      } else {
        this.itemElement?.removeAttribute('aria-keyshortcuts');
      }
    }
  }
  updateIcon() {
    if (this.item.icon) {
      const icon = this.item.icon;
      if (this.iconElement && icon) {
        const iconE = (0, _get__("dom_1").append)(this.iconElement, (0, _get__("dom_1").$)('.icon'));
        let iconData;
        if (typeof this.item.icon !== 'string') {
          iconData = _get__("electron_1").ipcRenderer.sendSync('menu-icon', this.item.commandId);
        } else {
          const iconPath = this.item.icon;
          iconData = _get__("electron_1").nativeImage.createFromPath(iconPath).toDataURL();
        }
        if (iconData) iconE.style.webkitMaskBoxImage = `url(${iconData})`;
      }
    } else if (this.iconElement && this.item.type === 'checkbox') {
      (0, _get__("dom_1").addClass)(this.iconElement, 'checkbox');
      this.iconElement.innerHTML = this.menuIcons.checkbox;
    } else if (this.item.type === 'radio') {
      (0, _get__("dom_1").addClass)(this.iconElement, 'radio');
      this.iconElement.innerHTML = this.item.checked ? this.menuIcons.radioChecked : this.menuIcons.radioUnchecked;
    }
    (0, _get__("consts_1").applyFill)(this.iconElement, this.parentOptions?.svgColor, this.menuStyle?.foregroundColor);
  }
  updateTooltip() {
    let title = null;
    if (this.item.sublabel) {
      title = this.item.sublabel;
    } else if (!this.item.label && this.item.label && this.item.icon) {
      title = this.item.label;
      if (this.item.accelerator) {
        title = (0, _get__("consts_1").parseAccelerator)(this.item.accelerator);
      }
    }
    if (this.itemElement && title) {
      this.itemElement.title = title;
    }
  }
  updateEnabled() {
    if (this.element) {
      if (this.item.enabled && this.item.type !== 'separator') {
        (0, _get__("dom_1").removeClass)(this.element, 'disabled');
        this.element.tabIndex = 0;
      } else {
        (0, _get__("dom_1").addClass)(this.element, 'disabled');
      }
    }
  }
  updateVisibility() {
    if (this.item.visible === false && this.itemElement) {
      this.itemElement.remove();
    }
  }
  updateChecked() {
    if (this.itemElement) {
      if (this.item.checked) {
        (0, _get__("dom_1").addClass)(this.itemElement, 'checked');
        this.itemElement.setAttribute('aria-checked', 'true');
      } else {
        (0, _get__("dom_1").removeClass)(this.itemElement, 'checked');
        this.itemElement.setAttribute('aria-checked', 'false');
      }
    }
  }
  updateRadioGroup() {
    if (this.radioGroup === undefined) {
      this.radioGroup = this.getRadioGroup();
    }
    if (this.menuItems) {
      for (let i = this.radioGroup.start; i < this.radioGroup.end; i++) {
        const menuItem = this.menuItems[i];
        if (menuItem instanceof _get__("CETMenuItem") && menuItem.item.type === 'radio') {
          // update item.checked for each radio button in group
          menuItem.item.checked = menuItem === this;
          menuItem.updateIcon();
          // updateChecked() *all* radio buttons in group
          menuItem.updateChecked();
          // set the radioGroup property of all the other radio buttons since it was already calculated
          if (menuItem !== this) {
            menuItem.radioGroup = this.radioGroup;
          }
        }
      }
    }
  }
  /** radioGroup index's starts with (previous separator +1 OR menuItems[0]) and ends with (next separator OR menuItems[length]) */
  getRadioGroup() {
    let startIndex = 0;
    let endIndex = this.menuItems ? this.menuItems.length : 0;
    let found = false;
    if (this.menuItems) {
      for (const index in this.menuItems) {
        const menuItem = this.menuItems[index];
        if (menuItem === this) {
          found = true;
        } else if (menuItem instanceof _get__("CETMenuItem") && menuItem.isSeparator()) {
          if (found) {
            endIndex = Number.parseInt(index);
            break;
          } else {
            startIndex = Number.parseInt(index) + 1;
          }
        }
      }
    }
    return {
      start: startIndex,
      end: endIndex
    };
  }
  get element() {
    return this._currentElement;
  }
  get item() {
    return this._item;
  }
  isEnabled() {
    return this.item.enabled;
  }
  isSeparator() {
    return this.item.type === 'separator';
  }
  get mnemonic() {
    return this._mnemonic;
  }
  dispose() {
    if (this.itemElement) {
      (0, _get__("dom_1").removeNode)(this.itemElement);
      this.itemElement = undefined;
    }
    super.dispose();
  }
}
exports.CETMenuItem = _get__("CETMenuItem");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "__createBinding":
      return __createBinding;
    case "__setModuleDefault":
      return __setModuleDefault;
    case "__importStar":
      return __importStar;
    case "consts_1":
      return consts_1;
    case "keyCodes_1":
      return keyCodes_1;
    case "dom_1":
      return dom_1;
    case "electron_1":
      return electron_1;
    case "strings":
      return strings;
    case "CETMenuItem":
      return CETMenuItem;
    case "lifecycle_1":
      return lifecycle_1;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/menubar/menu/separator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/menubar/menu/separator.js ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CETSeparator = void 0;
const item_1 = __webpack_require__(/*! ./item */ "./node_modules/custom-electron-titlebar/menubar/menu/item.js");
const dom_1 = __webpack_require__(/*! ../../base/common/dom */ "./node_modules/custom-electron-titlebar/base/common/dom.js");
class CETSeparator extends _get__("item_1").CETMenuItem {
  constructor(item, submenuIcons, submenuParentOptions, submenuOptions) {
    super(item, submenuIcons, submenuParentOptions, submenuOptions);
  }
  render(container) {
    if (container) {
      this.separatorElement = (0, _get__("dom_1").append)(container, (0, _get__("dom_1").$)('a.cet-action-label.separator', {
        role: 'presentation'
      }));
    }
  }
  updateStyle(style) {
    if (this.separatorElement && style.separatorColor) {
      this.separatorElement.style.borderBottomColor = style.separatorColor.toString();
    }
  }
}
exports.CETSeparator = _get__("CETSeparator");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "dom_1":
      return dom_1;
    case "item_1":
      return item_1;
    case "CETSeparator":
      return CETSeparator;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/menubar/menu/submenu.js":
/*!***********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/menubar/menu/submenu.js ***!
  \***********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CETSubMenu = void 0;
const consts_1 = __webpack_require__(/*! ../../consts */ "./node_modules/custom-electron-titlebar/consts.js");
const item_1 = __webpack_require__(/*! ./item */ "./node_modules/custom-electron-titlebar/menubar/menu/item.js");
const lifecycle_1 = __webpack_require__(/*! ../../base/common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const dom_1 = __webpack_require__(/*! ../../base/common/dom */ "./node_modules/custom-electron-titlebar/base/common/dom.js");
const keyboardEvent_1 = __webpack_require__(/*! ../../base/browser/keyboardEvent */ "./node_modules/custom-electron-titlebar/base/browser/keyboardEvent.js");
const index_1 = __webpack_require__(/*! ./index */ "./node_modules/custom-electron-titlebar/menubar/menu/index.js");
const async_1 = __webpack_require__(/*! ../../base/common/async */ "./node_modules/custom-electron-titlebar/base/common/async.js");
class CETSubMenu extends _get__("item_1").CETMenuItem {
  constructor(item, submenuIcons, submenuItems, parentData, submenuParentOptions, submenuOptions, closeSubMenu = () => {}) {
    super(item, submenuIcons, submenuParentOptions, submenuOptions);
    this.submenuIcons = submenuIcons;
    this.submenuItems = submenuItems;
    this.parentData = parentData;
    this.submenuParentOptions = submenuParentOptions;
    this.submenuOptions = submenuOptions;
    this.submenuDisposables = [];
    this.mouseOver = false;
    this._closeSubMenu = () => {};
    this._closeSubMenu = closeSubMenu;
    this.showScheduler = new (_get__("async_1").RunOnceScheduler)(() => {
      if (this.mouseOver) {
        this.cleanupExistingSubmenu(false);
        this.createSubmenu(false);
      }
    }, 250);
    this.hideScheduler = new (_get__("async_1").RunOnceScheduler)(() => {
      if (this.element && !(0, _get__("dom_1").isAncestor)(document.activeElement, this.element) && this.parentData.submenu === this.mySubmenu) {
        this.parentData.parent.focus(false);
        this.cleanupExistingSubmenu(true);
      }
    }, 750);
  }
  render(el) {
    super.render(el);
    if (!this.itemElement) {
      return;
    }
    (0, _get__("dom_1").addClass)(this.itemElement, 'cet-submenu-item');
    this.itemElement.setAttribute('aria-haspopup', 'true');
    this.submenuIndicator = (0, _get__("dom_1").append)(this.itemElement, (0, _get__("dom_1").$)('span.cet-submenu-indicator'));
    this.submenuIndicator.innerHTML = this.submenuIcons.submenuIndicator;
    this.submenuIndicator.setAttribute('aria-hidden', 'true');
    (0, _get__("consts_1").applyFill)(this.submenuIndicator, this.menuStyle?.svgColor, this.menuStyle?.foregroundColor);
    if (this.element) {
      (0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.KEY_UP, e => {
        const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
        if (event.equals(17 /* KeyCode.RightArrow */) || event.equals(3 /* KeyCode.Enter */)) {
          _get__("dom_1").EventHelper.stop(e, true);
          this.createSubmenu(true);
        }
      });
      (0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.KEY_DOWN, e => {
        const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
        if (event.equals(17 /* KeyCode.RightArrow */) || event.equals(3 /* KeyCode.Enter */)) {
          _get__("dom_1").EventHelper.stop(e, true);
        }
      });
      (0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.MOUSE_OVER, e => {
        if (!this.mouseOver) {
          this.mouseOver = true;
          this.showScheduler.schedule();
        }
      });
      (0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.MOUSE_LEAVE, e => {
        this.mouseOver = false;
      });
      (0, _get__("dom_1").addDisposableListener)(this.element, _get__("dom_1").EventType.FOCUS_OUT, e => {
        if (this.element && !(0, _get__("dom_1").isAncestor)(document.activeElement, this.element)) {
          this.hideScheduler.schedule();
        }
      });
    }
  }
  cleanupExistingSubmenu(force) {
    if (this.parentData.submenu && (force || this.parentData.submenu !== this.mySubmenu)) {
      this.parentData.submenu.dispose();
      this.parentData.submenu = undefined;
      if (this.submenuContainer) {
        this.submenuContainer = undefined;
      }
    }
  }
  createSubmenu(selectFirstItem = true) {
    if (!this.itemElement) {
      return;
    }
    if (this.element) {
      if (!this.parentData.submenu) {
        this.submenuContainer = (0, _get__("dom_1").append)(this.element, (0, _get__("dom_1").$)('.cet-submenu'));
        (0, _get__("dom_1").addClasses)(this.submenuContainer, 'cet-menubar-menu-container');
        this.parentData.submenu = new (_get__("index_1").CETMenu)(this.submenuContainer, this.submenuIcons, this.submenuParentOptions, this.submenuOptions, this._closeSubMenu);
        this.parentData.submenu.createMenu(this.submenuItems);
        if (this.menuStyle) {
          this.parentData.submenu.applyStyle(this.menuStyle);
        }
        const boundingRect = this.element.getBoundingClientRect();
        const childBoundingRect = this.submenuContainer.getBoundingClientRect();
        const computedStyles = getComputedStyle(this.parentData.parent.container);
        const paddingTop = parseFloat(computedStyles.paddingTop || '0') || 0;
        if (window.innerWidth <= boundingRect.right + childBoundingRect.width) {
          this.submenuContainer.style.left = '10px';
          this.submenuContainer.style.top = `${this.element.offsetTop + boundingRect.height}px`;
        } else {
          this.submenuContainer.style.left = `${this.element.offsetWidth}px`;
          this.submenuContainer.style.top = `${this.element.offsetTop - paddingTop}px`;
        }
        this.submenuDisposables.push((0, _get__("dom_1").addDisposableListener)(this.submenuContainer, _get__("dom_1").EventType.KEY_UP, e => {
          const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
          if (event.equals(15 /* KeyCode.LeftArrow */)) {
            _get__("dom_1").EventHelper.stop(e, true);
            this.parentData.parent.focus();
            if (this.parentData.submenu) {
              this.parentData.submenu.dispose();
              this.parentData.submenu = undefined;
            }
            this.submenuDisposables = (0, _get__("lifecycle_1").dispose)(this.submenuDisposables);
            this.submenuContainer = undefined;
          }
        }));
        this.submenuDisposables.push((0, _get__("dom_1").addDisposableListener)(this.submenuContainer, _get__("dom_1").EventType.KEY_DOWN, e => {
          const event = new (_get__("keyboardEvent_1").StandardKeyboardEvent)(e);
          if (event.equals(15 /* KeyCode.LeftArrow */)) {
            _get__("dom_1").EventHelper.stop(e, true);
          }
        }));
        this.submenuDisposables.push(this.parentData.submenu.onDidCancel(() => {
          this.parentData.parent.focus();
          if (this.parentData.submenu) {
            this.parentData.submenu.dispose();
            this.parentData.submenu = undefined;
          }
          this.submenuDisposables = (0, _get__("lifecycle_1").dispose)(this.submenuDisposables);
          this.submenuContainer = undefined;
        }));
        this.parentData.submenu.focus(selectFirstItem);
        this.mySubmenu = this.parentData.submenu;
      } else {
        this.parentData.submenu.focus(false);
      }
    }
  }
  applyStyle() {
    super.applyStyle();
    if (!this.menuStyle) return;
    const isSelected = this.element && (0, _get__("dom_1").hasClass)(this.element, 'focused');
    const fgColor = isSelected && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor;
    (0, _get__("consts_1").applyFill)(this.submenuIndicator, this.submenuParentOptions.svgColor, fgColor);
    if (this.parentData.submenu) this.parentData.submenu.applyStyle(this.menuStyle);
  }
  onClick(e) {
    // stop clicking from trying to run an action
    _get__("dom_1").EventHelper.stop(e, true);
    this.cleanupExistingSubmenu(false);
    this.createSubmenu(false);
  }
  dispose() {
    super.dispose();
    this.hideScheduler.dispose();
    if (this.mySubmenu) {
      this.mySubmenu.dispose();
      this.mySubmenu = null;
    }
    if (this.submenuContainer) {
      this.submenuDisposables = (0, _get__("lifecycle_1").dispose)(this.submenuDisposables);
      this.submenuContainer = undefined;
    }
  }
}
exports.CETSubMenu = _get__("CETSubMenu");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "async_1":
      return async_1;
    case "dom_1":
      return dom_1;
    case "consts_1":
      return consts_1;
    case "keyboardEvent_1":
      return keyboardEvent_1;
    case "index_1":
      return index_1;
    case "lifecycle_1":
      return lifecycle_1;
    case "item_1":
      return item_1;
    case "CETSubMenu":
      return CETSubMenu;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/titlebar/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/titlebar/index.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) AlexTorresDev. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CustomTitlebar = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const color_1 = __webpack_require__(/*! ../base/common/color */ "./node_modules/custom-electron-titlebar/base/common/color.js");
const dom_1 = __webpack_require__(/*! ../base/common/dom */ "./node_modules/custom-electron-titlebar/base/common/dom.js");
const platform_1 = __webpack_require__(/*! ../base/common/platform */ "./node_modules/custom-electron-titlebar/base/common/platform.js");
const menubar_1 = __webpack_require__(/*! ../menubar */ "./node_modules/custom-electron-titlebar/menubar/index.js");
const themebar_1 = __webpack_require__(/*! ./themebar */ "./node_modules/custom-electron-titlebar/titlebar/themebar.js");
const consts_1 = __webpack_require__(/*! ../consts */ "./node_modules/custom-electron-titlebar/consts.js");
class CustomTitlebar extends _get__("themebar_1").ThemeBar {
  /**
   * Create a new TitleBar instance
   * @param options The options for the title bar
   */
  constructor(options) {
    super();
    this.isInactive = false;
    this.currentOptions = {
      closeable: true,
      enableMnemonics: true,
      // hideWhenClickingClose: false,
      iconSize: 16,
      itemBackgroundColor: undefined,
      maximizable: true,
      menuPosition: 'left',
      menuTransparency: 0,
      minimizable: true,
      onlyShowMenuBar: false,
      shadow: false,
      titleHorizontalAlignment: 'center',
      tooltips: {
        close: 'Close',
        maximize: 'Maximize',
        minimize: 'Minimize',
        restoreDown: 'Restore Down'
      }
    };
    // TODO: Refactor, verify if is possible use into menubar
    this.closeMenu = () => {
      if (this.menuBar) {
        this.menuBar.blur();
      }
    };
    this.currentOptions = {
      ...this.currentOptions,
      ...options
    };
    const jWindowIcons = _get__("consts_1").menuIcons[(0, _get__("platform_1").PlatformToString)(_get__("platform_1").platform)?.toLocaleLowerCase()];
    this.platformIcons = jWindowIcons;
    this.titlebar = (0, _get__("dom_1").$)('.cet-titlebar');
    this.dragRegion = (0, _get__("dom_1").$)('.cet-drag-region');
    this.icon = (0, _get__("dom_1").$)('.cet-icon');
    this.menuBarContainer = (0, _get__("dom_1").$)('.cet-menubar');
    this.title = (0, _get__("dom_1").$)('.cet-title');
    this.controlsContainer = (0, _get__("dom_1").$)('.cet-window-controls');
    this.container = (0, _get__("dom_1").$)('.cet-container');
    this.controls = {
      minimize: (0, _get__("dom_1").$)('.cet-control-minimize'),
      maximize: (0, _get__("dom_1").$)('.cet-control-maximize'),
      close: (0, _get__("dom_1").$)('.cet-control-close')
    };
    this.resizer = {
      top: (0, _get__("dom_1").$)('.cet-resizer.top'),
      left: (0, _get__("dom_1").$)('.cet-resizer.left')
    };
    (0, _get__("dom_1").append)(this.titlebar, this.dragRegion);
    (0, _get__("dom_1").append)(this.titlebar, this.resizer.left);
    (0, _get__("dom_1").append)(this.titlebar, this.resizer.top);
    this.loadIcons();
    this.setupBackgroundColor();
    this.createIcon();
    this.setupMenubar();
    this.setupTitle();
    this.setupWindowControls();
    this.setupContainer();
    this.setupTitleBar();
    this.loadEvents();
    // this.registerTheme(ThemeBar.win)
  }

  loadIcons() {
    const icons = this.currentOptions.icons;
    if (icons) {
      const {
        platformIcons
      } = (0, _get__("consts_1").loadWindowIcons)(icons);
      this.platformIcons = platformIcons;
    }
  }
  /**
   * Setup the background color of the title bar
   * By default, it will use the meta theme-color or msapplication-TileColor and if it doesn't exist, it will use white
   */
  setupBackgroundColor() {
    let color = this.currentOptions.backgroundColor;
    if (!color) {
      const metaColor = document.querySelectorAll('meta[name="theme-color"]') || document.querySelectorAll('meta[name="msapplication-TileColor"]');
      metaColor.forEach(meta => {
        color = _get__("color_1").Color.fromHex(meta.getAttribute('content'));
      });
      if (!color) color = _get__("color_1").Color.WHITE;
      this.currentOptions.backgroundColor = color;
    }
    this.titlebar.style.backgroundColor = color.toString();
  }
  /**
   * Render the icon of the title bar, if is mac, it will not render
   * By default, it will use the first icon found in the head of the document
   */
  createIcon() {
    // const onlyRendererMenuBar = this.currentOptions.onlyShowMenuBar
    if (_get__("platform_1").isMacintosh) return;
    let icon = this.currentOptions.icon;
    if (!icon) {
      const tagLink = document.querySelectorAll('link');
      tagLink.forEach(link => {
        if (link.getAttribute('rel') === 'icon' || link.getAttribute('rel') === 'shortcut icon') {
          icon = link.getAttribute('href');
        }
        this.currentOptions.icon = icon;
      });
    }
    if (icon) {
      const windowIcon = (0, _get__("dom_1").append)(this.icon, (0, _get__("dom_1").$)('img'));
      if (typeof icon === 'string') {
        windowIcon.setAttribute('src', icon);
      } else {
        windowIcon.setAttribute('src', icon.toDataURL());
      }
      this.setIconSize(this.currentOptions.iconSize);
      (0, _get__("dom_1").append)(this.titlebar, this.icon);
    }
  }
  setIconSize(size) {
    if (size < 16) size = 16;
    if (size > 24) size = 24;
    this.icon.firstElementChild.setAttribute('style', `height: ${size}px`);
  }
  setupMenubar() {
    _get__("electron_1").ipcRenderer.invoke('request-application-menu')?.then(menu => this.updateMenu(menu));
    const menuPosition = this.currentOptions.menuPosition;
    if (menuPosition) {
      this.updateMenuPosition(menuPosition);
    }
    (0, _get__("dom_1").append)(this.titlebar, this.menuBarContainer);
  }
  setupTitle() {
    const onlyRendererMenuBar = this.currentOptions.onlyShowMenuBar;
    if (onlyRendererMenuBar) return;
    this.updateTitle(document.title);
    this.updateTitleAlignment(this.currentOptions.titleHorizontalAlignment);
    (0, _get__("dom_1").append)(this.titlebar, this.title);
  }
  createControlButton(element, icon, title, active = true) {
    (0, _get__("dom_1").addClass)(element, 'cet-control-icon');
    element.innerHTML = icon;
    element.title = title;
    if (!active) {
      (0, _get__("dom_1").addClass)(element, 'inactive');
    }
    (0, _get__("dom_1").append)(this.controlsContainer, element);
  }
  setupWindowControls() {
    const onlyRendererMenuBar = this.currentOptions.onlyShowMenuBar;
    const tooltips = this.currentOptions.tooltips;
    if (_get__("platform_1").isMacintosh || onlyRendererMenuBar) return;
    this.createControlButton(this.controls.minimize, this.platformIcons?.minimize, tooltips.minimize, this.currentOptions.minimizable);
    this.createControlButton(this.controls.maximize, this.platformIcons?.maximize, tooltips.maximize, this.currentOptions.maximizable);
    this.createControlButton(this.controls.close, this.platformIcons?.close, tooltips.close, this.currentOptions.closeable);
    (0, _get__("dom_1").append)(this.titlebar, this.controlsContainer);
  }
  setupContainer() {
    const containerOverflow = this.currentOptions.containerOverflow;
    if (containerOverflow) {
      this.container.style.overflow = containerOverflow;
    }
    while (document.body.firstChild) {
      (0, _get__("dom_1").append)(this.container, document.body.firstChild);
    }
    (0, _get__("dom_1").append)(document.body, this.container);
  }
  setupTitleBar() {
    const order = this.currentOptions.order;
    const hasShadow = this.currentOptions.shadow;
    (0, _get__("dom_1").addClass)(this.titlebar, `cet-${(0, _get__("platform_1").PlatformToString)(_get__("platform_1").platform)?.toLocaleLowerCase()}`);
    if (order) {
      (0, _get__("dom_1").addClass)(this.titlebar, `cet-${order}`);
    }
    if (hasShadow) {
      (0, _get__("dom_1").addClass)(this.titlebar, 'cet-shadow');
    }
    if (!_get__("platform_1").isMacintosh) {
      this.title.style.cursor = 'default';
    }
    (0, _get__("dom_1").prepend)(document.body, this.titlebar);
  }
  loadEvents() {
    const onlyRendererMenuBar = this.currentOptions.onlyShowMenuBar;
    if (onlyRendererMenuBar) return;
    const minimizable = this.currentOptions.minimizable;
    const maximizable = this.currentOptions.maximizable;
    const closeable = this.currentOptions.closeable;
    this.onDidChangeMaximized(_get__("electron_1").ipcRenderer.sendSync('window-event', 'window-is-maximized'));
    _get__("electron_1").ipcRenderer.on('window-maximize', (_, isMaximized) => this.onDidChangeMaximized(isMaximized));
    _get__("electron_1").ipcRenderer.on('window-fullscreen', (_, isFullScreen) => this.onWindowFullScreen(isFullScreen));
    _get__("electron_1").ipcRenderer.on('window-focus', (_, isFocused) => this.onWindowFocus(isFocused));
    if (minimizable) {
      (0, _get__("dom_1").addDisposableListener)(this.controls.minimize, _get__("dom_1").EventType.CLICK, () => {
        _get__("electron_1").ipcRenderer.send('window-event', 'window-minimize');
      });
    }
    if (_get__("platform_1").isMacintosh) {
      (0, _get__("dom_1").addDisposableListener)(this.titlebar, _get__("dom_1").EventType.DBLCLICK, () => {
        _get__("electron_1").ipcRenderer.send('window-event', 'window-maximize');
      });
    }
    if (maximizable) {
      (0, _get__("dom_1").addDisposableListener)(this.controls.maximize, _get__("dom_1").EventType.CLICK, () => {
        _get__("electron_1").ipcRenderer.send('window-event', 'window-maximize');
      });
    }
    if (closeable) {
      (0, _get__("dom_1").addDisposableListener)(this.controls.close, _get__("dom_1").EventType.CLICK, () => {
        _get__("electron_1").ipcRenderer.send('window-event', 'window-close');
      });
    }
  }
  onBlur() {
    this.isInactive = true;
    this.updateStyles();
  }
  onFocus() {
    this.isInactive = false;
    this.updateStyles();
  }
  onMenuBarVisibilityChanged(visible) {
    if (_get__("platform_1").isWindows || _get__("platform_1").isLinux || _get__("platform_1").isFreeBSD) {
      if (visible) {
        // Hack to fix issue #52522 with layered webkit-app-region elements appearing under cursor
        (0, _get__("dom_1").hide)(this.dragRegion);
        setTimeout(() => (0, _get__("dom_1").show)(this.dragRegion), 50);
      }
    }
  }
  onMenuBarFocusChanged(focused) {
    if (_get__("platform_1").isWindows || _get__("platform_1").isLinux || _get__("platform_1").isFreeBSD) {
      if (focused) (0, _get__("dom_1").hide)(this.dragRegion);else (0, _get__("dom_1").show)(this.dragRegion);
    }
  }
  onDidChangeMaximized(isMaximized) {
    const maximize = this.controls.maximize;
    if (maximize) {
      maximize.title = isMaximized ? this.currentOptions.tooltips?.restoreDown : this.currentOptions.tooltips?.maximize;
      maximize.innerHTML = isMaximized ? this.platformIcons?.restore : this.platformIcons?.maximize;
    }
    if (this.resizer) {
      if (isMaximized) (0, _get__("dom_1").hide)(this.resizer.top, this.resizer.left);else (0, _get__("dom_1").show)(this.resizer.top, this.resizer.left);
    }
  }
  updateMenu(menu) {
    if (_get__("platform_1").isMacintosh || !menu) return;
    if (this.menuBar) this.menuBar.dispose();
    this.menuBar = new (_get__("menubar_1").MenuBar)(this.menuBarContainer, _get__("consts_1").menuIcons, this.currentOptions, {
      enableMnemonics: true
    }, this.closeMenu); // TODO: Verify menubar options
    this.menuBar.push(menu);
    this.menuBar.update();
    this.menuBar.onVisibilityChange(e => this.onMenuBarVisibilityChanged(e));
    this.menuBar.onFocusStateChange(e => this.onMenuBarFocusChanged(e));
    this.updateStyles();
  }
  updateStyles() {
    if (this.isInactive) {
      (0, _get__("dom_1").addClass)(this.titlebar, 'inactive');
    } else {
      (0, _get__("dom_1").removeClass)(this.titlebar, 'inactive');
    }
    const backgroundColor = this.isInactive ? this.currentOptions.backgroundColor?.lighten(0.12) : this.currentOptions.backgroundColor;
    if (backgroundColor) {
      this.titlebar.style.backgroundColor = backgroundColor?.toString();
    }
    let foregroundColor;
    if (backgroundColor?.isLighter()) {
      (0, _get__("dom_1").addClass)(this.titlebar, 'light');
      foregroundColor = this.isInactive ? _get__("consts_1").INACTIVE_FOREGROUND_DARK : _get__("consts_1").ACTIVE_FOREGROUND_DARK;
    } else {
      (0, _get__("dom_1").removeClass)(this.titlebar, 'light');
      foregroundColor = this.isInactive ? _get__("consts_1").INACTIVE_FOREGROUND : _get__("consts_1").ACTIVE_FOREGROUND;
    }
    this.titlebar.style.color = foregroundColor?.toString();
    const updatedWindowControls = _get__("electron_1").ipcRenderer.sendSync('update-window-controls', {
      color: backgroundColor?.toString(),
      symbolColor: foregroundColor?.toString(),
      height: _get__("consts_1").TOP_TITLEBAR_HEIGHT_WIN
    });
    if (updatedWindowControls) {
      (0, _get__("dom_1").hide)(this.controlsContainer);
    } else {
      (0, _get__("dom_1").show)(this.controlsContainer);
    }
    if (this.menuBar) {
      let fgColor;
      const backgroundColor = this.currentOptions.menuBarBackgroundColor || this.currentOptions.backgroundColor.darken(0.12);
      const foregroundColor = backgroundColor?.isLighter() ? _get__("consts_1").INACTIVE_FOREGROUND_DARK : _get__("consts_1").INACTIVE_FOREGROUND;
      const bgColor = this.currentOptions.itemBackgroundColor && !this.currentOptions.itemBackgroundColor.equals(backgroundColor) ? this.currentOptions.itemBackgroundColor : _get__("consts_1").DEFAULT_ITEM_SELECTOR;
      if (bgColor?.equals(_get__("consts_1").DEFAULT_ITEM_SELECTOR)) {
        fgColor = backgroundColor?.isLighter() ? _get__("consts_1").ACTIVE_FOREGROUND_DARK : _get__("consts_1").ACTIVE_FOREGROUND;
      } else {
        fgColor = bgColor?.isLighter() ? _get__("consts_1").ACTIVE_FOREGROUND_DARK : _get__("consts_1").ACTIVE_FOREGROUND;
      }
      this.menuBar.setStyles({
        backgroundColor,
        foregroundColor,
        selectionBackgroundColor: bgColor,
        selectionForegroundColor: fgColor,
        separatorColor: this.currentOptions.menuSeparatorColor ?? foregroundColor,
        svgColor: this.currentOptions.svgColor
      });
    }
  }
  /// Public methods
  /**
   * Update title bar styles based on focus state.
   * @param hasFocus focus state of the window
   */
  onWindowFocus(focus) {
    if (this.titlebar) {
      if (focus) {
        (0, _get__("dom_1").removeClass)(this.titlebar, 'inactive');
        this.onFocus();
      } else {
        (0, _get__("dom_1").addClass)(this.titlebar, 'inactive');
        this.menuBar?.blur();
        this.onBlur();
      }
    }
  }
  /**
   * Update the full screen state and hide or show the title bar.
   * @param fullscreen Fullscreen state of the window
   */
  onWindowFullScreen(fullscreen) {
    const height = _get__("platform_1").isMacintosh ? _get__("consts_1").TOP_TITLEBAR_HEIGHT_MAC : _get__("consts_1").TOP_TITLEBAR_HEIGHT_WIN;
    const hasShadow = this.currentOptions.shadow;
    if (!_get__("platform_1").isMacintosh) {
      if (fullscreen) {
        (0, _get__("dom_1").hide)(this.titlebar);
        this.container.style.top = '0px';
      } else {
        (0, _get__("dom_1").show)(this.titlebar);
        if (this.currentOptions.menuPosition === 'bottom') {
          this.container.style.top = (0, _get__("consts_1").getPx)(_get__("consts_1").BOTTOM_TITLEBAR_HEIGHT);
          this.controlsContainer.style.height = (0, _get__("consts_1").getPx)(_get__("consts_1").TOP_TITLEBAR_HEIGHT_WIN);
        } else {
          this.container.style.top = (0, _get__("consts_1").getPx)(height + (hasShadow ? 1 : 0));
        }
      }
    }
  }
  /**
   * Update the title of the title bar.
   * You can use this method if change the content of `<title>` tag on your html.
   * @param title The title of the title bar and document.
   */
  updateTitle(title) {
    this.title.innerText = title;
    document.title = title;
    return this;
  }
  /**
   * It method set new icon to title-bar-icon of title-bar.
   * @param path path to icon
   */
  updateIcon(path) {
    if (this.icon) {
      this.icon.firstElementChild.setAttribute('src', path);
    }
    return this;
  }
  /**
   * Horizontal alignment of the title.
   * @param side `left`, `center` or `right`.
   */
  updateTitleAlignment(side) {
    const order = this.currentOptions.order;
    const menuPosition = this.currentOptions.menuPosition;
    if (side === 'left' || side === 'right' && order === 'inverted') {
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-left');
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-right');
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-center');
      (0, _get__("dom_1").addClass)(this.title, 'cet-title-left');
    }
    if (side === 'right' || side === 'left' && order === 'inverted') {
      if (side !== 'left' && order !== 'inverted') {
        this.controlsContainer.style.marginLeft = '10px';
      }
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-left');
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-right');
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-center');
      (0, _get__("dom_1").addClass)(this.title, 'cet-title-right');
    }
    if (side === 'center') {
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-left');
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-right');
      (0, _get__("dom_1").removeClass)(this.title, 'cet-title-center');
      if (menuPosition !== 'bottom') {
        (0, _get__("dom_1").addDisposableListener)(window, 'resize', () => {
          if (window.innerWidth >= 1188) {
            (0, _get__("dom_1").addClass)(this.title, 'cet-title-center');
          } else {
            (0, _get__("dom_1").removeClass)(this.title, 'cet-title-center');
          }
        });
        (0, _get__("dom_1").addClass)(this.title, 'cet-title-center');
      }
      if (!_get__("platform_1").isMacintosh && order === 'first-buttons') {
        this.controlsContainer.style.marginLeft = 'auto';
      }
      this.title.style.maxWidth = 'calc(100% - 296px)';
    }
    return this;
  }
  /**
   * Update the background color of the title bar
   * @param backgroundColor The color for the background
   */
  updateBackground(backgroundColor) {
    if (typeof backgroundColor === 'string') backgroundColor = _get__("color_1").Color.fromHex(backgroundColor);
    this.currentOptions.backgroundColor = backgroundColor;
    this.updateStyles();
    return this;
  }
  /**
   * Update the item background color of the menubar
   * @param itemBGColor The color for the item background
   */
  updateItemBGColor(itemBGColor) {
    if (typeof itemBGColor === 'string') itemBGColor = _get__("color_1").Color.fromHex(itemBGColor);
    this.currentOptions.itemBackgroundColor = itemBGColor;
    this.updateStyles();
    return this;
  }
  /**
   * Update the menu from Menu.getApplicationMenu()
   */
  async refreshMenu() {
    if (!_get__("platform_1").isMacintosh) {
      _get__("electron_1").ipcRenderer.invoke('request-application-menu').then(menu => this.updateMenu(menu));
    }
    return this;
  }
  /**
   * Update the position of menubar.
   * @param menuPosition The position of the menu `left` or `bottom`.
   */
  updateMenuPosition(menuPosition) {
    const height = _get__("platform_1").isMacintosh ? _get__("consts_1").TOP_TITLEBAR_HEIGHT_MAC : _get__("consts_1").TOP_TITLEBAR_HEIGHT_WIN;
    const onlyRendererMenuBar = this.currentOptions.onlyShowMenuBar;
    const hasShadow = this.currentOptions.shadow;
    this.currentOptions.menuPosition = menuPosition;
    if (menuPosition === 'left' || onlyRendererMenuBar) {
      this.titlebar.style.height = (0, _get__("consts_1").getPx)(height + (hasShadow ? 1 : 0));
      this.container.style.top = (0, _get__("consts_1").getPx)(height + (hasShadow ? 1 : 0));
      (0, _get__("dom_1").removeClass)(this.menuBarContainer, 'bottom');
    } else {
      this.titlebar.style.height = (0, _get__("consts_1").getPx)(_get__("consts_1").BOTTOM_TITLEBAR_HEIGHT);
      this.container.style.top = (0, _get__("consts_1").getPx)(_get__("consts_1").BOTTOM_TITLEBAR_HEIGHT);
      this.controlsContainer.style.height = (0, _get__("consts_1").getPx)(height);
      (0, _get__("dom_1").addClass)(this.menuBarContainer, 'bottom');
    }
    return this;
  }
  /**
   * Remove the titlebar, menubar and all methods.
   */
  dispose() {
    // if (this.menuBar) this.menuBar.dispose()
    this.titlebar.remove();
    while (this.container.firstChild) (0, _get__("dom_1").append)(document.body, this.container.firstChild);
    this.container.remove();
  }
  get titlebarElement() {
    return this.titlebar;
  }
  get menubarElement() {
    return this.menuBar;
  }
  get containerElement() {
    return this.container;
  }
  get titleElement() {
    return this.title;
  }
}
exports.CustomTitlebar = _get__("CustomTitlebar");
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "consts_1":
      return consts_1;
    case "platform_1":
      return platform_1;
    case "dom_1":
      return dom_1;
    case "color_1":
      return color_1;
    case "electron_1":
      return electron_1;
    case "menubar_1":
      return menubar_1;
    case "themebar_1":
      return themebar_1;
    case "CustomTitlebar":
      return CustomTitlebar;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar/titlebar/themebar.js":
/*!********************************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/titlebar/themebar.js ***!
  \********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


/* ---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------- */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ThemeBar = void 0;
const lifecycle_1 = __webpack_require__(/*! ../base/common/lifecycle */ "./node_modules/custom-electron-titlebar/base/common/lifecycle.js");
const baseTheme = "body {\n  margin: 0 !important;\n  overflow: hidden !important;\n}\n\n/* Titlebar */\n.cet-titlebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-size: 13px;\n  font-family: Arial, Helvetica, sans-serif;\n  box-sizing: border-box;\n  padding: 0 16px;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  zoom: 1;\n  width: 100%;\n  height: 31px;\n  line-height: 31px;\n  z-index: 99999;\n}\n\n.cet-titlebar *,\n.cet-titlebar *:before,\n.cet-titlebar *:after {\n  box-sizing: border-box;\n}\n\n.cet-titlebar.cet-windows,\n.cet-titlebar.cet-linux,\n.cet-titlebar.cet-freebsd {\n  padding: 0;\n  height: 30px;\n  line-height: 30px;\n  justify-content: left;\n  overflow: visible;\n}\n\n/* Inverted */\n.cet-titlebar.cet-inverted {\n  flex-direction: row-reverse;\n}\n\n.cet-titlebar.cet-inverted .cet-menubar,\n.cet-titlebar.cet-inverted .cet-window-controls {\n  flex-direction: row-reverse;\n  margin-left: 20px;\n  margin-right: 0;\n}\n\n/* First buttons */\n.cet-titlebar.cet-first-buttons .cet-window-controls {\n  order: -1;\n  margin: 0 5px 0 0;\n}\n\n.cet-titlebar.cet-inverted .cet-window-controls {\n  margin: 0 5px 0 0;\n}\n\n/* Shadow */\n.cet-titlebar.cet-shadow {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n/* Drag region */\n.cet-drag-region {\n  top: 0;\n  left: 0;\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  -webkit-app-region: drag;\n}\n\n/* Icon */\n.cet-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 30px;\n  z-index: 99;\n  overflow: hidden;\n}\n\n/* Title */\n.cet-title {\n  flex: 0 1 auto;\n  font-size: 12px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  zoom: 1;\n}\n\n/* Title alignment */\n.cet-title.cet-title-left {\n  margin-left: 8px;\n  margin-right: auto;\n}\n\n.cet-title.cet-title-right {\n  margin-left: auto;\n  margin-right: 8px;\n}\n\n.cet-title.cet-title-center {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.cet-title.cet-bigsur {\n  font-size: 13px;\n  font-weight: 600;\n}\n\n/* Window controls */\n.cet-window-controls {\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  text-align: center;\n  position: relative;\n  z-index: 99;\n  -webkit-app-region: no-drag;\n  height: 30px;\n  font-family: initial !important;\n  margin-left: auto;\n}\n\n.cet-control-icon {\n  width: 2.85rem;\n}\n\n.cet-control-icon:not(.inactive):hover {\n  background-color: rgb(255 255 255 / 12%);\n}\n\n.light .cet-control-icon:not(.inactive):hover {\n  background-color: rgb(0 0 0 / 12%);\n}\n\n.cet-control-icon.inactive svg {\n  opacity: 0.4;\n}\n\n.cet-control-icon svg {\n  width: 10px;\n  height: -webkit-fill-available;\n  fill: #fff;\n  display: initial !important;\n  vertical-align: unset !important;\n}\n\n.cet-titlebar.light .cet-control-icon svg {\n  fill: #222222 !important;\n}\n\n.cet-control-close:not(.inactive):hover {\n  background-color: rgb(232 17 35 / 90%) !important;\n}\n\n.cet-control-close:not(.inactive):hover svg {\n  fill: #fff !important;\n}\n\n/* Resizer */\n.cet-resizer {\n  -webkit-app-region: no-drag;\n  position: absolute;\n}\n\n.cet-resizer.left {\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 100%;\n}\n\n.cet-resizer.top {\n  top: 0;\n  width: 100%;\n  height: 6px;\n}\n\n/* Container */\n.cet-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  z-index: 1;\n}\n\n/* MenuBar */\n.cet-menubar {\n  display: flex;\n  flex-shrink: 1;\n  box-sizing: border-box;\n  overflow: hidden;\n  flex-wrap: wrap;\n  margin-right: 20px;\n}\n\n.cet-menubar.bottom {\n  order: 1;\n  width: 100%;\n  padding: 0 5px 5px;\n  margin-right: 0;\n}\n\n.cet-menubar.bottom .cet-menubar-menu-button {\n  border-radius: 4px;\n}\n\n.cet-menubar.bottom .cet-menubar-menu-button .cet-menubar-menu-title {\n  line-height: 26px;\n}\n\n.cet-menubar .cet-menubar-menu-button {\n  box-sizing: border-box;\n  padding: 0px 8px;\n  height: 100%;\n  cursor: default;\n  zoom: 1;\n  white-space: nowrap;\n  -webkit-app-region: no-drag;\n  outline: 0;\n}\n\n.cet-menubar .cet-menubar-menu-button .cet-menubar-menu-title {\n  font-size: 12px;\n}\n\n.cet-menubar .cet-menubar-menu-button.disabled {\n  opacity: 0.4;\n}\n\n.cet-menubar .cet-menubar-menu-button:not(.disabled):hover,\n.cet-menubar .cet-menubar-menu-button:not(.disabled).open {\n  background-color: rgb(255 255 255 / 12%);\n}\n\n.cet-titlebar.light .cet-menubar .cet-menubar-menu-button:not(.disabled):hover,\n.cet-titlebar.light .cet-menubar .cet-menubar-menu-button:not(.disabled).open {\n  background-color: rgb(0 0 0 / 12%);\n}\n\n.cet-menubar-menu-container {\n  position: absolute;\n  display: block;\n  left: 0px;\n  opacity: 1;\n  outline: 0;\n  border: none;\n  text-align: left;\n  margin: 0 auto;\n  margin-left: 0;\n  font-size: inherit;\n  overflow-x: visible;\n  overflow-y: visible;\n  -webkit-overflow-scrolling: touch;\n  justify-content: flex-end;\n  white-space: nowrap;\n  border-radius: 7px;\n  backdrop-filter: blur(10px);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  z-index: 99999;\n}\n\n.cet-menubar-menu-container::-webkit-scrollbar {\n  width: 8px;\n  height: 4px;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.cet-menubar-menu-container::-webkit-scrollbar-track {\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.cet-menubar-menu-container::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: rgba(110, 110, 110, 0.2);\n}\n\n.cet-menubar-menu-container:focus {\n  outline: 0;\n}\n\n.cet-menubar-menu-container .cet-action-item {\n  padding: 0;\n  margin: 0;\n  transform: none;\n  display: -ms-flexbox;\n  display: flex;\n  outline: none;\n}\n\n.cet-menubar-menu-container .cet-action-item.active {\n  transform: none;\n}\n\n.cet-menubar-menu-container .cet-action-item.disabled .cet-action-menu-item {\n  opacity: 0.4;\n}\n\n.cet-menubar-menu-container .cet-action-item .cet-submenu {\n  position: absolute;\n}\n\n.cet-menubar-menu-container .cet-action-menu-item {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2.231em;\n  margin: 4px 3px;\n  align-items: center;\n  position: relative;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n.cet-menubar-menu-container .cet-action-label {\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  text-decoration: none;\n  padding: 0 1em;\n  background: none;\n  font-size: 12px;\n  line-height: 1;\n}\n\n.cet-menubar-menu-container .cet-action-label:not(.separator) {\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0 2em 0 0.8em;\n}\n\n.cet-menubar-menu-container .cet-action-label.separator {\n  opacity: 0.1;\n  font-size: inherit;\n  width: 100%;\n  border-bottom: 1px solid transparent;\n}\n\n.cet-menubar-menu-container .cet-action-label.separator.text {\n  padding: 0.7em 1em 0.1em 1em;\n  font-weight: bold;\n  opacity: 1;\n}\n\n.cet-menubar-menu-container .cet-action-label:hover {\n  color: inherit;\n}\n\n.cet-menubar-menu-container .keybinding,\n.cet-menubar-menu-container .cet-submenu-indicator {\n  display: inline-block;\n  -ms-flex: 2 1 auto;\n  flex: 2 1 auto;\n  padding: 0 2em 0 1em;\n  text-align: right;\n  font-size: 11px;\n  line-height: 1;\n}\n\n.cet-menubar-menu-container .cet-submenu-indicator {\n  position: absolute;\n  right: 4px;\n  height: 12px;\n  width: 12px;\n  padding: 0;\n}\n\n.cet-menubar-menu-container .cet-submenu-indicator img,\n.cet-menubar-menu-container .cet-menu-item-icon .icon,\n.cet-menubar-menu-container .cet-submenu-indicator svg,\n.cet-menubar-menu-container .cet-menu-item-icon svg {\n  display: inherit;\n  width: 100%;\n  height: 100%;\n}\n\n.cet-menubar-menu-container .cet-action-menu-item.checked>.cet-menu-item-icon.checkbox {\n  visibility: visible;\n}\n\n.cet-menubar-menu-container .cet-menu-item-icon {\n  width: 14px;\n  height: 14px;\n  margin: 0 0 0 12px;\n}\n\n.cet-menubar-menu-container .cet-menu-item-icon.checkbox {\n  visibility: hidden;\n}";
const macTheme = "";
const winTheme = "";
class ThemingRegistry extends _get__("lifecycle_1").Disposable {
  constructor() {
    super();
    this.theming = [];
    this.theming = [];
  }
  onThemeChange(theme) {
    this.theming.push(theme);
    return (0, _get__("lifecycle_1").toDisposable)(() => {
      const idx = this.theming.indexOf(theme);
      this.theming.splice(idx, 1);
    });
  }
  getTheming() {
    return this.theming;
  }
}
class ThemeBar extends _get__("ThemingRegistry") {
  constructor() {
    super();
    this.registerTheme(collector => {
      collector.addRule(_get__("baseTheme"));
    });
  }
  registerTheme(theme) {
    this.onThemeChange(theme);
    const cssRules = [];
    const hasRule = {};
    const ruleCollector = {
      addRule: rule => {
        if (!hasRule[rule]) {
          cssRules.push(rule);
          hasRule[rule] = true;
        }
      }
    };
    this.getTheming().forEach(p => p(ruleCollector));
    _get__("_applyRules")(cssRules.join('\n'), 'titlebar-style');
  }
  static get win() {
    return collector => {
      collector.addRule(_get__("winTheme"));
    };
  }
  static get mac() {
    return collector => {
      collector.addRule(_get__("macTheme"));
    };
  }
}
exports.ThemeBar = _get__("ThemeBar");
function _applyRules(styleSheetContent, rulesClassName) {
  const themeStyles = document.head.getElementsByClassName(rulesClassName);
  if (themeStyles.length === 0) {
    const styleElement = document.createElement('style');
    styleElement.className = rulesClassName;
    styleElement.innerHTML = styleSheetContent;
    document.head.appendChild(styleElement);
  } else {
    themeStyles[0].innerHTML = styleSheetContent;
  }
}
function _getGlobalObject() {
  try {
    if (!!global) {
      return global;
    }
  } catch (e) {
    try {
      if (!!window) {
        return window;
      }
    } catch (e) {
      return this;
    }
  }
}
;
var _RewireModuleId__ = null;
function _getRewireModuleId__() {
  if (_RewireModuleId__ === null) {
    let globalVariable = _getGlobalObject();
    if (!globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__) {
      globalVariable.__$$GLOBAL_REWIRE_NEXT_MODULE_ID__ = 0;
    }
    _RewireModuleId__ = __$$GLOBAL_REWIRE_NEXT_MODULE_ID__++;
  }
  return _RewireModuleId__;
}
function _getRewireRegistry__() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__) {
    theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
  }
  return theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__;
}
function _getRewiredData__() {
  let moduleId = _getRewireModuleId__();
  let registry = _getRewireRegistry__();
  let rewireData = registry[moduleId];
  if (!rewireData) {
    registry[moduleId] = Object.create(null);
    rewireData = registry[moduleId];
  }
  return rewireData;
}
(function registerResetAll() {
  let theGlobalVariable = _getGlobalObject();
  if (!theGlobalVariable['__rewire_reset_all__']) {
    theGlobalVariable['__rewire_reset_all__'] = function () {
      theGlobalVariable.__$$GLOBAL_REWIRE_REGISTRY__ = Object.create(null);
    };
  }
})();
var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
let _RewireAPI__ = {};
(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }
  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();
function _get__(variableName) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = rewireData[variableName];
    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}
function _get_original__(variableName) {
  switch (variableName) {
    case "lifecycle_1":
      return lifecycle_1;
    case "baseTheme":
      return baseTheme;
    case "_applyRules":
      return _applyRules;
    case "winTheme":
      return winTheme;
    case "macTheme":
      return macTheme;
    case "ThemingRegistry":
      return ThemingRegistry;
    case "ThemeBar":
      return ThemeBar;
  }
  return undefined;
}
function _assign__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (rewireData[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return rewireData[variableName] = value;
  }
}
function _set_original__(variableName, _value) {
  switch (variableName) {}
  return undefined;
}
function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);
  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;
  _assign__(variableName, newValue);
  return prefix ? newValue : oldValue;
}
function _set__(variableName, value) {
  let rewireData = _getRewiredData__();
  if (typeof variableName === 'object') {
    Object.keys(variableName).forEach(function (name) {
      rewireData[name] = variableName[name];
    });
    return function () {
      Object.keys(variableName).forEach(function (name) {
        _reset__(variableName);
      });
    };
  } else {
    if (value === undefined) {
      rewireData[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      rewireData[variableName] = value;
    }
    return function () {
      _reset__(variableName);
    };
  }
}
function _reset__(variableName) {
  let rewireData = _getRewiredData__();
  delete rewireData[variableName];
  if (Object.keys(rewireData).length == 0) {
    delete _getRewireRegistry__()[_getRewireModuleId__];
  }
  ;
}
function _with__(object) {
  let rewireData = _getRewiredData__();
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};
  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      rewireData[variableName] = previousValues[variableName];
    });
  }
  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = rewireData[variableName];
      rewireData[variableName] = object[variableName];
    });
    let result = callback();
    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }
    return result;
  };
}
let _typeOfOriginalExport = typeof module.exports;
function addNonEnumerableProperty(name, value) {
  Object.defineProperty(module.exports, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}
if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(module.exports)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

/***/ }),

/***/ "./node_modules/custom-electron-titlebar sync recursive":
/*!*****************************************************!*\
  !*** ./node_modules/custom-electron-titlebar/ sync ***!
  \*****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/custom-electron-titlebar sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/main/preload.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var custom_electron_titlebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! custom-electron-titlebar */ "./node_modules/custom-electron-titlebar/index.js");
/* harmony import */ var custom_electron_titlebar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(custom_electron_titlebar__WEBPACK_IMPORTED_MODULE_1__);
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */


const electronHandler = {
    ipcRenderer: {
        sendMessage(channel, ...args) {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(channel, ...args);
        },
        on(channel, func) {
            const subscription = (_event, ...args) => func(...args);
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(channel, subscription);
            return () => {
                electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.removeListener(channel, subscription);
            };
        },
        once(channel, func) {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.once(channel, (_event, ...args) => func(...args));
        },
    },
    store: {
        get(key) {
            return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.sendSync('electron-store-get', key);
        },
        set(property, val) {
            electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send('electron-store-set', property, val);
        },
        // Other method you want to add like has(), reset(), etc.
    },
};
window.addEventListener('DOMContentLoaded', () => {
    // Title bar implementation
    new custom_electron_titlebar__WEBPACK_IMPORTED_MODULE_1__.Titlebar({
        backgroundColor: custom_electron_titlebar__WEBPACK_IMPORTED_MODULE_1__.TitlebarColor.TRANSPARENT,
        titleHorizontalAlignment: 'left',
    });
});
electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld('electron', electronHandler);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});