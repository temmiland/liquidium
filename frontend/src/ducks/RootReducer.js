/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import { combineReducers } from 'redux-loop';
import Page from './Page';
import Project from './Project';

export default combineReducers({
	Page: Page.reducer,
	Project: Project.reducer
});
