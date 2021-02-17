(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-employee-employee-list-employee-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee-list/employee-list.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee-list/employee-list.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Employee List</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n          <!-- fab placed to the (vertical) center and end -->\n          <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <ion-fab-button (click)=\"createEmployee()\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n    \n    <ion-searchbar showCancelButton=\"focus\" (ionInput)=\"findEmployeeName($event)\"></ion-searchbar>\n      <ion-list>\n          <ion-grid *ngFor =\"let emplo of allEmployees\">\n            <ion-row style=\"background-color: #FAFAFA;\" >\n              <ion-col size=\"3\" *ngIf=\"!emplo.image\">\n                <img src=\"assets/icons/test.jpg\" class=\"imageSize\">\n              </ion-col>\n              <ion-col size=\"3\"*ngIf=\"emplo.image\">\n                <img src=\"{{emplo.image}}\" class=\"imageSize\">\n              </ion-col>\n              <ion-col class=\"textClass\">\n                <b>{{emplo.name}}</b>\n               <p>Employee id : E000{{emplo.id}}</p>\n              </ion-col>\n              <ion-col class=\"iconClass\" size=\"3\" style=\"text-align: center;\">\n                <ion-icon (click)=\"editEmployee(emplo)\" name=\"create-outline\"></ion-icon>\n                <ion-icon (click)=\"deleteEmployee(emplo.id)\" name=\"close-circle\" style=\"color: red;\"></ion-icon>\n\n              </ion-col>\n            </ion-row>\n            </ion-grid>\n      </ion-list>\n\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n      \n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/pages/employee/employee-list/employee-list-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/employee/employee-list/employee-list-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPageRoutingModule", function() { return EmployeeListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-list.page */ "./src/app/pages/employee/employee-list/employee-list.page.ts");




const routes = [
    {
        path: '',
        component: _employee_list_page__WEBPACK_IMPORTED_MODULE_3__["EmployeeListPage"]
    }
];
let EmployeeListPageRoutingModule = class EmployeeListPageRoutingModule {
};
EmployeeListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmployeeListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/employee/employee-list/employee-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/employee-list/employee-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPageModule", function() { return EmployeeListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list-routing.module */ "./src/app/pages/employee/employee-list/employee-list-routing.module.ts");
/* harmony import */ var _employee_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-list.page */ "./src/app/pages/employee/employee-list/employee-list.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









let EmployeeListPageModule = class EmployeeListPageModule {
};
EmployeeListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _employee_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmployeeListPageRoutingModule"]
        ],
        declarations: [_employee_list_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeListPage"]]
    })
], EmployeeListPageModule);



/***/ }),

/***/ "./src/app/pages/employee/employee-list/employee-list.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee/employee-list/employee-list.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  margin: 1px;\n  padding: 0px;\n  font-size: 3vw;\n}\n\nb {\n  color: #6B3D1A;\n}\n\n.scroll-content {\n  padding-top: 0px !important;\n}\n\n.iconClass {\n  padding: 0px;\n  margin: 5vw 0vw 0vw 0vw;\n}\n\nion-icon {\n  font-size: 4vh;\n  margin-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksMkJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbXBsb3llZS9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZm9udC1zaXplOiAzdnc7XHJcbn1cclxuYntcclxuICAgIGNvbG9yOiAjNkIzRDFBO1xyXG59XHJcbi5zY3JvbGwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4uaWNvbkNsYXNzIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogNXZ3IDB2dyAwdncgMHZ3XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/employee/employee-list/employee-list.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/employee/employee-list/employee-list.page.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListPage", function() { return EmployeeListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee.service */ "./src/app/pages/employee/employee.service.ts");






let EmployeeListPage = class EmployeeListPage {
    constructor(loading, router, empservices, alertController) {
        this.loading = loading;
        this.router = router;
        this.empservices = empservices;
        this.alertController = alertController;
        this.allEmployees = [];
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.getEmployees();
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            console.log(event);
            // this.getSellers();
            // if (this.categories.length == this.categories.length) {
            //   event.target.disabled = true;
            // }
            event.target.complete();
        }, 2000);
    }
    ionViewWillEnter() {
        this.getEmployees();
    }
    findEmployeeName(event) {
        console.log(this.allEmployees);
        if (event.target.value.length > 0) {
            var data = [];
            console.log(this.employee);
            for (let i = 0; i < this.employee.length; i++) {
                const name = this.employee[i].name.toLowerCase();
                if (name.slice(0, event.target.value.length) == event.target.value.toLowerCase()) {
                    data.push(this.employee[i]);
                }
            }
            this.allEmployees = data;
            console.log(this.allEmployees);
        }
        else {
            this.allEmployees = this.employee;
        }
    }
    getEmployees() {
        this.loading.present();
        const postData = new FormData();
        postData.append('skip_id', JSON.stringify(this.value));
        this.empservices.getEmployeeDetails(postData).subscribe(data => {
            console.log(data);
            this.employeeId = data.data;
            this.employee = data.data;
            this.allEmployees = data.data;
            if (data.length > 0) {
                this.value = this.value + data.data.length;
                this.allEmployees.push(data.data);
            }
            this.loading.dismiss();
        }, onerror => {
            if (onerror.status == 0) {
                this.loading.presentToastWarning('check your internet connection.');
                this.loading.dismiss();
            }
            else if (onerror.status == 500) {
                this.loading.presentToastError('Server error.');
                this.loading.dismiss();
            }
        });
    }
    editEmployee(empDetails) {
        console.log(empDetails);
        let navigationExtras = {
            state: {
                empDetails: empDetails
            }
        };
        this.router.navigate(['/create-employee'], navigationExtras);
    }
    deleteEmployee(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Are You Sure',
                message: '<small>You Want To Delete This ?</small>',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'success',
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.loading.present();
                            const updateData = new FormData();
                            updateData.append('id', id);
                            this.empservices.deleteEmployee(updateData).subscribe(data => {
                                console.log(data);
                                this.loading.dismiss();
                                this.loading.presentToastSuccess(data.success);
                                this.getEmployees();
                                // this.router.navigateByUrl('/employee-list');
                            }, onerror => {
                                if (onerror.status == 0) {
                                    this.loading.presentToastWarning('check your internet connection.');
                                    this.loading.dismiss();
                                }
                                else if (onerror.status == 500) {
                                    this.loading.dismiss();
                                    this.loading.presentToastError('Server error.');
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    createEmployee() {
        this.router.navigateByUrl('/create-employee');
    }
    ngOnInit() {
    }
};
EmployeeListPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
EmployeeListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee/employee-list/employee-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-list.page.scss */ "./src/app/pages/employee/employee-list/employee-list.page.scss")).default]
    })
], EmployeeListPage);



/***/ })

}]);
//# sourceMappingURL=pages-employee-employee-list-employee-list-module-es2015.js.map