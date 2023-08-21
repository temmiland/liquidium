import { LiqDocument, LiqDocumentType } from 'renderer/domain/liq-document';
import generateUUID from 'renderer/util/uuid';
import './Sidebar.css';
import { Delta } from 'quill';
import { groupBy, maxBy, sortBy } from 'lodash';
import arrayToTree from 'array-to-tree';
import React from 'react';

function Sidebar({
  documents,
  activeDocument,
  setActiveDocument,
  createDocument,
  saveActiveDocument,
}: {
  documents: LiqDocument[] | null;
  activeDocument: LiqDocument | null;
  setActiveDocument: (doc: LiqDocument) => void;
  createDocument: (doc: LiqDocument) => void;
  saveActiveDocument: () => void;
}) {
  const filteredDocuments = Object.values(groupBy(documents, 'docId')).map(
    (docs) => maxBy(docs, 'creationDate')
  );
  const documentTree = arrayToTree(filteredDocuments, {
    parentProperty: 'parentDocId',
    customID: 'docId',
  });

  const renderNodeElement = (doc: any) => {
    return (
      <React.Fragment key={`${doc.docId}-rf`}>
        <li key={`${doc.docId}-li`}>
          <button
            type="button"
            disabled={activeDocument?.docId === doc.docId}
            key={`${doc.docId}-a`}
            onClick={() => {
              saveActiveDocument();
              setActiveDocument(doc);
            }}
          >
            {doc.title}
          </button>
        </li>
        {doc.children?.map((child: any) => {
          return <ul key={`${doc.docId}-ul`}>{renderNodeElement(child)}</ul>;
        })}
      </React.Fragment>
    );
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <button
          type="button"
          onClick={() =>
            createDocument({
              uuid: generateUUID(),
              docId: generateUUID(),
              parentDocId: null,
              type: LiqDocumentType.PAGE,
              title: 'New page',
              creationDate: new Date().toISOString(),
              isEntrypoint: false,
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
            })
          }
        >
          +
        </button>
        {documentTree.map((doc) => renderNodeElement(doc))}
      </div>
    </div>
  );
}

export default Sidebar;
