/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { Page, Project } from '@liquidium/ducks';
import { Wrapper } from '@liquidium/components';

/**
 * Describes a ProjectSearch component.
 *
 * @param {*} props react component props
 * @function ProjectSearch
 * @returns { React.ReactElement } the project search
 */
function ProjectSearch(props) {
	const {
		setSelectedProject,
		selectedProject,
		fetchProjects,
		projects
	} = props;

	useEffect(() => {
		if(isEmpty(projects)) fetchProjects();
	});

	const handleChange = (selectedProject) => {
		setSelectedProject(selectedProject);
	}

	return (
		<Wrapper>
			<Select
				onChange={ handleChange }
				options={
					projects
						? projects.map((project) => {
							return {
								value: project.id,
								label: project.title
							};
						})
						: [
						]
				}
				value={ selectedProject }
			/>
		</Wrapper>
	);

}

const mapDispatchToProps = {
	fetchProjects: Project.actions.fetchProjects,
	setSelectedProject: Project.actions.setSelectedProject
};

const mapStateToProps = state => {
	return {
		pages: Page.selectors.pages(state),
		projects: Project.selectors.projects(state),
		selectedProject: Project.selectors.selectedProject(state)
	};
};

ProjectSearch.propTypes = {
	projects: PropTypes.array.isRequired,
	selectedProject: PropTypes.object.isRequired,
	setSelectedProject: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSearch);