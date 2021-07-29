import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateProjectForm from "../components/CreateProjectForm";
import EditProjectForm from "../components/EditProjectForm";
import ViewProjects from "../components/ViewProjects";


const AppRouter = () => {
    return (
        <Router>
      <div>
        
        <Switch>
          <Route exact path="/" component={ViewProjects} />
          <Route exact path="/addproject" component={CreateProjectForm} />
          <Route exact path="/editproject" component={EditProjectForm} />
        </Switch>
      </div>
    </Router>
    )
}

export default AppRouter
