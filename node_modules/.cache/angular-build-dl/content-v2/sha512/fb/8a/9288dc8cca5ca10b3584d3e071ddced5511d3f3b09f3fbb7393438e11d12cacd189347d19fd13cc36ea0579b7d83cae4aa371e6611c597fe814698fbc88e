(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invoice-invoice-details-invoice-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice/invoice-details/invoice-details.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice/invoice-details/invoice-details.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesInvoiceInvoiceDetailsInvoiceDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Invoice Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n      <div >\n        <ion-grid>\n          <ion-row>\n            <ion-col><strong>Purchase Invoice</strong></ion-col>\n            <ion-col style=\"border: 1px solid #6B3D1A;height: 33px;border-radius: 4px;\">\n                <ion-datetime displayFormat=\"MMMM YYYY\" placeholder=\"Select Month\"(ionChange)=\"invoiceDetails($event)\" style=\"padding-top: 5px;font-size: 12px;color: #6B3D1A;\"></ion-datetime>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col><small style=\"color: #6B3D1A;font-weight: 800;\">Billed for this months of Dec 2001</small></ion-col>\n            <ion-col size=\"3\" style=\"text-align: end;\">\n              <strong>$1000</strong>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n\n\n        <ion-grid style=\"text-align: center;\">\n          <ion-row style=\"background-color: #f8f9fa;\">\n            <ion-col>\n              <small>Date</small>\n            </ion-col>\n            <ion-col size=\"4\">\n              <small>Invoive Number</small>\n            </ion-col>\n            <ion-col>\n              <small>Status</small>\n            </ion-col>\n            <ion-col>\n              <small>Paid By</small>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngFor = \"let invoice of invoices\" style=\"text-align: center;\">\n            <ion-col class=\"orderStype\" (click)=\"invoiceGenarate(invoice.id)\">\n              <small>{{invoice.order_date.slice(0, 10)}}</small>\n            </ion-col>\n            <ion-col class=\"orderStype\" (click)=\"invoiceGenarate(invoice.id)\">\n              <small>{{invoice.order_number.substring(0,12)}}..</small>\n            </ion-col>\n            <ion-col class=\"orderStype\" size=\"2\" (click)=\"invoiceGenarate(invoice.id)\">\n              <small>{{ invoice.status == 1 ? 'Orderd': invoice.status == 2 ? 'Inprogress' : invoice.status == 3 ? 'Deliverd':''}}</small>\n            </ion-col>\n            <ion-col class=\"orderStype\" (click)=\"invoiceGenarate(invoice.id)\">\n              <small>{{ifLogin.user.name}}</small>\n            </ion-col>\n              </ion-row>\n        </ion-grid>\n      </div>\n  </ion-content>\n  ";
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-details/invoice-details-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-details/invoice-details-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: InvoiceDetailsPageRoutingModule */

    /***/
    function srcAppPagesInvoiceInvoiceDetailsInvoiceDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceDetailsPageRoutingModule", function () {
        return InvoiceDetailsPageRoutingModule;
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


      var _invoice_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoice-details.page */
      "./src/app/pages/invoice/invoice-details/invoice-details.page.ts");

      var routes = [{
        path: '',
        component: _invoice_details_page__WEBPACK_IMPORTED_MODULE_3__["InvoiceDetailsPage"]
      }];

      var InvoiceDetailsPageRoutingModule = function InvoiceDetailsPageRoutingModule() {
        _classCallCheck(this, InvoiceDetailsPageRoutingModule);
      };

      InvoiceDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InvoiceDetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-details/invoice-details.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-details/invoice-details.module.ts ***!
      \*************************************************************************/

    /*! exports provided: InvoiceDetailsPageModule */

    /***/
    function srcAppPagesInvoiceInvoiceDetailsInvoiceDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceDetailsPageModule", function () {
        return InvoiceDetailsPageModule;
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


      var _invoice_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invoice-details-routing.module */
      "./src/app/pages/invoice/invoice-details/invoice-details-routing.module.ts");
      /* harmony import */


      var _invoice_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./invoice-details.page */
      "./src/app/pages/invoice/invoice-details/invoice-details.page.ts");

      var InvoiceDetailsPageModule = function InvoiceDetailsPageModule() {
        _classCallCheck(this, InvoiceDetailsPageModule);
      };

      InvoiceDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invoice_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoiceDetailsPageRoutingModule"]],
        declarations: [_invoice_details_page__WEBPACK_IMPORTED_MODULE_6__["InvoiceDetailsPage"]]
      })], InvoiceDetailsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-details/invoice-details.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-details/invoice-details.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesInvoiceInvoiceDetailsInvoiceDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-col {\n  padding: 1px;\n  margin: 1px;\n  font-size: 15px;\n}\n\n.orderStype {\n  color: #6B3D1A;\n  font-size: 15px;\n}\n\np {\n  padding: 0px;\n  margin: 0px;\n}\n\n.orderButton {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  height: 46px;\n  font-size: 15px;\n  margin: 0;\n  color: #FFCC6A;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52b2ljZS9pbnZvaWNlLWRldGFpbHMvaW52b2ljZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludm9pY2UvaW52b2ljZS1kZXRhaWxzL2ludm9pY2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29se1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLy8gaW9uLWdyaWR7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi5vcmRlclN0eXBle1xyXG4gICAgY29sb3I6ICM2QjNEMUE7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxucHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ub3JkZXJCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjRkZDQzZBO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/invoice/invoice-details/invoice-details.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/invoice/invoice-details/invoice-details.page.ts ***!
      \***********************************************************************/

    /*! exports provided: InvoiceDetailsPage */

    /***/
    function srcAppPagesInvoiceInvoiceDetailsInvoiceDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoiceDetailsPage", function () {
        return InvoiceDetailsPage;
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


      var _invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../invoice.service */
      "./src/app/pages/invoice/invoice.service.ts");

      var InvoiceDetailsPage = /*#__PURE__*/function () {
        function InvoiceDetailsPage(loading, formBuilder, router, invoice) {
          _classCallCheck(this, InvoiceDetailsPage);

          this.loading = loading;
          this.formBuilder = formBuilder;
          this.router = router;
          this.invoice = invoice;
          this.ifLogin = JSON.parse(localStorage.getItem('user'));
        }

        _createClass(InvoiceDetailsPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.invoiceDetails('');
          }
        }, {
          key: "invoiceDetails",
          value: function invoiceDetails(event) {
            var _this = this;

            var d = Date.now();
            console.log(d);
            this.loading.present();
            var postData = new FormData();

            if (event != '') {
              var selectedDate = event.target.value;
              var date = selectedDate.slice(0, 10);
              postData.append('selectData', date);
            } else {
              postData.append('selectData', '');
            }

            this.invoice.getInvoice(postData).subscribe(function (data) {
              _this.invoices = data.data;
              _this.Allinvoices = data.data;
              console.log(data);

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
          key: "invoiceGenarate",
          value: function invoiceGenarate(orderId) {
            console.log(orderId);
            var navigationExtras = {
              state: {
                orderId: orderId
              }
            };
            this.router.navigate(['/invoice-generate'], navigationExtras);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InvoiceDetailsPage;
      }();

      InvoiceDetailsPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _invoice_service__WEBPACK_IMPORTED_MODULE_5__["InvoiceService"]
        }];
      };

      InvoiceDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./invoice-details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice/invoice-details/invoice-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./invoice-details.page.scss */
        "./src/app/pages/invoice/invoice-details/invoice-details.page.scss"))["default"]]
      })], InvoiceDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-invoice-invoice-details-invoice-details-module-es5.js.map