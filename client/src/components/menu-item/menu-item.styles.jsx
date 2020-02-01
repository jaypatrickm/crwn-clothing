import styled, { css } from 'styled-components';

const getMenuItemHeightStyles = props => {
  switch (props.size) {
    case 'large':
      return itemLargeHeight;
    default:
      return itemHeight;
  }
};

const itemLargeHeight = css`
  height: 380px;
`;

const itemHeight = css`
  height: 240px;
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.imageUrl});
`;

export const MenuContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  ${getMenuItemHeightStyles}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${BackgroundImageContainer} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover ${MenuContentContainer} {
    opacity: 0.9;
  }
  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const MenuTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const MenuSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
