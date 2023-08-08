import React from "react";
import "./headerIn.css";
import { InputAdornment, TextField } from "@mui/material";
import { CurrencyBitcoinOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Header__Logged__in() {
  return (
    <div className="header__inContainer">
      <div className="header__heading">
<Link to="/dashboard" style={{textDecoration:'none'}}>Hi Akash,</Link>

      </div>
      <div className="header__textfield">
        <TextField
          id="outlined-basic"
          placeholder=" Enter your cryptocurrency address or entry"
          style={{ width: "750px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ height: "30px", width: "30px" }}
              >
                <CurrencyBitcoinOutlined style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default Header__Logged__in;
