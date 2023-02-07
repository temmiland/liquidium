/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

/* !important is necessary because storybook behaves like a little annoying kid. */
const Bar = styled.div`
	width: ${props => props.width} !important;
	height: ${props => props.height} !important;
	background: ${props => props.background};
	border-top: ${props => props.border ? props.border.borderTop : ''};
	border-bottom: ${props => props.border ? props.border.borderBottom : ''};
	border-left: ${props => props.border ? props.border.borderLeft : ''};
	border-right: ${props => props.border ? props.border.borderRight : ''};
`;

Bar.defaultProps = {
	width: '100%',
	height: '50px',
	background: '#0DA3DC'
};

Bar.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	background: PropTypes.string,
	border: PropTypes.object
};
/** TODO: object */

export default Bar;
