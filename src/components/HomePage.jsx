  import * as React from "react";
  import { Button, Typography, Container } from "@mui/material";
  import { Link } from "react-router-dom";

  export default function HomePage() {
   
    return (
      <Container  sx={{ mt: "75vh" }}>
        <Typography variant="h4" fontWeight={550}>
          Welcome to PopX
        </Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur
          <br />
          adipisicing elit. Blanditiis maxime
        </p>

        <Link to="/signup">
          <Button
            sx={{ textTransform: "none", bgcolor: "#5D3FD3", m: "5px 0 5px" ,
            '&:hover': {
              bgcolor: "#5D3FD3" // Keep the same color on hover
            } }}
            variant="contained"
            fullWidth={true}
          >
            Create Account
          </Button>
        </Link>

        <Link to="/signin">
          <Button
            sx={{ textTransform: "none", bgcolor: "#C3B1E1",
            '&:hover': {
              bgcolor: "#5D3FD3" // Keep the same color on hover
            }}}
            variant="contained"
            fullWidth={true}
          >
            Already Registered?Login
          </Button>
        </Link>
      </Container>
    );
  }
