(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-details/product-details.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-details/product-details.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Product Details</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content [fullscreen]=\"true\">\r\n\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n  <div style=\"margin:5px 10px 5px 10px\">\r\n    <strong>{{productDetails.product_name}} </strong><br><br>\r\n    <!-- <small>Brand : any</small> -->\r\n    <!-- <p>brand : abcdd</p> -->\r\n    <img src=\"{{productDetails.image}}\" class=\"imageSize\" style=\"height: 38vh;width: 53vh;border-radius: 10px;margin-bottom: 2vh\">\r\n    <p>{{productDetails.product_description}}</p>\r\n        <ion-grid class=\"pl-0\">\r\n          <ion-row >\r\n            <ion-col class=\"pl-0\">\r\n              <b>Order</b>\r\n            </ion-col>\r\n            <ion-col style=\"padding-right:1px;text-align: center;\" (click)=\"removeQty()\" >\r\n              <ion-icon name=\"remove-outline\" style=\"background-color: #dee2e6cc;font-size: 5vh;\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col style=\"padding:5px 0px 0px 0px\">\r\n              <input type=\"number\" [(ngModel)]=\"formData.order_qty\" name=\"order_qty\" style=\"width: 45px;\">\r\n            </ion-col>\r\n            <ion-col style=\"padding-right:1px\" (click)=\"addQty()\">\r\n              <ion-icon name=\"add-outline\" style=\"background-color: #dee2e6cc;font-size: 5vh;\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col style=\"padding-top: 0px;padding-right:1px\">\r\n              <ion-button (click)=\"addOrder()\" style=\"color: #F6B003;\" >Add to Cart</ion-button><br>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    <b>Cost : {{productDetails.unit_price}}</b>\r\n  </div>\r\n  <div class=\"details\" *ngIf=\"rouerUrl =='/product-catagory'\">\r\n    <p style=\"font-size: 18px;margin-left: 3vh;color: #F6B003;\">Available Quantity : {{productDetails.qty_per_unit? productDetails.qty_per_unit : productDetails.qty}}</p>\r\n    <div>\r\n      <span style=\"font-size: 18px;margin-left: 3vh;color: #F6B003;\">Sold Quantity</span>\r\n      <input type=\"number\" [(ngModel)]=\"formData.sold_qty\" name=\"description\" class=\"inputClass\">\r\n      <input type=\"date\" [(ngModel)]=\"formData.sold_date\" readonly=\"readonly\" name=\"description\" style=\"margin-left: 0px;width: 18vh;color: #F6B003\" class=\"inputClass\" >\r\n      <input (click)=\"updateSoldQty()\" class=\"button-style\" type=\"button\" name=\"Update\" value=\"Update\">\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/product/product-details/product-details-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/product/product-details/product-details-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageRoutingModule", function() { return ProductDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/product/product-details/product-details.page.ts");




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsPage"]
    }
];
let ProductDetailsPageRoutingModule = class ProductDetailsPageRoutingModule {
};
ProductDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/product-details/product-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/product/product-details/product-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details-routing.module */ "./src/app/pages/product/product-details/product-details-routing.module.ts");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/pages/product/product-details/product-details.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsPageRoutingModule"]
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/product/product-details/product-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/product/product-details/product-details.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("strong {\n  color: #6B3D1A;\n}\n\n.iconClass {\n  padding: 0px;\n  margin: 5vw 0vw 0vw 0vw;\n}\n\np {\n  padding: 1px;\n  margin: 1px;\n  font-size: 4vw;\n}\n\n.imageSize {\n  height: 45vh;\n  width: 45vh;\n}\n\n.details {\n  background-color: #6B3D1A;\n  border-radius: 0px 60px 0px 0px;\n  padding-top: 3vh;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 89px;\n  margin: 0;\n  color: #FFCC6A;\n  text-transform: capitalize;\n}\n\n.inputClass {\n  background-color: #6b3d1a;\n  border: 1px solid #F6B003;\n  margin-left: 8px;\n  width: 7vh;\n}\n\n.inputClass2 {\n  font-size: 11px;\n  margin-left: -57px;\n}\n\nion-button {\n  font-size: 10px;\n}\n\n.item-native {\n  padding-left: 0px;\n}\n\n.orderButton {\n  bottom: 0px;\n  width: 100%;\n  height: 46px;\n  margin: 0;\n  color: #FFCC6A;\n  text-transform: capitalize;\n  font-weight: bolder;\n}\n\n.button-style {\n  position: absolute;\n  background: #eda71a;\n  color: #000;\n  border: none;\n  font-size: 15px;\n  padding: 3px 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3Ryb25ne1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbn1cclxuXHJcbi5pY29uQ2xhc3Mge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA1dncgMHZ3IDB2dyAwdndcclxufVxyXG5cclxucHtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbn1cclxuXHJcbi5pbWFnZVNpemUge1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgd2lkdGg6IDQ1dmg7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QjNEMUE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNjBweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDN2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg5cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogI0ZGQ0M2QTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uaW5wdXRDbGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmIzZDFhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Y2QjAwMztcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB3aWR0aDogN3ZoO1xyXG59XHJcblxyXG4uaW5wdXRDbGFzczIge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01N3B4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5vcmRlckJ1dHRvbiB7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNGRkNDNkE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5idXR0b24tc3R5bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2VkYTcxYTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogM3B4IDZweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product/product-details/product-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product/product-details/product-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product.service */ "./src/app/pages/product.service.ts");






let ProductDetailsPage = class ProductDetailsPage {
    constructor(loading, router, formBuilder, product) {
        this.loading = loading;
        this.router = router;
        this.formBuilder = formBuilder;
        this.product = product;
        this.addOrderForm = this.formBuilder.group({
            id: [''],
            product_description: [''],
            image: [''],
            product_name: [''],
            qty_per_unit: [''],
            unit_price: [''],
            order_qty: [1],
            sold_qty: [''],
            sold_date: [''],
        });
        this.formData = {
            order_qty: 1,
            id: null,
            sold_qty: 0,
            sold_date: null,
        };
        this.sellProductDetails = [];
        const now = new Date();
        this.formData.sold_date = now.toISOString().slice(0, 10);
        if (this.router.getCurrentNavigation().extras.state) {
            this.productDetails = this.router.getCurrentNavigation().extras.state.productDetails;
            this.rouerUrl = this.router.getCurrentNavigation().extras.state.routerUrl;
            console.log(this.rouerUrl);
            this.formData.id = this.productDetails ? this.productDetails.id : '';
            this.addOrderForm.controls.id.setValue(this.productDetails ? this.productDetails.id : '');
            this.addOrderForm.controls.product_description.setValue(this.productDetails ? this.productDetails.product_description : '');
            this.addOrderForm.controls.image.setValue(this.productDetails ? this.productDetails.image : '');
            this.addOrderForm.controls.product_name.setValue(this.productDetails ? this.productDetails.product_name : '');
            this.addOrderForm.controls.qty_per_unit.setValue(this.productDetails ? this.productDetails.qty : '');
            this.addOrderForm.controls.unit_price.setValue(this.productDetails ? this.productDetails.unit_price : '');
        }
        console.log(this.productDetails);
        this.checkCatId();
    }
    checkCatId() {
        if (this.productDetails) {
        }
        else {
            this.router.navigateByUrl('/product-list');
        }
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    addQty() {
        this.formData.order_qty += 1;
    }
    removeQty() {
        this.formData.order_qty -= 1;
    }
    // addOrder(){
    //   console.log(this.addOrderForm.value);
    // }
    addOrder() {
        this.addOrderForm.controls.order_qty.setValue(this.formData ? this.formData.order_qty : '');
        this.addOrderForm.controls.sold_qty.setValue(this.formData ? this.formData.sold_qty : '');
        this.addOrderForm.controls.sold_date.setValue(this.formData ? this.formData.sold_date : '');
        console.log(this.addOrderForm.value);
        let navigationExtras = {
            state: {
                orderDetails: this.addOrderForm.value,
                rouerUrl: this.rouerUrl
            }
        };
        this.router.navigate(['/order-list'], navigationExtras);
    }
    updateSoldQty() {
        if (this.formData.sold_qty > 0) {
            this.loading.present();
            this.product.updateSoldQty(this.formData).subscribe(data => {
                this.loading.dismiss();
                console.log(data);
                if (data.success) {
                    this.loading.presentToastSuccess(data.success);
                    this.productDetails.qty = data.data;
                }
                if (data.error) {
                    this.loading.presentToastError(data.error);
                }
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
            this.loading.presentToastWarning('Please Enter Sold Quantity');
        }
    }
    ngOnInit() {
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
ProductDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product-details/product-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-details.page.scss */ "./src/app/pages/product/product-details/product-details.page.scss")).default]
    })
], ProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-product-details-product-details-module-es2015.js.map