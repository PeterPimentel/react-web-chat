import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function RestrictedRoute ({component: Component, logged, ...rest}) {
	console.log("LOGGED",logged)
	return (<Route {...rest} render={
		props => logged ? 
			<Component {...props}/> : <Redirect to='/signin' /> 
	}/>)
}