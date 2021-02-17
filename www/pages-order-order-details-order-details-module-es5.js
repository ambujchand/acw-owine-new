(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-details-order-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-details/order-details.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-details/order-details.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderOrderDetailsOrderDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Order Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    \n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findOrderDetailsName($event)\"></ion-searchbar>\n    <div class=\"mr-2\" *ngIf=\"details\">\n      <div class=\"orderDetails\">\n        <strong style=\"font-size: 20px;font-weight: 800;\">Order Id : <small>{{details.order_number}}</small></strong><br>\n        <strong style=\"font-size: 15px;\">Order On : <small>{{details.order_date}}</small></strong><br>\n        <strong style=\"font-size: 15px;\">Delevery Status : <small>{{details.status}}</small></strong>\n      </div>\n        <!-- order status start  -->\n      <div class=\"mt-0\">\n      <ion-list>\n        <ion-grid>\n          <ion-row style=\"background-color: #FAFAFA;\" *ngFor=\"let detail of details.details\"> \n            <ion-col size=\"3\">\n              <img src=\"{{detail.image}}\" class=\"imageSize\">\n            </ion-col>\n            <ion-col class=\"textClass\" >\n              <b>{{detail.product_name}}</b>\n            <p>Product Id : {{detail.order_qty}}</p>\n            <p>Cost : $ {{detail.total_amount}}</p>\n            </ion-col >\n            <ion-col size=\"3\" style=\"text-align:center\">\n              <p>Quantity</p>\n              <p>{{detail.order_qty}}</p>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n    </ion-list>\n      </div>\n    </div>\n\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n  </ion-content>\n  \n";
      /***/
    },

    /***/
    "./src/app/pages/order/order-details/order-details-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/order/order-details/order-details-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: OrderDetailsPageRoutingModule */

    /***/
    function srcAppPagesOrderOrderDetailsOrderDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function () {
        return OrderDetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-details.page */
      "./src/app/pages/order/order-details/order-details.page.ts");

      var routes = [{
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
      }];

      var OrderDetailsPageRoutingModule = function OrderDetailsPageRoutingModule() {
        _classCallCheck(this, OrderDetailsPageRoutingModule);
      };

      OrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderDetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/order/order-details/order-details.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/order/order-details/order-details.module.ts ***!
      \*******************************************************************/

    /*! exports provided: OrderDetailsPageModule */

    /***/
    function srcAppPagesOrderOrderDetailsOrderDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function () {
        return OrderDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-details-routing.module */
      "./src/app/pages/order/order-details/order-details-routing.module.ts");
      /* harmony import */


      var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-details.page */
      "./src/app/pages/order/order-details/order-details.page.ts");

      var OrderDetailsPageModule = function OrderDetailsPageModule() {
        _classCallCheck(this, OrderDetailsPageModule);
      };

      OrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
      })], OrderDetailsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/order/order-details/order-details.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/order/order-details/order-details.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOrderOrderDetailsOrderDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".trash {\n  color: red;\n  margin-right: 2vw;\n  font-size: 6vw;\n}\n\n.edit {\n  font-size: 6vw;\n}\n\nion-row {\n  background-color: #FAFAFA;\n  margin-bottom: 2vw;\n}\n\nb {\n  color: #6B3D1A;\n}\n\n.iconClass {\n  padding: 0px;\n  margin: 5vw 0vw 0vw 0vw;\n}\n\np {\n  padding: 1px;\n  margin: 1px;\n  font-size: 4vw;\n}\n\n.imageSize {\n  height: 22vw;\n  width: 20vw;\n}\n\n.orderDetails {\n  margin-right: 4vh;\n  padding: 2vh 0px 2vh 2vh;\n  background-color: #6B3D1A;\n  color: #DA980C;\n  border-radius: 0px 80px 80px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYXNoe1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbn1cclxuLmVkaXR7XHJcbiAgICBmb250LXNpemU6IDZ2dztcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZ3O1xyXG59XHJcblxyXG5ie1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbn1cclxuXHJcbi5pY29uQ2xhc3Mge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA1dncgMHZ3IDB2dyAwdndcclxufVxyXG5cclxucHtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbn1cclxuXHJcbi5pbWFnZVNpemUge1xyXG4gICAgaGVpZ2h0OiAyMnZ3O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbn1cclxuXHJcbi5vcmRlckRldGFpbHN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDR2aDtcclxuICAgIHBhZGRpbmc6IDJ2aCAwcHggMnZoIDJ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QjNEMUE7XHJcbiAgICBjb2xvcjogI0RBOTgwQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA4MHB4IDgwcHggMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/order/order-details/order-details.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/order/order-details/order-details.page.ts ***!
      \*****************************************************************/

    /*! exports provided: OrderDetailsPage */

    /***/
    function srcAppPagesOrderOrderDetailsOrderDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function () {
        return OrderDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../product.service */
      "./src/app/pages/product.service.ts");

      var OrderDetailsPage = /*#__PURE__*/function () {
        function OrderDetailsPage(loading, router, product) {
          _classCallCheck(this, OrderDetailsPage);

          this.loading = loading;
          this.router = router;
          this.product = product;

          if (this.router.getCurrentNavigation().extras.state) {
            this.details = this.router.getCurrentNavigation().extras.state.products;
            var dataDetails = this.router.getCurrentNavigation().extras.state.products;
            this.products = dataDetails.details;
            console.log(this.products);
          }
        }

        _createClass(OrderDetailsPage, [{
          key: "findOrderDetailsName",
          value: function findOrderDetailsName(event) {
            if (event.target.value.length > 0) {
              var data = [];

              for (var i = 0; i < this.details.details.length; i++) {
                var name = this.details.details[i].product_name.toLowerCase();

                if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                  data.push(this.details.details[i]);
                }
              }

              this.details.details = data;
              console.log(data);
            } else {
              this.details.details = this.products;
              console.log(this.products);
            }
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            setTimeout(function () {
              console.log('Done');
              console.log(event); //this.getfindInventoryDetails();
              // if (this.products.length == this.products.length) {
              //   event.target.disabled = true;
              // }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {// this.getAllOrders();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderDetailsPage;
      }();

      OrderDetailsPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }];
      };

      OrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-details/order-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-details.page.scss */
        "./src/app/pages/order/order-details/order-details.page.scss"))["default"]]
      })], OrderDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-order-order-details-order-details-module-es5.js.map