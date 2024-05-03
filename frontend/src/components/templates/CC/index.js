/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Content } from '@liquidium/components';

/**
 * Describes a CC component.
 *
 * @param {*} props react component props
 * @function CC
 * @returns { React.ReactElement } the cc
 */
export default function CC(props) {
	const { contentComponent: ContentComponent } = props;
	return (
		<Content cc>
			<ContentComponent />
		</Content>
	);
}

CC.propTypes = {
	contentComponent: PropTypes.func.isRequired
};
