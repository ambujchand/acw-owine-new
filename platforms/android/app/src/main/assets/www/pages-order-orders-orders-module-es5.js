(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-orders-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/orders/orders.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/orders/orders.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Order list</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    \n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findInventoryName($event)\"></ion-searchbar>\n\n      <!-- order status start  -->  \n  <div class=\"mt-3\">\n    <ion-grid>\n      <ion-row class=\"p-0 mb-1\" style=\"background-color: #FAFAFA;\" *ngFor = \"let product of allProducts\">\n        <ion-col  size=\"2 \" (click)=\"orderDetails(product)\">\n          <img src=\"/assets/icons/productImg.jpg\" height=\"50\" width=\"50\">\n        </ion-col>\n        <ion-col (click)=\"orderDetails(product)\" style=\"margin-left: 5px;\" size=\"6\" size-sm>\n          <div>\n            <p style=\"font-size:12px ;font-size: 12px;margin-top:2vw;color: #6B3D1A;\"><b>Orderd Id :</b> {{product.order_number}}  </p>\n            <p style=\"font-size:11px\"><b>Orderd On :</b> {{product.order_date}}</p>\n            <p style=\"font-size:11px\"><b>Delivery Status :</b> {{product.status}}</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\" style=\"text-align: center; margin-top: 10px;\" (click)=\"orderDetails(product)\">\n          <b  style=\"font-size:12px\">Items<br> <span class=\"order-quantity\">{{product.order_count}}</span></b>\n        </ion-col>\n        <ion-col style=\"background-color: #6B3D1A;border-radius: 50px 0px 0px 50px;\" (click)=\"showTracking(product.id)\" class=\"ion-align-self-end\">\n            <p style=\"padding-top: 1vh;font-size: 6vh;\"><i class=\"fas fa-chevron-right\" style=\"padding-left: 3vh;color: white;\"></i></p>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n  </ion-content>\n  \n";
      /***/
    },

    /***/
    "./src/app/pages/order/orders/orders-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/order/orders/orders-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OrdersPageRoutingModule */

    /***/
    function srcAppPagesOrderOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
        return OrdersPageRoutingModule;
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


      var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/pages/order/orders/orders.page.ts");

      var routes = [{
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
      }];

      var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
        _classCallCheck(this, OrdersPageRoutingModule);
      };

      OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/order/orders/orders.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/order/orders/orders.module.ts ***!
      \*****************************************************/

    /*! exports provided: OrdersPageModule */

    /***/
    function srcAppPagesOrderOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
        return OrdersPageModule;
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


      var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders-routing.module */
      "./src/app/pages/order/orders/orders-routing.module.ts");
      /* harmony import */


      var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./orders.page */
      "./src/app/pages/order/orders/orders.page.ts");

      var OrdersPageModule = function OrdersPageModule() {
        _classCallCheck(this, OrdersPageModule);
      };

      OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
      })], OrdersPageModule);
      /***/
    },

    /***/
    "./src/app/pages/order/orders/orders.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/order/orders/orders.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOrderOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  font-size: 5vh;\n}\n\n.text-color {\n  color: #6B3D1A;\n  font-weight: 700;\n  margin-left: 2vh;\n  margin-top: 10px;\n  margin-bottom: 1px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\n.text-color2 {\n  color: #6B3D1A;\n  margin-left: 2vh;\n}\n\n.status-lebel {\n  color: #6B3D1A;\n}\n\n.text-color1 {\n  color: #6B3D1A;\n  margin-left: 13px;\n  font-size: 13px;\n}\n\n.text-style3 {\n  color: #6B3D1A;\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 17px;\n  margin-top: 5px;\n}\n\n.show-invoice {\n  background-color: #6B3D1A;\n  height: 70px;\n  position: absolute;\n  width: 148%;\n  margin-top: -5px;\n  text-align: center;\n  -webkit-clip-path: circle(50% at 50% 50%);\n  clip-path: circle(50% at 43% 50%);\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-row {\n  padding: 0px;\n  margin: 0px;\n}\n\n.font-wid {\n  color: #D3751D;\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.show-three {\n  width: 27vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXJzL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBRUEsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFGQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0FBS0o7O0FBSEE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7QUFLSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA1dmg7XHJcbn1cclxuXHJcbi50ZXh0LWNvbG9ye1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnRleHQtY29sb3Iye1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgIC8vIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xyXG59XHJcbi5zdGF0dXMtbGViZWwge1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbn1cclxuLnRleHQtY29sb3IxIHtcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLnRleHQtc3R5bGUze1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5zaG93LWludm9pY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZCM0QxQTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNDglO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDUwJSA1MCUpO1xyXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNTAlIGF0IDQzJSA1MCUpO1xyXG59XHJcbmlvbi1jb2wge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1yb3cge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5mb250LXdpZHtcclxuICAgIGNvbG9yOiAjRDM3NTFEO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNob3ctdGhyZWV7XHJcbiAgICB3aWR0aDogMjd2dztcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/order/orders/orders.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/order/orders/orders.page.ts ***!
      \***************************************************/

    /*! exports provided: OrdersPage */

    /***/
    function srcAppPagesOrderOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
        return OrdersPage;
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


      var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../order.service */
      "./src/app/pages/order/order.service.ts");

      var OrdersPage = /*#__PURE__*/function () {
        function OrdersPage(loading, router, orders) {
          _classCallCheck(this, OrdersPage);

          this.loading = loading;
          this.router = router;
          this.orders = orders;
        }

        _createClass(OrdersPage, [{
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getResentOrders();
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
          value: function ionViewWillEnter() {
            this.getResentOrders();
          }
        }, {
          key: "findInventoryName",
          value: function findInventoryName(event) {
            if (event.target.value.length > 0) {
              var data = [];

              for (var i = 0; i < this.products.length; i++) {
                var status = this.products[i].status.toLowerCase();
                var order_number = this.products[i].order_number.toLowerCase();
                var order_date = this.products[i].order_date.toLowerCase();

                if (status.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                  data.push(this.products[i]);
                }

                if (order_number.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                  data.push(this.products[i]);
                }

                if (order_date.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                  data.push(this.products[i]);
                }
              }

              this.allProducts = data;
            } else {
              this.allProducts = this.products;
            }
          }
        }, {
          key: "getResentOrders",
          value: function getResentOrders() {
            var _this = this;

            this.loading.present();
            this.orders.getAllResentOrders().subscribe(function (data) {
              console.log(data.data);
              _this.allProducts = data.data;
              _this.products = data.data;

              if (data.length > 0) {
                _this.value = _this.value + data.data.length;

                _this.allProducts.push(data.data);
              }

              _this.loading.dismiss();
            }, function (onerror) {
              if (onerror.status == 0) {
                _this.loading.presentToastWarning('check your internet connection.');

                _this.loading.dismiss();
              } else if (onerror.status == 500) {
                _this.loading.presentToastError('Server error.');

                _this.loading.dismiss();
              }
            });
          }
        }, {
          key: "orderDetails",
          value: function orderDetails(products) {
            console.log(products);
            var navigationExtras = {
              state: {
                products: products
              }
            };
            this.router.navigate(['/order-details-page'], navigationExtras);
          }
        }, {
          key: "showTracking",
          value: function showTracking(order_id) {
            var navigationExtras = {
              state: {
                order_id: order_id
              }
            };
            this.router.navigate(['/order-tracking'], navigationExtras);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdersPage;
      }();

      OrdersPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }];
      };

      OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/orders/orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./orders.page.scss */
        "./src/app/pages/order/orders/orders.page.scss"))["default"]]
      })], OrdersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-order-orders-orders-module-es5.js.map