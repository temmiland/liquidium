/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import { isEmpty, flatMap, groupBy, maxBy } from 'lodash';
import { Project, Page } from '@liquidium/ducks';
import {
	P,
	Wrapper
} from '@liquidium/components';

class ProjectHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			matches: [
			],
			inputValue: ''
		};
	}

	handleChange(input) {
		const { pages, setSelectedPage } = this.props;
		const filteredPages = Object.values(groupBy(pages, 'pageId'))
			.map((pages_) => maxBy(pages_, (page) => page.creationDate));
		setSelectedPage(filteredPages.filter((page) => page.pageId === input.value)[0]);
	}

	handleInputChange(inputValue) {
		const { pages } = this.props;

		// Filter
		const filteredPages = Object.values(groupBy(pages, 'pageId'))
			.map((pages_) => maxBy(pages_, (page) => page.creationDate));

		const matches = filteredPages.filter(
			page => flatMap(page.content.ops,
				node => Object.values(node))
				.some(
					value => value.includes(inputValue)
				)
		).map((page) => {
			return {
				value: page.pageId,
				label: `"${inputValue}" gefunden auf: ${page.title}`
			};
		});

		this.setState({
			inputValue,
			matches: !isEmpty(inputValue.trim()) ? matches : [
			]
		});
	}

	shortenProjectLabel() {
		const { selectedProject } = this.props;
		if (typeof selectedProject.label !== 'undefined' || !isEmpty(selectedProject.label)) {
			return selectedProject.label.substring(0, 25);
		}
		return '';
	}

	// FIXME: height without value is needed for rendering box correctly
	render() {
		const { selectedProject } = this.props;
		const { matches, inputValue } = this.state;
		return (
			<Wrapper
				width="100%"
				margin="10px 0 10px 0"
				height=""
				border={ {
					borderBottom: '1px solid #dcdcda'
				} }
			>
				<P
					title={ selectedProject.label }
					width="90%"
					fontWeight={ 400 }
					fontSize="20px"
					margin="30px auto 10px auto"
				>
					{ this.shortenProjectLabel() }
				</P>
				<Wrapper
					width="90%"
					margin="10px calc(5%)"
				>
					<Select
						onInputChange={ (e) => this.handleInputChange(e) }
						onChange={ (e) => this.handleChange(e) }
						inputValue={ inputValue }
						options={ matches }
						placeholder="Suche..."
					/>
				</Wrapper>
			</Wrapper>
		);
	}
}

const mapDispatchToProps = {
	setSelectedPage: Page.actions.setSelectedPage
};

const mapStateToProps = state => {
	return {
		pages: Page.selectors.pages(state),
		selectedProject: Project.selectors.selectedProject(state)
	};
};

ProjectHeader.propTypes = {
	selectedProject: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);
