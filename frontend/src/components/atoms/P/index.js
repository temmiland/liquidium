/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const P = styled.p`
	width: ${props => props.width};
	margin: ${props => props.margin};

	font-size: ${props => props.fontSize};
	line-height: ${props => props.lineHeight};
	font-weight: ${props => props.fontWeight};
	letter-spacing: .5px;
	text-align: ${props => props.textAlign};
	color: #6a6a6a;
	font-family: 'Roboto', sans-serif;
`;

P.defaultProps = {
	width: '70%',
	textAlign: 'center',
	fontSize: '16px',
	margin: '13px auto',
	fontWeight: 400
};

P.propTypes = {
	width: PropTypes.string,
	margin: PropTypes.string,
	fontSize: PropTypes.string,
	lineHeight: PropTypes.string,
	fontWeight: PropTypes.number,
	textAlign: PropTypes.string
};

export default P;
