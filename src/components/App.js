import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and Routes

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Router>
      {" "}
      {/* Wrap your components with the Router */}
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {props.loading === true ? null : (
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tweet/:id" element={<TweetPage />} />
              <Route path="/new" element={<NewTweet />} />
            </Routes>
          )}
        </div>
      </Fragment>
    </Router>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});
export default connect(mapStateToProps)(App);
