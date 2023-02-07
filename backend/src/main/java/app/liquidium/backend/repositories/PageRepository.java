/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

package app.liquidium.backend.repositories;

import app.liquidium.backend.model.domain.Page;
import org.springframework.data.couchbase.core.query.ViewIndexed;
import org.springframework.data.couchbase.repository.CouchbaseRepository;

import java.util.List;
import java.util.Optional;

@ViewIndexed(designDoc = "page", viewName = "all")
public interface PageRepository extends CouchbaseRepository<Page, String> {

	Optional<Page> findById(String id);

	List<Page> findByPageId(String pageId);

	List<Page> findByProjectId(String projectId);

}
