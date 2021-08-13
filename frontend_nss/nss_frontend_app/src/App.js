import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuestionDetail from "./components/QuestionDetail";
import QuestionList from "./components/QuestionList";

const App = () => (
	<Router>
    <Switch>
      <Route exact path="/questions/" component={QuestionList}></Route>
      <Route exact path="/question/:pk" component={QuestionDetail}></Route>
    </Switch>
	</Router>
);

export default App;
