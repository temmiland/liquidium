/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TextInput = styled.input`
	width: ${props => props.width};
	height: 20px;
	margin: 10px;
	padding: 8px 5px 8px 15px;
	display: block;
	transition: background .5s, color .5s;
	background: #e6e6e6;
	border: none;
	border-radius: 20px;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	letter-spacing: .5px;
	color: #6a6a6a;
	
	&:focus {
			background: #93e1ff;
	}
	
	&:disabled {
		background: #c3c3c3;
		cursor: not-allowed;
	}
	
	&:invalid {
		border: 1px solid red;
	}
	
	${props => props.center && css`
		margin: 10px auto;
	`}
`;

TextInput.defaultProps = {
	width: '160px'
};

TextInput.propTypes = {
	disabled: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string
};

export default TextInput;
