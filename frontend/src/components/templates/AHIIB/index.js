/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Area } from '@liquidium/components';

/**
 * Describes a AHIIB component.
 *
 * @param {*} props react component props
 * @function AHIIB
 * @returns { React.ReactElement } the ahiib
 */
export default function AHIIB(props) {
	const {
		headerComponent: HeaderComponent,
		firstInputComponent: FirstInputComponent,
		secondInputComponent: SecondInputComponent,
		buttonComponent: ButtonComponent
	} = props;
	return (
		<Area { ...props }>
			<HeaderComponent />
			<FirstInputComponent center />
			<SecondInputComponent center />
			<ButtonComponent center />
		</Area>
	);
}

AHIIB.propTypes = {
	headerComponent: PropTypes.func.isRequired,
	firstInputComponent: PropTypes.func.isRequired,
	secondInputComponent: PropTypes.func.isRequired,
	buttonComponent: PropTypes.func.isRequired
};
