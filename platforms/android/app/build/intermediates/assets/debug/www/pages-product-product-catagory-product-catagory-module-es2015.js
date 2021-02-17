(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-catagory-product-catagory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-catagory/product-catagory.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-catagory/product-catagory.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Product Catagory</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content\r\n      pullingText=\"Pull to refresh\"\r\n      refreshingSpinner=\"circles\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n    <!-- Searchbar with cancel button shown on focus -->\r\n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findCategoryName($event)\"></ion-searchbar>\r\n    <Strong class=\"text-color\">Recently Purchased</Strong>\r\n    <ion-segment scrollable  (ionChange)=\"getScrollData($event)\">       \r\n      <ion-segment-button *ngFor=\"let resent of resentPurc\" value=\"{{resent.id}}\" class=\"p-1\">\r\n          <ion-card class=\"show-three\">\r\n              <img src=\"{{resent.image}}\" class=\"imageClass\"><br>\r\n            <b class=\"textStyle\">{{resent.product_name}}</b> \r\n          </ion-card>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n\r\n  <Strong class=\"text-color\">Product Catagory</Strong>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\" *ngFor=\"let productCat of productCategory\">\r\n          <ion-card (click)=\"catagoryProducts(productCat.id)\">\r\n            <img src=\"{{productCat.image}}\" style=\"height: 35vw;\r\n            width: 46vw;\">\r\n            <br>\r\n            <strong class=\"ml-2\">{{productCat.name}}</strong> \r\n        </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    \r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/product/product-catagory/product-catagory-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/product/product-catagory/product-catagory-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductCatagoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatagoryPageRoutingModule", function() { return ProductCatagoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_catagory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-catagory.page */ "./src/app/pages/product/product-catagory/product-catagory.page.ts");




const routes = [
    {
        path: '',
        component: _product_catagory_page__WEBPACK_IMPORTED_MODULE_3__["ProductCatagoryPage"]
    }
];
let ProductCatagoryPageRoutingModule = class ProductCatagoryPageRoutingModule {
};
ProductCatagoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductCatagoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/product-catagory/product-catagory.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product/product-catagory/product-catagory.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProductCatagoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatagoryPageModule", function() { return ProductCatagoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_catagory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-catagory-routing.module */ "./src/app/pages/product/product-catagory/product-catagory-routing.module.ts");
/* harmony import */ var _product_catagory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-catagory.page */ "./src/app/pages/product/product-catagory/product-catagory.page.ts");







let ProductCatagoryPageModule = class ProductCatagoryPageModule {
};
ProductCatagoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_catagory_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductCatagoryPageRoutingModule"]
        ],
        declarations: [_product_catagory_page__WEBPACK_IMPORTED_MODULE_6__["ProductCatagoryPage"]]
    })
], ProductCatagoryPageModule);



/***/ }),

/***/ "./src/app/pages/product/product-catagory/product-catagory.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product/product-catagory/product-catagory.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-three {\n  width: 27vw;\n}\n\nion-segment-button {\n  width: 30vw;\n}\n\n.text-color {\n  color: #6B3D1A;\n  font-weight: 700;\n  margin-left: 3vw;\n  margin-top: 4px;\n  margin-bottom: 1px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-row {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-card {\n  padding: 0px;\n  margin: 3px;\n}\n\n.imageClass {\n  height: 16vw;\n  width: 27vw;\n}\n\n.textStyle {\n  font-size: 3vw;\n  color: #6B3D1A;\n}\n\np {\n  margin: 1px;\n  font-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWNhdGFnb3J5L3Byb2R1Y3QtY2F0YWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1jYXRhZ29yeS9wcm9kdWN0LWNhdGFnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93LXRocmVle1xyXG4gICAgd2lkdGg6IDI3dnc7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG4udGV4dC1jb2xvcntcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuaW9uLWNvbHtcclxuICAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxufVxyXG5cclxuLmltYWdlQ2xhc3Mge1xyXG4gICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgd2lkdGg6IDI3dnc7XHJcbn1cclxuXHJcbi50ZXh0U3R5bGV7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product/product-catagory/product-catagory.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/product/product-catagory/product-catagory.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProductCatagoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatagoryPage", function() { return ProductCatagoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product.service */ "./src/app/pages/product.service.ts");
/* harmony import */ var src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/env.service */ "./src/app/services/env.service.ts");






let ProductCatagoryPage = class ProductCatagoryPage {
    constructor(env, loading, router, product) {
        this.env = env;
        this.loading = loading;
        this.router = router;
        this.product = product;
        this.ifLogin = JSON.parse(localStorage.getItem('user'));
        this.imageUrl = env.IMG_URL;
    }
    ionViewWillEnter() {
        this.getProductCategory();
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
    getProductCategory() {
        this.loading.present();
        const postData = new FormData();
        postData.append('user_id', this.ifLogin.user.id);
        // postData.append('skip_id', JSON.stringify(this.value));
        this.product.getCategoryProductDetails(postData).subscribe(data => {
            console.log(data);
            this.loading.dismiss();
            this.productCategory = data.data.ProductC;
            this.allProducts = data.data.ProductC;
            this.resentPurc = data.data.RecentP;
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
                routerUrl: '/product-catagory',
            }
        };
        this.router.navigate(['/product-list'], navigationExtras);
    }
    getScrollData(event) {
        console.log(event.detail.value);
        console.log(this.resentPurc);
        let resentProductDetails;
        for (let i = 0; i < this.resentPurc.length; i++) {
            if (this.resentPurc[i].id == event.detail.value) {
                resentProductDetails = this.resentPurc[i];
                break;
            }
        }
        let navigationExtras = {
            state: {
                productDetails: resentProductDetails,
                routerUrl: '/product-catagory',
            }
        };
        this.router.navigate(['/product-details'], navigationExtras);
    }
    ngOnInit() {
    }
};
ProductCatagoryPage.ctorParameters = () => [
    { type: src_app_services_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ProductCatagoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-catagory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-catagory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-catagory/product-catagory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-catagory.page.scss */ "./src/app/pages/product/product-catagory/product-catagory.page.scss")).default]
    })
], ProductCatagoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-product-catagory-product-catagory-module-es2015.js.map