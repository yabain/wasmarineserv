(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





var routes = [{
  path: 'splash',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splash/splash.module */ 9623)).then(function (m) {
      return m.SplashPageModule;
    });
  }
}, {
  path: 'tablinks',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_tablinks_tablinks_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tablinks/tablinks.module */ 2616)).then(function (m) {
      return m.TablinksPageModule;
    });
  }
}, {
  path: 'login',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(function (m) {
      return m.LoginPageModule;
    });
  }
}, {
  path: 'signup',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then(function (m) {
      return m.SignupPageModule;
    });
  }
}, {
  path: 'forgotpassword',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgotpassword/forgotpassword.module */ 2488)).then(function (m) {
      return m.ForgotpasswordPageModule;
    });
  }
}, {
  path: 'enregistrement',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_enregistrement_enregistrement_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./enregistrement/enregistrement.module */ 803)).then(function (m) {
      return m.EnregistrementPageModule;
    });
  }
}, {
  path: 'profil',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_profil_profil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profil/profil.module */ 8718)).then(function (m) {
      return m.ProfilPageModule;
    });
  }
}, {
  path: 'dashboard',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 4814)).then(function (m) {
      return m.DashboardPageModule;
    });
  }
}, {
  path: 'settings',
  loadChildren: function loadChildren() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7075)).then(function (m) {
      return m.SettingsPageModule;
    });
  }
}, {
  path: 'logo-docker',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_logo-docker_logo-docker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./logo-docker/logo-docker.module */ 6918)).then(function (m) {
      return m.LogoDockerPageModule;
    });
  }
}, {
  path: 'message',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./message/message.module */ 2770)).then(function (m) {
      return m.MessagePageModule;
    });
  }
}, {
  path: 'home',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(function (m) {
      return m.HomePageModule;
    });
  }
}, {
  path: 'cale',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_cale_cale_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cale/cale.module */ 7714)).then(function (m) {
      return m.CalePageModule;
    });
  }
}, {
  path: 'modal',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_modal_modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modal/modal.module */ 2641)).then(function (m) {
      return m.ModalPageModule;
    });
  }
}, {
  path: 'createproduct',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_createproduct_createproduct_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./createproduct/createproduct.module */ 7695)).then(function (m) {
      return m.CreateproductPageModule;
    });
  }
}];

var AppRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _models_navire_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/navire.model */ 2611);












var AppComponent = /*#__PURE__*/function () {
  function AppComponent(platform, router, statusBar, splashScreen) {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.platform = platform;
    this.router = router;
    this.statusBar = statusBar;
    this.splashScreen = splashScreen;
    this.initializeApp();
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "initializeApp",
    value: function initializeApp() {
      var _this = this;

      this.platform.ready().then(function () {
        // Here you can do any higher level native things you might need.
        _this.statusBar.styleDefault();

        _this.splashScreen.hide();

        _this.router.navigateByUrl("splash");
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.monNavire = new _models_navire_model__WEBPACK_IMPORTED_MODULE_6__.Navire('navire', 'imageUrl');
    }
  }]);

  return AppComponent;
}();

AppComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar
  }, {
    type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen
  }];
};

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 1714);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 7954);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.module */ 7075);












 // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

var AppModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
  entryComponents: [],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__.SettingsPageModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
  exports: [],
  providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy
  }],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
})], AppModule);


/***/ }),

/***/ 9660:
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": function() { return /* binding */ ModalPage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.page.html?ngResource */ 2057);
/* harmony import */ var _modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.page.scss?ngResource */ 9963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var ModalPage_1;






var ModalPage = ModalPage_1 = /*#__PURE__*/function () {
  function ModalPage(modalCtrl) {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModalPage);

    this.modalCtrl = modalCtrl;
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModalPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "openModal",
    value: function openModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this.modalCtrl;
                _context.t1 = ModalPage_1;
                _context.next = 4;
                return this.modalCtrl.getTop();

              case 4:
                _context.t2 = _context.sent;
                _context.t3 = {
                  'nomproduit': 'riz',
                  'quantitesproduit': 12,
                  'prixproduit': 125000
                };
                _context.t4 = {
                  component: _context.t1,
                  cssClass: 'my-custom-class',
                  swipeToClose: true,
                  presentingElement: _context.t2,
                  componentProps: _context.t3
                };
                _context.next = 9;
                return _context.t0.create.call(_context.t0, _context.t4);

              case 9:
                modal = _context.sent;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
  }]);

  return ModalPage;
}();

ModalPage.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }];
};

