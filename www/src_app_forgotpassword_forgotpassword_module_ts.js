"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgotpassword_forgotpassword_module_ts"],{

/***/ 1782:
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageRoutingModule": function() { return /* binding */ ForgotpasswordPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword.page */ 5651);






var routes = [{
  path: '',
  component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_2__.ForgotpasswordPage
}];

var ForgotpasswordPageRoutingModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ForgotpasswordPageRoutingModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ForgotpasswordPageRoutingModule);
});

ForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ForgotpasswordPageRoutingModule);


/***/ }),

/***/ 2488:
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": function() { return /* binding */ ForgotpasswordPageModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 1782);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ 5651);










var ForgotpasswordPageModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ForgotpasswordPageModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ForgotpasswordPageModule);
});

ForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_2__.ForgotpasswordPageRoutingModule],
  declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__.ForgotpasswordPage]
})], ForgotpasswordPageModule);


/***/ }),

/***/ 5651:
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": function() { return /* binding */ ForgotpasswordPage; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword.page.html?ngResource */ 3382);
/* harmony import */ var _forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page.scss?ngResource */ 7599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







var ForgotpasswordPage = /*#__PURE__*/function () {
  function ForgotpasswordPage() {
    (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ForgotpasswordPage);
  }

  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ForgotpasswordPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);

  return ForgotpasswordPage;
}();

ForgotpasswordPage.ctorParameters = function () {
  return [];
};

ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-forgotpassword',
  template: _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ForgotpasswordPage);


/***/ }),

/***/ 7599:
/*!********************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = ".container img {\n  height: 90px;\n  margin-top: 80px;\n  align-items: center;\n}\n\nh2 {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-size: 1.2rem;\n  margin-left: 70px;\n}\n\n.btn {\n  width: 150px;\n  height: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #1F319D;\n  color: white;\n  margin-left: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNDLG1CQUFBO0FBQVQ7O0FBR0E7RUFDSSxxREFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4IDsgXHJcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICB9XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbn1cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzE5RDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgXHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 3382:
/*!********************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "<ion-content>\n  <div class =\"container ion-text-center\">\n    <img src=\"assets/logo2.png\">\n  </div>\n<div class=\"container\">\n  <div class=\"loginform\">\n    <h2>Mot de passe oublié ? :</h2>\n    <form action=\"\">\n      <div class=\"form-group\">\n        <label for=\"email\"> E-mail :</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\"\n        placeholder=\"Entrez l'e-mail\" name=\"email\">\n      </div>\n     <div class=\"form-group form-check\">\n      <a [routerLink]=\"['/login']\"> connexion?</a>\n     </div>\n     <button type=\"submit\" class=\"btn btn-primary\">Envoyer</button>\n    </form>\n  </div>\n</div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forgotpassword_forgotpassword_module_ts.js.map