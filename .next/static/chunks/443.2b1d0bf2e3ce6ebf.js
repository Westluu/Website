(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,i=n(7273).Z,c=r(n(7294)),s=n(6273),a=n(2725),l=n(3462),u=n(1018),f=n(7190),d=n(1210),p=n(8684),h={};function g(e,t,n,o){if(e&&s.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;h[t+"%"+n+(r?"%"+r:"")]=!0}}var y=c.default.forwardRef((function(e,t){var n,r=e.href,y=e.as,v=e.children,m=e.prefetch,b=e.passHref,x=e.replace,w=e.shallow,_=e.scroll,j=e.locale,k=e.onClick,C=e.onMouseEnter,M=e.onTouchStart,E=e.legacyBehavior,S=void 0===E?!0!==Boolean(!1):E,L=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!S||"string"!==typeof n&&"number"!==typeof n||(n=c.default.createElement("a",null,n));var O=!1!==m,I=c.default.useContext(l.RouterContext),T=c.default.useContext(u.AppRouterContext);T&&(I=T);var R,F=c.default.useMemo((function(){var e=o(s.resolveHref(I,r,!0),2),t=e[0],n=e[1];return{href:t,as:y?s.resolveHref(I,y):n||t}}),[I,r,y]),P=F.href,D=F.as,N=c.default.useRef(P),A=c.default.useRef(D);S&&(R=c.default.Children.only(n));var z=S?R&&"object"===typeof R&&R.ref:t,U=o(f.useIntersection({rootMargin:"200px"}),3),$=U[0],B=U[1],H=U[2],q=c.default.useCallback((function(e){A.current===D&&N.current===P||(H(),A.current=D,N.current=P),$(e),z&&("function"===typeof z?z(e):"object"===typeof z&&(z.current=e))}),[D,z,P,H,$]);c.default.useEffect((function(){var e=B&&O&&s.isLocalURL(P),t="undefined"!==typeof j?j:I&&I.locale,n=h[P+"%"+D+(t?"%"+t:"")];e&&!n&&g(I,P,D,{locale:t})}),[D,P,B,j,O,I]);var Z={ref:q,onClick:function(e){S||"function"!==typeof k||k(e),S&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,a,l,u,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:i,locale:l,scroll:a}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!f})};u?c.default.startTransition(d):d()}}(e,I,P,D,x,w,_,j,Boolean(T),O)},onMouseEnter:function(e){S||"function"!==typeof C||C(e),S&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),!O&&T||s.isLocalURL(P)&&g(I,P,D,{priority:!0})},onTouchStart:function(e){S||"function"!==typeof M||M(e),S&&R.props&&"function"===typeof R.props.onTouchStart&&R.props.onTouchStart(e),!O&&T||s.isLocalURL(P)&&g(I,P,D,{priority:!0})}};if(!S||b||"a"===R.type&&!("href"in R.props)){var K="undefined"!==typeof j?j:I&&I.locale,Q=I&&I.isLocaleDomain&&d.getDomainLocale(D,K,I.locales,I.domainLocales);Z.href=Q||p.addBasePath(a.addLocale(D,K,I&&I.defaultLocale))}return S?c.default.cloneElement(R,Z):c.default.createElement("a",Object.assign({},L,Z),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!c,u=o(r.useState(!1),2),f=u[0],d=u[1],p=o(r.useState(null),2),h=p[0],g=p[1];r.useEffect((function(){if(c){if(l||f)return;if(h&&h.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=s.get(o)))return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:r},a.push(n),s.set(n,t),t}(n),r=o.id,i=o.observer,c=o.elements;return c.set(e,t),i.observe(e),function(){if(c.delete(e),i.unobserve(e),0===c.size){i.disconnect(),s.delete(r);var t=a.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&a.splice(t,1)}}}(h,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var o=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(o)}}}),[h,l,n,t,f]);var y=r.useCallback((function(){d(!1)}),[]);return[g,f,y]};var r=n(7294),i=n(9311),c="function"===typeof IntersectionObserver,s=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var i=o.default.createContext(null);t.LayoutRouterContext=i;var c=o.default.createContext(null);t.GlobalLayoutRouterContext=c;var s=o.default.createContext(null);t.TemplateContext=s},1664:function(e,t,n){e.exports=n(8418)},1954:function(e,t,n){"use strict";var o=n(7294);const r=/^[a-z0-9]+(-[a-z0-9]+)*$/,i=(e,t,n,o="")=>{const r=e.split(":");if("@"===e.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const e=r.pop(),n=r.pop(),i={provider:r.length>0?r[0]:o,prefix:n,name:e};return t&&!c(i)?null:i}const i=r[0],s=i.split("-");if(s.length>1){const e={provider:o,prefix:s.shift(),name:s.join("-")};return t&&!c(e)?null:e}if(n&&""===o){const e={provider:o,prefix:"",name:i};return t&&!c(e,n)?null:e}return null},c=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(r)||!(t&&""===e.prefix||e.prefix.match(r))||!e.name.match(r)),s=Object.freeze({left:0,top:0,width:16,height:16}),a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),l=Object.freeze({...s,...a}),u=Object.freeze({...l,body:"",hidden:!1});function f(e,t){const n=function(e,t){const n={};!e.hFlip!==!t.hFlip&&(n.hFlip=!0),!e.vFlip!==!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}(e,t);for(const o in u)o in a?o in e&&!(o in n)&&(n[o]=a[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function d(e,t,n){const o=e.icons,r=e.aliases||{};let i={};function c(e){i=f(o[e]||r[e],i)}return c(t),n.forEach(c),f(e,i)}function p(e,t){const n=[];if("object"!==typeof e||"object"!==typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=function(e,t){const n=e.icons,o=e.aliases||{},r=Object.create(null);return(t||Object.keys(n).concat(Object.keys(o))).forEach((function e(t){if(n[t])return r[t]=[];if(!(t in r)){r[t]=null;const n=o[t]&&o[t].parent,i=n&&e(n);i&&(r[t]=[n].concat(i))}return r[t]})),r}(e);for(const r in o){const i=o[r];i&&(t(r,d(e,r,i)),n.push(r))}return n}const h={provider:"",aliases:{},not_found:{},...s};function g(e,t){for(const n in t)if(n in e&&typeof e[n]!==typeof t[n])return!1;return!0}function y(e){if("object"!==typeof e||null===e)return null;const t=e;if("string"!==typeof t.prefix||!e.icons||"object"!==typeof e.icons)return null;if(!g(e,h))return null;const n=t.icons;for(const i in n){const e=n[i];if(!i.match(r)||"string"!==typeof e.body||!g(e,u))return null}const o=t.aliases||{};for(const i in o){const e=o[i],t=e.parent;if(!i.match(r)||"string"!==typeof t||!n[t]&&!o[t]||!g(e,u))return null}return t}const v=Object.create(null);function m(e,t){const n=v[e]||(v[e]=Object.create(null));return n[t]||(n[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}(e,t))}function b(e,t){return y(t)?p(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}let x=!1;function w(e){return"boolean"===typeof e&&(x=e),x}function _(e){const t="string"===typeof e?i(e,!0,x):e;if(t){const e=m(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function j(e,t){if("object"!==typeof e)return!1;if("string"!==typeof t&&(t=e.provider||""),x&&!t&&!e.prefix){let t=!1;return y(e)&&(e.prefix="",p(e,((e,n)=>{n&&function(e,t){const n=i(e,!0,x);return!!n&&function(e,t,n){try{if("string"===typeof n.body)return e.icons[t]={...n},!0}catch(o){}return!1}(m(n.provider,n.prefix),n.name,t)}(e,n)&&(t=!0)}))),t}const n=e.prefix;if(!c({provider:t,prefix:n,name:"a"}))return!1;return!!b(m(t,n),e)}const k=Object.freeze({width:null,height:null}),C=Object.freeze({...k,...a}),M=/(-?[0-9.]*[0-9]+[0-9.]*)/g,E=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function S(e,t,n){if(1===t)return e;if(n=n||100,"number"===typeof e)return Math.ceil(e*t*n)/n;if("string"!==typeof e)return e;const o=e.split(M);if(null===o||!o.length)return e;const r=[];let i=o.shift(),c=E.test(i);for(;;){if(c){const e=parseFloat(i);isNaN(e)?r.push(i):r.push(Math.ceil(e*t*n)/n)}else r.push(i);if(i=o.shift(),void 0===i)return r.join("");c=!c}}const L=/\sid="(\S+)"/g,O="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let I=0;function T(e,t=O){const n=[];let o;for(;o=L.exec(e);)n.push(o[1]);return n.length?(n.forEach((n=>{const o="function"===typeof t?t(n):t+(I++).toString(),r=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+r+')([")]|\\.[a-z])',"g"),"$1"+o+"$3")})),e):e}const R=Object.create(null);function F(e,t){R[e]=t}function P(e){return R[e]||R[""]}function D(e){let t;if("string"===typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const N=Object.create(null),A=["https://api.simplesvg.com","https://api.unisvg.com"],z=[];for(;A.length>0;)1===A.length||Math.random()>.5?z.push(A.shift()):z.push(A.pop());function U(e,t){const n=D(t);return null!==n&&(N[e]=n,!0)}function $(e){return N[e]}N[""]=D({resources:["https://api.iconify.design"].concat(z)});let B=(()=>{let e;try{if(e=fetch,"function"===typeof e)return e}catch(t){}})();const H={prepare:(e,t,n)=>{const o=[],r=function(e,t){const n=$(e);if(!n)return 0;let o;if(n.maxURL){let e=0;n.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)}));const r=t+".json?icons=";o=n.maxURL-e-n.path.length-r.length}else o=0;return o}(e,t),i="icons";let c={type:i,provider:e,prefix:t,icons:[]},s=0;return n.forEach(((n,a)=>{s+=n.length+1,s>=r&&a>0&&(o.push(c),c={type:i,provider:e,prefix:t,icons:[]},s=n.length),c.icons.push(n)})),o.push(c),o},send:(e,t,n)=>{if(!B)return void n("abort",424);let o=function(e){if("string"===typeof e){const t=$(e);if(t)return t.path}return"/"}(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");o+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;o+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let r=503;B(e+o).then((e=>{const t=e.status;if(200===t)return r=501,e.json();setTimeout((()=>{n(function(e){return 404===e}(t)?"abort":"next",t)}))})).then((e=>{"object"===typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{n("next",r)}))})).catch((()=>{n("next",r)}))}};function q(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}let Z=0;var K={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Q(e,t,n,o){const r=e.resources.length,i=e.random?Math.floor(Math.random()*r):e.index;let c;if(e.random){let t=e.resources.slice(0);for(c=[];t.length>1;){const e=Math.floor(Math.random()*t.length);c.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}c=c.concat(t)}else c=e.resources.slice(i).concat(e.resources.slice(0,i));const s=Date.now();let a,l="pending",u=0,f=null,d=[],p=[];function h(){f&&(clearTimeout(f),f=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function y(e,t){t&&(p=[]),"function"===typeof e&&p.push(e)}function v(){l="failed",p.forEach((e=>{e(void 0,a)}))}function m(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function b(){if("pending"!==l)return;h();const o=c.shift();if(void 0===o)return d.length?void(f=setTimeout((()=>{h(),"pending"===l&&(m(),v())}),e.timeout)):void v();const r={status:"pending",resource:o,callback:(t,n)=>{!function(t,n,o){const r="success"!==n;switch(d=d.filter((e=>e!==t)),l){case"pending":break;case"failed":if(r||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void v();if(r)return a=o,void(d.length||(c.length?b():v()));if(h(),m(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",p.forEach((e=>{e(o)}))}(r,t,n)}};d.push(r),u++,f=setTimeout(b,e.rotate),n(o,t,r.callback)}return"function"===typeof o&&p.push(o),setTimeout(b),function(){return{startTime:s,payload:t,status:l,queriesSent:u,queriesPending:d.length,subscribe:y,abort:g}}}function G(e){const t={...K,...e};let n=[];function o(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,r,i){const c=Q(t,e,r,((e,t)=>{o(),i&&i(e,t)}));return n.push(c),c},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:o}}function J(){}const W=Object.create(null);function X(e,t,n){let o,r;if("string"===typeof e){const t=P(e);if(!t)return n(void 0,424),J;r=t.send;const i=function(e){if(!W[e]){const t=$(e);if(!t)return;const n={config:t,redundancy:G(t)};W[e]=n}return W[e]}(e);i&&(o=i.redundancy)}else{const t=D(e);if(t){o=G(t);const n=P(e.resources?e.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(t,r,n)().abort:(n(void 0,424),J)}const V="iconify2",Y="iconify",ee="iconify-count",te="iconify-version",ne=36e5;function oe(e,t){try{return e.getItem(t)}catch(n){}}function re(e,t,n){try{return e.setItem(t,n),!0}catch(o){}}function ie(e,t){try{e.removeItem(t)}catch(n){}}function ce(e,t){return re(e,ee,t.toString())}function se(e){return parseInt(oe(e,ee))||0}const ae={local:!0,session:!0},le={local:new Set,session:new Set};let ue=!1;let fe="undefined"===typeof window?{}:window;function de(e){const t=e+"Storage";try{if(fe&&fe[t]&&"number"===typeof fe[t].length)return fe[t]}catch(n){}ae[e]=!1}function pe(e,t){const n=de(e);if(!n)return;const o=oe(n,te);if(o!==V){if(o){const e=se(n);for(let t=0;t<e;t++)ie(n,Y+t.toString())}return re(n,te,V),void ce(n,0)}const r=Math.floor(Date.now()/ne)-168,i=e=>{const o=Y+e.toString(),i=oe(n,o);if("string"===typeof i){try{const n=JSON.parse(i);if("object"===typeof n&&"number"===typeof n.cached&&n.cached>r&&"string"===typeof n.provider&&"object"===typeof n.data&&"string"===typeof n.data.prefix&&t(n,e))return!0}catch(c){}ie(n,o)}};let c=se(n);for(let s=c-1;s>=0;s--)i(s)||(s===c-1?(c--,ce(n,c)):le[e].add(s))}function he(){if(!ue){ue=!0;for(const e in ae)pe(e,(e=>{const t=e.data,n=m(e.provider,t.prefix);if(!b(n,t).length)return!1;const o=t.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function ge(e,t){function n(n){let o;if(!ae[n]||!(o=de(n)))return;const r=le[n];let i;if(r.size)r.delete(i=Array.from(r).shift());else if(i=se(o),!ce(o,i+1))return;const c={cached:Math.floor(Date.now()/ne),provider:e.provider,data:t};return re(o,Y+i.toString(),JSON.stringify(c))}ue||he(),t.lastModified&&!function(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in ae)pe(o,(n=>{const o=n.data;return n.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t}));return!0}(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))}function ye(){}function ve(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,function(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach((t=>{const i=t.icons,c=i.pending.length;i.pending=i.pending.filter((t=>{if(t.prefix!==r)return!0;const c=t.name;if(e.icons[c])i.loaded.push({provider:o,prefix:r,name:c});else{if(!e.missing.has(c))return n=!0,!0;i.missing.push({provider:o,prefix:r,name:c})}return!1})),i.pending.length!==c&&(n||q([e],t.id),t.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),t.abort))}))})))}(e)})))}const me=(e,t)=>{const n=function(e,t=!0,n=!1){const o=[];return e.forEach((e=>{const r="string"===typeof e?i(e,t,n):e;r&&o.push(r)})),o}(e,!0,w()),o=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let o={provider:"",prefix:"",name:""};return e.forEach((e=>{if(o.name===e.name&&o.prefix===e.prefix&&o.provider===e.provider)return;o=e;const r=e.provider,i=e.prefix,c=e.name,s=n[r]||(n[r]=Object.create(null)),a=s[i]||(s[i]=m(r,i));let l;l=c in a.icons?t.loaded:""===i||a.missing.has(c)?t.missing:t.pending;const u={provider:r,prefix:i,name:c};l.push(u)})),t}(n);if(!o.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(o.loaded,o.missing,o.pending,ye)})),()=>{e=!1}}const r=Object.create(null),c=[];let s,a;return o.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===a&&t===s)return;s=t,a=n,c.push(m(t,n));const o=r[t]||(r[t]=Object.create(null));o[n]||(o[n]=[])})),o.pending.forEach((e=>{const{provider:t,prefix:n,name:o}=e,i=m(t,n),c=i.pendingIcons||(i.pendingIcons=new Set);c.has(o)||(c.add(o),r[t][n].push(o))})),c.forEach((e=>{const{provider:t,prefix:n}=e;r[t][n].length&&function(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,o=e.iconsToLoad;let r;delete e.iconsToLoad,o&&(r=P(t))&&r.prepare(t,n,o).forEach((n=>{X(t,n,((t,o)=>{if("object"!==typeof t){if(404!==o)return;n.icons.forEach((t=>{e.missing.add(t)}))}else try{const n=b(e,t);if(!n.length)return;const o=e.pendingIcons;o&&n.forEach((e=>{o.delete(e)})),ge(e,t)}catch(r){console.error(r)}ve(e)}))}))})))}(e,r[t][n])})),t?function(e,t,n){const o=Z++,r=q.bind(null,n,o);if(!t.pending.length)return r;const i={id:o,icons:t,callback:e,abort:r};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(i)})),r}(t,o,c):ye};const be=/[\s,]+/;function xe(e,t){t.split(be).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function we(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:o(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r/=t,r%1===0?o(r):0)}}return t}const _e={...C,inline:!1},je={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},ke={display:"inline-block"},Ce={backgroundColor:"currentColor"},Me={backgroundColor:"transparent"},Ee={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Se={webkitMask:Ce,mask:Ce,background:Me};for(const Fe in Se){const e=Se[Fe];for(const t in Ee)e[Fe+t]=Ee[t]}const Le={..._e,inline:!0};function Oe(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Ie=(e,t,n,r)=>{const i=n?Le:_e,c=function(e,t){const n={...e};for(const o in t){const e=t[o],r=typeof e;o in k?(null===e||e&&("string"===r||"number"===r))&&(n[o]=e):r===typeof n[o]&&(n[o]="rotate"===o?e%4:e)}return n}(i,t),s=t.mode||"svg",a={},u=t.style||{},f={..."svg"===s?je:{},ref:r};for(let o in t){const e=t[o];if(void 0!==e)switch(o){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":c[o]=!0===e||"true"===e||1===e;break;case"flip":"string"===typeof e&&xe(c,e);break;case"color":a.color=e;break;case"rotate":"string"===typeof e?c[o]=we(e):"number"===typeof e&&(c[o]=e);break;case"ariaHidden":case"aria-hidden":!0!==e&&"true"!==e&&delete f["aria-hidden"];break;default:void 0===i[o]&&(f[o]=e)}}const d=function(e,t){const n={...l,...e},o={...C,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,o].forEach((e=>{const t=[],n=e.hFlip,o=e.vFlip;let c,s=e.rotate;switch(n?o?s+=2:(t.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),t.push("scale(-1 1)"),r.top=r.left=0):o&&(t.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),t.push("scale(1 -1)"),r.top=r.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=r.height/2+r.top,t.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:t.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:c=r.width/2+r.left,t.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}s%2===1&&(r.left!==r.top&&(c=r.left,r.left=r.top,r.top=c),r.width!==r.height&&(c=r.width,r.width=r.height,r.height=c)),t.length&&(i='<g transform="'+t.join(" ")+'">'+i+"</g>")}));const c=o.width,s=o.height,a=r.width,u=r.height;let f,d;return null===c?(d=null===s?"1em":"auto"===s?u:s,f=S(d,a/u)):(f="auto"===c?a:c,d=null===s?S(f,u/a):"auto"===s?u:s),{attributes:{width:f.toString(),height:d.toString(),viewBox:r.left.toString()+" "+r.top.toString()+" "+a.toString()+" "+u.toString()},body:i}}(e,c),p=d.attributes;if(c.inline&&(a.verticalAlign="-0.125em"),"svg"===s){f.style={...a,...u},Object.assign(f,p);let e=0,n=t.id;return"string"===typeof n&&(n=n.replace(/-/g,"_")),f.dangerouslySetInnerHTML={__html:T(d.body,n?()=>n+"ID"+e++:"iconifyReact")},o.createElement("svg",f)}const{body:h,width:g,height:y}=e,v="mask"===s||"bg"!==s&&-1!==h.indexOf("currentColor"),m=function(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}(h,{...p,width:g+"",height:y+""});var b;return f.style={...a,"--svg":(b=m,'url("data:image/svg+xml,'+function(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(b)+'")'),width:Oe(p.width),height:Oe(p.height),...ke,...v?Ce:Me,...u},o.createElement("span",f)};if(w(!0),F("",H),"undefined"!==typeof document&&"undefined"!==typeof window){he();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"===typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!==typeof e||null===e||e instanceof Array||"object"!==typeof e.icons||"string"!==typeof e.prefix||!j(e))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"===typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const o=t[e];if("object"!==typeof o||!o||void 0===o.resources)continue;U(e,o)||console.error(n)}catch(Re){console.error(n)}}}}class Te extends o.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){const t=this.state,n=this.props.icon;if("object"===typeof n&&null!==n&&"string"===typeof n.body)return this._icon="",this._abortLoading(),void((e||null===t.icon)&&this._setData({data:n}));let o;if("string"!==typeof n||null===(o=i(n,!1,!0)))return this._abortLoading(),void this._setData(null);const r=_(o);if(r){if(this._icon!==n||null===t.icon){this._abortLoading(),this._icon=n;const e=["iconify"];""!==o.prefix&&e.push("iconify--"+o.prefix),""!==o.provider&&e.push("iconify--"+o.provider),this._setData({data:r,classes:e}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),null!==r&&(this._loading={name:n,abort:me([o],this._checkIcon.bind(this,!1))}))}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,t=this.state.icon;if(null===t)return e.children?e.children:o.createElement("span",{});let n=e;return t.classes&&(n={...e,className:("string"===typeof e.className?e.className+" ":"")+t.classes.join(" ")}),Ie({...l,...t.data},n,e._inline,e._ref)}}o.forwardRef((function(e,t){const n={...e,_ref:t,_inline:!1};return o.createElement(Te,n)})),o.forwardRef((function(e,t){const n={...e,_ref:t,_inline:!0};return o.createElement(Te,n)}))}}]);