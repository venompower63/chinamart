function Cd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(n,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fs={exports:{}},Si={},Bs={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fn=Symbol.for("react.element"),Ed=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),Rd=Symbol.for("react.provider"),Td=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),Id=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Dd=Symbol.for("react.lazy"),ko=Symbol.iterator;function Ud(e){return e===null||typeof e!="object"?null:(e=ko&&e[ko]||e["@@iterator"],typeof e=="function"?e:null)}var Vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hs=Object.assign,Ws={};function vr(e,t,r){this.props=e,this.context=t,this.refs=Ws,this.updater=r||Vs}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qs(){}Qs.prototype=vr.prototype;function ja(e,t,r){this.props=e,this.context=t,this.refs=Ws,this.updater=r||Vs}var ka=ja.prototype=new Qs;ka.constructor=ja;Hs(ka,vr.prototype);ka.isPureReactComponent=!0;var bo=Array.isArray,Ks=Object.prototype.hasOwnProperty,ba={current:null},qs={key:!0,ref:!0,__self:!0,__source:!0};function Ys(e,t,r){var n,i={},a=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Ks.call(t,n)&&!qs.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:fn,type:e,key:a,ref:o,props:i,_owner:ba.current}}function $d(e,t){return{$$typeof:fn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Na(e){return typeof e=="object"&&e!==null&&e.$$typeof===fn}function Ad(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var No=/\/+/g;function Wi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ad(""+e.key):t.toString(36)}function An(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fn:case Ed:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+Wi(o,0):n,bo(i)?(r="",e!=null&&(r=e.replace(No,"$&/")+"/"),An(i,t,r,"",function(u){return u})):i!=null&&(Na(i)&&(i=$d(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(No,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",bo(e))for(var s=0;s<e.length;s++){a=e[s];var c=n+Wi(a,s);o+=An(a,t,r,c,i)}else if(c=Ud(e),typeof c=="function")for(e=c.call(e),s=0;!(a=e.next()).done;)a=a.value,c=n+Wi(a,s++),o+=An(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function bn(e,t,r){if(e==null)return e;var n=[],i=0;return An(e,n,"","",function(a){return t.call(r,a,i++)}),n}function Fd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Fn={transition:null},Bd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Fn,ReactCurrentOwner:ba};function Gs(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:bn,forEach:function(e,t,r){bn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return bn(e,function(){t++}),t},toArray:function(e){return bn(e,function(t){return t})||[]},only:function(e){if(!Na(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=vr;T.Fragment=Pd;T.Profiler=Ld;T.PureComponent=ja;T.StrictMode=_d;T.Suspense=Id;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;T.act=Gs;T.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Hs({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Ks.call(t,c)&&!qs.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:fn,type:e.type,key:i,ref:a,props:n,_owner:o}};T.createContext=function(e){return e={$$typeof:Td,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rd,_context:e},e.Consumer=e};T.createElement=Ys;T.createFactory=function(e){var t=Ys.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Md,render:e}};T.isValidElement=Na;T.lazy=function(e){return{$$typeof:Dd,_payload:{_status:-1,_result:e},_init:Fd}};T.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Fn.transition;Fn.transition={};try{e()}finally{Fn.transition=t}};T.unstable_act=Gs;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,r){return de.current.useImperativeHandle(e,t,r)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,r){return de.current.useReducer(e,t,r)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,r){return de.current.useSyncExternalStore(e,t,r)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";Bs.exports=T;var j=Bs.exports;const Xs=zd(j),Vd=Cd({__proto__:null,default:Xs},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd=j,Wd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Kd=Object.prototype.hasOwnProperty,qd=Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yd={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,t,r){var n,i={},a=null,o=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Kd.call(t,n)&&!Yd.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Wd,type:e,key:a,ref:o,props:i,_owner:qd.current}}Si.Fragment=Qd;Si.jsx=Js;Si.jsxs=Js;Fs.exports=Si;var l=Fs.exports,yl={},Zs={exports:{}},be={},ec={exports:{}},tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var R=C.length;C.push(L);e:for(;0<R;){var K=R-1>>>1,Z=C[K];if(0<i(Z,L))C[K]=L,C[R]=Z,R=K;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var L=C[0],R=C.pop();if(R!==L){C[0]=R;e:for(var K=0,Z=C.length,jn=Z>>>1;K<jn;){var Ct=2*(K+1)-1,Hi=C[Ct],zt=Ct+1,kn=C[zt];if(0>i(Hi,R))zt<Z&&0>i(kn,Hi)?(C[K]=kn,C[zt]=R,K=zt):(C[K]=Hi,C[Ct]=R,K=Ct);else if(zt<Z&&0>i(kn,R))C[K]=kn,C[zt]=R,K=zt;else break e}}return L}function i(C,L){var R=C.sortIndex-L.sortIndex;return R!==0?R:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],g=1,p=null,x=3,y=!1,v=!1,f=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var L=r(u);L!==null;){if(L.callback===null)n(u);else if(L.startTime<=C)n(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=r(u)}}function w(C){if(f=!1,m(C),!v)if(r(c)!==null)v=!0,Bi(N);else{var L=r(u);L!==null&&Vi(w,L.startTime-C)}}function N(C,L){v=!1,f&&(f=!1,h(_),_=-1),y=!0;var R=x;try{for(m(L),p=r(c);p!==null&&(!(p.expirationTime>L)||C&&!Le());){var K=p.callback;if(typeof K=="function"){p.callback=null,x=p.priorityLevel;var Z=K(p.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===r(c)&&n(c),m(L)}else n(c);p=r(c)}if(p!==null)var jn=!0;else{var Ct=r(u);Ct!==null&&Vi(w,Ct.startTime-L),jn=!1}return jn}finally{p=null,x=R,y=!1}}var E=!1,P=null,_=-1,Q=5,I=-1;function Le(){return!(e.unstable_now()-I<Q)}function br(){if(P!==null){var C=e.unstable_now();I=C;var L=!0;try{L=P(!0,C)}finally{L?Nr():(E=!1,P=null)}}else E=!1}var Nr;if(typeof d=="function")Nr=function(){d(br)};else if(typeof MessageChannel<"u"){var jo=new MessageChannel,Sd=jo.port2;jo.port1.onmessage=br,Nr=function(){Sd.postMessage(null)}}else Nr=function(){k(br,0)};function Bi(C){P=C,E||(E=!0,Nr())}function Vi(C,L){_=k(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,Bi(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(C){switch(x){case 1:case 2:case 3:var L=3;break;default:L=x}var R=x;x=L;try{return C()}finally{x=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=x;x=C;try{return L()}finally{x=R}},e.unstable_scheduleCallback=function(C,L,R){var K=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=R+Z,C={id:g++,callback:L,priorityLevel:C,startTime:R,expirationTime:Z,sortIndex:-1},R>K?(C.sortIndex=R,t(u,C),r(c)===null&&C===r(u)&&(f?(h(_),_=-1):f=!0,Vi(w,R-K))):(C.sortIndex=Z,t(c,C),v||y||(v=!0,Bi(N))),C},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(C){var L=x;return function(){var R=x;x=L;try{return C.apply(this,arguments)}finally{x=R}}}})(tc);ec.exports=tc;var Gd=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=j,ke=Gd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rc=new Set,Qr={};function At(e,t){ur(e,t),ur(e+"Capture",t)}function ur(e,t){for(Qr[e]=t,e=0;e<t.length;e++)rc.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wl=Object.prototype.hasOwnProperty,Jd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,So={},Co={};function Zd(e){return wl.call(Co,e)?!0:wl.call(So,e)?!1:Jd.test(e)?Co[e]=!0:(So[e]=!0,!1)}function ep(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tp(e,t,r,n){if(t===null||typeof t>"u"||ep(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,r,n,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sa=/[\-:]([a-z])/g;function Ca(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sa,Ca);ie[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sa,Ca);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sa,Ca);ie[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function za(e,t,r,n){var i=ie.hasOwnProperty(t)?ie[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tp(t,r,i,n)&&(r=null),n||i===null?Zd(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var et=Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nn=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),Ea=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),kl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),_a=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),lc=Symbol.for("react.offscreen"),zo=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=zo&&e[zo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Qi;function Tr(e){if(Qi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||""}return`
`+Qi+e}var Ki=!1;function qi(e,t){if(!e||Ki)return"";Ki=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=s);break}}}finally{Ki=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Tr(e):""}function rp(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=qi(e.type,!1),e;case 11:return e=qi(e.type.render,!1),e;case 1:return e=qi(e.type,!0),e;default:return""}}function Nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Wt:return"Portal";case jl:return"Profiler";case Ea:return"StrictMode";case kl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _a:return t=e.displayName||null,t!==null?t:Nl(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Nl(e(t))}catch{}}return null}function np(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nl(t);case 8:return t===Ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ip(e){var t=ac(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sn(e){e._valueTracker||(e._valueTracker=ip(e))}function oc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ac(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Jn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sl(e,t){var r=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Eo(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=yt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sc(e,t){t=t.checked,t!=null&&za(e,"checked",t,!1)}function Cl(e,t){sc(e,t);var r=yt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zl(e,t.type,r):t.hasOwnProperty("defaultValue")&&zl(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Po(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function zl(e,t,r){(t!=="number"||Jn(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mr=Array.isArray;function nr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+yt(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function El(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _o(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(b(92));if(Mr(r)){if(1<r.length)throw Error(b(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:yt(r)}}function cc(e,t){var r=yt(t.value),n=yt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Lo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cn,dc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cn=Cn||document.createElement("div"),Cn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lp=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){lp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function pc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=pc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var ap=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(e,t){if(t){if(ap[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Ll(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function La(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,ir=null,lr=null;function Ro(e){if(e=gn(e)){if(typeof Tl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=_i(t),Tl(e.stateNode,e.type,t))}}function mc(e){ir?lr?lr.push(e):lr=[e]:ir=e}function hc(){if(ir){var e=ir,t=lr;if(lr=ir=null,Ro(e),t)for(e=0;e<t.length;e++)Ro(t[e])}}function gc(e,t){return e(t)}function xc(){}var Yi=!1;function vc(e,t,r){if(Yi)return e(t,r);Yi=!0;try{return gc(e,t,r)}finally{Yi=!1,(ir!==null||lr!==null)&&(xc(),hc())}}function qr(e,t){var r=e.stateNode;if(r===null)return null;var n=_i(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(b(231,t,typeof r));return r}var Ml=!1;if(Ge)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){Ml=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{Ml=!1}function op(e,t,r,n,i,a,o,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(g){this.onError(g)}}var Ur=!1,Zn=null,ei=!1,Il=null,sp={onError:function(e){Ur=!0,Zn=e}};function cp(e,t,r,n,i,a,o,s,c){Ur=!1,Zn=null,op.apply(sp,arguments)}function up(e,t,r,n,i,a,o,s,c){if(cp.apply(this,arguments),Ur){if(Ur){var u=Zn;Ur=!1,Zn=null}else throw Error(b(198));ei||(ei=!0,Il=u)}}function Ft(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function To(e){if(Ft(e)!==e)throw Error(b(188))}function dp(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(b(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return To(i),e;if(a===n)return To(i),t;a=a.sibling}throw Error(b(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(b(189))}}if(r.alternate!==n)throw Error(b(190))}if(r.tag!==3)throw Error(b(188));return r.stateNode.current===r?e:t}function wc(e){return e=dp(e),e!==null?jc(e):null}function jc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jc(e);if(t!==null)return t;e=e.sibling}return null}var kc=ke.unstable_scheduleCallback,Mo=ke.unstable_cancelCallback,pp=ke.unstable_shouldYield,fp=ke.unstable_requestPaint,q=ke.unstable_now,mp=ke.unstable_getCurrentPriorityLevel,Ra=ke.unstable_ImmediatePriority,bc=ke.unstable_UserBlockingPriority,ti=ke.unstable_NormalPriority,hp=ke.unstable_LowPriority,Nc=ke.unstable_IdlePriority,Ci=null,Ve=null;function gp(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:yp,xp=Math.log,vp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(xp(e)/vp|0)|0}var zn=64,En=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ri(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=Ir(s):(a&=o,a!==0&&(n=Ir(a)))}else o=r&~i,o!==0?n=Ir(o):a!==0&&(n=Ir(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Oe(t),i=1<<r,n|=e[r],t&=~i;return n}function wp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Oe(a),s=1<<o,c=i[o];c===-1?(!(s&r)||s&n)&&(i[o]=wp(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Ol(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sc(){var e=zn;return zn<<=1,!(zn&4194240)&&(zn=64),e}function Gi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function mn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=r}function kp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Oe(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Ta(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Oe(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var D=0;function Cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zc,Ma,Ec,Pc,_c,Dl=!1,Pn=[],ut=null,dt=null,pt=null,Yr=new Map,Gr=new Map,lt=[],bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Io(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function zr(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=gn(t),t!==null&&Ma(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Np(e,t,r,n,i){switch(t){case"focusin":return ut=zr(ut,e,t,r,n,i),!0;case"dragenter":return dt=zr(dt,e,t,r,n,i),!0;case"mouseover":return pt=zr(pt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Yr.set(a,zr(Yr.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Gr.set(a,zr(Gr.get(a)||null,e,t,r,n,i)),!0}return!1}function Lc(e){var t=_t(e.target);if(t!==null){var r=Ft(t);if(r!==null){if(t=r.tag,t===13){if(t=yc(r),t!==null){e.blockedOn=t,_c(e.priority,function(){Ec(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Rl=n,r.target.dispatchEvent(n),Rl=null}else return t=gn(r),t!==null&&Ma(t),e.blockedOn=r,!1;t.shift()}return!0}function Oo(e,t,r){Bn(e)&&r.delete(t)}function Sp(){Dl=!1,ut!==null&&Bn(ut)&&(ut=null),dt!==null&&Bn(dt)&&(dt=null),pt!==null&&Bn(pt)&&(pt=null),Yr.forEach(Oo),Gr.forEach(Oo)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,Dl||(Dl=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Sp)))}function Xr(e){function t(i){return Er(i,e)}if(0<Pn.length){Er(Pn[0],e);for(var r=1;r<Pn.length;r++){var n=Pn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ut!==null&&Er(ut,e),dt!==null&&Er(dt,e),pt!==null&&Er(pt,e),Yr.forEach(t),Gr.forEach(t),r=0;r<lt.length;r++)n=lt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<lt.length&&(r=lt[0],r.blockedOn===null);)Lc(r),r.blockedOn===null&&lt.shift()}var ar=et.ReactCurrentBatchConfig,ni=!0;function Cp(e,t,r,n){var i=D,a=ar.transition;ar.transition=null;try{D=1,Ia(e,t,r,n)}finally{D=i,ar.transition=a}}function zp(e,t,r,n){var i=D,a=ar.transition;ar.transition=null;try{D=4,Ia(e,t,r,n)}finally{D=i,ar.transition=a}}function Ia(e,t,r,n){if(ni){var i=Ul(e,t,r,n);if(i===null)al(e,t,n,ii,r),Io(e,n);else if(Np(i,e,t,r,n))n.stopPropagation();else if(Io(e,n),t&4&&-1<bp.indexOf(e)){for(;i!==null;){var a=gn(i);if(a!==null&&zc(a),a=Ul(e,t,r,n),a===null&&al(e,t,n,ii,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else al(e,t,n,null,r)}}var ii=null;function Ul(e,t,r,n){if(ii=null,e=La(n),e=_t(e),e!==null)if(t=Ft(e),t===null)e=null;else if(r=t.tag,r===13){if(e=yc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ii=e,null}function Rc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case Ra:return 1;case bc:return 4;case ti:case hp:return 16;case Nc:return 536870912;default:return 16}default:return 16}}var ot=null,Oa=null,Vn=null;function Tc(){if(Vn)return Vn;var e,t=Oa,r=t.length,n,i="value"in ot?ot.value:ot.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[a-n];n++);return Vn=i.slice(e,1<n?1-n:void 0)}function Hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function Do(){return!1}function Ne(e){function t(r,n,i,a,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_n:Do,this.isPropagationStopped=Do,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=Ne(yr),hn=H({},yr,{view:0,detail:0}),Ep=Ne(hn),Xi,Ji,Pr,zi=H({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Xi=e.screenX-Pr.screenX,Ji=e.screenY-Pr.screenY):Ji=Xi=0,Pr=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Uo=Ne(zi),Pp=H({},zi,{dataTransfer:0}),_p=Ne(Pp),Lp=H({},hn,{relatedTarget:0}),Zi=Ne(Lp),Rp=H({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tp=Ne(Rp),Mp=H({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ip=Ne(Mp),Op=H({},yr,{data:0}),$o=Ne(Op),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ap(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$p[e])?!!t[e]:!1}function Ua(){return Ap}var Fp=H({},hn,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?Hn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bp=Ne(Fp),Vp=H({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ao=Ne(Vp),Hp=H({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),Wp=Ne(Hp),Qp=H({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=Ne(Qp),qp=H({},zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=Ne(qp),Gp=[9,13,27,32],$a=Ge&&"CompositionEvent"in window,$r=null;Ge&&"documentMode"in document&&($r=document.documentMode);var Xp=Ge&&"TextEvent"in window&&!$r,Mc=Ge&&(!$a||$r&&8<$r&&11>=$r),Fo=" ",Bo=!1;function Ic(e,t){switch(e){case"keyup":return Gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Jp(e,t){switch(e){case"compositionend":return Oc(t);case"keypress":return t.which!==32?null:(Bo=!0,Fo);case"textInput":return e=t.data,e===Fo&&Bo?null:e;default:return null}}function Zp(e,t){if(Kt)return e==="compositionend"||!$a&&Ic(e,t)?(e=Tc(),Vn=Oa=ot=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mc&&t.locale!=="ko"?null:t.data;default:return null}}var ef={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ef[e.type]:t==="textarea"}function Dc(e,t,r,n){mc(n),t=li(t,"onChange"),0<t.length&&(r=new Da("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ar=null,Jr=null;function tf(e){qc(e,0)}function Ei(e){var t=Gt(e);if(oc(t))return e}function rf(e,t){if(e==="change")return t}var Uc=!1;if(Ge){var el;if(Ge){var tl="oninput"in document;if(!tl){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),tl=typeof Ho.oninput=="function"}el=tl}else el=!1;Uc=el&&(!document.documentMode||9<document.documentMode)}function Wo(){Ar&&(Ar.detachEvent("onpropertychange",$c),Jr=Ar=null)}function $c(e){if(e.propertyName==="value"&&Ei(Jr)){var t=[];Dc(t,Jr,e,La(e)),vc(tf,t)}}function nf(e,t,r){e==="focusin"?(Wo(),Ar=t,Jr=r,Ar.attachEvent("onpropertychange",$c)):e==="focusout"&&Wo()}function lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Jr)}function af(e,t){if(e==="click")return Ei(t)}function of(e,t){if(e==="input"||e==="change")return Ei(t)}function sf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:sf;function Zr(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!wl.call(t,i)||!Ue(e[i],t[i]))return!1}return!0}function Qo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ko(e,t){var r=Qo(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qo(r)}}function Ac(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ac(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fc(){for(var e=window,t=Jn();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Jn(e.document)}return t}function Aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cf(e){var t=Fc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ac(r.ownerDocument.documentElement,r)){if(n!==null&&Aa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=Ko(r,a);var o=Ko(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uf=Ge&&"documentMode"in document&&11>=document.documentMode,qt=null,$l=null,Fr=null,Al=!1;function qo(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Al||qt==null||qt!==Jn(n)||(n=qt,"selectionStart"in n&&Aa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Fr&&Zr(Fr,n)||(Fr=n,n=li($l,"onSelect"),0<n.length&&(t=new Da("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=qt)))}function Ln(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yt={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionend:Ln("Transition","TransitionEnd")},rl={},Bc={};Ge&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Pi(e){if(rl[e])return rl[e];if(!Yt[e])return e;var t=Yt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Bc)return rl[e]=t[r];return e}var Vc=Pi("animationend"),Hc=Pi("animationiteration"),Wc=Pi("animationstart"),Qc=Pi("transitionend"),Kc=new Map,Yo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){Kc.set(e,t),At(t,[e])}for(var nl=0;nl<Yo.length;nl++){var il=Yo[nl],df=il.toLowerCase(),pf=il[0].toUpperCase()+il.slice(1);kt(df,"on"+pf)}kt(Vc,"onAnimationEnd");kt(Hc,"onAnimationIteration");kt(Wc,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Qc,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ff=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Go(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,up(n,t,void 0,e),e.currentTarget=null}function qc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break e;Go(i,s,u),a=c}else for(o=0;o<n.length;o++){if(s=n[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break e;Go(i,s,u),a=c}}}if(ei)throw e=Il,ei=!1,Il=null,e}function $(e,t){var r=t[Wl];r===void 0&&(r=t[Wl]=new Set);var n=e+"__bubble";r.has(n)||(Yc(t,e,2,!1),r.add(n))}function ll(e,t,r){var n=0;t&&(n|=4),Yc(r,e,n,t)}var Rn="_reactListening"+Math.random().toString(36).slice(2);function en(e){if(!e[Rn]){e[Rn]=!0,rc.forEach(function(r){r!=="selectionchange"&&(ff.has(r)||ll(r,!1,e),ll(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rn]||(t[Rn]=!0,ll("selectionchange",!1,t))}}function Yc(e,t,r,n){switch(Rc(t)){case 1:var i=Cp;break;case 4:i=zp;break;default:i=Ia}r=i.bind(null,t,r,e),i=void 0,!Ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function al(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=_t(s),o===null)return;if(c=o.tag,c===5||c===6){n=a=o;continue e}s=s.parentNode}}n=n.return}vc(function(){var u=a,g=La(r),p=[];e:{var x=Kc.get(e);if(x!==void 0){var y=Da,v=e;switch(e){case"keypress":if(Hn(r)===0)break e;case"keydown":case"keyup":y=Bp;break;case"focusin":v="focus",y=Zi;break;case"focusout":v="blur",y=Zi;break;case"beforeblur":case"afterblur":y=Zi;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Uo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Wp;break;case Vc:case Hc:case Wc:y=Tp;break;case Qc:y=Kp;break;case"scroll":y=Ep;break;case"wheel":y=Yp;break;case"copy":case"cut":case"paste":y=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ao}var f=(t&4)!==0,k=!f&&e==="scroll",h=f?x!==null?x+"Capture":null:x;f=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=qr(d,h),w!=null&&f.push(tn(d,w,m)))),k)break;d=d.return}0<f.length&&(x=new y(x,v,null,r,g),p.push({event:x,listeners:f}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&r!==Rl&&(v=r.relatedTarget||r.fromElement)&&(_t(v)||v[Xe]))break e;if((y||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=u,v=v?_t(v):null,v!==null&&(k=Ft(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(f=Uo,w="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(f=Ao,w="onPointerLeave",h="onPointerEnter",d="pointer"),k=y==null?x:Gt(y),m=v==null?x:Gt(v),x=new f(w,d+"leave",y,r,g),x.target=k,x.relatedTarget=m,w=null,_t(g)===u&&(f=new f(h,d+"enter",v,r,g),f.target=m,f.relatedTarget=k,w=f),k=w,y&&v)t:{for(f=y,h=v,d=0,m=f;m;m=Ht(m))d++;for(m=0,w=h;w;w=Ht(w))m++;for(;0<d-m;)f=Ht(f),d--;for(;0<m-d;)h=Ht(h),m--;for(;d--;){if(f===h||h!==null&&f===h.alternate)break t;f=Ht(f),h=Ht(h)}f=null}else f=null;y!==null&&Xo(p,x,y,f,!1),v!==null&&k!==null&&Xo(p,k,v,f,!0)}}e:{if(x=u?Gt(u):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var N=rf;else if(Vo(x))if(Uc)N=of;else{N=lf;var E=nf}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(N=af);if(N&&(N=N(e,u))){Dc(p,N,r,g);break e}E&&E(e,x,u),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&zl(x,"number",x.value)}switch(E=u?Gt(u):window,e){case"focusin":(Vo(E)||E.contentEditable==="true")&&(qt=E,$l=u,Fr=null);break;case"focusout":Fr=$l=qt=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,qo(p,r,g);break;case"selectionchange":if(uf)break;case"keydown":case"keyup":qo(p,r,g)}var P;if($a)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Kt?Ic(e,r)&&(_="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(Mc&&r.locale!=="ko"&&(Kt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Kt&&(P=Tc()):(ot=g,Oa="value"in ot?ot.value:ot.textContent,Kt=!0)),E=li(u,_),0<E.length&&(_=new $o(_,e,null,r,g),p.push({event:_,listeners:E}),P?_.data=P:(P=Oc(r),P!==null&&(_.data=P)))),(P=Xp?Jp(e,r):Zp(e,r))&&(u=li(u,"onBeforeInput"),0<u.length&&(g=new $o("onBeforeInput","beforeinput",null,r,g),p.push({event:g,listeners:u}),g.data=P))}qc(p,t)})}function tn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function li(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=qr(e,r),a!=null&&n.unshift(tn(e,a,i)),a=qr(e,t),a!=null&&n.push(tn(e,a,i))),e=e.return}return n}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xo(e,t,r,n,i){for(var a=t._reactName,o=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,i?(c=qr(r,a),c!=null&&o.unshift(tn(r,c,s))):i||(c=qr(r,a),c!=null&&o.push(tn(r,c,s)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var mf=/\r\n?/g,hf=/\u0000|\uFFFD/g;function Jo(e){return(typeof e=="string"?e:""+e).replace(mf,`
`).replace(hf,"")}function Tn(e,t,r){if(t=Jo(t),Jo(e)!==t&&r)throw Error(b(425))}function ai(){}var Fl=null,Bl=null;function Vl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,Zo=typeof Promise=="function"?Promise:void 0,xf=typeof queueMicrotask=="function"?queueMicrotask:typeof Zo<"u"?function(e){return Zo.resolve(null).then(e).catch(vf)}:Hl;function vf(e){setTimeout(function(){throw e})}function ol(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Xr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Xr(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function es(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Fe="__reactFiber$"+wr,rn="__reactProps$"+wr,Xe="__reactContainer$"+wr,Wl="__reactEvents$"+wr,yf="__reactListeners$"+wr,wf="__reactHandles$"+wr;function _t(e){var t=e[Fe];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Xe]||r[Fe]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=es(e);e!==null;){if(r=e[Fe])return r;e=es(e)}return t}e=r,r=e.parentNode}return null}function gn(e){return e=e[Fe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function _i(e){return e[rn]||null}var Ql=[],Xt=-1;function bt(e){return{current:e}}function A(e){0>Xt||(e.current=Ql[Xt],Ql[Xt]=null,Xt--)}function U(e,t){Xt++,Ql[Xt]=e.current,e.current=t}var wt={},se=bt(wt),ge=bt(!1),It=wt;function dr(e,t){var r=e.type.contextTypes;if(!r)return wt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function oi(){A(ge),A(se)}function ts(e,t,r){if(se.current!==wt)throw Error(b(168));U(se,t),U(ge,r)}function Gc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(b(108,np(e)||"Unknown",i));return H({},r,n)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,It=se.current,U(se,e),U(ge,ge.current),!0}function rs(e,t,r){var n=e.stateNode;if(!n)throw Error(b(169));r?(e=Gc(e,t,It),n.__reactInternalMemoizedMergedChildContext=e,A(ge),A(se),U(se,e)):A(ge),U(ge,r)}var Qe=null,Li=!1,sl=!1;function Xc(e){Qe===null?Qe=[e]:Qe.push(e)}function jf(e){Li=!0,Xc(e)}function Nt(){if(!sl&&Qe!==null){sl=!0;var e=0,t=D;try{var r=Qe;for(D=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Qe=null,Li=!1}catch(i){throw Qe!==null&&(Qe=Qe.slice(e+1)),kc(Ra,Nt),i}finally{D=t,sl=!1}}return null}var Jt=[],Zt=0,ci=null,ui=0,Se=[],Ce=0,Ot=null,Ke=1,qe="";function Et(e,t){Jt[Zt++]=ui,Jt[Zt++]=ci,ci=e,ui=t}function Jc(e,t,r){Se[Ce++]=Ke,Se[Ce++]=qe,Se[Ce++]=Ot,Ot=e;var n=Ke;e=qe;var i=32-Oe(n)-1;n&=~(1<<i),r+=1;var a=32-Oe(t)+i;if(30<a){var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Ke=1<<32-Oe(t)+i|r<<i|n,qe=a+e}else Ke=1<<a|r<<i|n,qe=e}function Fa(e){e.return!==null&&(Et(e,1),Jc(e,1,0))}function Ba(e){for(;e===ci;)ci=Jt[--Zt],Jt[Zt]=null,ui=Jt[--Zt],Jt[Zt]=null;for(;e===Ot;)Ot=Se[--Ce],Se[Ce]=null,qe=Se[--Ce],Se[Ce]=null,Ke=Se[--Ce],Se[Ce]=null}var je=null,we=null,F=!1,Ie=null;function Zc(e,t){var r=ze(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ns(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,we=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ot!==null?{id:Ke,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ze(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,je=e,we=null,!0):!1;default:return!1}}function Kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if(F){var t=we;if(t){var r=t;if(!ns(e,t)){if(Kl(e))throw Error(b(418));t=ft(r.nextSibling);var n=je;t&&ns(e,t)?Zc(n,r):(e.flags=e.flags&-4097|2,F=!1,je=e)}}else{if(Kl(e))throw Error(b(418));e.flags=e.flags&-4097|2,F=!1,je=e}}}function is(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Mn(e){if(e!==je)return!1;if(!F)return is(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vl(e.type,e.memoizedProps)),t&&(t=we)){if(Kl(e))throw eu(),Error(b(418));for(;t;)Zc(e,t),t=ft(t.nextSibling)}if(is(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){we=ft(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}we=null}}else we=je?ft(e.stateNode.nextSibling):null;return!0}function eu(){for(var e=we;e;)e=ft(e.nextSibling)}function pr(){we=je=null,F=!1}function Va(e){Ie===null?Ie=[e]:Ie.push(e)}var kf=et.ReactCurrentBatchConfig;function _r(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(b(309));var n=r.stateNode}if(!n)throw Error(b(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(b(284));if(!r._owner)throw Error(b(290,e))}return e}function In(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ls(e){var t=e._init;return t(e._payload)}function tu(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function r(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function n(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=xt(h,d),h.index=0,h.sibling=null,h}function a(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,d,m,w){return d===null||d.tag!==6?(d=hl(m,h.mode,w),d.return=h,d):(d=i(d,m),d.return=h,d)}function c(h,d,m,w){var N=m.type;return N===Qt?g(h,d,m.props.children,w,m.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===nt&&ls(N)===d.type)?(w=i(d,m.props),w.ref=_r(h,d,m),w.return=h,w):(w=Xn(m.type,m.key,m.props,null,h.mode,w),w.ref=_r(h,d,m),w.return=h,w)}function u(h,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=gl(m,h.mode,w),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function g(h,d,m,w,N){return d===null||d.tag!==7?(d=Mt(m,h.mode,w,N),d.return=h,d):(d=i(d,m),d.return=h,d)}function p(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=hl(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Nn:return m=Xn(d.type,d.key,d.props,null,h.mode,m),m.ref=_r(h,null,d),m.return=h,m;case Wt:return d=gl(d,h.mode,m),d.return=h,d;case nt:var w=d._init;return p(h,w(d._payload),m)}if(Mr(d)||Sr(d))return d=Mt(d,h.mode,m,null),d.return=h,d;In(h,d)}return null}function x(h,d,m,w){var N=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:s(h,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Nn:return m.key===N?c(h,d,m,w):null;case Wt:return m.key===N?u(h,d,m,w):null;case nt:return N=m._init,x(h,d,N(m._payload),w)}if(Mr(m)||Sr(m))return N!==null?null:g(h,d,m,w,null);In(h,m)}return null}function y(h,d,m,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,s(d,h,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Nn:return h=h.get(w.key===null?m:w.key)||null,c(d,h,w,N);case Wt:return h=h.get(w.key===null?m:w.key)||null,u(d,h,w,N);case nt:var E=w._init;return y(h,d,m,E(w._payload),N)}if(Mr(w)||Sr(w))return h=h.get(m)||null,g(d,h,w,N,null);In(d,w)}return null}function v(h,d,m,w){for(var N=null,E=null,P=d,_=d=0,Q=null;P!==null&&_<m.length;_++){P.index>_?(Q=P,P=null):Q=P.sibling;var I=x(h,P,m[_],w);if(I===null){P===null&&(P=Q);break}e&&P&&I.alternate===null&&t(h,P),d=a(I,d,_),E===null?N=I:E.sibling=I,E=I,P=Q}if(_===m.length)return r(h,P),F&&Et(h,_),N;if(P===null){for(;_<m.length;_++)P=p(h,m[_],w),P!==null&&(d=a(P,d,_),E===null?N=P:E.sibling=P,E=P);return F&&Et(h,_),N}for(P=n(h,P);_<m.length;_++)Q=y(P,h,_,m[_],w),Q!==null&&(e&&Q.alternate!==null&&P.delete(Q.key===null?_:Q.key),d=a(Q,d,_),E===null?N=Q:E.sibling=Q,E=Q);return e&&P.forEach(function(Le){return t(h,Le)}),F&&Et(h,_),N}function f(h,d,m,w){var N=Sr(m);if(typeof N!="function")throw Error(b(150));if(m=N.call(m),m==null)throw Error(b(151));for(var E=N=null,P=d,_=d=0,Q=null,I=m.next();P!==null&&!I.done;_++,I=m.next()){P.index>_?(Q=P,P=null):Q=P.sibling;var Le=x(h,P,I.value,w);if(Le===null){P===null&&(P=Q);break}e&&P&&Le.alternate===null&&t(h,P),d=a(Le,d,_),E===null?N=Le:E.sibling=Le,E=Le,P=Q}if(I.done)return r(h,P),F&&Et(h,_),N;if(P===null){for(;!I.done;_++,I=m.next())I=p(h,I.value,w),I!==null&&(d=a(I,d,_),E===null?N=I:E.sibling=I,E=I);return F&&Et(h,_),N}for(P=n(h,P);!I.done;_++,I=m.next())I=y(P,h,_,I.value,w),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?_:I.key),d=a(I,d,_),E===null?N=I:E.sibling=I,E=I);return e&&P.forEach(function(br){return t(h,br)}),F&&Et(h,_),N}function k(h,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Qt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Nn:e:{for(var N=m.key,E=d;E!==null;){if(E.key===N){if(N=m.type,N===Qt){if(E.tag===7){r(h,E.sibling),d=i(E,m.props.children),d.return=h,h=d;break e}}else if(E.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===nt&&ls(N)===E.type){r(h,E.sibling),d=i(E,m.props),d.ref=_r(h,E,m),d.return=h,h=d;break e}r(h,E);break}else t(h,E);E=E.sibling}m.type===Qt?(d=Mt(m.props.children,h.mode,w,m.key),d.return=h,h=d):(w=Xn(m.type,m.key,m.props,null,h.mode,w),w.ref=_r(h,d,m),w.return=h,h=w)}return o(h);case Wt:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{r(h,d);break}else t(h,d);d=d.sibling}d=gl(m,h.mode,w),d.return=h,h=d}return o(h);case nt:return E=m._init,k(h,d,E(m._payload),w)}if(Mr(m))return v(h,d,m,w);if(Sr(m))return f(h,d,m,w);In(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(h,d.sibling),d=i(d,m),d.return=h,h=d):(r(h,d),d=hl(m,h.mode,w),d.return=h,h=d),o(h)):r(h,d)}return k}var fr=tu(!0),ru=tu(!1),di=bt(null),pi=null,er=null,Ha=null;function Wa(){Ha=er=pi=null}function Qa(e){var t=di.current;A(di),e._currentValue=t}function Yl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function or(e,t){pi=e,Ha=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(Ha!==e)if(e={context:e,memoizedValue:t,next:null},er===null){if(pi===null)throw Error(b(308));er=e,pi.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return t}var Lt=null;function Ka(e){Lt===null?Lt=[e]:Lt.push(e)}function nu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Ka(t)):(r.next=i.next,i.next=r),t.interleaved=r,Je(e,n)}function Je(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var it=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Je(e,r)}return i=n.interleaved,i===null?(t.next=t,Ka(n)):(t.next=i.next,i.next=t),n.interleaved=t,Je(e,r)}function Wn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ta(e,r)}}function as(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fi(e,t,r,n){var i=e.updateQueue;it=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=u:s.next=u,g.lastBaseUpdate=c))}if(a!==null){var p=i.baseState;o=0,g=u=c=null,s=a;do{var x=s.lane,y=s.eventTime;if((n&x)===x){g!==null&&(g=g.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,f=s;switch(x=t,y=r,f.tag){case 1:if(v=f.payload,typeof v=="function"){p=v.call(y,p,x);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=f.payload,x=typeof v=="function"?v.call(y,p,x):v,x==null)break e;p=H({},p,x);break e;case 2:it=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[s]:x.push(s))}else y={eventTime:y,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(u=g=y,c=p):g=g.next=y,o|=x;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;x=s,s=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(g===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Ut|=o,e.lanes=o,e.memoizedState=p}}function os(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(b(191,i));i.call(n)}}}var xn={},He=bt(xn),nn=bt(xn),ln=bt(xn);function Rt(e){if(e===xn)throw Error(b(174));return e}function Ya(e,t){switch(U(ln,t),U(nn,e),U(He,xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pl(t,e)}A(He),U(He,t)}function mr(){A(He),A(nn),A(ln)}function lu(e){Rt(ln.current);var t=Rt(He.current),r=Pl(t,e.type);t!==r&&(U(nn,e),U(He,r))}function Ga(e){nn.current===e&&(A(He),A(nn))}var B=bt(0);function mi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cl=[];function Xa(){for(var e=0;e<cl.length;e++)cl[e]._workInProgressVersionPrimary=null;cl.length=0}var Qn=et.ReactCurrentDispatcher,ul=et.ReactCurrentBatchConfig,Dt=0,V=null,X=null,ee=null,hi=!1,Br=!1,an=0,bf=0;function le(){throw Error(b(321))}function Ja(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ue(e[r],t[r]))return!1;return!0}function Za(e,t,r,n,i,a){if(Dt=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qn.current=e===null||e.memoizedState===null?zf:Ef,e=r(n,i),Br){a=0;do{if(Br=!1,an=0,25<=a)throw Error(b(301));a+=1,ee=X=null,t.updateQueue=null,Qn.current=Pf,e=r(n,i)}while(Br)}if(Qn.current=gi,t=X!==null&&X.next!==null,Dt=0,ee=X=V=null,hi=!1,t)throw Error(b(300));return e}function eo(){var e=an!==0;return an=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function _e(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(b(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function on(e,t){return typeof t=="function"?t(e):t}function dl(e){var t=_e(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=X,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=o=null,c=null,u=a;do{var g=u.lane;if((Dt&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=p,o=n):c=c.next=p,V.lanes|=g,Ut|=g}u=u.next}while(u!==null&&u!==a);c===null?o=n:c.next=s,Ue(n,t.memoizedState)||(he=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,V.lanes|=a,Ut|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function pl(e){var t=_e(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ue(a,t.memoizedState)||(he=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function au(){}function ou(e,t){var r=V,n=_e(),i=t(),a=!Ue(n.memoizedState,i);if(a&&(n.memoizedState=i,he=!0),n=n.queue,to(uu.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||ee!==null&&ee.memoizedState.tag&1){if(r.flags|=2048,sn(9,cu.bind(null,r,n,i,t),void 0,null),te===null)throw Error(b(349));Dt&30||su(r,t,i)}return i}function su(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function cu(e,t,r,n){t.value=r,t.getSnapshot=n,du(t)&&pu(e)}function uu(e,t,r){return r(function(){du(t)&&pu(e)})}function du(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ue(e,r)}catch{return!0}}function pu(e){var t=Je(e,1);t!==null&&De(t,e,1,-1)}function ss(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:e},t.queue=e,e=e.dispatch=Cf.bind(null,V,e),[t.memoizedState,e]}function sn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function fu(){return _e().memoizedState}function Kn(e,t,r,n){var i=Ae();V.flags|=e,i.memoizedState=sn(1|t,r,void 0,n===void 0?null:n)}function Ri(e,t,r,n){var i=_e();n=n===void 0?null:n;var a=void 0;if(X!==null){var o=X.memoizedState;if(a=o.destroy,n!==null&&Ja(n,o.deps)){i.memoizedState=sn(t,r,a,n);return}}V.flags|=e,i.memoizedState=sn(1|t,r,a,n)}function cs(e,t){return Kn(8390656,8,e,t)}function to(e,t){return Ri(2048,8,e,t)}function mu(e,t){return Ri(4,2,e,t)}function hu(e,t){return Ri(4,4,e,t)}function gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xu(e,t,r){return r=r!=null?r.concat([e]):null,Ri(4,4,gu.bind(null,t,e),r)}function ro(){}function vu(e,t){var r=_e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ja(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function yu(e,t){var r=_e();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ja(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function wu(e,t,r){return Dt&21?(Ue(r,t)||(r=Sc(),V.lanes|=r,Ut|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=r)}function Nf(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var n=ul.transition;ul.transition={};try{e(!1),t()}finally{D=r,ul.transition=n}}function ju(){return _e().memoizedState}function Sf(e,t,r){var n=gt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ku(e))bu(t,r);else if(r=nu(e,t,r,n),r!==null){var i=ue();De(r,e,n,i),Nu(r,t,n)}}function Cf(e,t,r){var n=gt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ku(e))bu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,Ue(s,o)){var c=t.interleaved;c===null?(i.next=i,Ka(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=nu(e,t,i,n),r!==null&&(i=ue(),De(r,e,n,i),Nu(r,t,n))}}function ku(e){var t=e.alternate;return e===V||t!==null&&t===V}function bu(e,t){Br=hi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Nu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ta(e,r)}}var gi={readContext:Pe,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},zf={readContext:Pe,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:cs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Kn(4194308,4,gu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Kn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kn(4,2,e,t)},useMemo:function(e,t){var r=Ae();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ae();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Sf.bind(null,V,e),[n.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:ss,useDebugValue:ro,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ss(!1),t=e[0];return e=Nf.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=V,i=Ae();if(F){if(r===void 0)throw Error(b(407));r=r()}else{if(r=t(),te===null)throw Error(b(349));Dt&30||su(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,cs(uu.bind(null,n,a,e),[e]),n.flags|=2048,sn(9,cu.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Ae(),t=te.identifierPrefix;if(F){var r=qe,n=Ke;r=(n&~(1<<32-Oe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=an++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=bf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ef={readContext:Pe,useCallback:vu,useContext:Pe,useEffect:to,useImperativeHandle:xu,useInsertionEffect:mu,useLayoutEffect:hu,useMemo:yu,useReducer:dl,useRef:fu,useState:function(){return dl(on)},useDebugValue:ro,useDeferredValue:function(e){var t=_e();return wu(t,X.memoizedState,e)},useTransition:function(){var e=dl(on)[0],t=_e().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:ou,useId:ju,unstable_isNewReconciler:!1},Pf={readContext:Pe,useCallback:vu,useContext:Pe,useEffect:to,useImperativeHandle:xu,useInsertionEffect:mu,useLayoutEffect:hu,useMemo:yu,useReducer:pl,useRef:fu,useState:function(){return pl(on)},useDebugValue:ro,useDeferredValue:function(e){var t=_e();return X===null?t.memoizedState=e:wu(t,X.memoizedState,e)},useTransition:function(){var e=pl(on)[0],t=_e().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:ou,useId:ju,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Gl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:H({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ti={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ue(),i=gt(e),a=Ye(n,i);a.payload=t,r!=null&&(a.callback=r),t=mt(e,a,i),t!==null&&(De(t,e,i,n),Wn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ue(),i=gt(e),a=Ye(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=mt(e,a,i),t!==null&&(De(t,e,i,n),Wn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ue(),n=gt(e),i=Ye(r,n);i.tag=2,t!=null&&(i.callback=t),t=mt(e,i,n),t!==null&&(De(t,e,n,r),Wn(t,e,n))}};function us(e,t,r,n,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,o):t.prototype&&t.prototype.isPureReactComponent?!Zr(r,n)||!Zr(i,a):!0}function Su(e,t,r){var n=!1,i=wt,a=t.contextType;return typeof a=="object"&&a!==null?a=Pe(a):(i=xe(t)?It:se.current,n=t.contextTypes,a=(n=n!=null)?dr(e,i):wt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ti,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ds(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ti.enqueueReplaceState(t,t.state,null)}function Xl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},qa(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Pe(a):(a=xe(t)?It:se.current,i.context=dr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Gl(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ti.enqueueReplaceState(i,i.state,null),fi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hr(e,t){try{var r="",n=t;do r+=rp(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function Cu(e,t,r){r=Ye(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){vi||(vi=!0,sa=n),Jl(e,t)},r}function zu(e,t,r){r=Ye(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Jl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Jl(e,t),typeof n!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function ps(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new _f;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Hf.bind(null,e,t,r),t.then(e,e))}function fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ms(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ye(-1,1),t.tag=2,mt(r,t,1))),r.lanes|=1),e)}var Lf=et.ReactCurrentOwner,he=!1;function ce(e,t,r,n){t.child=e===null?ru(t,null,r,n):fr(t,e.child,r,n)}function hs(e,t,r,n,i){r=r.render;var a=t.ref;return or(t,i),n=Za(e,t,r,n,a,i),r=eo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(F&&r&&Fa(t),t.flags|=1,ce(e,t,n,i),t.child)}function gs(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!uo(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Eu(e,t,a,n,i)):(e=Xn(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Zr,r(o,n)&&e.ref===t.ref)return Ze(e,t,i)}return t.flags|=1,e=xt(a,n),e.ref=t.ref,e.return=t,t.child=e}function Eu(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Zr(a,n)&&e.ref===t.ref)if(he=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ze(e,t,i)}return Zl(e,t,r,n,i)}function Pu(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(rr,ye),ye|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(rr,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,U(rr,ye),ye|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,U(rr,ye),ye|=n;return ce(e,t,i,r),t.child}function _u(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Zl(e,t,r,n,i){var a=xe(r)?It:se.current;return a=dr(t,a),or(t,i),r=Za(e,t,r,n,a,i),n=eo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ze(e,t,i)):(F&&n&&Fa(t),t.flags|=1,ce(e,t,r,i),t.child)}function xs(e,t,r,n,i){if(xe(r)){var a=!0;si(t)}else a=!1;if(or(t,i),t.stateNode===null)qn(e,t),Su(t,r,n),Xl(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,u=r.contextType;typeof u=="object"&&u!==null?u=Pe(u):(u=xe(r)?It:se.current,u=dr(t,u));var g=r.getDerivedStateFromProps,p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||c!==u)&&ds(t,o,n,u),it=!1;var x=t.memoizedState;o.state=x,fi(t,n,o,i),c=t.memoizedState,s!==n||x!==c||ge.current||it?(typeof g=="function"&&(Gl(t,r,g,n),c=t.memoizedState),(s=it||us(t,r,s,n,x,c,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),o.props=n,o.state=c,o.context=u,n=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,iu(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Te(t.type,s),o.props=u,p=t.pendingProps,x=o.context,c=r.contextType,typeof c=="object"&&c!==null?c=Pe(c):(c=xe(r)?It:se.current,c=dr(t,c));var y=r.getDerivedStateFromProps;(g=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||x!==c)&&ds(t,o,n,c),it=!1,x=t.memoizedState,o.state=x,fi(t,n,o,i);var v=t.memoizedState;s!==p||x!==v||ge.current||it?(typeof y=="function"&&(Gl(t,r,y,n),v=t.memoizedState),(u=it||us(t,r,u,n,x,v,c)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),o.props=n,o.state=v,o.context=c,n=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),n=!1)}return ea(e,t,r,n,a,i)}function ea(e,t,r,n,i,a){_u(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&rs(t,r,!1),Ze(e,t,a);n=t.stateNode,Lf.current=t;var s=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=fr(t,e.child,null,a),t.child=fr(t,null,s,a)):ce(e,t,s,a),t.memoizedState=n.state,i&&rs(t,r,!0),t.child}function Lu(e){var t=e.stateNode;t.pendingContext?ts(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ts(e,t.context,!1),Ya(e,t.containerInfo)}function vs(e,t,r,n,i){return pr(),Va(i),t.flags|=256,ce(e,t,r,n),t.child}var ta={dehydrated:null,treeContext:null,retryLane:0};function ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,t,r){var n=t.pendingProps,i=B.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(B,i&1),e===null)return ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Oi(o,n,0,null),e=Mt(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ra(r),t.memoizedState=ta,e):no(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Rf(e,t,o,n,s,i,r);if(a){a=n.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=xt(i,c),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=xt(s,a):(a=Mt(a,o,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,o=e.child.memoizedState,o=o===null?ra(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~r,t.memoizedState=ta,n}return a=e.child,e=a.sibling,n=xt(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function no(e,t){return t=Oi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function On(e,t,r,n){return n!==null&&Va(n),fr(t,e.child,null,r),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rf(e,t,r,n,i,a,o){if(r)return t.flags&256?(t.flags&=-257,n=fl(Error(b(422))),On(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=Oi({mode:"visible",children:n.children},i,0,null),a=Mt(a,i,o,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&fr(t,e.child,null,o),t.child.memoizedState=ra(o),t.memoizedState=ta,a);if(!(t.mode&1))return On(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(b(419)),n=fl(a,n,void 0),On(e,t,o,n)}if(s=(o&e.childLanes)!==0,he||s){if(n=te,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Je(e,i),De(n,e,i,-1))}return co(),n=fl(Error(b(421))),On(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Wf.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,we=ft(i.nextSibling),je=t,F=!0,Ie=null,e!==null&&(Se[Ce++]=Ke,Se[Ce++]=qe,Se[Ce++]=Ot,Ke=e.id,qe=e.overflow,Ot=t),t=no(t,n.children),t.flags|=4096,t)}function ys(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Yl(e.return,t,r)}function ml(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Tu(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(ce(e,t,n.children,r),n=B.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ys(e,r,t);else if(e.tag===19)ys(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(U(B,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&mi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ml(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ml(t,!0,r,null,a);break;case"together":ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,r=xt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=xt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Tf(e,t,r){switch(t.tag){case 3:Lu(t),pr();break;case 5:lu(t);break;case 1:xe(t.type)&&si(t);break;case 4:Ya(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;U(di,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(U(B,B.current&1),t.flags|=128,null):r&t.child.childLanes?Ru(e,t,r):(U(B,B.current&1),e=Ze(e,t,r),e!==null?e.sibling:null);U(B,B.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Tu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(B,B.current),n)break;return null;case 22:case 23:return t.lanes=0,Pu(e,t,r)}return Ze(e,t,r)}var Mu,na,Iu,Ou;Mu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};na=function(){};Iu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Rt(He.current);var a=null;switch(r){case"input":i=Sl(e,i),n=Sl(e,n),a=[];break;case"select":i=H({},i,{value:void 0}),n=H({},n,{value:void 0}),a=[];break;case"textarea":i=El(e,i),n=El(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ai)}_l(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var c=n[u];if(s=i!=null?i[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in c)c.hasOwnProperty(o)&&s[o]!==c[o]&&(r||(r={}),r[o]=c[o])}else r||(a||(a=[]),a.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&$("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Ou=function(e,t,r,n){r!==n&&(t.flags|=4)};function Lr(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Mf(e,t,r){var n=t.pendingProps;switch(Ba(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return xe(t.type)&&oi(),ae(t),null;case 3:return n=t.stateNode,mr(),A(ge),A(se),Xa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Mn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(da(Ie),Ie=null))),na(e,t),ae(t),null;case 5:Ga(t);var i=Rt(ln.current);if(r=t.type,e!==null&&t.stateNode!=null)Iu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(b(166));return ae(t),null}if(e=Rt(He.current),Mn(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Fe]=t,n[rn]=a,e=(t.mode&1)!==0,r){case"dialog":$("cancel",n),$("close",n);break;case"iframe":case"object":case"embed":$("load",n);break;case"video":case"audio":for(i=0;i<Or.length;i++)$(Or[i],n);break;case"source":$("error",n);break;case"img":case"image":case"link":$("error",n),$("load",n);break;case"details":$("toggle",n);break;case"input":Eo(n,a),$("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},$("invalid",n);break;case"textarea":_o(n,a),$("invalid",n)}_l(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Tn(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Tn(n.textContent,s,e),i=["children",""+s]):Qr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&$("scroll",n)}switch(r){case"input":Sn(n),Po(n,a,!0);break;case"textarea":Sn(n),Lo(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=ai)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Fe]=t,e[rn]=n,Mu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ll(r,n),r){case"dialog":$("cancel",e),$("close",e),i=n;break;case"iframe":case"object":case"embed":$("load",e),i=n;break;case"video":case"audio":for(i=0;i<Or.length;i++)$(Or[i],e);i=n;break;case"source":$("error",e),i=n;break;case"img":case"image":case"link":$("error",e),$("load",e),i=n;break;case"details":$("toggle",e),i=n;break;case"input":Eo(e,n),i=Sl(e,n),$("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=H({},n,{value:void 0}),$("invalid",e);break;case"textarea":_o(e,n),i=El(e,n),$("invalid",e);break;default:i=n}_l(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var c=s[a];a==="style"?fc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dc(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Kr(e,c):typeof c=="number"&&Kr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&$("scroll",e):c!=null&&za(e,a,c,o))}switch(r){case"input":Sn(e),Po(e,n,!1);break;case"textarea":Sn(e),Lo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+yt(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?nr(e,!!n.multiple,a,!1):n.defaultValue!=null&&nr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ai)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Ou(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(b(166));if(r=Rt(ln.current),Rt(He.current),Mn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Fe]=t,(a=n.nodeValue!==r)&&(e=je,e!==null))switch(e.tag){case 3:Tn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tn(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Fe]=t,t.stateNode=n}return ae(t),null;case 13:if(A(B),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&we!==null&&t.mode&1&&!(t.flags&128))eu(),pr(),t.flags|=98560,a=!1;else if(a=Mn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[Fe]=t}else pr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),a=!1}else Ie!==null&&(da(Ie),Ie=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?J===0&&(J=3):co())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return mr(),na(e,t),e===null&&en(t.stateNode.containerInfo),ae(t),null;case 10:return Qa(t.type._context),ae(t),null;case 17:return xe(t.type)&&oi(),ae(t),null;case 19:if(A(B),a=t.memoizedState,a===null)return ae(t),null;if(n=(t.flags&128)!==0,o=a.rendering,o===null)if(n)Lr(a,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mi(e),o!==null){for(t.flags|=128,Lr(a,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return U(B,B.current&1|2),t.child}e=e.sibling}a.tail!==null&&q()>gr&&(t.flags|=128,n=!0,Lr(a,!1),t.lanes=4194304)}else{if(!n)if(e=mi(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!F)return ae(t),null}else 2*q()-a.renderingStartTime>gr&&r!==1073741824&&(t.flags|=128,n=!0,Lr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(r=a.last,r!==null?r.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=q(),t.sibling=null,r=B.current,U(B,n?r&1|2:r&1),t):(ae(t),null);case 22:case 23:return so(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ye&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function If(e,t){switch(Ba(t),t.tag){case 1:return xe(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),A(ge),A(se),Xa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ga(t),null;case 13:if(A(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(B),null;case 4:return mr(),null;case 10:return Qa(t.type._context),null;case 22:case 23:return so(),null;case 24:return null;default:return null}}var Dn=!1,oe=!1,Of=typeof WeakSet=="function"?WeakSet:Set,S=null;function tr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){W(e,t,n)}else r.current=null}function ia(e,t,r){try{r()}catch(n){W(e,t,n)}}var ws=!1;function Df(e,t){if(Fl=ni,e=Fc(),Aa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,c=-1,u=0,g=0,p=e,x=null;t:for(;;){for(var y;p!==r||i!==0&&p.nodeType!==3||(s=o+i),p!==a||n!==0&&p.nodeType!==3||(c=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)x=p,p=y;for(;;){if(p===e)break t;if(x===r&&++u===i&&(s=o),x===a&&++g===n&&(c=o),(y=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=y}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bl={focusedElem:e,selectionRange:r},ni=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var f=v.memoizedProps,k=v.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?f:Te(t.type,f),k);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(w){W(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=ws,ws=!1,v}function Vr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&ia(t,r,a)}i=i.next}while(i!==n)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function la(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Du(e){var t=e.alternate;t!==null&&(e.alternate=null,Du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[rn],delete t[Wl],delete t[yf],delete t[wf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uu(e){return e.tag===5||e.tag===3||e.tag===4}function js(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ai));else if(n!==4&&(e=e.child,e!==null))for(aa(e,t,r),e=e.sibling;e!==null;)aa(e,t,r),e=e.sibling}function oa(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(oa(e,t,r),e=e.sibling;e!==null;)oa(e,t,r),e=e.sibling}var re=null,Me=!1;function rt(e,t,r){for(r=r.child;r!==null;)$u(e,t,r),r=r.sibling}function $u(e,t,r){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ci,r)}catch{}switch(r.tag){case 5:oe||tr(r,t);case 6:var n=re,i=Me;re=null,rt(e,t,r),re=n,Me=i,re!==null&&(Me?(e=re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(Me?(e=re,r=r.stateNode,e.nodeType===8?ol(e.parentNode,r):e.nodeType===1&&ol(e,r),Xr(e)):ol(re,r.stateNode));break;case 4:n=re,i=Me,re=r.stateNode.containerInfo,Me=!0,rt(e,t,r),re=n,Me=i;break;case 0:case 11:case 14:case 15:if(!oe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&ia(r,t,o),i=i.next}while(i!==n)}rt(e,t,r);break;case 1:if(!oe&&(tr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){W(r,t,s)}rt(e,t,r);break;case 21:rt(e,t,r);break;case 22:r.mode&1?(oe=(n=oe)||r.memoizedState!==null,rt(e,t,r),oe=n):rt(e,t,r);break;default:rt(e,t,r)}}function ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Of),t.forEach(function(n){var i=Qf.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Re(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Me=!1;break e;case 3:re=s.stateNode.containerInfo,Me=!0;break e;case 4:re=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(re===null)throw Error(b(160));$u(a,o,i),re=null,Me=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){W(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Au(t,e),t=t.sibling}function Au(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),$e(e),n&4){try{Vr(3,e,e.return),Mi(3,e)}catch(f){W(e,e.return,f)}try{Vr(5,e,e.return)}catch(f){W(e,e.return,f)}}break;case 1:Re(t,e),$e(e),n&512&&r!==null&&tr(r,r.return);break;case 5:if(Re(t,e),$e(e),n&512&&r!==null&&tr(r,r.return),e.flags&32){var i=e.stateNode;try{Kr(i,"")}catch(f){W(e,e.return,f)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=r!==null?r.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&sc(i,a),Ll(s,o);var u=Ll(s,a);for(o=0;o<c.length;o+=2){var g=c[o],p=c[o+1];g==="style"?fc(i,p):g==="dangerouslySetInnerHTML"?dc(i,p):g==="children"?Kr(i,p):za(i,g,p,u)}switch(s){case"input":Cl(i,a);break;case"textarea":cc(i,a);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?nr(i,!!a.multiple,y,!1):x!==!!a.multiple&&(a.defaultValue!=null?nr(i,!!a.multiple,a.defaultValue,!0):nr(i,!!a.multiple,a.multiple?[]:"",!1))}i[rn]=a}catch(f){W(e,e.return,f)}}break;case 6:if(Re(t,e),$e(e),n&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(f){W(e,e.return,f)}}break;case 3:if(Re(t,e),$e(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(f){W(e,e.return,f)}break;case 4:Re(t,e),$e(e);break;case 13:Re(t,e),$e(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ao=q())),n&4&&ks(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(oe=(u=oe)||g,Re(t,e),oe=u):Re(t,e),$e(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(p=S=g;S!==null;){switch(x=S,y=x.child,x.tag){case 0:case 11:case 14:case 15:Vr(4,x,x.return);break;case 1:tr(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){n=x,r=x.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(f){W(n,r,f)}}break;case 5:tr(x,x.return);break;case 22:if(x.memoizedState!==null){Ns(p);continue}}y!==null?(y.return=x,S=y):Ns(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{i=p.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=pc("display",o))}catch(f){W(e,e.return,f)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(f){W(e,e.return,f)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Re(t,e),$e(e),n&4&&ks(e);break;case 21:break;default:Re(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Uu(r)){var n=r;break e}r=r.return}throw Error(b(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Kr(i,""),n.flags&=-33);var a=js(e);oa(e,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=js(e);aa(e,s,o);break;default:throw Error(b(161))}}catch(c){W(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uf(e,t,r){S=e,Fu(e)}function Fu(e,t,r){for(var n=(e.mode&1)!==0;S!==null;){var i=S,a=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||Dn;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||oe;s=Dn;var u=oe;if(Dn=o,(oe=c)&&!u)for(S=i;S!==null;)o=S,c=o.child,o.tag===22&&o.memoizedState!==null?Ss(i):c!==null?(c.return=o,S=c):Ss(i);for(;a!==null;)S=a,Fu(a),a=a.sibling;S=i,Dn=s,oe=u}bs(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,S=a):bs(e)}}function bs(e){for(;S!==null;){var t=S;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Mi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!oe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Te(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&os(t,a,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}os(t,o,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Xr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}oe||t.flags&512&&la(t)}catch(x){W(t,t.return,x)}}if(t===e){S=null;break}if(r=t.sibling,r!==null){r.return=t.return,S=r;break}S=t.return}}function Ns(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var r=t.sibling;if(r!==null){r.return=t.return,S=r;break}S=t.return}}function Ss(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Mi(4,t)}catch(c){W(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){W(t,i,c)}}var a=t.return;try{la(t)}catch(c){W(t,a,c)}break;case 5:var o=t.return;try{la(t)}catch(c){W(t,o,c)}}}catch(c){W(t,t.return,c)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var $f=Math.ceil,xi=et.ReactCurrentDispatcher,io=et.ReactCurrentOwner,Ee=et.ReactCurrentBatchConfig,O=0,te=null,Y=null,ne=0,ye=0,rr=bt(0),J=0,cn=null,Ut=0,Ii=0,lo=0,Hr=null,me=null,ao=0,gr=1/0,We=null,vi=!1,sa=null,ht=null,Un=!1,st=null,yi=0,Wr=0,ca=null,Yn=-1,Gn=0;function ue(){return O&6?q():Yn!==-1?Yn:Yn=q()}function gt(e){return e.mode&1?O&2&&ne!==0?ne&-ne:kf.transition!==null?(Gn===0&&(Gn=Sc()),Gn):(e=D,e!==0||(e=window.event,e=e===void 0?16:Rc(e.type)),e):1}function De(e,t,r,n){if(50<Wr)throw Wr=0,ca=null,Error(b(185));mn(e,r,n),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Ii|=r),J===4&&at(e,ne)),ve(e,n),r===1&&O===0&&!(t.mode&1)&&(gr=q()+500,Li&&Nt()))}function ve(e,t){var r=e.callbackNode;jp(e,t);var n=ri(e,e===te?ne:0);if(n===0)r!==null&&Mo(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Mo(r),t===1)e.tag===0?jf(Cs.bind(null,e)):Xc(Cs.bind(null,e)),xf(function(){!(O&6)&&Nt()}),r=null;else{switch(Cc(n)){case 1:r=Ra;break;case 4:r=bc;break;case 16:r=ti;break;case 536870912:r=Nc;break;default:r=ti}r=Yu(r,Bu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Bu(e,t){if(Yn=-1,Gn=0,O&6)throw Error(b(327));var r=e.callbackNode;if(sr()&&e.callbackNode!==r)return null;var n=ri(e,e===te?ne:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=wi(e,n);else{t=n;var i=O;O|=2;var a=Hu();(te!==e||ne!==t)&&(We=null,gr=q()+500,Tt(e,t));do try{Bf();break}catch(s){Vu(e,s)}while(!0);Wa(),xi.current=a,O=i,Y!==null?t=0:(te=null,ne=0,t=J)}if(t!==0){if(t===2&&(i=Ol(e),i!==0&&(n=i,t=ua(e,i))),t===1)throw r=cn,Tt(e,0),at(e,n),ve(e,q()),r;if(t===6)at(e,n);else{if(i=e.current.alternate,!(n&30)&&!Af(i)&&(t=wi(e,n),t===2&&(a=Ol(e),a!==0&&(n=a,t=ua(e,a))),t===1))throw r=cn,Tt(e,0),at(e,n),ve(e,q()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(b(345));case 2:Pt(e,me,We);break;case 3:if(at(e,n),(n&130023424)===n&&(t=ao+500-q(),10<t)){if(ri(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hl(Pt.bind(null,e,me,We),t);break}Pt(e,me,We);break;case 4:if(at(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Oe(n);a=1<<o,o=t[o],o>i&&(i=o),n&=~a}if(n=i,n=q()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*$f(n/1960))-n,10<n){e.timeoutHandle=Hl(Pt.bind(null,e,me,We),n);break}Pt(e,me,We);break;case 5:Pt(e,me,We);break;default:throw Error(b(329))}}}return ve(e,q()),e.callbackNode===r?Bu.bind(null,e):null}function ua(e,t){var r=Hr;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=wi(e,t),e!==2&&(t=me,me=r,t!==null&&da(t)),e}function da(e){me===null?me=e:me.push.apply(me,e)}function Af(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Ue(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~lo,t&=~Ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Oe(t),n=1<<r;e[r]=-1,t&=~n}}function Cs(e){if(O&6)throw Error(b(327));sr();var t=ri(e,0);if(!(t&1))return ve(e,q()),null;var r=wi(e,t);if(e.tag!==0&&r===2){var n=Ol(e);n!==0&&(t=n,r=ua(e,n))}if(r===1)throw r=cn,Tt(e,0),at(e,t),ve(e,q()),r;if(r===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,me,We),ve(e,q()),null}function oo(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(gr=q()+500,Li&&Nt())}}function $t(e){st!==null&&st.tag===0&&!(O&6)&&sr();var t=O;O|=1;var r=Ee.transition,n=D;try{if(Ee.transition=null,D=1,e)return e()}finally{D=n,Ee.transition=r,O=t,!(O&6)&&Nt()}}function so(){ye=rr.current,A(rr)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,gf(r)),Y!==null)for(r=Y.return;r!==null;){var n=r;switch(Ba(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&oi();break;case 3:mr(),A(ge),A(se),Xa();break;case 5:Ga(n);break;case 4:mr();break;case 13:A(B);break;case 19:A(B);break;case 10:Qa(n.type._context);break;case 22:case 23:so()}r=r.return}if(te=e,Y=e=xt(e.current,null),ne=ye=t,J=0,cn=null,lo=Ii=Ut=0,me=Hr=null,Lt!==null){for(t=0;t<Lt.length;t++)if(r=Lt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.pending=n}Lt=null}return e}function Vu(e,t){do{var r=Y;try{if(Wa(),Qn.current=gi,hi){for(var n=V.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}hi=!1}if(Dt=0,ee=X=V=null,Br=!1,an=0,io.current=null,r===null||r.return===null){J=1,cn=t,Y=null;break}e:{var a=e,o=r.return,s=r,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=s,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=fs(o);if(y!==null){y.flags&=-257,ms(y,o,s,a,t),y.mode&1&&ps(a,u,t),t=y,c=u;var v=t.updateQueue;if(v===null){var f=new Set;f.add(c),t.updateQueue=f}else v.add(c);break e}else{if(!(t&1)){ps(a,u,t),co();break e}c=Error(b(426))}}else if(F&&s.mode&1){var k=fs(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ms(k,o,s,a,t),Va(hr(c,s));break e}}a=c=hr(c,s),J!==4&&(J=2),Hr===null?Hr=[a]:Hr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Cu(a,c,t);as(a,h);break e;case 1:s=c;var d=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ht===null||!ht.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=zu(a,s,t);as(a,w);break e}}a=a.return}while(a!==null)}Qu(r)}catch(N){t=N,Y===r&&r!==null&&(Y=r=r.return);continue}break}while(!0)}function Hu(){var e=xi.current;return xi.current=gi,e===null?gi:e}function co(){(J===0||J===3||J===2)&&(J=4),te===null||!(Ut&268435455)&&!(Ii&268435455)||at(te,ne)}function wi(e,t){var r=O;O|=2;var n=Hu();(te!==e||ne!==t)&&(We=null,Tt(e,t));do try{Ff();break}catch(i){Vu(e,i)}while(!0);if(Wa(),O=r,xi.current=n,Y!==null)throw Error(b(261));return te=null,ne=0,J}function Ff(){for(;Y!==null;)Wu(Y)}function Bf(){for(;Y!==null&&!pp();)Wu(Y)}function Wu(e){var t=qu(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Qu(e):Y=t,io.current=null}function Qu(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=If(r,t),r!==null){r.flags&=32767,Y=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(r=Mf(r,t,ye),r!==null){Y=r;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);J===0&&(J=5)}function Pt(e,t,r){var n=D,i=Ee.transition;try{Ee.transition=null,D=1,Vf(e,t,r,n)}finally{Ee.transition=i,D=n}return null}function Vf(e,t,r,n){do sr();while(st!==null);if(O&6)throw Error(b(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(kp(e,a),e===te&&(Y=te=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Un||(Un=!0,Yu(ti,function(){return sr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Ee.transition,Ee.transition=null;var o=D;D=1;var s=O;O|=4,io.current=null,Df(e,r),Au(r,e),cf(Bl),ni=!!Fl,Bl=Fl=null,e.current=r,Uf(r),fp(),O=s,D=o,Ee.transition=a}else e.current=r;if(Un&&(Un=!1,st=e,yi=i),a=e.pendingLanes,a===0&&(ht=null),gp(r.stateNode),ve(e,q()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(vi)throw vi=!1,e=sa,sa=null,e;return yi&1&&e.tag!==0&&sr(),a=e.pendingLanes,a&1?e===ca?Wr++:(Wr=0,ca=e):Wr=0,Nt(),null}function sr(){if(st!==null){var e=Cc(yi),t=Ee.transition,r=D;try{if(Ee.transition=null,D=16>e?16:e,st===null)var n=!1;else{if(e=st,st=null,yi=0,O&6)throw Error(b(331));var i=O;for(O|=4,S=e.current;S!==null;){var a=S,o=a.child;if(S.flags&16){var s=a.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(S=u;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Vr(8,g,a)}var p=g.child;if(p!==null)p.return=g,S=p;else for(;S!==null;){g=S;var x=g.sibling,y=g.return;if(Du(g),g===u){S=null;break}if(x!==null){x.return=y,S=x;break}S=y}}}var v=a.alternate;if(v!==null){var f=v.child;if(f!==null){v.child=null;do{var k=f.sibling;f.sibling=null,f=k}while(f!==null)}}S=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,S=o;else e:for(;S!==null;){if(a=S,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Vr(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,S=h;break e}S=a.return}}var d=e.current;for(S=d;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=d;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Mi(9,s)}}catch(N){W(s,s.return,N)}if(s===o){S=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,S=w;break e}S=s.return}}if(O=i,Nt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ci,e)}catch{}n=!0}return n}finally{D=r,Ee.transition=t}}return!1}function zs(e,t,r){t=hr(r,t),t=Cu(e,t,1),e=mt(e,t,1),t=ue(),e!==null&&(mn(e,1,t),ve(e,t))}function W(e,t,r){if(e.tag===3)zs(e,e,r);else for(;t!==null;){if(t.tag===3){zs(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ht===null||!ht.has(n))){e=hr(r,e),e=zu(t,e,1),t=mt(t,e,1),e=ue(),t!==null&&(mn(t,1,e),ve(t,e));break}}t=t.return}}function Hf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&r,te===e&&(ne&r)===r&&(J===4||J===3&&(ne&130023424)===ne&&500>q()-ao?Tt(e,0):lo|=r),ve(e,t)}function Ku(e,t){t===0&&(e.mode&1?(t=En,En<<=1,!(En&130023424)&&(En=4194304)):t=1);var r=ue();e=Je(e,t),e!==null&&(mn(e,t,r),ve(e,r))}function Wf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ku(e,r)}function Qf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(b(314))}n!==null&&n.delete(t),Ku(e,r)}var qu;qu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return he=!1,Tf(e,t,r);he=!!(e.flags&131072)}else he=!1,F&&t.flags&1048576&&Jc(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;qn(e,t),e=t.pendingProps;var i=dr(t,se.current);or(t,r),i=Za(null,t,n,e,i,r);var a=eo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(n)?(a=!0,si(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qa(t),i.updater=Ti,t.stateNode=i,i._reactInternals=t,Xl(t,n,e,r),t=ea(null,t,n,!0,a,r)):(t.tag=0,F&&a&&Fa(t),ce(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(qn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=qf(n),e=Te(n,e),i){case 0:t=Zl(null,t,n,e,r);break e;case 1:t=xs(null,t,n,e,r);break e;case 11:t=hs(null,t,n,e,r);break e;case 14:t=gs(null,t,n,Te(n.type,e),r);break e}throw Error(b(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),Zl(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),xs(e,t,n,i,r);case 3:e:{if(Lu(t),e===null)throw Error(b(387));n=t.pendingProps,a=t.memoizedState,i=a.element,iu(e,t),fi(t,n,null,r);var o=t.memoizedState;if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=hr(Error(b(423)),t),t=vs(e,t,n,r,i);break e}else if(n!==i){i=hr(Error(b(424)),t),t=vs(e,t,n,r,i);break e}else for(we=ft(t.stateNode.containerInfo.firstChild),je=t,F=!0,Ie=null,r=ru(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(pr(),n===i){t=Ze(e,t,r);break e}ce(e,t,n,r)}t=t.child}return t;case 5:return lu(t),e===null&&ql(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Vl(n,i)?o=null:a!==null&&Vl(n,a)&&(t.flags|=32),_u(e,t),ce(e,t,o,r),t.child;case 6:return e===null&&ql(t),null;case 13:return Ru(e,t,r);case 4:return Ya(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=fr(t,null,n,r):ce(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),hs(e,t,n,i,r);case 7:return ce(e,t,t.pendingProps,r),t.child;case 8:return ce(e,t,t.pendingProps.children,r),t.child;case 12:return ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,U(di,n._currentValue),n._currentValue=o,a!==null)if(Ue(a.value,o)){if(a.children===i.children&&!ge.current){t=Ze(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(a.tag===1){c=Ye(-1,r&-r),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Yl(a.return,r,t),s.lanes|=r;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(b(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),Yl(o,r,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ce(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,or(t,r),i=Pe(i),n=n(i),t.flags|=1,ce(e,t,n,r),t.child;case 14:return n=t.type,i=Te(n,t.pendingProps),i=Te(n.type,i),gs(e,t,n,i,r);case 15:return Eu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),qn(e,t),t.tag=1,xe(n)?(e=!0,si(t)):e=!1,or(t,r),Su(t,n,i),Xl(t,n,i,r),ea(null,t,n,!0,e,r);case 19:return Tu(e,t,r);case 22:return Pu(e,t,r)}throw Error(b(156,t.tag))};function Yu(e,t){return kc(e,t)}function Kf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,r,n){return new Kf(e,t,r,n)}function uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qf(e){if(typeof e=="function")return uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===_a)return 14}return 2}function xt(e,t){var r=e.alternate;return r===null?(r=ze(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xn(e,t,r,n,i,a){var o=2;if(n=e,typeof e=="function")uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Qt:return Mt(r.children,i,a,t);case Ea:o=8,i|=8;break;case jl:return e=ze(12,r,t,i|2),e.elementType=jl,e.lanes=a,e;case kl:return e=ze(13,r,t,i),e.elementType=kl,e.lanes=a,e;case bl:return e=ze(19,r,t,i),e.elementType=bl,e.lanes=a,e;case lc:return Oi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:o=10;break e;case ic:o=9;break e;case Pa:o=11;break e;case _a:o=14;break e;case nt:o=16,n=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=ze(o,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Mt(e,t,r,n){return e=ze(7,e,n,t),e.lanes=r,e}function Oi(e,t,r,n){return e=ze(22,e,n,t),e.elementType=lc,e.lanes=r,e.stateNode={isHidden:!1},e}function hl(e,t,r){return e=ze(6,e,null,t),e.lanes=r,e}function gl(e,t,r){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yf(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function po(e,t,r,n,i,a,o,s,c){return e=new Yf(e,t,r,s,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ze(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(a),e}function Gf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Gu(e){if(!e)return wt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var r=e.type;if(xe(r))return Gc(e,r,t)}return t}function Xu(e,t,r,n,i,a,o,s,c){return e=po(r,n,!0,e,i,a,o,s,c),e.context=Gu(null),r=e.current,n=ue(),i=gt(r),a=Ye(n,i),a.callback=t??null,mt(r,a,i),e.current.lanes=i,mn(e,i,n),ve(e,n),e}function Di(e,t,r,n){var i=t.current,a=ue(),o=gt(i);return r=Gu(r),t.context===null?t.context=r:t.pendingContext=r,t=Ye(a,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=mt(i,t,o),e!==null&&(De(e,i,o,a),Wn(e,i,o)),o}function ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Es(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function fo(e,t){Es(e,t),(e=e.alternate)&&Es(e,t)}function Xf(){return null}var Ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function mo(e){this._internalRoot=e}Ui.prototype.render=mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Di(e,t,null,null)};Ui.prototype.unmount=mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Di(null,e,null,null)}),t[Xe]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<lt.length&&t!==0&&t<lt[r].priority;r++);lt.splice(r,0,e),r===0&&Lc(e)}};function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ps(){}function Jf(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=ji(o);a.call(u)}}var o=Xu(t,n,e,0,null,!1,!1,"",Ps);return e._reactRootContainer=o,e[Xe]=o.current,en(e.nodeType===8?e.parentNode:e),$t(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var u=ji(c);s.call(u)}}var c=po(e,0,!1,null,null,!1,!1,"",Ps);return e._reactRootContainer=c,e[Xe]=c.current,en(e.nodeType===8?e.parentNode:e),$t(function(){Di(t,c,r,n)}),c}function Ai(e,t,r,n,i){var a=r._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var c=ji(o);s.call(c)}}Di(t,o,e,i)}else o=Jf(r,t,e,i,n);return ji(o)}zc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ir(t.pendingLanes);r!==0&&(Ta(t,r|1),ve(t,q()),!(O&6)&&(gr=q()+500,Nt()))}break;case 13:$t(function(){var n=Je(e,1);if(n!==null){var i=ue();De(n,e,1,i)}}),fo(e,1)}};Ma=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var r=ue();De(t,e,134217728,r)}fo(e,134217728)}};Ec=function(e){if(e.tag===13){var t=gt(e),r=Je(e,t);if(r!==null){var n=ue();De(r,e,t,n)}fo(e,t)}};Pc=function(){return D};_c=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};Tl=function(e,t,r){switch(t){case"input":if(Cl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=_i(n);if(!i)throw Error(b(90));oc(n),Cl(n,i)}}}break;case"textarea":cc(e,r);break;case"select":t=r.value,t!=null&&nr(e,!!r.multiple,t,!1)}};gc=oo;xc=$t;var Zf={usingClientEntryPoint:!1,Events:[gn,Gt,_i,mc,hc,oo]},Rr={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},em={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wc(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||Xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $n=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$n.isDisabled&&$n.supportsFiber)try{Ci=$n.inject(em),Ve=$n}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zf;be.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ho(t))throw Error(b(200));return Gf(e,t,null,r)};be.createRoot=function(e,t){if(!ho(e))throw Error(b(299));var r=!1,n="",i=Ju;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=po(e,1,!1,null,null,r,!1,n,i),e[Xe]=t.current,en(e.nodeType===8?e.parentNode:e),new mo(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=wc(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return $t(e)};be.hydrate=function(e,t,r){if(!$i(t))throw Error(b(200));return Ai(null,e,t,!0,r)};be.hydrateRoot=function(e,t,r){if(!ho(e))throw Error(b(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",o=Ju;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Xu(t,null,e,1,r??null,i,!1,a,o),e[Xe]=t.current,en(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ui(t)};be.render=function(e,t,r){if(!$i(t))throw Error(b(200));return Ai(null,e,t,!1,r)};be.unmountComponentAtNode=function(e){if(!$i(e))throw Error(b(40));return e._reactRootContainer?($t(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};be.unstable_batchedUpdates=oo;be.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!$i(r))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ai(e,t,r,!1,n)};be.version="18.3.1-next-f1338f8080-20240426";function Zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zu)}catch(e){console.error(e)}}Zu(),Zs.exports=be;var tm=Zs.exports,_s=tm;yl.createRoot=_s.createRoot,yl.hydrateRoot=_s.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function un(){return un=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},un.apply(null,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const Ls="popstate";function rm(e){e===void 0&&(e={});function t(n,i){let{pathname:a,search:o,hash:s}=n.location;return pa("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:ki(i)}return im(t,r,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function go(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nm(){return Math.random().toString(36).substr(2,8)}function Rs(e,t){return{usr:e.state,key:e.key,idx:t}}function pa(e,t,r,n){return r===void 0&&(r=null),un({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:r,key:t&&t.key||n||nm()})}function ki(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function jr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function im(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:a=!1}=n,o=i.history,s=ct.Pop,c=null,u=g();u==null&&(u=0,o.replaceState(un({},o.state,{idx:u}),""));function g(){return(o.state||{idx:null}).idx}function p(){s=ct.Pop;let k=g(),h=k==null?null:k-u;u=k,c&&c({action:s,location:f.location,delta:h})}function x(k,h){s=ct.Push;let d=pa(f.location,k,h);u=g()+1;let m=Rs(d,u),w=f.createHref(d);try{o.pushState(m,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(w)}a&&c&&c({action:s,location:f.location,delta:1})}function y(k,h){s=ct.Replace;let d=pa(f.location,k,h);u=g();let m=Rs(d,u),w=f.createHref(d);o.replaceState(m,"",w),a&&c&&c({action:s,location:f.location,delta:0})}function v(k){let h=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:ki(k);return d=d.replace(/ $/,"%20"),G(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let f={get action(){return s},get location(){return e(i,o)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ls,p),c=k,()=>{i.removeEventListener(Ls,p),c=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let h=v(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:y,go(k){return o.go(k)}};return f}var Ts;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ts||(Ts={}));function lm(e,t,r){return r===void 0&&(r="/"),am(e,t,r)}function am(e,t,r,n){let i=typeof t=="string"?jr(t):t,a=xo(i.pathname||"/",r);if(a==null)return null;let o=ed(e);om(o);let s=null,c=ym(a);for(let u=0;s==null&&u<o.length;++u)s=gm(o[u],c);return s}function ed(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(a,o,s)=>{let c={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=vt([n,c.relativePath]),g=r.concat(c);a.children&&a.children.length>0&&(G(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ed(a.children,t,g,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:mm(u,a.index),routesMeta:g})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let c of td(a.path))i(a,o,c)}),t}function td(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let o=td(n.join("/")),s=[];return s.push(...o.map(c=>c===""?a:[a,c].join("/"))),i&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function om(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:hm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const sm=/^:[\w-]+$/,cm=3,um=2,dm=1,pm=10,fm=-2,Ms=e=>e==="*";function mm(e,t){let r=e.split("/"),n=r.length;return r.some(Ms)&&(n+=fm),t&&(n+=um),r.filter(i=>!Ms(i)).reduce((i,a)=>i+(sm.test(a)?cm:a===""?dm:pm),n)}function hm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function gm(e,t,r){let{routesMeta:n}=e,i={},a="/",o=[];for(let s=0;s<n.length;++s){let c=n[s],u=s===n.length-1,g=a==="/"?t:t.slice(a.length)||"/",p=xm({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),x=c.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:vt([a,p.pathname]),pathnameBase:Nm(vt([a,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(a=vt([a,p.pathnameBase]))}return o}function xm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=vm(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((u,g,p)=>{let{paramName:x,isOptional:y}=g;if(x==="*"){let f=s[p]||"";o=a.slice(0,a.length-f.length).replace(/(.)\/+$/,"$1")}const v=s[p];return y&&!v?u[x]=void 0:u[x]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function vm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),go(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c)=>(n.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function ym(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return go(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const wm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jm=e=>wm.test(e);function km(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?jr(e):e,a;if(r)if(jm(r))a=r;else{if(r.includes("//")){let o=r;r=id(r),go(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+r))}r.startsWith("/")?a=Is(r.substring(1),"/"):a=Is(r,t)}else a=t;return{pathname:a,search:Sm(n),hash:Cm(i)}}function Is(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function xl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function rd(e,t){let r=bm(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function nd(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=jr(e):(i=un({},e),G(!i.pathname||!i.pathname.includes("?"),xl("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),xl("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),xl("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=r;else{let p=t.length-1;if(!n&&o.startsWith("..")){let x=o.split("/");for(;x[0]==="..";)x.shift(),p-=1;i.pathname=x.join("/")}s=p>=0?t[p]:"/"}let c=km(i,s),u=o&&o!=="/"&&o.endsWith("/"),g=(a||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}const id=e=>e.replace(/\/\/+/g,"/"),vt=e=>id(e.join("/")),Nm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ld=["post","put","patch","delete"];new Set(ld);const Em=["get",...ld];new Set(Em);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dn(){return dn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dn.apply(null,arguments)}const vo=j.createContext(null),Pm=j.createContext(null),Bt=j.createContext(null),Fi=j.createContext(null),tt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ad=j.createContext(null);function _m(e,t){let{relative:r}=t===void 0?{}:t;vn()||G(!1);let{basename:n,navigator:i}=j.useContext(Bt),{hash:a,pathname:o,search:s}=cd(e,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:vt([n,o])),i.createHref({pathname:c,search:s,hash:a})}function vn(){return j.useContext(Fi)!=null}function yn(){return vn()||G(!1),j.useContext(Fi).location}function od(e){j.useContext(Bt).static||j.useLayoutEffect(e)}function St(){let{isDataRoute:e}=j.useContext(tt);return e?Wm():Lm()}function Lm(){vn()||G(!1);let e=j.useContext(vo),{basename:t,future:r,navigator:n}=j.useContext(Bt),{matches:i}=j.useContext(tt),{pathname:a}=yn(),o=JSON.stringify(rd(i,r.v7_relativeSplatPath)),s=j.useRef(!1);return od(()=>{s.current=!0}),j.useCallback(function(u,g){if(g===void 0&&(g={}),!s.current)return;if(typeof u=="number"){n.go(u);return}let p=nd(u,JSON.parse(o),a,g.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:vt([t,p.pathname])),(g.replace?n.replace:n.push)(p,g.state,g)},[t,n,o,a,e])}const Rm=j.createContext(null);function Tm(e){let t=j.useContext(tt).outlet;return t&&j.createElement(Rm.Provider,{value:e},t)}function sd(){let{matches:e}=j.useContext(tt),t=e[e.length-1];return t?t.params:{}}function cd(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=j.useContext(Bt),{matches:i}=j.useContext(tt),{pathname:a}=yn(),o=JSON.stringify(rd(i,n.v7_relativeSplatPath));return j.useMemo(()=>nd(e,JSON.parse(o),a,r==="path"),[e,o,a,r])}function Mm(e,t){return Im(e,t)}function Im(e,t,r,n){vn()||G(!1);let{navigator:i}=j.useContext(Bt),{matches:a}=j.useContext(tt),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=yn(),g;if(t){var p;let k=typeof t=="string"?jr(t):t;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||G(!1),g=k}else g=u;let x=g.pathname||"/",y=x;if(c!=="/"){let k=c.replace(/^\//,"").split("/");y="/"+x.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=lm(e,{pathname:y}),f=Am(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:vt([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:vt([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,r,n);return t&&f?j.createElement(Fi.Provider,{value:{location:dn({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ct.Pop}},f):f}function Om(){let e=Hm(),t=zm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:i},r):null,null)}const Dm=j.createElement(Om,null);class Um extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?j.createElement(tt.Provider,{value:this.props.routeContext},j.createElement(ad.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $m(e){let{routeContext:t,match:r,children:n}=e,i=j.useContext(vo);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(tt.Provider,{value:t},n)}function Am(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,s=(i=r)==null?void 0:i.errors;if(s!=null){let g=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);g>=0||G(!1),o=o.slice(0,Math.min(o.length,g+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let g=0;g<o.length;g++){let p=o[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=g),p.route.id){let{loaderData:x,errors:y}=r,v=p.route.loader&&x[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||v){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((g,p,x)=>{let y,v=!1,f=null,k=null;r&&(y=s&&p.route.id?s[p.route.id]:void 0,f=p.route.errorElement||Dm,c&&(u<0&&x===0?(Qm("route-fallback"),v=!0,k=null):u===x&&(v=!0,k=p.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,x+1)),d=()=>{let m;return y?m=f:v?m=k:p.route.Component?m=j.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=g,j.createElement($m,{match:p,routeContext:{outlet:g,matches:h,isDataRoute:r!=null},children:m})};return r&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?j.createElement(Um,{location:r.location,revalidation:r.revalidation,component:f,error:y,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var ud=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ud||{}),dd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dd||{});function Fm(e){let t=j.useContext(vo);return t||G(!1),t}function Bm(e){let t=j.useContext(Pm);return t||G(!1),t}function Vm(e){let t=j.useContext(tt);return t||G(!1),t}function pd(e){let t=Vm(),r=t.matches[t.matches.length-1];return r.route.id||G(!1),r.route.id}function Hm(){var e;let t=j.useContext(ad),r=Bm(),n=pd();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Wm(){let{router:e}=Fm(ud.UseNavigateStable),t=pd(dd.UseNavigateStable),r=j.useRef(!1);return od(()=>{r.current=!0}),j.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,dn({fromRouteId:t},a)))},[e,t])}const Os={};function Qm(e,t,r){Os[e]||(Os[e]=!0)}function Km(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function qm(e){return Tm(e.context)}function fe(e){G(!1)}function Ym(e){let{basename:t="/",children:r=null,location:n,navigationType:i=ct.Pop,navigator:a,static:o=!1,future:s}=e;vn()&&G(!1);let c=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:c,navigator:a,static:o,future:dn({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof n=="string"&&(n=jr(n));let{pathname:g="/",search:p="",hash:x="",state:y=null,key:v="default"}=n,f=j.useMemo(()=>{let k=xo(g,c);return k==null?null:{location:{pathname:k,search:p,hash:x,state:y,key:v},navigationType:i}},[c,g,p,x,y,v,i]);return f==null?null:j.createElement(Bt.Provider,{value:u},j.createElement(Fi.Provider,{children:r,value:f}))}function Gm(e){let{children:t,location:r}=e;return Mm(fa(t),r)}new Promise(()=>{});function fa(e,t){t===void 0&&(t=[]);let r=[];return j.Children.forEach(e,(n,i)=>{if(!j.isValidElement(n))return;let a=[...t,i];if(n.type===j.Fragment){r.push.apply(r,fa(n.props.children,a));return}n.type!==fe&&G(!1),!n.props.index||!n.props.children||G(!1);let o={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=fa(n.props.children,a)),r.push(o)}),r}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ma.apply(null,arguments)}function Xm(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function Jm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zm(e,t){return e.button===0&&(!t||t==="_self")&&!Jm(e)}function ha(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function eh(e,t){let r=ha(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(a=>{r.append(i,a)})}),r}const th=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rh="6";try{window.__reactRouterVersion=rh}catch{}const nh="startTransition",Ds=Vd[nh];function ih(e){let{basename:t,children:r,future:n,window:i}=e,a=j.useRef();a.current==null&&(a.current=rm({window:i,v5Compat:!0}));let o=a.current,[s,c]=j.useState({action:o.action,location:o.location}),{v7_startTransition:u}=n||{},g=j.useCallback(p=>{u&&Ds?Ds(()=>c(p)):c(p)},[c,u]);return j.useLayoutEffect(()=>o.listen(g),[o,g]),j.useEffect(()=>Km(n),[n]),j.createElement(Ym,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:o,future:n})}const lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z=j.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:a,replace:o,state:s,target:c,to:u,preventScrollReset:g,viewTransition:p}=t,x=Xm(t,th),{basename:y}=j.useContext(Bt),v,f=!1;if(typeof u=="string"&&ah.test(u)&&(v=u,lh))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),N=xo(w.pathname,y);w.origin===m.origin&&N!=null?u=N+w.search+w.hash:f=!0}catch{}let k=_m(u,{relative:i}),h=oh(u,{replace:o,state:s,target:c,preventScrollReset:g,relative:i,viewTransition:p});function d(m){n&&n(m),m.defaultPrevented||h(m)}return j.createElement("a",ma({},x,{href:v||k,onClick:f||a?n:d,ref:r,target:c}))});var Us;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Us||(Us={}));var $s;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($s||($s={}));function oh(e,t){let{target:r,replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=St(),u=yn(),g=cd(e,{relative:o});return j.useCallback(p=>{if(Zm(p,r)){p.preventDefault();let x=n!==void 0?n:ki(u)===ki(g);c(e,{replace:x,state:i,preventScrollReset:a,relative:o,viewTransition:s})}},[u,c,g,n,i,r,e,a,o,s])}function sh(e){let t=j.useRef(ha(e)),r=j.useRef(!1),n=yn(),i=j.useMemo(()=>eh(n.search,r.current?null:t.current),[n.search]),a=St(),o=j.useCallback((s,c)=>{const u=ha(typeof s=="function"?s(i):s);r.current=!0,a("?"+u,c)},[a,i]);return[i,o]}const ch={user:null,isLoading:!0};function uh(e,t){switch(t.type){case"SET_USER":return{...e,user:t.payload,isLoading:!1};case"SET_LOADING":return{...e,isLoading:t.payload};case"LOGOUT":return{...e,user:null};default:return e}}const fd=j.createContext(null);function dh({children:e}){const[t,r]=j.useReducer(uh,ch);j.useEffect(()=>{const s=localStorage.getItem("chinamart_user");if(s)try{r({type:"SET_USER",payload:JSON.parse(s)})}catch{r({type:"SET_LOADING",payload:!1})}else r({type:"SET_LOADING",payload:!1})},[]);const n=async(s,c)=>{const g=JSON.parse(localStorage.getItem("chinamart_users")||"[]").find(x=>x.email===s);if(!g)throw new Error("Пользователь не найден");if(localStorage.getItem(`chinamart_password_${g.id}`)!==c)throw new Error("Неверный пароль");localStorage.setItem("chinamart_user",JSON.stringify(g)),r({type:"SET_USER",payload:g})},i=async s=>{const c=JSON.parse(localStorage.getItem("chinamart_users")||"[]");if(c.find(g=>g.email===s.email))throw new Error("Email уже зарегистрирован");const u={id:`user_${Date.now()}`,email:s.email,name:s.name,phone:s.phone,role:s.role,sellerData:s.role==="seller"?{storeName:s.storeName||"",category:s.storeCategory||"",description:"",rating:0,salesCount:0,createdAt:new Date().toISOString()}:void 0};c.push(u),localStorage.setItem("chinamart_users",JSON.stringify(c)),localStorage.setItem(`chinamart_password_${u.id}`,s.password),localStorage.setItem("chinamart_user",JSON.stringify(u)),r({type:"SET_USER",payload:u})},a=()=>{localStorage.removeItem("chinamart_user"),r({type:"LOGOUT"})},o=s=>{if(t.user){const c={...t.user,...s};localStorage.setItem("chinamart_user",JSON.stringify(c));const u=JSON.parse(localStorage.getItem("chinamart_users")||"[]"),g=u.findIndex(p=>p.id===t.user.id);g!==-1&&(u[g]=c,localStorage.setItem("chinamart_users",JSON.stringify(u))),r({type:"SET_USER",payload:c})}};return l.jsx(fd.Provider,{value:{...t,login:n,register:i,logout:a,updateUser:o},children:e})}function kr(){const e=j.useContext(fd);if(!e)throw new Error("useAuth must be used within AuthProvider");return e}const ph={items:[]};function fh(e,t){switch(t.type){case"ADD_ITEM":return e.items.find(n=>n.product.id===t.payload.product.id)?{...e,items:e.items.map(n=>n.product.id===t.payload.product.id?{...n,quantity:n.quantity+t.payload.quantity}:n)}:{...e,items:[...e.items,t.payload]};case"REMOVE_ITEM":return{...e,items:e.items.filter(r=>r.product.id!==t.payload)};case"UPDATE_QUANTITY":return{...e,items:e.items.map(r=>r.product.id===t.payload.productId?{...r,quantity:t.payload.quantity}:r)};case"CLEAR_CART":return{items:[]};case"LOAD_CART":return{items:t.payload};default:return e}}const md=j.createContext(null);function mh({children:e}){const[t,r]=j.useReducer(fh,ph);j.useEffect(()=>{const x=localStorage.getItem("chinamart_cart");if(x)try{r({type:"LOAD_CART",payload:JSON.parse(x)})}catch{}},[]),j.useEffect(()=>{localStorage.setItem("chinamart_cart",JSON.stringify(t.items))},[t.items]);const n=(x,y=1)=>{r({type:"ADD_ITEM",payload:{product:x,quantity:y}})},i=x=>{r({type:"REMOVE_ITEM",payload:x})},a=(x,y)=>{y<=0?i(x):r({type:"UPDATE_QUANTITY",payload:{productId:x,quantity:y}})},o=()=>{r({type:"CLEAR_CART"})},s=t.items.reduce((x,y)=>x+y.quantity,0),c=t.items.reduce((x,y)=>x+y.product.price*y.quantity,0),u=Math.round(c*.02),g=c+u,p=x=>t.items.some(y=>y.product.id===x);return l.jsx(md.Provider,{value:{items:t.items,addItem:n,removeItem:i,updateQuantity:a,clearCart:o,totalItems:s,subtotal:c,buyerCommission:u,total:g,isInCart:p},children:e})}function wn(){const e=j.useContext(md);if(!e)throw new Error("useCart must be used within CartProvider");return e}const hd=j.createContext(null);function hh({children:e}){const[t,r]=j.useState([]),n=j.useCallback((a,o)=>{const s=`toast_${Date.now()}`;r(c=>[...c,{id:s,type:a,message:o}]),setTimeout(()=>{r(c=>c.filter(u=>u.id!==s))},3e3)},[]),i=j.useCallback(a=>{r(o=>o.filter(s=>s.id!==a))},[]);return l.jsxs(hd.Provider,{value:{toasts:t,showToast:n,removeToast:i},children:[e,l.jsx("div",{className:"toast-container",children:t.map(a=>l.jsxs("div",{className:`toast toast-${a.type}`,children:[l.jsxs("span",{className:"toast-icon",children:[a.type==="success"&&"✓",a.type==="error"&&"✕",a.type==="info"&&"ℹ"]}),l.jsx("span",{className:"toast-message",children:a.message}),l.jsx("button",{className:"toast-close",onClick:()=>i(a.id),children:"×"})]},a.id))}),l.jsx("style",{children:`
        .toast-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .toast {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-radius: 8px;
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          animation: slideIn 0.3s ease;
          min-width: 300px;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .toast-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .toast-success .toast-icon { background: #2a9d8f; }
        .toast-error .toast-icon { background: #e63946; }
        .toast-info .toast-icon { background: #1d3557; }
        .toast-message {
          flex: 1;
          font-size: 14px;
          color: #1a1a2e;
        }
        .toast-close {
          background: none;
          border: none;
          font-size: 20px;
          color: #8b8ba7;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }
        .toast-close:hover {
          color: #1a1a2e;
        }
        @media (max-width: 480px) {
          .toast-container {
            left: 16px;
            right: 16px;
            bottom: 16px;
          }
          .toast {
            min-width: auto;
          }
        }
      `})]})}function Vt(){const e=j.useContext(hd);if(!e)throw new Error("useToast must be used within ToastProvider");return e}/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gd=(...e)=>e.filter((t,r,n)=>!!t&&n.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:o,...s},c)=>j.createElement("svg",{ref:c,...xh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:gd("lucide",i),...s},[...o.map(([u,g])=>j.createElement(u,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(e,t)=>{const r=j.forwardRef(({className:n,...i},a)=>j.createElement(vh,{ref:a,iconNode:t,className:gd(`lucide-${gh(e)}`,n),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=M("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=M("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=M("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=M("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=M("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=M("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=M("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=M("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=M("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=M("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=M("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=M("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=M("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=M("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=M("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=M("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=M("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=M("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=M("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=M("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=M("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=M("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=M("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=M("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=M("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=M("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=M("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=M("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=M("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=M("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=M("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=M("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=M("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=M("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ih(){const{user:e,logout:t}=kr(),{totalItems:r}=wn(),[n,i]=j.useState(!1),[a,o]=j.useState(""),s=St(),c=u=>{u.preventDefault(),a.trim()&&(s(`/catalog?search=${encodeURIComponent(a.trim())}`),o(""))};return l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"header-inner container",children:[l.jsxs(z,{to:"/",className:"logo",children:[l.jsx("div",{className:"logo-icon",children:"CH"}),l.jsx("span",{children:"ChinaHub"})]}),l.jsxs("nav",{className:"nav-desktop",children:[l.jsx(z,{to:"/catalog",className:"nav-link",children:"Каталог"}),l.jsx(z,{to:"/catalog?category=electronics",className:"nav-link",children:"Электроника"}),l.jsx(z,{to:"/catalog?category=clothing",className:"nav-link",children:"Одежда"}),(e==null?void 0:e.role)==="seller"&&l.jsx(z,{to:"/seller",className:"nav-link",children:"Кабинет продавца"})]}),l.jsxs("form",{className:"search-form",onSubmit:c,children:[l.jsx(Rh,{size:18,className:"search-icon"}),l.jsx("input",{type:"text",placeholder:"Поиск товаров...",value:a,onChange:u=>o(u.target.value),className:"search-input"})]}),l.jsxs("div",{className:"header-actions",children:[l.jsx(z,{to:"/catalog",className:"action-btn",title:"Избранное",children:l.jsx(yo,{size:22})}),l.jsxs(z,{to:"/cart",className:"action-btn cart-btn",children:[l.jsx(cr,{size:22}),r>0&&l.jsx("span",{className:"cart-badge",children:r})]}),e?l.jsxs("div",{className:"user-menu",children:[l.jsxs("button",{className:"user-btn",children:[l.jsx(Ni,{size:20}),l.jsx("span",{children:e.name})]}),l.jsxs("div",{className:"user-dropdown",children:[l.jsx(z,{to:"/profile",className:"dropdown-item",children:"Профиль"}),l.jsx(z,{to:"/orders",className:"dropdown-item",children:"Мои заказы"}),e.role==="seller"&&l.jsx(z,{to:"/seller",className:"dropdown-item",children:"Кабинет продавца"}),l.jsx("button",{onClick:t,className:"dropdown-item logout",children:"Выйти"})]})]}):l.jsxs("div",{className:"auth-btns",children:[l.jsx(z,{to:"/login",className:"btn btn-ghost",children:"Войти"}),l.jsx(z,{to:"/register",className:"btn btn-primary",children:"Регистрация"})]}),l.jsx("button",{className:"burger-btn",onClick:()=>i(!n),"aria-label":"Меню",children:n?l.jsx(wa,{size:24}):l.jsx(Eh,{size:24})})]})]}),l.jsxs("div",{className:`mobile-menu ${n?"active":""}`,children:[l.jsxs("div",{className:"mobile-menu-panel",children:[l.jsxs("div",{className:"mobile-menu-header",children:[l.jsxs(z,{to:"/",className:"logo",onClick:()=>i(!1),children:[l.jsx("div",{className:"logo-icon",children:"CH"}),l.jsx("span",{children:"ChinaHub"})]}),l.jsx("button",{className:"close-btn",onClick:()=>i(!1),children:l.jsx(wa,{size:24})})]}),l.jsxs("nav",{className:"mobile-nav",children:[l.jsx(z,{to:"/catalog",onClick:()=>i(!1),children:"Каталог"}),l.jsx(z,{to:"/catalog?category=electronics",onClick:()=>i(!1),children:"Электроника"}),l.jsx(z,{to:"/catalog?category=clothing",onClick:()=>i(!1),children:"Одежда"}),l.jsx(z,{to:"/catalog?category=cosmetics",onClick:()=>i(!1),children:"Косметика"}),l.jsx(z,{to:"/catalog?category=home",onClick:()=>i(!1),children:"Для дома"}),(e==null?void 0:e.role)==="seller"&&l.jsx(z,{to:"/seller",onClick:()=>i(!1),children:"Кабинет продавца"})]}),l.jsx("div",{className:"mobile-divider"}),l.jsx("div",{className:"mobile-actions",children:e?l.jsxs(l.Fragment,{children:[l.jsxs(z,{to:"/profile",className:"mobile-nav-link",onClick:()=>i(!1),children:[l.jsx(Ni,{size:20})," Профиль"]}),l.jsxs(z,{to:"/orders",className:"mobile-nav-link",onClick:()=>i(!1),children:[l.jsx(cr,{size:20})," Мои заказы"]}),l.jsx("button",{onClick:()=>{t(),i(!1)},className:"mobile-nav-link logout",children:"Выйти"})]}):l.jsxs(l.Fragment,{children:[l.jsx(z,{to:"/login",className:"btn btn-secondary",onClick:()=>i(!1),children:"Войти"}),l.jsx(z,{to:"/register",className:"btn btn-primary",onClick:()=>i(!1),children:"Регистрация"})]})})]}),l.jsx("div",{className:"mobile-menu-backdrop",onClick:()=>i(!1)})]}),l.jsx("style",{children:`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--bg-white);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }
        .header-inner {
          height: 72px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 700;
          color: var(--primary);
          flex-shrink: 0;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav-link {
          font-weight: 500;
          color: var(--text-medium);
          transition: color 0.2s;
          position: relative;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        .search-form {
          flex: 1;
          max-width: 400px;
          position: relative;
          margin: 0 auto;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-light);
        }
        .search-input {
          width: 100%;
          padding: 10px 16px 10px 44px;
          border: 2px solid var(--border);
          border-radius: 100px;
          font-size: 14px;
          transition: all 0.2s;
          background: var(--bg-light);
        }
        .search-input:focus {
          outline: none;
          border-color: var(--primary);
          background: white;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .action-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-medium);
          transition: all 0.2s;
          position: relative;
        }
        .action-btn:hover {
          background: var(--bg-light);
          color: var(--primary);
        }
        .cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          min-width: 18px;
          height: 18px;
          background: var(--primary);
          color: white;
          font-size: 11px;
          font-weight: 600;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
        }
        .user-menu {
          position: relative;
        }
        .user-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--bg-light);
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
          transition: all 0.2s;
        }
        .user-btn:hover {
          background: var(--border);
        }
        .user-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          min-width: 180px;
          padding: 8px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: all 0.2s;
        }
        .user-menu:hover .user-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-item {
          display: block;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          color: var(--text-medium);
          transition: all 0.2s;
          width: 100%;
          text-align: left;
        }
        .dropdown-item:hover {
          background: var(--bg-light);
          color: var(--text-dark);
        }
        .dropdown-item.logout {
          color: var(--primary);
        }
        .auth-btns {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn {
          padding: 10px 20px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 14px;
          transition: all 0.25s;
          white-space: nowrap;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        .btn-ghost {
          background: transparent;
          color: var(--text-medium);
        }
        .btn-ghost:hover {
          color: var(--primary);
          background: rgba(230, 57, 70, 0.05);
        }
        .btn-secondary {
          background: transparent;
          color: var(--secondary);
          border: 2px solid var(--secondary);
        }
        .btn-secondary:hover {
          background: var(--secondary);
          color: white;
        }
        .burger-btn {
          display: none;
          padding: 8px;
          background: none;
          color: var(--text-dark);
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 992px) {
          .nav-desktop {
            display: none;
          }
          .search-form {
            display: none;
          }
          .auth-btns {
            display: none;
          }
          .burger-btn {
            display: flex;
          }
          .mobile-menu {
            display: block;
          }
          .mobile-menu:not(.active) {
            opacity: 0;
            visibility: hidden;
          }
          .mobile-menu.active {
            opacity: 1;
            visibility: visible;
          }
          .mobile-menu-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 200;
          }
          .mobile-menu-panel {
            position: fixed;
            top: 0;
            right: 0;
            width: 320px;
            max-width: 85vw;
            height: 100%;
            background: var(--bg-white);
            padding: 20px;
            z-index: 201;
            overflow-y: auto;
            transform: translateX(100%);
            transition: transform 0.3s;
          }
          .mobile-menu.active .mobile-menu-panel {
            transform: translateX(0);
          }
          .mobile-menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;
          }
          .close-btn {
            padding: 8px;
            background: var(--bg-light);
            border-radius: 50%;
            color: var(--text-medium);
          }
          .mobile-nav {
            display: flex;
            flex-direction: column;
          }
          .mobile-nav a {
            padding: 14px 0;
            font-size: 16px;
            font-weight: 500;
            color: var(--text-dark);
            border-bottom: 1px solid var(--border);
          }
          .mobile-divider {
            height: 1px;
            background: var(--border);
            margin: 24px 0;
          }
          .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .mobile-actions .btn {
            width: 100%;
            text-align: center;
          }
          .mobile-nav-link {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 0;
            font-size: 15px;
            color: var(--text-medium);
            border-bottom: 1px solid var(--border);
            background: none;
            width: 100%;
            text-align: left;
          }
          .mobile-nav-link.logout {
            color: var(--primary);
            border: none;
          }
        }
      `})]})}function Oh(){return l.jsxs("footer",{className:"footer",children:[l.jsxs("div",{className:"footer-inner container",children:[l.jsxs("div",{className:"footer-grid",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsxs(z,{to:"/",className:"logo",children:[l.jsx("div",{className:"logo-icon",children:"CH"}),l.jsx("span",{children:"ChinaHub"})]}),l.jsx("p",{children:"Маркетплейс проверенных товаров из Китая. Прямые поставки от надёжных продавцов с гарантией качества и быстрой доставкой."})]}),l.jsxs("div",{className:"footer-section",children:[l.jsx("h4",{children:"Покупателям"}),l.jsxs("nav",{className:"footer-links",children:[l.jsx(z,{to:"/catalog",children:"Каталог"}),l.jsx(z,{to:"/cart",children:"Корзина"}),l.jsx(z,{to:"/orders",children:"Мои заказы"}),l.jsx(z,{to:"/register",children:"Регистрация"})]})]}),l.jsxs("div",{className:"footer-section",children:[l.jsx("h4",{children:"Продавцам"}),l.jsxs("nav",{className:"footer-links",children:[l.jsx(z,{to:"/register",children:"Стать продавцом"}),l.jsx(z,{to:"/seller",children:"Кабинет продавца"}),l.jsx(z,{to:"/seller/add-product",children:"Добавить товар"})]})]}),l.jsxs("div",{className:"footer-section",children:[l.jsx("h4",{children:"Помощь"}),l.jsxs("nav",{className:"footer-links",children:[l.jsx("a",{href:"#",children:"Как заказать"}),l.jsx("a",{href:"#",children:"Доставка и оплата"}),l.jsx("a",{href:"#",children:"Возврат товара"}),l.jsx("a",{href:"#",children:"Контакты"})]})]})]}),l.jsxs("div",{className:"footer-bottom",children:[l.jsx("p",{children:"© 2026 ChinaHub. Все права защищены."}),l.jsxs("div",{className:"footer-socials",children:[l.jsx("a",{href:"#","aria-label":"Telegram",children:"📱"}),l.jsx("a",{href:"#","aria-label":"VK",children:"💬"}),l.jsx("a",{href:"#","aria-label":"WhatsApp",children:"💬"})]})]})]}),l.jsx("style",{children:`
        .footer {
          background: var(--secondary);
          color: white;
          padding: 60px 0 30px;
          margin-top: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 700;
          color: white;
          margin-bottom: 16px;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
        }
        .footer-brand p {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          line-height: 1.7;
        }
        .footer-section h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--accent);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-bottom p {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .footer-socials a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s;
        }
        .footer-socials a:hover {
          background: var(--primary);
          transform: translateY(-2px);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 24px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `})]})}function Dh(){const e=j.useRef(null),[t,r]=j.useState(!1),[n,i]=j.useState(!1);j.useEffect(()=>{const o=e.current;if(!o)return;o.volume=.08,o.loop=!0;const s=async()=>{try{await o.play(),i(!0)}catch{console.log("Autoplay blocked, waiting for interaction")}},c=()=>{!n&&o.paused&&o.play().then(()=>{i(!0)}).catch(console.log)};return s(),document.addEventListener("click",c,{once:!0}),document.addEventListener("touchstart",c,{once:!0}),()=>{document.removeEventListener("click",c),document.removeEventListener("touchstart",c)}},[n]);const a=()=>{const o=e.current;o&&(t?(o.volume=.08,o.play().catch(console.log),r(!1)):(o.pause(),r(!0)))};return l.jsxs(l.Fragment,{children:[l.jsx("audio",{ref:e,src:"/background-music.mp3",preload:"auto"}),l.jsx("button",{className:"music-control-btn",onClick:a,title:t?"Включить музыку":"Выключить музыку",children:t?l.jsx(Mh,{size:18}):l.jsx(Th,{size:18})}),l.jsx("style",{children:`
        .music-control-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(230, 57, 70, 0.35);
          z-index: 9999;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          animation: pulse-subtle 3s infinite;
        }
        .music-control-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(230, 57, 70, 0.45);
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        
        @media (max-width: 480px) {
          .music-control-btn {
            bottom: 20px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
        }
      `})]})}function Uh(){return l.jsxs("div",{className:"layout",children:[l.jsx(Ih,{}),l.jsx("main",{className:"main",children:l.jsx(qm,{})}),l.jsx(Oh,{}),l.jsx(Dh,{}),l.jsx("style",{children:`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .main {
          flex: 1;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
      `})]})}const pn=[{id:"electronics",name:"Электроника",icon:"📱",count:154200,color:"#fff3e0"},{id:"appliances",name:"Бытовая техника",icon:"🏠",count:89200,color:"#e3f2fd"},{id:"clothing",name:"Одежда и обувь",icon:"👗",count:286e3,color:"#fce4ec"},{id:"kids",name:"Детские товары",icon:"🧸",count:67300,color:"#f3e5f5"},{id:"cosmetics",name:"Косметика и гигиена",icon:"💄",count:44800,color:"#fce4ec"},{id:"pets",name:"Зоотовары",icon:"🐾",count:32100,color:"#e8f5e9"},{id:"autoparts",name:"Автозапчасти",icon:"🚗",count:187500,color:"#e0f7fa"},{id:"construction",name:"Строительство и ремонт",icon:"🔧",count:95600,color:"#fff8e1"},{id:"food",name:"Продукты",icon:"🍎",count:28400,color:"#e8f5e9"},{id:"homegarden",name:"Дом и сад",icon:"🌿",count:72300,color:"#c8e6c9"},{id:"sports",name:"Спорт и отдых",icon:"⚽",count:41500,color:"#bbdefb"},{id:"health",name:"Красота и здоровье",icon:"💊",count:53700,color:"#f8bbd9"}],Be=[{id:"prod_1",sellerId:"seller_1",sellerName:"TechGadgets",title:"Беспроводные наушники с шумоподавлением HiFi Sound Pro",description:"Премиальные беспроводные наушники с активным шумоподавлением (ANC). До 30 часов воспроизведения, быстрая зарядка USB-C, мультиточечное подключение к двум устройствам одновременно.",price:3490,oldPrice:4650,images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"],category:"electronics",characteristics:{Бренд:"SoundMaster",Тип:"Накладные",Шумоподавление:"Активное (ANC)",Автономность:"30 часов",Интерфейс:"Bluetooth 5.2",Вес:"250 г"},stock:45,rating:4.8,reviewsCount:2847,salesCount:1234,createdAt:"2024-01-15",badge:"sale"},{id:"prod_2",sellerId:"seller_2",sellerName:"ModaChina",title:"Стильное худи с капюшоном, хлопок 100%",description:"Уютное худи из премиального хлопка. Свободный крой, удобный капюшон, вместительные карманы. Идеально для повседневного образа.",price:1290,images:["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600"],category:"clothing",characteristics:{Материал:"Хлопок 100%",Размеры:"S, M, L, XL",Цвет:"Чёрный, серый, бежевый",Уход:"Деликатная стирка"},stock:120,rating:4.5,reviewsCount:1563,salesCount:3892,createdAt:"2024-02-20",badge:"hit"},{id:"prod_3",sellerId:"seller_3",sellerName:"GlowBeauty",title:"Профессиональный набор кистей для макияжа, 12 шт",description:"Комплект из 12 профессиональных кистей для визажиста. Синтетический ворс, эргономичные ручки, бархатный чехол в комплекте.",price:890,oldPrice:1250,images:["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600"],category:"cosmetics",characteristics:{Количество:"12 кистей","Материал ворса":"Синтетика",Чехол:"Бархатный",Упаковка:"Подарочная"},stock:85,rating:4.9,reviewsCount:4102,salesCount:5621,createdAt:"2024-01-08"},{id:"prod_4",sellerId:"seller_4",sellerName:"SmartHome",title:"Умная LED-лампа с управлением по WiFi и голосом",description:"Смарт-лампа с RGB-подсветкой, управление через приложение Tuya/Smart Life. Поддержка Alexa и Google Assistant. 16 миллионов цветов.",price:1750,oldPrice:2400,images:["https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600"],category:"electronics",characteristics:{Мощность:"9W (эквивалент 60W)",Цоколь:"E27",Управление:"WiFi 2.4GHz","Голосовые ассистенты":"Alexa, Google","Срок службы":"25000 часов"},stock:67,rating:4.4,reviewsCount:892,salesCount:567,createdAt:"2024-03-01",badge:"new"},{id:"prod_5",sellerId:"seller_2",sellerName:"ModaChina",title:"Кроссовки спортивные мужские Ultraboost Air",description:"Лёгкие и комфортные кроссовки для бега и повседневной носки. Амортизирующая подошва, дышащий материал верха.",price:2190,images:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"],category:"sports",characteristics:{Размеры:"39-46",Материал:"Сетка + синтетика",Подошва:"EVA + резина",Сезон:"Весна-лето"},stock:34,rating:4.6,reviewsCount:723,salesCount:445,createdAt:"2024-02-15"},{id:"prod_6",sellerId:"seller_5",sellerName:"HomeStyle",title:"Набор постельного белья евро, 6 предметов, сатин",description:"Роскошный комплект постельного белья из 100% сатина. Включает: пододеяльник, простыню, 4 наволочки. Сертификат OEKO-TEX.",price:3290,oldPrice:4590,images:["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600"],category:"home",characteristics:{Размер:"Евро",Ткань:"Сатин (100% хлопок)",Комплектация:"6 предметов",Уход:"60°C"},stock:28,rating:4.7,reviewsCount:1156,salesCount:892,createdAt:"2024-01-22",badge:"sale"},{id:"prod_7",sellerId:"seller_1",sellerName:"TechGadgets",title:"Умные часы fitness-трекер с пульсоксиметром",description:"Фитнес-браслет с цветным AMOLED-дисплеем. Мониторинг пульса, SpO2, сна, шагов. Водозащита 5ATM.",price:1890,images:["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"],category:"electronics",characteristics:{Дисплей:'AMOLED 0.96"',Батарея:"7-10 дней",Водозащита:"5ATM",Датчики:"Пульс, SpO2, акселерометр"},stock:92,rating:4.3,reviewsCount:2341,salesCount:1567,createdAt:"2024-02-28"},{id:"prod_8",sellerId:"seller_6",sellerName:"ToolMaster",title:"Набор инструментов 82 предмета, кейс + чемодан",description:"Профессиональный набор инструментов для дома и гаража. Хромованадиевая сталь, эргономичные рукоятки, полный набор головок и отвёрток.",price:4590,oldPrice:5990,images:["https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600"],category:"tools",characteristics:{"Количество предметов":"82",Материал:"CrV сталь",Рукоятки:"Двухкомпонентные",Упаковка:"Кейс + чемодан"},stock:15,rating:4.8,reviewsCount:456,salesCount:234,createdAt:"2024-01-30",badge:"hit"},{id:"prod_9",sellerId:"seller_3",sellerName:"GlowBeauty",title:"Сыворотка для лица с витамином C 30ml",description:"Интенсивная сыворотка с 20% витамином C для осветления пигментации и выравнивания тона кожи. Антиоксидантная защита.",price:690,images:["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600"],category:"cosmetics",characteristics:{Объём:"30 мл","Концентрация витамина C":"20%","Тип кожи":"Все типы",SPF:"Нет"},stock:156,rating:4.6,reviewsCount:1823,salesCount:2341,createdAt:"2024-03-05",badge:"new"},{id:"prod_10",sellerId:"seller_4",sellerName:"SmartHome",title:"Робот-пылесос с лидаром и влажной уборкой",description:"Умный робот-пылесос с LDS-лидаром для точной навигации. Сухая и влажная уборка, управление через приложение, голосовые оповещения.",price:8990,oldPrice:11990,images:["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"],category:"electronics",characteristics:{"Тип уборки":"Сухая + влажная",Навигация:"LDS-лидар",Мощность:"3000 Pa",Батарея:"5200 mAh",Площадь:"До 200 м²"},stock:12,rating:4.7,reviewsCount:567,salesCount:189,createdAt:"2024-02-10",badge:"sale"},{id:"prod_11",sellerId:"seller_2",sellerName:"ModaChina",title:"Сумка женская кросс-боди, искусственная кожа",description:"Элегантная сумка-кросс через плечо из качественной искусственной кожи. Регулируемый ремень, несколько отделений.",price:1590,images:["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600"],category:"clothing",characteristics:{Материал:"Экокожа",Размер:"22×16×8 см",Отделения:"3 кармана",Ремень:"Регулируемый 80-140 см"},stock:67,rating:4.4,reviewsCount:934,salesCount:678,createdAt:"2024-02-25"},{id:"prod_12",sellerId:"seller_5",sellerName:"HomeStyle",title:"Кофеварка гейзерная алюминиевая, 6 чашек",description:"Классическая гейзерная кофеварка из пищевого алюминия. Приготовление 6 чашек итальянского кофе за 5 минут.",price:1290,images:["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"],category:"home",characteristics:{Объём:"6 чашек (300 мл)",Материал:"Алюминий",Нагревание:"Плита / газ",Цвет:"Чёрный, серебро"},stock:43,rating:4.5,reviewsCount:1234,salesCount:876,createdAt:"2024-01-18"}];function $h(e){return Be.find(t=>t.id===e)}function Ah({category:e}){return l.jsxs(z,{to:`/catalog?category=${e.id}`,className:"category-card",children:[l.jsx("div",{className:"category-icon",style:{background:e.color},children:e.icon}),l.jsx("div",{className:"category-name",children:e.name}),l.jsxs("div",{className:"category-count",children:[e.count.toLocaleString("ru-RU")," товаров"]}),l.jsx("style",{children:`
        .category-card {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 24px 16px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s;
          display: block;
        }
        .category-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .category-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }
        .category-name {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }
        .category-count {
          font-size: 13px;
          color: var(--text-light);
        }
        @media (max-width: 768px) {
          .category-card {
            padding: 16px 12px;
          }
          .category-icon {
            width: 48px;
            height: 48px;
            font-size: 22px;
          }
          .category-name {
            font-size: 13px;
          }
          .category-count {
            font-size: 11px;
          }
        }
      `})]})}function Nd({product:e}){const{addItem:t,isInCart:r}=wn(),{showToast:n}=Vt(),i=r(e.id),a=s=>{s.preventDefault(),s.stopPropagation(),e.stock>0&&(t(e,1),n("success","Товар добавлен в корзину"))},o={sale:`-${Math.round((1-e.price/(e.oldPrice||e.price))*100)}%`,hit:"Хит",new:"Новинка"};return l.jsxs(z,{to:`/product/${e.id}`,className:"product-card",children:[l.jsxs("div",{className:"product-image",children:[l.jsx("img",{src:e.images[0],alt:e.title}),e.badge&&l.jsx("span",{className:`product-badge badge-${e.badge}`,children:o[e.badge]}),l.jsx("button",{className:`wishlist-btn ${i?"in-cart":""}`,onClick:a,title:i?"В корзине":"В избранное",children:i?l.jsx(jt,{size:18}):l.jsx(yo,{size:18})})]}),l.jsxs("div",{className:"product-info",children:[l.jsxs("div",{className:"product-seller",children:[l.jsx("span",{className:"seller-avatar",children:e.sellerName[0]}),l.jsx("span",{className:"seller-name",children:e.sellerName})]}),l.jsx("h3",{className:"product-title",children:e.title}),l.jsxs("div",{className:"product-rating",children:[l.jsx("span",{className:"rating-stars",children:"★".repeat(Math.round(e.rating))}),l.jsxs("span",{className:"rating-count",children:["(",e.reviewsCount.toLocaleString(),")"]})]}),l.jsxs("div",{className:"product-price",children:[l.jsxs("span",{className:"price-current",children:[e.price.toLocaleString("ru-RU")," ₽"]}),e.oldPrice&&l.jsxs("span",{className:"price-old",children:[e.oldPrice.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs("div",{className:"product-footer",children:[l.jsxs("span",{className:"product-sales",children:[e.salesCount.toLocaleString()," sold"]}),l.jsx("span",{className:"product-delivery",children:"5-7 дней"})]})]}),l.jsx("style",{children:`
        .product-card {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.3s;
          display: block;
          width: 100%;
          max-width: 100%;
        }
        .product-card * {
          max-width: 100%;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .product-image {
          position: relative;
          aspect-ratio: 1;
          background: var(--bg-light);
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: white;
        }
        .badge-sale {
          background: var(--primary);
        }
        .badge-hit {
          background: var(--accent);
        }
        .badge-new {
          background: var(--success);
        }
        .wishlist-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-light);
          transition: all 0.2s;
          border: none;
        }
        .wishlist-btn:hover {
          color: var(--primary);
          transform: scale(1.1);
        }
        .wishlist-btn.in-cart {
          background: var(--success);
          color: white;
        }
        .product-info {
          padding: 16px;
        }
        .product-seller {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .seller-avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--secondary);
          color: white;
          font-size: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .seller-name {
          font-size: 12px;
          color: var(--text-light);
        }
        .product-title {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 8px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 14px;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }
        .rating-stars {
          color: var(--accent);
          font-size: 14px;
        }
        .rating-count {
          font-size: 13px;
          color: var(--text-light);
        }
        .product-price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 12px;
        }
        .price-current {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
        }
        .price-old {
          font-size: 14px;
          color: var(--text-light);
          text-decoration: line-through;
        }
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid var(--border);
          font-size: 13px;
        }
        .product-sales {
          color: var(--text-light);
        }
        .product-delivery {
          color: var(--success);
          font-weight: 500;
        }
      `})]})}function Fh(){const e=Be.slice(0,4);return l.jsxs("div",{className:"home-page",children:[l.jsx("section",{className:"hero",children:l.jsxs("div",{className:"hero-inner container",children:[l.jsxs("div",{className:"hero-content",children:[l.jsx("div",{className:"hero-badge",children:"ChinaHub"}),l.jsxs("h1",{children:["Маркетплейс проверенных товаров из ",l.jsx("span",{children:"Китая"})]}),l.jsx("p",{children:"Прямые поставки от надёжных продавцов. Без посредников — выгодные цены для покупателей и широкая аудитория для продавцов."}),l.jsxs("div",{className:"hero-buttons",children:[l.jsx(z,{to:"/catalog",className:"btn-hero-primary",children:"Начать покупки"}),l.jsx(z,{to:"/register",className:"btn-hero-secondary",children:"Стать продавцом"})]}),l.jsxs("div",{className:"hero-stats",children:[l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"stat-number",children:"2.5M+"}),l.jsx("div",{className:"stat-label",children:"товаров в каталоге"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"stat-number",children:"15 000+"}),l.jsx("div",{className:"stat-label",children:"активных продавцов"})]}),l.jsxs("div",{className:"hero-stat",children:[l.jsx("div",{className:"stat-number",children:"98%"}),l.jsx("div",{className:"stat-label",children:"довольных покупателей"})]})]})]}),l.jsxs("div",{className:"hero-visual",children:[l.jsx("div",{className:"hero-image",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",alt:"ChinaHub"})}),l.jsxs("div",{className:"floating-card card-1",children:[l.jsx("div",{className:"floating-icon success",children:l.jsx(jt,{size:20})}),l.jsxs("div",{className:"floating-text",children:[l.jsx("strong",{children:"Заказ доставлен"}),"Электроника, 5 дней"]})]})]})]})}),l.jsx("section",{className:"categories",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h2",{className:"section-title",children:"Категории товаров"}),l.jsx("p",{className:"section-subtitle",children:"Выберите категорию и найдите нужный товар из тысяч предложений"})]}),l.jsx("div",{className:"categories-grid",children:pn.map(t=>l.jsx(Ah,{category:t},t.id))})]})}),l.jsx("section",{className:"products",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"products-header",children:[l.jsx("h2",{className:"section-title",children:"Популярные товары"}),l.jsx(z,{to:"/catalog",className:"view-all",children:"Смотреть все →"})]}),l.jsx("div",{className:"products-grid",children:e.map(t=>l.jsx(Nd,{product:t},t.id))})]})}),l.jsx("section",{className:"seller-section",children:l.jsxs("div",{className:"seller-inner container",children:[l.jsxs("div",{className:"seller-content",children:[l.jsxs("h2",{children:["Станьте продавцом на ",l.jsx("span",{children:"ChinaHub"})]}),l.jsx("p",{children:"Получите доступ к миллионам покупателей. Регистрация бесплатная, комиссия только с успешных сделок."}),l.jsxs("div",{className:"seller-benefits",children:[l.jsxs("div",{className:"seller-benefit",children:[l.jsx("div",{className:"benefit-icon",children:"📊"}),l.jsxs("div",{className:"benefit-text",children:[l.jsx("h4",{children:"Аналитика продаж"}),l.jsx("p",{children:"Отслеживайте статистику и поведение покупателей в реальном времени"})]})]}),l.jsxs("div",{className:"seller-benefit",children:[l.jsx("div",{className:"benefit-icon",children:"🚚"}),l.jsxs("div",{className:"benefit-text",children:[l.jsx("h4",{children:"Интеграция доставки"}),l.jsx("p",{children:"Автоматическая обработка заказов и отслеживание посылок"})]})]}),l.jsxs("div",{className:"seller-benefit",children:[l.jsx("div",{className:"benefit-icon",children:"💳"}),l.jsxs("div",{className:"benefit-text",children:[l.jsx("h4",{children:"Быстрые выплаты"}),l.jsx("p",{children:"Получите оплату на свой счёт в течение 3 рабочих дней"})]})]})]}),l.jsx(z,{to:"/register",className:"btn btn-primary",children:"Узнать больше"})]}),l.jsx("div",{className:"seller-image",children:l.jsx("img",{src:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",alt:"Seller"})})]})}),l.jsx("section",{className:"commission",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h2",{className:"section-title",children:"Прозрачные комиссии"}),l.jsx("p",{className:"section-subtitle",children:"Никаких скрытых платежей. Платите только за успешные сделки."})]}),l.jsxs("div",{className:"commission-cards",children:[l.jsxs("div",{className:"commission-card primary",children:[l.jsx("div",{className:"commission-icon",children:l.jsx(bd,{size:32})}),l.jsx("h3",{children:"Комиссия продавца"}),l.jsx("div",{className:"percent",children:"5%"}),l.jsx("p",{children:"Взимается с суммы продажи. Чем больше объём — тем ниже процент."})]}),l.jsxs("div",{className:"commission-card success",children:[l.jsx("div",{className:"commission-icon",children:l.jsx(va,{size:32})}),l.jsx("h3",{children:"Комиссия покупателя"}),l.jsx("div",{className:"percent",children:"2%"}),l.jsx("p",{children:"Защита покупателя и страхование доставки. Включено в стоимость."})]}),l.jsxs("div",{className:"commission-card secondary",children:[l.jsx("div",{className:"commission-icon",children:l.jsx(ga,{size:32})}),l.jsx("h3",{children:"Без скрытых платежей"}),l.jsx("div",{className:"percent",children:"0 ₽"}),l.jsx("p",{children:"Регистрация, размещение товаров и базовая аналитика — бесплатно."})]})]})]})}),l.jsx("section",{className:"trust",children:l.jsxs("div",{className:"container",children:[l.jsx("div",{className:"section-header",children:l.jsx("h2",{className:"section-title",children:"Почему выбирают нас"})}),l.jsxs("div",{className:"trust-grid",children:[l.jsxs("div",{className:"trust-item",children:[l.jsx("div",{className:"trust-icon",children:l.jsx(jt,{size:24})}),l.jsx("h4",{children:"Проверенные продавцы"}),l.jsx("p",{children:"Верификация каждого магазина перед началом работы"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("div",{className:"trust-icon",children:l.jsx(va,{size:24})}),l.jsx("h4",{children:"Безопасные платежи"}),l.jsx("p",{children:"Деньги хранятся на escrow до подтверждения получения"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("div",{className:"trust-icon",children:"↩️"}),l.jsx("h4",{children:"Легкий возврат"}),l.jsx("p",{children:"14 дней на возврат товара без лишних вопросов"})]}),l.jsxs("div",{className:"trust-item",children:[l.jsx("div",{className:"trust-icon",children:"💬"}),l.jsx("h4",{children:"Поддержка 24/7"}),l.jsx("p",{children:"Отвечаем в течение часа в любое время суток"})]})]})]})}),l.jsx("style",{children:`
        /* Hero */
        .hero {
          background: linear-gradient(135deg, #1d3557 0%, #0d1b2a 100%);
          color: white;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(244, 162, 97, 0.15) 0%, transparent 70%);
          border-radius: 50%;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          width: 100%;
          max-width: 100%;
        }
        .hero-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .hero-content h1 {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 24px;
        }
        .hero-content h1 span {
          color: var(--accent);
        }
        .hero-content p {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin-bottom: 32px;
          max-width: 480px;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }
        .btn-hero-primary {
          background: var(--primary);
          color: white;
          padding: 16px 32px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 16px;
          transition: all 0.25s;
        }
        .btn-hero-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(230, 57, 70, 0.4);
        }
        .btn-hero-secondary {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          color: white;
          padding: 16px 32px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.25s;
        }
        .btn-hero-secondary:hover {
          background: rgba(255,255,255,0.2);
        }
        .hero-stats {
          display: flex;
          gap: 40px;
        }
        .hero-stat {
          text-align: left;
        }
        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: var(--accent);
        }
        .stat-label {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          margin-top: 4px;
        }
        .hero-visual {
          position: relative;
        }
        .hero-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .hero-image img {
          width: 100%;
          display: block;
        }
        .floating-card {
          position: absolute;
          background: white;
          border-radius: var(--radius-md);
          padding: 16px;
          box-shadow: var(--shadow-lg);
          color: var(--text-dark);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .card-1 {
          bottom: 20%;
          left: -10%;
        }
        .floating-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .floating-icon.success {
          background: #e6f4ea;
          color: var(--success);
        }
        .floating-text {
          font-size: 13px;
        }
        .floating-text strong {
          display: block;
          font-size: 15px;
          margin-bottom: 2px;
        }

        /* Categories */
        .categories {
          padding: 60px 0;
          background: var(--bg-light);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 12px;
        }
        .section-subtitle {
          font-size: 17px;
          color: var(--text-medium);
          max-width: 560px;
          margin: 0 auto;
        }
        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 16px;
          width: 100%;
          max-width: 100%;
        }

        /* Products */
        .products {
          padding: 80px 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .products-header .section-title {
          margin-bottom: 0;
        }
        .view-all {
          color: var(--primary);
          font-weight: 600;
          transition: color 0.2s;
        }
        .view-all:hover {
          color: var(--primary-dark);
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 100%;
        }

        /* Seller Section */
        .seller-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .seller-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          max-width: 100%;
        }
        .seller-content h2 {
          font-size: 40px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .seller-content h2 span {
          color: var(--primary);
        }
        .seller-content p {
          font-size: 17px;
          color: var(--text-medium);
          margin-bottom: 32px;
        }
        .seller-benefits {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }
        .seller-benefit {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
          background: var(--bg-light);
        }
        .benefit-text h4 {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 4px;
        }
        .benefit-text p {
          font-size: 14px;
          color: var(--text-light);
          margin: 0;
        }
        .btn {
          display: inline-block;
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.25s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.3);
        }
        .seller-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .seller-image img {
          width: 100%;
          display: block;
        }

        /* Commission */
        .commission {
          padding: 80px 0;
          background: var(--bg-white);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .commission-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-top: 48px;
          width: 100%;
          max-width: 100%;
        }
        .commission-card {
          background: var(--bg-light);
          border-radius: var(--radius-lg);
          padding: 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .commission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }
        .commission-card.primary::before { background: var(--primary); }
        .commission-card.success::before { background: var(--success); }
        .commission-card.secondary::before { background: var(--secondary); }
        .commission-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin: 0 auto 24px;
        }
        .commission-card.primary .commission-icon {
          background: rgba(230, 57, 70, 0.1);
          color: var(--primary);
        }
        .commission-card.success .commission-icon {
          background: rgba(42, 157, 143, 0.1);
          color: var(--success);
        }
        .commission-card.secondary .commission-icon {
          background: rgba(29, 53, 87, 0.1);
          color: var(--secondary);
        }
        .commission-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .commission-card .percent {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .commission-card.primary .percent { color: var(--primary); }
        .commission-card.success .percent { color: var(--success); }
        .commission-card.secondary .percent { color: var(--secondary); }
        .commission-card p {
          color: var(--text-medium);
          font-size: 15px;
          line-height: 1.6;
        }

        /* Trust */
        .trust {
          padding: 60px 0;
          background: var(--bg-light);
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 100%;
        }
        .trust-item {
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 28px;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .trust-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          margin: 0 auto 16px;
        }
        .trust-item h4 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 6px;
        }
        .trust-item p {
          font-size: 14px;
          color: var(--text-light);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          .categories-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        }
        @media (max-width: 992px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content h1 {
            font-size: 36px;
          }
          .hero-content p {
            margin: 0 auto 32px;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-stats {
            justify-content: center;
          }
          .hero-visual {
            display: none;
          }
          .seller-inner {
            grid-template-columns: 1fr;
          }
          .commission-cards {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          .trust-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
        @media (max-width: 768px) {
          .hero {
            padding: 48px 0;
          }
          .hero-content h1 {
            font-size: 28px;
          }
          .hero-stats {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
          .hero-stat {
            text-align: center;
          }
          .stat-number {
            font-size: 28px;
          }
          .btn-hero-primary, .btn-hero-secondary {
            width: 100%;
            text-align: center;
          }
          .categories {
            padding: 40px 0;
          }
          .section-title {
            font-size: 28px;
          }
          .categories-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 12px;
          }
          .products {
            padding: 48px 0;
          }
          .products-header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .seller-section {
            padding: 48px 0;
          }
          .seller-content h2 {
            font-size: 28px;
          }
          .commission {
            padding: 48px 0;
          }
          .commission-card {
            padding: 28px 20px;
          }
          .commission-card .percent {
            font-size: 40px;
          }
          .trust {
            padding: 40px 0;
          }
          .trust-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Bh(){const[e,t]=sh(),[r,n]=j.useState(Be),[i,a]=j.useState("popular"),[o,s]=j.useState("grid"),[c,u]=j.useState(!1),g=e.get("category")||"",p=e.get("search")||"",x=parseInt(e.get("minPrice")||"0"),y=parseInt(e.get("maxPrice")||"999999");j.useEffect(()=>{let d=[...Be];if(g&&(d=d.filter(m=>m.category===g)),p){const m=p.toLowerCase();d=d.filter(w=>w.title.toLowerCase().includes(m)||w.description.toLowerCase().includes(m))}switch(d=d.filter(m=>m.price>=x&&m.price<=y),i){case"price-asc":d.sort((m,w)=>m.price-w.price);break;case"price-desc":d.sort((m,w)=>w.price-m.price);break;case"rating":d.sort((m,w)=>w.rating-m.rating);break;case"new":d.sort((m,w)=>new Date(w.createdAt).getTime()-new Date(m.createdAt).getTime());break;default:d.sort((m,w)=>w.salesCount-m.salesCount)}n(d)},[g,p,i,x,y]);const v=pn.find(d=>d.id===g),f=(d,m)=>{const w=new URLSearchParams(e);m?w.set(d,m):w.delete(d),t(w)},k=()=>{t({}),u(!1)},h=g||x>0||y<999999;return l.jsxs("div",{className:"catalog-page",children:[l.jsxs("nav",{className:"breadcrumbs",children:[l.jsx("a",{href:"/",children:"Главная"}),l.jsx("span",{children:"/"}),l.jsx("span",{children:(v==null?void 0:v.name)||"Каталог"})]}),l.jsxs("div",{className:"catalog-header",children:[l.jsx("h1",{children:p?`Поиск: "${p}"`:(v==null?void 0:v.name)||"Каталог"}),l.jsxs("p",{children:[r.length," товаров"]})]}),l.jsxs("div",{className:"catalog-toolbar",children:[l.jsxs("button",{className:`filter-toggle ${c?"active":""}`,onClick:()=>u(!c),children:[l.jsx(Nh,{size:16}),"Фильтры",h&&l.jsx("span",{className:"filter-badge"})]}),l.jsxs("div",{className:"sort-select",children:[l.jsxs("select",{value:i,onChange:d=>a(d.target.value),children:[l.jsx("option",{value:"popular",children:"По популярности"}),l.jsx("option",{value:"price-asc",children:"Дешевле"}),l.jsx("option",{value:"price-desc",children:"Дороже"}),l.jsx("option",{value:"rating",children:"По рейтингу"}),l.jsx("option",{value:"new",children:"Новые"})]}),l.jsx(wh,{size:16,className:"select-arrow"})]}),l.jsxs("div",{className:"view-toggle",children:[l.jsx("button",{className:o==="grid"?"active":"",onClick:()=>s("grid"),children:l.jsx(Sh,{size:18})}),l.jsx("button",{className:o==="list"?"active":"",onClick:()=>s("list"),children:l.jsx(zh,{size:18})})]})]}),h&&l.jsxs("div",{className:"active-filters",children:[g&&l.jsxs("button",{className:"filter-tag",onClick:()=>f("category",""),children:[v==null?void 0:v.icon," ",v==null?void 0:v.name,l.jsx(wa,{size:14})]}),l.jsx("button",{className:"filter-tag clear",onClick:k,children:"Сбросить всё"})]}),c&&l.jsxs("div",{className:"filters-panel",children:[l.jsxs("div",{className:"filter-group",children:[l.jsx("h3",{children:"Категории"}),l.jsxs("div",{className:"category-chips",children:[l.jsx("button",{className:`chip ${g?"":"active"}`,onClick:()=>f("category",""),children:"Все"}),pn.map(d=>l.jsxs("button",{className:`chip ${g===d.id?"active":""}`,onClick:()=>f("category",d.id),children:[d.icon," ",d.name]},d.id))]})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx("h3",{children:"Цена"}),l.jsxs("div",{className:"price-inputs",children:[l.jsx("input",{type:"number",placeholder:"От",value:x||"",onChange:d=>f("minPrice",d.target.value)}),l.jsx("span",{children:"—"}),l.jsx("input",{type:"number",placeholder:"До",value:y<999999?y:"",onChange:d=>f("maxPrice",d.target.value)})]})]})]}),r.length>0?l.jsx("div",{className:`products-${o}`,children:r.map(d=>l.jsx(Nd,{product:d},d.id))}):l.jsxs("div",{className:"empty-state",children:[l.jsx("p",{children:"Товары не найдены"}),l.jsx("button",{onClick:k,children:"Сбросить фильтры"})]}),l.jsx("style",{children:`
				.catalog-page {
					padding: 16px;
					width: 100%;
					max-width: 100%;
					overflow-x: hidden;
				}
				.catalog-page * {
					max-width: 100%;
					box-sizing: border-box;
				}
				.breadcrumbs {
					display: flex;
					align-items: center;
					gap: 8px;
					font-size: 13px;
					color: var(--text-light);
					margin-bottom: 12px;
					flex-wrap: wrap;
				}
				.breadcrumbs a {
					color: var(--text-light);
				}
				.catalog-header {
					margin-bottom: 16px;
				}
				.catalog-header h1 {
					font-size: 24px;
					font-weight: 700;
					color: var(--text-dark);
					margin-bottom: 4px;
				}
				.catalog-header p {
					font-size: 14px;
					color: var(--text-light);
				}
				.catalog-toolbar {
					display: flex;
					align-items: center;
					gap: 12px;
					margin-bottom: 16px;
					flex-wrap: wrap;
				}
				.filter-toggle {
					display: flex;
					align-items: center;
					gap: 6px;
					padding: 8px 14px;
					background: var(--bg-light);
					border: 1px solid var(--border);
					border-radius: 20px;
					font-size: 14px;
					font-weight: 500;
					color: var(--text-medium);
					position: relative;
				}
				.filter-toggle.active {
					background: rgba(230, 57, 70, 0.1);
					border-color: var(--primary);
					color: var(--primary);
				}
				.filter-badge {
					width: 8px;
					height: 8px;
					background: var(--primary);
					border-radius: 50%;
					position: absolute;
					top: 4px;
					right: 4px;
				}
				.sort-select {
					position: relative;
					flex: 1;
					min-width: 140px;
				}
				.sort-select select {
					width: 100%;
					padding: 8px 32px 8px 12px;
					border: 1px solid var(--border);
					border-radius: 20px;
					font-size: 14px;
					background: white;
					appearance: none;
					cursor: pointer;
				}
				.select-arrow {
					position: absolute;
					right: 12px;
					top: 50%;
					transform: translateY(-50%);
					color: var(--text-light);
					pointer-events: none;
				}
				.view-toggle {
					display: flex;
					gap: 4px;
					background: var(--bg-light);
					padding: 4px;
					border-radius: 20px;
				}
				.view-toggle button {
					padding: 8px 10px;
					background: transparent;
					border-radius: 16px;
					color: var(--text-light);
				}
				.view-toggle button.active {
					background: white;
					color: var(--primary);
					box-shadow: var(--shadow-sm);
				}
				.active-filters {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
					margin-bottom: 16px;
				}
				.filter-tag {
					display: flex;
					align-items: center;
					gap: 6px;
					padding: 6px 12px;
					background: rgba(230, 57, 70, 0.1);
					border: none;
					border-radius: 16px;
					font-size: 13px;
					color: var(--primary);
				}
				.filter-tag.clear {
					background: var(--bg-light);
					color: var(--text-medium);
				}
				.filters-panel {
					background: var(--bg-light);
					border-radius: 16px;
					padding: 16px;
					margin-bottom: 16px;
				}
				.filter-group {
					margin-bottom: 16px;
				}
				.filter-group:last-child {
					margin-bottom: 0;
				}
				.filter-group h3 {
					font-size: 14px;
					font-weight: 600;
					color: var(--text-dark);
					margin-bottom: 12px;
				}
				.category-chips {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
				}
				.chip {
					padding: 6px 12px;
					background: white;
					border: 1px solid var(--border);
					border-radius: 16px;
					font-size: 13px;
					color: var(--text-medium);
					white-space: nowrap;
				}
				.chip.active {
					background: var(--primary);
					border-color: var(--primary);
					color: white;
				}
				.price-inputs {
					display: flex;
					align-items: center;
					gap: 12px;
				}
				.price-inputs input {
					flex: 1;
					padding: 10px 12px;
					border: 1px solid var(--border);
					border-radius: 12px;
					font-size: 14px;
				}
				.price-inputs span {
					color: var(--text-light);
				}
				.products-grid {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 12px;
				}
				.products-list {
					display: flex;
					flex-direction: column;
					gap: 12px;
				}
				.empty-state {
					text-align: center;
					padding: 48px 20px;
					background: var(--bg-light);
					border-radius: 16px;
				}
				.empty-state p {
					font-size: 16px;
					color: var(--text-medium);
					margin-bottom: 16px;
				}
				.empty-state button {
					padding: 12px 24px;
					background: var(--primary);
					color: white;
					border-radius: 12px;
					font-weight: 600;
				}

				@media (min-width: 768px) {
					.catalog-page {
						padding: 24px;
					}
					.products-grid {
						grid-template-columns: repeat(3, 1fr);
						gap: 20px;
					}
					.catalog-toolbar {
						justify-content: space-between;
					}
					.sort-select {
						flex: none;
						min-width: 180px;
					}
				}
				@media (min-width: 992px) {
					.products-grid {
						grid-template-columns: repeat(4, 1fr);
					}
					.catalog-layout-desktop {
						display: grid;
						grid-template-columns: 260px 1fr;
						gap: 32px;
					}
				}
			`})]})}function Vh(){const{id:e}=sd(),t=$h(e||""),{addItem:r,isInCart:n}=wn(),{showToast:i}=Vt(),[a,o]=j.useState(1),[s,c]=j.useState(0);if(!t)return l.jsxs("div",{className:"container",style:{padding:"60px 0",textAlign:"center"},children:[l.jsx("h2",{children:"Товар не найден"}),l.jsx(z,{to:"/catalog",className:"btn btn-primary",children:"Вернуться в каталог"})]});const u=n(t.id),g=Be.filter(f=>f.category===t.category&&f.id!==t.id).slice(0,4),p=Be.filter(f=>f.id!==t.id).sort(()=>Math.random()-.5).slice(0,4),x=[...Be].filter(f=>f.id!==t.id).sort((f,k)=>k.salesCount-f.salesCount).slice(0,4),y=Be.filter(f=>f.sellerId===t.sellerId&&f.id!==t.id).slice(0,4),v=()=>{t.stock>0&&(r(t,a),i("success",`Товар добавлен в корзину (${a} шт.)`))};return l.jsxs("div",{className:"product-page",children:[l.jsxs("div",{className:"container",children:[l.jsxs("nav",{className:"breadcrumbs",children:[l.jsx(z,{to:"/",children:"Главная"}),l.jsx("span",{children:"/"}),l.jsx(z,{to:"/catalog",children:"Каталог"}),l.jsx("span",{children:"/"}),l.jsx(z,{to:`/catalog?category=${t.category}`,children:t.category}),l.jsx("span",{children:"/"}),l.jsxs("span",{children:[t.title.slice(0,30),"..."]})]}),l.jsxs("div",{className:"product-main",children:[l.jsxs("div",{className:"product-images",children:[l.jsxs("div",{className:"main-image",children:[l.jsx("img",{src:t.images[s],alt:t.title}),t.badge&&l.jsx("span",{className:`badge badge-${t.badge}`,children:t.badge==="sale"?`-${Math.round((1-t.price/(t.oldPrice||t.price))*100)}%`:t.badge==="hit"?"Хит":"Новинка"})]}),l.jsx("div",{className:"thumbnail-list",children:t.images.map((f,k)=>l.jsx("button",{className:`thumbnail ${s===k?"active":""}`,onClick:()=>c(k),children:l.jsx("img",{src:f,alt:`Thumbnail ${k+1}`})},k))})]}),l.jsxs("div",{className:"product-info",children:[l.jsxs("div",{className:"product-seller",children:[l.jsx("span",{className:"seller-avatar",children:t.sellerName[0]}),l.jsx(z,{to:`/catalog?seller=${t.sellerId}`,children:t.sellerName})]}),l.jsx("h1",{children:t.title}),l.jsxs("div",{className:"product-rating",children:[l.jsx("div",{className:"stars",children:[1,2,3,4,5].map(f=>l.jsx(jd,{size:18,fill:f<=Math.round(t.rating)?"#f4a261":"none",color:f<=Math.round(t.rating)?"#f4a261":"#ccc"},f))}),l.jsx("span",{className:"rating-value",children:t.rating}),l.jsxs("span",{className:"rating-count",children:["(",t.reviewsCount.toLocaleString()," отзывов)"]}),l.jsxs("span",{className:"sales-count",children:["• ",t.salesCount.toLocaleString()," продано"]})]}),l.jsxs("div",{className:"product-price-section",children:[l.jsxs("div",{className:"price",children:[l.jsxs("span",{className:"current",children:[t.price.toLocaleString("ru-RU")," ₽"]}),t.oldPrice&&l.jsxs("span",{className:"old",children:[t.oldPrice.toLocaleString("ru-RU")," ₽"]})]}),l.jsx("span",{className:"commission-note",children:"+2% комиссия покупателя при оплате"})]}),l.jsx("div",{className:"product-stock",children:t.stock>0?l.jsxs("span",{className:"in-stock",children:["✓ В наличии (",t.stock," шт.)"]}):l.jsx("span",{className:"out-stock",children:"✕ Нет в наличии"})}),l.jsxs("div",{className:"quantity-selector",children:[l.jsx("span",{children:"Количество:"}),l.jsxs("div",{className:"quantity-controls",children:[l.jsx("button",{onClick:()=>o(f=>Math.max(1,f-1)),children:l.jsx(vd,{size:16})}),l.jsx("input",{type:"number",value:a,onChange:f=>o(Math.max(1,parseInt(f.target.value)||1)),min:1,max:t.stock}),l.jsx("button",{onClick:()=>o(f=>Math.min(t.stock,f+1)),children:l.jsx(xr,{size:16})})]})]}),l.jsxs("div",{className:"product-actions",children:[l.jsxs("button",{className:`btn-add-cart ${u?"in-cart":""}`,onClick:v,disabled:t.stock===0,children:[u?l.jsx(jt,{size:20}):l.jsx(cr,{size:20}),u?"В корзине":"В корзину"]}),l.jsx("button",{className:"btn-wishlist",children:l.jsx(yo,{size:20})})]}),l.jsxs("div",{className:"delivery-info",children:[l.jsxs("div",{className:"delivery-item",children:[l.jsx(ya,{size:20}),l.jsxs("div",{children:[l.jsx("strong",{children:"Доставка"}),l.jsx("p",{children:"5-7 рабочих дней"})]})]}),l.jsxs("div",{className:"delivery-item",children:[l.jsx(va,{size:20}),l.jsxs("div",{children:[l.jsx("strong",{children:"Гарантия"}),l.jsx("p",{children:"Защита покупателя"})]})]}),l.jsxs("div",{className:"delivery-item",children:[l.jsx(_h,{size:20}),l.jsxs("div",{children:[l.jsx("strong",{children:"Возврат"}),l.jsx("p",{children:"14 дней"})]})]})]})]})]}),l.jsxs("div",{className:"product-details",children:[l.jsxs("div",{className:"details-section",children:[l.jsx("h2",{children:"Описание"}),l.jsx("p",{children:t.description})]}),l.jsxs("div",{className:"details-section",children:[l.jsx("h2",{children:"Характеристики"}),l.jsx("table",{className:"characteristics",children:l.jsx("tbody",{children:Object.entries(t.characteristics).map(([f,k])=>l.jsxs("tr",{children:[l.jsx("th",{children:f}),l.jsx("td",{children:k})]},f))})})]})]}),l.jsxs("div",{className:"recommendations",children:[y.length>0&&l.jsxs("div",{className:"recommendation-section",children:[l.jsx("div",{className:"recommendation-header",children:l.jsx("span",{className:"rec-badge",children:"🏪 Другие товары продавца"})}),l.jsx("div",{className:"recommendation-grid",children:y.map(f=>l.jsxs(z,{to:`/product/${f.id}`,className:"recommendation-card",children:[l.jsx("div",{className:"rec-image",children:l.jsx("img",{src:f.images[0],alt:f.title})}),l.jsxs("div",{className:"rec-info",children:[l.jsx("span",{className:"rec-title",children:f.title}),l.jsxs("div",{className:"rec-footer",children:[l.jsxs("span",{className:"rec-price",children:[f.price.toLocaleString("ru-RU")," ₽"]}),l.jsxs("span",{className:"rec-rating",children:["★ ",f.rating]})]})]})]},f.id))})]}),p.length>0&&l.jsxs("div",{className:"recommendation-section",children:[l.jsx("div",{className:"recommendation-header",children:l.jsx("span",{className:"rec-badge hot",children:"🔥 Часто покупают вместе"})}),l.jsx("div",{className:"recommendation-grid",children:p.map(f=>l.jsxs(z,{to:`/product/${f.id}`,className:"recommendation-card",children:[l.jsx("div",{className:"rec-image",children:l.jsx("img",{src:f.images[0],alt:f.title})}),l.jsxs("div",{className:"rec-info",children:[l.jsx("span",{className:"rec-title",children:f.title}),l.jsxs("div",{className:"rec-footer",children:[l.jsxs("span",{className:"rec-price",children:[f.price.toLocaleString("ru-RU")," ₽"]}),l.jsxs("span",{className:"rec-rating",children:["★ ",f.rating]})]})]})]},f.id))})]}),g.length>0&&l.jsxs("div",{className:"recommendation-section",children:[l.jsx("div",{className:"recommendation-header",children:l.jsx("span",{className:"rec-badge",children:"👆 Похожие товары"})}),l.jsx("div",{className:"recommendation-grid",children:g.map(f=>l.jsxs(z,{to:`/product/${f.id}`,className:"recommendation-card",children:[l.jsx("div",{className:"rec-image",children:l.jsx("img",{src:f.images[0],alt:f.title})}),l.jsxs("div",{className:"rec-info",children:[l.jsx("span",{className:"rec-title",children:f.title}),l.jsxs("div",{className:"rec-footer",children:[l.jsxs("span",{className:"rec-price",children:[f.price.toLocaleString("ru-RU")," ₽"]}),l.jsxs("span",{className:"rec-rating",children:["★ ",f.rating]})]})]})]},f.id))})]}),x.length>0&&l.jsxs("div",{className:"recommendation-section",children:[l.jsx("div",{className:"recommendation-header",children:l.jsx("span",{className:"rec-badge",children:"⭐ Популярные товары"})}),l.jsx("div",{className:"recommendation-grid",children:x.map(f=>l.jsxs(z,{to:`/product/${f.id}`,className:"recommendation-card",children:[l.jsx("div",{className:"rec-image",children:l.jsx("img",{src:f.images[0],alt:f.title})}),l.jsxs("div",{className:"rec-info",children:[l.jsx("span",{className:"rec-title",children:f.title}),l.jsxs("div",{className:"rec-footer",children:[l.jsxs("span",{className:"rec-price",children:[f.price.toLocaleString("ru-RU")," ₽"]}),l.jsxs("span",{className:"rec-rating",children:["★ ",f.rating]})]})]})]},f.id))})]})]})]}),l.jsx("style",{children:`
        .product-page {
          padding: 24px 0 60px;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-light);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .breadcrumbs a {
          color: var(--text-light);
        }
        .breadcrumbs a:hover {
          color: var(--primary);
        }
        .product-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .product-images {
          position: sticky;
          top: 96px;
          height: fit-content;
        }
        .main-image {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--bg-light);
          margin-bottom: 16px;
        }
        .main-image img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }
        .badge {
          position: absolute;
          top: 16px;
          left: 16px;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          color: white;
        }
        .badge-sale { background: var(--primary); }
        .badge-hit { background: var(--accent); }
        .badge-new { background: var(--success); }
        .thumbnail-list {
          display: flex;
          gap: 12px;
        }
        .thumbnail {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 2px solid var(--border);
          padding: 0;
          background: none;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .thumbnail.active {
          border-color: var(--primary);
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-info {
          padding-top: 8px;
        }
        .product-seller {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          font-size: 14px;
        }
        .seller-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--secondary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .product-seller a {
          color: var(--text-medium);
        }
        .product-seller a:hover {
          color: var(--primary);
        }
        .product-info h1 {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .rating-value {
          font-weight: 600;
          color: var(--text-dark);
        }
        .rating-count, .sales-count {
          color: var(--text-light);
          font-size: 14px;
        }
        .product-price-section {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
        }
        .price {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 8px;
        }
        .price .current {
          font-size: 36px;
          font-weight: 800;
          color: var(--primary);
        }
        .price .old {
          font-size: 20px;
          color: var(--text-light);
          text-decoration: line-through;
        }
        .commission-note {
          font-size: 13px;
          color: var(--text-light);
        }
        .product-stock {
          margin-bottom: 24px;
        }
        .in-stock {
          color: var(--success);
          font-weight: 500;
        }
        .out-stock {
          color: var(--primary);
          font-weight: 500;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .quantity-selector > span {
          font-weight: 500;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .quantity-controls button {
          width: 40px;
          height: 40px;
          background: none;
          color: var(--text-medium);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .quantity-controls button:hover {
          color: var(--primary);
        }
        .quantity-controls input {
          width: 60px;
          height: 40px;
          border: none;
          text-align: center;
          font-size: 16px;
          font-weight: 600;
        }
        .quantity-controls input::-webkit-inner-spin-button,
        .quantity-controls input::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }
        .product-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
        }
        .btn-add-cart {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 32px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-md);
          font-size: 16px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-add-cart:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-add-cart.in-cart {
          background: var(--success);
        }
        .btn-add-cart:disabled {
          background: var(--text-light);
          cursor: not-allowed;
        }
        .btn-wishlist {
          width: 52px;
          height: 52px;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .btn-wishlist:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .delivery-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 24px;
          background: var(--bg-light);
          border-radius: var(--radius-md);
        }
        .delivery-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .delivery-item svg {
          color: var(--secondary);
          flex-shrink: 0;
        }
        .delivery-item strong {
          display: block;
          font-size: 14px;
          color: var(--text-dark);
        }
        .delivery-item p {
          font-size: 13px;
          color: var(--text-light);
          margin: 0;
        }
        .product-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 60px;
        }
        .details-section {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .details-section h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--text-dark);
        }
        .details-section p {
          color: var(--text-medium);
          line-height: 1.7;
        }
        .characteristics {
          width: 100%;
          border-collapse: collapse;
        }
        .characteristics tr {
          border-bottom: 1px solid var(--border);
        }
        .characteristics tr:last-child {
          border-bottom: none;
        }
        .characteristics th,
        .characteristics td {
          padding: 12px 0;
          text-align: left;
        }
        .characteristics th {
          width: 40%;
          font-weight: 500;
          color: var(--text-light);
        }
        .characteristics td {
          color: var(--text-dark);
        }
        .recommendations {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 1px solid var(--border);
        }
        .recommendation-section {
          margin-bottom: 40px;
        }
        .recommendation-section:last-child {
          margin-bottom: 0;
        }
        .recommendation-header {
          margin-bottom: 20px;
        }
        .rec-badge {
          display: inline-block;
          padding: 8px 16px;
          background: var(--bg-light);
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-dark);
        }
        .rec-badge.hot {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          color: white;
        }
        .recommendation-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .recommendation-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all 0.3s;
          display: block;
        }
        .recommendation-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .rec-image {
          aspect-ratio: 1;
          overflow: hidden;
        }
        .rec-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .recommendation-card:hover .rec-image img {
          transform: scale(1.05);
        }
        .rec-info {
          padding: 12px;
        }
        .rec-title {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 8px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 40px;
        }
        .rec-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .rec-price {
          font-weight: 700;
          color: var(--primary);
          font-size: 16px;
        }
        .rec-rating {
          font-size: 13px;
          color: var(--accent);
        }
        @media (max-width: 992px) {
          .product-main {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .product-images {
            position: static;
          }
          .product-details {
            grid-template-columns: 1fr;
          }
          .recommendation-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .product-info h1 {
            font-size: 22px;
          }
          .price .current {
            font-size: 28px;
          }
          .thumbnail {
            width: 60px;
            height: 60px;
          }
          .recommendation-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .rec-title {
            font-size: 13px;
          }
        }
      `})]})}function Hh(){const{items:e,updateQuantity:t,removeItem:r,subtotal:n,buyerCommission:i,total:a}=wn();return e.length===0?l.jsx("div",{className:"cart-page empty",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"empty-cart",children:[l.jsx(wd,{size:80}),l.jsx("h2",{children:"Корзина пуста"}),l.jsx("p",{children:"Добавьте товары из каталога, чтобы оформить заказ"}),l.jsx(z,{to:"/catalog",className:"btn btn-primary",children:"Перейти в каталог"})]})})}):l.jsxs("div",{className:"cart-page",children:[l.jsxs("div",{className:"container",children:[l.jsx("h1",{children:"Корзина"}),l.jsxs("div",{className:"cart-layout",children:[l.jsx("div",{className:"cart-items",children:e.map(({product:o,quantity:s})=>l.jsxs("div",{className:"cart-item",children:[l.jsx(z,{to:`/product/${o.id}`,className:"item-image",children:l.jsx("img",{src:o.images[0],alt:o.title})}),l.jsxs("div",{className:"item-details",children:[l.jsx(z,{to:`/product/${o.id}`,className:"item-title",children:o.title}),l.jsxs("p",{className:"item-seller",children:["Продавец: ",o.sellerName]})]}),l.jsx("div",{className:"item-quantity",children:l.jsxs("div",{className:"quantity-controls",children:[l.jsx("button",{onClick:()=>t(o.id,s-1),children:l.jsx(vd,{size:16})}),l.jsx("span",{children:s}),l.jsx("button",{onClick:()=>t(o.id,s+1),children:l.jsx(xr,{size:16})})]})}),l.jsxs("div",{className:"item-price",children:[l.jsxs("span",{className:"current",children:[(o.price*s).toLocaleString("ru-RU")," ₽"]}),s>1&&l.jsxs("span",{className:"unit",children:[o.price.toLocaleString("ru-RU")," ₽/шт."]})]}),l.jsx("button",{className:"item-remove",onClick:()=>r(o.id),children:l.jsx(bi,{size:18})})]},o.id))}),l.jsxs("div",{className:"cart-summary",children:[l.jsx("h2",{children:"Итого"}),l.jsxs("div",{className:"summary-rows",children:[l.jsxs("div",{className:"summary-row",children:[l.jsxs("span",{children:["Товары (",e.length,")"]}),l.jsxs("span",{children:[n.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Комиссия покупателя (2%)"}),l.jsxs("span",{children:[i.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Доставка"}),l.jsx("span",{className:"free",children:"Бесплатно"})]})]}),l.jsxs("div",{className:"summary-total",children:[l.jsx("span",{children:"К оплате"}),l.jsxs("span",{className:"total-value",children:[a.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs(z,{to:"/checkout",className:"btn-checkout",children:["Оформить заказ",l.jsx(yh,{size:20})]}),l.jsxs("div",{className:"summary-note",children:[l.jsx("p",{children:"💳 Безопасная оплата через escrow-систему"}),l.jsx("p",{children:"🛡️ Защита покупателя включена в комиссию"})]})]})]})]}),l.jsx("style",{children:`
        .cart-page {
          padding: 24px 0 60px;
        }
        .cart-page h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 32px;
          align-items: start;
        }
        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto auto auto;
          gap: 20px;
          align-items: center;
          padding: 20px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
        }
        .item-image {
          width: 100px;
          height: 100px;
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .item-details {
          min-width: 0;
        }
        .item-title {
          font-weight: 600;
          color: var(--text-dark);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .item-title:hover {
          color: var(--primary);
        }
        .item-seller {
          font-size: 13px;
          color: var(--text-light);
          margin: 0;
        }
        .quantity-controls {
          display: flex;
          align-items: center;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .quantity-controls button {
          width: 36px;
          height: 36px;
          background: none;
          color: var(--text-medium);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .quantity-controls button:hover {
          color: var(--primary);
        }
        .quantity-controls span {
          width: 40px;
          text-align: center;
          font-weight: 600;
        }
        .item-price {
          text-align: right;
          min-width: 120px;
        }
        .item-price .current {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
        }
        .item-price .unit {
          font-size: 12px;
          color: var(--text-light);
        }
        .item-remove {
          padding: 10px;
          background: none;
          color: var(--text-light);
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }
        .item-remove:hover {
          background: rgba(230, 57, 70, 0.1);
          color: var(--primary);
        }
        .cart-summary {
          position: sticky;
          top: 96px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .cart-summary h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .summary-rows {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
        }
        .summary-row span:first-child {
          color: var(--text-medium);
        }
        .summary-row .free {
          color: var(--success);
          font-weight: 500;
        }
        .summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .summary-total span:first-child {
          font-size: 16px;
          font-weight: 500;
        }
        .total-value {
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
        }
        .btn-checkout {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-md);
          font-size: 16px;
          font-weight: 600;
          transition: all 0.2s;
          margin-bottom: 20px;
        }
        .btn-checkout:hover {
          background: var(--primary-dark);
        }
        .summary-note {
          font-size: 13px;
          color: var(--text-light);
        }
        .summary-note p {
          margin: 0 0 8px;
        }
        .empty-cart {
          text-align: center;
          padding: 80px 20px;
        }
        .empty-cart svg {
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .empty-cart h2 {
          font-size: 28px;
          margin-bottom: 12px;
        }
        .empty-cart p {
          color: var(--text-medium);
          margin-bottom: 32px;
        }
        .btn-primary {
          display: inline-block;
          padding: 14px 28px;
          background: var(--primary);
          color: white;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        @media (max-width: 992px) {
          .cart-layout {
            grid-template-columns: 1fr;
          }
          .cart-summary {
            position: static;
          }
          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 16px;
          }
          .item-quantity,
          .item-price,
          .item-remove {
            grid-column: 2;
          }
          .item-quantity {
            justify-self: start;
          }
          .item-price {
            text-align: left;
          }
          .item-remove {
            justify-self: end;
          }
        }
      `})]})}function Wh(){const{items:e,subtotal:t,buyerCommission:r,total:n,clearCart:i}=wn(),{showToast:a}=Vt(),o=St(),[s,c]=j.useState(1),[u,g]=j.useState(!1),[p,x]=j.useState({city:"",street:"",house:"",apartment:"",postalCode:"",deliveryMethod:"standard",paymentMethod:"card"}),y=async v=>{v.preventDefault(),g(!0),await new Promise(h=>setTimeout(h,1500));const f={id:`ORD-${Date.now()}`,items:e,total:n,buyerCommission:r,createdAt:new Date().toISOString(),status:"pending",address:`${p.city}, ${p.street}, д. ${p.house}${p.apartment?", кв. "+p.apartment:""}`},k=JSON.parse(localStorage.getItem("chinamart_orders")||"[]");k.unshift(f),localStorage.setItem("chinamart_orders",JSON.stringify(k)),i(),g(!1),a("success","Заказ успешно оформлен!"),o("/orders")};return e.length===0?l.jsx("div",{className:"checkout-page",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"empty-checkout",children:[l.jsx("h2",{children:"Ваша корзина пуста"}),l.jsx(z,{to:"/catalog",className:"btn btn-primary",children:"Перейти в каталог"})]})})}):l.jsxs("div",{className:"checkout-page",children:[l.jsxs("div",{className:"container",children:[l.jsxs(z,{to:"/cart",className:"back-link",children:[l.jsx(xd,{size:20}),"Вернуться в корзину"]}),l.jsx("h1",{children:"Оформление заказа"}),l.jsxs("div",{className:"checkout-steps",children:[l.jsxs("div",{className:`step ${s>=1?"active":""} ${s>1?"completed":""}`,children:[l.jsx("span",{className:"step-number",children:s>1?l.jsx(jt,{size:16}):"1"}),l.jsx("span",{className:"step-label",children:"Адрес"})]}),l.jsx("div",{className:"step-line"}),l.jsxs("div",{className:`step ${s>=2?"active":""} ${s>2?"completed":""}`,children:[l.jsx("span",{className:"step-number",children:s>2?l.jsx(jt,{size:16}):"2"}),l.jsx("span",{className:"step-label",children:"Доставка"})]}),l.jsx("div",{className:"step-line"}),l.jsxs("div",{className:`step ${s>=3?"active":""}`,children:[l.jsx("span",{className:"step-number",children:"3"}),l.jsx("span",{className:"step-label",children:"Оплата"})]})]}),l.jsxs("div",{className:"checkout-layout",children:[l.jsxs("form",{className:"checkout-form",onSubmit:y,children:[l.jsxs("div",{className:`form-section ${s===1?"active":""}`,children:[l.jsx("h2",{children:"Адрес доставки"}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Город *"}),l.jsx("input",{type:"text",required:!0,value:p.city,onChange:v=>x({...p,city:v.target.value}),placeholder:"Москва"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Почтовый индекс *"}),l.jsx("input",{type:"text",required:!0,value:p.postalCode,onChange:v=>x({...p,postalCode:v.target.value}),placeholder:"123456"})]}),l.jsxs("div",{className:"form-group full",children:[l.jsx("label",{children:"Улица *"}),l.jsx("input",{type:"text",required:!0,value:p.street,onChange:v=>x({...p,street:v.target.value}),placeholder:"ул. Примерная"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Дом *"}),l.jsx("input",{type:"text",required:!0,value:p.house,onChange:v=>x({...p,house:v.target.value}),placeholder:"1"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Квартира"}),l.jsx("input",{type:"text",value:p.apartment,onChange:v=>x({...p,apartment:v.target.value}),placeholder:"101"})]})]}),l.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>c(2),children:"Продолжить"})]}),l.jsxs("div",{className:`form-section ${s===2?"active":""}`,children:[l.jsx("h2",{children:"Способ доставки"}),l.jsxs("div",{className:"delivery-options",children:[l.jsxs("label",{className:`delivery-option ${p.deliveryMethod==="standard"?"selected":""}`,children:[l.jsx("input",{type:"radio",name:"delivery",value:"standard",checked:p.deliveryMethod==="standard",onChange:v=>x({...p,deliveryMethod:v.target.value})}),l.jsxs("div",{className:"option-content",children:[l.jsx(ya,{size:24}),l.jsxs("div",{children:[l.jsx("strong",{children:"Стандартная доставка"}),l.jsx("p",{children:"10-14 рабочих дней"})]})]}),l.jsx("span",{className:"option-price",children:"Бесплатно"})]}),l.jsxs("label",{className:`delivery-option ${p.deliveryMethod==="express"?"selected":""}`,children:[l.jsx("input",{type:"radio",name:"delivery",value:"express",checked:p.deliveryMethod==="express",onChange:v=>x({...p,deliveryMethod:v.target.value})}),l.jsxs("div",{className:"option-content",children:[l.jsx(ya,{size:24}),l.jsxs("div",{children:[l.jsx("strong",{children:"Экспресс-доставка"}),l.jsx("p",{children:"5-7 рабочих дней"})]})]}),l.jsx("span",{className:"option-price",children:"+500 ₽"})]})]}),l.jsxs("div",{className:"form-buttons",children:[l.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>c(1),children:"Назад"}),l.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>c(3),children:"Продолжить"})]})]}),l.jsxs("div",{className:`form-section ${s===3?"active":""}`,children:[l.jsx("h2",{children:"Способ оплаты"}),l.jsxs("div",{className:"payment-options",children:[l.jsxs("label",{className:`payment-option ${p.paymentMethod==="card"?"selected":""}`,children:[l.jsx("input",{type:"radio",name:"payment",value:"card",checked:p.paymentMethod==="card",onChange:v=>x({...p,paymentMethod:v.target.value})}),l.jsxs("div",{className:"option-content",children:[l.jsx(ga,{size:24}),l.jsxs("div",{children:[l.jsx("strong",{children:"Банковская карта"}),l.jsx("p",{children:"Visa, Mastercard, МИР"})]})]})]}),l.jsxs("label",{className:`payment-option ${p.paymentMethod==="balance"?"selected":""}`,children:[l.jsx("input",{type:"radio",name:"payment",value:"balance",checked:p.paymentMethod==="balance",onChange:v=>x({...p,paymentMethod:v.target.value})}),l.jsxs("div",{className:"option-content",children:[l.jsx(ga,{size:24}),l.jsxs("div",{children:[l.jsx("strong",{children:"Баланс кошелька"}),l.jsx("p",{children:"Доступно: 0 ₽"})]})]})]})]}),l.jsxs("div",{className:"form-buttons",children:[l.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>c(2),children:"Назад"}),l.jsx("button",{type:"submit",className:"btn btn-primary",disabled:u,children:u?"Оформляем...":`Оплатить ${(n+(p.deliveryMethod==="express"?500:0)).toLocaleString("ru-RU")} ₽`})]})]})]}),l.jsxs("div",{className:"order-summary",children:[l.jsx("h2",{children:"Ваш заказ"}),l.jsx("div",{className:"summary-items",children:e.map(({product:v,quantity:f})=>l.jsxs("div",{className:"summary-item",children:[l.jsx("img",{src:v.images[0],alt:v.title}),l.jsxs("div",{className:"item-info",children:[l.jsx("span",{className:"item-name",children:v.title}),l.jsxs("span",{className:"item-qty",children:["×",f]})]}),l.jsxs("span",{className:"item-price",children:[(v.price*f).toLocaleString("ru-RU")," ₽"]})]},v.id))}),l.jsxs("div",{className:"summary-totals",children:[l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Товары"}),l.jsxs("span",{children:[t.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Комиссия (2%)"}),l.jsxs("span",{children:[r.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Доставка"}),l.jsx("span",{children:p.deliveryMethod==="express"?"500 ₽":"Бесплатно"})]}),l.jsxs("div",{className:"summary-row total",children:[l.jsx("span",{children:"Итого"}),l.jsxs("span",{children:[(n+(p.deliveryMethod==="express"?500:0)).toLocaleString("ru-RU")," ","₽"]})]})]})]})]})]}),l.jsx("style",{children:`
        .checkout-page {
          padding: 24px 0 60px;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-medium);
          margin-bottom: 24px;
          transition: color 0.2s;
        }
        .back-link:hover {
          color: var(--primary);
        }
        .checkout-page h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .checkout-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }
        .step {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-light);
        }
        .step.active {
          color: var(--primary);
        }
        .step.completed {
          color: var(--success);
        }
        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 14px;
        }
        .step.active .step-number {
          background: var(--primary);
          color: white;
        }
        .step.completed .step-number {
          background: var(--success);
          color: white;
        }
        .step-label {
          font-weight: 500;
        }
        .step-line {
          width: 60px;
          height: 2px;
          background: var(--border);
        }
        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 32px;
          align-items: start;
        }
        .checkout-form {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 32px;
        }
        .form-section {
          display: none;
        }
        .form-section.active {
          display: block;
        }
        .form-section h2 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 24px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group.full {
          grid-column: 1 / -1;
        }
        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-group input {
          padding: 14px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .delivery-options,
        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .delivery-option,
        .payment-option {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s;
        }
        .delivery-option:hover,
        .payment-option:hover {
          border-color: var(--primary);
        }
        .delivery-option.selected,
        .payment-option.selected {
          border-color: var(--primary);
          background: rgba(230, 57, 70, 0.05);
        }
        .delivery-option input,
        .payment-option input {
          display: none;
        }
        .option-content {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
        }
        .option-content svg {
          color: var(--secondary);
        }
        .option-content strong {
          display: block;
          font-weight: 600;
          color: var(--text-dark);
        }
        .option-content p {
          font-size: 13px;
          color: var(--text-light);
          margin: 0;
        }
        .option-price {
          font-weight: 600;
          color: var(--success);
        }
        .form-buttons {
          display: flex;
          gap: 12px;
        }
        .btn {
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-secondary {
          background: transparent;
          color: var(--text-medium);
          border: 2px solid var(--border);
        }
        .btn-secondary:hover {
          border-color: var(--text-medium);
        }
        .order-summary {
          position: sticky;
          top: 96px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .order-summary h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .summary-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 20px;
          max-height: 300px;
          overflow-y: auto;
        }
        .summary-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .summary-item img {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .summary-item .item-info {
          flex: 1;
          min-width: 0;
        }
        .item-name {
          display: block;
          font-size: 13px;
          color: var(--text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .item-qty {
          font-size: 12px;
          color: var(--text-light);
        }
        .item-price {
          font-weight: 600;
          font-size: 14px;
        }
        .summary-totals {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--text-medium);
        }
        .summary-row.total {
          padding-top: 16px;
          border-top: 1px solid var(--border);
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
        }
        .summary-row.total span:last-child {
          color: var(--primary);
        }
        .empty-checkout {
          text-align: center;
          padding: 80px 20px;
        }
        .empty-checkout h2 {
          margin-bottom: 24px;
        }
        @media (max-width: 992px) {
          .checkout-layout {
            grid-template-columns: 1fr;
          }
          .order-summary {
            position: static;
            order: -1;
          }
          .checkout-steps {
            flex-wrap: wrap;
          }
          .step-line {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.full {
            grid-column: 1;
          }
        }
      `})]})}function Qh(){var x;const{user:e}=kr(),t=St(),[r,n]=j.useState([]),[i,a]=j.useState([]),[o,s]=j.useState("products");j.useEffect(()=>{if(!e||e.role!=="seller"){t("/");return}const y=localStorage.getItem("chinamart_products"),f=(y?[...Be,...JSON.parse(y)]:Be).filter(d=>{var m;return d.sellerId===e.id||d.sellerName===((m=e.sellerData)==null?void 0:m.storeName)});n(f);const h=JSON.parse(localStorage.getItem("chinamart_orders")||"[]").filter(d=>d.items.some(m=>f.some(w=>w.id===m.product.id)));a(h)},[e,t]);const c=y=>{n(v=>v.filter(f=>f.id!==y)),Kh("success","Товар удалён")},u=i.reduce((y,v)=>y+v.items.filter(f=>r.some(k=>k.id===f.product.id)).reduce((f,k)=>f+k.product.price*k.quantity,0),0),g=Math.round(u*.95),p=y=>({pending:{label:"Новый",color:"blue"},processing:{label:"В обработке",color:"orange"},shipped:{label:"Отправлен",color:"purple"},delivered:{label:"Доставлен",color:"green"}})[y]||{label:y,color:"gray"};return!e||e.role!=="seller"?null:l.jsxs("div",{className:"seller-dashboard",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"dashboard-header",children:[l.jsxs("div",{children:[l.jsx("h1",{children:"Кабинет продавца"}),l.jsx("p",{children:((x=e.sellerData)==null?void 0:x.storeName)||"Ваш магазин"})]}),l.jsxs(z,{to:"/seller/add-product",className:"btn btn-primary",children:[l.jsx(xr,{size:20}),"Добавить товар"]})]}),l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(vl,{size:24})}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:r.length}),l.jsx("span",{className:"stat-label",children:"Товаров"})]})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(cr,{size:24})}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:i.length}),l.jsx("span",{className:"stat-label",children:"Заказов"})]})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(bd,{size:24})}),l.jsxs("div",{className:"stat-info",children:[l.jsxs("span",{className:"stat-value",children:[u.toLocaleString("ru-RU")," ₽"]}),l.jsx("span",{className:"stat-label",children:"Продаж"})]})]}),l.jsxs("div",{className:"stat-card highlight",children:[l.jsx("div",{className:"stat-icon",children:l.jsx(jd,{size:24})}),l.jsxs("div",{className:"stat-info",children:[l.jsxs("span",{className:"stat-value",children:[g.toLocaleString("ru-RU")," ₽"]}),l.jsx("span",{className:"stat-label",children:"Выручка (≈95%)"})]})]})]}),l.jsxs("div",{className:"tabs",children:[l.jsxs("button",{className:`tab ${o==="products"?"active":""}`,onClick:()=>s("products"),children:[l.jsx(vl,{size:20}),"Товары"]}),l.jsxs("button",{className:`tab ${o==="orders"?"active":""}`,onClick:()=>s("orders"),children:[l.jsx(cr,{size:20}),"Заказы"]})]}),o==="products"&&l.jsx("div",{className:"tab-content",children:r.length>0?l.jsxs("div",{className:"products-table",children:[l.jsxs("div",{className:"table-header",children:[l.jsx("span",{children:"Товар"}),l.jsx("span",{children:"Цена"}),l.jsx("span",{children:"На складе"}),l.jsx("span",{children:"Продано"}),l.jsx("span",{children:"Действия"})]}),r.map(y=>l.jsxs("div",{className:"table-row",children:[l.jsxs("div",{className:"product-cell",children:[l.jsx("img",{src:y.images[0],alt:y.title}),l.jsx("span",{children:y.title})]}),l.jsxs("span",{className:"price",children:[y.price.toLocaleString("ru-RU")," ₽"]}),l.jsxs("span",{children:[y.stock," шт."]}),l.jsx("span",{children:y.salesCount}),l.jsxs("div",{className:"actions",children:[l.jsx("button",{onClick:()=>t(`/seller/edit-product/${y.id}`),children:l.jsx(Ph,{size:16})}),l.jsx("button",{onClick:()=>c(y.id),children:l.jsx(bi,{size:16})})]})]},y.id))]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(vl,{size:60}),l.jsx("h3",{children:"У вас пока нет товаров"}),l.jsx("p",{children:"Добавьте первый товар, чтобы начать продавать"}),l.jsxs(z,{to:"/seller/add-product",className:"btn btn-primary",children:[l.jsx(xr,{size:20}),"Добавить товар"]})]})}),o==="orders"&&l.jsx("div",{className:"tab-content",children:i.length>0?l.jsx("div",{className:"orders-list",children:i.map(y=>l.jsxs("div",{className:"order-card",children:[l.jsxs("div",{className:"order-header",children:[l.jsxs("div",{children:[l.jsx("strong",{children:y.id}),l.jsx("span",{className:"order-date",children:new Date(y.createdAt).toLocaleDateString("ru-RU")})]}),l.jsx("span",{className:`status ${p(y.status).color}`,children:p(y.status).label})]}),l.jsx("div",{className:"order-items",children:y.items.filter(v=>r.some(f=>f.id===v.product.id)).map(v=>l.jsxs("div",{className:"order-item",children:[l.jsx("img",{src:v.product.images[0],alt:v.product.title}),l.jsxs("div",{children:[l.jsx("span",{className:"item-title",children:v.product.title}),l.jsxs("span",{className:"item-qty",children:["×",v.quantity]})]}),l.jsxs("span",{className:"item-price",children:[(v.product.price*v.quantity).toLocaleString("ru-RU")," ","₽"]})]},v.product.id))}),l.jsxs("div",{className:"order-footer",children:[l.jsxs("span",{className:"order-total",children:["Итого:"," ",y.items.filter(v=>r.some(f=>f.id===v.product.id)).reduce((v,f)=>v+f.product.price*f.quantity,0).toLocaleString("ru-RU")," ","₽"]}),l.jsxs("span",{className:"order-revenue",children:["Ваша выручка:"," ",Math.round(y.items.filter(v=>r.some(f=>f.id===v.product.id)).reduce((v,f)=>v+f.product.price*f.quantity,0)*.95).toLocaleString("ru-RU")," ","₽"]})]})]},y.id))}):l.jsxs("div",{className:"empty-state",children:[l.jsx(cr,{size:60}),l.jsx("h3",{children:"Заказов пока нет"}),l.jsx("p",{children:"Ожидайте, когда покупатели сделают заказы"})]})})]}),l.jsx("style",{children:`
        .seller-dashboard {
          padding: 32px 0 60px;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .dashboard-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .dashboard-header p {
          color: var(--text-light);
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .stat-card.highlight {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          border: none;
        }
        .stat-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
        }
        .stat-card.highlight .stat-icon {
          background: rgba(255,255,255,0.2);
          color: white;
        }
        .stat-info {
          display: flex;
          flex-direction: column;
        }
        .stat-value {
          font-size: 24px;
          font-weight: 700;
        }
        .stat-label {
          font-size: 13px;
          color: var(--text-light);
        }
        .stat-card.highlight .stat-label {
          color: rgba(255,255,255,0.8);
        }
        .tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }
        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: var(--radius-sm);
          background: var(--bg-light);
          color: var(--text-medium);
          font-weight: 500;
          transition: all 0.2s;
        }
        .tab:hover {
          background: var(--border);
        }
        .tab.active {
          background: var(--primary);
          color: white;
        }
        .tab-content {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .products-table {
          width: 100%;
        }
        .table-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          background: var(--bg-light);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-medium);
        }
        .table-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 120px;
          gap: 16px;
          padding: 16px 24px;
          align-items: center;
          border-bottom: 1px solid var(--border);
        }
        .table-row:last-child {
          border-bottom: none;
        }
        .product-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .product-cell img {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .product-cell span {
          font-weight: 500;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .price {
          font-weight: 600;
          color: var(--primary);
        }
        .actions {
          display: flex;
          gap: 8px;
        }
        .actions button {
          padding: 8px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .actions button:hover {
          background: var(--primary);
          color: white;
        }
        .empty-state {
          text-align: center;
          padding: 60px 20px;
        }
        .empty-state svg {
          color: var(--text-light);
          margin-bottom: 16px;
        }
        .empty-state h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        .empty-state p {
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .orders-list {
          display: flex;
          flex-direction: column;
        }
        .order-card {
          padding: 20px 24px;
          border-bottom: 1px solid var(--border);
        }
        .order-card:last-child {
          border-bottom: none;
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .order-header strong {
          display: block;
          font-size: 15px;
        }
        .order-date {
          font-size: 13px;
          color: var(--text-light);
        }
        .status {
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
        }
        .status.blue { background: #e3f2fd; color: #1565c0; }
        .status.orange { background: #fff3e0; color: #e65100; }
        .status.purple { background: #f3e5f5; color: #7b1fa2; }
        .status.green { background: #e8f5e9; color: #2e7d32; }
        .order-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .order-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .order-item img {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .order-item div {
          flex: 1;
        }
        .item-title {
          display: block;
          font-size: 14px;
        }
        .item-qty {
          font-size: 12px;
          color: var(--text-light);
        }
        .item-price {
          font-weight: 600;
        }
        .order-footer {
          display: flex;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }
        .order-total {
          font-weight: 600;
        }
        .order-revenue {
          color: var(--success);
          font-weight: 500;
        }
        @media (max-width: 992px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .table-header,
          .table-row {
            grid-template-columns: 2fr 1fr 80px;
          }
          .table-header span:nth-child(3),
          .table-header span:nth-child(4),
          .table-row span:nth-child(3),
          .table-row span:nth-child(4) {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .tabs {
            overflow-x: auto;
          }
          .table-header {
            display: none;
          }
          .table-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }
          .product-cell {
            width: 100%;
          }
        }
      `})]})}function Kh(e,t){const r=new CustomEvent("showToast",{detail:{type:e,message:t}});window.dispatchEvent(r)}function As(){const{id:e}=sd(),{user:t}=kr(),{showToast:r}=Vt(),n=St(),[i,a]=j.useState({title:"",description:"",price:"",category:"",stock:"1",images:[""],characteristics:[{key:"",value:""}]}),[o,s]=j.useState(!1),c=async f=>{var d;if(f.preventDefault(),!t||t.role!=="seller"){r("error","Только продавцы могут добавлять товары");return}s(!0);const k={id:e||`prod_${Date.now()}`,sellerId:t.id,sellerName:((d=t.sellerData)==null?void 0:d.storeName)||t.name,title:i.title,description:i.description,price:parseInt(i.price),images:i.images.filter(Boolean),category:i.category,characteristics:i.characteristics.reduce((m,w)=>(w.key&&w.value&&(m[w.key]=w.value),m),{}),stock:parseInt(i.stock)||1,rating:0,reviewsCount:0,salesCount:0,createdAt:new Date().toISOString()},h=JSON.parse(localStorage.getItem("chinamart_products")||"[]");if(e){const m=h.findIndex(w=>w.id===e);m!==-1&&(h[m]=k)}else h.push(k);localStorage.setItem("chinamart_products",JSON.stringify(h)),s(!1),r("success",e?"Товар обновлён":"Товар добавлен"),n("/seller")},u=()=>{a(f=>({...f,images:[...f.images,""]}))},g=f=>{a(k=>({...k,images:k.images.filter((h,d)=>d!==f)}))},p=(f,k)=>{a(h=>({...h,images:h.images.map((d,m)=>m===f?k:d)}))},x=()=>{a(f=>({...f,characteristics:[...f.characteristics,{key:"",value:""}]}))},y=f=>{a(k=>({...k,characteristics:k.characteristics.filter((h,d)=>d!==f)}))},v=(f,k,h)=>{a(d=>({...d,characteristics:d.characteristics.map((m,w)=>w===f?{...m,[k]:h}:m)}))};return l.jsxs("div",{className:"add-product-page",children:[l.jsxs("div",{className:"container",children:[l.jsxs("button",{onClick:()=>n("/seller"),className:"back-link",children:[l.jsx(xd,{size:20}),"Назад в кабинет"]}),l.jsx("h1",{children:e?"Редактирование товара":"Добавление товара"}),l.jsxs("form",{className:"product-form",onSubmit:c,children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Основная информация"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Название товара *"}),l.jsx("input",{type:"text",required:!0,value:i.title,onChange:f=>a({...i,title:f.target.value}),placeholder:"Например: Беспроводные наушники"})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Цена *"}),l.jsx("input",{type:"number",required:!0,value:i.price,onChange:f=>a({...i,price:f.target.value}),placeholder:"1990"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"На складе *"}),l.jsx("input",{type:"number",required:!0,min:"1",value:i.stock,onChange:f=>a({...i,stock:f.target.value}),placeholder:"10"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Категория *"}),l.jsxs("select",{required:!0,value:i.category,onChange:f=>a({...i,category:f.target.value}),children:[l.jsx("option",{value:"",children:"Выберите категорию"}),pn.map(f=>l.jsx("option",{value:f.id,children:f.name},f.id))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Описание"}),l.jsx("textarea",{rows:4,value:i.description,onChange:f=>a({...i,description:f.target.value}),placeholder:"Подробное описание товара..."})]})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Фотографии"}),l.jsx("p",{className:"section-note",children:"URL изображений товара (до 5 штук)"}),l.jsx("div",{className:"images-list",children:i.images.map((f,k)=>l.jsxs("div",{className:"image-input",children:[l.jsx(Ch,{size:20}),l.jsx("input",{type:"url",value:f,onChange:h=>p(k,h.target.value),placeholder:"https://example.com/image.jpg"}),i.images.length>1&&l.jsx("button",{type:"button",onClick:()=>g(k),children:l.jsx(bi,{size:16})})]},k))}),i.images.length<5&&l.jsxs("button",{type:"button",className:"btn-add",onClick:u,children:[l.jsx(xr,{size:18}),"Добавить фото"]})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Характеристики"}),l.jsx("p",{className:"section-note",children:"Дополнительные характеристики товара"}),l.jsx("div",{className:"characteristics-list",children:i.characteristics.map((f,k)=>l.jsxs("div",{className:"characteristic-input",children:[l.jsx("input",{type:"text",value:f.key,onChange:h=>v(k,"key",h.target.value),placeholder:"Например: Бренд"}),l.jsx("input",{type:"text",value:f.value,onChange:h=>v(k,"value",h.target.value),placeholder:"Например: Xiaomi"}),i.characteristics.length>1&&l.jsx("button",{type:"button",onClick:()=>y(k),children:l.jsx(bi,{size:16})})]},k))}),l.jsxs("button",{type:"button",className:"btn-add",onClick:x,children:[l.jsx(xr,{size:18}),"Добавить характеристику"]})]}),l.jsxs("div",{className:"form-actions",children:[l.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>n("/seller"),children:"Отмена"}),l.jsx("button",{type:"submit",className:"btn btn-primary",disabled:o,children:o?"Сохранение...":e?"Сохранить изменения":"Добавить товар"})]})]})]}),l.jsx("style",{children:`
        .add-product-page {
          padding: 24px 0 60px;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-medium);
          margin-bottom: 24px;
          background: none;
          font-size: 14px;
        }
        .back-link:hover {
          color: var(--primary);
        }
        .add-product-page h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .product-form {
          max-width: 700px;
        }
        .form-section {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
          margin-bottom: 24px;
        }
        .form-section h2 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .section-note {
          font-size: 13px;
          color: var(--text-light);
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group:last-child {
          margin-bottom: 0;
        }
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .images-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .image-input {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .image-input svg {
          color: var(--text-light);
          flex-shrink: 0;
        }
        .image-input input {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
        }
        .image-input button {
          padding: 10px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .image-input button:hover {
          background: var(--primary);
          color: white;
        }
        .btn-add {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .btn-add:hover {
          background: var(--border);
          color: var(--text-dark);
        }
        .characteristics-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }
        .characteristic-input {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 12px;
          align-items: center;
        }
        .characteristic-input input {
          padding: 12px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
        }
        .characteristic-input input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .characteristic-input button {
          padding: 10px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .characteristic-input button:hover {
          background: var(--primary);
          color: white;
        }
        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
        .btn {
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-secondary {
          background: transparent;
          color: var(--text-medium);
          border: 2px solid var(--border);
        }
        .btn-secondary:hover {
          border-color: var(--text-medium);
        }
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .characteristic-input {
            grid-template-columns: 1fr;
          }
          .characteristic-input input:last-of-type {
            display: none;
          }
        }
      `})]})}function qh(){const{login:e}=kr(),{showToast:t}=Vt(),r=St(),[n,i]=j.useState({email:"",password:""}),[a,o]=j.useState(!1),[s,c]=j.useState(!1),[u,g]=j.useState(""),p=async x=>{x.preventDefault(),g(""),c(!0);try{await e(n.email,n.password),t("success","Добро пожаловать!"),r("/")}catch(y){g(y.message)}finally{c(!1)}};return l.jsxs("div",{className:"auth-page",children:[l.jsxs("div",{className:"auth-container",children:[l.jsxs("div",{className:"auth-header",children:[l.jsx("h1",{children:"Вход в аккаунт"}),l.jsx("p",{children:"Войдите, чтобы получить доступ к покупкам и продажам"})]}),l.jsxs("form",{onSubmit:p,className:"auth-form",children:[u&&l.jsx("div",{className:"error-message",children:u}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Email"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(wo,{size:20}),l.jsx("input",{type:"email",required:!0,value:n.email,onChange:x=>i({...n,email:x.target.value}),placeholder:"mail@example.com"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Пароль"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(xa,{size:20}),l.jsx("input",{type:a?"text":"password",required:!0,value:n.password,onChange:x=>i({...n,password:x.target.value}),placeholder:"Введите пароль"}),l.jsx("button",{type:"button",className:"toggle-password",onClick:()=>o(!a),children:a?l.jsx(kh,{size:20}):l.jsx(bh,{size:20})})]})]}),l.jsx("button",{type:"submit",className:"btn btn-primary",disabled:s,children:s?"Вход...":"Войти"})]}),l.jsx("div",{className:"auth-footer",children:l.jsxs("p",{children:["Нет аккаунта? ",l.jsx(z,{to:"/register",children:"Зарегистрироваться"})]})})]}),l.jsx("style",{children:`
        .auth-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        .auth-container {
          width: 100%;
          max-width: 420px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 40px;
        }
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .auth-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .auth-header p {
          color: var(--text-light);
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .error-message {
          padding: 12px 16px;
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid var(--primary);
          border-radius: var(--radius-sm);
          color: var(--primary);
          font-size: 14px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-wrapper svg:first-child {
          position: absolute;
          left: 14px;
          color: var(--text-light);
        }
        .input-wrapper input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
        }
        .input-wrapper input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .toggle-password {
          position: absolute;
          right: 14px;
          background: none;
          color: var(--text-light);
          padding: 4px;
        }
        .toggle-password:hover {
          color: var(--text-dark);
        }
        .btn {
          width: 100%;
          padding: 16px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 16px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          margin-top: 8px;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .auth-footer {
          text-align: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .auth-footer p {
          color: var(--text-medium);
        }
        .auth-footer a {
          color: var(--primary);
          font-weight: 500;
        }
        .auth-footer a:hover {
          text-decoration: underline;
        }
        .demo-accounts {
          margin-top: 24px;
          padding: 16px;
          background: var(--bg-light);
          border-radius: var(--radius-sm);
          text-align: center;
        }
        .demo-accounts p {
          font-size: 13px;
          color: var(--text-light);
          margin-bottom: 12px;
        }
        .demo-list {
          display: flex;
          gap: 8px;
        }
        .demo-list button {
          flex: 1;
          padding: 10px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .demo-list button:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
      `})]})}function Yh(){const{register:e}=kr(),{showToast:t}=Vt(),r=St(),[n,i]=j.useState({email:"",password:"",confirmPassword:"",name:"",phone:"",role:"buyer",storeName:"",storeCategory:""}),[a,o]=j.useState(!1),[s,c]=j.useState(""),u=async g=>{if(g.preventDefault(),c(""),n.password!==n.confirmPassword){c("Пароли не совпадают");return}if(n.password.length<6){c("Пароль должен быть не менее 6 символов");return}o(!0);try{await e({email:n.email,password:n.password,name:n.name,phone:n.phone,role:n.role,storeName:n.storeName,storeCategory:n.storeCategory}),t("success","Регистрация успешна!"),r(n.role==="seller"?"/seller":"/")}catch(p){c(p.message)}finally{o(!1)}};return l.jsxs("div",{className:"auth-page",children:[l.jsxs("div",{className:"auth-container",children:[l.jsxs("div",{className:"auth-header",children:[l.jsx("h1",{children:"Регистрация"}),l.jsx("p",{children:"Создайте аккаунт для покупок или продажи товаров"})]}),l.jsxs("form",{onSubmit:u,className:"auth-form",children:[s&&l.jsx("div",{className:"error-message",children:s}),l.jsxs("div",{className:"role-selection",children:[l.jsxs("button",{type:"button",className:`role-btn ${n.role==="buyer"?"active":""}`,onClick:()=>i({...n,role:"buyer"}),children:[l.jsx(jt,{size:20}),"🛒 Покупатель"]}),l.jsxs("button",{type:"button",className:`role-btn ${n.role==="seller"?"active":""}`,onClick:()=>i({...n,role:"seller"}),children:[l.jsx(jt,{size:20}),"🏪 Продавец"]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Email"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(wo,{size:20}),l.jsx("input",{type:"email",required:!0,value:n.email,onChange:g=>i({...n,email:g.target.value}),placeholder:"mail@example.com"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Имя"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(Ni,{size:20}),l.jsx("input",{type:"text",required:!0,value:n.name,onChange:g=>i({...n,name:g.target.value}),placeholder:"Иван Иванов"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Телефон"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(yd,{size:20}),l.jsx("input",{type:"tel",required:!0,value:n.phone,onChange:g=>i({...n,phone:g.target.value}),placeholder:"+7 (999) 123-45-67"})]})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Пароль"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(xa,{size:20}),l.jsx("input",{type:"password",required:!0,value:n.password,onChange:g=>i({...n,password:g.target.value}),placeholder:"Минимум 6 символов"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Подтвердите пароль"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(xa,{size:20}),l.jsx("input",{type:"password",required:!0,value:n.confirmPassword,onChange:g=>i({...n,confirmPassword:g.target.value}),placeholder:"Повторите пароль"})]})]})]}),n.role==="seller"&&l.jsxs("div",{className:"seller-fields",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Название магазина *"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx(kd,{size:20}),l.jsx("input",{type:"text",required:n.role==="seller",value:n.storeName,onChange:g=>i({...n,storeName:g.target.value}),placeholder:"Например: TechGadgets Shop"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Категория товаров *"}),l.jsxs("select",{required:n.role==="seller",value:n.storeCategory,onChange:g=>i({...n,storeCategory:g.target.value}),children:[l.jsx("option",{value:"",children:"Выберите категорию"}),pn.map(g=>l.jsx("option",{value:g.id,children:g.name},g.id))]})]})]}),l.jsx("button",{type:"submit",className:"btn btn-primary",disabled:a,children:a?"Регистрация...":"Зарегистрироваться"}),l.jsxs("p",{className:"terms",children:["Нажимая кнопку, вы соглашаетесь с ",l.jsx("a",{href:"#",children:"условиями оферты"})," и"," ",l.jsx("a",{href:"#",children:"политикой конфиденциальности"})]})]}),l.jsx("div",{className:"auth-footer",children:l.jsxs("p",{children:["Уже есть аккаунт? ",l.jsx(z,{to:"/login",children:"Войти"})]})})]}),l.jsx("style",{children:`
        .auth-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        .auth-container {
          width: 100%;
          max-width: 520px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 40px;
        }
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .auth-header h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .auth-header p {
          color: var(--text-light);
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .error-message {
          padding: 12px 16px;
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid var(--primary);
          border-radius: var(--radius-sm);
          color: var(--primary);
          font-size: 14px;
        }
        .role-selection {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .role-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          background: var(--bg-white);
          font-size: 15px;
          font-weight: 500;
          color: var(--text-medium);
          transition: all 0.2s;
        }
        .role-btn:hover {
          border-color: var(--primary);
        }
        .role-btn.active {
          border-color: var(--primary);
          background: rgba(230, 57, 70, 0.05);
          color: var(--primary);
        }
        .role-btn svg {
          display: none;
        }
        .role-btn.active svg {
          display: block;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-wrapper svg:first-child {
          position: absolute;
          left: 14px;
          color: var(--text-light);
        }
        .input-wrapper input,
        .form-group select {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
        }
        .form-group select {
          padding-left: 16px;
        }
        .input-wrapper input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary);
        }
        .seller-fields {
          padding: 20px;
          background: var(--bg-light);
          border-radius: var(--radius-md);
        }
        .btn {
          width: 100%;
          padding: 16px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 16px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .terms {
          font-size: 12px;
          color: var(--text-light);
          text-align: center;
        }
        .terms a {
          color: var(--primary);
        }
        .auth-footer {
          text-align: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }
        .auth-footer p {
          color: var(--text-medium);
        }
        .auth-footer a {
          color: var(--primary);
          font-weight: 500;
        }
        @media (max-width: 576px) {
          .auth-container {
            padding: 24px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Gh(){const{user:e,updateUser:t}=kr(),{showToast:r}=Vt(),[n,i]=j.useState({name:(e==null?void 0:e.name)||"",phone:(e==null?void 0:e.phone)||"",email:(e==null?void 0:e.email)||""}),[a,o]=j.useState(!1);if(!e)return null;const s=async c=>{c.preventDefault(),o(!0),t({name:n.name,phone:n.phone}),o(!1),r("success","Профиль обновлён")};return l.jsxs("div",{className:"profile-page",children:[l.jsxs("div",{className:"container",children:[l.jsx("h1",{children:"Личный кабинет"}),l.jsxs("div",{className:"profile-grid",children:[l.jsxs("div",{className:"profile-card",children:[l.jsxs("div",{className:"profile-header",children:[l.jsx("div",{className:"avatar",children:e.name.charAt(0).toUpperCase()}),l.jsxs("div",{children:[l.jsx("h2",{children:e.name}),l.jsx("p",{children:e.email})]})]}),l.jsxs("form",{onSubmit:s,className:"profile-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:[l.jsx(Ni,{size:18}),"Имя"]}),l.jsx("input",{type:"text",value:n.name,onChange:c=>i({...n,name:c.target.value}),required:!0})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:[l.jsx(wo,{size:18}),"Email"]}),l.jsx("input",{type:"email",value:n.email,disabled:!0,className:"disabled"})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:[l.jsx(yd,{size:18}),"Телефон"]}),l.jsx("input",{type:"tel",value:n.phone,onChange:c=>i({...n,phone:c.target.value}),required:!0})]}),l.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:a,children:[l.jsx(Lh,{size:18}),a?"Сохранение...":"Сохранить"]})]})]}),e.role==="seller"&&e.sellerData&&l.jsxs("div",{className:"profile-card",children:[l.jsxs("h3",{children:[l.jsx(kd,{size:20}),"Информация о магазине"]}),l.jsxs("div",{className:"seller-info",children:[l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Название"}),l.jsx("strong",{children:e.sellerData.storeName||"Не указано"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Категория"}),l.jsx("strong",{children:e.sellerData.category||"Не указана"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Рейтинг"}),l.jsxs("strong",{children:[e.sellerData.rating.toFixed(1)," ★"]})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Продаж"}),l.jsx("strong",{children:e.sellerData.salesCount})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{children:"Дата регистрации"}),l.jsx("strong",{children:new Date(e.sellerData.createdAt).toLocaleDateString("ru-RU")})]})]})]}),l.jsxs("div",{className:"profile-card",children:[l.jsx("h3",{children:"Безопасность"}),l.jsx("button",{className:"btn btn-secondary",children:"Изменить пароль"})]})]})]}),l.jsx("style",{children:`
        .profile-page {
          padding: 32px 0 60px;
        }
        .profile-page h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .profile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }
        .profile-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
        }
        .profile-card h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .profile-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }
        .avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          font-size: 24px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .profile-header h2 {
          font-size: 20px;
          margin-bottom: 4px;
        }
        .profile-header p {
          color: var(--text-light);
          font-size: 14px;
        }
        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-dark);
        }
        .form-group label svg {
          color: var(--text-light);
        }
        .form-group input {
          padding: 14px 16px;
          border: 2px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          transition: all 0.2s;
        }
        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
        }
        .form-group input.disabled {
          background: var(--bg-light);
          color: var(--text-light);
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: var(--primary-dark);
        }
        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .btn-secondary {
          background: transparent;
          color: var(--text-medium);
          border: 2px solid var(--border);
        }
        .btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .seller-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-row span {
          color: var(--text-light);
        }
        .info-row strong {
          color: var(--text-dark);
        }
      `})]})}function Xh(){const[e,t]=j.useState([]),[r,n]=j.useState(!0);j.useEffect(()=>{const a=JSON.parse(localStorage.getItem("chinamart_orders")||"[]");t(a),n(!1)},[]);const i=a=>({pending:{label:"Ожидает оплаты",color:"blue"},processing:{label:"В обработке",color:"orange"},shipped:{label:"Отправлен",color:"purple"},delivered:{label:"Доставлен",color:"green"}})[a]||{label:a,color:"gray"};return r?l.jsx("div",{className:"orders-page",children:l.jsx("div",{className:"container",children:l.jsx("h1",{children:"Загрузка..."})})}):l.jsxs("div",{className:"orders-page",children:[l.jsxs("div",{className:"container",children:[l.jsx("h1",{children:"Мои заказы"}),e.length>0?l.jsx("div",{className:"orders-list",children:e.map(a=>l.jsxs("div",{className:"order-card",children:[l.jsxs("div",{className:"order-header",children:[l.jsxs("div",{className:"order-info",children:[l.jsx("span",{className:"order-id",children:a.id}),l.jsx("span",{className:"order-date",children:new Date(a.createdAt).toLocaleDateString("ru-RU",{day:"numeric",month:"long",year:"numeric"})})]}),l.jsx("span",{className:`order-status ${i(a.status).color}`,children:i(a.status).label})]}),l.jsxs("div",{className:"order-items",children:[a.items.slice(0,3).map((o,s)=>l.jsxs("div",{className:"order-item",children:[l.jsx("img",{src:o.product.images[0],alt:o.product.title}),l.jsxs("div",{className:"item-details",children:[l.jsx("span",{className:"item-title",children:o.product.title}),l.jsxs("span",{className:"item-qty",children:["×",o.quantity]})]}),l.jsxs("span",{className:"item-price",children:[(o.product.price*o.quantity).toLocaleString("ru-RU")," ","₽"]})]},s)),a.items.length>3&&l.jsxs("div",{className:"more-items",children:["+",a.items.length-3," товар(ов)"]})]}),l.jsxs("div",{className:"order-footer",children:[l.jsxs("div",{className:"order-total",children:[l.jsxs("span",{children:["Итого (с комиссией ",a.buyerCommission," ₽):"]}),l.jsxs("strong",{children:[a.total.toLocaleString("ru-RU")," ₽"]})]}),l.jsxs(z,{to:`/order/${a.id}`,className:"order-link",children:["Подробнее ",l.jsx(jh,{size:18})]})]})]},a.id))}):l.jsxs("div",{className:"empty-orders",children:[l.jsx(wd,{size:80}),l.jsx("h2",{children:"У вас пока нет заказов"}),l.jsx("p",{children:"Оформите первый заказ в нашем каталоге"}),l.jsx(z,{to:"/catalog",className:"btn btn-primary",children:"Перейти в каталог"})]})]}),l.jsx("style",{children:`
        .orders-page {
          padding: 32px 0 60px;
        }
        .orders-page h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 32px;
        }
        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .order-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: var(--bg-light);
          border-bottom: 1px solid var(--border);
        }
        .order-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .order-id {
          font-weight: 600;
          color: var(--text-dark);
        }
        .order-date {
          font-size: 14px;
          color: var(--text-light);
        }
        .order-status {
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 500;
        }
        .order-status.blue { background: #e3f2fd; color: #1565c0; }
        .order-status.orange { background: #fff3e0; color: #e65100; }
        .order-status.purple { background: #f3e5f5; color: #7b1fa2; }
        .order-status.green { background: #e8f5e9; color: #2e7d32; }
        .order-items {
          padding: 20px 24px;
        }
        .order-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
        }
        .order-item:last-of-type {
          border-bottom: none;
        }
        .order-item img {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .item-details {
          flex: 1;
          min-width: 0;
        }
        .item-title {
          display: block;
          font-weight: 500;
          color: var(--text-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 4px;
        }
        .item-qty {
          font-size: 13px;
          color: var(--text-light);
        }
        .item-price {
          font-weight: 600;
          color: var(--text-dark);
        }
        .more-items {
          padding: 12px 0;
          text-align: center;
          font-size: 14px;
          color: var(--text-light);
        }
        .order-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: var(--bg-light);
          border-top: 1px solid var(--border);
        }
        .order-total {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .order-total span {
          font-size: 14px;
          color: var(--text-medium);
        }
        .order-total strong {
          font-size: 18px;
          color: var(--primary);
        }
        .order-link {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--primary);
          font-weight: 500;
          transition: gap 0.2s;
        }
        .order-link:hover {
          gap: 8px;
        }
        .empty-orders {
          text-align: center;
          padding: 80px 20px;
          background: var(--bg-light);
          border-radius: var(--radius-md);
        }
        .empty-orders svg {
          color: var(--text-light);
          margin-bottom: 24px;
        }
        .empty-orders h2 {
          font-size: 24px;
          margin-bottom: 12px;
        }
        .empty-orders p {
          color: var(--text-light);
          margin-bottom: 32px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 15px;
          transition: all 0.2s;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
        .btn-primary:hover {
          background: var(--primary-dark);
        }
        @media (max-width: 768px) {
          .order-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .order-footer {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          .order-total {
            justify-content: space-between;
          }
        }
      `})]})}function Jh(){return l.jsx(ih,{children:l.jsx(hh,{children:l.jsx(dh,{children:l.jsx(mh,{children:l.jsx(Gm,{children:l.jsxs(fe,{path:"/",element:l.jsx(Uh,{}),children:[l.jsx(fe,{index:!0,element:l.jsx(Fh,{})}),l.jsx(fe,{path:"catalog",element:l.jsx(Bh,{})}),l.jsx(fe,{path:"product/:id",element:l.jsx(Vh,{})}),l.jsx(fe,{path:"cart",element:l.jsx(Hh,{})}),l.jsx(fe,{path:"checkout",element:l.jsx(Wh,{})}),l.jsx(fe,{path:"seller",element:l.jsx(Qh,{})}),l.jsx(fe,{path:"seller/add-product",element:l.jsx(As,{})}),l.jsx(fe,{path:"seller/edit-product/:id",element:l.jsx(As,{})}),l.jsx(fe,{path:"login",element:l.jsx(qh,{})}),l.jsx(fe,{path:"register",element:l.jsx(Yh,{})}),l.jsx(fe,{path:"profile",element:l.jsx(Gh,{})}),l.jsx(fe,{path:"orders",element:l.jsx(Xh,{})})]})})})})})})}yl.createRoot(document.getElementById("root")).render(l.jsx(Xs.StrictMode,{children:l.jsx(Jh,{})}));
