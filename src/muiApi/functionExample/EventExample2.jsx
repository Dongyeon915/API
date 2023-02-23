import React, {useRef, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia, Container,
  Stack,
  Typography
} from "@mui/material";

export default function EventExample2() {
  const [state, setState] = useState({
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScf924tR1X26_4XO9jemFH2z7jJBxVsdPXrA&usqp=CAU"
  })
  const ChImg = useRef()

  // useEffec(()=>{
  //   async const eventAl = () => {
  //
  //     return (
  //         alert("개구리 먹음")
  //     )
  //   }
  // },[state.img])

  const changImgEvent = (e) => {
    setTimeout((e) => {
      setState((prevState) => {
        return {
          ...prevState,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLMlWki-Juw4vfEfHLbMc5ROJoX-KWhU5h2A&usqp=CAU"
        }
      })
    }, 2000)
  }

  return (
      <Container fixed={true} sx={{backgroundColor:"red"}}>
        <Grid2 container={true} sx={{backgroundColor: "pink"}}
             justifyContent={"center"} spacing={2}>
          <Stack xs={4} direction={"row"} spacing={3}>
            <Card sx={{maxWidth: 500}}>
            <CardMedia
                ref={ChImg}
                sx={{height: 200, width: 300}}
                image={state.img}
                title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                개구리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                개구리 설명
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={changImgEvent}>chang</Button>
              {/*<Box sx={{ display: 'flex' }}>*/}
              {/*  <CircularProgress disableShrink={false} hidden={true}/>*/}
              {/*</Box>*/}
            </CardActions>
          </Card>
            <Card sx={{maxWidth: 500}}>
            <CardMedia
                ref={ChImg}
                sx={{height: 200, width: 300}}
                image={state.img}
                title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                개구리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                개구리 설명
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={changImgEvent}>chang</Button>
              {/*<Box sx={{ display: 'flex' }}>*/}
              {/*  <CircularProgress disableShrink={false} hidden={true}/>*/}
              {/*</Box>*/}
            </CardActions>
          </Card>
           <Card sx={{maxWidth: 500}}>
            <CardMedia
                ref={ChImg}
                sx={{height: 200, width: 300}}
                image={state.img}
                title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                개구리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                개구리 설명
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={changImgEvent}>chang</Button>
              {/*<Box sx={{ display: 'flex' }}>*/}
              {/*  <CircularProgress disableShrink={false} hidden={true}/>*/}
              {/*</Box>*/}
            </CardActions>
          </Card>
          </Stack>
          <Stack xs={4} direction={"row"} spacing={3}>
            <Card sx={{maxWidth: 500}}>
            <CardMedia
                ref={ChImg}
                sx={{height: 200, width: 300}}
                image={state.img}
                title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                개구리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                개구리 설명
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={changImgEvent}>chang</Button>
              {/*<Box sx={{ display: 'flex' }}>*/}
              {/*  <CircularProgress disableShrink={false} hidden={true}/>*/}
              {/*</Box>*/}
            </CardActions>
          </Card>
            <Card sx={{maxWidth: 500}}>
            <CardMedia
                ref={ChImg}
                sx={{height: 200, width: 300}}
                image={state.img}
                title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                개구리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                개구리 설명
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={changImgEvent}>chang</Button>
              {/*<Box sx={{ display: 'flex' }}>*/}
              {/*  <CircularProgress disableShrink={false} hidden={true}/>*/}
              {/*</Box>*/}
            </CardActions>
          </Card>
            <Card sx={{maxWidth: 500}}>
            <CardMedia
                ref={ChImg}
                sx={{height: 200, width: 300}}
                image={state.img}
                title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                개구리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                개구리 설명
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={changImgEvent}>chang</Button>
              {/*<Box sx={{ display: 'flex' }}>*/}
              {/*  <CircularProgress disableShrink={false} hidden={true}/>*/}
              {/*</Box>*/}
            </CardActions>
          </Card>
          </Stack>
        </Grid2>
      </Container>
  )
}