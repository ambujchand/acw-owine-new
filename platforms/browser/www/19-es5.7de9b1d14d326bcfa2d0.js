!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{wb5u:function(i,t,o){"use strict";o.r(t),o.d(t,"ShowRetailerPageModule",(function(){return w}));var r=o("ofXK"),a=o("3Pt+"),l=o("TEn/"),s=o("tyNb"),c=o("fXoL"),b=o("3LUQ"),u=o("Tf6j");function f(n,e){if(1&n&&(c.Kb(0,"ion-item"),c.Kb(1,"ion-grid"),c.Kb(2,"ion-row"),c.Kb(3,"ion-col",9),c.jc(4),c.Jb(),c.Kb(5,"ion-col"),c.Ib(6,"ion-icon",10),c.Ib(7,"ion-icon",11),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&n){var i=e.$implicit;c.xb(4),c.lc(" ",i.name," ")}}function d(n,e){if(1&n&&(c.Kb(0,"ion-list"),c.ic(1,f,8,1,"ion-item",6),c.Jb()),2&n){var i=e.$implicit;c.xb(1),c.Zb("ngForOf",i)}}var h,g,p,m=[{path:"",component:(h=function(){function i(e,t,o){n(this,i),this.loading=e,this.router=t,this.showRetailer=o,this.alldata=[],this.value=0}var t,o,r;return t=i,(o=[{key:"ionViewWillEnter",value:function(){this.getRetailers()}},{key:"loadData",value:function(n){var e=this;setTimeout((function(){console.log("Done"),console.log(n),e.getRetailers(),n.target.complete()}),2e3)}},{key:"getRetailers",value:function(){var n=this;console.log(this.alldata[0]),this.loading.present();var e=new FormData;e.append("skip_id",JSON.stringify(this.value)),this.showRetailer.getRetailers(e).subscribe((function(e){console.log(e),e.data.length>0&&(n.value=n.value+e.data.length,n.alldata.push(e.data)),n.loading.dismiss()}),(function(e){0==e.status?(n.loading.presentToastWarning("check your internet connection."),n.loading.dismiss()):500==e.status&&(n.loading.presentToastError("Server error."),n.loading.dismiss())}))}},{key:"doRefresh",value:function(n){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),n.target.complete()}),2e3)}},{key:"ngOnInit",value:function(){}}])&&e(t.prototype,o),r&&e(t,r),i}(),h.\u0275fac=function(n){return new(n||h)(c.Hb(b.a),c.Hb(s.g),c.Hb(u.a))},h.\u0275cmp=c.Bb({type:h,selectors:[["app-show-retailer"]],viewQuery:function(n,e){var i;1&n&&c.mc(l.q,!0),2&n&&c.ec(i=c.Tb())&&(e.infiniteScroll=i.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-retailer"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(n,e){1&n&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-menu-button"),c.Jb(),c.Kb(4,"ion-title"),c.jc(5,"Retailer List"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content"),c.Kb(7,"ion-refresher",1),c.Sb("ionRefresh",(function(n){return e.doRefresh(n)})),c.Ib(8,"ion-refresher-content",2),c.Jb(),c.Kb(9,"ion-fab",3),c.Kb(10,"ion-fab-button",4),c.Ib(11,"ion-icon",5),c.Jb(),c.Jb(),c.ic(12,d,2,1,"ion-list",6),c.Kb(13,"ion-infinite-scroll",7),c.Sb("ionInfinite",(function(n){return e.loadData(n)})),c.Ib(14,"ion-infinite-scroll-content",8),c.Jb(),c.Jb()),2&n&&(c.xb(12),c.Zb("ngForOf",e.alldata))},directives:[l.o,l.P,l.d,l.B,l.O,l.j,l.E,l.F,l.l,l.m,l.X,s.h,l.p,r.i,l.q,l.r,l.y,l.t,l.n,l.H,l.i],styles:[".trash[_ngcontent-%COMP%]{color:red}"]}),h)}],v=((p=function e(){n(this,e)}).\u0275mod=c.Fb({type:p}),p.\u0275inj=c.Eb({factory:function(n){return new(n||p)},imports:[[s.i.forChild(m)],s.i]}),p),w=((g=function e(){n(this,e)}).\u0275mod=c.Fb({type:g}),g.\u0275inj=c.Eb({factory:function(n){return new(n||g)},imports:[[r.b,a.d,l.Q,v]]}),g)}}])}();