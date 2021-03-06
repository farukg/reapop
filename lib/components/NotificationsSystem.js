"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NotificationsSystem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _helpers = require("../helpers");

var _NotificationsContainer = _interopRequireDefault(require("./NotificationsContainer"));

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

var NotificationsSystem = /*#__PURE__*/function (_Component) {
  _inherits(NotificationsSystem, _Component);

  var _super = _createSuper(NotificationsSystem);

  function NotificationsSystem() {
    var _this;

    _classCallCheck(this, NotificationsSystem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      windowWidth: window.innerWidth
    };

    _this._updateWindowWidth = function () {
      _this.setState({
        windowWidth: window.innerWidth
      });
    };

    _this._renderNotificationsContainers = function () {
      var _this$props = _this.props,
          theme = _this$props.theme,
          filter = _this$props.filter;
      var windowWidth = _this.state.windowWidth;
      var positions = (0, _helpers.mapObjectValues)(_constants.POSITIONS);
      var containers = [];
      var notifications = _this.props.notifications;

      if (typeof filter === 'function') {
        notifications = notifications.filter(filter);
      } // render all notifications in the same container at the top for small screens


      if (windowWidth < theme.smallScreenMin) {
        return /*#__PURE__*/_react["default"].createElement(_NotificationsContainer["default"], {
          key: theme.smallScreenPosition || _constants.POSITIONS.top,
          position: theme.smallScreenPosition || _constants.POSITIONS.top,
          theme: theme,
          notifications: notifications
        });
      }

      containers.push(positions.map(function (position) {
        var notifs = notifications.filter(function (notif) {
          return position === notif.position;
        });
        return /*#__PURE__*/_react["default"].createElement(_NotificationsContainer["default"], {
          key: position,
          position: position,
          theme: theme,
          notifications: notifs
        });
      }));
      return containers;
    };

    return _this;
  }

  _createClass(NotificationsSystem, [{
    key: "componentDidMount",

    /**
     * Add resize listener to update window width when the window is resized
     * @returns {void}
     */
    value: function componentDidMount() {
      window.addEventListener('resize', this._updateWindowWidth);
    }
    /**
     * Remove resize listener
     * @returns {void}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._updateWindowWidth);
    }
    /**
     * Update window width
     * @returns {void}
     * @private
     */

  }, {
    key: "render",

    /**
     * Render
     * @returns {XML}
     */
    value: function render() {
      var className = this.props.theme.notificationsSystem.className;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, this._renderNotificationsContainers());
    }
  }]);

  return NotificationsSystem;
}(_react.Component);
/**
 * Map state to props
 * @param {Object} state
 * @returns {{notifications: {Array}}}
 */


exports.NotificationsSystem = NotificationsSystem;
NotificationsSystem.propTypes = {
  notifications: _propTypes["default"].array.isRequired,
  filter: _propTypes["default"].func,
  theme: _propTypes["default"].shape({
    smallScreenMin: _propTypes["default"].number.isRequired,
    smallScreenPosition: _propTypes["default"].oneOf([_constants.POSITIONS.top, _constants.POSITIONS.bottom]),
    notificationsSystem: _propTypes["default"].shape({
      className: _propTypes["default"].string
    })
  }).isRequired
};
NotificationsSystem.defaultProps = {
  notifications: []
};

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps)(NotificationsSystem);

exports["default"] = _default;