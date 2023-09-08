"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_message_message_module_ts"],{

/***/ 881:
/*!***************************************************!*\
  !*** ./src/app/message/message-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePageRoutingModule": function() { return /* binding */ MessagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page */ 8070);






var routes = [{
  path: '',
  component: _message_page__WEBPACK_IMPORTED_MODULE_2__.MessagePage
}];

var MessagePageRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MessagePageRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MessagePageRoutingModule);
});

MessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], MessagePageRoutingModule);


/***/ }),

/***/ 2770:
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePageModule": function() { return /* binding */ MessagePageModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-routing.module */ 881);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page */ 8070);










var MessagePageModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MessagePageModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MessagePageModule);
});

MessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _message_routing_module__WEBPACK_IMPORTED_MODULE_2__.MessagePageRoutingModule],
  declarations: [_message_page__WEBPACK_IMPORTED_MODULE_3__.MessagePage]
})], MessagePageModule);


/***/ }),

/***/ 8070:
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePage": function() { return /* binding */ MessagePage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page.html?ngResource */ 9140);
/* harmony import */ var _message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page.scss?ngResource */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/message.service */ 2684);








var MessagePage = /*#__PURE__*/function () {
  function MessagePage(messageService) {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MessagePage);

    this.messageService = messageService;
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MessagePage, [{
    key: "sendMessage",
    value: function sendMessage() {
      if (this.message) {
        this.messageService.sendMessage(this.message);
        this.message = '';
      }
    }
  }, {
    key: "messages",
    get: function get() {
      return this.messageService.getMessages();
    }
  }]);

  return MessagePage;
}();

MessagePage.ctorParameters = function () {
  return [{
    type: _services_message_service__WEBPACK_IMPORTED_MODULE_4__.MessageService
  }];
};

MessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-message',
  template: _message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], MessagePage);


/***/ }),

/***/ 2684:
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": function() { return /* binding */ MessageService; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var MessageService = /*#__PURE__*/function () {
  function MessageService() {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MessageService);

    this.messages = [];
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MessageService, [{
    key: "sendMessage",
    value: function sendMessage(message) {
      this.messages.push("[".concat(this.username, "]: ").concat(message));
    }
  }, {
    key: "getMessages",
    value: function getMessages() {
      return this.messages;
    }
  }]);

  return MessageService;
}();

MessageService.ctorParameters = function () {
  return [];
};

MessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], MessageService);


/***/ }),

/***/ 1567:
/*!******************************************************!*\
  !*** ./src/app/message/message.page.scss?ngResource ***!
  \******************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 9140:
/*!******************************************************!*\
  !*** ./src/app/message/message.page.html?ngResource ***!
  \******************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"logo-docker\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>chats</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"light\" click=\"logout()\">\r\n        <ion-icon name=\"log-out\" slot=\"icon-only\">\r\n\r\n        </ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n <ion-list>\r\n  <ion-item *ngFor=\"let message of messages\">\r\n    {{ message }}\r\n  </ion-item>\r\n </ion-list>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-input [(ngModel)]=\"message\" placeholder=\"Saisissez votre message\"></ion-input>\r\n    <ion-button expand=\"full\" (click)=\"sendMessage()\"><ion-icon name=\"navigate-outline\"></ion-icon></ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_message_message_module_ts.js.map