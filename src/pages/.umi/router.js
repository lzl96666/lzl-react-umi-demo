import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/login',
    component: require('../login/login').default,
    exact: true,
  },
  {
    path: '/other',
    component: require('../../layout/otherView').default,
    routes: [
      {
        path: '/other',
        component: require('../goods/index').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/Desktop/WEB前端/react/react-umi-test/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: require('../../layout/indexView').default,
    routes: [
      {
        path: '/',
        component: require('../goods/index').default,
        exact: true,
      },
      {
        path: '/users',
        component: require('../users/_layout').default,
        routes: [
          {
            path: '/users',
            component: require('../users/index').default,
            exact: true,
          },
          {
            path: '/users/:id',
            component: require('../users/$id').default,
            exact: true,
          },
          {
            component: require('../NotFound').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('D:/Desktop/WEB前端/react/react-umi-test/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/about',
        component: require('../about/about').default,
        Routes: [require('../../../routes/PrivateRoute.js').default],
        exact: true,
      },
      {
        component: require('../NotFound').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('D:/Desktop/WEB前端/react/react-umi-test/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('D:/Desktop/WEB前端/react/react-umi-test/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
