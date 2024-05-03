/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOidc } from '@axa-fr/react-oidc';
import { connect } from 'react-redux';
import Twemoji from 'react-twemoji';
import isEmpty from 'lodash/isEmpty';
import { Page } from '@liquidium/ducks';
import {
	HC,
	AETB,
	CC,
	Button,
	P
} from '@liquidium/components';

/**
 * Describes a EmojiComponent component.
 *
 * @function EmojiComponent
 * @returns { React.ReactElement } the emoji
 */
function EmojiComponent() {
	return (
		<Twemoji
			options={ {
				className: 'twemoji'
			} }
		>
			<P>
				<span role="img" aria-label="happy">
					😁
				</span>
			</P>
		</Twemoji>
	);
}

/**
 * Describes a TextComponent component.
 *
 * @function TextComponent
 * @returns { React.ReactElement } the text
 */
function TextComponent() {
	return (
		<P fontSize="40px" fontWeight={ 300 }>
			Bitte wähle ein Projekt aus!
		</P>
	);
}

/**
 * Describes a ButtonComponent component.
 *
 * @function ButtonComponent
 * @returns { React.ReactElement } the button
 */
function ButtonComponent() {
	const { logout } = useOidc();
	return (
		<P fontSize="16x" fontWeight={ 300 } width="250px">
			<Button name="submit" type="submit" width="230px" onClick={ logout }>
				Logout
			</Button>
		</P>
	);
}

/**
 * Describes a SelectProjectScreen component.
 *
 * @param {*} props react component props
 * @function SelectProjectScreen
 * @returns { React.ReactElement } the select project screen
 */
function SelectProjectScreen(props) {
	const navigate = useNavigate();
	const { isAuthenticated } = useOidc();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
		}
		if (!props.selectedPage || !isEmpty(props.selectedPage)) navigate('/readPage');
	});

	return (
		<HC
			contentComponent={ () => (
				<CC
					contentComponent={ () => (
						<AETB
							height="200px"
							withTransparency
							emojiComponent={ EmojiComponent }
							textComponent={ TextComponent }
							buttonComponent={ ButtonComponent }
						/>
					) }
				/>
			) }
		/>
	);
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => {
	return {
		selectedPage: Page.selectors.selectedPage(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProjectScreen);
