import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import LatestPhotos from "./LatestPhotos";
import People from "./People"

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} width="200px">
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
        Latest Photos
        </Typography>
        <LatestPhotos />
        <Typography variant="h6" fontWeight={100}>
          Latest Conversations
        </Typography>
        <People />
      </Box>
    </Box>
  );
};

export default Rightbar;
