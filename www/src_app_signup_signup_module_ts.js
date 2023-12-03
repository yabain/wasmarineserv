"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 6661:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": function() { return /* binding */ SignupPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page */ 771);






var routes = [{
  path: '',
  component: _signup_page__WEBPACK_IMPORTED_MODULE_2__.SignupPage
}];

var SignupPageRoutingModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SignupPageRoutingModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SignupPageRoutingModule);
});

SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], SignupPageRoutingModule);


/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": function() { return /* binding */ SignupPageModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ 6661);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ 771);










var SignupPageModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SignupPageModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SignupPageModule);
});

SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__.SignupPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
  declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_3__.SignupPage]
})], SignupPageModule);


/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": function() { return /* binding */ SignupPage; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 1998);
/* harmony import */ var _signup_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.page.scss?ngResource */ 2444);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);








var SignupPage = /*#__PURE__*/function () {
  function SignupPage(formBuilder) {
    var _this = this;

    (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignupPage);

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

  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SignupPage, [{
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

  return SignupPage;
}();

SignupPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }];
};

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-signup',
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_signup_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SignupPage);


/***/ }),

/***/ 2444:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.scss?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = ".container img {\n  height: 90px;\n  margin-top: 80px;\n  align-items: center;\n}\n\n.header h1 {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-size: 1.1rem;\n  margin-left: 50px;\n}\n\n.formulaire {\n  margin: 50px;\n}\n\nion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --border-color: transparent;\n}\n\nion-input {\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n\nion-label {\n  color: #8e8e93;\n}\n\n.button {\n  width: 150px;\n  height: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 40px;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #1F319D;\n  color: white;\n  margin-left: 100px;\n}\n\nion-icon {\n  margin-left: 10px;\n}\n\n.footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.footer h1 {\n  font-size: 14px;\n}\n\n.footer span {\n  color: #007aff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQyxtQkFBQTtBQUFUOztBQUlHO0VBQ0sscURBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBS0E7RUFDRyxZQUFBO0FBRkg7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBSEo7O0FBTUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU9FO0VBQ0UsaUJBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPRTtFQUNFLGVBQUE7QUFKSjs7QUFPRTtFQUNFLGNBQUE7QUFKSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4IDsgXHJcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICB9XHJcbn1cclxuLmhlYWRlcntcclxuICAgaDF7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtdWxhaXJlIHtcclxuICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjOGU4ZTkzO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMTlEO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXIgc3BhbiB7XHJcbiAgICBjb2xvcjogIzAwN2FmZjtcclxuICAgXHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 1998:
/*!****************************************************!*\
  !*** ./src/app/signup/signup.page.html?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "<ion-content class=\"container\">\n  <div class=\"container ion-text-center\">\n    <img src=\"assets/logo2.png\">\n  </div>\n  <div class=\"header\">\n    <h1>create a New account </h1>\n  </div>\n  <form class=\"formulaire\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input formControlName=\"name\" type=\"text\" aria-label=\"Name\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"this.ionicForm.controls?.name.touched && this.ionicForm.controls?.name.invalid\">\n      <div class=\"ion-padding\" *ngIf=\"this.ionicForm.controls?.name.errors?.required\">\n        <ion-text color=\"danger\">Name is required.</ion-text>\n      </div>\n      <div class=\"ion-padding\" color=\"danger\" *ngIf=\"this.ionicForm.controls?.name.errors?.minlength\">\n        <ion-text color=\"danger\">Name should be min 2 chars long.</ion-text>\n      </div>\n    </div>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" aria-label=\"Email\" type=\"email\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"this.ionicForm.controls?.email.touched && this.ionicForm.controls?.email.invalid\">\n      <div class=\"error ion-padding\" *ngIf=\"errorControl.email.errors?.required\">\n        <ion-text color=\"danger\">Email is required.</ion-text>\n      </div>\n      <div class=\"ion-padding\" *ngIf=\"errorControl.email.errors?.pattern\">\n        <ion-text color=\"danger\">Please provide valid email.</ion-text>\n      </div>\n    </div>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Mobile</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"mobile\" type=\"text\" aria-label=\"Mobile\" required></ion-input>\n    </ion-item>\n    <div>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\">password</ion-label>\n        <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div *ngIf=\"this.ionicForm.controls?.password.touched && this.ionicForm.controls?.password.invalid\">\n        <div class=\"error ion-padding\" *ngIf=\"errorControl.password.errors?.required\">\n          <ion-text color=\"danger\">password is required.</ion-text>\n        </div>\n        <div class=\"ion-padding\" *ngIf=\"errorControl.password .errors?.pattern\">\n          <ion-text color=\"danger\">Please provide valid password .</ion-text>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"button signup\">\n    Signup <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n  </div>\n  <div class=\"footer signup-footer\">\n    <h3 routerLink=\"/tablinks\">Aready have an account?<br> <span>Login</span></h3>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map