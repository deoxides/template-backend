"use strict";(self.webpackChunkTickets=self.webpackChunkTickets||[]).push([[669],{8669:(At,x,i)=>{i.r(x),i.d(x,{AdminModule:()=>Zt});var m=i(9808),p=i(1083),l=i(4999),k=i(4004),t=i(5e3),S=i(9646),D=i(4691);let u=(()=>{class e{constructor(n){this.http=n,this.apps=[],this.apps=[{id:1,icon:"home",toolTip:"Inicio",nombre:""},{id:1,icon:"groups",toolTip:"Recursos Humanos",nombre:""},{id:1,icon:"request_quote",toolTip:"Finanzas",nombre:""}]}get Apps(){return this.apps}getApps(){return(0,S.of)(this.apps)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(D.O))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var C=i(4594),g=i(3251),b=i(449),N=i(515),f=i(7423),T=i(7446);const O=["dataSource",""];function M(e,o){1&e&&(t.ynx(0),t.TgZ(1,"span")(2,"button",1),t._uU(3,"Eliminar seleccionados"),t.qZA()(),t.BQk())}function U(e,o){if(1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",n," ")}}function P(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const n=o.$implicit,a=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",n[a]," ")}}function $(e,o){1&e&&(t.ynx(0),t.YNc(1,U,2,1,"mat-header-cell",9),t.YNc(2,P,2,1,"mat-cell",10),t.BQk())}function J(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-header-cell")(1,"mat-checkbox",11),t.NdJ("change",function(c){t.CHM(n);const s=t.oxw(4);return c?s.toggleAllRows():null}),t.qZA()()}if(2&e){const n=t.oxw(4);t.xp6(1),t.Q6J("checked",(null==n.$selection?null:n.$selection.hasValue())&&n.isAllSelected())("indeterminate",(null==n.$selection?null:n.$selection.hasValue())&&!n.isAllSelected())("aria-label",n.checkboxLabel())}}function F(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-cell")(1,"mat-checkbox",12),t.NdJ("click",function(c){return c.stopPropagation()})("change",function(c){const r=t.CHM(n).$implicit,_=t.oxw(4);return c?null==_.$selection?null:_.$selection.toggle(r):null}),t.qZA()()}if(2&e){const n=o.$implicit,a=t.oxw(4);t.xp6(1),t.Q6J("checked",null==a.$selection?null:a.$selection.isSelected(n))("aria-label",a.checkboxLabel(n))}}function Q(e,o){1&e&&(t.YNc(0,J,2,3,"mat-header-cell",9),t.YNc(1,F,2,2,"mat-cell",10))}function Y(e,o){if(1&e&&(t.ynx(0,6),t.YNc(1,$,3,0,"ng-container",7),t.YNc(2,Q,2,0,"ng-template",null,8,t.W1O),t.BQk()),2&e){const n=o.$implicit,a=t.MAs(3);t.Q6J("matColumnDef",n),t.xp6(1),t.Q6J("ngIf","select"!==n)("ngIfElse",a)}}function H(e,o){1&e&&t._UZ(0,"mat-header-row")}function I(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-row",13),t.NdJ("click",function(){const s=t.CHM(n).$implicit,r=t.oxw(2);return null==r.$selection?null:r.$selection.toggle(s)}),t.qZA()}}function L(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"mat-table",2),t.YNc(2,Y,4,3,"ng-container",3),t.YNc(3,H,1,0,"mat-header-row",4),t.YNc(4,I,1,0,"mat-row",5),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("dataSource",n.$dataSource),t.xp6(1),t.Q6J("ngForOf",n.columns),t.xp6(1),t.Q6J("matHeaderRowDef",n.columns),t.xp6(1),t.Q6J("matRowDefColumns",n.columns)}}let B=(()=>{class e{constructor(){this.columns=[],this.dataSource=N.E,this.multiSelect=!1}ngOnInit(){this.multiSelect&&(this.columns.unshift("select"),this.$selection=new b.Ov(!0,[])),this.dataSource.subscribe(n=>{console.log(this.columns),this.$dataSource=n})}isAllSelected(){var n,a;return(null===(n=this.$selection)||void 0===n?void 0:n.selected.length)===(null===(a=this.$dataSource)||void 0===a?void 0:a.data.length)}toggleAllRows(){var n,a;this.isAllSelected()?null===(n=this.$selection)||void 0===n||n.clear():null===(a=this.$selection)||void 0===a||a.select(...this.$dataSource.data)}checkboxLabel(n){var a;return n?`${(null===(a=this.$selection)||void 0===a?void 0:a.isSelected(n))?"deselect":"select"} row ${n.id}`:(this.isAllSelected()?"deselect":"select")+" all"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["admin-tablas","dataSource",""]],inputs:{columns:"columns",dataSource:"dataSource",multiSelect:"multiSelect"},attrs:O,decls:2,vars:2,consts:[[4,"ngIf"],["mat-flat-button","","color","warn"],[3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],[4,"ngIf","ngIfElse"],["select",""],[4,"matHeaderCellDef"],[4,"matCellDef"],["color","primary",3,"checked","indeterminate","aria-label","change"],["color","primary",3,"checked","aria-label","click","change"],[3,"click"]],template:function(n,a){1&n&&(t.YNc(0,M,4,0,"ng-container",0),t.YNc(1,L,5,4,"ng-container",0)),2&n&&(t.Q6J("ngIf",null==a.$selection?null:a.$selection.hasValue()),t.xp6(1),t.Q6J("ngIf",a.$dataSource))},directives:[m.O5,f.lW,l.BZ,m.sg,l.w1,l.fO,l.ge,l.Dz,l.ev,T.oG,l.as,l.XQ,l.nj,l.Gk],styles:["span[_ngcontent-%COMP%]{width:100%;position:relative;display:flex;justify-content:flex-end}span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px}"]}),e})();const v=function(){return["id"]};function R(e,o){if(1&e&&t._UZ(0,"admin-tablas",4),2&e){const n=t.oxw(2);t.Q6J("dataSource",n.appDataSource)("columns",t.DdM(2,v))}}function q(e,o){if(1&e&&t.YNc(0,R,1,3,"admin-tablas",3),2&e){const n=t.oxw();t.Q6J("ngIf",n.appDataSource)}}function E(e,o){if(1&e&&t._UZ(0,"admin-tablas",4),2&e){const n=t.oxw(2);t.Q6J("dataSource",n.appDataSource)("columns",t.DdM(2,v))}}function z(e,o){if(1&e&&t.YNc(0,E,1,3,"admin-tablas",3),2&e){const n=t.oxw();t.Q6J("ngIf",n.appDataSource)}}let j=(()=>{class e{constructor(n){this.adminService=n}ngOnInit(){this.appDataSource=this.adminService.getApps().pipe((0,k.U)(n=>new l.by(n)))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-app"]],decls:8,vars:0,consts:[["label","Usuarios"],["matTabContent",""],["label","Perfiles"],[3,"dataSource","columns",4,"ngIf"],[3,"dataSource","columns"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-toolbar")(1,"span"),t._uU(2,"Home"),t.qZA()(),t.TgZ(3,"mat-tab-group")(4,"mat-tab",0),t.YNc(5,q,1,1,"ng-template",1),t.qZA(),t.TgZ(6,"mat-tab",2),t.YNc(7,z,1,1,"ng-template",1),t.qZA()())},directives:[C.Ye,g.SP,g.uX,g.Vc,m.O5,B],styles:[".mat-tab-labels{flex-direction:column}  .mat-tab-group{flex-direction:row!important}  .mat-tab-body-wrapper{width:100%!important}  .mat-tab-header{border:none!important}  .mat-ink-bar{visibility:hidden!important}"]}),e})();var w=i(5245);let G=(()=>{class e{constructor(){this.toggle=new t.vpe,this.state=!1}toggleNav(){this.state=!this.state,this.toggle.emit(this.state)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav"]],outputs:{toggle:"toggle"},decls:12,vars:0,consts:[["color","primary"],["mat-flat-button","","color","primary",3,"click"],["src","/assets/logo2.png","alt",""],[1,"spacer"],["mat-flat-button","","color","warn"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-toolbar",0)(1,"button",1),t.NdJ("click",function(){return a.toggleNav()}),t.TgZ(2,"mat-icon"),t._uU(3," apps "),t.qZA()(),t._UZ(4,"img",2),t.TgZ(5,"span"),t._uU(6,"Sistema de tickets"),t.qZA(),t._UZ(7,"span",3),t.TgZ(8,"button",4),t._uU(9," Salir "),t.TgZ(10,"mat-icon"),t._uU(11,"logout"),t.qZA()()())},directives:[C.Ye,f.lW,w.Hw],styles:["img[_ngcontent-%COMP%]{height:100%}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),e})();var h=i(2638),Z=i(4623),X=i(7350),A=i(7238),V=i(3322);function W(e,o){if(1&e&&(t.TgZ(0,"mat-list-item",1)(1,"button",2)(2,"mat-icon"),t._uU(3),t.qZA()(),t.TgZ(4,"span",3),t._uU(5),t.qZA()()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("matTooltip",n.toolTip),t.xp6(2),t.Oqu(n.icon),t.xp6(1),t.Q6J("fxShow",!0)("fxHide.lg",!0)("fxHide.xl",!0),t.xp6(1),t.Oqu(n.toolTip)}}let K=(()=>{class e{constructor(n){this.adminService=n,this.apps=[]}ngOnInit(){this.apps=this.adminService.Apps}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sidenav"]],decls:2,vars:1,consts:[["appHover","",4,"ngFor","ngForOf"],["appHover",""],["mat-icon-button","","matTooltipPosition","right",3,"matTooltip"],[3,"fxShow","fxHide.lg","fxHide.xl"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-list"),t.YNc(1,W,6,6,"mat-list-item",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",a.apps))},directives:[Z.i$,m.sg,Z.Tg,X.z,f.lW,A.gM,w.Hw,V.b8],styles:["mat-list-item[_ngcontent-%COMP%]{cursor:pointer}mat-list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transition:.5s ease-in-out}mat-list-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#001b46}mat-list-item.hover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#001b46}mat-list-item.hover[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}"]}),e})(),tt=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-index"]],decls:9,vars:0,consts:[[3,"toggle"],["apps",""]],template:function(n,a){if(1&n){const c=t.EpF();t.TgZ(0,"main")(1,"app-nav",0),t.NdJ("toggle",function(){return t.CHM(c),t.MAs(4).toggle()}),t.qZA(),t.TgZ(2,"mat-sidenav-container")(3,"mat-sidenav",null,1),t._UZ(5,"app-sidenav"),t.qZA(),t.TgZ(6,"mat-sidenav-content")(7,"section"),t._UZ(8,"router-outlet"),t.qZA()()()()}},directives:[G,h.TM,h.JX,K,h.Rh,p.lC],styles:["main[_ngcontent-%COMP%]{height:100%;background-color:gray;overflow:scroll}main[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]{height:calc(100% - 64px)}main[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{height:-webkit-fill-available}"]}),e})();var d=i(3737),et=i(7322),nt=i(4107),ot=i(508);function at(e,o){if(1&e&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n)}}function it(e,o){if(1&e&&(t.TgZ(0,"div",6),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n)}}const y=function(e){return[e]};let lt=(()=>{class e{constructor(){this.todo=["Get to work","Pick up groceries","Go home","Fall asleep"],this.done=["Get up","Brush teeth","Take a shower","Check e-mail","Walk dog"]}ngOnInit(){}drop(n){n.previousContainer===n.container?(0,d.bA)(n.container.data,n.previousIndex,n.currentIndex):(0,d.EA)(n.previousContainer.data,n.container.data,n.previousIndex,n.currentIndex)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-perfiles"]],decls:16,vars:11,consts:[[1,"example-container"],["cdkDropList","",1,"example-list",3,"cdkDropListData","cdkDropListConnectedTo","cdkDropListDropped"],["todoList","cdkDropList"],["class","example-box","cdkDrag","",4,"ngFor","ngForOf"],["matTooltipPosition","above",1,"example-container",3,"matTooltip"],["doneList","cdkDropList"],["cdkDrag","",1,"example-box"]],template:function(n,a){if(1&n&&(t.TgZ(0,"mat-form-field")(1,"mat-select")(2,"mat-option"),t._uU(3,"1"),t.qZA()()(),t.TgZ(4,"div",0)(5,"h2"),t._uU(6,"Permisos"),t.qZA(),t.TgZ(7,"div",1,2),t.NdJ("cdkDropListDropped",function(s){return a.drop(s)}),t.YNc(9,at,2,1,"div",3),t.qZA()(),t.TgZ(10,"div",4)(11,"h2"),t._uU(12,"Done"),t.qZA(),t.TgZ(13,"div",1,5),t.NdJ("cdkDropListDropped",function(s){return a.drop(s)}),t.YNc(15,it,2,1,"div",3),t.qZA()()),2&n){const c=t.MAs(8),s=t.MAs(14);t.xp6(7),t.Q6J("cdkDropListData",a.todo)("cdkDropListConnectedTo",t.VKq(7,y,s)),t.xp6(2),t.Q6J("ngForOf",a.todo),t.xp6(1),t.Q6J("matTooltip","asdasdasdasd"),t.xp6(3),t.Q6J("cdkDropListData",a.done)("cdkDropListConnectedTo",t.VKq(9,y,c)),t.xp6(2),t.Q6J("ngForOf",a.done)}},directives:[et.KE,nt.gD,ot.ey,d.Wj,m.sg,d.Zt,A.gM],styles:[".example-container[_ngcontent-%COMP%]{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.example-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:60px;background:white;border-radius:4px;overflow:hidden;display:block}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]}),e})();function ct(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-header-cell")(1,"mat-checkbox",10),t.NdJ("change",function(c){t.CHM(n);const s=t.oxw();return c?s.toggleAllRows():null}),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("checked",n.selection.hasValue()&&n.isAllSelected())("indeterminate",n.selection.hasValue()&&!n.isAllSelected())("aria-label",n.checkboxLabel())}}function st(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-cell")(1,"mat-checkbox",11),t.NdJ("click",function(c){return c.stopPropagation()})("change",function(c){const r=t.CHM(n).$implicit,_=t.oxw();return c?_.selection.toggle(r):null}),t.qZA()()}if(2&e){const n=o.$implicit,a=t.oxw();t.xp6(1),t.Q6J("checked",a.selection.isSelected(n))("aria-label",a.checkboxLabel(n))}}function rt(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1," ID "),t.qZA())}function mt(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.position," ")}}function pt(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Name "),t.qZA())}function dt(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.name," ")}}function _t(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Weight "),t.qZA())}function ut(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.weight," ")}}function gt(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Symbol "),t.qZA())}function ft(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.symbol," ")}}function ht(e,o){1&e&&t._UZ(0,"mat-header-row")}function xt(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"mat-row",12),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw().selection.toggle(s)}),t.qZA()}}const Ct=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}],bt=[{path:"",component:tt,children:[{path:"",pathMatch:"full",component:j},{path:"users/:app",component:(()=>{class e{constructor(){this.todo=["Get to work","Pick up groceries","Go home","Fall asleep"],this.done=["Get up","Brush teeth","Take a shower","Check e-mail","Walk dog"],this.displayedColumns=["select","position","name","weight","symbol"],this.dataSource=new l.by(Ct),this.selection=new b.Ov(!0,[])}isAllSelected(){return this.selection.selected.length===this.dataSource.data.length}toggleAllRows(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data)}checkboxLabel(n){return n?`${this.selection.isSelected(n)?"deselect":"select"} row ${n.position+1}`:(this.isAllSelected()?"deselect":"select")+" all"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-usuarios"]],decls:18,vars:3,consts:[[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","select"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","position"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"checked","indeterminate","aria-label","change"],[3,"checked","aria-label","click","change"],[3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-table",0),t.ynx(1,1),t.YNc(2,ct,2,3,"mat-header-cell",2),t.YNc(3,st,2,2,"mat-cell",3),t.BQk(),t.ynx(4,4),t.YNc(5,rt,2,0,"mat-header-cell",2),t.YNc(6,mt,2,1,"mat-cell",3),t.BQk(),t.ynx(7,5),t.YNc(8,pt,2,0,"mat-header-cell",2),t.YNc(9,dt,2,1,"mat-cell",3),t.BQk(),t.ynx(10,6),t.YNc(11,_t,2,0,"mat-header-cell",2),t.YNc(12,ut,2,1,"mat-cell",3),t.BQk(),t.ynx(13,7),t.YNc(14,gt,2,0,"mat-header-cell",2),t.YNc(15,ft,2,1,"mat-cell",3),t.BQk(),t.YNc(16,ht,1,0,"mat-header-row",8),t.YNc(17,xt,1,0,"mat-row",9),t.qZA()),2&n&&(t.Q6J("dataSource",a.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns))},directives:[l.BZ,l.w1,l.fO,l.ge,T.oG,l.Dz,l.ev,l.as,l.XQ,l.nj,l.Gk],styles:[""]}),e})()},{path:"profiles/:app",component:lt}]}];let Tt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(bt)],p.Bz]}),e})();var vt=i(6227),wt=i(520);let Zt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[u],imports:[[m.ez,wt.JF,p.Bz,Tt,vt.m]]}),e})()}}]);