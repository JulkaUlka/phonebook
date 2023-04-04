"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[958],{8958:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var r=t(9434),o=t(2791),i=t(208),a="NOT_FOUND";var u=function(n,e){return n===e};function c(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?u:r,i=t.maxSize,c=void 0===i?1:i,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),d=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:a},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return a}return{get:r,put:function(e,o){r(e)===a&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function f(){var e=d.get(arguments);if(e===a){if(e=n.apply(null,arguments),l){var t=d.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}d.put(arguments,e)}return e}return f.clearCache=function(){return d.clear()},f}function l(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function s(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,d=s.memoizeOptions,f=void 0===d?t:d,p=Array.isArray(f)?f:[f],b=l(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),x=n((function(){for(var n=[],e=b.length,t=0;t<e;t++)n.push(b[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(x,{resultFunc:c,memoizedResultFunc:h,dependencies:b,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return o}var d,f,p,b,h,x,m,v,g,y=s(c),j=function(n){return n.contacts.items},Z=y([j,function(n){return n.filter.value}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),w=function(n){return n.contacts.isLoading},k=t(9439),C=t(168),P=t(6444),A=t(8494),z=P.ZP.button(d||(d=(0,C.Z)(["\n  background: green;\n  box-shadow: 0 3px 0 0 grey;\n  border-radius: 2px;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  outline: none;\n  padding: 10px 15px;\n  text-shadow: 0 1px #68b25b;\n  &:hover,\n  &:focus {\n    background-color: #8bc34a;\n  }\n"]))),_=P.ZP.input(f||(f=(0,C.Z)(["\n  width: 100%;\n  display: block;\n  border: 1px solid #dbdbdb;\n  margin-right: 20px;\n  font-size: 0.8em;\n  padding: 0.8em 0.5em;\n  border-radius: 2px;\n  &:hover {\n    border-color: #8bc34a;\n    outline: none;\n  }\n"]))),F=P.ZP.form(p||(p=(0,C.Z)(["\n  display: flex;\n\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n"]))),E=P.ZP.label(b||(b=(0,C.Z)(["\n  display: block;\n"]))),S=(0,P.ZP)(A.BR5)(h||(h=(0,C.Z)(["\n  fill: #5b9962;\n"]))),O=(0,P.ZP)(A.MdO)(x||(x=(0,C.Z)(["\n  fill: #5b9962;\n"]))),q=t(184);function I(n){n.onSubmit;var e=(0,r.v9)(j),t=(0,o.useState)(""),a=(0,k.Z)(t,2),u=a[0],c=a[1],l=(0,o.useState)(""),s=(0,k.Z)(l,2),d=s[0],f=s[1],p=(0,r.I0)(),b=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":c(r);break;case"number":f(r)}};return(0,q.jsxs)(F,{onSubmit:function(n){n.preventDefault(),e.find((function(n){return n.name===u}))?alert("This contact is existed!!!!"):(p((0,i.uK)({name:u,number:d})),c(""),f(""))},children:[(0,q.jsxs)(E,{htmlFor:"name",children:[(0,q.jsx)(S,{})," "]}),(0,q.jsx)(_,{onChange:b,value:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,q.jsxs)(E,{htmlFor:"number",children:[(0,q.jsx)(O,{})," "]}),(0,q.jsx)(_,{onChange:b,value:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,q.jsx)(z,{type:"submit",children:"Add"})]})}var K,R,D,L,N=P.ZP.button(m||(m=(0,C.Z)(["\nbackground: orange;\nbox-shadow: 0 3px 0 0 grey;\nborder-radius: 2px;\nborder: none;\ncolor: #fff;\ncursor: pointer;\noutline: none;\npadding: 10px 15px;\ntext-shadow: 0 1px #68b25b;\n&:hover,\n &:focus {\n background-color :#5b9962 ;\n \n}\n"]))),B=P.ZP.ul(v||(v=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  gap: 0.5em;\n"]))),M=P.ZP.li(g||(g=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #dbdbdb;\n  padding: 0.5em;\n"])));function T(){var n=(0,r.v9)(Z),e=(0,r.I0)();return(0,q.jsx)(B,{children:n.sort((function(n,e){return n.name.localeCompare(e.name)})).map((function(n){var t=n.name,r=n.number,o=n.id;return(0,q.jsxs)(M,{children:[(0,q.jsxs)("p",{children:[(0,q.jsxs)("b",{children:[t,": "]})," "]})," ",(0,q.jsx)("p",{children:r}),(0,q.jsx)(N,{onClick:function(){return function(n){e((0,i.GK)(n))}(o)},children:"Delete"})]},o)}))})}var G=P.ZP.div(K||(K=(0,C.Z)(["\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),J=P.ZP.input(R||(R=(0,C.Z)(["\n  width: 100%;\n  border: 1px solid #dbdbdb;\n  font-size: 0.8em;\n  padding: 0.8em 0.5em;\n  border-radius: 2px;\n  \n  &:hover {\n    border-color: #8bc34a;\n    outline: none;\n\n"]))),U=(0,P.ZP)(A.Yfv)(D||(D=(0,C.Z)(["\n  fill: #5b9962;\n"]))),Y=P.ZP.div(L||(L=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n"]))),$=t(6895);function H(){var n=(0,r.I0)();return(0,q.jsxs)(G,{children:[(0,q.jsx)("p",{children:"Find contacts by name"}),(0,q.jsxs)(Y,{children:[(0,q.jsx)("label",{htmlFor:"filter",children:(0,q.jsx)(U,{})}),(0,q.jsx)(J,{type:"text",name:"filter",onChange:function(e){return n((0,$.K)(e.target.value))}})]})]})}var Q,V,W=t(966),X=P.ZP.div(Q||(Q=(0,C.Z)(["\n \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    gap: 30px;\n    "]))),nn=P.ZP.h2(V||(V=(0,C.Z)(["\n    font-weight: 400;\n    font-size: 48;\n    text-align: center;\n    display: block;\n    "])));var en=function(){var n=(0,r.v9)(w),e=(0,r.I0)();return(0,o.useEffect)((function(){e((0,i.K2)())}),[e]),(0,q.jsxs)(X,{children:[n&&(0,q.jsx)(W.a,{}),(0,q.jsx)(nn,{children:"Contact list:"}),(0,q.jsx)(I,{}),(0,q.jsx)(H,{}),(0,q.jsx)(T,{})]})}}}]);
//# sourceMappingURL=958.45026bc3.chunk.js.map