/*
 * Copyright (c) 2019-2022
 * Tom Pietsch <hello@tomxpcvx.dev> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { OidcProvider } from '@axa-fr/react-oidc';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import {
	MirageServer as startMirageServer,
	OidcConfiguration as oidcConfiguration,
	Store as store
} from '@liquidium/helpers';
import App from './App';

library.add(faLock, faUser);

const container = document.getElementById('root');
const root = createRoot(container);

const onEvent = (configurationName, eventName, data) => {
	if(process.env.NODE_ENV !== 'production') {
		// eslint-disable-next-line no-console
		console.log(`oidc:${configurationName}:${eventName}`, data);
	}
}

// mirage dev server
if (process.env.LIQUIDIUM_MIRAGE_MODE == true) {
	startMirageServer();
}

root.render(
	<React.StrictMode>
		<OidcProvider
			configuration={ oidcConfiguration }
			onEvent={ onEvent }
			callbackSuccessComponent={ () => <div /> }
			sessionLostComponent={ () => <div /> }
			authenticatingComponent={ () => <div /> }
			authenticatingErrorComponent={ () => <div /> }
			loadingComponent={ () => <div /> }
			serviceWorkerNotSupportedComponent={ () => <div /> }
		>
			<Provider store={ store }>
				<App />
			</Provider>
		</OidcProvider>
	</React.StrictMode>
);
