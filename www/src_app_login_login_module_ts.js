"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 6825);






var routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage
}];

var LoginPageRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginPageRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPageRoutingModule);
});

LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ 6825);










var LoginPageModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginPageModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPageModule);
});

LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);








var LoginPage = /*#__PURE__*/function () {
  function LoginPage(formBuilder) {
    var _this = this;

    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginPage);

    this.formBuilder = formBuilder;

    this.submitForm = function () {
      if (_this.ionicForm.valid) {
        console.log(_this.ionicForm.value);
        return false;
      } else {
        return console.log('Please provide all the required values!');
      }
    };
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.ionicForm = this.formBuilder.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
        mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[0-9]+$')]],
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
      });
    }
  }, {
    key: "errorControl",
    get: function get() {
      return this.ionicForm.controls;
    }
  }]);

  return LoginPage;
}();

LoginPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }];
};

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ (function(module) {

module.exports = ".container img {\n  height: 90px;\n  margin-top: 80px;\n  align-items: center;\n}\n\n.header h3, .header h1 {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-size: 1.1rem;\n  margin-left: 70px;\n}\n\n.formulaire {\n  margin: 50px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --border-color: transparent;\n}\n\nion-input {\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n\nion-label {\n  color: #8e8e93;\n}\n\n.button {\n  width: 150px;\n  height: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #1F319D;\n  color: white;\n  margin-left: 100px;\n}\n\nion-icon {\n  margin-left: 10px;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.footer h1 {\n  font-size: 14px;\n}\n\n.footer span {\n  color: #007aff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNDLG1CQUFBO0FBQVQ7O0FBSUk7RUFDSSxxREFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFEUjs7QUFLQTtFQUNLLFlBQUE7QUFGTDs7QUFNRTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFISjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBT0U7RUFDRSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9FO0VBQ0UsZUFBQTtBQUpKOztBQU9FO0VBQ0UsY0FBQTtBQUpKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6ODBweCA7IFxyXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgICAgfVxyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBoMyAsaDF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtdWxhaXJlIHtcclxuICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6ICM4ZThlOTM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjMxOUQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciBzcGFuIHtcclxuICAgIGNvbG9yOiAjMDA3YWZmO1xyXG4gICBcclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "\n<ion-content class=\"container\">\n  <div class =\"container ion-text-center\">\n    <img src=\"assets/logo2.png\">\n  </div>\n  <div class=\"header\">\n    <h3>Login to your Account </h3>\n  </div>\n  <form class=\"formulaire\"  [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" aria-label=\"Email\" type=\"email\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"this.ionicForm.controls?.email.touched && this.ionicForm.controls?.email.invalid\">\n      <div class=\"error ion-padding\" *ngIf=\"errorControl.email.errors?.required\" >\n        <ion-text color=\"danger\">Email is required.</ion-text>\n      </div>\n      <div class=\"ion-padding\" *ngIf=\"errorControl.email.errors?.pattern\">\n        <ion-text color=\"danger\">Please provide valid email.</ion-text>\n      </div>\n    </div>\n    <div>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">password</ion-label>\n          <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <div class=\"form-group form-check\">\n          <a [routerLink]=\"['/forgotpassword']\">forgotpassword?</a>\n        </div>\n        <div *ngIf=\"this.ionicForm.controls?.password.touched && this.ionicForm.controls?.password.invalid\">\n          <div class=\"error ion-padding\" *ngIf=\"errorControl.password.errors?.required\">\n            <ion-text color=\"danger\">password is required.</ion-text>\n          </div>\n          <div class=\"ion-padding\" *ngIf=\"errorControl.password .errors?.pattern\">\n            <ion-text color=\"danger\">Please provide valid password .</ion-text>\n          </div>\n         \n        </div>\n    </div>\n  </form>\n  <div class=\"button signup\">\n    login <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </div>\n <div class=\"footer\">\n   <h1 routerLink =\"/signup\"> Don't have an account? <br> <span >Sign Up</span></h1>\n </div>\n   \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map