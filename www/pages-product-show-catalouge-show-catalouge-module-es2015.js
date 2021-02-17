(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-show-catalouge-show-catalouge-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/show-catalouge/show-catalouge.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/show-catalouge/show-catalouge.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Product Catalogue</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n    <!-- Searchbar with cancel button shown on focus -->\n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findCategoryName($event)\"></ion-searchbar>\n\n  <Strong class=\"text-color\">Product Catagory</Strong>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let productCat of productCategory\">\n          <ion-card (click)=\"catagoryProducts(productCat.id)\">\n            <img src=\"{{productCat.image}}\" style=\"height: 35vw;\n            width: 46vw;\">\n            <br>\n            <strong class=\"ml-2\">{{productCat.name}}</strong> \n        </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/product/show-catalouge/show-catalouge-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/product/show-catalouge/show-catalouge-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ShowCatalougePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCatalougePageRoutingModule", function() { return ShowCatalougePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _show_catalouge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-catalouge.page */ "./src/app/pages/product/show-catalouge/show-catalouge.page.ts");




const routes = [
    {
        path: '',
        component: _show_catalouge_page__WEBPACK_IMPORTED_MODULE_3__["ShowCatalougePage"]
    }
];
let ShowCatalougePageRoutingModule = class ShowCatalougePageRoutingModule {
};
ShowCatalougePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowCatalougePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/show-catalouge/show-catalouge.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product/show-catalouge/show-catalouge.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShowCatalougePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCatalougePageModule", function() { return ShowCatalougePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _show_catalouge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-catalouge-routing.module */ "./src/app/pages/product/show-catalouge/show-catalouge-routing.module.ts");
/* harmony import */ var _show_catalouge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-catalouge.page */ "./src/app/pages/product/show-catalouge/show-catalouge.page.ts");







let ShowCatalougePageModule = class ShowCatalougePageModule {
};
ShowCatalougePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _show_catalouge_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowCatalougePageRoutingModule"]
        ],
        declarations: [_show_catalouge_page__WEBPACK_IMPORTED_MODULE_6__["ShowCatalougePage"]]
    })
], ShowCatalougePageModule);



/***/ }),

/***/ "./src/app/pages/product/show-catalouge/show-catalouge.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product/show-catalouge/show-catalouge.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-three {\n  width: 27vw;\n}\n\nion-segment-button {\n  width: 30vw;\n}\n\n.text-color {\n  color: #6B3D1A;\n  font-weight: 700;\n  margin-left: 3vw;\n  margin-top: 4px;\n  margin-bottom: 1px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-row {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-card {\n  padding: 0px;\n  margin: 3px;\n}\n\n.imageClass {\n  height: 16vw;\n  width: 27vw;\n}\n\n.textStyle {\n  font-size: 3vw;\n  color: #6B3D1A;\n}\n\np {\n  margin: 1px;\n  font-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9zaG93LWNhdGFsb3VnZS9zaG93LWNhdGFsb3VnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBRUksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9zaG93LWNhdGFsb3VnZS9zaG93LWNhdGFsb3VnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdy10aHJlZXtcclxuICAgIHdpZHRoOiAyN3Z3O1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b257XHJcbiAgICB3aWR0aDogMzB2dztcclxufVxyXG5cclxuLnRleHQtY29sb3J7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogM3Z3O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbmlvbi1jb2x7XHJcbiAgLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbmlvbi1yb3d7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbi5pbWFnZUNsYXNzIHtcclxuICAgIGhlaWdodDogMTZ2dztcclxuICAgIHdpZHRoOiAyN3Z3O1xyXG59XHJcblxyXG4udGV4dFN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxufVxyXG5cclxucHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/product/show-catalouge/show-catalouge.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/product/show-catalouge/show-catalouge.page.ts ***!
  \*********************************************************************/
/*! exports provided: ShowCatalougePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCatalougePage", function() { return ShowCatalougePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product.service */ "./src/app/pages/product.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");






let ShowCatalougePage = class ShowCatalougePage {
    constructor(env, loading, router, product) {
        this.env = env;
        this.loading = loading;
        this.router = router;
        this.product = product;
        this.ifLogin = JSON.parse(localStorage.getItem('user'));
        this.imageUrl = env.IMG_URL;
    }
    ionViewWillEnter() {
        this.catalogueCategories();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            console.log(event);
            // this.getSellers();
            // if (this.categories.length == this.categories.length) {
            //   event.target.disabled = true;
            // }
            event.target.complete();
        }, 2000);
    }
    findCategoryName(event) {
        if (event.target.value.length > 0) {
            var data = [];
            for (let i = 0; i < this.allProducts.length; i++) {
                const name = this.allProducts[i].name.toLowerCase();
                if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                    data.push(this.allProducts[i]);
                }
            }
            this.productCategory = data;
        }
        else {
            this.productCategory = this.allProducts;
        }
    }
    catalogueCategories() {
        this.loading.present();
        this.product.getProductCatalougeDetails().subscribe(data => {
            console.log(data);
            this.loading.dismiss();
            this.productCategory = data.data;
            this.allProducts = data.data;
            // if(data.data.length>0)
            // {
            //   this.value = this.value + data.data.length;
            //   this.alldata.push(data.data);
            // }
        }, onerror => {
            if (onerror.status == 0) {
                this.loading.presentToastWarning('check your internet connection.');
                this.loading.dismiss();
            }
            else if (onerror.status == 500) {
                this.loading.presentToastError('Server error.');
                this.loading.dismiss();
            }
        });
    }
    catagoryProducts(categoryId) {
        console.log(categoryId);
        let navigationExtras = {
            state: {
                categoryId: categoryId,
                cataloguePage: 1,
                routerUrl: '/show-catalouge'
            }
        };
        this.router.navigate(['/product-list'], navigationExtras);
    }
    ngOnInit() {
    }
};
ShowCatalougePage.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ShowCatalougePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-catalouge',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-catalouge.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/show-catalouge/show-catalouge.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-catalouge.page.scss */ "./src/app/pages/product/show-catalouge/show-catalouge.page.scss")).default]
    })
], ShowCatalougePage);



/***/ })

}]);
//# sourceMappingURL=pages-product-show-catalouge-show-catalouge-module-es2015.js.map