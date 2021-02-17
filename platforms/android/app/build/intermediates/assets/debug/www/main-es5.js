(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
      var map = {
        "./pages/dashboard/dashboard.module": ["./src/app/pages/dashboard/dashboard.module.ts", "common", "pages-dashboard-dashboard-module"],
        "./pages/employee/create-employee/create-employee.module": ["./src/app/pages/employee/create-employee/create-employee.module.ts", "common", "pages-employee-create-employee-create-employee-module"],
        "./pages/employee/employee-list/employee-list.module": ["./src/app/pages/employee/employee-list/employee-list.module.ts", "common", "pages-employee-employee-list-employee-list-module"],
        "./pages/invoice/invoice-details/invoice-details.module": ["./src/app/pages/invoice/invoice-details/invoice-details.module.ts", "common", "pages-invoice-invoice-details-invoice-details-module"],
        "./pages/invoice/invoice-generate/invoice-generate.module": ["./src/app/pages/invoice/invoice-generate/invoice-generate.module.ts", "common", "pages-invoice-invoice-generate-invoice-generate-module"],
        "./pages/login/login.module": ["./src/app/pages/login/login.module.ts", "common", "pages-login-login-module"],
        "./pages/order/order-details/order-details.module": ["./src/app/pages/order/order-details/order-details.module.ts", "common", "pages-order-order-details-order-details-module"],
        "./pages/order/order-list/order-list.module": ["./src/app/pages/order/order-list/order-list.module.ts", "pages-order-order-list-order-list-module"],
        "./pages/order/order-tracking/order-tracking.module": ["./src/app/pages/order/order-tracking/order-tracking.module.ts", "common", "pages-order-order-tracking-order-tracking-module"],
        "./pages/order/orders/orders.module": ["./src/app/pages/order/orders/orders.module.ts", "common", "pages-order-orders-orders-module"],
        "./pages/product/add-custom-product/add-custom-product.module": ["./src/app/pages/product/add-custom-product/add-custom-product.module.ts", "common", "pages-product-add-custom-product-add-custom-product-module"],
        "./pages/product/add-product/add-product.module": ["./src/app/pages/product/add-product/add-product.module.ts", "common", "pages-product-add-product-add-product-module"],
        "./pages/product/category-list/category-list.module": ["./src/app/pages/product/category-list/category-list.module.ts", "common", "pages-product-category-list-category-list-module"],
        "./pages/product/current-inventory/current-inventory.module": ["./src/app/pages/product/current-inventory/current-inventory.module.ts", "common", "pages-product-current-inventory-current-inventory-module"],
        "./pages/product/order-details/order-details.module": ["./src/app/pages/product/order-details/order-details.module.ts", "common", "pages-product-order-details-order-details-module"],
        "./pages/product/order-list/order-list.module": ["./src/app/pages/product/order-list/order-list.module.ts", "common", "pages-product-order-list-order-list-module"],
        "./pages/product/place-order/place-order.module": ["./src/app/pages/product/place-order/place-order.module.ts", "common", "pages-product-place-order-place-order-module"],
        "./pages/product/product-catagory/product-catagory.module": ["./src/app/pages/product/product-catagory/product-catagory.module.ts", "common", "pages-product-product-catagory-product-catagory-module"],
        "./pages/product/product-details/product-details.module": ["./src/app/pages/product/product-details/product-details.module.ts", "common", "pages-product-product-details-product-details-module"],
        "./pages/product/product-list/product-list.module": ["./src/app/pages/product/product-list/product-list.module.ts", "common", "pages-product-product-list-product-list-module"],
        "./pages/product/show-catalouge/show-catalouge.module": ["./src/app/pages/product/show-catalouge/show-catalouge.module.ts", "common", "pages-product-show-catalouge-show-catalouge-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app >\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" *ngIf=\"ifLogin!=null\">\r\n      <ion-content>\r\n          <!-- <ion-list-header>Inbox2222</ion-list-header> -->\r\n          <ion-note>Hi , {{ifLogin ?ifLogin.user.name : ''}}</ion-note>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item routerLink=\"/dashboard\" lines=\"none\" style=\"height: 40px\" aria-expanded=\"true\"><i class=\"fas fa-tachometer-alt\"></i> &nbsp; Dashboard</ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item  lines=\"none\" style=\"height: 40px\"> <i class=\"far fa-user\"></i> &nbsp; My Profile</ion-item>\r\n          </ion-menu-toggle>\r\n\r\n            <div class=\"panel-group\" id=\"accordionMenu\" role=\"tablist\" aria-multiselectable=\"true\">\r\n\r\n              <div class=\"panel panel-default\" *ngIf=\"ifLogin.user.parent_id == 1\">\r\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                  <h5 class=\"panel-title\" style=\"margin-top:3px\">\r\n                  <a class=\"collapsed\" style=\"font-size: 16px;padding: 3px 1px 3px 8px;\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordionMenu\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\r\n                    <i class=\"far fa-handshake\"></i> &nbsp; Our Employee\r\n                    \r\n                  </a>\r\n                </h5>\r\n                </div>\r\n                <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n                  <div class=\"panel-body\">\r\n                    <ion-menu-toggle>\r\n                      <ion-list lines=\"none\" class=\"p-0\">\r\n                          <ion-label routerLink=\"/create-employee\" >-Create Employee</ion-label><br>\r\n                          <ion-label routerLink=\"/employee-list\">-Employee List</ion-label>\r\n                      </ion-list>\r\n                    </ion-menu-toggle> \r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n                  <h5 class=\"panel-title\" style=\"margin-top: 3px;\">\r\n                  <a class=\"collapsed\" role=\"button\" style=\"font-size: 16px;padding: 3px 1px 3px 8px;\" data-toggle=\"collapse\" data-parent=\"#accordionMenu\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                    Product Inventory\r\n                  </a>\r\n                </h5>\r\n                </div>\r\n                <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n                  <div class=\"panel-body\">\r\n                    <ion-menu-toggle auto-hide=\"false\">\r\n                      <ion-list lines=\"none\" class=\"p-0\">\r\n                       <span *ngIf=\"ifLogin.user.parent_id == 1\"><ion-label   routerLink=\"/add-product\">-Add Product</ion-label><br></span> \r\n                       <span *ngIf=\"ifLogin.user.parent_id == 1\"><ion-label  routerLink=\"/add-custom-product\">-Add Custom Product</ion-label><br></span> \r\n                        <ion-label routerLink=\"/category-list\">-Category List</ion-label><br>\r\n                        <ion-label routerLink=\"/current-inventory\">-Current Inventory</ion-label><br>\r\n                    </ion-list>\r\n                  </ion-menu-toggle> \r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <ion-menu-toggle auto-hide=\"false\">\r\n                <ion-item routerLink=\"/show-catalouge\" lines=\"none\" style=\"height: 40px\">Product Catalogue</ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle auto-hide=\"false\">\r\n                <ion-item routerLink=\"/order-details\" lines=\"none\" style=\"height: 40px\">Order Details</ion-item>\r\n              </ion-menu-toggle>\r\n              \r\n              <ion-menu-toggle auto-hide=\"false\">\r\n                <ion-item routerLink=\"/orders\" lines=\"none\" style=\"height: 40px\">Order Tracking </ion-item>\r\n              </ion-menu-toggle>\r\n\r\n              <ion-menu-toggle auto-hide=\"true\">\r\n                <ion-item (click)=\"logout()\" lines=\"none\" style=\"height: 40px\">Log Out</ion-item>\r\n              </ion-menu-toggle>\r\n            </div>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/auth-guard.guard */
      "./src/app/services/auth-guard.guard.ts");

      var routes = [{
        path: '',
        loadChildren: './pages/login/login.module#LoginPageModule'
      }, {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'product-catagory',
        loadChildren: './pages/product/product-catagory/product-catagory.module#ProductCatagoryPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'product-list',
        loadChildren: './pages/product/product-list/product-list.module#ProductListPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'product-details',
        loadChildren: './pages/product/product-details/product-details.module#ProductDetailsPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'create-employee',
        loadChildren: './pages/employee/create-employee/create-employee.module#CreateEmployeePageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'employee-list',
        loadChildren: './pages/employee/employee-list/employee-list.module#EmployeeListPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'order-list',
        loadChildren: './pages/product/order-list/order-list.module#OrderListPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'order-details',
        loadChildren: './pages/product/order-details/order-details.module#OrderDetailsPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'place-order',
        loadChildren: './pages/product/place-order/place-order.module#PlaceOrderPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'add-product',
        loadChildren: './pages/product/add-product/add-product.module#AddProductPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'add-custom-product',
        loadChildren: './pages/product/add-custom-product/add-custom-product.module#AddCustomProductPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'category-list',
        loadChildren: './pages/product/category-list/category-list.module#CategoryListPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'current-inventory',
        loadChildren: './pages/product/current-inventory/current-inventory.module#CurrentInventoryPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'order-list',
        loadChildren: './pages/order/order-list/order-list.module#OrderListPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'order-details-page',
        loadChildren: './pages/order/order-details/order-details.module#OrderDetailsPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'order-tracking',
        loadChildren: './pages/order/order-tracking/order-tracking.module#OrderTrackingPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'orders',
        loadChildren: './pages/order/orders/orders.module#OrdersPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'invoice-details',
        loadChildren: './pages/invoice/invoice-details/invoice-details.module#InvoiceDetailsPageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'invoice-generate',
        loadChildren: './pages/invoice/invoice-generate/invoice-generate.module#InvoiceGeneratePageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }, {
        path: 'show-catalouge',
        loadChildren: './pages/product/show-catalouge/show-catalouge.module#ShowCatalougePageModule',
        canActivate: [_services_auth_guard_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuardGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\nion-menu.md ion-list {\n  padding: 20px 0;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n#sidenav ion-item-group[sidemenu] {\n  overflow: hidden;\n  display: block;\n  height: 0;\n  transition: height 0.3s linear;\n}\n#sidenav ion-item-group[sidemenu].visible {\n  height: 300px;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.nav li {\n  border-bottom: 1px solid #eee;\n}\n.nav li a {\n  font-size: 14px;\n}\n.panel-default > .panel-heading a > span {\n  margin-right: 15px;\n}\n#accordionMenu {\n  max-width: 300px;\n}\n.panel-body {\n  padding: 0;\n}\n.panel-group .panel + .panel {\n  margin-top: 0;\n  border-top: 0;\n}\n.panel-group .panel {\n  border-radius: 0;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #e4e5e7;\n  padding: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.panel-default > .panel-heading a {\n  display: block;\n  padding: 10px 15px;\n  text-decoration: none;\n}\n.panel-default > .panel-heading a:after {\n  content: \"\";\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: \"Font Awesome 5 Free\" !important;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  float: right;\n  transition: transform 0.25s linear;\n  -webkit-transition: -webkit-transform 0.25s linear;\n}\n.panel-default > .panel-heading a[aria-expanded=true]:after {\n  content: \"\";\n}\n.panel-default > .panel-heading a[aria-expanded=false]:after {\n  content: \"\";\n}\nion-label {\n  margin: 2px;\n  padding-left: 7vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDJFQUFBO0FBRUY7QUFDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBOztFQUVFLGtCQUFBO0FBRUY7QUFDQTtFQUNFLDJEQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBQ0Usc0RBQUE7QUFGRjtBQUtBO0VBQ0UsK0JBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtBQUZGO0FBS0E7RUFDRSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDRSwrQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUhGO0FBTUE7RUFDRSxpQ0FBQTtBQUhGO0FBT0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7QUFKSjtBQUtJO0VBQ0ksYUFBQTtBQUhSO0FBVUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBUEY7QUFVQTtFQUNFLDZCQUFBO0FBUEY7QUFVQTtFQUNFLGVBQUE7QUFQRjtBQVNBO0VBQ0Usa0JBQUE7QUFORjtBQVFBO0VBQ0UsZ0JBQUE7QUFMRjtBQVFBO0VBQ0UsVUFBQTtBQUxGO0FBUUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUxGO0FBUUE7RUFDRSxnQkFBQTtBQUxGO0FBUUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7QUFMRjtBQVFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFMRjtBQVFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxrREFBQTtBQUxGO0FBWUE7RUFDRSxZQUFBO0FBVEY7QUFZQTtFQUNFLFlBQUE7QUFURjtBQVlBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBVEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNzaWRlbmF2IGlvbi1pdGVtLWdyb3VwW3NpZGVtZW51XSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGxpbmVhcjtcbn1cbiNzaWRlbmF2IGlvbi1pdGVtLWdyb3VwW3NpZGVtZW51XS52aXNpYmxlIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5uYXYgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLm5hdiBsaSBhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIGEgPiBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4jYWNjb3JkaW9uTWVudSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnBhbmVsLWdyb3VwIC5wYW5lbCArIC5wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlci10b3A6IDA7XG59XG5cbi5wYW5lbC1ncm91cCAucGFuZWwge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2U0ZTVlNztcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIiAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGxpbmVhcjtcbn1cblxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyBhW2FyaWEtZXhwYW5kZWQ9dHJ1ZV06YWZ0ZXIge1xuICBjb250ZW50OiBcIu+EhlwiO1xufVxuXG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIGFbYXJpYS1leHBhbmRlZD1mYWxzZV06YWZ0ZXIge1xuICBjb250ZW50OiBcIu+Eh1wiO1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA3dmg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.selectedIndex = 0;
          this.showSubmenu = false;
          this.productInventory = false;
          this.ifLogin = JSON.parse(localStorage.getItem('user'));

          if (this.ifLogin != null) {
            this.router.navigateByUrl('/dashboard');
          } else {
            this.router.navigateByUrl('/');
          }

          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "menuItemHandler",
          value: function menuItemHandler() {
            this.showSubmenu = !this.showSubmenu;
          }
        }, {
          key: "productInvMenu",
          value: function productInvMenu() {
            this.productInventory = !this.productInventory;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('orderDetails');
            localStorage.removeItem('user');
            this.router.navigateByUrl('/');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/services/auth-guard.guard.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/auth-guard.guard.ts ***!
      \**********************************************/

    /*! exports provided: AuthGuardGuard */

    /***/
    function srcAppServicesAuthGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function () {
        return AuthGuardGuard;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth.service.ts");

      var AuthGuardGuard = /*#__PURE__*/function () {
        function AuthGuardGuard(ifLogin, router) {
          _classCallCheck(this, AuthGuardGuard);

          this.ifLogin = ifLogin;
          this.router = router;
        }

        _createClass(AuthGuardGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.ifLogin.loginUser()) {
              return true;
            } else {
              this.router.navigateByUrl('/');
            }
          }
        }]);

        return AuthGuardGuard;
      }();

      AuthGuardGuard.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuardGuard);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);

          this.loginInfo = JSON.parse(localStorage.getItem('user'));
          this.sessionData = this.loginInfo;
          console.log(this.loginInfo);
        }

        _createClass(AuthService, [{
          key: "loginUser",
          value: function loginUser() {
            if (this.loginInfo) {
              return true;
            } else {
              return false;
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\GeoAlgo\Ace-Wine\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map