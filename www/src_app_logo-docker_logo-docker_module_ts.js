"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_logo-docker_logo-docker_module_ts"],{

/***/ 268:
/*!***********************************************************!*\
  !*** ./src/app/logo-docker/logo-docker-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoDockerPageRoutingModule": function() { return /* binding */ LogoDockerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _logo_docker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-docker.page */ 4883);






var routes = [{
  path: '',
  component: _logo_docker_page__WEBPACK_IMPORTED_MODULE_2__.LogoDockerPage
}];

var LogoDockerPageRoutingModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LogoDockerPageRoutingModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LogoDockerPageRoutingModule);
});

LogoDockerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LogoDockerPageRoutingModule);


/***/ }),

/***/ 6918:
/*!***************************************************!*\
  !*** ./src/app/logo-docker/logo-docker.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoDockerPageModule": function() { return /* binding */ LogoDockerPageModule; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _logo_docker_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-docker-routing.module */ 268);
/* harmony import */ var _logo_docker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-docker.page */ 4883);










var LogoDockerPageModule = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LogoDockerPageModule() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LogoDockerPageModule);
});

LogoDockerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _logo_docker_routing_module__WEBPACK_IMPORTED_MODULE_2__.LogoDockerPageRoutingModule],
  declarations: [_logo_docker_page__WEBPACK_IMPORTED_MODULE_3__.LogoDockerPage]
})], LogoDockerPageModule);


/***/ }),

/***/ 4883:
/*!*************************************************!*\
  !*** ./src/app/logo-docker/logo-docker.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoDockerPage": function() { return /* binding */ LogoDockerPage; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _logo_docker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo-docker.page.html?ngResource */ 4217);
/* harmony import */ var _logo_docker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-docker.page.scss?ngResource */ 4343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/api.service */ 5146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_navireservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/navireservice.service */ 5130);










var LogoDockerPage = /*#__PURE__*/function () {
  function LogoDockerPage(apiService, router, navireserviceService) {
    (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LogoDockerPage);

    this.apiService = apiService;
    this.router = router;
    this.navireserviceService = navireserviceService;
    this.slideOpts = {
      slidesPerView: 2.2
    };
    this.slideOpts1 = {
      slidesPerView: 1.3
    };
    this.navireItems = [];
    this.featuredItems = [];
    this.nombreTotalProduits = 0;
  }

  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LogoDockerPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.apiService.items.subscribe(function (navires) {
        _this.navireItems = navires;
        _this.featuredItems = _this.navireItems.map(function (item) {
          return Object.assign(Object.assign({}, item), {
            nombreProduits: 0
          });
        });
      });
    }
  }, {
    key: "getNombreProduits",
    value: function getNombreProduits(navireId) {
      var item = this.featuredItems.find(function (item) {
        return item.id === navireId;
      });

      if (item) {
        return item.nombreProduits;
      } else {
        return 0;
      }
    }
  }, {
    key: "calculateTotalProducts",
    value: function calculateTotalProducts() {
      this.nombreTotalProduits = this.featuredItems.reduce(function (total, item) {
        return total + item.nombreProduits;
      }, 0);
    }
  }, {
    key: "createNavire",
    value: function createNavire() {
      var _this2 = this;

      this.navireserviceService.getNavires().subscribe(function (navire) {
        _this2.navireItems.push(navire);
      });
      console.log("Création d'un nouveau navire");
      this.router.navigate(['/enregistrement']);
    }
  }, {
    key: "addProduct",
    value: function addProduct(navireId) {
      var item = this.featuredItems.find(function (item) {
        return item.id === navireId;
      });

      if (item) {
        item.nombreProduits++;
        this.calculateTotalProducts();
      }
    }
  }, {
    key: "searchNavire",
    value: function searchNavire(event) {
      var customEvent = event;

      if (customEvent && customEvent.detail) {
        var value = customEvent.detail.value;
        console.log('Recherche du navire :', value);
      }
    }
  }, {
    key: "goToCreateCale",
    value: function goToCreateCale() {
      this.router.navigate(['/cale']);
    }
  }]);

  return LogoDockerPage;
}();

LogoDockerPage.ctorParameters = function () {
  return [{
    type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _services_navireservice_service__WEBPACK_IMPORTED_MODULE_5__.NavireserviceService
  }];
};

LogoDockerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-logo-docker',
  template: _logo_docker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_logo_docker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], LogoDockerPage);


/***/ }),

/***/ 5146:
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var src_app_models_navire_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/navire.model */ 2611);







var ApiService = /*#__PURE__*/(0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ApiService() {
  (0,D_YaBi_Frontend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ApiService);

  this.items = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([new src_app_models_navire_model__WEBPACK_IMPORTED_MODULE_2__.Navire('Navire 1', 'assets/navire2.jpg'), new src_app_models_navire_model__WEBPACK_IMPORTED_MODULE_2__.Navire('Navire 2', 'assets/navire2.jpg') // Autres objets Navire avec les valeurs appropriées pour taille et holds
  ]);
});

ApiService.ctorParameters = function () {
  return [];
};

ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], ApiService);


/***/ }),

