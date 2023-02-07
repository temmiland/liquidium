/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Content, Sidebar } from '@liquidium/components';

/**
 * Describes a CSC component.
 *
 * @param {*} props react component props
 * @function CSC
 * @returns { React.ReactElement } the csc
 */
export default function CSC(props) {
	const { contentComponent: ContentComponent } = props;
	return (
		<Content csc>
			<Sidebar className="sidebar" />
			<ContentComponent className="content" />
		</Content>
	);
}

CSC.propTypes = {
	contentComponent: PropTypes.func.isRequired
};
