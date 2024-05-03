/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React, { useEffect } from 'react';
import { useOidc } from '@axa-fr/react-oidc';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { groupBy, isEmpty, minBy } from 'lodash';
import moment from 'moment';
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

	const firstVersion = !isEmpty(pages) && !isEmpty(selectedPage)
		? Object.values(groupBy(pages, 'pageId'))
			.map((versions) => minBy(versions, (version) => version.creationDate))
			.filter((page) => page.pageId === selectedPage.pageId)[0]
		: '';

	const edit = () => {
		if (typeof editPage !== 'undefined' || !isEmpty(editPage)) navigate('/editPage');
	};

	const diff = () => {
		if (!isEmpty(selectedPage)) navigate('/allDiffsPage');
	};

	const del = () => {
		if (!isEmpty(selectedPage)) navigate('/delPage');
	};

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
	const { className, selectedPage } = props;
	return (
		<ReactQuill
			theme="snow"
			className={ className }
			style={ {
				height: 'calc(100% + 27px)',
				width: '100%',
				position: 'absolute',
				border: 'none !important',
				margin: '-27px 0 0 0'
			} }
			modules={ {
				toolbar: false
			} }
			formats={ [
				'header',
				'bold',
				'italic',
				'underline',
				'strike',
				'blockquote',
				'list',
				'bullet',
				'indent',
				'link',
				'image',
				'color',
				'background',
				'code-block',
				'size',
				'script',
				'code',
				'font',
				'direction',
				'formula',
				'video',
				'image'
			] }
			readOnly
			value={
				typeof selectedPage !== 'undefined'
				&& !isEmpty(selectedPage.content)
					? selectedPage.content
					: ''
			}
		/>
	);
}

/**
 * Describes a ReadPageScreen component.
 *
 * @param {*} props react component props
 * @function ReadPageScreen
 * @returns { React.ReactElement } the read page screen
 */
function ReadPageScreen(props) {
	const navigate = useNavigate();
	const { isAuthenticated } = useOidc();
	const { pages, projects } = props;

	useEffect(() => {

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
		if (isEmpty(props.editPage) && !isEmpty(props.selectedPage)) {
			props.setEditPage({
				title: props.selectedPage.title, quillContent: props.selectedPage.content
			});
		}
	});

	if (pages === undefined && isEmpty(pages)) return <></>

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

export default connect(mapStateToProps, mapDispatchToProps)(ReadPageScreen);
