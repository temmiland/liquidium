/*
 * Copyright (c) 2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import Axios from 'axios';

const backendUrl = process.env.LIQUIDIUM_BACKEND;
const baseUrl = backendUrl ? backendUrl : window.location.origin;
const mechanism = 'Bearer';

/**
 * Combines given path with base url
 *
 * @param {string} path path to resource
 * @returns {string} combined path with baseUrl
 */
const toUrl = (path) => `${baseUrl}/${path}`;

/**
 * REST client for the application. Provides token authentication and redirects
 * any request to the appropriate endpoint.
 */
class ApiClient {

	/**
	 * This function construct this class.
	 *
	 * @constructs
	 * @returns {*} instance of ApiClient
	 */
	constructor() {
		this.token = '';
		this.request = this.request.bind(this);
	}

	/**
	 * This function sets the oidc token to a ApiClient instance.
	 *
	 * @param {string} token oidc token
	 */
	setToken(token) {
		this.token = token;
	}

	/**
	 * This is a simple request function with auto configured authorization
	 * header.
	 *
	 * @param {string} path url path
	 * @param {string} method http method
	 * @param {*} data data should be send
	 * @returns {Promise} request promise
	 */
	request(path, method, data) {
		const input = {
			method,
			headers: {
				Authorization: `${mechanism} ${this.token}`,
				Accept: 'application/json'
			},
			url: toUrl(path),
			data
		};
		return Axios.request(input);
	}

	/**
	 * simple get request
	 *
	 * @param {string} path url path
	 * @returns {Promise} request promise
	 */
	get(path) {
		return this.request(path, 'get', {});
	}

	/**
	 * simple del request
	 *
	 * @param {string} path url path
	 * @returns {Promise} request promise
	 */
	del(path) {
		return this.request(path, 'delete', {});
	}

	/**
	 * simple post request
	 *
	 * @param {string} path url path
	 * @param {*} data should be send
	 * @returns {Promise} request promise
	 */
	post(path, data) {
		return this.request(path, 'post', data);
	}

	/**
	 * simple put request
	 *
	 * @param {string} path url path
	 * @param {*} data should be send
	 * @returns {Promise} request promise
	 */
	put(path, data) {
		return this.request(path, 'put', data);
	}
}

// makes ApiClient 'static'
const instance = new ApiClient();

/**
 * Exports instance of ApiClient
 *
 * @exports instance
 */
export default instance;