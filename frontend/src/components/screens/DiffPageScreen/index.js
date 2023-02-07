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
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Delta from 'quill-delta';
import { isEmpty } from 'lodash';
import { Page, Project } from '@liquidium/ducks';
import {
	HC,
	CSC,
	CHCC,
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
	const { selectedPage, diffPage } = props;

	const handleExit = () => {
		const { setDiffPage } = props;
		setDiffPage({});
		navigate('/allDiffsPage');
	};

	const handleRecover = (page) => {
		const { createPage, setDiffPage } = props;
		const pageStructure = {
			author: page.author,
			content: page.content,
			mainpage: page.mainpage,
			projectId: page.projectId,
			parentPageId: page.parentPageId,
			pageId: page.pageId,
			title: page.title
		};
		createPage(pageStructure);
		setDiffPage({});
		navigate('/readPage');
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
						width="140px"
						onClick={ () => handleRecover(diffPage) }
					>
						Wiederherstellen
					</Button>
					<Button
						width="120px"
						onClick={ handleExit }
					>
						Zurück
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
					<b>Links:</b>
					{ ` Erstellt von ${!isEmpty(diffPage) ? diffPage.author : ''} am ` }
					{
						!isEmpty(diffPage)
							? moment(diffPage.creationDate)
								.locale('de')
								.format('Do MMMM YYYY - H:mm:ss')
							: ''
					}
					<br />
					<b>Rechts:</b>
					{ ` Erstellt von ${!isEmpty(selectedPage) ? selectedPage.author : ''} am `}
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
 * Describes a ContentComponentLeft component.
 *
 * @param {*} props react component props
 * @function ContentComponentLeft
 * @returns { React.ReactElement } the content component left
 */
function ContentComponentLeft(props) {
	const { diffPage } = props;
	return (
		<ReactQuill
			theme="snow"
			className={ props.className }
			style={ {
				height: 'calc(100% + 12px)',
				width: '100%',
				position: 'absolute',
				border: 'none !important',
				margin: '-12px 0 0 0'
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
				'image',
				'align'
			] }
			readOnly
			defaultValue={ diffPage.content }
		/>
	);
}

/**
 * Describes a ContentComponentRight component.
 *
 * @param {*} props react component props
 * @function ContentComponentRight
 * @returns { React.ReactElement } the content component right
 */
function ContentComponentRight(props) {
	const { diffPage, selectedPage } = props;

	const diffQuillDelta = () => {
		const oldContent = new Delta(diffPage.content.ops);
		const newContent = new Delta(selectedPage.content.ops);
		const diff = oldContent.diff(newContent);
		for (let i = 0; i < diff.ops.length; i++) {
			let op = diff.ops[i];
			// if the change was an insertion
			// eslint-disable-next-line no-prototype-builtins
			if (op.hasOwnProperty('insert')) {
				// color it green
				op.attributes = {
					background: '#cce8cc',
					color: '#003700'
				};
			}
			// if the change was a deletion
			// eslint-disable-next-line no-prototype-builtins
			if (op.hasOwnProperty('delete')) {
				// keep the text
				op.retain = op.delete;
				delete op.delete;
				// but color it red and struckthrough
				op.attributes = {
					background: '#e8cccc',
					color: '#370000',
					strike: true
				};
			}
		}
		return oldContent.compose(diff);
	};

	if (!isEmpty(selectedPage)) {

		return (
			<ReactQuill
				theme="snow"
				className={ props.className }
				style={ {
					height: 'calc(100% + 12px)',
					width: '100%',
					position: 'absolute',
					border: 'none !important',
					margin: '-12px 0 0 0'
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
					'image',
					'align'
				] }
				readOnly
				defaultValue={ diffQuillDelta() }
			/>
		);
	}
	return (
		<div />
	);
}

/**
 * Describes a DiffPageScreen component.
 *
 * @param {*} props react component props
 * @function DiffPageScreen
 * @returns { React.ReactElement } the diff page screen
 */
function DiffPageScreen(props) {
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
											<CHCC
												background="#fff"
												headerComponent={
													(layoutProps) => (
														<HeaderComponent
															{ ...layoutProps }
															{ ...props }
														/>
													)
												}
												contentComponentLeft={
													(layoutProps) => (
														<ContentComponentLeft
															{ ...layoutProps }
															{ ...props }
														/>
													)
												}
												contentComponentRight={
													(layoutProps) => (
														<ContentComponentRight
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
	setDiffPage: Page.actions.setDiffPage,
	createPage: Page.actions.createPage
};

const mapStateToProps = state => {
	return {
		pages: Page.selectors.pages(state),
		projects: Project.selectors.projects(state),
		selectedProject: Project.selectors.selectedProject(state),
		selectedPage: Page.selectors.selectedPage(state),
		diffPage: Page.selectors.diffPage(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DiffPageScreen);
