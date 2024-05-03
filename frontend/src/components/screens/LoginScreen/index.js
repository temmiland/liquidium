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
import {
	AHIIB,
	CC,
	HC,
	Button,
	H1
} from '@liquidium/components';

/**
 * Describes a HeaderComponent component.
 *
 * @function HeaderComponent
 * @returns { React.ReactElement } the header
 */
function HeaderComponent() {
	return <H1>Anmelden</H1>;
}

/**
 * Describes a ButtonComponent component.
 *
 * @param {*} props react component props
 * @function ButtonComponent
 * @returns { React.ReactElement } the button
 */
function ButtonComponent(props) {
	return (
		<Button
			name="submit"
			type="submit"
			width="230px"
			onClick={ props.onClick }
		>
			Anmelden
		</Button>
	);
}

/**
 * Describes a LoginScreen component.
 *
 * @function LoginScreen
 * @returns { React.ReactElement } the login screen
 */
function LoginScreen() {
	const navigate = useNavigate();
	const { login, isAuthenticated } = useOidc();

	useEffect(() => {
		if (isAuthenticated) navigate('/selectProject');
	});

	return (
		<HC
			contentComponent={
				() => (
					<CC
						contentComponent={
							() => (
								<AHIIB
									width="250px"
									height="210px"
									withShadow
									headerComponent={
										HeaderComponent
									}
									firstInputComponent={
										() => (<></>)
									}
									secondInputComponent={
										() => (<></>)
									}
									buttonComponent={
										(layoutProps) => (
											<ButtonComponent
												{ ...layoutProps }
												onClick={ () => login() }
											/>
										)
									}
								/>
							)
						}
					/>
				)
			}
		/>
	);
}

export default LoginScreen;
