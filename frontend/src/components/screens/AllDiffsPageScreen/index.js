/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useOidc } from '@axa-fr/react-oidc';
import { connect } from 'react-redux';
import moment from 'moment';
import { groupBy, isEmpty, minBy } from 'lodash';
import { Page, Project } from '@liquidium/ducks';
import {
	HC,
	CSC,
	CHC,
	CC,
	A,
	Button,
	H1,
	P,
	Wrapper
} from '@liquidium/components';

/**
 * Describes a HeaderComponent component.
 *
 * @param {*} props react component props
 * @function HeaderComponent
 * @returns { React.ReactElement } the header
 */
function HeaderComponent(props) {
	const navigate = useNavigate();
	const { selectedPage, pages } = props;

	const handleDiff = () => navigate('/diffPage');

	const handleExit = () => navigate('/readPage');

	const firstVersion = !isEmpty(pages) && !isEmpty(selectedPage)
		? Object.values(groupBy(pages, 'pageId'))
			.map((versions) => minBy(versions, (version) => version.creationDate))
			.filter((page) => page.pageId === selectedPage.pageId)[0]
		: '';

	if (selectedPage) {
		return (
			<Wrapper
				margin=""
				padding="12px 0 0 32px"
				width=""
				height=""
				border={ {
					borderBottom: '1px solid #c3c3c3'
				} }
			>
				<Wrapper
					display="flex"
					float="right"
				>
					<Button
						width="100px"
						onClick={ handleDiff }
					>
						Vergleichen
					</Button>
					<Button
						width="100px"
						onClick={ handleExit }
					>
						Abbrechen
					</Button>
				</Wrapper>
				<P
					fontSize="12px"
					width="100%"
					textAlign="left"
					margin="25px auto 5px auto"
				>
					{ `${selectedPage.title} »` }
				</P>
				<H1
					textAlign="left"
					margin="5px auto 5px auto"
				>
					{ selectedPage.title }
				</H1>
				<P
					fontSize="14px"
					width="100%"
					textAlign="left"
					margin="10px auto 5px auto"
				>
					{ `Erstellt von ${!isEmpty(firstVersion) ? firstVersion.author : ''} am ` }
					{
						!isEmpty(firstVersion)
							? moment(firstVersion.creationDate)
								.locale('de')
								.format('Do MMMM YYYY - H:mm:ss')
							: ''
					}
					{ '. Zuletzt bearbeitet von ' }
					{
						!isEmpty(selectedPage)
							? selectedPage.author
							: ''
					}
					{ ' am ' }
					{
						!isEmpty(selectedPage)
							? moment(selectedPage.creationDate)
								.locale('de')
								.format('Do MMMM YYYY - H:mm:ss')
							: ''
					}
				</P>
			</Wrapper>
		);
	}
	return (
		<Wrapper
			width=""
			height=""
		/>
	);
}

/**
 * Describes a ContentComponent component.
 *
 * @param {*} props react component props
 * @function ContentComponent
 * @returns { React.ReactElement } the content
 */
function ContentComponent(props) {
	const {
		createPage,
		diffPage,
		pages,
		setDiffPage,
		selectedPage
	} = props;

	const handleRecover = (page) => {
		const recoverPage = {
			author: page.author,
			content: page.content,
			mainpage: page.mainpage,
			pageId: page.pageId,
			parentPageId: page.parentPageId,
			projectId: page.projectId,
			title: page.title
		};
		createPage(recoverPage);
	};

	const handleSelect = (e) => setDiffPage(
		pages.filter((page) => page.id === e.target.value)[0]
	);

	return (
		<Wrapper width="80%" margin="0 auto">
			<form>
				<table
					style={ {
						width: '100%'
					} }
				>
					<tbody>
						<tr>
							<td />
							<td><P>Hash</P></td>
							<td><P>Veröffentlicht</P></td>
							<td><P>Autor</P></td>
							<td />
						</tr>
						{
							pages
								.filter((page) => page.pageId === selectedPage.pageId)
								.sort((a, b) => (
									a.creationDate < b.creationDate
										? 1
										: (
											b.creationDate < a.creationDate
												? -1
												: 0
										)
								))
								.map((page, i) => (
									<tr key={ page.id }>
										<td>
											{
												i !== 0
													? (
														<input
															type="radio"
															name="selection"
															value={ page.id }
															checked={ page.id === diffPage.id }
															onChange={ handleSelect }
														/>)
													: ''
											}
										</td>
										<td><P>{ page.id }</P></td>
										<td>
											<P>
												{
													moment(page.creationDate)
														.locale('de')
														.format('Do MMMM YYYY - H:mm:ss')
												}
											</P>
										</td>
										<td><P>{ page.author }</P></td>
										<td>
											{
												i !== 0
													? (
														<A
															href="#"
															onClick={ () => handleRecover(page) }
														>
															Wiederherstellen
														</A>
													)
													: ''
											}
										</td>
									</tr>
								))
						}
					</tbody>
				</table>
			</form>
		</Wrapper>
	);
}

/**
 * Describes a AllDiffsPageScreen component.
 *
 * @param {*} props react component props
 * @function AllDiffsPageScreen
 * @returns { React.ReactElement } the all diffs page screen
 */
function AllDiffsPageScreen(props) {
	const navigate = useNavigate();
	const { isAuthenticated } = useOidc();

	useEffect(() => {
		const { pages, projects } = props;
		if (!isAuthenticated) {
			navigate('/login');
		} else if (
			(pages === undefined && projects === undefined)
			|| (isEmpty(pages) && isEmpty(projects))
		) {
			navigate('/selectProject');
		} else if (isEmpty(pages)) {
			navigate('/createProject');
		}
	});

	return (
		<HC
			contentComponent={
				() => (
					<CC
						contentComponent={
							() => (
								<CSC
									contentComponent={
										() => (
											<CHC
												background="#fff"
												headerComponent={
													(layoutProps) => (
														<HeaderComponent
															{ ...layoutProps }
															{ ...props }
														/>
													)
												}
												contentComponent={
													(layoutProps) => (
														<ContentComponent
															{ ...layoutProps }
															{ ...props }
														/>
													)
												}
											/>
										)
									}
								/>
							)
						}
					/>
				)
			}
		/>
	);
}

const mapDispatchToProps = {
	createPage: Page.actions.createPage,
	setDiffPage: Page.actions.setDiffPage,
	setSelectedPage: Page.actions.setSelectedPage
};

const mapStateToProps = state => {
	return {
		diffPage: Page.selectors.diffPage(state),
		pages: Page.selectors.pages(state),
		projects: Project.selectors.projects(state),
		selectedPage: Page.selectors.selectedPage(state),
		selectedProject: Project.selectors.selectedProject(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AllDiffsPageScreen);
