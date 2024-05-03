/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOidc, useOidcUser } from '@axa-fr/react-oidc';
import { connect } from 'react-redux';
import CryptoJS from 'crypto-js';
import { isEmpty } from 'lodash';
import { Page } from '@liquidium/ducks';
import {
	Avatar,
	Bar,
	Button,
	Logo,
	ProjectSearch
} from '@liquidium/components';

/**
 * Describes a Header component.
 *
 * @param {*} props react component props
 * @function Header
 * @returns { React.ReactElement } the header
 */
function Header(props) {
	const navigate = useNavigate();
	const { isAuthenticated } = useOidc();
	const { oidcUser } = useOidcUser();
	const { selectedPage } = props;

	const handleClick = () => {
		if (isAuthenticated) navigate('/createNewPage');
	};

	return (
		<Bar>
			<a href="/selectProject">
				<Logo margin="0 20px 0 40px" />
			</a>
			{
				isAuthenticated
					? (
						<>
							<ProjectSearch
								{ ...props }
							/>
							<Button
								margin="7px 5px 7px 10px"
								display=""
								height="50px"
								width="50px"
								onClick={ handleClick }
								disabled={ isEmpty(selectedPage) }
							>
							+
							</Button>
							<Avatar
								src={
									oidcUser
										? 'https://www.gravatar.com/avatar/'
										+ CryptoJS.MD5(oidcUser.email)
										: ''
								}
								float="right"
								margin="5px 20px 5px 10px"
							/>
						</>
					)
					: ''
			}
		</Bar>
	);
}

const mapDispatchToProps = {};

const mapStateToProps = state => {
	return {
		selectedPage: Page.selectors.selectedPage(state)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
