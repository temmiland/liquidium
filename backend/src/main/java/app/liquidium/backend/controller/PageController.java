/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

package app.liquidium.backend.controller;

import app.liquidium.backend.repositories.PageRepository;
import app.liquidium.backend.model.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
public class PageController {

	private final PageRepository repository;

	PageController(PageRepository repository) {
		this.repository = repository;
	}

	@CrossOrigin()
	@RequestMapping(value = "/page", params = "id", method = RequestMethod.DELETE)
	void deleteByPageId(@RequestParam("id") String id) {
		repository.deleteById(id);
	}

	@CrossOrigin()
	@RequestMapping(value = "/page", params = "pageId", method = RequestMethod.GET)
	List<Page> findByPageId(@RequestParam("pageId") String pageId) {
		return repository.findByPageId(pageId);
	}

	@CrossOrigin()
	@RequestMapping(value = "/page", params = "projectId", method = RequestMethod.GET)
	List<Page> findByProjectId(@RequestParam("projectId") String projectId) {
		return repository.findByProjectId(projectId);
	}

	@CrossOrigin()
	@PostMapping(path = "/page", consumes = "application/json", produces = "application/json")
	public Page save(@RequestBody Page page) {
		page.setId(UUID.randomUUID().toString());
		if (page.getPageId() == null || page.getPageId().isEmpty()) {
			page.setPageId(UUID.randomUUID().toString());
		}
		page.setCreationDate(new Date());
		return repository.save(page);
	}

}
