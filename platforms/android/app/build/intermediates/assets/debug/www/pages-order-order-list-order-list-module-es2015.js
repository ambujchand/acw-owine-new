(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-list-order-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-list/order-list.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-list/order-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Order list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n");

/***/ }),

/***/ "./src/app/pages/order/order-list/order-list-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order/order-list/order-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageRoutingModule", function() { return OrderListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-list.page */ "./src/app/pages/order/order-list/order-list.page.ts");




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

/***/ "./src/app/pages/order/order-list/order-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order/order-list/order-list.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-list-routing.module */ "./src/app/pages/order/order-list/order-list-routing.module.ts");
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-list.page */ "./src/app/pages/order/order-list/order-list.page.ts");







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

/***/ "./src/app/pages/order/order-list/order-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order/order-list/order-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLWxpc3Qvb3JkZXItbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/order/order-list/order-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order/order-list/order-list.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPage", function() { return OrderListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderListPage = class OrderListPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderListPage.ctorParameters = () => [];
OrderListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-list/order-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-list.page.scss */ "./src/app/pages/order/order-list/order-list.page.scss")).default]
    })
], OrderListPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-order-list-order-list-module-es2015.js.map