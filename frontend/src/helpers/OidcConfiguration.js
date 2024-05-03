/*
 * Copyright (c) 2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

const oidcConfiguration = {
	client_id: process.env.LIQUIDIUM_OIDC_CLIENT_ID,
	redirect_uri: `${window.location.origin}/authentication/callback`,
	silent_redirect_uri: `${window.location.origin}/authentication/silent`,
	scope: process.env.LIQUIDIUM_OIDC_SCOPE,
	authority: process.env.LIQUIDIUM_OIDC_AUTHORITY,
	refresh_time_before_tokens_expiration_in_second:
	process.env.LIQUIDIUM_OIDC_REFRESH_TIME_BEFORE_TOKENS_EXPIRATION_IN_SECOND,
	token_request_extras: {
		client_secret: process.env.LIQUIDIUM_OIDC_TOKEN_REQUEST_EXTRAS_CLIENT_SECRET
	},
	storage: sessionStorage
};

export default oidcConfiguration;
