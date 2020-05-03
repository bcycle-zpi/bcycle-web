import React from "react";
import "./App.scss";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import GroupTripInfo from "../group-trip-info/GroupTripInfo";
import { Route, Switch } from "react-router";
import NotFound from "../not-found/NotFound";
import TripInfo from "../trip-info/TripInfo";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar id="toolbar">
          <Typography id="app-name" variant="h5">
            BCycle
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Switch>
          <Route path={'/group-trip/:childTripId'}>
            <GroupTripInfo />
          </Route>
          <Route path={'/trip/:tripId'}>
            <TripInfo />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
