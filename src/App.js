import Homepage from "../src/pages/Homepage.js";
import './App.css';
import { Route } from "react-router-dom";
import UserProfilePage from '../src/pages/UserProfilePage.js';
import NaviBar from '../src/components/NaviBar.js';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <NaviBar />

      {/* <Link to="/">Home</Link> */}
      {/* We temporarily hardcode this to user id 1 */}
      {/* <Link to="/profile">My Profile</Link> */}

      <Route exact path="/">
        <Homepage />
        {/* <Homepage users={users}></Homepage> */}
      </Route>
      <Route path="/profile/:id">
        <UserProfilePage></UserProfilePage>
      </Route>
      <Route path="/users">
        <Homepage />
      </Route>
      <ToastContainer />
    </div>
  )
}

export default App;



/* <div className="App">
darkblue is to pass in, lightblue is to receive
<Homepage users={users} isLoading={isLoading} />
</div> */
