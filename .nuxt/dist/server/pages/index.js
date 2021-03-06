exports.ids = [41,2,4,6,8,13,17,18,19,20,21,22,23,24,27,28,29,34];
exports.modules = {

/***/ 22:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=b686e654&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header header-area"},[_vm._ssrNode("<div class=\"header-top\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col col-lg-4 d-none d-lg-block\"><ul class=\"header-social-links d-flex flex-wrap align-items-center\"><li class=\"social-link-item\"><a href=\"#\" class=\"social-link\"><i class=\"icofont-facebook\"></i></a></li> <li class=\"social-link-item\"><a href=\"#\" class=\"social-link\"><i class=\"icofont-twitter\"></i></a></li> <li class=\"social-link-item\"><a href=\"#\" class=\"social-link\"><i class=\"icofont-skype\"></i></a></li> <li class=\"social-link-item\"><a href=\"#\" class=\"social-link\"><i class=\"icofont-linkedin\"></i></a></li></ul></div> <div class=\"col-12 col-md-6 col-lg-4 d-none d-md-block\"><p class=\"d-flex flex-wrap align-items-center text-gradient\"><span class=\"hr-border d-none d-xl-block\"></span>Let us grow your website traffic.</p></div> <div class=\"col-12 col-md-6 col-lg-4\"><ul class=\"select-box d-flex flex-wrap align-items-center justify-content-center justify-content-md-end\"><li class=\"select-item\">\n                            Cell: <a href=\"tel:0123456789\">0123456789</a></li> <li class=\"select-item\"><select class=\"form-select\"><option value=\"1\">English</option> <option value=\"3\">Français</option></select></li></ul></div></div></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-bottom",{'is-sticky': _vm.isSticky}))+">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col\">","</div>",[_c('n-link',{staticClass:"brand-logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo.png","alt":"brand logo"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-auto\">","</div>",[_vm._ssrNode("<div class=\"main-menu-wrapper\">","</div>",[_vm._ssrNode("<nav class=\"d-none d-lg-block\">","</nav>",[_c('Navigation')],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"btn btn-warning btn-hover-warning btn-lg d-none d-md-block",attrs:{"to":"/contact"}},[_vm._v("\n                            Contact Us "),_c('i',{staticClass:"icofont-arrow-right"})]),_vm._ssrNode(" <button class=\"btn btn-warning offcanvas-toggler d-lg-none\"><span class=\"line\"></span> <span class=\"line\"></span> <span class=\"line\"></span></button>")],2)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=b686e654&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    Navigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27))
  },

  data() {
    return {
      isSticky: false
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;

      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    // offcanvas mobile-menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4bd26c0a"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(27).default,Header: __webpack_require__(23).default})


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=f5fc8a30&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-section position-relative"},[_vm._ssrNode("<img src=\"/images/footer/shape.png\" alt=\"images_notFound\" class=\"footer-bg-shape\"> <img src=\"/images/footer/path-shape.png\" alt=\"images_notFound\" class=\"path-shape\"> "),_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 126.82 303.68\" class=\"path-svg\">","</svg>",[_vm._ssrNode("<defs>","</defs>",[_c('radialGradient',{attrs:{"id":"radial-gradient","cx":"78.77","cy":"6322.87","r":"43.8","gradientTransform":"translate(0 -3383.39) scale(1 0.58)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0.16","stop-color":"#2647c8"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.17","stop-color":"#294ac9"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.29","stop-color":"#6179d7"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.42","stop-color":"#92a2e3"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.54","stop-color":"#b9c4ed"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.66","stop-color":"#d8def5"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.78","stop-color":"#edf0fb"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.9","stop-color":"#fbfbfe"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#fff"}})],1),_vm._ssrNode(" "),_c('linearGradient',{attrs:{"id":"linear-gradient","x1":"45.02","y1":"258.73","x2":"112.52","y2":"258.73","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fff"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.27","stop-color":"#f4f7fd"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.74","stop-color":"#d8e0f8"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#c5d2f4"}})],1),_vm._ssrNode(" "),_c('linearGradient',{attrs:{"id":"linear-gradient-2","x1":"43.77","y1":"240.52","x2":"113.76","y2":"240.52","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c5d2f4"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.26","stop-color":"#d8e0f8"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.73","stop-color":"#f4f7fd"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#fff"}})],1)],2),_vm._ssrNode(" <g class=\"cls-1\"><path d=\"M111.1,297c17.86-10.25,17.86-27,0-37.28s-47-10.25-64.74,0-17.75,27,0,37.28S93.25,307.24,111.1,297Z\" transform=\"translate(0 -1)\" class=\"cls-2\"></path> <path d=\"M102.64,283.06c13.18-7.57,13.18-42.77,0-50.33s-34.69-7.57-47.79,0-13.11,42.76,0,50.33c6.47,3.74,15,7.3,23.57,7.35C87.18,290.45,96,286.89,102.64,283.06Z\" transform=\"translate(0 -1)\" class=\"cls-3\"></path> <path d=\"M113.76,240.86c0-.23,0-.45,0-.68v-5.26h-1.35c-1.59-3.18-4.54-6.18-8.88-8.67-13.67-7.85-36-7.85-49.58,0-4.32,2.49-7.25,5.49-8.83,8.67H43.89v3.9a12.1,12.1,0,0,0,0,3.4v.09h0c.7,4.56,4,9,10.05,12.48,13.6,7.85,35.91,7.85,49.58,0,6-3.47,9.41-7.92,10.11-12.48h.12Z\" transform=\"translate(0 -1)\" class=\"cls-4\"></path> <path d=\"M103.53,249.77c13.68-7.85,13.68-20.69,0-28.54s-36-7.85-49.58,0-13.6,20.69,0,28.54S89.86,257.63,103.53,249.77Z\" transform=\"translate(0 -1)\" class=\"cls-5\"></path> <path d=\"M101.52,248.61c12.56-7.21,12.56-19,0-26.22s-33.06-7.21-45.55,0-12.49,19,0,26.22S89,255.83,101.52,248.61Z\" transform=\"translate(0 -1)\" class=\"cls-6\"></path> <path d=\"M97.39,249.6c10.28-5.91,10.28-15.57,0-21.47s-27.06-5.9-37.28,0-10.23,15.56,0,21.47S87.11,255.5,97.39,249.6Z\" transform=\"translate(0 -1)\" class=\"cls-7\"></path> <path d=\"M80.79,242.55c.16-14.78.32-17.18.48-32,.07-7,.28-11.46-.21-18.41a95.41,95.41,0,0,0-3.73-19.67c-3.91-13.64-7.15-27.08-8.31-41.27a266.63,266.63,0,0,1,.2-41.63C70.4,73.74,72.55,58,74.74,42.19c.22-1.56-2.16-2.23-2.38-.66-3.85,27.69-7.7,55.65-6.22,83.68a180.79,180.79,0,0,0,6.69,40.73c1.91,6.63,4,13.22,5.09,20.05,1.07,7,1,11.67.94,18.75-.17,16.73-.36,21.08-.54,37.81a1.24,1.24,0,0,0,2.47,0Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M68.94,135.59c-5.26-5.31-10.58-10.8-14.13-17.44a28.67,28.67,0,0,1-3.46-11c-.39-4.37.39-8.74.88-13.07A37.33,37.33,0,0,0,47.76,71.3c-4.17-7.87-9.13-15.38-13.95-22.86-.86-1.33-3-.1-2.14,1.25,4.9,7.59,10,15.23,14.16,23.25A35.23,35.23,0,0,1,50,85.53c.43,4.37-.33,8.74-.84,13.07-.89,7.68,0,14.67,3.84,21.47,3.65,6.52,8.93,12,14.15,17.27,1.12,1.14,2.87-.61,1.75-1.75Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M72.51,153.29C74,142.2,86.55,136.48,93.38,129a52.06,52.06,0,0,0,13.21-31.12c.11-1.59-2.36-1.58-2.48,0a49.23,49.23,0,0,1-15.79,32.68c-7.2,6.58-16.9,12.23-18.28,22.78-.21,1.58,2.27,1.56,2.47,0Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M40.5,34.88c-1.13-7-7.14-12.12-12.74-16.53C19.15,11.57,10.33,4.67,0,1A77.52,77.52,0,0,1,8.61,22.43c1.24,5.25,2.11,11,5.84,14.88,5.2,5.42,15,6.31,17.55,13.39l5.43,7.74C36.41,50.53,41.76,42.76,40.5,34.88Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M85.33,14.47c-4,9.36-17.15,12.58-20.31,22.27-3.26,10,6.11,20.72,3.46,30.91L71,68.94c7.28-6.46,11.55-15.8,13.43-25.35S86,24.19,85.33,14.47Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M126.82,52.12C118.59,57.29,112.24,64.9,106,72.38c-1.71,2.05-3.46,4.18-4.19,6.75a19.37,19.37,0,0,0-.38,6.27l1.11,23.2.69,3c3.68-5.89,13.56-6.08,16.07-12.56.91-2.33.56-4.93.33-7.42A75.29,75.29,0,0,1,126.82,52.12Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path></g>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer-top position-relative\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"col-12\"><div class=\"section-title process text-center pb-100\"><div class=\"icon\"><img src=\"/images/icon/launcher.png\" alt=\"Icon_not_found\"></div> <h3 class=\"title\">Subscribe To Our Newsletter</h3> <span class=\"hr-secondary\"></span></div></div></div> <div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"col-12\"><div class=\"news-letter pb-100\"><form class=\"news-letter-form position-relative\"><input id=\"mc-email\" type=\"text\" placeholder=\"Enter Your Email Address\" class=\"form-control\"> <button class=\"btn btn-warning\">\n                                Subscribe Now \n                                <i class=\"icofont-rounded-double-right\"></i></button></form></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"600\" class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"footer-card\">","</div>",[_vm._ssrNode("<div class=\"footer-row\">","</div>",[_vm._ssrNode("<div class=\"footer-col\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_c('n-link',{staticClass:"footer-logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo-white.png","alt":"Brand Logo"}})]),_vm._ssrNode(" <ul class=\"address\"><li><span class=\"icon\"><i class=\"icofont-ui-call\"></i></span> <a href=\"tel:0123456789\">00123456789</a></li> <li><span class=\"icon\"><i class=\"icofont-send-mail\"></i></span> <a href=\"mailto:demo@gmail.com\">demo@gmail.com</a></li> <li><span class=\"icon\"><i class=\"icofont-google-map\"></i></span>\n                                            Chilton, Texas(TX), 12345\n                                        </li></ul>")],2)]),_vm._ssrNode(" <div class=\"footer-col\"><div class=\"footer-widget\"><h4 class=\"title\">All Services</h4> <ul class=\"footer-menu\"><li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Social Marketing\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                SEO Optimization\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Content Marketing\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Social Marketing\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Web Analytics\n                                            </a></li></ul></div></div> <div class=\"footer-col\"><div class=\"footer-widget\"><h4 class=\"title\">Information</h4> <ul class=\"footer-menu\"><li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Vision &amp; Values\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Winning Awards\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Leadership\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Sustainability\n                                            </a></li> <li><a href=\"#\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Careers\n                                            </a></li></ul></div></div> <div class=\"footer-col\"><div class=\"footer-widget\"><h4 class=\"title\">Follow Us</h4> <p>Lorem ipsum is simply dummy text the printing and typesetting.</p> <ul class=\"footer-social\"><li class=\"footer-social-item\"><a href=\"#\" class=\"footer-social-link\"><i class=\"icofont-facebook\"></i></a></li> <li class=\"footer-social-item\"><a href=\"#\" class=\"footer-social-link\"><i class=\"icofont-twitter\"></i></a></li> <li class=\"footer-social-item\"><a href=\"#\" class=\"footer-social-link\"><i class=\"icofont-skype\"></i></a></li></ul></div></div>")],2)])])])],2)]),_vm._ssrNode(" <div class=\"copy-right-section\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><p>©<span id=\"currentYear\"></span> Made With <i class=\"icofont-heart\"></i> By <a href=\"#\">\n                        OctaZeal Team</a> All Rights Reserved\n                    </p></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=f5fc8a30&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2aa00818"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(24).default})


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=2e5b08e9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service-details"}},[_vm._v("Service")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/case-details"}},[_vm._v("Case Details")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/blog-left-sidebar"}},[_vm._v("Blog Left Sidebar")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-left-sidebar"}},[_vm._v("Blog Left Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-right-sidebar"}},[_vm._v("Blog Right Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Blog Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contact")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=2e5b08e9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "00f55713"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=f25bf63a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"main-menu"},[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service-details"}},[_vm._v("Service")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/case-details"}},[_vm._v("Case Details")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/blog-left-sidebar"}},[_vm._v("Blog")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-left-sidebar"}},[_vm._v("Blog Left Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-right-sidebar"}},[_vm._v("Blog Right Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Blog Details")])],1)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=f25bf63a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "428984de"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=ff2a9884&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"offcanvas-mobile-menu",attrs:{"id":"offcanvas-menu"}},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"mobile-header\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo-white.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <button class=\"mobile-close-btn\"></button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1),_vm._ssrNode(" <div class=\"offcanvas-social\"><ul><li><a href=\"#\"><i class=\"icofont-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-twitter\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-skype\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-linkedin\"></i></a></li></ul></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=ff2a9884&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2fead57b"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(26).default})


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ScrollTop.vue?vue&type=template&id=27698dbe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"30px"}},[_c('i',{staticClass:"icofont-arrow-up"})])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ScrollTop.vue?vue&type=template&id=27698dbe&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ScrollTop.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7b15865b"
  
)

