"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tablinks_tablinks_module_ts"],{

/***/ 3030:
/*!*****************************************************!*\
  !*** ./src/app/tablinks/tablinks-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageRoutingModule": function() { return /* binding */ TablinksPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablinks.page */ 7056);






var routes = [{
  path: 'tablinks',
  component: _tablinks_page__WEBPACK_IMPORTED_MODULE_2__.TablinksPage,
  children: [// {
  //   path: 'home',
  //   loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'profil',
    loadChildren: function loadChildren() {
      return __webpack_require__.e(/*! import() */ "src_app_profil_profil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profil/profil.module */ 8718)).then(function (m) {
        return m.ProfilPageModule;
      });
    }
  }, {
    path: 'dashboard',
    loadChildren: function loadChildren() {
      return __webpack_require__.e(/*! import() */ "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 4814)).then(function (m) {
        return m.DashboardPageModule;
      });
    }
  }, {
    path: 'settings',
    loadChildren: function loadChildren() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 7075)).then(function (m) {
        return m.SettingsPageModule;
      });
    }
  }, {
    path: 'logo-docker',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_logo-docker_logo-docker_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../logo-docker/logo-docker.module */ 6918)).then(function (m) {
        return m.LogoDockerPageModule;
      });
    }
  }, {
    path: 'message',
    loadChildren: function loadChildren() {
      return __webpack_require__.e(/*! import() */ "src_app_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../message/message.module */ 2770)).then(function (m) {
        return m.MessagePageModule;
      });
    }
  } // {
  //   path: '',
  //   redirectTo: '/tablinks/profil',
  //   pathMatch: 'full'
  // }
  ]
}, {
  path: '',
  redirectTo: 'tablinks/profil',
  pathMatch: 'full'
}, {
  path: 'item/:id',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_tablinks_item_item_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./item/item.module */ 5641)).then(function (m) {
      return m.ItemPageModule;
    });
  }
}];

var TablinksPageRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TablinksPageRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TablinksPageRoutingModule);
});

TablinksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], TablinksPageRoutingModule);


/***/ }),

/***/ 2616:
/*!*********************************************!*\
  !*** ./src/app/tablinks/tablinks.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageModule": function() { return /* binding */ TablinksPageModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablinks-routing.module */ 3030);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablinks.page */ 7056);










var TablinksPageModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TablinksPageModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TablinksPageModule);
});

TablinksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_2__.TablinksPageRoutingModule],
  declarations: [_tablinks_page__WEBPACK_IMPORTED_MODULE_3__.TablinksPage]
})], TablinksPageModule);


/***/ }),

/***/ 7056:
/*!*******************************************!*\
  !*** ./src/app/tablinks/tablinks.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPage": function() { return /* binding */ TablinksPage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tablinks_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablinks.page.html?ngResource */ 3462);
/* harmony import */ var _tablinks_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tablinks.page.scss?ngResource */ 4567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var TablinksPage = /*#__PURE__*/function () {
  function TablinksPage() {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TablinksPage);
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TablinksPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "setCurebtTab",
    value: function setCurebtTab() {
      this.selectedTab = this.tabs.getSelected();
      console.log(this.selectedTab);
    }
  }]);

  return TablinksPage;
}();

TablinksPage.ctorParameters = function () {
  return [];
};

TablinksPage.propDecorators = {
  tabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild,
    args: ['tabs', {
      static: false
    }]
  }]
};
TablinksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-tablinks',
  template: _tablinks_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_tablinks_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], TablinksPage);


/***/ }),

/***/ 4567:
/*!********************************************************!*\
  !*** ./src/app/tablinks/tablinks.page.scss?ngResource ***!
  \********************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsaW5rcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3462:
/*!********************************************************!*\
  !*** ./src/app/tablinks/tablinks.page.html?ngResource ***!
  \********************************************************/
/***/ (function(module) {

module.exports = "<ion-content>\n  <ion-tabs #tabs (ionTabsDidChange)=\"setCurebtTab()\">\n    <ion-tab-bar slot=\"bottom\">\n      <!-- <ion-tab-button tab=\"home\">\n        <ion-icon [name]=\" selectedTab=='home'? 'person' :'rose-outline'\"></ion-icon>\n        <ion-label>home</ion-label>\n      </ion-tab-button> -->\n      <ion-tab-button tab=\"profil\">\n        <ion-icon [name]=\" selectedTab=='profil'? 'person' :'person-circle-outline'\"></ion-icon>\n        <ion-label>Profile</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"dashboard\">\n        <ion-icon [name]= \" selectedTab=='Dashboard'? 'easel' :'easel-outline'\"></ion-icon>\n        <ion-label>Dashboard</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"settings\">\n        <ion-icon [name]=\" selectedTab=='settings'? 'settings' :'settings-outline'\"></ion-icon>\n        <ion-label>settings</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"message\">\n        <ion-icon [name]=\" selectedTab=='chatbox'? 'chatbox' :'chatbox-ellipses-outline'\"></ion-icon>\n        <ion-label>message</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"logo-docker\">\n        <ion-icon [name]=\"'logo-docker'\"></ion-icon>\n        <ion-label>Navire</ion-label>\n      </ion-tab-button>\n\n\n    </ion-tab-bar>\n    \n    \n  </ion-tabs>\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_tablinks_module_ts.js.map