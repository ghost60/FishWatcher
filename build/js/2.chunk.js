webpackJsonp([2],{

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _classCallCheck2 = __webpack_require__(266);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(267);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(303);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(920);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Card = function (_React$Component) {
		(0, _inherits3.default)(Card, _React$Component);
	
		function Card(props) {
			(0, _classCallCheck3.default)(this, Card);
			return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));
		}
	
		Card.prototype.render = function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'card-body' },
				this.props.children
			);
		};
	
		return Card;
	}(_react2.default.Component);
	
	exports.default = Card;
	;

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _css = __webpack_require__(939);
	
	var _icon = __webpack_require__(626);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _css2 = __webpack_require__(940);
	
	var _progress = __webpack_require__(942);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	var _classCallCheck2 = __webpack_require__(266);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(267);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(303);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactPlayer = __webpack_require__(948);
	
	var _reactPlayer2 = _interopRequireDefault(_reactPlayer);
	
	var _reactDom = __webpack_require__(71);
	
	var _screenfull = __webpack_require__(961);
	
	var _screenfull2 = _interopRequireDefault(_screenfull);
	
	__webpack_require__(962);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Player = function (_Component) {
	  (0, _inherits3.default)(Player, _Component);
	
	  function Player() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Player);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      playing: true,
	      volume: 0,
	      played: 0,
	      loaded: 0,
	      duration: 0,
	      playbackRate: 1.0
	    }, _this.playPause = function () {
	      _this.setState({
	        playing: !_this.state.playing
	      });
	    }, _this.onProgress = function (state) {
	      if (!_this.state.seeking) {
	        _this.setState(state);
	      }
	    }, _this.onClickFullscreen = function () {
	      _screenfull2.default.request((0, _reactDom.findDOMNode)(_this.player));
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  Player.prototype.render = function render() {
	    var _this2 = this;
	
	    var _state = this.state,
	        url = _state.url,
	        playing = _state.playing,
	        volume = _state.volume,
	        played = _state.played,
	        loaded = _state.loaded,
	        duration = _state.duration,
	        playbackRate = _state.playbackRate,
	        soundcloudConfig = _state.soundcloudConfig,
	        vimeoConfig = _state.vimeoConfig,
	        youtubeConfig = _state.youtubeConfig,
	        fileConfig = _state.fileConfig;
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'player-div' },
	      _react2.default.createElement(_reactPlayer2.default, {
	        ref: function ref(player) {
	          _this2.player = player;
	        },
	        className: 'react-player',
	        width: '100%',
	        height: '100%',
	        url: this.props.url,
	        loop: this.props.loop,
	        playing: playing,
	        playbackRate: playbackRate,
	        volume: volume,
	        soundcloudConfig: soundcloudConfig,
	        vimeoConfig: vimeoConfig,
	        youtubeConfig: youtubeConfig,
	        fileConfig: fileConfig,
	        onReady: function onReady() {
	          return console.log('onReady');
	        },
	        onStart: function onStart() {
	          return console.log('onStart');
	        },
	        onPlay: function onPlay() {
	          return _this2.setState({ playing: true });
	        },
	        onPause: function onPause() {
	          return _this2.setState({ playing: false });
	        },
	        onBuffer: function onBuffer() {
	          return console.log('onBuffer');
	        },
	        onEnded: function onEnded() {
	          return _this2.setState({ playing: false });
	        },
	        onError: function onError(e) {
	          return console.log('onError', e);
	        },
	        onProgress: this.onProgress,
	        onDuration: function onDuration(duration) {
	          return _this2.setState({ duration: duration });
	        }
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: 'player-contr', style: this.props.ishide },
	        _react2.default.createElement(_progress2.default, { className: 'player-pro', percent: played * 100, strokeWidth: 2, showInfo: false }),
	        _react2.default.createElement(
	          'span',
	          { className: 'player-play', onClick: this.playPause },
	          _react2.default.createElement(_icon2.default, { type: playing ? 'Pause' : 'play-circle' })
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'player-scan', onClick: this.onClickFullscreen },
	          _react2.default.createElement(_icon2.default, { type: 'scan' })
	        )
	      )
	    );
	  };
	
	  return Player;
	}(_react.Component);
	
	exports.default = Player;

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(219);

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(219);
	
	__webpack_require__(941);

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _progress = __webpack_require__(943);
	
	var _progress2 = _interopRequireDefault(_progress);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _progress2["default"];
	module.exports = exports['default'];

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = undefined;
	
	var _extends2 = __webpack_require__(224);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _defineProperty2 = __webpack_require__(262);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _classCallCheck2 = __webpack_require__(266);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(267);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(303);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _icon = __webpack_require__(626);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _rcProgress = __webpack_require__(944);
	
	var _classnames = __webpack_require__(311);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};
	
	var statusColorMap = {
	    normal: '#108ee9',
	    exception: '#ff5500',
	    success: '#87d068'
	};
	
	var Progress = function (_React$Component) {
	    (0, _inherits3["default"])(Progress, _React$Component);
	
	    function Progress() {
	        (0, _classCallCheck3["default"])(this, Progress);
	        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
	    }
	
	    Progress.prototype.render = function render() {
	        var _classNames;
	
	        var props = this.props;
	
	        var prefixCls = props.prefixCls,
	            className = props.className,
	            _props$percent = props.percent,
	            percent = _props$percent === undefined ? 0 : _props$percent,
	            status = props.status,
	            format = props.format,
	            trailColor = props.trailColor,
	            type = props.type,
	            strokeWidth = props.strokeWidth,
	            width = props.width,
	            showInfo = props.showInfo,
	            _props$gapDegree = props.gapDegree,
	            gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
	            gapPosition = props.gapPosition,
	            restProps = __rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "type", "strokeWidth", "width", "showInfo", "gapDegree", "gapPosition"]);
	
	        var progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
	        var progressInfo = void 0;
	        var progress = void 0;
	        var textFormatter = format || function (percentNumber) {
	            return percentNumber + '%';
	        };
	        if (showInfo) {
	            var text = void 0;
	            var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';
	            if (progressStatus === 'exception') {
	                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'cross' + iconType });
	            } else if (progressStatus === 'success') {
	                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'check' + iconType });
	            } else {
	                text = textFormatter(percent);
	            }
	            progressInfo = _react2["default"].createElement(
	                'span',
	                { className: prefixCls + '-text' },
	                text
	            );
	        }
	        if (type === 'line') {
	            var percentStyle = {
	                width: percent + '%',
	                height: strokeWidth || 10
	            };
	            progress = _react2["default"].createElement(
	                'div',
	                null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: prefixCls + '-outer' },
	                    _react2["default"].createElement(
	                        'div',
	                        { className: prefixCls + '-inner' },
	                        _react2["default"].createElement('div', { className: prefixCls + '-bg', style: percentStyle })
	                    )
	                ),
	                progressInfo
	            );
	        } else if (type === 'circle' || type === 'dashboard') {
	            var circleSize = width || 132;
	            var circleStyle = {
	                width: circleSize,
	                height: circleSize,
	                fontSize: circleSize * 0.16 + 6
	            };
	            var circleWidth = strokeWidth || 6;
	            var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
	            var gapDeg = gapDegree || type === 'dashboard' && 75;
	            progress = _react2["default"].createElement(
	                'div',
	                { className: prefixCls + '-inner', style: circleStyle },
	                _react2["default"].createElement(_rcProgress.Circle, { percent: percent, strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor, prefixCls: prefixCls, gapDegree: gapDeg, gapPosition: gapPos }),
	                progressInfo
	            );
	        }
	        var classString = (0, _classnames2["default"])(prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-info', showInfo), _classNames), className);
	        return _react2["default"].createElement(
	            'div',
	            (0, _extends3["default"])({}, restProps, { className: classString }),
	            progress
	        );
	    };
	
	    return Progress;
	}(_react2["default"].Component);
	
	exports["default"] = Progress;
	
	Progress.defaultProps = {
	    type: 'line',
	    percent: 0,
	    showInfo: true,
	    trailColor: '#f3f3f3',
	    prefixCls: 'ant-progress'
	};
	Progress.propTypes = {
	    status: _react.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
	    type: _react.PropTypes.oneOf(['line', 'circle', 'dashboard']),
	    showInfo: _react.PropTypes.bool,
	    percent: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    strokeWidth: _react.PropTypes.number,
	    trailColor: _react.PropTypes.string,
	    format: _react.PropTypes.func,
	    gapDegree: _react.PropTypes.number
	};
	module.exports = exports['default'];

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Line = __webpack_require__(945);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Circle = __webpack_require__(947);
	
	var _Circle2 = _interopRequireDefault(_Circle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = {
	  Line: _Line2["default"],
	  Circle: _Circle2["default"]
	};
	module.exports = exports['default'];

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixin = __webpack_require__(946);
	
	var _mixin2 = _interopRequireDefault(_mixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/prop-types */
	
	
	exports["default"] = _react2["default"].createClass({
	  displayName: 'Line',
	
	  mixins: [_mixin2["default"]],
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var strokeWidth = _props.strokeWidth;
	    var trailWidth = _props.trailWidth;
	    var strokeColor = _props.strokeColor;
	    var trailColor = _props.trailColor;
	    var strokeLinecap = _props.strokeLinecap;
	    var percent = _props.percent;
	    var style = _props.style;
	    var className = _props.className;
	
	    var restProps = _objectWithoutProperties(_props, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'trailColor', 'strokeLinecap', 'percent', 'style', 'className']);
	
	    var pathStyle = {
	      strokeDasharray: '100px, 100px',
	      strokeDashoffset: 100 - percent + 'px',
	      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear'
	    };
	
	    var center = strokeWidth / 2;
	    var right = 100 - strokeWidth / 2;
	    var pathString = 'M ' + center + ',' + center + ' L ' + right + ',' + center;
	    var viewBoxString = '0 0 100 ' + strokeWidth;
	
	    return _react2["default"].createElement(
	      'svg',
	      _extends({
	        className: prefixCls + '-line ' + className,
	        viewBox: viewBoxString,
	        preserveAspectRatio: 'none',
	        style: style
	      }, restProps),
	      _react2["default"].createElement('path', {
	        className: prefixCls + '-line-trail',
	        d: pathString,
	        strokeLinecap: strokeLinecap,
	        stroke: trailColor,
	        strokeWidth: trailWidth || strokeWidth,
	        fillOpacity: '0'
	      }),
	      _react2["default"].createElement('path', {
	        className: prefixCls + '-line-path',
	        d: pathString,
	        strokeLinecap: strokeLinecap,
	        stroke: strokeColor,
	        strokeWidth: strokeWidth,
	        fillOpacity: '0',
	        ref: function ref(path) {
	          _this.path = path;
	        },
	        style: pathStyle
	      })
	    );
	  }
	});
	module.exports = exports['default'];

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(20);
	
	exports["default"] = {
	  propTypes: {
	    prefixCls: _react.PropTypes.string,
	    strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    strokeColor: _react.PropTypes.string,
	    trailWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    trailColor: _react.PropTypes.string,
	    strokeLinecap: _react.PropTypes.oneOf(['round', 'square']),
	    style: _react.PropTypes.object,
	    className: _react.PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-progress',
	      strokeWidth: 1,
	      strokeColor: '#2db7f5',
	      trailWidth: 1,
	      trailColor: '#D9D9D9',
	      strokeLinecap: 'round',
	      className: ''
	    };
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    var now = Date.now();
	    this.path.style.transitionDuration = '0.3s, 0.3s';
	    if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
	      this.path.style.transitionDuration = '0s, 0s';
	    }
	    this.prevTimeStamp = Date.now();
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _mixin = __webpack_require__(946);
	
	var _mixin2 = _interopRequireDefault(_mixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/prop-types */
	
	
	exports["default"] = _react2["default"].createClass({
	  displayName: 'Circle',
	
	  propTypes: {
	    percent: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    trailWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    className: _react.PropTypes.string,
	    style: _react.PropTypes.object,
	    trailColor: _react.PropTypes.string,
	    strokeColor: _react.PropTypes.string,
	    gapPosition: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	    strokeLinecap: _react.PropTypes.string
	  },
	  mixins: [_mixin2["default"]],
	  getPathStyles: function getPathStyles() {
	    var _props = this.props;
	    var percent = _props.percent;
	    var strokeWidth = _props.strokeWidth;
	    var _props$gapDegree = _props.gapDegree;
	    var gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree;
	    var gapPosition = _props.gapPosition;
	
	    var radius = 50 - strokeWidth / 2;
	    var beginPositionX = 0;
	    var beginPositionY = -radius;
	    var endPositionX = 0;
	    var endPositionY = -2 * radius;
	    switch (gapPosition) {
	      case 'left':
	        beginPositionX = -radius;
	        beginPositionY = 0;
	        endPositionX = 2 * radius;
	        endPositionY = 0;
	        break;
	      case 'right':
	        beginPositionX = radius;
	        beginPositionY = 0;
	        endPositionX = -2 * radius;
	        endPositionY = 0;
	        break;
	      case 'bottom':
	        beginPositionY = radius;
	        endPositionY = 2 * radius;
	        break;
	      default:
	    }
	    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
	    var len = Math.PI * 2 * radius;
	    var trailPathStyle = {
	      strokeDasharray: len - gapDegree + 'px ' + len + 'px',
	      strokeDashoffset: '-' + gapDegree / 2 + 'px',
	      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
	    };
	    var strokePathStyle = {
	      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
	      strokeDashoffset: '-' + gapDegree / 2 + 'px',
	      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
	    };
	    return { pathString: pathString, trailPathStyle: trailPathStyle, strokePathStyle: strokePathStyle };
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props2 = this.props;
	    var prefixCls = _props2.prefixCls;
	    var strokeWidth = _props2.strokeWidth;
	    var trailWidth = _props2.trailWidth;
	    var strokeColor = _props2.strokeColor;
	    var trailColor = _props2.trailColor;
	    var strokeLinecap = _props2.strokeLinecap;
	    var style = _props2.style;
	    var className = _props2.className;
	
	    var restProps = _objectWithoutProperties(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'trailColor', 'strokeLinecap', 'style', 'className']);
	
	    var _getPathStyles = this.getPathStyles();
	
	    var pathString = _getPathStyles.pathString;
	    var trailPathStyle = _getPathStyles.trailPathStyle;
	    var strokePathStyle = _getPathStyles.strokePathStyle;
	
	    delete restProps.percent;
	    delete restProps.gapDegree;
	    delete restProps.gapPosition;
	    return _react2["default"].createElement(
	      'svg',
	      _extends({
	        className: prefixCls + '-circle ' + className,
	        viewBox: '0 0 100 100',
	        style: style
	      }, restProps),
	      _react2["default"].createElement('path', {
	        className: prefixCls + '-circle-trail',
	        d: pathString,
	        stroke: trailColor,
	        strokeWidth: trailWidth || strokeWidth,
	        fillOpacity: '0',
	        style: trailPathStyle
	      }),
	      _react2["default"].createElement('path', {
	        className: prefixCls + '-circle-path',
	        d: pathString,
	        strokeLinecap: strokeLinecap,
	        stroke: strokeColor,
	        strokeWidth: strokeWidth,
	        fillOpacity: '0',
	        ref: function ref(path) {
	          _this.path = path;
	        },
	        style: strokePathStyle
	      })
	    );
	  }
	});
	module.exports = exports['default'];

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _props3 = __webpack_require__(949);
	
	var _YouTube = __webpack_require__(950);
	
	var _YouTube2 = _interopRequireDefault(_YouTube);
	
	var _SoundCloud = __webpack_require__(954);
	
	var _SoundCloud2 = _interopRequireDefault(_SoundCloud);
	
	var _Vimeo = __webpack_require__(957);
	
	var _Vimeo2 = _interopRequireDefault(_Vimeo);
	
	var _FilePlayer = __webpack_require__(956);
	
	var _FilePlayer2 = _interopRequireDefault(_FilePlayer);
	
	var _Streamable = __webpack_require__(958);
	
	var _Streamable2 = _interopRequireDefault(_Streamable);
	
	var _Vidme = __webpack_require__(959);
	
	var _Vidme2 = _interopRequireDefault(_Vidme);
	
	var _Wistia = __webpack_require__(960);
	
	var _Wistia2 = _interopRequireDefault(_Wistia);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactPlayer = function (_Component) {
	  _inherits(ReactPlayer, _Component);
	
	  function ReactPlayer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ReactPlayer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactPlayer.__proto__ || Object.getPrototypeOf(ReactPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.seekTo = function (fraction) {
	      if (_this.player) {
	        _this.player.seekTo(fraction);
	      }
	    }, _this.progress = function () {
	      if (_this.props.url && _this.player) {
	        var loaded = _this.player.getFractionLoaded() || 0;
	        var played = _this.player.getFractionPlayed() || 0;
	        var progress = {};
	        if (loaded !== _this.prevLoaded) {
	          progress.loaded = loaded;
	        }
	        if (played !== _this.prevPlayed) {
	          progress.played = played;
	        }
	        if (progress.loaded || progress.played) {
	          _this.props.onProgress(progress);
	        }
	        _this.prevLoaded = loaded;
	        _this.prevPlayed = played;
	      }
	      _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency);
	    }, _this.ref = function (player) {
	      _this.player = player;
	    }, _this.renderPlayer = function (Player) {
	      var active = Player.canPlay(_this.props.url);
	
	      var _this$props = _this.props,
	          youtubeConfig = _this$props.youtubeConfig,
	          soundcloudConfig = _this$props.soundcloudConfig,
	          vimeoConfig = _this$props.vimeoConfig,
	          fileConfig = _this$props.fileConfig,
	          activeProps = _objectWithoutProperties(_this$props, ['youtubeConfig', 'soundcloudConfig', 'vimeoConfig', 'fileConfig']);
	
	      var props = active ? _extends({}, activeProps, { ref: _this.ref }) : {};
	      return _react2['default'].createElement(Player, _extends({
	        key: Player.displayName,
	        youtubeConfig: youtubeConfig,
	        soundcloudConfig: soundcloudConfig,
	        vimeoConfig: vimeoConfig,
	        fileConfig: fileConfig
	      }, props));
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ReactPlayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.progress();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.progressTimeout);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.url !== nextProps.url || this.props.playing !== nextProps.playing || this.props.volume !== nextProps.volume || this.props.playbackRate !== nextProps.playbackRate || this.props.height !== nextProps.height || this.props.width !== nextProps.width || this.props.hidden !== nextProps.hidden;
	    }
	  }, {
	    key: 'renderPlayers',
	    value: function renderPlayers() {
	      // Build array of players to render based on URL and preload config
	      var _props = this.props,
	          url = _props.url,
	          youtubeConfig = _props.youtubeConfig,
	          vimeoConfig = _props.vimeoConfig;
	
	      var players = [];
	      if (_YouTube2['default'].canPlay(url)) {
	        players.push(_YouTube2['default']);
	      } else if (_SoundCloud2['default'].canPlay(url)) {
	        players.push(_SoundCloud2['default']);
	      } else if (_Vimeo2['default'].canPlay(url)) {
	        players.push(_Vimeo2['default']);
	      } else if (_Streamable2['default'].canPlay(url)) {
	        players.push(_Streamable2['default']);
	      } else if (_Vidme2['default'].canPlay(url)) {
	        players.push(_Vidme2['default']);
	      } else if (_Wistia2['default'].canPlay(url)) {
	        players.push(_Wistia2['default']);
	      } else if (url) {
	        // Fall back to FilePlayer if nothing else can play the URL
	        players.push(_FilePlayer2['default']);
	      }
	      // Render additional players if preload config is set
	      if (!_YouTube2['default'].canPlay(url) && youtubeConfig.preload) {
	        players.push(_YouTube2['default']);
	      }
	      if (!_Vimeo2['default'].canPlay(url) && vimeoConfig.preload) {
	        players.push(_Vimeo2['default']);
	      }
	      return players.map(this.renderPlayer);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          style = _props2.style,
	          width = _props2.width,
	          height = _props2.height,
	          className = _props2.className,
	          hidden = _props2.hidden;
	
	      var players = this.renderPlayers();
	      return _react2['default'].createElement(
	        'div',
	        { style: _extends({}, style, { width: width, height: height }), className: className, hidden: hidden },
	        players
	      );
	    }
	  }]);
	
	  return ReactPlayer;
	}(_react.Component);
	
	ReactPlayer.displayName = 'ReactPlayer';
	ReactPlayer.propTypes = _props3.propTypes;
	ReactPlayer.defaultProps = _props3.defaultProps;
	exports['default'] = ReactPlayer;
	module.exports = exports['default'];

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultProps = exports.propTypes = undefined;
	
	var _react = __webpack_require__(20);
	
	var string = _react.PropTypes.string,
	    bool = _react.PropTypes.bool,
	    number = _react.PropTypes.number,
	    oneOfType = _react.PropTypes.oneOfType,
	    shape = _react.PropTypes.shape,
	    object = _react.PropTypes.object,
	    func = _react.PropTypes.func;
	var propTypes = exports.propTypes = {
	  url: string,
	  playing: bool,
	  loop: bool,
	  controls: bool,
	  volume: number,
	  playbackRate: number,
	  width: oneOfType([string, number]),
	  height: oneOfType([string, number]),
	  hidden: bool,
	  className: string,
	  style: object,
	  progressFrequency: number,
	  soundcloudConfig: shape({
	    clientId: string,
	    showArtwork: bool
	  }),
	  youtubeConfig: shape({
	    playerVars: object,
	    preload: bool
	  }),
	  vimeoConfig: shape({
	    iframeParams: object,
	    preload: bool
	  }),
	  fileConfig: shape({
	    attributes: object
	  }),
	  onReady: func,
	  onStart: func,
	  onPlay: func,
	  onPause: func,
	  onBuffer: func,
	  onEnded: func,
	  onError: func,
	  onDuration: func,
	  onProgress: func
	};
	
	var defaultProps = exports.defaultProps = {
	  playing: false,
	  loop: false,
	  controls: false,
	  volume: 0.8,
	  playbackRate: 1,
	  width: 640,
	  height: 360,
	  hidden: false,
	  progressFrequency: 1000,
	  soundcloudConfig: {
	    clientId: 'e8b6f84fbcad14c301ca1355cae1dea2',
	    showArtwork: true
	  },
	  youtubeConfig: {
	    playerVars: {},
	    preload: false
	  },
	  vimeoConfig: {
	    iframeParams: {},
	    preload: false
	  },
	  fileConfig: {
	    attributes: {}
	  },
	  onReady: function onReady() {},
	  onStart: function onStart() {},
	  onPlay: function onPlay() {},
	  onPause: function onPause() {},
	  onBuffer: function onBuffer() {},
	  onEnded: function onEnded() {},
	  onError: function onError() {},
	  onDuration: function onDuration() {},
	  onProgress: function onProgress() {}
	};

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _loadScript = __webpack_require__(951);
	
	var _loadScript2 = _interopRequireDefault(_loadScript);
	
	var _Base2 = __webpack_require__(952);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	var _utils = __webpack_require__(953);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SDK_URL = 'https://www.youtube.com/iframe_api';
	var SDK_GLOBAL = 'YT';
	var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
	var MATCH_URL = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	var BLANK_VIDEO_URL = 'https://www.youtube.com/watch?v=GlCmAC4MHek';
	var DEFAULT_PLAYER_VARS = {
	  autoplay: 0,
	  playsinline: 1,
	  showinfo: 0,
	  rel: 0,
	  iv_load_policy: 3
	};
	
	var YouTube = function (_Base) {
	  _inherits(YouTube, _Base);
	
	  function YouTube() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, YouTube);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = YouTube.__proto__ || Object.getPrototypeOf(YouTube)).call.apply(_ref, [this].concat(args))), _this), _this.onStateChange = function (_ref2) {
	      var data = _ref2.data;
	      var _this$props = _this.props,
	          onPause = _this$props.onPause,
	          onBuffer = _this$props.onBuffer;
	      var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
	          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
	          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
	          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
	          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
	          CUED = _window$SDK_GLOBAL$Pl.CUED;
	
	      if (data === PLAYING) _this.onPlay();
	      if (data === PAUSED) onPause();
	      if (data === BUFFERING) onBuffer();
	      if (data === ENDED) _this.onEnded();
	      if (data === CUED) _this.onReady();
	    }, _this.onEnded = function () {
	      var _this$props2 = _this.props,
	          loop = _this$props2.loop,
	          onEnded = _this$props2.onEnded;
	
	      if (loop) {
	        _this.seekTo(0);
	      }
	      onEnded();
	    }, _this.ref = function (container) {
	      _this.container = container;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(YouTube, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          url = _props.url,
	          youtubeConfig = _props.youtubeConfig;
	
	      if (!url && youtubeConfig.preload) {
	        this.preloading = true;
	        this.load(BLANK_VIDEO_URL);
	      }
	      _get(YouTube.prototype.__proto__ || Object.getPrototypeOf(YouTube.prototype), 'componentDidMount', this).call(this);
	    }
	  }, {
	    key: 'getSDK',
	    value: function getSDK() {
	      if (window[SDK_GLOBAL] && window[SDK_GLOBAL].loaded) {
	        return Promise.resolve(window[SDK_GLOBAL]);
	      }
	      return new Promise(function (resolve, reject) {
	        var previousOnReady = window[SDK_GLOBAL_READY];
	        window[SDK_GLOBAL_READY] = function () {
	          if (previousOnReady) previousOnReady();
	          resolve(window[SDK_GLOBAL]);
	        };
	        (0, _loadScript2['default'])(SDK_URL, function (err) {
	          if (err) reject(err);
	        });
	      });
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          controls = _props2.controls,
	          youtubeConfig = _props2.youtubeConfig,
	          _onError = _props2.onError;
	
	      var id = url && url.match(MATCH_URL)[1];
	      if (this.isReady) {
	        this.player.cueVideoById({
	          videoId: id,
	          startSeconds: (0, _utils.parseStartTime)(url)
	        });
	        return;
	      }
	      if (this.loadingSDK) {
	        this.loadOnReady = url;
	        return;
	      }
	      this.loadingSDK = true;
	      this.getSDK().then(function (YT) {
	        _this2.player = new YT.Player(_this2.container, {
	          width: '100%',
	          height: '100%',
	          videoId: id,
	          playerVars: _extends({}, DEFAULT_PLAYER_VARS, {
	            controls: controls ? 1 : 0,
	            start: (0, _utils.parseStartTime)(url),
	            origin: window.location.origin
	          }, youtubeConfig.playerVars),
	          events: {
	            onReady: function onReady() {
	              _this2.loadingSDK = false;
	              _this2.onReady();
	            },
	            onStateChange: _this2.onStateChange,
	            onError: function onError(event) {
	              return _onError(event.data);
	            }
	          }
	        });
	      }, _onError);
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      if (!this.isReady || !this.player.playVideo) return;
	      this.player.playVideo();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      if (!this.isReady || !this.player.pauseVideo) return;
	      this.player.pauseVideo();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (!this.isReady || !this.player.stopVideo) return;
	      this.player.stopVideo();
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(fraction) {
	      _get(YouTube.prototype.__proto__ || Object.getPrototypeOf(YouTube.prototype), 'seekTo', this).call(this, fraction);
	      if (!this.isReady || !this.player.seekTo) return;
	      this.player.seekTo(this.getDuration() * fraction);
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(fraction) {
	      if (!this.isReady || !this.player.setVolume) return;
	      this.player.setVolume(fraction * 100);
	    }
	  }, {
	    key: 'setPlaybackRate',
	    value: function setPlaybackRate(rate) {
	      if (!this.isReady || !this.player.setPlaybackRate) return;
	      this.player.setPlaybackRate(rate);
	    }
	  }, {
	    key: 'getDuration',
	    value: function getDuration() {
	      if (!this.isReady || !this.player.getDuration) return null;
	      return this.player.getDuration();
	    }
	  }, {
	    key: 'getFractionPlayed',
	    value: function getFractionPlayed() {
	      if (!this.isReady || !this.getDuration()) return null;
	      return this.player.getCurrentTime() / this.getDuration();
	    }
	  }, {
	    key: 'getFractionLoaded',
	    value: function getFractionLoaded() {
	      if (!this.isReady || !this.player.getVideoLoadedFraction) return null;
	      return this.player.getVideoLoadedFraction();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        width: '100%',
	        height: '100%',
	        display: this.props.url ? 'block' : 'none'
	      };
	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        _react2['default'].createElement('div', { ref: this.ref })
	      );
	    }
	  }], [{
	    key: 'canPlay',
	    value: function canPlay(url) {
	      return MATCH_URL.test(url);
	    }
	  }]);
	
	  return YouTube;
	}(_Base3['default']);
	
	YouTube.displayName = 'YouTube';
	exports['default'] = YouTube;
	module.exports = exports['default'];

