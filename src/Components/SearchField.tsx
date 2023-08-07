import { Box, Typography, Input, IconButton } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useAppDispatch } from "../reduxHooks";
import { loadNewIpData } from "../reducers/ipActions";
import { useSelector } from "react-redux";
import { selectIpData } from "../reducers/ipSelectors";
type formFields = {
  searchFielIP: HTMLInputElement;
};
const SearchField = () => {
  const dispatch = useAppDispatch();
  const status = useSelector(selectIpData);
  console.log(status.status.message);
  const handleSubmit: React.FormEventHandler<HTMLFormElement | formFields> = (
    event
  ) => {
    event.preventDefault();
    if (event.currentTarget.searchFielIP.value.trim() == "") {
      return;
    }
    dispatch(loadNewIpData(event.currentTarget.searchFielIP.value));
    event.currentTarget.searchFielIP.value = "";
  };
  return (
    <Box sx={{ textAlign: "center", pt: "40px" }}>
      <Typography variant="h4" sx={{ color: "white" }}>
        IP Address Tracker
      </Typography>
      <Box
        sx={{
          width: { md: "620px", xs: "350px" },
          margin: "0 auto",
          border: `1px solid ${status.status.message ? "red" : "black"}`,
          borderRadius: "14px",
          overflow: "hidden",
          mt: "40px",
          backgroundColor: "white",
        }}
      >
        <form onSubmit={handleSubmit}>
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
                placeholder={
                  status.status.message
                    ? "Please enter valid domain or ip"
                    : "Search for any IP address or domain"
                }
              />
            </Grid2>
            <Grid2 xs={2} md={1}>
              <IconButton
                type="submit"
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
        </form>
      </Box>
    </Box>
  );
};

export default SearchField;
