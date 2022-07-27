"use strict";(self.webpackChunkTickets=self.webpackChunkTickets||[]).push([[14],{8014:(L,d,e)=>{e.r(d),e.d(d,{AuthModule:()=>x});var p=e(9808),l=e(1083),o=e(5e3);let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-index"]],decls:2,vars:0,template:function(r,n){1&r&&(o.TgZ(0,"main"),o._UZ(1,"router-outlet"),o.qZA())},directives:[l.lC],styles:["main[_ngcontent-%COMP%]{background-image:linear-gradient(to left top,#335083,#6c77a0,#9fa1bf,#d0cfde,#ffffff);display:grid;place-content:center;position:absolute}"]}),t})();var i=e(3075),c=e(6518),m=e(9224),f=e(7093),s=e(7322),h=e(7531),Z=e(7423),v=e(5245),C=e(8424);function T(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Campo requerido "),o.qZA())}function y(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Campo requerido "),o.qZA())}function A(t,a){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Minimo 6 caracteres "),o.qZA())}const F=[{path:"",component:g,children:[{path:"",pathMatch:"full",redirectTo:"login"},{path:"login",component:(()=>{class t{constructor(r,n,u){this.authService=r,this.fb=n,this.router=u,this.hide=!0,this.loading=!1,this.loginForm=this.fb.group({username:[null,[i.kI.required]],password:[null,[i.kI.required,i.kI.minLength(6)]]})}onSubmit(){if(!this.loginForm.valid)return;this.loading=!0;const{username:r,password:n}=this.loginForm.value;this.authService.login(r,n).subscribe(()=>{this.loading=!1})}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(c.e),o.Y36(i.qu),o.Y36(l.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:24,vars:10,consts:[["src","/assets/banner.png","alt",""],["fxLayout","column",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","type","text","formControlName","username","autocomplete","off"],[4,"ngIf"],["matInput","","formControlName","password","autocomplete","off",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-flat-button","","color","primary",3,"disabled"],[3,"loading"]],template:function(r,n){1&r&&(o.TgZ(0,"mat-card"),o._UZ(1,"img",0),o.TgZ(2,"mat-card-header")(3,"mat-card-title"),o._uU(4," Ingreso de usuarios "),o.qZA()(),o.TgZ(5,"mat-card-content")(6,"form",1),o.NdJ("ngSubmit",function(){return n.onSubmit()}),o.TgZ(7,"mat-form-field",2)(8,"mat-label"),o._uU(9,"Nombre de usuario"),o.qZA(),o._UZ(10,"input",3),o.YNc(11,T,2,0,"mat-error",4),o.qZA(),o.TgZ(12,"mat-form-field",2)(13,"mat-label"),o._uU(14,"Contrase\xf1a"),o.qZA(),o._UZ(15,"input",5),o.TgZ(16,"button",6),o.NdJ("click",function(){return n.hide=!n.hide}),o.TgZ(17,"mat-icon"),o._uU(18),o.qZA()(),o.YNc(19,y,2,0,"mat-error",4),o.YNc(20,A,2,0,"mat-error",4),o.qZA(),o.TgZ(21,"button",7),o._uU(22,"Ingresar"),o.qZA()()()(),o._UZ(23,"app-loading",8)),2&r&&(o.xp6(6),o.Q6J("formGroup",n.loginForm),o.xp6(5),o.Q6J("ngIf",null==n.loginForm.controls.username?null:n.loginForm.controls.username.hasError("required")),o.xp6(4),o.Q6J("type",n.hide?"password":"text"),o.xp6(1),o.uIk("aria-label","Hide password")("aria-pressed",n.hide),o.xp6(2),o.Oqu(n.hide?"visibility_off":"visibility"),o.xp6(1),o.Q6J("ngIf",null==n.loginForm.controls.password?null:n.loginForm.controls.password.hasError("required")),o.xp6(1),o.Q6J("ngIf",null==n.loginForm.controls.password?null:n.loginForm.controls.password.hasError("minLength")),o.xp6(1),o.Q6J("disabled",!n.loginForm.valid),o.xp6(2),o.Q6J("loading",n.loading))},directives:[m.a8,m.dk,m.n5,m.dn,i._Y,i.JL,f.xw,i.sg,s.KE,s.hX,h.Nt,i.Fj,i.JJ,i.u,p.O5,s.TO,Z.lW,s.R9,v.Hw,C.N],styles:["mat-card[_ngcontent-%COMP%]{width:auto}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:-16px -16px 0;max-width:500px}"]}),t})()},{path:"**",redirectTo:"login"}]}];let I=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[l.Bz.forChild(F)],l.Bz]}),t})();var b=e(6227),J=e(520);let x=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[c.e],imports:[[p.ez,l.Bz,J.JF,I,i.UX,b.m]]}),t})()}}]);