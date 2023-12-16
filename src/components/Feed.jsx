import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromApi } from "../util/fetchFromApi";

const Feed = () => {
  // calling the API when feed loads
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videosArray, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    // for mobile phones the direction becomes column and medium devices and larger get row flex direction
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        {/* Sidebar code in components */}
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#FC1503" }}> Provoke Developer Pvt. Ltd.</span>
        </Typography>

        {/* Videos section code is in Components */}
        <Videos videos={videosArray} />
      </Box>
    </Stack>
  );
};

export default Feed;
