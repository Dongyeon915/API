import React, {useRef, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Button, Container, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function MuiApiComp() {
  const [state, setState] = useState({
    inputValue: null
  });

  const inputRef = useRef();

  const inputEvent = () => {
   console.log(state.inputValue)
  }

  return (
      <Container fixed={true} sx={{backgroundColor: "red"}}>
        <Grid2 container={true} spacing={5} sx={{backgroundColor:"green"}}>
          <Grid2 container={true} sx={{backgroundColor: "pink"}}>
            <Grid2 container={true}>
              <TextField label={"여기에 내용을 적어라"} color={"secondary"}
                         onChange={(e) => {
                           setState(e.target.value)
                           console.log(e.target.value)
                         }
                         }/>
              <Button
                  variant="contained"
                  endIcon={<SendIcon/>}
                  size={"small"}
                  onClick={inputEvent}
              >
                전송
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
  )
}