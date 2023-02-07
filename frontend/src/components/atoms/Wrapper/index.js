/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	margin: ${props => props.margin};
	padding: ${props => props.padding};
	width: ${props => props.width};
	height: ${props => props.height};
	border-top: ${props => props.border ? props.border.borderTop : ''};
	border-bottom: ${props => props.border ? props.border.borderBottom : ''};
	border-left: ${props => props.border ? props.border.borderLeft : ''};
	border-right: ${props => props.border ? props.border.borderRight : ''};
	float: ${props => props.float};
	display: ${props => props.display};
	position: ${props => props.position};
	font-family: 'Roboto', sans-serif; // Wrapping for react-select
	font-size: 14px;
	font-weight: 500;
`;

Wrapper.defaultProps = {
	margin: '5px 0 5px 30px',
	width: '250px',
	height: '50px',
	float: 'left'
};

Wrapper.propTypes = {
	margin: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	border: PropTypes.object,
	position: PropTypes.string
};
/** TODO: object */

export default Wrapper;
