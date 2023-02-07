/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import arrayToTree from 'array-to-tree';
import { groupBy, maxBy } from 'lodash';
import { Page } from '@liquidium/ducks';
import {
	A,
	Li,
	Ul,
	Wrapper
} from '@liquidium/components';

class ProjectPages extends Component {

	generatePageStructure() {
		const { pages } = this.props;

		// Filter
		const filteredPages = Object.values(groupBy(pages, 'pageId'))
			.map((pages) => maxBy(pages, (page) => page.creationDate));
		return arrayToTree(filteredPages, {
			parentProperty: 'parentPageId',
			customID: 'pageId'
		}).map(
			(page) => this.renderNodeElement(page)
		);
	}

	renderNodeElement(page) {
		const { setSelectedPage } = this.props;

		if (page.children) {
			return (
				<React.Fragment key={ `${page.pageId}-fr` }>
					<Li
						key={ `${page.pageId}-li` }
					>
						<A
							key={ `${page.pageId}-a` }
							href="#"
							onClick={ () => setSelectedPage(page) }
						>
							{ page.title }
						</A>
					</Li>
					{
						page.children.map(
							(child) => {
								return (
									<Ul
										margin="5px 0 5px 20px"
										key={ `${ page.pageId }-ul` }
									>
										{ this.renderNodeElement(child) }
									</Ul>
								);
							}
						)
					}
				</React.Fragment>
			);
		}

		return (
			<Li key={ page.pageId }>
				<A
					href="#"
					onClick={ () => setSelectedPage(page) }
				>
					{ page.title }
				</A>
			</Li>
		);
	}

	render() {
		return (
			<Wrapper>
				<Ul key="ul">
					{ this.generatePageStructure() }
				</Ul>
			</Wrapper>
		);
	}
}

const mapDispatchToProps = {
	setSelectedPage: Page.actions.setSelectedPage
};

const mapStateToProps = state => {
	return {
		pages: Page.selectors.pages(state)
	};
};

ProjectPages.propTypes = {
	pages: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPages);