/***/ }),

/***/ 951:
/***/ (function(module, exports) {

	
	module.exports = function load (src, opts, cb) {
	  var head = document.head || document.getElementsByTagName('head')[0]
	  var script = document.createElement('script')
	
	  if (typeof opts === 'function') {
	    cb = opts
	    opts = {}
	  }
	
	  opts = opts || {}
	  cb = cb || function() {}
	
	  script.type = opts.type || 'text/javascript'
	  script.charset = opts.charset || 'utf8';
	  script.async = 'async' in opts ? !!opts.async : true
	  script.src = src
	
	  if (opts.attrs) {
	    setAttributes(script, opts.attrs)
	  }
	
	  if (opts.text) {
	    script.text = '' + opts.text
	  }
	
	  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
	  onend(script, cb)
	
	  // some good legacy browsers (firefox) fail the 'in' detection above
	  // so as a fallback we always set onload
	  // old IE will ignore this and new IE will set onload
	  if (!script.onload) {
	    stdOnEnd(script, cb);
	  }
	
	  head.appendChild(script)
	}
	
	function setAttributes(script, attrs) {
	  for (var attr in attrs) {
	    script.setAttribute(attr, attrs[attr]);
	  }
	}
	
	function stdOnEnd (script, cb) {
	  script.onload = function () {
	    this.onerror = this.onload = null
	    cb(null, script)
	  }
	  script.onerror = function () {
	    // this.onload = null here is necessary
	    // because even IE9 works not like others
	    this.onerror = this.onload = null
	    cb(new Error('Failed to load ' + this.src), script)
	  }
	}
	
	function ieOnEnd (script, cb) {
	  script.onreadystatechange = function () {
	    if (this.readyState != 'complete' && this.readyState != 'loaded') return
	    this.onreadystatechange = null
	    cb(null, script) // there is no way to catch loading errors in IE8
	  }
	}


/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(20);
	
	var _props2 = __webpack_require__(949);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SEEK_ON_PLAY_EXPIRY = 5000;
	
	var Base = function (_Component) {
	  _inherits(Base, _Component);
	
	  function Base() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Base);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Base.__proto__ || Object.getPrototypeOf(Base)).call.apply(_ref, [this].concat(args))), _this), _this.isReady = false, _this.startOnPlay = true, _this.durationOnPlay = false, _this.seekOnPlay = null, _this.onPlay = function () {
	      var _this$props = _this.props,
	          volume = _this$props.volume,
	          onStart = _this$props.onStart,
	          onPlay = _this$props.onPlay,
	          onDuration = _this$props.onDuration,
	          playbackRate = _this$props.playbackRate;
	
	      if (_this.startOnPlay) {
	        _this.setPlaybackRate(playbackRate);
	        _this.setVolume(volume);
	        onStart();
	        _this.startOnPlay = false;
	      }
	      onPlay();
	      if (_this.seekOnPlay) {
	        _this.seekTo(_this.seekOnPlay);
	        _this.seekOnPlay = null;
	      }
	      if (_this.durationOnPlay) {
	        onDuration(_this.getDuration());
	        _this.durationOnPlay = false;
	      }
	    }, _this.onReady = function () {
	      var _this$props2 = _this.props,
	          onReady = _this$props2.onReady,
	          playing = _this$props2.playing,
	          onDuration = _this$props2.onDuration;
	
	      _this.isReady = true;
	      onReady();
	      if (playing || _this.preloading) {
	        _this.preloading = false;
	        if (_this.loadOnReady) {
	          _this.load(_this.loadOnReady);
	          _this.loadOnReady = null;
	        } else {
	          _this.play();
	        }
	      }
	      var duration = _this.getDuration();
	      if (duration) {
	        onDuration(duration);
	      } else {
	        _this.durationOnPlay = true;
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Base, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var url = this.props.url;
	
	      this.mounted = true;
	      if (url) {
	        this.load(url);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.stop();
	      this.mounted = false;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _props = this.props,
	          url = _props.url,
	          playing = _props.playing,
	          volume = _props.volume,
	          playbackRate = _props.playbackRate;
	      // Invoke player methods based on incoming props
	
	      if (url !== nextProps.url && nextProps.url) {
	        this.seekOnPlay = null;
	        this.startOnPlay = true;
	        this.load(nextProps.url);
	      } else if (url && !nextProps.url) {
	        this.stop();
	        clearTimeout(this.updateTimeout);
	      } else if (!playing && nextProps.playing) {
	        this.play();
	      } else if (playing && !nextProps.playing) {
	        this.pause();
	      } else if (volume !== nextProps.volume) {
	        this.setVolume(nextProps.volume);
	      } else if (playbackRate !== nextProps.playbackRate) {
	        this.setPlaybackRate(nextProps.playbackRate);
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.url !== nextProps.url;
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(fraction) {
	      var _this2 = this;
	
	      // When seeking before player is ready, store value and seek later
	      if (!this.isReady && fraction !== 0) {
	        this.seekOnPlay = fraction;
	        setTimeout(function () {
	          _this2.seekOnPlay = null;
	        }, SEEK_ON_PLAY_EXPIRY);
	      }
	    }
	  }]);
	
	  return Base;
	}(_react.Component);
	
	Base.propTypes = _props2.propTypes;
	Base.defaultProps = _props2.defaultProps;
	exports['default'] = Base;
	module.exports = exports['default'];

