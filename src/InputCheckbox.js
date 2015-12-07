import React from 'react';

function Input({
	checked,
	handleFocus,
	handleBlur,
	handleChange,
	baseStyles,
	style
}) {
	console.log('input checkbox');

	return (
		<input
			checked={ checked }
			onBlur={ handleBlur }
			onFocus={ handleFocus }
			onChange={ handleChange }
			style={ { ...baseStyles, ...style } }
			type='checkbox'
		/>
	);
}

export default Input;
