/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import {
	useOidc,
	useOidcAccessToken
} from '@axa-fr/react-oidc';
import 'typeface-roboto';

import ApiClient from './helpers/ApiClient';
import {
	AllDiffsPageScreen,
	CreateProjectScreen,
	DeletePageScreen,
	DiffPageScreen,
	EditPageScreen,
	LoginScreen,
	ReadPageScreen,
	SelectProjectScreen
} from '@liquidium/components';

/**
 * Describes a App component.
 *
 * @function App
 * @returns { React.ReactElement } the application
 */
export default function App() {
	const { isAuthenticated } = useOidc();
	const { accessToken } = useOidcAccessToken();

	if(isAuthenticated && accessToken) ApiClient.setToken(accessToken);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={
						isAuthenticated
							? <Navigate to="/selectProject" />
							: <Navigate to="/login" />
					}
				/>
				<Route
					path="/login"
					element={
						<LoginScreen />
					}
				/>
				<Route
					path="/selectProject"
					element={
						<SelectProjectScreen />
					}
				/>
				<Route
					path="/createProject"
					element={
						<CreateProjectScreen />
					}
				/>
				<Route
					path="/readPage"
					element={
						<ReadPageScreen />
					}
				/>
				<Route
					path="/editPage"
					element={
						<EditPageScreen />
					}
				/>
				<Route
					path="/createNewPage"
					element={
						<EditPageScreen
							newPage
						/>
					}
				/>
				<Route
					path="/allDiffsPage"
					element={
						<AllDiffsPageScreen />
					}
				/>
				<Route
					path="/diffPage"
					element={
						<DiffPageScreen />
					}
				/>
				<Route
					path="/delPage"
					element={
						<DeletePageScreen />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
