!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var e=0;e<o.length;e++){var i=o[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"m3/d":function(e,i,t){"use strict";t.r(i),t.d(i,"ShowWorkerPageModule",(function(){return w}));var r=t("ofXK"),a=t("3Pt+"),s=t("TEn/"),l=t("tyNb"),c=t("fXoL"),b=t("3LUQ"),u=t("EXdh");function f(n,o){if(1&n&&(c.Kb(0,"ion-item"),c.Kb(1,"ion-grid"),c.Kb(2,"ion-row"),c.Kb(3,"ion-col",9),c.jc(4),c.Jb(),c.Kb(5,"ion-col"),c.Ib(6,"ion-icon",10),c.Ib(7,"ion-icon",11),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&n){var e=o.$implicit;c.xb(4),c.lc(" ",e.name," ")}}function d(n,o){if(1&n&&(c.Kb(0,"ion-list"),c.ic(1,f,8,1,"ion-item",6),c.Jb()),2&n){var e=o.$implicit;c.xb(1),c.Zb("ngForOf",e)}}var h,g,p,m=[{path:"",component:(h=function(){function e(o,i,t){n(this,e),this.loading=o,this.router=i,this.showWorker=t,this.alldata=[],this.value=0}var i,t,r;return i=e,(t=[{key:"ionViewWillEnter",value:function(){this.getWorkers()}},{key:"loadData",value:function(n){var o=this;setTimeout((function(){console.log("Done"),console.log(n),o.getWorkers(),n.target.complete()}),2e3)}},{key:"getWorkers",value:function(){var n=this;console.log(this.alldata[0]),this.loading.present();var o=new FormData;o.append("skip_id",JSON.stringify(this.value)),this.showWorker.getWorkers(o).subscribe((function(o){o.data.length>0&&(n.value=n.value+o.data.length,n.alldata.push(o.data)),n.loading.dismiss()}),(function(o){0==o.status?(n.loading.presentToastWarning("check your internet connection."),n.loading.dismiss()):500==o.status&&(n.loading.presentToastError("Server error."),n.loading.dismiss())}))}},{key:"doRefresh",value:function(n){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),n.target.complete()}),2e3)}},{key:"ngOnInit",value:function(){}}])&&o(i.prototype,t),r&&o(i,r),e}(),h.\u0275fac=function(n){return new(n||h)(c.Hb(b.a),c.Hb(l.g),c.Hb(u.a))},h.\u0275cmp=c.Bb({type:h,selectors:[["app-show-worker"]],viewQuery:function(n,o){var e;1&n&&c.mc(s.q,!0),2&n&&c.ec(e=c.Tb())&&(o.infiniteScroll=e.first)},decls:15,vars:1,consts:[["slot","start"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/add-worker"],["name","add"],[4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading..."],["size","10"],["name","trash-outline",1,"trash"],["name","create"]],template:function(n,o){1&n&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-buttons",0),c.Ib(3,"ion-menu-button"),c.Jb(),c.Kb(4,"ion-title"),c.jc(5,"Workers List"),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content"),c.Kb(7,"ion-refresher",1),c.Sb("ionRefresh",(function(n){return o.doRefresh(n)})),c.Ib(8,"ion-refresher-content",2),c.Jb(),c.Kb(9,"ion-fab",3),c.Kb(10,"ion-fab-button",4),c.Ib(11,"ion-icon",5),c.Jb(),c.Jb(),c.ic(12,d,2,1,"ion-list",6),c.Kb(13,"ion-infinite-scroll",7),c.Sb("ionInfinite",(function(n){return o.loadData(n)})),c.Ib(14,"ion-infinite-scroll-content",8),c.Jb(),c.Jb()),2&n&&(c.xb(12),c.Zb("ngForOf",o.alldata))},directives:[s.o,s.P,s.d,s.B,s.O,s.j,s.E,s.F,s.l,s.m,s.X,l.h,s.p,r.i,s.q,s.r,s.y,s.t,s.n,s.H,s.i],styles:[".trash[_ngcontent-%COMP%]{color:red}"]}),h)}],v=((p=function o(){n(this,o)}).\u0275mod=c.Fb({type:p}),p.\u0275inj=c.Eb({factory:function(n){return new(n||p)},imports:[[l.i.forChild(m)],l.i]}),p),w=((g=function o(){n(this,o)}).\u0275mod=c.Fb({type:g}),g.\u0275inj=c.Eb({factory:function(n){return new(n||g)},imports:[[r.b,a.d,s.Q,v]]}),g)}}])}();