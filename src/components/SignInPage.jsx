import React from "react";
import { Box, Button } from "@mui/material";

const SignInPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement authentication logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="heading">
        <h1>
          Sign in to your <br />
          PopX account
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, <br /> elit. Nulla iusto
          ducimus consequatur,
        </p>
      </Box>
      <Box className="group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          required
        />
      </Box>
      <Box className="group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          required
        />
      </Box>
      <Button
        type="submit"
        sx={{
          textTransform: "none",
          bgcolor: "#C3B1E1",
          "&:hover": {
            bgcolor: "#5D3FD3",
          },
        }}
        variant="contained"
        fullWidth
      >
        Login
      </Button>
    </form>
  );
};

export default SignInPage;