ModalPage.propDecorators = {
  nomproduit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  quantitesproduit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  prixproduit: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
ModalPage = ModalPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-modal',
  template: _modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ModalPage);


/***/ }),

/***/ 2611:
/*!****************************************!*\
  !*** ./src/app/models/navire.model.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navire": function() { return /* binding */ Navire; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);


var Navire = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function Navire(name, imageUrl) {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Navire);

  this.name = name;
  this.imageUrl = imageUrl;
});

/***/ }),

/***/ 1836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": function() { return /* binding */ SettingsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page */ 7162);






var routes = [{
  path: 'settings/:id',
  component: _settings_page__WEBPACK_IMPORTED_MODULE_2__.SettingsPage
}];

var SettingsPageRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SettingsPageRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SettingsPageRoutingModule);
});

SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], SettingsPageRoutingModule);


/***/ }),

/***/ 7075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": function() { return /* binding */ SettingsPageModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ 1836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ 7162);










var SettingsPageModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SettingsPageModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SettingsPageModule);
});

SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__.SettingsPageRoutingModule],
  declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_3__.SettingsPage]
})], SettingsPageModule);


/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 8277);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 5375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/modal.page */ 9660);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }









var SettingsPage = /*#__PURE__*/function () {
  function SettingsPage(modalCtrl, router) {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SettingsPage);

    this.modalCtrl = modalCtrl;
    this.router = router;
    this.initialProducts = [{
      name: 'produit1: (quantites:12) ',
      image: 'assets/categories.webp'
    }, {
      name: 'produit2 : (quantites:14)',
      image: 'assets/navire.jpg'
    }, {
      name: 'produit3: (quantites:12)',
      image: 'assets/navire4.jpg'
    }, {
      name: 'produit4: (quantites:12)',
      image: 'assets/categories.webp'
    }, {
      name: 'produit5: (quantites:12)',
      image: 'assets/categories.webp'
    }, {
      name: 'produit6: (quantites:12)',
      image: 'assets/categories.webp'
    }];
    var date = new Date();
    var options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    this.currentDate = date.toLocaleDateString('fr-FR');
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SettingsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.products = (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.initialProducts);
    }
  }, {
    key: "selectedProduct",
    value: function selectedProduct(product) {
      this.selectedProduct = product;
    }
  }, {
    key: "openModal",
    value: function openModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = this.modalCtrl;
                _context.t1 = _modal_modal_page__WEBPACK_IMPORTED_MODULE_5__.ModalPage;
                _context.t2 = {
                  'nomproduit': 'riz',
                  'quantitesproduit': 12,
                  'prixproduit': 125000
                };
                _context.next = 5;
                return this.modalCtrl.getTop();

              case 5:
                _context.t3 = _context.sent;
                _context.t4 = {
                  component: _context.t1,
                  cssClass: 'my-custom-class',
                  componentProps: _context.t2,
                  presentingElement: _context.t3
                };
                _context.next = 9;
                return _context.t0.create.call(_context.t0, _context.t4);

              case 9:
                modal = _context.sent;
                _context.next = 12;
                return modal.present();

              case 12:
                return _context.abrupt("return", _context.sent);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "addProduct",
    value: function addProduct() {
      var newProduct = {
        name: "Nouveau produit",
        image: "chemin/vers/l/image.jpg"
      };
      this.initialProducts.push(newProduct);
      this.products = (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.initialProducts);
      this.router.navigateByUrl('/createproduct');
    }
  }]);

  return SettingsPage;
}();

SettingsPage.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }];
};

SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-settings',
  template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], SettingsPage);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.log(err);
});

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"default-node_modules_ionic_core_dist_esm_index-8bf9b0cd_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-ce4f806c_js",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 9963:
/*!**************************************************!*\
  !*** ./src/app/modal/modal.page.scss?ngResource ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".my-custom-clas {\n  background: #222;\n}\n\nion-modal.stack-modal {\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);\n}\n\n.bg-img {\n  padding: 1px;\n  height: 100%;\n  width: 100%;\n  background-image: url('navire2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw0Q0FBQTtFQUNBLHFEQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFHSiIsImZpbGUiOiJtb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLWNsYXN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG59XHJcbmlvbi1tb2RhbC5zdGFjay1tb2RhbCB7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMjhweCA0OHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIC0tYmFja2Ryb3Atb3BhY2l0eTogdmFyKC0taW9uLWJhY2tkcm9wLW9wYWNpdHksIDAuMzIpO1xyXG4gIH1cclxuICAuYmctaW1ne1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9uYXZpcmUyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "@charset \"UTF-8\";\n.bg-img {\n  padding: 1px;\n  height: 100%;\n  width: 100%;\n  background-image: url('navire2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nh1 {\n  color: white;\n  margin-left: 20px;\n  font-size: 30px;\n}\nh5 {\n  color: #e8e8e8;\n  margin-left: 20px;\n  margin-top: -7px;\n  font-size: medium;\n  margin-bottom: 15px;\n  text-transform: capitalize;\n}\n.category-container {\n  display: flex;\n  align-items: center;\n}\n.category-image {\n  width: 50px;\n  /* Ajustez la taille de l'image selon vos besoins */\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  /* Applique un bord arrondi */\n  margin-right: 10px;\n  /* Ajoute une marge à droite pour créer de l'espace entre l'image et le texte de la catégorie */\n}\nion-icon {\n  font-size: 2.5rem;\n  /* Taille de l'icône */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUlKO0FBRkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUZFO0VBQ0UsV0FBQTtFQUFhLG1EQUFBO0VBQ2IsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUFvQiw2QkFBQTtFQUNwQixrQkFBQTtFQUFvQiwrRkFBQTtBQVF4QjtBQU5FO0VBRUUsaUJBQUE7RUFBbUIsc0JBQUE7QUFTdkIiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWltZ3tcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvbmF2aXJlMi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuaDV7XHJcbiAgICBjb2xvcjogI2U4ZThlODtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5jYXRlZ29yeS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXRlZ29yeS1pbWFnZSB7XHJcbiAgICB3aWR0aDogNTBweDsgLyogQWp1c3RleiBsYSB0YWlsbGUgZGUgbCdpbWFnZSBzZWxvbiB2b3MgYmVzb2lucyAqL1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIEFwcGxpcXVlIHVuIGJvcmQgYXJyb25kaSAqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAvKiBBam91dGUgdW5lIG1hcmdlIMOgIGRyb2l0ZSBwb3VyIGNyw6llciBkZSBsJ2VzcGFjZSBlbnRyZSBsJ2ltYWdlIGV0IGxlIHRleHRlIGRlIGxhIGNhdMOpZ29yaWUgKi9cclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDIuNXJlbTsgLyogVGFpbGxlIGRlIGwnaWPDtG5lICovXHJcbiAgIFxyXG4gIH0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "\r\n   <ion-router-outlet></ion-router-outlet> \r\n\r\n\r\n\r\n";

/***/ }),

/***/ 2057:
/*!**************************************************!*\
  !*** ./src/app/modal/modal.page.html?ngResource ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header>  \n  <ion-toolbar color=\"primary\"> \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"logo-docker\"></ion-back-button>\n    </ion-buttons>   \n     <ion-title>details</ion-title>  \n     <ion-icon size=\"large\" name=\"close-circle-outline\" slot=\"end\" (click)=\"closeModal()\"></ion-icon>\n    </ion-toolbar>\n  </ion-header>\n <ion-content>\n  <div class=\"bg-img\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Details</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>details des differents produits</p>\n    <p>nomproduit:{{nomproduit}}</p>\n    <p> quantitesproduit:{{quantitesproduit}}</p>\n    <p> prixproduit:{{prixproduit}}</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Details</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>details des differents produits</p>\n    <p>nomproduit:{{nomproduit}}</p>\n    <p> quantitesproduit:{{quantitesproduit}}</p>\n    <p> prixproduit:{{prixproduit}}</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Details</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>details des differents produits</p>\n    <p>nomproduit:{{nomproduit}}</p>\n    <p> quantitesproduit:{{quantitesproduit}}</p>\n    <p> prixproduit:{{prixproduit}}</p>\n      </ion-card-content>\n    </ion-card>\n    \n  </div>\n   \n </ion-content>\n";

/***/ }),

/***/ 5375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"logo-docker\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Listes des produits</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"bg-img\">\n    <div>\n      <h1><b>Aujourd'hui</b></h1>\n      <h5>{{ currentDate }}</h5>\n    </div>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Produits</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list>\n          <ion-item *ngFor=\"let product of products\"  (click)=\"openModal()\">\n            <div class=\"category-container\" style=\"width: 100%; display: flex; align-items: center;\">\n              <img src=\"{{ product.image }}\" alt=\"{{ product.name }}\" class=\"category-image\">\n              <span>{{ product.name }}</span>\n              <span>{{ product.quantites }}</span>\n              <span>{{ product.prix }}</span>\n              <span>{{ product.poids }}</span>\n            \n            </div>\n          </ion-item>\n        </ion-list>\n        <ion-icon name=\"add\" (click)=\"addProduct()\" slot=\"end\" color=\"primary\">ajouter un produit</ion-icon>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map