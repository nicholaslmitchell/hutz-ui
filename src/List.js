import React, { PropTypes } from 'react';
import radium from 'radium';
import Container from './Container';
import ListItem from './ListItem';
import { colors, typeography, InputStyles } from './styles';

function List({
	col,
	inline,
	px,
	py,
	...props
}) {
	let styles = {
		...style.list
	};

	styles = inline ? { ...styles, ...style.inline } : styles;

	return (
		<Container col={col}>
			<ul style={[styles]}>
				{React.Children.map(props.children, listItem =>
					<ListItem inline={inline} px={px} py={py}>{listItem}</ListItem>
				 )}
			</ul>
		</Container>
	);
}

List.displayName = 'List';

List.propTypes = {
	inline: PropTypes.bool
};

export default radium(List);

var style = {
	list: {
		color: colors('gray', 5),
		fontSize: typeography.body1.fontSize,
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