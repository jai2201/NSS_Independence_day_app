import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CorrectResponse from "./components/CorrectResponse";
import QuestionDetail from "./components/QuestionDetail";
import QuestionList from "./components/QuestionList";
import WrongResponse from "./components/WrongResponse";

const App = () => (
	<Router>
    <Switch>
      <Route exact path="/questions/" component={QuestionList}></Route>
      <Route exact path="/question/:pk/" component={QuestionDetail}></Route>
      <Route exact path="/correct/" component={CorrectResponse}></Route>
      <Route exact path="/wrong/" component={WrongResponse}></Route>
    </Switch>
	</Router>
);

export default App;
