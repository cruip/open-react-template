import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

class App extends React.Component {

  componentDidMount() {
    const page = this.props.location.pathname;
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
    trackPage(page); 
  }

  // Route change
  componentDidUpdate(prevProps) {
    const currentPage = prevProps.location.pathname + prevProps.location.search;
    const nextPage = this.props.location.pathname + this.props.location.search;    
    if (currentPage !== nextPage) {
      this.refs.scrollReveal.init();
      trackPage(nextPage);
    }
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