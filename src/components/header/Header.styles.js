import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ed1b24;
  color: #fff;
  height: 80px;

`;

export const SearchInput = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  width: 170px;
  height: 30px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`
export const Input = styled.input`
  margin: 0 auto;
  width: 90px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 13px;

  &::placeholder{
    color: #000
  }
`

export const Logo = styled.img`
  width: 150px;
  height: 0 auto;
  :hover{
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;
