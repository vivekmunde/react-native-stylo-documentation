(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9814],{1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(f){l=!0,o=f}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(7294))&&a.__esModule?a:{default:a},l=r(1003),f=r(880),c=r(9246);function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function p(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=u.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,d=e.href,y=e.as,v=e.children,b=e.prefetch,h=e.passHref,g=e.replace,m=e.shallow,w=e.scroll,j=e.locale,E=e.onClick,O=e.onMouseEnter,M=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=v,a&&"string"===typeof r&&(r=u.default.createElement("a",null,r));var C,k=!1!==b,I=f.useRouter(),S=u.default.useMemo((function(){var e=o(l.resolveHref(I,d,!0),2),t=e[0],r=e[1];return{href:t,as:y?l.resolveHref(I,y):r||t}}),[I,d,y]),A=S.href,L=S.as,x=u.default.useRef(A),R=u.default.useRef(L);a&&(C=u.default.Children.only(r));var _=a?C&&"object"===typeof C&&C.ref:t,U=o(c.useIntersection({rootMargin:"200px"}),3),P=U[0],H=U[1],K=U[2],N=u.default.useCallback((function(e){R.current===L&&x.current===A||(K(),R.current=L,x.current=A),P(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[L,_,A,K,P]);u.default.useEffect((function(){var e=H&&k&&l.isLocalURL(A),t="undefined"!==typeof j?j:I&&I.locale,r=s[A+"%"+L+(t?"%"+t:"")];e&&!r&&p(I,A,L,{locale:t})}),[L,A,H,j,k,I]);var T={ref:N,onClick:function(e){a||"function"!==typeof E||E(e),a&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,f){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:f,scroll:u}))}(e,I,A,L,g,m,w,j)},onMouseEnter:function(e){a||"function"!==typeof O||O(e),a&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),l.isLocalURL(A)&&p(I,A,L,{priority:!0})}};if(!a||h||"a"===C.type&&!("href"in C.props)){var B="undefined"!==typeof j?j:I&&I.locale,D=I&&I.isLocaleDomain&&l.getDomainLocale(L,B,I&&I.locales,I&&I.domainLocales);T.href=D||l.addBasePath(l.addLocale(L,B,I&&I.defaultLocale))}return a?u.default.cloneElement(C,T):u.default.createElement("a",Object.assign({},M,T),r)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(f){l=!0,o=f}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,i=a.useRef(),s=o(a.useState(!1),2),p=s[0],d=s[1],y=o(a.useState(t?t.current:null),2),v=y[0],b=y[1],h=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||p||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=f.get(n):(t=f.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return f.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),f.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:r}))}),[n,v,r,p]),g=a.useCallback((function(){d(!1)}),[]);return a.useEffect((function(){if(!l&&!p){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&b(t.current)}),[t]),[h,p,g]};var a=r(7294),u=r(4686),l="undefined"!==typeof IntersectionObserver;var f=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}}]);