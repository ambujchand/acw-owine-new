(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-add-product-add-product-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-product/add-product.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-product/add-product.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesProductAddProductAddProductPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Add New Product</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- <p class=\"pt-2 m-0\" style=\"text-align: center; font-size: 20px; color: #6B3D1A;\">Add New Product</p> -->\n  <form [formGroup]=\"addProductForm\" (ngSubmit)=\"addProduct()\" class=\"mt-2\">\n\n    <ion-card >\n      <ion-item>\n        <ion-label>Product Catagory</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Select Catagory\" formControlName=\"category_id\" (ngModelChange)=\"selectProducts($event)\">\n          <ion-select-option *ngFor=\"let category of categoryProducts\" selected=\"selected\" value=\"{{category.id}}\">{{category.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n\n    <ion-card >\n      <ion-item>\n        <ion-label>Product Name</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Select Product Name\" formControlName=\"product_id\" (ngModelChange)=\"selectProduct($event)\">\n          <ion-select-option *ngFor=\"let product of products\" value=\"{{product.id}}\">{{product.product_name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n \n<ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Cost</ion-label>\n    <ion-input required=\"true\" value=\"Readonly\" readonly type=\"number\" formControlName=\"cost\"></ion-input>\n  </ion-item>\n</ion-card>\n\n<ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Sale Price</ion-label>\n    <ion-input required=\"true\" type=\"number\" formControlName=\"sale_price\"></ion-input>\n  </ion-item>\n</ion-card>\n\n<ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Product Description</ion-label>\n    <ion-input  value=\"Readonly\" readonly type=\"text\" formControlName=\"prouct_desc\"></ion-input>\n  </ion-item>\n</ion-card>\n\n\n\n<ion-card >\n  <ion-item>\n    <ion-label position=\"floating\">Current Inventory</ion-label>\n    <ion-input required=\"true\" type=\"number\" formControlName=\"qty\"></ion-input>\n  </ion-item>\n</ion-card>\n\n\n  <div class=\"imgStyle\" *ngIf=\"image\">\n    <!-- <img src=\"assets/icons/test.jpg\"> -->\n    <img src=\"{{image}}\">\n  </div>\n\n\n\n\n    <ion-button [disabled]=\"!addProductForm.valid\" type=\"submit\" shape=\"round\" slot=\"end\" style=\"margin-left: 61vw;margin-bottom: 2px;\">Submit</ion-button>\n    \n</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/product/add-product/add-product-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/product/add-product/add-product-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: AddProductPageRoutingModule */

    /***/
    function srcAppPagesProductAddProductAddProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductPageRoutingModule", function () {
        return AddProductPageRoutingModule;
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


      var _add_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-product.page */
      "./src/app/pages/product/add-product/add-product.page.ts");

      var routes = [{
        path: '',
        component: _add_product_page__WEBPACK_IMPORTED_MODULE_3__["AddProductPage"]
      }];

      var AddProductPageRoutingModule = function AddProductPageRoutingModule() {
        _classCallCheck(this, AddProductPageRoutingModule);
      };

      AddProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddProductPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/product/add-product/add-product.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/product/add-product/add-product.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AddProductPageModule */

    /***/
    function srcAppPagesProductAddProductAddProductModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function () {
        return AddProductPageModule;
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


      var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-product-routing.module */
      "./src/app/pages/product/add-product/add-product-routing.module.ts");
      /* harmony import */


      var _add_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-product.page */
      "./src/app/pages/product/add-product/add-product.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AddProductPageModule = function AddProductPageModule() {
        _classCallCheck(this, AddProductPageModule);
      };

      AddProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddProductPageRoutingModule"]],
        declarations: [_add_product_page__WEBPACK_IMPORTED_MODULE_6__["AddProductPage"]]
      })], AddProductPageModule);
      /***/
    },

    /***/
    "./src/app/pages/product/add-product/add-product.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/product/add-product/add-product.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesProductAddProductAddProductPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  border-radius: 5px !important;\n  font-size: 4vw;\n  border: 1px solid #bdb8b8 !important;\n  --background: rgb(255 255 255) !important;\n}\n\n.item-native {\n  padding: 16px;\n}\n\n.item-inner {\n  padding: 0px !important;\n}\n\nion-icon {\n  margin: 5vw 1vw 1vw 0vw;\n}\n\n.imgStyle {\n  text-align: center;\n}\n\nimg {\n  height: 14vh;\n  width: 14vh;\n}\n\nion-select {\n  float: right;\n  right: 10px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiOGI4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZlIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5pdGVtLWlubmVye1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBtYXJnaW46IDV2dyAxdncgMXZ3IDB2dztcclxufVxyXG5cclxuXHJcbi5pbWdTdHlsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogMTR2aDtcclxuICAgIHdpZHRoOiAxNHZoO1xyXG59XHJcblxyXG5cclxuaW9uLXNlbGVjdHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/product/add-product/add-product.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/product/add-product/add-product.page.ts ***!
      \***************************************************************/

    /*! exports provided: AddProductPage */

    /***/
    function srcAppPagesProductAddProductAddProductPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductPage", function () {
        return AddProductPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "./src/app/services/alert.service.ts");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../product.service */
      "./src/app/pages/product.service.ts");

      var AddProductPage = /*#__PURE__*/function () {
        function AddProductPage(loading, formBuilder, router, product) {
          _classCallCheck(this, AddProductPage);

          this.loading = loading;
          this.formBuilder = formBuilder;
          this.router = router;
          this.product = product;
          this.addProductForm = this.formBuilder.group({
            id: [''],
            category_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: [''],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sale_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            prouct_desc: [''],
            qty: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });

          if (this.router.getCurrentNavigation().extras.state) {
            var productsData = this.router.getCurrentNavigation().extras.state.product;
            this.editdata = productsData;
          }

          console.log(this.editdata);
        }

        _createClass(AddProductPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getCategoryProducts();
            this.addProductForm.controls.image.setValue(this.editdata ? this.editdata.image : '');
            this.addProductForm.controls.sale_price.setValue(this.editdata ? this.editdata.sale_price : '');
            this.addProductForm.controls.prouct_desc.setValue(this.editdata ? this.editdata.product_description : '');
            this.addProductForm.controls.qty.setValue(this.editdata ? this.editdata.qty : '');
            this.addProductForm.controls.cost.setValue(this.editdata ? this.editdata.unit_price : '');
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
              console.log(event); // this.getSellers();
              // if (this.categories.length == this.categories.length) {
              //   event.target.disabled = true;
              // }

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "getCategoryProducts",
          value: function getCategoryProducts() {
            var _this = this;

            this.loading.present();
            this.product.getCategoryProducts().subscribe(function (data) {
              console.log(data);
              _this.categoryProducts = data.data;

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
          key: "selectProducts",
          value: function selectProducts(catagory_id) {
            console.log(catagory_id);

            for (var i = 0; i < this.categoryProducts.length; i++) {
              if (this.categoryProducts[i].id == catagory_id) {
                this.addProductForm.controls.product_id.setValue('');
                this.products = this.categoryProducts[i].products;
                break;
              }
            }

            console.log(this.products);
            this.addProductForm.controls.cost.setValue('');
            this.addProductForm.controls.image.setValue('');
            this.addProductForm.controls.prouct_desc.setValue('');
            this.addProductForm.controls.sale_price.setValue('');
            this.addProductForm.controls.qty.setValue('');
          }
        }, {
          key: "selectProduct",
          value: function selectProduct(product_id) {
            this.addProductForm.controls.sale_price.setValue('');
            this.addProductForm.controls.qty.setValue('');

            for (var i = 0; i < this.products.length; i++) {
              if (this.products[i].id == product_id) {
                this.selectPro = this.products[i];
                break;
              }
            }

            this.addProductForm.controls.cost.setValue(this.selectPro ? this.selectPro.unit_price : '');
            this.addProductForm.controls.image.setValue(this.selectPro ? this.selectPro.image : '');
            this.addProductForm.controls.prouct_desc.setValue(this.selectPro ? this.selectPro.product_description : '');
            this.image = this.selectPro.image;
            console.log(this.addProductForm.value);
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            var _this2 = this;

            console.log(this.addProductForm.value);
            this.loading.present();
            this.product.addNewProduct(this.addProductForm.value).subscribe(function (data) {
              console.log(data);

              _this2.loading.dismiss();

              if (data.type == 'success') {
                _this2.loading.presentToastSuccess(data.msg);

                _this2.router.navigateByUrl('/dashboard');
              }

              if (data.type == 'error') {
                _this2.loading.presentToastError(data.msg); //this.router.navigateByUrl('/employee-list');

              }
            }, function (onerror) {
              if (onerror.status == 0) {
                _this2.loading.presentToastWarning('check your internet connection.');

                _this2.loading.dismiss();
              } else if (onerror.status == 500) {
                _this2.loading.dismiss();

                _this2.loading.presentToastError('Server error.');
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddProductPage;
      }();

      AddProductPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }];
      };

      AddProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-product.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-product/add-product.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-product.page.scss */
        "./src/app/pages/product/add-product/add-product.page.scss"))["default"]]
      })], AddProductPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-product-add-product-add-product-module-es5.js.map