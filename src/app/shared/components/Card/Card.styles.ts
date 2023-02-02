import styled from "styled-components";

export const CardsList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  list-style: none;
`

export const CardWrapper = styled.li`
  padding: 15px 20px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  max-width: 482px;
  border-radius: 6px;

  h4 {
    line-height: 26px;
  }
`;

export const CardImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 3px 10px;
    background-color: #000000;
    opacity: 0.5;
    color: #ffffff;
    font-size: 11px;
    border-radius: 3px;

    svg {
      width: 19px;
      margin-right: 14px;
    }
  }
`;
