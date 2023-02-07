/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const A = styled.a`
	font-family: 'Roboto', sans-serif;
	font-size: ${props => props.fontSize};
	font-weight: ${props => props.fontWeight};
	text-align: ${props => props.textAlign};
	letter-spacing: .5px;
	color: #0092dd;
	text-decoration: none;
	
	&:hover {
		color: #1d4d95;
	}
`;

A.defaultProps = {
	textAlign: 'center',
	fontSize: '16px',
	fontWeight: 400
};

A.propTypes = {
	width: PropTypes.string,
	margin: PropTypes.string,
	fontSize: PropTypes.string,
	lineHeight: PropTypes.string,
	fontWeight: PropTypes.number,
	textAlign: PropTypes.string
};

export default A;
