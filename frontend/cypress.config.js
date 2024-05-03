/*
 * Copyright (c) 2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
	// We've imported your old cypress plugins here.
	// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		}
	}
})
