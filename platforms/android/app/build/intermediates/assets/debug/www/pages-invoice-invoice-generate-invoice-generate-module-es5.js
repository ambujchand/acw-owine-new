(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invoice-invoice-generate-invoice-generate-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice/invoice-generate/invoice-generate.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice/invoice-generate/invoice-generate.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesInvoiceInvoiceGenerateInvoiceGeneratePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Invoice</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n    <ion-grid>\n        <ion-row style=\"text-align: end;\">\n            <ion-col *ngIf=\"invoiceDetail\">\n                <h4>Invoice</h4>\n                <p>Invoice no : {{invoiceDetail.order_number}}</p>\n                <p>Invoice Date : {{invoiceDetail.order_date}}</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row style=\"text-align:start\">\n            <ion-col>\n                <h4>ACE Wine</h4>\n                <p>190 North Bend River Road</p>\n                <p>Zip Code: 41635</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col style=\"text-align: start;\" *ngIf=\"barDetails\">\n                <h4 >Bill To</h4>\n                <p>Company Name : {{barDetails.company_name}} </p>\n                <p>Adddess :  {{barDetails.address}}</p>\n                <p>Zip Code: {{barDetails.pincode}}</p>\n            </ion-col>\n            <ion-col style=\"text-align: end;\" *ngIf=\"barDetails\">\n                <h4>Ship To </h4>\n                <p>Company Name : {{barDetails.company_name}} </p>\n                <p>Adddess :  {{barDetails.address}}</p>\n                <p>Zip Code: {{barDetails.pincode}}</p>\n            </ion-col>\n        </ion-row>\n            <p>Date Of Supply: <span>33eww33331</span></p>\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead style=\"background-color: #e9ecef\">\n                  <tr>\n                    <th>#</th>\n                    <th>Product SKU</th>\n                    <th>Product Name</th>\n                    <th>Quantity</th>\n                    <th>Rate</th>\n                    <th>Discount</th>\n                    <th>Amount</th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"invoiceDetail\">\n                  <tr *ngFor=\"let orderdetails of invoiceDetail.details;let i = index\">\n                    <td>{{i+1}}</td>\n                    <td>{{orderdetails.sku}}</td>\n                    <td>{{orderdetails.product_name}}</td>\n                    <td>{{orderdetails.pivot.qty}}</td>\n                    <td>{{orderdetails.unit_price}}</td>\n                    <td>{{orderdetails.discount}}</td>\n                    <td>{{orderdetails.pivot.total_amount}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"total_invoice_amount table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                    <table class=\"table\">\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">Subtotal</th>\n                                <th scope=\"col\">$ {{subtotal}}</th>\n                            </tr>\n                        </thead>\n                        <tbody class=\"tax\">\n                            <tr>\n                                <td>Taxable Amount</td>\n                                <td>{{textAmount}}</td>\n                            </tr>\n                        </tbody>\n                        <thead class=\"thead-light\">\n                            <tr>\n                                <th scope=\"col\">Total</th>\n                                <th scope=\"col\">$ {{grandTotal}}</th>\n                            </tr>\n                        </thead>\n                    </table>\n                    <p class=\"in-text\">Total In Words: Two hundred thirty Only</p>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl\">\n                <p class=\"bank-name-details\">Bank Details</p>\n                <table class=\"table\">\n                    <thead class=\"thead-light\">\n                        <tr>\n                            <th scope=\"col\">Account Holder Name</th>\n                            <th scope=\"col\">Account No</th>\n                            <th scope=\"col\">IFSC Code</th>\n                            <th scope=\"col\">Name</th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"bank-info\">\n                        <tr>\n                            <td>ACE Wine</td>\n                            <td>1234567891011</td>\n                            <td>XB7891011</td>\n                            <td>XBank</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <ion-row >\n            <ion-col style=\"text-align: end;\">\n                <h4>For, ACE WINE</h4>\n                <p>Joan J. Edwards</p>\n                <p>Authorized Signature</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-generate/invoice-generate-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-generate/invoice-generate-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: InvoiceGeneratePageRoutingModule */

    /***/
    function srcAppPagesInvoiceInvoiceGenerateInvoiceGenerateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceGeneratePageRoutingModule", function () {
        return InvoiceGeneratePageRoutingModule;
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


      var _invoice_generate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoice-generate.page */
      "./src/app/pages/invoice/invoice-generate/invoice-generate.page.ts");

      var routes = [{
        path: '',
        component: _invoice_generate_page__WEBPACK_IMPORTED_MODULE_3__["InvoiceGeneratePage"]
      }];

      var InvoiceGeneratePageRoutingModule = function InvoiceGeneratePageRoutingModule() {
        _classCallCheck(this, InvoiceGeneratePageRoutingModule);
      };

      InvoiceGeneratePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InvoiceGeneratePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-generate/invoice-generate.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-generate/invoice-generate.module.ts ***!
      \***************************************************************************/

    /*! exports provided: InvoiceGeneratePageModule */

    /***/
    function srcAppPagesInvoiceInvoiceGenerateInvoiceGenerateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceGeneratePageModule", function () {
        return InvoiceGeneratePageModule;
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


      var _invoice_generate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invoice-generate-routing.module */
      "./src/app/pages/invoice/invoice-generate/invoice-generate-routing.module.ts");
      /* harmony import */


      var _invoice_generate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./invoice-generate.page */
      "./src/app/pages/invoice/invoice-generate/invoice-generate.page.ts");

      var InvoiceGeneratePageModule = function InvoiceGeneratePageModule() {
        _classCallCheck(this, InvoiceGeneratePageModule);
      };

      InvoiceGeneratePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invoice_generate_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoiceGeneratePageRoutingModule"]],
        declarations: [_invoice_generate_page__WEBPACK_IMPORTED_MODULE_6__["InvoiceGeneratePage"]]
      })], InvoiceGeneratePageModule);
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-generate/invoice-generate.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-generate/invoice-generate.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesInvoiceInvoiceGenerateInvoiceGeneratePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-weight: 500;\n  padding: 0px;\n  margin: 0px;\n  font-size: 11px;\n}\n\nh4 {\n  font-size: 16px;\n  font-weight: 700;\n  padding: 0px;\n  margin: 0px;\n}\n\ntr {\n  padding: 4px;\n  text-align: center;\n}\n\nth {\n  padding: 1px;\n  font-size: 11px;\n}\n\ntd {\n  padding: 3px !important;\n  text-align: center;\n  font-size: 12px;\n}\n\ntbody {\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52b2ljZS9pbnZvaWNlLWdlbmVyYXRlL2ludm9pY2UtZ2VuZXJhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0MsWUFBQTtBQUlEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52b2ljZS9pbnZvaWNlLWdlbmVyYXRlL2ludm9pY2UtZ2VuZXJhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuaDQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG50cntcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50aCB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxudGQge1xyXG4gICAgcGFkZGluZzogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxudGJvZHkge1xyXG4gcGFkZGluZzogMnB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-generate/invoice-generate.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-generate/invoice-generate.page.ts ***!
      \*************************************************************************/

    /*! exports provided: InvoiceGeneratePage */

    /***/
    function srcAppPagesInvoiceInvoiceGenerateInvoiceGeneratePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceGeneratePage", function () {
        return InvoiceGeneratePage;
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


      var _invoice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../invoice.service */
      "./src/app/pages/invoice/invoice.service.ts");

      var InvoiceGeneratePage = /*#__PURE__*/function () {
        function InvoiceGeneratePage(loading, router, invoice) {
          _classCallCheck(this, InvoiceGeneratePage);

          this.loading = loading;
          this.router = router;
          this.invoice = invoice;
          this.subtotal = 0;
          this.textAmount = 0;
          this.grandTotal = 0;

          if (this.router.getCurrentNavigation().extras.state) {
            this.orderId = this.router.getCurrentNavigation().extras.state.orderId;
          }

          console.log(this.orderId);
          this.getInvoiceDetails();
        }

        _createClass(InvoiceGeneratePage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "getInvoiceDetails",
          value: function getInvoiceDetails() {
            var _this = this;

            this.loading.present();
            var postData = new FormData();
            postData.append('id', this.orderId);
            this.invoice.invoiceGenerateDetails(postData).subscribe(function (data) {
              _this.invoiceDetail = data.invoiceDetails;
              _this.barDetails = data.barDetails;

              for (var i = 0; i < _this.invoiceDetail.details.length; i++) {
                _this.subtotal += parseInt(_this.invoiceDetail.details[i].pivot.total_amount);
                _this.textAmount += _this.subtotal * 0 / 100;
              }

              _this.grandTotal = _this.subtotal + _this.textAmount;
              console.log(_this.subtotal);
              console.log(_this.textAmount);
              console.log(_this.grandTotal);

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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InvoiceGeneratePage;
      }();

      InvoiceGeneratePage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _invoice_service__WEBPACK_IMPORTED_MODULE_4__["InvoiceService"]
        }];
      };

      InvoiceGeneratePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-generate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./invoice-generate.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice/invoice-generate/invoice-generate.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./invoice-generate.page.scss */
        "./src/app/pages/invoice/invoice-generate/invoice-generate.page.scss"))["default"]]
      })], InvoiceGeneratePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-invoice-invoice-generate-invoice-generate-module-es5.js.map