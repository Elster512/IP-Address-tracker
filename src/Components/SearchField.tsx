import { Box, Typography, Input, IconButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";

const SearchField = () => {
  return (
    <Box sx={{ textAlign: "center", mt: "50px" }}>
      <Typography variant="h4">IP Address Tracker</Typography>
      <Box
        component={"form"}
        sx={{
          width: { md: "620px", xs: "350px" },
          margin: "0 auto",
          border: "1px solid black",
          borderRadius: "14px",
          overflow: "hidden",
          mt: "40px",
        }}
      >
        <Grid2
          container
          alignItems={"center"}
          justifyContent={"center"}
          spacing={0}
        >
          <Grid2 xs={10} md={11}>
            <Input
              id="searchFielIP"
              sx={{
                width: { md: "550px", xs: "305px" },
                pl: "5px",
              }}
              disableUnderline
              placeholder="Search for any IP address or domain"
            />
          </Grid2>
          <Grid2 xs={2} md={1}>
            <IconButton
              sx={{
                width: { md: "60px", xs: "60px" },
                borderRadius: "0px",
                backgroundColor: "#000000",
                color: "white",
                "&:hover": {
                  backgroundColor: "#969696",
                },
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default SearchField;