/* harmony default export */ var ScrollTop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=template&id=7bf3ea3b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about-section"},[_vm._ssrNode("<img src=\"/images/about/bg.png\" alt=\"images-not_found\" class=\"about-bg\"> <div class=\"container\"><div class=\"row\"><div class=\"col-lg-6\"><div data-aos=\"zoom-in\" data-aos-delay=\"100\" class=\"about-img-content\"><img src=\"/images/about/1.png\" alt=\"images-not_found\"></div></div> <div class=\"col-lg-6\"><div class=\"offset-about\"><div class=\"about-content section-title primary\"><h5 class=\"sub-title\">// Why Choose Us?</h5> <h3 class=\"title\">We Are Trusted Digital Marketing Company.</h3> <p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled.</p> <span class=\"hr-primary mt-4\"></span></div> <div class=\"about-object\"><div class=\"about-object-list\"><div class=\"icon\"><img src=\"/images/icon/1.png\" alt=\"images-not_found\"></div> <div class=\"about-object-content\"><h4 class=\"title\">High Customer Retention Rate</h4> <p>Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industry's standard dummy. </p></div></div> <div class=\"about-object-list\"><div class=\"icon\"><img src=\"/images/icon/2.png\" alt=\"images-not_found\"></div> <div class=\"about-object-content\"><h4 class=\"title\">Dedicated Customer Support</h4> <p>Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industry's standard dummy. </p></div></div> <div class=\"about-object-list\"><div class=\"icon\"><img src=\"/images/icon/3.png\" alt=\"images-not_found\"></div> <div class=\"about-object-content\"><h4 class=\"title\">Professional Team Member</h4> <p>Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industry's standard dummy. </p></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=template&id=7bf3ea3b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AboutOnevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/AboutOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AboutOnevue_type_script_lang_js_ = (AboutOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AboutOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27cba9d6"
  
)

