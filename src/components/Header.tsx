import React from "react";
import cageman from "../assets/cageman_white.png";
import { GlobalStyles, Grid, Link } from "@mui/material";

function Header() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { margin: 0, padding: 0, maxWidth: 0 },
          html: { margin: 0, padding: 0 },
        }}
      />
      <Grid
        container
        sx={{ width: "100%" }}
        // justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item xs={10} container alignItems={"center"}>
          <img src={cageman} width={200} alt="Logo" />
        </Grid>
        <Grid item xs={2} container>
          <Link href="#" sx={{ margin: 1 }}>
            Home
          </Link>
          <Link href="#" sx={{ margin: 1 }}>
            Listen
          </Link>
          <Link href="#" sx={{ margin: 1 }}>
            Contact
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
