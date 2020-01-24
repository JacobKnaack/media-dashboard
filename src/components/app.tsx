import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/index.scss';

import Upload from './uploadForm';
import MediaList from './mediaList';
import Layout from './layout';
import Menu from './layout/menu';
import Auth from './auth';

const store = configureStore();

export default () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Layout
							menu={<Menu />}
							columns={[
								{title: 'Upload File', component: <Upload />},
								{title: 'My Media', component: <MediaList/>},
							]}
						/>
					</Route>
					<Route exact path="/auth">
						<Auth />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

