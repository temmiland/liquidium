/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import { loop, Cmd } from 'redux-loop';
import { maxBy } from 'lodash';
import { PROJECT_SET_SELECTED } from '../Project/constants';
import {
	PAGE_CREATE_START,
	PAGE_CREATE_SUCCESS,
	PAGE_CREATE_FAIL,
	PAGE_DELETE_START,
	PAGE_DELETE_SUCCESS,
	PAGE_DELETE_FAIL,
	PAGE_FETCH_START,
	PAGE_FETCH_SUCCESS,
	PAGE_FETCH_FAIL,
	PAGE_SET_EDIT,
	PAGE_SET_DIFF,
	PAGE_SET_SELECTED
} from './constants';
import {
	createPage,
	deletePage,
	fetchPages
} from './sideeffects';
import {
	createPageSuccessful,
	createPageFailed,
	deletePageSuccessful,
	deletePageFailed,
	fetchPagesSuccessful,
	fetchPagesFailed
} from './actions';

const initialState = {
	selectedPage: {},
	diffPage: {},
	editPage: {},
	pages: [
	],
	error: [
	]
};

/**
 * Reducer for pages.
 *
 * @param 	{*} [state=initialState] 	initial state
 * @param 	{*} action               	dispatched action
 * @returns {*} 						reducer
 */
const PageReducer = (state = initialState, action) => {
	switch (action.type) {
	case PAGE_CREATE_START:
		return loop(
			state,
			Cmd.run(createPage, {
				successActionCreator: createPageSuccessful,
				failActionCreator: createPageFailed,
				args: [
					action.payload
				]
			})
		);
	case PAGE_CREATE_SUCCESS:
		return loop(
			state,
			Cmd.action({
				type: PAGE_FETCH_START,
				payload: action.payload.data.projectId
			})
		);
	case PAGE_CREATE_FAIL:
		return {
			...state,
			error: action.payload
		};
	case PAGE_DELETE_START:
		return loop(
			state,
			Cmd.run(deletePage, {
				successActionCreator: deletePageSuccessful,
				failActionCreator: deletePageFailed,
				args: [
					action.payload
				]
			})
		);
	case PAGE_DELETE_SUCCESS:
		return loop(
			state,
			Cmd.action({
				type: PAGE_FETCH_START,
				payload: state.selectedPage.projectId
			})
		);
	case PAGE_DELETE_FAIL:
		return {
			...state,
			error: action.payload
		};
	case PAGE_FETCH_START:
		return loop(
			state,
			Cmd.run(fetchPages, {
				successActionCreator: fetchPagesSuccessful,
				failActionCreator: fetchPagesFailed,
				args: [
					action.payload
				]
			})
		);
	case PAGE_FETCH_SUCCESS:
		return loop(
			{
				...state,
				pages: action.payload.data,
				editPage: {}
			},
			Cmd.action({
				type: PAGE_SET_SELECTED,
				payload: maxBy(
					action.payload.data
						.filter((page) => page.mainpage),
					(page) => page.creationDate
				)
			})
		);
	case PAGE_FETCH_FAIL:
		return {
			...state,
			error: action.payload
		};
	case PAGE_SET_DIFF:
		return {
			...state,
			diffPage: action.payload
		};
	case PAGE_SET_EDIT:
		return {
			...state,
			editPage: action.payload
		};
	case PAGE_SET_SELECTED:
		return {
			...state,
			selectedPage: action.payload,
			diffPage: {},
			editPage: {}
		};
	case PROJECT_SET_SELECTED:
		return loop(
			state,
			Cmd.action({
				type: PAGE_FETCH_START,
				payload: action.payload.value
			})
		);
	default: return state;
	}
};

export default PageReducer;
