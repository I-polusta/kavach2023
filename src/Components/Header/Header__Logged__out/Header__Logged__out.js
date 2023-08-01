import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./header__logged__out.css";
import { Link } from "react-router-dom";
function Header__Logged__out() {
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#0001060e", border: "none", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">LOGO</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header__Logged__out;
