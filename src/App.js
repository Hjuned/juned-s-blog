import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* navbar will show on eveyr page as it is above the switch and inside the router */}
        <Navbar />
        <div className="content">
          {/* Add switch to prevent multiple pages from loading if paths are matched because it will keep trying to meet every match- only one route component is shown at any time */}
          <Switch>
            {/* if you dont add the 'exact' attribute then react will go to the first match it finds if it includes whatevr is inside the path */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// terminal cmd to use react router
// npm install react-router-dom@5