import React, {useContext} from "react";
import {Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function ContentComp({props}) {
  const gitData = useContext(props)
  return (
      <Grid2 container={true}>
        <Stack direction={"row"}>
          <Card>
            <CardContent sx={{width: 1000}}>
              <Typography sx={{fontSize: 14}} color="text.secondary"
                          gutterBottom>
                {gitData.map(data => {
                  return (
                      <div>
                        <p>{data.titleName}</p>
                        <p>{data.projectsContent}</p>
                      </div>
                  )
                })}
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </Stack>
      </Grid2>
  )
}

export default ContentComp