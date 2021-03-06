"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Notification = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _helpers = require("../helpers");

var _notifications = require("../store/notifications");

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Create a timer
 * @param {Number} dismissAfter
 * @param {Function} callback
 * @returns {Function|null} a Timer
 */
function createTimer(dismissAfter, callback) {
  if (dismissAfter > 0) {
    return new _helpers.Timer(dismissAfter, callback);
  }

  return null;
}

var Notification = /*#__PURE__*/function (_Component) {
  _inherits(Notification, _Component);

  var _super = _createSuper(Notification);

  /**
   * Init timer
   * @param {Object} props
   * @returns {void}
   */
  function Notification(props) {
    var _this;

    _classCallCheck(this, Notification);

    var dismissAfter = props.notification.dismissAfter;
    _this = _super.call(this, props);

    _this._remove = function () {
      var _this$props = _this.props,
          removeNotification = _this$props.removeNotification,
          id = _this$props.notification.id;
      removeNotification(id);
    };

    _this._pauseTimer = function () {
      var timer = _this.state.timer;
      timer.pause();
    };

    _this._resumeTimer = function () {
      var timer = _this.state.timer;
      timer.resume();
    };

    _this._setHTML = function (content) {
      return {
        __html: content
      };
    };

    _this._renderButtons = function () {
      var _this$props2 = _this.props,
          className = _this$props2.className,
          buttons = _this$props2.notification.buttons;
      return buttons.map(function (_ref) {
        var name = _ref.name,
            onClick = _ref.onClick,
            primary = _ref.primary;
        return /*#__PURE__*/_react["default"].createElement("button", {
          key: name,
          className: className.button,
          onClick: onClick
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: className.buttonText
        }, primary ? /*#__PURE__*/_react["default"].createElement("b", null, name) : name));
      });
    };

    _this.state = {
      timer: createTimer(dismissAfter, _this._remove)
    };
    return _this;
  }
  /**
   * Run `onAdd` callback function when component is mounted
   * @returns {void}
   */


  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onAdd = this.props.notification.onAdd;

      if (typeof onAdd === 'function') {
        onAdd();
      }
    }
    /**
     * Run `onRemove` callback function when component will unmount
     * @returns {void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onRemove = this.props.notification.onRemove;

      if (typeof onRemove === 'function') {
        onRemove();
      }
    }
    /**
     * Update timer
     * @param {Object} nextProps
     * @returns {void}
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var dismissAfter = nextProps.notification.dismissAfter;
      this.setState({
        timer: createTimer(dismissAfter, this._remove)
      });
    }
    /**
     * Remove the notification
     * @private
     * @returns {void}
     */

  }, {
    key: "render",

    /**
     * Render
     * @returns {XML}
     */
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          _this$props3$notifica = _this$props3.notification,
          title = _this$props3$notifica.title,
          message = _this$props3$notifica.message,
          status = _this$props3$notifica.status,
          dismissible = _this$props3$notifica.dismissible,
          closeButton = _this$props3$notifica.closeButton,
          buttons = _this$props3$notifica.buttons,
          image = _this$props3$notifica.image,
          allowHTML = _this$props3$notifica.allowHTML;
      var timer = this.state.timer;
      var notificationClass = [className.main, className.status(status), className.buttons(buttons.length), dismissible && !closeButton ? className.dismissible : null].join(' ');

      if (timer) {
        this._resumeTimer();
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className.wrapper,
        onClick: dismissible && !closeButton ? this._remove : null,
        onMouseEnter: timer ? this._pauseTimer : null,
        onMouseLeave: timer ? this._resumeTimer : null
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: notificationClass
      }, image ? /*#__PURE__*/_react["default"].createElement("div", {
        className: className.imageContainer
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: className.image,
        style: {
          backgroundImage: "url(".concat(image, ")")
        }
      })) : /*#__PURE__*/_react["default"].createElement("span", {
        className: className.icon
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: className.meta
      }, title ? allowHTML ? /*#__PURE__*/_react["default"].createElement("h4", {
        className: className.title,
        dangerouslySetInnerHTML: this._setHTML(title)
      }) : /*#__PURE__*/_react["default"].createElement("h4", {
        className: className.title
      }, title) : null, message ? allowHTML ? /*#__PURE__*/_react["default"].createElement("p", {
        className: className.message,
        dangerouslySetInnerHTML: this._setHTML(message)
      }) : /*#__PURE__*/_react["default"].createElement("p", {
        className: className.message
      }, message) : null), dismissible && closeButton ? /*#__PURE__*/_react["default"].createElement("div", {
        className: className.closeButtonContainer
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: className.closeButton,
        onClick: this._remove
      })) : null, buttons.length ? /*#__PURE__*/_react["default"].createElement("div", {
        className: className.buttons(),
        onClick: this._remove
      }, this._renderButtons()) : null));
    }
  }]);

  return Notification;
}(_react.Component);

exports.Notification = Notification;

var _default = (0, _reactRedux.connect)(null, {
  removeNotification: _notifications.removeNotification
})(Notification);

exports["default"] = _default;