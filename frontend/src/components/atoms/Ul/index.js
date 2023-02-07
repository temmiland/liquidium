/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
	width: ${props => props.width};
	height: ${props => props.height};
	margin: ${props => props.margin};
	padding: 0;
	overflow: ${props => props.overflow}; 
	overflow-x: ${props => props.overflowX}; 
	overflow-y: ${props => props.overflowY}; 
	
	font-size: ${props => props.fontSize};
	font-weight: 400;
	letter-spacing: .5px;
	text-align: ${props => props.textAlign};
	color: #6a6a6a;
`;

Ul.defaultProps = {
	fontSize: '16px',
	overflow: 'auto'
};

Ul.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	margin: PropTypes.string,
	overflow: PropTypes.string,
	overflowX: PropTypes.string,
	overflowY: PropTypes.string,
	fontSize: PropTypes.string,
	textAlign: PropTypes.string
};

export default Ul;
