import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';


function App() {
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log('is authenticated1', isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
