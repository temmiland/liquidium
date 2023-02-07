/*
 * Copyright (c) 2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import { flatMap } from 'lodash';

/**
 * QuillJS <-> Spring backend translator for the editing sections in this app.
 */
class QuillSpring {

	/**
	 * This function construct this class.
	 *
	 * @constructs
	 * @returns {*} instance of QuillSpring
	 */
	constructor() {
		this.translate = this.translate.bind(this);
	}

	/**
	 * This function translates a quilljs delta object to a spring backend conform object.
	 *
	 * @param {*} quillDelta a quilljs delta object
	 * @returns {*} a translated quilljs delta object
	 */
	translate(quillDelta) {
		return {
			ops: flatMap(
				quillDelta.ops
					.map((node) => (
						Object.keys(node)
							.filter((key) => (
								key === 'insert'
								|| key === 'delete'
								|| key === 'retain'
							))
							.map((key) => {
								return {
									type: key,
									...node
								};
							})
					))
			)
		};
	}
}

// makes QuillSpring 'static'
const instance = new QuillSpring();
/**
 * Exports instance of QuillSpring
 *
 * @exports instance
 */
export default instance;
