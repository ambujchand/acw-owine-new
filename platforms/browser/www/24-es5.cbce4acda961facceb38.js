!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{gQLo:function(e,o,t){"use strict";t.r(o),t.d(o,"ShowBrandPageModule",(function(){return y}));var r=t("ofXK"),a=t("3Pt+"),s=t("TEn/"),c=t("tyNb"),l=t("fXoL"),b=t("3LUQ"),u=t("RKQv");function f(n,i){if(1&n&&(l.Kb(0,"ion-item"),l.Kb(1,"ion-grid"),l.Kb(2,"ion-row"),l.Kb(3,"ion-col",9),l.jc(4),l.Jb(),l.Kb(5,"ion-col"),l.Ib(6,"ion-icon",10),l.Ib(7,"ion-icon",11),l.Jb(),l.Jb(),l.Jb(),l.Jb()),2&n){var e=i.$implicit;l.xb(4),l.lc(" ",e.brand_name," ")}}function d(n,i){if(1&n&&(l.Kb(0,"ion-list"),l.ic(1,f,8,1,"ion-item",6),l.Jb()),2&n){var e=i.$implicit;l.xb(1),l.Zb("ngForOf",e)}}var h,g,p,m=[{path:"",component:(h=function(){function e(i,o,t){n(this,e),this.loading=i,this.router=o,this.brand=t,this.brands=[],this.value=0}var o,t,r;return o=e,(t=[{key:"loadData",value:function(n){var i=this;setTimeout((function(){i.getBrands(),n.target.complete()}),2e3)}},{key:"doRefresh",value:function(n){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),n.target.complete()}),2e3)}},{key:"ionViewWillEnter",value:function(){this.getBrands()}},{key:"getBrands",value:function(){var n=this;this.loading.present(),console.log(this.value);var i=new FormData;i.append("skip_id",JSON.stringify(this.value)),this.brand.getBrands(i).subscribe((function(i){i.length>0&&(n.value=n.value+i.length,n.brands.push(i)),n.loading.dismiss()}),(function(i){0==i.status?(n.loading.presentToastWarning("check your internet connection."),n.loading.dismiss()):500==i.status&&(n.loading.presentToastError("Server error."),n.loading.dismiss())}))}},{key:"ngOnInit",value:function(){}}])&&i(o.prototype,t),r&&i(o,r),e}(),h.\u0275fac=function(n){return new(n||h)(l.Hb(b.a),l.Hb(c.g),l.Hb(u.a))},h.\u0275cmp=l.Bb({type:h,selectors:[["app-show-brand"]],viewQuery:function(n,i){var e;1&n&&l.mc(s.q,!0),2&n&&l.ec(e=l.Tb())&&(i.infiniteScroll=e.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-brand"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(n,i){1&n&&(l.Kb(0,"ion-header"),l.Kb(1,"ion-toolbar"),l.Kb(2,"ion-buttons",0),l.Ib(3,"ion-menu-button"),l.Jb(),l.Kb(4,"ion-title"),l.jc(5,"All Brands"),l.Jb(),l.Jb(),l.Jb(),l.Kb(6,"ion-content"),l.Kb(7,"ion-refresher",1),l.Sb("ionRefresh",(function(n){return i.doRefresh(n)})),l.Ib(8,"ion-refresher-content",2),l.Jb(),l.Kb(9,"ion-fab",3),l.Kb(10,"ion-fab-button",4),l.Ib(11,"ion-icon",5),l.Jb(),l.Jb(),l.ic(12,d,2,1,"ion-list",6),l.Kb(13,"ion-infinite-scroll",7),l.Sb("ionInfinite",(function(n){return i.loadData(n)})),l.Ib(14,"ion-infinite-scroll-content",8),l.Jb(),l.Jb()),2&n&&(l.xb(12),l.Zb("ngForOf",i.brands))},directives:[s.o,s.P,s.d,s.B,s.O,s.j,s.E,s.F,s.l,s.m,s.X,c.h,s.p,r.i,s.q,s.r,s.y,s.t,s.n,s.H,s.i],styles:[".trash[_ngcontent-%COMP%]{color:red}"]}),h)}],v=((p=function i(){n(this,i)}).\u0275mod=l.Fb({type:p}),p.\u0275inj=l.Eb({factory:function(n){return new(n||p)},imports:[[c.i.forChild(m)],c.i]}),p),y=((g=function i(){n(this,i)}).\u0275mod=l.Fb({type:g}),g.\u0275inj=l.Eb({factory:function(n){return new(n||g)},imports:[[r.b,a.d,s.Q,v]]}),g)}}])}();