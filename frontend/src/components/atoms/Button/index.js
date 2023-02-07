/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	width: ${props => props.width};
	height: 36px;
	margin: ${props => props.margin};
	padding: 8px 5px;
	display: ${props => props.display};
	transition: background .5s;
	background: #0eb0ee;
	border: none;
	border-radius: 20px;
	color: #fff;
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	font-weight: 600;
	letter-spacing: .5px;
	text-transform: uppercase;
	cursor: pointer;
	overflow: hidden;
	
	&:hover {
		background: #51BFE8;
	}
	
	&:disabled {
		background: #c3c3c3;
		cursor: not-allowed;
	}
	
	${props => props.center && css`
		margin: 10px auto;
	`}
`;

Button.defaultProps = {
	width: '180px',
	margin: '10px',
	display: 'block'
};

Button.propTypes = {
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string
};

export default Button;
