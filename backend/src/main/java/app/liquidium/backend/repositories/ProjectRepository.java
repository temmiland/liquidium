/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

package app.liquidium.backend.repositories;

import app.liquidium.backend.model.domain.Project;
import org.springframework.data.couchbase.core.query.ViewIndexed;
import org.springframework.data.couchbase.repository.CouchbaseRepository;

import java.util.List;
import java.util.Optional;


@ViewIndexed(designDoc = "project", viewName = "all")
public interface ProjectRepository extends CouchbaseRepository<Project, String> {

	List<Project> findAll();

	Optional<Project> findById(String id);

}
