import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import { useNavigate } from "react-router-dom";

//const settings = ["Logout"];

const Navbar = () => {
  //const navigate = useNavigate();
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  /*const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSetting = (event) => {
    switch (event.currentTarget.innerText) {
      case "Profile":
        console.log("Profile");
        break;
      case "Logout":
        navigate("/");
        console.log("Logout");
        break;
      default:
        console.log("Default");
        handleCloseUserMenu();
    }
  };
*/
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: "Helvetica",
              fontWeight: 700,
              color: "inherit",
              textAlign: 'center',
              textDecoration: "none",
            }}
          >
            Voterboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