/***/ }),

/***/ 953:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.parseStartTime = parseStartTime;
	var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
	var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
	var MATCH_NUMERIC = /^\d+$/;
	
	// Parse YouTube URL for a start time param, ie ?t=1h14m30s
	// and return the start time in seconds
	function parseStartTime(url) {
	  var match = url.match(MATCH_START_QUERY);
	  if (match) {
	    var stamp = match[1];
	    if (stamp.match(MATCH_START_STAMP)) {
	      return parseStartStamp(stamp);
	    }
	    if (MATCH_NUMERIC.test(stamp)) {
	      return parseInt(stamp, 10);
	    }
	  }
	  return 0;
	}
	
	function parseStartStamp(stamp) {
	  var seconds = 0;
	  var array = MATCH_START_STAMP.exec(stamp);
	  while (array !== null) {
	    var _array = array,
	        _array2 = _slicedToArray(_array, 3),
	        count = _array2[1],
	        period = _array2[2];
	
	    if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
	    if (period === 'm') seconds += parseInt(count, 10) * 60;
	    if (period === 's') seconds += parseInt(count, 10);
	    array = MATCH_START_STAMP.exec(stamp);
	  }
	  return seconds;
	}

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _fetchJsonp = __webpack_require__(955);
	
	var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
	
	var _FilePlayer2 = __webpack_require__(956);
	
	var _FilePlayer3 = _interopRequireDefault(_FilePlayer2);
	
	var _props3 = __webpack_require__(949);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RESOLVE_URL = '//api.soundcloud.com/resolve.json';
	var MATCH_URL = /^https?:\/\/(soundcloud.com|snd.sc)\/([a-z0-9-_]+\/[a-z0-9-_]+)$/;
	
	var songData = {}; // Cache song data requests
	
	var SoundCloud = function (_FilePlayer) {
	  _inherits(SoundCloud, _FilePlayer);
	
	  function SoundCloud() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, SoundCloud);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SoundCloud.__proto__ || Object.getPrototypeOf(SoundCloud)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      image: null
	    }, _this.clientId = _this.props.soundcloudConfig.clientId || _props3.defaultProps.soundcloudConfig.clientId, _this.ref = function (player) {
	      _this.player = player;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(SoundCloud, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return _get(SoundCloud.prototype.__proto__ || Object.getPrototypeOf(SoundCloud.prototype), 'shouldComponentUpdate', this).call(this, nextProps, nextState) || this.state.image !== nextState.image;
	    }
	  }, {
	    key: 'getSongData',
	    value: function getSongData(url) {
	      var _this2 = this;
	
	      if (songData[url]) {
	        return Promise.resolve(songData[url]);
	      }
	      return (0, _fetchJsonp2['default'])(RESOLVE_URL + '?url=' + url + '&client_id=' + this.clientId).then(function (response) {
	        if (response.ok) {
	          songData[url] = response.json();
	          return songData[url];
	        } else {
	          _this2.props.onError(new Error('SoundCloud track could not be resolved'));
	        }
	      });
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      var _this3 = this;
	
	      var _props = this.props,
	          soundcloudConfig = _props.soundcloudConfig,
	          onError = _props.onError;
	
	      this.stop();
	      this.getSongData(url).then(function (data) {
	        if (!_this3.mounted) return;
	        if (!data.streamable) {
	          onError(new Error('SoundCloud track is not streamable'));
	          return;
	        }
	        var image = data.artwork_url || data.user.avatar_url;
	        if (image && soundcloudConfig.showArtwork) {
	          _this3.setState({ image: image.replace('-large', '-t500x500') });
	        }
	        _this3.player.src = data.stream_url + '?client_id=' + _this3.clientId;
	      }, onError);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          url = _props2.url,
	          loop = _props2.loop,
	          controls = _props2.controls;
	
	      var style = {
	        display: url ? 'block' : 'none',
	        height: '100%',
	        backgroundImage: this.state.image ? 'url(' + this.state.image + ')' : null,
	        backgroundSize: 'cover',
	        backgroundPosition: 'center'
	      };
	      return _react2['default'].createElement(
	        'div',
	        { style: style },
	        _react2['default'].createElement('audio', {
	          ref: this.ref,
	          type: 'audio/mpeg',
	          preload: 'auto',
	          style: {
	            width: '100%',
	            height: '100%'
	          },
	          controls: controls,
	          loop: loop
	        })
	      );
	    }
	  }], [{
	    key: 'canPlay',
	    value: function canPlay(url) {
	      return MATCH_URL.test(url);
	    }
	  }]);
	
	  return SoundCloud;
	}(_FilePlayer3['default']);
	
	SoundCloud.displayName = 'SoundCloud';
	exports['default'] = SoundCloud;
	module.exports = exports['default'];

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.fetchJsonp = mod.exports;
	  }
	})(this, function (exports, module) {
	  'use strict';
	
	  var defaultOptions = {
	    timeout: 5000,
	    jsonpCallback: 'callback',
	    jsonpCallbackFunction: null
	  };
	
	  function generateCallbackFunction() {
	    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
	  }
	
	  // Known issue: Will throw 'Uncaught ReferenceError: callback_*** is not defined'
	  // error if request timeout
	  function clearFunction(functionName) {
	    // IE8 throws an exception when you try to delete a property on window
	    // http://stackoverflow.com/a/1824228/751089
	    try {
	      delete window[functionName];
	    } catch (e) {
	      window[functionName] = undefined;
	    }
	  }
	
	  function removeScript(scriptId) {
	    var script = document.getElementById(scriptId);
	    document.getElementsByTagName('head')[0].removeChild(script);
	  }
	
	  function fetchJsonp(_url) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    // to avoid param reassign
	    var url = _url;
	    var timeout = options.timeout || defaultOptions.timeout;
	    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;
	
	    var timeoutId = undefined;
	
	    return new Promise(function (resolve, reject) {
	      var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
	      var scriptId = jsonpCallback + '_' + callbackFunction;
	
	      window[callbackFunction] = function (response) {
	        resolve({
	          ok: true,
	          // keep consistent with fetch API
	          json: function json() {
	            return Promise.resolve(response);
	          }
	        });
	
	        if (timeoutId) clearTimeout(timeoutId);
	
	        removeScript(scriptId);
	
	        clearFunction(callbackFunction);
	      };
	
	      // Check if the user set their own params, and if not add a ? to start a list of params
	      url += url.indexOf('?') === -1 ? '?' : '&';
	
	      var jsonpScript = document.createElement('script');
	      jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
	      jsonpScript.id = scriptId;
	      document.getElementsByTagName('head')[0].appendChild(jsonpScript);
	
	      timeoutId = setTimeout(function () {
	        reject(new Error('JSONP request to ' + _url + ' timed out'));
	
	        clearFunction(callbackFunction);
	        removeScript(scriptId);
	      }, timeout);
	    });
	  }
	
	  // export as global function
	  /*
	  let local;
	  if (typeof global !== 'undefined') {
	    local = global;
	  } else if (typeof self !== 'undefined') {
	    local = self;
	  } else {
	    try {
	      local = Function('return this')();
	    } catch (e) {
	      throw new Error('polyfill failed because global object is unavailable in this environment');
	    }
	  }
	  local.fetchJsonp = fetchJsonp;
	  */
	
	  module.exports = fetchJsonp;
	});

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Base2 = __webpack_require__(952);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
	
	var FilePlayer = function (_Base) {
	  _inherits(FilePlayer, _Base);
	
	  function FilePlayer() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, FilePlayer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FilePlayer.__proto__ || Object.getPrototypeOf(FilePlayer)).call.apply(_ref, [this].concat(args))), _this), _this.ref = function (player) {
	      _this.player = player;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(FilePlayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var _props = this.props,
	          onPause = _props.onPause,
	          onEnded = _props.onEnded,
	          onError = _props.onError;
	
	      this.player.addEventListener('canplay', this.onReady);
	      this.player.addEventListener('play', this.onPlay);
	      this.player.addEventListener('pause', function () {
	        if (_this2.mounted) {
	          onPause();
	        }
	      });
	      this.player.addEventListener('ended', onEnded);
	      this.player.addEventListener('error', onError);
	      this.player.setAttribute('webkit-playsinline', '');
	      _get(FilePlayer.prototype.__proto__ || Object.getPrototypeOf(FilePlayer.prototype), 'componentDidMount', this).call(this);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _props2 = this.props,
	          onPause = _props2.onPause,
	          onEnded = _props2.onEnded,
	          onError = _props2.onError;
	
	      this.player.removeEventListener('canplay', this.onReady);
	      this.player.removeEventListener('play', this.onPlay);
	      this.player.removeEventListener('pause', onPause);
	      this.player.removeEventListener('ended', onEnded);
	      this.player.removeEventListener('error', onError);
	      _get(FilePlayer.prototype.__proto__ || Object.getPrototypeOf(FilePlayer.prototype), 'componentWillUnmount', this).call(this);
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      this.player.src = url;
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this.player.play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.player.pause();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.player.removeAttribute('src');
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(fraction) {
	      _get(FilePlayer.prototype.__proto__ || Object.getPrototypeOf(FilePlayer.prototype), 'seekTo', this).call(this, fraction);
	      this.player.currentTime = this.getDuration() * fraction;
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(fraction) {
	      this.player.volume = fraction;
	    }
	  }, {
	    key: 'setPlaybackRate',
	    value: function setPlaybackRate(rate) {
	      this.player.playbackRate = rate;
	    }
	  }, {
	    key: 'getDuration',
	    value: function getDuration() {
	      if (!this.isReady) return null;
	      return this.player.duration;
	    }
	  }, {
	    key: 'getFractionPlayed',
	    value: function getFractionPlayed() {
	      if (!this.isReady) return null;
	      return this.player.currentTime / this.getDuration();
	    }
	  }, {
	    key: 'getFractionLoaded',
	    value: function getFractionLoaded() {
	      if (!this.isReady || this.player.buffered.length === 0) return null;
	      return this.player.buffered.end(0) / this.getDuration();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          url = _props3.url,
	          loop = _props3.loop,
	          controls = _props3.controls,
	          fileConfig = _props3.fileConfig;
	
	      var Media = AUDIO_EXTENSIONS.test(url) ? 'audio' : 'video';
	      var style = {
	        width: '100%',
	        height: '100%',
	        display: url ? 'block' : 'none'
	      };
	      return _react2['default'].createElement(Media, _extends({
	        ref: this.ref,
	        style: style,
	        preload: 'auto',
	        controls: controls,
	        loop: loop
	      }, fileConfig.attributes));
	    }
	  }], [{
	    key: 'canPlay',
	    value: function canPlay(url) {
	      return true;
	    }
	  }]);
	
	  return FilePlayer;
	}(_Base3['default']);
	
	FilePlayer.displayName = 'FilePlayer';
	exports['default'] = FilePlayer;
	module.exports = exports['default'];

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _queryString = __webpack_require__(348);
	
	var _Base2 = __webpack_require__(952);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IFRAME_SRC = 'https://player.vimeo.com/video/';
	var MATCH_URL = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
	var MATCH_MESSAGE_ORIGIN = /^https?:\/\/player.vimeo.com/;
	var BLANK_VIDEO_URL = 'https://vimeo.com/127250231';
	var DEFAULT_IFRAME_PARAMS = {
	  api: 1,
	  autoplay: 0,
	  badge: 0,
	  byline: 0,
	  fullscreen: 1,
	  portrait: 0,
	  title: 0
	};
	
	var Vimeo = function (_Base) {
	  _inherits(Vimeo, _Base);
	
	  function Vimeo() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Vimeo);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Vimeo.__proto__ || Object.getPrototypeOf(Vimeo)).call.apply(_ref, [this].concat(args))), _this), _this.onMessage = function (e) {
	      if (!MATCH_MESSAGE_ORIGIN.test(e.origin)) return;
	      _this.origin = _this.origin || e.origin;
	      var data = JSON.parse(e.data);
	      if (data.event === 'ready') {
	        _this.postMessage('getDuration');
	        _this.postMessage('addEventListener', 'playProgress');
	        _this.postMessage('addEventListener', 'loadProgress');
	        _this.postMessage('addEventListener', 'play');
	        _this.postMessage('addEventListener', 'pause');
	        _this.postMessage('addEventListener', 'finish');
	      }
	      if (data.event === 'playProgress') _this.fractionPlayed = data.data.percent;
	      if (data.event === 'loadProgress') _this.fractionLoaded = data.data.percent;
	      if (data.event === 'play') _this.onPlay();
	      if (data.event === 'pause') _this.props.onPause();
	      if (data.event === 'finish') _this.onEnded();
	      if (data.method === 'getDuration') {
	        _this.duration = data.value; // Store for use later
	        _this.onReady();
	      }
	    }, _this.onEnded = function () {
	      var _this$props = _this.props,
	          loop = _this$props.loop,
	          onEnded = _this$props.onEnded;
	
	      if (loop) {
	        _this.seekTo(0);
	      }
	      onEnded();
	    }, _this.postMessage = function (method, value) {
	      if (!_this.origin) return;
	      var data = JSON.stringify({ method: method, value: value });
	      return _this.iframe.contentWindow && _this.iframe.contentWindow.postMessage(data, _this.origin);
	    }, _this.ref = function (iframe) {
	      _this.iframe = iframe;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(Vimeo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          url = _props.url,
	          vimeoConfig = _props.vimeoConfig;
	
	      window.addEventListener('message', this.onMessage, false);
	
	      if (!url && vimeoConfig.preload) {
	        this.preloading = true;
	        this.load(BLANK_VIDEO_URL);
	      }
	
	      _get(Vimeo.prototype.__proto__ || Object.getPrototypeOf(Vimeo.prototype), 'componentDidMount', this).call(this);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('message', this.onMessage, false);
	      _get(Vimeo.prototype.__proto__ || Object.getPrototypeOf(Vimeo.prototype), 'componentWillUnmount', this).call(this);
	    }
	  }, {
	    key: 'getIframeParams',
	    value: function getIframeParams() {
	      return _extends({}, DEFAULT_IFRAME_PARAMS, this.props.vimeoConfig.iframeParams);
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      var id = url.match(MATCH_URL)[3];
	      this.iframe.src = IFRAME_SRC + id + '?' + (0, _queryString.stringify)(this.getIframeParams());
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      this.postMessage('play');
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.postMessage('pause');
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.iframe.src = '';
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(fraction) {
	      _get(Vimeo.prototype.__proto__ || Object.getPrototypeOf(Vimeo.prototype), 'seekTo', this).call(this, fraction);
	      this.postMessage('seekTo', this.duration * fraction);
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(fraction) {
	      this.postMessage('setVolume', fraction);
	    }
	  }, {
	    key: 'setPlaybackRate',
	    value: function setPlaybackRate(rate) {
	      this.postMessage('setPlaybackRate', rate);
	    }
	  }, {
	    key: 'getDuration',
	    value: function getDuration() {
	      return this.duration;
	    }
	  }, {
	    key: 'getFractionPlayed',
	    value: function getFractionPlayed() {
	      return this.fractionPlayed || null;
	    }
	  }, {
	    key: 'getFractionLoaded',
	    value: function getFractionLoaded() {
	      return this.fractionLoaded || null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _getIframeParams = this.getIframeParams(),
	          fullscreen = _getIframeParams.fullscreen;
	
	      var style = {
	        display: this.props.url ? 'block' : 'none',
	        width: '100%',
	        height: '100%'
	      };
	      return _react2['default'].createElement('iframe', {
	        ref: this.ref,
	        frameBorder: '0',
	        style: style,
	        allowFullScreen: fullscreen
	      });
	    }
	  }], [{
	    key: 'canPlay',
	    value: function canPlay(url) {
	      return MATCH_URL.test(url);
	    }
	  }]);
	
	  return Vimeo;
	}(_Base3['default']);
	
	Vimeo.displayName = 'Vimeo';
	exports['default'] = Vimeo;
	module.exports = exports['default'];

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FilePlayer2 = __webpack_require__(956);
	
	var _FilePlayer3 = _interopRequireDefault(_FilePlayer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RESOLVE_URL = 'https://api.streamable.com/videos/';
	var MATCH_URL = /^https?:\/\/streamable.com\/([a-z0-9]+)$/;
	
	var cache = {}; // Cache song data requests
	
	var Streamable = function (_FilePlayer) {
	  _inherits(Streamable, _FilePlayer);
	
	  function Streamable() {
	    _classCallCheck(this, Streamable);
	
	    return _possibleConstructorReturn(this, (Streamable.__proto__ || Object.getPrototypeOf(Streamable)).apply(this, arguments));
	  }
	
	  _createClass(Streamable, [{
	    key: 'getData',
	    value: function getData(url) {
	      var onError = this.props.onError;
	
	      var id = url.match(MATCH_URL)[1];
	      if (cache[id]) {
	        return Promise.resolve(cache[id]);
	      }
	      return window.fetch(RESOLVE_URL + id).then(function (response) {
	        if (response.status === 200) {
	          cache[id] = response.json();
	          return cache[id];
	        } else {
	          onError(new Error('Streamable track could not be resolved'));
	        }
	      });
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      var _this2 = this;
	
	      var onError = this.props.onError;
	
	      this.stop();
	      this.getData(url).then(function (data) {
	        if (!_this2.mounted) return;
	        _this2.player.src = data.files.mp4.url;
	      }, onError);
	    }
	  }], [{
	    key: 'canPlay',
	    value: function canPlay(url) {
	      return MATCH_URL.test(url);
	    }
	  }]);
	
	  return Streamable;
	}(_FilePlayer3['default']);
	
	Streamable.displayName = 'Streamable';
	exports['default'] = Streamable;
	module.exports = exports['default'];

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _FilePlayer2 = __webpack_require__(956);
	
	var _FilePlayer3 = _interopRequireDefault(_FilePlayer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RESOLVE_URL = 'https://api.vid.me/videoByUrl/';
	var MATCH_URL = /^https?:\/\/vid.me\/([a-z0-9]+)$/i;
	
	var cache = {}; // Cache song data requests
	
	var Vidme = function (_FilePlayer) {
	  _inherits(Vidme, _FilePlayer);
	
	  function Vidme() {
	    _classCallCheck(this, Vidme);
	
	    return _possibleConstructorReturn(this, (Vidme.__proto__ || Object.getPrototypeOf(Vidme)).apply(this, arguments));
	  }
	
	  _createClass(Vidme, [{
	    key: 'getData',
	    value: function getData(url) {
	      var onError = this.props.onError;
	
	      var id = url.match(MATCH_URL)[1];
	      if (cache[id]) {
	        return Promise.resolve(cache[id]);
	      }
	      return window.fetch(RESOLVE_URL + id).then(function (response) {
	        if (response.status === 200) {
	          cache[id] = response.json();
	          return cache[id];
	        } else {
	          onError(new Error('Vidme track could not be resolved'));
	        }
	      });
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      var _this2 = this;
	
	      var onError = this.props.onError;
	
	      this.stop();
	      this.getData(url).then(function (data) {
	        if (!_this2.mounted) return;
	        _this2.player.src = data.video.complete_url;
	      }, onError);
	    }
	  }], [{
	    key: 'canPlay',
	    value: function canPlay(url) {
	      return MATCH_URL.test(url);
	    }
	  }]);
	
	  return Vidme;
	}(_FilePlayer3['default']);
	
	Vidme.displayName = 'Vidme';
	exports['default'] = Vidme;
	module.exports = exports['default'];

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _loadScript = __webpack_require__(951);
	
	var _loadScript2 = _interopRequireDefault(_loadScript);
	
	var _Base2 = __webpack_require__(952);
	
	var _Base3 = _interopRequireDefault(_Base2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SDK_URL = '//fast.wistia.com/assets/external/E-v1.js';
	var SDK_GLOBAL = 'Wistia';
	var MATCH_URL = /^https?:\/\/(.+)?(wistia.com|wi.st)\/(medias|embed)\/(.*)$/;
	
	var Wistia = function (_Base) {
	  _inherits(Wistia, _Base);
	
	  function Wistia() {
	    _classCallCheck(this, Wistia);
	
	    return _possibleConstructorReturn(this, (Wistia.__proto__ || Object.getPrototypeOf(Wistia)).apply(this, arguments));
	  }
	
	  _createClass(Wistia, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var _props = this.props,
	          onStart = _props.onStart,
	          onPause = _props.onPause,
	          onEnded = _props.onEnded;
	
	      this.loadingSDK = true;
	      this.getSDK().then(function () {
	        window._wq = window._wq || [];
	        window._wq.push({
	          id: _this2.getID(_this2.props.url),
	          onReady: function onReady(player) {
	            _this2.loadingSDK = false;
	            _this2.player = player;
	            _this2.player.bind('start', onStart);
	            _this2.player.bind('play', _this2.onPlay);
	            _this2.player.bind('pause', onPause);
	            _this2.player.bind('end', onEnded);
	            _this2.onReady();
	          }
	        });
	      });
	    }
	  }, {
	    key: 'getSDK',
	    value: function getSDK() {
	      return new Promise(function (resolve, reject) {
	        if (window[SDK_GLOBAL]) {
	          resolve();
	        } else {
	          (0, _loadScript2['default'])(SDK_URL, function (err, script) {
	            if (err) reject(err);
	            resolve(script);
	          });
	        }
	      });
	    }
	  }, {
	    key: 'getID',
	    value: function getID(url) {
	      return url && url.match(MATCH_URL)[4];
	    }
	  }, {
	    key: 'load',
	    value: function load(url) {
	      var id = this.getID(url);
	      if (this.isReady) {
	        this.player.replaceWith(id);
	        this.props.onReady();
	        this.onReady();
	      }
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      if (!this.isReady || !this.player) return;
	      this.player.play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      if (!this.isReady || !this.player) return;
	      this.player && this.player.pause();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (!this.isReady || !this.player) return;
	      this.player.pause();
	    }
	  }, {
	    key: 'seekTo',
	    value: function seekTo(fraction) {
	      _get(Wistia.prototype.__proto__ || Object.getPrototypeOf(Wistia.prototype), 'seekTo', this).call(this, fraction);
	      if (!this.isReady || !this.player) return;
	      this.player.time(this.getDuration() * fraction);
	    }
	  }, {
	    key: 'setVolume',
	    value: function setVolume(fraction) {
	      if (!this.isReady || !this.player || !this.player.volume) return;
	      this.player.volume(fraction);
	    }
	  }, {
	    key: 'setPlaybackRate',
	    value: function setPlaybackRate(rate) {
	      if (!this.isReady || !this.player || !this.player.playbackRate) return;
	      this.player.playbackRate(rate);
	    }
	  }, {
	    key: 'getDuration',
	    value: function getDuration() {
	      if (!this.isReady || !this.player || !this.player.duration) return;
	      return this.player.duration();
	    }
	  }, {
	    key: 'getFractionPlayed',
	    value: function getFractionPlayed() {
	      if (!this.isReady || !this.player || !this.player.percentWatched) return null;
	      return this.player.percentWatched();
	    }
	  }, {
	    key: 'getFractionLoaded',
	    value: function getFractionLoaded() {
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var id = this.getID(this.props.url);
	      var className = 'wistia_embed wistia_async_' + id;
	      var style = {
	        width: '100%',
	        height: '100%',
	        display: this.props.url ? 'block' : 'none'
	      };
	      return _react2['default'].createElement('div', { className: className, style: style });
	    }
	  }], [{
	    key: 'canPlay',
	    value: function canPlay(url) {
	      return MATCH_URL.test(url);
	    }
	  }]);
	
	  return Wistia;
	}(_Base3['default']);
	
	Wistia.displayName = 'Wistia';
	exports['default'] = Wistia;
	module.exports = exports['default'];

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

	/*!
	* screenfull
	* v3.2.0 - 2017-04-16
	* (c) Sindre Sorhus; MIT License
	*/
	(function () {
		'use strict';
	
		var document = typeof window === 'undefined' ? {} : window.document;
		var isCommonjs = typeof module !== 'undefined' && module.exports;
		var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
	
		var fn = (function () {
			var val;
	
			var fnMap = [
				[
					'requestFullscreen',
					'exitFullscreen',
					'fullscreenElement',
					'fullscreenEnabled',
					'fullscreenchange',
					'fullscreenerror'
				],
				// New WebKit
				[
					'webkitRequestFullscreen',
					'webkitExitFullscreen',
					'webkitFullscreenElement',
					'webkitFullscreenEnabled',
					'webkitfullscreenchange',
					'webkitfullscreenerror'
	
				],
				// Old WebKit (Safari 5.1)
				[
					'webkitRequestFullScreen',
					'webkitCancelFullScreen',
					'webkitCurrentFullScreenElement',
					'webkitCancelFullScreen',
					'webkitfullscreenchange',
					'webkitfullscreenerror'
	
				],
				[
					'mozRequestFullScreen',
					'mozCancelFullScreen',
					'mozFullScreenElement',
					'mozFullScreenEnabled',
					'mozfullscreenchange',
					'mozfullscreenerror'
				],
				[
					'msRequestFullscreen',
					'msExitFullscreen',
					'msFullscreenElement',
					'msFullscreenEnabled',
					'MSFullscreenChange',
					'MSFullscreenError'
				]
			];
	
			var i = 0;
			var l = fnMap.length;
			var ret = {};
	
			for (; i < l; i++) {
				val = fnMap[i];
				if (val && val[1] in document) {
					for (i = 0; i < val.length; i++) {
						ret[fnMap[0][i]] = val[i];
					}
					return ret;
				}
			}
	
			return false;
		})();
	
		var screenfull = {
			request: function (elem) {
				var request = fn.requestFullscreen;
	
				elem = elem || document.documentElement;
	
				// Work around Safari 5.1 bug: reports support for
				// keyboard in fullscreen even though it doesn't.
				// Browser sniffing, since the alternative with
				// setTimeout is even worse.
				if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
					elem[request]();
				} else {
					elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
				}
			},
			exit: function () {
				document[fn.exitFullscreen]();
			},
			toggle: function (elem) {
				if (this.isFullscreen) {
					this.exit();
				} else {
					this.request(elem);
				}
			},
			onchange: function (callback) {
				document.addEventListener(fn.fullscreenchange, callback, false);
			},
			onerror: function (callback) {
				document.addEventListener(fn.fullscreenerror, callback, false);
			},
			raw: fn
		};
	
		if (!fn) {
			if (isCommonjs) {
				module.exports = false;
			} else {
				window.screenfull = false;
			}
	
			return;
		}
	
		Object.defineProperties(screenfull, {
			isFullscreen: {
				get: function () {
					return Boolean(document[fn.fullscreenElement]);
				}
			},
			element: {
				enumerable: true,
				get: function () {
					return document[fn.fullscreenElement];
				}
			},
			enabled: {
				enumerable: true,
				get: function () {
					// Coerce to boolean in case of old WebKit
					return Boolean(document[fn.fullscreenEnabled]);
				}
			}
		});
	
		if (isCommonjs) {
			module.exports = screenfull;
		} else {
			window.screenfull = screenfull;
		}
	})();


