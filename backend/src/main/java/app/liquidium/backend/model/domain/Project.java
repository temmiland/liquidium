/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

package app.liquidium.backend.model.domain;

import app.liquidium.backend.LiquidDocType;
import com.couchbase.client.java.repository.annotation.Field;
import com.couchbase.client.java.repository.annotation.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.couchbase.core.mapping.Document;

import java.util.Date;


@Data
@Document
@NoArgsConstructor
public class Project {

	@Id
	private String			id;

	@Field
	private LiquidDocType	documentType = LiquidDocType.PROJECT;

	@Field
	private String			author;

	@Field
	private Date			creationDate;

	@Field
	private String			title;

}
