!function(){function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var n=0;n<o.length;n++){var e=o[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{RzEh:function(n,e,a){"use strict";a.r(e),a.d(e,"DeshboardPageModule",(function(){return y}));var i,b,r,c=a("ofXK"),l=a("3Pt+"),u=a("TEn/"),s=a("tyNb"),d=a("fXoL"),p=a("3LUQ"),h=a("8ijX"),f=[{path:"",component:(i=function(){function n(o,e,a){t(this,n),this.loading=o,this.router=e,this.shop=a,this.ifLogin=JSON.parse(localStorage.getItem("user"))}var e,a,i;return e=n,(a=[{key:"doRefresh",value:function(t){console.log("Begin async operation"),setTimeout((function(){console.log("Async operation has ended"),t.target.complete()}),2e3)}},{key:"products",value:function(){console.log("kkkkk")}},{key:"ngOnInit",value:function(){}}])&&o(e.prototype,a),i&&o(e,i),n}(),i.\u0275fac=function(t){return new(t||i)(d.Hb(p.a),d.Hb(s.g),d.Hb(h.a))},i.\u0275cmp=d.Bb({type:i,selectors:[["app-deshboard"]],decls:29,vars:1,consts:[[3,"translucent"],["slot","start"],["slot","bottom","color","light"],["tab","/"],["name","home","color","tertiary"],["tab","tab2"],["name","apps","color","tertiary"],["tab","tab3"],["name","settings","color","tertiary"],["tab","tab5"],["name","people-outline","color","tertiary"],["tab","tab4"],["name","information-circle","color","tertiary"]],template:function(t,o){1&t&&(d.Kb(0,"ion-header",0),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",1),d.Ib(3,"ion-menu-button"),d.Jb(),d.Kb(4,"ion-title"),d.jc(5,"Deshboard"),d.Jb(),d.Jb(),d.Jb(),d.Ib(6,"ion-content"),d.Kb(7,"ion-tabs"),d.Kb(8,"ion-tab-bar",2),d.Kb(9,"ion-tab-button",3),d.Ib(10,"ion-icon",4),d.Kb(11,"ion-label"),d.jc(12,"Home"),d.Jb(),d.Jb(),d.Kb(13,"ion-tab-button",5),d.Ib(14,"ion-icon",6),d.Kb(15,"ion-label"),d.jc(16,"Feed"),d.Jb(),d.Jb(),d.Kb(17,"ion-tab-button",7),d.Ib(18,"ion-icon",8),d.Kb(19,"ion-label"),d.jc(20,"Settings"),d.Jb(),d.Jb(),d.Kb(21,"ion-tab-button",9),d.Ib(22,"ion-icon",10),d.Kb(23,"ion-label"),d.jc(24,"Settings"),d.Jb(),d.Jb(),d.Kb(25,"ion-tab-button",11),d.Ib(26,"ion-icon",12),d.Kb(27,"ion-label"),d.jc(28,"about"),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&t&&d.Zb("translucent",!0)},directives:[u.o,u.P,u.d,u.B,u.O,u.j,u.N,u.L,u.M,u.p,u.x],styles:["ion-card[_ngcontent-%COMP%]{margin:1px;border-radius:25px;text-align:center}ion-card-content[_ngcontent-%COMP%]{font-size:20px;color:brown;text-shadow:2px 1px 3px #000}"]}),i),children:[{path:"",children:[{path:"",loadChildren:"../tab-one/tab-one.module#TabOnePageModule"}]},{path:"tab2",children:[{path:"",loadChildren:"../tab-two/tab-two.module#TabTwoPageModule"}]},{path:"tab3",children:[{path:"",loadChildren:"../tab-three/tab-three.module#TabThreePageModule"}]},{path:"tab4",children:[{path:"",loadChildren:"../tab-four/tab-four.module#TabFourPageModule"}]}]}],m=((b=function o(){t(this,o)}).\u0275mod=d.Fb({type:b}),b.\u0275inj=d.Eb({factory:function(t){return new(t||b)},imports:[[s.i.forChild(f)],s.i]}),b),g=a("tk/3"),y=((r=function o(){t(this,o)}).\u0275mod=d.Fb({type:r}),r.\u0275inj=d.Eb({factory:function(t){return new(t||r)},imports:[[c.b,l.i,s.i,g.b,u.Q,m]]}),r)}}])}();