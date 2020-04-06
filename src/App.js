import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
    this.initAnalytics();    
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
      this.initAnalytics();  
    }
  }

  initAnalytics = () => {
    // Initialize google analytics page view tracking
    ReactGA.initialize(process.env.REACT_APP_GA_CODE);
    ReactGA.set({ page: this.props.location.pathname }); // Update the user's current page
    ReactGA.pageview(this.props.location.pathname); // Record a pageview for the given page        
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);