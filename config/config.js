import path from 'path'

export default {
  routes: [
    {
      path: '/login',
      component: './login/login'
    },
    {
      path: '/other',
      component: '../layout/otherView',
      routes: [
        {
          path: '/other',
          component: './goods/index'
        }
      ]
    },
    {
      path: '/',
      component: '../layout/indexView',
      routes: [
        {
          path: '/',
          component: './goods/index'
        },
        {
          path: '/users',
          component: './users/_layout',
          routes: [
            {
              path: '/users',
              component: './users/index'
            },
            {
              path: '/users/:id',
              component: './users/$id'
            },
            {
              component: './NotFound'
            }
          ]
        },
        {
          path: '/about',
          component: './about/about',
          Routes: ['./routes/PrivateRoute.js']
        },
        {
          component: './NotFound'
        }
      ]
    }
  ],
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true
      }
    ]
  ],
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}
