/*
 * Copyright (c) 2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import { configureStore } from '@reduxjs/toolkit';
import { install } from 'redux-loop';
import { RootReducer } from '@liquidium/ducks';

export const store = configureStore({
	reducer: RootReducer,
	enhancers: (arr) => [
		...arr,
		install()
	],
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;
