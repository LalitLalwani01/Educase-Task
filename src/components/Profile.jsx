import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Profile = () => {
  let candidateName = "Marry Doe";
  let candidateEmail = "Marry@gmail.com";

  return (
    <Container>
      <Card variant="outlined" sx={{ borderBottomStyle: "dashed" }}>
        <Box fontSize={30} m={2} fontWeight={540} fontFamily={"sans-serif"}>
          Account Settings
        </Box>

        <Grid container direction="column" backgroundColor="#FAF9F6">
          <Grid item sx={{ p: "1.5rem 0rem" }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <PhotoCameraIcon
                  sx={{
                    border: "5px solid white",
                    backgroundColor: "#5D3FD3",
                    color: "white",
                    boxSizing: "inherit",
                    borderRadius: "50%",
                    padding: ".2rem",
                    width: 35,
                    height: 35,
                  }}
                />
              }
            >
              <Avatar
                sx={{ width: 100, height: 100, mb: 1.5 }}
                src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
              />
            </Badge>
            <Typography variant="h6" sx={{ ml: 15, mt: -14, fontWeight: 550 }}>
              {candidateName}
            </Typography>
            <Typography variant="h6" sx={{ ml: 15, mt: 0 }}>
              {candidateEmail}
            </Typography>
          </Grid>
          <Typography mt={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptates ducimus sed odit totam perferendis pariatur ab eligendi
            aliquid quasi sequi voluptate, excepturi adipisci, earum cupiditate
            facilis quae. Amet, provident?
          </Typography>
        </Grid>
      </Card>
    </Container>
  );
};

export default Profile;
