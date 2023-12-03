"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tablinks_item_item_module_ts"],{

/***/ 2785:
/*!******************************************************!*\
  !*** ./src/app/tablinks/item/item-routing.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPageRoutingModule": function() { return /* binding */ ItemPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.page */ 2358);






var routes = [{
  path: '',
  component: _item_page__WEBPACK_IMPORTED_MODULE_2__.ItemPage
}];

var ItemPageRoutingModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ItemPageRoutingModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ItemPageRoutingModule);
});

ItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ItemPageRoutingModule);


/***/ }),

/***/ 5641:
/*!**********************************************!*\
  !*** ./src/app/tablinks/item/item.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPageModule": function() { return /* binding */ ItemPageModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-routing.module */ 2785);
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.page */ 2358);










var ItemPageModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ItemPageModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ItemPageModule);
});

ItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _item_routing_module__WEBPACK_IMPORTED_MODULE_2__.ItemPageRoutingModule],
  declarations: [_item_page__WEBPACK_IMPORTED_MODULE_3__.ItemPage]
})], ItemPageModule);


/***/ }),

/***/ 2358:
/*!********************************************!*\
  !*** ./src/app/tablinks/item/item.page.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPage": function() { return /* binding */ ItemPage; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.page.html?ngResource */ 8146);
/* harmony import */ var _item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.page.scss?ngResource */ 4887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







var ItemPage = /*#__PURE__*/function () {
  function ItemPage() {
    (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemPage);
  }

  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ItemPage;
}();

ItemPage.ctorParameters = function () {
  return [];
};

ItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-item',
  template: _item_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_item_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ItemPage);


/***/ }),

/***/ 4887:
/*!*********************************************************!*\
  !*** ./src/app/tablinks/item/item.page.scss?ngResource ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8146:
/*!*********************************************************!*\
  !*** ./src/app/tablinks/item/item.page.html?ngResource ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_item_item_module_ts.js.map