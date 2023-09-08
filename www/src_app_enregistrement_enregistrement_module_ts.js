"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_enregistrement_enregistrement_module_ts"],{

/***/ 8755:
/*!*****************************************************************!*\
  !*** ./src/app/enregistrement/enregistrement-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnregistrementPageRoutingModule": function() { return /* binding */ EnregistrementPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _enregistrement_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enregistrement.page */ 9059);






var routes = [{
  path: '',
  component: _enregistrement_page__WEBPACK_IMPORTED_MODULE_2__.EnregistrementPage
}];

var EnregistrementPageRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EnregistrementPageRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EnregistrementPageRoutingModule);
});

EnregistrementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], EnregistrementPageRoutingModule);


/***/ }),

/***/ 803:
/*!*********************************************************!*\
  !*** ./src/app/enregistrement/enregistrement.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnregistrementPageModule": function() { return /* binding */ EnregistrementPageModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _enregistrement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enregistrement-routing.module */ 8755);
/* harmony import */ var _enregistrement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enregistrement.page */ 9059);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);











var routes = [{
  path: '',
  component: _enregistrement_page__WEBPACK_IMPORTED_MODULE_3__.EnregistrementPage
}];

var EnregistrementPageModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EnregistrementPageModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EnregistrementPageModule);
});

EnregistrementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _enregistrement_routing_module__WEBPACK_IMPORTED_MODULE_2__.EnregistrementPageRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
  declarations: [_enregistrement_page__WEBPACK_IMPORTED_MODULE_3__.EnregistrementPage]
})], EnregistrementPageModule);


/***/ }),

/***/ 9059:
/*!*******************************************************!*\
  !*** ./src/app/enregistrement/enregistrement.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnregistrementPage": function() { return /* binding */ EnregistrementPage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _enregistrement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enregistrement.page.html?ngResource */ 6722);
/* harmony import */ var _enregistrement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enregistrement.page.scss?ngResource */ 8364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_navireservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navireservice.service */ 5130);









var EnregistrementPage = /*#__PURE__*/function () {
  function EnregistrementPage(router, navireserviceService) {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EnregistrementPage);

    this.router = router;
    this.navireserviceService = navireserviceService;
    this.isSaving = false;
    this.holds = [];
    this.Navire = [];
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EnregistrementPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.Navire = this.navireserviceService.navire;
    }
  }, {
    key: "enregistrerNavire",
    value: function enregistrerNavire() {
      this.isSaving = true;
      var nouveauNavire = {
        name: this.nomNavire,
        imageUrl: this.imageNavire,
        holds: this.holds,
        taille: 0,
        id: 0
      };
      this.navireserviceService.ajouterNavire(nouveauNavire);
      this.router.navigate(['/logo-docker']);
    }
  }, {
    key: "addHold",
    value: function addHold() {
      this.holds.push({
        name: '',
        quantity: null,
        weight: null,
        price: null
      });
    }
  }, {
    key: "removeHold",
    value: function removeHold(index) {
      this.holds.splice(index, 1);
    }
  }]);

  return EnregistrementPage;
}();

EnregistrementPage.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _services_navireservice_service__WEBPACK_IMPORTED_MODULE_4__.NavireserviceService
  }];
};

EnregistrementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-enregistrement',
  template: _enregistrement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_enregistrement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], EnregistrementPage);


/***/ }),

/***/ 8364:
/*!********************************************************************!*\
  !*** ./src/app/enregistrement/enregistrement.page.scss?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "ion-header {\n  padding: auto;\n}\nion-header ion-toolbar {\n  padding: auto;\n}\nion-header ion-toolbar ion-title {\n  font-size: 1.2rem;\n  text-align: center;\n}\n.body {\n  display: flex;\n  justify-content: center;\n}\n.body section {\n  width: 70%;\n  margin: auto;\n}\n.body section ion-label {\n  font-size: 1.2rem;\n}\n.body h2 {\n  font-size: 1.2rem;\n  text-align: center;\n}\n.body p {\n  font-size: 1.2rem;\n}\n.para {\n  margin-bottom: 20px;\n}\n.para ion-icon {\n  border-radius: 50%;\n  bottom: 15px;\n}\nion-icon {\n  border-radius: 50%;\n  font-size: 8.5rem;\n}\n.bg-img {\n  padding: 1px;\n  height: 100%;\n  width: 100%;\n  background-image: url('navire2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-card {\n  top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVucmVnaXN0cmVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7QUFDRDtBQUFDO0VBQ0MsYUFBQTtBQUVGO0FBREU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBR0o7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVGO0FBREU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUdKO0FBRkk7RUFDRSxpQkFBQTtBQUlOO0FBREU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBR0o7QUFERTtFQUNFLGlCQUFBO0FBR0o7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUlKO0FBQUc7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0FBR0o7QUFBRztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUdKO0FBREE7RUFDRyxVQUFBO0FBSUgiLCJmaWxlIjoiZW5yZWdpc3RyZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuIHBhZGRpbmc6IGF1dG87XHJcbiBpb24tdG9vbGJhcntcclxuICBwYWRkaW5nOiBhdXRvO1xyXG4gIGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuIH1cclxufVxyXG4uYm9keXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfTtcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcbi5wYXJhIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGlvbi1pY29ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAgIH1cclxuICAgaW9uLWljb257XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDguNXJlbTtcclxuICAgIFxyXG4gICB9XHJcbiAgIC5iZy1pbWd7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL25hdmlyZTIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5pb24tY2FyZHtcclxuICAgdG9wOjEwMHB4XHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 6722:
/*!********************************************************************!*\
  !*** ./src/app/enregistrement/enregistrement.page.html?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"logo-docker\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>creation d'un nouveau navire</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"body\">\n  <div class=\"bg-img\">\n    <ion-card>\n      <ion-card-header color=\"primary\">\n        <ion-card-title>Créer un nouveau navire</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <section>\n          <h2>Formulaire d'enregistrement du navire</h2>\n          <p class=\"para\">Remplissez les informations suivantes concernant le formulaire d'enregistrement :</p>\n          <ion-item>\n            <ion-label position=\"floating\">Nom du navire</ion-label>\n            <ion-input type=\"string\" [(ngModel)]=\"nomNavire\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">imageNavire</ion-label>\n            <ion-input type=\"string\" [(ngModel)]=\"imageNavire\"></ion-input>\n          </ion-item>\n        </section>\n        <ion-fab-button (click)=\"enregistrerNavire()\" expand=\"full\" >\n          <ion-icon name=\"arrow-down-circle-outline\" ></ion-icon>\n        </ion-fab-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_enregistrement_enregistrement_module_ts.js.map