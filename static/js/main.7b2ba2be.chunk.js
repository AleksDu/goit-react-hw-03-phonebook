(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__Hzv7H",label:"ContactForm_label__3nAfO",input:"ContactForm_input__2cz7r",button__wrapper:"ContactForm_button__wrapper__2inDV",button:"ContactForm_button__1LIQt"}},,,,function(t,e,n){t.exports={title:"App_title__2M2jS",close:"App_close__jAt3s"}},,,,,function(t,e,n){t.exports={label:"Filter_label__4md84",input:"Filter_input__Deawz"}},function(t,e,n){t.exports={name:"ContactItem_name__3yC30",number:"ContactItem_number__-NPzx",button:"ContactItem_button__1fDif"}},,function(t,e,n){t.exports={list:"ContactList_list__25uG6",item:"ContactList_item__1C_wz"}},,function(t,e,n){t.exports={container:"Container_container__1AMVS"}},function(t,e,n){t.exports={IconButton:"IconButton_IconButton__2OGbp"}},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(15),o=n.n(c),i=n(18),l=n(3),s=n(4),u=n(8),b=n(7),d=n(16),m=n.n(d),p=n(0),h=function(t){var e=t.children;return Object(p.jsx)("div",{className:m.a.container,children:e})};h.defaultProps={children:[]};var f=h,j=n(5),C=n(2),O=n.n(C),_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.hanldeChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.hanldeSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm(),t.resetForm()},t.resetForm=function(){t.setState({id:"",name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:O.a.form,onSubmit:this.hanldeSubmit,children:[Object(p.jsxs)("label",{className:O.a.label,children:["Name",Object(p.jsx)("input",{type:"text",name:"name",placeholder:"Contact name","aria-label":"input to you name",className:O.a.input,value:this.state.name,onChange:this.hanldeChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:O.a.label,children:["Number",Object(p.jsx)("input",{type:"tel",name:"number",placeholder:"Phone number","aria-label":"input to you phone number",className:O.a.input,value:this.state.number,onChange:this.hanldeChange,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("div",{className:O.a.button__wrapper,children:Object(p.jsx)("button",{type:"submit",className:O.a.button,children:"Add contact"})})]})}}]),n}(a.Component),v=_,x=n(11),g=n.n(x),y=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(p.jsx)("input",{type:"text",name:"filter",placeholder:"Find?",className:g.a.input,value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})};y.defaultProps={value:""};var w=y,N=n(12),S=n.n(N),A=n(13),k=n(19),F=n(9),I=n.n(F),z=n(17),D=n.n(z),M=["children","onClick"],P=function(t){var e=t.children,n=t.onClick,a=Object(k.a)(t,M);return Object(p.jsx)("button",Object(A.a)(Object(A.a)({type:"button",className:D.a.IconButton,onClick:n},a),{},{children:e}))};P.defaultProps={onClick:function(){return null},children:null},P.protoTypes={onClick:I.a.func,children:I.a.node,"aria-label":I.a.string.isRequired};var Z,B,E=P,J=["title","titleId"];function L(){return L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},L.apply(this,arguments)}function H(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function R(t,e){var n=t.title,r=t.titleId,c=H(t,J);return a.createElement("svg",L({width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,Z||(Z=a.createElement("path",{d:"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z",fill:"black"})),B||(B=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",fill:"black"})))}var q=a.forwardRef(R),T=(n.p,function(t){var e=t.contact,n=t.onDeleteContact;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{className:S.a.name,children:[e.name,": "]}),Object(p.jsx)("a",{href:"tel:".concat(e.number),className:S.a.number,children:e.number}),Object(p.jsx)(E,{onClick:n,"aria-label":"Delete contact",children:Object(p.jsx)(q,{width:"20px",height:"20px",fill:"#a9a1a1"})})]})}),G=n(14),V=n.n(G),$=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:V.a.list,children:e.map((function(t){return Object(p.jsx)("li",{className:V.a.item,children:Object(p.jsx)(T,{contact:t,onDeleteContact:function(){n(t.id)}})},t.id)}))})},K=n(6),Q=n.n(K),U=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name.toLowerCase(),a={id:Date.now().toString(),name:n,number:e.number};t.state.contacts.find((function(t){return t.name===a.name}))?alert("".concat(a.name," is already on contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){window.confirm("Do you want to delete?")&&t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(p.jsxs)(f,{children:[Object(p.jsx)("h1",{className:Q.a.title,children:"Phonebook"}),Object(p.jsx)(v,{onSubmit:this.addContact}),Object(p.jsx)("h2",{className:Q.a.title,children:"Contacts"}),Object(p.jsx)(w,{value:t,onChange:this.changeFilter}),Object(p.jsx)($,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),W=U;n(27);o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(W,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.7b2ba2be.chunk.js.map