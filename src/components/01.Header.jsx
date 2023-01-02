import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <SpanStyle>react-redux-axios</SpanStyle>
      <SpanStyle>Saprta</SpanStyle>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  height: 60px;
  width: 1000px;
  border: 1px solid black;
  background-color: beige;
  display: flex;
`;

const SpanStyle = styled.span`
  justify-content: center;
  align-items: center;
`;