/* harmony default export */ var AboutOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamSection.vue?vue&type=template&id=43503861&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"team-section position-relative"},[_vm._ssrNode("<img src=\"/images/team/pattern.png\" alt=\"images-not_found\" class=\"pattern\"> <div class=\"container\"><div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"col-12\"><div class=\"section-title process text-center pb-90\"><div class=\"icon\"><img src=\"/images/icon/team.png\" alt=\"Icon_not_found\"></div> <h3 class=\"title\">Amazing Team Members</h3> <span class=\"hr-secondary\"></span></div></div></div> <div class=\"row mtn-30\">"+(_vm._ssrList((_vm.teamMembers),function(member,index){return ("<div class=\"col-lg-3 col-sm-6 mt-30\"><div class=\"team-card\"><div class=\"thumb\"><img"+(_vm._ssrAttr("src",member.imgSrc))+(_vm._ssrAttr("alt",member.name))+"> <img src=\"/images/team/team-hover.png\" alt=\"shape image\" class=\"social-hover\"> <ul class=\"team-social\">"+(_vm._ssrList((member.socialLink),function(list,index){return ("<li class=\"team-social-item\"><a"+(_vm._ssrAttr("href",list.url))+" class=\"team-social-link\"><i"+(_vm._ssrClass(null,list.icon))+"></i></a></li>")}))+"</ul></div> <div class=\"content\"><h3 class=\"title\">"+_vm._ssrEscape(_vm._s(member.name))+"</h3> <p>"+_vm._ssrEscape(_vm._s(member.designation))+"</p></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TeamSection.vue?vue&type=template&id=43503861&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TeamSectionvue_type_script_lang_js_ = ({
  data() {
    return {
      teamMembers: [{
        imgSrc: "/images/team/1.png",
        name: "Willie Mckenzie",
        designation: "Digital Strategist",
        socialLink: [{
          icon: "icofont-facebook",
          url: "#"
        }, {
          icon: "icofont-skype",
          url: "#"
        }, {
          icon: "icofont-twitter",
          url: "#"
        }]
      }, {
        imgSrc: "/images/team/2.png",
        name: "Rosie Greene",
        designation: "Project Manager",
        socialLink: [{
          icon: "icofont-facebook",
          url: "#"
        }, {
          icon: "icofont-skype",
          url: "#"
        }, {
          icon: "icofont-twitter",
          url: "#"
        }]
      }, {
        imgSrc: "/images/team/3.png",
        name: "Stacey Evans",
        designation: "UI/UX designer",
        socialLink: [{
          icon: "icofont-facebook",
          url: "#"
        }, {
          icon: "icofont-skype",
          url: "#"
        }, {
          icon: "icofont-twitter",
          url: "#"
        }]
      }, {
        imgSrc: "/images/team/4.png",
        name: "Marian Adams",
        designation: "seo specialist",
        socialLink: [{
          icon: "icofont-facebook",
          url: "#"
        }, {
          icon: "icofont-skype",
          url: "#"
        }, {
          icon: "icofont-twitter",
          url: "#"
        }]
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/TeamSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamSectionvue_type_script_lang_js_ = (TeamSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8325bbca"
  
)

/* harmony default export */ var TeamSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialOne.vue?vue&type=template&id=cd793772&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"testimonial-section"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"col-12\"><div class=\"section-title primary text-center pb-100\"><div class=\"icon\"><img src=\"/images/icon/testimonial.png\" alt=\"Icon_not_found\"></div> <h3 class=\"title\">From Happy Customer</h3> <span class=\"hr-secondary\"></span></div></div></div> "),_vm._ssrNode("<div class=\"row position-relative\">","</div>",[_vm._ssrNode("<div class=\"clients\"><img src=\"/images/testimonial/2.png\" alt=\"images-not_found\" class=\"client\"> <img src=\"/images/testimonial/3.png\" alt=\"images-not_found\" class=\"client\"> <img src=\"/images/testimonial/4.png\" alt=\"images-not_found\" class=\"client\"> <img src=\"/images/testimonial/5.png\" alt=\"images-not_found\" class=\"client\"> <img src=\"/images/testimonial/6.png\" alt=\"images-not_found\" class=\"client\"> <img src=\"/images/testimonial/7.png\" alt=\"images-not_found\" class=\"client\"></div> "),_vm._ssrNode("<div class=\"col-12 mx-auto\">","</div>",[_vm._ssrNode("<div class=\"testimonial-content position-relative\">","</div>",[_vm._ssrNode("<img src=\"/images/testimonial/shape.png\" alt=\"images-not_found\" class=\"shape\"> "),_vm._ssrNode("<div class=\"testimonial-carousel\">","</div>",[_c('swiper',{attrs:{"options":_vm.testimonialCarousel}},[_c('div',{staticClass:"swiper-slide",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[_c('div',{staticClass:"profile-wrap"},[_c('img',{staticClass:"testimonial-profile",attrs:{"src":"/images/testimonial/lg-1.png","alt":"images-not_found"}}),_vm._v(" "),_c('span',{staticClass:"quote"},[_vm._v("“")])]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries")]),_vm._v(" "),_c('h5',{staticClass:"sub-title"},[_vm._v("Georgia Jones")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("Ui/Ux designer")])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[_c('div',{staticClass:"profile-wrap"},[_c('img',{staticClass:"testimonial-profile",attrs:{"src":"/images/testimonial/lg-2.png","alt":"images-not_found"}}),_vm._v(" "),_c('span',{staticClass:"quote"},[_vm._v("“")])]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries")]),_vm._v(" "),_c('h5',{staticClass:"sub-title"},[_vm._v("Kenneth M. Aguiar")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("Ui/Ux designer")])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[_c('div',{staticClass:"profile-wrap"},[_c('img',{staticClass:"testimonial-profile",attrs:{"src":"/images/testimonial/lg-3.png","alt":"images-not_found"}}),_vm._v(" "),_c('span',{staticClass:"quote"},[_vm._v("“")])]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries")]),_vm._v(" "),_c('h5',{staticClass:"sub-title"},[_vm._v("Wendy W Jones")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("Ui/Ux designer")])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[_c('div',{staticClass:"profile-wrap"},[_c('img',{staticClass:"testimonial-profile",attrs:{"src":"/images/testimonial/lg-4.png","alt":"images-not_found"}}),_vm._v(" "),_c('span',{staticClass:"quote"},[_vm._v("“")])]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries")]),_vm._v(" "),_c('h5',{staticClass:"sub-title"},[_vm._v("Barbara K. Griffin")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("Ui/Ux designer")])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[_c('div',{staticClass:"profile-wrap"},[_c('img',{staticClass:"testimonial-profile",attrs:{"src":"/images/testimonial/lg-5.png","alt":"images-not_found"}}),_vm._v(" "),_c('span',{staticClass:"quote"},[_vm._v("“")])]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries")]),_vm._v(" "),_c('h5',{staticClass:"sub-title"},[_vm._v("Judith M. Burnett")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("Ui/Ux designer")])]),_vm._v(" "),_c('div',{staticClass:"swiper-slide",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[_c('div',{staticClass:"profile-wrap"},[_c('img',{staticClass:"testimonial-profile",attrs:{"src":"/images/testimonial/lg-6.png","alt":"images-not_found"}}),_vm._v(" "),_c('span',{staticClass:"quote"},[_vm._v("“")])]),_vm._v(" "),_c('p',[_vm._v("Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries")]),_vm._v(" "),_c('h5',{staticClass:"sub-title"},[_vm._v("Doreen E. Prince")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("Ui/Ux designer")])])])],1)],2)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TestimonialOne.vue?vue&type=template&id=cd793772&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TestimonialOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TestimonialOnevue_type_script_lang_js_ = ({
  data() {
    return {
      testimonialCarousel: {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 2000
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/TestimonialOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TestimonialOnevue_type_script_lang_js_ = (TestimonialOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TestimonialOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TestimonialOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02e240c4"
  
)

/* harmony default export */ var TestimonialOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Accordion.vue?vue&type=template&id=3eb6adb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion-inner"},[_c('b-card',{staticClass:"accordion-item",attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_vm._v("\n                1. How can I start SEO Marketing?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-1","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text the printing typesetting industry has been the industry's standard dummy text ever printer took galley of type scrambled.\n                ")])],1)],1)],1),_vm._ssrNode(" "),_c('b-card',{staticClass:"accordion-item",attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_vm._v("\n                2. What Is SEO / Search Engine ?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-2","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text the printing typesetting industry has been the industry's standard dummy text ever printer took galley of type scrambled.\n                ")])],1)],1)],1),_vm._ssrNode(" "),_c('b-card',{attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_vm._v("\n                3. How does SEO work?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-3","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text the printing typesetting industry has been the industry's standard dummy text ever printer took galley of type scrambled.\n                ")])],1)],1)],1),_vm._ssrNode(" "),_c('b-card',{attrs:{"no-body":""}},[_c('b-card-header',{attrs:{"header-tag":"header"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":true}}],staticClass:"accordion-button",attrs:{"block":""}},[_vm._v("\n                4. Why is SEO important for marketing?\n            ")])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":"accordion-4","visible":"","accordion":"my-accordion"}},[_c('b-card-body',[_c('b-card-text',[_vm._v("\n                    Lorem Ipsum is simply dummy text the printing typesetting industry has been the industry's standard dummy text ever printer took galley of type scrambled.\n                ")])],1)],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Accordion.vue?vue&type=template&id=3eb6adb6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Accordion.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e45f0f4a"
  
)

/* harmony default export */ var Accordion = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=template&id=0a3304ac&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"hero-section"},[_vm._ssrNode("<img src=\"/images/hero/shape1.png\" alt=\"404\" class=\"shape shape1\" data-v-0a3304ac> <img src=\"/images/hero/shape2.png\" alt=\"404\" class=\"shape shape2\" data-v-0a3304ac> <img src=\"/images/hero/particle1.png\" alt=\"404\" class=\"shape particle1\" data-v-0a3304ac> <img src=\"/images/hero/particle2.png\" alt=\"404\" class=\"shape particle2\" data-v-0a3304ac> <div class=\"container\" data-v-0a3304ac><div class=\"row\" data-v-0a3304ac><div class=\"col-lg-5 col-xl-6\" data-v-0a3304ac><div class=\"hero-content\" data-v-0a3304ac><h2 class=\"title\" data-v-0a3304ac>Top Ranking Your Brand New Website.</h2> <p data-v-0a3304ac><span class=\"hr d-none d-xl-block\" data-v-0a3304ac></span> Top rankings is important for online business.</p> <form class=\"hero-form position-relative\" data-v-0a3304ac><input type=\"text\" placeholder=\"https://yourwebsite.com\" class=\"form-control\" data-v-0a3304ac> <button class=\"btn btn-warning\" data-v-0a3304ac>Free Audit Now</button></form> <img src=\"/images/hero/particle3.png\" alt=\"particle2\" class=\"particle3\" data-v-0a3304ac></div></div> <div class=\"col-lg-7 col-xl-6\" data-v-0a3304ac><div class=\"hero-img\" data-v-0a3304ac><img src=\"/images/hero/1.png\" alt=\"404\" data-aos=\"zoom-in\" data-aos-delay=\"100\" class=\"animate-one\" data-v-0a3304ac> <div class=\"position-absolute animate-two\" data-v-0a3304ac><img data-aos=\"fade-up\" data-aos-delay=\"600\" src=\"/images/hero/2.png\" alt=\"404\" data-v-0a3304ac></div> <div class=\"position-absolute animate-three\" data-v-0a3304ac><img data-aos=\"fade-down\" data-aos-delay=\"400\" src=\"/images/hero/3.png\" alt=\"404\" data-v-0a3304ac></div></div> <div class=\"hero-img-mobile\" data-v-0a3304ac><img src=\"/images/hero/mobile.png\" alt=\"images-not_found\" data-v-0a3304ac></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hero.vue?vue&type=template&id=0a3304ac&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Herovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Hero.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a3304ac",
  "6363f037"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=template&id=72d3ebf4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brand-section",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"brand-card bg-cover\">","</div>",[_vm._ssrNode("<p class=\"text-center\">Trusted by <span class=\"text-gradient\">8,980+</span> of The World's Best Organization.</p> "),_c('swiper',{attrs:{"options":_vm.brandCarousel}},_vm._l((_vm.brandItems),function(brand,index){return _c('div',{key:index,staticClass:"swiper-slide brand-item"},[_c('a',{attrs:{"href":brand.url}},[_c('img',{staticClass:"brand-before",attrs:{"src":brand.imgSrc,"alt":brand.alt}}),_vm._v(" "),_c('img',{staticClass:"brand-after",attrs:{"src":brand.hoverImgSrc,"alt":brand.alt}})])])}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=template&id=72d3ebf4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandLogoCarousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BrandLogoCarouselvue_type_script_lang_js_ = ({
  data() {
    return {
      brandCarousel: {
        loop: true,
        speed: 800,
        autoplay: true,
        spaceBetween: 0,
        // Responsive breakpoints
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      },
      brandItems: [{
        imgSrc: "/images/brand-logo/1.png",
        hoverImgSrc: "/images/brand-logo/1.1.png",
        url: "#",
        alt: "brand name"
      }, {
        imgSrc: "/images/brand-logo/2.png",
        hoverImgSrc: "/images/brand-logo/2.1.png",
        url: "#",
        alt: "brand name"
      }, {
        imgSrc: "/images/brand-logo/3.png",
        hoverImgSrc: "/images/brand-logo/3.1.png",
        url: "#",
        alt: "brand name"
      }, {
        imgSrc: "/images/brand-logo/4.png",
        hoverImgSrc: "/images/brand-logo/4.1.png",
        url: "#",
        alt: "brand name"
      }, {
        imgSrc: "/images/brand-logo/2.png",
        hoverImgSrc: "/images/brand-logo/2.1.png",
        url: "#",
        alt: "brand name"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandLogoCarouselvue_type_script_lang_js_ = (BrandLogoCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BrandLogoCarousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandLogoCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "79743065"
  
)

/* harmony default export */ var BrandLogoCarousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WorkingProcess.vue?vue&type=template&id=8a939024&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"working-process-section"},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"col-12\"><div class=\"section-title process text-center pb-100\"><div class=\"icon\"><img src=\"/images/icon/pencile.png\" alt=\"Icon_not_found\"></div> <h3 class=\"title\">Working Process</h3> <span class=\"hr-secondary\"></span></div></div></div> <div class=\"row working-process mb-n4\"><div data-aos=\"fade-up\" data-aos-delay=\"400\" class=\"col-lg-3 col-sm-6 working-process-list mb-4\"><img src=\"/images/working/arrow-shape1.png\" alt=\"images_not_found\" class=\"arrow-shape\"> <div class=\"icon\"><img src=\"/images/working/1.png\" alt=\"images_not_found\"></div> <h4 class=\"title\">Idea Generation</h4></div> <div data-aos=\"fade-up\" data-aos-delay=\"500\" class=\"col-lg-3 col-sm-6 working-process-list mb-4\"><img src=\"/images/working/arrow-shape2.png\" alt=\"images_not_found\" class=\"arrow-shape\"> <div class=\"icon\"><img src=\"/images/working/2.png\" alt=\"images_not_found\"></div> <h4 class=\"title\">Working Plan</h4></div> <div data-aos=\"fade-up\" data-aos-delay=\"600\" class=\"col-lg-3 col-sm-6 working-process-list mb-4\"><img src=\"/images/working/arrow-shape1.png\" alt=\"images_not_found\" class=\"arrow-shape\"> <div class=\"icon\"><img src=\"/images/working/3.png\" alt=\"images_not_found\"></div> <h4 class=\"title\">SEO Research</h4></div> <div data-aos=\"fade-up\" data-aos-delay=\"700\" class=\"col-lg-3 col-sm-6 working-process-list mb-4\"><div class=\"icon\"><img src=\"/images/working/4.png\" alt=\"images_not_found\"></div> <h4 class=\"title\">Launch Project</h4></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WorkingProcess.vue?vue&type=template&id=8a939024&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WorkingProcess.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WorkingProcessvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/WorkingProcess.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WorkingProcessvue_type_script_lang_js_ = (WorkingProcessvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WorkingProcess.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WorkingProcessvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b99f5fb"
  
)

/* harmony default export */ var WorkingProcess = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudies.vue?vue&type=template&id=57c2ed79&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"case-studies-section"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"col-12\"><div class=\"section-title primary text-center pb-100\"><div class=\"icon\"><img src=\"/images/icon/webpack.png\" alt=\"Icon_not_found\"></div> <h3 class=\"title\">Some Case Studies</h3> <span class=\"hr-secondary\"></span></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"900\" class=\"case-carousel\">","</div>",[_c('swiper',{attrs:{"options":_vm.caseCarousel}},_vm._l((_vm.caseStudies),function(caseStudy,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('div',{staticClass:"case-card"},[_c('div',{staticClass:"thumb"},[_c('n-link',{attrs:{"to":"/case-details"}},[_c('img',{staticClass:"case-shap case-shape1",attrs:{"src":"/images/case/shape1.png","alt":"shape image"}}),_vm._v(" "),_c('img',{staticClass:"case-shape case-shape2",attrs:{"src":"/images/case/shape2.png","alt":"shape image"}}),_vm._v(" "),_c('img',{staticClass:"case-image",attrs:{"src":caseStudy.imgSrc,"alt":caseStudy.title}})])],1),_vm._v(" "),_c('div',{staticClass:"case-content"},[_c('h3',{staticClass:"title"},[_c('n-link',{attrs:{"to":"/case-details"}},[_vm._v(_vm._s(caseStudy.title))])],1),_vm._v(" "),_c('p',[_vm._v(_vm._s(caseStudy.category))])])])])}),0),_vm._ssrNode(" <div class=\"case-carousel-navigation\"><div class=\"case-carousel swiper-button-prev\"><i class=\"icofont-rounded-double-left\"></i></div> <div class=\"case-carousel swiper-button-next\"><i class=\"icofont-rounded-double-right\"></i></div></div>")],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CaseStudies.vue?vue&type=template&id=57c2ed79&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudies.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CaseStudiesvue_type_script_lang_js_ = ({
  data() {
    return {
      caseCarousel: {
        loop: true,
        speed: 800,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: ".case-carousel .swiper-button-next",
          prevEl: ".case-carousel .swiper-button-prev"
        },
        // Responsive breakpoints
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        }
      },
      caseStudies: [{
        imgSrc: "/images/case/1.png",
        title: "Marketing Automation",
        category: "Marketing / Automation"
      }, {
        imgSrc: "/images/case/2.png",
        title: "Digital Consulting",
        category: "Digital Strategy / Consulting"
      }, {
        imgSrc: "/images/case/3.png",
        title: "Digital Consulting",
        category: "Digital Strategy / Consulting"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/CaseStudies.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CaseStudiesvue_type_script_lang_js_ = (CaseStudiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CaseStudies.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CaseStudiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "156450ac"
  
)

/* harmony default export */ var CaseStudies = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FaqSection.vue?vue&type=template&id=cf2b065c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"faq-section"},[_vm._ssrNode("<img src=\"/images/faq/bg.png\" alt=\"images-not_found\" class=\"faq-bg\"> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn-30\">","</div>",[_vm._ssrNode("<div class=\"col-xl-6 mt-30\"><div data-aos=\"zoom-in\" data-aos-delay=\"100\" class=\"faq-image\"><img src=\"/images/faq/1.png\" alt=\"images_not_found\"></div></div> "),_vm._ssrNode("<div class=\"col-xl-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"faq-content\">","</div>",[_vm._ssrNode("<div class=\"section-title primary\"><h5 class=\"sub-title\">// FAQ.</h5> <h3 class=\"title\">Frequently Asked Questions.</h3> <span class=\"hr-primary mt-4\"></span></div> "),_c('Accordion')],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FaqSection.vue?vue&type=template&id=cf2b065c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FaqSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FaqSectionvue_type_script_lang_js_ = ({
  components: {
    Accordion: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 41))
  }
});
// CONCATENATED MODULE: ./components/FaqSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FaqSectionvue_type_script_lang_js_ = (FaqSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FaqSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FaqSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1da354ec"
  
)

/* harmony default export */ var FaqSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Accordion: __webpack_require__(41).default})


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogOne.vue?vue&type=template&id=5472353a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-section bg-cover"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn-30\">","</div>",[_vm._ssrNode("<div class=\"col-lg-6 mt-30\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"section-title text-center text-lg-start primary\"><h3 class=\"title\">Latest News From Our Blog.</h3> <span class=\"hr-primary mt-4\"></span></div> "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"600\" class=\"blog-card\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_c('img',{attrs:{"src":"/images/blog/1.png","alt":"images-not_found"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<p>By Admin / 12 January, 2021 / <span>Digital Marketing.</span></p> "),_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("The Step-by-Step Guide to Improving Your Google Rankings.")])],1)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"blog-meta-cards\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"blog-meta-card\">","</div>",[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/blog/2.png\" alt=\"images-not_found\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<p>By Admin / 12 January, 2021 / <span>Digital Marketing.</span></p> "),_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("What's the Current Job Market for Seo Professionals Like?")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"1200\" class=\"blog-meta-card\">","</div>",[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/blog/3.png\" alt=\"images-not_found\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<p>By Admin / 12 January, 2021 / <span>Digital Marketing.</span></p> "),_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Addicted to Seo? Us Too. 6 Reasons We Just Can't Stop.")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"1500\" class=\"blog-meta-card\">","</div>",[_vm._ssrNode("<div class=\"thumb\"><img src=\"/images/blog/4.png\" alt=\"images-not_found\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<p>By Admin / 12 January, 2021 / <span>Digital Marketing.</span></p> "),_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Why You Should Spend More Time Thinking About Seo.")])],1)],2)],2)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogOne.vue?vue&type=template&id=5472353a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogOne.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogOnevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/BlogOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogOnevue_type_script_lang_js_ = (BlogOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "22cc7337"
  
)

/* harmony default export */ var BlogOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceOne.vue?vue&type=template&id=91d48eb8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"service-section section-ptb-150"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"200\" class=\"col-12\"><div class=\"section-title primary text-center pb-100\"><div class=\"icon\"><img src=\"/images/icon/sharing.png\" alt=\"Icon_not_found\"></div> <h3 class=\"title\">What We Offer</h3> <span class=\"hr-secondary\"></span></div></div></div> "),_vm._ssrNode("<div class=\"row mtn-30\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"500\" class=\"col-md-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"service-card\">","</div>",[_vm._ssrNode("<img src=\"/images/service/line-one.png\" alt=\"images_not_found\" class=\"line\"> <div class=\"service-icon\"><div class=\"roted-around danger\"><span></span></div> <img src=\"/images/icon/marketing.png\" alt></div> "),_vm._ssrNode("<div class=\"service-content\">","</div>",[_vm._ssrNode("<h4 class=\"title\">Marketing Automation</h4> <p>Lorem Ipsum is simply dummy text of the ipsum has been the industry standard ever printer specimen book.</p> "),_c('n-link',{staticClass:"btn btn-outline-danger",attrs:{"to":"/service-details"}},[_vm._v("Details +")])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"1000\" class=\"col-md-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"service-card\">","</div>",[_vm._ssrNode("<img src=\"/images/service/line-two.png\" alt=\"images_not_found\" class=\"line\"> <div class=\"service-icon\"><div class=\"roted-around warning\"><span></span></div> <img src=\"/images/icon/analytics.png\" alt></div> "),_vm._ssrNode("<div class=\"service-content\">","</div>",[_vm._ssrNode("<h4 class=\"title\">SEO Consultancy</h4> <p>Lorem Ipsum is simply dummy text of the ipsum has been the industry standard ever printer specimen book.</p> "),_c('n-link',{staticClass:"btn btn-outline-warning",attrs:{"to":"/service-details"}},[_vm._v("Details +")])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"1500\" class=\"col-md-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"service-card\">","</div>",[_vm._ssrNode("<img src=\"/images/service/line-three.png\" alt=\"images_not_found\" class=\"line\"> <div class=\"service-icon\"><div class=\"roted-around primary\"><span></span></div> <img src=\"/images/icon/connect.png\" alt></div> "),_vm._ssrNode("<div class=\"service-content\">","</div>",[_vm._ssrNode("<h4 class=\"title\">Pay Per Click Advertising</h4> <p>Lorem Ipsum is simply dummy text of the ipsum has been the industry standard ever printer specimen book.</p> "),_c('n-link',{staticClass:"btn btn-outline-primary",attrs:{"to":"/service-details"}},[_vm._v("Details +")])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"2000\" class=\"col-md-6 mt-30\">","</div>",[_vm._ssrNode("<div class=\"service-card\">","</div>",[_vm._ssrNode("<img src=\"/images/service/line-foure.png\" alt=\"images_not_found\" class=\"line\"> <div class=\"service-icon\"><div class=\"roted-around secondary\"><span></span></div> <img src=\"/images/icon/document.png\" alt></div> "),_vm._ssrNode("<div class=\"service-content\">","</div>",[_vm._ssrNode("<h4 class=\"title\">Marketing Automation</h4> <p>Lorem Ipsum is simply dummy text of the ipsum has been the industry standard ever printer specimen book.</p> "),_c('n-link',{staticClass:"btn btn-outline-secondary",attrs:{"to":"/service-details"}},[_vm._v("Details +")])],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"1500\" class=\"col-12 mt-60\">","</div>",[_vm._ssrNode("<div class=\"call-to-action text-center\">","</div>",[_c('n-link',{staticClass:"btn btn-warning",attrs:{"to":"/service"}},[_vm._v("All Services "),_c('i',{staticClass:"icofont-rounded-double-right"})])],1)])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ServiceOne.vue?vue&type=template&id=91d48eb8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceOne.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c47346e"
  
)

/* harmony default export */ var ServiceOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=481997ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('Header'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('Hero'),_vm._ssrNode(" "),_c('BrandLogoCarousel'),_vm._ssrNode(" "),_c('ServiceOne'),_vm._ssrNode(" "),_c('WorkingProcess'),_vm._ssrNode(" "),_c('AboutOne'),_vm._ssrNode(" "),_c('CaseStudies'),_vm._ssrNode(" "),_c('TeamSection'),_vm._ssrNode(" "),_c('FaqSection'),_vm._ssrNode(" "),_c('TestimonialOne'),_vm._ssrNode(" "),_c('BlogOne'),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('ScrollTop')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=481997ee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29)),
    Hero: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 50)),
    BrandLogoCarousel: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 51)),
    ServiceOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 57)),
    WorkingProcess: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 52)),
    AboutOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37)),
    CaseStudies: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 53)),
    TeamSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 38)),
    FaqSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54)),
    TestimonialOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 39)),
    BlogOne: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 55)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24)),
    ScrollTop: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30))
  },

  head() {
    return {
      title: 'Home'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c940851"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(23).default,OffCanvasMobileMenu: __webpack_require__(29).default,Hero: __webpack_require__(50).default,BrandLogoCarousel: __webpack_require__(51).default,ServiceOne: __webpack_require__(57).default,WorkingProcess: __webpack_require__(52).default,AboutOne: __webpack_require__(37).default,CaseStudies: __webpack_require__(53).default,TeamSection: __webpack_require__(38).default,FaqSection: __webpack_require__(54).default,TestimonialOne: __webpack_require__(39).default,BlogOne: __webpack_require__(55).default,Footer: __webpack_require__(24).default,ScrollTop: __webpack_require__(30).default})


/***/ })

};;
//# sourceMappingURL=index.js.map