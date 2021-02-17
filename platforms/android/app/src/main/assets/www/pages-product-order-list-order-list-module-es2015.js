(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-order-list-order-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-list/order-list.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-list/order-list.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Order List</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n      <!-- fab placed to the (vertical) center and end -->\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"bottom: 10vh;\">\n          <ion-fab-button (click)=\"addProduct()\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n\n        <!-- <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findInventoryName($event)\"></ion-searchbar> -->\n\n      <ion-list>\n        <ion-grid>\n          <ion-row style=\"background-color: #FAFAFA;\" *ngFor=\"let list of allList\">\n            <ion-col size=\"3\" *ngIf=\"list.image\">\n              <img src=\"{{list.image}}\" class=\"imageSize\">\n            </ion-col>\n            <ion-col class=\"textClass\">\n              <b>{{list.product_name}}</b>\n             <!-- <p>Available Quantity : {{list.qty_per_unit}}</p> -->\n             <p>Price : $ {{list.unit_price}}</p>\n            </ion-col>\n\n            <ion-col size=\"3\" style=\"top: 6vw;padding: 0px;\">\n              <ion-col (click)=\"removeQty(list.id)\" style=\"padding: 0px;font-size: 15px;top: 2px;\">\n                <ion-icon name=\"remove-outline\" style=\"background-color: #dee2e6cc;\"></ion-icon>\n              </ion-col>\n              <ion-col style=\"padding:0px\">\n                <input type=\"number\" value=\"{{list.order_qty}}\" style=\"width: 5vh;height: 3vh;font-size: 13px;\" (input)='changeQty($event.target.value ,list.id)'>\n              </ion-col>\n              <ion-col (click)=\"addQty(list.id)\" style=\"padding: 0px;font-size: 15px;top: 2px;\">\n                <ion-icon name=\"add-outline\" style=\"background-color: #dee2e6cc;\"></ion-icon>\n              </ion-col>\n            </ion-col>\n            <ion-col size=\"1\"  style=\"top: 6vw;color: red;padding: 0px;\">\n              <i class=\"fas fa-trash\" (click)=\"deleteOrderList(list.id)\"></i>\n            </ion-col>\n\n          </ion-row>\n          </ion-grid>\n    </ion-list>\n\n      <ion-button (click)=\"orderCheckoutPage()\" class=\"orderButton\" expand=\"full\" >Proceed To checkout</ion-button>\n      \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pages/product/order-list/order-list-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrderListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageRoutingModule", function() { return OrderListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-list.page */ "./src/app/pages/product/order-list/order-list.page.ts");




const routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_3__["OrderListPage"]
    }
];
let OrderListPageRoutingModule = class OrderListPageRoutingModule {
};
OrderListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/order-list/order-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function() { return OrderListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-list-routing.module */ "./src/app/pages/product/order-list/order-list-routing.module.ts");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-list.page */ "./src/app/pages/product/order-list/order-list.page.ts");







let OrderListPageModule = class OrderListPageModule {
};
OrderListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderListPageRoutingModule"]
        ],
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_6__["OrderListPage"]]
    })
], OrderListPageModule);



/***/ }),

/***/ "./src/app/pages/product/order-list/order-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orderButton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 46px;\n  font-size: 15px;\n  margin: 0;\n  color: #FFCC6A;\n  text-transform: capitalize;\n}\n\n.trash {\n  color: red;\n  margin-right: 2vw;\n  font-size: 6vw;\n}\n\n.edit {\n  font-size: 6vw;\n}\n\nion-row {\n  background-color: #FAFAFA;\n  margin-bottom: 2vw;\n}\n\nb {\n  color: #6B3D1A;\n}\n\n.iconClass {\n  padding: 0px;\n  margin: 5vw 0vw 0vw 0vw;\n}\n\np {\n  padding: 1px;\n  margin: 1px;\n  font-size: 4vw;\n}\n\n.imageSize {\n  height: 22vw;\n  width: 20vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9vcmRlci1saXN0L29yZGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Qvb3JkZXItbGlzdC9vcmRlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlckJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNGRkNDNkE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuXHJcbi50cmFzaHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcbi5lZGl0e1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2dztcclxufVxyXG5cclxuYntcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG59XHJcblxyXG4uaWNvbkNsYXNzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogNXZ3IDB2dyAwdncgMHZ3XHJcbn1cclxuXHJcbnB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG59XHJcblxyXG4uaW1hZ2VTaXplIHtcclxuICAgIGhlaWdodDogMjJ2dztcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/product/order-list/order-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/product/order-list/order-list.page.ts ***!
  \*************************************************************/
