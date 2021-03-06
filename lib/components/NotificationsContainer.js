"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NotificationsContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));

var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));

var _Notification = _interopRequireDefault(require("./Notification"));

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

var NotificationsContainer = /*#__PURE__*/function (_Component) {
  _inherits(NotificationsContainer, _Component);

  var _super = _createSuper(NotificationsContainer);

  function NotificationsContainer() {
    var _this;

    _classCallCheck(this, NotificationsContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this._renderNotifications = function () {
      var position = _this.props.position;
      var className = _this.props.theme.notification.className;
      var _this$props$theme$not = _this.props.theme.notificationsContainer.transition,
          name = _this$props$theme$not.name,
          enterTimeout = _this$props$theme$not.enterTimeout,
          leaveTimeout = _this$props$theme$not.leaveTimeout;
      var notifications = _this.props.notifications; // when notifications are displayed at the bottom,
      // we display notifications from bottom to top

      if (position.startsWith('b')) {
        notifications = notifications.reverse();
      }

      return notifications.map(function (notification) {
        return /*#__PURE__*/_react["default"].createElement(_CSSTransition["default"], {
          key: notification.id,
          classNames: {
            enter: name.enter,
            exit: name.leave
          },
          timeout: {
            enter: enterTimeout,
            exit: leaveTimeout
          }
        }, /*#__PURE__*/_react["default"].createElement(_Notification["default"], {
          key: notification.id,
          notification: notification,
          className: className
        }));
      });
    };

    return _this;
  }

  _createClass(NotificationsContainer, [{
    key: "render",

    /**
     * Render
     * @returns {XML}
     */
    value: function render() {
      var className = this.props.theme.notificationsContainer.className;
      var position = this.props.position;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(className.main, " ").concat(className.position(position))
      }, /*#__PURE__*/_react["default"].createElement(_TransitionGroup["default"], null, this._renderNotifications()));
    }
  }]);

  return NotificationsContainer;
}(_react.Component);

exports.NotificationsContainer = NotificationsContainer;
NotificationsContainer.propTypes = {
  notifications: _propTypes["default"].array.isRequired,
  position: _propTypes["default"].string.isRequired,
  theme: _propTypes["default"].shape({
    notificationsContainer: _propTypes["default"].shape({
      className: _propTypes["default"].shape({
        main: _propTypes["default"].string.isRequired,
        position: _propTypes["default"].func.isRequired
      }).isRequired,
      transition: _propTypes["default"].shape({
        name: _propTypes["default"].object.isRequired,
        enterTimeout: _propTypes["default"].number.isRequired,
        leaveTimeout: _propTypes["default"].number.isRequired
      }).isRequired
    }).isRequired,
    notification: _propTypes["default"].shape({
      className: _propTypes["default"].object.isRequired
    }).isRequired
  }).isRequired
};
NotificationsContainer.defaultProps = {
  notifications: []
};
var _default = NotificationsContainer;
exports["default"] = _default;