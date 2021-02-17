(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-order-details-order-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-details/order-details.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-details/order-details.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProductOrderDetailsOrderDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Order Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    \n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findInventoryName($event)\"></ion-searchbar>\n\n      <!-- order status start  -->  \n  <div class=\"mt-3\">\n    <ion-grid>\n      <ion-row class=\"p-0 mb-1\" style=\"background-color: #FAFAFA;\" *ngFor = \"let product of allProducts\">\n        <ion-col  size=\"3\" (click)=\"orderDetails(product)\">\n          <img src=\"/assets/icons/productImg.jpg\" height=\"70\" width=\"70\">\n        </ion-col>\n        <ion-col (click)=\"orderDetails(product)\" >\n          <div>\n            <p style=\"font-size:12px ;font-size: 12px;margin-top:2vw;color: #6B3D1A;\"><b>Orderd Id :</b> {{product.order_number}}  </p>\n            <p style=\"font-size:11px\"><b>Orderd On :</b> {{product.order_date}}</p>\n            <p style=\"font-size:11px\"><b>Delivery Status :</b> {{product.status}}</p>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\" style=\"text-align: center; margin-top: 10px;\" (click)=\"orderDetails(product)\">\n          <b  style=\"font-size:12px\">Items<br> <span class=\"order-quantity\">{{product.order_count}}</span></b>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n  </ion-content>\n  \n";
      /***/
    },

    /***/
    "./src/app/pages/product/order-details/order-details-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/product/order-details/order-details-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: OrderDetailsPageRoutingModule */

    /***/
    function srcAppPagesProductOrderDetailsOrderDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/pages/product/order-details/order-details.page.ts");

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
    "./src/app/pages/product/order-details/order-details.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/product/order-details/order-details.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OrderDetailsPageModule */

    /***/
    function srcAppPagesProductOrderDetailsOrderDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/pages/product/order-details/order-details-routing.module.ts");
      /* harmony import */


      var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-details.page */
      "./src/app/pages/product/order-details/order-details.page.ts");

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
    "./src/app/pages/product/order-details/order-details.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/product/order-details/order-details.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProductOrderDetailsOrderDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-icon {\n  font-size: 5vh;\n}\n\n.text-color {\n  color: #6B3D1A;\n  font-weight: 700;\n  margin-left: 2vh;\n  margin-top: 10px;\n  margin-bottom: 1px;\n}\n\np {\n  margin-bottom: 0px;\n}\n\n.text-color2 {\n  color: #6B3D1A;\n  margin-left: 2vh;\n}\n\n.status-lebel {\n  color: #6B3D1A;\n}\n\n.text-color1 {\n  color: #6B3D1A;\n  margin-left: 13px;\n  font-size: 13px;\n}\n\n.text-style3 {\n  color: #6B3D1A;\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 17px;\n  margin-top: 5px;\n}\n\n.show-invoice {\n  background-color: #6B3D1A;\n  height: 70px;\n  position: absolute;\n  width: 148%;\n  margin-top: -5px;\n  text-align: center;\n  -webkit-clip-path: circle(50% at 50% 50%);\n  clip-path: circle(50% at 43% 50%);\n}\n\nion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\nion-row {\n  padding: 0px;\n  margin: 0px;\n}\n\n.font-wid {\n  color: #D3751D;\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.show-three {\n  width: 27vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUVBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBS0o7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQ0FBQTtBQUtKOztBQUhBO0VBRUksWUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBRkE7RUFDSSxXQUFBO0FBS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDV2aDtcclxufVxyXG5cclxuLnRleHQtY29sb3J7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZoO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4udGV4dC1jb2xvcjJ7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxuICAgLy8gZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAydmg7XHJcbn1cclxuLnN0YXR1cy1sZWJlbCB7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxufVxyXG4udGV4dC1jb2xvcjEge1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4udGV4dC1zdHlsZTN7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnNob3ctaW52b2ljZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkIzRDFBO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE0OCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNTAlIDUwJSk7XHJcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg1MCUgYXQgNDMlIDUwJSk7XHJcbn1cclxuaW9uLWNvbCB7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmZvbnQtd2lke1xyXG4gICAgY29sb3I6ICNEMzc1MUQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2hvdy10aHJlZXtcclxuICAgIHdpZHRoOiAyN3Z3O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/product/order-details/order-details.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/product/order-details/order-details.page.ts ***!
      \*******************************************************************/

    /*! exports provided: OrderDetailsPage */

    /***/
    function srcAppPagesProductOrderDetailsOrderDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
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
        }

        _createClass(OrderDetailsPage, [{
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getAllOrders();
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
            this.getAllOrders();
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
          key: "getAllOrders",
          value: function getAllOrders() {
            var _this = this;

            this.loading.present();
            this.product.getAllInventoryOrders().subscribe(function (data) {
              console.log(data.data);
              _this.allProducts = data.data;
              _this.products = data.data;

              _this.loading.dismiss();

              if (data.length > 0) {
                _this.value = _this.value + data.data.length;

                _this.allProducts.push(data.data);
              }
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
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/order-details/order-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./order-details.page.scss */
        "./src/app/pages/product/order-details/order-details.page.scss"))["default"]]
      })], OrderDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-product-order-details-order-details-module-es5.js.map