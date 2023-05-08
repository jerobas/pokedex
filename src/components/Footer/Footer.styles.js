import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  text-align: center;
  letter-spacing: 1.4px;

  a{
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;
