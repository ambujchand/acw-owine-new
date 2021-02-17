(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-add-custom-product-add-custom-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-custom-product/add-custom-product.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-custom-product/add-custom-product.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Add Custom Product</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content [fullscreen]=\"true\">\n\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <form [formGroup]=\"addCustomProductForm\" (ngSubmit)=\"addCustomProduct()\" class=\"mt-2\">\n\n    <div class=\"imgStyle\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"photoStyle\" (click)=\"takePhoto()\">\n            <ion-icon name=\"camera-outline\"></ion-icon>\n          </ion-col>\n          <ion-col *ngIf=\"photo\">\n            <img [src]=\"photo\">\n          </ion-col>\n          <ion-col *ngIf=\"!photo\">\n            <img src=\"assets/icons/test.jpg\">\n          </ion-col>\n          <ion-col class=\"photoStyle\" (click)=\"getPhoto()\">\n            <ion-icon name=\"image-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <ion-card >\n      <ion-item>\n        <ion-label position=\"floating\">Catagory Name</ion-label>\n        <ion-input required=\"true\"  type=\"text\" formControlName=\"catagory_name\"></ion-input>\n      </ion-item>\n    </ion-card>\n\n    <ion-card >\n      <ion-item>\n        <ion-label position=\"floating\">Product Name</ion-label>\n        <ion-input required=\"true\"  type=\"text\" formControlName=\"product_name\"></ion-input>\n      </ion-item>\n    </ion-card>\n \n<ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Cost</ion-label>\n    <ion-input required=\"true\" type=\"number\" formControlName=\"cost\"></ion-input>\n  </ion-item>\n</ion-card>\n\n<ion-card>\n  <ion-item>\n    <ion-label position=\"floating\">Sale Price</ion-label>\n    <ion-input required=\"true\" type=\"number\" formControlName=\"sale_price\"></ion-input>\n  </ion-item>\n</ion-card>\n\n\n\n<ion-card >\n  <ion-item>\n    <ion-label position=\"floating\">Product Description</ion-label>\n    <ion-textarea clearOnEdit=\"true\" formControlName=\"product_desc\"></ion-textarea>\n  </ion-item>\n</ion-card>\n\n    <ion-button [disabled]=\"!addCustomProductForm.valid\" type=\"submit\" shape=\"round\" slot=\"end\" style=\"margin-left: 61vw;margin-bottom: 2px;\">Submit</ion-button>\n    \n</form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/product/add-custom-product/add-custom-product-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/product/add-custom-product/add-custom-product-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddCustomProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomProductPageRoutingModule", function() { return AddCustomProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_custom_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-custom-product.page */ "./src/app/pages/product/add-custom-product/add-custom-product.page.ts");




const routes = [
    {
        path: '',
        component: _add_custom_product_page__WEBPACK_IMPORTED_MODULE_3__["AddCustomProductPage"]
    }
];
let AddCustomProductPageRoutingModule = class AddCustomProductPageRoutingModule {
};
AddCustomProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddCustomProductPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/add-custom-product/add-custom-product.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/product/add-custom-product/add-custom-product.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AddCustomProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomProductPageModule", function() { return AddCustomProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_custom_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-custom-product-routing.module */ "./src/app/pages/product/add-custom-product/add-custom-product-routing.module.ts");
/* harmony import */ var _add_custom_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-custom-product.page */ "./src/app/pages/product/add-custom-product/add-custom-product.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let AddCustomProductPageModule = class AddCustomProductPageModule {
};
AddCustomProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_custom_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCustomProductPageRoutingModule"]
        ],
        declarations: [_add_custom_product_page__WEBPACK_IMPORTED_MODULE_6__["AddCustomProductPage"]]
    })
], AddCustomProductPageModule);



/***/ }),

/***/ "./src/app/pages/product/add-custom-product/add-custom-product.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/product/add-custom-product/add-custom-product.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border-radius: 5px !important;\n  font-size: 4vw;\n  border: 1px solid #bdb8b8 !important;\n  --background: rgb(255 255 255) !important;\n}\n\n.item-native {\n  padding: 16px;\n}\n\n.item-inner {\n  padding: 0px !important;\n}\n\nion-icon {\n  margin: 5vw 1vw 1vw 0vw;\n}\n\n.imgStyle {\n  text-align: center;\n}\n\nimg {\n  height: 14vh;\n  width: 14vh;\n  border-radius: 50px;\n  margin-top: 1vh;\n}\n\n.photoStyle {\n  font-size: 5vh;\n  margin-top: 3vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9hZGQtY3VzdG9tLXByb2R1Y3QvYWRkLWN1c3RvbS1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EseUNBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC9hZGQtY3VzdG9tLXByb2R1Y3QvYWRkLWN1c3RvbS1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA0dnc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiOGI4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tbmF0aXZlIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5pdGVtLWlubmVye1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICBtYXJnaW46IDV2dyAxdncgMXZ3IDB2dztcclxufVxyXG5cclxuLmltZ1N0eWxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAxNHZoO1xyXG4gICAgd2lkdGg6IDE0dmg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMXZoO1xyXG59XHJcblxyXG4ucGhvdG9TdHlsZXtcclxuICAgIGZvbnQtc2l6ZTogNXZoO1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/product/add-custom-product/add-custom-product.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/product/add-custom-product/add-custom-product.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AddCustomProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomProductPage", function() { return AddCustomProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../product.service */ "./src/app/pages/product.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");







let AddCustomProductPage = class AddCustomProductPage {
    constructor(loading, camera, formBuilder, router, product) {
        this.loading = loading;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.router = router;
        this.product = product;
        this.addCustomProductForm = this.formBuilder.group({
            catagory_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: [''],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sale_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            product_desc: [''],
        });
    }
    ionViewWillEnter() {
        //this.getCategoryProducts();
    }
    doRefresh(event) {
        console.log('Begin async operation');
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
    // open camera 
    takePhoto() {
        this.camera.getPicture({
            quality: 30,
            allowEdit: true,
            saveToPhotoAlbum: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.photo = base64Image;
            this.image = imageData;
            this.addCustomProductForm.controls.image.setValue(imageData ? imageData : '');
        }, (err) => {
            console.log(err);
            this.loading.presentToastWarning(err);
            // Handle error
        });
    }
    /// select image from PHOTOLIBRARY
    getPhoto() {
        this.camera.getPicture({
            quality: 30,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
        }).then((dataImage) => {
            let base64Image = 'data:image/jpeg;base64,' + dataImage;
            this.photo = base64Image;
            this.image = dataImage;
            this.addCustomProductForm.controls.image.setValue(dataImage ? dataImage : '');
        }, (err) => {
            // Handle error
        });
    }
    addCustomProduct() {
        console.log(this.addCustomProductForm.value);
        this.loading.present();
        this.product.addCustomProduct(this.addCustomProductForm.value).subscribe(data => {
            console.log(data);
            this.loading.dismiss();
            if (data.type == 'success') {
                this.loading.presentToastSuccess(data.msg);
                this.router.navigateByUrl('/dashboard');
            }
            if (data.type == 'error') {
                this.loading.presentToastError(data.msg);
                //this.router.navigateByUrl('/employee-list');
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
    ngOnInit() {
    }
};
AddCustomProductPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
];
AddCustomProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-custom-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-custom-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/add-custom-product/add-custom-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-custom-product.page.scss */ "./src/app/pages/product/add-custom-product/add-custom-product.page.scss")).default]
    })
], AddCustomProductPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-add-custom-product-add-custom-product-module-es2015.js.map