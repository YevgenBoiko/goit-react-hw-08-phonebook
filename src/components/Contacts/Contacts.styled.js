import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

export const TextName = styled.p``;

export const Button = styled.button`
  height: 20px;
  padding: 0px 10px;
  margin: auto 0;

  border-radius: 5px;
  font-size: small;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    background-color: #606060;
    color: white;
    border: none;
  }
`;
