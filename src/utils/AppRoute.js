import React from 'react';
import { Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  metamask: Metamask,
  ...rest
  
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  return (
    <Route
    {...rest}
      
      render={props => {
      return (
        <Layout metamask={Metamask}>
          <Component metamask={Metamask} 
          {...props} />
        </Layout>
      )}
    
    } />
  );
}

export default AppRoute;