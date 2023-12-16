import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../util/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { md: 280, sx: "100%" }, borderRadius: 2 }}>
      <Link to={videoId ? `/video/${videoId}` : ""}>
        <CardMedia
          image={snippet.thumbnails.high.url}
          alt={snippet?.title}
          sx={{ width: "100%", height: 180 }}
        />
      </Link>
      {console.log(snippet)}
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 90 }}>
        {/* For video title */}
        <Link to={videoId ? `/video/${videoId}` : ""}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet.title.slice(0, 60)}
          </Typography>
        </Link>

        {/* For channel name */}
        <Link
          to={snippet.channelId ? `/channel/${snippet?.channelId}` : ""}
        ></Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
