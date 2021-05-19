(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(20),a=c.n(n),i=(c(57),c(13)),r=c(44),j=c(45),o=c(52),d=c(50),l=c(106),h=c(107),b=c(51),u=c.p+"static/media/home.90cf7479.jpg",O=c(1),p=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{className:"header",collapseOnSelect:!0,expand:"sm",bg:"primary",variant:"dark",fixed:"top",children:[Object(O.jsx)(l.a.Brand,{href:"/",children:Object(O.jsxs)("h1",{children:["RECIPES ",Object(O.jsx)("img",{src:u,alt:"about"})]})}),Object(O.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(O.jsxs)(h.a,{children:[Object(O.jsxs)(b.a,{exact:"true",href:"/",children:[Object(O.jsx)("i",{className:"fas fa-home"})," Home"]}),Object(O.jsxs)(b.a,{href:"/about",children:[" ",Object(O.jsx)("i",{className:"fas fa-address-book"})," About"]}),Object(O.jsxs)(b.a,{href:"/recipes",children:[Object(O.jsx)("i",{className:"fas fa-utensils"})," Recipes"]}),Object(O.jsxs)(b.a,{href:"/create",children:[Object(O.jsx)("i",{className:"fab fa-wpforms"})," Create"]})]})})]})})}}]),c}(s.Component),m=c(4),x=c.p+"static/media/home.47331472.mp4",f=function(){return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsxs)("div",{className:"caption",children:[Object(O.jsx)("h2",{children:"Nothing Brings You Together Like Good Food"}),Object(O.jsx)("h3",{children:"Explore your choices"}),Object(O.jsx)(i.d,{className:"btn",to:"/recipes/#/",children:"Explore"})]}),Object(O.jsx)("video",{loop:!0,muted:!0,autoPlay:!0,preload:"auto",children:Object(O.jsx)("source",{src:x,type:"video/mp4"})})]})},g=function(){return Object(O.jsx)("div",{className:"about",children:Object(O.jsx)("p",{children:"This is my final project for my course React Basics which was organised by Helsinki Business Collage for group REACT21K. This includes all the major topics taught during the course period. Major topics include React components, hooks, event handlers, conditional rendering, lists and keys, forms, routing, get and post method with database, React CSS, React UI and how to deployment react app."})})},v=c(19),N=c(18),y=c.n(N),C=function(e){var t=e.link,c=e.name,s=e.image,n=Object(m.h)().path;return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{src:s,alt:c}),Object(O.jsx)("hr",{}),Object(O.jsx)("b",{children:c}),Object(O.jsx)("hr",{}),Object(O.jsx)(i.c,{to:"".concat(n,"/").concat(t),className:"button",children:"See Details"})]})},k=function(e){var t=e.recipes;return Object(O.jsx)("div",{className:"list-container",children:t.map((function(e){return Object(O.jsx)(C,{name:e.name,image:e.image,description:e.description,ingredients:e.ingredients,video:e.video,link:e.id},e.id)}))})},w=c(49),S=c.n(w),R=function(){var e=Object(s.useState)({}),t=Object(v.a)(e,2),c=t[0],n=t[1],a=Object(m.g)().id,i=Object(m.f)();return Object(s.useEffect)((function(){y.a.get("http://localhost:3001/recipes/".concat(a)).then((function(e){n(e.data)}))}),[]),Object(O.jsxs)("div",{className:"recipe-container",children:[Object(O.jsxs)("div",{className:"recipe",children:[Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("h3",{className:"name",children:c.name}),Object(O.jsxs)("h4",{children:["Have you ever heard of ",c.name," ",Object(O.jsx)("i",{className:"far fa-hand-point-down"})]}),Object(O.jsx)("p",{children:c.description}),Object(O.jsx)("img",{src:c.image,alt:c.name})]}),Object(O.jsxs)("div",{className:"ingredients",children:[Object(O.jsxs)("h4",{children:["List of Ingredients ",Object(O.jsx)("i",{className:"far fa-hand-point-down"})]}),Object(O.jsx)("ul",{children:c.ingredients})]}),Object(O.jsxs)("div",{className:"instructions",children:[Object(O.jsxs)("h4",{children:["Instructions ",Object(O.jsx)("i",{className:"far fa-hand-point-down"})]}),Object(O.jsx)(S.a,{className:"video",url:c.video,width:"100%"})]})]}),Object(O.jsx)("button",{type:"button",onClick:function(){return i.goBack()},children:"Get Back"})]})},E=function(e){var t=e.onChange;return Object(O.jsx)("form",{className:"search",children:Object(O.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Search...",onChange:t})})},B=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(" "),i=Object(v.a)(a,2),r=i[0],j=i[1],o=Object(m.h)(),d=o.path,l=o.url;Object(s.useEffect)((function(){y.a.get("http://localhost:3001/recipes").then((function(e){n(e.data)}))}),[]);var h=c.filter((function(e){return" "===r||e.name.toLowerCase().includes(r.toLowerCase())?e:void 0}));return Object(O.jsx)("div",{children:Object(O.jsxs)(m.c,{children:[Object(O.jsxs)(m.a,{exact:!0,path:d,children:[Object(O.jsx)(E,{onChange:function(e){j(e.target.value)}}),Object(O.jsx)(k,{recipes:h})]}),Object(O.jsx)(m.a,{path:"".concat(l,"/:id"),children:Object(O.jsx)(R,{})})]})})},I=c(22),F=c(30),L=function(){var e=Object(s.useState)({name:"",image:"",description:"",ingredients:"",video:""}),t=Object(v.a)(e,2),c=t[0],n=t[1],a=function(e){n(Object(F.a)(Object(F.a)({},c),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(O.jsx)("div",{className:"create ",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y.a.post("http://localhost:3001/recipes",c).then((function(){return y.a.get("http://localhost:3001/recipes")})).then((function(e){return n(e.data)})),e.target.reset()},children:[Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",id:"name",onChange:a,required:!0})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)("input",{type:"text",name:"description",id:"description",onChange:a,required:!0})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{htmlFor:"image",children:"Image URL"}),Object(O.jsx)("input",{type:"url",name:"image",id:"image",onChange:a,required:!0})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{htmlFor:"ingredients",children:"Ingredients"}),Object(O.jsx)("input",{type:"text",name:"ingredients",id:"ingredients",onChange:a,required:!0})]}),Object(O.jsxs)("div",{class:"form-group",children:[Object(O.jsx)("label",{htmlFor:"video",children:"Video URL"}),Object(O.jsx)("input",{type:"url",name:"video",id:"video",onChange:a,required:!0})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"Create"})})]})})},q=function(){return Object(O.jsx)("main",{className:"main",children:Object(O.jsxs)(i.b,{children:[Object(O.jsx)(m.a,{exact:!0,path:"/",component:f}),Object(O.jsx)(m.a,{path:"/about",component:g}),Object(O.jsx)(m.a,{path:"/recipes",component:B}),Object(O.jsx)(m.a,{path:"/create",component:L})]})})},T=function(){return Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)("p",{children:"copyrights @SagarAryal2021"})})};var A=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(p,{}),Object(O.jsx)(q,{}),Object(O.jsx)(T,{})]})})};c(102);a.a.render(Object(O.jsx)(A,{}),document.getElementById("root"))},57:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.24e96b72.chunk.js.map