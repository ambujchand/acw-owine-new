!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{ODrL:function(o,i,t){"use strict";t.r(i),t.d(i,"ShowSellerPageModule",(function(){return y}));var r=t("ofXK"),l=t("3Pt+"),a=t("TEn/"),s=t("tyNb"),c=t("fXoL"),b=t("3LUQ"),u=t("GWEW");function f(n,e){if(1&n&&(c.Kb(0,"ion-item"),c.Kb(1,"ion-grid"),c.Kb(2,"ion-row"),c.Kb(3,"ion-col",9),c.jc(4),c.Jb(),c.Kb(5,"ion-col"),c.Ib(6,"ion-icon",10),c.Ib(7,"ion-icon",11),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&n){var o=e.$implicit;c.xb(4),c.lc(" ",o.name," ")}}function d(n,e){if(1&n&&(c.Kb(0,"ion-list"),c.ic(1,f,8,1,"ion-item",6),c.Jb()),2&n){var o=e.$implicit;c.xb(1),c.Zb("ngForOf",o)}}var h,g,p,m=[{path:"",component:(h=function(){function o(e,i,t){n(this,o),this.loading=e,this.router=i,this.showSeller=t,this.alldata=[],this.value=0}var i,t,r;return i=o,(t=[{key:"ionViewWillEnter",value:function(){this.getSellers()}},{key:"loadData",value:function(n){var e=this;setTimeout((function(){console.log("Done"),console.log(n),e.getSellers(),n.target.complete()}),2e3)}},{key:"getSellers",value:function(){var n=this;console.log(this.alldata[0]),this.loading.present();var e=new FormData;e.append("skip_id",JSON.stringify(this.value)),this.showSeller.getSellers(e).subscribe((function(e){e.data.length>0&&(n.value=n.value+e.data.length,n.alldata.push(e.data)),n.loading.dismiss()}),(function(e){0==e.status?(n.loading.presentToastWarning("check your internet connection."),n.loading.dismiss()):500==e.status&&(n.loading.presentToastError("Server error."),n.loading.dismiss())}))}},{key:"doRefresh",value:function(n){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),n.target.complete()}),2e3)}},{key:"ngOnInit",value:function(){}}])&&e(i.prototype,t),r&&e(i,r),o}(),h.\u0275fac=function(n){return new(n||h)(c.Hb(b.a),c.Hb(s.g),c.Hb(u.a))},h.\u0275cmp=c.Bb({type:h,selectors:[["app-show-seller"]],viewQuery:function(n,e){var o;1&n&&c.mc(a.q,!0),2&n&&c.ec(o=c.Tb())&&(e.infiniteScroll=o.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-seller"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(n,e){1&n&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-menu-button"),c.Jb(),c.Kb(4,"ion-title"),c.jc(5,"Seller List"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content"),c.Kb(7,"ion-refresher",1),c.Sb("ionRefresh",(function(n){return e.doRefresh(n)})),c.Ib(8,"ion-refresher-content",2),c.Jb(),c.Kb(9,"ion-fab",3),c.Kb(10,"ion-fab-button",4),c.Ib(11,"ion-icon",5),c.Jb(),c.Jb(),c.ic(12,d,2,1,"ion-list",6),c.Kb(13,"ion-infinite-scroll",7),c.Sb("ionInfinite",(function(n){return e.loadData(n)})),c.Ib(14,"ion-infinite-scroll-content",8),c.Jb(),c.Jb()),2&n&&(c.xb(12),c.Zb("ngForOf",e.alldata))},directives:[a.o,a.P,a.d,a.B,a.O,a.j,a.E,a.F,a.l,a.m,a.X,s.h,a.p,r.i,a.q,a.r,a.y,a.t,a.n,a.H,a.i],styles:[".trash[_ngcontent-%COMP%]{color:red}"]}),h)}],v=((p=function e(){n(this,e)}).\u0275mod=c.Fb({type:p}),p.\u0275inj=c.Eb({factory:function(n){return new(n||p)},imports:[[s.i.forChild(m)],s.i]}),p),y=((g=function e(){n(this,e)}).\u0275mod=c.Fb({type:g}),g.\u0275inj=c.Eb({factory:function(n){return new(n||g)},imports:[[r.b,l.d,a.Q,v]]}),g)}}])}();