/*! exports provided: OrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPage", function() { return OrderListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");





let OrderListPage = class OrderListPage {
    constructor(loading, formBuilder, router) {
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.router = router;
        //localStorage.removeItem('orderDetails');
        // dataUrl:'/product-catagory',
        if (this.router.getCurrentNavigation().extras.state) {
            this.newData = this.router.getCurrentNavigation().extras.state.orderDetails;
            this.routerUrl = this.router.getCurrentNavigation().extras.state.rouerUrl;
            console.log(this.routerUrl);
            let ifData = JSON.parse(localStorage.getItem('orderDetails'));
            let data;
            if (ifData == null) {
                data = [];
            }
            else {
                data = JSON.parse(localStorage.getItem('orderDetails'));
            }
            data.push(this.newData);
            localStorage.setItem("orderDetails", JSON.stringify(data));
        }
        this.allList = JSON.parse(localStorage.getItem('orderDetails'));
        console.log(this.allList);
    }
    ionViewWillEnter() {
        this.checkOrderList();
    }
    changeQty(value, id) {
        for (let i = 0; i < this.allList.length; i++) {
            if (this.allList[i].id == id) {
                console.log(this.allList[i].id);
                this.allList[i].order_qty = value;
                break;
            }
        }
        localStorage.setItem("orderDetails", JSON.stringify(this.allList));
    }
    addQty(id) {
        for (let i = 0; i < this.allList.length; i++) {
            if (this.allList[i].id == id) {
                console.log(this.allList[i].id);
                this.allList[i].order_qty = parseInt(this.allList[i].order_qty) + 1;
                break;
            }
        }
        localStorage.setItem("orderDetails", JSON.stringify(this.allList));
    }
    removeQty(id) {
        for (let i = 0; i < this.allList.length; i++) {
            if (this.allList[i].id == id) {
                console.log(this.allList[i].id);
                this.allList[i].order_qty -= 1;
                break;
            }
        }
        localStorage.setItem("orderDetails", JSON.stringify(this.allList));
    }
    checkOrderList() {
        if (this.allList == null || this.allList == '') {
            console.log('kkkkkkkkk');
            this.router.navigateByUrl('product-catagory');
        }
    }
    addProduct() {
        this.router.navigateByUrl(this.routerUrl);
    }
    deleteOrderList(remove_id) {
        let exProduct;
        exProduct = JSON.parse(localStorage.getItem('orderDetails'));
        console.log(exProduct);
        for (let i = 0; i < exProduct.length; i++) {
            if (exProduct[i].id == remove_id) {
                exProduct.splice(i, 1);
                console.log(exProduct);
                localStorage.setItem("orderDetails", JSON.stringify(exProduct));
                break;
            }
        }
        this.allList = JSON.parse(localStorage.getItem('orderDetails'));
    }
    orderCheckoutPage() {
        let navigationExtras = {
            state: {
                placeOrderList: this.allList
            }
        };
        this.router.navigate(['/place-order'], navigationExtras);
    }
    ngOnInit() {
    }
};
OrderListPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OrderListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-list/order-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-list.page.scss */ "./src/app/pages/product/order-list/order-list.page.scss")).default]
    })
], OrderListPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-order-list-order-list-module-es2015.js.map