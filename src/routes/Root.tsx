import { Box, Button, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { routes } from "./routes";

export function Root() {

  return (
    <>
      <Box
        id="navbar"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="50px"
        mb={3}
        bgcolor="#ECEFF1"
      >
        <Typography>LeadSales Typescript app!</Typography>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Button>
            <Link to={routes.home}>Home page</Link>
          </Button>
          <Button>
            <Link to={routes.addFile}>Add csv</Link>
          </Button>
        </Box>
      </Box>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}