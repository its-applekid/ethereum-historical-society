(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Qf={exports:{}},Do={};var S0;function gb(){if(S0)return Do;S0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var E0;function vb(){return E0||(E0=1,Qf.exports=gb()),Qf.exports}var N=vb(),Jf={exports:{}},st={};var M0;function _b(){if(M0)return st;M0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function b(P,q,ve){this.props=P,this.context=q,this.refs=y,this.updater=ve||M}b.prototype.isReactComponent={},b.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},b.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function R(){}R.prototype=b.prototype;function F(P,q,ve){this.props=P,this.context=q,this.refs=y,this.updater=ve||M}var U=F.prototype=new R;U.constructor=F,C(U,b.prototype),U.isPureReactComponent=!0;var V=Array.isArray;function k(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(P,q,ve){var Ae=ve.ref;return{$$typeof:o,type:P,key:q,ref:Ae!==void 0?Ae:null,props:ve}}function ue(P,q){return D(P.type,q,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function K(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ve){return q[ve]})}var J=/\/+/g;function se(P,q){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):q.toString(36)}function Q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(k,k):(P.status="pending",P.then(function(q){P.status==="pending"&&(P.status="fulfilled",P.value=q)},function(q){P.status==="pending"&&(P.status="rejected",P.reason=q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,q,ve,Ae,Oe){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var xe=!1;if(P===null)xe=!0;else switch(ie){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(P.$$typeof){case o:case t:xe=!0;break;case x:return xe=P._init,L(xe(P._payload),q,ve,Ae,Oe)}}if(xe)return Oe=Oe(P),xe=Ae===""?"."+se(P,0):Ae,V(Oe)?(ve="",xe!=null&&(ve=xe.replace(J,"$&/")+"/"),L(Oe,q,ve,"",function(Ke){return Ke})):Oe!=null&&(H(Oe)&&(Oe=ue(Oe,ve+(Oe.key==null||P&&P.key===Oe.key?"":(""+Oe.key).replace(J,"$&/")+"/")+xe)),q.push(Oe)),1;xe=0;var Te=Ae===""?".":Ae+":";if(V(P))for(var Ge=0;Ge<P.length;Ge++)Ae=P[Ge],ie=Te+se(Ae,Ge),xe+=L(Ae,q,ve,ie,Oe);else if(Ge=S(P),typeof Ge=="function")for(P=Ge.call(P),Ge=0;!(Ae=P.next()).done;)Ae=Ae.value,ie=Te+se(Ae,Ge++),xe+=L(Ae,q,ve,ie,Oe);else if(ie==="object"){if(typeof P.then=="function")return L(Q(P),q,ve,Ae,Oe);throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xe}function B(P,q,ve){if(P==null)return P;var Ae=[],Oe=0;return L(P,Ae,"","",function(ie){return q.call(ve,ie,Oe++)}),Ae}function oe(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(ve){(P._status===0||P._status===-1)&&(P._status=1,P._result=ve)},function(ve){(P._status===0||P._status===-1)&&(P._status=2,P._result=ve)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var fe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ye={map:B,forEach:function(P,q,ve){B(P,function(){q.apply(this,arguments)},ve)},count:function(P){var q=0;return B(P,function(){q++}),q},toArray:function(P){return B(P,function(q){return q})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return st.Activity=_,st.Children=ye,st.Component=b,st.Fragment=i,st.Profiler=l,st.PureComponent=F,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,st.__COMPILER_RUNTIME={__proto__:null,c:function(P){return I.H.useMemoCache(P)}},st.cache=function(P){return function(){return P.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(P,q,ve){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ae=C({},P.props),Oe=P.key;if(q!=null)for(ie in q.key!==void 0&&(Oe=""+q.key),q)!T.call(q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&q.ref===void 0||(Ae[ie]=q[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=ve;else if(1<ie){for(var xe=Array(ie),Te=0;Te<ie;Te++)xe[Te]=arguments[Te+2];Ae.children=xe}return D(P.type,Oe,Ae)},st.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},st.createElement=function(P,q,ve){var Ae,Oe={},ie=null;if(q!=null)for(Ae in q.key!==void 0&&(ie=""+q.key),q)T.call(q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Oe[Ae]=q[Ae]);var xe=arguments.length-2;if(xe===1)Oe.children=ve;else if(1<xe){for(var Te=Array(xe),Ge=0;Ge<xe;Ge++)Te[Ge]=arguments[Ge+2];Oe.children=Te}if(P&&P.defaultProps)for(Ae in xe=P.defaultProps,xe)Oe[Ae]===void 0&&(Oe[Ae]=xe[Ae]);return D(P,ie,Oe)},st.createRef=function(){return{current:null}},st.forwardRef=function(P){return{$$typeof:p,render:P}},st.isValidElement=H,st.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:oe}},st.memo=function(P,q){return{$$typeof:h,type:P,compare:q===void 0?null:q}},st.startTransition=function(P){var q=I.T,ve={};I.T=ve;try{var Ae=P(),Oe=I.S;Oe!==null&&Oe(ve,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(k,fe)}catch(ie){fe(ie)}finally{q!==null&&ve.types!==null&&(q.types=ve.types),I.T=q}},st.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},st.use=function(P){return I.H.use(P)},st.useActionState=function(P,q,ve){return I.H.useActionState(P,q,ve)},st.useCallback=function(P,q){return I.H.useCallback(P,q)},st.useContext=function(P){return I.H.useContext(P)},st.useDebugValue=function(){},st.useDeferredValue=function(P,q){return I.H.useDeferredValue(P,q)},st.useEffect=function(P,q){return I.H.useEffect(P,q)},st.useEffectEvent=function(P){return I.H.useEffectEvent(P)},st.useId=function(){return I.H.useId()},st.useImperativeHandle=function(P,q,ve){return I.H.useImperativeHandle(P,q,ve)},st.useInsertionEffect=function(P,q){return I.H.useInsertionEffect(P,q)},st.useLayoutEffect=function(P,q){return I.H.useLayoutEffect(P,q)},st.useMemo=function(P,q){return I.H.useMemo(P,q)},st.useOptimistic=function(P,q){return I.H.useOptimistic(P,q)},st.useReducer=function(P,q,ve){return I.H.useReducer(P,q,ve)},st.useRef=function(P){return I.H.useRef(P)},st.useState=function(P){return I.H.useState(P)},st.useSyncExternalStore=function(P,q,ve){return I.H.useSyncExternalStore(P,q,ve)},st.useTransition=function(){return I.H.useTransition()},st.version="19.2.4",st}var T0;function Rh(){return T0||(T0=1,Jf.exports=_b()),Jf.exports}var tt=Rh(),$f={exports:{}},No={},ed={exports:{}},td={};var A0;function xb(){return A0||(A0=1,(function(o){function t(L,B){var oe=L.length;L.push(B);e:for(;0<oe;){var fe=oe-1>>>1,ye=L[fe];if(0<l(ye,B))L[fe]=B,L[oe]=ye,oe=fe;else break e}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],oe=L.pop();if(oe!==B){L[0]=oe;e:for(var fe=0,ye=L.length,P=ye>>>1;fe<P;){var q=2*(fe+1)-1,ve=L[q],Ae=q+1,Oe=L[Ae];if(0>l(ve,oe))Ae<ye&&0>l(Oe,ve)?(L[fe]=Oe,L[Ae]=oe,fe=Ae):(L[fe]=ve,L[q]=oe,fe=q);else if(Ae<ye&&0>l(Oe,oe))L[fe]=Oe,L[Ae]=oe,fe=Ae;else break e}}return B}function l(L,B){var oe=L.sortIndex-B.sortIndex;return oe!==0?oe:L.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,_=null,g=3,S=!1,M=!1,C=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var B=i(h);B!==null;){if(B.callback===null)r(h);else if(B.startTime<=L)r(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function V(L){if(C=!1,U(L),!M)if(i(m)!==null)M=!0,k||(k=!0,K());else{var B=i(h);B!==null&&Q(V,B.startTime-L)}}var k=!1,I=-1,T=5,D=-1;function ue(){return y?!0:!(o.unstable_now()-D<T)}function H(){if(y=!1,k){var L=o.unstable_now();D=L;var B=!0;try{e:{M=!1,C&&(C=!1,R(I),I=-1),S=!0;var oe=g;try{t:{for(U(L),_=i(m);_!==null&&!(_.expirationTime>L&&ue());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,g=_.priorityLevel;var ye=fe(_.expirationTime<=L);if(L=o.unstable_now(),typeof ye=="function"){_.callback=ye,U(L),B=!0;break t}_===i(m)&&r(m),U(L)}else r(m);_=i(m)}if(_!==null)B=!0;else{var P=i(h);P!==null&&Q(V,P.startTime-L),B=!1}}break e}finally{_=null,g=oe,S=!1}B=void 0}}finally{B?K():k=!1}}}var K;if(typeof F=="function")K=function(){F(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,se=J.port2;J.port1.onmessage=H,K=function(){se.postMessage(null)}}else K=function(){b(H,0)};function Q(L,B){I=b(function(){L(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(L){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var oe=g;g=B;try{return L()}finally{g=oe}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var oe=g;g=L;try{return B()}finally{g=oe}},o.unstable_scheduleCallback=function(L,B,oe){var fe=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?fe+oe:fe):oe=fe,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=oe+ye,L={id:x++,callback:B,priorityLevel:L,startTime:oe,expirationTime:ye,sortIndex:-1},oe>fe?(L.sortIndex=oe,t(h,L),i(m)===null&&L===i(h)&&(C?(R(I),I=-1):C=!0,Q(V,oe-fe))):(L.sortIndex=ye,t(m,L),M||S||(M=!0,k||(k=!0,K()))),L},o.unstable_shouldYield=ue,o.unstable_wrapCallback=function(L){var B=g;return function(){var oe=g;g=B;try{return L.apply(this,arguments)}finally{g=oe}}}})(td)),td}var w0;function bb(){return w0||(w0=1,ed.exports=xb()),ed.exports}var nd={exports:{}},Tn={};var C0;function yb(){if(C0)return Tn;C0=1;var o=Rh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},Tn.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},Tn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:S}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Tn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,h){return m(h)},Tn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Tn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var R0;function Sb(){if(R0)return nd.exports;R0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nd.exports=yb(),nd.exports}var D0;function Eb(){if(D0)return No;D0=1;var o=bb(),t=Rh(),i=Sb();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,s=f;break}if(A===s){v=!0,s=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,s=u;break}if(A===s){v=!0,s=f,a=u;break}A=A.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),F=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case b:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case F:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:se(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return se(e(n))}catch{}}return null}var Q=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},fe=[],ye=-1;function P(e){return{current:e}}function q(e){0>ye||(e.current=fe[ye],fe[ye]=null,ye--)}function ve(e,n){ye++,fe[ye]=e.current,e.current=n}var Ae=P(null),Oe=P(null),ie=P(null),xe=P(null);function Te(e,n){switch(ve(ie,n),ve(Oe,e),ve(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xg(n),e=Wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Ae),ve(Ae,e)}function Ge(){q(Ae),q(Oe),q(ie)}function Ke(e){e.memoizedState!==null&&ve(xe,e);var n=Ae.current,a=Wg(n,e.type);n!==a&&(ve(Oe,e),ve(Ae,a))}function $e(e){Oe.current===e&&(q(Ae),q(Oe)),xe.current===e&&(q(xe),Ao._currentValue=oe)}var Qt,_t;function mt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+_t}var Dt=!1;function lt(e,n){if(!e||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var ae=ce}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(ce){ae=ce}e.call(_e.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var z=v.split(`
`),te=A.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===te.length)for(s=z.length-1,u=te.length-1;1<=s&&0<=u&&z[s]!==te[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==te[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==te[u]){var pe=`
`+z[s].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=s&&0<=u);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function Kt(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return mt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Kt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Wt=Object.prototype.hasOwnProperty,Et=o.unstable_scheduleCallback,Lt=o.unstable_cancelCallback,We=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,he=o.unstable_NormalPriority,je=o.unstable_LowPriority,Re=o.unstable_IdlePriority,Ze=o.log,et=o.unstable_setDisableYieldValue,Me=null,Se=null;function Pe(e){if(typeof Ze=="function"&&et(e),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(Me,e)}catch{}}var Le=Math.clz32?Math.clz32:W,Fe=Math.log,ut=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Fe(e)/ut|0)|0}var Ce=256,we=262144,Be=4194304;function Ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function de(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=Ee(s):(v&=A,v!==0?u=Ee(v):a||(a=A&~e,a!==0&&(u=Ee(a))))):(A=s&~f,A!==0?u=Ee(A):v!==0?u=Ee(v):a||(a=s&~e,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ke(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function Mt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _i(e,n,a,s,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,te=e.hiddenUpdates;for(a=v&~a;0<a;){var pe=31-Le(a),_e=1<<pe;A[pe]=0,z[pe]=-1;var ae=te[pe];if(ae!==null)for(te[pe]=null,pe=0;pe<ae.length;pe++){var ce=ae[pe];ce!==null&&(ce.lane&=-536870913)}a&=~_e}s!==0&&zs(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function zs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Le(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Or(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Le(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Yo(e,n){var a=n&-n;return a=(a&42)!==0?1:Pr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ni(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:m0(e.type))}function Br(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var xi=Math.random().toString(36).slice(2),an="__reactFiber$"+xi,hn="__reactProps$"+xi,Wi="__reactContainer$"+xi,Ea="__reactEvents$"+xi,Zo="__reactListeners$"+xi,Ko="__reactHandles$"+xi,Qo="__reactResources$"+xi,ar="__reactMarker$"+xi;function Hs(e){delete e[an],delete e[hn],delete e[Ea],delete e[Zo],delete e[Ko]}function Ma(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Wi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$g(e);e!==null;){if(a=e[an])return a;e=$g(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[an]||e[Wi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function w(e){var n=e[Qo];return n||(n=e[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[ar]=!0}var le=new Set,ne={};function $(e,n){De(e,n),De(e+"Capture",n)}function De(e,n){for(ne[e]=n,e=0;e<n.length;e++)le.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ne={},Xe={};function Ye(e){return Wt.call(Xe,e)?!0:Wt.call(Ne,e)?!1:Ie.test(e)?Xe[e]=!0:(Ne[e]=!0,!1)}function nt(e,n,a){if(Ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function rt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ze(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function At(e){if(!e._valueTracker){var n=qt(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=qt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Ve(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function at(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(e,n,a,s,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ft(n)):e.value!==""+ft(n)&&(e.value=""+ft(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?bi(e,v,ft(n)):a!=null?bi(e,v,ft(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ft(A):e.removeAttribute("name")}function jn(e,n,a,s,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(e);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),At(e)}function bi(e,n,a){n==="number"&&Ve(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ot(e,n,a){if(n!=null&&(n=""+ft(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ft(a):""}function rn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Q(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ft(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),At(e)}function Un(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var sn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yi(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||sn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qi(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&yi(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&yi(e,f,n[f])}function Ir(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var d_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return h_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var qc=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kr=null,zr=null;function jh(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Nn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[hn]||null;if(!u)throw Error(r(90));Nn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&pn(s)}break e;case"textarea":Ot(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Xn(e,!!a.multiple,n,!1)}}}var Zc=!1;function Xh(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var s=e(n);return s}finally{if(Zc=!1,(kr!==null||zr!==null)&&(kl(),kr&&(n=kr,e=zr,zr=kr=null,jh(n),e)))for(n=0;n<e.length;n++)jh(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[hn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Zi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Kc=!1}var Aa=null,Qc=null,$o=null;function Wh(){if($o)return $o;var e,n=Qc,a=n.length,s,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return $o=u.slice(e,1<s?1-s:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function qh(){return!1}function Fn(e){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:qh,this.isPropagationStopped=qh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Fn(sr),js=_({},sr,{view:0,detail:0}),p_=Fn(js),Jc,$c,Xs,il=_({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(Jc=e.screenX-Xs.screenX,$c=e.screenY-Xs.screenY):$c=Jc=0,Xs=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),Yh=Fn(il),m_=_({},il,{dataTransfer:0}),g_=Fn(m_),v_=_({},js,{relatedTarget:0}),eu=Fn(v_),__=_({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),x_=Fn(__),b_=_({},sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y_=Fn(b_),S_=_({},sr,{data:0}),Zh=Fn(S_),E_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=T_[e])?!!n[e]:!1}function tu(){return A_}var w_=_({},js,{key:function(e){if(e.key){var n=E_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?M_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C_=Fn(w_),R_=_({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Fn(R_),D_=_({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),N_=Fn(D_),U_=_({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L_=Fn(U_),O_=_({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P_=Fn(O_),F_=_({},sr,{newState:0,oldState:0}),B_=Fn(F_),I_=[9,13,27,32],nu=Zi&&"CompositionEvent"in window,Ws=null;Zi&&"documentMode"in document&&(Ws=document.documentMode);var k_=Zi&&"TextEvent"in window&&!Ws,Qh=Zi&&(!nu||Ws&&8<Ws&&11>=Ws),Jh=" ",$h=!1;function ep(e,n){switch(e){case"keyup":return I_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function z_(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:($h=!0,Jh);case"textInput":return e=n.data,e===Jh&&$h?null:e;default:return null}}function H_(e,n){if(Hr)return e==="compositionend"||!nu&&ep(e,n)?(e=Wh(),$o=Qc=Aa=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!V_[e.type]:n==="textarea"}function ip(e,n,a,s){kr?zr?zr.push(s):zr=[s]:kr=s,n=Wl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var qs=null,Ys=null;function G_(e){kg(e,0)}function al(e){var n=rr(e);if(pn(n))return e}function ap(e,n){if(e==="change")return n}var rp=!1;if(Zi){var iu;if(Zi){var au="oninput"in document;if(!au){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),au=typeof sp.oninput=="function"}iu=au}else iu=!1;rp=iu&&(!document.documentMode||9<document.documentMode)}function op(){qs&&(qs.detachEvent("onpropertychange",lp),Ys=qs=null)}function lp(e){if(e.propertyName==="value"&&al(Ys)){var n=[];ip(n,Ys,e,Yc(e)),Xh(G_,n)}}function j_(e,n,a){e==="focusin"?(op(),qs=n,Ys=a,qs.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function X_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Ys)}function W_(e,n){if(e==="click")return al(n)}function q_(e,n){if(e==="input"||e==="change")return al(n)}function Y_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Y_;function Zs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Wt.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=cp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ve(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ve(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Z_=Zi&&"documentMode"in document&&11>=document.documentMode,Vr=null,su=null,Ks=null,ou=!1;function hp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Vr==null||Vr!==Ve(s)||(s=Vr,"selectionStart"in s&&ru(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ks&&Zs(Ks,s)||(Ks=s,s=Wl(su,"onSelect"),0<s.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Vr)))}function or(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},lu={},pp={};Zi&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function lr(e){if(lu[e])return lu[e];if(!Gr[e])return e;var n=Gr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return lu[e]=n[a];return e}var mp=lr("animationend"),gp=lr("animationiteration"),vp=lr("animationstart"),K_=lr("transitionrun"),Q_=lr("transitionstart"),J_=lr("transitioncancel"),_p=lr("transitionend"),xp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function Si(e,n){xp.set(e,n),$(n,[e])}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],jr=0,uu=0;function sl(){for(var e=jr,n=uu=jr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&bp(a,u,f)}}function ol(e,n,a,s){ai[jr++]=e,ai[jr++]=n,ai[jr++]=a,ai[jr++]=s,uu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function fu(e,n,a,s){return ol(e,n,a,s),ll(e)}function cr(e,n){return ol(e,null,null,n),ll(e)}function bp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Le(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function ll(e){if(50<xo)throw xo=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xr={};function $_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new $_(e,n,a,s)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,s,u,f){var v=0;if(s=e,typeof e=="function")du(e)&&(v=1);else if(typeof e=="string")v=ab(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=qn(31,a,n,u),e.elementType=D,e.lanes=f,e;case C:return ur(a.children,u,f,n);case y:v=8,u|=24;break;case b:return e=qn(12,a,n,u|2),e.elementType=b,e.lanes=f,e;case V:return e=qn(13,a,n,u),e.elementType=V,e.lanes=f,e;case k:return e=qn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:v=10;break e;case R:v=9;break e;case U:v=11;break e;case I:v=14;break e;case T:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(v,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function ur(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function hu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Sp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ep=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Ep.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Wr=[],qr=0,ul=null,Qs=0,si=[],oi=0,wa=null,Ui=1,Li="";function Qi(e,n){Wr[qr++]=Qs,Wr[qr++]=ul,ul=e,Qs=n}function Mp(e,n,a){si[oi++]=Ui,si[oi++]=Li,si[oi++]=wa,wa=e;var s=Ui;e=Li;var u=32-Le(s)-1;s&=~(1<<u),a+=1;var f=32-Le(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Ui=1<<32-Le(n)+u|a<<u|s,Li=f+e}else Ui=1<<f|a<<u|s,Li=e}function mu(e){e.return!==null&&(Qi(e,1),Mp(e,1,0))}function gu(e){for(;e===ul;)ul=Wr[--qr],Wr[qr]=null,Qs=Wr[--qr],Wr[qr]=null;for(;e===wa;)wa=si[--oi],si[oi]=null,Li=si[--oi],si[oi]=null,Ui=si[--oi],si[oi]=null}function Tp(e,n){si[oi++]=Ui,si[oi++]=Li,si[oi++]=wa,Ui=n.id,Li=n.overflow,wa=e}var bn=null,jt=null,yt=!1,Ca=null,li=!1,vu=Error(r(519));function Ra(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ri(n,e)),vu}function Ap(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[an]=e,n[hn]=s,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)vt(yo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),jn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),rn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Gg(n.textContent,a)?(s.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),s.onScroll!=null&&vt("scroll",n),s.onScrollEnd!=null&&vt("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ra(e,!0)}function wp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:bn=bn.return}}function Yr(e){if(e!==bn)return!1;if(!yt)return wp(e),yt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&jt&&Ra(e),wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Jg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Jg(e)}else n===27?(n=jt,Ga(e.type)?(e=Hf,Hf=null,jt=e):jt=n):jt=bn?ui(e.stateNode.nextSibling):null;return!0}function fr(){jt=bn=null,yt=!1}function _u(){var e=Ca;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),Ca=null),e}function Js(e){Ca===null?Ca=[e]:Ca.push(e)}var xu=P(null),dr=null,Ji=null;function Da(e,n,a){ve(xu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=xu.current,q(xu)}function bu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),bu(f.return,a,e),s||(v=null);break e}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),bu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Zr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var A=u.type;Wn(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===xe.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}u=u.return}e!==null&&yu(n,e,a,s),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){dr=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Cp(dr,e)}function dl(e,n){return dr===null&&hr(e),Cp(e,n)}function Cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(r(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},tx=o.unstable_scheduleCallback,nx=o.unstable_NormalPriority,on={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new ex,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&tx(nx,function(){e.controller.abort()})}var eo=null,Eu=0,Kr=0,Qr=null;function ix(e,n){if(eo===null){var a=eo=[];Eu=0,Kr=wf(),Qr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Eu++,n.then(Rp,Rp),n}function Rp(){if(--Eu===0&&eo!==null){Qr!==null&&(Qr.status="fulfilled");var e=eo;eo=null,Kr=0,Qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ax(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Dp=L.S;L.S=function(e,n){hg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ix(e,n),Dp!==null&&Dp(e,n)};var pr=P(null);function Mu(){var e=pr.current;return e!==null?e:Gt.pooledCache}function hl(e,n){n===null?ve(pr,pr.current):ve(pr,n.pool)}function Np(){var e=Mu();return e===null?null:{parent:on._currentValue,pool:e}}var Jr=Error(r(460)),Tu=Error(r(474)),pl=Error(r(542)),ml={then:function(){}};function Up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=Gt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e}throw gr=n,Jr}}function mr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,Jr):a}}var gr=null;function Op(){if(gr===null)throw Error(r(459));var e=gr;return gr=null,e}function Pp(e){if(e===Jr||e===pl)throw Error(r(483))}var $r=null,to=0;function gl(e){var n=to;return to+=1,$r===null&&($r=[]),Lp($r,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Fp(e){function n(Z,j){if(e){var ee=Z.deletions;ee===null?(Z.deletions=[j],Z.flags|=16):ee.push(j)}}function a(Z,j){if(!e)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function s(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function u(Z,j){return Z=Ki(Z,j),Z.index=0,Z.sibling=null,Z}function f(Z,j,ee){return Z.index=ee,e?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<j?(Z.flags|=67108866,j):ee):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,j,ee,ge){return j===null||j.tag!==6?(j=hu(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function z(Z,j,ee,ge){var Qe=ee.type;return Qe===C?pe(Z,j,ee.props.children,ge,ee.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&mr(Qe)===j.type)?(j=u(j,ee.props),no(j,ee),j.return=Z,j):(j=cl(ee.type,ee.key,ee.props,null,Z.mode,ge),no(j,ee),j.return=Z,j)}function te(Z,j,ee,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=pu(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee.children||[]),j.return=Z,j)}function pe(Z,j,ee,ge,Qe){return j===null||j.tag!==7?(j=ur(ee,Z.mode,ge,Qe),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function _e(Z,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=hu(""+j,Z.mode,ee),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return ee=cl(j.type,j.key,j.props,null,Z.mode,ee),no(ee,j),ee.return=Z,ee;case M:return j=pu(j,Z.mode,ee),j.return=Z,j;case T:return j=mr(j),_e(Z,j,ee)}if(Q(j)||K(j))return j=ur(j,Z.mode,ee,null),j.return=Z,j;if(typeof j.then=="function")return _e(Z,gl(j),ee);if(j.$$typeof===F)return _e(Z,dl(Z,j),ee);vl(Z,j)}return null}function ae(Z,j,ee,ge){var Qe=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Qe!==null?null:A(Z,j,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===Qe?z(Z,j,ee,ge):null;case M:return ee.key===Qe?te(Z,j,ee,ge):null;case T:return ee=mr(ee),ae(Z,j,ee,ge)}if(Q(ee)||K(ee))return Qe!==null?null:pe(Z,j,ee,ge,null);if(typeof ee.then=="function")return ae(Z,j,gl(ee),ge);if(ee.$$typeof===F)return ae(Z,j,dl(Z,ee),ge);vl(Z,ee)}return null}function ce(Z,j,ee,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(ee)||null,A(j,Z,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return Z=Z.get(ge.key===null?ee:ge.key)||null,z(j,Z,ge,Qe);case M:return Z=Z.get(ge.key===null?ee:ge.key)||null,te(j,Z,ge,Qe);case T:return ge=mr(ge),ce(Z,j,ee,ge,Qe)}if(Q(ge)||K(ge))return Z=Z.get(ee)||null,pe(j,Z,ge,Qe,null);if(typeof ge.then=="function")return ce(Z,j,ee,gl(ge),Qe);if(ge.$$typeof===F)return ce(Z,j,ee,dl(j,ge),Qe);vl(j,ge)}return null}function He(Z,j,ee,ge){for(var Qe=null,wt=null,qe=j,dt=j=0,bt=null;qe!==null&&dt<ee.length;dt++){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var Ct=ae(Z,qe,ee[dt],ge);if(Ct===null){qe===null&&(qe=bt);break}e&&qe&&Ct.alternate===null&&n(Z,qe),j=f(Ct,j,dt),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct,qe=bt}if(dt===ee.length)return a(Z,qe),yt&&Qi(Z,dt),Qe;if(qe===null){for(;dt<ee.length;dt++)qe=_e(Z,ee[dt],ge),qe!==null&&(j=f(qe,j,dt),wt===null?Qe=qe:wt.sibling=qe,wt=qe);return yt&&Qi(Z,dt),Qe}for(qe=s(qe);dt<ee.length;dt++)bt=ce(qe,Z,dt,ee[dt],ge),bt!==null&&(e&&bt.alternate!==null&&qe.delete(bt.key===null?dt:bt.key),j=f(bt,j,dt),wt===null?Qe=bt:wt.sibling=bt,wt=bt);return e&&qe.forEach(function(Ya){return n(Z,Ya)}),yt&&Qi(Z,dt),Qe}function Je(Z,j,ee,ge){if(ee==null)throw Error(r(151));for(var Qe=null,wt=null,qe=j,dt=j=0,bt=null,Ct=ee.next();qe!==null&&!Ct.done;dt++,Ct=ee.next()){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var Ya=ae(Z,qe,Ct.value,ge);if(Ya===null){qe===null&&(qe=bt);break}e&&qe&&Ya.alternate===null&&n(Z,qe),j=f(Ya,j,dt),wt===null?Qe=Ya:wt.sibling=Ya,wt=Ya,qe=bt}if(Ct.done)return a(Z,qe),yt&&Qi(Z,dt),Qe;if(qe===null){for(;!Ct.done;dt++,Ct=ee.next())Ct=_e(Z,Ct.value,ge),Ct!==null&&(j=f(Ct,j,dt),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct);return yt&&Qi(Z,dt),Qe}for(qe=s(qe);!Ct.done;dt++,Ct=ee.next())Ct=ce(qe,Z,dt,Ct.value,ge),Ct!==null&&(e&&Ct.alternate!==null&&qe.delete(Ct.key===null?dt:Ct.key),j=f(Ct,j,dt),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct);return e&&qe.forEach(function(mb){return n(Z,mb)}),yt&&Qi(Z,dt),Qe}function Vt(Z,j,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===C&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var Qe=ee.key;j!==null;){if(j.key===Qe){if(Qe=ee.type,Qe===C){if(j.tag===7){a(Z,j.sibling),ge=u(j,ee.props.children),ge.return=Z,Z=ge;break e}}else if(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&mr(Qe)===j.type){a(Z,j.sibling),ge=u(j,ee.props),no(ge,ee),ge.return=Z,Z=ge;break e}a(Z,j);break}else n(Z,j);j=j.sibling}ee.type===C?(ge=ur(ee.props.children,Z.mode,ge,ee.key),ge.return=Z,Z=ge):(ge=cl(ee.type,ee.key,ee.props,null,Z.mode,ge),no(ge,ee),ge.return=Z,Z=ge)}return v(Z);case M:e:{for(Qe=ee.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a(Z,j.sibling),ge=u(j,ee.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,j);break}else n(Z,j);j=j.sibling}ge=pu(ee,Z.mode,ge),ge.return=Z,Z=ge}return v(Z);case T:return ee=mr(ee),Vt(Z,j,ee,ge)}if(Q(ee))return He(Z,j,ee,ge);if(K(ee)){if(Qe=K(ee),typeof Qe!="function")throw Error(r(150));return ee=Qe.call(ee),Je(Z,j,ee,ge)}if(typeof ee.then=="function")return Vt(Z,j,gl(ee),ge);if(ee.$$typeof===F)return Vt(Z,j,dl(Z,ee),ge);vl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(a(Z,j.sibling),ge=u(j,ee),ge.return=Z,Z=ge):(a(Z,j),ge=hu(ee,Z.mode,ge),ge.return=Z,Z=ge),v(Z)):a(Z,j)}return function(Z,j,ee,ge){try{to=0;var Qe=Vt(Z,j,ee,ge);return $r=null,Qe}catch(qe){if(qe===Jr||qe===pl)throw qe;var wt=qn(29,qe,null,Z.mode);return wt.lanes=ge,wt.return=Z,wt}}}var vr=Fp(!0),Bp=Fp(!1),Na=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Nt&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ll(e),bp(e,null,a),n}return ol(e,s,n,a),ll(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Or(e,a)}}function Cu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ru=!1;function ao(){if(Ru){var e=Qr;if(e!==null)throw e}}function ro(e,n,a,s){Ru=!1;var u=e.updateQueue;Na=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,te=z.next;z.next=null,v===null?f=te:v.next=te,v=z;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==v&&(A===null?pe.firstBaseUpdate=te:A.next=te,pe.lastBaseUpdate=z))}if(f!==null){var _e=u.baseState;v=0,pe=te=z=null,A=f;do{var ae=A.lane&-536870913,ce=ae!==A.lane;if(ce?(xt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Kr&&(Ru=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var He=e,Je=A;ae=n;var Vt=a;switch(Je.tag){case 1:if(He=Je.payload,typeof He=="function"){_e=He.call(Vt,_e,ae);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Je.payload,ae=typeof He=="function"?He.call(Vt,_e,ae):He,ae==null)break e;_e=_({},_e,ae);break e;case 2:Na=!0}}ae=A.callback,ae!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(te=pe=ce,z=_e):pe=pe.next=ce,v|=ae;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ce=A,A=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(z=_e),u.baseState=z,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=_e}}function Ip(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ip(a[e],n)}var es=P(null),_l=P(0);function zp(e,n){e=la,ve(_l,e),ve(es,n),la=e|n.baseLanes}function Du(){ve(_l,la),ve(es,es.current)}function Nu(){la=_l.current,q(es),q(_l)}var Yn=P(null),ci=null;function Oa(e){var n=e.alternate;ve(en,en.current&1),ve(Yn,e),ci===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(ci=e)}function Uu(e){ve(en,en.current),ve(Yn,e),ci===null&&(ci=e)}function Hp(e){e.tag===22?(ve(en,en.current),ve(Yn,e),ci===null&&(ci=e)):Pa()}function Pa(){ve(en,en.current),ve(Yn,Yn.current)}function Zn(e){q(Yn),ci===e&&(ci=null),q(en)}var en=P(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ct=null,zt=null,ln=null,bl=!1,ts=!1,_r=!1,yl=0,so=0,ns=null,rx=0;function Jt(){throw Error(r(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,s,u,f){return ea=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Mm:Zu,_r=!1,f=a(s,u),_r=!1,ts&&(f=Gp(n,a,s,u)),Vp(e),f}function Vp(e){L.H=co;var n=zt!==null&&zt.next!==null;if(ea=0,ln=zt=ct=null,bl=!1,so=0,ns=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&fl(e)&&(cn=!0))}function Gp(e,n,a,s){ct=e;var u=0;do{if(ts&&(ns=null),so=0,ts=!1,25<=u)throw Error(r(301));if(u+=1,ln=zt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Tm,f=n(a,s)}while(ts);return f}function sx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(zt!==null?zt.memoizedState:null)!==e&&(ct.flags|=1024),n}function Pu(){var e=yl!==0;return yl=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}ea=0,ln=zt=ct=null,ts=!1,so=yl=0,ns=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ct.memoizedState=ln=e:ln=ln.next=e,ln}function tn(){if(zt===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=zt.next;var n=ln===null?ct.memoizedState:ln.next;if(n!==null)ln=n,zt=e;else{if(e===null)throw ct.alternate===null?Error(r(467)):Error(r(310));zt=e,e={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},ln===null?ct.memoizedState=ln=e:ln=ln.next=e}return ln}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,ns===null&&(ns=[]),e=Lp(ns,e,n),n=ct,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Mm:Zu),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===F)return yn(e)}throw Error(r(438,String(e)))}function Iu(e){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ct.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=ue;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=tn();return ku(n,zt,e)}function ku(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,z=null,te=n,pe=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(xt&_e)===_e:(ea&_e)===_e){var ae=te.revertLane;if(ae===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===Kr&&(pe=!0);else if((ea&ae)===ae){te=te.next,ae===Kr&&(pe=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(A=z=_e,v=f):z=z.next=_e,ct.lanes|=ae,Ia|=ae;_e=te.action,_r&&a(f,_e),f=te.hasEagerState?te.eagerState:a(f,_e)}else ae={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},z===null?(A=z=ae,v=f):z=z.next=ae,ct.lanes|=_e,Ia|=_e;te=te.next}while(te!==null&&te!==n);if(z===null?v=f:z.next=A,!Wn(f,e.memoizedState)&&(cn=!0,pe&&(a=Qr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function zu(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Wn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function jp(e,n,a){var s=ct,u=tn(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Wn((zt||u).memoizedState,a);if(v&&(u.memoizedState=a,cn=!0),u=u.queue,Gu(qp.bind(null,s,u,e),[e]),u.getSnapshot!==n||v||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,is(9,{destroy:void 0},Wp.bind(null,s,u,a,n),null),Gt===null)throw Error(r(349));f||(ea&127)!==0||Xp(s,n,a)}return a}function Xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Sl(),ct.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Wp(e,n,a,s){n.value=a,n.getSnapshot=s,Yp(n)&&Zp(e)}function qp(e,n,a){return a(function(){Yp(n)&&Zp(e)})}function Yp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Zp(e){var n=cr(e,2);n!==null&&Hn(n,e,2)}function Hu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),_r){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function Kp(e,n,a,s){return e.baseState=a,ku(e,zt,typeof s=="function"?s:ta)}function ox(e,n,a,s,u){if(wl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var A=a(u,s),z=L.S;z!==null&&z(v,A),Jp(e,n,A)}catch(te){Vu(e,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(u,s),Jp(e,n,f)}catch(te){Vu(e,n,te)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){$p(e,n,s)},function(s){return Vu(e,n,s)}):$p(e,n,a)}function $p(e,n,a){n.status="fulfilled",n.value=a,em(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function Vu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==s)}e.action=null}function em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tm(e,n){return n}function nm(e,n){if(yt){var a=Gt.formState;if(a!==null){e:{var s=ct;if(yt){if(jt){t:{for(var u=jt,f=li;u.nodeType!==8;){if(!f){u=null;break t}if(u=ui(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){jt=ui(u.nextSibling),s=u.data==="F!";break e}}Ra(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:n},a.queue=s,a=ym.bind(null,ct,s),s.dispatch=a,s=Hu(!1),f=Yu.bind(null,ct,!1,s.queue),s=Ln(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=ox.bind(null,ct,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function im(e){var n=tn();return am(n,zt,e)}function am(e,n,a){if(n=ku(e,n,tm)[0],e=Ml(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=oo(n)}catch(v){throw v===Jr?pl:v}else s=n;n=tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,is(9,{destroy:void 0},lx.bind(null,u,a),null)),[s,f,e]}function lx(e,n){e.action=n}function rm(e){var n=tn(),a=zt;if(a!==null)return am(n,a,e);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function is(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Sl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function sm(){return tn().memoizedState}function Tl(e,n,a,s){var u=Ln();ct.flags|=e,u.memoizedState=is(1|n,{destroy:void 0},a,s===void 0?null:s)}function Al(e,n,a,s){var u=tn();s=s===void 0?null:s;var f=u.memoizedState.inst;zt!==null&&s!==null&&Lu(s,zt.memoizedState.deps)?u.memoizedState=is(n,f,a,s):(ct.flags|=e,u.memoizedState=is(1|n,f,a,s))}function om(e,n){Tl(8390656,8,e,n)}function Gu(e,n){Al(2048,8,e,n)}function cx(e){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Sl(),ct.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function lm(e){var n=tn().memoizedState;return cx({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function cm(e,n){return Al(4,2,e,n)}function um(e,n){return Al(4,4,e,n)}function fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dm(e,n,a){a=a!=null?a.concat([e]):null,Al(4,4,fm.bind(null,n,e),a)}function ju(){}function hm(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function pm(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lu(n,s[1]))return s[0];if(s=e(),_r){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s}function Xu(e,n,a){return a===void 0||(ea&1073741824)!==0&&(xt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=mg(),ct.lanes|=e,Ia|=e,a)}function mm(e,n,a,s){return Wn(a,n)?a:es.current!==null?(e=Xu(e,a,s),Wn(e,n)||(cn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(xt&261930)===0?(cn=!0,e.memoizedState=a):(e=mg(),ct.lanes|=e,Ia|=e,n)}function gm(e,n,a,s,u){var f=B.p;B.p=f!==0&&8>f?f:8;var v=L.T,A={};L.T=A,Yu(e,!1,n,a);try{var z=u(),te=L.S;if(te!==null&&te(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var pe=ax(z,s);lo(e,n,pe,Jn(e))}else lo(e,n,s,Jn(e))}catch(_e){lo(e,n,{then:function(){},status:"rejected",reason:_e},Jn())}finally{B.p=f,v!==null&&A.types!==null&&(v.types=A.types),L.T=v}}function ux(){}function Wu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=vm(e).queue;gm(e,u,n,oe,a===null?ux:function(){return _m(e),a(s)})}function vm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _m(e){var n=vm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},Jn())}function qu(){return yn(Ao)}function xm(){return tn().memoizedState}function bm(){return tn().memoizedState}function fx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Ua(a);var s=La(n,e,a);s!==null&&(Hn(s,n,a),io(s,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function dx(e,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?Sm(n,a):(a=fu(e,n,a,s),a!==null&&(Hn(a,e,s),Em(a,n,s)))}function ym(e,n,a){var s=Jn();lo(e,n,a,s)}function lo(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))Sm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Wn(A,v))return ol(e,n,u,0),Gt===null&&sl(),!1}catch{}if(a=fu(e,n,u,s),a!==null)return Hn(a,e,s),Em(a,n,s),!0}return!1}function Yu(e,n,a,s){if(s={lane:2,revertLane:wf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(r(479))}else n=fu(e,a,s,2),n!==null&&Hn(n,e,2)}function wl(e){var n=e.alternate;return e===ct||n!==null&&n===ct}function Sm(e,n){ts=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Em(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Or(e,a)}}var co={readContext:yn,use:El,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};co.useEffectEvent=Jt;var Mm={readContext:yn,use:El,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(_r){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var u=a(n);if(_r){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=dx.bind(null,ct,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=ym.bind(null,ct,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=Ln();return Xu(a,e,n)},useTransition:function(){var e=Hu(!1);return e=gm.bind(null,ct,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ct,u=Ln();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Gt===null)throw Error(r(349));(xt&127)!==0||Xp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,om(qp.bind(null,s,f,e),[e]),s.flags|=2048,is(9,{destroy:void 0},Wp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=Gt.identifierPrefix;if(yt){var a=Li,s=Ui;a=(s&~(1<<32-Le(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:nm,useActionState:nm,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,ct,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=fx.bind(null,ct)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:yn,use:El,useCallback:hm,useContext:yn,useEffect:Gu,useImperativeHandle:dm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Ml,useRef:sm,useState:function(){return Ml(ta)},useDebugValue:ju,useDeferredValue:function(e,n){var a=tn();return mm(a,zt.memoizedState,e,n)},useTransition:function(){var e=Ml(ta)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:jp,useId:xm,useHostTransitionStatus:qu,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=tn();return Kp(a,zt,e,n)},useMemoCache:Iu,useCacheRefresh:bm};Zu.useEffectEvent=lm;var Tm={readContext:yn,use:El,useCallback:hm,useContext:yn,useEffect:Gu,useImperativeHandle:dm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:zu,useRef:sm,useState:function(){return zu(ta)},useDebugValue:ju,useDeferredValue:function(e,n){var a=tn();return zt===null?Xu(a,e,n):mm(a,zt.memoizedState,e,n)},useTransition:function(){var e=zu(ta)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:jp,useId:xm,useHostTransitionStatus:qu,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=tn();return zt!==null?Kp(a,zt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:bm};Tm.useEffectEvent=lm;function Ku(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=Ua(s);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,s),n!==null&&(Hn(n,e,s),io(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=Ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,s),n!==null&&(Hn(n,e,s),io(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=Ua(a);s.tag=2,n!=null&&(s.callback=n),n=La(e,s,a),n!==null&&(Hn(n,e,a),io(n,e,a))}};function Am(e,n,a,s,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,s)||!Zs(u,f):!0}function wm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function xr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Cm(e){rl(e)}function Rm(e){console.error(e)}function Dm(e){rl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Nm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Um(e){return e=Ua(e),e.tag=3,e}function Lm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Nm(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Nm(n,a,s),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function hx(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?zl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Mf(e,s,u)),!1;case 22:return a.flags|=65536,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Mf(e,s,u)),!1}throw Error(r(435,a.tag))}return Mf(e,s,u),zl(),!1}if(yt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==vu&&(e=Error(r(422),{cause:s}),Js(ri(e,a)))):(s!==vu&&(n=Error(r(423),{cause:s}),Js(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ri(s,a),u=Ju(e.stateNode,s,u),Cu(e,u),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),_o===null?_o=[f]:_o.push(f),$t!==4&&($t=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ju(a.stateNode,s,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Um(u),Lm(u,e,a,s),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var $u=Error(r(461)),cn=!1;function Sn(e,n,a,s){n.child=e===null?Bp(n,null,a,s):vr(n,e.child,a,s)}function Om(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var A in s)A!=="ref"&&(v[A]=s[A])}else v=s;return hr(n),s=Ou(e,n,a,v,f,u),A=Pu(),e!==null&&!cn?(Fu(e,n,u),na(e,n,u)):(yt&&A&&mu(n),n.flags|=1,Sn(e,n,s,u),n.child)}function Pm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Fm(e,n,f,s,u)):(e=cl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(v,s)&&e.ref===n.ref)return na(e,n,u)}return n.flags|=1,e=Ki(f,s),e.ref=n.ref,e.return=n,n.child=e}function Fm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Zs(f,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=f,lf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,na(e,n,u)}return ef(e,n,a,s,u)}function Bm(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Im(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?zp(n,f):Du(),Hp(n);else return s=n.lanes=536870912,Im(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(hl(n,f.cachePool),zp(n,f),Pa(),n.memoizedState=null):(e!==null&&hl(n,null),Du(),Pa());return Sn(e,n,u,a),n.child}function uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Im(e,n,a,s,u){var f=Mu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hl(n,null),Du(),Hp(n),e!==null&&Zr(e,n,s,!0),n.childLanes=u,null}function Rl(e,n){return n=Nl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function km(e,n,a){return vr(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function px(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(yt){if(s.mode==="hidden")return e=Rl(n,s),n.lanes=536870912,uo(null,e);if(Uu(n),(e=jt)?(e=Qg(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Sp(e),a.return=n,n.child=a,bn=n,jt=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Rl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Uu(n),u)if(n.flags&256)n.flags&=-257,n=km(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Zr(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(s=Gt,s!==null&&(v=Yo(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,cr(e,v),Hn(s,e,v),$u;zl(),n=km(e,n,a)}else e=f.treeContext,jt=ui(v.nextSibling),bn=n,yt=!0,Ca=null,li=!1,e!==null&&Tp(n,e),n=Rl(n,s),n.flags|=4096;return n}return e=Ki(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,s,u){return hr(n),a=Ou(e,n,a,s,void 0,u),s=Pu(),e!==null&&!cn?(Fu(e,n,u),na(e,n,u)):(yt&&s&&mu(n),n.flags|=1,Sn(e,n,a,u),n.child)}function zm(e,n,a,s,u,f){return hr(n),n.updateQueue=null,a=Gp(n,s,a,u),Vp(e),s=Pu(),e!==null&&!cn?(Fu(e,n,f),na(e,n,f)):(yt&&s&&mu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Hm(e,n,a,s,u){if(hr(n),n.stateNode===null){var f=Xr,v=a.contextType;typeof v=="object"&&v!==null&&(f=yn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Au(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?yn(v):Xr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ku(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Qu.enqueueReplaceState(f,f.state,null),ro(n,s,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=xr(a,A);f.props=z;var te=f.context,pe=a.contextType;v=Xr,typeof pe=="object"&&pe!==null&&(v=yn(pe));var _e=a.getDerivedStateFromProps;pe=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==v)&&wm(n,f,s,v),Na=!1;var ae=n.memoizedState;f.state=ae,ro(n,s,f,u),ao(),te=n.memoizedState,A||ae!==te||Na?(typeof _e=="function"&&(Ku(n,a,_e,s),te=n.memoizedState),(z=Na||Am(n,a,z,s,ae,te,v))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=te),f.props=s,f.state=te,f.context=v,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,wu(e,n),v=n.memoizedProps,pe=xr(a,v),f.props=pe,_e=n.pendingProps,ae=f.context,te=a.contextType,z=Xr,typeof te=="object"&&te!==null&&(z=yn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_e||ae!==z)&&wm(n,f,s,z),Na=!1,ae=n.memoizedState,f.state=ae,ro(n,s,f,u),ao();var ce=n.memoizedState;v!==_e||ae!==ce||Na||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof A=="function"&&(Ku(n,a,A,s),ce=n.memoizedState),(pe=Na||Am(n,a,pe,s,ae,ce,z)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ce,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ce,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ce),f.props=s,f.state=ce,f.context=z,s=pe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Dl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=vr(n,e.child,null,u),n.child=vr(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=na(e,n,u),e}function Vm(e,n,a,s){return fr(),n.flags|=256,Sn(e,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Np()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function Gm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(yt){if(u?Oa(n):Pa(),(e=jt)?(e=Qg(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Sp(e),a.return=n,n.child=a,bn=n,jt=null)):e=null,e===null)throw Ra(n);return zf(e)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,u?(Pa(),u=n.mode,A=Nl({mode:"hidden",children:A},u),s=ur(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,v,a),n.memoizedState=tf,uo(null,s)):(Oa(n),rf(n,A))}var z=e.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),A=s.fallback,u=n.mode,s=Nl({mode:"visible",children:s.children},u),A=ur(A,u,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,vr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,v,a),n.memoizedState=tf,n=uo(null,s));else if(Oa(n),zf(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var te=v.dgst;v=te,s=Error(r(419)),s.stack="",s.digest=v,Js({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(cn||Zr(e,n,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=Gt,v!==null&&(s=Yo(v,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,cr(e,s),Hn(v,e,s),$u;kf(A)||zl(),n=sf(e,n,a)}else kf(A)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,jt=ui(A.nextSibling),bn=n,yt=!0,Ca=null,li=!1,e!==null&&Tp(n,e),n=rf(n,s.children),n.flags|=4096);return n}return u?(Pa(),A=s.fallback,u=n.mode,z=e.child,te=z.sibling,s=Ki(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,te!==null?A=Ki(te,A):(A=ur(A,u,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,uo(null,s),s=n.child,A=e.child.memoizedState,A===null?A=nf(a):(u=A.cachePool,u!==null?(z=on._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Np(),A={baseLanes:A.baseLanes|a,cachePool:u}),s.memoizedState=A,s.childLanes=af(e,v,a),n.memoizedState=tf,uo(e.child,s)):(Oa(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function sf(e,n,a){return vr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),bu(e.return,n,a)}function of(e,n,a,s,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Xm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=en.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,ve(en,v),Sn(e,n,s,a),s=yt?Qs:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),of(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}of(n,!0,a,null,f,s);break;case"together":of(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function mx(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Da(n,on,e.memoizedState.cache),fr();break;case 27:case 5:Ke(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(e,n,a):(Oa(n),e=na(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Xm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(en,en.current),s)break;return null;case 22:return n.lanes=0,Bm(e,n,a,n.pendingProps);case 24:Da(n,on,e.memoizedState.cache)}return na(e,n,a)}function Wm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return cn=!1,mx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,yt&&(n.flags&1048576)!==0&&Mp(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=mr(n.elementType),n.type=e,typeof e=="function")du(e)?(s=xr(e,s),n.tag=1,n=Hm(null,n,e,s,a)):(n.tag=0,n=ef(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Om(null,n,e,s,a);break e}else if(u===I){n.tag=14,n=Pm(null,n,e,s,a);break e}}throw n=se(e)||e,Error(r(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=xr(s,n.pendingProps),Hm(e,n,s,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,wu(e,n),ro(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Da(n,on,s),s!==f.cache&&yu(n,[on],a,!0),ao(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,s,a);break e}else if(s!==u){u=ri(Error(r(424)),n),Js(u),n=Vm(e,n,s,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,jt=ui(e.firstChild),bn=n,yt=!0,Ca=null,li=!0,a=Bp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fr(),s===u){n=na(e,n,a);break e}Sn(e,n,s,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=i0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,e=n.pendingProps,s=ql(ie.current).createElement(a),s[an]=n,s[hn]=e,En(s,a,e),X(s),n.stateNode=s):n.memoizedState=i0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ke(n),e===null&&yt&&(s=n.stateNode=e0(n.type,n.pendingProps,ie.current),bn=n,li=!0,u=jt,Ga(n.type)?(Hf=u,jt=ui(s.firstChild)):jt=u),Sn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&yt&&((u=s=jt)&&(s=Xx(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,bn=n,jt=ui(s.firstChild),li=!1,u=!0):u=!1),u||Ra(n)),Ke(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Ff(u,f)?s=null:v!==null&&Ff(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,sx,null,null,a),Ao._currentValue=u),Dl(e,n),Sn(e,n,s,a),n.child;case 6:return e===null&&yt&&((e=a=jt)&&(a=Wx(a,n.pendingProps,li),a!==null?(n.stateNode=a,bn=n,jt=null,e=!0):e=!1),e||Ra(n)),null;case 13:return Gm(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=vr(n,null,s,a):Sn(e,n,s,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Da(n,n.type,s.value),Sn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,hr(n),u=yn(u),s=s(u),n.flags|=1,Sn(e,n,s,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return Fm(e,n,n.type,n.pendingProps,a);case 19:return Xm(e,n,a);case 31:return px(e,n,a);case 22:return Bm(e,n,a,n.pendingProps);case 24:return hr(n),s=yn(on),e===null?(u=Mu(),u===null&&(u=Gt,f=Su(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Au(n),Da(n,on,u)):((e.lanes&a)!==0&&(wu(e,n),ro(n,null,null,a),ao()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,on,s)):(s=f.cache,Da(n,on,s),s!==u.cache&&yu(n,[on],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(e){e.flags|=4}function cf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(xg())e.flags|=8192;else throw gr=ml,Tu}else e.flags&=-16777217}function qm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l0(n))if(xg())e.flags|=8192;else throw gr=ml,Tu}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,os|=n)}function fo(e,n){if(!yt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Xt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function gx(e,n,a){var s=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(n),null;case 1:return Xt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),$i(on),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),Xt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(Xt(n),qm(n,f)):(Xt(n),cf(n,u,null,s,a))):f?f!==e.memoizedState?(ia(n),Xt(n),qm(n,f)):(Xt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ia(n),Xt(n),cf(n,u,e,s,a)),null;case 27:if($e(n),a=ie.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xt(n),null}e=Ae.current,Yr(n)?Ap(n):(e=e0(u,s,a),n.stateNode=e,ia(n))}return Xt(n),null;case 5:if($e(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xt(n),null}if(f=Ae.current,Yr(n))Ap(n);else{var v=ql(ie.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[an]=n,f[hn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(En(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ia(n)}}return Xt(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ia(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ie.current,Yr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=bn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Gg(e.nodeValue,a)),e||Ra(n,!0)}else e=ql(e).createTextNode(s),e[an]=n,n.stateNode=e}return Xt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Yr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[an]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xt(n),e=!1}else a=_u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Yr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xt(n),u=!1}else u=_u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Xt(n),null);case 4:return Ge(),e===null&&Nf(n.stateNode.containerInfo),Xt(n),null;case 10:return $i(n.type),Xt(n),null;case 19:if(q(en),s=n.memoizedState,s===null)return Xt(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)fo(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,fo(s,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)yp(a,e),a=a.sibling;return ve(en,en.current&1|2),yt&&Qi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>Bl&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304)}else{if(!u)if(e=xl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!yt)return Xt(n),null}else 2*E()-s.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,fo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=en.current,ve(en,u?a&1|2:a&1),yt&&Qi(n,s.treeForkCount),e):(Xt(n),null);case 22:case 23:return Zn(n),Nu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xt(n),n.subtreeFlags&6&&(n.flags|=8192)):Xt(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&q(pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(on),Xt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function vx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(on),Ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(en),null;case 4:return Ge(),null;case 10:return $i(n.type),null;case 22:case 23:return Zn(n),Nu(),e!==null&&q(pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(on),null;case 25:return null;default:return null}}function Ym(e,n){switch(gu(n),n.tag){case 3:$i(on),Ge();break;case 26:case 27:case 5:$e(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:q(en);break;case 10:$i(n.type);break;case 22:case 23:Zn(n),Nu(),e!==null&&q(pr);break;case 24:$i(on)}}function ho(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(A){Bt(n,n.return,A)}}function Fa(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var v=s.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var z=a,te=A;try{te()}catch(pe){Bt(u,z,pe)}}}s=s.next}while(s!==f)}}catch(pe){Bt(n,n.return,pe)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{kp(n,a)}catch(s){Bt(e,e.return,s)}}}function Km(e,n,a){a.props=xr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Bt(e,n,s)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Bt(e,n,u)}}function Oi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Bt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(e,n,u)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Bt(e,e.return,u)}}function uf(e,n,a){try{var s=e.stateNode;kx(s,e.type,a,n),s[hn]=n}catch(u){Bt(e,e.return,u)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(s!==4&&(s===27&&Ga(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Ll(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,s,a),n[an]=e,n[hn]=a}catch(f){Bt(e,e.return,f)}}var aa=!1,un=!1,hf=!1,eg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function _x(e,n){if(e=e.containerInfo,Of=ec,e=dp(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,z=-1,te=0,pe=0,_e=e,ae=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(A=v+u),_e!==f||s!==0&&_e.nodeType!==3||(z=v+s),_e.nodeType===3&&(v+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)ae=_e,_e=ce;for(;;){if(_e===e)break t;if(ae===a&&++te===u&&(A=v),ae===f&&++pe===s&&(z=v),(ce=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=ce}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},ec=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var He=xr(a.type,u);e=s.getSnapshotBeforeUpdate(He,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Je){Bt(a,a.return,Je)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function tg(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),s&4&&ho(5,a);break;case 1:if(sa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var u=xr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}s&64&&Zm(a),s&512&&po(a,a.return);break;case 3:if(sa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(e,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&s&4&&$m(a);case 26:case 5:sa(e,a),n===null&&s&4&&Qm(a),s&512&&po(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),s&4&&ag(e,a);break;case 13:sa(e,a),s&4&&rg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wx.bind(null,a),qx(e,a))));break;case 22:if(s=a.memoizedState!==null||aa,!s){n=n!==null&&n.memoizedState!==null||un,u=aa;var f=un;aa=s,(un=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),aa=u,un=f}break;case 30:break;default:sa(e,a)}}function ng(e){var n=e.alternate;n!==null&&(e.alternate=null,ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,Bn=!1;function ra(e,n,a){for(a=a.child;a!==null;)ig(e,n,a),a=a.sibling}function ig(e,n,a){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:un||Oi(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Oi(a,n);var s=Zt,u=Bn;Ga(a.type)&&(Zt=a.stateNode,Bn=!1),ra(e,n,a),Eo(a.stateNode),Zt=s,Bn=u;break;case 5:un||Oi(a,n);case 6:if(s=Zt,u=Bn,Zt=null,ra(e,n,a),Zt=s,Bn=u,Zt!==null)if(Bn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Zt!==null&&(Bn?(e=Zt,Zg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ms(e)):Zg(Zt,a.stateNode));break;case 4:s=Zt,u=Bn,Zt=a.stateNode.containerInfo,Bn=!0,ra(e,n,a),Zt=s,Bn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),un||Fa(4,a,n),ra(e,n,a);break;case 1:un||(Oi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Km(a,n,s)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,ra(e,n,a),un=s;break;default:ra(e,n,a)}}function ag(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ms(e)}catch(a){Bt(n,n.return,a)}}}function rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ms(e)}catch(a){Bt(n,n.return,a)}}function xx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new eg),n;default:throw Error(r(435,e.tag))}}function Ol(e,n){var a=xx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Cx.bind(null,e,s);s.then(u,u)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,v=n,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Zt=A.stateNode,Bn=!1;break e}break;case 5:Zt=A.stateNode,Bn=!1;break e;case 3:case 4:Zt=A.stateNode.containerInfo,Bn=!0;break e}A=A.return}if(Zt===null)throw Error(r(160));ig(f,v,u),Zt=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sg(n,e),n=n.sibling}var Ei=null;function sg(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),kn(e),s&4&&(Fa(3,e,e.return),ho(3,e),Fa(5,e,e.return));break;case 1:In(n,e),kn(e),s&512&&(un||a===null||Oi(a,a.return)),s&64&&aa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ei;if(In(n,e),kn(e),s&512&&(un||a===null||Oi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ar]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,s,a),f[an]=e,X(f),s=f;break e;case"link":var v=s0("link","href",u).get(s+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break t}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;case"meta":if(v=s0("meta","content",u).get(s+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break t}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=e,X(f),s=f}e.stateNode=s}else o0(u,e.type,e.stateNode);else e.stateNode=r0(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?o0(u,e.type,e.stateNode):r0(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),kn(e),s&512&&(un||a===null||Oi(a,a.return)),a!==null&&s&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),kn(e),s&512&&(un||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{Un(u,"")}catch(He){Bt(e,e.return,He)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,uf(e,u,a!==null?a.memoizedProps:u)),s&1024&&(hf=!0);break;case 6:if(In(n,e),kn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(He){Bt(e,e.return,He)}}break;case 3:if(Kl=null,u=Ei,Ei=Yl(n.containerInfo),In(n,e),Ei=u,kn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ms(n.containerInfo)}catch(He){Bt(e,e.return,He)}hf&&(hf=!1,og(e));break;case 4:s=Ei,Ei=Yl(e.stateNode.containerInfo),In(n,e),kn(e),Ei=s;break;case 12:In(n,e),kn(e);break;case 31:In(n,e),kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 13:In(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,te=aa,pe=un;if(aa=te||u,un=pe||z,In(n,e),un=pe,aa=te,kn(e),s&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||aa||un||br(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=z.stateNode;var _e=z.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(He){Bt(z,z.return,He)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(He){Bt(z,z.return,He)}}}else if(n.tag===18){if(a===null){z=n;try{var ce=z.stateNode;u?Kg(ce,!0):Kg(z.stateNode,!1)}catch(He){Bt(z,z.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ol(e,a))));break;case 19:In(n,e),kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 30:break;case 21:break;default:In(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Jm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=ff(e);Ll(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Un(v,""),a.flags&=-33);var A=ff(e);Ll(e,A,v);break;case 3:case 4:var z=a.stateNode.containerInfo,te=ff(e);df(e,te,z);break;default:throw Error(r(161))}}catch(pe){Bt(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tg(e,n.alternate,n),n=n.sibling}function br(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),br(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),br(n);break;case 27:Eo(n.stateNode);case 26:case 5:Oi(n,n.return),br(n);break;case 22:n.memoizedState===null&&br(n);break;case 30:br(n);break;default:br(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),ho(4,f);break;case 1:if(oa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Bt(s,s.return,te)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Ip(z[u],A)}catch(te){Bt(s,s.return,te)}}a&&v&64&&Zm(f),po(f,f.return);break;case 27:$m(f);case 26:case 5:oa(u,f,a),a&&s===null&&v&4&&Qm(f),po(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&v&4&&ag(u,f);break;case 13:oa(u,f,a),a&&v&4&&rg(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),po(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function Mi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lg(e,n,a,s),n=n.sibling}function lg(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,s),u&2048&&ho(9,n);break;case 1:Mi(e,n,a,s);break;case 3:Mi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(u&2048){Mi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Bt(n,n.return,z)}}else Mi(e,n,a,s);break;case 31:Mi(e,n,a,s);break;case 13:Mi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,s):mo(e,n):f._visibility&2?Mi(e,n,a,s):(f._visibility|=2,as(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&pf(v,n);break;case 24:Mi(e,n,a,s),u&2048&&mf(n.alternate,n);break;default:Mi(e,n,a,s)}}function as(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,z=s,te=v.flags;switch(v.tag){case 0:case 11:case 15:as(f,v,A,z,u),ho(8,v);break;case 23:break;case 22:var pe=v.stateNode;v.memoizedState!==null?pe._visibility&2?as(f,v,A,z,u):mo(f,v):(pe._visibility|=2,as(f,v,A,z,u)),u&&te&2048&&pf(v.alternate,v);break;case 24:as(f,v,A,z,u),u&&te&2048&&mf(v.alternate,v);break;default:as(f,v,A,z,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:mo(a,s),u&2048&&pf(s.alternate,s);break;case 24:mo(a,s),u&2048&&mf(s.alternate,s);break;default:mo(a,s)}n=n.sibling}}var go=8192;function rs(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)cg(e,n,a),e=e.sibling}function cg(e,n,a){switch(e.tag){case 26:rs(e,n,a),e.flags&go&&e.memoizedState!==null&&rb(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:rs(e,n,a);break;case 3:case 4:var s=Ei;Ei=Yl(e.stateNode.containerInfo),rs(e,n,a),Ei=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=go,go=16777216,rs(e,n,a),go=s):rs(e,n,a));break;default:rs(e,n,a)}}function ug(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,dg(s,e)}ug(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fg(e),e=e.sibling}function fg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):vo(e);break;default:vo(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,dg(s,e)}ug(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function dg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:$s(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else e:for(a=e;_n!==null;){s=_n;var u=s.sibling,f=s.return;if(ng(s),s===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var bx={getCacheForType:function(e){var n=yn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return yn(on).controller.signal}},yx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Gt=null,gt=null,xt=0,Ft=0,Kn=null,Ba=!1,ss=!1,gf=!1,la=0,$t=0,Ia=0,yr=0,vf=0,Qn=0,os=0,_o=null,zn=null,_f=!1,Fl=0,hg=0,Bl=1/0,Il=null,ka=null,mn=0,za=null,ls=null,ca=0,xf=0,bf=null,pg=null,xo=0,yf=null;function Jn(){return(Nt&2)!==0&&xt!==0?xt&-xt:L.T!==null?wf():Ni()}function mg(){if(Qn===0)if((xt&536870912)===0||yt){var e=we;we<<=1,(we&3932160)===0&&(we=262144),Qn=e}else Qn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Qn}function Hn(e,n,a){(e===Gt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(cs(e,0),Ha(e,xt,Qn,!1)),Rn(e,a),((Nt&2)===0||e!==Gt)&&(e===Gt&&((Nt&2)===0&&(yr|=a),$t===4&&Ha(e,xt,Qn,!1)),Pi(e))}function gg(e,n,a){if((Nt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ke(e,n),u=s?Mx(e,n):Ef(e,n,!0),f=s;do{if(u===0){ss&&!s&&Ha(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Sx(a)){u=Ef(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var A=e;u=_o;var z=A.current.memoizedState.isDehydrated;if(z&&(cs(A,v).flags|=256),v=Ef(A,v,!1),v!==2){if(gf&&!z){A.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break e}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){cs(e,0),Ha(e,n,0,!0);break}e:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(s,n,Qn,!Ba);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Fl+300-E(),10<u)){if(Ha(s,n,Qn,!Ba),de(s,0,!0)!==0)break e;ca=n,s.timeoutHandle=qg(vg.bind(null,s,a,zn,Il,_f,n,Qn,yr,os,Ba,f,"Throttled",-0,0),u);break e}vg(s,a,zn,Il,_f,n,Qn,yr,os,Ba,f,null,-0,0)}}break}while(!0);Pi(e)}function vg(e,n,a,s,u,f,v,A,z,te,pe,_e,ae,ce){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},cg(n,f,_e);var He=(f&62914560)===f?Fl-E():(f&4194048)===f?hg-E():0;if(He=sb(_e,He),He!==null){ca=f,e.cancelPendingCommit=He(Tg.bind(null,e,n,f,a,s,u,v,A,z,pe,_e,null,ae,ce)),Ha(e,f,v,!te);return}}Tg(e,n,f,a,s,u,v,A,z)}function Sx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(e,n,a,s){n&=~vf,n&=~yr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Le(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&zs(e,a,n)}function kl(){return(Nt&6)===0?(bo(0),!1):!0}function Sf(){if(gt!==null){if(Ft===0)var e=gt.return;else e=gt,Ji=dr=null,Bu(e),$r=null,to=0,e=gt;for(;e!==null;)Ym(e.alternate,e),e=e.return;gt=null}}function cs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Sf(),Gt=e,gt=a=Ki(e.current,null),xt=n,Ft=0,Kn=null,Ba=!1,ss=ke(e,n),gf=!1,os=Qn=vf=yr=Ia=$t=0,zn=_o=null,_f=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Le(s),f=1<<u;n|=e[u],s&=~f}return la=n,sl(),a}function _g(e,n){ct=null,L.H=co,n===Jr||n===pl?(n=Op(),Ft=3):n===Tu?(n=Op(),Ft=4):Ft=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,gt===null&&($t=1,Cl(e,ri(n,e.current)))}function xg(){var e=Yn.current;return e===null?!0:(xt&4194048)===xt?ci===null:(xt&62914560)===xt||(xt&536870912)!==0?e===ci:!1}function bg(){var e=L.H;return L.H=co,e===null?co:e}function yg(){var e=L.A;return L.A=bx,e}function zl(){$t=4,Ba||(xt&4194048)!==xt&&Yn.current!==null||(ss=!0),(Ia&134217727)===0&&(yr&134217727)===0||Gt===null||Ha(Gt,xt,Qn,!1)}function Ef(e,n,a){var s=Nt;Nt|=2;var u=bg(),f=yg();(Gt!==e||xt!==n)&&(Il=null,cs(e,n)),n=!1;var v=$t;e:do try{if(Ft!==0&&gt!==null){var A=gt,z=Kn;switch(Ft){case 8:Sf(),v=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var te=Ft;if(Ft=0,Kn=null,us(e,A,z,te),a&&ss){v=0;break e}break;default:te=Ft,Ft=0,Kn=null,us(e,A,z,te)}}Ex(),v=$t;break}catch(pe){_g(e,pe)}while(!0);return n&&e.shellSuspendCounter++,Ji=dr=null,Nt=s,L.H=u,L.A=f,gt===null&&(Gt=null,xt=0,sl()),v}function Ex(){for(;gt!==null;)Sg(gt)}function Mx(e,n){var a=Nt;Nt|=2;var s=bg(),u=yg();Gt!==e||xt!==n?(Il=null,Bl=E()+500,cs(e,n)):ss=ke(e,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var f=Kn;t:switch(Ft){case 1:Ft=0,Kn=null,us(e,n,f,1);break;case 2:case 9:if(Up(f)){Ft=0,Kn=null,Eg(n);break}n=function(){Ft!==2&&Ft!==9||Gt!==e||(Ft=7),Pi(e)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Up(f)?(Ft=0,Kn=null,Eg(n)):(Ft=0,Kn=null,us(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var A=gt;if(v?l0(v):A.stateNode.complete){Ft=0,Kn=null;var z=A.sibling;if(z!==null)gt=z;else{var te=A.return;te!==null?(gt=te,Hl(te)):gt=null}break t}}Ft=0,Kn=null,us(e,n,f,5);break;case 6:Ft=0,Kn=null,us(e,n,f,6);break;case 8:Sf(),$t=6;break e;default:throw Error(r(462))}}Tx();break}catch(pe){_g(e,pe)}while(!0);return Ji=dr=null,L.H=s,L.A=u,Nt=a,gt!==null?0:(Gt=null,xt=0,sl(),$t)}function Tx(){for(;gt!==null&&!We();)Sg(gt)}function Sg(e){var n=Wm(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?Hl(e):gt=n}function Eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=zm(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=zm(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Bu(n);default:Ym(a,n),n=gt=yp(n,la),n=Wm(a,n,la)}e.memoizedProps=e.pendingProps,n===null?Hl(e):gt=n}function us(e,n,a,s){Ji=dr=null,Bu(n),$r=null,to=0;var u=n.return;try{if(hx(e,u,n,a,xt)){$t=1,Cl(e,ri(a,e.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;$t=1,Cl(e,ri(a,e.current)),gt=null;return}n.flags&32768?(yt||s===1?e=!0:ss||(xt&536870912)!==0?e=!1:(Ba=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Mg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){Mg(n,Ba);return}e=n.return;var a=gx(n.alternate,n,la);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function Mg(e,n){do{var a=vx(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function Tg(e,n,a,s,u,f,v,A,z){e.cancelPendingCommit=null;do Vl();while(mn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=uu,_i(e,a,f,v,A,z),e===Gt&&(gt=Gt=null,xt=0),ls=n,za=e,ca=a,xf=f,bf=u,pg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rx(he,function(){return Dg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,u=B.p,B.p=2,v=Nt,Nt|=4;try{_x(e,n,a)}finally{Nt=v,B.p=u,L.T=s}}mn=1,Ag(),wg(),Cg()}}function Ag(){if(mn===1){mn=0;var e=za,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=B.p;B.p=2;var u=Nt;Nt|=4;try{sg(n,e);var f=Pf,v=dp(e.containerInfo),A=f.focusedElem,z=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&fp(A.ownerDocument.documentElement,A)){if(z!==null&&ru(A)){var te=z.start,pe=z.end;if(pe===void 0&&(pe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(pe,A.value.length);else{var _e=A.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),He=A.textContent.length,Je=Math.min(z.start,He),Vt=z.end===void 0?Je:Math.min(z.end,He);!ce.extend&&Je>Vt&&(v=Vt,Vt=Je,Je=v);var Z=up(A,Je),j=up(A,Vt);if(Z&&j&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==j.node||ce.focusOffset!==j.offset)){var ee=_e.createRange();ee.setStart(Z.node,Z.offset),ce.removeAllRanges(),Je>Vt?(ce.addRange(ee),ce.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),ce.addRange(ee))}}}}for(_e=[],ce=A;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_e.length;A++){var ge=_e[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}ec=!!Of,Pf=Of=null}finally{Nt=u,B.p=s,L.T=a}}e.current=n,mn=2}}function wg(){if(mn===2){mn=0;var e=za,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=B.p;B.p=2;var u=Nt;Nt|=4;try{tg(e,n.alternate,n)}finally{Nt=u,B.p=s,L.T=a}}mn=3}}function Cg(){if(mn===4||mn===3){mn=0,O();var e=za,n=ls,a=ca,s=pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,ls=za=null,Rg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ka=null),Fr(a),n=n.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,u=B.p,B.p=2,L.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var A=s[v];f(A.value,{componentStack:A.stack})}}finally{L.T=n,B.p=u}}(ca&3)!==0&&Vl(),Pi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yf?xo++:(xo=0,yf=e):xo=0,bo(0)}}function Rg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function Vl(){return Ag(),wg(),Cg(),Dg()}function Dg(){if(mn!==5)return!1;var e=za,n=xf;xf=0;var a=Fr(ca),s=L.T,u=B.p;try{B.p=32>a?32:a,L.T=null,a=bf,bf=null;var f=za,v=ca;if(mn=0,ls=za=null,ca=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,fg(f.current),lg(f,f.current,v,a),Nt=A,bo(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{B.p=u,L.T=s,Rg(e,n)}}function Ng(e,n,a){n=ri(a,n),n=Ju(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Rn(e,2),Pi(e))}function Bt(e,n,a){if(e.tag===3)Ng(e,e,a);else for(;n!==null;){if(n.tag===3){Ng(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ka===null||!ka.has(s))){e=ri(a,e),a=Um(2),s=La(n,a,2),s!==null&&(Lm(a,s,n,e),Rn(s,2),Pi(s));break}}n=n.return}}function Mf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new yx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(gf=!0,u.add(a),e=Ax.bind(null,e,n,a),n.then(e,e))}function Ax(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Gt===e&&(xt&a)===a&&($t===4||$t===3&&(xt&62914560)===xt&&300>E()-Fl?(Nt&2)===0&&cs(e,0):vf|=a,os===xt&&(os=0)),Pi(e)}function Ug(e,n){n===0&&(n=Pt()),e=cr(e,n),e!==null&&(Rn(e,n),Pi(e))}function wx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ug(e,a)}function Cx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Ug(e,a)}function Rx(e,n){return Et(e,n)}var Gl=null,fs=null,Tf=!1,jl=!1,Af=!1,Va=0;function Pi(e){e!==fs&&e.next===null&&(fs===null?Gl=fs=e:fs=fs.next=e),jl=!0,Tf||(Tf=!0,Nx())}function bo(e,n){if(!Af&&jl){Af=!0;do for(var a=!1,s=Gl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Le(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fg(s,f))}else f=xt,f=de(s,s===Gt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ke(s,f)||(a=!0,Fg(s,f));s=s.next}while(a);Af=!1}}function Dx(){Lg()}function Lg(){jl=Tf=!1;var e=0;Va!==0&&Hx()&&(e=Va);for(var n=E(),a=null,s=Gl;s!==null;){var u=s.next,f=Og(s,n);f===0?(s.next=null,a===null?Gl=u:a.next=u,u===null&&(fs=a)):(a=s,(e!==0||(f&3)!==0)&&(jl=!0)),s=u}mn!==0&&mn!==5||bo(e),Va!==0&&(Va=0)}function Og(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Le(f),A=1<<v,z=u[v];z===-1?((A&a)===0||(A&s)!==0)&&(u[v]=it(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=Gt,a=xt,a=de(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Lt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ke(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Lt(s),Fr(a)){case 2:case 8:a=be;break;case 32:a=he;break;case 268435456:a=Re;break;default:a=he}return s=Pg.bind(null,e),a=Et(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Lt(s),e.callbackPriority=2,e.callbackNode=null,2}function Pg(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var s=xt;return s=de(e,e===Gt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(gg(e,s,n),Og(e,E()),e.callbackNode!=null&&e.callbackNode===a?Pg.bind(null,e):null)}function Fg(e,n){if(Vl())return null;gg(e,n,!0)}function Nx(){Gx(function(){(Nt&6)!==0?Et(me,Dx):Lg()})}function wf(){if(Va===0){var e=Kr;e===0&&(e=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),Va=e}return Va}function Bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function Ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ux(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Bg((u[hn]||null).action),v=s.submitter;v&&(n=(n=v[hn]||null)?Bg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new nl("action","action",null,s,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Va!==0){var z=v?Ig(u,v):new FormData(u);Wu(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=v?Ig(u,v):new FormData(u),Wu(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Cf=0;Cf<cu.length;Cf++){var Rf=cu[Cf],Lx=Rf.toLowerCase(),Ox=Rf[0].toUpperCase()+Rf.slice(1);Si(Lx,"on"+Ox)}Si(mp,"onAnimationEnd"),Si(gp,"onAnimationIteration"),Si(vp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(K_,"onTransitionRun"),Si(Q_,"onTransitionStart"),Si(J_,"onTransitionCancel"),Si(_p,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var A=s[v],z=A.instance,te=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){rl(pe)}u.currentTarget=null,f=z}else for(v=0;v<s.length;v++){if(A=s[v],z=A.instance,te=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){rl(pe)}u.currentTarget=null,f=z}}}}function vt(e,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var s=e+"__bubble";a.has(s)||(zg(n,e,2,!1),a.add(s))}function Df(e,n,a){var s=0;n&&(s|=4),zg(a,e,s,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Xl]){e[Xl]=!0,le.forEach(function(a){a!=="selectionchange"&&(Px.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Df("selectionchange",!1,n))}}function zg(e,n,a,s){switch(m0(n)){case 2:var u=cb;break;case 8:u=ub;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var A=s.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=s.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Ma(A),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){s=f=v;continue e}A=A.parentNode}}s=s.return}Xh(function(){var te=f,pe=Yc(a),_e=[];e:{var ae=xp.get(e);if(ae!==void 0){var ce=nl,He=e;switch(e){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":ce=C_;break;case"focusin":He="focus",ce=eu;break;case"focusout":He="blur",ce=eu;break;case"beforeblur":case"afterblur":ce=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=g_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=N_;break;case mp:case gp:case vp:ce=x_;break;case _p:ce=L_;break;case"scroll":case"scrollend":ce=p_;break;case"wheel":ce=P_;break;case"copy":case"cut":case"paste":ce=y_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Kh;break;case"toggle":case"beforetoggle":ce=B_}var Je=(n&4)!==0,Vt=!Je&&(e==="scroll"||e==="scrollend"),Z=Je?ae!==null?ae+"Capture":null:ae;Je=[];for(var j=te,ee;j!==null;){var ge=j;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||Z===null||(ge=Vs(j,Z),ge!=null&&Je.push(So(j,ge,ee))),Vt)break;j=j.return}0<Je.length&&(ae=new ce(ae,He,null,a,pe),_e.push({event:ae,listeners:Je}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",ae&&a!==qc&&(He=a.relatedTarget||a.fromElement)&&(Ma(He)||He[Wi]))break e;if((ce||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(He=a.relatedTarget||a.toElement,ce=te,He=He?Ma(He):null,He!==null&&(Vt=c(He),Je=He.tag,He!==Vt||Je!==5&&Je!==27&&Je!==6)&&(He=null)):(ce=null,He=te),ce!==He)){if(Je=Yh,ge="onMouseLeave",Z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Je=Kh,ge="onPointerLeave",Z="onPointerEnter",j="pointer"),Vt=ce==null?ae:rr(ce),ee=He==null?ae:rr(He),ae=new Je(ge,j+"leave",ce,a,pe),ae.target=Vt,ae.relatedTarget=ee,ge=null,Ma(pe)===te&&(Je=new Je(Z,j+"enter",He,a,pe),Je.target=ee,Je.relatedTarget=Vt,ge=Je),Vt=ge,ce&&He)t:{for(Je=Fx,Z=ce,j=He,ee=0,ge=Z;ge;ge=Je(ge))ee++;ge=0;for(var Qe=j;Qe;Qe=Je(Qe))ge++;for(;0<ee-ge;)Z=Je(Z),ee--;for(;0<ge-ee;)j=Je(j),ge--;for(;ee--;){if(Z===j||j!==null&&Z===j.alternate){Je=Z;break t}Z=Je(Z),j=Je(j)}Je=null}else Je=null;ce!==null&&Hg(_e,ae,ce,Je,!1),He!==null&&Vt!==null&&Hg(_e,Vt,He,Je,!0)}}e:{if(ae=te?rr(te):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var wt=ap;else if(np(ae))if(rp)wt=q_;else{wt=X_;var qe=j_}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Ir(te.elementType)&&(wt=ap):wt=W_;if(wt&&(wt=wt(e,te))){ip(_e,wt,a,pe);break e}qe&&qe(e,ae,te),e==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&bi(ae,"number",ae.value)}switch(qe=te?rr(te):window,e){case"focusin":(np(qe)||qe.contentEditable==="true")&&(Vr=qe,su=te,Ks=null);break;case"focusout":Ks=su=Vr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,hp(_e,a,pe);break;case"selectionchange":if(Z_)break;case"keydown":case"keyup":hp(_e,a,pe)}var dt;if(nu)e:{switch(e){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Hr?ep(e,a)&&(bt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Qh&&a.locale!=="ko"&&(Hr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Hr&&(dt=Wh()):(Aa=pe,Qc="value"in Aa?Aa.value:Aa.textContent,Hr=!0)),qe=Wl(te,bt),0<qe.length&&(bt=new Zh(bt,e,null,a,pe),_e.push({event:bt,listeners:qe}),dt?bt.data=dt:(dt=tp(a),dt!==null&&(bt.data=dt)))),(dt=k_?z_(e,a):H_(e,a))&&(bt=Wl(te,"onBeforeInput"),0<bt.length&&(qe=new Zh("onBeforeInput","beforeinput",null,a,pe),_e.push({event:qe,listeners:bt}),qe.data=dt)),Ux(_e,e,te,a,pe)}kg(_e,n)})}function So(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vs(e,a),u!=null&&s.unshift(So(e,u,f)),u=Vs(e,n),u!=null&&s.push(So(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Fx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hg(e,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var A=a,z=A.alternate,te=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||te===null||(z=te,u?(te=Vs(a,f),te!=null&&v.unshift(So(a,te,z))):u||(te=Vs(a,f),te!=null&&v.push(So(a,te,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Bx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function Vg(e){return(typeof e=="string"?e:""+e).replace(Bx,`
`).replace(Ix,"")}function Gg(e,n){return n=Vg(n),Vg(e)===n}function Ht(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Un(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Un(e,""+s);break;case"className":rt(e,"class",s);break;case"tabIndex":rt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(e,a,s);break;case"style":qi(e,s,f);break;case"data":if(n!=="object"){rt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",u.name,u,null),Ht(e,n,"formEncType",u.formEncType,u,null),Ht(e,n,"formMethod",u.formMethod,u,null),Ht(e,n,"formTarget",u.formTarget,u,null)):(Ht(e,n,"encType",u.encType,u,null),Ht(e,n,"method",u.method,u,null),Ht(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Yi);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":vt("beforetoggle",e),vt("toggle",e),nt(e,"popover",s);break;case"xlinkActuate":ze(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ze(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ze(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ze(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ze(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ze(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ze(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ze(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ze(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":nt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=d_.get(a)||a,nt(e,a,s))}}function Lf(e,n,a,s,u,f){switch(a){case"style":qi(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Un(e,s):(typeof s=="number"||typeof s=="bigint")&&Un(e,""+s);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ne.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):nt(e,a,s)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,f,v,a,null)}}u&&Ht(e,n,"srcSet",a.srcSet,a,null),s&&Ht(e,n,"src",a.src,a,null);return;case"input":vt("invalid",e);var A=f=v=u=null,z=null,te=null;for(s in a)if(a.hasOwnProperty(s)){var pe=a[s];if(pe!=null)switch(s){case"name":u=pe;break;case"type":v=pe;break;case"checked":z=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Ht(e,n,s,pe,a,null)}}jn(e,f,A,z,te,v,u,!1);return;case"select":vt("invalid",e),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":s=A;default:Ht(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!s,n!=null?Xn(e,!!s,n,!1):a!=null&&Xn(e,!!s,a,!0);return;case"textarea":vt("invalid",e),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ht(e,n,v,A,a,null)}rn(e,s,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ht(e,n,z,s,a,null));return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(s=0;s<yo.length;s++)vt(yo[s],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(s=a[te],s!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,te,s,a,null)}return;default:if(Ir(n)){for(pe in a)a.hasOwnProperty(pe)&&(s=a[pe],s!==void 0&&Lf(e,n,pe,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ht(e,n,A,s,a,null))}function kx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,z=null,te=null,pe=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":z=_e;default:s.hasOwnProperty(ce)||Ht(e,n,ce,null,s,_e)}}for(var ae in s){var ce=s[ae];if(_e=a[ae],s.hasOwnProperty(ae)&&(ce!=null||_e!=null))switch(ae){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":pe=ce;break;case"value":v=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==_e&&Ht(e,n,ae,ce,s,_e)}}Nn(e,v,A,z,te,pe,f,u);return;case"select":ce=v=A=ae=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ce=z;default:s.hasOwnProperty(f)||Ht(e,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":ae=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==z&&Ht(e,n,u,f,s,z)}n=A,a=v,s=ce,ae!=null?Xn(e,!!a,ae,!1):!!s!=!!a&&(n!=null?Xn(e,!!a,n,!0):Xn(e,!!a,a?[]:"",!1));return;case"textarea":ce=ae=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ht(e,n,A,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ae=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ht(e,n,v,u,s,f)}Ot(e,ae,ce);return;case"option":for(var He in a)ae=a[He],a.hasOwnProperty(He)&&ae!=null&&!s.hasOwnProperty(He)&&(He==="selected"?e.selected=!1:Ht(e,n,He,null,s,ae));for(z in s)ae=s[z],ce=a[z],s.hasOwnProperty(z)&&ae!==ce&&(ae!=null||ce!=null)&&(z==="selected"?e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Ht(e,n,z,ae,s,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)ae=a[Je],a.hasOwnProperty(Je)&&ae!=null&&!s.hasOwnProperty(Je)&&Ht(e,n,Je,null,s,ae);for(te in s)if(ae=s[te],ce=a[te],s.hasOwnProperty(te)&&ae!==ce&&(ae!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Ht(e,n,te,ae,s,ce)}return;default:if(Ir(n)){for(var Vt in a)ae=a[Vt],a.hasOwnProperty(Vt)&&ae!==void 0&&!s.hasOwnProperty(Vt)&&Lf(e,n,Vt,void 0,s,ae);for(pe in s)ae=s[pe],ce=a[pe],!s.hasOwnProperty(pe)||ae===ce||ae===void 0&&ce===void 0||Lf(e,n,pe,ae,s,ce);return}}for(var Z in a)ae=a[Z],a.hasOwnProperty(Z)&&ae!=null&&!s.hasOwnProperty(Z)&&Ht(e,n,Z,null,s,ae);for(_e in s)ae=s[_e],ce=a[_e],!s.hasOwnProperty(_e)||ae===ce||ae==null&&ce==null||Ht(e,n,_e,ae,s,ce)}function jg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&jg(v)){for(v=0,A=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],te=z.startTime;if(te>A)break;var pe=z.transferSize,_e=z.initiatorType;pe&&jg(_e)&&(z=z.responseEnd,v+=pe*(z<A?1:(A-te)/(z-te)))}if(--s,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,Pf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Xg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function Hx(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var qg=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(e){return Yg.resolve(null).then(e).catch(jx)}:qg;function jx(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function Zg(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),ms(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ar]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Eo(e.ownerDocument.body);a=u}while(a);ms(n)}function Kg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Hs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xx(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ar])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Wx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Qg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function Jg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function $g(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function e0(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hs(e)}var fi=new Map,t0=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=B.d;B.d={f:Yx,r:Zx,D:Kx,C:Qx,L:Jx,m:$x,X:tb,S:eb,M:nb};function Yx(){var e=ua.f(),n=kl();return e||n}function Zx(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?_m(n):ua.r(e)}var ds=typeof document>"u"?null:document;function n0(e,n,a){var s=ds;if(s&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),t0.has(u)||(t0.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),En(n,"link",e),X(n),s.head.appendChild(n)))}}function Kx(e){ua.D(e),n0("dns-prefetch",e,null)}function Qx(e,n){ua.C(e,n),n0("preconnect",e,n)}function Jx(e,n,a){ua.L(e,n,a);var s=ds;if(s&&e&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(e)+'"]';var f=u;switch(n){case"style":f=hs(e);break;case"script":f=ps(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Mo(f))||n==="script"&&s.querySelector(To(f))||(n=s.createElement("link"),En(n,"link",e),X(n),s.head.appendChild(n)))}}function $x(e,n){ua.m(e,n);var a=ds;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(s)+'"][href="'+at(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ps(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}s=a.createElement("link"),En(s,"link",e),X(s),a.head.appendChild(s)}}}function eb(e,n,a){ua.S(e,n,a);var s=ds;if(s&&e){var u=w(s).hoistableStyles,f=hs(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=s.querySelector(Mo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Vf(e,a);var z=v=s.createElement("link");X(z),En(z,"link",e),z._p=new Promise(function(te,pe){z.onload=te,z.onerror=pe}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Zl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function tb(e,n){ua.X(e,n);var a=ds;if(a&&e){var s=w(a).hoistableScripts,u=ps(e),f=s.get(u);f||(f=a.querySelector(To(u)),f||(e=_({src:e,async:!0},n),(n=fi.get(u))&&Gf(e,n),f=a.createElement("script"),X(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function nb(e,n){ua.M(e,n);var a=ds;if(a&&e){var s=w(a).hoistableScripts,u=ps(e),f=s.get(u);f||(f=a.querySelector(To(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&Gf(e,n),f=a.createElement("script"),X(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function i0(e,n,a,s){var u=(u=ie.current)?Yl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=w(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hs(a.href);var f=w(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Mo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||ib(u,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=w(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function hs(e){return'href="'+at(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function a0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ib(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),X(n),e.head.appendChild(n))}function ps(e){return'[src="'+at(e)+'"]'}function To(e){return"script[async]"+e}function r0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+at(a.href)+'"]');if(s)return n.instance=s,X(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),X(s),En(s,"style",u),Zl(s,a.precedence,e),n.instance=s;case"stylesheet":u=hs(a.href);var f=e.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;s=a0(a),(u=fi.get(u))&&Vf(s,u),f=(e.ownerDocument||e).createElement("link"),X(f);var v=f;return v._p=new Promise(function(A,z){v.onload=A,v.onerror=z}),En(f,"link",s),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=ps(a.src),(u=e.querySelector(To(f)))?(n.instance=u,X(u),u):(s=a,(u=fi.get(f))&&(s=_({},a),Gf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),En(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zl(s,a.precedence,e));return n.instance}function Zl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var A=s[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function s0(e,n,a){if(Kl===null){var s=new Map,u=Kl=new Map;u.set(a,s)}else u=Kl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ar]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=s.get(v);A?A.push(f):s.set(v,[f])}}return s}function o0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ab(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function l0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rb(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(s.href),f=n.querySelector(Mo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,s=a0(s),(u=fi.get(u))&&Vf(s,u),f=f.createElement("link"),X(f);var v=f;v._p=new Promise(function(A,z){v.onload=A,v.onerror=z}),En(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function sb(e,n){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*zx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function $l(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(ob,e),Jl=null,Ql.call(e))}function ob(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var s=a.get(null);else{a=new Map,Jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=Ql.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:F,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function lb(e,n,a,s,u,f,v,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function c0(e,n,a,s,u,f,v,A,z,te,pe,_e){return e=new lb(e,n,a,v,z,te,pe,_e,A),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Au(f),e}function u0(e){return e?(e=Xr,e):Xr}function f0(e,n,a,s,u,f){u=u0(u),s.context===null?s.context=u:s.pendingContext=u,s=Ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=La(e,s,n),a!==null&&(Hn(a,e,n),io(a,e,n))}function d0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){d0(e,n),(e=e.alternate)&&d0(e,n)}function h0(e){if(e.tag===13||e.tag===31){var n=cr(e,67108864);n!==null&&Hn(n,e,67108864),Xf(e,67108864)}}function p0(e){if(e.tag===13||e.tag===31){var n=Jn();n=Pr(n);var a=cr(e,n);a!==null&&Hn(a,e,n),Xf(e,n)}}var ec=!0;function cb(e,n,a,s){var u=L.T;L.T=null;var f=B.p;try{B.p=2,Wf(e,n,a,s)}finally{B.p=f,L.T=u}}function ub(e,n,a,s){var u=L.T;L.T=null;var f=B.p;try{B.p=8,Wf(e,n,a,s)}finally{B.p=f,L.T=u}}function Wf(e,n,a,s){if(ec){var u=qf(s);if(u===null)Uf(e,n,s,tc,a),g0(e,s);else if(db(u,e,n,a,s))s.stopPropagation();else if(g0(e,s),n&4&&-1<fb.indexOf(e)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ee(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var z=1<<31-Le(v);A.entanglements[1]|=z,v&=~z}Pi(f),(Nt&6)===0&&(Bl=E()+500,bo(0))}}break;case 31:case 13:A=cr(f,2),A!==null&&Hn(A,f,2),kl(),Xf(f,2)}if(f=qf(s),f===null&&Uf(e,n,s,tc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Uf(e,n,s,null,a)}}function qf(e){return e=Yc(e),Yf(e)}var tc=null;function Yf(e){if(tc=null,e=Ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function m0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case me:return 2;case be:return 8;case he:case je:return 32;case Re:return 268435456;default:return 32}default:return 32}}var Zf=!1,ja=null,Xa=null,Wa=null,wo=new Map,Co=new Map,qa=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g0(e,n){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function Ro(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&h0(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function db(e,n,a,s,u){switch(n){case"focusin":return ja=Ro(ja,e,n,a,s,u),!0;case"dragenter":return Xa=Ro(Xa,e,n,a,s,u),!0;case"mouseover":return Wa=Ro(Wa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Ro(wo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,Ro(Co.get(f)||null,e,n,a,s,u)),!0}return!1}function v0(e){var n=Ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Br(e.priority,function(){p0(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Br(e.priority,function(){p0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);qc=s,a.target.dispatchEvent(s),qc=null}else return n=Ta(a),n!==null&&h0(n),e.blockedOn=a,!1;n.shift()}return!0}function _0(e,n,a){nc(e)&&a.delete(n)}function hb(){Zf=!1,ja!==null&&nc(ja)&&(ja=null),Xa!==null&&nc(Xa)&&(Xa=null),Wa!==null&&nc(Wa)&&(Wa=null),wo.forEach(_0),Co.forEach(_0)}function ic(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,hb)))}var ac=null;function x0(e){ac!==e&&(ac=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Yf(s||a)===null)continue;break}var f=Ta(a);f!==null&&(e.splice(n,3),n-=3,Wu(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ms(e){function n(z){return ic(z,e)}ja!==null&&ic(ja,e),Xa!==null&&ic(Xa,e),Wa!==null&&ic(Wa,e),wo.forEach(n),Co.forEach(n);for(var a=0;a<qa.length;a++){var s=qa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)v0(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[hn]||null;if(typeof f=="function")v||x0(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[hn]||null)A=v.formAction;else if(Yf(u)!==null)continue}else A=v.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),x0(a)}}}function b0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Kf(e){this._internalRoot=e}rc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();f0(a,s,e,n,null,null)},rc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;f0(e.current,2,null,e,null,null),kl(),n[Wi]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ni();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&v0(e)}};var y0=t.version;if(y0!=="19.2.4")throw Error(r(527,y0,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var pb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Me=sc.inject(pb),Se=sc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Cm,f=Rm,v=Dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=c0(e,1,!1,null,null,a,s,null,u,f,v,b0),e[Wi]=n.current,Nf(e),new Kf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Cm,v=Rm,A=Dm,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=c0(e,1,!0,n,a??null,s,u,z,f,v,A,b0),n.context=u0(null),a=n.current,s=Jn(),s=Pr(s),u=Ua(s),u.callback=null,La(a,u,s),a=s,n.current.lanes=a,Rn(n,a),Pi(n),e[Wi]=n.current,Nf(e),new rc(n)},No.version="19.2.4",No}var N0;function Mb(){if(N0)return $f.exports;N0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$f.exports=Eb(),$f.exports}var Tb=Mb();const Dh={genesis:{name:"Genesis",years:"2013-2015",color:"#8B4513"},frontier:{name:"Frontier",years:"2015",color:"#1B1B1B"},homestead:{name:"Homestead",years:"2016",color:"#2D5016"},metropolis:{name:"Metropolis",years:"2017-2019",color:"#4A1A7A"},istanbul:{name:"Istanbul",years:"2019-2020",color:"#6B21A8"},beacon:{name:"Beacon Chain Era",years:"2020-2022",color:"#FF6B35"},merge:{name:"The Merge",years:"2022",color:"#00D395"},shanghai:{name:"Shanghai",years:"2023",color:"#3B82F6"},cancun:{name:"Cancun-Deneb",years:"2024",color:"#06B6D4"},pectra:{name:"Pectra",years:"2025",color:"#8B5CF6"},fusaka:{name:"Fusaka",years:"2025-2026",color:"#EC4899"}},oc=[{id:"whitepaper",type:"research",date:"2013-11-27",title:"Ethereum Whitepaper",summary:"Vitalik Buterin publishes the Ethereum whitepaper, proposing a blockchain with a Turing-complete programming language.",era:"genesis",importance:"major",content:'At 19 years old, Vitalik Buterin published "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform." The whitepaper proposed a blockchain that could run arbitrary code, not just simple transactions. This would become the foundation for DeFi, NFTs, and the entire smart contract ecosystem.',tags:["research","protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",links:[{label:"Original Whitepaper",url:"https://ethereum.org/en/whitepaper/"},{label:"Whitepaper (GitHub)",url:"https://github.com/ethereum/wiki/wiki/White-Paper"},{label:"Vitalik's Blog (2013)",url:"https://web.archive.org/web/20131228111141/http://vitalik.ca/"}]},{id:"bitcoin-miami",type:"milestone",date:"2014-01-26",title:"Bitcoin Miami Announcement",summary:"Vitalik publicly announces Ethereum at the North American Bitcoin Conference in Miami.",imageUrl:"https://i.ytimg.com/vi/l9dpjN3Mwps/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNigbMA8=&amp;rs=AOn4CLAOwRoeSENEOCPrmpF3A7pb6Au-MQ",era:"genesis",importance:"major",content:"Vitalik Buterin took the stage at the North American Bitcoin Conference in Miami to publicly announce Ethereum. The announcement attracted early contributors including Gavin Wood, who would write the Yellow Paper, and many of the future co-founders.",tags:["social"],links:[{label:"Conference Announcement (video)",url:"https://www.youtube.com/watch?v=l9dpjN3Mwps"},{label:"Early Ethereum Blog",url:"https://web.archive.org/web/20140208030136/http://ethereum.org/"}]},{id:"yellow-paper",type:"research",date:"2014-04-01",title:"Yellow Paper Published",summary:"Gavin Wood publishes the Ethereum Yellow Paper — the formal technical specification that defines the Ethereum Virtual Machine.",imageUrl:"https://opengraph.githubassets.com/1a8c6a64f87c6c7ec155a7e91edac153246de7ef5e831fe200d26c98c1c88a1e/ethereum/yellowpaper",era:"genesis",importance:"major",content:`Dr. Gavin Wood published "Ethereum: A Secure Decentralised Generalised Transaction Ledger" — the Yellow Paper. While Vitalik's whitepaper described what Ethereum could do, the Yellow Paper specified exactly how it would work. It defined the EVM opcodes, gas costs, state transitions, and cryptographic primitives in mathematical notation. This document became the reference for all Ethereum client implementations and remains essential for anyone building at the protocol level.`,tags:["research","protocol"],links:[{label:"Yellow Paper (PDF)",url:"https://ethereum.github.io/yellowpaper/paper.pdf"},{label:"Yellow Paper (GitHub)",url:"https://github.com/ethereum/yellowpaper"},{label:"Gavin Wood announcing Yellow Paper",url:"https://blog.ethereum.org/2014/05/06/the-ethereum-project-launches"}]},{id:"the-spaceship",type:"milestone",date:"2014-06-01",title:"The Spaceship (Zug)",summary:'Ethereum co-founders gather in a rented house in Zug, Switzerland — nicknamed "The Spaceship" — to build the protocol.',era:"genesis",importance:"significant",content:`The eight Ethereum co-founders — Vitalik Buterin, Gavin Wood, Charles Hoskinson, Anthony Di Iorio, Joseph Lubin, Jeffrey Wilcke, Mihai Alisie, and Amir Chetrit — rented a house in Zug, Switzerland they called "The Spaceship." Here they worked intensively on the protocol, debated governance, and prepared for the crowdsale. The tensions and breakthroughs from this period are documented in Laura Shin's "The Cryptopians."`,tags:["social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Zug_Altstadt.jpg/1280px-Zug_Altstadt.jpg",links:[{label:"The Cryptopians (book)",url:"https://www.harpercollins.com/products/the-cryptopians-laura-shin"},{label:"Ethereum History (ethereum.org)",url:"https://ethereum.org/en/history/"}]},{id:"ethereum-foundation",type:"milestone",date:"2014-07-14",title:"Ethereum Foundation Founded",summary:"Stiftung Ethereum is established in Zug, Switzerland — a non-profit to steward Ethereum's development.",era:"genesis",importance:"significant",content:`The Ethereum Foundation (Stiftung Ethereum) was legally incorporated in Zug, Switzerland as a non-profit foundation. This gave Ethereum a legal entity to conduct the crowdsale, hold funds, and coordinate development. Switzerland's "Crypto Valley" reputation began here — Zug's friendly regulatory environment made it the natural home for blockchain organizations.`,tags:["social","protocol"],links:[{label:"Ethereum Foundation",url:"https://ethereum.foundation/"},{label:"About the EF",url:"https://ethereum.org/en/foundation/"},{label:"Crypto Valley origins",url:"https://cryptovalley.swiss/"}]},{id:"crowdsale",type:"milestone",date:"2014-07-22",title:"Ethereum Crowdsale",summary:"The 42-day crowdsale raises 31,591 BTC (~$18M), selling 60 million ETH to early believers.",era:"genesis",importance:"major",content:"Ethereum's crowdsale ran from July 22 to September 2, 2014. Contributors sent Bitcoin in exchange for ETH at a rate starting at 2000 ETH per BTC (decreasing over time). The sale raised 31,591 BTC, worth approximately $18 million at the time. 60 million ETH was allocated to crowdsale participants, with another 12 million going to the Ethereum Foundation and early contributors.",tags:["protocol","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1200px-Ethereum_logo_translucent.svg.png",links:[{label:"Crowdsale Announcement",url:"https://blog.ethereum.org/2014/07/22/launching-the-ether-sale"},{label:"Terms & Conditions (archive)",url:"https://web.archive.org/web/20140722213508/https://www.ethereum.org/pdf/TermsAndConditionsOfTheEthereumGenesisSale.pdf"}]},{id:"devcon-0",type:"milestone",date:"2014-11-24",title:"DevCon 0 (Berlin)",summary:"The first Ethereum developer conference, held before mainnet launch.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"genesis",importance:"significant",content:"DevCon 0 gathered early Ethereum developers in Berlin before mainnet even launched. This intimate gathering set the tone for Ethereum's developer-first culture.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=0"}]},{id:"olympic-testnet",type:"milestone",date:"2015-05-09",title:"Olympic Testnet",summary:"Ethereum's final public testnet launches, offering 25,000 ETH in bug bounties. The stress test before mainnet.",era:"genesis",importance:"significant",content:"Olympic was Ethereum's ninth and final proof-of-concept testnet before mainnet launch. The Ethereum Foundation offered 25,000 ETH in bounties for stress testing — finding bugs, pushing transaction limits, and testing edge cases. Participants competed to break the network, helping ensure Frontier would be robust. The testnet ran for about two months before Frontier launched.",tags:["protocol"],links:[{label:"Olympic Announcement",url:"https://blog.ethereum.org/2015/05/09/olympic-frontier-pre-release"},{label:"Olympic Rewards",url:"https://blog.ethereum.org/2015/08/26/olympic-rewards-announced"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#olympic"}]},{id:"frontier-launch",type:"milestone",date:"2015-07-30",blockNumber:0,title:"Frontier Launch",summary:"Ethereum mainnet goes live. The genesis block is mined, marking the birth of the world computer.",era:"frontier",importance:"major",content:'Ethereum officially launched on July 30, 2015 with the Frontier release. This was a "beta" release intended for developers to start building and mining. The genesis block contained 8,893 transactions from the presale, distributing 72 million ETH.',tags:["protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png",links:[{label:"Genesis Block",url:"https://etherscan.io/block/0"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2015/07/30/ethereum-launches"},{label:"Vitalik's Launch Post",url:"https://web.archive.org/web/20150801011623/https://blog.ethereum.org/2015/07/30/ethereum-launches/"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#frontier"}]},{id:"frontier-thawing",type:"hard_fork",date:"2015-09-07",blockNumber:2e5,title:"Frontier Thawing",summary:"First unplanned hard fork, increased gas limit from 5,000 to enable actual transactions.",imageUrl:"https://ethereum.org/images/home/hero.png",era:"frontier",importance:"significant",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/200000"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#frontier-thawing"}]},{id:"homestead-fork",type:"hard_fork",date:"2016-03-14",blockNumber:115e4,title:"Homestead",summary:"First planned hard fork. Removed canary contracts, adjusted gas costs, enabled contract creation via transactions.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"homestead",importance:"major",relatedEips:[2,7,8],content:`The Homestead release marked Ethereum's transition from beta to a more stable platform. Key changes included:
- EIP-2: Adjusted contract creation gas
- EIP-7: Added DELEGATECALL opcode
- EIP-8: Forward compatibility for networking protocol`,tags:["protocol"],links:[{label:"Homestead Block",url:"https://etherscan.io/block/1150000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2016/02/29/homestead-release"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#homestead"},{label:"EIP-2: Homestead Gas Changes",url:"https://eips.ethereum.org/EIPS/eip-2"}]},{id:"the-dao-launch",type:"milestone",date:"2016-04-30",blockNumber:1428757,title:"The DAO Launches",summary:"Largest crowdfund in history raises $150M for a decentralized venture capital fund.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Christoph_Jentzsch.jpg/960px-Christoph_Jentzsch.jpg",era:"homestead",importance:"major",content:"The DAO (Decentralized Autonomous Organization) launched as an ambitious experiment in decentralized governance. It raised over $150 million in ETH through a 28-day crowdsale — the largest crowdfunding campaign ever at the time. Token holders would vote on which projects to fund. The experiment would end in disaster just weeks later.",tags:["defi","social"],links:[{label:"The DAO Wikipedia",url:"https://en.wikipedia.org/wiki/The_DAO_(organization)"},{label:"The DAO Site (archive)",url:"https://web.archive.org/web/20160503105427/https://daohub.org/"}]},{id:"dao-hack",type:"controversy",date:"2016-06-17",blockNumber:1718497,title:"The DAO Hack",summary:"3.6 million ETH (~$50M) drained from The DAO smart contract through a reentrancy vulnerability.",era:"homestead",importance:"major",content:"The DAO was a decentralized venture capital fund that raised $150M in ETH. A vulnerability in its code allowed an attacker to recursively call the withdraw function, draining funds before the balance was updated. This led to one of crypto's most controversial decisions.",tags:["security","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/TheDAO_Logo.svg/1200px-TheDAO_Logo.svg.png",sourceUrl:"https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability",links:[{label:"Ethereum Foundation Statement",url:"https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability"},{label:"Community Discussion (archive)",url:"https://web.archive.org/web/20160618140914/https://www.reddit.com/r/ethereum/comments/4oi2ta/i_think_thedao_is_getting_drained_right_now/"},{label:"Technical Postmortem",url:"https://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/"}]},{id:"dao-fork",type:"hard_fork",date:"2016-07-20",blockNumber:192e4,title:"DAO Fork",summary:"Controversial hard fork to recover DAO funds. Led to Ethereum Classic split.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"homestead",importance:"major",relatedEips:[779],content:'The Ethereum community voted to hard fork and return the stolen DAO funds. This was controversial as it violated "code is law" principles. Those who disagreed continued the original chain as Ethereum Classic (ETC).',tags:["protocol","security","social"],links:[{label:"EIP-779: DAO Fork Spec",url:"https://eips.ethereum.org/EIPS/eip-779"},{label:"Hard Fork Block",url:"https://etherscan.io/block/1920000"},{label:"Carbonvote Results",url:"https://web.archive.org/web/20160715215142/http://carbonvote.com/"},{label:"EF Blog: To Fork or Not to Fork",url:"https://blog.ethereum.org/2016/07/15/to-fork-or-not-to-fork"},{label:"EF Blog: DAO Wars (Soft Fork)",url:"https://blog.ethereum.org/en/2016/06/24/dao-wars-youre-voice-soft-fork-dilemma"}]},{id:"byzantium",type:"hard_fork",date:"2017-10-16",blockNumber:437e4,title:"Byzantium",summary:"First part of Metropolis. Added privacy features, delayed difficulty bomb, reduced block reward.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"metropolis",importance:"major",relatedEips:[100,140,196,197,198,211,214,658],content:"Byzantium introduced crucial cryptographic primitives for zkSNARKs (EIP-196, EIP-197), laying groundwork for future privacy and scaling solutions. Block rewards were reduced from 5 to 3 ETH.",tags:["protocol"],links:[{label:"Byzantium Block",url:"https://etherscan.io/block/4370000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2017/10/12/byzantium-hf-announcement"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#byzantium"},{label:"EIP-196: zkSNARK Precompiles",url:"https://eips.ethereum.org/EIPS/eip-196"},{label:"AllCoreDevs #22 (Byzantium Release)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%2022.md"},{label:"Byzantium Hard Fork Spec",url:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-609.md"}]},{id:"vitalik-pos-philosophy",type:"research",date:"2016-12-30",blockNumber:285e4,approximateBlock:!0,title:"A Proof of Stake Design Philosophy",summary:"Vitalik articulates the philosophical foundation for why Proof of Stake is superior to Proof of Work.",imageUrl:"https://miro.medium.com/v2/da:true/bc1f8416df0cad099e43cda2872716e5864f18a73bda2a7547ea082aca9b5632",era:"homestead",importance:"significant",content:`In this influential essay, Vitalik laid out why Proof of Stake was not just technically superior but philosophically aligned with Ethereum's values. Key insight: "The 'cypherpunk spirit' is fundamentally about the public good" and PoS better achieves this by making attacks expensive in human terms, not just electricity. This essay became the intellectual foundation for Ethereum's multi-year journey to The Merge.`,tags:["research","protocol"],sourceUrl:"https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51",links:[{label:"Original Essay (Medium)",url:"https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51"},{label:"Archived Copy",url:"https://vitalik.eth.limo/general/2016/12/29/pos_design_philosophy.html"}]},{id:"vitalik-decentralization",type:"research",date:"2017-02-06",blockNumber:312e4,approximateBlock:!0,title:"The Meaning of Decentralization",summary:"Vitalik defines the three axes of decentralization: architectural, political, and logical.",imageUrl:"https://miro.medium.com/v2/resize:fit:547/1*WG5_xDDwHv0lMaVUYLNbVA.png",era:"homestead",importance:"significant",content:`One of Vitalik's most-cited essays, this piece dissected what "decentralization" actually means. He identified three separate axes: architectural (physical computers), political (individuals/organizations controlling them), and logical (interface and data structures). Key takeaway: "Blockchains are politically decentralized and architecturally decentralized, but they are logically centralized." This framework became foundational for evaluating decentralization claims.`,tags:["research","social"],sourceUrl:"https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274",links:[{label:"Original Essay (Medium)",url:"https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274"}]},{id:"edcon-2017",type:"milestone",date:"2017-02-17",blockNumber:315e4,approximateBlock:!0,title:"EDCON 2017 (Paris)",summary:"First Community Ethereum Development Conference in Paris. Foundation of annual dev gathering.",era:"homestead",importance:"significant",content:"The inaugural EDCON (Community Ethereum Development Conference) took place at the École Supérieure de Commerce de Paris. It established what would become an annual tradition of bringing together Ethereum developers and researchers from around the world, with a focus on protocol development and real-world applications.",tags:["social"],links:[{label:"EDCON Website",url:"https://www.edcon.io/"},{label:"About EDCON History",url:"https://www.edcon.io/en/about"}]},{id:"raiden-network",type:"scaling",date:"2017-03-01",blockNumber:335e4,approximateBlock:!0,title:"Raiden Network Development",summary:"State channels for Ethereum — like Lightning for Bitcoin. Early scaling attempt before rollups.",era:"homestead",importance:"significant",content:'Raiden Network was one of the earliest Ethereum scaling attempts, using state channels for off-chain payments. From their 2022 post-mortem: "The demand for a scalable payment solution is way lower than we and the Ethereum community originally anticipated." It got eclipsed by the more general-purpose rollup architecture.',tags:["scaling"],links:[{label:"Raiden Network",url:"https://raiden.network/"},{label:"Raiden Postmortem (2022)",url:"https://medium.com/raiden-network/raiden-has-reached-the-end-of-the-road-92f063d4f79c"}]},{id:"plasma-whitepaper",type:"scaling",date:"2017-08-11",blockNumber:415e4,approximateBlock:!0,title:"Plasma Whitepaper",summary:"Vitalik and Joseph Poon publish Plasma, proposing child chains for scaling.",era:"metropolis",importance:"major",content:"Plasma proposed a framework for creating child chains that periodically commit to Ethereum mainnet. While Plasma itself didn't achieve widespread adoption due to data availability challenges, it laid the intellectual groundwork for rollups.",tags:["scaling","research"],links:[{label:"Plasma Whitepaper",url:"https://plasma.io/plasma-deprecated.pdf"},{label:"Plasma Group",url:"https://plasma.group/"},{label:"Learn Plasma",url:"https://www.learnplasma.org/"}]},{id:"cryptopunks-launch",type:"application",date:"2017-06-23",blockNumber:3918e3,approximateBlock:!0,title:"CryptoPunks Launch",summary:"10,000 unique pixel art characters launch — among the first NFTs on Ethereum.",era:"homestead",importance:"significant",content:"Larva Labs released CryptoPunks: 10,000 algorithmically generated 24x24 pixel characters, each unique. They were claimable for free (just gas). Initially obscure, CryptoPunks later became cultural icons selling for millions. They're credited as one of the first NFT projects and inspired the ERC-721 standard.",tags:["nft"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/CryptoPunks_Alien_7804.png/220px-CryptoPunks_Alien_7804.png",links:[{label:"CryptoPunks",url:"https://www.cryptopunks.app/"},{label:"Larva Labs",url:"https://www.larvalabs.com/cryptopunks"},{label:"Early Days Documentary (NFT Now)",url:"https://nftnow.com/features/cryptopunks-documentary-larva-labs-interview/"},{label:"Sotheby's Exhibition Notes",url:"https://www.sothebys.com/en/digital-catalogues/sealed-cryptopunks-five-punks-on-paper"}]},{id:"cryptokitties",type:"application",date:"2017-11-28",blockNumber:4605e3,approximateBlock:!0,title:"CryptoKitties Congestion",summary:"CryptoKitties game congests the network, highlighting scalability challenges.",era:"metropolis",importance:"significant",content:"CryptoKitties, a game for breeding digital cats, became so popular it accounted for 25% of Ethereum traffic. Gas prices spiked and transactions backed up, making clear the urgent need for scaling solutions.",tags:["nft","scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/e/e3/CryptoKitties_logo.png",links:[{label:"CryptoKitties Site (2017 archive)",url:"https://web.archive.org/web/20171202052136/https://www.cryptokitties.co/"},{label:"CryptoKitties Current Site",url:"https://www.cryptokitties.co/"},{label:"BBC News Coverage",url:"https://www.bbc.com/news/technology-42237162"},{label:"Congestion Analysis (archive)",url:"https://web.archive.org/web/20171204144857/https://ethgasstation.info/"}]},{id:"erc-721-final",type:"eip",date:"2018-06-21",blockNumber:58e5,approximateBlock:!0,title:"ERC-721 Standard Finalized",summary:"The NFT standard is finalized, establishing how non-fungible tokens work on Ethereum.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"metropolis",importance:"major",relatedEips:[721],content:"ERC-721, proposed by William Entriken, Dieter Shirley, Jacob Evans, and Nastassia Sachs, became the official standard for non-fungible tokens. Inspired by CryptoPunks and CryptoKitties, it defined how unique tokens should be created, owned, and transferred. This standard enabled the entire NFT ecosystem that followed.",tags:["protocol","nft"],links:[{label:"EIP-721",url:"https://eips.ethereum.org/EIPS/eip-721"},{label:"ethereum.org ERC-721",url:"https://ethereum.org/developers/docs/standards/tokens/erc-721/"}]},{id:"opensea-launch",type:"application",date:"2017-12-20",blockNumber:475e4,approximateBlock:!0,title:"OpenSea Beta Launch",summary:"First open marketplace for NFTs on Ethereum launches, inspired by CryptoKitties.",imageUrl:"https://static.seadn.io/og/generic.jpg",era:"metropolis",importance:"significant",content:"Devin Finzer and Alex Atallah launched OpenSea beta after seeing the CryptoKitties phenomenon. It became the first open marketplace for any NFT on Ethereum. OpenSea would later become the dominant NFT marketplace during the 2021 boom, reaching $5B+ in monthly volume at its peak.",tags:["nft"],links:[{label:"OpenSea",url:"https://opensea.io/"},{label:"Founding Story (About)",url:"https://opensea.io/about"},{label:"Devin Finzer's Blog Posts",url:"https://opensea.io/blog/author/devin-finzer"},{label:"Devin Finzer (Wikipedia)",url:"https://en.wikipedia.org/wiki/Devin_Finzer"}]},{id:"makerdao-launch",type:"application",date:"2017-12-18",blockNumber:475e4,approximateBlock:!0,title:"MakerDAO & DAI Launch",summary:"First decentralized stablecoin launches. DAI maintains $1 peg through over-collateralization.",era:"metropolis",importance:"major",content:"MakerDAO launched DAI, a decentralized stablecoin backed by ETH collateral. Users could lock ETH in Collateralized Debt Positions (CDPs) to mint DAI. This was DeFi's first major primitive and proved smart contracts could create stable value.",tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MakerDAO_Logo.svg/1200px-MakerDAO_Logo.svg.png",links:[{label:"MakerDAO Site (2017 archive)",url:"https://web.archive.org/web/20171220161929/https://makerdao.com/"},{label:"MakerDAO Current Site",url:"https://makerdao.com/"},{label:"DAI Whitepaper",url:"https://makerdao.com/en/whitepaper/"},{label:"Launch Announcement (Reddit)",url:"https://www.reddit.com/r/MakerDAO/comments/7lhqwe/dai_is_now_live/"}]},{id:"constantinople",type:"hard_fork",date:"2019-02-28",blockNumber:728e4,title:"Constantinople/St. Petersburg",summary:"Second part of Metropolis. Cheaper gas for certain operations, delayed difficulty bomb again.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"metropolis",importance:"major",relatedEips:[145,1014,1052,1234,1283],content:"Constantinople was delayed after a reentrancy vulnerability was found in EIP-1283. It launched with St. Petersburg, which removed the problematic EIP. Block rewards reduced to 2 ETH.",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/7280000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2019/02/22/ethereum-constantinople-st-petersburg-upgrade-announcement"},{label:"EIP-1283 Vulnerability",url:"https://medium.com/chainsecurity/constantinople-enables-new-reentrancy-attack-ace4088297d9"},{label:"AllCoreDevs #53 (Constantinople Planning)",url:"https://github.com/ethereum/pm/issues/66"},{label:"AllCoreDevs #54 (St. Petersburg)",url:"https://github.com/ethereum/pm/issues/74"}]},{id:"uniswap-v1",type:"application",date:"2018-11-02",blockNumber:664e4,approximateBlock:!0,title:"Uniswap V1 Launch",summary:"Hayden Adams launches Uniswap, the first automated market maker (AMM) DEX on Ethereum.",era:"metropolis",importance:"major",content:"Uniswap introduced the x*y=k constant product formula, enabling trustless token swaps without order books. Anyone could provide liquidity and earn fees. This simple design would spark DeFi Summer and inspire countless forks.",tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1200px-Uniswap_Logo.svg.png",links:[{label:"Hayden Adams Announcement",url:"https://twitter.com/haaborlmyHadams/status/1058376395108376577"},{label:"Uniswap V1 Docs (archive)",url:"https://web.archive.org/web/20181207013118/https://docs.uniswap.io/"},{label:"Uniswap Current Site",url:"https://uniswap.org/"},{label:"Original Reddit Post",url:"https://www.reddit.com/r/ethereum/comments/9udkhy/uniswap_a_unique_exchange/"}]},{id:"mastering-ethereum",type:"milestone",date:"2018-12-01",title:"Mastering Ethereum Published",summary:'Andreas Antonopoulos and Gavin Wood publish "Mastering Ethereum", the definitive technical guide.',era:"metropolis",importance:"significant",content:'"Mastering Ethereum: Building Smart Contracts and DApps" became the go-to technical reference for Ethereum developers. Written by Andreas Antonopoulos (author of Mastering Bitcoin) and Gavin Wood (Ethereum co-founder, Yellow Paper author), it covered everything from basic concepts to advanced smart contract development.',tags:["social","research"],links:[{label:"O'Reilly Page",url:"https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/"},{label:"GitHub (Open Source)",url:"https://github.com/ethereumbook/ethereumbook"},{label:"Amazon",url:"https://www.amazon.com/Mastering-Ethereum-Building-Smart-Contracts/dp/1491971940"}]},{id:"istanbul-fork",type:"hard_fork",date:"2019-12-08",blockNumber:9069e3,title:"Istanbul",summary:"Gas cost adjustments for certain opcodes, improved SNARK efficiency, enabled layer 2 solutions.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"istanbul",importance:"major",relatedEips:[152,1108,1344,1884,2028,2200],content:"Istanbul focused on interoperability with Zcash, cheaper precompiles for SNARKs, and more accurate gas costs for storage-heavy operations.",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/9069000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2019/11/20/ethereum-istanbul-upgrade-announcement"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#istanbul"},{label:"AllCoreDevs #66 (Istanbul Planning)",url:"https://github.com/ethereum/pm/issues/107"},{label:"AllCoreDevs #69 (Istanbul Finalization)",url:"https://github.com/ethereum/pm/issues/118"}]},{id:"rollup-research",type:"scaling",date:"2021-01-05",title:"Rollups Emerge",summary:"Vitalik publishes 'An Incomplete Guide to Rollups', establishing them as the primary L2 strategy.",era:"beacon",importance:"major",content:`Rollups execute transactions off-chain but post data on-chain, inheriting Ethereum's security. Two types emerged: Optimistic (assume valid, fraud proofs) and ZK (validity proofs). This marked the shift to a "rollup-centric roadmap."`,tags:["scaling","research"],sourceUrl:"https://vitalik.eth.limo/general/2021/01/05/rollup.html",links:[{label:"An Incomplete Guide to Rollups",url:"https://vitalik.eth.limo/general/2021/01/05/rollup.html"},{label:"Rollup-Centric Roadmap (Oct 2020)",url:"https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698"},{label:"ethereum.org: Layer 2",url:"https://ethereum.org/en/layer-2/"}]},{id:"muir-glacier",type:"hard_fork",date:"2020-01-02",blockNumber:92e5,title:"Muir Glacier",summary:"Emergency fork to delay the difficulty bomb by 4 million blocks.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"istanbul",importance:"minor",relatedEips:[2384],tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/9200000"},{label:"EIP-2384",url:"https://eips.ethereum.org/EIPS/eip-2384"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2019/12/23/ethereum-muir-glacier-upgrade-announcement"},{label:"AllCoreDevs #76 (Muir Glacier)",url:"https://github.com/ethereum/pm/issues/135"}]},{id:"uniswap-v2",type:"application",date:"2020-05-18",blockNumber:101e5,approximateBlock:!0,title:"Uniswap V2 Launch",summary:"V2 adds ERC-20/ERC-20 pairs, flash swaps, and price oracles.",imageUrl:"https://images.ctfassets.net/oc3ca6rftwdu/6J1AgG9n8TBXjiJt5hjP6X/304b442cf5f3ddfacd9aa39c74dfc06e/featured.jpeg?w=1200&amp;h=900&amp;q=100&amp;fit=crop",era:"beacon",importance:"significant",content:"Uniswap V2 enabled direct token-to-token swaps (no ETH intermediary), flash swaps for arbitrage, and time-weighted average price (TWAP) oracles. These features made Uniswap a foundational DeFi primitive.",tags:["defi"],links:[{label:"Uniswap V2 Announcement",url:"https://blog.uniswap.org/uniswap-v2"},{label:"V2 Factory Contract",url:"https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"},{label:"V2 Documentation",url:"https://docs.uniswap.org/contracts/v2/overview"}]},{id:"aave-launch",type:"application",date:"2020-01-08",blockNumber:92e5,approximateBlock:!0,title:"Aave Mainnet Launch",summary:"Aave launches its liquidity pool-based lending protocol, pioneering flash loans.",era:"istanbul",importance:"significant",content:'Aave (Finnish for "ghost") relaunched from ETHLend with a revolutionary pool-based lending model. Unlike peer-to-peer matching, users deposited into shared pools and borrowed against them. Aave also introduced flash loans — uncollateralized loans repaid within a single transaction — enabling new DeFi primitives like arbitrage and liquidation bots.',tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Aave_Logo.svg/1200px-Aave_Logo.svg.png",links:[{label:"Aave",url:"https://aave.com/"},{label:"Aave Documentation",url:"https://docs.aave.com/"},{label:"ETHLend to Aave History (Wikipedia)",url:"https://en.wikipedia.org/wiki/Aave"},{label:"The Road to $3B (Finematics)",url:"https://finematics.com/aave-explained/"}]},{id:"curve-launch",type:"application",date:"2020-01-20",blockNumber:94e5,approximateBlock:!0,title:"Curve Finance Launch",summary:"Curve launches the first AMM optimized for stablecoin swaps with minimal slippage.",imageUrl:"https://cdn.jsdelivr.net/gh/curvefi/curve-assets/branding/logo.png",era:"istanbul",importance:"significant",content:'Curve Finance launched as a specialized AMM for stablecoins and pegged assets. Its bonding curve algorithm enabled swaps between stablecoins (DAI, USDC, USDT) with far less slippage than Uniswap. Curve became critical DeFi infrastructure, later adding the CRV token and "Curve Wars" for liquidity incentives.',tags:["defi"],links:[{label:"Curve Finance",url:"https://curve.fi/"},{label:"Curve Documentation",url:"https://resources.curve.fi/"},{label:"Rise of the Home of Stablecoins",url:"https://news.curve.finance/curve-finance-the-rise-of-the-home-of-stablecoins/"},{label:"How Curve Powers Stablecoin Trading (Cyfrin)",url:"https://www.cyfrin.io/blog/what-is-curve-finance-and-how-it-powers-stablecoin-trading"}]},{id:"defi-tvl-1b",type:"milestone",date:"2020-02-06",blockNumber:94e5,approximateBlock:!0,title:"DeFi TVL Hits $1 Billion",summary:"Total value locked in DeFi protocols crosses $1 billion for the first time.",era:"istanbul",importance:"major",content:"A symbolic milestone: the value locked in DeFi protocols crossed $1 billion. MakerDAO held the majority with its DAI stablecoin system. This was still early days — within months, DeFi Summer would explode this number 10x.",tags:["tvl","defi"],links:[{label:"CoinDesk: Why DeFi's Billion-Dollar Milestone Matters",url:"https://www.coindesk.com/markets/2020/02/07/why-defis-billion-dollar-milestone-matters"},{label:"DeFiLlama Historical Data",url:"https://defillama.com/"}]},{id:"compound-governance",type:"application",date:"2020-06-15",blockNumber:103e5,approximateBlock:!0,title:"Compound COMP Token & DeFi Summer",summary:'Compound distributes COMP tokens, igniting "DeFi Summer" and yield farming mania.',era:"beacon",importance:"major",content:`Compound's COMP token distribution created a new paradigm: "liquidity mining." Users earned governance tokens for providing liquidity. This sparked DeFi Summer 2020, with total value locked (TVL) exploding from $1B to $10B+ in months.`,tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Compound-comp-logo.svg/1200px-Compound-comp-logo.svg.png",links:[{label:"COMP Distribution Announcement",url:"https://medium.com/compound-finance/expanding-compound-governance-ce13fcd4fe36"},{label:"Compound Site",url:"https://compound.finance/"},{label:"DeFi Summer Coverage (Coindesk)",url:"https://www.coindesk.com/markets/2020/10/14/the-defi-summer-of-2020-and-what-it-means-for-ethereum/"}]},{id:"yearn-launch",type:"application",date:"2020-07-17",blockNumber:105e5,approximateBlock:!0,title:"Yearn Finance & YFI",summary:'Andre Cronje launches Yearn, with "fair launch" of YFI token — no premine, no VCs.',era:"beacon",importance:"significant",content:"Yearn automated yield optimization strategies. Its YFI token launch with zero premine, no founder allocation, and pure community distribution became legendary. YFI went from $0 to $40,000 in weeks.",tags:["defi"],links:[{label:"Andre Cronje Announcement",url:"https://medium.com/iearn/yfi-df84573db81"},{label:"Yearn Finance",url:"https://yearn.fi/"},{label:"YFI Token",url:"https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"},{label:"Andre on Fair Launch (Unchained)",url:"https://unchainedcrypto.com/andre-cronje-of-yearn-finance-on-yfi-and-the-fair-launch-im-lazy/"},{label:"Andre Cronje Profile (CoinDesk)",url:"https://www.coindesk.com/markets/2020/12/08/andre-cronje-defi-expressionist"}]},{id:"defi-tvl-10b",type:"milestone",date:"2020-09-20",blockNumber:109e5,approximateBlock:!0,title:"DeFi TVL Hits $10 Billion",summary:"Total value locked crosses $10 billion — a 10x increase in just 7 months.",imageUrl:"https://iq.wiki/cdn-cgi/image/width=1200,quality=95/https://ipfs.everipedia.org/ipfs/QmScvpaYXHKV2DwrZd7nRveM3Am5v8k1Pxhvvkyt2ymNzX",era:"beacon",importance:"major",content:'DeFi Summer delivered. From $1B in February to $10B in September — a 900% increase driven by yield farming mania. Uniswap ($1.98B), MakerDAO ($1.95B), and Aave ($1.5B) led the pack. The "money legos" thesis was proving out.',tags:["tvl","defi"],links:[{label:"DeFi TVL History (IQ.wiki)",url:"https://iq.wiki/wiki/tvl"},{label:"2020: Year of DeFi (Yield App)",url:"https://yield.app/blog/a-look-back-at-2020-the-year-of-defi"},{label:"DeFiLlama",url:"https://defillama.com/"}]},{id:"beacon-launch",type:"milestone",date:"2020-12-01",blockNumber:11052984,title:"Beacon Chain Launch",summary:"Ethereum 2.0 Phase 0 launches. Proof of Stake begins on a parallel chain.",era:"beacon",importance:"major",content:"The Beacon Chain launched with 21,063 validators staking 674,000 ETH. This separate chain would run PoS consensus in parallel with mainnet PoW until The Merge.",tags:["protocol"],imageUrl:"https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9c24c/pos-consensus-layer.png",links:[{label:"Beacon Chain Genesis",url:"https://beaconscan.com/slot/0"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2020/11/27/eth2-quick-update-no-21"},{label:"Deposit Contract",url:"https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa"},{label:"ethereum.org Beacon Chain",url:"https://ethereum.org/en/roadmap/beacon-chain/"}]},{id:"lido-launch",type:"application",date:"2020-12-19",blockNumber:11473e3,approximateBlock:!0,title:"Lido Liquid Staking Launch",summary:"Lido launches stETH, enabling liquid staking and unlocking staked ETH liquidity.",era:"beacon",importance:"significant",content:"Lido launched just weeks after the Beacon Chain, solving a critical problem: staked ETH was locked with no withdrawals until a future upgrade. Lido issued stETH tokens representing staked ETH, allowing users to stake while maintaining liquidity. Lido would grow to hold 30%+ of all staked ETH, becoming the largest staking provider and sparking debates about centralization.",tags:["defi","protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lido_DAO_%28LDO%29_Logo.svg/1200px-Lido_DAO_%28LDO%29_Logo.svg.png",links:[{label:"Lido Finance",url:"https://lido.fi/"},{label:"Lido Blog",url:"https://blog.lido.fi/"},{label:"stETH on Etherscan",url:"https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"},{label:"Lido Deep Dive (Coin Bureau)",url:"https://coinbureau.com/review/lido-finance-review/"}]},{id:"lido-self-limit-debate",type:"controversy",date:"2022-06-24",blockNumber:1502e4,approximateBlock:!0,title:"Lido Staking Dominance Debate",summary:"Lido approaches 33% of staked ETH. Community debates self-limiting; Lido votes against.",imageUrl:"https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F10%2Flido-staked-ether-purple.jpg&amp;w=1920&amp;q=75&amp;webp=false",era:"merge",importance:"significant",content:"As Lido approached 33% of all staked ETH — a critical threshold for consensus safety — community concern grew. Danny Ryan and others warned that concentrated stake could enable censorship or attacks. A proposal to self-limit Lido's growth was put to vote, but the community voted 99.8% against limiting. The debate highlighted tensions between protocol growth and network decentralization. Lido eventually stabilized around 28-32% as competitors emerged.",tags:["protocol","security","social"],links:[{label:"Blockworks: Centralization Debate",url:"https://blockworks.co/news/lido-centralization-debate-ethereum"},{label:"Self-Limit Vote (Decrypt)",url:"https://decrypt.co/104064/lido-community-signals-intent-keep-ethereum-staking-uncapped"},{label:"CoinDesk Analysis",url:"https://www.coindesk.com/consensus-magazine/2023/09/28/does-lido-control-too-much-liquid-staking"}]},{id:"berlin",type:"hard_fork",date:"2021-04-15",blockNumber:12244e3,title:"Berlin",summary:"Gas cost optimizations for certain transactions types.",imageUrl:"https://blog.ethereum.org/images/posts/upload_dcb0937c8bd662aae368f066f588abde.jpg",era:"beacon",importance:"significant",relatedEips:[2565,2718,2929,2930],content:"Berlin introduced typed transaction envelopes (EIP-2718), which would enable EIP-1559 in London. It also adjusted gas costs for state access operations.",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/12244000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement"},{label:"EIP-2718: Typed Transactions",url:"https://eips.ethereum.org/EIPS/eip-2718"},{label:"AllCoreDevs #104 (Berlin Planning)",url:"https://github.com/ethereum/pm/issues/228"},{label:"AllCoreDevs #107 (Berlin Finalization)",url:"https://github.com/ethereum/pm/issues/242"}]},{id:"london",type:"hard_fork",date:"2021-08-05",blockNumber:12965e3,title:"London (EIP-1559)",summary:"Revolutionary fee market change. Base fee burned, making ETH deflationary under high demand.",era:"beacon",importance:"major",relatedEips:[1559,3198,3529,3541,3554],content:"EIP-1559 was one of Ethereum's most significant economic changes. Instead of a pure auction, transactions now pay a base fee (burned) plus a priority tip. This made gas prices more predictable and introduced ETH burning.",tags:["protocol"],imageUrl:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",links:[{label:"EIP-1559 Spec",url:"https://eips.ethereum.org/EIPS/eip-1559"},{label:"London Block",url:"https://etherscan.io/block/12965000"},{label:"ultrasound.money (burn tracker)",url:"https://ultrasound.money/"},{label:"Tim Beiko Announcement",url:"https://twitter.com/TimBeiko/status/1423307662159888388"},{label:"AllCoreDevs #111 (Timeline Discussion)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20111.md"},{label:"AllCoreDevs #108 (EIP-1559 Inclusion)",url:"https://github.com/ethereum/pm/issues/254"}]},{id:"optimism-launch",type:"scaling",date:"2021-01-16",blockNumber:12686786,title:"Optimism Mainnet Alpha",summary:"First optimistic rollup launches on mainnet, bringing practical L2 scaling.",era:"beacon",importance:"major",content:"Optimism launched the first optimistic rollup on mainnet, demonstrating that rollups could provide 10-100x cost reduction while maintaining Ethereum's security guarantees.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Optimism_Logo.svg/1200px-Optimism_Logo.svg.png",links:[{label:"L2Beat: Optimism",url:"https://l2beat.com/scaling/projects/optimism"},{label:"Optimism Official",url:"https://optimism.io/"},{label:"OP Mainnet Explorer",url:"https://optimistic.etherscan.io/"}]},{id:"arbitrum-launch",type:"scaling",date:"2021-08-31",blockNumber:13133428,title:"Arbitrum One Launch",summary:"Arbitrum launches, becoming the largest L2 by TVL.",era:"beacon",importance:"major",content:"Arbitrum One launched as an optimistic rollup with a focus on EVM compatibility. It quickly grew to become the largest L2 by total value locked, attracting major DeFi protocols.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Arbitrum_Logo.svg/1200px-Arbitrum_Logo.svg.png",links:[{label:"L2Beat: Arbitrum",url:"https://l2beat.com/scaling/projects/arbitrum"},{label:"Arbitrum Official",url:"https://arbitrum.io/"},{label:"Arbiscan Explorer",url:"https://arbiscan.io/"}]},{id:"defi-tvl-100b",type:"milestone",date:"2021-10-28",blockNumber:135e5,approximateBlock:!0,title:"DeFi TVL Hits $100 Billion",summary:"Total value locked crosses $100 billion for the first time.",era:"beacon",importance:"major",content:"A landmark moment: DeFi TVL crossed $100 billion — a 100x increase from just 20 months earlier. The growth was driven by yield farming, NFT mania, and increasing institutional interest. Ethereum was no longer an experiment; it was a financial system.",tags:["tvl","defi"],links:[{label:"DeFiLlama Historical",url:"https://defillama.com/"},{label:"Forbes: Where Does DeFi Go From Here?",url:"https://www.forbes.com/sites/lawrencewintermeyer/2021/05/20/after-growing-88x-in-a-year-where-does-defi-go-from-here/"}]},{id:"defi-tvl-ath",type:"milestone",date:"2021-11-09",blockNumber:136e5,approximateBlock:!0,title:"DeFi TVL All-Time High: ~$177B",summary:"DeFi TVL peaks at approximately $177 billion, coinciding with Bitcoin's all-time high.",era:"beacon",importance:"major",content:"DeFi reached its all-time high TVL of approximately $177 billion, coinciding with the broader crypto market peak. Bitcoin hit its ATH around the same time. The subsequent crash would see TVL drop over 70%, but the infrastructure built during this period would prove durable.",tags:["tvl","defi"],links:[{label:"DeFiLlama",url:"https://defillama.com/"},{label:"DeFi TVL Approaches ATH (Currency Analytics)",url:"https://thecurrencyanalytics.com/bitcoin/defi-total-value-locked-approaches-all-time-high-of-2021-199192"}]},{id:"arrow-glacier",type:"hard_fork",date:"2021-12-09",blockNumber:13773e3,title:"Arrow Glacier",summary:"Delayed difficulty bomb to June 2022.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"beacon",importance:"minor",relatedEips:[4345],tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/13773000"},{label:"EIP-4345",url:"https://eips.ethereum.org/EIPS/eip-4345"},{label:"AllCoreDevs #124 (Arrow Glacier)",url:"https://github.com/ethereum/pm/issues/411"}]},{id:"vitalik-endgame",type:"research",date:"2021-12-06",blockNumber:1375e4,approximateBlock:!0,title:"Endgame",summary:"Vitalik describes the inevitable convergence of all blockchains toward similar architectures.",imageUrl:"http://vitalik.ca/images/icon.png",era:"beacon",importance:"significant",content:'In "Endgame," Vitalik argued that all successful blockchains converge toward similar architectures: centralized block production with trustless and highly-decentralized verification. Whether starting from monolithic chains or rollup-centric designs, the end state looks remarkably similar. Key insight: "We can have our cake and eat it too: decentralized and trustless block validation, but still with scale." This essay was prescient about the L2 ecosystem that would flourish.',tags:["research","scaling"],sourceUrl:"https://vitalik.eth.limo/general/2021/12/06/endgame.html",links:[{label:"Endgame (vitalik.eth.limo)",url:"https://vitalik.eth.limo/general/2021/12/06/endgame.html"}]},{id:"gray-glacier",type:"hard_fork",date:"2022-06-30",blockNumber:1505e4,title:"Gray Glacier",summary:"Final difficulty bomb delay before The Merge.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"merge",importance:"minor",relatedEips:[5133],tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/15050000"},{label:"EIP-5133",url:"https://eips.ethereum.org/EIPS/eip-5133"},{label:"AllCoreDevs #141 (Gray Glacier Updates)",url:"https://github.com/ethereum/pm/issues/551"},{label:"AllCoreDevs #142 (Post-fork Review)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20142.md"}]},{id:"the-merge",type:"milestone",date:"2022-09-15",blockNumber:15537394,title:"The Merge",summary:"Ethereum transitions from Proof of Work to Proof of Stake, reducing energy use by 99.95%.",era:"merge",importance:"major",content:"The Merge was Ethereum's most significant upgrade, transitioning from energy-intensive Proof of Work to Proof of Stake. The execution layer (mainnet) merged with the Beacon Chain consensus layer. ETH issuance dropped ~90% and energy consumption dropped 99.95%.",tags:["protocol"],imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",links:[{label:"Last PoW Block",url:"https://etherscan.io/block/15537393"},{label:"First PoS Block",url:"https://etherscan.io/block/15537394"},{label:"ethereum.org Merge Page",url:"https://ethereum.org/en/roadmap/merge/"},{label:"Vitalik's Merge Thread",url:"https://twitter.com/VitalikButerin/status/1570306185391378434"},{label:"AllCoreDevs #106 (Early Merge Discussion)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20106.md"},{label:"AllCoreDevs #122 (TTD Finalization)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20122.md"},{label:"AllCoreDevs #140 (Pre-Merge Testing)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20140.md"}]},{id:"ftx-collapse",type:"controversy",date:"2022-11-11",blockNumber:1594e4,approximateBlock:!0,title:"FTX Collapse",summary:'Centralized exchange FTX collapses. DeFi protocols continue working, highlighting "not your keys, not your coins."',era:"merge",importance:"major",content:"FTX, the second-largest crypto exchange, collapsed within days due to fraud and mismanagement of customer funds. ETH dropped 20%+ and billions were lost. However, DeFi protocols like Uniswap, Aave, and MakerDAO continued operating perfectly — smart contracts don't have CEOs who can steal funds. The crisis drove renewed interest in self-custody and decentralized alternatives.",tags:["security","defi","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/FTX_logo.svg/1200px-FTX_logo.svg.png",links:[{label:"NerdWallet Timeline",url:"https://www.nerdwallet.com/article/investing/ftx-crash"},{label:"DeFi Pulse (TVL during crash)",url:"https://www.defipulse.com/"}]},{id:"eip-4337-launch",type:"milestone",date:"2023-03-01",blockNumber:167e5,approximateBlock:!0,title:"EIP-4337 Account Abstraction",summary:"Account abstraction launches, enabling smart contract wallets without protocol changes.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"shanghai",importance:"major",relatedEips:[4337],content:"EIP-4337 introduced account abstraction to Ethereum without requiring protocol changes. It enables smart contract wallets with features like social recovery, gas sponsorship, and batched transactions. Over 26 million smart wallets have been created using this standard, dramatically improving user experience.",tags:["protocol","adoption"],links:[{label:"EIP-4337",url:"https://eips.ethereum.org/EIPS/eip-4337"},{label:"ethereum.org Account Abstraction",url:"https://ethereum.org/roadmap/account-abstraction/"},{label:"Alchemy Explainer",url:"https://www.alchemy.com/overviews/what-is-account-abstraction"}]},{id:"shapella",type:"hard_fork",date:"2023-04-12",blockNumber:17034870,title:"Shanghai/Capella (Shapella)",summary:"Enables staking withdrawals. Validators can finally exit and withdraw staked ETH.",era:"shanghai",importance:"major",relatedEips:[3651,3855,3860,4895],content:"Shapella finally enabled staking withdrawals, completing the PoS transition. EIP-4895 allowed validators to withdraw their staked ETH and rewards. Contrary to fears, this didn't cause a mass exodus.",tags:["protocol"],imageUrl:"https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&q=80",links:[{label:"Forkcast: Shanghai",url:"https://forkcast.org/"},{label:"Etherscan Block",url:"https://etherscan.io/block/17034870"},{label:"ethereum.org Withdrawals",url:"https://ethereum.org/en/staking/withdrawals/"},{label:"EIP-4895 (Withdrawals)",url:"https://eips.ethereum.org/EIPS/eip-4895"},{label:"AllCoreDevs Meetings",url:"https://github.com/ethereum/pm/tree/master/AllCoreDevs-EL-Meetings"}]},{id:"vitalik-three-transitions",type:"research",date:"2023-06-09",blockNumber:1745e4,approximateBlock:!0,title:"The Three Transitions",summary:"Vitalik outlines the three major transitions Ethereum must complete: L2 scaling, wallet security, and privacy.",imageUrl:"http://vitalik.ca/images/icon.png",era:"shanghai",importance:"significant",content:`Vitalik argued that Ethereum needs to undergo three major transitions simultaneously: (1) L2 scaling — everyone moving to rollups, (2) wallet security — moving to smart contract wallets with social recovery, and (3) privacy — having privacy-preserving solutions for transfers and identity. Key insight: "Failure to address any one of these areas could severely limit Ethereum's future." This essay became a roadmap for ecosystem builders.`,tags:["research","scaling","social"],sourceUrl:"https://vitalik.eth.limo/general/2023/06/09/three_transitions.html",links:[{label:"The Three Transitions",url:"https://vitalik.eth.limo/general/2023/06/09/three_transitions.html"}]},{id:"base-launch",type:"scaling",date:"2023-08-09",blockNumber:1788e4,title:"Base Mainnet Launch",summary:"Coinbase launches Base, an OP Stack L2, bringing crypto mainstream exposure.",era:"shanghai",importance:"major",content:"Base, built on Optimism's OP Stack, marked a major exchange entering L2s. As Coinbase's onchain platform, it brought mainstream exposure and signaled institutional acceptance of Ethereum's rollup-centric future.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Base_%28blockchain%29_logo.svg/1200px-Base_%28blockchain%29_logo.svg.png",links:[{label:"L2Beat: Base",url:"https://l2beat.com/scaling/projects/base"},{label:"Base Official",url:"https://base.org/"},{label:"BaseScan Explorer",url:"https://basescan.org/"}]},{id:"zksync-era",type:"scaling",date:"2023-03-24",blockNumber:1689e4,title:"zkSync Era Launch",summary:"First zkEVM mainnet, bringing validity proofs to EVM compatibility.",era:"shanghai",importance:"major",content:"zkSync Era launched the first zkEVM — a ZK rollup with full EVM compatibility. Unlike optimistic rollups, ZK rollups provide instant finality through validity proofs. This was a major milestone for ZK technology.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/ZkSync_logo.svg/1200px-ZkSync_logo.svg.png",links:[{label:"L2Beat: zkSync Era",url:"https://l2beat.com/scaling/projects/zksync-era"},{label:"zkSync Official",url:"https://zksync.io/"},{label:"zkSync Explorer",url:"https://explorer.zksync.io/"}]},{id:"linea-launch",type:"scaling",date:"2023-07-18",blockNumber:1772e4,title:"Linea Mainnet Launch",summary:"ConsenSys launches Linea, a zkEVM rollup with focus on developer experience.",imageUrl:"https://l2beat.com/static/meta-images/scaling/projects/linea/opengraph-image.a8cbda82.png",era:"shanghai",importance:"significant",content:"Linea, developed by ConsenSys, launched as a Type 2 zkEVM rollup. It emphasized developer experience and seamless migration from Ethereum mainnet, leveraging ConsenSys's existing tooling ecosystem including MetaMask and Infura integrations.",tags:["scaling"],links:[{label:"L2Beat: Linea",url:"https://l2beat.com/scaling/projects/linea"},{label:"Linea Official",url:"https://linea.build/"},{label:"Linea Explorer",url:"https://lineascan.build/"}]},{id:"scroll-launch",type:"scaling",date:"2023-10-17",blockNumber:184e5,title:"Scroll Mainnet Launch",summary:"Scroll launches its zkEVM, focused on bytecode-level EVM equivalence.",imageUrl:"https://l2beat.com/static/meta-images/scaling/projects/scroll/opengraph-image.7734f58e.png",era:"shanghai",importance:"significant",content:"Scroll launched as a zkEVM rollup with a focus on bytecode-level EVM equivalence, meaning existing Ethereum contracts can deploy without any modifications. This approach prioritized maximum compatibility over performance optimizations.",tags:["scaling"],links:[{label:"L2Beat: Scroll",url:"https://l2beat.com/scaling/projects/scroll"},{label:"Scroll Official",url:"https://scroll.io/"},{label:"Scroll Explorer",url:"https://scrollscan.com/"}]},{id:"dencun",type:"hard_fork",date:"2024-03-13",blockNumber:19426587,title:"Cancun-Deneb (Dencun)",summary:"Proto-Danksharding (EIP-4844) introduces blob transactions, reducing L2 costs by 10-100x.",era:"cancun",importance:"major",relatedEips:[4844,1153,4788,5656,6780,7044,7045,7514,7516],content:'EIP-4844 (Proto-Danksharding) introduced "blob" transactions—a new way for L2s to post data to Ethereum at dramatically lower cost. L2 transaction fees dropped from dollars to cents. This was the first step toward full Danksharding.',tags:["protocol","scaling","blobs"],imageUrl:"https://ethereum.org/static/0657a471c15f9a31a68f5a1dbe0d40c1/4dfdf/docking.png",links:[{label:"Forkcast: Dencun",url:"https://forkcast.org/"},{label:"EIP-4844 Spec",url:"https://eips.ethereum.org/EIPS/eip-4844"},{label:"Etherscan Block",url:"https://etherscan.io/block/19426587"},{label:"Blob Explorer",url:"https://blobscan.com/"},{label:"AllCoreDevs #167 (Dencun Planning)",url:"https://github.com/ethereum/pm/issues/836"},{label:"Dencun Devnet Specs",url:"https://github.com/ethereum/execution-specs/tree/master/network-upgrades/mainnet-upgrades/cancun.md"}]},{id:"blobs-first-million",type:"milestone",date:"2024-04-15",blockNumber:1966e4,approximateBlock:!0,title:"First Million Blobs",summary:"Ethereum processes its first 1 million blob transactions, just one month after Dencun.",era:"cancun",importance:"significant",content:"Within a month of Dencun's launch, Ethereum had processed over 1 million blob transactions. L2s like Base, Arbitrum, and Optimism rapidly adopted blobs, dramatically reducing their data costs. The blob market was working as intended.",tags:["blobs","scaling"],links:[{label:"Blobscan",url:"https://blobscan.com/"},{label:"Dune: Blob Analytics",url:"https://dune.com/0xRob/blobs"}]},{id:"blobs-saturation",type:"milestone",date:"2024-10-01",blockNumber:2085e4,approximateBlock:!0,title:"Blob Space Saturation Begins",summary:"L2 growth fills available blob space, temporarily increasing L2 fees and driving demand for more blobs.",imageUrl:"https://blobs.money/social.jpg",era:"cancun",importance:"significant",content:"As L2 adoption grew, blob space began to saturate. Blocks regularly hit the 6-blob target, and the blob fee market kicked in. This validated the design and created urgency for Pectra's blob capacity increase.",tags:["blobs","scaling"],links:[{label:"Blob Saturation (blobs.money)",url:"https://blobs.money/"},{label:"Blobscan",url:"https://blobscan.com/"}]},{id:"ens-launch",type:"application",date:"2017-05-04",blockNumber:3648571,title:"ENS Launch",summary:"Ethereum Name Service launches, bringing human-readable names to Ethereum addresses.",era:"metropolis",importance:"major",content:"ENS (Ethereum Name Service) allowed users to register .eth domains that resolve to Ethereum addresses. Instead of 0x123...abc, you could use vitalik.eth. This became the identity layer for Ethereum — the first step toward web3 identity.",tags:["defi","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Ens-logo.png",links:[{label:"ENS Official Site",url:"https://ens.domains/"},{label:"ENS Announcement",url:"https://medium.com/the-ethereum-name-service/announcing-the-ethereum-name-service-relaunch-date-4390af6dd9a2"},{label:"ENS Docs",url:"https://docs.ens.domains/"},{label:"vitalik.eth Lookup",url:"https://app.ens.domains/vitalik.eth"}]},{id:"nft-summer",type:"application",date:"2021-03-11",blockNumber:1202e4,approximateBlock:!0,title:"Beeple NFT Sells for $69M",summary:"Beeple's 'Everydays' sells at Christie's for $69M, igniting the NFT boom.",era:"beacon",importance:"major",content:"Digital artist Beeple sold an NFT at Christie's auction house for $69.3 million — the third-highest price for a living artist. This mainstream moment brought NFTs into cultural consciousness and sparked a speculative frenzy.",tags:["nft","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/0/0f/Beeple%27s_Everydays_-_The_First_5000_Days.jpg",links:[{label:"Christie's Auction Page",url:"https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924"},{label:"NYT Coverage",url:"https://www.nytimes.com/2021/03/11/arts/design/nft-auction-christies-beeple.html"},{label:"Beeple's Site",url:"https://www.beeple-crap.com/"},{label:"The Artwork (IPFS)",url:"https://ipfsgateway.makersplace.com/ipfs/QmXkxpwAHCtDXbbZHUwqtFucG1RMS6T87vi1CdvadfL7qA"}]},{id:"bayc-launch",type:"application",date:"2021-04-23",blockNumber:123e5,approximateBlock:!0,title:"Bored Ape Yacht Club Launches",summary:"10,000 apes mint for 0.08 ETH each. BAYC becomes the face of NFT culture.",era:"beacon",importance:"significant",content:"Yuga Labs launched Bored Ape Yacht Club — 10,000 algorithmically generated ape profile pictures. Initially priced at just 0.08 ETH (~$190), sales started slow but exploded. BAYC became the poster child for NFTs, with celebrity owners, exclusive community benefits, and floor prices reaching 150+ ETH. It spawned the Mutant Apes, Otherside metaverse, and the ApeCoin token.",tags:["nft","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Bored_Ape_7537.png/220px-Bored_Ape_7537.png",links:[{label:"BAYC Official",url:"https://boredapeyachtclub.com/"},{label:"NFT Now Guide",url:"https://nftnow.com/guides/bored-ape-yacht-club-guide/"}]},{id:"opensea-peak",type:"application",date:"2022-01-01",blockNumber:139e5,approximateBlock:!0,title:"OpenSea Hits $5B Monthly Volume",summary:"NFT marketplace OpenSea reaches peak trading volume during the NFT boom.",imageUrl:"https://static.seadn.io/og/generic.jpg",era:"beacon",importance:"significant",content:"OpenSea, the dominant NFT marketplace, hit $5 billion in monthly trading volume. Bored Apes, CryptoPunks, and countless PFP projects traded hands. The NFT market would later cool significantly, but this peak showed the cultural moment Ethereum enabled.",tags:["nft"],links:[{label:"OpenSea",url:"https://opensea.io/"},{label:"Dune Analytics: OpenSea",url:"https://dune.com/queries/3469/6913"},{label:"The Verge Coverage",url:"https://www.theverge.com/2022/1/20/22892717/opensea-nft-marketplace-3-billion-monthly-volume"}]},{id:"nft-nyc-2019",type:"milestone",date:"2019-02-20",blockNumber:723e4,approximateBlock:!0,title:"NFT.NYC 2019 (First Edition)",summary:"The first NFT-focused conference launches in New York City with 500 attendees.",imageUrl:"https://www.nft.nyc/hubfs/nftnyc2021-eventbrite-header.png",era:"metropolis",importance:"significant",content:"The inaugural NFT.NYC conference brought together early NFT enthusiasts, artists, and builders in Times Square. With about 500 attendees, it was a small but passionate community. CryptoKitties had launched just over a year prior, and the NFT ecosystem was still nascent.",tags:["nft","social"],links:[{label:"NFT.NYC",url:"https://www.nft.nyc/"},{label:"NFT.NYC History (IQ.wiki)",url:"https://iq.wiki/wiki/nft-nyc"}]},{id:"nft-nyc-2021",type:"milestone",date:"2021-11-02",blockNumber:1354e4,approximateBlock:!0,title:"NFT.NYC 2021",summary:"NFT.NYC explodes to 5,000+ attendees as NFT mania reaches peak hype.",imageUrl:"https://www.nft.nyc/hubfs/nftnyc2021-eventbrite-header.png",era:"beacon",importance:"major",content:'"The World Has Woken Up to NFTs" — NFT.NYC 2021 was held across multiple Times Square venues during the peak of NFT mania. Bored Apes, celebrity NFTs, and speculation were everywhere. The contrast from 500 attendees in 2019 to 5,000+ captured the explosive growth.',tags:["nft","social"],links:[{label:"NFT.NYC",url:"https://www.nft.nyc/"},{label:"NFT Culture Coverage",url:"https://www.nftculture.com/nft-events/nft-event-nft-nyc/"}]},{id:"nft-nyc-2022",type:"milestone",date:"2022-06-20",blockNumber:15e6,approximateBlock:!0,title:"NFT.NYC 2022",summary:"15,000+ attendees as NFT.NYC becomes the largest NFT conference in the world.",imageUrl:"https://www.nft.nyc/hubfs/nftnyc2021-eventbrite-header.png",era:"merge",importance:"significant",content:"NFT.NYC 2022 drew over 15,000 attendees, cementing it as the premier NFT event. Despite market cooling, the conference showed the cultural staying power of NFTs beyond speculation — art, music, gaming, and identity use cases took center stage.",tags:["nft","social"],links:[{label:"NFT.NYC",url:"https://www.nft.nyc/"}]},{id:"uniswap-v3",type:"application",date:"2021-05-05",blockNumber:124e5,approximateBlock:!0,title:"Uniswap V3 Launch",summary:"Concentrated liquidity revolutionizes AMM capital efficiency.",imageUrl:"https://images.ctfassets.net/oc3ca6rftwdu/jlNDV0zqOw99wMnaOzdeT/4e6838438d905ccd05e56b4ecdecee7a/banner__1_.png?w=1200&amp;h=900&amp;q=100&amp;fit=crop",era:"beacon",importance:"major",content:"Uniswap V3 introduced concentrated liquidity — LPs could provide liquidity in specific price ranges, dramatically improving capital efficiency. This made Uniswap competitive with centralized exchange spreads for major pairs.",tags:["defi"],links:[{label:"Uniswap V3 Announcement",url:"https://blog.uniswap.org/uniswap-v3"},{label:"V3 Factory Contract",url:"https://etherscan.io/address/0x1F98431c8aD98523631AE4a59f267346ea31F984"},{label:"V3 Documentation",url:"https://docs.uniswap.org/contracts/v3/overview"}]},{id:"parity-wallet-hack",type:"controversy",date:"2017-11-06",blockNumber:4501969,title:"Parity Wallet Freeze",summary:'A user accidentally "kills" the Parity multisig library, freezing $150M in ETH forever.',era:"metropolis",importance:"major",content:"A developer accidentally called a function that made the Parity multisig wallet library self-destruct, permanently freezing ~$150M worth of ETH. The community debated whether to hard fork to recover funds (they didn't). The incident highlighted smart contract risks.",tags:["security"],links:[{label:"Parity Postmortem",url:"https://www.parity.io/blog/a-postmortem-on-the-parity-multi-sig-library-self-destruct/"},{label:"devops199 Transaction",url:"https://etherscan.io/tx/0x05f71e1b2cb4f03e547739db15d080fd30c989eda04d37ce6264c5686f0c8c29"},{label:"EIP-999 (rejected recovery)",url:"https://eips.ethereum.org/EIPS/eip-999"}]},{id:"rollup-centric-roadmap",type:"research",date:"2020-10-02",blockNumber:1095e4,approximateBlock:!0,title:"Rollup-Centric Roadmap Announced",summary:"Vitalik announces Ethereum is pivoting to a rollup-centric future for scaling.",imageUrl:"https://ethereum-magicians.org/uploads/default/original/2X/e/e5bb6bb58438e9301c987ec778ccce164c4ed3ee.png",era:"beacon",importance:"major",content:`In a pivotal blog post, Vitalik announced that Ethereum's scaling strategy would center on rollups rather than L1 sharding. "The Ethereum ecosystem is likely to be all-in on rollups as a scaling strategy for the near and mid-term future." This reshaped the entire roadmap.`,tags:["research","scaling","social"],sourceUrl:"https://vitalik.eth.limo/general/2020/10/02/scaling.html",links:[{label:"Rollup-Centric Roadmap (Vitalik)",url:"https://vitalik.eth.limo/general/2020/10/02/scaling.html"},{label:"Ethereum Magicians Discussion",url:"https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698"}]},{id:"devcon-1",type:"milestone",date:"2015-11-09",blockNumber:51e4,approximateBlock:!0,title:"DevCon 1 (London)",summary:"First post-launch DevCon. Community celebrates successful mainnet.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"frontier",importance:"significant",content:"Held just months after Frontier launch, DevCon 1 in London was a celebration and planning session for Ethereum's future.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=1"}]},{id:"devcon-2",type:"milestone",date:"2016-09-19",blockNumber:228e4,approximateBlock:!0,title:"DevCon 2 (Shanghai)",summary:"Post-DAO fork DevCon. Community rebuilds after the crisis.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"homestead",importance:"significant",content:"DevCon 2 in Shanghai was held months after the DAO fork controversy. The community came together to chart Ethereum's path forward, focusing on scalability research.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=2"}]},{id:"devcon-3",type:"milestone",date:"2017-11-01",blockNumber:448e4,approximateBlock:!0,title:"DevCon 3 (Cancún)",summary:"Peak ICO era. Ethereum ecosystem explodes in size and ambition.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"metropolis",importance:"significant",content:"DevCon 3 coincided with the ICO boom. Thousands attended as Ethereum became the platform for token launches. Vitalik presented early scaling research.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=3"}]},{id:"devcon-4",type:"milestone",date:"2018-10-30",blockNumber:663e4,approximateBlock:!0,title:"DevCon 4 (Prague)",summary:"Bear market DevCon. Focus shifts to building infrastructure.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"metropolis",importance:"significant",content:"After the 2018 crypto crash, DevCon 4 in Prague was more subdued but focused. Developers doubled down on infrastructure: ETH 2.0 research, layer 2 solutions, and developer tooling.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=4"}]},{id:"devcon-5",type:"milestone",date:"2019-10-08",blockNumber:87e5,approximateBlock:!0,title:"DevCon 5 (Osaka)",summary:"DeFi emerges. Uniswap, MakerDAO, and composability take center stage.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"istanbul",importance:"significant",content:'DevCon 5 in Osaka showcased the emerging DeFi ecosystem. Talks on Uniswap, MakerDAO, and "money legos" composability hinted at the DeFi summer to come.',tags:["social","defi"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=5"}]},{id:"devcon-6",type:"milestone",date:"2022-10-11",blockNumber:1572e4,approximateBlock:!0,title:"DevCon 6 (Bogotá)",summary:"Post-Merge celebration. First DevCon after COVID and the transition to PoS.",era:"merge",importance:"major",content:"DevCon 6 in Bogotá was a triumphant return after COVID and The Merge. The community celebrated Ethereum's successful transition to Proof of Stake and looked ahead to scaling with rollups.",tags:["social"],imageUrl:"https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&q=80",links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=6"},{label:"DevCon 6 Website",url:"https://devcon.org/en/"}]},{id:"devcon-7",type:"milestone",date:"2024-11-12",blockNumber:2115e4,approximateBlock:!0,title:"DevCon 7 (Bangkok)",summary:"Southeast Asia DevCon. Focus on global adoption and L2 ecosystem.",imageUrl:"https://www.devcon.org/assets/images/og-india.jpg",era:"cancun",importance:"major",content:"DevCon 7 brought the Ethereum community to Bangkok, focusing on global adoption, the thriving L2 ecosystem post-Dencun, and Ethereum's role in emerging markets.",tags:["social"],links:[{label:"DevCon 7 Website",url:"https://devcon.org/"}]},{id:"pectra",type:"hard_fork",date:"2025-05-07",blockNumber:22045e3,title:"Pectra Upgrade",summary:"Major hard fork combining Prague (execution) and Electra (consensus). Introduces smart accounts, validator improvements, and increased blob capacity.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"pectra",importance:"major",relatedEips:[7702,7251,7002,6110,2537,2935,7685,7691,7623,7840],content:`Pectra was the most significant Ethereum upgrade since The Merge. Key improvements include:
- EIP-7702: Smart accounts for EOAs (externally owned accounts can delegate to smart contracts)
- EIP-7251: Increased max effective balance for validators (from 32 to 2048 ETH)
- EIP-7002: Execution layer triggerable exits
- EIP-7691: Doubled blob capacity (6→12 blobs per block)
This upgrade marked a major step toward account abstraction and improved L2 scalability.`,tags:["protocol","scaling"],links:[{label:"Pectra Announcement",url:"https://blog.ethereum.org/2025/05/07/pectra-mainnet"},{label:"EIP-7702 Spec",url:"https://eips.ethereum.org/EIPS/eip-7702"},{label:"Forkcast: Pectra",url:"https://forkcast.org/"}]},{id:"devconnect-amsterdam",type:"milestone",date:"2022-04-18",blockNumber:1461e4,approximateBlock:!0,title:"DevConnect Amsterdam",summary:"First DevConnect event. Week-long gathering of Ethereum builders in Amsterdam.",imageUrl:"https://devconnect.org/og-argentina.png?reset=1",era:"merge",importance:"significant",content:"DevConnect Amsterdam was the inaugural DevConnect, a new format from the Ethereum Foundation. Unlike DevCon's single conference, DevConnect was a week of independent events, workshops, and hackathons across the city. Topics included The Merge preparation, L2 scaling, and MEV research. The event marked a shift toward more modular, community-driven gatherings.",tags:["social"],links:[{label:"DevConnect Website",url:"https://devconnect.org/"},{label:"Recap Blog",url:"https://blog.ethereum.org/2022/05/12/devconnect-amsterdam-recap"}]},{id:"devconnect-istanbul",type:"milestone",date:"2023-11-13",blockNumber:1856e4,approximateBlock:!0,title:"DevConnect Istanbul",summary:"Second DevConnect event. 10,000+ attendees gather in Istanbul to discuss Ethereum's future.",era:"shanghai",importance:"significant",content:"DevConnect Istanbul brought the Ethereum community to the crossroads of Europe and Asia. With over 10,000 attendees, the week featured discussions on proto-danksharding (EIP-4844), account abstraction, and the growing L2 ecosystem. The city's historic venues hosted talks on Ethereum's roadmap, with Dencun looming on the horizon.",tags:["social"],links:[{label:"DevConnect Website",url:"https://devconnect.org/"},{label:"Ethereum Foundation Recap",url:"https://blog.ethereum.org/2023/11/28/devconnect-ist-recap"}]},{id:"devconnect-arg",type:"milestone",date:"2025-11-17",title:"DevConnect Argentina",summary:"First Ethereum World's Fair at La Rural in Buenos Aires. 14,000+ attendees from 130+ countries.",era:"pectra",importance:"major",content:"DevConnect Argentina was the largest DevConnect yet, featuring the first-ever Ethereum World's Fair. Over 14,000 attendees gathered at La Rural in Palermo, Buenos Aires. Eight dedicated districts covered DeFi, Privacy, L2s, Decentralized Social, Hardware & Wallets, AI, Gaming, and Art. More than 500 community events took place across the city.",tags:["social"],links:[{label:"DevConnect Website",url:"https://devconnect.org/"}]},{id:"tornado-cash-sanctions",type:"controversy",date:"2022-08-08",blockNumber:153e5,approximateBlock:!0,title:"Tornado Cash Sanctioned",summary:"US Treasury sanctions Tornado Cash smart contracts, sparking debate about blockchain censorship.",era:"merge",importance:"major",content:'OFAC sanctioned Tornado Cash, a privacy-preserving mixer protocol on Ethereum, citing its use by North Korean hackers to launder stolen funds. This unprecedented sanctioning of smart contract addresses (not just people) raised fundamental questions: Can code be sanctioned? Must validators censor transactions? The aftermath saw block builders filtering Tornado Cash transactions, with MEV Watch tracking "OFAC-compliant" vs neutral blocks. The developer Alexey Pertsev was arrested in the Netherlands. Sanctions were eventually lifted in March 2025 after legal challenges.',tags:["security","protocol"],imageUrl:"https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",links:[{label:"Treasury Press Release",url:"https://home.treasury.gov/news/press-releases/jy0916"},{label:"MEV Watch",url:"https://www.mevwatch.info/"},{label:"Sanctions Lifted (2025)",url:"https://home.treasury.gov/news/press-releases/sb0057"}]},{id:"paypal-pyusd",type:"milestone",date:"2023-08-07",blockNumber:1786e4,approximateBlock:!0,title:"PayPal Launches PYUSD",summary:"PayPal launches its USD stablecoin on Ethereum, bringing crypto to 430M+ users.",imageUrl:"https://newsroom.paypal-corp.com/image/PYUSD_3x2.jpg",era:"shanghai",importance:"significant",content:"PayPal launched PYUSD, a USD-backed stablecoin as an ERC-20 token on Ethereum. This marked a major milestone in mainstream adoption — one of the world's largest payment processors choosing Ethereum as its blockchain platform. PYUSD brought Ethereum access to PayPal and Venmo's hundreds of millions of users.",tags:["adoption","defi"],links:[{label:"PayPal Announcement",url:"https://newsroom.paypal-corp.com/2023-08-07-PayPal-Launches-U-S-Dollar-Stablecoin"},{label:"The Verge Coverage",url:"https://www.theverge.com/2023/8/7/23822752/paypal-pyusd-stablecoin-cryptocurrency"}]},{id:"spot-eth-etf",type:"milestone",date:"2024-07-23",blockNumber:2034e4,approximateBlock:!0,title:"Spot Ethereum ETFs Approved",summary:"SEC approves spot Ethereum ETFs. BlackRock, Fidelity, and others begin trading.",era:"cancun",importance:"major",content:"The SEC approved nine spot Ethereum ETFs, allowing traditional investors to gain ETH exposure through regulated brokerage accounts. BlackRock's iShares Ethereum Trust (ETHA), Fidelity's Ethereum Fund, and others began trading. This followed the Bitcoin spot ETF approval in January 2024 and cemented Ethereum's legitimacy as an institutional asset.",tags:["adoption"],imageUrl:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",links:[{label:"Investopedia Coverage",url:"https://www.investopedia.com/sec-approves-spot-ether-etfs-8678873"},{label:"BlackRock ETHA",url:"https://www.blackrock.com/us/individual/products/337614/ishares-ethereum-trust-etf"}]},{id:"polygon-launch",type:"scaling",date:"2020-05-31",blockNumber:102e5,approximateBlock:!0,title:"Polygon (Matic) Mainnet Launch",summary:"Matic Network launches as an Ethereum sidechain, offering fast and cheap transactions.",era:"beacon",importance:"significant",content:"Matic Network (later rebranded to Polygon) launched its PoS sidechain connected to Ethereum. It offered near-instant transactions at a fraction of mainnet gas costs. Polygon became the go-to scaling solution during the 2021 DeFi/NFT boom, onboarding millions of users who couldn't afford mainnet fees.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Polygon_Blockchain_Matic_Logo.svg/1200px-Polygon_Blockchain_Matic_Logo.svg.png",links:[{label:"Polygon",url:"https://polygon.technology/"},{label:"Polygon PoS Documentation",url:"https://docs.polygon.technology/pos/"}]},{id:"uniswap-airdrop",type:"application",date:"2020-09-17",blockNumber:1086e4,approximateBlock:!0,title:"Uniswap UNI Airdrop",summary:"250,000+ addresses receive 400 UNI each. The airdrop that defined a new token distribution model.",imageUrl:"https://images.ctfassets.net/oc3ca6rftwdu/4x39D4E8beGsi71o3uBhxG/3d6286ef63706ca13fb9e5df71646bd9/banner.jpeg?w=1200&amp;h=900&amp;q=100&amp;fit=crop",era:"beacon",importance:"major",content:'Uniswap launched its governance token UNI with a historic airdrop. Every address that had used Uniswap before September 1, 2020 received at least 400 UNI tokens — worth over $1,400 at launch. Over 250,000 addresses were eligible. This "retroactive public goods funding" model inspired countless future airdrops and established a new paradigm for fair token distribution.',tags:["defi"],links:[{label:"Uniswap Announcement",url:"https://blog.uniswap.org/uni"},{label:"Dune Airdrop Analysis",url:"https://dune.com/blog/uni-airdrop-analysis"}]},{id:"flashbots-launch",type:"milestone",date:"2020-11-06",blockNumber:112e5,approximateBlock:!0,title:"Flashbots Launch",summary:'Flashbots launches MEV-geth, bringing transparency and order to the "dark forest" of MEV extraction.',era:"beacon",importance:"significant",content:"Flashbots emerged to address the chaos of MEV (Maximal Extractable Value) extraction. Before Flashbots, MEV searchers competed in the public mempool, causing gas price spikes and network congestion. MEV-geth allowed miners to accept sealed-bid bundles, moving the competition off-chain and reducing negative externalities.",tags:["protocol","defi"],links:[{label:"Flashbots",url:"https://www.flashbots.net/"},{label:"Flashbots Docs",url:"https://docs.flashbots.net/"},{label:"GitHub",url:"https://github.com/flashbots/pm"}]},{id:"mev-boost-launch",type:"milestone",date:"2022-09-15",blockNumber:15537394,title:"MEV-Boost Goes Live",summary:"With The Merge, MEV-Boost enables validators to outsource block building to a competitive marketplace.",imageUrl:"https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/354d2449-5f7a-4b06-82aa-c46aedfe81e1/page-cover_5-wide/public",era:"merge",importance:"significant",content:`MEV-Boost launched alongside The Merge, adapting Flashbots infrastructure for Proof of Stake. Validators could now receive blocks from specialized builders via relays, separating block production from block building. This "proposer-builder separation" became a cornerstone of Ethereum's post-Merge architecture, with over 90% of blocks eventually built through MEV-Boost.`,tags:["protocol"],links:[{label:"MEV-Boost Docs",url:"https://boost.flashbots.net/"},{label:"MEV Watch",url:"https://www.mevwatch.info/"},{label:"Flashbots Transparency",url:"https://transparency.flashbots.net/"}]},{id:"validators-500k",type:"milestone",date:"2023-01-13",blockNumber:164e5,approximateBlock:!0,title:"500,000 Validators",summary:"Ethereum reaches 500,000 active validators on the Beacon Chain, with 16M ETH staked.",imageUrl:"https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F01%2Fethereum-eth.jpg&amp;w=1920&amp;q=75&amp;webp=false",era:"shanghai",importance:"significant",content:"Just months after The Merge, Ethereum's validator count hit 500,000 — each having staked 32 ETH. This milestone came as the community anticipated the Shanghai upgrade that would finally enable staking withdrawals. The growth demonstrated strong confidence in Ethereum's Proof of Stake future.",tags:["protocol"],links:[{label:"Blockworks Coverage",url:"https://blockworks.co/news/ethereum-to-reach-500000-validators"},{label:"BeaconScan Validators",url:"https://beaconscan.com/validators"}]},{id:"validators-1m",type:"milestone",date:"2024-03-28",blockNumber:1953e4,approximateBlock:!0,title:"1 Million Validators",summary:"Ethereum reaches 1 million active validators, with 32M ETH staked (~$114B).",era:"cancun",importance:"major",content:"Ethereum crossed 1 million validators, a remarkable milestone for network decentralization. With 32 million ETH staked (roughly 26% of total supply), the network achieved unprecedented security. The growth was driven by liquid staking protocols like Lido and institutional adoption.",tags:["protocol"],links:[{label:"Yahoo Finance Coverage",url:"https://finance.yahoo.com/news/ethereum-validator-count-passes-one-184908914.html"},{label:"Dune Staking Dashboard",url:"https://dune.com/hildobby/eth2-staking"}]},{id:"ethcc-1",type:"milestone",date:"2018-03-08",blockNumber:52e5,approximateBlock:!0,title:"ETHCC 1 (Paris)",summary:"First Ethereum Community Conference in Paris. Beginning of a major annual tradition.",imageUrl:"https://ethcc.io/cannes-open-graph.png",era:"metropolis",importance:"significant",content:"The first ETHCC (Ethereum Community Conference) was held in Paris, establishing what would become one of the largest annual Ethereum gatherings in Europe. Organized by the Ethereum France association, it brought together developers, researchers, and enthusiasts.",tags:["social"],links:[{label:"ETHCC Website",url:"https://ethcc.io/"}]},{id:"eth-denver-2020",type:"milestone",date:"2020-02-14",blockNumber:945e4,approximateBlock:!0,title:"ETH Denver 2020",summary:"Last major in-person Ethereum event before COVID. Record attendance, DeFi momentum building.",imageUrl:"https://ethdenver.com/wp-content/uploads/2025/09/ETHDEN2026_SEO_v1.webp",era:"istanbul",importance:"significant",content:"ETH Denver 2020 was the last major in-person Ethereum gathering before COVID-19 shut down events worldwide. The hackathon saw record participation, and DeFi was the dominant theme. Just weeks later, the world would lock down, but the momentum built here carried through.",tags:["social","defi"],links:[{label:"ETH Denver",url:"https://www.ethdenver.com/"}]},{id:"ethcc-5",type:"milestone",date:"2022-07-19",blockNumber:1517e4,approximateBlock:!0,title:"ETHCC 5 (Paris)",summary:"Massive pre-Merge ETHCC. Anticipation for Proof of Stake transition at peak.",imageUrl:"https://ethcc.io/cannes-open-graph.png",era:"merge",importance:"significant",content:"ETHCC 5 in Paris was one of the largest Ethereum conferences ever, with The Merge just two months away. The excitement was palpable as the community anticipated the transition to Proof of Stake. Major announcements about L2s, MEV, and account abstraction dominated the talks.",tags:["social"],links:[{label:"ETHCC Website",url:"https://ethcc.io/"}]},{id:"eth-denver-2024",type:"milestone",date:"2024-02-23",blockNumber:193e5,approximateBlock:!0,title:"ETH Denver 2024",summary:"Largest ETH Denver yet. Focus on L2s, account abstraction, and real-world adoption.",imageUrl:"https://ethdenver.com/wp-content/uploads/2025/09/ETHDEN2026_SEO_v1.webp",era:"cancun",importance:"significant",content:"ETH Denver 2024 drew record crowds, with the L2 ecosystem in full bloom post-Dencun. Talks focused on account abstraction (EIP-4337), cross-L2 interoperability, and bringing crypto to mainstream users. The hackathon produced projects across DeFi, gaming, and social.",tags:["social","scaling"],links:[{label:"ETH Denver",url:"https://www.ethdenver.com/"}]},{id:"edcon-2024",type:"milestone",date:"2024-07-29",blockNumber:2035e4,approximateBlock:!0,title:"EDCON 2024 (Tokyo)",summary:"EDCON returns to Asia. Deep dives on L2 interoperability, ZK proofs, and protocol development.",era:"cancun",importance:"significant",content:"EDCON 2024 in Tokyo brought together protocol developers and researchers for deep technical discussions. With the Dencun upgrade enabling cheaper L2 data via EIP-4844, talks focused on cross-L2 communication, ZK-EVM advancements, and the roadmap toward single-slot finality. The event highlighted Ethereum's strong developer community in Asia.",tags:["social","scaling"],links:[{label:"EDCON Website",url:"https://www.edcon.io/"},{label:"EDCON 2024 Details",url:"https://www.edcon.io/en/about"}]},{id:"ethwaterloo-2017",type:"milestone",date:"2017-10-13",blockNumber:437e4,approximateBlock:!0,title:"ETHWaterloo 2017",summary:"One of the first major ETHGlobal hackathons. 400+ hackers build on Ethereum in Canada.",era:"metropolis",importance:"significant",content:"ETHWaterloo was one of the earliest large-scale Ethereum hackathons, helping establish the ETHGlobal hackathon series. Held at the University of Waterloo, it brought together developers to build on Ethereum during the ICO boom era. Winners included GoNetwork (mobile scaling) and Rufflet (smart contract analytics by Axiom Zen, the CryptoKitties team).",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethwaterloo.devpost.com/project-gallery"},{label:"ETHGlobal",url:"https://ethglobal.com/"}]},{id:"ethsanfrancisco-2018",type:"milestone",date:"2018-10-05",blockNumber:645e4,approximateBlock:!0,title:"ETHSanFrancisco 2018",summary:"Major ETHGlobal hackathon in SF. 1000+ hackers, record-breaking event.",era:"metropolis",importance:"significant",content:"ETHSanFrancisco was a massive ETHGlobal hackathon that brought over 1000 developers to the Palace of Fine Arts. It marked a high point for Ethereum developer enthusiasm before the bear market fully set in. Projects focused on scaling solutions, UX improvements, and early DeFi concepts using MakerDAO, Kyber, and atomic swaps.",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethsanfrancisco.devpost.com/project-gallery"},{label:"ETHGlobal",url:"https://ethglobal.com/"}]},{id:"ethnewyork-2019",type:"milestone",date:"2019-05-17",blockNumber:775e4,approximateBlock:!0,title:"ETHNewYork 2019",summary:"ETHGlobal hackathon in NYC during bear market. Builders stayed building.",era:"istanbul",importance:"significant",content:"ETHNewYork 2019 showed that the Ethereum developer community remained strong even in the depths of the bear market. While prices were down, hackers continued building infrastructure and applications that would later power DeFi Summer. The resilience displayed here defined Ethereum culture.",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethnewyork.devpost.com/project-gallery"},{label:"ETHGlobal",url:"https://ethglobal.com/"}]},{id:"ethberlin-2018",type:"milestone",date:"2018-09-07",blockNumber:63e5,approximateBlock:!0,title:"ETHBerlin 2018",summary:"First ETHBerlin hackathon. European developer community gathering.",era:"metropolis",importance:"significant",content:"ETHBerlin established itself as a key European Ethereum hackathon, held right before DevCon 4 in Prague. The event focused on privacy, decentralization, and cypherpunk values. It spawned the Department of Decentralization community that continued organizing events.",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethberlin.devpost.com/project-gallery"},{label:"ETHBerlin",url:"https://ethberlin.org/"}]},{id:"fusaka",type:"hard_fork",date:"2025-12-03",blockNumber:2315e4,title:"Fusaka Upgrade",summary:"The Fulu (consensus) + Osaka (execution) upgrade. Introduces PeerDAS for data availability sampling and further L2 improvements.",imageUrl:"https://forkcast.org/forkcast-metacard.png",era:"fusaka",importance:"major",relatedEips:[7594,7742],content:`Fusaka combined the Fulu consensus layer and Osaka execution layer upgrades. Key features include:
- PeerDAS (EIP-7594): Peer data availability sampling, enabling nodes to verify data availability without downloading full blobs
- Further improvements to validator operations and L2 data throughput
This upgrade continued Ethereum's push toward full danksharding.`,tags:["protocol","scaling"],links:[{label:"Forkcast: Fusaka",url:"https://forkcast.org/"},{label:"PeerDAS Explainer",url:"https://ethereum.org/en/roadmap/danksharding/"}]}],Ab=o=>{const t=o.reduce((i,r)=>(i[r.era]||(i[r.era]=[]),i[r.era].push(r),i),{});for(const i of Object.keys(t))t[i].sort((r,l)=>{const c=new Date(r.date).getTime(),d=new Date(l.date).getTime();return c!==d?c-d:r.blockNumber!==void 0&&l.blockNumber!==void 0?r.blockNumber-l.blockNumber:0});return t},Uo={protocol:{label:"Protocol",color:"text-purple-400",bg:"bg-purple-500/20",emoji:"⛓️",gradient:["#8B5CF6","#7C3AED","#6D28D9"]},scaling:{label:"Scaling",color:"text-blue-400",bg:"bg-blue-500/20",emoji:"📈",gradient:["#3B82F6","#2563EB","#1D4ED8"]},defi:{label:"DeFi",color:"text-emerald-400",bg:"bg-emerald-500/20",emoji:"💰",gradient:["#10B981","#059669","#047857"]},nft:{label:"NFT",color:"text-amber-400",bg:"bg-amber-500/20",emoji:"🖼️",gradient:["#F59E0B","#D97706","#B45309"]},social:{label:"Social",color:"text-pink-400",bg:"bg-pink-500/20",emoji:"💬",gradient:["#EC4899","#DB2777","#BE185D"]},research:{label:"Research",color:"text-indigo-400",bg:"bg-indigo-500/20",emoji:"🔬",gradient:["#6366F1","#4F46E5","#4338CA"]},security:{label:"Security",color:"text-red-400",bg:"bg-red-500/20",emoji:"🔒",gradient:["#EF4444","#DC2626","#B91C1C"]},adoption:{label:"Adoption",color:"text-green-400",bg:"bg-green-500/20",emoji:"🏛️",gradient:["#22C55E","#16A34A","#15803D"]},tvl:{label:"TVL",color:"text-teal-400",bg:"bg-teal-500/20",emoji:"📊",gradient:["#14B8A6","#0D9488","#0F766E"]},blobs:{label:"Blobs",color:"text-cyan-400",bg:"bg-cyan-500/20",emoji:"🫧",gradient:["#06B6D4","#0891B2","#0E7490"]}},wb=["#6B7280","#4B5563","#374151"];function Cb({node:o,isSelected:t,onClick:i}){const r=o.tags||[],l=r[0],c=new Date(o.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),d=l?Uo[l].gradient[0]:wb[0];return N.jsx("button",{onClick:i,className:`
        block w-full rounded-xl border-y border-r transition-all duration-300 text-left overflow-hidden
        bg-[var(--bg-secondary)]
        ${t?"border-[var(--eth-purple)] shadow-lg shadow-[var(--eth-purple)]/20":"border-[var(--bg-tertiary)] hover:border-[var(--eth-purple)]/50 hover:shadow-lg"}
      `,style:{borderLeftWidth:"4px",borderLeftColor:d,borderLeftStyle:"solid"},children:N.jsxs("div",{className:"p-5",children:[N.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.length>0&&N.jsxs("span",{className:`px-2 py-0.5 rounded text-xs font-medium ${Uo[r[0]].color} ${Uo[r[0]].bg}`,children:[Uo[r[0]].emoji," ",Uo[r[0]].label]}),N.jsx("span",{className:"text-sm text-[var(--text-muted)] shrink-0 ml-2",children:c})]}),N.jsx("h3",{className:"text-lg font-semibold leading-tight mb-3",children:o.title}),N.jsx("p",{className:"text-sm text-[var(--text-secondary)] mb-3",children:o.summary}),N.jsxs("div",{className:"flex items-end justify-between",children:[o.relatedEips&&o.relatedEips.length>0?N.jsx("div",{className:"flex flex-wrap gap-1",children:o.relatedEips.map(p=>N.jsxs("span",{className:"px-2 py-0.5 bg-[var(--bg-primary)]/50 rounded text-xs font-mono text-[var(--text-muted)]",children:["EIP-",p]},p))}):N.jsx("div",{}),o.blockNumber!==void 0&&N.jsxs("span",{className:"text-xs font-mono text-[var(--text-muted)] shrink-0 ml-2",children:[o.approximateBlock&&"~","#",o.blockNumber.toLocaleString()]})]})]})})}function Rb({era:o}){const t=Dh[o];return N.jsxs("div",{className:"relative flex justify-center mb-12",children:[N.jsx("div",{className:"absolute inset-0 blur-3xl opacity-20",style:{backgroundColor:t.color}}),N.jsxs("div",{className:"relative z-10 px-6 py-3 rounded-full border-2 bg-[var(--bg-primary)]",style:{borderColor:t.color},children:[N.jsx("div",{className:"absolute inset-0 rounded-full opacity-20 pointer-events-none",style:{backgroundColor:t.color}}),N.jsxs("div",{className:"relative text-center",children:[N.jsx("h2",{className:"text-xl font-bold uppercase tracking-wider",style:{color:t.color},children:t.name}),N.jsx("p",{className:"text-sm text-[var(--text-muted)]",children:t.years})]})]})]})}function Db({nodes:o,onSelectNode:t,selectedNodeId:i}){const r=Ab(o),l=Object.keys(Dh);return N.jsxs("section",{id:"timeline",className:"relative py-24",children:[N.jsx("div",{id:"timeline-spine",className:"absolute left-1/2 -translate-x-1/2 pointer-events-none",style:{top:"18rem",bottom:"0",width:"4px",background:"linear-gradient(to bottom, transparent 0%, var(--eth-purple) 2%, var(--eth-purple) 95%, transparent)",filter:"blur(8px)",opacity:.6}}),N.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 pointer-events-none",style:{top:"18rem",bottom:"0",width:"1px",background:"linear-gradient(to bottom, transparent 0%, var(--eth-purple) 2%, var(--eth-purple) 95%, transparent)",opacity:.3}}),l.map(c=>{const d=r[c]||[];return d.length===0?null:N.jsxs("div",{className:"relative mb-16",children:[N.jsx(Rb,{era:c}),d.map((p,m)=>N.jsx(Nb,{node:p,index:m,isSelected:i===p.id,onSelect:()=>t(p)},p.id))]},c)})]})}function Nb({node:o,index:t,isSelected:i,onSelect:r}){const l=t%2===0;return N.jsxs("div",{id:`event-${o.id}`,className:"relative mb-12",children:[N.jsx("div",{className:"max-w-5xl mx-auto px-8",children:N.jsx("div",{className:`
            w-[85%] max-w-2xl
            ${l?"mr-auto":"ml-auto"}
          `,children:N.jsx(Cb,{node:o,isSelected:i,onClick:r})})}),N.jsx("button",{onClick:r,className:`
          absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 z-10
          w-4 h-4 rounded-full border-2 transition-all duration-300
          ${i?"bg-[var(--eth-purple)] border-[var(--eth-purple)] scale-150":"bg-[var(--bg-primary)] border-[var(--eth-purple)] hover:bg-[var(--eth-purple)] hover:scale-125"}
          ${o.importance==="major"?"w-5 h-5":""}
        `})]})}function Ub(){const[o,t]=tt.useState(()=>{if(typeof window>"u")return"dark";const r=localStorage.getItem("theme");return r==="dark"||r==="light"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});return tt.useEffect(()=>{const r=document.documentElement;o==="dark"?(r.classList.remove("light"),r.classList.add("dark")):(r.classList.remove("dark"),r.classList.add("light"))},[o]),{theme:o,setTheme:r=>{t(r),localStorage.setItem("theme",r)}}}function Lb(){const[o,t]=tt.useState({total:0,perSecond:0}),[i,r]=tt.useState(0);tt.useEffect(()=>{const c=async()=>{try{const p=await fetch("https://ultrasound.money/api/v2/fees/burned");if(!p.ok)throw new Error("API request failed");const m=await p.json(),h=parseFloat(m.totalBurned)/1e18,x=parseFloat(m.burnRate1d)/86400;t({total:h,perSecond:x}),r(h)}catch(p){console.warn("Burned ETH API failed, using approximation:",p),t({total:45e5,perSecond:.03}),r(45e5)}};c();const d=setInterval(c,3e5);return()=>clearInterval(d)},[]),tt.useEffect(()=>{if(o.perSecond===0)return;const c=setInterval(()=>{r(d=>d+o.perSecond*10)},1e4);return()=>clearInterval(c)},[o.perSecond]);const l=c=>c>=1e6?`${(c/1e6).toFixed(2)}M`:c.toFixed(0);return N.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--bg-quaternary)] transform-gpu",title:"Total ETH burned since EIP-1559 (London fork, August 5, 2021). Burning makes ETH deflationary.",children:[N.jsx("div",{className:"w-2 h-2 rounded-full bg-orange-500 animate-pulse"}),N.jsxs("span",{className:"text-sm font-medium text-[var(--text-primary)]",children:[l(i)," ETH"]}),N.jsx("span",{className:"text-xs text-[var(--text-muted)]",children:"burned 🔥"})]})}function Ob(){const[o,t]=tt.useState({days:0,hours:0,minutes:0});return tt.useEffect(()=>{const i=new Date("2015-07-30T15:26:13Z").getTime(),r=()=>{const d=Date.now()-i,p=Math.floor(d/(1e3*60*60*24)),m=Math.floor(d%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(d%(1e3*60*60)/(1e3*60));t({days:p,hours:m,minutes:h})};r();const l=setInterval(r,6e4);return()=>clearInterval(l)},[]),N.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--bg-quaternary)] transform-gpu",title:"Ethereum has been running continuously since the genesis block on July 30, 2015",children:[N.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),N.jsxs("span",{className:"text-sm font-medium text-[var(--text-primary)]",children:[o.days.toLocaleString()," days"]}),N.jsx("span",{className:"text-xs text-[var(--text-muted)]",children:"uptime"})]})}function Pb(){const{theme:o,setTheme:t}=Ub(),i=()=>{t(o==="dark"?"light":"dark")};return N.jsx("button",{onClick:i,className:"p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors",title:`Switch to ${o==="dark"?"light":"dark"} mode`,children:o==="dark"?N.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):N.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}function Fb(){return N.jsx("header",{className:"sticky top-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--bg-tertiary)] shadow-sm",children:N.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between will-change-contents",children:[N.jsxs("div",{className:"flex items-center gap-3",children:[N.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--eth-purple)] to-[var(--eth-purple-light)] flex items-center justify-center",children:N.jsx("span",{className:"text-white font-bold text-sm",children:"Ξ"})}),N.jsx("span",{className:"font-semibold text-lg",children:"The Ethereum Archive"})]}),N.jsxs("nav",{className:"flex items-center gap-4 md:gap-6",children:[N.jsx("a",{href:"#timeline",className:"hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",children:"Timeline"}),N.jsx("a",{href:"https://eips.ethereum.org",target:"_blank",rel:"noopener noreferrer",className:"hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",children:"EIPs"}),N.jsx("a",{href:"https://github.com/its-applekid/ethereum-historical-society",target:"_blank",rel:"noopener noreferrer",className:"hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",children:"GitHub"}),N.jsx(Lb,{}),N.jsx(Ob,{}),N.jsx(Pb,{})]})]})})}const Bb=[],Ib={protocol:{label:"Protocol",color:"#A78BFA",bg:"rgba(167, 139, 250, 0.2)",emoji:"⛓️"},scaling:{label:"Scaling",color:"#60A5FA",bg:"rgba(96, 165, 250, 0.2)",emoji:"📈"},defi:{label:"DeFi",color:"#34D399",bg:"rgba(52, 211, 153, 0.2)",emoji:"💰"},nft:{label:"NFT",color:"#FBBF24",bg:"rgba(251, 191, 36, 0.2)",emoji:"🖼️"},social:{label:"Social",color:"#F472B6",bg:"rgba(244, 114, 182, 0.2)",emoji:"💬"},research:{label:"Research",color:"#818CF8",bg:"rgba(129, 140, 248, 0.2)",emoji:"🔬"},security:{label:"Security",color:"#F87171",bg:"rgba(248, 113, 113, 0.2)",emoji:"🔒"},adoption:{label:"Adoption",color:"#10B981",bg:"rgba(16, 185, 129, 0.2)",emoji:"🏛️"},tvl:{label:"TVL",color:"#2DD4BF",bg:"rgba(45, 212, 191, 0.2)",emoji:"📊"},blobs:{label:"Blobs",color:"#06B6D4",bg:"rgba(6, 182, 212, 0.2)",emoji:"🫧"}};function kb({node:o,onClose:t}){if(!o)return null;const i=Dh[o.era],r=new Date(o.date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),l=o.blockNumber?Bb.find(c=>c.blockNumber===o.blockNumber):void 0;return N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-40",onClick:t}),N.jsxs("div",{className:"fixed right-0 top-0 bottom-0 w-full max-w-lg bg-[var(--bg-secondary)] border-l border-[var(--bg-tertiary)] z-50 overflow-y-auto",children:[N.jsxs("div",{className:"sticky top-0 bg-[var(--bg-secondary)] border-b border-[var(--bg-tertiary)] px-6 py-4 flex items-start justify-between",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-sm text-[var(--text-muted)]",children:r}),N.jsx("h2",{className:"text-2xl font-bold mt-1",children:o.title})]}),N.jsx("button",{onClick:t,className:"p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors",children:N.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),N.jsxs("div",{className:"px-6 py-6 space-y-6",children:[N.jsx("div",{children:N.jsxs("span",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium",style:{backgroundColor:`${i.color}20`,color:i.color},children:[i.name," Era (",i.years,")"]})}),o.tags&&o.tags.length>0&&N.jsxs("div",{children:[N.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Categories"}),N.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(c=>{const d=Ib[c];return N.jsxs("span",{className:"px-3 py-1.5 rounded-lg text-sm font-medium",style:{backgroundColor:d.bg,color:d.color},children:[d.emoji," ",d.label]},c)})})]}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-1",children:"Summary"}),N.jsx("p",{className:"text-[var(--text-secondary)]",children:o.summary})]}),l&&N.jsxs("div",{className:"bg-[var(--bg-tertiary)] rounded-lg p-4",children:[N.jsxs("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-3",children:["📊 Context at Block #",o.blockNumber?.toLocaleString()]}),N.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[N.jsxs("div",{children:[N.jsx("p",{className:"text-xs text-[var(--text-muted)] mb-1",children:"Gas Price"}),N.jsxs("p",{className:"text-lg font-bold text-[var(--eth-purple)]",children:[l.gasPrice," gwei"]})]}),N.jsxs("div",{children:[N.jsx("p",{className:"text-xs text-[var(--text-muted)] mb-1",children:"ETH Price"}),N.jsxs("p",{className:"text-lg font-bold text-[var(--eth-green)]",children:["$",l.ethPriceUsd.toLocaleString()]})]}),N.jsxs("div",{children:[N.jsx("p",{className:"text-xs text-[var(--text-muted)] mb-1",children:"Typical TX"}),N.jsxs("p",{className:"text-lg font-bold text-[var(--text-primary)]",children:["$",l.typicalTxCostUsd]})]})]}),N.jsx("p",{className:"text-xs text-[var(--text-muted)] mt-3 italic",children:"Cost to send a simple ETH transfer (21,000 gas) at this block"})]}),o.content&&N.jsxs("div",{children:[N.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Details"}),N.jsx("div",{className:"prose prose-invert prose-sm max-w-none",children:o.content.split(`
`).map((c,d)=>c.trim()&&N.jsx("p",{className:"text-[var(--text-secondary)]",children:c},d))})]}),o.relatedEips&&o.relatedEips.length>0&&N.jsxs("div",{children:[N.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Related EIPs"}),N.jsx("div",{className:"flex flex-wrap gap-2",children:o.relatedEips.map(c=>N.jsxs("a",{href:`https://eips.ethereum.org/EIPS/eip-${c}`,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1.5 bg-[var(--bg-tertiary)] hover:bg-[var(--eth-purple)]/20 rounded-lg text-sm font-mono transition-colors",children:["EIP-",c," ↗"]},c))})]}),o.links&&o.links.length>0&&N.jsxs("div",{children:[N.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Primary Sources"}),N.jsx("div",{className:"space-y-2",children:o.links.map((c,d)=>N.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[var(--eth-purple)] hover:underline",children:[N.jsx("span",{children:c.label}),N.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]},d))})]}),o.blockNumber!==void 0&&N.jsx("div",{className:"flex justify-end pt-4 mt-4 border-t border-[var(--bg-tertiary)]",children:N.jsxs("a",{href:`https://etherscan.io/block/${o.blockNumber}`,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-sm text-[var(--text-muted)] hover:text-[var(--eth-purple)] transition-colors inline-flex items-center gap-1",title:o.approximateBlock?"Approximate block (based on date)":"Exact block number",children:[o.approximateBlock&&N.jsx("span",{className:"opacity-60",children:"~"}),"#",o.blockNumber.toLocaleString(),N.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})]})]})}const U0=[{id:"plasma",name:"Plasma",startBlock:437e4,color:"#666666",baseOpacity:.08,shimmerStyle:"slow",side:1,milestone:"Plasma Whitepaper"},{id:"raiden",name:"Raiden",startBlock:47e5,color:"#555555",baseOpacity:.06,shimmerStyle:"slow",side:-1,milestone:"Raiden Network"},{id:"optimism",name:"OP Mainnet",startBlock:12686786,color:"#FF0420",baseOpacity:.35,shimmerStyle:"medium",side:-1,milestone:"Optimism Mainnet Alpha"},{id:"arbitrum",name:"Arbitrum",startBlock:13133428,color:"#28A0F0",baseOpacity:.4,shimmerStyle:"fast",side:1,milestone:"Arbitrum One Launch"},{id:"zksync",name:"zkSync Era",startBlock:1689e4,color:"#4E529A",baseOpacity:.3,shimmerStyle:"pulse",side:-1,milestone:"zkSync Era Launch"},{id:"linea",name:"Linea",startBlock:1772e4,color:"#61DFFF",baseOpacity:.25,shimmerStyle:"wave",side:1,milestone:"Linea Launch"},{id:"base",name:"Base",startBlock:1788e4,color:"#0052FF",baseOpacity:.45,shimmerStyle:"fast",side:-1,milestone:"Base Mainnet Launch"},{id:"scroll",name:"Scroll",startBlock:184e5,color:"#FFEEDA",baseOpacity:.25,shimmerStyle:"wave",side:1,milestone:"Scroll Launch"}],zb=[{id:"homestead",block:115e4,name:"Homestead"},{id:"byzantium",block:437e4,name:"Byzantium"},{id:"constantinople",block:728e4,name:"Constantinople"},{id:"istanbul",block:9069e3,name:"Istanbul"},{id:"muir-glacier",block:92e5,name:"Muir Glacier"},{id:"berlin",block:12244e3,name:"Berlin"},{id:"london",block:12965e3,name:"London"},{id:"arrow-glacier",block:13773e3,name:"Arrow Glacier"},{id:"gray-glacier",block:1505e4,name:"Gray Glacier"},{id:"shapella",block:17034870,name:"Shapella"},{id:"dencun",block:19426587,name:"Dencun"}],$n={startBlock:11052984,mergeBlock:15537394,color:"#FF6B35",baseOpacity:.55},ei={startBlock:192e4,endBlock:15537394,color:"#34D399",baseOpacity:.2},Hb=235e5;function Vb({progress:o}){const t=r=>r/Hb,i=tt.useMemo(()=>U0.filter(r=>{const l=t(r.startBlock);return o>=l}).map(r=>{const l=t(r.startBlock),c=Math.min(1,(o-l)*5),d=o>.7?1+(o-.7)*1.5:1;return{...r,startProgress:l,currentOpacity:Math.min(.8,r.baseOpacity*c*d)}}),[o]);return N.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[N.jsx("style",{children:`
        @keyframes shimmer-slow {
          0%, 100% { opacity: var(--base-opacity); }
          50% { opacity: calc(var(--base-opacity) * 1.3); }
        }
        @keyframes shimmer-medium {
          0%, 100% { opacity: var(--base-opacity); }
          50% { opacity: calc(var(--base-opacity) * 1.5); }
        }
        @keyframes shimmer-fast {
          0%, 100% { opacity: var(--base-opacity); }
          50% { opacity: calc(var(--base-opacity) * 1.6); }
        }
        @keyframes shimmer-pulse {
          0%, 100% { opacity: var(--base-opacity); filter: blur(0.5px); }
          25% { opacity: calc(var(--base-opacity) * 1.4); filter: blur(0px); }
          75% { opacity: calc(var(--base-opacity) * 0.8); filter: blur(1px); }
        }
        @keyframes shimmer-wave {
          0% { opacity: var(--base-opacity); transform: translateX(0); }
          25% { opacity: calc(var(--base-opacity) * 1.3); transform: translateX(1px); }
          50% { opacity: var(--base-opacity); transform: translateX(0); }
          75% { opacity: calc(var(--base-opacity) * 1.3); transform: translateX(-1px); }
          100% { opacity: var(--base-opacity); transform: translateX(0); }
        }
        .shimmer-slow { animation: shimmer-slow 8s ease-in-out infinite; }
        .shimmer-medium { animation: shimmer-medium 4s ease-in-out infinite; }
        .shimmer-fast { animation: shimmer-fast 2s ease-in-out infinite; }
        .shimmer-pulse { animation: shimmer-pulse 3s ease-in-out infinite; }
        .shimmer-wave { animation: shimmer-wave 5s ease-in-out infinite; }
      `}),N.jsx("style",{children:`
        @keyframes live-pulse {
          0%, 100% { 
            opacity: 1;
            box-shadow: 0 0 8px var(--eth-purple), 0 0 16px var(--eth-purple);
          }
          50% { 
            opacity: 0.85;
            box-shadow: 0 0 15px var(--eth-purple), 0 0 30px var(--eth-purple-light);
          }
        }
        .live-line-shimmer {
          animation: live-pulse 2s ease-in-out infinite;
        }
      `}),o>.85&&N.jsx("div",{className:"absolute left-1/2 w-1 live-line-shimmer",style:{top:"92%",height:"8%",transform:"translateX(-50%)",background:"linear-gradient(to bottom, var(--eth-purple-light), var(--eth-purple))",borderRadius:"2px"}}),o>=t($n.startBlock)&&(()=>{const r=t($n.startBlock),l=t($n.mergeBlock),c=40,d=o>=l,p=Math.min(1,(o-r)*3),m=$n.baseOpacity*p,h=d?(l-r)*100:(o-r)*100;return N.jsxs(N.Fragment,{children:[N.jsx("span",{className:"absolute whitespace-nowrap font-mono",style:{left:`calc(50% + ${c+8}px)`,top:`${r*100+.5}%`,color:$n.color,opacity:m*1.2,fontSize:"10px",letterSpacing:"0.5px",textTransform:"uppercase",fontWeight:500},children:"Beacon Chain"}),N.jsx("div",{className:"absolute shimmer-medium",style:{"--base-opacity":m,left:`calc(50% + ${c}px)`,top:`${r*100}%`,height:`${h}%`,width:"3px",background:`linear-gradient(to bottom, transparent 0%, ${$n.color} 2%, ${$n.color} 100%)`,opacity:m,borderRadius:"1px"}}),N.jsx("div",{style:{position:"absolute",left:"50%",top:`${r*100}%`,width:`${c}px`,height:"2px",background:`linear-gradient(to right, ${$n.color}60, ${$n.color})`,opacity:m*.7}}),d&&N.jsxs("svg",{className:"absolute pointer-events-none",style:{left:"50%",top:`${l*100}%`,transform:"translateY(-2px)",overflow:"visible"},width:c+10,height:"60",children:[N.jsx("path",{d:`M ${c} 0 Q ${c} 30 0 50`,fill:"none",stroke:$n.color,strokeWidth:"3",opacity:m,strokeLinecap:"round"}),N.jsx("path",{d:`M ${c} 0 Q ${c} 30 0 50`,fill:"none",stroke:$n.color,strokeWidth:"8",opacity:m*.3,strokeLinecap:"round",filter:"blur(4px)"})]}),N.jsx("div",{className:"absolute",style:{left:`calc(50% + ${c-3}px)`,top:`${r*100}%`,width:"6px",height:"6px",borderRadius:"50%",background:$n.color,opacity:m,boxShadow:`0 0 10px ${$n.color}80`}})]})})(),o>=t(ei.startBlock)&&(()=>{const r=t(ei.startBlock),l=t(ei.endBlock),c=-35,d=o>=l,p=Math.min(1,(o-r)*3),m=ei.baseOpacity*p,h=d?(l-r)*100:(o-r)*100;return N.jsxs(N.Fragment,{children:[N.jsx("span",{className:"absolute whitespace-nowrap font-mono",style:{left:`calc(50% + ${c-60}px)`,top:`${r*100+.5}%`,color:ei.color,opacity:m*1.2,fontSize:"10px",letterSpacing:"0.5px",textTransform:"uppercase",fontWeight:500},children:"Ethereum Classic"}),N.jsx("div",{className:"absolute shimmer-slow",style:{"--base-opacity":m,left:`calc(50% + ${c}px)`,top:`${r*100}%`,height:`${h}%`,width:"2px",background:`linear-gradient(to bottom, ${ei.color} 0%, ${ei.color} 100%)`,opacity:m,borderRadius:"1px"}}),N.jsx("div",{style:{position:"absolute",left:`calc(50% + ${c}px)`,top:`${r*100}%`,width:`${-c}px`,height:"2px",background:`linear-gradient(to right, ${ei.color}, ${ei.color}60)`,opacity:m*.7}}),d&&N.jsxs("svg",{className:"absolute pointer-events-none",style:{left:`calc(50% + ${c}px)`,top:`${l*100}%`,transform:"translateY(-2px)",overflow:"visible"},width:-c+10,height:"60",children:[N.jsx("path",{d:`M 0 0 Q 0 30 ${-c} 50`,fill:"none",stroke:ei.color,strokeWidth:"2",opacity:m,strokeLinecap:"round"}),N.jsx("path",{d:`M 0 0 Q 0 30 ${-c} 50`,fill:"none",stroke:ei.color,strokeWidth:"6",opacity:m*.3,strokeLinecap:"round",filter:"blur(3px)"})]}),N.jsx("div",{className:"absolute",style:{left:`calc(50% + ${c-3}px)`,top:`${r*100}%`,width:"6px",height:"6px",borderRadius:"50%",background:ei.color,opacity:m,boxShadow:`0 0 8px ${ei.color}60`}})]})})(),zb.map((r,l)=>{const c=t(r.block);if(o<c)return null;const d=l%2===0?-1:1,p=20+l%3*8,h=.15*Math.min(1,(o-c)*8);return N.jsxs("svg",{className:"absolute pointer-events-none",style:{left:"50%",top:`${c*100}%`,transform:`translateX(${d===-1?`-${p+30}px`:"0"})`,overflow:"visible"},width:p+30,height:"50",children:[N.jsx("path",{d:d===1?`M 0 0 Q ${p} 15 ${p+25} 40`:`M ${p+30} 0 Q 30 15 5 40`,fill:"none",stroke:"var(--eth-purple)",strokeWidth:"2",opacity:h,strokeLinecap:"round",strokeDasharray:"4 3",style:{filter:"blur(0.5px)"}}),N.jsx("circle",{cx:d===1?p+25:5,cy:"40",r:"3",fill:"var(--eth-purple)",opacity:h*.5,style:{filter:"blur(2px)"}})]},r.id)}),i.map((r,l)=>{const c=U0.length,m=15+l/c*70,h=(r.side===1?5:-5)+l*7%10-5,x=Math.max(12,Math.min(88,m+h));return N.jsxs("div",{className:"absolute",style:{left:0,top:0,right:0,bottom:0},children:[N.jsx("div",{className:`absolute shimmer-${r.shimmerStyle}`,style:{"--base-opacity":r.currentOpacity,left:`${x}%`,top:`${r.startProgress*100}%`,transform:"translate(-50%, -50%)",width:"8px",height:"8px",borderRadius:"50%",background:r.color,opacity:r.currentOpacity,boxShadow:`0 0 6px ${r.color}60`}}),N.jsx("span",{className:"absolute whitespace-nowrap font-mono",style:{left:`${x+1.5}%`,top:`${r.startProgress*100}%`,transform:"translateY(-50%)",color:r.color,opacity:Math.min(.7,r.currentOpacity*2),fontSize:"9px",letterSpacing:"0.5px",textTransform:"uppercase"},children:r.name}),N.jsx("div",{className:`absolute shimmer-${r.shimmerStyle}`,style:{"--base-opacity":r.currentOpacity,left:`${x}%`,top:`${r.startProgress*100}%`,transform:"translateX(-50%)",height:`${(1-r.startProgress)*100}%`,width:o>.8?"3px":"2px",background:`linear-gradient(to bottom, ${r.color} 0%, ${r.color} 100%)`,opacity:r.currentOpacity,filter:"blur(0.5px)",boxShadow:o>.8?`0 0 ${8*(o-.8)*5}px ${r.color}40`:"none"}})]},r.id)}),o>=t(15537394)&&N.jsx("div",{className:"absolute animate-pulse",style:{left:"calc(50% - 6px)",top:`${t(15537394)*100}%`,width:"12px",height:"12px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,211,149,0.9) 0%, transparent 70%)",boxShadow:"0 0 20px rgba(0,211,149,0.6)"}}),o>=t(19426587)&&N.jsx("div",{className:"absolute animate-pulse",style:{left:"calc(50% - 4px)",top:`${t(19426587)*100}%`,width:"8px",height:"8px",borderRadius:"50%",background:"radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)",boxShadow:"0 0 15px rgba(6,182,212,0.5)"}}),N.jsx("style",{children:`
        @keyframes blob-float {
          0%, 100% { 
            transform: translateY(0) scale(1);
            opacity: var(--blob-opacity);
          }
          50% { 
            transform: translateY(-15px) scale(1.1);
            opacity: calc(var(--blob-opacity) * 1.3);
          }
        }
        @keyframes blob-wobble {
          0%, 100% { border-radius: 60% 40% 55% 45% / 55% 45% 50% 50%; }
          25% { border-radius: 45% 55% 45% 55% / 50% 55% 45% 50%; }
          50% { border-radius: 55% 45% 50% 50% / 45% 50% 55% 50%; }
          75% { border-radius: 50% 50% 45% 55% / 55% 45% 50% 55%; }
        }
        .blob-bubble {
          animation: blob-float 4s ease-in-out infinite, blob-wobble 8s ease-in-out infinite;
        }
      `}),o>=t(19426587)&&(()=>{const r=t(19426587),l=Math.min(1,(o-r)*3);return[{id:1,x:20,y:85,size:12,delay:0,opacity:.25},{id:2,x:35,y:88,size:8,delay:.5,opacity:.2},{id:3,x:55,y:83,size:15,delay:1,opacity:.3},{id:4,x:70,y:90,size:10,delay:1.5,opacity:.22},{id:5,x:80,y:86,size:9,delay:2,opacity:.18},{id:6,x:25,y:92,size:14,delay:2.5,opacity:.28},{id:7,x:45,y:95,size:11,delay:3,opacity:.24},{id:8,x:65,y:93,size:7,delay:3.5,opacity:.15},{id:9,x:15,y:89,size:13,delay:4,opacity:.26},{id:10,x:75,y:84,size:10,delay:4.5,opacity:.2}].map(d=>N.jsx("div",{className:"blob-bubble absolute",style:{"--blob-opacity":d.opacity*l,left:`${d.x}%`,top:`${d.y}%`,width:`${d.size}px`,height:`${d.size}px`,background:"radial-gradient(ellipse at 30% 30%, rgba(45, 212, 191, 0.6) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(6, 182, 212, 0.1) 100%)",boxShadow:"0 0 10px rgba(6, 182, 212, 0.3), inset 0 0 5px rgba(255,255,255,0.2)",animationDelay:`${d.delay}s, ${d.delay*.7}s`,opacity:d.opacity*l}},d.id))})()]})}const id="ja36Fe-m60k",Gb=tt.forwardRef(({autoPlay:o=!1},t)=>{const[i,r]=tt.useState(o),[l,c]=tt.useState(!1),[d,p]=tt.useState(!1),m=tt.useRef(null),h=tt.useRef(null);tt.useEffect(()=>{if(window.YT){p(!0);return}const g=document.createElement("script");g.src="https://www.youtube.com/iframe_api";const S=document.getElementsByTagName("script")[0];S.parentNode?.insertBefore(g,S),window.onYouTubeIframeAPIReady=()=>{p(!0)}},[]),tt.useEffect(()=>{!d||!h.current||m.current||(m.current=new window.YT.Player("yt-player",{height:"0",width:"0",videoId:id,playerVars:{autoplay:0,loop:1,playlist:id},events:{onReady:()=>{m.current&&m.current.setVolume(30)},onStateChange:g=>{g.data===window.YT.PlayerState.ENDED&&m.current?.playVideo()}}}))},[d]),tt.useEffect(()=>{m.current&&(i?m.current.playVideo():m.current.pauseVideo())},[i]),tt.useImperativeHandle(t,()=>({play:()=>r(!0),pause:()=>r(!1),toggle:()=>r(g=>!g)}));const x=()=>{r(!i)},_=g=>{m.current&&m.current.setVolume(g*100)};return N.jsxs("div",{className:"fixed bottom-4 left-4 z-50",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[N.jsx("div",{ref:h,className:"hidden",children:N.jsx("div",{id:"yt-player"})}),N.jsx("button",{onClick:x,className:`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300
          ${i?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-secondary)] text-[var(--text-muted)]"}
          hover:scale-110 hover:shadow-lg
          border border-[var(--bg-tertiary)]
        `,title:i?"Pause music":'Play "The Cyberpunk Runner" by Yuri Petrovski',children:i?N.jsxs("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:[N.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),N.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}):N.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})})}),l&&N.jsxs("div",{className:`
            absolute bottom-14 left-0 
            bg-[var(--bg-secondary)] rounded-lg p-3
            border border-[var(--bg-tertiary)]
            shadow-xl
            min-w-[200px]
            transition-opacity duration-200
          `,children:[N.jsxs("div",{className:"mb-3",children:[N.jsx("div",{className:"text-sm font-medium text-[var(--text-primary)]",children:"The Cyberpunk Runner"}),N.jsx("div",{className:"text-xs text-[var(--text-muted)]",children:"Yuri Petrovski"})]}),N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("svg",{className:"w-4 h-4 text-[var(--text-muted)]",fill:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"})}),N.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",defaultValue:.3,onChange:g=>_(parseFloat(g.target.value)),className:"flex-1 h-1 rounded-lg appearance-none bg-[var(--bg-tertiary)] cursor-pointer"})]}),N.jsx("div",{className:"mt-3 pt-3 border-t border-[var(--bg-tertiary)]",children:N.jsxs("a",{href:`https://www.youtube.com/watch?v=${id}`,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-[var(--text-muted)] hover:text-[var(--eth-purple)] flex items-center gap-1",children:[N.jsx("svg",{className:"w-3 h-3",fill:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})}),"Listen on YouTube"]})})]})]})}),jb=tt.forwardRef(({speed:o=50},t)=>{const[i,r]=tt.useState(!1);tt.useImperativeHandle(t,()=>({play:()=>r(!0),pause:()=>r(!1),toggle:()=>r(p=>!p)}));const l=tt.useRef(null),c=tt.useRef(null);tt.useEffect(()=>{if(!i){l.current&&(cancelAnimationFrame(l.current),l.current=null),c.current=null;return}const p=m=>{if(c.current===null){c.current=m,l.current=requestAnimationFrame(p);return}const h=m-c.current;c.current=m;const x=o*h/1e3,_=document.documentElement.scrollHeight-window.innerHeight;if(window.scrollY>=_-10){r(!1);return}window.scrollBy(0,x),l.current=requestAnimationFrame(p)};return l.current=requestAnimationFrame(p),()=>{l.current&&cancelAnimationFrame(l.current)}},[i,o]);const d=()=>{r(p=>!p)};return N.jsx("div",{className:"hidden md:block fixed bottom-20 left-4 z-50",children:N.jsx("button",{onClick:d,className:`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg
          ${i?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"}
        `,title:i?"Pause auto-scroll":"Auto-scroll through history",children:i?N.jsxs("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:[N.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),N.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}):N.jsx("svg",{className:"w-5 h-5 ml-0.5",fill:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{d:"M8 5v14l11-7z"})})})})});function Xb({variant:o="full",maxBlocks:t=5}){const[i,r]=tt.useState([]),[l,c]=tt.useState(!1),[d,p]=tt.useState(null);tt.useEffect(()=>{const _=["https://ethereum.publicnode.com","https://rpc.ankr.com/eth","https://cloudflare-eth.com","https://eth.llamarpc.com","https://1rpc.io/eth"];let g=0;const M=(()=>{const C=async()=>{let b=null;for(let R=0;R<_.length;R++){const F=(g+R)%_.length,U=_[F];try{const k=await(await fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",method:"eth_getBlockByNumber",params:["latest",!1],id:1})})).json();if(k.result){const I={number:parseInt(k.result.number,16),timestamp:parseInt(k.result.timestamp,16),hash:k.result.hash,gasUsed:parseInt(k.result.gasUsed,16),baseFeeGwei:k.result.baseFeePerGas?parseInt(k.result.baseFeePerGas,16)/1e9:void 0};r(T=>T.length===0||T[0].number!==I.number?[I,...T].slice(0,t):T),c(!0),p(null),g=F;return}}catch(V){b=V;continue}}b&&p("Failed to fetch blocks")};return C(),setInterval(C,12e3)})();return()=>{M&&clearInterval(M)}},[t]);const m=_=>new Date(_*1e3).toLocaleTimeString(),h=_=>(_/1e6).toFixed(1)+"M",x=_=>_?_.toFixed(1)+" gwei":"-";if(o==="ticker"){const _=i[0];return N.jsxs("div",{className:"flex items-center gap-2 text-sm text-[var(--text-muted)]",children:[N.jsx("span",{className:`w-2 h-2 rounded-full ${l?"bg-green-500 animate-pulse":"bg-gray-500"}`}),_?N.jsxs(N.Fragment,{children:[N.jsx("span",{children:"Block"}),N.jsxs("a",{href:`https://etherscan.io/block/${_.number}`,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-[var(--eth-purple)] hover:underline",children:["#",_.number.toLocaleString()]}),N.jsx("span",{className:"text-xs opacity-60",children:m(_.timestamp)})]}):N.jsx("span",{children:"Connecting..."})]})}return N.jsxs("div",{className:"bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-tertiary)] overflow-hidden",children:[N.jsxs("div",{className:"px-4 py-3 border-b border-[var(--bg-tertiary)] flex items-center justify-between",children:[N.jsxs("div",{className:"flex items-center gap-2",children:[N.jsx("span",{className:`w-2 h-2 rounded-full ${l?"bg-green-500 animate-pulse":"bg-gray-500"}`}),N.jsx("span",{className:"font-medium text-[var(--text-primary)]",children:"Live Blocks"})]}),N.jsx("a",{href:"https://etherscan.io/blocks",target:"_blank",rel:"noopener noreferrer",className:"text-xs text-[var(--text-muted)] hover:text-[var(--eth-purple)]",children:"View on Etherscan →"})]}),N.jsxs("div",{className:"divide-y divide-[var(--bg-tertiary)]",children:[d&&N.jsx("div",{className:"px-4 py-3 text-red-400 text-sm",children:d}),i.length===0&&!d&&N.jsxs("div",{className:"px-4 py-8 text-center text-[var(--text-muted)]",children:[N.jsx("div",{className:"animate-spin w-6 h-6 border-2 border-[var(--eth-purple)] border-t-transparent rounded-full mx-auto mb-2"}),"Waiting for blocks..."]}),i.slice().reverse().map((_,g,S)=>{const M=.4+g/S.length*.6,C=g===S.length-1;return N.jsxs("div",{className:`px-4 py-3 transition-all duration-500 ${C?"bg-[var(--eth-purple)]/10":""}`,style:{opacity:M},children:[N.jsxs("div",{className:"flex items-center justify-between mb-1",children:[N.jsxs("a",{href:`https://etherscan.io/block/${_.number}`,target:"_blank",rel:"noopener noreferrer",className:"font-mono font-medium text-[var(--eth-purple)] hover:underline",children:["#",_.number.toLocaleString()]}),N.jsx("span",{className:"text-xs text-[var(--text-muted)]",children:m(_.timestamp)})]}),N.jsxs("div",{className:"flex items-center gap-4 text-xs text-[var(--text-muted)]",children:[N.jsxs("span",{children:["Gas: ",_.gasUsed?h(_.gasUsed):"-"]}),N.jsxs("span",{children:["Base: ",x(_.baseFeeGwei)]}),N.jsxs("span",{className:"font-mono truncate max-w-[120px]",title:_.hash,children:[_.hash.slice(0,10),"..."]})]})]},_.hash)})]})]})}const Wb=[{id:"pectra",name:"Pectra (Prague-Electra)",expectedDate:"Q1 2025",description:"Account abstraction (EIP-7702), validator consolidation, and execution layer improvements.",status:"testing",links:[{label:"Forkcast: Pectra",url:"https://forkcast.org/"},{label:"EIP-7702 Spec",url:"https://eips.ethereum.org/EIPS/eip-7702"}]},{id:"verkle",name:"Verkle Trees",expectedDate:"2025-2026",description:"Replace Merkle Patricia Tries with Verkle trees for stateless clients and reduced witness sizes.",status:"planning",links:[{label:"Verkle.info",url:"https://verkle.info/"},{label:"Vitalik on Verkle",url:"https://vitalik.eth.limo/general/2021/06/18/verkle.html"}]},{id:"danksharding",name:"Full Danksharding",expectedDate:"2025+",description:"Complete data availability scaling with data availability sampling (DAS). The endgame for L2 scaling.",status:"planning",links:[{label:"Danksharding FAQ",url:"https://notes.ethereum.org/@vbuterin/proto_danksharding_faq"},{label:"ethereum.org Roadmap",url:"https://ethereum.org/en/roadmap/danksharding/"}]},{id:"single-slot",name:"Single Slot Finality",expectedDate:"Research",description:"Reduce finality time from ~15 minutes to a single 12-second slot.",status:"planning",links:[{label:"SSF Research",url:"https://ethereum.org/en/roadmap/single-slot-finality/"}]}],qb={planning:{bg:"bg-yellow-500/20",text:"text-yellow-500",label:"Planning"},testing:{bg:"bg-blue-500/20",text:"text-blue-500",label:"Testing"},scheduled:{bg:"bg-green-500/20",text:"text-green-500",label:"Scheduled"}};function Yb(){return N.jsx("section",{className:"px-8 py-16 relative z-10",children:N.jsxs("div",{className:"max-w-2xl mx-auto",children:[N.jsxs("div",{className:"text-center mb-8",children:[N.jsx("h2",{className:"text-3xl font-bold text-[var(--text-primary)] mb-2",children:"Future History"}),N.jsx("p",{className:"text-[var(--text-muted)]",children:"The history that hasn't happened yet. Upcoming upgrades and the road ahead."})]}),N.jsx("div",{className:"space-y-4",children:Wb.map(o=>{const t=qb[o.status];return N.jsxs("div",{className:`bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-tertiary)] p-5 
                           hover:border-[var(--eth-purple)]/50 transition-colors`,children:[N.jsxs("div",{className:"flex items-start justify-between mb-2",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"font-semibold text-[var(--text-primary)]",children:o.name}),N.jsx("span",{className:"text-sm text-[var(--text-muted)]",children:o.expectedDate})]}),N.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${t.bg} ${t.text}`,children:t.label})]}),N.jsx("p",{className:"text-sm text-[var(--text-secondary)] mb-3",children:o.description}),N.jsx("div",{className:"flex flex-wrap gap-2",children:o.links.map((i,r)=>N.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-[var(--eth-purple)] hover:underline flex items-center gap-1",children:[i.label,N.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]},r))})]},o.id)})}),N.jsx("div",{className:"mt-8 text-center",children:N.jsxs("a",{href:"https://forkcast.org/",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] 
                       border border-[var(--bg-tertiary)] rounded-lg
                       text-[var(--eth-purple)] hover:bg-[var(--eth-purple)]/10 transition-colors`,children:[N.jsx("span",{children:"Track all upgrades on Forkcast"}),N.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})})}const L0={protocol:{label:"Protocol",color:"#8B5CF6",emoji:"⛓️"},scaling:{label:"Scaling",color:"#3B82F6",emoji:"📈"},defi:{label:"DeFi",color:"#10B981",emoji:"💰"},nft:{label:"NFT",color:"#F59E0B",emoji:"🖼️"},social:{label:"Social",color:"#EC4899",emoji:"💬"},research:{label:"Research",color:"#6366F1",emoji:"🔬"},security:{label:"Security",color:"#EF4444",emoji:"🔒"},adoption:{label:"Adoption",color:"#059669",emoji:"🏛️"},tvl:{label:"TVL",color:"#14B8A6",emoji:"📊"},blobs:{label:"Blobs",color:"#06B6D4",emoji:"🫧"}},O0={all:{name:"Show Everything",tags:["protocol","scaling","defi","nft","social","research","security","adoption","tvl","blobs"]},protocol:{name:"Protocol Deep Dive",tags:["protocol","scaling","research","blobs"]},defi:{name:"DeFi Journey",tags:["defi","nft","adoption","tvl"]},highlights:{name:"Key Moments",tags:["protocol","defi","social","adoption","tvl","blobs"]}};function Zb({activeTags:o,onTagsChange:t,totalEvents:i,filteredCount:r}){const[l,c]=tt.useState(!1),d=tt.useRef(null);tt.useEffect(()=>{const g=S=>{d.current&&!d.current.contains(S.target)&&c(!1)};if(l)return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[l]);const p=g=>{o.includes(g)?t(o.filter(S=>S!==g)):t([...o,g])},m=g=>{t(O0[g].tags)},h=Object.keys(L0),_=!(o.length===h.length);return N.jsxs("div",{className:"fixed bottom-36 left-4 z-40 transform-gpu",ref:d,children:[l&&N.jsxs("div",{className:"absolute bottom-14 left-0 w-72 bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-tertiary)] shadow-xl overflow-hidden animate-in slide-in-from-bottom-2 duration-200 transform-gpu",children:[N.jsxs("div",{className:"px-4 py-3 border-b border-[var(--bg-tertiary)] flex items-center justify-between",children:[N.jsx("span",{className:"font-medium text-[var(--text-primary)]",children:"Filter Timeline"}),_&&N.jsxs("span",{className:"text-xs bg-[var(--eth-purple)] text-white px-2 py-0.5 rounded-full",children:[r,"/",i]})]}),N.jsxs("div",{className:"px-4 pb-4",children:[N.jsxs("div",{className:"py-3 border-b border-[var(--bg-tertiary)]",children:[N.jsx("div",{className:"text-xs text-[var(--text-muted)] mb-2",children:"Quick Presets"}),N.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(O0).map(([g,S])=>N.jsx("button",{onClick:()=>m(g),className:`
                      px-3 py-1.5 rounded-lg text-sm transition-colors
                      ${JSON.stringify(o.sort())===JSON.stringify(S.tags.sort())?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-primary)]"}
                    `,children:S.name},g))})]}),N.jsxs("div",{className:"pt-3",children:[N.jsx("div",{className:"text-xs text-[var(--text-muted)] mb-2",children:"Categories"}),N.jsx("div",{className:"flex flex-wrap gap-2",children:h.map(g=>{const S=L0[g],M=o.includes(g);return N.jsxs("button",{onClick:()=>p(g),className:`
                        px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 transition-all
                        ${M?"ring-2 ring-offset-2 ring-offset-[var(--bg-secondary)]":"opacity-50 hover:opacity-75"}
                      `,style:{backgroundColor:M?S.color+"30":"var(--bg-tertiary)",color:M?S.color:"var(--text-muted)","--tw-ring-color":M?S.color:"transparent"},children:[N.jsx("span",{children:S.emoji}),N.jsx("span",{children:S.label})]},g)})})]}),N.jsxs("div",{className:"pt-3 flex gap-2",children:[N.jsx("button",{onClick:()=>t(h),className:"text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]",children:"Select All"}),N.jsx("span",{className:"text-[var(--text-muted)]",children:"·"}),N.jsx("button",{onClick:()=>t([]),className:"text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]",children:"Clear All"})]})]})]}),N.jsxs("button",{onClick:()=>c(!l),className:`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg
          ${l||_?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"}
        `,title:"Filter timeline events",children:[N.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),_&&!l&&N.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:o.length})]})]})}const Nh="183",Kb=0,P0=1,Qb=2,Nc=1,Jb=2,zo=3,ir=0,Gn=1,ga=2,_a=0,Ds=1,F0=2,B0=3,I0=4,$b=5,Rr=100,ey=101,ty=102,ny=103,iy=104,ay=200,ry=201,sy=202,oy=203,Bd=204,Id=205,ly=206,cy=207,uy=208,fy=209,dy=210,hy=211,py=212,my=213,gy=214,kd=0,zd=1,Hd=2,Us=3,Vd=4,Gd=5,jd=6,Xd=7,Nv=0,vy=1,_y=2,Hi=0,Uv=1,Lv=2,Ov=3,Pv=4,Fv=5,Bv=6,Iv=7,kv=300,Lr=301,Ls=302,ad=303,rd=304,Vc=306,Wd=1e3,va=1001,qd=1002,Mn=1003,xy=1004,lc=1005,Cn=1006,sd=1007,Nr=1008,mi=1009,zv=1010,Hv=1011,Vo=1012,Uh=1013,ji=1014,ki=1015,ba=1016,Lh=1017,Oh=1018,Go=1020,Vv=35902,Gv=35899,jv=1021,Xv=1022,Ri=1023,ya=1026,Ur=1027,Wv=1028,Ph=1029,Os=1030,Fh=1031,Bh=1033,Uc=33776,Lc=33777,Oc=33778,Pc=33779,Yd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,eh=37496,th=37488,nh=37489,ih=37490,ah=37491,rh=37808,sh=37809,oh=37810,lh=37811,ch=37812,uh=37813,fh=37814,dh=37815,hh=37816,ph=37817,mh=37818,gh=37819,vh=37820,_h=37821,xh=36492,bh=36494,yh=36495,Sh=36283,Eh=36284,Mh=36285,Th=36286,by=3200,yy=0,Sy=1,tr="",hi="srgb",Ps="srgb-linear",Bc="linear",It="srgb",gs=7680,k0=519,Ey=512,My=513,Ty=514,Ih=515,Ay=516,wy=517,kh=518,Cy=519,z0=35044,H0="300 es",zi=2e3,Ic=2001;function Ry(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Dy(){const o=kc("canvas");return o.style.display="block",o}const V0={};function G0(...o){const t="THREE."+o.shift();console.log(t,...o)}function qv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ot(...o){o=qv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Rt(...o){o=qv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function zc(...o){const t=o.join(" ");t in V0||(V0[t]=!0,ot(...o))}function Ny(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Uy={[kd]:zd,[Hd]:jd,[Vd]:Xd,[Us]:Gd,[zd]:kd,[jd]:Hd,[Xd]:Vd,[Gd]:Us};class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,Ah=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function Ly(o,t){return(o%t+t)%t}function ld(o,t,i){return(1-i)*o+i*t}function Lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,i=0){kt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],x=r[l+2],_=r[l+3],g=c[d+0],S=c[d+1],M=c[d+2],C=c[d+3];if(_!==C||m!==g||h!==S||x!==M){let y=m*g+h*S+x*M+_*C;y<0&&(g=-g,S=-S,M=-M,C=-C,y=-y);let b=1-p;if(y<.9995){const R=Math.acos(y),F=Math.sin(R);b=Math.sin(b*R)/F,p=Math.sin(p*R)/F,m=m*b+g*p,h=h*b+S*p,x=x*b+M*p,_=_*b+C*p}else{m=m*b+g*p,h=h*b+S*p,x=x*b+M*p,_=_*b+C*p;const R=1/Math.sqrt(m*m+h*h+x*x+_*_);m*=R,h*=R,x*=R,_*=R}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],x=r[l+3],_=c[d],g=c[d+1],S=c[d+2],M=c[d+3];return t[i]=p*M+x*_+m*S-h*g,t[i+1]=m*M+x*g+h*_-p*S,t[i+2]=h*M+x*S+p*g-m*_,t[i+3]=x*M-p*_-m*g-h*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(l/2),_=p(c/2),g=m(r/2),S=m(l/2),M=m(c/2);switch(d){case"XYZ":this._x=g*x*_+h*S*M,this._y=h*S*_-g*x*M,this._z=h*x*M+g*S*_,this._w=h*x*_-g*S*M;break;case"YXZ":this._x=g*x*_+h*S*M,this._y=h*S*_-g*x*M,this._z=h*x*M-g*S*_,this._w=h*x*_+g*S*M;break;case"ZXY":this._x=g*x*_-h*S*M,this._y=h*S*_+g*x*M,this._z=h*x*M+g*S*_,this._w=h*x*_-g*S*M;break;case"ZYX":this._x=g*x*_-h*S*M,this._y=h*S*_+g*x*M,this._z=h*x*M-g*S*_,this._w=h*x*_+g*S*M;break;case"YZX":this._x=g*x*_+h*S*M,this._y=h*S*_+g*x*M,this._z=h*x*M-g*S*_,this._w=h*x*_-g*S*M;break;case"XZY":this._x=g*x*_-h*S*M,this._y=h*S*_-g*x*M,this._z=h*x*M+g*S*_,this._w=h*x*_+g*S*M;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],_=i[10],g=r+p+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-m)*S,this._y=(c-h)*S,this._z=(d-l)*S}else if(r>p&&r>_){const S=2*Math.sqrt(1+r-p-_);this._w=(x-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+h)/S}else if(p>_){const S=2*Math.sqrt(1+p-r-_);this._w=(c-h)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+x)/S}else{const S=2*Math.sqrt(1+_-r-p);this._w=(d-l)/S,this._x=(c+h)/S,this._y=(m+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-r*h,this._z=c*x+d*h+r*m-l*p,this._w=d*x-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(j0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(j0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*r),x=2*(p*i-c*l),_=2*(c*r-d*i);return this.x=i+m*h+d*_-p*x,this.y=r+m*x+p*h-c*_,this.z=l+m*_+c*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return cd.copy(this).projectOnVector(t),this.sub(cd)}reflect(t){return this.sub(cd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cd=new re,j0=new Is;class ht{constructor(t,i,r,l,c,d,p,m,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h)}set(t,i,r,l,c,d,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],_=r[7],g=r[2],S=r[5],M=r[8],C=l[0],y=l[3],b=l[6],R=l[1],F=l[4],U=l[7],V=l[2],k=l[5],I=l[8];return c[0]=d*C+p*R+m*V,c[3]=d*y+p*F+m*k,c[6]=d*b+p*U+m*I,c[1]=h*C+x*R+_*V,c[4]=h*y+x*F+_*k,c[7]=h*b+x*U+_*I,c[2]=g*C+S*R+M*V,c[5]=g*y+S*F+M*k,c[8]=g*b+S*U+M*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*d*x-i*p*h-r*c*x+r*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],_=x*d-p*h,g=p*m-x*c,S=h*c-d*m,M=i*_+r*g+l*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return t[0]=_*C,t[1]=(l*h-x*r)*C,t[2]=(p*r-l*d)*C,t[3]=g*C,t[4]=(x*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=S*C,t[7]=(r*m-h*i)*C,t[8]=(d*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(ud.makeScale(t,i)),this}rotate(t){return this.premultiply(ud.makeRotation(-t)),this}translate(t,i){return this.premultiply(ud.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new ht,X0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oy(){const o={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===It&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===tr?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return zc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return zc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ps]:{primaries:t,whitePoint:r,transfer:Bc,toXYZ:X0,fromXYZ:W0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:It,toXYZ:X0,fromXYZ:W0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Tt=Oy();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vs;class Py{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=kc("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fy=0;class zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(fd(l[d].image)):c.push(fd(l[d]))}else c=fd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function fd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Py.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let By=0;const dd=new re;class Pn extends Bs{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=va,l=va,c=Cn,d=Nr,p=Ri,m=mi,h=Pn.DEFAULT_ANISOTROPY,x=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Xo(),this.name="",this.source=new zh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wd:t.x=t.x-Math.floor(t.x);break;case va:t.x=t.x<0?0:1;break;case qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wd:t.y=t.y-Math.floor(t.y);break;case va:t.y=t.y<0?0:1;break;case qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=kv;Pn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,h=m[0],x=m[4],_=m[8],g=m[1],S=m[5],M=m[9],C=m[2],y=m[6],b=m[10];if(Math.abs(x-g)<.01&&Math.abs(_-C)<.01&&Math.abs(M-y)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+C)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(h+1)/2,U=(S+1)/2,V=(b+1)/2,k=(x+g)/4,I=(_+C)/4,T=(M+y)/4;return F>U&&F>V?F<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(F),l=k/r,c=I/r):U>V?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=k/l,c=T/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=I/c,l=T/c),this.set(r,l,c,i),this}let R=Math.sqrt((y-M)*(y-M)+(_-C)*(_-C)+(g-x)*(g-x));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(_-C)/R,this.z=(g-x)/R,this.w=Math.acos((h+S+b-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iy extends Bs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new Pn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Iy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Yv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ky extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(t,i,r,l,c,d,p,m,h,x,_,g,S,M,C,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h,x,_,g,S,M,C,y)}set(t,i,r,l,c,d,p,m,h,x,_,g,S,M,C,y){const b=this.elements;return b[0]=t,b[4]=i,b[8]=r,b[12]=l,b[1]=c,b[5]=d,b[9]=p,b[13]=m,b[2]=h,b[6]=x,b[10]=_,b[14]=g,b[3]=S,b[7]=M,b[11]=C,b[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),d=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const g=d*x,S=d*_,M=p*x,C=p*_;i[0]=m*x,i[4]=-m*_,i[8]=h,i[1]=S+M*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=M+S*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*x,S=m*_,M=h*x,C=h*_;i[0]=g+C*p,i[4]=M*p-S,i[8]=d*h,i[1]=d*_,i[5]=d*x,i[9]=-p,i[2]=S*p-M,i[6]=C+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*x,S=m*_,M=h*x,C=h*_;i[0]=g-C*p,i[4]=-d*_,i[8]=M+S*p,i[1]=S+M*p,i[5]=d*x,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*x,S=d*_,M=p*x,C=p*_;i[0]=m*x,i[4]=M*h-S,i[8]=g*h+C,i[1]=m*_,i[5]=C*h+g,i[9]=S*h-M,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,S=d*h,M=p*m,C=p*h;i[0]=m*x,i[4]=C-g*_,i[8]=M*_+S,i[1]=_,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=S*_+M,i[10]=g-C*_}else if(t.order==="XZY"){const g=d*m,S=d*h,M=p*m,C=p*h;i[0]=m*x,i[4]=-_,i[8]=h*x,i[1]=g*_+C,i[5]=d*x,i[9]=S*_-M,i[2]=M*_-S,i[6]=p*x,i[10]=C*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zy,t,Hy)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Za.crossVectors(r,ti),Za.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Za.crossVectors(r,ti)),Za.normalize(),cc.crossVectors(ti,Za),l[0]=Za.x,l[4]=cc.x,l[8]=ti.x,l[1]=Za.y,l[5]=cc.y,l[9]=ti.y,l[2]=Za.z,l[6]=cc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],_=r[5],g=r[9],S=r[13],M=r[2],C=r[6],y=r[10],b=r[14],R=r[3],F=r[7],U=r[11],V=r[15],k=l[0],I=l[4],T=l[8],D=l[12],ue=l[1],H=l[5],K=l[9],J=l[13],se=l[2],Q=l[6],L=l[10],B=l[14],oe=l[3],fe=l[7],ye=l[11],P=l[15];return c[0]=d*k+p*ue+m*se+h*oe,c[4]=d*I+p*H+m*Q+h*fe,c[8]=d*T+p*K+m*L+h*ye,c[12]=d*D+p*J+m*B+h*P,c[1]=x*k+_*ue+g*se+S*oe,c[5]=x*I+_*H+g*Q+S*fe,c[9]=x*T+_*K+g*L+S*ye,c[13]=x*D+_*J+g*B+S*P,c[2]=M*k+C*ue+y*se+b*oe,c[6]=M*I+C*H+y*Q+b*fe,c[10]=M*T+C*K+y*L+b*ye,c[14]=M*D+C*J+y*B+b*P,c[3]=R*k+F*ue+U*se+V*oe,c[7]=R*I+F*H+U*Q+V*fe,c[11]=R*T+F*K+U*L+V*ye,c[15]=R*D+F*J+U*B+V*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],x=t[2],_=t[6],g=t[10],S=t[14],M=t[3],C=t[7],y=t[11],b=t[15],R=m*S-h*g,F=p*S-h*_,U=p*g-m*_,V=d*S-h*x,k=d*g-m*x,I=d*_-p*x;return i*(C*R-y*F+b*U)-r*(M*R-y*V+b*k)+l*(M*F-C*V+b*I)-c*(M*U-C*k+y*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],_=t[9],g=t[10],S=t[11],M=t[12],C=t[13],y=t[14],b=t[15],R=i*p-r*d,F=i*m-l*d,U=i*h-c*d,V=r*m-l*p,k=r*h-c*p,I=l*h-c*m,T=x*C-_*M,D=x*y-g*M,ue=x*b-S*M,H=_*y-g*C,K=_*b-S*C,J=g*b-S*y,se=R*J-F*K+U*H+V*ue-k*D+I*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/se;return t[0]=(p*J-m*K+h*H)*Q,t[1]=(l*K-r*J-c*H)*Q,t[2]=(C*I-y*k+b*V)*Q,t[3]=(g*k-_*I-S*V)*Q,t[4]=(m*ue-d*J-h*D)*Q,t[5]=(i*J-l*ue+c*D)*Q,t[6]=(y*U-M*I-b*F)*Q,t[7]=(x*I-g*U+S*F)*Q,t[8]=(d*K-p*ue+h*T)*Q,t[9]=(r*ue-i*K-c*T)*Q,t[10]=(M*k-C*U+b*R)*Q,t[11]=(_*U-x*k-S*R)*Q,t[12]=(p*D-d*H-m*T)*Q,t[13]=(i*H-r*D+l*T)*Q,t[14]=(C*F-M*V-y*R)*Q,t[15]=(x*V-_*F+g*R)*Q,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,m=t.z,h=c*d,x=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+r,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,_=p+p,g=c*h,S=c*x,M=c*_,C=d*x,y=d*_,b=p*_,R=m*h,F=m*x,U=m*_,V=r.x,k=r.y,I=r.z;return l[0]=(1-(C+b))*V,l[1]=(S+U)*V,l[2]=(M-F)*V,l[3]=0,l[4]=(S-U)*k,l[5]=(1-(g+b))*k,l[6]=(y+R)*k,l[7]=0,l[8]=(M+F)*I,l[9]=(y-R)*I,l[10]=(1-(g+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=_s.set(l[0],l[1],l[2]).length();const p=_s.set(l[4],l[5],l[6]).length(),m=_s.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ti.copy(this);const h=1/d,x=1/p,_=1/m;return Ti.elements[0]*=h,Ti.elements[1]*=h,Ti.elements[2]*=h,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),r.x=d,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,d,p=zi,m=!1){const h=this.elements,x=2*c/(i-t),_=2*c/(r-l),g=(i+t)/(i-t),S=(r+l)/(r-l);let M,C;if(m)M=c/(d-c),C=d*c/(d-c);else if(p===zi)M=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===Ic)M=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=zi,m=!1){const h=this.elements,x=2/(i-t),_=2/(r-l),g=-(i+t)/(i-t),S=-(r+l)/(r-l);let M,C;if(m)M=1/(d-c),C=d/(d-c);else if(p===zi)M=-2/(d-c),C=-(d+c)/(d-c);else if(p===Ic)M=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new re,Ti=new dn,zy=new re(0,0,0),Hy=new re(1,1,1),Za=new re,cc=new re,ti=new re,q0=new dn,Y0=new Is;class Sa{constructor(t=0,i=0,r=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],_=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return q0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class Zv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vy=0;const Z0=new re,xs=new Is,fa=new dn,uc=new re,Oo=new re,Gy=new re,jy=new Is,K0=new re(1,0,0),Q0=new re(0,1,0),J0=new re(0,0,1),$0={type:"added"},Xy={type:"removed"},bs={type:"childadded",child:null},hd={type:"childremoved",child:null};class ii extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const t=new re,i=new Sa,r=new Is,l=new re(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ht}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(K0,t)}rotateY(t){return this.rotateOnAxis(Q0,t)}rotateZ(t){return this.rotateOnAxis(J0,t)}translateOnAxis(t,i){return Z0.copy(t).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(K0,t)}translateY(t){return this.translateOnAxis(Q0,t)}translateZ(t){return this.translateOnAxis(J0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?uc.copy(t):uc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Oo,uc,this.up):fa.lookAt(uc,Oo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(fa),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($0),bs.child=t,this.dispatchEvent(bs),bs.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Xy),hd.child=t,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($0),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,Gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,jy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const _=m[h];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),x=d(t.images),_=d(t.shapes),g=d(t.skeletons),S=d(t.animations),M=d(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=l,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ii.DEFAULT_UP=new re(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fc extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wy={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),b=this._getHandJoint(h,C);y!==null&&(b.matrix.fromArray(y.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=y.radius),b.visible=y!==null}const x=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=x.position.distanceTo(_.position),S=.02,M=.005;h.inputState.pinching&&g>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new fc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},dc={h:0,s:0,l:0};function md(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ut{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Tt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Tt.workingColorSpace){if(t=Ly(t,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=md(d,c,t+1/3),this.g=md(d,c,t),this.b=md(d,c,t-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=Kv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Tt.workingToColorSpace(wn.copy(this),t),Math.round(St(wn.r*255,0,255))*65536+Math.round(St(wn.g*255,0,255))*256+Math.round(St(wn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Tt.workingColorSpace){Tt.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const _=d-p;switch(h=x<=.5?_/(d+p):_/(2-d-p),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Tt.workingColorSpace){return Tt.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=hi){Tt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(dc);const r=ld(Ka.h,dc.h,i),l=ld(Ka.s,dc.s,i),c=ld(Ka.l,dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ut;Ut.NAMES=Kv;class Hh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=i,this.far=r}clone(){return new Hh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qy extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new re,da=new re,gd=new re,ha=new re,ys=new re,Ss=new re,ev=new re,vd=new re,_d=new re,xd=new re,bd=new nn,yd=new nn,Sd=new nn;class Ci{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ai.subVectors(l,i),da.subVectors(r,i),gd.subVectors(t,i);const d=Ai.dot(Ai),p=Ai.dot(da),m=Ai.dot(gd),h=da.dot(da),x=da.dot(gd),_=d*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,S=(h*m-p*x)*g,M=(d*x-p*m)*g;return c.set(1-S-M,M,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,r,l,c,d,p,m){return this.getBarycoord(t,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return bd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),bd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,r),Sd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(bd,c.x),d.addScaledVector(yd,c.y),d.addScaledVector(Sd,c.z),d}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;ys.subVectors(l,r),Ss.subVectors(c,r),vd.subVectors(t,r);const m=ys.dot(vd),h=Ss.dot(vd);if(m<=0&&h<=0)return i.copy(r);_d.subVectors(t,l);const x=ys.dot(_d),_=Ss.dot(_d);if(x>=0&&_<=x)return i.copy(l);const g=m*_-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(ys,d);xd.subVectors(t,c);const S=ys.dot(xd),M=Ss.dot(xd);if(M>=0&&S<=M)return i.copy(c);const C=S*h-m*M;if(C<=0&&h>=0&&M<=0)return p=h/(h-M),i.copy(r).addScaledVector(Ss,p);const y=x*M-S*_;if(y<=0&&_-x>=0&&S-M>=0)return ev.subVectors(c,l),p=(_-x)/(_-x+(S-M)),i.copy(l).addScaledVector(ev,p);const b=1/(y+C+g);return d=C*b,p=g*b,i.copy(r).addScaledVector(ys,d).addScaledVector(Ss,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Wo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hc.copy(r.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),pc.subVectors(this.max,Po),Es.subVectors(t.a,Po),Ms.subVectors(t.b,Po),Ts.subVectors(t.c,Po),Qa.subVectors(Ms,Es),Ja.subVectors(Ts,Ms),Sr.subVectors(Es,Ts);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Sr.z,Sr.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Sr.z,0,-Sr.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Sr.y,Sr.x,0];return!Ed(i,Es,Ms,Ts,pc)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,Es,Ms,Ts,pc))?!1:(mc.crossVectors(Qa,Ja),i=[mc.x,mc.y,mc.z],Ed(i,Es,Ms,Ts,pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new re,new re,new re,new re,new re,new re,new re,new re],wi=new re,hc=new Wo,Es=new re,Ms=new re,Ts=new re,Qa=new re,Ja=new re,Sr=new re,Po=new re,pc=new re,mc=new re,Er=new re;function Ed(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){Er.fromArray(o,c);const p=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=t.dot(Er),h=i.dot(Er),x=r.dot(Er);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const fn=new re,gc=new kt;let Yy=0;class Gi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=z0,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(t),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==z0&&(t.usage=this.usage),t}}class Qv extends Gi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Jv extends Gi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class gi extends Gi{constructor(t,i,r){super(new Float32Array(t),i,r)}}const Zy=new Wo,Fo=new re,Md=new re;class Vh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Zy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Fo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(Md)),this.expandByPoint(Fo.copy(t.center).sub(Md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ky=0;const di=new dn,Td=new ii,As=new re,ni=new Wo,Bo=new Wo,xn=new re;class Xi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ry(t)?Jv:Qv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Td.lookAt(t),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Bo.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ni.min,Bo.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Bo.max),ni.expandByPoint(xn)):(ni.expandByPoint(Bo.min),ni.expandByPoint(Bo.max))}ni.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)xn.fromBufferAttribute(p,h),m&&(As.fromBufferAttribute(t,h),xn.add(As)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new re,m[T]=new re;const h=new re,x=new re,_=new re,g=new kt,S=new kt,M=new kt,C=new re,y=new re;function b(T,D,ue){h.fromBufferAttribute(r,T),x.fromBufferAttribute(r,D),_.fromBufferAttribute(r,ue),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,D),M.fromBufferAttribute(c,ue),x.sub(h),_.sub(h),S.sub(g),M.sub(g);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(C.copy(x).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(H),y.copy(_).multiplyScalar(S.x).addScaledVector(x,-M.x).multiplyScalar(H),p[T].add(C),p[D].add(C),p[ue].add(C),m[T].add(y),m[D].add(y),m[ue].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let T=0,D=R.length;T<D;++T){const ue=R[T],H=ue.start,K=ue.count;for(let J=H,se=H+K;J<se;J+=3)b(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const F=new re,U=new re,V=new re,k=new re;function I(T){V.fromBufferAttribute(l,T),k.copy(V);const D=p[T];F.copy(D),F.sub(V.multiplyScalar(V.dot(D))).normalize(),U.crossVectors(k,D);const H=U.dot(m[T])<0?-1:1;d.setXYZW(T,F.x,F.y,F.z,H)}for(let T=0,D=R.length;T<D;++T){const ue=R[T],H=ue.start,K=ue.count;for(let J=H,se=H+K;J<se;J+=3)I(t.getX(J+0)),I(t.getX(J+1)),I(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const l=new re,c=new re,d=new re,p=new re,m=new re,h=new re,x=new re,_=new re;if(t)for(let g=0,S=t.count;g<S;g+=3){const M=t.getX(g+0),C=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),p.add(x),m.add(x),h.add(x),r.setXYZ(M,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,_=p.normalized,g=new h.constructor(m.length*x);let S=0,M=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?S=m[C]*p.data.stride+p.offset:S=m[C]*x;for(let b=0;b<x;b++)g[M++]=h[S++]}return new Gi(g,x,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,_=h.length;x<_;x++){const g=h[x],S=t(g,r);m.push(S)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let _=0,g=h.length;_<g;_++){const S=h[_];x.push(S.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],_=c[h];for(let g=0,S=_.length;g<S;g++)x.push(_[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Qy=0;class Gc extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Ds,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Id,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ma=new re,Ad=new re,vc=new re,$a=new re,wd=new re,_c=new re,Cd=new re;class Jy{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ad.copy(t).add(i).multiplyScalar(.5),vc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(Ad);const c=t.distanceTo(i)*.5,d=-this.direction.dot(vc),p=$a.dot(this.direction),m=-$a.dot(vc),h=$a.lengthSq(),x=Math.abs(1-d*d);let _,g,S,M;if(x>0)if(_=d*m-p,g=d*p-m,M=c*x,_>=0)if(g>=-M)if(g<=M){const C=1/x;_*=C,g*=C,S=_*(_+d*g+2*p)+g*(d*_+g+2*m)+h}else g=c,_=Math.max(0,-(d*g+p)),S=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(d*g+p)),S=-_*_+g*(g+2*m)+h;else g<=-M?(_=Math.max(0,-(-d*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+g*(g+2*m)+h):g<=M?(_=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+h):(_=Math.max(0,-(d*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+g*(g+2*m)+h);else g=d>0?-c:c,_=Math.max(0,-(d*g+p)),S=-_*_+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ad).addScaledVector(vc,g),S}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const r=ma.dot(this.direction),l=ma.dot(ma)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),x>=0?(c=(t.min.y-g.y)*x,d=(t.max.y-g.y)*x):(c=(t.max.y-g.y)*x,d=(t.min.y-g.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(t.min.z-g.z)*_,m=(t.max.z-g.z)*_):(p=(t.max.z-g.z)*_,m=(t.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,r,l,c){wd.subVectors(i,t),_c.subVectors(r,t),Cd.crossVectors(wd,_c);let d=this.direction.dot(Cd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;$a.subVectors(this.origin,t);const m=p*this.direction.dot(_c.crossVectors($a,_c));if(m<0)return null;const h=p*this.direction.dot(wd.cross($a));if(h<0||m+h>d)return null;const x=-p*$a.dot(Cd);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $v extends Gc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tv=new dn,Mr=new Jy,xc=new Vh,nv=new re,bc=new re,yc=new re,Sc=new re,Rd=new re,Ec=new re,iv=new re,Mc=new re;class Di extends ii{constructor(t=new Xi,i=new $v){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Ec.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],_=c[m];x!==0&&(Rd.fromBufferAttribute(_,t),d?Ec.addScaledVector(Rd,x):Ec.addScaledVector(Rd.sub(i),x))}i.add(Ec)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(c),Mr.copy(t.ray).recast(t.near),!(xc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(xc,nv)===null||Mr.origin.distanceToSquared(nv)>(t.far-t.near)**2))&&(tv.copy(c).invert(),Mr.copy(t.ray).applyMatrix4(tv),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,g=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(d))for(let M=0,C=g.length;M<C;M++){const y=g[M],b=d[y.materialIndex],R=Math.max(y.start,S.start),F=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let U=R,V=F;U<V;U+=3){const k=p.getX(U),I=p.getX(U+1),T=p.getX(U+2);l=Tc(this,b,t,r,h,x,_,k,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let y=M,b=C;y<b;y+=3){const R=p.getX(y),F=p.getX(y+1),U=p.getX(y+2);l=Tc(this,d,t,r,h,x,_,R,F,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let M=0,C=g.length;M<C;M++){const y=g[M],b=d[y.materialIndex],R=Math.max(y.start,S.start),F=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let U=R,V=F;U<V;U+=3){const k=U,I=U+1,T=U+2;l=Tc(this,b,t,r,h,x,_,k,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let y=M,b=C;y<b;y+=3){const R=y,F=y+1,U=y+2;l=Tc(this,d,t,r,h,x,_,R,F,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function $y(o,t,i,r,l,c,d,p){let m;if(t.side===Gn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,t.side===ir,p),m===null)return null;Mc.copy(p),Mc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Mc);return h<i.near||h>i.far?null:{distance:h,point:Mc.clone(),object:o}}function Tc(o,t,i,r,l,c,d,p,m,h){o.getVertexPosition(p,bc),o.getVertexPosition(m,yc),o.getVertexPosition(h,Sc);const x=$y(o,t,i,r,bc,yc,Sc,iv);if(x){const _=new re;Ci.getBarycoord(iv,bc,yc,Sc,_),l&&(x.uv=Ci.getInterpolatedAttribute(l,p,m,h,_,new kt)),c&&(x.uv1=Ci.getInterpolatedAttribute(c,p,m,h,_,new kt)),d&&(x.normal=Ci.getInterpolatedAttribute(d,p,m,h,_,new re),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new re,materialIndex:0};Ci.getNormal(bc,yc,Sc,g.normal),x.face=g,x.barycoord=_}return x}class eS extends Pn{constructor(t=null,i=1,r=1,l,c,d,p,m,h=Mn,x=Mn,_,g){super(null,d,p,m,h,x,l,c,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new re,tS=new re,nS=new ht;class Cr{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Dd.subVectors(r,i).cross(tS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Dd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||nS.getNormalMatrix(t),l=this.coplanarPoint(Dd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Vh,iS=new kt(.5,.5),Ac=new re;class e_{constructor(t=new Cr,i=new Cr,r=new Cr,l=new Cr,c=new Cr,d=new Cr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=zi,r=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],_=c[5],g=c[6],S=c[7],M=c[8],C=c[9],y=c[10],b=c[11],R=c[12],F=c[13],U=c[14],V=c[15];if(l[0].setComponents(h-d,S-x,b-M,V-R).normalize(),l[1].setComponents(h+d,S+x,b+M,V+R).normalize(),l[2].setComponents(h+p,S+_,b+C,V+F).normalize(),l[3].setComponents(h-p,S-_,b-C,V-F).normalize(),r)l[4].setComponents(m,g,y,U).normalize(),l[5].setComponents(h-m,S-g,b-y,V-U).normalize();else if(l[4].setComponents(h-m,S-g,b-y,V-U).normalize(),i===zi)l[5].setComponents(h+m,S+g,b+y,V+U).normalize();else if(i===Ic)l[5].setComponents(m,g,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(t){Tr.center.set(0,0,0);const i=iS.distanceTo(t.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t_ extends Pn{constructor(t=[],i=Lr,r,l,c,d,p,m,h,x){super(t,i,r,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jo extends Pn{constructor(t,i,r=ji,l,c,d,p=Mn,m=Mn,h,x=ya,_=1){if(x!==ya&&x!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,c,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class aS extends jo{constructor(t,i=ji,r=Lr,l,c,d=Mn,p=Mn,m,h=ya){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,r,l,c,d,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class n_ extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qo extends Xi{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],_=[];let g=0,S=0;M("z","y","x",-1,-1,r,i,t,d,c,0),M("z","y","x",1,-1,r,i,-t,d,c,1),M("x","z","y",1,1,t,r,i,l,d,2),M("x","z","y",1,-1,t,r,-i,l,d,3),M("x","y","z",1,-1,t,i,r,l,c,4),M("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new gi(h,3)),this.setAttribute("normal",new gi(x,3)),this.setAttribute("uv",new gi(_,2));function M(C,y,b,R,F,U,V,k,I,T,D){const ue=U/I,H=V/T,K=U/2,J=V/2,se=k/2,Q=I+1,L=T+1;let B=0,oe=0;const fe=new re;for(let ye=0;ye<L;ye++){const P=ye*H-J;for(let q=0;q<Q;q++){const ve=q*ue-K;fe[C]=ve*R,fe[y]=P*F,fe[b]=se,h.push(fe.x,fe.y,fe.z),fe[C]=0,fe[y]=0,fe[b]=k>0?1:-1,x.push(fe.x,fe.y,fe.z),_.push(q/I),_.push(1-ye/T),B+=1}}for(let ye=0;ye<T;ye++)for(let P=0;P<I;P++){const q=g+P+Q*ye,ve=g+P+Q*(ye+1),Ae=g+(P+1)+Q*(ye+1),Oe=g+(P+1)+Q*ye;m.push(q,ve,Oe),m.push(ve,Ae,Oe),oe+=6}p.addGroup(S,oe,D),S+=oe,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Gh extends Xi{constructor(t=1,i=1,r=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const x=[],_=[],g=[],S=[];let M=0;const C=[],y=r/2;let b=0;R(),d===!1&&(t>0&&F(!0),i>0&&F(!1)),this.setIndex(x),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(g,3)),this.setAttribute("uv",new gi(S,2));function R(){const U=new re,V=new re;let k=0;const I=(i-t)/r;for(let T=0;T<=c;T++){const D=[],ue=T/c,H=ue*(i-t)+t;for(let K=0;K<=l;K++){const J=K/l,se=J*m+p,Q=Math.sin(se),L=Math.cos(se);V.x=H*Q,V.y=-ue*r+y,V.z=H*L,_.push(V.x,V.y,V.z),U.set(Q,I,L).normalize(),g.push(U.x,U.y,U.z),S.push(J,1-ue),D.push(M++)}C.push(D)}for(let T=0;T<l;T++)for(let D=0;D<c;D++){const ue=C[D][T],H=C[D+1][T],K=C[D+1][T+1],J=C[D][T+1];(t>0||D!==0)&&(x.push(ue,H,J),k+=3),(i>0||D!==c-1)&&(x.push(H,K,J),k+=3)}h.addGroup(b,k,0),b+=k}function F(U){const V=M,k=new kt,I=new re;let T=0;const D=U===!0?t:i,ue=U===!0?1:-1;for(let K=1;K<=l;K++)_.push(0,y*ue,0),g.push(0,ue,0),S.push(.5,.5),M++;const H=M;for(let K=0;K<=l;K++){const se=K/l*m+p,Q=Math.cos(se),L=Math.sin(se);I.x=D*L,I.y=y*ue,I.z=D*Q,_.push(I.x,I.y,I.z),g.push(0,ue,0),k.x=Q*.5+.5,k.y=L*.5*ue+.5,S.push(k.x,k.y),M++}for(let K=0;K<l;K++){const J=V+K,se=H+K;U===!0?x.push(se,se+1,J):x.push(se+1,se,J),T+=3}h.addGroup(b,T,U===!0?1:2),b+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hc extends Gh{constructor(t=1,i=1,r=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,t,i,r,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(t){return new Hc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jc extends Xi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,x=m+1,_=t/p,g=i/m,S=[],M=[],C=[],y=[];for(let b=0;b<x;b++){const R=b*g-d;for(let F=0;F<h;F++){const U=F*_-c;M.push(U,-R,0),C.push(0,0,1),y.push(F/p),y.push(1-b/m)}}for(let b=0;b<m;b++)for(let R=0;R<p;R++){const F=R+h*b,U=R+h*(b+1),V=R+1+h*(b+1),k=R+1+h*b;S.push(F,U,k),S.push(U,V,k)}this.setIndex(S),this.setAttribute("position",new gi(M,3)),this.setAttribute("normal",new gi(C,3)),this.setAttribute("uv",new gi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.width,t.height,t.widthSegments,t.heightSegments)}}function Fs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const r=Fs(o[i]);for(const l in r)t[l]=r[l]}return t}function rS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function i_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Tt.workingColorSpace}const sS={clone:Fs,merge:On};var oS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Gc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oS,this.fragmentShader=lS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=rS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class cS extends vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uS extends Gc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fS extends Gc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wc=new re,Cc=new Is,Fi=new re;class a_ extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wc,Cc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Cc,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(wc,Cc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Cc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const er=new re,av=new kt,rv=new kt;class pi extends a_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ah*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,i){return this.getViewBounds(t,av,rv),i.subVectors(rv,av)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(od*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class r_ extends a_{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ws=-90,Cs=1;class dS extends ii{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(ws,Cs,t,i);l.layers=this.layers,this.add(l);const c=new pi(ws,Cs,t,i);c.layers=this.layers,this.add(c);const d=new pi(ws,Cs,t,i);d.layers=this.layers,this.add(d);const p=new pi(ws,Cs,t,i);p.layers=this.layers,this.add(p);const m=new pi(ws,Cs,t,i);m.layers=this.layers,this.add(m);const h=new pi(ws,Cs,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(_,g,S),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class hS extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function sv(o,t,i,r){const l=pS(r);switch(i){case jv:return o*t;case Wv:return o*t/l.components*l.byteLength;case Ph:return o*t/l.components*l.byteLength;case Os:return o*t*2/l.components*l.byteLength;case Fh:return o*t*2/l.components*l.byteLength;case Xv:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zd:case Qd:return Math.max(o,16)*Math.max(t,8)/4;case Yd:case Kd:return Math.max(o,8)*Math.max(t,8)/2;case Jd:case $d:case th:case nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case eh:case ih:case ah:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case lh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case fh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case dh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case gh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case vh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case xh:case bh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Sh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Mh:case Th:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pS(o){switch(o){case mi:case zv:return{byteLength:1,components:1};case Vo:case Hv:case ba:return{byteLength:2,components:1};case Lh:case Oh:return{byteLength:2,components:4};case ji:case Uh:case ki:return{byteLength:4,components:1};case Vv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);function s_(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function mS(o){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,_=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,x),p.onUploadCallback();let S;if(h instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=o.SHORT;else if(h instanceof Uint32Array)S=o.UNSIGNED_INT;else if(h instanceof Int32Array)S=o.INT;else if(h instanceof Int8Array)S=o.BYTE;else if(h instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const x=m.array,_=m.updateRanges;if(o.bindBuffer(h,p),_.length===0)o.bufferSubData(h,0,x);else{_.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<_.length;S++){const M=_[g],C=_[S];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++g,_[g]=C)}_.length=g+1;for(let S=0,M=_.length;S<M;S++){const C=_[S];o.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var gS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ES=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,TS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",qS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_E=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:gS,alphahash_pars_fragment:vS,alphamap_fragment:_S,alphamap_pars_fragment:xS,alphatest_fragment:bS,alphatest_pars_fragment:yS,aomap_fragment:SS,aomap_pars_fragment:ES,batching_pars_vertex:MS,batching_vertex:TS,begin_vertex:AS,beginnormal_vertex:wS,bsdfs:CS,iridescence_fragment:RS,bumpmap_pars_fragment:DS,clipping_planes_fragment:NS,clipping_planes_pars_fragment:US,clipping_planes_pars_vertex:LS,clipping_planes_vertex:OS,color_fragment:PS,color_pars_fragment:FS,color_pars_vertex:BS,color_vertex:IS,common:kS,cube_uv_reflection_fragment:zS,defaultnormal_vertex:HS,displacementmap_pars_vertex:VS,displacementmap_vertex:GS,emissivemap_fragment:jS,emissivemap_pars_fragment:XS,colorspace_fragment:WS,colorspace_pars_fragment:qS,envmap_fragment:YS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:KS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:l1,envmap_vertex:JS,fog_vertex:$S,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:a1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:s1,lights_pars_begin:o1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:f1,lights_phong_pars_fragment:d1,lights_physical_fragment:h1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:v1,logdepthbuf_fragment:_1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:y1,map_fragment:S1,map_pars_fragment:E1,map_particle_fragment:M1,map_particle_pars_fragment:T1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:w1,morphinstance_vertex:C1,morphcolor_vertex:R1,morphnormal_vertex:D1,morphtarget_pars_vertex:N1,morphtarget_vertex:U1,normal_fragment_begin:L1,normal_fragment_maps:O1,normal_pars_fragment:P1,normal_pars_vertex:F1,normal_vertex:B1,normalmap_pars_fragment:I1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:z1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:V1,opaque_fragment:G1,packing:j1,premultiplied_alpha_fragment:X1,project_vertex:W1,dithering_fragment:q1,dithering_pars_fragment:Y1,roughnessmap_fragment:Z1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:J1,shadowmap_vertex:$1,shadowmask_pars_fragment:eE,skinbase_vertex:tE,skinning_pars_vertex:nE,skinning_vertex:iE,skinnormal_vertex:aE,specularmap_fragment:rE,specularmap_pars_fragment:sE,tonemapping_fragment:oE,tonemapping_pars_fragment:lE,transmission_fragment:cE,transmission_pars_fragment:uE,uv_pars_fragment:fE,uv_pars_vertex:dE,uv_vertex:hE,worldpos_vertex:pE,background_vert:mE,background_frag:gE,backgroundCube_vert:vE,backgroundCube_frag:_E,cube_vert:xE,cube_frag:bE,depth_vert:yE,depth_frag:SE,distance_vert:EE,distance_frag:ME,equirect_vert:TE,equirect_frag:AE,linedashed_vert:wE,linedashed_frag:CE,meshbasic_vert:RE,meshbasic_frag:DE,meshlambert_vert:NE,meshlambert_frag:UE,meshmatcap_vert:LE,meshmatcap_frag:OE,meshnormal_vert:PE,meshnormal_frag:FE,meshphong_vert:BE,meshphong_frag:IE,meshphysical_vert:kE,meshphysical_frag:zE,meshtoon_vert:HE,meshtoon_frag:VE,points_vert:GE,points_frag:jE,shadow_vert:XE,shadow_frag:WE,sprite_vert:qE,sprite_frag:YE},Ue={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ii={basic:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:On([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:On([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:On([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:On([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:On([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:On([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:On([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:On([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:On([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:On([Ue.lights,Ue.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ii.physical={uniforms:On([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Rc={r:0,b:0,g:0},Ar=new Sa,ZE=new dn;function KE(o,t,i,r,l,c){const d=new Ut(0);let p=l===!0?0:1,m,h,x=null,_=0,g=null;function S(R){let F=R.isScene===!0?R.background:null;if(F&&F.isTexture){const U=R.backgroundBlurriness>0;F=t.get(F,U)}return F}function M(R){let F=!1;const U=S(R);U===null?y(d,p):U&&U.isColor&&(y(U,1),F=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(R,F){const U=S(F);U&&(U.isCubeTexture||U.mapping===Vc)?(h===void 0&&(h=new Di(new qo(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Fs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,k,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ar.copy(F.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(Ar)),h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==It,(x!==U||_!==U.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,x=U,_=U.version,g=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Di(new jc(2,2),new vi({name:"BackgroundMaterial",uniforms:Fs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||_!==U.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,x=U,_=U.version,g=o.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function y(R,F){R.getRGB(Rc,i_(o)),i.buffers.color.setClear(Rc.r,Rc.g,Rc.b,F,c)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,F=1){d.set(R),p=F,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(d,p)},render:M,addToRenderList:C,dispose:b}}function QE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(H,K,J,se,Q){let L=!1;const B=_(H,se,J,K);c!==B&&(c=B,h(c.object)),L=S(H,se,J,Q),L&&M(H,se,J,Q),Q!==null&&t.update(Q,o.ELEMENT_ARRAY_BUFFER),(L||d)&&(d=!1,U(H,K,J,se),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return o.createVertexArray()}function h(H){return o.bindVertexArray(H)}function x(H){return o.deleteVertexArray(H)}function _(H,K,J,se){const Q=se.wireframe===!0;let L=r[K.id];L===void 0&&(L={},r[K.id]=L);const B=H.isInstancedMesh===!0?H.id:0;let oe=L[B];oe===void 0&&(oe={},L[B]=oe);let fe=oe[J.id];fe===void 0&&(fe={},oe[J.id]=fe);let ye=fe[Q];return ye===void 0&&(ye=g(m()),fe[Q]=ye),ye}function g(H){const K=[],J=[],se=[];for(let Q=0;Q<i;Q++)K[Q]=0,J[Q]=0,se[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:J,attributeDivisors:se,object:H,attributes:{},index:null}}function S(H,K,J,se){const Q=c.attributes,L=K.attributes;let B=0;const oe=J.getAttributes();for(const fe in oe)if(oe[fe].location>=0){const P=Q[fe];let q=L[fe];if(q===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),P===void 0||P.attribute!==q||q&&P.data!==q.data)return!0;B++}return c.attributesNum!==B||c.index!==se}function M(H,K,J,se){const Q={},L=K.attributes;let B=0;const oe=J.getAttributes();for(const fe in oe)if(oe[fe].location>=0){let P=L[fe];P===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(P=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(P=H.instanceColor));const q={};q.attribute=P,P&&P.data&&(q.data=P.data),Q[fe]=q,B++}c.attributes=Q,c.attributesNum=B,c.index=se}function C(){const H=c.newAttributes;for(let K=0,J=H.length;K<J;K++)H[K]=0}function y(H){b(H,0)}function b(H,K){const J=c.newAttributes,se=c.enabledAttributes,Q=c.attributeDivisors;J[H]=1,se[H]===0&&(o.enableVertexAttribArray(H),se[H]=1),Q[H]!==K&&(o.vertexAttribDivisor(H,K),Q[H]=K)}function R(){const H=c.newAttributes,K=c.enabledAttributes;for(let J=0,se=K.length;J<se;J++)K[J]!==H[J]&&(o.disableVertexAttribArray(J),K[J]=0)}function F(H,K,J,se,Q,L,B){B===!0?o.vertexAttribIPointer(H,K,J,Q,L):o.vertexAttribPointer(H,K,J,se,Q,L)}function U(H,K,J,se){C();const Q=se.attributes,L=J.getAttributes(),B=K.defaultAttributeValues;for(const oe in L){const fe=L[oe];if(fe.location>=0){let ye=Q[oe];if(ye===void 0&&(oe==="instanceMatrix"&&H.instanceMatrix&&(ye=H.instanceMatrix),oe==="instanceColor"&&H.instanceColor&&(ye=H.instanceColor)),ye!==void 0){const P=ye.normalized,q=ye.itemSize,ve=t.get(ye);if(ve===void 0)continue;const Ae=ve.buffer,Oe=ve.type,ie=ve.bytesPerElement,xe=Oe===o.INT||Oe===o.UNSIGNED_INT||ye.gpuType===Uh;if(ye.isInterleavedBufferAttribute){const Te=ye.data,Ge=Te.stride,Ke=ye.offset;if(Te.isInstancedInterleavedBuffer){for(let $e=0;$e<fe.locationSize;$e++)b(fe.location+$e,Te.meshPerAttribute);H.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let $e=0;$e<fe.locationSize;$e++)y(fe.location+$e);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let $e=0;$e<fe.locationSize;$e++)F(fe.location+$e,q/fe.locationSize,Oe,P,Ge*ie,(Ke+q/fe.locationSize*$e)*ie,xe)}else{if(ye.isInstancedBufferAttribute){for(let Te=0;Te<fe.locationSize;Te++)b(fe.location+Te,ye.meshPerAttribute);H.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Te=0;Te<fe.locationSize;Te++)y(fe.location+Te);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Te=0;Te<fe.locationSize;Te++)F(fe.location+Te,q/fe.locationSize,Oe,P,q*ie,q/fe.locationSize*Te*ie,xe)}}else if(B!==void 0){const P=B[oe];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(fe.location,P);break;case 3:o.vertexAttrib3fv(fe.location,P);break;case 4:o.vertexAttrib4fv(fe.location,P);break;default:o.vertexAttrib1fv(fe.location,P)}}}}R()}function V(){D();for(const H in r){const K=r[H];for(const J in K){const se=K[J];for(const Q in se){const L=se[Q];for(const B in L)x(L[B].object),delete L[B];delete se[Q]}}delete r[H]}}function k(H){if(r[H.id]===void 0)return;const K=r[H.id];for(const J in K){const se=K[J];for(const Q in se){const L=se[Q];for(const B in L)x(L[B].object),delete L[B];delete se[Q]}}delete r[H.id]}function I(H){for(const K in r){const J=r[K];for(const se in J){const Q=J[se];if(Q[H.id]===void 0)continue;const L=Q[H.id];for(const B in L)x(L[B].object),delete L[B];delete Q[H.id]}}}function T(H){for(const K in r){const J=r[K],se=H.isInstancedMesh===!0?H.id:0,Q=J[se];if(Q!==void 0){for(const L in Q){const B=Q[L];for(const oe in B)x(B[oe].object),delete B[oe];delete Q[L]}delete J[se],Object.keys(J).length===0&&delete r[K]}}}function D(){ue(),d=!0,c!==l&&(c=l,h(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:D,resetDefaultState:ue,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function JE(o,t,i){let r;function l(h){r=h}function c(h,x){o.drawArrays(r,h,x),i.update(x,r,1)}function d(h,x,_){_!==0&&(o.drawArraysInstanced(r,h,x,_),i.update(x,r,_))}function p(h,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,_);let S=0;for(let M=0;M<_;M++)S+=x[M];i.update(S,r,1)}function m(h,x,_,g){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)d(h[M],x[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,x,0,g,0,_);let M=0;for(let C=0;C<_;C++)M+=x[C]*g[C];i.update(M,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function $E(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Ri&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==mi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ki&&!T)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(ot("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),k=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:R,maxVaryings:F,maxFragmentUniforms:U,maxSamples:V,samples:k}}function eM(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Cr,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||r!==0||l;return l=g,r=_.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=x(_,g,0)},this.setState=function(_,g,S){const M=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,b=o.get(_);if(!l||M===null||M.length===0||c&&!y)c?x(null):h();else{const R=c?0:r,F=R*4;let U=b.clippingState||null;m.value=U,U=x(M,g,F,S);for(let V=0;V!==F;++V)U[V]=i[V];b.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(_,g,S,M){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,M!==!0||y===null){const b=S+C*4,R=g.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<b)&&(y=new Float32Array(b));for(let F=0,U=S;F!==C;++F,U+=4)d.copy(_[F]).applyMatrix4(R,p),d.normal.toArray(y,U),y[U+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const nr=4,ov=[.125,.215,.35,.446,.526,.582],Dr=20,tM=256,Io=new r_,lv=new Ut;let Nd=null,Ud=0,Ld=0,Od=!1;const nM=new re;class cv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=nM}=c;Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nd,Ud,Ld),this._renderer.xr.enabled=Od,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Lr||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ba,format:Ri,colorSpace:Ps,depthBuffer:!1},l=uv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iM(c)),this._blurMaterial=rM(c,t,i),this._ggxMaterial=aM(c,t,i)}return l}_compileMaterial(t){const i=new Di(new Xi,t);this._renderer.compile(i,Io)}_sceneToCubeUV(t,i,r,l,c){const m=new pi(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(lv),_.toneMapping=Hi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new qo,new $v({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let b=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,b=!0):(y.color.copy(lv),b=!0);for(let F=0;F<6;F++){const U=F%3;U===0?(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[F],c.y,c.z)):U===1?(m.up.set(0,0,h[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[F],c.z)):(m.up.set(0,h[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[F]));const V=this._cubeSize;Rs(l,U*V,F>2?V:0,V,V),_.setRenderTarget(l),b&&_.render(C,m),_.render(t,m)}_.toneMapping=S,_.autoClear=g,t.background=R}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Lr||t.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Rs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Io)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-x*x),g=0+h*1.25,S=_*g,{_lodMax:M}=this,C=this._sizeLods[r],y=3*C*(r>M-nr?r-M+nr:0),b=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=M-i,Rs(c,y,b,3*C,2*C),l.setRenderTarget(c),l.render(p,Io),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-r,Rs(t,y,b,3*C,2*C),l.setRenderTarget(t),l.render(p,Io)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Dr-1),C=c/M,y=isFinite(c)?1+Math.floor(x*C):Dr;y>Dr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Dr}`);const b=[];let R=0;for(let I=0;I<Dr;++I){const T=I/C,D=Math.exp(-T*T/2);b.push(D),I===0?R+=D:I<y&&(R+=2*D)}for(let I=0;I<b.length;I++)b[I]=b[I]/R;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=b,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:F}=this;g.dTheta.value=M,g.mipInt.value=F-r;const U=this._sizeLods[l],V=3*U*(l>F-nr?l-F+nr:0),k=4*(this._cubeSize-U);Rs(i,V,k,3*U,2*U),m.setRenderTarget(i),m.render(_,Io)}}function iM(o){const t=[],i=[],r=[];let l=o;const c=o-nr+1+ov.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-nr?m=ov[d-o+nr-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,_=1+h,g=[x,x,_,x,_,_,x,x,_,_,x,_],S=6,M=6,C=3,y=2,b=1,R=new Float32Array(C*M*S),F=new Float32Array(y*M*S),U=new Float32Array(b*M*S);for(let k=0;k<S;k++){const I=k%3*2/3-1,T=k>2?0:-1,D=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];R.set(D,C*M*k),F.set(g,y*M*k);const ue=[k,k,k,k,k,k];U.set(ue,b*M*k)}const V=new Xi;V.setAttribute("position",new Gi(R,C)),V.setAttribute("uv",new Gi(F,y)),V.setAttribute("faceIndex",new Gi(U,b)),r.push(new Di(V,null)),l>nr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function uv(o,t,i){const r=new Vi(o,t,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rs(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function aM(o,t,i){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function rM(o,t,i){const r=new Float32Array(Dr),l=new re(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function fv(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function dv(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class o_ extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new t_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),c=new vi({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:_a});c.uniforms.tEquirect.value=i;const d=new Di(l,c),p=i.minFilter;return i.minFilter===Nr&&(i.minFilter=Cn),new dS(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}function sM(o){let t=new WeakMap,i=new WeakMap,r=null;function l(g,S=!1){return g==null?null:S?d(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===ad||S===rd)if(t.has(g)){const M=t.get(g).texture;return p(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const C=new o_(M.height);return C.fromEquirectangularTexture(o,g),t.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const S=g.mapping,M=S===ad||S===rd,C=S===Lr||S===Ls;if(M||C){let y=i.get(g);const b=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==b)return r===null&&(r=new cv(o)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return M&&R&&R.height>0||C&&R&&m(R)?(r===null&&(r=new cv(o)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",x),y.texture):null}}}return g}function p(g,S){return S===ad?g.mapping=Lr:S===rd&&(g.mapping=Ls),g}function m(g){let S=0;const M=6;for(let C=0;C<M;C++)g[C]!==void 0&&S++;return S===M}function h(g){const S=g.target;S.removeEventListener("dispose",h);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function x(g){const S=g.target;S.removeEventListener("dispose",x);const M=i.get(S);M!==void 0&&(i.delete(S),M.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function oM(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zc("WebGLRenderer: "+r+" extension not supported."),l}}}function lM(o,t,i,r){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",d),delete l[g.id];const S=c.get(g);S&&(t.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const S in g)t.update(g[S],o.ARRAY_BUFFER)}function h(_){const g=[],S=_.index,M=_.attributes.position;let C=0;if(M===void 0)return;if(S!==null){const R=S.array;C=S.version;for(let F=0,U=R.length;F<U;F+=3){const V=R[F+0],k=R[F+1],I=R[F+2];g.push(V,k,k,I,I,V)}}else{const R=M.array;C=M.version;for(let F=0,U=R.length/3-1;F<U;F+=3){const V=F+0,k=F+1,I=F+2;g.push(V,k,k,I,I,V)}}const y=new(M.count>=65535?Jv:Qv)(g,1);y.version=C;const b=c.get(_);b&&t.remove(b),c.set(_,y)}function x(_){const g=c.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:x}}function cM(o,t,i){let r;function l(g){r=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,S){o.drawElements(r,S,c,g*d),i.update(S,r,1)}function h(g,S,M){M!==0&&(o.drawElementsInstanced(r,S,c,g*d,M),i.update(S,r,M))}function x(g,S,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,g,0,M);let y=0;for(let b=0;b<M;b++)y+=S[b];i.update(y,r,1)}function _(g,S,M,C){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<g.length;b++)h(g[b]/d,S[b],C[b]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,g,0,C,0,M);let b=0;for(let R=0;R<M;R++)b+=S[R]*C[R];i.update(b,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function uM(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function fM(o,t,i){const r=new WeakMap,l=new nn;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=x!==void 0?x.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let ue=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",ue)};var S=ue;g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let U=0;M===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let V=p.attributes.position.count*U,k=1;V>t.maxTextureSize&&(k=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const I=new Float32Array(V*k*4*_),T=new Yv(I,V,k,_);T.type=ki,T.needsUpdate=!0;const D=U*4;for(let H=0;H<_;H++){const K=b[H],J=R[H],se=F[H],Q=V*k*4*H;for(let L=0;L<K.count;L++){const B=L*D;M===!0&&(l.fromBufferAttribute(K,L),I[Q+B+0]=l.x,I[Q+B+1]=l.y,I[Q+B+2]=l.z,I[Q+B+3]=0),C===!0&&(l.fromBufferAttribute(J,L),I[Q+B+4]=l.x,I[Q+B+5]=l.y,I[Q+B+6]=l.z,I[Q+B+7]=0),y===!0&&(l.fromBufferAttribute(se,L),I[Q+B+8]=l.x,I[Q+B+9]=l.y,I[Q+B+10]=l.z,I[Q+B+11]=se.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new kt(V,k)},r.set(p,g),p.addEventListener("dispose",ue)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const C=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function dM(o,t,i,r,l){let c=new WeakMap;function d(h){const x=l.render.frame,_=h.geometry,g=t.get(h,_);if(c.get(g)!==x&&(t.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const S=h.skeleton;c.get(S)!==x&&(S.update(),c.set(S,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const hM={[Uv]:"LINEAR_TONE_MAPPING",[Lv]:"REINHARD_TONE_MAPPING",[Ov]:"CINEON_TONE_MAPPING",[Pv]:"ACES_FILMIC_TONE_MAPPING",[Bv]:"AGX_TONE_MAPPING",[Iv]:"NEUTRAL_TONE_MAPPING",[Fv]:"CUSTOM_TONE_MAPPING"};function pM(o,t,i,r,l){const c=new Vi(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Vi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),p=new Xi;p.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new gi([0,2,0,0,2,0],2));const m=new cS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Di(p,m),x=new r_(-1,1,1,-1,0,1);let _=null,g=null,S=!1,M,C=null,y=[],b=!1;this.setSize=function(R,F){c.setSize(R,F),d.setSize(R,F);for(let U=0;U<y.length;U++){const V=y[U];V.setSize&&V.setSize(R,F)}},this.setEffects=function(R){y=R,b=y.length>0&&y[0].isRenderPass===!0;const F=c.width,U=c.height;for(let V=0;V<y.length;V++){const k=y[V];k.setSize&&k.setSize(F,U)}},this.begin=function(R,F){if(S||R.toneMapping===Hi&&y.length===0)return!1;if(C=F,F!==null){const U=F.width,V=F.height;(c.width!==U||c.height!==V)&&this.setSize(U,V)}return b===!1&&R.setRenderTarget(c),M=R.toneMapping,R.toneMapping=Hi,!0},this.hasRenderPass=function(){return b},this.end=function(R,F){R.toneMapping=M,S=!0;let U=c,V=d;for(let k=0;k<y.length;k++){const I=y[k];if(I.enabled!==!1&&(I.render(R,V,U,F),I.needsSwap!==!1)){const T=U;U=V,V=T}}if(_!==R.outputColorSpace||g!==R.toneMapping){_=R.outputColorSpace,g=R.toneMapping,m.defines={},Tt.getTransfer(_)===It&&(m.defines.SRGB_TRANSFER="");const k=hM[g];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,R.setRenderTarget(C),R.render(h,x),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const l_=new Pn,wh=new jo(1,1),c_=new Yv,u_=new ky,f_=new t_,hv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),vv=new Float32Array(4);function ks(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=hv[l];if(c===void 0&&(c=new Float32Array(l),hv[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Wc(o,t){let i=pv[t];i===void 0&&(i=new Int32Array(t),pv[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function mM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function gM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function vM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function _M(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function xM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;vv.set(r),o.uniformMatrix2fv(this.addr,!1,vv),vn(i,r)}}function bM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;gv.set(r),o.uniformMatrix3fv(this.addr,!1,gv),vn(i,r)}}function yM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;mv.set(r),o.uniformMatrix4fv(this.addr,!1,mv),vn(i,r)}}function SM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function EM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function MM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function TM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function AM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function wM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function CM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function RM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function DM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(wh.compareFunction=i.isReversedDepthBuffer()?kh:Ih,c=wh):c=l_,i.setTexture2D(t||c,l)}function NM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||u_,l)}function UM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||f_,l)}function LM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||c_,l)}function OM(o){switch(o){case 5126:return mM;case 35664:return gM;case 35665:return vM;case 35666:return _M;case 35674:return xM;case 35675:return bM;case 35676:return yM;case 5124:case 35670:return SM;case 35667:case 35671:return EM;case 35668:case 35672:return MM;case 35669:case 35673:return TM;case 5125:return AM;case 36294:return wM;case 36295:return CM;case 36296:return RM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return LM}}function PM(o,t){o.uniform1fv(this.addr,t)}function FM(o,t){const i=ks(t,this.size,2);o.uniform2fv(this.addr,i)}function BM(o,t){const i=ks(t,this.size,3);o.uniform3fv(this.addr,i)}function IM(o,t){const i=ks(t,this.size,4);o.uniform4fv(this.addr,i)}function kM(o,t){const i=ks(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function zM(o,t){const i=ks(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function HM(o,t){const i=ks(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function VM(o,t){o.uniform1iv(this.addr,t)}function GM(o,t){o.uniform2iv(this.addr,t)}function jM(o,t){o.uniform3iv(this.addr,t)}function XM(o,t){o.uniform4iv(this.addr,t)}function WM(o,t){o.uniform1uiv(this.addr,t)}function qM(o,t){o.uniform2uiv(this.addr,t)}function YM(o,t){o.uniform3uiv(this.addr,t)}function ZM(o,t){o.uniform4uiv(this.addr,t)}function KM(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=wh:d=l_;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function QM(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||u_,c[d])}function JM(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||f_,c[d])}function $M(o,t,i){const r=this.cache,l=t.length,c=Wc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||c_,c[d])}function eT(o){switch(o){case 5126:return PM;case 35664:return FM;case 35665:return BM;case 35666:return IM;case 35674:return kM;case 35675:return zM;case 35676:return HM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return jM;case 35669:case 35673:return XM;case 5125:return WM;case 36294:return qM;case 36295:return YM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return $M}}class tT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=OM(i.type)}}class nT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eT(i.type)}}class iT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function _v(o,t){o.seq.push(t),o.map[t.id]=t}function aT(o,t,i){const r=o.name,l=r.length;for(Pd.lastIndex=0;;){const c=Pd.exec(r),d=Pd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){_v(i,h===void 0?new tT(p,o,t):new nT(p,o,t));break}else{let _=i.map[p];_===void 0&&(_=new iT(p),_v(i,_)),i=_}}}class Fc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);aT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function xv(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const rT=37297;let sT=0;function oT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const bv=new ht;function lT(o){Tt._getMatrix(bv,Tt.workingColorSpace,o);const t=`mat3( ${bv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Bc:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function yv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+oT(o.getShaderSource(t),p)}else return c}function cT(o,t){const i=lT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const uT={[Uv]:"Linear",[Lv]:"Reinhard",[Ov]:"Cineon",[Pv]:"ACESFilmic",[Bv]:"AgX",[Iv]:"Neutral",[Fv]:"Custom"};function fT(o,t){const i=uT[t];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new re;function dT(){Tt.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function pT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function mT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function Ho(o){return o!==""}function Sv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ev(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(o){return o.replace(gT,_T)}const vT=new Map;function _T(o,t){let i=pt[t];if(i===void 0){const r=vT.get(t);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ch(i)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(o){return o.replace(xT,bT)}function bT(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Tv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const yT={[Nc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function ST(o){return yT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ET={[Lr]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function MT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":ET[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const TT={[Ls]:"ENVMAP_MODE_REFRACTION"};function AT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":TT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wT={[Nv]:"ENVMAP_BLENDING_MULTIPLY",[vy]:"ENVMAP_BLENDING_MIX",[_y]:"ENVMAP_BLENDING_ADD"};function CT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":wT[o.combine]||"ENVMAP_BLENDING_NONE"}function RT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function DT(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=ST(i),h=MT(i),x=AT(i),_=CT(i),g=RT(i),S=hT(i),M=pT(c),C=l.createProgram();let y,b,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),y.length>0&&(y+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),b.length>0&&(b+=`
`)):(y=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),b=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?fT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,cT("linearToOutputTexel",i.outputColorSpace),dT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),d=Ch(d),d=Sv(d,i),d=Ev(d,i),p=Ch(p),p=Sv(p,i),p=Ev(p,i),d=Mv(d),p=Mv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,b=["#define varying in",i.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const F=R+y+d,U=R+b+p,V=xv(l,l.VERTEX_SHADER,F),k=xv(l,l.FRAGMENT_SHADER,U);l.attachShader(C,V),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(H){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",J=l.getShaderInfoLog(V)||"",se=l.getShaderInfoLog(k)||"",Q=K.trim(),L=J.trim(),B=se.trim();let oe=!0,fe=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(oe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,k);else{const ye=yv(l,V,"vertex"),P=yv(l,k,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Q+`
`+ye+`
`+P)}else Q!==""?ot("WebGLProgram: Program Info Log:",Q):(L===""||B==="")&&(fe=!1);fe&&(H.diagnostics={runnable:oe,programLog:Q,vertexShader:{log:L,prefix:y},fragmentShader:{log:B,prefix:b}})}l.deleteShader(V),l.deleteShader(k),T=new Fc(l,C),D=mT(l,C)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let ue=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(C,rT)),ue},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=sT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=k,this}let NT=0;class UT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new LT(t),i.set(t,r)),r}}class LT{constructor(t){this.id=NT++,this.code=t,this.usedTimes=0}}function OT(o,t,i,r,l,c){const d=new Zv,p=new UT,m=new Set,h=[],x=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,D,ue,H,K){const J=H.fog,se=K.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||Q,L),oe=B&&B.mapping===Vc?B.image.height:null,fe=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ye=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,P=ye!==void 0?ye.length:0;let q=0;se.morphAttributes.position!==void 0&&(q=1),se.morphAttributes.normal!==void 0&&(q=2),se.morphAttributes.color!==void 0&&(q=3);let ve,Ae,Oe,ie;if(fe){const Mt=Ii[fe];ve=Mt.vertexShader,Ae=Mt.fragmentShader}else ve=T.vertexShader,Ae=T.fragmentShader,p.update(T),Oe=p.getVertexShaderID(T),ie=p.getFragmentShaderID(T);const xe=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ge=K.isInstancedMesh===!0,Ke=K.isBatchedMesh===!0,$e=!!T.map,Qt=!!T.matcap,_t=!!B,mt=!!T.aoMap,Dt=!!T.lightMap,lt=!!T.bumpMap,Kt=!!T.normalMap,G=!!T.displacementMap,Wt=!!T.emissiveMap,Et=!!T.metalnessMap,Lt=!!T.roughnessMap,We=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,me=T.sheen>0,be=T.transmission>0,he=We&&!!T.anisotropyMap,je=O&&!!T.clearcoatMap,Re=O&&!!T.clearcoatNormalMap,Ze=O&&!!T.clearcoatRoughnessMap,et=Y&&!!T.iridescenceMap,Me=Y&&!!T.iridescenceThicknessMap,Se=me&&!!T.sheenColorMap,Pe=me&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Fe=!!T.specularColorMap,ut=!!T.specularIntensityMap,W=be&&!!T.transmissionMap,Ce=be&&!!T.thicknessMap,we=!!T.gradientMap,Be=!!T.alphaMap,Ee=T.alphaTest>0,de=!!T.alphaHash,ke=!!T.extensions;let it=Hi;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(it=o.toneMapping);const Pt={shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:ve,fragmentShader:Ae,defines:T.defines,customVertexShaderID:Oe,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&K._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&K.instanceColor!==null,instancingMorph:Ge&&K.morphTexture!==null,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ps,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:Qt,envMap:_t,envMapMode:_t&&B.mapping,envMapCubeUVHeight:oe,aoMap:mt,lightMap:Dt,bumpMap:lt,normalMap:Kt,displacementMap:G,emissiveMap:Wt,normalMapObjectSpace:Kt&&T.normalMapType===Sy,normalMapTangentSpace:Kt&&T.normalMapType===yy,metalnessMap:Et,roughnessMap:Lt,anisotropy:We,anisotropyMap:he,clearcoat:O,clearcoatMap:je,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ze,dispersion:E,iridescence:Y,iridescenceMap:et,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Pe,specularMap:Le,specularColorMap:Fe,specularIntensityMap:ut,transmission:be,transmissionMap:W,thicknessMap:Ce,gradientMap:we,opaque:T.transparent===!1&&T.blending===Ds&&T.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ee,alphaHash:de,combine:T.combine,mapUv:$e&&M(T.map.channel),aoMapUv:mt&&M(T.aoMap.channel),lightMapUv:Dt&&M(T.lightMap.channel),bumpMapUv:lt&&M(T.bumpMap.channel),normalMapUv:Kt&&M(T.normalMap.channel),displacementMapUv:G&&M(T.displacementMap.channel),emissiveMapUv:Wt&&M(T.emissiveMap.channel),metalnessMapUv:Et&&M(T.metalnessMap.channel),roughnessMapUv:Lt&&M(T.roughnessMap.channel),anisotropyMapUv:he&&M(T.anisotropyMap.channel),clearcoatMapUv:je&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(T.sheenRoughnessMap.channel),specularMapUv:Le&&M(T.specularMap.channel),specularColorMapUv:Fe&&M(T.specularColorMap.channel),specularIntensityMapUv:ut&&M(T.specularIntensityMap.channel),transmissionMapUv:W&&M(T.transmissionMap.channel),thicknessMapUv:Ce&&M(T.thicknessMap.channel),alphaMapUv:Be&&M(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Kt||We),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!se.attributes.uv&&($e||Be),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||se.attributes.normal===void 0&&Kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:K.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ue.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:Wt&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ga,flipSided:T.side===Gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function y(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ue in T.defines)D.push(ue),D.push(T.defines[ue]);return T.isRawShaderMaterial===!1&&(b(D,T),R(D,T),D.push(o.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function b(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function R(T,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),T.push(d.mask)}function F(T){const D=S[T.type];let ue;if(D){const H=Ii[D];ue=sS.clone(H.uniforms)}else ue=T.uniforms;return ue}function U(T,D){let ue=x.get(D);return ue!==void 0?++ue.usedTimes:(ue=new DT(o,D,T,l),h.push(ue),x.set(D,ue)),ue}function V(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),x.delete(T.cacheKey),T.destroy()}}function k(T){p.remove(T)}function I(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:F,acquireProgram:U,releaseProgram:V,releaseShaderCache:k,programs:h,dispose:I}}function PT(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function FT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Av(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function wv(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function p(g,S,M,C,y,b){let R=o[t];return R===void 0?(R={id:g.id,object:g,geometry:S,material:M,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:b},o[t]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=M,R.materialVariant=d(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=y,R.group=b),t++,R}function m(g,S,M,C,y,b){const R=p(g,S,M,C,y,b);M.transmission>0?r.push(R):M.transparent===!0?l.push(R):i.push(R)}function h(g,S,M,C,y,b){const R=p(g,S,M,C,y,b);M.transmission>0?r.unshift(R):M.transparent===!0?l.unshift(R):i.unshift(R)}function x(g,S){i.length>1&&i.sort(g||FT),r.length>1&&r.sort(S||Av),l.length>1&&l.sort(S||Av)}function _(){for(let g=t,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:_,sort:x}}function BT(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new wv,o.set(r,[d])):l>=c.length?(d=new wv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function IT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Ut};break;case"SpotLight":i={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function kT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let zT=0;function HT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function VT(o){const t=new IT,i=kT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const l=new re,c=new dn,d=new dn;function p(h){let x=0,_=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,M=0,C=0,y=0,b=0,R=0,F=0,U=0,V=0,k=0,I=0;h.sort(HT);for(let D=0,ue=h.length;D<ue;D++){const H=h[D],K=H.color,J=H.intensity,se=H.distance;let Q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Os?Q=H.shadow.map.texture:Q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=K.r*J,_+=K.g*J,g+=K.b*J;else if(H.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(H.sh.coefficients[L],J);I++}else if(H.isDirectionalLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const B=H.shadow,oe=i.get(H);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,r.directionalShadow[S]=oe,r.directionalShadowMap[S]=Q,r.directionalShadowMatrix[S]=H.shadow.matrix,R++}r.directional[S]=L,S++}else if(H.isSpotLight){const L=t.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(K).multiplyScalar(J),L.distance=se,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,r.spot[C]=L;const B=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,B.updateMatrices(H),H.castShadow&&k++),r.spotLightMatrix[C]=B.matrix,H.castShadow){const oe=i.get(H);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,r.spotShadow[C]=oe,r.spotShadowMap[C]=Q,U++}C++}else if(H.isRectAreaLight){const L=t.get(H);L.color.copy(K).multiplyScalar(J),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=L,y++}else if(H.isPointLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const B=H.shadow,oe=i.get(H);oe.shadowIntensity=B.intensity,oe.shadowBias=B.bias,oe.shadowNormalBias=B.normalBias,oe.shadowRadius=B.radius,oe.shadowMapSize=B.mapSize,oe.shadowCameraNear=B.camera.near,oe.shadowCameraFar=B.camera.far,r.pointShadow[M]=oe,r.pointShadowMap[M]=Q,r.pointShadowMatrix[M]=H.shadow.matrix,F++}r.point[M]=L,M++}else if(H.isHemisphereLight){const L=t.get(H);L.skyColor.copy(H.color).multiplyScalar(J),L.groundColor.copy(H.groundColor).multiplyScalar(J),r.hemi[b]=L,b++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==M||T.spotLength!==C||T.rectAreaLength!==y||T.hemiLength!==b||T.numDirectionalShadows!==R||T.numPointShadows!==F||T.numSpotShadows!==U||T.numSpotMaps!==V||T.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=M,r.hemi.length=b,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=U+V-k,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=I,T.directionalLength=S,T.pointLength=M,T.spotLength=C,T.rectAreaLength=y,T.hemiLength=b,T.numDirectionalShadows=R,T.numPointShadows=F,T.numSpotShadows=U,T.numSpotMaps=V,T.numLightProbes=I,r.version=zT++)}function m(h,x){let _=0,g=0,S=0,M=0,C=0;const y=x.matrixWorldInverse;for(let b=0,R=h.length;b<R;b++){const F=h[b];if(F.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),_++}else if(F.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(F.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(y),d.identity(),c.copy(F.matrixWorld),c.premultiply(y),d.extractRotation(c),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),M++}else if(F.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(y),g++}else if(F.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(F.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:r}}function Cv(o){const t=new VT(o),i=[],r=[];function l(x){h.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function GT(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Cv(o),t.set(l,[p])):c>=d.length?(p=new Cv(o),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WT=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],qT=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Rv=new dn,ko=new re,Fd=new re;function YT(o,t,i){let r=new e_;const l=new kt,c=new kt,d=new nn,p=new uS,m=new fS,h={},x=i.maxTextureSize,_={[ir]:Gn,[Gn]:ir,[ga]:ga},g=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:jT,fragmentShader:XT}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new Xi;M.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Di(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let b=this.type;this.render=function(k,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;this.type===Jb&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nc);const D=o.getRenderTarget(),ue=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),K=o.state;K.setBlending(_a),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const J=b!==this.type;J&&I.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(Q=>Q.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,Q=k.length;se<Q;se++){const L=k[se],B=L.shadow;if(B===void 0){ot("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const oe=B.getFrameExtents();l.multiply(oe),c.copy(B.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/oe.x),l.x=c.x*oe.x,B.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/oe.y),l.y=c.y*oe.y,B.mapSize.y=c.y));const fe=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=fe,B.map===null||J===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===zo){if(L.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Vi(l.x,l.y,{format:Os,type:ba,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new jo(l.x,l.y,ki),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=ya,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mn,B.map.depthTexture.magFilter=Mn}else L.isPointLight?(B.map=new o_(l.x),B.map.depthTexture=new aS(l.x,ji)):(B.map=new Vi(l.x,l.y),B.map.depthTexture=new jo(l.x,l.y,ji)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=ya,this.type===Nc?(B.map.depthTexture.compareFunction=fe?kh:Ih,B.map.depthTexture.minFilter=Cn,B.map.depthTexture.magFilter=Cn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Mn,B.map.depthTexture.magFilter=Mn);B.camera.updateProjectionMatrix()}const ye=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<ye;P++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,P),o.clear();else{P===0&&(o.setRenderTarget(B.map),o.clear());const q=B.getViewport(P);d.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),K.viewport(d)}if(L.isPointLight){const q=B.camera,ve=B.matrix,Ae=L.distance||q.far;Ae!==q.far&&(q.far=Ae,q.updateProjectionMatrix()),ko.setFromMatrixPosition(L.matrixWorld),q.position.copy(ko),Fd.copy(q.position),Fd.add(WT[P]),q.up.copy(qT[P]),q.lookAt(Fd),q.updateMatrixWorld(),ve.makeTranslation(-ko.x,-ko.y,-ko.z),Rv.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Rv,q.coordinateSystem,q.reversedDepth)}else B.updateMatrices(L);r=B.getFrustum(),U(I,T,B.camera,L,this.type)}B.isPointLightShadow!==!0&&this.type===zo&&R(B,T),B.needsUpdate=!1}b=this.type,y.needsUpdate=!1,o.setRenderTarget(D,ue,H)};function R(k,I){const T=t.update(C);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Vi(l.x,l.y,{format:Os,type:ba})),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value=k.mapSize,g.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(I,null,T,g,C,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(I,null,T,S,C,null)}function F(k,I,T,D){let ue=null;const H=T.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(H!==void 0)ue=H;else if(ue=T.isPointLight===!0?m:p,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=ue.uuid,J=I.uuid;let se=h[K];se===void 0&&(se={},h[K]=se);let Q=se[J];Q===void 0&&(Q=ue.clone(),se[J]=Q,I.addEventListener("dispose",V)),ue=Q}if(ue.visible=I.visible,ue.wireframe=I.wireframe,D===zo?ue.side=I.shadowSide!==null?I.shadowSide:I.side:ue.side=I.shadowSide!==null?I.shadowSide:_[I.side],ue.alphaMap=I.alphaMap,ue.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,ue.map=I.map,ue.clipShadows=I.clipShadows,ue.clippingPlanes=I.clippingPlanes,ue.clipIntersection=I.clipIntersection,ue.displacementMap=I.displacementMap,ue.displacementScale=I.displacementScale,ue.displacementBias=I.displacementBias,ue.wireframeLinewidth=I.wireframeLinewidth,ue.linewidth=I.linewidth,T.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const K=o.properties.get(ue);K.light=T}return ue}function U(k,I,T,D,ue){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&ue===zo)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,k.matrixWorld);const J=t.update(k),se=k.material;if(Array.isArray(se)){const Q=J.groups;for(let L=0,B=Q.length;L<B;L++){const oe=Q[L],fe=se[oe.materialIndex];if(fe&&fe.visible){const ye=F(k,fe,D,ue);k.onBeforeShadow(o,k,I,T,J,ye,oe),o.renderBufferDirect(T,null,J,ye,k,oe),k.onAfterShadow(o,k,I,T,J,ye,oe)}}}else if(se.visible){const Q=F(k,se,D,ue);k.onBeforeShadow(o,k,I,T,J,Q,null),o.renderBufferDirect(T,null,J,Q,k,null),k.onAfterShadow(o,k,I,T,J,Q,null)}}const K=k.children;for(let J=0,se=K.length;J<se;J++)U(K[J],I,T,D,ue)}function V(k){k.target.removeEventListener("dispose",V);for(const T in h){const D=h[T],ue=k.target.uuid;ue in D&&(D[ue].dispose(),delete D[ue])}}}function ZT(o,t){function i(){let W=!1;const Ce=new nn;let we=null;const Be=new nn(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!W&&(o.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,de,ke,it,Pt){Pt===!0&&(Ee*=it,de*=it,ke*=it),Ce.set(Ee,de,ke,it),Be.equals(Ce)===!1&&(o.clearColor(Ee,de,ke,it),Be.copy(Ce))},reset:function(){W=!1,we=null,Be.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,we=null,Be=null,Ee=null;return{setReversed:function(de){if(Ce!==de){const ke=t.get("EXT_clip_control");de?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ce=de;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return Ce},setTest:function(de){de?xe(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(de){we!==de&&!W&&(o.depthMask(de),we=de)},setFunc:function(de){if(Ce&&(de=Uy[de]),Be!==de){switch(de){case kd:o.depthFunc(o.NEVER);break;case zd:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case Us:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case jd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=de}},setLocked:function(de){W=de},setClear:function(de){Ee!==de&&(Ee=de,Ce&&(de=1-de),o.clearDepth(de))},reset:function(){W=!1,we=null,Be=null,Ee=null,Ce=!1}}}function l(){let W=!1,Ce=null,we=null,Be=null,Ee=null,de=null,ke=null,it=null,Pt=null;return{setTest:function(Mt){W||(Mt?xe(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Mt){Ce!==Mt&&!W&&(o.stencilMask(Mt),Ce=Mt)},setFunc:function(Mt,Rn,_i){(we!==Mt||Be!==Rn||Ee!==_i)&&(o.stencilFunc(Mt,Rn,_i),we=Mt,Be=Rn,Ee=_i)},setOp:function(Mt,Rn,_i){(de!==Mt||ke!==Rn||it!==_i)&&(o.stencilOp(Mt,Rn,_i),de=Mt,ke=Rn,it=_i)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Pt!==Mt&&(o.clearStencil(Mt),Pt=Mt)},reset:function(){W=!1,Ce=null,we=null,Be=null,Ee=null,de=null,ke=null,it=null,Pt=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let x={},_={},g=new WeakMap,S=[],M=null,C=!1,y=null,b=null,R=null,F=null,U=null,V=null,k=null,I=new Ut(0,0,0),T=0,D=!1,ue=null,H=null,K=null,J=null,se=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,B=0;const oe=o.getParameter(o.VERSION);oe.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(oe)[1]),L=B>=1):oe.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),L=B>=2);let fe=null,ye={};const P=o.getParameter(o.SCISSOR_BOX),q=o.getParameter(o.VIEWPORT),ve=new nn().fromArray(P),Ae=new nn().fromArray(q);function Oe(W,Ce,we,Be){const Ee=new Uint8Array(4),de=o.createTexture();o.bindTexture(W,de),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ke=0;ke<we;ke++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ce,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(Ce+ke,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return de}const ie={};ie[o.TEXTURE_2D]=Oe(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=Oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=Oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=Oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),xe(o.DEPTH_TEST),d.setFunc(Us),lt(!1),Kt(P0),xe(o.CULL_FACE),mt(_a);function xe(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function Te(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Ge(W,Ce){return _[W]!==Ce?(o.bindFramebuffer(W,Ce),_[W]=Ce,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ce),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ke(W,Ce){let we=S,Be=!1;if(W){we=g.get(Ce),we===void 0&&(we=[],g.set(Ce,we));const Ee=W.textures;if(we.length!==Ee.length||we[0]!==o.COLOR_ATTACHMENT0){for(let de=0,ke=Ee.length;de<ke;de++)we[de]=o.COLOR_ATTACHMENT0+de;we.length=Ee.length,Be=!0}}else we[0]!==o.BACK&&(we[0]=o.BACK,Be=!0);Be&&o.drawBuffers(we)}function $e(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const Qt={[Rr]:o.FUNC_ADD,[ey]:o.FUNC_SUBTRACT,[ty]:o.FUNC_REVERSE_SUBTRACT};Qt[ny]=o.MIN,Qt[iy]=o.MAX;const _t={[ay]:o.ZERO,[ry]:o.ONE,[sy]:o.SRC_COLOR,[Bd]:o.SRC_ALPHA,[dy]:o.SRC_ALPHA_SATURATE,[uy]:o.DST_COLOR,[ly]:o.DST_ALPHA,[oy]:o.ONE_MINUS_SRC_COLOR,[Id]:o.ONE_MINUS_SRC_ALPHA,[fy]:o.ONE_MINUS_DST_COLOR,[cy]:o.ONE_MINUS_DST_ALPHA,[hy]:o.CONSTANT_COLOR,[py]:o.ONE_MINUS_CONSTANT_COLOR,[my]:o.CONSTANT_ALPHA,[gy]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(W,Ce,we,Be,Ee,de,ke,it,Pt,Mt){if(W===_a){C===!0&&(Te(o.BLEND),C=!1);return}if(C===!1&&(xe(o.BLEND),C=!0),W!==$b){if(W!==y||Mt!==D){if((b!==Rr||U!==Rr)&&(o.blendEquation(o.FUNC_ADD),b=Rr,U=Rr),Mt)switch(W){case Ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F0:o.blendFunc(o.ONE,o.ONE);break;case B0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case I0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case B0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}R=null,F=null,V=null,k=null,I.set(0,0,0),T=0,y=W,D=Mt}return}Ee=Ee||Ce,de=de||we,ke=ke||Be,(Ce!==b||Ee!==U)&&(o.blendEquationSeparate(Qt[Ce],Qt[Ee]),b=Ce,U=Ee),(we!==R||Be!==F||de!==V||ke!==k)&&(o.blendFuncSeparate(_t[we],_t[Be],_t[de],_t[ke]),R=we,F=Be,V=de,k=ke),(it.equals(I)===!1||Pt!==T)&&(o.blendColor(it.r,it.g,it.b,Pt),I.copy(it),T=Pt),y=W,D=!1}function Dt(W,Ce){W.side===ga?Te(o.CULL_FACE):xe(o.CULL_FACE);let we=W.side===Gn;Ce&&(we=!we),lt(we),W.blending===Ds&&W.transparent===!1?mt(_a):mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Be=W.stencilWrite;p.setTest(Be),Be&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){ue!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),ue=W)}function Kt(W){W!==Kb?(xe(o.CULL_FACE),W!==H&&(W===P0?o.cullFace(o.BACK):W===Qb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),H=W}function G(W){W!==K&&(L&&o.lineWidth(W),K=W)}function Wt(W,Ce,we){W?(xe(o.POLYGON_OFFSET_FILL),(J!==Ce||se!==we)&&(J=Ce,se=we,d.getReversed()&&(Ce=-Ce),o.polygonOffset(Ce,we))):Te(o.POLYGON_OFFSET_FILL)}function Et(W){W?xe(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function Lt(W){W===void 0&&(W=o.TEXTURE0+Q-1),fe!==W&&(o.activeTexture(W),fe=W)}function We(W,Ce,we){we===void 0&&(fe===null?we=o.TEXTURE0+Q-1:we=fe);let Be=ye[we];Be===void 0&&(Be={type:void 0,texture:void 0},ye[we]=Be),(Be.type!==W||Be.texture!==Ce)&&(fe!==we&&(o.activeTexture(we),fe=we),o.bindTexture(W,Ce||ie[W]),Be.type=W,Be.texture=Ce)}function O(){const W=ye[fe];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function me(){try{o.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function be(){try{o.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function he(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function je(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Re(){try{o.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ze(){try{o.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function et(){try{o.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Me(){try{o.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Se(W){ve.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function Pe(W){Ae.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Le(W,Ce){let we=h.get(Ce);we===void 0&&(we=new WeakMap,h.set(Ce,we));let Be=we.get(W);Be===void 0&&(Be=o.getUniformBlockIndex(Ce,W.name),we.set(W,Be))}function Fe(W,Ce){const Be=h.get(Ce).get(W);m.get(Ce)!==Be&&(o.uniformBlockBinding(Ce,Be,W.__bindingPointIndex),m.set(Ce,Be))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},fe=null,ye={},_={},g=new WeakMap,S=[],M=null,C=!1,y=null,b=null,R=null,F=null,U=null,V=null,k=null,I=new Ut(0,0,0),T=0,D=!1,ue=null,H=null,K=null,J=null,se=null,ve.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:xe,disable:Te,bindFramebuffer:Ge,drawBuffers:Ke,useProgram:$e,setBlending:mt,setMaterial:Dt,setFlipSided:lt,setCullFace:Kt,setLineWidth:G,setPolygonOffset:Wt,setScissorTest:Et,activeTexture:Lt,bindTexture:We,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:et,texImage3D:Me,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:Re,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:je,scissor:Se,viewport:Pe,reset:ut}}function KT(o,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,x=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,E){return S?new OffscreenCanvas(O,E):kc("canvas")}function C(O,E,Y){let me=1;const be=We(O);if((be.width>Y||be.height>Y)&&(me=Y/Math.max(be.width,be.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(me*be.width),je=Math.floor(me*be.height);_===void 0&&(_=M(he,je));const Re=E?M(he,je):_;return Re.width=he,Re.height=je,Re.getContext("2d").drawImage(O,0,0,he,je),ot("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+he+"x"+je+")."),Re}else return"data"in O&&ot("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),O;return O}function y(O){return O.generateMipmaps}function b(O){o.generateMipmap(O)}function R(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function F(O,E,Y,me,be=!1){if(O!==null){if(o[O]!==void 0)return o[O];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=E;if(E===o.RED&&(Y===o.FLOAT&&(he=o.R32F),Y===o.HALF_FLOAT&&(he=o.R16F),Y===o.UNSIGNED_BYTE&&(he=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.R8UI),Y===o.UNSIGNED_SHORT&&(he=o.R16UI),Y===o.UNSIGNED_INT&&(he=o.R32UI),Y===o.BYTE&&(he=o.R8I),Y===o.SHORT&&(he=o.R16I),Y===o.INT&&(he=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(he=o.RG32F),Y===o.HALF_FLOAT&&(he=o.RG16F),Y===o.UNSIGNED_BYTE&&(he=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RG8UI),Y===o.UNSIGNED_SHORT&&(he=o.RG16UI),Y===o.UNSIGNED_INT&&(he=o.RG32UI),Y===o.BYTE&&(he=o.RG8I),Y===o.SHORT&&(he=o.RG16I),Y===o.INT&&(he=o.RG32I)),E===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(he=o.RGB16UI),Y===o.UNSIGNED_INT&&(he=o.RGB32UI),Y===o.BYTE&&(he=o.RGB8I),Y===o.SHORT&&(he=o.RGB16I),Y===o.INT&&(he=o.RGB32I)),E===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),Y===o.UNSIGNED_INT&&(he=o.RGBA32UI),Y===o.BYTE&&(he=o.RGBA8I),Y===o.SHORT&&(he=o.RGBA16I),Y===o.INT&&(he=o.RGBA32I)),E===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(he=o.R11F_G11F_B10F)),E===o.RGBA){const je=be?Bc:Tt.getTransfer(me);Y===o.FLOAT&&(he=o.RGBA32F),Y===o.HALF_FLOAT&&(he=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(he=je===It?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&t.get("EXT_color_buffer_float"),he}function U(O,E){let Y;return O?E===null||E===ji||E===Go?Y=o.DEPTH24_STENCIL8:E===ki?Y=o.DEPTH32F_STENCIL8:E===Vo&&(Y=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===Go?Y=o.DEPTH_COMPONENT24:E===ki?Y=o.DEPTH_COMPONENT32F:E===Vo&&(Y=o.DEPTH_COMPONENT16),Y}function V(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Mn&&O.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function k(O){const E=O.target;E.removeEventListener("dispose",k),T(E),E.isVideoTexture&&x.delete(E)}function I(O){const E=O.target;E.removeEventListener("dispose",I),ue(E)}function T(O){const E=r.get(O);if(E.__webglInit===void 0)return;const Y=O.source,me=g.get(Y);if(me){const be=me[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&D(O),Object.keys(me).length===0&&g.delete(Y)}r.remove(O)}function D(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const Y=O.source,me=g.get(Y);delete me[E.__cacheKey],d.memory.textures--}function ue(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let be=0;be<E.__webglFramebuffer[me].length;be++)o.deleteFramebuffer(E.__webglFramebuffer[me][be]);else o.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)o.deleteFramebuffer(E.__webglFramebuffer[me]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=O.textures;for(let me=0,be=Y.length;me<be;me++){const he=r.get(Y[me]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(Y[me])}r.remove(O)}let H=0;function K(){H=0}function J(){const O=H;return O>=l.maxTextures&&ot("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function se(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Q(O,E){const Y=r.get(O);if(O.isVideoTexture&&Et(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){const me=O.image;if(me===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Y,O,E);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function L(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ie(Y,O,E);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function B(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ie(Y,O,E);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function oe(O,E){const Y=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){xe(Y,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const fe={[Wd]:o.REPEAT,[va]:o.CLAMP_TO_EDGE,[qd]:o.MIRRORED_REPEAT},ye={[Mn]:o.NEAREST,[xy]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[Nr]:o.LINEAR_MIPMAP_LINEAR},P={[Ey]:o.NEVER,[Cy]:o.ALWAYS,[My]:o.LESS,[Ih]:o.LEQUAL,[Ty]:o.EQUAL,[kh]:o.GEQUAL,[Ay]:o.GREATER,[wy]:o.NOTEQUAL};function q(O,E){if(E.type===ki&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===sd||E.magFilter===lc||E.magFilter===Nr||E.minFilter===Cn||E.minFilter===sd||E.minFilter===lc||E.minFilter===Nr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,fe[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,fe[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,fe[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,ye[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==lc&&E.minFilter!==Nr||E.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(O,E){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",k));const me=E.source;let be=g.get(me);be===void 0&&(be={},g.set(me,be));const he=se(E);if(he!==O.__cacheKey){be[he]===void 0&&(be[he]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),be[he].usedTimes++;const je=be[O.__cacheKey];je!==void 0&&(be[O.__cacheKey].usedTimes--,je.usedTimes===0&&D(E)),O.__cacheKey=he,O.__webglTexture=be[he].texture}return Y}function Ae(O,E,Y){return Math.floor(Math.floor(O/Y)/E)}function Oe(O,E,Y,me){const he=O.updateRanges;if(he.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Y,me,E.data);else{he.sort((Me,Se)=>Me.start-Se.start);let je=0;for(let Me=1;Me<he.length;Me++){const Se=he[je],Pe=he[Me],Le=Se.start+Se.count,Fe=Ae(Pe.start,E.width,4),ut=Ae(Se.start,E.width,4);Pe.start<=Le+1&&Fe===ut&&Ae(Pe.start+Pe.count-1,E.width,4)===Fe?Se.count=Math.max(Se.count,Pe.start+Pe.count-Se.start):(++je,he[je]=Pe)}he.length=je+1;const Re=o.getParameter(o.UNPACK_ROW_LENGTH),Ze=o.getParameter(o.UNPACK_SKIP_PIXELS),et=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Me=0,Se=he.length;Me<Se;Me++){const Pe=he[Me],Le=Math.floor(Pe.start/4),Fe=Math.ceil(Pe.count/4),ut=Le%E.width,W=Math.floor(Le/E.width),Ce=Fe,we=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ut,W,Ce,we,Y,me,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Re),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ze),o.pixelStorei(o.UNPACK_SKIP_ROWS,et)}}function ie(O,E,Y){let me=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=o.TEXTURE_3D);const be=ve(O,E),he=E.source;i.bindTexture(me,O.__webglTexture,o.TEXTURE0+Y);const je=r.get(he);if(he.version!==je.__version||be===!0){i.activeTexture(o.TEXTURE0+Y);const Re=Tt.getPrimaries(Tt.workingColorSpace),Ze=E.colorSpace===tr?null:Tt.getPrimaries(E.colorSpace),et=E.colorSpace===tr||Re===Ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Me=C(E.image,!1,l.maxTextureSize);Me=Lt(E,Me);const Se=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let Le=F(E.internalFormat,Se,Pe,E.colorSpace,E.isVideoTexture);q(me,E);let Fe;const ut=E.mipmaps,W=E.isVideoTexture!==!0,Ce=je.__version===void 0||be===!0,we=he.dataReady,Be=V(E,Me);if(E.isDepthTexture)Le=U(E.format===Ur,E.type),Ce&&(W?i.texStorage2D(o.TEXTURE_2D,1,Le,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,Le,Me.width,Me.height,0,Se,Pe,null));else if(E.isDataTexture)if(ut.length>0){W&&Ce&&i.texStorage2D(o.TEXTURE_2D,Be,Le,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Fe=ut[Ee],W?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Se,Pe,Fe.data):i.texImage2D(o.TEXTURE_2D,Ee,Le,Fe.width,Fe.height,0,Se,Pe,Fe.data);E.generateMipmaps=!1}else W?(Ce&&i.texStorage2D(o.TEXTURE_2D,Be,Le,Me.width,Me.height),we&&Oe(E,Me,Se,Pe)):i.texImage2D(o.TEXTURE_2D,0,Le,Me.width,Me.height,0,Se,Pe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Le,ut[0].width,ut[0].height,Me.depth);for(let Ee=0,de=ut.length;Ee<de;Ee++)if(Fe=ut[Ee],E.format!==Ri)if(Se!==null)if(W){if(we)if(E.layerUpdates.size>0){const ke=sv(Fe.width,Fe.height,E.format,E.type);for(const it of E.layerUpdates){const Pt=Fe.data.subarray(it*ke/Fe.data.BYTES_PER_ELEMENT,(it+1)*ke/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,it,Fe.width,Fe.height,1,Se,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,Se,Fe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Le,Fe.width,Fe.height,Me.depth,0,Fe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?we&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Fe.width,Fe.height,Me.depth,Se,Pe,Fe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Le,Fe.width,Fe.height,Me.depth,0,Se,Pe,Fe.data)}else{W&&Ce&&i.texStorage2D(o.TEXTURE_2D,Be,Le,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Fe=ut[Ee],E.format!==Ri?Se!==null?W?we&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Se,Fe.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Le,Fe.width,Fe.height,0,Fe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Fe.width,Fe.height,Se,Pe,Fe.data):i.texImage2D(o.TEXTURE_2D,Ee,Le,Fe.width,Fe.height,0,Se,Pe,Fe.data)}else if(E.isDataArrayTexture)if(W){if(Ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Le,Me.width,Me.height,Me.depth),we)if(E.layerUpdates.size>0){const Ee=sv(Me.width,Me.height,E.format,E.type);for(const de of E.layerUpdates){const ke=Me.data.subarray(de*Ee/Me.data.BYTES_PER_ELEMENT,(de+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Se,Pe,ke)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Se,Pe,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,Me.width,Me.height,Me.depth,0,Se,Pe,Me.data);else if(E.isData3DTexture)W?(Ce&&i.texStorage3D(o.TEXTURE_3D,Be,Le,Me.width,Me.height,Me.depth),we&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Se,Pe,Me.data)):i.texImage3D(o.TEXTURE_3D,0,Le,Me.width,Me.height,Me.depth,0,Se,Pe,Me.data);else if(E.isFramebufferTexture){if(Ce)if(W)i.texStorage2D(o.TEXTURE_2D,Be,Le,Me.width,Me.height);else{let Ee=Me.width,de=Me.height;for(let ke=0;ke<Be;ke++)i.texImage2D(o.TEXTURE_2D,ke,Le,Ee,de,0,Se,Pe,null),Ee>>=1,de>>=1}}else if(ut.length>0){if(W&&Ce){const Ee=We(ut[0]);i.texStorage2D(o.TEXTURE_2D,Be,Le,Ee.width,Ee.height)}for(let Ee=0,de=ut.length;Ee<de;Ee++)Fe=ut[Ee],W?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Se,Pe,Fe):i.texImage2D(o.TEXTURE_2D,Ee,Le,Se,Pe,Fe);E.generateMipmaps=!1}else if(W){if(Ce){const Ee=We(Me);i.texStorage2D(o.TEXTURE_2D,Be,Le,Ee.width,Ee.height)}we&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Se,Pe,Me)}else i.texImage2D(o.TEXTURE_2D,0,Le,Se,Pe,Me);y(E)&&b(me),je.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function xe(O,E,Y){if(E.image.length!==6)return;const me=ve(O,E),be=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Y);const he=r.get(be);if(be.version!==he.__version||me===!0){i.activeTexture(o.TEXTURE0+Y);const je=Tt.getPrimaries(Tt.workingColorSpace),Re=E.colorSpace===tr?null:Tt.getPrimaries(E.colorSpace),Ze=E.colorSpace===tr||je===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let de=0;de<6;de++)!et&&!Me?Se[de]=C(E.image[de],!0,l.maxCubemapSize):Se[de]=Me?E.image[de].image:E.image[de],Se[de]=Lt(E,Se[de]);const Pe=Se[0],Le=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type),ut=F(E.internalFormat,Le,Fe,E.colorSpace),W=E.isVideoTexture!==!0,Ce=he.__version===void 0||me===!0,we=be.dataReady;let Be=V(E,Pe);q(o.TEXTURE_CUBE_MAP,E);let Ee;if(et){W&&Ce&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,ut,Pe.width,Pe.height);for(let de=0;de<6;de++){Ee=Se[de].mipmaps;for(let ke=0;ke<Ee.length;ke++){const it=Ee[ke];E.format!==Ri?Le!==null?W?we&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,0,0,it.width,it.height,Le,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,ut,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,0,0,it.width,it.height,Le,Fe,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke,ut,it.width,it.height,0,Le,Fe,it.data)}}}else{if(Ee=E.mipmaps,W&&Ce){Ee.length>0&&Be++;const de=We(Se[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,ut,de.width,de.height)}for(let de=0;de<6;de++)if(Me){W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se[de].width,Se[de].height,Le,Fe,Se[de].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Se[de].width,Se[de].height,0,Le,Fe,Se[de].data);for(let ke=0;ke<Ee.length;ke++){const Pt=Ee[ke].image[de].image;W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,0,0,Pt.width,Pt.height,Le,Fe,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,ut,Pt.width,Pt.height,0,Le,Fe,Pt.data)}}else{W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Le,Fe,Se[de]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Le,Fe,Se[de]);for(let ke=0;ke<Ee.length;ke++){const it=Ee[ke];W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,0,0,Le,Fe,it.image[de]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,ke+1,ut,Le,Fe,it.image[de])}}}y(E)&&b(o.TEXTURE_CUBE_MAP),he.__version=be.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Te(O,E,Y,me,be,he){const je=c.convert(Y.format,Y.colorSpace),Re=c.convert(Y.type),Ze=F(Y.internalFormat,je,Re,Y.colorSpace),et=r.get(E),Me=r.get(Y);if(Me.__renderTarget=E,!et.__hasExternalTextures){const Se=Math.max(1,E.width>>he),Pe=Math.max(1,E.height>>he);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,he,Ze,Se,Pe,E.depth,0,je,Re,null):i.texImage2D(be,he,Ze,Se,Pe,0,je,Re,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Wt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,be,Me.__webglTexture,0,G(E)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,be,Me.__webglTexture,he),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(O,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const me=E.depthTexture,be=me&&me.isDepthTexture?me.type:null,he=U(E.stencilBuffer,be),je=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Wt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),he,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),he,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,he,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,O)}else{const me=E.textures;for(let be=0;be<me.length;be++){const he=me[be],je=c.convert(he.format,he.colorSpace),Re=c.convert(he.type),Ze=F(he.internalFormat,je,Re,he.colorSpace);Wt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Ze,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Ze,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ze,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ke(O,E,Y){const me=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),be.__webglTexture===void 0){be.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,be.__webglTexture),q(o.TEXTURE_CUBE_MAP,E.depthTexture);const et=c.convert(E.depthTexture.format),Me=c.convert(E.depthTexture.type);let Se;E.depthTexture.format===ya?Se=o.DEPTH_COMPONENT24:E.depthTexture.format===Ur&&(Se=o.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Se,E.width,E.height,0,et,Me,null)}}else Q(E.depthTexture,0);const he=be.__webglTexture,je=G(E),Re=me?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,Ze=E.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Wt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ze,Re,he,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,Ze,Re,he,0);else if(E.depthTexture.format===Ur)Wt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ze,Re,he,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,Ze,Re,he,0);else throw new Error("Unknown depthTexture format")}function $e(O){const E=r.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const me=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",be)};me.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=me}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let me=0;me<6;me++)Ke(E.__webglFramebuffer[me],O,me);else{const me=O.texture.mipmaps;me&&me.length>0?Ke(E.__webglFramebuffer[0],O,0):Ke(E.__webglFramebuffer,O,0)}else if(Y){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=o.createRenderbuffer(),Ge(E.__webglDepthbuffer[me],O,!1);else{const be=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,he)}}else{const me=O.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ge(E.__webglDepthbuffer,O,!1);else{const be=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,he)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(O,E,Y){const me=r.get(O);E!==void 0&&Te(me.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&$e(O)}function _t(O){const E=O.texture,Y=r.get(O),me=r.get(E);O.addEventListener("dispose",I);const be=O.textures,he=O.isWebGLCubeRenderTarget===!0,je=be.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=E.version,d.memory.textures++),he){Y.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Re]=[];for(let Ze=0;Ze<E.mipmaps.length;Ze++)Y.__webglFramebuffer[Re][Ze]=o.createFramebuffer()}else Y.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Re=0;Re<E.mipmaps.length;Re++)Y.__webglFramebuffer[Re]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(je)for(let Re=0,Ze=be.length;Re<Ze;Re++){const et=r.get(be[Re]);et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&Wt(O)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Re=0;Re<be.length;Re++){const Ze=be[Re];Y.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Re]);const et=c.convert(Ze.format,Ze.colorSpace),Me=c.convert(Ze.type),Se=F(Ze.internalFormat,et,Me,Ze.colorSpace,O.isXRRenderTarget===!0),Pe=G(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe,Se,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),q(o.TEXTURE_CUBE_MAP,E);for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)Te(Y.__webglFramebuffer[Re][Ze],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze);else Te(Y.__webglFramebuffer[Re],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(E)&&b(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Re=0,Ze=be.length;Re<Ze;Re++){const et=be[Re],Me=r.get(et);let Se=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Se=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Se,Me.__webglTexture),q(Se,et),Te(Y.__webglFramebuffer,O,et,o.COLOR_ATTACHMENT0+Re,Se,0),y(et)&&b(Se)}i.unbindTexture()}else{let Re=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Re,me.__webglTexture),q(Re,E),E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)Te(Y.__webglFramebuffer[Ze],O,E,o.COLOR_ATTACHMENT0,Re,Ze);else Te(Y.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Re,0);y(E)&&b(Re),i.unbindTexture()}O.depthBuffer&&$e(O)}function mt(O){const E=O.textures;for(let Y=0,me=E.length;Y<me;Y++){const be=E[Y];if(y(be)){const he=R(O),je=r.get(be).__webglTexture;i.bindTexture(he,je),b(he),i.unbindTexture()}}}const Dt=[],lt=[];function Kt(O){if(O.samples>0){if(Wt(O)===!1){const E=O.textures,Y=O.width,me=O.height;let be=o.COLOR_BUFFER_BIT;const he=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=r.get(O),Re=E.length>1;if(Re)for(let et=0;et<E.length;et++)i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Ze=O.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let et=0;et<E.length;et++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[et]);const Me=r.get(E[et]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,Y,me,0,0,Y,me,be,o.NEAREST),m===!0&&(Dt.length=0,lt.length=0,Dt.push(o.COLOR_ATTACHMENT0+et),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Dt.push(he),lt.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let et=0;et<E.length;et++){i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.RENDERBUFFER,je.__webglColorRenderbuffer[et]);const Me=r.get(E[et]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(O){return Math.min(l.maxSamples,O.samples)}function Wt(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(O){const E=d.render.frame;x.get(O)!==E&&(x.set(O,E),O.update())}function Lt(O,E){const Y=O.colorSpace,me=O.format,be=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==Ps&&Y!==tr&&(Tt.getTransfer(Y)===It?(me!==Ri||be!==mi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",Y)),E}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=L,this.setTexture3D=B,this.setTextureCube=oe,this.rebindTextures=Qt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function QT(o,t){function i(r,l=tr){let c;const d=Tt.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===Lh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Oh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Vv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Gv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===zv)return o.BYTE;if(r===Hv)return o.SHORT;if(r===Vo)return o.UNSIGNED_SHORT;if(r===Uh)return o.INT;if(r===ji)return o.UNSIGNED_INT;if(r===ki)return o.FLOAT;if(r===ba)return o.HALF_FLOAT;if(r===jv)return o.ALPHA;if(r===Xv)return o.RGB;if(r===Ri)return o.RGBA;if(r===ya)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===Wv)return o.RED;if(r===Ph)return o.RED_INTEGER;if(r===Os)return o.RG;if(r===Fh)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Uc||r===Lc||r===Oc||r===Pc)if(d===It)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yd||r===Zd||r===Kd||r===Qd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Jd||r===$d)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===eh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===th)return c.COMPRESSED_R11_EAC;if(r===nh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===ih)return c.COMPRESSED_RG11_EAC;if(r===ah)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ch)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ph)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_h)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xh||r===bh||r===yh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===xh)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sh||r===Eh||r===Mh||r===Th)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Sh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Eh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Th)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new n_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new vi({vertexShader:JT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new jc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t2 extends Bs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,_=null,g=null,S=null,M=null;const C=typeof XRWebGLBinding<"u",y=new e2,b={},R=i.getContextAttributes();let F=null,U=null;const V=[],k=[],I=new kt;let T=null;const D=new pi;D.viewport=new nn;const ue=new pi;ue.viewport=new nn;const H=[D,ue],K=new hS;let J=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=V[ie];return xe===void 0&&(xe=new pd,V[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=V[ie];return xe===void 0&&(xe=new pd,V[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=V[ie];return xe===void 0&&(xe=new pd,V[ie]=xe),xe.getHandSpace()};function Q(ie){const xe=k.indexOf(ie.inputSource);if(xe===-1)return;const Te=V[xe];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,h||d),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function L(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",B);for(let ie=0;ie<V.length;ie++){const xe=k[ie];xe!==null&&(k[ie]=null,V[ie].disconnect(xe))}J=null,se=null,y.reset();for(const ie in b)delete b[ie];t.setRenderTarget(F),S=null,g=null,_=null,l=null,U=null,Oe.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){p=ie,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",L),l.addEventListener("inputsourceschange",B),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,Ke=null;R.depth&&(Ke=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=R.stencil?Ur:ya,Ge=R.stencil?Go:ji);const $e={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer($e),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Vi(g.textureWidth,g.textureHeight,{format:Ri,type:mi,depthTexture:new jo(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Vi(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(ie){for(let xe=0;xe<ie.removed.length;xe++){const Te=ie.removed[xe],Ge=k.indexOf(Te);Ge>=0&&(k[Ge]=null,V[Ge].disconnect(Te))}for(let xe=0;xe<ie.added.length;xe++){const Te=ie.added[xe];let Ge=k.indexOf(Te);if(Ge===-1){for(let $e=0;$e<V.length;$e++)if($e>=k.length){k.push(Te),Ge=$e;break}else if(k[$e]===null){k[$e]=Te,Ge=$e;break}if(Ge===-1)break}const Ke=V[Ge];Ke&&Ke.connect(Te)}}const oe=new re,fe=new re;function ye(ie,xe,Te){oe.setFromMatrixPosition(xe.matrixWorld),fe.setFromMatrixPosition(Te.matrixWorld);const Ge=oe.distanceTo(fe),Ke=xe.projectionMatrix.elements,$e=Te.projectionMatrix.elements,Qt=Ke[14]/(Ke[10]-1),_t=Ke[14]/(Ke[10]+1),mt=(Ke[9]+1)/Ke[5],Dt=(Ke[9]-1)/Ke[5],lt=(Ke[8]-1)/Ke[0],Kt=($e[8]+1)/$e[0],G=Qt*lt,Wt=Qt*Kt,Et=Ge/(-lt+Kt),Lt=Et*-lt;if(xe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Lt),ie.translateZ(Et),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ke[10]===-1)ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const We=Qt+Et,O=_t+Et,E=G-Lt,Y=Wt+(Ge-Lt),me=mt*_t/O*We,be=Dt*_t/O*We;ie.projectionMatrix.makePerspective(E,Y,me,be,We,O),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let xe=ie.near,Te=ie.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),K.near=ue.near=D.near=xe,K.far=ue.far=D.far=Te,(J!==K.near||se!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),J=K.near,se=K.far),K.layers.mask=ie.layers.mask|6,D.layers.mask=K.layers.mask&-5,ue.layers.mask=K.layers.mask&-3;const Ge=ie.parent,Ke=K.cameras;P(K,Ge);for(let $e=0;$e<Ke.length;$e++)P(Ke[$e],Ge);Ke.length===2?ye(K,D,ue):K.projectionMatrix.copy(D.projectionMatrix),q(ie,K,Ge)};function q(ie,xe,Te){Te===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ah*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(ie){return b[ie]};let ve=null;function Ae(ie,xe){if(x=xe.getViewerPose(h||d),M=xe,x!==null){const Te=x.views;S!==null&&(t.setRenderTargetFramebuffer(U,S.framebuffer),t.setRenderTarget(U));let Ge=!1;Te.length!==K.cameras.length&&(K.cameras.length=0,Ge=!0);for(let _t=0;_t<Te.length;_t++){const mt=Te[_t];let Dt=null;if(S!==null)Dt=S.getViewport(mt);else{const Kt=_.getViewSubImage(g,mt);Dt=Kt.viewport,_t===0&&(t.setRenderTargetTextures(U,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(U))}let lt=H[_t];lt===void 0&&(lt=new pi,lt.layers.enable(_t),lt.viewport=new nn,H[_t]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),_t===0&&(K.matrix.copy(lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ge===!0&&K.cameras.push(lt)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const _t=_.getDepthInformation(Te[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,l.renderState)}if(Ke&&Ke.includes("camera-access")&&C){t.state.unbindTexture(),_=r.getBinding();for(let _t=0;_t<Te.length;_t++){const mt=Te[_t].camera;if(mt){let Dt=b[mt];Dt||(Dt=new n_,b[mt]=Dt);const lt=_.getCameraImage(mt);Dt.sourceTexture=lt}}}}for(let Te=0;Te<V.length;Te++){const Ge=k[Te],Ke=V[Te];Ge!==null&&Ke!==void 0&&Ke.update(Ge,xe,h||d)}ve&&ve(ie,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Oe=new s_;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}}const wr=new Sa,n2=new dn;function i2(o,t){function i(y,b){y.matrixAutoUpdate===!0&&y.updateMatrix(),b.value.copy(y.matrix)}function r(y,b){b.color.getRGB(y.fogColor.value,i_(o)),b.isFog?(y.fogNear.value=b.near,y.fogFar.value=b.far):b.isFogExp2&&(y.fogDensity.value=b.density)}function l(y,b,R,F,U){b.isMeshBasicMaterial?c(y,b):b.isMeshLambertMaterial?(c(y,b),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(y,b),_(y,b)):b.isMeshPhongMaterial?(c(y,b),x(y,b),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(y,b),g(y,b),b.isMeshPhysicalMaterial&&S(y,b,U)):b.isMeshMatcapMaterial?(c(y,b),M(y,b)):b.isMeshDepthMaterial?c(y,b):b.isMeshDistanceMaterial?(c(y,b),C(y,b)):b.isMeshNormalMaterial?c(y,b):b.isLineBasicMaterial?(d(y,b),b.isLineDashedMaterial&&p(y,b)):b.isPointsMaterial?m(y,b,R,F):b.isSpriteMaterial?h(y,b):b.isShadowMaterial?(y.color.value.copy(b.color),y.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(y,b){y.opacity.value=b.opacity,b.color&&y.diffuse.value.copy(b.color),b.emissive&&y.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(y.map.value=b.map,i(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,i(b.alphaMap,y.alphaMapTransform)),b.bumpMap&&(y.bumpMap.value=b.bumpMap,i(b.bumpMap,y.bumpMapTransform),y.bumpScale.value=b.bumpScale,b.side===Gn&&(y.bumpScale.value*=-1)),b.normalMap&&(y.normalMap.value=b.normalMap,i(b.normalMap,y.normalMapTransform),y.normalScale.value.copy(b.normalScale),b.side===Gn&&y.normalScale.value.negate()),b.displacementMap&&(y.displacementMap.value=b.displacementMap,i(b.displacementMap,y.displacementMapTransform),y.displacementScale.value=b.displacementScale,y.displacementBias.value=b.displacementBias),b.emissiveMap&&(y.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,y.emissiveMapTransform)),b.specularMap&&(y.specularMap.value=b.specularMap,i(b.specularMap,y.specularMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);const R=t.get(b),F=R.envMap,U=R.envMapRotation;F&&(y.envMap.value=F,wr.copy(U),wr.x*=-1,wr.y*=-1,wr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),y.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(wr)),y.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=b.reflectivity,y.ior.value=b.ior,y.refractionRatio.value=b.refractionRatio),b.lightMap&&(y.lightMap.value=b.lightMap,y.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,y.lightMapTransform)),b.aoMap&&(y.aoMap.value=b.aoMap,y.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,y.aoMapTransform))}function d(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,b.map&&(y.map.value=b.map,i(b.map,y.mapTransform))}function p(y,b){y.dashSize.value=b.dashSize,y.totalSize.value=b.dashSize+b.gapSize,y.scale.value=b.scale}function m(y,b,R,F){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.size.value=b.size*R,y.scale.value=F*.5,b.map&&(y.map.value=b.map,i(b.map,y.uvTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,i(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function h(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.rotation.value=b.rotation,b.map&&(y.map.value=b.map,i(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,i(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function x(y,b){y.specular.value.copy(b.specular),y.shininess.value=Math.max(b.shininess,1e-4)}function _(y,b){b.gradientMap&&(y.gradientMap.value=b.gradientMap)}function g(y,b){y.metalness.value=b.metalness,b.metalnessMap&&(y.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,y.metalnessMapTransform)),y.roughness.value=b.roughness,b.roughnessMap&&(y.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,y.roughnessMapTransform)),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)}function S(y,b,R){y.ior.value=b.ior,b.sheen>0&&(y.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),y.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(y.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,y.sheenColorMapTransform)),b.sheenRoughnessMap&&(y.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,y.sheenRoughnessMapTransform))),b.clearcoat>0&&(y.clearcoat.value=b.clearcoat,y.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(y.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,y.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(y.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Gn&&y.clearcoatNormalScale.value.negate())),b.dispersion>0&&(y.dispersion.value=b.dispersion),b.iridescence>0&&(y.iridescence.value=b.iridescence,y.iridescenceIOR.value=b.iridescenceIOR,y.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(y.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,y.iridescenceMapTransform)),b.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),b.transmission>0&&(y.transmission.value=b.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),b.transmissionMap&&(y.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,y.transmissionMapTransform)),y.thickness.value=b.thickness,b.thicknessMap&&(y.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=b.attenuationDistance,y.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(y.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(y.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=b.specularIntensity,y.specularColor.value.copy(b.specularColor),b.specularColorMap&&(y.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,y.specularColorMapTransform)),b.specularIntensityMap&&(y.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,b){b.matcap&&(y.matcap.value=b.matcap)}function C(y,b){const R=t.get(b).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function a2(o,t,i,r){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,F){const U=F.program;r.uniformBlockBinding(R,U)}function h(R,F){let U=l[R.id];U===void 0&&(M(R),U=x(R),l[R.id]=U,R.addEventListener("dispose",y));const V=F.program;r.updateUBOMapping(R,V);const k=t.render.frame;c[R.id]!==k&&(g(R),c[R.id]=k)}function x(R){const F=_();R.__bindingPointIndex=F;const U=o.createBuffer(),V=R.__size,k=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,V,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,F,U),U}function _(){for(let R=0;R<p;R++)if(d.indexOf(R)===-1)return d.push(R),R;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const F=l[R.id],U=R.uniforms,V=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,F);for(let k=0,I=U.length;k<I;k++){const T=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,ue=T.length;D<ue;D++){const H=T[D];if(S(H,k,D,V)===!0){const K=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let se=0;for(let Q=0;Q<J.length;Q++){const L=J[Q],B=C(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,K+se,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,se),se+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(R,F,U,V){const k=R.value,I=F+"_"+U;if(V[I]===void 0)return typeof k=="number"||typeof k=="boolean"?V[I]=k:V[I]=k.clone(),!0;{const T=V[I];if(typeof k=="number"||typeof k=="boolean"){if(T!==k)return V[I]=k,!0}else if(T.equals(k)===!1)return T.copy(k),!0}return!1}function M(R){const F=R.uniforms;let U=0;const V=16;for(let I=0,T=F.length;I<T;I++){const D=Array.isArray(F[I])?F[I]:[F[I]];for(let ue=0,H=D.length;ue<H;ue++){const K=D[ue],J=Array.isArray(K.value)?K.value:[K.value];for(let se=0,Q=J.length;se<Q;se++){const L=J[se],B=C(L),oe=U%V,fe=oe%B.boundary,ye=oe+fe;U+=fe,ye!==0&&V-ye<B.storage&&(U+=V-ye),K.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=B.storage}}}const k=U%V;return k>0&&(U+=V-k),R.__size=U,R.__cache={},this}function C(R){const F={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(F.boundary=4,F.storage=4):R.isVector2?(F.boundary=8,F.storage=8):R.isVector3||R.isColor?(F.boundary=16,F.storage=12):R.isVector4?(F.boundary=16,F.storage=16):R.isMatrix3?(F.boundary=48,F.storage=48):R.isMatrix4?(F.boundary=64,F.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",R),F}function y(R){const F=R.target;F.removeEventListener("dispose",y);const U=d.indexOf(F.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function b(){for(const R in l)o.deleteBuffer(l[R]);d=[],l={},c={}}return{bind:m,update:h,dispose:b}}const r2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function s2(){return Bi===null&&(Bi=new eS(r2,16,16,Os,ba),Bi.name="DFG_LUT",Bi.minFilter=Cn,Bi.magFilter=Cn,Bi.wrapS=va,Bi.wrapT=va,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class o2{constructor(t={}){const{canvas:i=Dy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:S=mi}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const C=S,y=new Set([Bh,Fh,Ph]),b=new Set([mi,ji,Vo,Go,Lh,Oh]),R=new Uint32Array(4),F=new Int32Array(4);let U=null,V=null;const k=[],I=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ue=!1;this._outputColorSpace=hi;let H=0,K=0,J=null,se=-1,Q=null;const L=new nn,B=new nn;let oe=null;const fe=new Ut(0);let ye=0,P=i.width,q=i.height,ve=1,Ae=null,Oe=null;const ie=new nn(0,0,P,q),xe=new nn(0,0,P,q);let Te=!1;const Ge=new e_;let Ke=!1,$e=!1;const Qt=new dn,_t=new re,mt=new nn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return J===null?ve:1}let G=r;function Wt(w,X){return i.getContext(w,X)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",ke,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),G===null){const X="webgl2";if(G=Wt(X,w),G===null)throw Wt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Rt("WebGLRenderer: "+w.message),w}let Et,Lt,We,O,E,Y,me,be,he,je,Re,Ze,et,Me,Se,Pe,Le,Fe,ut,W,Ce,we,Be;function Ee(){Et=new oM(G),Et.init(),Ce=new QT(G,Et),Lt=new $E(G,Et,t,Ce),We=new ZT(G,Et),Lt.reversedDepthBuffer&&g&&We.buffers.depth.setReversed(!0),O=new uM(G),E=new PT,Y=new KT(G,Et,We,E,Lt,Ce,O),me=new sM(D),be=new mS(G),we=new QE(G,be),he=new lM(G,be,O,we),je=new dM(G,he,be,we,O),Fe=new fM(G,Lt,Y),Se=new eM(E),Re=new OT(D,me,Et,Lt,we,Se),Ze=new i2(D,E),et=new BT,Me=new GT(Et),Le=new KE(D,me,We,je,M,m),Pe=new YT(D,je,Lt),Be=new a2(G,O,Lt,We),ut=new JE(G,Et,O),W=new cM(G,Et,O),O.programs=Re.programs,D.capabilities=Lt,D.extensions=Et,D.properties=E,D.renderLists=et,D.shadowMap=Pe,D.state=We,D.info=O}Ee(),C!==mi&&(T=new pM(C,i.width,i.height,l,c));const de=new t2(D,G);this.xr=de,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(P,q,!1))},this.getSize=function(w){return w.set(P,q)},this.setSize=function(w,X,le=!0){if(de.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,q=X,i.width=Math.floor(w*ve),i.height=Math.floor(X*ve),le===!0&&(i.style.width=w+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(P*ve,q*ve).floor()},this.setDrawingBufferSize=function(w,X,le){P=w,q=X,ve=le,i.width=Math.floor(w*le),i.height=Math.floor(X*le),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(C===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,X,le,ne){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,X,le,ne),We.viewport(L.copy(ie).multiplyScalar(ve).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,X,le,ne){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,X,le,ne),We.scissor(B.copy(xe).multiplyScalar(ve).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){We.setScissorTest(Te=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){Oe=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,le=!0){let ne=0;if(w){let $=!1;if(J!==null){const De=J.texture.format;$=y.has(De)}if($){const De=J.texture.type,Ie=b.has(De),Ne=Le.getClearColor(),Xe=Le.getClearAlpha(),Ye=Ne.r,nt=Ne.g,rt=Ne.b;Ie?(R[0]=Ye,R[1]=nt,R[2]=rt,R[3]=Xe,G.clearBufferuiv(G.COLOR,0,R)):(F[0]=Ye,F[1]=nt,F[2]=rt,F[3]=Xe,G.clearBufferiv(G.COLOR,0,F))}else ne|=G.COLOR_BUFFER_BIT}X&&(ne|=G.DEPTH_BUFFER_BIT),le&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ke,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Le.dispose(),et.dispose(),Me.dispose(),E.dispose(),me.dispose(),je.dispose(),we.dispose(),Be.dispose(),Re.dispose(),de.dispose(),de.removeEventListener("sessionstart",Pr),de.removeEventListener("sessionend",Fr),Ni.stop()};function ke(w){w.preventDefault(),G0("WebGLRenderer: Context Lost."),ue=!0}function it(){G0("WebGLRenderer: Context Restored."),ue=!1;const w=O.autoReset,X=Pe.enabled,le=Pe.autoUpdate,ne=Pe.needsUpdate,$=Pe.type;Ee(),O.autoReset=w,Pe.enabled=X,Pe.autoUpdate=le,Pe.needsUpdate=ne,Pe.type=$}function Pt(w){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mt(w){const X=w.target;X.removeEventListener("dispose",Mt),Rn(X)}function Rn(w){_i(w),E.remove(w)}function _i(w){const X=E.get(w).programs;X!==void 0&&(X.forEach(function(le){Re.releaseProgram(le)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,le,ne,$,De){X===null&&(X=Dt);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Ne=Qo(w,X,le,ne,$);We.setMaterial(ne,Ie);let Xe=le.index,Ye=1;if(ne.wireframe===!0){if(Xe=he.getWireframeAttribute(le),Xe===void 0)return;Ye=2}const nt=le.drawRange,rt=le.attributes.position;let ze=nt.start*Ye,ft=(nt.start+nt.count)*Ye;De!==null&&(ze=Math.max(ze,De.start*Ye),ft=Math.min(ft,(De.start+De.count)*Ye)),Xe!==null?(ze=Math.max(ze,0),ft=Math.min(ft,Xe.count)):rt!=null&&(ze=Math.max(ze,0),ft=Math.min(ft,rt.count));const qt=ft-ze;if(qt<0||qt===1/0)return;we.setup($,ne,Ne,le,Xe);let Yt,At=ut;if(Xe!==null&&(Yt=be.get(Xe),At=W,At.setIndex(Yt)),$.isMesh)ne.wireframe===!0?(We.setLineWidth(ne.wireframeLinewidth*Kt()),At.setMode(G.LINES)):At.setMode(G.TRIANGLES);else if($.isLine){let pn=ne.linewidth;pn===void 0&&(pn=1),We.setLineWidth(pn*Kt()),$.isLineSegments?At.setMode(G.LINES):$.isLineLoop?At.setMode(G.LINE_LOOP):At.setMode(G.LINE_STRIP)}else $.isPoints?At.setMode(G.POINTS):$.isSprite&&At.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)zc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))At.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const pn=$._multiDrawStarts,Ve=$._multiDrawCounts,Dn=$._multiDrawCount,at=Xe?be.get(Xe).bytesPerElement:1,Nn=E.get(ne).currentProgram.getUniforms();for(let jn=0;jn<Dn;jn++)Nn.setValue(G,"_gl_DrawID",jn),At.render(pn[jn]/at,Ve[jn])}else if($.isInstancedMesh)At.renderInstances(ze,qt,$.count);else if(le.isInstancedBufferGeometry){const pn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ve=Math.min(le.instanceCount,pn);At.renderInstances(ze,qt,Ve)}else At.render(ze,qt)};function zs(w,X,le){w.transparent===!0&&w.side===ga&&w.forceSinglePass===!1?(w.side=Gn,w.needsUpdate=!0,Ea(w,X,le),w.side=ir,w.needsUpdate=!0,Ea(w,X,le),w.side=ga):Ea(w,X,le)}this.compile=function(w,X,le=null){le===null&&(le=w),V=Me.get(le),V.init(X),I.push(V),le.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(V.pushLight($),$.castShadow&&V.pushShadow($))}),w!==le&&w.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(V.pushLight($),$.castShadow&&V.pushShadow($))}),V.setupLights();const ne=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const De=$.material;if(De)if(Array.isArray(De))for(let Ie=0;Ie<De.length;Ie++){const Ne=De[Ie];zs(Ne,le,$),ne.add(Ne)}else zs(De,le,$),ne.add(De)}),V=I.pop(),ne},this.compileAsync=function(w,X,le=null){const ne=this.compile(w,X,le);return new Promise($=>{function De(){if(ne.forEach(function(Ie){E.get(Ie).currentProgram.isReady()&&ne.delete(Ie)}),ne.size===0){$(w);return}setTimeout(De,10)}Et.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Or=null;function Yo(w){Or&&Or(w)}function Pr(){Ni.stop()}function Fr(){Ni.start()}const Ni=new s_;Ni.setAnimationLoop(Yo),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){Or=w,de.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},de.addEventListener("sessionstart",Pr),de.addEventListener("sessionend",Fr),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,ne=T!==null&&(J===null||le)&&T.begin(D,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,X,J),V=Me.get(w,I.length),V.init(X),I.push(V),Qt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ge.setFromProjectionMatrix(Qt,zi,X.reversedDepth),$e=this.localClippingEnabled,Ke=Se.init(this.clippingPlanes,$e),U=et.get(w,k.length),U.init(),k.push(U),de.enabled===!0&&de.isPresenting===!0){const Ie=D.xr.getDepthSensingMesh();Ie!==null&&Br(Ie,X,-1/0,D.sortObjects)}Br(w,X,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Ae,Oe),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&Le.addToRenderList(U,w),this.info.render.frame++,Ke===!0&&Se.beginShadows();const $=V.state.shadowsArray;if(Pe.render($,w,X),Ke===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&T.hasRenderPass())===!1){const Ie=U.opaque,Ne=U.transmissive;if(V.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Ne.length>0)for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const rt=Xe[Ye];an(Ie,Ne,w,rt)}lt&&Le.render(w);for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const rt=Xe[Ye];xi(U,w,rt,rt.viewport)}}else Ne.length>0&&an(Ie,Ne,w,X),lt&&Le.render(w),xi(U,w,X)}J!==null&&K===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),ne&&T.end(D),w.isScene===!0&&w.onAfterRender(D,w,X),we.resetDefaultState(),se=-1,Q=null,I.pop(),I.length>0?(V=I[I.length-1],Ke===!0&&Se.setGlobalState(D.clippingPlanes,V.state.camera)):V=null,k.pop(),k.length>0?U=k[k.length-1]:U=null};function Br(w,X,le,ne){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)V.pushLight(w),w.castShadow&&V.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){ne&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Qt);const Ie=je.update(w),Ne=w.material;Ne.visible&&U.push(w,Ie,Ne,le,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const Ie=je.update(w),Ne=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),mt.copy(Ie.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(Qt)),Array.isArray(Ne)){const Xe=Ie.groups;for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const rt=Xe[Ye],ze=Ne[rt.materialIndex];ze&&ze.visible&&U.push(w,Ie,ze,le,mt.z,rt)}}else Ne.visible&&U.push(w,Ie,Ne,le,mt.z,null)}}const De=w.children;for(let Ie=0,Ne=De.length;Ie<Ne;Ie++)Br(De[Ie],X,le,ne)}function xi(w,X,le,ne){const{opaque:$,transmissive:De,transparent:Ie}=w;V.setupLightsView(le),Ke===!0&&Se.setGlobalState(D.clippingPlanes,le),ne&&We.viewport(L.copy(ne)),$.length>0&&hn($,X,le),De.length>0&&hn(De,X,le),Ie.length>0&&hn(Ie,X,le),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function an(w,X,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[ne.id]===void 0){const ze=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[ne.id]=new Vi(1,1,{generateMipmaps:!0,type:ze?ba:mi,minFilter:Nr,samples:Math.max(4,Lt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const De=V.state.transmissionRenderTarget[ne.id],Ie=ne.viewport||L;De.setSize(Ie.z*D.transmissionResolutionScale,Ie.w*D.transmissionResolutionScale);const Ne=D.getRenderTarget(),Xe=D.getActiveCubeFace(),Ye=D.getActiveMipmapLevel();D.setRenderTarget(De),D.getClearColor(fe),ye=D.getClearAlpha(),ye<1&&D.setClearColor(16777215,.5),D.clear(),lt&&Le.render(le);const nt=D.toneMapping;D.toneMapping=Hi;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),V.setupLightsView(ne),Ke===!0&&Se.setGlobalState(D.clippingPlanes,ne),hn(w,le,ne),Y.updateMultisampleRenderTarget(De),Y.updateRenderTargetMipmap(De),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ft=0,qt=X.length;ft<qt;ft++){const Yt=X[ft],{object:At,geometry:pn,material:Ve,group:Dn}=Yt;if(Ve.side===ga&&At.layers.test(ne.layers)){const at=Ve.side;Ve.side=Gn,Ve.needsUpdate=!0,Wi(At,le,ne,pn,Ve,Dn),Ve.side=at,Ve.needsUpdate=!0,ze=!0}}ze===!0&&(Y.updateMultisampleRenderTarget(De),Y.updateRenderTargetMipmap(De))}D.setRenderTarget(Ne,Xe,Ye),D.setClearColor(fe,ye),rt!==void 0&&(ne.viewport=rt),D.toneMapping=nt}function hn(w,X,le){const ne=X.isScene===!0?X.overrideMaterial:null;for(let $=0,De=w.length;$<De;$++){const Ie=w[$],{object:Ne,geometry:Xe,group:Ye}=Ie;let nt=Ie.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),Ne.layers.test(le.layers)&&Wi(Ne,X,le,Xe,nt,Ye)}}function Wi(w,X,le,ne,$,De){w.onBeforeRender(D,X,le,ne,$,De),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(D,X,le,ne,w,De),$.transparent===!0&&$.side===ga&&$.forceSinglePass===!1?($.side=Gn,$.needsUpdate=!0,D.renderBufferDirect(le,X,ne,$,w,De),$.side=ir,$.needsUpdate=!0,D.renderBufferDirect(le,X,ne,$,w,De),$.side=ga):D.renderBufferDirect(le,X,ne,$,w,De),w.onAfterRender(D,X,le,ne,$,De)}function Ea(w,X,le){X.isScene!==!0&&(X=Dt);const ne=E.get(w),$=V.state.lights,De=V.state.shadowsArray,Ie=$.state.version,Ne=Re.getParameters(w,$.state,De,X,le),Xe=Re.getProgramCacheKey(Ne);let Ye=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=me.get(w.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",Mt),Ye=new Map,ne.programs=Ye);let rt=Ye.get(Xe);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Ie)return Ko(w,Ne),rt}else Ne.uniforms=Re.getUniforms(w),w.onBeforeCompile(Ne,D),rt=Re.acquireProgram(Ne,Xe),Ye.set(Xe,rt),ne.uniforms=Ne.uniforms;const ze=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Se.uniform),Ko(w,Ne),ne.needsLights=Hs(w),ne.lightsStateVersion=Ie,ne.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function Zo(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Ko(w,X){const le=E.get(w);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function Qo(w,X,le,ne,$){X.isScene!==!0&&(X=Dt),Y.resetTextureUnits();const De=X.fog,Ie=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ne=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ps,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ye=me.get(ne.envMap||Ie,Xe),nt=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,rt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,qt=!!le.morphAttributes.color;let Yt=Hi;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Yt=D.toneMapping);const At=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,pn=At!==void 0?At.length:0,Ve=E.get(ne),Dn=V.state.lights;if(Ke===!0&&($e===!0||w!==Q)){const sn=w===Q&&ne.id===se;Se.setState(ne,w,sn)}let at=!1;ne.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Dn.state.version||Ve.outputColorSpace!==Ne||$.isBatchedMesh&&Ve.batching===!1||!$.isBatchedMesh&&Ve.batching===!0||$.isBatchedMesh&&Ve.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ve.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||$.isInstancedMesh&&Ve.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ve.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ve.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ve.instancingMorph===!1&&$.morphTexture!==null||Ve.envMap!==Ye||ne.fog===!0&&Ve.fog!==De||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Se.numPlanes||Ve.numIntersection!==Se.numIntersection)||Ve.vertexAlphas!==nt||Ve.vertexTangents!==rt||Ve.morphTargets!==ze||Ve.morphNormals!==ft||Ve.morphColors!==qt||Ve.toneMapping!==Yt||Ve.morphTargetsCount!==pn)&&(at=!0):(at=!0,Ve.__version=ne.version);let Nn=Ve.currentProgram;at===!0&&(Nn=Ea(ne,X,$));let jn=!1,bi=!1,Xn=!1;const Ot=Nn.getUniforms(),rn=Ve.uniforms;if(We.useProgram(Nn.program)&&(jn=!0,bi=!0,Xn=!0),ne.id!==se&&(se=ne.id,bi=!0),jn||Q!==w){We.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(G,"projectionMatrix",w.projectionMatrix),Ot.setValue(G,"viewMatrix",w.matrixWorldInverse);const yi=Ot.map.cameraPosition;yi!==void 0&&yi.setValue(G,_t.setFromMatrixPosition(w.matrixWorld)),Lt.logarithmicDepthBuffer&&Ot.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ot.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,bi=!0,Xn=!0)}if(Ve.needsLights&&(Dn.state.directionalShadowMap.length>0&&Ot.setValue(G,"directionalShadowMap",Dn.state.directionalShadowMap,Y),Dn.state.spotShadowMap.length>0&&Ot.setValue(G,"spotShadowMap",Dn.state.spotShadowMap,Y),Dn.state.pointShadowMap.length>0&&Ot.setValue(G,"pointShadowMap",Dn.state.pointShadowMap,Y)),$.isSkinnedMesh){Ot.setOptional(G,$,"bindMatrix"),Ot.setOptional(G,$,"bindMatrixInverse");const sn=$.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ot.setValue(G,"boneTexture",sn.boneTexture,Y))}$.isBatchedMesh&&(Ot.setOptional(G,$,"batchingTexture"),Ot.setValue(G,"batchingTexture",$._matricesTexture,Y),Ot.setOptional(G,$,"batchingIdTexture"),Ot.setValue(G,"batchingIdTexture",$._indirectTexture,Y),Ot.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(G,"batchingColorTexture",$._colorsTexture,Y));const Un=le.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Fe.update($,le,Nn),(bi||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,Ot.setValue(G,"receiveShadow",$.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=s2()),bi&&(Ot.setValue(G,"toneMappingExposure",D.toneMappingExposure),Ve.needsLights&&ar(rn,Xn),De&&ne.fog===!0&&Ze.refreshFogUniforms(rn,De),Ze.refreshMaterialUniforms(rn,ne,ve,q,V.state.transmissionRenderTarget[w.id]),Fc.upload(G,Zo(Ve),rn,Y)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Fc.upload(G,Zo(Ve),rn,Y),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ot.setValue(G,"center",$.center),Ot.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(G,"normalMatrix",$.normalMatrix),Ot.setValue(G,"modelMatrix",$.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const sn=ne.uniformsGroups;for(let yi=0,qi=sn.length;yi<qi;yi++){const Ir=sn[yi];Be.update(Ir,Nn),Be.bind(Ir,Nn)}}return Nn}function ar(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Hs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,X,le){const ne=E.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=X,E.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const le=E.get(w);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0};const Ma=G.createFramebuffer();this.setRenderTarget=function(w,X=0,le=0){J=w,H=X,K=le;let ne=null,$=!1,De=!1;if(w){const Ne=E.get(w);if(Ne.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(G.FRAMEBUFFER,Ne.__webglFramebuffer),L.copy(w.viewport),B.copy(w.scissor),oe=w.scissorTest,We.viewport(L),We.scissor(B),We.setScissorTest(oe),se=-1;return}else if(Ne.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Ne.__hasExternalTextures)Y.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(Ne.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const Ye=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?ne=Ye[X][le]:ne=Ye[X],$=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?ne=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?ne=Ye[le]:ne=Ye,L.copy(w.viewport),B.copy(w.scissor),oe=w.scissorTest}else L.copy(ie).multiplyScalar(ve).floor(),B.copy(xe).multiplyScalar(ve).floor(),oe=Te;if(le!==0&&(ne=Ma),We.bindFramebuffer(G.FRAMEBUFFER,ne)&&We.drawBuffers(w,ne),We.viewport(L),We.scissor(B),We.setScissorTest(oe),$){const Ne=E.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,le)}else if(De){const Ne=X;for(let Xe=0;Xe<w.textures.length;Xe++){const Ye=E.get(w.textures[Xe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,le,Ne)}}else if(w!==null&&le!==0){const Ne=E.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,le)}se=-1},this.readRenderTargetPixels=function(w,X,le,ne,$,De,Ie,Ne=0){if(!(w&&w.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Xe=Xe[Ie]),Xe){We.bindFramebuffer(G.FRAMEBUFFER,Xe);try{const Ye=w.textures[Ne],nt=Ye.format,rt=Ye.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!Lt.textureFormatReadable(nt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(rt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ne&&le>=0&&le<=w.height-$&&G.readPixels(X,le,ne,$,Ce.convert(nt),Ce.convert(rt),De)}finally{const Ye=J!==null?E.get(J).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(w,X,le,ne,$,De,Ie,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Xe=Xe[Ie]),Xe)if(X>=0&&X<=w.width-ne&&le>=0&&le<=w.height-$){We.bindFramebuffer(G.FRAMEBUFFER,Xe);const Ye=w.textures[Ne],nt=Ye.format,rt=Ye.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!Lt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(X,le,ne,$,Ce.convert(nt),Ce.convert(rt),0);const ft=J!==null?E.get(J).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,ft);const qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Ny(G,qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.deleteBuffer(ze),G.deleteSync(qt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,le=0){const ne=Math.pow(2,-le),$=Math.floor(w.image.width*ne),De=Math.floor(w.image.height*ne),Ie=X!==null?X.x:0,Ne=X!==null?X.y:0;Y.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,Ie,Ne,$,De),We.unbindTexture()};const Ta=G.createFramebuffer(),rr=G.createFramebuffer();this.copyTextureToTexture=function(w,X,le=null,ne=null,$=0,De=0){let Ie,Ne,Xe,Ye,nt,rt,ze,ft,qt;const Yt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(le!==null)Ie=le.max.x-le.min.x,Ne=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,Ye=le.min.x,nt=le.min.y,rt=le.isBox3?le.min.z:0;else{const rn=Math.pow(2,-$);Ie=Math.floor(Yt.width*rn),Ne=Math.floor(Yt.height*rn),w.isDataArrayTexture?Xe=Yt.depth:w.isData3DTexture?Xe=Math.floor(Yt.depth*rn):Xe=1,Ye=0,nt=0,rt=0}ne!==null?(ze=ne.x,ft=ne.y,qt=ne.z):(ze=0,ft=0,qt=0);const At=Ce.convert(X.format),pn=Ce.convert(X.type);let Ve;X.isData3DTexture?(Y.setTexture3D(X,0),Ve=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),Ve=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),Ve=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Dn=G.getParameter(G.UNPACK_ROW_LENGTH),at=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Nn=G.getParameter(G.UNPACK_SKIP_PIXELS),jn=G.getParameter(G.UNPACK_SKIP_ROWS),bi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,rt);const Xn=w.isDataArrayTexture||w.isData3DTexture,Ot=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const rn=E.get(w),Un=E.get(X),sn=E.get(rn.__renderTarget),yi=E.get(Un.__renderTarget);We.bindFramebuffer(G.READ_FRAMEBUFFER,sn.__webglFramebuffer),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let qi=0;qi<Xe;qi++)Xn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(w).__webglTexture,$,rt+qi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(X).__webglTexture,De,qt+qi)),G.blitFramebuffer(Ye,nt,Ie,Ne,ze,ft,Ie,Ne,G.DEPTH_BUFFER_BIT,G.NEAREST);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||E.has(w)){const rn=E.get(w),Un=E.get(X);We.bindFramebuffer(G.READ_FRAMEBUFFER,Ta),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,rr);for(let sn=0;sn<Xe;sn++)Xn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,$,rt+sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,$),Ot?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,De,qt+sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,De),$!==0?G.blitFramebuffer(Ye,nt,Ie,Ne,ze,ft,Ie,Ne,G.COLOR_BUFFER_BIT,G.NEAREST):Ot?G.copyTexSubImage3D(Ve,De,ze,ft,qt+sn,Ye,nt,Ie,Ne):G.copyTexSubImage2D(Ve,De,ze,ft,Ye,nt,Ie,Ne);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ot?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Ve,De,ze,ft,qt,Ie,Ne,Xe,At,pn,Yt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,De,ze,ft,qt,Ie,Ne,Xe,At,Yt.data):G.texSubImage3D(Ve,De,ze,ft,qt,Ie,Ne,Xe,At,pn,Yt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,ze,ft,Ie,Ne,At,pn,Yt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,ze,ft,Yt.width,Yt.height,At,Yt.data):G.texSubImage2D(G.TEXTURE_2D,De,ze,ft,Ie,Ne,At,pn,Yt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Dn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,at),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Nn),G.pixelStorei(G.UNPACK_SKIP_ROWS,jn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,bi),De===0&&X.generateMipmaps&&G.generateMipmap(Ve),We.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){H=0,K=0,J=null,We.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const l2="_canvas_ir7j4_1",c2={canvas:l2},u2={rotation:{x:0,y:20,z:0},topColor:"#8c8cff",bottomColor:"#4c4ccc",opacity:.8,scale:1.2,enableFog:!0,enableVertexJitter:!0,pauseRotation:!0,className:""};function f2(o){const t={...u2,...o},i=tt.useRef(null),r=tt.useRef(null);return tt.useEffect(()=>{if(!i.current)return;const l=t.enableVertexJitter?`
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        
        // Vertex snapping for retro effect
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float snapScale = 0.02;
        mvPosition.xyz = floor(mvPosition.xyz / snapScale) * snapScale;
        
        gl_Position = projectionMatrix * mvPosition;
      }
    `:`
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,c=`
      uniform vec3 color;
      uniform float time;
      uniform float opacity;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 light = normalize(vec3(1.0, 1.0, 1.0));
        float dProd = max(0.0, dot(vNormal, light));
        
        float brightness = floor(dProd * 4.0) / 4.0;
        brightness = brightness * 0.6 + 0.4;
        
        vec3 finalColor = color * brightness;
        gl_FragColor = vec4(finalColor, opacity);
      }
    `,d=new qy;t.enableFog&&(d.fog=new Hh(0,10,50));const p=new pi(75,window.innerWidth/window.innerHeight,.1,1e3),m=window.innerWidth<768,h=.1;p.position.set(0,h+1.5,m?4:6),p.lookAt(0,h,0);const x=new o2({canvas:i.current,antialias:!1,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio);const _=new vi({uniforms:{color:{value:new Ut(t.topColor)},time:{value:0},opacity:{value:t.opacity}},vertexShader:l,fragmentShader:c,transparent:!0}),g=new vi({uniforms:{color:{value:new Ut(t.bottomColor)},time:{value:0},opacity:{value:t.opacity}},vertexShader:l,fragmentShader:c,transparent:!0}),S=t.scale,M=new Hc(S,S*1.8,4),C=new Di(M,_);C.position.y=1.1*S,d.add(C);const y=new Hc(S,S*1.5,4),b=new Di(y,g);b.position.y=-.9*S,b.rotation.x=Math.PI,d.add(b),r.current={scene:d,camera:p,renderer:x,topPyramid:C,bottomPyramid:b,animationId:null};let R=0,F=0,U=0,V=!0,k=0;const I=2,T=Math.PI/2,D=Math.PI/4,ue=1;function H(){if(!r.current)return;const{scene:J,camera:se,renderer:Q,topPyramid:L,bottomPyramid:B}=r.current,oe=.016;if(R+=oe,t.pauseRotation)if(V)R-k>=I&&(V=!1,F=0,U=(U+Math.PI/2)%(Math.PI*2));else{F+=oe;const fe=T/D,ye=Math.min(F/fe,1);let P;const q=ue/fe;if(ye<q){const Oe=ye/q;P=q*(1-Math.cos(Oe*Math.PI/2))}else if(ye>1-q){const Oe=(ye-(1-q))/q;P=1-q+q*Math.sin(Oe*Math.PI/2)}else P=ye;const Ae=(U-T+Math.PI*4)%(Math.PI*2)+P*T;L.rotation.y=Ae,B.rotation.y=Ae,ye>=1&&(V=!0,k=R,L.rotation.y=U,B.rotation.y=U)}else{const fe={x:t.rotation.x*Math.PI/180,y:t.rotation.y*Math.PI/180,z:t.rotation.z*Math.PI/180};L.rotation.x+=fe.x*oe,L.rotation.y+=fe.y*oe,L.rotation.z+=fe.z*oe,B.rotation.x+=fe.x*oe,B.rotation.y+=fe.y*oe,B.rotation.z+=fe.z*oe}L.position.y=1.1*S+Math.sin(R)*.065,B.position.y=-.9*S-Math.sin(R)*.065,L.material.uniforms.time.value=R,B.material.uniforms.time.value=R,Q.render(J,se),r.current.animationId=requestAnimationFrame(H)}H();const K=()=>{if(!r.current)return;const{camera:J,renderer:se}=r.current;J.aspect=window.innerWidth/window.innerHeight,J.updateProjectionMatrix(),se.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",K),()=>{window.removeEventListener("resize",K),r.current&&(r.current.animationId&&cancelAnimationFrame(r.current.animationId),r.current.topPyramid.geometry.dispose(),r.current.topPyramid.material.dispose(),r.current.bottomPyramid.geometry.dispose(),r.current.bottomPyramid.material.dispose(),r.current.renderer.dispose(),r.current=null)}},[t.topColor,t.bottomColor,t.opacity,t.scale,t.enableFog,t.enableVertexJitter,t.pauseRotation,t.rotation.x,t.rotation.y,t.rotation.z]),N.jsx("canvas",{ref:i,className:`${c2.canvas} ${t.className}`})}const Dv=["protocol","scaling","defi","nft","social","research","security","adoption","tvl","blobs"];function d2(){const[o,t]=tt.useState(null),[i,r]=tt.useState(0),[l,c]=tt.useState(Dv),[d,p]=tt.useState(!1),m=tt.useRef(null),h=tt.useRef(null),x=tt.useRef(null);tt.useEffect(()=>{const M=()=>{const C=window.location.hash.slice(1);if(C){const y=oc.find(b=>b.id===C);y&&(t(y),setTimeout(()=>{const b=document.getElementById(`event-${C}`);b&&b.scrollIntoView({behavior:"smooth",block:"center"})},100))}};return M(),window.addEventListener("hashchange",M),()=>window.removeEventListener("hashchange",M)},[]);const _=tt.useCallback(M=>{t(M),M?window.history.replaceState(null,"",`#${M.id}`):window.history.replaceState(null,"",window.location.pathname)},[]),g=tt.useCallback(()=>{p(!0),h.current?.play(),x.current?.play()},[]),S=tt.useMemo(()=>l.length===0?[]:l.length===Dv.length?oc:oc.filter(M=>!M.tags||M.tags.length===0?!1:M.tags.some(C=>l.includes(C))),[l]);return tt.useEffect(()=>{const M=()=>{if(m.current){const C=window.scrollY,y=document.documentElement.scrollHeight-window.innerHeight,b=Math.min(1,Math.max(0,C/y));r(b)}};return window.addEventListener("scroll",M),()=>window.removeEventListener("scroll",M)},[]),N.jsxs("div",{className:"min-h-screen bg-[var(--bg-primary)]",children:[N.jsx(f2,{}),N.jsx(Fb,{}),N.jsx(Gb,{ref:h}),N.jsx(jb,{ref:x,speed:600}),N.jsx(Zb,{activeTags:l,onTagsChange:c,totalEvents:oc.length,filteredCount:S.length}),N.jsxs("main",{className:"relative",ref:m,children:[N.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:N.jsx(Vb,{progress:i})}),N.jsx("section",{className:"flex flex-col items-center justify-center min-h-[60vh] px-8 text-center relative z-10",children:N.jsxs("div",{className:"max-w-3xl mx-auto",children:[N.jsx("div",{className:"inline-block px-8 py-4 rounded-2xl bg-[var(--bg-primary)]/80 backdrop-blur-sm mb-6",children:N.jsx("h1",{className:"text-5xl md:text-7xl font-bold text-[var(--text-primary)] dark:bg-gradient-to-r dark:from-[var(--eth-purple)] dark:to-[var(--eth-purple-light)] dark:bg-clip-text dark:text-transparent",children:"The Ethereum Archive"})}),N.jsx("p",{className:"text-xl md:text-2xl text-[var(--text-secondary)] mb-8 px-6 py-3 rounded-xl bg-[var(--bg-primary)]/60 backdrop-blur-sm inline-block",children:"A complete history of Ethereum's evolution — from genesis to the present"}),d?N.jsxs("div",{className:"flex items-center justify-center gap-2 text-[var(--text-muted)]",children:[N.jsx("span",{children:"Scroll to explore"}),N.jsx("svg",{className:"w-5 h-5 animate-bounce",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]}):N.jsx("button",{onClick:g,className:"group mx-auto w-20 h-20 rounded-full bg-[var(--eth-purple)] hover:bg-[var(--eth-purple-light)] text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110",title:"Start the Journey",children:N.jsx("svg",{className:"w-10 h-10 ml-1",fill:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{d:"M8 5v14l11-7z"})})})]})}),N.jsx(Db,{nodes:S,onSelectNode:_,selectedNodeId:o?.id}),N.jsx("section",{className:"px-8 py-12 relative z-10",children:N.jsxs("div",{className:"max-w-2xl mx-auto",children:[N.jsx("h2",{className:"text-2xl font-bold text-[var(--text-primary)] mb-2 text-center",children:"Now"}),N.jsx("p",{className:"text-[var(--text-muted)] text-center mb-6",children:"The timeline continues... Watch live Ethereum blocks being produced."}),N.jsx(Xb,{variant:"full",maxBlocks:3})]})}),N.jsx(Yb,{})]}),N.jsx(kb,{node:o,onClose:()=>_(null)}),N.jsx("footer",{className:"py-12 px-8 border-t border-[var(--bg-tertiary)]",children:N.jsxs("div",{className:"max-w-4xl mx-auto text-center text-[var(--text-muted)]",children:[N.jsxs("p",{className:"mb-2",children:["Built by"," ",N.jsx("a",{href:"https://github.com/its-applekid",className:"text-[var(--eth-purple)] hover:underline",target:"_blank",rel:"noopener noreferrer",children:"Applekid"})]}),N.jsx("p",{className:"text-sm",children:"Data sourced from EIPs, ethereum.org, and community research"})]})})]})}Tb.createRoot(document.getElementById("root")).render(N.jsx(tt.StrictMode,{children:N.jsx(d2,{})}));
