/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import styled from 'styled-components';

const H1 = styled.h1`
	margin: ${props => props.margin};
	font-family: 'Roboto', sans-serif;
	font-size: 22px;
	font-weight: 500;
	text-align: ${props => props.textAlign};
	color: #6a6a6a;
	letter-spacing: .5px;
`;

H1.defaultProps = {
	textAlign: 'center'
};

/** TODO: proptypes */

export default H1;