/***/ }),

/***/ 962:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1384:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _css = __webpack_require__(548);
	
	var _table = __webpack_require__(566);
	
	var _table2 = _interopRequireDefault(_table);
	
	var _extends2 = __webpack_require__(224);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _css2 = __webpack_require__(218);
	
	var _row = __webpack_require__(221);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _css3 = __webpack_require__(313);
	
	var _col = __webpack_require__(314);
	
	var _col2 = _interopRequireDefault(_col);
	
	var _classCallCheck2 = __webpack_require__(266);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(267);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(303);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Panel = __webpack_require__(545);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _Card = __webpack_require__(919);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _Player = __webpack_require__(938);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	__webpack_require__(1385);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var data = [{
	  key: '1',
	  time: '09:00',
	  len: '30',
	  por: '30',
	  dir: '上游',
	  specie: '草鱼',
	  speed: '-'
	}, {
	  key: '2',
	  time: '10:00',
	  len: '30',
	  por: '30',
	  dir: '上游',
	  specie: '草鱼',
	  speed: '-'
	}, {
	  key: '3',
	  time: '11:00',
	  len: '30',
	  por: '30',
	  dir: '上游',
	  specie: '草鱼',
	  speed: '-'
	}, {
	  key: '4',
	  time: '12:00',
	  len: '30',
	  por: '30',
	  dir: '上游',
	  specie: '草鱼',
	  speed: '-'
	}, {
	  key: '5',
	  time: '13:00',
	  len: '30',
	  por: '30',
	  dir: '上游',
	  specie: '草鱼',
	  speed: '-'
	}];
	
	var OneDay = function (_React$Component) {
	  (0, _inherits3.default)(OneDay, _React$Component);
	
	  function OneDay() {
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, OneDay);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      bordered: true,
	      loading: false,
	      pagination: false,
	      size: 'small',
	      scroll: undefined
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  OneDay.prototype.rowClick = function rowClick(record, index) {
	    // debugger
	  };
	
	  OneDay.prototype.render = function render() {
	    var columns = [{
	      title: '时间',
	      dataIndex: 'time'
	    }, {
	      title: '长度',
	      dataIndex: 'len'
	    }, {
	      title: '位置',
	      dataIndex: 'por'
	    }, {
	      title: '游向',
	      dataIndex: 'dir'
	    }, {
	      title: '种类',
	      dataIndex: 'specie'
	    }, {
	      title: '速度',
	      dataIndex: 'speed'
	    }];
	    return _react2.default.createElement(
	      _Panel2.default,
	      null,
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _Card2.default,
	          null,
	          _react2.default.createElement(
	            _col2.default,
	            { span: 14 },
	            _react2.default.createElement('img', { className: 'oneday-img', src: './images/fish.png', alt: '' }),
	            _react2.default.createElement(
	              'span',
	              { className: 'oneday-text' },
	              '\u957F\u9AD8\u6BD4:5.0'
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'oneday-text' },
	              '\u901F\u5EA6:2m/s'
	            )
	          ),
	          _react2.default.createElement(
	            _col2.default,
	            { span: 10 },
	            _react2.default.createElement(_Player2.default, { url: './images/463982.mp4', loop: true })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _row2.default,
	        null,
	        _react2.default.createElement(
	          _Card2.default,
	          null,
	          _react2.default.createElement(
	            _col2.default,
	            { span: 16, offset: 4 },
	            _react2.default.createElement(
	              'div',
	              { className: 'oneday-div' },
	              _react2.default.createElement(
	                'span',
	                { className: 'oneday-bntl' },
	                '\u524D\u4E00\u5929'
	              ),
	              _react2.default.createElement(
	                'span',
	                { className: 'oneday-bntr' },
	                '\u540E\u4E00\u5929'
	              )
	            ),
	            _react2.default.createElement(_table2.default, (0, _extends3.default)({}, this.state, {
	              columns: columns,
	              dataSource: data,
	              size: 'small',
	              onRowClick: this.rowClick.bind(this),
	              bordered: true
	            }))
	          )
	        )
	      )
	    );
	  };
	
	  return OneDay;
	}(_react2.default.Component);
	
	exports.default = OneDay;

/***/ }),

/***/ 1385:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=2.chunk.js.map