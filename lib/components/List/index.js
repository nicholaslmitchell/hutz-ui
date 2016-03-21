'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _styles = require('../../styles');

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function List(_ref) {
	var col = _ref.col;
	var fill = _ref.fill;
	var inline = _ref.inline;
	var px = _ref.px;
	var py = _ref.py;

	var props = _objectWithoutProperties(_ref, ['col', 'fill', 'inline', 'px', 'py']);

	var styles = _extends({}, style.list, {
		textAlign: inline ? 'center' : null
	});

	styles = inline ? _extends({}, styles, style.inline) : styles;

	return _react2.default.createElement(
		_Container2.default,
		{ col: col },
		_react2.default.createElement(
			'ul',
			{ style: [styles] },
			_react2.default.Children.map(props.children, function (listItem, i) {
				return _react2.default.createElement(
					_ListItem2.default,
					{ fill: fill, inline: inline, px: px, py: py, key: i },
					listItem
				);
			})
		)
	);
}

List.displayName = 'List';

List.propTypes = {
	inline: _react.PropTypes.bool
};

exports.default = (0, _radium2.default)(List);

var style = {
	list: {
		color: (0, _styles.colors)('gray', 5),
		fontSize: _styles.typeography.body1.fontSize,
		display: 'block',
		verticalAlign: 'middle',
		width: '100%',
		margin: 0,
		padding: 0,
		appearance: 'none',
		WebkitAppearance: 'none'
	},
	inline: {
		display: 'inline-flex'
	}
};