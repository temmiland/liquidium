/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '@liquidium/components';

/**
 * Describes a HC component.
 *
 * @param {*} props react component props
 * @function HC
 * @returns { React.ReactElement } the hc
 */
export default function HC(props) {
	const { contentComponent: ContentComponent } = props;
	return (
		<>
			<Header { ...props } />
			<ContentComponent />
		</>
	);
}

HC.propTypes = {
	contentComponent: PropTypes.func.isRequired
};
