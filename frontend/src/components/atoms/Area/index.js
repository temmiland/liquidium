/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

/* !important is necessary because storybook behaves like a little annoying kid. */
const Area = styled.div`
	width: ${props => props.width};
	height: ${props => props.height} !important;
	margin: auto !important;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: ${props => props.background};
	border-bottom: 3px solid #0eb0ee;
	border-top: 3px solid #0eb0ee;

	${props => props.withShadow && css`
		box-shadow: 0px 0px 15px -8px rgba(0,0,0,0.75);
	`}

	${props => props.withTransparency && css`
		background: none;
		border: none;
	`}
`;

Area.defaultProps = {
	background: '#fff'
};

Area.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	background: PropTypes.string,
	withTransparency: PropTypes.bool,
	withShadow: PropTypes.bool
};

export default Area;
