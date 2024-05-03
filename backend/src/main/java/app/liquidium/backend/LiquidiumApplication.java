/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

package app.liquidium.backend;

import app.liquidium.backend.model.domain.Project;
import app.liquidium.backend.repositories.PageRepository;
import app.liquidium.backend.repositories.ProjectRepository;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LiquidiumApplication implements CommandLineRunner {

	@Autowired
	private PageRepository pageRepository;

	@Autowired
	private ProjectRepository projectRepository;

	public static void main(String[] args) {
		SpringApplication.run(LiquidiumApplication.class);
	}

	@Override
	public void run(String... args) throws Exception {
		Project init = new Project();
		init.setId("github");
		init.setTitle("GitHub Release");
		init.setAuthor("tom");
		init.setCreationDate(new Date());
		projectRepository.save(init);
	}

}
