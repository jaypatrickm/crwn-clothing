import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

const checkoutItemStyles = css`
  width: 23%;
`;

export const CheckoutItemName = styled.span`
  ${checkoutItemStyles}
`;

export const CheckoutItemQuantity = styled.span`
  ${checkoutItemStyles}
  display: flex;
`;

export const CheckoutQuantityArrow = styled.div`
  cursor: pointer;
`;

export const CheckoutQuantityValue = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemPrice = styled.span`
  ${checkoutItemStyles}
`;

export const CheckoutItemRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
