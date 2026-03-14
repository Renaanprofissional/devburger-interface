import styled from 'styled-components';

export const ProductImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px 0px;
  object-fit: cover;
  object-position: center;
  padding: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    background-color: ${(props) => props.theme.purple};
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    font-size: 20px;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.darkGray};
  text-align: center;
  margin-top: 20px;
`;

export const ProductTotalPrice = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => props.theme.gren};
  text-align: center;
  margin-top: 20px;
`;

export const TrashImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;
