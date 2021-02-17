(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-tracking-order-tracking-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-tracking/order-tracking.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-tracking/order-tracking.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderOrderTrackingOrderTrackingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Order Tracking</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n  <div class=\"designView\">\n    <ion-grid>\n      <ion-row  *ngIf=\"orderDetails\">\n        <ion-col size=\"4\">\n          <img src=\"assets/icons/delivery.png\">\n        </ion-col>\n        <ion-col style=\"margin-top: 4vh;text-align: start;\">\n          <strong>Youe Estimated Date</strong><br>\n          <strong>{{orderDetails.order_date.slice(0,10)}}</strong><br>\n          <strong>Delivery OTP :- {{orderDetails.vcode}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-grid>\n    <ion-row *ngIf=\"orderDetails\">\n      <ion-col size=\"2\" >\n        <div *ngIf=\"orderDetails.status == 1 || orderDetails.status == 2 || orderDetails.status == 3 || orderDetails.status == 4 || orderDetails.status == 5 \">\n          <div class=\"trackRoundDefault\" style=\"background-color: #DA980C;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #DA980C;\" ></div>  \n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <small>Orderd</small>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  *ngIf=\"orderDetails\">\n      <ion-col size=\"2\">\n        <div *ngIf=\"orderDetails.status == 1\">\n          <div class=\"trackRoundDefault\" style=\"background-color: #dee2e6;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #dee2e6;\" ></div>\n        </div>\n        <div *ngIf=\"orderDetails.status == 2 || orderDetails.status == 3 || orderDetails.status == 4 || orderDetails.status == 5 \">\n          <div class=\"trackRoundDefault\" style=\"background-color: #DA980C;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #DA980C;\" ></div>  \n        </div>     \n      </ion-col>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <small>Order Accepted</small>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  *ngIf=\"orderDetails\">\n      <ion-col size=\"2\">\n        <div *ngIf=\"orderDetails.status == 1 || orderDetails.status == 2 \">\n          <div class=\"trackRoundDefault\" style=\"background-color: #dee2e6;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #dee2e6;\" ></div>\n        </div>\n        <div *ngIf=\"orderDetails.status == 3 || orderDetails.status == 4 || orderDetails.status == 5 \">\n          <div class=\"trackRoundDefault\" style=\"background-color: #DA980C;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #DA980C;\" ></div>  \n        </div> \n        </ion-col>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <small>Shift To Driver</small>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row  *ngIf=\"orderDetails\">\n      <ion-col size=\"2\">\n        <div *ngIf=\"orderDetails.status == 1 || orderDetails.status == 2\">\n          <div class=\"trackRoundDefault\" style=\"background-color: #dee2e6;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #dee2e6;\" ></div>\n        </div>\n        <div *ngIf=\"orderDetails.status == 3 || orderDetails.status == 4 || orderDetails.status == 5 \">\n          <div class=\"trackRoundDefault\" style=\"background-color: #DA980C;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #DA980C;\" ></div>  \n        </div>     \n      </ion-col>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <small>In Transit</small>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row  *ngIf=\"orderDetails\">\n      <ion-col size=\"2\">\n        <div *ngIf=\"orderDetails.status == 1 || orderDetails.status == 2 || orderDetails.status == 3 || orderDetails.status == 4\">\n          <div class=\"trackRoundDefault\" style=\"background-color: #dee2e6;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #dee2e6;\" ></div>\n        </div>\n        <div *ngIf=\"orderDetails.status == 5 \">\n          <div class=\"trackRoundDefault\" style=\"background-color: #DA980C;\"></div>\n          <div class=\"barClassDefault\" style=\"background-color: #DA980C;\" ></div>  \n        </div>  \n        <div *ngIf=\"orderDetails.status == 1 || orderDetails.status == 2 || orderDetails.status == 3 || orderDetails.status == 4\">\n          <div class=\"trackRoundDefault\" style=\"background-color: #dee2e6;\"></div>\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-list>\n          <ion-item>\n            <small>Delivered</small>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/order/order-tracking/order-tracking-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/order/order-tracking/order-tracking-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: OrderTrackingPageRoutingModule */

    /***/
    function srcAppPagesOrderOrderTrackingOrderTrackingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderTrackingPageRoutingModule", function () {
        return OrderTrackingPageRoutingModule;
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


      var _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-tracking.page */
      "./src/app/pages/order/order-tracking/order-tracking.page.ts");

      var routes = [{
        path: '',
        component: _order_tracking_page__WEBPACK_IMPORTED_MODULE_3__["OrderTrackingPage"]
      }];

      var OrderTrackingPageRoutingModule = function OrderTrackingPageRoutingModule() {
        _classCallCheck(this, OrderTrackingPageRoutingModule);
      };

      OrderTrackingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderTrackingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/order/order-tracking/order-tracking.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/order/order-tracking/order-tracking.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OrderTrackingPageModule */

    /***/
    function srcAppPagesOrderOrderTrackingOrderTrackingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderTrackingPageModule", function () {
        return OrderTrackingPageModule;
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


      var _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-tracking-routing.module */
      "./src/app/pages/order/order-tracking/order-tracking-routing.module.ts");
      /* harmony import */


      var _order_tracking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-tracking.page */
      "./src/app/pages/order/order-tracking/order-tracking.page.ts");

      var OrderTrackingPageModule = function OrderTrackingPageModule() {
        _classCallCheck(this, OrderTrackingPageModule);
      };

      OrderTrackingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_tracking_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderTrackingPageRoutingModule"]],
        declarations: [_order_tracking_page__WEBPACK_IMPORTED_MODULE_6__["OrderTrackingPage"]]
      })], OrderTrackingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/order/order-tracking/order-tracking.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/order/order-tracking/order-tracking.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOrderOrderTrackingOrderTrackingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".designView {\n  background-color: #6B3D1A;\n  border-radius: 0px 0px 81px 80px;\n  height: 42vw;\n}\n\nimg {\n  height: 69px;\n  margin: 7vw 4vw 1vw 7vw;\n}\n\nstrong {\n  color: #DA980C;\n  margin: 2px;\n}\n\nsmall {\n  font-size: 15px;\n  font-weight: 590;\n}\n\nion-list {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-item {\n  padding: 0px;\n  margin: 0px;\n}\n\n.trackRoundDefault {\n  height: 20px;\n  width: 20px;\n  border-radius: 10px;\n  border: 1px solid #DA980C;\n  margin-left: 12px;\n}\n\n.barClassDefault {\n  height: 50px;\n  width: 10px;\n  padding: 0px;\n  margin-left: 17px;\n  border-radius: 25px;\n}\n\nion-col {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXItdHJhY2tpbmcvb3JkZXItdHJhY2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXItdHJhY2tpbmcvb3JkZXItdHJhY2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2lnblZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkIzRDFBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4MXB4IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDQydnc7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogNjlweDtcclxuICAgIG1hcmdpbjogN3Z3IDR2dyAxdncgN3Z3O1xyXG59XHJcblxyXG5zdHJvbmd7XHJcbiAgICBjb2xvcjogI0RBOTgwQztcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG5zbWFsbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1OTA7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4udHJhY2tSb3VuZERlZmF1bHQge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBOTgwQztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uYmFyQ2xhc3NEZWZhdWx0IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/order/order-tracking/order-tracking.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/order/order-tracking/order-tracking.page.ts ***!
      \*******************************************************************/

    /*! exports provided: OrderTrackingPage */

    /***/
    function srcAppPagesOrderOrderTrackingOrderTrackingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderTrackingPage", function () {
        return OrderTrackingPage;
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

      var OrderTrackingPage = /*#__PURE__*/function () {
        function OrderTrackingPage(loading, router, orders) {
          _classCallCheck(this, OrderTrackingPage);

          this.loading = loading;
          this.router = router;
          this.orders = orders;

          if (this.router.getCurrentNavigation().extras.state) {
            this.order_id = this.router.getCurrentNavigation().extras.state.order_id;
            console.log(this.order_id);
          }
        }

        _createClass(OrderTrackingPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getOrderDetails();
          }
        }, {
          key: "getOrderDetails",
          value: function getOrderDetails() {
            var _this = this;

            if (this.order_id != undefined) {
              this.loading.present();
              var formData = new FormData();
              formData.append('order_id', this.order_id);
              this.orders.getOrderStatus(formData).subscribe(function (data) {
                console.log(data);
                _this.orderDetails = data;

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
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrderTrackingPage;
      }();

      OrderTrackingPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]
        }];
      };

      OrderTrackingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-tracking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./order-tracking.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-tracking/order-tracking.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-tracking.page.scss */
        "./src/app/pages/order/order-tracking/order-tracking.page.scss"))["default"]]
      })], OrderTrackingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-order-order-tracking-order-tracking-module-es5.js.map