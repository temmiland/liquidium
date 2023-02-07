/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
	const { selectedPage, pages, editPage } = props;

	const del = () => {
		if (!isEmpty(selectedPage)) navigate('/delPage');
	};

	const diff = () => {
		if (!isEmpty(selectedPage)) navigate('/allDiffsPage');
	};

	const edit = () => {
		if (typeof editPage !== 'undefined' || !isEmpty(editPage)) navigate('/editPage');
	};

	const firstVersion = !isEmpty(pages) && !isEmpty(selectedPage)
		? Object.values(groupBy(pages, 'pageId'))
			.map((versions) => minBy(versions, (version) => version.creationDate))
			.filter((page) => page.pageId === selectedPage.pageId)[0]
		: '';

	if (selectedPage) {
		return (
			<Wrapper
				className={ props.className }
				margin=""
				padding="12px 0 0 32px"
				width="100%"
				height=""
				position="absolute"
				border={ {
					borderBottom: '1px solid #c3c3c3'
				} }
			>
				<Wrapper
					display="flex"
					float="right"
					width="440px"
				>
					<Button
						width="100px"
						onClick={ edit }
					>
						{ 'Editieren' }
					</Button>
					<Button
						width="100px"
						onClick={ diff }
					>
						{ 'Vergleichen' }
					</Button>
					<Button
						width="100px"
						onClick={ del }>
						{ 'Löschen' }
					</Button>
				</Wrapper>
				<P
					fontSize="12px"
					width="100%"
					textAlign="left"
					margin="25px auto 5px auto"
				>
					{ `${ selectedPage.title } »` }
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
	const navigate = useNavigate();
	const { selectedPage, deletePage } = props;
	return (
		<Wrapper
			display="ruby"
			float="right"
			width="60%"
		>
			<P
				margin="160px 0 0 0"
				width="100%"
				fontSize="20px"
			>
				{ 'Bist du sicher, dass du ' }
				<b>
					{ selectedPage.title }
				</b>
				{ ' löschen möchtest?' }
			</P>
			<Button
				onClick={ () => deletePage(selectedPage) }
				width="100px"
			>
				{ 'Löschen' }
			</Button>
			<Button
				onClick={ () => navigate('/readPage') }
				width="100px"
			>
				{ 'Abbrechen' }
			</Button>
		</Wrapper>
	);
}


/**
 * Describes a DeletePageScreen component.
 *
 * @param {*} props react component props
 * @function DeletePageScreen
 * @returns { React.ReactElement } the delete page screen
 */
function DeletePageScreen(props) {
	const navigate = useNavigate();
	const { isAuthenticated } = useOidc();
	const { pages, projects, selectedPage } = props;


	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
		} else if (
			(pages === undefined && projects === undefined)
			|| (isEmpty(pages) && isEmpty(projects))
		) {
			navigate('/selectProject');
		} else if (isEmpty(selectedPage)) {
			navigate('/readPage');
		}
	});

	if (pages === undefined || isEmpty(pages)) return <></>

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
	deletePage: Page.actions.deletePage,
	setEditPage: Page.actions.setEditPage,
	setSelectedPage: Page.actions.setSelectedPage
};

const mapStateToProps = state => {
	return {
		editPage: Page.selectors.editPage(state),
		pages: Page.selectors.pages(state),
		projects: Project.selectors.projects(state),
		selectedPage: Page.selectors.selectedPage(state),
		selectedProject: Project.selectors.selectedProject(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeletePageScreen);
