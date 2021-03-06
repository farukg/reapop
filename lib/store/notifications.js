"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNotification = removeNotification;
exports.removeNotifications = removeNotifications;
exports["default"] = exports.types = exports.actions = exports.updateNotification = exports.notify = exports.addNotification = void 0;

var _helpers = require("../helpers");

var _constants = require("../constants");

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// An array to store notifications object
var INITIAL_STATE = []; // Action types

var ADD_NOTIFICATION = 'ADD_NOTIFICATION';
var UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
var REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
var REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATIONS';
/**
 * Add a notification (thunk action creator)
 *
 * We use a thunk here to create an ADD_NOTIFICATION action
 * and only return the notification object.
 * @param {Object} notification
 * @returns {Object} notification
 */

var addNotification = function addNotification(notification) {
  return function (dispatch) {
    if (!notification.id) {
      notification.id = new Date().getTime();
    }

    notification = (0, _helpers.treatNotification)(notification); // if there is an image, we preload it
    // and add notification when image is loaded

    if (notification.image) {
      (0, _helpers.preloadImage)(notification.image, dispatch.bind(_this, _addNotification(notification)));
    } else {
      dispatch(_addNotification(notification));
    }

    return notification;
  };
};
/**
 * Add a notification (action creator)
 *
 * @param {Object} notification
 * @returns {{type: string, payload: {Object}}}
 * @private
 */


exports.addNotification = addNotification;

function _addNotification(notification) {
  return {
    type: ADD_NOTIFICATION,
    payload: notification
  };
}
/**
 * Update or create a notification
 * @param {Object} notification
 * @returns {{type: string, payload: {Object}}}
 */


var notify = function notify(notification) {
  return function (dispatch, getState) {
    var notifications = getState().notifications;
    var doesNotifExist = notifications.find(function (notif) {
      return notif.id === notification.id;
    });

    if (doesNotifExist) {
      return dispatch(updateNotification(notification));
    }

    return dispatch(addNotification(notification));
  };
};
/**
 * Update a notification (thunk action creator)
 *
 * We use a thunk here to create an UPDATE_NOTIFICATION action
 * and only return the notification object.
 * @param {Object} notification
 * @returns {Object} notification
 */


exports.notify = notify;

var updateNotification = function updateNotification(notification) {
  return function (dispatch, getState) {
    if (!notification.id) {
      throw new Error('A notification must have an `id` property to be updated');
    }

    var notifications = getState().notifications;
    var index = notifications.findIndex(function (oldNotification) {
      return oldNotification.id === notification.id;
    });
    var currNotification = notifications[index];
    notification = (0, _helpers.treatNotification)(notification); // if image is different, then we preload it
    // and update notification when image is loaded

    if (notification.image && (!currNotification.image || currNotification.image && notification.image !== currNotification.image)) {
      (0, _helpers.preloadImage)(notification.image, dispatch.bind(_this, _updateNotification(notification)));
    } else {
      dispatch(_updateNotification(notification));
    }

    return notification;
  };
};
/**
 * Update a notification (action creator)
 *
 * @param {Object} notification
 * @returns {{type: string, payload: {Object}}}
 * @private
 */


exports.updateNotification = updateNotification;

function _updateNotification(notification) {
  return {
    type: UPDATE_NOTIFICATION,
    payload: notification
  };
}
/**
 * Remove a notification (action creator)
 *
 * @param {Object} notification
 * @returns {{type: string, payload: {Object}}}
 */


function removeNotification(notification) {
  return {
    type: REMOVE_NOTIFICATION,
    payload: notification
  };
}
/**
 * Remove all notifications (action creator)
 *
 * @returns {{type: string}}
 */


function removeNotifications() {
  return {
    type: REMOVE_NOTIFICATIONS
  };
} // Action creators


var actions = {
  addNotification: addNotification,
  updateNotification: updateNotification,
  removeNotification: removeNotification,
  removeNotifications: removeNotifications
}; // Actions types

exports.actions = actions;
var types = {
  ADD_NOTIFICATION: ADD_NOTIFICATION,
  UPDATE_NOTIFICATION: UPDATE_NOTIFICATION,
  REMOVE_NOTIFICATION: REMOVE_NOTIFICATION,
  REMOVE_NOTIFICATIONS: REMOVE_NOTIFICATIONS
}; // Reducers

exports.types = types;

var _default = function _default() {
  var defaultNotification = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.DEFAULT_NOTIFICATION;
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;

    var _ref = arguments.length > 1 ? arguments[1] : undefined,
        type = _ref.type,
        payload = _ref.payload;

    switch (type) {
      case ADD_NOTIFICATION:
        {
          var notification = Object.assign({}, defaultNotification, payload);
          return [].concat(_toConsumableArray(state), [notification]);
        }

      case UPDATE_NOTIFICATION:
        return state.map(function (notification) {
          if (notification.id === payload.id) {
            return Object.assign({}, defaultNotification, payload);
          }

          return notification;
        });

      case REMOVE_NOTIFICATION:
        return state.filter(function (notification) {
          return notification.id !== payload;
        });

      case REMOVE_NOTIFICATIONS:
        return [];

      default:
        return state;
    }
  };
};

exports["default"] = _default;