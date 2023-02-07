/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

package app.liquidium.backend.model.page;

import lombok.Data;

@Data
public class DeleteNode extends Node {

	private int delete;

}
