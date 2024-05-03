/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

package app.liquidium.backend.model.page;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class Attributes {

	private String		align;

	private String		background;

	private boolean		blockquote;

	private boolean		bold;

	private String		code;

	@JsonProperty("code-block")
	private boolean		codeBlock;

	private String		color;

	private String		direction;

	private String		font;

	private String		formula;

	private int			header;

	private String		image;

	private int			indent;

	private boolean		italic;

	private String		link;

	private String		list;

	private String		script;

	private String		size;

	private boolean		strike;

	private boolean		underline;

	private String		video;

}
