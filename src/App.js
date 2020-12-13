import Homepage from "../src/pages/Homepage.js";
import './App.css';
import { Route } from "react-router-dom";
import UserProfilePage from '../src/pages/UserProfilePage.js';
import NaviBar from '../src/components/NaviBar.js';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import MyProfilePage from "./pages/MyProfilePage.js"
import UploadPage from './pages/UploadPage.js';

function App() {
  /** 
   * The default boolean for loggedIn state would be
   * determined by whether JWT exists in localStorage
  */
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('jwt') !== null
  );

  return (
    <div>
      <NaviBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      {/* onClick={() => {
          setIsLogin(true) */}
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
      <Route exact path="/profile">
        <MyProfilePage />
      </Route>
      <Route exact path="/upload" component={UploadPage}></Route>
      <ToastContainer />
    </div>
  )
}

export default App;



/* <div className="App">
darkblue is to pass in, lightblue is to receive
<Homepage users={users} isLoading={isLoading} />
</div> */
