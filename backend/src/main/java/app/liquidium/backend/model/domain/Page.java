/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

package app.liquidium.backend.model.domain;

import app.liquidium.backend.model.page.Content;
import com.couchbase.client.java.repository.annotation.Field;
import com.couchbase.client.java.repository.annotation.Id;
import app.liquidium.backend.LiquidDocType;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.couchbase.core.mapping.Document;

import java.util.Date;

@Data
@Document
@NoArgsConstructor
public class Page {

	@Id
	private String			id;

	@Field
	private LiquidDocType	documentType = LiquidDocType.PAGE;

	@Field
	private String			author;

	@Field
	private Content			content;

	@Field
	private Date			creationDate;

	@Field
	private boolean			mainpage;

	@Field
	private String			pageId;

	@Field
	private String			parentPageId;

	@Field
	private String			projectId;

	@Field
	private String			title;

}
