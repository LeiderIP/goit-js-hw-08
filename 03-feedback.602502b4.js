var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(0,r.register)("9OeKo",function(t,n){var r="Expected a function",o=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return o;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=f.test(e);return r||u.test(e)?l(e.slice(2),r?2:8):a.test(e)?o:+e}t.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),function(e,t,n){var o,i,a,f,u,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw TypeError(r);function O(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function x(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function h(){var e,n,r,o=g();if(x(o))return j(o);u=setTimeout(h,(e=o-l,n=o-c,r=t-e,d?m(r,a-n):r))}function j(e){return(u=void 0,p&&o)?O(e):(o=i=void 0,f)}function S(){var e,n=g(),r=x(n);if(o=arguments,i=this,l=n,r){if(void 0===u)return c=e=l,u=setTimeout(h,t),s?O(e):f;if(d)return u=setTimeout(h,t),O(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},S.flush=function(){return void 0===u?f:j(g())},S}(e,t,{leading:o,maxWait:t,trailing:i})}});var o=r("9OeKo");const i=document.querySelector(".feedback-form"),a="feedback-form-state";i.addEventListener("input",(o&&o.__esModule?o.default:o)(()=>{let e=i.elements.email.value,t=i.elements.message.value;localStorage.setItem(a,JSON.stringify({email:e,message:t}))},500)),i.addEventListener("submit",e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),i.reset()}),document.addEventListener("DOMContentLoaded",()=>{let e=localStorage.getItem(a);e&&Object.entries(JSON.parse(e)).forEach(([e,t])=>{i.elements[e].value=t})});
//# sourceMappingURL=03-feedback.602502b4.js.map
