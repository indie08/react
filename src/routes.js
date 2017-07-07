//Dependencies 
import React from 'react';
import {Route,Switch} from 'react-router-dom';

//Components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
//YA no sera component import Home from './components/Home';
import Page404 from './components/Page404';

//container
import Home from './containers/Home';

const AppRoutes = () =>
<App>
	<Switch>

		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/" component={Home}/>
		<Route  component={Page404}/>
	
	</Switch>

</App>
export default AppRoutes;
