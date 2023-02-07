/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Content } from '@liquidium/components';

/**
 * Describes a CHCC component.
 *
 * @param {*} props react component props
 * @function CHCC
 * @returns { React.ReactElement } the chcc
 */
export default function CHCC(props) {
	const {
		headerComponent: HeaderComponent,
		contentComponentLeft: ContentComponentLeft,
		contentComponentRight: ContentComponentRight
	} = props;
	return (
		<Content chcc { ...props }>
			<HeaderComponent className="header" />
			<ContentComponentLeft className="contentLeft" />
			<ContentComponentRight className="contentRight" />
		</Content>
	);
}

CHCC.propTypes = {
	headerComponent: PropTypes.func.isRequired,
	contentComponentLeft: PropTypes.func.isRequired,
	contentComponentRight: PropTypes.func.isRequired
};
