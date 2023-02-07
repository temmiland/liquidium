/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOidc, useOidcUser } from '@axa-fr/react-oidc';
import { connect, useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';
import { groupBy, isEmpty, minBy, isEqual } from 'lodash';
import { QuillSpring } from '@liquidium/helpers';
import { Page, Project } from '@liquidium/ducks';
import {
	HC,
	CSC,
	CHC,
	CC,
	Button,
	P,
	TextInput,
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
	const { oidcUser } = useOidcUser();
	const { newPage } = props;

	const dispatch = useDispatch();

	const setEditPage = useCallback(
		(page) => dispatch({
			type: 'PAGE_SET_EDIT',
			payload: page
		}),
		[
			dispatch
		]
	);
	const editPage = useSelector((state) => state.Page.editPage);
	const { title, quillContent } = editPage;

	const pages = useSelector((state) => state.Page.pages);
	const selectedPage = useSelector((state) => state.Page.selectedPage);

	const firstVersion = !isEmpty(pages) && !isEmpty(selectedPage)
		? Object.values(groupBy(pages, 'pageId'))
			.map((versions) => minBy(versions, (version) => version.creationDate))
			.filter((page) => page.pageId === selectedPage.pageId)[0]
		: '';

	const handleExit = () => {
		const { selectedPage } = props;
		if (typeof selectedPage !== 'undefined' || !isEmpty(selectedPage)) navigate('/readPage');
	};

	const handleSave = () => {
		const { selectedProject, createPage } = props;

		const page = {
			title,
			content: QuillSpring.translate(quillContent),
			projectId: selectedProject.value,
			author: oidcUser.preferred_username,
			parentPageId: newPage
				? selectedPage.pageId
				: !selectedPage.mainpage
					? selectedPage.parentPageId
					: '',
			pageId: !newPage
				? selectedPage.pageId
				: '',
			mainpage: !newPage
				? selectedPage.mainpage
				: false
		};
		if (!isEmpty(page.title)) {
			createPage(page);
			if (
				typeof selectedPage !== 'undefined'
				|| !isEmpty(selectedPage)
			) navigate('/readPage');
		}
	};

	if (!isEmpty(selectedPage)) {
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
					width="400px"
					display="flex"
					float="right"
				>
					<Button
						width="120px"
						disabled={ isEmpty(title) }
						onClick={ handleSave }
					>
						Speichern
					</Button>
					<Button
						width="120px"
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
				<TextInput
					textAlign="left"
					margin="5px auto 5px auto"
					value={
						!newPage
							? title
							: undefined
					}
					placeholder="Seitentitel"
					required
					onChange={
						(e) => setEditPage({
							title: e.target.value, quillContent: quillContent
						})
					}
				/>
				<P
					fontSize="14px"
					width="100%"
					textAlign="left"
					margin="10px auto 5px auto"
				>
					{
						!newPage
							? (
								`Erstellt von ${
									!isEmpty(firstVersion)
										? firstVersion.author
										: ''
								} am ${
									!isEmpty(firstVersion)
										? moment(firstVersion.creationDate)
											.locale('de')
											.format('Do MMMM YYYY - H:mm:ss')
										: ''
								}. Zuletzt bearbeitet von ${
									!isEmpty(selectedPage)
										? selectedPage.author
										: ''
								} am ${
									!isEmpty(selectedPage)
										? moment(selectedPage.creationDate)
											.locale('de')
											.format('Do MMMM YYYY - H:mm:ss')
										: ''
								}`
							)
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
	const dispatch = useDispatch();

	const setEditPage = useCallback(
		(page) => dispatch({
			type: 'PAGE_SET_EDIT', payload: page
		}),
		[
			dispatch
		]
	);
	const editPage = useSelector((state) => state.Page.editPage);
	const { title, quillContent } = editPage;

	const handleChange = (content, delta, source, editor) => {
		if (!isEqual(editor.getContents(), quillContent)) {
			setEditPage({
				title, quillContent: editor.getContents()
			});
		}
	};

	return (
		<ReactQuill
			theme="snow"
			className={ props.className }
			style={ {
				height: 'calc(100% - 30px)',
				width: '100%',
				position: 'absolute',
				border: 'none !important',
				margin: '-16px 0 0 0'
			} }
			modules={ {
				toolbar: [
					[
						'bold',
						'italic',
						'underline',
						'strike'
					], // toggled buttons
					[
						'blockquote',
						'code-block'
					],

					[
						{
							header: 1
						},
						{
							header: 2
						}
					], // custom button values
					[
						{
							list: 'ordered'
						},
						{
							list: 'bullet'
						}
					],
					[
						{
							script: 'sub'
						},
						{
							script: 'super'
						}
					], // superscript/subscript
					[
						{
							indent: '-1'
						},
						{
							indent: '+1'
						}
					], // outdent/indent
					[
						{
							direction: 'rtl'
						}
					], // text direction

					[
						{
							size: [
								'small',
								false,
								'large',
								'huge'
							]
						}
					], // custom dropdown
					[
						{
							header: [
								1,
								2,
								3,
								4,
								5,
								6,
								false
							]
						}
					],

					[
						{
							color: [
							]
						},
						{
							background: [
							]
						}
					], // dropdown with defaults from theme
					[
						{
							font: [
							]
						}
					],
					[
						{
							align: [
							]
						}
					],

					[
						'clean'
					] // remove formatting button
				]
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
				'image',
				'align'
			] }
			defaultValue={
				!isEmpty(quillContent) && !props.newPage
					? quillContent
					: ''
			}
			onChange={ handleChange }
		/>
	);
}

/**
 * Describes a EditPageScreen component.
 *
 * @param {*} props react component props
 * @function EditPageScreen
 * @returns { React.ReactElement } the edit page screen
 */
function EditPageScreen(props) {
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
	setSelectedPage: Page.actions.setSelectedPage,
	createPage: Page.actions.createPage
};

const mapStateToProps = state => {
	return {
		pages: Page.selectors.pages(state),
		projects: Project.selectors.projects(state),
		selectedProject: Project.selectors.selectedProject(state),
		selectedPage: Page.selectors.selectedPage(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPageScreen);
