"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_splash_splash_module_ts"],{

/***/ 3523:
/*!*************************************************!*\
  !*** ./src/app/splash/splash-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageRoutingModule": function() { return /* binding */ SplashPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.page */ 4399);






var routes = [{
  path: '',
  component: _splash_page__WEBPACK_IMPORTED_MODULE_2__.SplashPage
}, {
  path: 'tablinks',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_tablinks_tablinks_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tablinks/tablinks.module */ 2616)).then(function (m) {
      return m.TablinksPageModule;
    });
  }
}];

var SplashPageRoutingModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SplashPageRoutingModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SplashPageRoutingModule);
});

SplashPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], SplashPageRoutingModule);


/***/ }),

/***/ 9623:
/*!*****************************************!*\
  !*** ./src/app/splash/splash.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPageModule": function() { return /* binding */ SplashPageModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _splash_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-routing.module */ 3523);
/* harmony import */ var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.page */ 4399);










var SplashPageModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SplashPageModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SplashPageModule);
});

SplashPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _splash_routing_module__WEBPACK_IMPORTED_MODULE_2__.SplashPageRoutingModule],
  declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_3__.SplashPage]
})], SplashPageModule);


/***/ }),

/***/ 4399:
/*!***************************************!*\
  !*** ./src/app/splash/splash.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashPage": function() { return /* binding */ SplashPage; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash.page.html?ngResource */ 3610);
/* harmony import */ var _splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash.page.scss?ngResource */ 9898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);








var SplashPage = /*#__PURE__*/function () {
  function SplashPage(router) {
    var _this = this;

    (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SplashPage);

    this.router = router;
    setTimeout(function () {
      _this.router.navigateByUrl('login');
    }, 1000);
  }

  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SplashPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return SplashPage;
}();

SplashPage.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};

SplashPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-splash',
  template: _splash_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_splash_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SplashPage);


/***/ }),

/***/ 9898:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.scss?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  --background: #1F319D;\n}\n\n.container img {\n  height: 100px;\n  margin-top: 310px;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNOIiwiZmlsZSI6InNwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFGMzE5RDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOjMxMHB4IDsgXHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3610:
/*!****************************************************!*\
  !*** ./src/app/splash/splash.page.html?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "\n<ion-content>\n<div class =\"container ion-text-center\">\n  <img src=\"assets/logo2.png\" >\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_splash_splash_module_ts.js.map