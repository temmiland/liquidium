/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = styled.img.attrs({
	src: 'assets/img/logo.png'
})`
	margin: ${props => props.margin};
	width: ${props => props.width};
	height: ${props => props.height};
	float: left;
`;

Logo.defaultProps = {
	margin: '0',
	height: '50px'
};

Logo.propTypes = {
	margin: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	float: PropTypes.string
};

export default Logo;
