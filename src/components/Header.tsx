import React from "react";
import cageman from "../assets/cageman_white.png";
import { GlobalStyles, Grid, Link } from "@mui/material";

function Header() {
  return (
    <>

      <Grid
        container
        sx={{ minWidth: '100vw' }}
        p={6}
        // justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item xs={8}  alignItems={"center"}>
          <img src={cageman} width={200} alt="Logo" />
        </Grid>
        <Grid item xs={4} >
          <Link href="#" sx={{ margin: 5 }}>
            Home
          </Link>
          <Link href="#" sx={{ margin: 5 }}>
            Listen
          </Link>
          <Link href="#" sx={{ margin: 5 }}>
            Contact
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
