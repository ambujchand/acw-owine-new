(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-category-list-category-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/category-list/category-list.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/category-list/category-list.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Catagory List</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n    <!-- Searchbar with cancel button shown on focus -->\n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findCategoryName($event)\"></ion-searchbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let catagory of categories\">\n          <ion-card (click)=\"inventoryCatagory(catagory.id)\">\n            <img src=\"{{catagory.image}}\" style=\"height: 35vw;\n            width: 47vw;\">\n            <br>\n            <strong class=\"ml-2\">{{catagory.name}}</strong> \n        </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/product/category-list/category-list-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product/category-list/category-list-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPageRoutingModule", function() { return CategoryListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _category_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-list.page */ "./src/app/pages/product/category-list/category-list.page.ts");




const routes = [
    {
        path: '',
        component: _category_list_page__WEBPACK_IMPORTED_MODULE_3__["CategoryListPage"]
    }
];
let CategoryListPageRoutingModule = class CategoryListPageRoutingModule {
};
CategoryListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/category-list/category-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/product/category-list/category-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPageModule", function() { return CategoryListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-list-routing.module */ "./src/app/pages/product/category-list/category-list-routing.module.ts");
/* harmony import */ var _category_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-list.page */ "./src/app/pages/product/category-list/category-list.page.ts");







let CategoryListPageModule = class CategoryListPageModule {
};
CategoryListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryListPageRoutingModule"]
        ],
        declarations: [_category_list_page__WEBPACK_IMPORTED_MODULE_6__["CategoryListPage"]]
    })
], CategoryListPageModule);



/***/ }),

/***/ "./src/app/pages/product/category-list/category-list.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/product/category-list/category-list.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-three {\n  width: 27vw;\n}\n\nion-segment-button {\n  width: 30vw;\n}\n\n.text-color {\n  color: #6B3D1A;\n  font-weight: 700;\n  margin-left: 3vw;\n  margin-top: 4px;\n  margin-bottom: 1px;\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-row {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-card {\n  padding: 0px;\n  margin: 2vw;\n}\n\n.imageClass {\n  height: 16vw;\n  width: 27vw;\n}\n\n.textStyle {\n  font-size: 3vw;\n  color: #6B3D1A;\n}\n\np {\n  margin: 1px;\n  font-size: 3vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9jYXRlZ29yeS1saXN0L2NhdGVnb3J5LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93LXRocmVle1xyXG4gICAgd2lkdGg6IDI3dnc7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG59XHJcblxyXG4udGV4dC1jb2xvcntcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzdnc7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuaW9uLWNvbHtcclxuICAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuaW9uLXJvd3tcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDJ2dztcclxufVxyXG5cclxuLmltYWdlQ2xhc3Mge1xyXG4gICAgaGVpZ2h0OiAxNnZ3O1xyXG4gICAgd2lkdGg6IDI3dnc7XHJcbn1cclxuXHJcbi50ZXh0U3R5bGV7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDN2dztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product/category-list/category-list.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/product/category-list/category-list.page.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListPage", function() { return CategoryListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../product.service */ "./src/app/pages/product.service.ts");





let CategoryListPage = class CategoryListPage {
    constructor(loading, router, product) {
        this.loading = loading;
        this.router = router;
        this.product = product;
    }
    ionViewWillEnter() {
        this.categoryList();
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
            this.categories = data;
        }
        else {
            this.categories = this.allProducts;
        }
    }
    categoryList() {
        this.loading.present();
        this.product.getCategoryList().subscribe(data => {
            console.log(data);
            this.loading.dismiss();
            this.categories = data.data;
            this.allProducts = data.data;
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
    inventoryCatagory(categoryId) {
        console.log(categoryId);
        let navigationExtras = {
            state: {
                categoryId: categoryId
            }
        };
        this.router.navigate(['/current-inventory'], navigationExtras);
    }
    // getScrollData(event){
    //     console.log(event.detail.value);
    //     console.log(this.resentPurc);
    //     let resentProductDetails;
    //     for (let i = 0; i < this.resentPurc.length; i++) {
    //         if(this.resentPurc[i].id == event.detail.value){
    //           resentProductDetails = this.resentPurc[i];
    //           break;
    //         }
    //     }
    //     let navigationExtras : NavigationExtras = {
    //       state :{
    //         productDetails : resentProductDetails
    //       }
    //     }
    //     this.router.navigate(['/product-details'] , navigationExtras);
    //   }
    ngOnInit() {
    }
};
CategoryListPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
CategoryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/category-list/category-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-list.page.scss */ "./src/app/pages/product/category-list/category-list.page.scss")).default]
    })
], CategoryListPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-category-list-category-list-module-es2015.js.map