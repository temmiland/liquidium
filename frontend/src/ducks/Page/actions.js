/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import {
	PAGE_CREATE_FAIL,
	PAGE_CREATE_START,
	PAGE_CREATE_SUCCESS,
	PAGE_DELETE_START,
	PAGE_DELETE_SUCCESS,
	PAGE_DELETE_FAIL,
	PAGE_FETCH_FAIL,
	PAGE_FETCH_START,
	PAGE_FETCH_SUCCESS,
	PAGE_SET_DIFF,
	PAGE_SET_EDIT,
	PAGE_SET_SELECTED
} from './constants';

export const createPage = (payload) => ({
	type: PAGE_CREATE_START, payload
});

export const createPageSuccessful = (payload) => ({
	type: PAGE_CREATE_SUCCESS, payload
});

export const createPageFailed = (error) => ({
	type: PAGE_CREATE_FAIL, payload: error
});

export const deletePage = (payload) => ({
	type: PAGE_DELETE_START, payload
});

export const deletePageSuccessful = (payload) => ({
	type: PAGE_DELETE_SUCCESS, payload
});

export const deletePageFailed = (error) => ({
	type: PAGE_DELETE_FAIL, payload: error
});

export const fetchPages = (projectId) => ({
	type: PAGE_FETCH_START, payload: projectId
});

export const fetchPagesSuccessful = (projectId) => ({
	type: PAGE_FETCH_SUCCESS, payload: projectId
});

export const fetchPagesFailed = (projectId) => ({
	type: PAGE_FETCH_FAIL, payload: projectId
});

export const setDiffPage = (page) => ({
	type: PAGE_SET_DIFF, payload: page
});

export const setEditPage = (page) => ({
	type: PAGE_SET_EDIT, payload: page
});

export const setSelectedPage = (page) => ({
	type: PAGE_SET_SELECTED, payload: page
});
