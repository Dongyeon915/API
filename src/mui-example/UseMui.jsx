import React, {useState} from "react";
import {
  Avatar,
  Badge,
  Chip,
  Collapse,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import {ExpandLess, ExpandMore, GitHub, StarBorder} from "@mui/icons-material";

function useMui() {

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <Container sx={{backgroundColor:"gray"}} maxWidth={"xl"}>
        <Grid2>
        </Grid2>
        <Container sx={{backgroundColor: "red"}} maxWidth={"lg"}>
          <Grid2 container={true} sx={{backgroundColor: "blue"}}
                justifyContent={"center"}>
          <Stack direction={"row"} spacing={4} sx={{backgroundColor: "yellow"}}>
            <Avatar
                alt="남자"
                srcSet="https://post-phinf.pstatic.net/MjAxNzA0MjRfMjE4/MDAxNDkzMDI0ODc5MTky.BipG0xZx9Mhoj3wZClY8RxwTcOwkGR8QPxJLt8kMzZ4g.LGY-PuxFDEye0w2j6Qz84cEvTPwWQ9Vr8b9swYj_sfEg.JPEG/f6d988da37f59dbc41dd542ec541bb5a.jpg?type=w1200"
                sx={{width: 50, height: 50}}
            />
            <Avatar
                alt="남자"
                srcSet="https://post-phinf.pstatic.net/MjAxNzA0MjRfMjE4/MDAxNDkzMDI0ODc5MTky.BipG0xZx9Mhoj3wZClY8RxwTcOwkGR8QPxJLt8kMzZ4g.LGY-PuxFDEye0w2j6Qz84cEvTPwWQ9Vr8b9swYj_sfEg.JPEG/f6d988da37f59dbc41dd542ec541bb5a.jpg?type=w1200"
                sx={{width: 50, height: 50}}
            />
            <Avatar alt="남자" sx={{width: 50, height: 50}}>
              <AddReactionIcon width={6}/>
            </Avatar>
          </Stack>
        </Grid2>
          <Grid2 container={true} sx={{backgroundColor: "pink"}}>
          <Badge badgeContent={6}>
            <GitHub/>
          </Badge>
        </Grid2>
          <Grid2 container={true} sx={{backgroundColor: "purple"}}>
          <Chip label="Chip Filled" icon={<GitHub/>}
                sx={{backgroundColor: "white"}}
                component="a"
                href={"https://mui.com/material-ui/react-chip/"}
          >
          </Chip>
        </Grid2>
          <List>
          <ListItem>
            <ListItemButton>
              <ListItem>
                버튼태그 안은 버튼 기능이 들어감
              </ListItem>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItemButton onClick={handleClick}>
            <ListItem>
              Trash
            </ListItem>
            {open ? <ExpandMore/> : <ExpandLess/>}
          </ListItemButton>
          <Collapse in={open}>
            <List component="div" disablePadding>
              <ListItemButton sx={{pl: 4}}>
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText primary="접기"/>
              </ListItemButton>
            </List>
          </Collapse>
          <Divider/>
          <ListItemButton component={"a"}
                          href={"https://www.youtube.com/watch?v=ddbm1wbs-ew"}>
            <ListItem>
              <p>버튼의 component속성을 a로 줄수있따</p>
              <GitHub/>
            </ListItem>
          </ListItemButton>
        </List>
        </Container>
      </Container>
  )
}

export default useMui