/***/ 4343:
/*!**************************************************************!*\
  !*** ./src/app/logo-docker/logo-docker.page.scss?ngResource ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = "ion-header {\n  background: var(--ion-color-light);\n}\nion-header ion-list {\n  background: var(--ion-color-primary);\n  border-radius: 0 0 20px 20px;\n  padding-bottom: 7vh;\n}\nion-header ion-list ion-item ion-label {\n  font-weight: bold;\n  font-size: 1.2rem;\n  letter-spacing: 0.5px;\n}\nion-header .marine {\n  margin: 0 8px;\n}\nion-header .marine ion-searchbar {\n  --border-raduis:20px;\n  margin-top: -20px;\n}\nion-content {\n  --background: var(--var-color-light);\n}\nion-content .title {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--ion-color-dark);\n}\nion-content ion-slides ion-card {\n  height: 30vh;\n  width: 100%;\n  border-radius: 10px;\n}\nion-content ion-slides ion-card ion-card-header ion-label, ion-content ion-slides ion-card ion-card-header p {\n  font-weight: bold;\n  font-size: 1.2rem;\n  color: var(--ion-color-dark);\n}\nion-content ion-slides ion-card ion-card-content img {\n  height: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28tZG9ja2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0FBQ0o7QUFBSTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQVk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFFaEI7QUFNSTtFQUNKLGFBQUE7QUFKQTtBQUtBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQUhKO0FBU0E7RUFDSSxvQ0FBQTtBQU5KO0FBT0k7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFMUDtBQVFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQU5aO0FBUWdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNDLDRCQUFBO0FBTnJCO0FBYWdCO0VBQ0ksWUFBQTtBQVhwQiIsImZpbGUiOiJsb2dvLWRvY2tlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGlvbi1saXN0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjAgMCAyMHB4IDIwcHggO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3dmg7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiByZ2IoMTc1LCA1NywgNTcpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hcmluZXtcclxubWFyZ2luOiAwIDhweDtcclxuaW9uLXNlYXJjaGJhcntcclxuICAgIC0tYm9yZGVyLXJhZHVpczoyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgIFxyXG4gICBcclxufVxyXG4gICAgfVxyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS12YXItY29sb3ItbGlnaHQpO1xyXG4gICAgLnRpdGxle1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7IFxyXG4gICAgfVxyXG4gICAgaW9uLXNsaWRlc3tcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsLHB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 4217:
/*!**************************************************************!*\
  !*** ./src/app/logo-docker/logo-docker.page.html?ngResource ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = "<ion-header class=\"ion-no-border\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item color=\"primary\">\r\n        <ion-icon slot=\"start\" name=\"reorder-two\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item color=\"primary\">\r\n        <ion-label>WAs-marine-serve</ion-label>\r\n        <ion-avatar slot=\"end\"></ion-avatar>\r\n        <img src=\"assets/logo2.png\" style=\"height: 50px;\"/>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class = marine>\r\n      <ion-searchbar (ionChange)=\"searchNavire($event)\"></ion-searchbar>\r\n      <ion-button [routerLink]=\"['/enregistrement']\" (click)=\"createNavire()\" expand=\"full\" color=\"primary\">Create Navire</ion-button>\r\n    </div>\r\n  </ion-header>\r\n  <ion-content>\r\n  <ion-grid class=\"ion-margin-top\">\r\n    <ion-item lines=\"none\" color=\"light\">\r\n      <ion-label class=\"title\">Navire</ion-label>\r\n      <ion-button slot=\"end\" size=\"small\" shape=\"round\" color=\"primary\">View all</ion-button>\r\n    </ion-item>\r\n    <ion-row>\r\n        <ion-slides [options]=\"slideOpts\">\r\n            <ion-slide *ngFor=\"let navire of apiService.items |async\">\r\n                <ion-card class=\"bgcard\"  [routerLink]=\"['/cale','tablinks','items',navire.id]\" (click)=\"goToCreateCale()\"  style=\"height:  180px;\">\r\n                    <ion-card-header>\r\n                        <ion-label> \r\n                          <img src=\"{{ navire?.imageUrl }}\" />\r\n                          {{navire?.name}}\r\n                        <p> nombreTotalProduits:{{nombreTotalProduits}}</p>\r\n                        </ion-label>\r\n                    </ion-card-header>\r\n                     </ion-card>\r\n            </ion-slide>\r\n        </ion-slides>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-slides [options]=\"slideOpts\">\r\n          <ion-slide *ngFor=\"let navire of apiService.items |async\">\r\n              <ion-card class=\"bgcard\"  [routerLink]=\"['/cale','tablinks','items',navire.id]\" (click)=\"goToCreateCale()\"style=\"height:180px;\">\r\n                  <ion-card-header>\r\n                      <ion-label> \r\n                        <img [src] =\"navire?.imageUrl\"/>\r\n                        {{navire?.name}}\r\n                      <p> nombreTotalProduits:{{nombreTotalProduits}}</p>\r\n                      </ion-label>\r\n                  </ion-card-header>\r\n                   </ion-card>\r\n          </ion-slide>\r\n      </ion-slides>\r\n  </ion-row>\r\n  </ion-grid>\r\n  \r\n  </ion-content>\r\n  ";

/***/ })

}]);
//# sourceMappingURL=src_app_logo-docker_logo-docker_module_ts.js.map