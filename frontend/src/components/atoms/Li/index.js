/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import styled from 'styled-components';

const Li = styled.li`
	margin: ${props => props.margin};
	list-style: none;
	font-size: ${props => props.fontSize};
	white-space: ${props => props.whiteSpace};
`;

Li.defaultProps = {
	margin: '5px 0'
};

// TODO proptypes

export default Li;
