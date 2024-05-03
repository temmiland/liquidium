/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

package app.liquidium.backend.model.page;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class Content {

	private List<Node> ops = new ArrayList<>();

}
