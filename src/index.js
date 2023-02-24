import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavComp from "./project/NavComp";
import {Container} from "@mui/material";
import ContentComp from "./project/ContentComp";
import Grid2 from "@mui/material/Unstable_Grid2";
import gitJson from "./project/useContext/UseGitComp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Container disableGutters={true} maxWidth={100}
                 sx={{backgroundColor: "aqua"}}>
        <Grid2 container={true}>
          <NavComp/>
          <ContentComp props={gitJson}/>
        </Grid2>
      </Container>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
