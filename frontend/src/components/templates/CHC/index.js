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
 * Describes a CHC component.
 *
 * @param {*} props react component props
 * @function CHC
 * @returns { React.ReactElement } the chc
 */
export default function CHC(props) {
	const {
		headerComponent: HeaderComponent,
		contentComponent: ContentComponent
	} = props;
	return (
		<Content chc { ...props }>
			<HeaderComponent className="header" />
			<ContentComponent className="content" />
		</Content>
	);
}

CHC.propTypes = {
	headerComponent: PropTypes.func.isRequired,
	contentComponent: PropTypes.func.isRequired
};
