import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./watchlist.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Chip } from "@mui/material";
import StarRatings from "react-star-ratings";

const baseURL = "http://10.20.7.109:8000/api/watchlist/";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(row);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>{row.id}</TableCell>
        <TableCell align="center">{row.transaction.transactionHash}</TableCell>
        <TableCell align="center"> {row.transaction.type}</TableCell>
        <TableCell align="center">{row.transaction.time}</TableCell>

        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 2,
                backgroundColor: "#323c4c",
                borderRadius: "16px",
                padding: "16px",
                border: 4,
                borderColor: "#5E6E8B",
              }}
            >
              <div className="collapseContainer">
                <h1 className="cc__heading">Coin :</h1>
                <h1 className="cc__subheading">{row.transaction.type}</h1>
              </div>
              <div className="collapseContainer">
                <h1 className="cc__heading">Address :</h1>
                <h1 className="cc__subheading">
                  {row.transaction.transactionHash}
                </h1>
              </div>

              <div
                className="collapseContainer"
                style={{ justifyContent: "center" }}
              >
                <img src={row.transaction.logo} style={{ width: "20%" }} />
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function WatchlistTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "#020a18" }}>
      <Table aria-label="collapsible table" style={{ fontSize: "30px" }}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Coin</TableCell>
            <TableCell align="center">Time</TableCell>

            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WatchlistTable;
