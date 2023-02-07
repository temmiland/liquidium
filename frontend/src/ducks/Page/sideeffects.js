/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import { ApiClient } from '@liquidium/helpers';

export const createPage = (page) => ApiClient.post('page', page);

export const deletePage = (page) => ApiClient.del(`page?id=${page.id}`);

export const fetchPages = (projectId) => ApiClient.get(`page?projectId=${projectId}`);
