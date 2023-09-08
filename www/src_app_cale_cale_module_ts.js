"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cale_cale_module_ts"],{

/***/ 791:
/*!*********************************************!*\
  !*** ./src/app/cale/cale-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalePageRoutingModule": function() { return /* binding */ CalePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cale_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cale.page */ 5171);






var routes = [{
  path: '',
  component: _cale_page__WEBPACK_IMPORTED_MODULE_2__.CalePage
}];

var CalePageRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CalePageRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CalePageRoutingModule);
});

CalePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], CalePageRoutingModule);


/***/ }),

/***/ 7714:
/*!*************************************!*\
  !*** ./src/app/cale/cale.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalePageModule": function() { return /* binding */ CalePageModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cale_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cale-routing.module */ 791);
/* harmony import */ var _cale_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cale.page */ 5171);










var CalePageModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CalePageModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CalePageModule);
});

CalePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _cale_routing_module__WEBPACK_IMPORTED_MODULE_2__.CalePageRoutingModule],
  declarations: [_cale_page__WEBPACK_IMPORTED_MODULE_3__.CalePage]
})], CalePageModule);


/***/ }),

/***/ 5171:
/*!***********************************!*\
  !*** ./src/app/cale/cale.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalePage": function() { return /* binding */ CalePage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cale_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cale.page.html?ngResource */ 3432);
/* harmony import */ var _cale_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cale.page.scss?ngResource */ 4537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);








var CalePage = /*#__PURE__*/function () {
  function CalePage(router) {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CalePage);

    this.router = router;
    this.hold1 = {
      number: null,
      totalProducts: 45
    };
    this.hold2 = {
      number: null,
      totalProducts: 56
    };
    this.hold3 = {
      number: null,
      totalProducts: 120
    };
    this.hold4 = {
      number: null,
      totalProducts: 90
    };
    this.hold5 = {
      number: null,
      totalProducts: 200
    };
    this.hold6 = {
      number: null,
      totalProducts: 230
    };
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CalePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "goToSettings",
    value: function goToSettings(caleNumber) {
      this.router.navigate(['/settings', caleNumber]);
    }
  }]);

  return CalePage;
}();

CalePage.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};

CalePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-cale',
  template: _cale_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_cale_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], CalePage);


/***/ }),

/***/ 4537:
/*!************************************************!*\
  !*** ./src/app/cale/cale.page.scss?ngResource ***!
  \************************************************/
/***/ (function(module) {

module.exports = ".cale {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImNhbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGV7XHJcbiAgICBjb2xvcjpibHVlIDtcclxufSJdfQ== */";

/***/ }),

/***/ 3432:
/*!************************************************!*\
  !*** ./src/app/cale/cale.page.html?ngResource ***!
  \************************************************/
/***/ (function(module) {

module.exports = "<ion-header class=\"cale\">\n  <ion-toolbar color=\"primary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"logo-docker\"></ion-back-button>\n    </ion-buttons>\n    <ion-title >Liste des cales</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card  style=\"height:  180px;\" (click)=\"goToSettings(1)\">\n      <ion-card-header color=\"primary\">cale1</ion-card-header>\n          <p>Nombre total de produits : {{ hold1.totalProducts }}</p>\n        </ion-card>\n\n        <ion-card  style=\"height:  180px;\" (click)=\"goToSettings(2)\">\n          <ion-card-header color=\"primary\">cale3</ion-card-header>\n          <p>Nombre total de produits : {{ hold3.totalProducts }}</p>\n        </ion-card>\n\n        <ion-card  style=\"height:  180px;\" (click)=\"goToSettings(3)\">\n          <ion-card-header color=\"primary\">cale5</ion-card-header>\n          <p>Nombre total de produits : {{ hold5.totalProducts }}</p>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-card  style=\"height:  180px;\" (click)=\"goToSettings(4)\">\n          <ion-card-header color=\"primary\">cale2</ion-card-header>\n          <p>Nombre total de produits : {{ hold2.totalProducts }}</p>\n        </ion-card>\n\n        <ion-card  style=\"height:  180px;\" (click)=\"goToSettings(5)\">\n          <ion-card-header color=\"primary\">cale4</ion-card-header>\n          <p>Nombre total de produits : {{ hold4.totalProducts }}</p>\n        </ion-card>\n        <ion-card  style=\"height: 180px;\" (click)=\"goToSettings(6)\">\n          <ion-card-header color=\"primary\">cale 6</ion-card-header>\n          <p>Nombre total de produits : {{ hold6.totalProducts }}</p>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_cale_cale_module_ts.js.map