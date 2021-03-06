"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "STATUS", {
  enumerable: true,
  get: function get() {
    return _constants.STATUS;
  }
});
Object.defineProperty(exports, "POSITIONS", {
  enumerable: true,
  get: function get() {
    return _constants.POSITIONS;
  }
});
Object.defineProperty(exports, "DEFAULT_NOTIFICATION", {
  enumerable: true,
  get: function get() {
    return _constants.DEFAULT_NOTIFICATION;
  }
});
Object.defineProperty(exports, "reducer", {
  enumerable: true,
  get: function get() {
    return _notifications["default"];
  }
});
Object.defineProperty(exports, "actions", {
  enumerable: true,
  get: function get() {
    return _notifications.actions;
  }
});
Object.defineProperty(exports, "types", {
  enumerable: true,
  get: function get() {
    return _notifications.types;
  }
});
Object.defineProperty(exports, "addNotification", {
  enumerable: true,
  get: function get() {
    return _notifications.addNotification;
  }
});
Object.defineProperty(exports, "notify", {
  enumerable: true,
  get: function get() {
    return _notifications.notify;
  }
});
Object.defineProperty(exports, "updateNotification", {
  enumerable: true,
  get: function get() {
    return _notifications.updateNotification;
  }
});
Object.defineProperty(exports, "removeNotification", {
  enumerable: true,
  get: function get() {
    return _notifications.removeNotification;
  }
});
Object.defineProperty(exports, "removeNotifications", {
  enumerable: true,
  get: function get() {
    return _notifications.removeNotifications;
  }
});
exports["default"] = void 0;

var _NotificationsSystem = _interopRequireDefault(require("./components/NotificationsSystem"));

var _constants = require("./constants");

var _notifications = _interopRequireWildcard(require("./store/notifications"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// NotificationsSystem React component
var _default = _NotificationsSystem["default"];
exports["default"] = _default;