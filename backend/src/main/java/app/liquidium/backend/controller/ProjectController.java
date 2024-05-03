/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

package app.liquidium.backend.controller;

import app.liquidium.backend.repositories.ProjectRepository;
import app.liquidium.backend.model.domain.Project;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class ProjectController {

    private final ProjectRepository repository;

    ProjectController(ProjectRepository repository) {
        this.repository = repository;
    }

    @CrossOrigin()
    @GetMapping("/project")
    List<Project> findAll() {
        return repository.findAll();
    }

    @CrossOrigin()
    @RequestMapping(value = "/project", params = "id", method = RequestMethod.GET)
    Optional<Project> findById(@RequestParam("id") String id) {
        return repository.findById(id);
    }

    @CrossOrigin()
    @PostMapping(path = "/project", consumes = "application/json", produces = "application/json")
    public Project save(@RequestBody Project project) {
        project.setId(UUID.randomUUID().toString());
        project.setCreationDate(new Date());
        return repository.save(project);
    }

}
