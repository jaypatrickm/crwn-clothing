import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionItemPreview
} from './collection-preview.styles';
const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
      {title.toUpperCase()}
    </CollectionPreviewTitle>
    <CollectionItemPreview>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionItemPreview>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
