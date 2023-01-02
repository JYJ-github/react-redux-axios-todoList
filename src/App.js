import Header from "./components/01.Header";
import Create from "./components/02.Create";
import Read from "./components/03.Read";
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      <Header />
      <Create />
      <Read />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div``;
