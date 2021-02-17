(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-content [fullscreen]=\"true\">\r\n    <ion-card-content style=\"background:url(assets/icons/background.jpeg) no-repeat center center/cover; height: 100vh;\">\r\n      <div class=\"centerClass\">\r\n        <img src=\"/assets/icons/beerlogo.png\">\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <button class=\"btn btn-info {{buttonColor1}}\" (click)=\"loginOwner()\">Owner</button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <button class=\"btn btn-info {{buttonColor2}}\" (click)=\"loginEmployee()\">Employee</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <div class=\"centerClass\">\r\n        <strong><h2> {{loginStatus}} </h2></strong>\r\n      </div >\r\n\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n        <div class=\"form-group \">\r\n        \t<div class=\"input-group\">\r\n            <div class=\"input-style \">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <ion-icon name=\"person-outline\"></ion-icon>\r\n                    </span>                    \r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"User Id\" required=\"required\">\r\n              </div>\r\n            </div>\r\n        </div>\r\n\t\t    <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <div class=\"input-style \">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">\r\n                      <ion-icon name=\"key-outline\"></ion-icon>\r\n                    </span>                    \r\n                </div>\r\n                <input type=\"password\"formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\">\r\n              </div>\r\n            </div>\r\n        </div>        \r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-info buttonStyle\">Log in</button>\r\n        </div>       \r\n    </form>\r\n    <p class=\"text-center small pb-3\">Forgot password . Contact Admin</p>\r\n\r\n    <p class=\"text-center small\">Or</p>\r\n    <p  class=\"text-center small\">Login as employee</p>\r\n\r\n    </ion-card-content>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/pages/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/env.service */ "./src/app/services/env.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LoginService = class LoginService {
    constructor(http, env) {
        this.http = http;
        this.env = env;
        this.ifLogin = JSON.parse(localStorage.getItem('user'));
    }
    login(email, password) {
        return this.http.post(this.env.API_URL + 'auth/login', { email: email, password: password });
    }
    logout() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.ifLogin["token_type"] + " " + this.ifLogin["access_token"]
        });
        return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(user => {
            return user;
        }));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_env_service__WEBPACK_IMPORTED_MODULE_3__["EnvService"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centerClass {\n  text-align: center;\n}\n\nimg {\n  width: 50%;\n}\n\nh2 {\n  font-size: 19px;\n  padding: 7vw 7vw;\n}\n\n.form-group {\n  text-align: center;\n}\n\n.buttonStyle2 {\n  background-color: #612E07;\n  padding-left: 15%;\n  padding-right: 15%;\n  border-radius: 25px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.46), 0 3px 6px rgba(0, 0, 0, 0.23);\n  border: 0px;\n  width: 100%;\n  color: #F2A401;\n}\n\n.buttonStyle3 {\n  background-color: #612E07;\n  padding-left: 15%;\n  padding-right: 15%;\n  border-radius: 25px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.23), inset 0px 16px 8px -10px #f2a401b8, inset 1px -16px 8px -10px #f2a401b8;\n  border: 0px;\n  width: 100%;\n  color: #F2A401;\n}\n\n.buttonStyle {\n  background-color: #612E07;\n  padding-left: 15%;\n  padding-right: 15%;\n  border-radius: 25px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.46), 0 3px 6px rgba(0, 0, 0, 0.23);\n  border: 0px;\n}\n\np {\n  font-size: 13px;\n}\n\nspan {\n  border-color: white;\n  background-color: white;\n}\n\ninput {\n  border-color: white;\n}\n\n.input-style {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #612E07;\n  border-radius: 5px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.form-control:focus {\n  box-shadow: 0 0 0 0rem #f8f9fa00;\n  border-color: #80bdff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0VBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0pBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0VBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtBQURKOztBQUtBO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jZW50ZXJDbGFzcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBwYWRkaW5nOiA3dncgN3Z3O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsZTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxMkUwNztcclxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2IoMCAwIDAgLyA0NiUpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI0YyQTQwMTtcclxufVxyXG5cclxuLmJ1dHRvblN0eWxlMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjEyRTA3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYigwIDAgMCAvIDEwJSksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpLCBpbnNldCAwcHggMTZweCA4cHggLTEwcHggI2YyYTQwMWI4LCBpbnNldCAxcHggLTE2cHggOHB4IC0xMHB4ICNmMmE0MDFiODtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI0YyQTQwMTtcclxuICAgIC8vIGJveC1zaGFkb3c6aW5zZXQgMHB4IDE2cHggOHB4IC0xMHB4ICNmMmE0MDFiOCwgaW5zZXQgMXB4IC0xNnB4IDhweCAtMTBweCAjZjJhNDAxYjg7XHJcbn1cclxuXHJcbi5idXR0b25TdHlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjEyRTA3O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYigwIDAgMCAvIDQ2JSksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0LXN0eWxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjEyRTA3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcblxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwcmVtICNmOGY5ZmEwMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwYmRmZjAwO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login.service */ "./src/app/pages/login.service.ts");







let LoginPage = class LoginPage {
    constructor(formBuilder, loading, router, loginService, platform, routerOutlet, modalController) {
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.router = router;
        this.loginService = loginService;
        this.platform = platform;
        this.routerOutlet = routerOutlet;
        this.modalController = modalController;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.ifLogin = JSON.parse(localStorage.getItem('user'));
        this.loginStatus = 'Login as Bar Owner';
        this.buttonColor1 = 'buttonStyle3';
        this.buttonColor2 = 'buttonStyle2';
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    ionViewWillEnter() {
        if (this.ifLogin != null) {
            this.router.navigateByUrl('/dashboard');
        }
    }
    login() {
        this.loading.present();
        this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
            this.userDetails = data;
            //console.log(data.user);
            this.loading.dismiss();
            if (this.userDetails.user) {
                localStorage.setItem('user', JSON.stringify({ user: this.userDetails.user, token_type: this.userDetails.token_type, access_token: this.userDetails.access_token }));
                this.loading.dismiss();
                window.location.reload();
                this.router.navigateByUrl('/dashboard');
            }
            if (this.userDetails.error) {
                this.loading.dismiss();
                this.loading.presentToastWarning(this.userDetails.error);
            }
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
    loginEmployee() {
        this.loginStatus = 'Login as Employee';
        this.buttonColor2 = 'buttonStyle3';
        this.buttonColor1 = 'buttonStyle2';
    }
    loginOwner() {
        this.loginStatus = 'Login as Bar Owner';
        this.buttonColor1 = 'buttonStyle3';
        this.buttonColor2 = 'buttonStyle2';
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map