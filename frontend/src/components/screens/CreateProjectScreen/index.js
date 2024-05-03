/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOidc, useOidcUser } from '@axa-fr/react-oidc';
import { connect } from 'react-redux';
import Twemoji from 'react-twemoji';
import isEmpty from 'lodash/isEmpty';
import { Page, Project } from '@liquidium/ducks';
import {
	HC,
	AETB,
	CC,
	Button,
	P
} from '@liquidium/components';

/**
 * Describes a EmojiComponent component.
 *
 * @function EmojiComponent
 * @returns { React.ReactElement } the emoji
 */
function EmojiComponent() {
	return (
		<Twemoji options={ {
			className: 'twemoji'
		} }
		>
			<P><span role="img" aria-label="sad">😥</span></P>
		</Twemoji>
	);
}

/**
 * Describes a TextComponent component.
 *
 * @function TextComponent
 * @returns { React.ReactElement } the text
 */
function TextComponent() {
	return (
		<P
			fontSize="40px"
			fontWeight={ 300 }
		>
			Es existieren noch keine Artikel!
		</P>
	);
}

/**
 * Describes a ButtonComponent component.
 *
 * @param {*} props react component props
 * @function ButtonComponent
 * @returns { React.ReactElement } the button
 */
function ButtonComponent(props) {
	const { oidcUser } = useOidcUser();

	const handleClick = () => {
		const { selectedProject, createPage } = props;
		const firstVersion = {
			title: 'Hauptseite',
			content: {
				ops: [
					{
						type: 'insert',
						insert: 'Dies ist die Testseite des Liquidium-Testprojektes.'
					},
					{
						attributes: {
							header: 1
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: '\nHier könnte ein Text stehen.\n\nÜberschrift 2'
					},
					{
						attributes: {
							header: 2
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: 'Dies ist ein '
					},
					{
						attributes: {
							bold: true
						},
						type: 'insert',
						insert: 'fetter, '
					},
					{
						attributes: {
							italic: true
						},
						type: 'insert',
						insert: 'kursiver'
					},
					{
						type: 'insert',
						insert: ' und '
					},
					{
						attributes: {
							underline: true
						},
						type: 'insert',
						insert: 'unterstrichener'
					},
					{
						type: 'insert',
						insert: ' Text.\n\nAufzählung:\n1'
					},
					{
						attributes: {
							list: 'bullet'
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: '2'
					},
					{
						attributes: {
							list: 'bullet'
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: '3'
					},
					{
						attributes: {
							list: 'bullet'
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: '\nEins'
					},
					{
						attributes: {
							list: 'ordered'
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: 'Zwei'
					},
					{
						attributes: {
							list: 'ordered'
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: 'Drei'
					},
					{
						attributes: {
							list: 'ordered'
						},
						type: 'insert',
						insert: '\n'
					},
					{
						type: 'insert',
						insert: '\nEmojis 🤓👨🏻‍💻🐳'
					}
				]
			},
			projectId: selectedProject.value,
			author: oidcUser.preferred_username,
			mainpage: true
		};
		createPage(firstVersion);
	};
	return (
		<Button
			center
			onClick={ handleClick }
		>
			Projekt einrichten
		</Button>
	);
}

/**
 * Describes a CreateProjectScreen component.
 *
 * @param {*} props react component props
 * @function CreateProjectScreen
 * @returns { React.ReactElement } the create project screen
 */
function CreateProjectScreen(props) {
	const navigate = useNavigate();
	const { isAuthenticated } = useOidc();

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
		} else if (typeof props.pages !== 'undefined' && !isEmpty(props.pages)) {
			navigate('/readPage');
		}
	});

	return (
		<HC
			contentComponent={
				() => (
					<CC
						contentComponent={
							() => (
								<AETB
									height="200px"
									withTransparency
									emojiComponent={
										EmojiComponent
									}
									textComponent={
										TextComponent
									}
									buttonComponent={
										(layoutProps) => (
											<ButtonComponent
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
	);
}

const mapDispatchToProps = {
	createPage: Page.actions.createPage
};

const mapStateToProps = state => {
	return {
		pages: Page.selectors.pages(state),
		selectedProject: Project.selectors.selectedProject(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectScreen);
