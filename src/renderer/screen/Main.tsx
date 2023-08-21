import { useCallback, useEffect, useState } from 'react';
import ReactQuill, { UnprivilegedEditor, Value } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Main.css';
import Sidebar from 'renderer/components/Sidebar';
import { LiqDocument, LiqDocumentType } from 'renderer/domain/liq-document';
import generateUUID from 'renderer/util/uuid';
import isEmpty from 'lodash/isEmpty';
import { Delta, DeltaStatic, Sources } from 'quill';
import { usePrevious } from '@uidotdev/usehooks';
import { groupBy, maxBy } from 'lodash';

/**
 * Main component for managing documents and content editing.
 * @component
 */
export default function Main() {
  const [documents, setDocuments] = useState<LiqDocument[]>([]);
  const [activeDocument, setActiveDocument] = useState<LiqDocument | null>(
    null
  );
  const prevActiveDocument = usePrevious(activeDocument);

  /**
   * Create a new document and set it as the active document.
   * @param {LiqDocument} doc - The LiqDocument to create.
   */
  const createDocument = (doc: LiqDocument) => {
    setDocuments([...documents, doc]);
    setActiveDocument(doc);
  };

  /**
   * Update an active documents content.
   * @param {string}              value   - content in html form.
   * @param {DeltaStatic}         delta   - a Delta object with all changes.
   * @param {Sources}             source  - source of the onChange event.
   * @param {UnprivilegedEditor}  editor  - an object representing the editor.
   */
  const updateDocument = (
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: UnprivilegedEditor
  ) => {
    if (!isEmpty(activeDocument) && source === 'user') {
      const aDoc: LiqDocument = {
        ...(activeDocument as LiqDocument),
        uuid: generateUUID(),
        creationDate: new Date().toISOString(),
        content: editor.getContents(),
      };
      return setActiveDocument(aDoc);
    }
    return value;
  };

  /**
   * Save a active document to the electron store.
   * @param {LiqDocument} doc - The LiqDocument to create.
   */
  const saveActiveDocument = useCallback(() => {
    if (activeDocument) {
      // Filters out the exact version of the document that is currently being worked on (uuid)
      const docs = [
        ...documents.filter((doc) => doc.uuid !== activeDocument.uuid),
        activeDocument,
      ];
      window.electron.store.set('documents', docs);
      setDocuments(docs);
    }
  }, [activeDocument, documents]);

  /**
   * Load documents from local electron store when the component mounts.
   * And if no document exists, create one.
   */
  useEffect(() => {
    if (isEmpty(documents)) {
      const dcs: LiqDocument[] = window.electron.store.get('documents');
      if (dcs === undefined) {
        const storedDocuments = window.electron.store.get('documents');
        const docs: LiqDocument[] =
          storedDocuments !== undefined ? storedDocuments : [];
        if (isEmpty(docs)) {
          docs.push({
            uuid: generateUUID(),
            docId: generateUUID(),
            parentDocId: null,
            type: LiqDocumentType.PAGE,
            title: 'Welcome',
            creationDate: new Date().toISOString(),
            isEntrypoint: true,
            content: {
              ops: [
                {
                  insert: 'Welcome to Liquidium!',
                },
                {
                  attributes: {
                    header: 1,
                  },
                  insert: '\n',
                },
                {
                  attributes: {
                    italic: true,
                  },
                  insert: 'Write your text here...',
                },
              ],
            } as Delta,
          });
          window.electron.store.set('documents', docs);
        }
      }
      setDocuments(window.electron.store.get('documents'));
    }
  }, [documents]);

  /**
   * Set the active document to the entry point document if not already set.
   */
  useEffect(() => {
    if (documents !== null && activeDocument === null) {
      const entrypointDoc = Object.values(groupBy(documents, 'docId'))
        .map((docs) => maxBy(docs, (doc) => doc.creationDate))
        .find((doc) => doc?.isEntrypoint);
      if (entrypointDoc) {
        setActiveDocument(entrypointDoc);
      }
    }
  }, [activeDocument, documents]);

  return (
    <div>
      <Sidebar
        documents={documents}
        activeDocument={activeDocument}
        setActiveDocument={setActiveDocument}
        createDocument={createDocument}
        saveActiveDocument={saveActiveDocument}
      />
      <div className="content">
        <div className="pageTitle">{activeDocument?.title}</div>
        <div className="quill-container">
          <ReactQuill
            theme="snow"
            value={activeDocument?.content as Value | undefined}
            onChange={updateDocument}
            onBlur={saveActiveDocument}
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
                [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
                [{ direction: 'rtl' }], // text direction
                [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                [{ font: [] }],
                [{ align: [] }],
                ['clean'], // remove formatting button
              ],
            }}
            formats={[
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
              'align',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
