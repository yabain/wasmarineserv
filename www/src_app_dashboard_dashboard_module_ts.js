"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page */ 5935);






var routes = [{
  path: '',
  component: _dashboard_page__WEBPACK_IMPORTED_MODULE_2__.DashboardPage
}];

var DashboardPageRoutingModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardPageRoutingModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardPageRoutingModule);
});

DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], DashboardPageRoutingModule);


/***/ }),

/***/ 4814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ 5935);










var DashboardPageModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardPageModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardPageModule);
});

DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
  declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_3__.DashboardPage]
})], DashboardPageModule);


/***/ }),

/***/ 5935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 3957);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 5065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);








var DashboardPage = /*#__PURE__*/function () {
  function DashboardPage(route) {
    (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardPage);

    this.route = route;
    this.holds = [];
  }

  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.route.queryParams.subscribe(function (params) {
        _this.shipName = params.shipName;
        _this.shipSize = params.shipSize;

        if (params.holds) {
          _this.holds = JSON.parse(params.holds);
        }
      });
    }
  }]);

  return DashboardPage;
}();

DashboardPage.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};

DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-dashboard',
  template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], DashboardPage);


/***/ }),

/***/ 5065:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss?ngResource ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = "ion-content {\n  font-size: 1.5rem;\n}\n\nh1, h2 {\n  font-size: 1.5rem;\n  word-spacing: 0, 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQUVKIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbmgxLGgye1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB3b3JkLXNwYWNpbmc6IDAsNXJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 3957:
/*!**********************************************************!*\
  !*** ./src/app/dashboard/dashboard.page.html?ngResource ***!
  \**********************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card color=\"primary\" >\n    <h1>Ship Name: {{ shipName }}</h1>\n    <h2>Ship Size: {{ shipSize }}</h2>\n  </ion-card>\n  \n  <ion-card color=\"primary\">\n    <h3>Hold:</h3>\n    <ion-item *ngFor=\"let holdItem of holds\">\n      <h1>name: {{ holdItem.name }}</h1>\n      <h1>Quantity: {{ holdItem.quantity }}</h1>\n      <h1>Weight: {{ holdItem.weight }}</h1>\n      <h1>Price: {{ holdItem.price }}</h1> \n    </ion-item>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map