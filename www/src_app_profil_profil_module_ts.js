"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profil_profil_module_ts"],{

/***/ 2602:
/*!*************************************************!*\
  !*** ./src/app/profil/profil-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageRoutingModule": function() { return /* binding */ ProfilPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.page */ 9014);






var routes = [{
  path: '',
  component: _profil_page__WEBPACK_IMPORTED_MODULE_2__.ProfilPage
}];

var ProfilPageRoutingModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ProfilPageRoutingModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProfilPageRoutingModule);
});

ProfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ProfilPageRoutingModule);


/***/ }),

/***/ 8718:
/*!*****************************************!*\
  !*** ./src/app/profil/profil.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageModule": function() { return /* binding */ ProfilPageModule; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil-routing.module */ 2602);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profil.page */ 9014);










var ProfilPageModule = /*#__PURE__*/(0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ProfilPageModule() {
  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProfilPageModule);
});

ProfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _profil_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfilPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
  declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_3__.ProfilPage]
})], ProfilPageModule);


/***/ }),

/***/ 9014:
/*!***************************************!*\
  !*** ./src/app/profil/profil.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPage": function() { return /* binding */ ProfilPage; }
/* harmony export */ });
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.page.html?ngResource */ 2090);
/* harmony import */ var _profil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profil.page.scss?ngResource */ 2540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);









var ProfilPage = /*#__PURE__*/function () {
  function ProfilPage(formBuilder) {
    var _this = this;

    (0,D_was_marine_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfilPage);

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

  (0,D_was_marine_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfilPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.ionicForm = this.formBuilder.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
        password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
      });
    }
  }, {
    key: "errorControl",
    get: function get() {
      return this.ionicForm.controls;
    }
  }]);

  return ProfilPage;
}();

ProfilPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }];
};

ProfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-profil',
  template: _profil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_profil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ProfilPage);


/***/ }),

/***/ 2540:
/*!****************************************************!*\
  !*** ./src/app/profil/profil.page.scss?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = ".header {\n  height: 250px;\n  background-color: #1F319D;\n  width: 100%;\n  padding-top: 1px;\n}\n\n.header h2, h3 {\n  color: #fff;\n  text-align: center;\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n\n.img-box {\n  border-radius: 50%;\n  overflow: hidden;\n  height: 80px;\n  width: 80px;\n  margin-top: 1px;\n}\n\n.border-white {\n  border: #1F319D 4px;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.border-blue {\n  border: 7px solid white;\n  border-radius: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.space-between {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 10px 0px 10px;\n}\n\n.followings {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.followings p {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0MsZ0JBQUE7RUFDRCxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFJSjs7QUFGQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQywyQkFBQTtBQU9MOztBQUxBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLFlBQUE7QUFTSiIsImZpbGUiOiJwcm9maWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMTlEO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcbi5oZWFkZXIgaDIsaDMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcbi5pbWctYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuLmJvcmRlci13aGl0ZSB7XHJcbiAgICBib3JkZXI6ICMxRjMxOUQgNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5ib3JkZXItYmx1ZSB7XHJcbiAgICBib3JkZXI6IDdweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcbi5mb2xsb3dpbmdze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb2xsb3dpbmdzIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2090:
/*!****************************************************!*\
  !*** ./src/app/profil/profil.page.html?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "\n<ion-content>\n<div class=\"header\">\n\n<div class=\"flex\">\n  <div class=\"border-blue\">\n    <div class=\"border-white\">\n      <div class=\"img-box\">\n        <img src=\"assets/images1.png\">\n      </div>   \n    </div>\n  </div>\n</div>\n<h2>User</h2>\n<h3>Poste</h3>\n<div class=\"space-between\">\n  <div class=\"followings\">\n <ion-badge color=\"primary\">120</ion-badge>\n    <p>heure de travail sur l'annee:<span>365</span></p>\n  </div>\n  <div class=\"followings\">\n    <ion-badge color=\"primary\" >31</ion-badge>\n    <p>heure d'abscence sur le mois:<span>31</span></p>\n  </div>\n  <div class=\"followings\">\n    <ion-badge color=\"primary\" >31</ion-badge>\n    <p>heure d'abscence sur le mois:<span>31</span></p>\n  </div>\n</div>\n</div>\n<form class=\"formulaire\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Name:</ion-label>\n    <ion-input formControlName=\"name\" type=\"text\" aria-label=\"Name\"></ion-input>\n  </ion-item>\n  <div *ngIf=\"this.ionicForm.controls?.name.touched && this.ionicForm.controls?.name.invalid\">\n    <div class=\"ion-padding\" *ngIf=\"this.ionicForm.controls?.name.errors?.required\">\n      <ion-text color=\"danger\">Name is required.</ion-text>\n    </div>\n    <div class=\"ion-padding\" color=\"danger\" *ngIf=\"this.ionicForm.controls?.name.errors?.minlength\">\n      <ion-text color=\"danger\">Name should be min 2 chars long.</ion-text>\n    </div>\n  </div>\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Email:</ion-label>\n    <ion-input formControlName=\"email\" aria-label=\"Email\" type=\"email\"></ion-input>\n  </ion-item>\n  <div *ngIf=\"this.ionicForm.controls?.email.touched && this.ionicForm.controls?.email.invalid\">\n    <div class=\"error ion-padding\" *ngIf=\"errorControl.email.errors?.required\">\n      <ion-text color=\"danger\">Email is required.</ion-text>\n    </div>\n    <div class=\"ion-padding\" *ngIf=\"errorControl.email.errors?.pattern\">\n      <ion-text color=\"danger\">Please provide valid email.</ion-text>\n    </div>\n  </div>\n  <div>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">password:</ion-label>\n      <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <div *ngIf=\"this.ionicForm.controls?.password.touched && this.ionicForm.controls?.password.invalid\">\n      <div class=\"error ion-padding\" *ngIf=\"errorControl.password.errors?.required\">\n        <ion-text color=\"danger\">password is required.</ion-text>\n      </div>\n      <div class=\"ion-padding\" *ngIf=\"errorControl.password .errors?.pattern\">\n        <ion-text color=\"danger\">Please provide valid password .</ion-text>\n      </div>\n    </div>\n  </div>\n</form>\n</ion-content> \n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profil_profil_module_ts.js.map