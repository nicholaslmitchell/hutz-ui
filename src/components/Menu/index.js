import React, { PropTypes } from 'react';
import radium from 'radium';
import { colors, typeography, InputStyles } from '../../styles';
import List from '../List';
import MenuItem from './MenuItem';
import Divider from '../Divider';

function Menu({
	align,
	fill,
	inline,
	type,
	activeIndex,
	px,
	py,
	menuItemStyle,
	...props
}) {
	let styles = {
		...style.list
	};

	styles = inline ? { ...styles, ...style.inline } : style;

	return (
		<List
			{...props}
			inline={inline}
			fill={fill}
			px={px || 0}
			py={py || 0}
			itemStyle={menuItemStyle}
			style={props.style}
		>
			{React.Children.map(props.children, (child, i) => {
				 if (child.type.displayName === 'Divider') {
					 return React.cloneElement(child, {
						 key: i,
						 ...child.props
					 });
				 } else {
					 return (
						 <MenuItem
							 type={type}
							 active={i === activeIndex}
							 {...child.props}
							 key={i}
						 >
							 {child}
						 </MenuItem>
					 );
				 }
			})}
		</List>
	);
}

Menu.displayName = 'Menu';

Menu.propTypes = {
	fill: PropTypes.bool,
	inline: PropTypes.bool,
	menuItemStyle: PropTypes.object
};

export default radium(Menu);

var style = {
	list: {
		color: colors('gray', 5),
		fontSize: typeography.body1.fontSize,
		display: 'block',
		verticalAlign: 'middle',
		width: '100%',
	},
	inline: {
		display: 'inline-flex',
	}
};