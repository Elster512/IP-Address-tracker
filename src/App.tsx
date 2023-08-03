import { Container } from "@mui/material";
import "./App.css";
import SearchField from "./Components/SearchField";
import Description from "./Components/Description";

const App = () => {
  return (
    <Container sx={{ margin: "0 auto" }}>
      <SearchField />
      <Description></Description>
    </Container>
  );
};

export default App;
