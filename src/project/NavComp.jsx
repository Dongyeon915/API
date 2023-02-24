import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import {Css, Html, Javascript} from "@mui/icons-material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Filter1Icon from '@mui/icons-material/Filter1';

function navComp() {
  return (
      // <Container sx={{backgroundColor: "aqua"}} maxWidth={"100%"}
      //            disableGutters={true}>
      <Box sx={{backgroundColor: "pink"}} width={"fit-content"}>
        <Grid2 container={true} sx={{backgroundColor: "blue"}} xl={12}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={"a"}
                              href={"https://github.com/Dongyeon915/Hollys-Project"}>
                <ListItemIcon>
                  <Javascript/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={"h6"}>
                    JavaScript
                  </Typography>
                </ListItemText>
              </ListItemButton>
              <ListItemIcon>
                <Filter1Icon/>
              </ListItemIcon>
            </ListItem>
            <Divider variant={"inset"}/>
          </List>
        </Grid2>
        <Grid2 container={true} sx={{backgroundColor: "red"}} xl={12}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={"a"}
                              href={"https://github.com/Dongyeon915/Hollys-Project"}>
                <ListItemIcon>
                  <Javascript/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={"h6"}>
                    Java
                  </Typography>
                </ListItemText>
              </ListItemButton>
              <ListItemIcon>
                <Filter1Icon/>
              </ListItemIcon>
            </ListItem>
            <Divider variant={"inset"}/>
          </List>
        </Grid2>
        <Grid2 container={true} sx={{backgroundColor: "yellow"}} xl={12}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={"a"}
                              href={"https://github.com/Dongyeon915/Hollys-Project"}>
                <ListItemIcon>
                  <Css/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={"h6"}>
                    React
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider variant={"inset"}/>
          </List>
        </Grid2>
        <Grid2 container={true} sx={{backgroundColor: "green"}} xl={12}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={"a"}
                              href={"https://github.com/Dongyeon915/Hollys-Project"}>
                <ListItemIcon>
                  <Html/>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={"h6"}>
                    Html-Css
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider variant={"inset"}/>
          </List>
        </Grid2>
      </Box>
      // </Container>
  )

}

export default navComp