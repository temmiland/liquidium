/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
	Bar,
	ProjectHeader,
	ProjectPages
} from '@liquidium/components';

/**
 * Describes a Sidebar component.
 *
 * @param {*} props react component props
 * @function Sidebar
 * @returns { React.ReactElement } the sidebar
 */
function Sidebar(props) {
	const { className } = props;
	return (
		<Bar
			width=""
			height=""
			background="#eeeeeb"
			className={ className }
			border={ {
				borderRight: '2px solid #dcdcda'
			} }
		>
			<ProjectHeader />
			<ProjectPages />
		</Bar>
	);
}

Sidebar.propTypes = {
	className: PropTypes.string.isRequired
};

export default Sidebar;
