import Description from "./description";
import WeightCondition from "./weightCondition";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Judgement(): React.ReactElement {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link href="/description">
              <a>(1) 사건개요 </a>
            </Link>
          </li>
          <li>
            <Link href="/weightCondition">
              <a>(2) 양형조건 </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>(3) 사건 심리 </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>(4) 가중/감경 </a>
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/description">
            <Description />
          </Route>
          <Route path="/weightCondition">
            <WeightCondition />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Judgement;
