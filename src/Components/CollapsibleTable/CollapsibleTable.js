import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./collapsibleTable.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Backdrop, Button, Chip, CircularProgress } from "@mui/material";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const baseURL = "http://10.20.7.109:8000/api/social-media/";

function Row(props) {
  const { row } = props;
  const url = `http://10.20.7.109:8000/api/website-report/?url=${row.link}`;
  console.log(url);
  const [open, setOpen] = React.useState(false);
  const [bopen, setBopen] = React.useState(false);
  console.log(row);

  const handleReport = () => {
    setBopen(true);
    axios
      .get(url)
      .then((response) => {
        setBopen(false);
        console.log(response.data.url);
        window.open(response.data.url, "_blank");
      })
      .catch((error) => {
        console.log(error);
        setBopen(false);
        toast.error(" Try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const encodedurl = encodeURIComponent(row.link);
  console.log(encodedurl);
  const reurl = "https://www.chainabuse.com/domain/" + encodedurl;
  console.log(reurl);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <img src={row.logo} style={{ width: "25px" }} />
        </TableCell>
        <TableCell align="center">{row.social_media}</TableCell>
        <TableCell align="center">
          <Link to={reurl} target="blank">
            <Button variant="outlined">View Link</Button>
          </Link>
        </TableCell>
        <TableCell align="center">{row.latest_post_date}</TableCell>
        <TableCell align="center">
          {/* <Chip label={row.risk} style={{ background: "red" }} /> */}
          {row.risk === "High" && (
            <Chip
              label={row.risk}
              style={{ background: "red", width: "100px" }}
            />
          )}
          {row.risk === "moderate" && (
            <Chip
              label="Moderate"
              style={{ background: "#ffd700", width: "100px" }}
            />
          )}
          {row.risk === "Moderate" && (
            <Chip
              label="Moderate"
              style={{ background: "#ffd700", width: "100px" }}
            />
          )}
          {row.risk === "In Progress" && (
            <Chip
              label={row.risk}
              style={{ background: "#87CEEB", width: "100px" }}
            />
          )}
        </TableCell>
        <TableCell align="center">
          <StarRatings
            rating={parseFloat(row.account_rating)}
            numberOfStars={5}
            starRatedColor="yellow"
            starDimension="20px"
            starSpacing="5px"
          />
        </TableCell>
        <TableCell align="center">
          <Button variant="outlined" onClick={handleReport}>
            View Report
          </Button>
        </TableCell>
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
                <h1 className="cc__heading">First occurence :</h1>
                <h1 className="cc__subheading">{row.link}</h1>
              </div>
              <div className="collapseContainer">
                <h1 className="cc__heading">Account reached :</h1>
                <h1 className="cc__subheading">{row.account_reached}</h1>
              </div>
              <div className="collapseContainer">
                <h1 className="cc__heading">Post Ratings :</h1>
                <StarRatings
                  rating={parseFloat(row.account_rating)}
                  numberOfStars={5}
                  starRatedColor="yellow"
                  starDimension="18px"
                  starSpacing="5px"
                />
              </div>{" "}
              <div className="collapseContainer">
                <h1 className="cc__heading">Engagement :</h1>
                <h1 className="cc__subheading">{row.engagement}</h1>
              </div>
              <div className="collapseContainer">
                <h1 className="cc__heading">views :</h1>
                <h1 className="cc__subheading">{row.views}</h1>
              </div>
              <div className="collapseContainer">
                <h1 className="cc__heading">Profile Visited :</h1>
                <h1 className="cc__subheading">{row.profile_visited}</h1>
              </div>
              <div className="collapseContainer">
                <h1 className="cc__heading">Profile Summary :</h1>
                <h1 className="cc__subheading">{row.profile_summary}</h1>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={bopen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <TableContainer component={Paper} style={{ backgroundColor: "#020a18" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell align="center">Social Media</TableCell>
            <TableCell align="center">Link</TableCell>
            <TableCell align="center">Latest Post Date</TableCell>
            <TableCell align="center">Risk</TableCell>
            <TableCell align="center">Account Ratings</TableCell>
            <TableCell align="center">Actions</TableCell>
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
