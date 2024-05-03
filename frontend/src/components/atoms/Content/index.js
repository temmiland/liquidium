/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
	margin: 0;
	background: ${props => props.background};
	
	${props => props.cc && css`
		width: 100%;
		height: 100%;
	`}
	
	${props => props.chc && css`
		display: grid;
		width: 100%;
		grid-template-areas: "header"
		"content";
		grid-template-columns: 1fr;
		grid-template-rows: 145px 1fr;
		position: relative;
		
		.header {
			grid-area: header;
		}
		.content {
			grid-area: content;
		}
	`}
	
	${props => props.chcc && css`
		display: grid;
		width: 100%;
		grid-template-areas: "header header"
		"contentLeft contentRight";
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 145px 1fr;
		position: relative;
		
		.header {
			grid-area: header;
		}
		.contentLeft {
			grid-area: contentLeft;
		}
		.contentRight {
			grid-area: contentRight;
		}
	`}
	
	${props => props.csc && css`
		display: grid;
		position:absolute; // fixes css margin collapsing
		width: 100%;
		height: calc(100% - 50px); // fixes css overflow
		grid-template-areas: "sidebar content";
		grid-template-columns: 20% 80%;
		grid-template-rows: 1fr;
		
		.sidebar {
			grid-area: sidebar;
		}
		.content {
			grid-area: content;
		}
	`}
 
`;

const checkType = (props, propName, componentName) => {
	const { cc, chc, chcc, csc } = props;
	if (!cc && !chc && !chcc && !csc) {
		return new Error(
			`One of props 'cc', 'chc', 'chcc' or 'csc' was not specified in '${componentName}'.`
		);
	}
	return null;
};

Content.defaultProps = {
	background: '#f5f5f5'
};

Content.propTypes = {
	cc: (props, propName, componentName) => checkType(props, propName, componentName),
	chc: (props, propName, componentName) => checkType(props, propName, componentName),
	chcc: (props, propName, componentName) => checkType(props, propName, componentName),
	csc: (props, propName, componentName) => checkType(props, propName, componentName),
	background: PropTypes.string
};

export default Content;
