import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { startLogout } from './actions/userActions';
import { CartScreen } from './screens/CartScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProductScreen } from './screens/ProductScreen';
import { SigninScreeen } from './screens/SigninScreeen';

function App() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);
    const { userInfo } = useSelector(state => state.userAuth);

    const handleSignout = () => {
        dispatch( startLogout() )
    }
    

  return (
      <Router>
          <div className="grid-container">
              <header className="row">
                  <div>
                      <Link className="brand" to="/">
                          amazona
                      </Link>
                  </div>
                  <div>
                      <Link to="/card">
                          Cart
                          {cartItems.length > 0 && (
                              <span className="badge">{cartItems.length}</span>
                          )}
                      </Link>

                      {userInfo ? (
                          <div className="dropdown">
                              <Link to="#">
                                  {userInfo.name}{" "}
                                  <i className="fa fa-caret-down"></i>
                              </Link>

                              <ul className="dropdown-content">
                                  <Link to="#signout" onClick={ handleSignout }>
                                      Sign Out
                                  </Link>
                              </ul>
                          </div>
                      ) : (
                          <Link to="/signin">Sign In</Link>
                      )}
                  </div>
              </header>

              <main>
                  <Route exact path="/card/:id?" component={CartScreen} />
                  <Route exact path="/product/:id" component={ProductScreen} />
                  <Route exact path="/signin" component={SigninScreeen} />
                  <Route exact path="/" component={HomeScreen} />
              </main>

              <footer className="row center">All right reserved</footer>
          </div>
      </Router>
  );
}

export default App;
