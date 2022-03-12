import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _afe5d634 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _2e9089ce = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _25b951ba = () => interopDefault(import('..\\pages\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog-left-sidebar" */))
const _202bc8b7 = () => interopDefault(import('..\\pages\\blog-right-sidebar.vue' /* webpackChunkName: "pages/blog-right-sidebar" */))
const _43b41f48 = () => interopDefault(import('..\\pages\\case-details.vue' /* webpackChunkName: "pages/case-details" */))
const _48cf708e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _b643d67a = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _707620aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _afe5d634,
    name: "about"
  }, {
    path: "/blog-details",
    component: _2e9089ce,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar",
    component: _25b951ba,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _202bc8b7,
    name: "blog-right-sidebar"
  }, {
    path: "/case-details",
    component: _43b41f48,
    name: "case-details"
  }, {
    path: "/contact",
    component: _48cf708e,
    name: "contact"
  }, {
    path: "/service-details",
    component: _b643d67a,
    name: "service-details"
  }, {
    path: "/",
    component: _707620aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
