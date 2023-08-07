import { Container, Box } from "@mui/material";
import "./App.css";
import SearchField from "./Components/SearchField";
import Description from "./Components/Description";
import Map from "./Components/Map";
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
        id="map"
        component={"div"}
        sx={{
          position: "absolute",
          top: { md: "275px", xs: "350px" },
          width: "100%",
          zIndex: "-1",
          height: "100%",
        }}
      >
        <Map />
      </Box>
      <Container>
        <SearchField />
        <Description />
      </Container>
    </>
  );
};

export default App;
