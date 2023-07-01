function tv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wf={exports:{}},Ts={},Hf={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),nv=Symbol.for("react.portal"),rv=Symbol.for("react.fragment"),iv=Symbol.for("react.strict_mode"),ov=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),av=Symbol.for("react.context"),lv=Symbol.for("react.forward_ref"),uv=Symbol.for("react.suspense"),cv=Symbol.for("react.memo"),dv=Symbol.for("react.lazy"),zc=Symbol.iterator;function fv(t){return t===null||typeof t!="object"?null:(t=zc&&t[zc]||t["@@iterator"],typeof t=="function"?t:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qf=Object.assign,Gf={};function kr(t,e,n){this.props=t,this.context=e,this.refs=Gf,this.updater=n||Kf}kr.prototype.isReactComponent={};kr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};kr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jf(){}Jf.prototype=kr.prototype;function uu(t,e,n){this.props=t,this.context=e,this.refs=Gf,this.updater=n||Kf}var cu=uu.prototype=new Jf;cu.constructor=uu;qf(cu,kr.prototype);cu.isPureReactComponent=!0;var Bc=Array.isArray,Yf=Object.prototype.hasOwnProperty,du={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Yf.call(e,r)&&!Qf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$i,type:t,key:o,ref:s,props:i,_owner:du.current}}function hv(t,e){return{$$typeof:$i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fu(t){return typeof t=="object"&&t!==null&&t.$$typeof===$i}function pv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $c=/\/+/g;function aa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pv(""+t.key):e.toString(36)}function Io(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case $i:case nv:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+aa(s,0):r,Bc(i)?(n="",t!=null&&(n=t.replace($c,"$&/")+"/"),Io(i,e,n,"",function(u){return u})):i!=null&&(fu(i)&&(i=hv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace($c,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Bc(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+aa(o,a);s+=Io(o,e,n,l,i)}else if(l=fv(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+aa(o,a++),s+=Io(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ro(t,e,n){if(t==null)return t;var r=[],i=0;return Io(t,r,"","",function(o){return e.call(n,o,i++)}),r}function mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},So={transition:null},gv={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:So,ReactCurrentOwner:du};b.Children={map:ro,forEach:function(t,e,n){ro(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ro(t,function(){e++}),e},toArray:function(t){return ro(t,function(e){return e})||[]},only:function(t){if(!fu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=kr;b.Fragment=rv;b.Profiler=ov;b.PureComponent=uu;b.StrictMode=iv;b.Suspense=uv;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qf({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=du.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yf.call(e,l)&&!Qf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$i,type:t.type,key:i,ref:o,props:r,_owner:s}};b.createContext=function(t){return t={$$typeof:av,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sv,_context:t},t.Consumer=t};b.createElement=Xf;b.createFactory=function(t){var e=Xf.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:lv,render:t}};b.isValidElement=fu;b.lazy=function(t){return{$$typeof:dv,_payload:{_status:-1,_result:t},_init:mv}};b.memo=function(t,e){return{$$typeof:cv,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=So.transition;So.transition={};try{t()}finally{So.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return Ie.current.useCallback(t,e)};b.useContext=function(t){return Ie.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};b.useEffect=function(t,e){return Ie.current.useEffect(t,e)};b.useId=function(){return Ie.current.useId()};b.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return Ie.current.useMemo(t,e)};b.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};b.useRef=function(t){return Ie.current.useRef(t)};b.useState=function(t){return Ie.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return Ie.current.useTransition()};b.version="18.2.0";Hf.exports=b;var k=Hf.exports;const hu=Vf(k),vv=tv({__proto__:null,default:hu},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=k,wv=Symbol.for("react.element"),_v=Symbol.for("react.fragment"),Ev=Object.prototype.hasOwnProperty,Iv=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sv={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Ev.call(e,r)&&!Sv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wv,type:t,key:o,ref:s,props:i,_owner:Iv.current}}Ts.Fragment=_v;Ts.jsx=Zf;Ts.jsxs=Zf;Wf.exports=Ts;var E=Wf.exports,Qa={},eh={exports:{}},Ue={},th={exports:{}},nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,x){var L=P.length;P.push(x);e:for(;0<L;){var Y=L-1>>>1,le=P[Y];if(0<i(le,x))P[Y]=x,P[L]=le,L=Y;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var x=P[0],L=P.pop();if(L!==x){P[0]=L;e:for(var Y=0,le=P.length,to=le>>>1;Y<to;){var hn=2*(Y+1)-1,sa=P[hn],pn=hn+1,no=P[pn];if(0>i(sa,L))pn<le&&0>i(no,sa)?(P[Y]=no,P[pn]=L,Y=pn):(P[Y]=sa,P[hn]=L,Y=hn);else if(pn<le&&0>i(no,L))P[Y]=no,P[pn]=L,Y=pn;else break e}}return x}function i(P,x){var L=P.sortIndex-x.sortIndex;return L!==0?L:P.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,p=3,v=!1,g=!1,y=!1,T=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=P)r(u),x.sortIndex=x.expirationTime,e(l,x);else break;x=n(u)}}function _(P){if(y=!1,m(P),!g)if(n(l)!==null)g=!0,ia(C);else{var x=n(u);x!==null&&oa(_,x.startTime-P)}}function C(P,x){g=!1,y&&(y=!1,h(O),O=-1),v=!0;var L=p;try{for(m(x),d=n(l);d!==null&&(!(d.expirationTime>x)||P&&!qe());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,p=d.priorityLevel;var le=Y(d.expirationTime<=x);x=t.unstable_now(),typeof le=="function"?d.callback=le:d===n(l)&&r(l),m(x)}else r(l);d=n(l)}if(d!==null)var to=!0;else{var hn=n(u);hn!==null&&oa(_,hn.startTime-x),to=!1}return to}finally{d=null,p=L,v=!1}}var N=!1,A=null,O=-1,$=5,D=-1;function qe(){return!(t.unstable_now()-D<$)}function Mr(){if(A!==null){var P=t.unstable_now();D=P;var x=!0;try{x=A(!0,P)}finally{x?Ur():(N=!1,A=null)}}else N=!1}var Ur;if(typeof f=="function")Ur=function(){f(Mr)};else if(typeof MessageChannel<"u"){var jc=new MessageChannel,ev=jc.port2;jc.port1.onmessage=Mr,Ur=function(){ev.postMessage(null)}}else Ur=function(){T(Mr,0)};function ia(P){A=P,N||(N=!0,Ur())}function oa(P,x){O=T(function(){P(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||v||(g=!0,ia(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(p){case 1:case 2:case 3:var x=3;break;default:x=p}var L=p;p=x;try{return P()}finally{p=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,x){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=p;p=P;try{return x()}finally{p=L}},t.unstable_scheduleCallback=function(P,x,L){var Y=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Y+L:Y):L=Y,P){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=L+le,P={id:c++,callback:x,priorityLevel:P,startTime:L,expirationTime:le,sortIndex:-1},L>Y?(P.sortIndex=L,e(u,P),n(l)===null&&P===n(u)&&(y?(h(O),O=-1):y=!0,oa(_,L-Y))):(P.sortIndex=le,e(l,P),g||v||(g=!0,ia(C))),P},t.unstable_shouldYield=qe,t.unstable_wrapCallback=function(P){var x=p;return function(){var L=p;p=x;try{return P.apply(this,arguments)}finally{p=L}}}})(nh);th.exports=nh;var kv=th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=k,Me=kv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ih=new Set,mi={};function Un(t,e){pr(t,e),pr(t+"Capture",e)}function pr(t,e){for(mi[t]=e,t=0;t<e.length;t++)ih.add(e[t])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=Object.prototype.hasOwnProperty,Tv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vc={},Wc={};function Cv(t){return Xa.call(Wc,t)?!0:Xa.call(Vc,t)?!1:Tv.test(t)?Wc[t]=!0:(Vc[t]=!0,!1)}function Rv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pv(t,e,n,r){if(e===null||typeof e>"u"||Rv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Se(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pe[t]=new Se(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pe[e]=new Se(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pe[t]=new Se(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pe[t]=new Se(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pe[t]=new Se(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pe[t]=new Se(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pe[t]=new Se(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pe[t]=new Se(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pe[t]=new Se(t,5,!1,t.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function mu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pu,mu);pe[e]=new Se(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pu,mu);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pu,mu);pe[e]=new Se(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pe[t]=new Se(t,1,!1,t.toLowerCase(),null,!0,!0)});function gu(t,e,n,r){var i=pe.hasOwnProperty(e)?pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pv(e,n,i,r)&&(n=null),r||i===null?Cv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var At=rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),vu=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),oh=Symbol.for("react.provider"),sh=Symbol.for("react.context"),yu=Symbol.for("react.forward_ref"),el=Symbol.for("react.suspense"),tl=Symbol.for("react.suspense_list"),wu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),Hc=Symbol.iterator;function Fr(t){return t===null||typeof t!="object"?null:(t=Hc&&t[Hc]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,la;function Yr(t){if(la===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);la=e&&e[1]||""}return`
`+la+t}var ua=!1;function ca(t,e){if(!t||ua)return"";ua=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ua=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yr(t):""}function Nv(t){switch(t.tag){case 5:return Yr(t.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return t=ca(t.type,!1),t;case 11:return t=ca(t.type.render,!1),t;case 1:return t=ca(t.type,!0),t;default:return""}}function nl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kn:return"Fragment";case Hn:return"Portal";case Za:return"Profiler";case vu:return"StrictMode";case el:return"Suspense";case tl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sh:return(t.displayName||"Context")+".Consumer";case oh:return(t._context.displayName||"Context")+".Provider";case yu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wu:return e=t.displayName||null,e!==null?e:nl(t.type)||"Memo";case Mt:e=t._payload,t=t._init;try{return nl(t(e))}catch{}}return null}function Av(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nl(e);case 8:return e===vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ov(t){var e=lh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=Ov(t))}function uh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rl(t,e){var n=e.checked;return G({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ch(t,e){e=e.checked,e!=null&&gu(t,"checked",e,!1)}function il(t,e){ch(t,e);var n=tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ol(t,e.type,n):e.hasOwnProperty("defaultValue")&&ol(t,e.type,tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ol(t,e,n){(e!=="number"||Wo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qr=Array.isArray;function ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return G({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Qr(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tn(n)}}function dh(t,e){var n=tn(e.value),r=tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,hh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xv=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(t){xv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ni[e]=ni[t]})});function ph(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ni.hasOwnProperty(t)&&ni[t]?(""+e).trim():e+"px"}function mh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ph(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Lv=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(t,e){if(e){if(Lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ul(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dl=null,or=null,sr=null;function Yc(t){if(t=Hi(t)){if(typeof dl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=As(e),dl(t.stateNode,t.type,e))}}function gh(t){or?sr?sr.push(t):sr=[t]:or=t}function vh(){if(or){var t=or,e=sr;if(sr=or=null,Yc(t),e)for(t=0;t<e.length;t++)Yc(e[t])}}function yh(t,e){return t(e)}function wh(){}var da=!1;function _h(t,e,n){if(da)return t(e,n);da=!0;try{return yh(t,e,n)}finally{da=!1,(or!==null||sr!==null)&&(wh(),vh())}}function vi(t,e){var n=t.stateNode;if(n===null)return null;var r=As(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var fl=!1;if(Tt)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){fl=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{fl=!1}function Dv(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ri=!1,Ho=null,Ko=!1,hl=null,bv={onError:function(t){ri=!0,Ho=t}};function Mv(t,e,n,r,i,o,s,a,l){ri=!1,Ho=null,Dv.apply(bv,arguments)}function Uv(t,e,n,r,i,o,s,a,l){if(Mv.apply(this,arguments),ri){if(ri){var u=Ho;ri=!1,Ho=null}else throw Error(I(198));Ko||(Ko=!0,hl=u)}}function Fn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Eh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qc(t){if(Fn(t)!==t)throw Error(I(188))}function Fv(t){var e=t.alternate;if(!e){if(e=Fn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qc(i),t;if(o===r)return Qc(i),e;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Ih(t){return t=Fv(t),t!==null?Sh(t):null}function Sh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sh(t);if(e!==null)return e;t=t.sibling}return null}var kh=Me.unstable_scheduleCallback,Xc=Me.unstable_cancelCallback,jv=Me.unstable_shouldYield,zv=Me.unstable_requestPaint,Q=Me.unstable_now,Bv=Me.unstable_getCurrentPriorityLevel,Eu=Me.unstable_ImmediatePriority,Th=Me.unstable_UserBlockingPriority,qo=Me.unstable_NormalPriority,$v=Me.unstable_LowPriority,Ch=Me.unstable_IdlePriority,Cs=null,dt=null;function Vv(t){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Cs,t,void 0,(t.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Kv,Wv=Math.log,Hv=Math.LN2;function Kv(t){return t>>>=0,t===0?32:31-(Wv(t)/Hv|0)|0}var ao=64,lo=4194304;function Xr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Go(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Xr(a):(o&=s,o!==0&&(r=Xr(o)))}else s=n&~i,s!==0?r=Xr(s):o!==0&&(r=Xr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xe(e),i=1<<n,r|=t[n],e&=~i;return r}function qv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=qv(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function pl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rh(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function fa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xe(e),t[e]=n}function Jv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Xe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Iu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function Ph(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nh,Su,Ah,Oh,xh,ml=!1,uo=[],Wt=null,Ht=null,Kt=null,yi=new Map,wi=new Map,Ft=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zc(t,e){switch(t){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wi.delete(e.pointerId)}}function zr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Hi(e),e!==null&&Su(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Qv(t,e,n,r,i){switch(e){case"focusin":return Wt=zr(Wt,t,e,n,r,i),!0;case"dragenter":return Ht=zr(Ht,t,e,n,r,i),!0;case"mouseover":return Kt=zr(Kt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return yi.set(o,zr(yi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wi.set(o,zr(wi.get(o)||null,t,e,n,r,i)),!0}return!1}function Lh(t){var e=yn(t.target);if(e!==null){var n=Fn(e);if(n!==null){if(e=n.tag,e===13){if(e=Eh(n),e!==null){t.blockedOn=e,xh(t.priority,function(){Ah(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cl=r,n.target.dispatchEvent(r),cl=null}else return e=Hi(n),e!==null&&Su(e),t.blockedOn=n,!1;e.shift()}return!0}function ed(t,e,n){ko(t)&&n.delete(e)}function Xv(){ml=!1,Wt!==null&&ko(Wt)&&(Wt=null),Ht!==null&&ko(Ht)&&(Ht=null),Kt!==null&&ko(Kt)&&(Kt=null),yi.forEach(ed),wi.forEach(ed)}function Br(t,e){t.blockedOn===e&&(t.blockedOn=null,ml||(ml=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,Xv)))}function _i(t){function e(i){return Br(i,t)}if(0<uo.length){Br(uo[0],t);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wt!==null&&Br(Wt,t),Ht!==null&&Br(Ht,t),Kt!==null&&Br(Kt,t),yi.forEach(e),wi.forEach(e),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Ft.shift()}var ar=At.ReactCurrentBatchConfig,Jo=!0;function Zv(t,e,n,r){var i=j,o=ar.transition;ar.transition=null;try{j=1,ku(t,e,n,r)}finally{j=i,ar.transition=o}}function ey(t,e,n,r){var i=j,o=ar.transition;ar.transition=null;try{j=4,ku(t,e,n,r)}finally{j=i,ar.transition=o}}function ku(t,e,n,r){if(Jo){var i=gl(t,e,n,r);if(i===null)Ia(t,e,r,Yo,n),Zc(t,r);else if(Qv(i,t,e,n,r))r.stopPropagation();else if(Zc(t,r),e&4&&-1<Yv.indexOf(t)){for(;i!==null;){var o=Hi(i);if(o!==null&&Nh(o),o=gl(t,e,n,r),o===null&&Ia(t,e,r,Yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ia(t,e,r,null,n)}}var Yo=null;function gl(t,e,n,r){if(Yo=null,t=_u(r),t=yn(t),t!==null)if(e=Fn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Eh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yo=t,null}function Dh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bv()){case Eu:return 1;case Th:return 4;case qo:case $v:return 16;case Ch:return 536870912;default:return 16}default:return 16}}var zt=null,Tu=null,To=null;function bh(){if(To)return To;var t,e=Tu,n=e.length,r,i="value"in zt?zt.value:zt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return To=i.slice(t,1<r?1-r:void 0)}function Co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function td(){return!1}function Fe(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?co:td,this.isPropagationStopped=td,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=Fe(Tr),Wi=G({},Tr,{view:0,detail:0}),ty=Fe(Wi),ha,pa,$r,Rs=G({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(ha=t.screenX-$r.screenX,pa=t.screenY-$r.screenY):pa=ha=0,$r=t),ha)},movementY:function(t){return"movementY"in t?t.movementY:pa}}),nd=Fe(Rs),ny=G({},Rs,{dataTransfer:0}),ry=Fe(ny),iy=G({},Wi,{relatedTarget:0}),ma=Fe(iy),oy=G({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=Fe(oy),ay=G({},Tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ly=Fe(ay),uy=G({},Tr,{data:0}),rd=Fe(uy),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fy[t])?!!e[t]:!1}function Ru(){return hy}var py=G({},Wi,{key:function(t){if(t.key){var e=cy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?Co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),my=Fe(py),gy=G({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),id=Fe(gy),vy=G({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),yy=Fe(vy),wy=G({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_y=Fe(wy),Ey=G({},Rs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=Fe(Ey),Sy=[9,13,27,32],Pu=Tt&&"CompositionEvent"in window,ii=null;Tt&&"documentMode"in document&&(ii=document.documentMode);var ky=Tt&&"TextEvent"in window&&!ii,Mh=Tt&&(!Pu||ii&&8<ii&&11>=ii),od=String.fromCharCode(32),sd=!1;function Uh(t,e){switch(t){case"keyup":return Sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qn=!1;function Ty(t,e){switch(t){case"compositionend":return Fh(e);case"keypress":return e.which!==32?null:(sd=!0,od);case"textInput":return t=e.data,t===od&&sd?null:t;default:return null}}function Cy(t,e){if(qn)return t==="compositionend"||!Pu&&Uh(t,e)?(t=bh(),To=Tu=zt=null,qn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mh&&e.locale!=="ko"?null:e.data;default:return null}}var Ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ry[t.type]:e==="textarea"}function jh(t,e,n,r){gh(r),e=Qo(e,"onChange"),0<e.length&&(n=new Cu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oi=null,Ei=null;function Py(t){Yh(t,0)}function Ps(t){var e=Yn(t);if(uh(e))return t}function Ny(t,e){if(t==="change")return e}var zh=!1;if(Tt){var ga;if(Tt){var va="oninput"in document;if(!va){var ld=document.createElement("div");ld.setAttribute("oninput","return;"),va=typeof ld.oninput=="function"}ga=va}else ga=!1;zh=ga&&(!document.documentMode||9<document.documentMode)}function ud(){oi&&(oi.detachEvent("onpropertychange",Bh),Ei=oi=null)}function Bh(t){if(t.propertyName==="value"&&Ps(Ei)){var e=[];jh(e,Ei,t,_u(t)),_h(Py,e)}}function Ay(t,e,n){t==="focusin"?(ud(),oi=e,Ei=n,oi.attachEvent("onpropertychange",Bh)):t==="focusout"&&ud()}function Oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ps(Ei)}function xy(t,e){if(t==="click")return Ps(e)}function Ly(t,e){if(t==="input"||t==="change")return Ps(e)}function Dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var et=typeof Object.is=="function"?Object.is:Dy;function Ii(t,e){if(et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xa.call(e,i)||!et(t[i],e[i]))return!1}return!0}function cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dd(t,e){var n=cd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cd(n)}}function $h(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$h(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vh(){for(var t=window,e=Wo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wo(t.document)}return e}function Nu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function by(t){var e=Vh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$h(n.ownerDocument.documentElement,n)){if(r!==null&&Nu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=dd(n,o);var s=dd(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var My=Tt&&"documentMode"in document&&11>=document.documentMode,Gn=null,vl=null,si=null,yl=!1;function fd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yl||Gn==null||Gn!==Wo(r)||(r=Gn,"selectionStart"in r&&Nu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),si&&Ii(si,r)||(si=r,r=Qo(vl,"onSelect"),0<r.length&&(e=new Cu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gn)))}function fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Jn={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},ya={},Wh={};Tt&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function Ns(t){if(ya[t])return ya[t];if(!Jn[t])return t;var e=Jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wh)return ya[t]=e[n];return t}var Hh=Ns("animationend"),Kh=Ns("animationiteration"),qh=Ns("animationstart"),Gh=Ns("transitionend"),Jh=new Map,hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ln(t,e){Jh.set(t,e),Un(e,[t])}for(var wa=0;wa<hd.length;wa++){var _a=hd[wa],Uy=_a.toLowerCase(),Fy=_a[0].toUpperCase()+_a.slice(1);ln(Uy,"on"+Fy)}ln(Hh,"onAnimationEnd");ln(Kh,"onAnimationIteration");ln(qh,"onAnimationStart");ln("dblclick","onDoubleClick");ln("focusin","onFocus");ln("focusout","onBlur");ln(Gh,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function pd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Uv(r,e,void 0,t),t.currentTarget=null}function Yh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;pd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;pd(i,a,u),o=l}}}if(Ko)throw t=hl,Ko=!1,hl=null,t}function V(t,e){var n=e[Sl];n===void 0&&(n=e[Sl]=new Set);var r=t+"__bubble";n.has(r)||(Qh(e,t,2,!1),n.add(r))}function Ea(t,e,n){var r=0;e&&(r|=4),Qh(n,t,r,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Si(t){if(!t[ho]){t[ho]=!0,ih.forEach(function(n){n!=="selectionchange"&&(jy.has(n)||Ea(n,!1,t),Ea(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,Ea("selectionchange",!1,e))}}function Qh(t,e,n,r){switch(Dh(e)){case 1:var i=Zv;break;case 4:i=ey;break;default:i=ku}n=i.bind(null,e,n,t),i=void 0,!fl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ia(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=yn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}_h(function(){var u=o,c=_u(n),d=[];e:{var p=Jh.get(t);if(p!==void 0){var v=Cu,g=t;switch(t){case"keypress":if(Co(n)===0)break e;case"keydown":case"keyup":v=my;break;case"focusin":g="focus",v=ma;break;case"focusout":g="blur",v=ma;break;case"beforeblur":case"afterblur":v=ma;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yy;break;case Hh:case Kh:case qh:v=sy;break;case Gh:v=_y;break;case"scroll":v=ty;break;case"wheel":v=Iy;break;case"copy":case"cut":case"paste":v=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=id}var y=(e&4)!==0,T=!y&&t==="scroll",h=y?p!==null?p+"Capture":null:p;y=[];for(var f=u,m;f!==null;){m=f;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,h!==null&&(_=vi(f,h),_!=null&&y.push(ki(f,_,m)))),T)break;f=f.return}0<y.length&&(p=new v(p,g,null,n,c),d.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==cl&&(g=n.relatedTarget||n.fromElement)&&(yn(g)||g[Ct]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?yn(g):null,g!==null&&(T=Fn(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=nd,_="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=id,_="onPointerLeave",h="onPointerEnter",f="pointer"),T=v==null?p:Yn(v),m=g==null?p:Yn(g),p=new y(_,f+"leave",v,n,c),p.target=T,p.relatedTarget=m,_=null,yn(c)===u&&(y=new y(h,f+"enter",g,n,c),y.target=m,y.relatedTarget=T,_=y),T=_,v&&g)t:{for(y=v,h=g,f=0,m=y;m;m=$n(m))f++;for(m=0,_=h;_;_=$n(_))m++;for(;0<f-m;)y=$n(y),f--;for(;0<m-f;)h=$n(h),m--;for(;f--;){if(y===h||h!==null&&y===h.alternate)break t;y=$n(y),h=$n(h)}y=null}else y=null;v!==null&&md(d,p,v,y,!1),g!==null&&T!==null&&md(d,T,g,y,!0)}}e:{if(p=u?Yn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var C=Ny;else if(ad(p))if(zh)C=Ly;else{C=Oy;var N=Ay}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=xy);if(C&&(C=C(t,u))){jh(d,C,n,c);break e}N&&N(t,p,u),t==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&ol(p,"number",p.value)}switch(N=u?Yn(u):window,t){case"focusin":(ad(N)||N.contentEditable==="true")&&(Gn=N,vl=u,si=null);break;case"focusout":si=vl=Gn=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,fd(d,n,c);break;case"selectionchange":if(My)break;case"keydown":case"keyup":fd(d,n,c)}var A;if(Pu)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else qn?Uh(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Mh&&n.locale!=="ko"&&(qn||O!=="onCompositionStart"?O==="onCompositionEnd"&&qn&&(A=bh()):(zt=c,Tu="value"in zt?zt.value:zt.textContent,qn=!0)),N=Qo(u,O),0<N.length&&(O=new rd(O,t,null,n,c),d.push({event:O,listeners:N}),A?O.data=A:(A=Fh(n),A!==null&&(O.data=A)))),(A=ky?Ty(t,n):Cy(t,n))&&(u=Qo(u,"onBeforeInput"),0<u.length&&(c=new rd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Yh(d,e)})}function ki(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vi(t,n),o!=null&&r.unshift(ki(t,o,i)),o=vi(t,e),o!=null&&r.push(ki(t,o,i))),t=t.return}return r}function $n(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function md(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vi(n,o),l!=null&&s.unshift(ki(n,l,a))):i||(l=vi(n,o),l!=null&&s.push(ki(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var zy=/\r\n?/g,By=/\u0000|\uFFFD/g;function gd(t){return(typeof t=="string"?t:""+t).replace(zy,`
`).replace(By,"")}function po(t,e,n){if(e=gd(e),gd(t)!==e&&n)throw Error(I(425))}function Xo(){}var wl=null,_l=null;function El(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,$y=typeof clearTimeout=="function"?clearTimeout:void 0,vd=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof vd<"u"?function(t){return vd.resolve(null).then(t).catch(Wy)}:Il;function Wy(t){setTimeout(function(){throw t})}function Sa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_i(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_i(e)}function qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),it="__reactFiber$"+Cr,Ti="__reactProps$"+Cr,Ct="__reactContainer$"+Cr,Sl="__reactEvents$"+Cr,Hy="__reactListeners$"+Cr,Ky="__reactHandles$"+Cr;function yn(t){var e=t[it];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ct]||n[it]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yd(t);t!==null;){if(n=t[it])return n;t=yd(t)}return e}t=n,n=t.parentNode}return null}function Hi(t){return t=t[it]||t[Ct],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function As(t){return t[Ti]||null}var kl=[],Qn=-1;function un(t){return{current:t}}function W(t){0>Qn||(t.current=kl[Qn],kl[Qn]=null,Qn--)}function B(t,e){Qn++,kl[Qn]=t.current,t.current=e}var nn={},we=un(nn),Re=un(!1),Rn=nn;function mr(t,e){var n=t.type.contextTypes;if(!n)return nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(t){return t=t.childContextTypes,t!=null}function Zo(){W(Re),W(we)}function wd(t,e,n){if(we.current!==nn)throw Error(I(168));B(we,e),B(Re,n)}function Xh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Av(t)||"Unknown",i));return G({},n,r)}function es(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nn,Rn=we.current,B(we,t),B(Re,Re.current),!0}function _d(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Xh(t,e,Rn),r.__reactInternalMemoizedMergedChildContext=t,W(Re),W(we),B(we,t)):W(Re),B(Re,n)}var gt=null,Os=!1,ka=!1;function Zh(t){gt===null?gt=[t]:gt.push(t)}function qy(t){Os=!0,Zh(t)}function cn(){if(!ka&&gt!==null){ka=!0;var t=0,e=j;try{var n=gt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gt=null,Os=!1}catch(i){throw gt!==null&&(gt=gt.slice(t+1)),kh(Eu,cn),i}finally{j=e,ka=!1}}return null}var Xn=[],Zn=0,ts=null,ns=0,je=[],ze=0,Pn=null,vt=1,yt="";function mn(t,e){Xn[Zn++]=ns,Xn[Zn++]=ts,ts=t,ns=e}function ep(t,e,n){je[ze++]=vt,je[ze++]=yt,je[ze++]=Pn,Pn=t;var r=vt;t=yt;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var o=32-Xe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,vt=1<<32-Xe(e)+i|n<<i|r,yt=o+t}else vt=1<<o|n<<i|r,yt=t}function Au(t){t.return!==null&&(mn(t,1),ep(t,1,0))}function Ou(t){for(;t===ts;)ts=Xn[--Zn],Xn[Zn]=null,ns=Xn[--Zn],Xn[Zn]=null;for(;t===Pn;)Pn=je[--ze],je[ze]=null,yt=je[--ze],je[ze]=null,vt=je[--ze],je[ze]=null}var be=null,Le=null,H=!1,Qe=null;function tp(t,e){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ed(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,be=t,Le=qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,be=t,Le=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pn!==null?{id:vt,overflow:yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,be=t,Le=null,!0):!1;default:return!1}}function Tl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cl(t){if(H){var e=Le;if(e){var n=e;if(!Ed(t,e)){if(Tl(t))throw Error(I(418));e=qt(n.nextSibling);var r=be;e&&Ed(t,e)?tp(r,n):(t.flags=t.flags&-4097|2,H=!1,be=t)}}else{if(Tl(t))throw Error(I(418));t.flags=t.flags&-4097|2,H=!1,be=t}}}function Id(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;be=t}function mo(t){if(t!==be)return!1;if(!H)return Id(t),H=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!El(t.type,t.memoizedProps)),e&&(e=Le)){if(Tl(t))throw np(),Error(I(418));for(;e;)tp(t,e),e=qt(e.nextSibling)}if(Id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Le=qt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Le=null}}else Le=be?qt(t.stateNode.nextSibling):null;return!0}function np(){for(var t=Le;t;)t=qt(t.nextSibling)}function gr(){Le=be=null,H=!1}function xu(t){Qe===null?Qe=[t]:Qe.push(t)}var Gy=At.ReactCurrentBatchConfig;function Je(t,e){if(t&&t.defaultProps){e=G({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var rs=un(null),is=null,er=null,Lu=null;function Du(){Lu=er=is=null}function bu(t){var e=rs.current;W(rs),t._currentValue=e}function Rl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lr(t,e){is=t,Lu=er=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ce=!0),t.firstContext=null)}function We(t){var e=t._currentValue;if(Lu!==t)if(t={context:t,memoizedValue:e,next:null},er===null){if(is===null)throw Error(I(308));er=t,is.dependencies={lanes:0,firstContext:t}}else er=er.next=t;return e}var wn=null;function Mu(t){wn===null?wn=[t]:wn.push(t)}function rp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rt(t,r)}function Rt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Et(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rt(t,n)}return i=r.interleaved,i===null?(e.next=e,Mu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rt(t,n)}function Ro(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Iu(t,n)}}function Sd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function os(t,e,n,r){var i=t.updateQueue;Ut=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var p=a.lane,v=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(p=e,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(v,d,p);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(v,d,p):g,p==null)break e;d=G({},d,p);break e;case 2:Ut=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=v,l=d):c=c.next=v,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);An|=s,t.lanes=s,t.memoizedState=d}}function kd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var op=new rh.Component().refs;function Pl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:G({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xs={isMounted:function(t){return(t=t._reactInternals)?Fn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=Yt(t),o=Et(r,i);o.payload=e,n!=null&&(o.callback=n),e=Gt(t,o,i),e!==null&&(Ze(e,t,i,r),Ro(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ee(),i=Yt(t),o=Et(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Gt(t,o,i),e!==null&&(Ze(e,t,i,r),Ro(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ee(),r=Yt(t),i=Et(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gt(t,i,r),e!==null&&(Ze(e,t,r,n),Ro(e,t,r))}};function Td(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,o):!0}function sp(t,e,n){var r=!1,i=nn,o=e.contextType;return typeof o=="object"&&o!==null?o=We(o):(i=Pe(e)?Rn:we.current,r=e.contextTypes,o=(r=r!=null)?mr(t,i):nn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xs,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Cd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xs.enqueueReplaceState(e,e.state,null)}function Nl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=op,Uu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=We(o):(o=Pe(e)?Rn:we.current,i.context=mr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Pl(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xs.enqueueReplaceState(i,i.state,null),os(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===op&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rd(t){var e=t._init;return e(t._payload)}function ap(t){function e(h,f){if(t){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=Qt(h,f),h.index=0,h.sibling=null,h}function o(h,f,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,f,m,_){return f===null||f.tag!==6?(f=Oa(m,h.mode,_),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,_){var C=m.type;return C===Kn?c(h,f,m.props.children,_,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mt&&Rd(C)===f.type)?(_=i(f,m.props),_.ref=Vr(h,f,m),_.return=h,_):(_=Lo(m.type,m.key,m.props,null,h.mode,_),_.ref=Vr(h,f,m),_.return=h,_)}function u(h,f,m,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=xa(m,h.mode,_),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,_,C){return f===null||f.tag!==7?(f=Sn(m,h.mode,_,C),f.return=h,f):(f=i(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Oa(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case io:return m=Lo(f.type,f.key,f.props,null,h.mode,m),m.ref=Vr(h,null,f),m.return=h,m;case Hn:return f=xa(f,h.mode,m),f.return=h,f;case Mt:var _=f._init;return d(h,_(f._payload),m)}if(Qr(f)||Fr(f))return f=Sn(f,h.mode,m,null),f.return=h,f;go(h,f)}return null}function p(h,f,m,_){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(h,f,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case io:return m.key===C?l(h,f,m,_):null;case Hn:return m.key===C?u(h,f,m,_):null;case Mt:return C=m._init,p(h,f,C(m._payload),_)}if(Qr(m)||Fr(m))return C!==null?null:c(h,f,m,_,null);go(h,m)}return null}function v(h,f,m,_,C){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(m)||null,a(f,h,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case io:return h=h.get(_.key===null?m:_.key)||null,l(f,h,_,C);case Hn:return h=h.get(_.key===null?m:_.key)||null,u(f,h,_,C);case Mt:var N=_._init;return v(h,f,m,N(_._payload),C)}if(Qr(_)||Fr(_))return h=h.get(m)||null,c(f,h,_,C,null);go(f,_)}return null}function g(h,f,m,_){for(var C=null,N=null,A=f,O=f=0,$=null;A!==null&&O<m.length;O++){A.index>O?($=A,A=null):$=A.sibling;var D=p(h,A,m[O],_);if(D===null){A===null&&(A=$);break}t&&A&&D.alternate===null&&e(h,A),f=o(D,f,O),N===null?C=D:N.sibling=D,N=D,A=$}if(O===m.length)return n(h,A),H&&mn(h,O),C;if(A===null){for(;O<m.length;O++)A=d(h,m[O],_),A!==null&&(f=o(A,f,O),N===null?C=A:N.sibling=A,N=A);return H&&mn(h,O),C}for(A=r(h,A);O<m.length;O++)$=v(A,h,O,m[O],_),$!==null&&(t&&$.alternate!==null&&A.delete($.key===null?O:$.key),f=o($,f,O),N===null?C=$:N.sibling=$,N=$);return t&&A.forEach(function(qe){return e(h,qe)}),H&&mn(h,O),C}function y(h,f,m,_){var C=Fr(m);if(typeof C!="function")throw Error(I(150));if(m=C.call(m),m==null)throw Error(I(151));for(var N=C=null,A=f,O=f=0,$=null,D=m.next();A!==null&&!D.done;O++,D=m.next()){A.index>O?($=A,A=null):$=A.sibling;var qe=p(h,A,D.value,_);if(qe===null){A===null&&(A=$);break}t&&A&&qe.alternate===null&&e(h,A),f=o(qe,f,O),N===null?C=qe:N.sibling=qe,N=qe,A=$}if(D.done)return n(h,A),H&&mn(h,O),C;if(A===null){for(;!D.done;O++,D=m.next())D=d(h,D.value,_),D!==null&&(f=o(D,f,O),N===null?C=D:N.sibling=D,N=D);return H&&mn(h,O),C}for(A=r(h,A);!D.done;O++,D=m.next())D=v(A,h,O,D.value,_),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?O:D.key),f=o(D,f,O),N===null?C=D:N.sibling=D,N=D);return t&&A.forEach(function(Mr){return e(h,Mr)}),H&&mn(h,O),C}function T(h,f,m,_){if(typeof m=="object"&&m!==null&&m.type===Kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case io:e:{for(var C=m.key,N=f;N!==null;){if(N.key===C){if(C=m.type,C===Kn){if(N.tag===7){n(h,N.sibling),f=i(N,m.props.children),f.return=h,h=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Mt&&Rd(C)===N.type){n(h,N.sibling),f=i(N,m.props),f.ref=Vr(h,N,m),f.return=h,h=f;break e}n(h,N);break}else e(h,N);N=N.sibling}m.type===Kn?(f=Sn(m.props.children,h.mode,_,m.key),f.return=h,h=f):(_=Lo(m.type,m.key,m.props,null,h.mode,_),_.ref=Vr(h,f,m),_.return=h,h=_)}return s(h);case Hn:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else e(h,f);f=f.sibling}f=xa(m,h.mode,_),f.return=h,h=f}return s(h);case Mt:return N=m._init,T(h,f,N(m._payload),_)}if(Qr(m))return g(h,f,m,_);if(Fr(m))return y(h,f,m,_);go(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Oa(m,h.mode,_),f.return=h,h=f),s(h)):n(h,f)}return T}var vr=ap(!0),lp=ap(!1),Ki={},ft=un(Ki),Ci=un(Ki),Ri=un(Ki);function _n(t){if(t===Ki)throw Error(I(174));return t}function Fu(t,e){switch(B(Ri,e),B(Ci,t),B(ft,Ki),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:al(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=al(e,t)}W(ft),B(ft,e)}function yr(){W(ft),W(Ci),W(Ri)}function up(t){_n(Ri.current);var e=_n(ft.current),n=al(e,t.type);e!==n&&(B(Ci,t),B(ft,n))}function ju(t){Ci.current===t&&(W(ft),W(Ci))}var K=un(0);function ss(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ta=[];function zu(){for(var t=0;t<Ta.length;t++)Ta[t]._workInProgressVersionPrimary=null;Ta.length=0}var Po=At.ReactCurrentDispatcher,Ca=At.ReactCurrentBatchConfig,Nn=0,q=null,ie=null,ue=null,as=!1,ai=!1,Pi=0,Jy=0;function ge(){throw Error(I(321))}function Bu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!et(t[n],e[n]))return!1;return!0}function $u(t,e,n,r,i,o){if(Nn=o,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Po.current=t===null||t.memoizedState===null?Zy:e0,t=n(r,i),ai){o=0;do{if(ai=!1,Pi=0,25<=o)throw Error(I(301));o+=1,ue=ie=null,e.updateQueue=null,Po.current=t0,t=n(r,i)}while(ai)}if(Po.current=ls,e=ie!==null&&ie.next!==null,Nn=0,ue=ie=q=null,as=!1,e)throw Error(I(300));return t}function Vu(){var t=Pi!==0;return Pi=0,t}function rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=t:ue=ue.next=t,ue}function He(){if(ie===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ue===null?q.memoizedState:ue.next;if(e!==null)ue=e,ie=t;else{if(t===null)throw Error(I(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?q.memoizedState=ue=t:ue=ue.next=t}return ue}function Ni(t,e){return typeof e=="function"?e(t):e}function Ra(t){var e=He(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Nn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,q.lanes|=c,An|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,et(r,e.memoizedState)||(Ce=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,q.lanes|=o,An|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pa(t){var e=He(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);et(o,e.memoizedState)||(Ce=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function cp(){}function dp(t,e){var n=q,r=He(),i=e(),o=!et(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Wu(pp.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Ai(9,hp.bind(null,n,r,i,e),void 0,null),ce===null)throw Error(I(349));Nn&30||fp(n,e,i)}return i}function fp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hp(t,e,n,r){e.value=n,e.getSnapshot=r,mp(e)&&gp(t)}function pp(t,e,n){return n(function(){mp(e)&&gp(t)})}function mp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!et(t,n)}catch{return!0}}function gp(t){var e=Rt(t,1);e!==null&&Ze(e,t,1,-1)}function Pd(t){var e=rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},e.queue=t,t=t.dispatch=Xy.bind(null,q,t),[e.memoizedState,t]}function Ai(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vp(){return He().memoizedState}function No(t,e,n,r){var i=rt();q.flags|=t,i.memoizedState=Ai(1|e,n,void 0,r===void 0?null:r)}function Ls(t,e,n,r){var i=He();r=r===void 0?null:r;var o=void 0;if(ie!==null){var s=ie.memoizedState;if(o=s.destroy,r!==null&&Bu(r,s.deps)){i.memoizedState=Ai(e,n,o,r);return}}q.flags|=t,i.memoizedState=Ai(1|e,n,o,r)}function Nd(t,e){return No(8390656,8,t,e)}function Wu(t,e){return Ls(2048,8,t,e)}function yp(t,e){return Ls(4,2,t,e)}function wp(t,e){return Ls(4,4,t,e)}function _p(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ep(t,e,n){return n=n!=null?n.concat([t]):null,Ls(4,4,_p.bind(null,e,t),n)}function Hu(){}function Ip(t,e){var n=He();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sp(t,e){var n=He();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kp(t,e,n){return Nn&21?(et(n,e)||(n=Rh(),q.lanes|=n,An|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ce=!0),t.memoizedState=n)}function Yy(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=Ca.transition;Ca.transition={};try{t(!1),e()}finally{j=n,Ca.transition=r}}function Tp(){return He().memoizedState}function Qy(t,e,n){var r=Yt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cp(t))Rp(e,n);else if(n=rp(t,e,n,r),n!==null){var i=Ee();Ze(n,t,r,i),Pp(n,e,r)}}function Xy(t,e,n){var r=Yt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cp(t))Rp(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,s)){var l=e.interleaved;l===null?(i.next=i,Mu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rp(t,e,i,r),n!==null&&(i=Ee(),Ze(n,t,r,i),Pp(n,e,r))}}function Cp(t){var e=t.alternate;return t===q||e!==null&&e===q}function Rp(t,e){ai=as=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Iu(t,n)}}var ls={readContext:We,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Zy={readContext:We,useCallback:function(t,e){return rt().memoizedState=[t,e===void 0?null:e],t},useContext:We,useEffect:Nd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,No(4194308,4,_p.bind(null,e,t),n)},useLayoutEffect:function(t,e){return No(4194308,4,t,e)},useInsertionEffect:function(t,e){return No(4,2,t,e)},useMemo:function(t,e){var n=rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Qy.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=rt();return t={current:t},e.memoizedState=t},useState:Pd,useDebugValue:Hu,useDeferredValue:function(t){return rt().memoizedState=t},useTransition:function(){var t=Pd(!1),e=t[0];return t=Yy.bind(null,t[1]),rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=rt();if(H){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ce===null)throw Error(I(349));Nn&30||fp(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Nd(pp.bind(null,r,o,t),[t]),r.flags|=2048,Ai(9,hp.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=rt(),e=ce.identifierPrefix;if(H){var n=yt,r=vt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},e0={readContext:We,useCallback:Ip,useContext:We,useEffect:Wu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:wp,useMemo:Sp,useReducer:Ra,useRef:vp,useState:function(){return Ra(Ni)},useDebugValue:Hu,useDeferredValue:function(t){var e=He();return kp(e,ie.memoizedState,t)},useTransition:function(){var t=Ra(Ni)[0],e=He().memoizedState;return[t,e]},useMutableSource:cp,useSyncExternalStore:dp,useId:Tp,unstable_isNewReconciler:!1},t0={readContext:We,useCallback:Ip,useContext:We,useEffect:Wu,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:wp,useMemo:Sp,useReducer:Pa,useRef:vp,useState:function(){return Pa(Ni)},useDebugValue:Hu,useDeferredValue:function(t){var e=He();return ie===null?e.memoizedState=t:kp(e,ie.memoizedState,t)},useTransition:function(){var t=Pa(Ni)[0],e=He().memoizedState;return[t,e]},useMutableSource:cp,useSyncExternalStore:dp,useId:Tp,unstable_isNewReconciler:!1};function wr(t,e){try{var n="",r=e;do n+=Nv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Na(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Al(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Np(t,e,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){cs||(cs=!0,zl=r),Al(t,e)},n}function Ap(t,e,n){n=Et(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Al(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Al(t,e),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ad(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new n0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=g0.bind(null,t,e,n),e.then(t,t))}function Od(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Et(-1,1),e.tag=2,Gt(n,e,1))),n.lanes|=1),t)}var r0=At.ReactCurrentOwner,Ce=!1;function _e(t,e,n,r){e.child=t===null?lp(e,null,n,r):vr(e,t.child,n,r)}function Ld(t,e,n,r,i){n=n.render;var o=e.ref;return lr(e,i),r=$u(t,e,n,r,o,i),n=Vu(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(H&&n&&Au(e),e.flags|=1,_e(t,e,r,i),e.child)}function Dd(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Zu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Op(t,e,o,r,i)):(t=Lo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(s,r)&&t.ref===e.ref)return Pt(t,e,i)}return e.flags|=1,t=Qt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Op(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ii(o,r)&&t.ref===e.ref)if(Ce=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ce=!0);else return e.lanes=t.lanes,Pt(t,e,i)}return Ol(t,e,n,r,i)}function xp(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(nr,Oe),Oe|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,B(nr,Oe),Oe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,B(nr,Oe),Oe|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,B(nr,Oe),Oe|=r;return _e(t,e,i,n),e.child}function Lp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ol(t,e,n,r,i){var o=Pe(n)?Rn:we.current;return o=mr(e,o),lr(e,i),n=$u(t,e,n,r,o,i),r=Vu(),t!==null&&!Ce?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pt(t,e,i)):(H&&r&&Au(e),e.flags|=1,_e(t,e,n,i),e.child)}function bd(t,e,n,r,i){if(Pe(n)){var o=!0;es(e)}else o=!1;if(lr(e,i),e.stateNode===null)Ao(t,e),sp(e,n,r),Nl(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Pe(n)?Rn:we.current,u=mr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Cd(e,s,r,u),Ut=!1;var p=e.memoizedState;s.state=p,os(e,r,s,i),l=e.memoizedState,a!==r||p!==l||Re.current||Ut?(typeof c=="function"&&(Pl(e,n,c,r),l=e.memoizedState),(a=Ut||Td(e,n,a,r,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ip(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Je(e.type,a),s.props=u,d=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=We(l):(l=Pe(n)?Rn:we.current,l=mr(e,l));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Cd(e,s,r,l),Ut=!1,p=e.memoizedState,s.state=p,os(e,r,s,i);var g=e.memoizedState;a!==d||p!==g||Re.current||Ut?(typeof v=="function"&&(Pl(e,n,v,r),g=e.memoizedState),(u=Ut||Td(e,n,u,r,p,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),s.props=r,s.state=g,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return xl(t,e,n,r,o,i)}function xl(t,e,n,r,i,o){Lp(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&_d(e,n,!1),Pt(t,e,o);r=e.stateNode,r0.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=vr(e,t.child,null,o),e.child=vr(e,null,a,o)):_e(t,e,a,o),e.memoizedState=r.state,i&&_d(e,n,!0),e.child}function Dp(t){var e=t.stateNode;e.pendingContext?wd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wd(t,e.context,!1),Fu(t,e.containerInfo)}function Md(t,e,n,r,i){return gr(),xu(i),e.flags|=256,_e(t,e,n,r),e.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(t){return{baseLanes:t,cachePool:null,transitions:null}}function bp(t,e,n){var r=e.pendingProps,i=K.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),B(K,i&1),t===null)return Cl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ms(s,r,0,null),t=Sn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Dl(n),e.memoizedState=Ll,t):Ku(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return i0(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Qt(a,o):(o=Sn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Ll,r}return o=t.child,t=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ku(t,e){return e=Ms({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,r){return r!==null&&xu(r),vr(e,t.child,null,n),t=Ku(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function i0(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Na(Error(I(422))),vo(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Ms({mode:"visible",children:r.children},i,0,null),o=Sn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&vr(e,t.child,null,s),e.child.memoizedState=Dl(s),e.memoizedState=Ll,o);if(!(e.mode&1))return vo(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=Na(o,r,void 0),vo(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ce||a){if(r=ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rt(t,i),Ze(r,t,i,-1))}return Xu(),r=Na(Error(I(421))),vo(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=v0.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Le=qt(i.nextSibling),be=e,H=!0,Qe=null,t!==null&&(je[ze++]=vt,je[ze++]=yt,je[ze++]=Pn,vt=t.id,yt=t.overflow,Pn=e),e=Ku(e,r.children),e.flags|=4096,e)}function Ud(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Rl(t.return,e,n)}function Aa(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mp(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(_e(t,e,r.children,n),r=K.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ud(t,n,e);else if(t.tag===19)Ud(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(B(K,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ss(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Aa(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ss(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Aa(e,!0,n,null,o);break;case"together":Aa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ao(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),An|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Qt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function o0(t,e,n){switch(e.tag){case 3:Dp(e),gr();break;case 5:up(e);break;case 1:Pe(e.type)&&es(e);break;case 4:Fu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;B(rs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),e.flags|=128,null):n&e.child.childLanes?bp(t,e,n):(B(K,K.current&1),t=Pt(t,e,n),t!==null?t.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return e.lanes=0,xp(t,e,n)}return Pt(t,e,n)}var Up,bl,Fp,jp;Up=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};Fp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_n(ft.current);var o=null;switch(n){case"input":i=rl(t,i),r=rl(t,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=sl(t,i),r=sl(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xo)}ll(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};jp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wr(t,e){if(!H)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function s0(t,e,n){var r=e.pendingProps;switch(Ou(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return Pe(e.type)&&Zo(),ve(e),null;case 3:return r=e.stateNode,yr(),W(Re),W(we),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qe!==null&&(Vl(Qe),Qe=null))),bl(t,e),ve(e),null;case 5:ju(e);var i=_n(Ri.current);if(n=e.type,t!==null&&e.stateNode!=null)Fp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ve(e),null}if(t=_n(ft.current),mo(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[it]=e,r[Ti]=o,t=(e.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Zr.length;i++)V(Zr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Kc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Gc(r,o),V("invalid",r)}ll(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&po(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&po(r.textContent,a,t),i=["children",""+a]):mi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":oo(r),qc(r,o,!0);break;case"textarea":oo(r),Jc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[it]=e,t[Ti]=r,Up(t,e,!1,!1),e.stateNode=t;e:{switch(s=ul(n,r),n){case"dialog":V("cancel",t),V("close",t),i=r;break;case"iframe":case"object":case"embed":V("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zr.length;i++)V(Zr[i],t);i=r;break;case"source":V("error",t),i=r;break;case"img":case"image":case"link":V("error",t),V("load",t),i=r;break;case"details":V("toggle",t),i=r;break;case"input":Kc(t,r),i=rl(t,r),V("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),V("invalid",t);break;case"textarea":Gc(t,r),i=sl(t,r),V("invalid",t);break;default:i=r}ll(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?mh(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hh(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gi(t,l):typeof l=="number"&&gi(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",t):l!=null&&gu(t,o,l,s))}switch(n){case"input":oo(t),qc(t,r,!1);break;case"textarea":oo(t),Jc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ir(t,!!r.multiple,o,!1):r.defaultValue!=null&&ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)jp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=_n(Ri.current),_n(ft.current),mo(e)){if(r=e.stateNode,n=e.memoizedProps,r[it]=e,(o=r.nodeValue!==n)&&(t=be,t!==null))switch(t.tag){case 3:po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=e,e.stateNode=r}return ve(e),null;case 13:if(W(K),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(H&&Le!==null&&e.mode&1&&!(e.flags&128))np(),gr(),e.flags|=98560,o=!1;else if(o=mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(I(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[it]=e}else gr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),o=!1}else Qe!==null&&(Vl(Qe),Qe=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||K.current&1?oe===0&&(oe=3):Xu())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return yr(),bl(t,e),t===null&&Si(e.stateNode.containerInfo),ve(e),null;case 10:return bu(e.type._context),ve(e),null;case 17:return Pe(e.type)&&Zo(),ve(e),null;case 19:if(W(K),o=e.memoizedState,o===null)return ve(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Wr(o,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=ss(t),s!==null){for(e.flags|=128,Wr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return B(K,K.current&1|2),e.child}t=t.sibling}o.tail!==null&&Q()>_r&&(e.flags|=128,r=!0,Wr(o,!1),e.lanes=4194304)}else{if(!r)if(t=ss(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!H)return ve(e),null}else 2*Q()-o.renderingStartTime>_r&&n!==1073741824&&(e.flags|=128,r=!0,Wr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Q(),e.sibling=null,n=K.current,B(K,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return Qu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Oe&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function a0(t,e){switch(Ou(e),e.tag){case 1:return Pe(e.type)&&Zo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yr(),W(Re),W(we),zu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ju(e),null;case 13:if(W(K),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));gr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(K),null;case 4:return yr(),null;case 10:return bu(e.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var yo=!1,ye=!1,l0=typeof WeakSet=="function"?WeakSet:Set,R=null;function tr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(t,e,r)}else n.current=null}function Ml(t,e,n){try{n()}catch(r){J(t,e,r)}}var Fd=!1;function u0(t,e){if(wl=Jo,t=Vh(),Nu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===t)break t;if(p===n&&++u===i&&(a=s),p===o&&++c===r&&(l=s),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_l={focusedElem:t,selectionRange:n},Jo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,T=g.memoizedState,h=e.stateNode,f=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Je(e.type,y),T);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){J(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return g=Fd,Fd=!1,g}function li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ml(e,n,o)}i=i.next}while(i!==r)}}function Ds(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ul(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zp(t){var e=t.alternate;e!==null&&(t.alternate=null,zp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[it],delete e[Ti],delete e[Sl],delete e[Hy],delete e[Ky])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bp(t){return t.tag===5||t.tag===3||t.tag===4}function jd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xo));else if(r!==4&&(t=t.child,t!==null))for(Fl(t,e,n),t=t.sibling;t!==null;)Fl(t,e,n),t=t.sibling}function jl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jl(t,e,n),t=t.sibling;t!==null;)jl(t,e,n),t=t.sibling}var de=null,Ye=!1;function Lt(t,e,n){for(n=n.child;n!==null;)$p(t,e,n),n=n.sibling}function $p(t,e,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Cs,n)}catch{}switch(n.tag){case 5:ye||tr(n,e);case 6:var r=de,i=Ye;de=null,Lt(t,e,n),de=r,Ye=i,de!==null&&(Ye?(t=de,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ye?(t=de,n=n.stateNode,t.nodeType===8?Sa(t.parentNode,n):t.nodeType===1&&Sa(t,n),_i(t)):Sa(de,n.stateNode));break;case 4:r=de,i=Ye,de=n.stateNode.containerInfo,Ye=!0,Lt(t,e,n),de=r,Ye=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ml(n,e,s),i=i.next}while(i!==r)}Lt(t,e,n);break;case 1:if(!ye&&(tr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,e,a)}Lt(t,e,n);break;case 21:Lt(t,e,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Lt(t,e,n),ye=r):Lt(t,e,n);break;default:Lt(t,e,n)}}function zd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l0),e.forEach(function(r){var i=y0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ye=!1;break e;case 3:de=a.stateNode.containerInfo,Ye=!0;break e;case 4:de=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(de===null)throw Error(I(160));$p(o,s,i),de=null,Ye=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vp(e,t),e=e.sibling}function Vp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ge(e,t),nt(t),r&4){try{li(3,t,t.return),Ds(3,t)}catch(y){J(t,t.return,y)}try{li(5,t,t.return)}catch(y){J(t,t.return,y)}}break;case 1:Ge(e,t),nt(t),r&512&&n!==null&&tr(n,n.return);break;case 5:if(Ge(e,t),nt(t),r&512&&n!==null&&tr(n,n.return),t.flags&32){var i=t.stateNode;try{gi(i,"")}catch(y){J(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ch(i,o),ul(a,s);var u=ul(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?mh(i,d):c==="dangerouslySetInnerHTML"?hh(i,d):c==="children"?gi(i,d):gu(i,c,d,u)}switch(a){case"input":il(i,o);break;case"textarea":dh(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?ir(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?ir(i,!!o.multiple,o.defaultValue,!0):ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ti]=o}catch(y){J(t,t.return,y)}}break;case 6:if(Ge(e,t),nt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(y){J(t,t.return,y)}}break;case 3:if(Ge(e,t),nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_i(e.containerInfo)}catch(y){J(t,t.return,y)}break;case 4:Ge(e,t),nt(t);break;case 13:Ge(e,t),nt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ju=Q())),r&4&&zd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ye=(u=ye)||c,Ge(e,t),ye=u):Ge(e,t),nt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(d=R=c;R!==null;){switch(p=R,v=p.child,p.tag){case 0:case 11:case 14:case 15:li(4,p,p.return);break;case 1:tr(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){J(r,n,y)}}break;case 5:tr(p,p.return);break;case 22:if(p.memoizedState!==null){$d(d);continue}}v!==null?(v.return=p,R=v):$d(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ph("display",s))}catch(y){J(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){J(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ge(e,t),nt(t),r&4&&zd(t);break;case 21:break;default:Ge(e,t),nt(t)}}function nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bp(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gi(i,""),r.flags&=-33);var o=jd(t);jl(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=jd(t);Fl(t,a,s);break;default:throw Error(I(161))}}catch(l){J(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c0(t,e,n){R=t,Wp(t)}function Wp(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||yo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=yo;var u=ye;if(yo=s,(ye=l)&&!u)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Vd(i):l!==null?(l.return=s,R=l):Vd(i);for(;o!==null;)R=o,Wp(o),o=o.sibling;R=i,yo=a,ye=u}Bd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Bd(t)}}function Bd(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ye||Ds(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Je(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&kd(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_i(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ye||e.flags&512&&Ul(e)}catch(p){J(e,e.return,p)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function $d(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Vd(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ds(4,e)}catch(l){J(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){J(e,i,l)}}var o=e.return;try{Ul(e)}catch(l){J(e,o,l)}break;case 5:var s=e.return;try{Ul(e)}catch(l){J(e,s,l)}}}catch(l){J(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var d0=Math.ceil,us=At.ReactCurrentDispatcher,qu=At.ReactCurrentOwner,$e=At.ReactCurrentBatchConfig,U=0,ce=null,ee=null,fe=0,Oe=0,nr=un(0),oe=0,Oi=null,An=0,bs=0,Gu=0,ui=null,Te=null,Ju=0,_r=1/0,mt=null,cs=!1,zl=null,Jt=null,wo=!1,Bt=null,ds=0,ci=0,Bl=null,Oo=-1,xo=0;function Ee(){return U&6?Q():Oo!==-1?Oo:Oo=Q()}function Yt(t){return t.mode&1?U&2&&fe!==0?fe&-fe:Gy.transition!==null?(xo===0&&(xo=Rh()),xo):(t=j,t!==0||(t=window.event,t=t===void 0?16:Dh(t.type)),t):1}function Ze(t,e,n,r){if(50<ci)throw ci=0,Bl=null,Error(I(185));Vi(t,n,r),(!(U&2)||t!==ce)&&(t===ce&&(!(U&2)&&(bs|=n),oe===4&&jt(t,fe)),Ne(t,r),n===1&&U===0&&!(e.mode&1)&&(_r=Q()+500,Os&&cn()))}function Ne(t,e){var n=t.callbackNode;Gv(t,e);var r=Go(t,t===ce?fe:0);if(r===0)n!==null&&Xc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xc(n),e===1)t.tag===0?qy(Wd.bind(null,t)):Zh(Wd.bind(null,t)),Vy(function(){!(U&6)&&cn()}),n=null;else{switch(Ph(r)){case 1:n=Eu;break;case 4:n=Th;break;case 16:n=qo;break;case 536870912:n=Ch;break;default:n=qo}n=Xp(n,Hp.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hp(t,e){if(Oo=-1,xo=0,U&6)throw Error(I(327));var n=t.callbackNode;if(ur()&&t.callbackNode!==n)return null;var r=Go(t,t===ce?fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fs(t,r);else{e=r;var i=U;U|=2;var o=qp();(ce!==t||fe!==e)&&(mt=null,_r=Q()+500,In(t,e));do try{p0();break}catch(a){Kp(t,a)}while(1);Du(),us.current=o,U=i,ee!==null?e=0:(ce=null,fe=0,e=oe)}if(e!==0){if(e===2&&(i=pl(t),i!==0&&(r=i,e=$l(t,i))),e===1)throw n=Oi,In(t,0),jt(t,r),Ne(t,Q()),n;if(e===6)jt(t,r);else{if(i=t.current.alternate,!(r&30)&&!f0(i)&&(e=fs(t,r),e===2&&(o=pl(t),o!==0&&(r=o,e=$l(t,o))),e===1))throw n=Oi,In(t,0),jt(t,r),Ne(t,Q()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:gn(t,Te,mt);break;case 3:if(jt(t,r),(r&130023424)===r&&(e=Ju+500-Q(),10<e)){if(Go(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ee(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Il(gn.bind(null,t,Te,mt),e);break}gn(t,Te,mt);break;case 4:if(jt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Xe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d0(r/1960))-r,10<r){t.timeoutHandle=Il(gn.bind(null,t,Te,mt),r);break}gn(t,Te,mt);break;case 5:gn(t,Te,mt);break;default:throw Error(I(329))}}}return Ne(t,Q()),t.callbackNode===n?Hp.bind(null,t):null}function $l(t,e){var n=ui;return t.current.memoizedState.isDehydrated&&(In(t,e).flags|=256),t=fs(t,e),t!==2&&(e=Te,Te=n,e!==null&&Vl(e)),t}function Vl(t){Te===null?Te=t:Te.push.apply(Te,t)}function f0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!et(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jt(t,e){for(e&=~Gu,e&=~bs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xe(e),r=1<<n;t[n]=-1,e&=~r}}function Wd(t){if(U&6)throw Error(I(327));ur();var e=Go(t,0);if(!(e&1))return Ne(t,Q()),null;var n=fs(t,e);if(t.tag!==0&&n===2){var r=pl(t);r!==0&&(e=r,n=$l(t,r))}if(n===1)throw n=Oi,In(t,0),jt(t,e),Ne(t,Q()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,Te,mt),Ne(t,Q()),null}function Yu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(_r=Q()+500,Os&&cn())}}function On(t){Bt!==null&&Bt.tag===0&&!(U&6)&&ur();var e=U;U|=1;var n=$e.transition,r=j;try{if($e.transition=null,j=1,t)return t()}finally{j=r,$e.transition=n,U=e,!(U&6)&&cn()}}function Qu(){Oe=nr.current,W(nr)}function In(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$y(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zo();break;case 3:yr(),W(Re),W(we),zu();break;case 5:ju(r);break;case 4:yr();break;case 13:W(K);break;case 19:W(K);break;case 10:bu(r.type._context);break;case 22:case 23:Qu()}n=n.return}if(ce=t,ee=t=Qt(t.current,null),fe=Oe=e,oe=0,Oi=null,Gu=bs=An=0,Te=ui=null,wn!==null){for(e=0;e<wn.length;e++)if(n=wn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}wn=null}return t}function Kp(t,e){do{var n=ee;try{if(Du(),Po.current=ls,as){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}as=!1}if(Nn=0,ue=ie=q=null,ai=!1,Pi=0,qu.current=null,n===null||n.return===null){oe=1,Oi=e,ee=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=Od(s);if(v!==null){v.flags&=-257,xd(v,s,a,o,e),v.mode&1&&Ad(o,u,e),e=v,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Ad(o,u,e),Xu();break e}l=Error(I(426))}}else if(H&&a.mode&1){var T=Od(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),xd(T,s,a,o,e),xu(wr(l,a));break e}}o=l=wr(l,a),oe!==4&&(oe=2),ui===null?ui=[o]:ui.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Np(o,l,e);Sd(o,h);break e;case 1:a=l;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jt===null||!Jt.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var _=Ap(o,a,e);Sd(o,_);break e}}o=o.return}while(o!==null)}Jp(n)}catch(C){e=C,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(1)}function qp(){var t=us.current;return us.current=ls,t===null?ls:t}function Xu(){(oe===0||oe===3||oe===2)&&(oe=4),ce===null||!(An&268435455)&&!(bs&268435455)||jt(ce,fe)}function fs(t,e){var n=U;U|=2;var r=qp();(ce!==t||fe!==e)&&(mt=null,In(t,e));do try{h0();break}catch(i){Kp(t,i)}while(1);if(Du(),U=n,us.current=r,ee!==null)throw Error(I(261));return ce=null,fe=0,oe}function h0(){for(;ee!==null;)Gp(ee)}function p0(){for(;ee!==null&&!jv();)Gp(ee)}function Gp(t){var e=Qp(t.alternate,t,Oe);t.memoizedProps=t.pendingProps,e===null?Jp(t):ee=e,qu.current=null}function Jp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=a0(n,e),n!==null){n.flags&=32767,ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,ee=null;return}}else if(n=s0(n,e,Oe),n!==null){ee=n;return}if(e=e.sibling,e!==null){ee=e;return}ee=e=t}while(e!==null);oe===0&&(oe=5)}function gn(t,e,n){var r=j,i=$e.transition;try{$e.transition=null,j=1,m0(t,e,n,r)}finally{$e.transition=i,j=r}return null}function m0(t,e,n,r){do ur();while(Bt!==null);if(U&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jv(t,o),t===ce&&(ee=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Xp(qo,function(){return ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$e.transition,$e.transition=null;var s=j;j=1;var a=U;U|=4,qu.current=null,u0(t,n),Vp(n,t),by(_l),Jo=!!wl,_l=wl=null,t.current=n,c0(n),zv(),U=a,j=s,$e.transition=o}else t.current=n;if(wo&&(wo=!1,Bt=t,ds=i),o=t.pendingLanes,o===0&&(Jt=null),Vv(n.stateNode),Ne(t,Q()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(cs)throw cs=!1,t=zl,zl=null,t;return ds&1&&t.tag!==0&&ur(),o=t.pendingLanes,o&1?t===Bl?ci++:(ci=0,Bl=t):ci=0,cn(),null}function ur(){if(Bt!==null){var t=Ph(ds),e=$e.transition,n=j;try{if($e.transition=null,j=16>t?16:t,Bt===null)var r=!1;else{if(t=Bt,Bt=null,ds=0,U&6)throw Error(I(331));var i=U;for(U|=4,R=t.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:li(8,c,o)}var d=c.child;if(d!==null)d.return=c,R=d;else for(;R!==null;){c=R;var p=c.sibling,v=c.return;if(zp(c),c===u){R=null;break}if(p!==null){p.return=v,R=p;break}R=v}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:li(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var f=t.current;for(R=f;R!==null;){s=R;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,R=m;else e:for(s=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ds(9,a)}}catch(C){J(a,a.return,C)}if(a===s){R=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,R=_;break e}R=a.return}}if(U=i,cn(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Cs,t)}catch{}r=!0}return r}finally{j=n,$e.transition=e}}return!1}function Hd(t,e,n){e=wr(n,e),e=Np(t,e,1),t=Gt(t,e,1),e=Ee(),t!==null&&(Vi(t,1,e),Ne(t,e))}function J(t,e,n){if(t.tag===3)Hd(t,t,n);else for(;e!==null;){if(e.tag===3){Hd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){t=wr(n,t),t=Ap(e,t,1),e=Gt(e,t,1),t=Ee(),e!==null&&(Vi(e,1,t),Ne(e,t));break}}e=e.return}}function g0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ee(),t.pingedLanes|=t.suspendedLanes&n,ce===t&&(fe&n)===n&&(oe===4||oe===3&&(fe&130023424)===fe&&500>Q()-Ju?In(t,0):Gu|=n),Ne(t,e)}function Yp(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=Ee();t=Rt(t,e),t!==null&&(Vi(t,e,n),Ne(t,n))}function v0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yp(t,n)}function y0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Yp(t,n)}var Qp;Qp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Re.current)Ce=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ce=!1,o0(t,e,n);Ce=!!(t.flags&131072)}else Ce=!1,H&&e.flags&1048576&&ep(e,ns,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ao(t,e),t=e.pendingProps;var i=mr(e,we.current);lr(e,n),i=$u(null,e,r,t,i,n);var o=Vu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Pe(r)?(o=!0,es(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uu(e),i.updater=xs,e.stateNode=i,i._reactInternals=e,Nl(e,r,t,n),e=xl(null,e,r,!0,o,n)):(e.tag=0,H&&o&&Au(e),_e(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ao(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_0(r),t=Je(r,t),i){case 0:e=Ol(null,e,r,t,n);break e;case 1:e=bd(null,e,r,t,n);break e;case 11:e=Ld(null,e,r,t,n);break e;case 14:e=Dd(null,e,r,Je(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),Ol(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),bd(t,e,r,i,n);case 3:e:{if(Dp(e),t===null)throw Error(I(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ip(t,e),os(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=wr(Error(I(423)),e),e=Md(t,e,r,n,i);break e}else if(r!==i){i=wr(Error(I(424)),e),e=Md(t,e,r,n,i);break e}else for(Le=qt(e.stateNode.containerInfo.firstChild),be=e,H=!0,Qe=null,n=lp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===i){e=Pt(t,e,n);break e}_e(t,e,r,n)}e=e.child}return e;case 5:return up(e),t===null&&Cl(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,El(r,i)?s=null:o!==null&&El(r,o)&&(e.flags|=32),Lp(t,e),_e(t,e,s,n),e.child;case 6:return t===null&&Cl(e),null;case 13:return bp(t,e,n);case 4:return Fu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vr(e,null,r,n):_e(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),Ld(t,e,r,i,n);case 7:return _e(t,e,e.pendingProps,n),e.child;case 8:return _e(t,e,e.pendingProps.children,n),e.child;case 12:return _e(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,B(rs,r._currentValue),r._currentValue=s,o!==null)if(et(o.value,s)){if(o.children===i.children&&!Re.current){e=Pt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Et(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Rl(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Rl(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}_e(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,lr(e,n),i=We(i),r=r(i),e.flags|=1,_e(t,e,r,n),e.child;case 14:return r=e.type,i=Je(r,e.pendingProps),i=Je(r.type,i),Dd(t,e,r,i,n);case 15:return Op(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Je(r,i),Ao(t,e),e.tag=1,Pe(r)?(t=!0,es(e)):t=!1,lr(e,n),sp(e,r,i),Nl(e,r,i,n),xl(null,e,r,!0,t,n);case 19:return Mp(t,e,n);case 22:return xp(t,e,n)}throw Error(I(156,e.tag))};function Xp(t,e){return kh(t,e)}function w0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(t,e,n,r){return new w0(t,e,n,r)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _0(t){if(typeof t=="function")return Zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yu)return 11;if(t===wu)return 14}return 2}function Qt(t,e){var n=t.alternate;return n===null?(n=Be(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Zu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Kn:return Sn(n.children,i,o,e);case vu:s=8,i|=8;break;case Za:return t=Be(12,n,e,i|2),t.elementType=Za,t.lanes=o,t;case el:return t=Be(13,n,e,i),t.elementType=el,t.lanes=o,t;case tl:return t=Be(19,n,e,i),t.elementType=tl,t.lanes=o,t;case ah:return Ms(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oh:s=10;break e;case sh:s=9;break e;case yu:s=11;break e;case wu:s=14;break e;case Mt:s=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Be(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Sn(t,e,n,r){return t=Be(7,t,r,e),t.lanes=n,t}function Ms(t,e,n,r){return t=Be(22,t,r,e),t.elementType=ah,t.lanes=n,t.stateNode={isHidden:!1},t}function Oa(t,e,n){return t=Be(6,t,null,e),t.lanes=n,t}function xa(t,e,n){return e=Be(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function E0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fa(0),this.expirationTimes=fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(t,e,n,r,i,o,s,a,l){return t=new E0(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Be(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(o),t}function I0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zp(t){if(!t)return nn;t=t._reactInternals;e:{if(Fn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Pe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Pe(n))return Xh(t,n,e)}return e}function em(t,e,n,r,i,o,s,a,l){return t=ec(n,r,!0,t,i,o,s,a,l),t.context=Zp(null),n=t.current,r=Ee(),i=Yt(n),o=Et(r,i),o.callback=e??null,Gt(n,o,i),t.current.lanes=i,Vi(t,i,r),Ne(t,r),t}function Us(t,e,n,r){var i=e.current,o=Ee(),s=Yt(i);return n=Zp(n),e.context===null?e.context=n:e.pendingContext=n,e=Et(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gt(i,e,s),t!==null&&(Ze(t,i,s,o),Ro(t,i,s)),s}function hs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tc(t,e){Kd(t,e),(t=t.alternate)&&Kd(t,e)}function S0(){return null}var tm=typeof reportError=="function"?reportError:function(t){console.error(t)};function nc(t){this._internalRoot=t}Fs.prototype.render=nc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Us(t,e,null,null)};Fs.prototype.unmount=nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;On(function(){Us(null,t,null,null)}),e[Ct]=null}};function Fs(t){this._internalRoot=t}Fs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Oh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ft.length&&e!==0&&e<Ft[n].priority;n++);Ft.splice(n,0,t),n===0&&Lh(t)}};function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function js(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qd(){}function k0(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=hs(s);o.call(u)}}var s=em(e,r,t,0,null,!1,!1,"",qd);return t._reactRootContainer=s,t[Ct]=s.current,Si(t.nodeType===8?t.parentNode:t),On(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hs(l);a.call(u)}}var l=ec(t,0,!1,null,null,!1,!1,"",qd);return t._reactRootContainer=l,t[Ct]=l.current,Si(t.nodeType===8?t.parentNode:t),On(function(){Us(e,l,n,r)}),l}function zs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=hs(s);a.call(l)}}Us(e,s,t,i)}else s=k0(n,e,t,i,r);return hs(s)}Nh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xr(e.pendingLanes);n!==0&&(Iu(e,n|1),Ne(e,Q()),!(U&6)&&(_r=Q()+500,cn()))}break;case 13:On(function(){var r=Rt(t,1);if(r!==null){var i=Ee();Ze(r,t,1,i)}}),tc(t,1)}};Su=function(t){if(t.tag===13){var e=Rt(t,134217728);if(e!==null){var n=Ee();Ze(e,t,134217728,n)}tc(t,134217728)}};Ah=function(t){if(t.tag===13){var e=Yt(t),n=Rt(t,e);if(n!==null){var r=Ee();Ze(n,t,e,r)}tc(t,e)}};Oh=function(){return j};xh=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};dl=function(t,e,n){switch(e){case"input":if(il(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=As(r);if(!i)throw Error(I(90));uh(r),il(r,i)}}}break;case"textarea":dh(t,n);break;case"select":e=n.value,e!=null&&ir(t,!!n.multiple,e,!1)}};yh=Yu;wh=On;var T0={usingClientEntryPoint:!1,Events:[Hi,Yn,As,gh,vh,Yu]},Hr={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},C0={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ih(t),t===null?null:t.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||S0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Cs=_o.inject(C0),dt=_o}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0;Ue.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(e))throw Error(I(200));return I0(t,e,null,n)};Ue.createRoot=function(t,e){if(!rc(t))throw Error(I(299));var n=!1,r="",i=tm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ec(t,1,!1,null,null,n,!1,r,i),t[Ct]=e.current,Si(t.nodeType===8?t.parentNode:t),new nc(e)};Ue.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Ih(e),t=t===null?null:t.stateNode,t};Ue.flushSync=function(t){return On(t)};Ue.hydrate=function(t,e,n){if(!js(e))throw Error(I(200));return zs(null,t,e,!0,n)};Ue.hydrateRoot=function(t,e,n){if(!rc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=em(e,null,t,1,n??null,i,!1,o,s),t[Ct]=e.current,Si(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fs(e)};Ue.render=function(t,e,n){if(!js(e))throw Error(I(200));return zs(null,t,e,!1,n)};Ue.unmountComponentAtNode=function(t){if(!js(t))throw Error(I(40));return t._reactRootContainer?(On(function(){zs(null,null,t,!1,function(){t._reactRootContainer=null,t[Ct]=null})}),!0):!1};Ue.unstable_batchedUpdates=Yu;Ue.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!js(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return zs(t,e,n,!1,r)};Ue.version="18.2.0-next-9e3b772b8-20220608";function nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nm)}catch(t){console.error(t)}}nm(),eh.exports=Ue;var rm=eh.exports;const R0=Vf(rm);var Gd=rm;Qa.createRoot=Gd.createRoot,Qa.hydrateRoot=Gd.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xi.apply(this,arguments)}var $t;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($t||($t={}));const Jd="popstate";function P0(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Wl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ps(i)}return A0(e,n,null,t)}function te(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ic(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function N0(){return Math.random().toString(36).substr(2,8)}function Yd(t,e){return{usr:t.state,key:t.key,idx:e}}function Wl(t,e,n,r){return n===void 0&&(n=null),xi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rr(e):e,{state:n,key:e&&e.key||r||N0()})}function ps(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Rr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function A0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=$t.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(xi({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=$t.Pop;let T=c(),h=T==null?null:T-u;u=T,l&&l({action:a,location:y.location,delta:h})}function p(T,h){a=$t.Push;let f=Wl(y.location,T,h);n&&n(f,T),u=c()+1;let m=Yd(f,u),_=y.createHref(f);try{s.pushState(m,"",_)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(_)}o&&l&&l({action:a,location:y.location,delta:1})}function v(T,h){a=$t.Replace;let f=Wl(y.location,T,h);n&&n(f,T),u=c();let m=Yd(f,u),_=y.createHref(f);s.replaceState(m,"",_),o&&l&&l({action:a,location:y.location,delta:0})}function g(T){let h=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:ps(T);return te(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let y={get action(){return a},get location(){return t(i,s)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Jd,d),l=T,()=>{i.removeEventListener(Jd,d),l=null}},createHref(T){return e(i,T)},createURL:g,encodeLocation(T){let h=g(T);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go(T){return s.go(T)}};return y}var Qd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qd||(Qd={}));function O0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Rr(e):e,i=oc(r.pathname||"/",n);if(i==null)return null;let o=im(t);x0(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=B0(o[a],W0(i));return s}function im(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xt([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),im(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:j0(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of om(o.path))i(o,s,l)}),e}function om(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=om(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function x0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:z0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const L0=/^:\w+$/,D0=3,b0=2,M0=1,U0=10,F0=-2,Xd=t=>t==="*";function j0(t,e){let n=t.split("/"),r=n.length;return n.some(Xd)&&(r+=F0),e&&(r+=b0),n.filter(i=>!Xd(i)).reduce((i,o)=>i+(L0.test(o)?D0:o===""?M0:U0),r)}function z0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function B0(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$0({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:Xt([i,c.pathname]),pathnameBase:G0(Xt([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Xt([i,c.pathnameBase]))}return o}function $0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=V0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let p=a[d]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=H0(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function V0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ic(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function W0(t){try{return decodeURI(t)}catch(e){return ic(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function H0(t,e){try{return decodeURIComponent(t)}catch(n){return ic(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function oc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function K0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Rr(t):t;return{pathname:n?n.startsWith("/")?n:q0(n,e):e,search:J0(r),hash:Y0(i)}}function q0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function La(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sm(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function am(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Rr(t):(i=xi({},t),te(!i.pathname||!i.pathname.includes("?"),La("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),La("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),La("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=K0(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xt=t=>t.join("/").replace(/\/\/+/g,"/"),G0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Y0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Q0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lm=["post","put","patch","delete"];new Set(lm);const X0=["get",...lm];new Set(X0);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ms.apply(this,arguments)}const sc=k.createContext(null),Z0=k.createContext(null),Pr=k.createContext(null),Bs=k.createContext(null),dn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),um=k.createContext(null);function ew(t,e){let{relative:n}=e===void 0?{}:e;qi()||te(!1);let{basename:r,navigator:i}=k.useContext(Pr),{hash:o,pathname:s,search:a}=dm(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Xt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function qi(){return k.useContext(Bs)!=null}function $s(){return qi()||te(!1),k.useContext(Bs).location}function cm(t){k.useContext(Pr).static||k.useLayoutEffect(t)}function tw(){let{isDataRoute:t}=k.useContext(dn);return t?gw():nw()}function nw(){qi()||te(!1);let t=k.useContext(sc),{basename:e,navigator:n}=k.useContext(Pr),{matches:r}=k.useContext(dn),{pathname:i}=$s(),o=JSON.stringify(sm(r).map(l=>l.pathnameBase)),s=k.useRef(!1);return cm(()=>{s.current=!0}),k.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=am(l,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Xt([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,i,t])}const rw=k.createContext(null);function iw(t){let e=k.useContext(dn).outlet;return e&&k.createElement(rw.Provider,{value:t},e)}function dm(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=k.useContext(dn),{pathname:i}=$s(),o=JSON.stringify(sm(r).map(s=>s.pathnameBase));return k.useMemo(()=>am(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function ow(t,e){return sw(t,e)}function sw(t,e,n){qi()||te(!1);let{navigator:r}=k.useContext(Pr),{matches:i}=k.useContext(dn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=$s(),u;if(e){var c;let y=typeof e=="string"?Rr(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||te(!1),u=y}else u=l;let d=u.pathname||"/",p=a==="/"?d:d.slice(a.length)||"/",v=O0(t,{pathname:p}),g=dw(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Xt([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Xt([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&g?k.createElement(Bs.Provider,{value:{location:ms({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$t.Pop}},g):g}function aw(){let t=mw(),e=Q0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,o)}const lw=k.createElement(aw,null);class uw extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?k.createElement(dn.Provider,{value:this.props.routeContext},k.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cw(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(sc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(dn.Provider,{value:e},r)}function dw(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||te(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||lw);let p=e.concat(o.slice(0,u+1)),v=()=>{let g;return c?g=d:l.route.Component?g=k.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,k.createElement(cw,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?k.createElement(uw,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:v(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):v()},null)}var Hl;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Hl||(Hl={}));var Li;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Li||(Li={}));function fw(t){let e=k.useContext(sc);return e||te(!1),e}function hw(t){let e=k.useContext(Z0);return e||te(!1),e}function pw(t){let e=k.useContext(dn);return e||te(!1),e}function fm(t){let e=pw(),n=e.matches[e.matches.length-1];return n.route.id||te(!1),n.route.id}function mw(){var t;let e=k.useContext(um),n=hw(Li.UseRouteError),r=fm(Li.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function gw(){let{router:t}=fw(Hl.UseNavigateStable),e=fm(Li.UseNavigateStable),n=k.useRef(!1);return cm(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ms({fromRouteId:e},o)))},[t,e])}function vw(t){return iw(t.context)}function Wn(t){te(!1)}function yw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=$t.Pop,navigator:o,static:s=!1}=t;qi()&&te(!1);let a=e.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Rr(r));let{pathname:u="/",search:c="",hash:d="",state:p=null,key:v="default"}=r,g=k.useMemo(()=>{let y=oc(u,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:p,key:v},navigationType:i}},[a,u,c,d,p,v,i]);return g==null?null:k.createElement(Pr.Provider,{value:l},k.createElement(Bs.Provider,{children:n,value:g}))}function ww(t){let{children:e,location:n}=t;return ow(Kl(e),n)}var Zd;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Zd||(Zd={}));new Promise(()=>{});function Kl(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let o=[...e,i];if(r.type===k.Fragment){n.push.apply(n,Kl(r.props.children,o));return}r.type!==Wn&&te(!1),!r.props.index||!r.props.children||te(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Kl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ql(){return ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ql.apply(this,arguments)}function _w(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ew(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Iw(t,e){return t.button===0&&(!e||e==="_self")&&!Ew(t)}const Sw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],kw="startTransition",ef=vv[kw];function Tw(t){let{basename:e,children:n,future:r,window:i}=t,o=k.useRef();o.current==null&&(o.current=P0({window:i,v5Compat:!0}));let s=o.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=k.useCallback(d=>{u&&ef?ef(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>s.listen(c),[s,c]),k.createElement(yw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s})}const Cw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,di=k.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=e,d=_w(e,Sw),{basename:p}=k.useContext(Pr),v,g=!1;if(typeof u=="string"&&Rw.test(u)&&(v=u,Cw))try{let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=oc(m.pathname,p);m.origin===f.origin&&_!=null?u=_+m.search+m.hash:g=!0}catch{}let y=ew(u,{relative:i}),T=Pw(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function h(f){r&&r(f),f.defaultPrevented||T(f)}return k.createElement("a",ql({},d,{href:v||y,onClick:g||o?r:h,ref:n,target:l}))});var tf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(tf||(tf={}));var nf;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(nf||(nf={}));function Pw(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=tw(),l=$s(),u=dm(t,{relative:s});return k.useCallback(c=>{if(Iw(c,n)){c.preventDefault();let d=r!==void 0?r:ps(l)===ps(u);a(t,{replace:d,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}function Nw(){return E.jsx("nav",{children:E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx(di,{to:"/",children:E.jsx("div",{className:"nav-logo nav-home-logo"})})}),E.jsx("li",{children:E.jsx(di,{to:"/chuck",children:E.jsx("div",{className:"nav-logo nav-chuck-logo"})})}),E.jsx("li",{children:E.jsx(di,{to:"/account",children:E.jsx("div",{className:"nav-logo nav-account-logo"})})})]})})}const hm="/mobilki-projekt/assets/logo-a8d5bf12.png";function Aw(){return E.jsxs("div",{className:"header",children:[E.jsx("img",{className:"logo-header",src:hm}),E.jsx("div",{className:"header-name",children:" Just Kiddin' "})]})}const Ow=()=>E.jsxs("div",{className:"layout",children:[E.jsx(Aw,{}),E.jsx(vw,{}),E.jsx(Nw,{})]});const xw="/mobilki-projekt/assets/chuckLogo-90b166dc.png";function Lw(){return E.jsxs("div",{className:"home-container",children:[E.jsxs("div",{className:"home-welcome",children:[E.jsx("img",{className:"logo-image",src:hm}),E.jsxs("div",{className:"welcome-text",children:[E.jsx("div",{className:"welcome-question",children:"Looking for a quick laugh?"}),E.jsx("div",{className:"answer",children:"We got you!"})]})]}),E.jsx("hr",{}),E.jsxs("div",{className:"home-choice",children:[E.jsx("div",{className:"choice-text",children:" What are you looking for? "}),E.jsxs("div",{className:"home-chuck",children:[E.jsx(di,{to:"/chuck",children:E.jsx("img",{className:"chuck-logo",src:xw})}),E.jsx("div",{className:"chuck-undertext",children:E.jsx("i",{children:"Chuck Norris joke generator"})})]})]}),E.jsx("hr",{}),E.jsxs("div",{className:"home-signUp",children:[E.jsxs("div",{className:"signUp-text",children:[E.jsxs("div",{className:"signup-question",children:["Interested in more features?"," "]}),E.jsx("div",{className:"signup-answer",children:"All you have to do is sign up!"})]}),E.jsx(di,{to:"/account",children:E.jsx("button",{className:"login-redirect",children:" Sign up "})})]})]})}function Dw(){return E.jsx("h1",{children:" Error 404 "})}function pm(t,e){return function(){return t.apply(e,arguments)}}const{toString:bw}=Object.prototype,{getPrototypeOf:ac}=Object,Vs=(t=>e=>{const n=bw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pt=t=>(t=t.toLowerCase(),e=>Vs(e)===t),Ws=t=>e=>typeof e===t,{isArray:Nr}=Array,Di=Ws("undefined");function Mw(t){return t!==null&&!Di(t)&&t.constructor!==null&&!Di(t.constructor)&&Ve(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mm=pt("ArrayBuffer");function Uw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mm(t.buffer),e}const Fw=Ws("string"),Ve=Ws("function"),gm=Ws("number"),Hs=t=>t!==null&&typeof t=="object",jw=t=>t===!0||t===!1,Do=t=>{if(Vs(t)!=="object")return!1;const e=ac(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},zw=pt("Date"),Bw=pt("File"),$w=pt("Blob"),Vw=pt("FileList"),Ww=t=>Hs(t)&&Ve(t.pipe),Hw=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ve(t.append)&&((e=Vs(t))==="formdata"||e==="object"&&Ve(t.toString)&&t.toString()==="[object FormData]"))},Kw=pt("URLSearchParams"),qw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Nr(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const o=n?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let a;for(r=0;r<s;r++)a=o[r],e.call(null,t[a],a,t)}}function vm(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const ym=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),wm=t=>!Di(t)&&t!==ym;function Gl(){const{caseless:t}=wm(this)&&this||{},e={},n=(r,i)=>{const o=t&&vm(e,i)||i;Do(e[o])&&Do(r)?e[o]=Gl(e[o],r):Do(r)?e[o]=Gl({},r):Nr(r)?e[o]=r.slice():e[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Gi(arguments[r],n);return e}const Gw=(t,e,n,{allOwnKeys:r}={})=>(Gi(e,(i,o)=>{n&&Ve(i)?t[o]=pm(i,n):t[o]=i},{allOwnKeys:r}),t),Jw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Yw=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Qw=(t,e,n,r)=>{let i,o,s;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),o=i.length;o-- >0;)s=i[o],(!r||r(s,t,e))&&!a[s]&&(e[s]=t[s],a[s]=!0);t=n!==!1&&ac(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Xw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Zw=t=>{if(!t)return null;if(Nr(t))return t;let e=t.length;if(!gm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},e_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ac(Uint8Array)),t_=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const o=i.value;e.call(t,o[0],o[1])}},n_=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},r_=pt("HTMLFormElement"),i_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),rf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),o_=pt("RegExp"),_m=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Gi(n,(i,o)=>{e(i,o,t)!==!1&&(r[o]=i)}),Object.defineProperties(t,r)},s_=t=>{_m(t,(e,n)=>{if(Ve(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Ve(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},a_=(t,e)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Nr(t)?r(t):r(String(t).split(e)),n},l_=()=>{},u_=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Da="abcdefghijklmnopqrstuvwxyz",of="0123456789",Em={DIGIT:of,ALPHA:Da,ALPHA_DIGIT:Da+Da.toUpperCase()+of},c_=(t=16,e=Em.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function d_(t){return!!(t&&Ve(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const f_=t=>{const e=new Array(10),n=(r,i)=>{if(Hs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const o=Nr(r)?[]:{};return Gi(r,(s,a)=>{const l=n(s,i+1);!Di(l)&&(o[a]=l)}),e[i]=void 0,o}}return r};return n(t,0)},h_=pt("AsyncFunction"),p_=t=>t&&(Hs(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),w={isArray:Nr,isArrayBuffer:mm,isBuffer:Mw,isFormData:Hw,isArrayBufferView:Uw,isString:Fw,isNumber:gm,isBoolean:jw,isObject:Hs,isPlainObject:Do,isUndefined:Di,isDate:zw,isFile:Bw,isBlob:$w,isRegExp:o_,isFunction:Ve,isStream:Ww,isURLSearchParams:Kw,isTypedArray:e_,isFileList:Vw,forEach:Gi,merge:Gl,extend:Gw,trim:qw,stripBOM:Jw,inherits:Yw,toFlatObject:Qw,kindOf:Vs,kindOfTest:pt,endsWith:Xw,toArray:Zw,forEachEntry:t_,matchAll:n_,isHTMLForm:r_,hasOwnProperty:rf,hasOwnProp:rf,reduceDescriptors:_m,freezeMethods:s_,toObjectSet:a_,toCamelCase:i_,noop:l_,toFiniteNumber:u_,findKey:vm,global:ym,isContextDefined:wm,ALPHABET:Em,generateString:c_,isSpecCompliantForm:d_,toJSONObject:f_,isAsyncFn:h_,isThenable:p_};function M(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}w.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Im=M.prototype,Sm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Sm[t]={value:t}});Object.defineProperties(M,Sm);Object.defineProperty(Im,"isAxiosError",{value:!0});M.from=(t,e,n,r,i,o)=>{const s=Object.create(Im);return w.toFlatObject(t,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),M.call(s,t.message,e,n,r,i),s.cause=t,s.name=t.name,o&&Object.assign(s,o),s};const m_=null;function Jl(t){return w.isPlainObject(t)||w.isArray(t)}function km(t){return w.endsWith(t,"[]")?t.slice(0,-2):t}function sf(t,e,n){return t?t.concat(e).map(function(i,o){return i=km(i),!n&&o?"["+i+"]":i}).join(n?".":""):e}function g_(t){return w.isArray(t)&&!t.some(Jl)}const v_=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});function Ks(t,e,n){if(!w.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=w.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,T){return!w.isUndefined(T[y])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&w.isSpecCompliantForm(e);if(!w.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(w.isDate(g))return g.toISOString();if(!l&&w.isBlob(g))throw new M("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(g)||w.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,y,T){let h=g;if(g&&!T&&typeof g=="object"){if(w.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(w.isArray(g)&&g_(g)||(w.isFileList(g)||w.endsWith(y,"[]"))&&(h=w.toArray(g)))return y=km(y),h.forEach(function(m,_){!(w.isUndefined(m)||m===null)&&e.append(s===!0?sf([y],_,o):s===null?y:y+"[]",u(m))}),!1}return Jl(g)?!0:(e.append(sf(T,y,o),u(g)),!1)}const d=[],p=Object.assign(v_,{defaultVisitor:c,convertValue:u,isVisitable:Jl});function v(g,y){if(!w.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(g),w.forEach(g,function(h,f){(!(w.isUndefined(h)||h===null)&&i.call(e,h,w.isString(f)?f.trim():f,y,p))===!0&&v(h,y?y.concat(f):[f])}),d.pop()}}if(!w.isObject(t))throw new TypeError("data must be an object");return v(t),e}function af(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function lc(t,e){this._pairs=[],t&&Ks(t,this,e)}const Tm=lc.prototype;Tm.append=function(e,n){this._pairs.push([e,n])};Tm.toString=function(e){const n=e?function(r){return e.call(this,r,af)}:af;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function y_(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Cm(t,e,n){if(!e)return t;const r=n&&n.encode||y_,i=n&&n.serialize;let o;if(i?o=i(e,n):o=w.isURLSearchParams(e)?e.toString():new lc(e,n).toString(r),o){const s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class w_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){w.forEach(this.handlers,function(r){r!==null&&e(r)})}}const lf=w_,Rm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},__=typeof URLSearchParams<"u"?URLSearchParams:lc,E_=typeof FormData<"u"?FormData:null,I_=typeof Blob<"u"?Blob:null,S_=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),k_=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ut={isBrowser:!0,classes:{URLSearchParams:__,FormData:E_,Blob:I_},isStandardBrowserEnv:S_,isStandardBrowserWebWorkerEnv:k_,protocols:["http","https","file","blob","url","data"]};function T_(t,e){return Ks(t,new ut.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return ut.isNode&&w.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function C_(t){return w.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function R_(t){const e={},n=Object.keys(t);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],e[o]=t[o];return e}function Pm(t){function e(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&w.isArray(i)?i.length:s,l?(w.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!w.isObject(i[s]))&&(i[s]=[]),e(n,r,i[s],o)&&w.isArray(i[s])&&(i[s]=R_(i[s])),!a)}if(w.isFormData(t)&&w.isFunction(t.entries)){const n={};return w.forEachEntry(t,(r,i)=>{e(C_(r),i,n,0)}),n}return null}const P_={"Content-Type":void 0};function N_(t,e,n){if(w.isString(t))try{return(e||JSON.parse)(t),w.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const qs={transitional:Rm,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=w.isObject(e);if(o&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e))return i&&i?JSON.stringify(Pm(e)):e;if(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e))return e;if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return T_(e,this.formSerializer).toString();if((a=w.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ks(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),N_(e)):e}],transformResponse:[function(e){const n=this.transitional||qs.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&w.isString(e)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?M.from(a,M.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};w.forEach(["delete","get","head"],function(e){qs.headers[e]={}});w.forEach(["post","put","patch"],function(e){qs.headers[e]=w.merge(P_)});const uc=qs,A_=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),O_=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||e[n]&&A_[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},uf=Symbol("internals");function Kr(t){return t&&String(t).trim().toLowerCase()}function bo(t){return t===!1||t==null?t:w.isArray(t)?t.map(bo):String(t)}function x_(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const L_=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ba(t,e,n,r,i){if(w.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!w.isString(e)){if(w.isString(r))return e.indexOf(r)!==-1;if(w.isRegExp(r))return r.test(e)}}function D_(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function b_(t,e){const n=w.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,o,s){return this[r].call(this,e,i,o,s)},configurable:!0})})}class Gs{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function o(a,l,u){const c=Kr(l);if(!c)throw new Error("header name must be a non-empty string");const d=w.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=bo(a))}const s=(a,l)=>w.forEach(a,(u,c)=>o(u,c,l));return w.isPlainObject(e)||e instanceof this.constructor?s(e,n):w.isString(e)&&(e=e.trim())&&!L_(e)?s(O_(e),n):e!=null&&o(n,e,r),this}get(e,n){if(e=Kr(e),e){const r=w.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return x_(i);if(w.isFunction(n))return n.call(this,i,r);if(w.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Kr(e),e){const r=w.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ba(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function o(s){if(s=Kr(s),s){const a=w.findKey(r,s);a&&(!n||ba(r,r[a],a,n))&&(delete r[a],i=!0)}}return w.isArray(e)?e.forEach(o):o(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!e||ba(this,this[o],o,e,!0))&&(delete this[o],i=!0)}return i}normalize(e){const n=this,r={};return w.forEach(this,(i,o)=>{const s=w.findKey(r,o);if(s){n[s]=bo(i),delete n[o];return}const a=e?D_(o):String(o).trim();a!==o&&delete n[o],n[a]=bo(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return w.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&w.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[uf]=this[uf]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Kr(s);r[a]||(b_(i,s),r[a]=!0)}return w.isArray(e)?e.forEach(o):o(e),this}}Gs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);w.freezeMethods(Gs.prototype);w.freezeMethods(Gs);const It=Gs;function Ma(t,e){const n=this||uc,r=e||n,i=It.from(r.headers);let o=r.data;return w.forEach(t,function(a){o=a.call(n,o,i.normalize(),e?e.status:void 0)}),i.normalize(),o}function Nm(t){return!!(t&&t.__CANCEL__)}function Ji(t,e,n){M.call(this,t??"canceled",M.ERR_CANCELED,e,n),this.name="CanceledError"}w.inherits(Ji,M,{__CANCEL__:!0});function M_(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const U_=ut.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const l=[];l.push(n+"="+encodeURIComponent(r)),w.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),w.isString(o)&&l.push("path="+o),w.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function F_(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function j_(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Am(t,e){return t&&!F_(e)?j_(t,e):e}const z_=ut.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return e&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=w.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function B_(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function $_(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,o=0,s;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[o];s||(s=u),n[i]=l,r[i]=u;let d=o,p=0;for(;d!==i;)p+=n[d++],d=d%t;if(i=(i+1)%t,i===o&&(o=(o+1)%t),u-s<e)return;const v=c&&u-c;return v?Math.round(p*1e3/v):void 0}}function cf(t,e){let n=0;const r=$_(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),u=o<=s;n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-o)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const V_=typeof XMLHttpRequest<"u",W_=V_&&function(t){return new Promise(function(n,r){let i=t.data;const o=It.from(t.headers).normalize(),s=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}w.isFormData(i)&&(ut.isStandardBrowserEnv||ut.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(v+":"+g))}const c=Am(t.baseURL,t.url);u.open(t.method.toUpperCase(),Cm(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function d(){if(!u)return;const v=It.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:t,request:u};M_(function(h){n(h),l()},function(h){r(h),l()},y),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new M("Request aborted",M.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const y=t.transitional||Rm;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),r(new M(g,y.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,t,u)),u=null},ut.isStandardBrowserEnv){const v=(t.withCredentials||z_(c))&&t.xsrfCookieName&&U_.read(t.xsrfCookieName);v&&o.set(t.xsrfHeaderName,v)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&w.forEach(o.toJSON(),function(g,y){u.setRequestHeader(y,g)}),w.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),s&&s!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",cf(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",cf(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=v=>{u&&(r(!v||v.type?new Ji(null,t,u):v),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const p=B_(c);if(p&&ut.protocols.indexOf(p)===-1){r(new M("Unsupported protocol "+p+":",M.ERR_BAD_REQUEST,t));return}u.send(i||null)})},Mo={http:m_,xhr:W_};w.forEach(Mo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const H_={getAdapter:t=>{t=w.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e&&(n=t[i],!(r=w.isString(n)?Mo[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new M(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(w.hasOwnProp(Mo,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!w.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Mo};function Ua(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ji(null,t)}function df(t){return Ua(t),t.headers=It.from(t.headers),t.data=Ma.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),H_.getAdapter(t.adapter||uc.adapter)(t).then(function(r){return Ua(t),r.data=Ma.call(t,t.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return Nm(r)||(Ua(t),r&&r.response&&(r.response.data=Ma.call(t,t.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const ff=t=>t instanceof It?t.toJSON():t;function Er(t,e){e=e||{};const n={};function r(u,c,d){return w.isPlainObject(u)&&w.isPlainObject(c)?w.merge.call({caseless:d},u,c):w.isPlainObject(c)?w.merge({},c):w.isArray(c)?c.slice():c}function i(u,c,d){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function o(u,c){if(!w.isUndefined(c))return r(void 0,c)}function s(u,c){if(w.isUndefined(c)){if(!w.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in e)return r(u,c);if(d in t)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c)=>i(ff(u),ff(c),!0)};return w.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=l[c]||i,p=d(t[c],e[c],c);w.isUndefined(p)&&d!==a||(n[c]=p)}),n}const Om="1.4.0",cc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{cc[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const hf={};cc.transitional=function(e,n,r){function i(o,s){return"[Axios v"+Om+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(e===!1)throw new M(i(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!hf[s]&&(hf[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(o,s,a):!0}};function K_(t,e,n){if(typeof t!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const o=r[i],s=e[o];if(s){const a=t[o],l=a===void 0||s(a,o,t);if(l!==!0)throw new M("option "+o+" must be "+l,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+o,M.ERR_BAD_OPTION)}}const Yl={assertOptions:K_,validators:cc},Dt=Yl.validators;class gs{constructor(e){this.defaults=e,this.interceptors={request:new lf,response:new lf}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Er(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Yl.assertOptions(r,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),i!=null&&(w.isFunction(i)?n.paramsSerializer={serialize:i}:Yl.assertOptions(i,{encode:Dt.function,serialize:Dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&w.merge(o.common,o[n.method]),s&&w.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=It.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,d=0,p;if(!l){const g=[df.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),p=g.length,c=Promise.resolve(n);d<p;)c=c.then(g[d++],g[d++]);return c}p=a.length;let v=n;for(d=0;d<p;){const g=a[d++],y=a[d++];try{v=g(v)}catch(T){y.call(this,T);break}}try{c=df.call(this,v)}catch(g){return Promise.reject(g)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=Er(this.defaults,e);const n=Am(e.baseURL,e.url);return Cm(n,e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(e){gs.prototype[e]=function(n,r){return this.request(Er(r||{},{method:e,url:n,data:(r||{}).data}))}});w.forEach(["post","put","patch"],function(e){function n(r){return function(o,s,a){return this.request(Er(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}gs.prototype[e]=n(),gs.prototype[e+"Form"]=n(!0)});const Uo=gs;class dc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},e(function(o,s,a){r.reason||(r.reason=new Ji(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new dc(function(i){e=i}),cancel:e}}}const q_=dc;function G_(t){return function(n){return t.apply(null,n)}}function J_(t){return w.isObject(t)&&t.isAxiosError===!0}const Ql={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ql).forEach(([t,e])=>{Ql[e]=t});const Y_=Ql;function xm(t){const e=new Uo(t),n=pm(Uo.prototype.request,e);return w.extend(n,Uo.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return xm(Er(t,i))},n}const se=xm(uc);se.Axios=Uo;se.CanceledError=Ji;se.CancelToken=q_;se.isCancel=Nm;se.VERSION=Om;se.toFormData=Ks;se.AxiosError=M;se.Cancel=se.CanceledError;se.all=function(e){return Promise.all(e)};se.spread=G_;se.isAxiosError=J_;se.mergeConfig=Er;se.AxiosHeaders=It;se.formToJSON=t=>Pm(w.isHTMLForm(t)?new FormData(t):t);se.HttpStatusCode=Y_;se.default=se;const Lm=se,Q_=({children:t})=>E.jsx("label",{children:t}),X_=({value:t,label:e,disabled:n,className:r,options:i,onChange:o})=>{const s=E.jsx("select",{className:r,disabled:n,onChange:o,value:t,children:i.map(({value:l,label:u})=>E.jsx("option",{value:l,children:u},u))}),a=e?E.jsxs(Q_,{children:[E.jsx("div",{children:e}),E.jsxs("div",{children:[" ",s," "]})]}):s;return E.jsxs("div",{className:"option-container",children:[" ",a," "]})},Z_="/mobilki-projekt/assets/chuck-54966f56.jpg",eE="/mobilki-projekt/assets/unknown-e3f63977.jpg",tE=({nameInput:t})=>{const e=`url(${eE})`,n=`url(${Z_})`,[r,i]=k.useState(n);return k.useEffect(()=>{i(t!==""?e:n)},[t]),E.jsx("div",{className:"imageSection",children:E.jsx("div",{className:"jokeImageCmp",style:{backgroundImage:r}})})},nE=({initialValue:t=0,fetchChosenJoke:e})=>{const[n,r]=k.useState(t),[i,o]=k.useState("");k.useEffect(()=>{o("")},[n]);const s=()=>{r(p=>p+1)},a=()=>{r(p=>p>0?p-1:0)},l=p=>{const v=parseInt(p.target.value,10);isNaN(v)?r(0):r(v)},u=p=>{const{value:v}=p.target;v.trim()===""?r(0):r(parseInt(v,10))},c=n,d=async()=>{if(n===0||n>100){o("You can pick a number from 1 to 100.");return}try{const p=[];for(let h=0;h<c;h++){const f=await e();p.push(f)}const v=p.map(h=>h+`

`).join(""),g="jokes.txt",y=new Blob([v],{type:"text/plain"}),T=document.createElement("a");T.href=URL.createObjectURL(y),T.download=g,T.click(),URL.revokeObjectURL(T.href)}catch(p){console.error("Error fetching or saving jokes:",p)}o("")};return E.jsxs("div",{className:"counter",children:[E.jsxs("div",{className:"counter-top",children:[E.jsxs("div",{className:"counter-group",children:[E.jsx("div",{className:"button minus",onClick:a,children:E.jsx("div",{className:"minus-box",children:"-"})}),E.jsx("input",{type:"number",step:"1",max:"",value:Number(n).toString(),name:"quantity",className:"quantity-field",onChange:l,onBlur:u}),E.jsx("div",{className:"button plus",onClick:s,children:E.jsx("div",{className:"plus-box",children:"+"})})]}),E.jsx("div",{className:"saveJokes",onClick:d,children:"Save jokes"})]}),i&&E.jsx("div",{className:"controlMessage",children:i})]})},fc=hu.createContext(null),rE=({category:t,options:e,onChange:n})=>{const r=k.useContext(fc),[i,o]=k.useState("Chuck Norris"),[s,a]=k.useState({jokeName:""}),[l,u]=k.useState({joke:""}),c=T=>{a({...s,[T.target.name]:T.target.value});const h=T.target.value;h==""?o("Chuck Norris"):o(h)},d="https://api.chucknorris.io/jokes/random",p=async T=>{const h=await Lm.get(T);return console.log(h.data.value),u({...l,joke:h.data.value}),h.data.value},v=()=>{let T;if(t!="")if(console.log("category in fetching comp.: ",t),s.jokeName==""){const h=`${d}?category=${t}`;T=p(h)}else{const h=`${d}?name=${s.jokeName}&category=${t}`;console.log(h),T=p(h)}else if(s.jokeName=="")T=p(d);else{const h=`${d}?name=${s.jokeName}`;T=p(h)}return T},g=()=>{v()};k.useEffect(()=>{g()},[]);const y=T=>{console.log("click event curr target: ",T.currentTarget),v()};return E.jsxs("div",{className:"GetJoke",children:[E.jsx(tE,{nameInput:s.jokeName}),E.jsxs("div",{className:"jokeQuote",children:[" ",l.joke," "]}),r&&E.jsxs(E.Fragment,{children:[E.jsx(X_,{className:"selectCategory",options:e,value:t,onChange:n}),E.jsx("input",{type:"text",placeholder:"Draw Chuck joke",className:"GetJoke-input",value:s.jokeName,onChange:c,name:"jokeName"})]}),E.jsxs("button",{className:"GetJoke-btn",onClick:y,children:["Draw a random ",i," joke"]}),r&&E.jsx(nE,{fetchChosenJoke:v})]})},iE=()=>{const[t,e]=k.useState({categories:[""]}),n=async()=>{const a=await Lm.get("https://api.chucknorris.io/jokes/categories");console.log(a.data),e({...t,categories:a.data})};k.useEffect(()=>{n()},[]);const r=[{label:"Category",value:""},...t.categories.map(a=>({label:a,value:a}))],[i,o]=k.useState(""),s=a=>{o(a.target.value)};return E.jsx("div",{className:"GetCategories",children:E.jsx(rE,{category:i,options:r,onChange:s})})},oE=()=>E.jsx("div",{className:"Chuck-page",children:E.jsx(iE,{})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(p=64)),r.push(n[c],n[d],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new aE;const p=o<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lE=function(t){const e=Dm(t);return bm.encodeByteArray(e,!0)},Mm=function(t){return lE(t).replace(/\./g,"")},Um=function(t){try{return bm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function vs(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!uE(n)||(t[n]=vs(t[n],e[n]));return t}function uE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=()=>cE().__FIREBASE_DEFAULTS__,fE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Um(t[1]);return e&&JSON.parse(e)},hc=()=>{try{return dE()||fE()||hE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fm=()=>{var t;return(t=hc())===null||t===void 0?void 0:t.config},pE=t=>{var e;return(e=hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function jm(){var t;const e=(t=hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vE(){return typeof self=="object"&&self.self===self}function zm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bm(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ys(){try{return typeof indexedDB=="object"}catch{return!1}}function yE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="FirebaseError";class Ae extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wE,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jn.prototype.create)}}class jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?_E(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ae(i,a,r)}}function _E(t,e){return t.replace(EE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function IE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(mf(o)&&mf(s)){if(!Xl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $m(t,e){const n=new SE(t,e);return n.subscribe.bind(n)}class SE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fa),i.error===void 0&&(i.error=Fa),i.complete===void 0&&(i.complete=Fa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RE(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CE(t){return t===vn?void 0:t}function RE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=[];var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Vm={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},NE=z.INFO,AE={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},OE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=AE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=NE,this._logHandler=OE,this._userLogHandler=null,mc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}function xE(t){mc.forEach(e=>{e.setLogLevel(t)})}function LE(t,e){for(const n of mc){let r=null;e&&e.level&&(r=Vm[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:z[o].toLowerCase(),message:a,args:s,type:i.name})}}}const DE=(t,e)=>e.some(n=>t instanceof n);let gf,vf;function bE(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ME(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wm=new WeakMap,Zl=new WeakMap,Hm=new WeakMap,ja=new WeakMap,vc=new WeakMap;function UE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Zt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Wm.set(n,t)}).catch(()=>{}),vc.set(e,t),e}function FE(t){if(Zl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Zl.set(t,e)}let eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jE(t){eu=t(eu)}function zE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(za(this),e,...n);return Hm.set(r,e.sort?e.sort():[e]),Zt(r)}:ME().includes(t)?function(...e){return t.apply(za(this),e),Zt(Wm.get(this))}:function(...e){return Zt(t.apply(za(this),e))}}function BE(t){return typeof t=="function"?zE(t):(t instanceof IDBTransaction&&FE(t),DE(t,bE())?new Proxy(t,eu):t)}function Zt(t){if(t instanceof IDBRequest)return UE(t);if(ja.has(t))return ja.get(t);const e=BE(t);return e!==t&&(ja.set(t,e),vc.set(e,t)),e}const za=t=>vc.get(t);function $E(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Zt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Zt(s.result),l.oldVersion,l.newVersion,Zt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const VE=["get","getKey","getAll","getAllKeys","count"],WE=["put","add","delete","clear"],Ba=new Map;function yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ba.get(e))return Ba.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ba.set(e,o),o}jE(t=>({...t,get:(e,n,r)=>yf(e,n)||t.get(e,n,r),has:(e,n)=>!!yf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tu="@firebase/app",wf="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new gc("@firebase/app"),qE="@firebase/app-compat",GE="@firebase/analytics-compat",JE="@firebase/analytics",YE="@firebase/app-check-compat",QE="@firebase/app-check",XE="@firebase/auth",ZE="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/database-compat",nI="@firebase/functions",rI="@firebase/functions-compat",iI="@firebase/installations",oI="@firebase/installations-compat",sI="@firebase/messaging",aI="@firebase/messaging-compat",lI="@firebase/performance",uI="@firebase/performance-compat",cI="@firebase/remote-config",dI="@firebase/remote-config-compat",fI="@firebase/storage",hI="@firebase/storage-compat",pI="@firebase/firestore",mI="@firebase/firestore-compat",gI="firebase",vI="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]",yI={[tu]:"fire-core",[qE]:"fire-core-compat",[JE]:"fire-analytics",[GE]:"fire-analytics-compat",[QE]:"fire-app-check",[YE]:"fire-app-check-compat",[XE]:"fire-auth",[ZE]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-rtdb-compat",[nI]:"fire-fn",[rI]:"fire-fn-compat",[iI]:"fire-iid",[oI]:"fire-iid-compat",[sI]:"fire-fcm",[aI]:"fire-fcm-compat",[lI]:"fire-perf",[uI]:"fire-perf-compat",[cI]:"fire-rc",[dI]:"fire-rc-compat",[fI]:"fire-gcs",[hI]:"fire-gcs-compat",[pI]:"fire-fst",[mI]:"fire-fst-compat","fire-js":"fire-js",[gI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Map,bi=new Map;function ws(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Km(t,e){t.container.addOrOverwriteComponent(e)}function Ln(t){const e=t.name;if(bi.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;bi.set(e,t);for(const n of sn.values())ws(n,t);return!0}function qm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wI(t,e,n=on){qm(t,e).clearInstance(n)}function _I(){bi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new jn("app","Firebase",EI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let II=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=vI;function yc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:on,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(n||(n=Fm()),!n)throw St.create("no-options");const o=sn.get(i);if(o){if(Xl(n,o.options)&&Xl(r,o.config))return o;throw St.create("duplicate-app",{appName:i})}const s=new PE(i);for(const l of bi.values())s.addComponent(l);const a=new II(n,r,s);return sn.set(i,a),a}function SI(t=on){const e=sn.get(t);if(!e&&t===on&&Fm())return yc();if(!e)throw St.create("no-app",{appName:t});return e}function kI(){return Array.from(sn.values())}async function Gm(t){const e=t.name;sn.has(e)&&(sn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function en(t,e,n){var r;let i=(r=yI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(a.join(" "));return}Ln(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Jm(t,e){if(t!==null&&typeof t!="function")throw St.create("invalid-log-argument");LE(t,e)}function Ym(t){xE(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="firebase-heartbeat-database",CI=1,Mi="firebase-heartbeat-store";let $a=null;function Qm(){return $a||($a=$E(TI,CI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mi)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),$a}async function RI(t){try{return await(await Qm()).transaction(Mi).objectStore(Mi).get(Xm(t))}catch(e){if(e instanceof Ae)xn.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function _f(t,e){try{const r=(await Qm()).transaction(Mi,"readwrite");await r.objectStore(Mi).put(e,Xm(t)),await r.done}catch(n){if(n instanceof Ae)xn.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function Xm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=1024,NI=30*24*60*60*1e3;class AI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ef();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=NI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ef(),{heartbeatsToSend:n,unsentEntries:r}=OI(this._heartbeatsCache.heartbeats),i=Mm(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ef(){return new Date().toISOString().substring(0,10)}function OI(t,e=PI){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),If(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),If(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ys()?yE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _f(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function If(t){return Mm(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){Ln(new rn("platform-logger",e=>new HE(e),"PRIVATE")),Ln(new rn("heartbeat",e=>new AI(e),"PRIVATE")),en(tu,wf,t),en(tu,wf,"esm2017"),en("fire-js","")}LI("");const DI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ae,SDK_VERSION:zn,_DEFAULT_ENTRY_NAME:on,_addComponent:ws,_addOrOverwriteComponent:Km,_apps:sn,_clearComponents:_I,_components:bi,_getProvider:qm,_registerComponent:Ln,_removeServiceInstance:wI,deleteApp:Gm,getApp:SI,getApps:kI,initializeApp:yc,onLog:Jm,registerVersion:en,setLogLevel:Ym},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n){this._delegate=e,this.firebase=n,ws(e,new rn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Gm(this._delegate)))}_getService(e,n=on){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=on){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){ws(this._delegate,e)}_addOrOverwriteComponent(e){Km(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Sf=new jn("app-compat","Firebase",MI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:en,setLogLevel:Ym,onLog:Jm,apps:null,SDK_VERSION:zn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:DI}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||on,!pf(e,u))throw Sf.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,c={}){const d=yc(u,c);if(pf(e,d.name))return e[d.name];const p=new t(d,n);return e[d.name]=p,p}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(Ln(u)&&u.type==="PUBLIC"){const p=(v=i())=>{if(typeof v[d]!="function")throw Sf.create("invalid-app-argument",{appName:c});return v[d]()};u.serviceProps!==void 0&&vs(p,u.serviceProps),n[d]=p,t.prototype[d]=function(...v){return this._getService.bind(this,c).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(){const t=UI(bI);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Zm,extendNamespace:e,createSubscribe:$m,ErrorFactory:jn,deepExtend:vs});function e(n){vs(t,n)}return t}const FI=Zm();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new gc("@firebase/app-compat"),jI="@firebase/app-compat",zI="0.2.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){en(jI,zI,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(vE()&&self.firebase!==void 0){kf.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&kf.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Or=FI;BI();var $I="firebase",VI="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Or.registerVersion($I,VI,"app-compat");function wc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const qr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Vn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function eg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HI=WI,KI=eg,tg=new jn("auth","Firebase",eg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new gc("@firebase/auth");function qI(t,...e){_s.logLevel<=z.WARN&&_s.warn(`Auth (${zn}): ${t}`,...e)}function Fo(t,...e){_s.logLevel<=z.ERROR&&_s.error(`Auth (${zn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t,...e){throw _c(t,...e)}function he(t,...e){return _c(t,...e)}function ng(t,e,n){const r=Object.assign(Object.assign({},KI()),{[e]:n});return new jn("auth","Firebase",r).create(e,{appName:t.name})}function xr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&me(t,"argument-error"),ng(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _c(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tg.create(t,...e)}function S(t,e,...n){if(!t)throw _c(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function tt(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ec(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ec()||zm()||"connection"in navigator)?navigator.onLine:!0}function JI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=gE()||pc()}get(){return GI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new Yi(3e4,6e4);function re(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ae(t,e,n,r,i={}){return ig(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ar(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rg.fetch()(og(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YI),e);try{const i=new XI(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ti(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ti(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw ti(t,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ng(t,c,u);me(t,c)}}catch(i){if(i instanceof Ae)throw i;me(t,"network-request-failed",{message:String(i)})}}async function Ot(t,e,n,r,i={}){const o=await ae(t,e,n,r,i);return"mfaPendingCredential"in o&&me(t,"multi-factor-auth-required",{_serverResponse:o}),o}function og(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ic(t.config,i):`${t.config.apiScheme}://${i}`}class XI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(he(this.auth,"network-request-failed")),QI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=he(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e){return ae(t,"POST","/v1/accounts:delete",e)}async function eS(t,e){return ae(t,"POST","/v1/accounts:update",e)}async function tS(t,e){return ae(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nS(t,e=!1){const n=F(t),r=await n.getIdToken(e),i=Js(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:fi(Va(i.auth_time)),issuedAtTime:fi(Va(i.iat)),expirationTime:fi(Va(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Va(t){return Number(t)*1e3}function Js(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Um(n);return i?JSON.parse(i):(Fo("Failed to decode base64 JWT payload"),null)}catch(i){return Fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rS(t){const e=Js(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ae&&iS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Nt(t,tS(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?lS(o.providerUserInfo):[],a=aS(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new sg(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function sS(t){const e=F(t);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lS(t){return t.map(e=>{var{providerId:n}=e,r=wc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(t,e){const n=await ig(t,{},async()=>{const r=Ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=og(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rg.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await uS(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ji;return r&&(S(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(S(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ji,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new sg(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Nt(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nS(this,e)}reload(){return sS(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nt(this,ZI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,g=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:C,providerData:N,stsTokenManager:A}=n;S(m&&A,e,"internal-error");const O=ji.fromJSON(this.name,A);S(typeof m=="string",e,"internal-error"),bt(d,e.name),bt(p,e.name),S(typeof _=="boolean",e,"internal-error"),S(typeof C=="boolean",e,"internal-error"),bt(v,e.name),bt(g,e.name),bt(y,e.name),bt(T,e.name),bt(h,e.name),bt(f,e.name);const $=new kn({uid:m,auth:e,email:p,emailVerified:_,displayName:d,isAnonymous:C,photoURL:g,phoneNumber:v,tenantId:y,stsTokenManager:O,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&($.providerData=N.map(D=>Object.assign({},D))),T&&($._redirectEventId=T),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new ji;i.updateFromServerResponse(n);const o=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fi(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map;function De(t){tt(t instanceof Function,"Expected a class definition");let e=Cf.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ag.type="NONE";const Ir=ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e,n){return`firebase:${t}:${e}:${n}`}class cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Tn(this.userKey,i.apiKey,o),this.fullPersistenceKey=Tn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cr(De(Ir),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||De(Ir);const s=Tn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=kn._fromJSON(e,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new cr(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new cr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dg(e))return"Blackberry";if(fg(e))return"Webos";if(Sc(e))return"Safari";if((e.includes("chrome/")||ug(e))&&!e.includes("edge/"))return"Chrome";if(Qi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lg(t=ne()){return/firefox\//i.test(t)}function Sc(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ug(t=ne()){return/crios\//i.test(t)}function cg(t=ne()){return/iemobile/i.test(t)}function Qi(t=ne()){return/android/i.test(t)}function dg(t=ne()){return/blackberry/i.test(t)}function fg(t=ne()){return/webos/i.test(t)}function Lr(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cS(t=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function dS(t=ne()){var e;return Lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fS(){return Bm()&&document.documentMode===10}function hg(t=ne()){return Lr(t)||Qi(t)||fg(t)||dg(t)||/windows phone/i.test(t)||cg(t)}function hS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e=[]){let n;switch(t){case"Browser":n=Rf(ne());break;case"Worker":n=`${Rf(ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t){return(await ae(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function mg(t,e){return ae(t,"GET","/v2/recaptchaConfig",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){return t!==void 0&&t.getResponse!==void 0}function Nf(t){return t!==void 0&&t.enterprise!==void 0}class gg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=he("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",mS().appendChild(r)})}function vg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gS="https://www.google.com/recaptcha/enterprise.js?render=",vS="recaptcha-enterprise",yS="NO_RECAPTCHA";class yg{constructor(e){this.type=vS,this.auth=X(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{mg(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new gg(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Nf(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(yS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Nf(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}kc(gS+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function an(t,e,n,r=!1){const i=new yg(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new wS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=De(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?F(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(De(e))})}async initializeRecaptchaConfig(){const e=await mg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&De(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await cr.create(this,[De(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function X(t){return F(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=$m(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ES(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(De);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function IS(t,e,n){const r=X(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=wg(e),{host:s,port:a}=SS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||kS()}function wg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SS(t){const e=wg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Of(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Of(s)}}}function Of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _g(t,e){return ae(t,"POST","/v1/accounts:resetPassword",re(t,e))}async function Eg(t,e){return ae(t,"POST","/v1/accounts:update",e)}async function TS(t,e){return ae(t,"POST","/v1/accounts:update",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t,e){return Ot(t,"POST","/v1/accounts:signInWithPassword",re(t,e))}async function Ys(t,e){return ae(t,"POST","/v1/accounts:sendOobCode",re(t,e))}async function CS(t,e){return Ys(t,e)}async function Ha(t,e){return Ys(t,e)}async function Ka(t,e){return Ys(t,e)}async function RS(t,e){return Ys(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(t,e){return Ot(t,"POST","/v1/accounts:signInWithEmailLink",re(t,e))}async function NS(t,e){return Ot(t,"POST","/v1/accounts:signInWithEmailLink",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Dr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await an(e,r,"signInWithPassword");return Wa(e,i)}else return Wa(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await an(e,r,"signInWithPassword");return Wa(e,o)}else return Promise.reject(i)});case"emailLink":return PS(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Eg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NS(e,{idToken:n,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return Ot(t,"POST","/v1/accounts:signInWithIdp",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="http://localhost";class ht extends Dr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=wc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ht(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kt(e,n)}buildRequest(){const e={requestUri:AS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ar(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){return ae(t,"POST","/v1/accounts:sendVerificationCode",re(t,e))}async function xS(t,e){return Ot(t,"POST","/v1/accounts:signInWithPhoneNumber",re(t,e))}async function LS(t,e){const n=await Ot(t,"POST","/v1/accounts:signInWithPhoneNumber",re(t,e));if(n.temporaryProof)throw ti(t,"account-exists-with-different-credential",n);return n}const DS={USER_NOT_FOUND:"user-not-found"};async function bS(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ot(t,"POST","/v1/accounts:signInWithPhoneNumber",re(t,n),DS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Dr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Cn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Cn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xS(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return LS(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bS(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new Cn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function US(t){const e=rr(ei(t)).link,n=e?rr(ei(e)).deep_link_id:null,r=rr(ei(t)).deep_link_id;return(r?rr(ei(r)).link:null)||r||n||e||t}class Qs{constructor(e){var n,r,i,o,s,a;const l=rr(ei(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=MS((i=l.mode)!==null&&i!==void 0?i:null);S(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=US(e);try{return new Qs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,n){return zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qs.parseLink(n);return S(r,"argument-error"),zi._fromEmailAndCode(e,r.code,r.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends xt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dr extends br{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return S("providerId"in n&&"signInMethod"in n,"argument-error"),ht._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),ht._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new dr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends br{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ht._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return st.credential(n,r)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends br{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="http://localhost";class Sr extends Dr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,kt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new Sr(r,o)}static _create(e,n){return new Sr(e,n)}buildRequest(){return{requestUri:FS,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="saml.";class Es extends xt{constructor(e){S(e.startsWith(jS),"argument-error"),super(e)}static credentialFromResult(e){return Es.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Es.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Sr.fromJSON(e);return S(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Sr._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends br{constructor(){super("twitter.com")}static credential(e,n){return ht._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t,e){return Ot(t,"POST","/v1/accounts:signUp",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await kn._fromIdTokenResponse(e,r,i),s=xf(r);return new Ke({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xf(r);return new Ke({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t){var e;const n=X(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ke({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await jo(n,{returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Ae{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Is.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Is(e,n,r,i)}}function Ig(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Is._fromErrorAndOperation(t,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t,e){const n=F(t);await Xs(!0,n,e);const{providerUserInfo:r}=await eS(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Sg(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Tc(t,e,n=!1){const r=await Nt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ke._forOperation(t,"link",r)}async function Xs(t,e,n){await Fi(e);const r=Sg(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";S(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Nt(t,Ig(r,i,e,t),n);S(o.idToken,r,"internal-error");const s=Js(o.idToken);S(s,r,"internal-error");const{sub:a}=s;return S(t.uid===a,r,"user-mismatch"),Ke._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&me(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e,n=!1){const r="signIn",i=await Ig(t,r,e),o=await Ke._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Zs(t,e){return Tg(X(t),e)}async function Cg(t,e){const n=F(t);return await Xs(!1,n,e.providerId),Tc(n,e)}async function Rg(t,e){return kg(F(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e){return Ot(t,"POST","/v1/accounts:signInWithCustomToken",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e){const n=X(t),r=await $S(n,{token:e,returnSecureToken:!0}),i=await Ke._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Cc._fromServerResponse(e,n):"totpInfo"in n?Rc._fromServerResponse(e,n):me(e,"internal-error")}}class Cc extends Xi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Cc(n)}}class Rc extends Xi{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Rc(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e,n){var r;S(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e,n){var r;const i=X(t),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const s=await an(i,o,"getOobCode",!0);n&&fr(i,s,n),await Ha(i,s)}else n&&fr(i,o,n),await Ha(i,o).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await an(i,o,"getOobCode",!0);n&&fr(i,a,n),await Ha(i,a)}else return Promise.reject(s)})}async function HS(t,e,n){await _g(F(t),{oobCode:e,newPassword:n})}async function KS(t,e){await TS(F(t),{oobCode:e})}async function Pg(t,e){const n=F(t),r=await _g(n,{oobCode:e}),i=r.requestType;switch(S(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Xi._fromServerResponse(X(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function qS(t,e){const{data:n}=await Pg(F(t),e);return n.email}async function GS(t,e,n){var r;const i=X(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await an(i,o,"signUpPassword");s=jo(i,u)}else s=jo(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await an(i,o,"signUpPassword");return jo(i,c)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),l=await Ke._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function JS(t,e,n){return Zs(F(t),fn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e,n){var r;const i=X(t),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,l){S(l.handleCodeInApp,i,"argument-error"),l&&fr(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await an(i,o,"getOobCode",!0);s(a,n),await Ka(i,a)}else s(o,n),await Ka(i,o).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await an(i,o,"getOobCode",!0);s(l,n),await Ka(i,l)}else return Promise.reject(a)})}function QS(t,e){const n=Qs.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function XS(t,e,n){const r=F(t),i=fn.credentialWithLink(e,n||Ui());return S(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Zs(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e){return ae(t,"POST","/v1/accounts:createAuthUri",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e){const n=Ec()?Ui():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await ZS(F(t),r);return i||[]}async function tk(t,e){const n=F(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&fr(n.auth,i,e);const{email:o}=await CS(n.auth,i);o!==t.email&&await t.reload()}async function nk(t,e,n){const r=F(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&fr(r.auth,o,n);const{email:s}=await RS(r.auth,o);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e){return ae(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=F(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Nt(r,rk(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function ok(t,e){return Ng(F(t),e,null)}function sk(t,e){return Ng(F(t),null,e)}async function Ng(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await Nt(t,Eg(r,o));await t._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=Js(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new hr(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new lk(o,i);case"github.com":return new uk(o,i);case"google.com":return new ck(o,i);case"twitter.com":return new dk(o,i,t.screenName||null);case"custom":case"anonymous":return new hr(o,null);default:return new hr(o,r,i)}}class hr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Ag extends hr{constructor(e,n,r,i){super(e,n,r),this.username=i}}class lk extends hr{constructor(e,n){super(e,"facebook.com",n)}}class uk extends Ag{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class ck extends hr{constructor(e,n){super(e,"google.com",n)}}class dk extends Ag{constructor(e,n,r){super(e,"twitter.com",n,r)}}function fk(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ak(n)}class En{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new En("enroll",e,n)}static _fromMfaPendingCredential(e){return new En("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return En._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return En._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=X(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>Xi._fromServerResponse(r,a));S(i.mfaPendingCredential,r,"internal-error");const s=En._fromMfaPendingCredential(i.mfaPendingCredential);return new Pc(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Ke._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return S(n.user,r,"internal-error"),Ke._forOperation(n.user,n.operationType,u);default:me(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function hk(t,e){var n;const r=F(t),i=e;return S(e.customData.operationType,r,"argument-error"),S((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Pc._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e){return ae(t,"POST","/v2/accounts/mfaEnrollment:start",re(t,e))}function mk(t,e){return ae(t,"POST","/v2/accounts/mfaEnrollment:finalize",re(t,e))}function gk(t,e){return ae(t,"POST","/v2/accounts/mfaEnrollment:withdraw",re(t,e))}class Nc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Xi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Nc(e)}async getSession(){return En._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),o=await Nt(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Nt(this.user,gk(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const qa=new WeakMap;function vk(t){const e=F(t);return qa.has(e)||qa.set(e,Nc._fromUser(e)),qa.get(e)}const Ss="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(){const t=ne();return Sc(t)||Lr(t)}const wk=1e3,_k=10;class xg extends Og{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yk()&&hS(),this.fallbackToPolling=hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);fS()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,_k):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xg.type="LOCAL";const Ac=xg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends Og{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lg.type="SESSION";const Dn=Lg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ea(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await Ek(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Zi("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function Sk(t){Z().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function kk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ck(){return Oc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="firebaseLocalStorageDb",Rk=1,ks="firebaseLocalStorage",bg="fbase_key";class eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ta(t,e){return t.transaction([ks],e?"readwrite":"readonly").objectStore(ks)}function Pk(){const t=indexedDB.deleteDatabase(Dg);return new eo(t).toPromise()}function nu(){const t=indexedDB.open(Dg,Rk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ks,{keyPath:bg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ks)?e(r):(r.close(),await Pk(),e(await nu()))})})}async function Lf(t,e,n){const r=ta(t,!0).put({[bg]:e,value:n});return new eo(r).toPromise()}async function Nk(t,e){const n=ta(t,!1).get(e),r=await new eo(n).toPromise();return r===void 0?null:r.value}function Df(t,e){const n=ta(t,!0).delete(e);return new eo(n).toPromise()}const Ak=800,Ok=3;class Mg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ok)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kk(),!this.activeServiceWorker)return;this.sender=new Ik(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nu();return await Lf(e,Ss,"1"),await Df(e,Ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Df(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ta(i,!1).getAll();return new eo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mg.type="LOCAL";const Bi=Mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t,e){return ae(t,"POST","/v2/accounts/mfaSignIn:start",re(t,e))}function Lk(t,e){return ae(t,"POST","/v2/accounts/mfaSignIn:finalize",re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=500,bk=6e4,Eo=1e12;class Mk{constructor(e){this.auth=e,this.counter=Eo,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Uk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Eo;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Eo;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Eo;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Uk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Fk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},bk)},Dk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Fk(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=vg("rcb"),jk=new Yi(3e4,6e4),zk="https://www.google.com/recaptcha/api.js?";class Bk{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Z().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return S($k(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Pf(Z().grecaptcha)?Promise.resolve(Z().grecaptcha):new Promise((r,i)=>{const o=Z().setTimeout(()=>{i(he(e,"network-request-failed"))},jk.get());Z()[Ga]=()=>{Z().clearTimeout(o),delete Z()[Ga];const a=Z().grecaptcha;if(!a||!Pf(a)){i(he(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const s=`${zk}?${Ar({onload:Ga,render:"explicit",hl:n})}`;kc(s).catch(()=>{clearTimeout(o),i(he(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Z().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function $k(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Vk{async load(e){return new Mk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="recaptcha",Wk={theme:"light",type:"image"};let Hk=class{constructor(e,n=Object.assign({},Wk),r){this.parameters=n,this.type=Ug,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=X(r),this.isInvisible=this.parameters.size==="invisible",S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vk:new Bk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Z()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(Ec()&&!Oc(),this.auth,"internal-error"),await Kk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pS(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Kk(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Cn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function qk(t,e,n){const r=X(t),i=await na(r,e,F(n));return new xc(i,o=>Zs(r,o))}async function Gk(t,e,n){const r=F(t);await Xs(!1,r,"phone");const i=await na(r.auth,e,F(n));return new xc(i,o=>Cg(r,o))}async function Jk(t,e,n){const r=F(t),i=await na(r.auth,e,F(n));return new xc(i,o=>Rg(r,o))}async function na(t,e,n){var r;const i=await n.verify();try{S(typeof i=="string",t,"argument-error"),S(n.type===Ug,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return S(s.type==="enroll",t,"internal-error"),(await pk(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{S(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return S(a,t,"missing-multi-factor-info"),(await xk(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await OS(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function Yk(t,e){await Tc(F(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn=class zo{constructor(e){this.providerId=zo.PROVIDER_ID,this.auth=X(e)}verifyPhoneNumber(e,n){return na(this.auth,e,F(n))}static credential(e,n){return Cn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return zo.credentialFromTaggedObject(n)}static credentialFromError(e){return zo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Cn._fromTokenResponse(n,r):null}};bn.PROVIDER_ID="phone";bn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){return e?De(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Dr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qk(t){return Tg(t.auth,new Lc(t),t.bypassAuthState)}function Xk(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),kg(n,new Lc(t),t.bypassAuthState)}async function Zk(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Tc(n,new Lc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Xk;default:me(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Yi(2e3,1e4);async function t1(t,e,n){const r=X(t);xr(t,e,xt);const i=Bn(r,n);return new wt(r,"signInViaPopup",e,i).executeNotNull()}async function n1(t,e,n){const r=F(t);xr(r.auth,e,xt);const i=Bn(r.auth,n);return new wt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function r1(t,e,n){const r=F(t);xr(r.auth,e,xt);const i=Bn(r.auth,n);return new wt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class wt extends Fg{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(he(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(he(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(he(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e1.get())};e()}}wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="pendingRedirect",hi=new Map;class o1 extends Fg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const r=await s1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s1(t,e){const n=zg(e),r=jg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Dc(t,e){return jg(t)._set(zg(e),"true")}function a1(){hi.clear()}function bc(t,e){hi.set(t._key(),e)}function jg(t){return De(t._redirectPersistence)}function zg(t){return Tn(i1,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e,n){return u1(t,e,n)}async function u1(t,e,n){const r=X(t);xr(t,e,xt),await r._initializationPromise;const i=Bn(r,n);return await Dc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function c1(t,e,n){return d1(t,e,n)}async function d1(t,e,n){const r=F(t);xr(r.auth,e,xt),await r.auth._initializationPromise;const i=Bn(r.auth,n);await Dc(i,r.auth);const o=await Bg(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function f1(t,e,n){return h1(t,e,n)}async function h1(t,e,n){const r=F(t);xr(r.auth,e,xt),await r.auth._initializationPromise;const i=Bn(r.auth,n);await Xs(!1,r,e.providerId),await Dc(i,r.auth);const o=await Bg(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function p1(t,e){return await X(t)._initializationPromise,ra(t,e,!1)}async function ra(t,e,n=!1){const r=X(t),i=Bn(r,e),s=await new o1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Bg(t){const e=Zi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=10*60*1e3;class $g{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(he(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m1&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(e))}saveEventToCache(e){this.cachedEventUids.add(bf(e)),this.lastProcessedEventTime=Date.now()}}function bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(t,e={}){return ae(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function w1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wg(t);for(const n of e)try{if(_1(n))return}catch{}me(t,"unauthorized-domain")}function _1(t){const e=Ui(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!y1.test(n))return!1;if(v1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=new Yi(3e4,6e4);function Mf(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I1(t){return new Promise((e,n)=>{var r,i,o;function s(){Mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(he(t,"network-request-failed"))},timeout:E1.get()})}if(!((i=(r=Z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Z().gapi)===null||o===void 0)&&o.load)s();else{const a=vg("iframefcb");return Z()[a]=()=>{gapi.load?s():n(he(t,"network-request-failed"))},kc(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Bo=null,e})}let Bo=null;function S1(t){return Bo=Bo||I1(t),Bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=new Yi(5e3,15e3),T1="__/auth/iframe",C1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N1(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ic(e,C1):`https://${t.config.authDomain}/${T1}`,r={apiKey:e.apiKey,appName:t.name,v:zn},i=P1.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ar(r).slice(1)}`}async function A1(t){const e=await S1(t),n=Z().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:N1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=he(t,"network-request-failed"),a=Z().setTimeout(()=>{o(s)},k1.get());function l(){Z().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x1=500,L1=600,D1="_blank",b1="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M1(t,e,n,r=x1,i=L1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O1),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ne().toLowerCase();n&&(a=ug(u)?D1:n),lg(u)&&(e=e||b1,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[v,g])=>`${p}${v}=${g},`,"");if(dS(u)&&a!=="_self")return U1(e||"",a),new Uf(null);const d=window.open(e||"",a,c);S(d,t,"popup-blocked");try{d.focus()}catch{}return new Uf(d)}function U1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="__/auth/handler",j1="emulator/auth/handler",z1=encodeURIComponent("fac");async function ru(t,e,n,r,i,o){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:i};if(e instanceof xt){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",IE(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(o||{}))s[c]=d}if(e instanceof br){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${z1}=${encodeURIComponent(l)}`:"";return`${B1(t)}?${Ar(a).slice(1)}${u}`}function B1({config:t}){return t.emulator?Ic(t,j1):`https://${t.authDomain}/${F1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="webStorageSupport";class $1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dn,this._completeRedirectFn=ra,this._overrideRedirectResult=bc}async _openPopup(e,n,r,i){var o;tt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ru(e,n,r,Ui(),i);return M1(e,s,Zi())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await ru(e,n,r,Ui(),i);return Sk(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(tt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await A1(e),r=new $g(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ja,{type:Ja},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ja];s!==void 0&&n(!!s),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hg()||Sc()||Lr()}}const V1=$1;class W1{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ct("unexpected MultiFactorSessionType")}}}class Mc extends W1{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mc(e)}_finalizeEnroll(e,n,r){return mk(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Lk(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Hg{constructor(){}static assertion(e){return Mc._fromCredential(e)}}Hg.FACTOR_ID="phone";var Ff="@firebase/auth",jf="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function q1(t){Ln(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;S(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pg(t)},u=new _S(r,i,o,l);return ES(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new rn("auth-internal",e=>{const n=X(e.getProvider("auth").getImmediate());return(r=>new H1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Ff,jf,K1(t)),en(Ff,jf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=5*60;pE("authIdTokenMaxAge");q1("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=2e3;async function Y1(t,e,n){var r;const{BuildInfo:i}=Mn();tt(e.sessionId,"AuthEvent did not contain a session ID");const o=await tT(e.sessionId),s={};return Lr()?s.ibi=i.packageName:Qi()?s.apn=i.packageName:me(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,ru(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function Q1(t){const{BuildInfo:e}=Mn(),n={};Lr()?n.iosBundleId=e.packageName:Qi()?n.androidPackageName=e.packageName:me(t,"operation-not-supported-in-this-environment"),await Wg(t,n)}function X1(t){const{cordova:e}=Mn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,cS()?"_blank":"_system","location=yes"),n(i)})})}async function Z1(t,e,n){const{cordova:r}=Mn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var d;o();const p=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(he(t,"redirect-cancelled-by-user"))},J1))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Qi()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function eT(t){var e,n,r,i,o,s,a,l,u,c;const d=Mn();S(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S(typeof((o=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((l=(a=(s=d==null?void 0:d.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function tT(t){const e=nT(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function nT(t){if(tt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=20;class iT extends $g{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function oT(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:lT(),postBody:null,tenantId:t.tenantId,error:he(t,"no-auth-event")}}function sT(t,e){return iu()._set(ou(t),e)}async function zf(t){const e=await iu()._get(ou(t));return e&&await iu()._remove(ou(t)),e}function aT(t,e){var n,r;const i=cT(e);if(i.includes("/__/auth/callback")){const o=$o(i),s=o.firebaseError?uT(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?he(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function lT(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<rT;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function iu(){return De(Ac)}function ou(t){return Tn("authEvent",t.config.apiKey,t.name)}function uT(t){try{return JSON.parse(t)}catch{return null}}function cT(t){const e=$o(t),n=e.link?decodeURIComponent(e.link):void 0,r=$o(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return $o(i).link||i||r||n||t}function $o(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return rr(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=500;class fT{constructor(){this._redirectPersistence=Dn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ra,this._overrideRedirectResult=bc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new iT(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){me(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){eT(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),a1(),await this._originValidation(e);const s=oT(e,r,i);await sT(e,s);const a=await Y1(e,s,n),l=await X1(a);return Z1(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Q1(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Mn(),s=setTimeout(async()=>{await zf(e),n.onEvent(Bf())},dT),a=async c=>{clearTimeout(s);const d=await zf(e);let p=null;d&&(c!=null&&c.url)&&(p=aT(d,c.url)),n.onEvent(p||Bf())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Mn().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const hT=fT;function Bf(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:he("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t,e){X(t)._logFramework(e)}var mT="@firebase/auth-compat",gT="0.4.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=1e3;function pi(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function yT(){return pi()==="http:"||pi()==="https:"}function Kg(t=ne()){return!!((pi()==="file:"||pi()==="ionic:"||pi()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function wT(){return pc()||jm()}function _T(){return Bm()&&(document==null?void 0:document.documentMode)===11}function ET(t=ne()){return/Edge\/\d+/.test(t)}function IT(t=ne()){return _T()||ET(t)}function qg(){try{const t=self.localStorage,e=Zi();if(t)return t.setItem(e,"1"),t.removeItem(e),IT()?ys():!0}catch{return Uc()&&ys()}return!1}function Uc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ya(){return(yT()||zm()||Kg())&&!wT()&&qg()&&!Uc()}function Gg(){return Kg()&&typeof document<"u"}async function ST(){return Gg()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},vT);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function kT(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={LOCAL:"local",NONE:"none",SESSION:"session"},Gr=S,Jg="persistence";function TT(t,e){if(Gr(Object.values(xe).includes(e),t,"invalid-persistence-type"),pc()){Gr(e!==xe.SESSION,t,"unsupported-persistence-type");return}if(jm()){Gr(e===xe.NONE,t,"unsupported-persistence-type");return}if(Uc()){Gr(e===xe.NONE||e===xe.LOCAL&&ys(),t,"unsupported-persistence-type");return}Gr(e===xe.NONE||qg(),t,"unsupported-persistence-type")}async function su(t){await t._initializationPromise;const e=Yg(),n=Tn(Jg,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function CT(t,e){const n=Yg();if(!n)return[];const r=Tn(Jg,t,e);switch(n.getItem(r)){case xe.NONE:return[Ir];case xe.LOCAL:return[Bi,Dn];case xe.SESSION:return[Dn];default:return[]}}function Yg(){var t;try{return((t=kT())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=S;class Vt{constructor(){this.browserResolver=De(V1),this.cordovaResolver=De(hT),this.underlyingResolver=null,this._redirectPersistence=Dn,this._completeRedirectFn=ra,this._overrideRedirectResult=bc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Gg()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return RT(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ST();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){return t.unwrap()}function PT(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){return Xg(t)}function AT(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new OT(t,hk(t,e))}else if(r){const i=Xg(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Xg(t){const{_tokenResponse:e}=t instanceof Ae?t.customData:t;if(!e)return null;if(!(t instanceof Ae)&&"temporaryProof"in e&&"phoneNumber"in e)return bn.credentialFromResult(t);const n=e.providerId;if(!n||n===qr.PASSWORD)return null;let r;switch(n){case qr.GOOGLE:r=st;break;case qr.FACEBOOK:r=ot;break;case qr.GITHUB:r=at;break;case qr.TWITTER:r=lt;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?Sr._create(n,a):ht._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new dr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Ae?r.credentialFromError(t):r.credentialFromResult(t)}function ke(t,e){return e.catch(n=>{throw n instanceof Ae&&AT(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:NT(n),additionalUserInfo:fk(n),user:_t.getOrCreate(i)}})}async function au(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>ke(t,n.confirm(r))}}class OT{constructor(e,n){this.resolver=n,this.auth=PT(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ke(Qg(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this._delegate=e,this.multiFactor=vk(e)}static getOrCreate(e){return _t.USER_MAP.has(e)||_t.USER_MAP.set(e,new _t(e)),_t.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ke(this.auth,Cg(this._delegate,e))}async linkWithPhoneNumber(e,n){return au(this.auth,Gk(this._delegate,e,n))}async linkWithPopup(e){return ke(this.auth,r1(this._delegate,e,Vt))}async linkWithRedirect(e){return await su(X(this.auth)),f1(this._delegate,e,Vt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ke(this.auth,Rg(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return au(this.auth,Jk(this._delegate,e,n))}reauthenticateWithPopup(e){return ke(this.auth,n1(this._delegate,e,Vt))}async reauthenticateWithRedirect(e){return await su(X(this.auth)),c1(this._delegate,e,Vt)}sendEmailVerification(e){return tk(this._delegate,e)}async unlink(e){return await BS(this._delegate,e),this}updateEmail(e){return ok(this._delegate,e)}updatePassword(e){return sk(this._delegate,e)}updatePhoneNumber(e){return Yk(this._delegate,e)}updateProfile(e){return ik(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return nk(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}_t.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=S;class lu{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Jr(r,"invalid-api-key",{appName:e.name}),Jr(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Vt:void 0;this._delegate=n.initialize({options:{persistence:xT(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(HI),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?_t.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){IS(this._delegate,e,n)}applyActionCode(e){return KS(this._delegate,e)}checkActionCode(e){return Pg(this._delegate,e)}confirmPasswordReset(e,n){return HS(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return ke(this._delegate,GS(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return ek(this._delegate,e)}isSignInWithEmailLink(e){return QS(this._delegate,e)}async getRedirectResult(){Jr(Ya(),this._delegate,"operation-not-supported-in-this-environment");const e=await p1(this._delegate,Vt);return e?ke(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){pT(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=$f(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=$f(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return YS(this._delegate,e,n)}sendPasswordResetEmail(e,n){return WS(this._delegate,e,n||void 0)}async setPersistence(e){TT(this._delegate,e);let n;switch(e){case xe.SESSION:n=Dn;break;case xe.LOCAL:n=await De(Bi)._isAvailable()?Bi:Ac;break;case xe.NONE:n=Ir;break;default:return me("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ke(this._delegate,zS(this._delegate))}signInWithCredential(e){return ke(this._delegate,Zs(this._delegate,e))}signInWithCustomToken(e){return ke(this._delegate,VS(this._delegate,e))}signInWithEmailAndPassword(e,n){return ke(this._delegate,JS(this._delegate,e,n))}signInWithEmailLink(e,n){return ke(this._delegate,XS(this._delegate,e,n))}signInWithPhoneNumber(e,n){return au(this._delegate,qk(this._delegate,e,n))}async signInWithPopup(e){return Jr(Ya(),this._delegate,"operation-not-supported-in-this-environment"),ke(this._delegate,t1(this._delegate,e,Vt))}async signInWithRedirect(e){return Jr(Ya(),this._delegate,"operation-not-supported-in-this-environment"),await su(this._delegate),l1(this._delegate,e,Vt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return qS(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}lu.Persistence=xe;function $f(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&_t.getOrCreate(s)),error:e,complete:n}}function xT(t,e){const n=CT(t,e);if(typeof self<"u"&&!n.includes(Bi)&&n.push(Bi),typeof window<"u")for(const r of[Ac,Dn])n.includes(r)||n.push(r);return n.includes(Ir)||n.push(Ir),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.providerId="phone",this._delegate=new bn(Qg(Or.auth()))}static credential(e,n){return bn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Fc.PHONE_SIGN_IN_METHOD=bn.PHONE_SIGN_IN_METHOD;Fc.PROVIDER_ID=bn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=S;class DT{constructor(e,n,r=Or.app()){var i;LT((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Hk(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT="auth-compat";function MT(t){t.INTERNAL.registerComponent(new rn(bT,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new lu(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Vn.EMAIL_SIGNIN,PASSWORD_RESET:Vn.PASSWORD_RESET,RECOVER_EMAIL:Vn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Vn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Vn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Vn.VERIFY_EMAIL}},EmailAuthProvider:fn,FacebookAuthProvider:ot,GithubAuthProvider:at,GoogleAuthProvider:st,OAuthProvider:dr,SAMLAuthProvider:Es,PhoneAuthProvider:Fc,PhoneMultiFactorGenerator:Hg,RecaptchaVerifier:DT,TwitterAuthProvider:lt,Auth:lu,AuthCredential:Dr,Error:Ae}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(mT,gT)}MT(Or);const UT={apiKey:"AIzaSyCs-7ga9VO2ItVHkJHr-JoGf_M7NHuaAks",authDomain:"jokes-app-cf943.firebaseapp.com",projectId:"jokes-app-cf943",storageBucket:"jokes-app-cf943.appspot.com",messagingSenderId:"445142825477",appId:"1:445142825477:web:a1ed9ac880f1d06d317a6c"};Or.initializeApp(UT);const Vo=Or.auth();const FT=()=>{const t=k.useContext(fc),[e,n]=k.useState(""),[r,i]=k.useState(""),o=c=>{n(c.target.value)},s=c=>{i(c.target.value)},a=async()=>{try{await Vo.createUserWithEmailAndPassword(e,r)}catch(c){console.error(c)}},l=async()=>{try{await Vo.signInWithEmailAndPassword(e,r)}catch(c){console.error(c)}},u=async()=>{await Vo.signOut()};return E.jsx(E.Fragment,{children:t?E.jsxs("div",{className:"GetCredentials",children:[E.jsxs("div",{className:"welcome-msg",children:[E.jsx("p",{children:"Welcome"}),E.jsxs("span",{className:"user-mail",children:[" ",t.email," "]})]}),E.jsx("button",{className:"LogOut-btn",onClick:u,children:"Log Out"})]}):E.jsxs("div",{className:"GetCredentials",children:[E.jsx("div",{className:"no-user-text",children:"Sign up and laugh with us!"}),E.jsx("input",{type:"text",placeholder:"Email",className:"SignIn-email",value:e,onChange:o,name:"userEmail"}),E.jsx("input",{type:"password",placeholder:"Password",className:"SignIn-password",value:r,onChange:s,name:"userPassword"}),E.jsxs("div",{className:"buttons",children:[E.jsx("button",{className:"SingIn-btn",onClick:l,children:"Sign In"}),E.jsx("button",{className:"SingUp-btn",onClick:a,children:"Sign Up"})]})]})})},jT=()=>E.jsx("div",{className:"Auth-page",children:E.jsx(FT,{})});function Zg(){return E.jsx(Tw,{basename:"/mobilki-projekt/",children:E.jsx(ww,{children:E.jsxs(Wn,{path:"/",element:E.jsx(Ow,{}),children:[E.jsx(Wn,{index:!0,element:E.jsx(Lw,{})}),E.jsx(Wn,{path:"chuck",element:E.jsx(oE,{})}),E.jsx(Wn,{path:"account",element:E.jsx(jT,{})}),E.jsx(Wn,{path:"*",element:E.jsx(Dw,{})})]})})})}R0.render(E.jsx(Zg,{}),document.getElementById("root"));const zT=t=>{const{children:e}=t,[n,r]=k.useState(null);return k.useEffect(()=>Vo.onAuthStateChanged(o=>{r(o)}),[]),E.jsx(fc.Provider,{value:n,children:e})};Qa.createRoot(document.getElementById("root")).render(E.jsx(hu.StrictMode,{children:E.jsx(zT,{children:E.jsx(Zg,{})})}));
