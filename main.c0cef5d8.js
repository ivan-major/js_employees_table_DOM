parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,l=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i,c=document.querySelector("table"),u=c.querySelector("thead"),s=c.querySelector("tbody");function d(e,n){var r=t(s.rows);r.sort(function(t,r){return"Salary"===n?p(t.cells[e].innerHTML)-p(r.cells[e].innerHTML):t.cells[e].innerHTML>r.cells[e].innerHTML?1:-1}),s.append.apply(s,t(r))}function m(e,n){var r=t(s.rows);r.sort(function(t,r){return"Salary"===n?p(r.cells[e].innerHTML)-p(t.cells[e].innerHTML):r.cells[e].innerHTML>t.cells[e].innerHTML?1:-1}),s.append.apply(s,t(r))}function p(e){return+e.replace(/\D/g,"")}u.addEventListener("click",function(e){var t=e.target;if(t.innerText===i)return i="",m(t.cellIndex,e.target.textContent);d(t.cellIndex,e.target.textContent),i=t.innerText}),s.addEventListener("click",function(e){var t=e.target;if(0!==t.parentElement.classList.length)return t.parentElement.classList.remove("active");for(var n=0;n<s.children.length;n++){var r=s.children[n];0!==r.classList.length&&r.classList.remove("active")}t.parentElement.setAttribute("class","active")});var f=document.querySelector("body"),v=document.createElement("form");v.className="new-employee-form",f.append(v);for(var y=u.querySelector("tr"),b=0;b<y.cells.length;b++){var h=y.cells[b].innerText,g=document.createElement("label");if(g.innerText="".concat(h,": "),"Office"===h){for(var E=document.createElement("select"),T=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],x=0,A=T;x<A.length;x++){var S=A[x],L=document.createElement("option");L.innerText=S,E.append(L)}E.setAttribute("data-qa",h.toLowerCase()),g.append(E),v.append(g)}else{var w=document.createElement("input");w.setAttribute("data-qa",h.toLowerCase()),"Age"!==h&&"Salary"!==h||w.setAttribute("type","number"),g.append(w),v.append(g)}}var C=document.createElement("button");C.innerText="Save to table",C.setAttribute("type","submit"),v.append(C),v.addEventListener("submit",function(t){t.preventDefault();var n,r=document.createElement("tr"),a=e(v);try{for(a.s();!(n=a.n()).done;){var o=n.value;if("BUTTON"!==o.tagName){var l=document.createElement("td");if("salary"===o.dataset.qa){for(var i=o.value.split(""),c="",u=1,d=i.length-1;d>=0;d--)c=u%3==0&&0!==d?",".concat(i[d])+c:i[d]+c,u++;l.innerText="$".concat(c)}else l.innerText=o.value;r.append(l.cloneNode(!0))}}}catch(m){a.e(m)}finally{a.f()}return r.cells[0].innerText.length<4?N("WRONG NAME","Name should have more than 3 letters.\nPush right name!","error"):0===r.cells[1].innerText.length?N("WRONG INPUT","Possition should be decleared.\nPush right possition!","error"):+r.cells[3].innerText<18||+r.cells[3].innerText>90?N("WRONG AGE","Age should be more than 18 years and less than 90 years inclusive.\nPush right age!","error"):(s.append(r),void N("SUCCESS","You added a new employee to the table!","success"))});var N=function(e,t,n){var r=document.createElement("div");r.setAttribute("data-qa","notification"),r.setAttribute("class",n),f.append(r);var a=document.createElement("h2");a.setAttribute("class","title"),a.innerText=e,r.append(a);var o=document.createElement("p");o.innerText=t,r.append(o)};s.addEventListener("dblclick",function(e){var t=e.target,n=t.textContent;t.textContent="";var r=document.createElement("input");r.setAttribute("class","cell-input"),r.setAttribute("value",n),t.append(r),r.addEventListener("keydown",function(e){"Enter"===e.key&&(r.remove(),t.textContent=""===r.value?n:r.value)}),r.addEventListener("blur",function(e){r.remove(),t.textContent=""===r.value?n:r.value})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c0cef5d8.js.map