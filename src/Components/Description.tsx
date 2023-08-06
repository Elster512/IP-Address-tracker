import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useSelector } from "react-redux";
import { selectIpData } from "../reducers/ipSelectors";

const Description = () => {
  const ipData = useSelector(selectIpData);
  return (
    <Box
      sx={{
        backgroundColor: "white",
        margin: "40px auto 0 auto",
        border: "1px solid black",
        borderRadius: "14px",
        width: { xs: "310px", md: "1000px" },
        p: "20px",
        height: { md: "150px", xs: "content" },
      }}
    >
      <Grid2 container rowSpacing={2} columnSpacing={8}>
        <Grid2
          xs={12}
          md={3}
          sx={{
            textAlign: { xs: "center", md: "start" },
            borderRight: { xs: "none", md: "1px solid grey" },
          }}
        >
          <Typography variant="caption" component="h6">
            IP ADDRESS
          </Typography>
          <Typography variant="h5">{ipData.ipData.ip}</Typography>
        </Grid2>
        <Grid2
          xs={12}
          md={3}
          sx={{
            textAlign: { xs: "center", md: "start" },
            borderRight: { xs: "none", md: "1px solid grey" },
          }}
        >
          <Typography variant="caption" component="h6">
            LOCATION
          </Typography>
          <Typography variant="h5">
            {ipData.ipData.location.city}, {ipData.ipData.location.region}{" "}
            {ipData.ipData.location.postalCode}{" "}
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          md={3}
          sx={{
            textAlign: { xs: "center", md: "start" },
            borderRight: { xs: "none", md: "1px solid grey" },
          }}
        >
          <Typography variant="caption" component="h6">
            TIMEZONE
          </Typography>
          <Typography variant="h5">
            UTC {ipData.ipData.location.timezone}
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={3} sx={{ textAlign: { xs: "center", md: "start" } }}>
          <Typography variant="caption" component="h6">
            ISP
          </Typography>
          <Typography variant="h5">{ipData.ipData.isp}</Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Description;
