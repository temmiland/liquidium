/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Avatar = styled.img`
	margin: ${props => props.margin};
	width: ${props => props.width};
	height: ${props => props.height};
	float: ${props => props.float};
	border-radius: 50%;
	box-sizing: border-box;
`;

Avatar.defaultProps = {
	margin: '0',
	width: '40px',
	height: '40px'
};

Avatar.propTypes = {
	margin: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	float: PropTypes.string
};

export default Avatar;
