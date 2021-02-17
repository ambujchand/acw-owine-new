(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-list-product-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-list/product-list.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-list/product-list.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Product List</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n    \r\n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findProductName($event)\"></ion-searchbar>\r\n      <ion-list>\r\n          <ion-grid>\r\n            <ion-row style=\"background-color: #FAFAFA;\" *ngFor=\"let product of allProducts\">\r\n              <ion-col size=\"3\">\r\n                <img src=\"{{product.image}}\" class=\"imageSize\">\r\n              </ion-col>\r\n              <ion-col class=\"textClass\" (click)=\"productDetails(product)\">\r\n                <b>{{product.product_name}}</b>\r\n               <p>Available Quantity : {{product.qty_per_unit}}</p>\r\n               <p>Price : $ {{product.unit_price}}</p>\r\n              </ion-col>\r\n              <!-- <ion-col size=\"2\" class=\"iconClass\">\r\n                <i class=\"fas fa-cart-plus\"></i>\r\n              </ion-col> -->\r\n            </ion-row>\r\n            </ion-grid>\r\n      </ion-list>\r\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n        <ion-infinite-scroll-content\r\n          loadingSpinner=\"bubbles\"\r\n          loadingText=\"Loading...\">\r\n        </ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>\r\n      \r\n  </ion-content>\r\n  ");

/***/ }),

/***/ "./src/app/pages/product/product-list/product-list-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function() { return ProductListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list.page */ "./src/app/pages/product/product-list/product-list.page.ts");




const routes = [
    {
        path: '',
        component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }
];
let ProductListPageRoutingModule = class ProductListPageRoutingModule {
};
ProductListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/product-list/product-list.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list-routing.module */ "./src/app/pages/product/product-list/product-list-routing.module.ts");
/* harmony import */ var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list.page */ "./src/app/pages/product/product-list/product-list.page.ts");







let ProductListPageModule = class ProductListPageModule {
};
ProductListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListPageRoutingModule"]
        ],
        declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })
], ProductListPageModule);



/***/ }),

/***/ "./src/app/pages/product/product-list/product-list.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trash {\n  color: red;\n  margin-right: 2vw;\n  font-size: 6vw;\n}\n\n.edit {\n  font-size: 6vw;\n}\n\nion-row {\n  background-color: #FAFAFA;\n  margin-bottom: 2vw;\n}\n\nb {\n  color: #6B3D1A;\n}\n\n.iconClass {\n  padding: 0px;\n  margin: 5vw 0vw 0vw 0vw;\n}\n\np {\n  padding: 1px;\n  margin: 1px;\n  font-size: 4vw;\n}\n\n.imageSize {\n  height: 22vw;\n  width: 20vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmFzaHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcbi5lZGl0e1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcclxufVxyXG5cclxuYntcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG59XHJcblxyXG4uaWNvbkNsYXNzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogNXZ3IDB2dyAwdncgMHZ3XHJcbn1cclxuXHJcbnB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4uaW1hZ2VTaXplIHtcclxuICAgIGhlaWdodDogMjJ2dztcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/product/product-list/product-list.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product/product-list/product-list.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPage", function() { return ProductListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product.service */ "./src/app/pages/product.service.ts");





let ProductListPage = class ProductListPage {
    constructor(loading, router, product) {
        this.loading = loading;
        this.router = router;
        this.product = product;
        this.allProducts = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
            this.cateloguePage = this.router.getCurrentNavigation().extras.state.cataloguePage;
            this.routerUrl = this.router.getCurrentNavigation().extras.state.routerUrl;
            console.log(this.routerUrl);
            // routerUrl
            console.log(this.categoryId);
            console.log(this.cateloguePage);
        }
    }
    ionViewWillEnter() {
        this.checkCatagoryId();
        if (this.cateloguePage == 1) {
            this.getCatelogueProductDetails();
        }
        else {
            this.getCategoryDetails();
        }
    }
    checkCatagoryId() {
        if (this.categoryId) {
        }
        else {
            this.router.navigateByUrl('/product-catagory');
        }
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getCategoryDetails();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            console.log(event);
            this.getCategoryDetails();
            if (this.products.length == this.products.length) {
                event.target.disabled = true;
            }
            event.target.complete();
        }, 2000);
    }
    findProductName(event) {
        console.log(this.allProducts);
        if (event.target.value.length > 0) {
            var data = [];
            console.log(this.products);
            for (let i = 0; i < this.products.length; i++) {
                const name = this.products[i].product_name.toLowerCase();
                if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                    data.push(this.products[i]);
                }
            }
            this.allProducts = data;
            console.log(this.allProducts);
        }
        else {
            this.allProducts = this.products;
        }
    }
    getCatelogueProductDetails() {
        if (this.categoryId != '') {
            this.loading.present();
            const postData = new FormData();
            postData.append('category_id', this.categoryId);
            postData.append('skip_id', JSON.stringify(this.value));
            this.product.catalogueProducts(postData).subscribe(data => {
                this.allProducts = data.data;
                this.products = data.data;
                if (data.length > 0) {
                    this.value = this.value + data.data.length;
                    this.allProducts.push(data.data);
                }
                this.loading.dismiss();
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
        else {
            this.router.navigateByUrl('product-catagory');
        }
    }
    getCategoryDetails() {
        if (this.categoryId != '') {
            this.loading.present();
            const postData = new FormData();
            postData.append('category_id', this.categoryId);
            postData.append('skip_id', JSON.stringify(this.value));
            this.product.getProductDetails(postData).subscribe(data => {
                this.allProducts = data.data;
                this.products = data.data;
                if (data.length > 0) {
                    this.value = this.value + data.data.length;
                    this.allProducts.push(data.data);
                }
                this.loading.dismiss();
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
        else {
            this.router.navigateByUrl('product-catagory');
        }
    }
    productDetails(product) {
        console.log(product);
        console.log('ooooo');
        let navigationExtras = {
            state: {
                productDetails: product,
                routerUrl: this.routerUrl
            }
        };
        this.router.navigate(['/product-details'], navigationExtras);
    }
    ngOnInit() {
    }
};
ProductListPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ProductListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-list/product-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-list.page.scss */ "./src/app/pages/product/product-list/product-list.page.scss")).default]
    })
], ProductListPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-product-list-product-list-module-es2015.js.map