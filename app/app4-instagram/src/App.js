import React from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import FeedPage from './pages/feed';
import ExplorePage from './pages/explore';
import ProfilePage from './pages/profile';
import PostPage from './pages/post';
import EditProfilePage from './pages/edit-profile';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import NotFoundPage from './pages/not-found';
import PostModal from './components/post/PostModal';

function App() {
  const history = useHistory();
  const location = useLocation();
  const prevLocation = React.useRef(location);
  const modal = location.state?.modal;

  React.useEffect(() => {
    if (history.action !== 'POP' && !modal) {
      prevLocation.current = location;
    }
  }, [location, modal]);

  const isModalOpen = modal && prevLocation.current !== location;

  return (
    <>
      <Switch location={isModalOpen ? prevLocation.current : location}>
        <Route exact path="/" component={FeedPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route exact path="/p/:postId" component={PostPage} />
        <Route path="/accounts/edit" component={EditProfilePage} />
        <Route path="/accounts/login" component={LoginPage} />
        <Route path="/accounts/emailsignup" component={SignUpPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      {isModalOpen && <Route exact path="/p/:postId" component={PostModal} />}
    </>
  );
}

export default App;
