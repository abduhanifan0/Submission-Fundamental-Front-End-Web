!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=10)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(c=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(a," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([o]).join("\n")}var c,u,a;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var a=[].concat(t[u]);r&&o[a[0]]||(e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),n.push(a))}},n}},function(t,n,e){(function(t){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{a({},"")}catch(t){a=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),c=new S(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(e.method=o,e.arg=i;;){var c=e.delegate;if(c){var u=x(c,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var a=l(t,n,e);if("normal"===a.type){if(r=e.done?"completed":"suspendedYield",a.arg===s)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(r="completed",e.method="throw",e.arg=a.arg)}}}(t,e,c),i}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s={};function p(){}function h(){}function d(){}var y={};y[i]=function(){return this};var b=Object.getPrototypeOf,v=b&&b(b(E([])));v&&v!==e&&r.call(v,i)&&(y=v);var m=d.prototype=p.prototype=Object.create(y);function g(t){["next","throw","return"].forEach((function(n){a(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,e){var o;this._invoke=function(i,c){function u(){return new e((function(o,u){!function o(i,c,u,a){var f=l(t[i],t,c);if("throw"!==f.type){var s=f.arg,p=s.value;return p&&"object"===n(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(p).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,a)}))}a(f.arg)}(i,c,o,u)}))}return o=o?o.then(u,u):u()}}function x(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,x(t,n),"throw"===n.method))return s;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,s;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,s):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,s)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=m.constructor=d,d.constructor=h,h.displayName=a(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,a(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[c]=function(){return this},t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var c=new w(f(n,e,r,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(m),a(m,u,"Generator"),m[i]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return c.type="throw",c.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),a=r.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),s},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),s}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:E(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}("object"===n(t)?t.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}).call(this,e(2)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){var r=e(4),o=e(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,n,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),c=[];function u(t){for(var n=-1,e=0;e<c.length;e++)if(c[e].identifier===t){n=e;break}return n}function a(t,n){for(var e={},r=[],o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],f=e[a]||0,l="".concat(a," ").concat(f);e[a]=f+1;var s=u(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:l,updater:b(p,n),references:1}),r.push(l)}return r}function f(t){var n=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){n.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(n);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var l,s=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function p(t,n,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),c=t.childNodes;c[n]&&t.removeChild(c[n]),c.length?t.insertBefore(i,c[n]):t.appendChild(i)}}function h(t,n,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function b(t,n){var e,r,o;if(n.singleton){var i=y++;e=d||(d=f(n)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=f(n),r=h.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=a(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<e.length;r++){var o=u(e[r]);c[o].references--}for(var i=a(t,n),f=0;f<e.length;f++){var l=u(e[f]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}e=i}}}},function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r)()(!1);o.push([t.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\n\nmain {\n    width: 90%;\n    max-width: 800px;\n    margin: 32px auto;\n}\n\nfood-list {\n    display: block;\n    margin-top: 32px;\n    width: 100%;\n    padding: 16px;\n}\n\nfooter {\n    padding: 20px;\n    color: whitesmoke;\n    background-image: linear-gradient(to bottom, #01779b, #000b4b);\n    text-align: center;\n    font-weight: bold;\n    margin-top: 300px;\n}",""]),n.default=o},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(p,t);var n,e,i,c,l,s=(n=p,e=u(),function(){var t,r=f(n);if(e){var i=f(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),s.call(this)}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n       <style>\n         jumbo-tron {\n            display: block;\n            width: 100%;\n            opacity: 80%;\n            padding: 200px;\n            background-image: url("image/meal.jpg");\n         }\n       </style>\n       '}}])&&r(i.prototype,c),l&&r(i,l),p}(i(HTMLElement));customElements.define("jumbo-tron",l)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(p,t);var n,e,i,c,l,s=(n=p,e=u(),function(){var t,r=f(n);if(e){var i=f(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n       <style>\n           * {\n               margin: 0;\n               padding: 0;\n               box-sizing: border-box;\n           }\n           :host {\n               display: block;\n               width: 100%;\n               background-image: linear-gradient(to bottom, #01779b, #000b4b);\n               color: white;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           }\n           img {\n               font-size: 30px;\n               padding: 8px;\n           }\n           p {\n               float: right;\n               font-size: 15px;\n               padding-top: 28px;\n               padding-right: 10px;\n               font-weight: bold;\n           }\n           figure {\n                float: right;\n                border-radius: 100%;\n                padding-right: 10px;\n           }\n       </style>\n       <img src="image/img-header.png" alt="logo"/>\n       <figure>\n            <img src="image/abdu.png">\n       </figure>       \n       <p>Mochamad Abdu Hanifan || abduhanifan346@yahoo.com </p>\n       '}}])&&r(i.prototype,c),l&&r(i,l),p}(i(HTMLElement));customElements.define("app-bar",l)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(p,t);var n,e,i,c,l,s=(n=p,e=u(),function(){var t,r=f(n);if(e){var i=f(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n           <style>\n              * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n              \n               .fan-art-food {\n                   width: 100%;\n                   max-height: 300px;\n                   object-fit: cover;\n                   object-position: center;\n               }\n              \n               .food-info {\n                   padding: 24px;\n               }\n              \n               .food-info > h2 {\n                   font-weight: lighter;\n               }\n              \n               .food-info > p {\n                   margin-top: 10px;\n                   overflow: hidden;\n                   text-overflow: ellipsis;\n                   display: -webkit-box;\n                   -webkit-box-orient: vertical;\n                   -webkit-line-clamp: 10; /* number of lines to show */\n               }\n\n           </style>\n           <img class="fan-art-food" src="'.concat(this._food.strMealThumb,'" alt="Fan Art">\n           <div class="food-info">\n               <h2>').concat(this._food.strMeal,"</h2>\n               <h3>").concat(this._food.strArea,"</h3>\n               <p>").concat(this._food.strInstructions,"</p>\n           </div>")}},{key:"food",set:function(t){this._food=t,this.render()}}])&&r(i.prototype,c),l&&r(i,l),p}(i(HTMLElement));customElements.define("food-item",l)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return c(t,arguments,f(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function c(t,n,e){return(c=u()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&a(o,e.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,n){return(a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}(p,t);var n,e,i,c,l,s=(n=p,e=u(),function(){var t,r=f(n);if(e){var i=f(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n       <style>\n       .search-container {\n           max-width: 800px;\n           box-shadow: 0 4px 8px 0 #000b4b;\n           padding: 16px;\n           border-radius: 5px;\n           display: flex;\n           position: sticky;\n           top: 10px;\n           background-color: white;\n       }\n      \n       .search-container > input {\n           width: 75%;\n           padding: 16px;\n           border: 0;\n           border-bottom: 1px solid cornflowerblue;\n           font-weight: bold;\n       }\n      \n       .search-container > input:focus {\n           outline: 0;\n           border-bottom: 2px solid cornflowerblue;\n       }\n      \n       .search-container > input:focus::placeholder {\n           font-weight: bold;\n       }\n      \n       .search-container >  input::placeholder {\n           color: cornflowerblue;\n           font-weight: normal;\n       }\n      \n       .search-container > button {\n           width: 23%;\n           cursor: pointer;\n           margin-left: auto;\n           padding: 16px;\n           background-image: linear-gradient(to bottom, #01779b, #000b4b);\n           color: white;\n           border: 0;\n           text-transform: uppercase;\n       }\n      \n       @media screen and (max-width: 550px){\n           .search-container {\n               flex-direction: column;\n               position: static;\n           }\n      \n           .search-container > input {\n               width: 100%;\n               margin-bottom: 12px;\n           }\n      \n           .search-container > button {\n               width: 100%;\n           }\n       }\n       </style>\n       <div id="search-container" class="search-container">\n           <input placeholder="Cari Masakan..." id="searchElement" type="search">\n           <button id="searchButtonElement" type="submit">Cari</button>\n       </div>\n       ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(t){this._clickEvent=t,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&r(i.prototype,c),l&&r(i,l),p}(i(HTMLElement));customElements.define("search-bar",l)},function(t,n,e){"use strict";e.r(n);e(1),e(3),e(6),e(7),e(8);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function c(t){var n="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function u(t,n,e){return(u=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(p,t);var n,e,r,c,u,s=(n=p,e=a(),function(){var t,r=l(n);if(e){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function p(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this)).shadowDOM=t.attachShadow({mode:"open"}),t}return r=p,(c=[{key:"render",value:function(){var t=this;this.shadowDOM.innerHTML="",this._foods.forEach((function(n){var e=document.createElement("food-item");e.food=n,t.shadowDOM.appendChild(e)}))}},{key:"renderError",value:function(t){this.shadowDOM.innerHTML="\n        <style>\n             .placeholder {\n                   font-weight: lighter;\n                   color: rgba(0,0,0,0.5);\n                   -webkit-user-select: none;\n                   -moz-user-select: none;\n                   -ms-user-select: none;\n                   user-select: none;\n               }\n           </style>",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(t,"</h2>")}},{key:"foods",set:function(t){this._foods=t,this.render()}}])&&o(r.prototype,c),u&&o(r,u),p}(c(HTMLElement));customElements.define("food-list",s);e(9);function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r;return n=t,r=[{key:"searchFood",value:function(t){return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(t)).then((function(t){return t.json()})).then((function(n){return n.meals?Promise.resolve(n.meals):Promise.reject("".concat(t," is not found"))}))}}],(e=null)&&p(n.prototype,e),r&&p(n,r),t}();function d(t,n,e,r,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void e(t)}u.done?n(a):Promise.resolve(a).then(r,o)}var y=function(){var t=document.querySelector("search-bar"),n=document.querySelector("food-list"),e=function(){var n,e=(n=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.searchFood(t.value);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),o(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function c(t){d(i,r,o,c,u,"next",t)}function u(t){d(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(t){n.foods=t},o=function(t){n.renderError(t)};t.clickEvent=e};document.addEventListener("DOMContentLoaded",y)}]);