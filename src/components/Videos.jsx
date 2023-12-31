import { Stack, Box } from "@mui/material";
import { VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  // console.log(videos)
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>{item?.id?.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
