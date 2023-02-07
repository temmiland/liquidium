/*
 * Copyright (c) 2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import { Server } from 'miragejs';
import mirageDatabase from './MirageDatabase';

/**
 * @param {object} root0 mirage object
 * @param {string} root0.environment environment
 * @returns {Server} mirage server configuration
 */
export default function mirageServer({ environment = 'development' } = {}) {
	let server = new Server({
		environment,
		seeds(seeds) {
			seeds.db.loadData(mirageDatabase)
		},
		routes() {
			this.urlPrefix = process.env.LIQUIDIUM_BACKEND;

			this.get('/projects', (schema, request) => {
				if (request.queryParams) {
					return schema.db.projects.where(request.queryParams);
				}
				return schema.db.projects;
			});

			this.get('/pages/project/*', (schema, request) => {
				if (request.queryParams) {
					return schema.db.pages.where(request.queryParams);
				}
				return schema.db.pages;
			});

			this.passthrough('http://localhost:8080/**');

		}
	});

	return server;
}