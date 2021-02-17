import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './services/auth-guard.guard';
const routes: Routes = [
  { path: '',loadChildren:'./pages/login/login.module#LoginPageModule'},
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',canActivate: [AuthGuardGuard]},
  { path: 'product-catagory', loadChildren: './pages/product/product-catagory/product-catagory.module#ProductCatagoryPageModule',canActivate: [AuthGuardGuard]},
  { path: 'product-list', loadChildren: './pages/product/product-list/product-list.module#ProductListPageModule',canActivate: [AuthGuardGuard]},
  { path: 'product-details', loadChildren: './pages/product/product-details/product-details.module#ProductDetailsPageModule',canActivate: [AuthGuardGuard]},
  { path: 'create-employee',loadChildren:'./pages/employee/create-employee/create-employee.module#CreateEmployeePageModule',canActivate: [AuthGuardGuard]},
  { path: 'employee-list', loadChildren:'./pages/employee/employee-list/employee-list.module#EmployeeListPageModule',canActivate: [AuthGuardGuard]},
  { path: 'order-list', loadChildren:'./pages/product/order-list/order-list.module#OrderListPageModule' ,canActivate: [AuthGuardGuard]},
  { path: 'order-details', loadChildren:'./pages/product/order-details/order-details.module#OrderDetailsPageModule',canActivate: [AuthGuardGuard]},
  { path: 'place-order', loadChildren:'./pages/product/place-order/place-order.module#PlaceOrderPageModule',canActivate: [AuthGuardGuard]},
  { path: 'add-product', loadChildren:'./pages/product/add-product/add-product.module#AddProductPageModule',canActivate: [AuthGuardGuard]},
  { path: 'add-custom-product', loadChildren:'./pages/product/add-custom-product/add-custom-product.module#AddCustomProductPageModule',canActivate: [AuthGuardGuard]},
  { path: 'category-list', loadChildren:'./pages/product/category-list/category-list.module#CategoryListPageModule',canActivate: [AuthGuardGuard]},
  { path: 'current-inventory',loadChildren:'./pages/product/current-inventory/current-inventory.module#CurrentInventoryPageModule',canActivate: [AuthGuardGuard]},
  { path: 'order-list', loadChildren:'./pages/order/order-list/order-list.module#OrderListPageModule',canActivate: [AuthGuardGuard]},
  { path: 'order-details-page',loadChildren:'./pages/order/order-details/order-details.module#OrderDetailsPageModule',canActivate: [AuthGuardGuard]},
  { path: 'order-tracking', loadChildren:'./pages/order/order-tracking/order-tracking.module#OrderTrackingPageModule',canActivate: [AuthGuardGuard]},
  { path: 'orders', loadChildren:'./pages/order/orders/orders.module#OrdersPageModule',canActivate: [AuthGuardGuard]},
  { path: 'invoice-details',loadChildren: './pages/invoice/invoice-details/invoice-details.module#InvoiceDetailsPageModule' ,canActivate: [AuthGuardGuard]},
  { path: 'invoice-generate',loadChildren: './pages/invoice/invoice-generate/invoice-generate.module#InvoiceGeneratePageModule',canActivate: [AuthGuardGuard]},
  { path: 'show-catalouge', loadChildren: './pages/product/show-catalouge/show-catalouge.module#ShowCatalougePageModule',canActivate: [AuthGuardGuard]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
