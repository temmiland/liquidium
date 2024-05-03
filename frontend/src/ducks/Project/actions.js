/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import {
	PROJECT_FETCH_START,
	PROJECT_FETCH_SUCCESS,
	PROJECT_FETCH_FAIL,
	PROJECT_SET_SELECTED
} from './constants';

export const fetchProjects = (payload) => ({
	type: PROJECT_FETCH_START, payload
});

export const fetchProjectsSuccessful = (projects) => ({
	type: PROJECT_FETCH_SUCCESS, payload: projects
});

export const fetchProjectsFailed = (error) => ({
	type: PROJECT_FETCH_FAIL, payload: error
});

export const setSelectedProject = (projectId) => ({
	type: PROJECT_SET_SELECTED, payload: projectId
});