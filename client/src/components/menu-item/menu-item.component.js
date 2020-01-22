import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  MenuContentContainer,
  MenuSubtitle,
  MenuTitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer imageUrl={imageUrl} />
    <MenuContentContainer>
      <MenuTitle>{title.toUpperCase()}</MenuTitle>
      <MenuSubtitle>SHOP NOW</MenuSubtitle>
    </MenuContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
