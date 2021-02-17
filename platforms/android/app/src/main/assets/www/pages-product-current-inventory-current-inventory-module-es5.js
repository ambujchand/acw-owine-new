(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-current-inventory-current-inventory-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/current-inventory/current-inventory.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/current-inventory/current-inventory.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProductCurrentInventoryCurrentInventoryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Current Inventory</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n\n    <!-- fab placed to the (vertical) center and end -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button (click)=\"addProduct()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    \n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findInventoryName($event)\"></ion-searchbar>\n      <ion-list>\n        <ion-grid>\n          <ion-row style=\"background-color: #FAFAFA;\" *ngFor=\"let product of allProducts\">\n            <ion-col>\n              <img src=\"{{product.image}}\" class=\"imageSize\">\n            </ion-col>\n            <ion-col class=\"textClass\" >\n              <b>{{product.product_name}}</b>\n             <p>Sale : $ {{product.sale_price}}</p>\n             <p>Qty : {{product.qty}}</p>\n            </ion-col >\n            <ion-col class=\"iconClass\">\n              <ion-icon name=\"bag-add-outline\" style=\"color: #6B3D1A;\" (click)=\"productDetails(product)\"></ion-icon>\n              <ion-icon name=\"create-outline\" (click)=\"editProduct(product)\" *ngIf=\"ifLogin.user.parent_id==1\"></ion-icon>\n              <ion-icon name=\"close-outline\" (click)=\"deleteProduct(product.id)\" style=\"color: red;\" *ngIf=\"ifLogin.user.parent_id==1\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n    </ion-list>\n\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n  </ion-content>\n  \n";
      /***/
    },

    /***/
    "./src/app/pages/product/current-inventory/current-inventory-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/product/current-inventory/current-inventory-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: CurrentInventoryPageRoutingModule */

    /***/
    function srcAppPagesProductCurrentInventoryCurrentInventoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentInventoryPageRoutingModule", function () {
        return CurrentInventoryPageRoutingModule;
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


      var _current_inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./current-inventory.page */
      "./src/app/pages/product/current-inventory/current-inventory.page.ts");

      var routes = [{
        path: '',
        component: _current_inventory_page__WEBPACK_IMPORTED_MODULE_3__["CurrentInventoryPage"]
      }];

      var CurrentInventoryPageRoutingModule = function CurrentInventoryPageRoutingModule() {
        _classCallCheck(this, CurrentInventoryPageRoutingModule);
      };

      CurrentInventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CurrentInventoryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/product/current-inventory/current-inventory.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/product/current-inventory/current-inventory.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: CurrentInventoryPageModule */

    /***/
    function srcAppPagesProductCurrentInventoryCurrentInventoryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentInventoryPageModule", function () {
        return CurrentInventoryPageModule;
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


      var _current_inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./current-inventory-routing.module */
      "./src/app/pages/product/current-inventory/current-inventory-routing.module.ts");
      /* harmony import */


      var _current_inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./current-inventory.page */
      "./src/app/pages/product/current-inventory/current-inventory.page.ts");

      var CurrentInventoryPageModule = function CurrentInventoryPageModule() {
        _classCallCheck(this, CurrentInventoryPageModule);
      };

      CurrentInventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _current_inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrentInventoryPageRoutingModule"]],
        declarations: [_current_inventory_page__WEBPACK_IMPORTED_MODULE_6__["CurrentInventoryPage"]]
      })], CurrentInventoryPageModule);
      /***/
    },

    /***/
    "./src/app/pages/product/current-inventory/current-inventory.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/product/current-inventory/current-inventory.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProductCurrentInventoryCurrentInventoryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".trash {\n  color: red;\n  margin-right: 2vw;\n  font-size: 6vw;\n}\n\n.edit {\n  font-size: 6vw;\n}\n\nion-row {\n  background-color: #FAFAFA;\n  margin-bottom: 2vw;\n}\n\nb {\n  color: #6B3D1A;\n  font-size: 13px;\n}\n\n.iconClass {\n  padding: 0px;\n  margin: 5vw 0vw 0vw 0vw;\n}\n\np {\n  padding: 1px;\n  margin: 1px;\n  font-size: 4vw;\n}\n\n.imageSize {\n  height: 21vw;\n  width: 21vw;\n}\n\nion-col {\n  padding: 1px;\n  margin: 1px;\n}\n\nion-icon {\n  font-size: 4vh;\n  margin-left: 1px;\n}\n\nion-grid {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9jdXJyZW50LWludmVudG9yeS9jdXJyZW50LWludmVudG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9jdXJyZW50LWludmVudG9yeS9jdXJyZW50LWludmVudG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhc2h7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICBmb250LXNpemU6IDZ2dztcclxufVxyXG4uZWRpdHtcclxuICAgIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbn1cclxuXHJcbmJ7XHJcbiAgICBjb2xvcjogIzZCM0QxQTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmljb25DbGFzcyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDV2dyAwdncgMHZ3IDB2d1xyXG59XHJcblxyXG5we1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDR2dztcclxufVxyXG5cclxuLmltYWdlU2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDIxdnc7XHJcbiAgICB3aWR0aDogMjF2dztcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBtYXJnaW46IDFweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDR2aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuaW9uLWdyaWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/product/current-inventory/current-inventory.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/product/current-inventory/current-inventory.page.ts ***!
      \***************************************************************************/

    /*! exports provided: CurrentInventoryPage */

    /***/
    function srcAppPagesProductCurrentInventoryCurrentInventoryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CurrentInventoryPage", function () {
        return CurrentInventoryPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../product.service */
      "./src/app/pages/product.service.ts");

      var CurrentInventoryPage = /*#__PURE__*/function () {
        function CurrentInventoryPage(loading, router, product, alertController) {
          _classCallCheck(this, CurrentInventoryPage);

          this.loading = loading;
          this.router = router;
          this.product = product;
          this.alertController = alertController;
          this.ifLogin = JSON.parse(localStorage.getItem('user'));

          if (this.router.getCurrentNavigation().extras.state) {
            this.categoryId = this.router.getCurrentNavigation().extras.state.categoryId;
          }
        }

        _createClass(CurrentInventoryPage, [{
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getfindInventoryDetails();
            setTimeout(function () {
              console.log('Async operation has ended');
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this = this;

            setTimeout(function () {
              console.log('Done');
              console.log(event); //this.getfindInventoryDetails();

              if (_this.products.length == _this.products.length) {
                event.target.disabled = true;
              }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getfindInventoryDetails();
          }
        }, {
          key: "findInventoryName",
          value: function findInventoryName(event) {
            console.log(this.allProducts);

            if (event.target.value.length > 0) {
              var data = [];
              console.log(this.products);

              for (var i = 0; i < this.products.length; i++) {
                var name = this.products[i].product_name.toLowerCase();

                if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                  data.push(this.products[i]);
                }
              }

              this.allProducts = data;
              console.log(this.allProducts);
            } else {
              this.allProducts = this.products;
            }
          }
        }, {
          key: "getfindInventoryDetails",
          value: function getfindInventoryDetails() {
            var _this2 = this;

            this.loading.present();
            console.log(this.categoryId);
            var postData = new FormData();

            if (this.categoryId == undefined) {
              postData.append('category_id', '');
            } else {
              postData.append('category_id', this.categoryId);
            }

            this.product.getInventoryDetails(postData).subscribe(function (data) {
              console.log(data);
              _this2.allProducts = data.data;
              _this2.products = data.data;

              if (data.length > 0) {
                _this2.value = _this2.value + data.data.length;

                _this2.allProducts.push(data.data);
              }

              _this2.loading.dismiss();
            }, function (onerror) {
              if (onerror.status == 0) {
                _this2.loading.presentToastWarning('check your internet connection.');

                _this2.loading.dismiss();
              } else if (onerror.status == 500) {
                _this2.loading.presentToastError('Server error.');

                _this2.loading.dismiss();
              }
            });
          }
        }, {
          key: "productDetails",
          value: function productDetails(product) {
            console.log(product);
            console.log('ooooo');
            var navigationExtras = {
              state: {
                productDetails: product,
                routerUrl: '/current-inventory'
              }
            };
            this.router.navigate(['/product-details'], navigationExtras);
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            this.router.navigateByUrl('/add-product');
          }
        }, {
          key: "editProduct",
          value: function editProduct(product) {
            console.log(product);
            var navigationExtras = {
              state: {
                product: product
              }
            };
            this.router.navigate(['/add-product'], navigationExtras);
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Are You Sure',
                        message: '<small>You Want To Delete This ?</small>',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'success'
                        }, {
                          text: 'Ok',
                          handler: function handler() {
                            _this3.loading.present();

                            var updateData = new FormData();
                            updateData.append('id', id);

                            _this3.product.deleteProduct(updateData).subscribe(function (data) {
                              console.log(data);

                              _this3.loading.dismiss();

                              _this3.loading.presentToastSuccess(data.success);

                              _this3.getfindInventoryDetails(); // this.router.navigateByUrl('/employee-list');

                            }, function (onerror) {
                              if (onerror.status == 0) {
                                _this3.loading.presentToastWarning('check your internet connection.');

                                _this3.loading.dismiss();
                              } else if (onerror.status == 500) {
                                _this3.loading.dismiss();

                                _this3.loading.presentToastError('Server error.');
                              }
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CurrentInventoryPage;
      }();

      CurrentInventoryPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      CurrentInventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-current-inventory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./current-inventory.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/current-inventory/current-inventory.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./current-inventory.page.scss */
        "./src/app/pages/product/current-inventory/current-inventory.page.scss"))["default"]]
      })], CurrentInventoryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-product-current-inventory-current-inventory-module-es5.js.map