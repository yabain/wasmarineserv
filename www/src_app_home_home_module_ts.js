"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": function() { return /* binding */ HomePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 2267);






var routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage
}];

var HomePageRoutingModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomePageRoutingModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomePageRoutingModule);
});

HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], HomePageRoutingModule);


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ 2267);










var HomePageModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HomePageModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomePageModule);
});

HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_3__.HomePage]
})], HomePageModule);


/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







var HomePage = /*#__PURE__*/function () {
  function HomePage() {
    (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);
  }

  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return HomePage;
}();

HomePage.ctorParameters = function () {
  return [];
};

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], HomePage);


/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ (function(module) {

module.exports = "ion-header {\n  background: var(--ion-color-light);\n}\nion-header ion-list {\n  background: var(--ion-color-primary);\n  border-radius: 0 0 20px 20px;\n  padding-bottom: 7vh;\n}\nion-header ion-list ion-item ion-label {\n  font-weight: bold;\n  font-size: 1.2rem;\n  letter-spacing: 0.5px;\n}\nion-header .marine {\n  margin: 0 8px;\n}\nion-header .marine ion-searchbar {\n  --border-raduis:20px;\n  margin-top: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSjtBQUFJO0VBQ0ksb0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUVoQjtBQUtJO0VBQ0osYUFBQTtBQUhBO0FBSUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGlvbi1saXN0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjAgMCAyMHB4IDIwcHggO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3dmg7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6IHJnYigxNzUsIDU3LCA1Nyk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFyaW5le1xyXG5tYXJnaW46IDAgOHB4O1xyXG5pb24tc2VhcmNoYmFye1xyXG4gICAgLS1ib3JkZXItcmFkdWlzOjIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgXHJcbn1cclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ (function(module) {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-list lines=\"none\">\n    <ion-item color=\"primary\">\n      <ion-icon slot=\"start\" name=\"reorder-two\"></ion-icon>\n    </ion-item>\n    <ion-item color=\"primary\">\n      <ion-label>WAs-marine-serve</ion-label>\n      <ion-avatar slot=\"end\"></ion-avatar>\n      <img src=\"assets/logo2.png\" style=\"height: 30px;\"/>\n    </ion-item>\n  </ion-list>\n  <div class = marine>\n    <ion-searchbar></ion-searchbar>\n  </div>\n</ion-header>\n<ion-content>\n<ion-grid class=\"ion-margin-top\">\n  <ion-item lines=\"none\" color=\"light\">\n    <ion-label class=\"title\">Navire</ion-label>\n    <ion-button slot=\"end\" size=\"small\" shape=\"round\" color=\"primary\">View all</ion-button>\n\n  </ion-item>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map