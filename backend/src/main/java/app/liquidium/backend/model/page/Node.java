/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

package app.liquidium.backend.model.page;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.Data;

@Data
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "type")
@JsonSubTypes({
		@JsonSubTypes.Type(value = InsertNode.class, name = "insert"),
		@JsonSubTypes.Type(value = DeleteNode.class, name = "delete"),
		@JsonSubTypes.Type(value = RetainNode.class, name = "retain")
})
public abstract class Node {

	private Attributes attributes;

}
