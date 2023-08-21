/*
 * Copyright (c) 2023
 * Tom Pietsch <hello@tomxpcvx.dev>
 *
 * This file is part of Liquidium which is released under MIT license.
 * See file license.md or go to https://github.com/tomxpcvx/liquidium/ for full license details.
 */

import { Delta } from 'quill';

export enum LiqDocumentType {
  PAGE,
  PDF,
}

export type LiqDocument = {
  uuid: string;
  docId: string;
  parentDocId: string | null;
  type: LiqDocumentType;
  title: string;
  creationDate: string;
  isEntrypoint: boolean;
  content: Delta;
};
