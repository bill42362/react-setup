// About.jsx
import React from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom';

const About = () => {
  return <div className='main'>
    About
    <nav className='about-nav'>
      <ul>
        <li><Link to='/about/you'>You</Link></li>
        <li><Link to='/about/me'>Me</Link></li>
      </ul>
    </nav>
    <div className='about-body'>
      <Switch>
        <Route path='/about/you' render={() => <div>About You</div>}/>
        <Route path='/about/me' render={() => <div>About Me</div>}/>
        <Redirect from='/about' to='/about/me'/>
      </Switch>
    </div>
  </div>;
};

About.propTypes = {
};

export default About;
