import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default function RestrictedRoute ({component: Component, logged, ...rest}) {
	return (<Route {...rest} render={
		props => logged ? 
			<Component {...props}/> : <Redirect to='/signin' /> 
	}/>)
}