import Description from "./Description";
import WeightCondition from "./WeightCondition";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//TODO: 유저가 어디 메뉴에 있는지에 대한 정보를 useState로 두기
//중괄호 [data]의 getStatic
function Judgement(): React.ReactElement {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/Description">
              <a>(1) 사건개요 </a>
            </Link>
          </li>
          <li>
            <Link to="/WeightCondition">
              <a>(2) 양형조건 </a>
            </Link>
          </li>
          <li>
            <Link to="">
              <a>(3) 사건 심리 </a>
            </Link>
          </li>
          <li>
            <Link to="">
              <a>(4) 가중/감경 </a>
            </Link>
          </li>
          <li>
            <Link to="">
              <a>(5) 판결 결과와 실제 형량 </a>
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/Description">
            <Description />
          </Route>
          <Route path="/WeightCondition">
            <WeightCondition />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Judgement;
