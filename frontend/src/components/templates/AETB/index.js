/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Area } from '@liquidium/components';

/**
 * Describes a AETB component.
 *
 * @param {*} props react component props
 * @function AETB
 * @returns { React.ReactElement } the aetb
 */
export default function AETB(props) {
	const {
		emojiComponent: EmojiComponent,
		textComponent: TextComponent,
		buttonComponent: ButtonComponent
	} = props;
	return (
		<Area { ...props }>
			<EmojiComponent />
			<TextComponent />
			<ButtonComponent />
		</Area>
	);
}

AETB.propTypes = {
	emojiComponent: PropTypes.func.isRequired,
	textComponent: PropTypes.func.isRequired,
	buttonComponent: PropTypes.func.isRequired
};
