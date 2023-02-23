import React from "react";
import {AppBar, Box, IconButton, Stack} from "@mui/material";
import {GitHub} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";

function headerBar() {
  return (
      <Box>
        <AppBar position="static" >
          <Stack direction={"row"}>
            <IconButton edge={"start"}>
              <GitHub sx={{width:50,height:50}}/>
            </IconButton>
            <IconButton edge={"end"}>
              <GitHub sx={{width:50,height:50}}/>
            </IconButton>
          </Stack>
        </AppBar>
      </Box>
  )
}
export default headerBar