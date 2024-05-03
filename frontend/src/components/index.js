/*
 * Copyright (c) 2019-2022
 * Temmi Pietsch <welcome@temmi.land> & hydrograv GmbH <opensource@hydrograv.com>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/temmiland/liquidium/ for full license details.
 */

/* Atom exports */
export { default as A } from './atoms/A';
export { default as Area } from './atoms/Area';
export { default as Avatar } from './atoms/Avatar';
export { default as Bar } from './atoms/Bar';
export { default as Button } from './atoms/Button';
export { default as Content } from './atoms/Content';
export { default as H1 } from './atoms/H1';
export { default as Li } from './atoms/Li';
export { default as Logo } from './atoms/Logo';
export { default as P } from './atoms/P';
export { default as TextInput } from './atoms/TextInput';
export { default as Ul } from './atoms/Ul';
export { default as Wrapper } from './atoms/Wrapper';

/* Molecule exports */
export { default as ProjectSearch } from './molecules/ProjectSearch';
export { default as ProjectHeader } from './molecules/ProjectHeader';
export { default as ProjectPages } from './molecules/ProjectPages';

/* Organism exports */
export { default as Header } from './organisms/Header';
export { default as Sidebar } from './organisms/Sidebar';

/* Template exports */
export { default as AETB } from './templates/AETB';
export { default as AHIIB } from './templates/AHIIB';
export { default as CC } from './templates/CC';
export { default as CHC } from './templates/CHC';
export { default as CHCC } from './templates/CHCC';
export { default as CSC } from './templates/CSC';
export { default as HC } from './templates/HC';

/* Screen exports */
export { default as AllDiffsPageScreen } from './screens/AllDiffsPageScreen';
export { default as CreateProjectScreen } from './screens/CreateProjectScreen';
// FIXME: Logic :> Alle Versionen einer Seite löschen / Routing nach Löschung
export { default as DeletePageScreen } from './screens/DeletePageScreen';
export { default as DiffPageScreen } from './screens/DiffPageScreen';

// eslint-disable-next-line max-len
// FIXME: Error :> A non-serializable value was detected in the state, in the path: `Page.editPage.quillContent`. https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state
export { default as EditPageScreen } from './screens/EditPageScreen';
export { default as LoginScreen } from './screens/LoginScreen';
// FIXME: Logic :> Volltextsuche kaputt
export { default as ReadPageScreen } from './screens/ReadPageScreen';
export { default as SelectProjectScreen } from './screens/SelectProjectScreen';
