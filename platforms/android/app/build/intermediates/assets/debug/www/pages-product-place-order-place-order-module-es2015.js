(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-place-order-place-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/place-order/place-order.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/place-order/place-order.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Your Orders</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n      <ion-list style=\"margin-left: 3vh;\">\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <b>Product</b>\n              </ion-col>\n              <ion-col>\n                <b>Quantity</b>\n              </ion-col>\n              <ion-col>\n                <b>Unit Price</b>\n              </ion-col>\n              <ion-col>\n                <b>Price</b>\n              </ion-col>\n            </ion-row>\n\n            <ion-row *ngFor=\"let order of placeOrderList\">\n              <ion-col class=\"orderStype\">\n                <p>{{order.product_name}}</p>\n              </ion-col>\n              <ion-col class=\"orderStype\">\n                <p>{{order.order_qty}}</p>\n              </ion-col>\n              <ion-col class=\"orderStype\">\n                <p>${{order.unit_price}}</p>\n              </ion-col>\n              <ion-col class=\"orderStype\">\n                <p>${{order.unit_price * order.order_qty}}.00</p>\n              </ion-col>\n                </ion-row>\n            <ion-row style=\"margin-top: 4vh;\">\n              <ion-col class=\"orderStype\">\n                <p>Subtotal : </p><br>\n                <p>Total : </p>\n              </ion-col>\n              <ion-col class=\"orderStype\">\n              </ion-col>\n              <ion-col class=\"orderStype\">\n              </ion-col>\n              <ion-col class=\"orderStype\">\n                <p>${{totalAmount}}</p><br>\n                <p>${{totalAmount}}</p>\n\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n\n      </ion-list>\n  <ion-button (click)=\"placeOrder()\" class=\"orderButton\" expand=\"full\">Place Order</ion-button>\n\n      \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pages/product/place-order/place-order-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/product/place-order/place-order-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PlaceOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderPageRoutingModule", function() { return PlaceOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _place_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-order.page */ "./src/app/pages/product/place-order/place-order.page.ts");




const routes = [
    {
        path: '',
        component: _place_order_page__WEBPACK_IMPORTED_MODULE_3__["PlaceOrderPage"]
    }
];
let PlaceOrderPageRoutingModule = class PlaceOrderPageRoutingModule {
};
PlaceOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlaceOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/place-order/place-order.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product/place-order/place-order.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlaceOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderPageModule", function() { return PlaceOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-order-routing.module */ "./src/app/pages/product/place-order/place-order-routing.module.ts");
/* harmony import */ var _place_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-order.page */ "./src/app/pages/product/place-order/place-order.page.ts");







let PlaceOrderPageModule = class PlaceOrderPageModule {
};
PlaceOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceOrderPageRoutingModule"]
        ],
        declarations: [_place_order_page__WEBPACK_IMPORTED_MODULE_6__["PlaceOrderPage"]]
    })
], PlaceOrderPageModule);



/***/ }),

/***/ "./src/app/pages/product/place-order/place-order.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/product/place-order/place-order.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  padding: 1px;\n  margin: 1px;\n  font-size: 15px;\n}\n\n.orderStype {\n  color: #6B3D1A;\n  font-size: 15px;\n}\n\np {\n  padding: 0px;\n  margin: 0px;\n}\n\n.orderButton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 46px;\n  font-size: 15px;\n  margin: 0;\n  color: #FFCC6A;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2x7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4vLyBpb24tZ3JpZHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLm9yZGVyU3R5cGV7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5we1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5vcmRlckJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNGRkNDNkE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product/place-order/place-order.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/product/place-order/place-order.page.ts ***!
  \***************************************************************/
/*! exports provided: PlaceOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderPage", function() { return PlaceOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product.service */ "./src/app/pages/product.service.ts");






let PlaceOrderPage = class PlaceOrderPage {
    constructor(loading, formBuilder, router, product) {
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.router = router;
        this.product = product;
        if (this.router.getCurrentNavigation().extras.state) {
            this.placeOrderList = this.router.getCurrentNavigation().extras.state.placeOrderList;
        }
        this.chechOrdelList();
    }
    chechOrdelList() {
        console.log(this.placeOrderList);
        if (this.placeOrderList == undefined || this.placeOrderList == null) {
            this.router.navigateByUrl('order-list');
        }
        else {
            let totalAmount = 0;
            let details = [];
            for (let i = 0; i < this.placeOrderList.length; i++) {
                totalAmount += this.placeOrderList[i].order_qty * parseInt(this.placeOrderList[i].unit_price);
                details[i] = {
                    "product_id": this.placeOrderList[i].id,
                    "total_amount": this.placeOrderList[i].unit_price * this.placeOrderList[i].order_qty,
                    "qty": this.placeOrderList[i].order_qty,
                };
            }
            this.totalAmount = totalAmount.toFixed(2);
            this.placeOrderDetails = details;
            console.log(totalAmount.toFixed(2));
            console.log(details);
        }
    }
    placeOrder() {
        this.loading.present();
        const postData = new FormData();
        postData.append('order_number', 'ace_wine' + Math.random() * 9999);
        postData.append('required_date', '');
        postData.append('sell_tex', '');
        postData.append('transact_status', '1');
        postData.append('total_amount', this.totalAmount);
        postData.append('order_details', JSON.stringify(this.placeOrderDetails));
        this.product.placeOrder(postData).subscribe(data => {
            console.log(data);
            this.loading.dismiss();
            if (data.success) {
                this.loading.presentToastSuccess(data.success);
                localStorage.removeItem('orderDetails');
                let navigationExtras = {
                    state: {
                        order_id: data.order_id
                    }
                };
                this.router.navigate(['/order-tracking'], navigationExtras);
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
    // ionViewWillEnter(){
    // }
    ngOnInit() {
    }
};
PlaceOrderPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
PlaceOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-place-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./place-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/place-order/place-order.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./place-order.page.scss */ "./src/app/pages/product/place-order/place-order.page.scss")).default]
    })
], PlaceOrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-place-order-place-order-module-es2015.js.map