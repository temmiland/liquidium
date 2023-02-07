/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import { loop, Cmd } from 'redux-loop';
import {
	PROJECT_FETCH_START,
	PROJECT_FETCH_SUCCESS,
	PROJECT_FETCH_FAIL,
	PROJECT_SET_SELECTED
} from './constants';
import { fetchProjects } from './sideeffects';
import { fetchProjectsSuccessful, fetchProjectsFailed } from './actions';

const initialState = {
	selectedProject: {},
	projects: [
	],
	error: ''
};

/**
 * Reducer for projects.
 *
 * @param 	{*} [state=initialState] 	initial state
 * @param 	{*} action               	dispatched action
 * @returns {*} 						reducer
 */
const ProjectReducer = (state = initialState, action) => {
	switch (action.type) {
	case PROJECT_FETCH_START:
		return loop(
			state,
			Cmd.run(fetchProjects, {
				successActionCreator: fetchProjectsSuccessful,
				failActionCreator: fetchProjectsFailed,
				args: [
					action.payload
				]
			})
		);
	case PROJECT_FETCH_SUCCESS:
		return {
			...state,
			error: '',
			projects: action.payload.data
		};
	case PROJECT_FETCH_FAIL:
		return {
			...state,
			error: action.payload
		};
	case PROJECT_SET_SELECTED:
		return {
			...state,
			selectedProject: action.payload
		};
	default: return state;
	}
};

export default ProjectReducer;
