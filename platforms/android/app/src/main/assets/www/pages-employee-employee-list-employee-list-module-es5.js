(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-employee-employee-list-employee-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee-list/employee-list.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee-list/employee-list.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesEmployeeEmployeeListEmployeeListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Employee List</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n          <!-- fab placed to the (vertical) center and end -->\n          <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button (click)=\"createEmployee()\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n    \n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findEmployeeName($event)\"></ion-searchbar>\n      <ion-list>\n          <ion-grid *ngFor =\"let emplo of allEmployees\">\n            <ion-row style=\"background-color: #FAFAFA;\" >\n              <ion-col size=\"3\" *ngIf=\"!emplo.image\">\n                <img src=\"assets/icons/test.jpg\" class=\"imageSize\">\n              </ion-col>\n              <ion-col size=\"3\"*ngIf=\"emplo.image\">\n                <img src=\"{{emplo.image}}\" class=\"imageSize\">\n              </ion-col>\n              <ion-col class=\"textClass\">\n                <b>{{emplo.name}}</b>\n               <p>Employee id : E000{{emplo.id}}</p>\n              </ion-col>\n              <ion-col class=\"iconClass\" size=\"3\" style=\"text-align: center;\">\n                <ion-icon (click)=\"editEmployee(emplo)\" name=\"create-outline\"></ion-icon>\n                <ion-icon (click)=\"deleteEmployee(emplo.id)\" name=\"close-circle\" style=\"color: red;\"></ion-icon>\n\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n      </ion-list>\n\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n  </ion-content>\n  ";
      /***/
    },

    /***/
    "./src/app/pages/employee/employee-list/employee-list-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/employee/employee-list/employee-list-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: EmployeeListPageRoutingModule */

    /***/
    function srcAppPagesEmployeeEmployeeListEmployeeListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeListPageRoutingModule", function () {
        return EmployeeListPageRoutingModule;
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


      var _employee_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./employee-list.page */
      "./src/app/pages/employee/employee-list/employee-list.page.ts");

      var routes = [{
        path: '',
        component: _employee_list_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeListPage"]
      }];

      var EmployeeListPageRoutingModule = function EmployeeListPageRoutingModule() {
        _classCallCheck(this, EmployeeListPageRoutingModule);
      };

      EmployeeListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EmployeeListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/employee/employee-list/employee-list.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/employee/employee-list/employee-list.module.ts ***!
      \**********************************************************************/

    /*! exports provided: EmployeeListPageModule */

    /***/
    function srcAppPagesEmployeeEmployeeListEmployeeListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeListPageModule", function () {
        return EmployeeListPageModule;
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


      var _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./employee-list-routing.module */
      "./src/app/pages/employee/employee-list/employee-list-routing.module.ts");
      /* harmony import */


      var _employee_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./employee-list.page */
      "./src/app/pages/employee/employee-list/employee-list.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var EmployeeListPageModule = function EmployeeListPageModule() {
        _classCallCheck(this, EmployeeListPageModule);
      };

      EmployeeListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeListPageRoutingModule"]],
        declarations: [_employee_list_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeListPage"]]
      })], EmployeeListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/employee/employee-list/employee-list.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/employee/employee-list/employee-list.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesEmployeeEmployeeListEmployeeListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  margin: 1px;\n  padding: 0px;\n  font-size: 3vw;\n}\n\nb {\n  color: #6B3D1A;\n}\n\n.scroll-content {\n  padding-top: 0px !important;\n}\n\n.iconClass {\n  padding: 0px;\n  margin: 5vw 0vw 0vw 0vw;\n}\n\nion-icon {\n  font-size: 4vh;\n  margin-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbXBsb3llZS9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbn1cclxuYntcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG59XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4uaWNvbkNsYXNzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogNXZ3IDB2dyAwdncgMHZ3XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/employee/employee-list/employee-list.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/employee/employee-list/employee-list.page.ts ***!
      \********************************************************************/

    /*! exports provided: EmployeeListPage */

    /***/
    function srcAppPagesEmployeeEmployeeListEmployeeListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeListPage", function () {
        return EmployeeListPage;
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


      var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../employee.service */
      "./src/app/pages/employee/employee.service.ts");

      var EmployeeListPage = /*#__PURE__*/function () {
        function EmployeeListPage(loading, router, empservices, alertController) {
          _classCallCheck(this, EmployeeListPage);

          this.loading = loading;
          this.router = router;
          this.empservices = empservices;
          this.alertController = alertController;
          this.allEmployees = [];
        }

        _createClass(EmployeeListPage, [{
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log('Begin async operation');
            this.getEmployees();
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getEmployees();
          }
        }, {
          key: "findEmployeeName",
          value: function findEmployeeName(event) {
            console.log(this.allEmployees);

            if (event.target.value.length > 0) {
              var data = [];
              console.log(this.employee);

              for (var i = 0; i < this.employee.length; i++) {
                var name = this.employee[i].name.toLowerCase();

                if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                  data.push(this.employee[i]);
                }
              }

              this.allEmployees = data;
              console.log(this.allEmployees);
            } else {
              this.allEmployees = this.employee;
            }
          }
        }, {
          key: "getEmployees",
          value: function getEmployees() {
            var _this = this;

            this.loading.present();
            var postData = new FormData();
            postData.append('skip_id', JSON.stringify(this.value));
            this.empservices.getEmployeeDetails(postData).subscribe(function (data) {
              console.log(data);
              _this.employeeId = data.data;
              _this.employee = data.data;
              _this.allEmployees = data.data;

              if (data.length > 0) {
                _this.value = _this.value + data.data.length;

                _this.allEmployees.push(data.data);
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
          key: "editEmployee",
          value: function editEmployee(empDetails) {
            console.log(empDetails);
            var navigationExtras = {
              state: {
                empDetails: empDetails
              }
            };
            this.router.navigate(['/create-employee'], navigationExtras);
          }
        }, {
          key: "deleteEmployee",
          value: function deleteEmployee(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

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
                            _this2.loading.present();

                            var updateData = new FormData();
                            updateData.append('id', id);

                            _this2.empservices.deleteEmployee(updateData).subscribe(function (data) {
                              console.log(data);

                              _this2.loading.dismiss();

                              _this2.loading.presentToastSuccess(data.success);

                              _this2.getEmployees(); // this.router.navigateByUrl('/employee-list');

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
          key: "createEmployee",
          value: function createEmployee() {
            this.router.navigateByUrl('/create-employee');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EmployeeListPage;
      }();

      EmployeeListPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      EmployeeListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./employee-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee-list/employee-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./employee-list.page.scss */
        "./src/app/pages/employee/employee-list/employee-list.page.scss"))["default"]]
      })], EmployeeListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-employee-employee-list-employee-list-module-es5.js.map