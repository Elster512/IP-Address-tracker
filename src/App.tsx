import { Container, Box } from "@mui/material";
import "./App.css";
import SearchField from "./Components/SearchField";
import Description from "./Components/Description";
import imageDesk from "./assets/pattern-bg-desktop.png";
import imageMobl from "./assets/pattern-bg-mobile.png";
const App = () => {
  return (
    <>
      <Box
        sx={{
          height: { md: "275px", xs: "350px" },
          position: "absolute",
          width: "100%",
          zIndex: "-1",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          backgroundImage: {
            md: `url(${imageDesk})`,
            xs: `url(${imageMobl})`,
          },
        }}
      ></Box>
      <Box
        sx={{
          position: "fixed",
          top: { md: "275px", xs: "350px" },
          width: "100%",
          zIndex: "-1",
          height: "100%",
          backgroundColor: "red",
        }}
      ></Box>
      <Container>
        <SearchField />
        <Description />
      </Container>
    </>
  );
};

export default App;
