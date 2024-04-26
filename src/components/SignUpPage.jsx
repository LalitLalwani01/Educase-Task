import React from "react";
import {
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const SignUpPage = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h3" fontWeight={550} mt={5}>
          Create your <br />
          PopX account
        </Typography>
      </Box>
      <Box className="group" mt={3}>
        <label htmlFor="fullName">
          Full Name <label>*</label>
        </label>
        <input type="text" id="fullName" placeholder="Mary Doe" className="" />
      </Box>
      <Box className="group">
        <label htmlFor="phoneNumber">
          Phone Number <label>*</label>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="123-456-7890"
        />
      </Box>
      <Box className="group">
        <label htmlFor="email">
          Email address <label>*</label>
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@example.com"
        />
      </Box>
      <Box className="group">
        <label htmlFor="password">
          Password <label>*</label>
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
        />
      </Box>
      <Box className="group">
        <label htmlFor="companyName">
          Company name <label>*</label>
        </label>
        <input
          type="text"
          id="companyName"
          placeholder="Company Name"
        />
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1" fontWeight={500}>
          Are you an agency? <span style={{ color: 'red' }}>*</span>
        </Typography>
        <RadioGroup name="agency" defaultValue="no">
          <Box display="flex" flexDirection="row">
            <FormControlLabel
              value="yes"
              control={<Radio sx={{ color: "#5D3FD3" ,'& .MuiSvgIcon-root': { color: '#5D3FD3' }  }} />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio sx={{ color: "#5D3FD3" ,'& .MuiSvgIcon-root': { color: '#5D3FD3' } }} />}
              label="No"
            />
          </Box>
        </RadioGroup>
      </Box>
      <Link to="/profile">
      <Button
        sx={{
          textTransform: "none",
          bgcolor: "#5D3FD3",
          color: "white",
          mt: 3,
          "&:hover": {
            bgcolor: "#5D3FD3",
          },
        }}
        variant="contained"
        fullWidth
      >
        Create Account
      </Button>
      </Link>
    </Container>
  );
};

export default SignUpPage;
