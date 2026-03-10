(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Jf={exports:{}},No={};var E0;function vb(){if(E0)return No;E0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var M0;function _b(){return M0||(M0=1,Jf.exports=vb()),Jf.exports}var C=_b(),$f={exports:{}},st={};var T0;function xb(){if(T0)return st;T0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function b(P,q,ve){this.props=P,this.context=q,this.refs=S,this.updater=ve||M}b.prototype.isReactComponent={},b.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},b.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=b.prototype;function B(P,q,ve){this.props=P,this.context=q,this.refs=S,this.updater=ve||M}var U=B.prototype=new D;U.constructor=B,R(U,b.prototype),U.isPureReactComponent=!0;var I=Array.isArray;function k(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,q,ve){var Ae=ve.ref;return{$$typeof:o,type:P,key:q,ref:Ae!==void 0?Ae:null,props:ve}}function ue(P,q){return N(P.type,q,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function K(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(ve){return q[ve]})}var J=/\/+/g;function se(P,q){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):q.toString(36)}function Q(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(k,k):(P.status="pending",P.then(function(q){P.status==="pending"&&(P.status="fulfilled",P.value=q)},function(q){P.status==="pending"&&(P.status="rejected",P.reason=q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,q,ve,Ae,Oe){var ie=typeof P;(ie==="undefined"||ie==="boolean")&&(P=null);var xe=!1;if(P===null)xe=!0;else switch(ie){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(P.$$typeof){case o:case t:xe=!0;break;case x:return xe=P._init,L(xe(P._payload),q,ve,Ae,Oe)}}if(xe)return Oe=Oe(P),xe=Ae===""?"."+se(P,0):Ae,I(Oe)?(ve="",xe!=null&&(ve=xe.replace(J,"$&/")+"/"),L(Oe,q,ve,"",function(Ke){return Ke})):Oe!=null&&(V(Oe)&&(Oe=ue(Oe,ve+(Oe.key==null||P&&P.key===Oe.key?"":(""+Oe.key).replace(J,"$&/")+"/")+xe)),q.push(Oe)),1;xe=0;var Te=Ae===""?".":Ae+":";if(I(P))for(var Ge=0;Ge<P.length;Ge++)Ae=P[Ge],ie=Te+se(Ae,Ge),xe+=L(Ae,q,ve,ie,Oe);else if(Ge=y(P),typeof Ge=="function")for(P=Ge.call(P),Ge=0;!(Ae=P.next()).done;)Ae=Ae.value,ie=Te+se(Ae,Ge++),xe+=L(Ae,q,ve,ie,Oe);else if(ie==="object"){if(typeof P.then=="function")return L(Q(P),q,ve,Ae,Oe);throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return xe}function z(P,q,ve){if(P==null)return P;var Ae=[],Oe=0;return L(P,Ae,"","",function(ie){return q.call(ve,ie,Oe++)}),Ae}function oe(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(ve){(P._status===0||P._status===-1)&&(P._status=1,P._result=ve)},function(ve){(P._status===0||P._status===-1)&&(P._status=2,P._result=ve)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var fe=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ye={map:z,forEach:function(P,q,ve){z(P,function(){q.apply(this,arguments)},ve)},count:function(P){var q=0;return z(P,function(){q++}),q},toArray:function(P){return z(P,function(q){return q})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return st.Activity=_,st.Children=ye,st.Component=b,st.Fragment=i,st.Profiler=l,st.PureComponent=B,st.StrictMode=r,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},st.cache=function(P){return function(){return P.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(P,q,ve){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ae=R({},P.props),Oe=P.key;if(q!=null)for(ie in q.key!==void 0&&(Oe=""+q.key),q)!T.call(q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&q.ref===void 0||(Ae[ie]=q[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=ve;else if(1<ie){for(var xe=Array(ie),Te=0;Te<ie;Te++)xe[Te]=arguments[Te+2];Ae.children=xe}return N(P.type,Oe,Ae)},st.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},st.createElement=function(P,q,ve){var Ae,Oe={},ie=null;if(q!=null)for(Ae in q.key!==void 0&&(ie=""+q.key),q)T.call(q,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Oe[Ae]=q[Ae]);var xe=arguments.length-2;if(xe===1)Oe.children=ve;else if(1<xe){for(var Te=Array(xe),Ge=0;Ge<xe;Ge++)Te[Ge]=arguments[Ge+2];Oe.children=Te}if(P&&P.defaultProps)for(Ae in xe=P.defaultProps,xe)Oe[Ae]===void 0&&(Oe[Ae]=xe[Ae]);return N(P,ie,Oe)},st.createRef=function(){return{current:null}},st.forwardRef=function(P){return{$$typeof:p,render:P}},st.isValidElement=V,st.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:oe}},st.memo=function(P,q){return{$$typeof:h,type:P,compare:q===void 0?null:q}},st.startTransition=function(P){var q=F.T,ve={};F.T=ve;try{var Ae=P(),Oe=F.S;Oe!==null&&Oe(ve,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(k,fe)}catch(ie){fe(ie)}finally{q!==null&&ve.types!==null&&(q.types=ve.types),F.T=q}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(P){return F.H.use(P)},st.useActionState=function(P,q,ve){return F.H.useActionState(P,q,ve)},st.useCallback=function(P,q){return F.H.useCallback(P,q)},st.useContext=function(P){return F.H.useContext(P)},st.useDebugValue=function(){},st.useDeferredValue=function(P,q){return F.H.useDeferredValue(P,q)},st.useEffect=function(P,q){return F.H.useEffect(P,q)},st.useEffectEvent=function(P){return F.H.useEffectEvent(P)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(P,q,ve){return F.H.useImperativeHandle(P,q,ve)},st.useInsertionEffect=function(P,q){return F.H.useInsertionEffect(P,q)},st.useLayoutEffect=function(P,q){return F.H.useLayoutEffect(P,q)},st.useMemo=function(P,q){return F.H.useMemo(P,q)},st.useOptimistic=function(P,q){return F.H.useOptimistic(P,q)},st.useReducer=function(P,q,ve){return F.H.useReducer(P,q,ve)},st.useRef=function(P){return F.H.useRef(P)},st.useState=function(P){return F.H.useState(P)},st.useSyncExternalStore=function(P,q,ve){return F.H.useSyncExternalStore(P,q,ve)},st.useTransition=function(){return F.H.useTransition()},st.version="19.2.4",st}var A0;function Dh(){return A0||(A0=1,$f.exports=xb()),$f.exports}var Je=Dh(),ed={exports:{}},Uo={},td={exports:{}},nd={};var w0;function bb(){return w0||(w0=1,(function(o){function t(L,z){var oe=L.length;L.push(z);e:for(;0<oe;){var fe=oe-1>>>1,ye=L[fe];if(0<l(ye,z))L[fe]=z,L[oe]=ye,oe=fe;else break e}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var z=L[0],oe=L.pop();if(oe!==z){L[0]=oe;e:for(var fe=0,ye=L.length,P=ye>>>1;fe<P;){var q=2*(fe+1)-1,ve=L[q],Ae=q+1,Oe=L[Ae];if(0>l(ve,oe))Ae<ye&&0>l(Oe,ve)?(L[fe]=Oe,L[Ae]=oe,fe=Ae):(L[fe]=ve,L[q]=oe,fe=q);else if(Ae<ye&&0>l(Oe,oe))L[fe]=Oe,L[Ae]=oe,fe=Ae;else break e}}return z}function l(L,z){var oe=L.sortIndex-z.sortIndex;return oe!==0?oe:L.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,_=null,g=3,y=!1,M=!1,R=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function U(L){for(var z=i(h);z!==null;){if(z.callback===null)r(h);else if(z.startTime<=L)r(h),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(h)}}function I(L){if(R=!1,U(L),!M)if(i(m)!==null)M=!0,k||(k=!0,K());else{var z=i(h);z!==null&&Q(I,z.startTime-L)}}var k=!1,F=-1,T=5,N=-1;function ue(){return S?!0:!(o.unstable_now()-N<T)}function V(){if(S=!1,k){var L=o.unstable_now();N=L;var z=!0;try{e:{M=!1,R&&(R=!1,D(F),F=-1),y=!0;var oe=g;try{t:{for(U(L),_=i(m);_!==null&&!(_.expirationTime>L&&ue());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,g=_.priorityLevel;var ye=fe(_.expirationTime<=L);if(L=o.unstable_now(),typeof ye=="function"){_.callback=ye,U(L),z=!0;break t}_===i(m)&&r(m),U(L)}else r(m);_=i(m)}if(_!==null)z=!0;else{var P=i(h);P!==null&&Q(I,P.startTime-L),z=!1}}break e}finally{_=null,g=oe,y=!1}z=void 0}}finally{z?K():k=!1}}}var K;if(typeof B=="function")K=function(){B(V)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,se=J.port2;J.port1.onmessage=V,K=function(){se.postMessage(null)}}else K=function(){b(V,0)};function Q(L,z){F=b(function(){L(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(L){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var oe=g;g=z;try{return L()}finally{g=oe}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var oe=g;g=L;try{return z()}finally{g=oe}},o.unstable_scheduleCallback=function(L,z,oe){var fe=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?fe+oe:fe):oe=fe,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=oe+ye,L={id:x++,callback:z,priorityLevel:L,startTime:oe,expirationTime:ye,sortIndex:-1},oe>fe?(L.sortIndex=oe,t(h,L),i(m)===null&&L===i(h)&&(R?(D(F),F=-1):R=!0,Q(I,oe-fe))):(L.sortIndex=ye,t(m,L),M||y||(M=!0,k||(k=!0,K()))),L},o.unstable_shouldYield=ue,o.unstable_wrapCallback=function(L){var z=g;return function(){var oe=g;g=z;try{return L.apply(this,arguments)}finally{g=oe}}}})(nd)),nd}var C0;function yb(){return C0||(C0=1,td.exports=bb()),td.exports}var id={exports:{}},Tn={};var R0;function Sb(){if(R0)return Tn;R0=1;var o=Dh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},Tn.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},Tn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Tn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,_=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,h){return m(h)},Tn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Tn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var D0;function Eb(){if(D0)return id.exports;D0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=Sb(),id.exports}var N0;function Mb(){if(N0)return Uo;N0=1;var o=yb(),t=Dh(),i=Eb();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,s=f;break}if(A===s){v=!0,s=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,s=u;break}if(A===s){v=!0,s=f,a=u;break}A=A.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),B=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case b:return"Profiler";case S:return"StrictMode";case I:return"Suspense";case k:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case B:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:se(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return se(e(n))}catch{}}return null}var Q=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},fe=[],ye=-1;function P(e){return{current:e}}function q(e){0>ye||(e.current=fe[ye],fe[ye]=null,ye--)}function ve(e,n){ye++,fe[ye]=e.current,e.current=n}var Ae=P(null),Oe=P(null),ie=P(null),xe=P(null);function Te(e,n){switch(ve(ie,n),ve(Oe,e),ve(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Wg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Wg(n),e=qg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(Ae),ve(Ae,e)}function Ge(){q(Ae),q(Oe),q(ie)}function Ke(e){e.memoizedState!==null&&ve(xe,e);var n=Ae.current,a=qg(n,e.type);n!==a&&(ve(Oe,e),ve(Ae,a))}function et(e){Oe.current===e&&(q(Ae),q(Oe)),xe.current===e&&(q(xe),wo._currentValue=oe)}var Qt,_t;function mt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+_t}var Dt=!1;function lt(e,n){if(!e||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var ae=ce}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(ce){ae=ce}e.call(_e.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var H=v.split(`
`),te=A.split(`
`);for(u=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(s===H.length||u===te.length)for(s=H.length-1,u=te.length-1;1<=s&&0<=u&&H[s]!==te[u];)u--;for(;1<=s&&0<=u;s--,u--)if(H[s]!==te[u]){if(s!==1||u!==1)do if(s--,u--,0>u||H[s]!==te[u]){var pe=`
`+H[s].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=s&&0<=u);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function Kt(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return mt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Kt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Wt=Object.prototype.hasOwnProperty,Et=o.unstable_scheduleCallback,Lt=o.unstable_cancelCallback,We=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,he=o.unstable_NormalPriority,je=o.unstable_LowPriority,Re=o.unstable_IdlePriority,Ze=o.log,tt=o.unstable_setDisableYieldValue,Me=null,Se=null;function Pe(e){if(typeof Ze=="function"&&tt(e),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(Me,e)}catch{}}var Le=Math.clz32?Math.clz32:W,Be=Math.log,ut=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Be(e)/ut|0)|0}var Ce=256,we=262144,Fe=4194304;function Ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function de(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=Ee(s):(v&=A,v!==0?u=Ee(v):a||(a=A&~e,a!==0&&(u=Ee(a))))):(A=s&~f,A!==0?u=Ee(A):v!==0?u=Ee(v):a||(a=s&~e,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),e}function Mt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _i(e,n,a,s,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,te=e.hiddenUpdates;for(a=v&~a;0<a;){var pe=31-Le(a),_e=1<<pe;A[pe]=0,H[pe]=-1;var ae=te[pe];if(ae!==null)for(te[pe]=null,pe=0;pe<ae.length;pe++){var ce=ae[pe];ce!==null&&(ce.lane&=-536870913)}a&=~_e}s!==0&&Hs(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Hs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Le(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Pr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Le(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Yo(e,n){var a=n&-n;return a=(a&42)!==0?1:Br(a),(a&(e.suspendedLanes|n))!==0?0:a}function Br(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ni(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:g0(e.type))}function kr(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var xi=Math.random().toString(36).slice(2),an="__reactFiber$"+xi,hn="__reactProps$"+xi,Wi="__reactContainer$"+xi,Ma="__reactEvents$"+xi,Zo="__reactListeners$"+xi,Ko="__reactHandles$"+xi,Qo="__reactResources$"+xi,rr="__reactMarker$"+xi;function Vs(e){delete e[an],delete e[hn],delete e[Ma],delete e[Zo],delete e[Ko]}function Ta(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Wi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=e0(e);e!==null;){if(a=e[an])return a;e=e0(e)}return n}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[an]||e[Wi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function sr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function w(e){var n=e[Qo];return n||(n=e[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[rr]=!0}var le=new Set,ne={};function $(e,n){De(e,n),De(e+"Capture",n)}function De(e,n){for(ne[e]=n,e=0;e<n.length;e++)le.add(n[e])}var ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ne={},Xe={};function Ye(e){return Wt.call(Xe,e)?!0:Wt.call(Ne,e)?!1:ke.test(e)?Xe[e]=!0:(Ne[e]=!0,!1)}function nt(e,n,a){if(Ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function rt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ze(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function At(e){if(!e._valueTracker){var n=qt(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=qt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Ve(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function at(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(e,n,a,s,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ft(n)):e.value!==""+ft(n)&&(e.value=""+ft(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?bi(e,v,ft(n)):a!=null?bi(e,v,ft(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ft(A):e.removeAttribute("name")}function jn(e,n,a,s,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(e);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),At(e)}function bi(e,n,a){n==="number"&&Ve(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Xn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ot(e,n,a){if(n!=null&&(n=""+ft(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ft(a):""}function rn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Q(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ft(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),At(e)}function Un(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var sn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yi(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||sn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function qi(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&yi(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&yi(e,f,n[f])}function Ir(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(e){return p_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var Yc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Hr=null;function Xh(e){var n=Aa(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Nn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[hn]||null;if(!u)throw Error(r(90));Nn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&pn(s)}break e;case"textarea":Ot(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Xn(e,!!a.multiple,n,!1)}}}var Kc=!1;function Wh(e,n,a){if(Kc)return e(n,a);Kc=!0;try{var s=e(n);return s}finally{if(Kc=!1,(zr!==null||Hr!==null)&&(Il(),zr&&(n=zr,e=Hr,Hr=zr=null,Xh(n),e)))for(n=0;n<e.length;n++)Xh(e[n])}}function Gs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[hn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Zi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Qc=!1}var wa=null,Jc=null,$o=null;function qh(){if($o)return $o;var e,n=Jc,a=n.length,s,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return $o=u.slice(e,1<s?1-s:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Yh(){return!1}function Bn(e){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Yh,this.isPropagationStopped=Yh,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Bn(or),Xs=_({},or,{view:0,detail:0}),m_=Bn(Xs),$c,eu,Ws,il=_({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?($c=e.screenX-Ws.screenX,eu=e.screenY-Ws.screenY):eu=$c=0,Ws=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),Zh=Bn(il),g_=_({},il,{dataTransfer:0}),v_=Bn(g_),__=_({},Xs,{relatedTarget:0}),tu=Bn(__),x_=_({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),b_=Bn(x_),y_=_({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S_=Bn(y_),E_=_({},or,{data:0}),Kh=Bn(E_),M_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=A_[e])?!!n[e]:!1}function nu(){return w_}var C_=_({},Xs,{key:function(e){if(e.key){var n=M_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R_=Bn(C_),D_=_({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=Bn(D_),N_=_({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),U_=Bn(N_),L_=_({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),O_=Bn(L_),P_=_({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B_=Bn(P_),F_=_({},or,{newState:0,oldState:0}),k_=Bn(F_),I_=[9,13,27,32],iu=Zi&&"CompositionEvent"in window,qs=null;Zi&&"documentMode"in document&&(qs=document.documentMode);var z_=Zi&&"TextEvent"in window&&!qs,Jh=Zi&&(!iu||qs&&8<qs&&11>=qs),$h=" ",ep=!1;function tp(e,n){switch(e){case"keyup":return I_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function H_(e,n){switch(e){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(ep=!0,$h);case"textInput":return e=n.data,e===$h&&ep?null:e;default:return null}}function V_(e,n){if(Vr)return e==="compositionend"||!iu&&tp(e,n)?(e=qh(),$o=Jc=wa=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jh&&n.locale!=="ko"?null:n.data;default:return null}}var G_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!G_[e.type]:n==="textarea"}function ap(e,n,a,s){zr?Hr?Hr.push(s):Hr=[s]:zr=s,n=Wl(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ys=null,Zs=null;function j_(e){zg(e,0)}function al(e){var n=sr(e);if(pn(n))return e}function rp(e,n){if(e==="change")return n}var sp=!1;if(Zi){var au;if(Zi){var ru="oninput"in document;if(!ru){var op=document.createElement("div");op.setAttribute("oninput","return;"),ru=typeof op.oninput=="function"}au=ru}else au=!1;sp=au&&(!document.documentMode||9<document.documentMode)}function lp(){Ys&&(Ys.detachEvent("onpropertychange",cp),Zs=Ys=null)}function cp(e){if(e.propertyName==="value"&&al(Zs)){var n=[];ap(n,Zs,e,Zc(e)),Wh(j_,n)}}function X_(e,n,a){e==="focusin"?(lp(),Ys=n,Zs=a,Ys.attachEvent("onpropertychange",cp)):e==="focusout"&&lp()}function W_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Zs)}function q_(e,n){if(e==="click")return al(n)}function Y_(e,n){if(e==="input"||e==="change")return al(n)}function Z_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Z_;function Ks(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Wt.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fp(e,n){var a=up(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ve(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ve(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var K_=Zi&&"documentMode"in document&&11>=document.documentMode,Gr=null,ou=null,Qs=null,lu=!1;function pp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Gr==null||Gr!==Ve(s)||(s=Gr,"selectionStart"in s&&su(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Ks(Qs,s)||(Qs=s,s=Wl(ou,"onSelect"),0<s.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Gr)))}function lr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var jr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},cu={},mp={};Zi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function cr(e){if(cu[e])return cu[e];if(!jr[e])return e;var n=jr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return cu[e]=n[a];return e}var gp=cr("animationend"),vp=cr("animationiteration"),_p=cr("animationstart"),Q_=cr("transitionrun"),J_=cr("transitionstart"),$_=cr("transitioncancel"),xp=cr("transitionend"),bp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function Si(e,n){bp.set(e,n),$(n,[e])}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Xr=0,fu=0;function sl(){for(var e=Xr,n=fu=Xr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&yp(a,u,f)}}function ol(e,n,a,s){ai[Xr++]=e,ai[Xr++]=n,ai[Xr++]=a,ai[Xr++]=s,fu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function du(e,n,a,s){return ol(e,n,a,s),ll(e)}function ur(e,n){return ol(e,null,null,n),ll(e)}function yp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Le(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function ll(e){if(50<bo)throw bo=0,Sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Wr={};function ex(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new ex(e,n,a,s)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,s,u,f){var v=0;if(s=e,typeof e=="function")hu(e)&&(v=1);else if(typeof e=="string")v=rb(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case N:return e=qn(31,a,n,u),e.elementType=N,e.lanes=f,e;case R:return fr(a.children,u,f,n);case S:v=8,u|=24;break;case b:return e=qn(12,a,n,u|2),e.elementType=b,e.lanes=f,e;case I:return e=qn(13,a,n,u),e.elementType=I,e.lanes=f,e;case k:return e=qn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:v=10;break e;case D:v=9;break e;case U:v=11;break e;case F:v=14;break e;case T:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(v,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function fr(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function pu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Ep(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function mu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Mp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Mp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Mp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var qr=[],Yr=0,ul=null,Js=0,si=[],oi=0,Ca=null,Ui=1,Li="";function Qi(e,n){qr[Yr++]=Js,qr[Yr++]=ul,ul=e,Js=n}function Tp(e,n,a){si[oi++]=Ui,si[oi++]=Li,si[oi++]=Ca,Ca=e;var s=Ui;e=Li;var u=32-Le(s)-1;s&=~(1<<u),a+=1;var f=32-Le(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Ui=1<<32-Le(n)+u|a<<u|s,Li=f+e}else Ui=1<<f|a<<u|s,Li=e}function gu(e){e.return!==null&&(Qi(e,1),Tp(e,1,0))}function vu(e){for(;e===ul;)ul=qr[--Yr],qr[Yr]=null,Js=qr[--Yr],qr[Yr]=null;for(;e===Ca;)Ca=si[--oi],si[oi]=null,Li=si[--oi],si[oi]=null,Ui=si[--oi],si[oi]=null}function Ap(e,n){si[oi++]=Ui,si[oi++]=Li,si[oi++]=Ca,Ui=n.id,Li=n.overflow,Ca=e}var bn=null,jt=null,yt=!1,Ra=null,li=!1,_u=Error(r(519));function Da(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(ri(n,e)),_u}function wp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[an]=e,n[hn]=s,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)vt(So[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),jn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),rn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||jg(n.textContent,a)?(s.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),s.onScroll!=null&&vt("scroll",n),s.onScrollEnd!=null&&vt("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Da(e,!0)}function Cp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:bn=bn.return}}function Zr(e){if(e!==bn)return!1;if(!yt)return Cp(e),yt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&jt&&Da(e),Cp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=$g(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=$g(e)}else n===27?(n=jt,ja(e.type)?(e=Vf,Vf=null,jt=e):jt=n):jt=bn?ui(e.stateNode.nextSibling):null;return!0}function dr(){jt=bn=null,yt=!1}function xu(){var e=Ra;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),Ra=null),e}function $s(e){Ra===null?Ra=[e]:Ra.push(e)}var bu=P(null),hr=null,Ji=null;function Na(e,n,a){ve(bu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=bu.current,q(bu)}function yu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),yu(f.return,a,e),s||(v=null);break e}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),yu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Kr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var A=u.type;Wn(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===xe.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&Su(n,e,a,s),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){hr=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Rp(hr,e)}function dl(e,n){return hr===null&&pr(e),Rp(e,n)}function Rp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(r(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var tx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},nx=o.unstable_scheduleCallback,ix=o.unstable_NormalPriority,on={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new tx,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&nx(ix,function(){e.controller.abort()})}var to=null,Mu=0,Qr=0,Jr=null;function ax(e,n){if(to===null){var a=to=[];Mu=0,Qr=Cf(),Jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Mu++,n.then(Dp,Dp),n}function Dp(){if(--Mu===0&&to!==null){Jr!==null&&(Jr.status="fulfilled");var e=to;to=null,Qr=0,Jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Np=L.S;L.S=function(e,n){pg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ax(e,n),Np!==null&&Np(e,n)};var mr=P(null);function Tu(){var e=mr.current;return e!==null?e:Gt.pooledCache}function hl(e,n){n===null?ve(mr,mr.current):ve(mr,n.pool)}function Up(){var e=Tu();return e===null?null:{parent:on._currentValue,pool:e}}var $r=Error(r(460)),Au=Error(r(474)),pl=Error(r(542)),ml={then:function(){}};function Lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Op(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=Gt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e}throw vr=n,$r}}function gr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(vr=a,$r):a}}var vr=null;function Pp(){if(vr===null)throw Error(r(459));var e=vr;return vr=null,e}function Bp(e){if(e===$r||e===pl)throw Error(r(483))}var es=null,no=0;function gl(e){var n=no;return no+=1,es===null&&(es=[]),Op(es,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Fp(e){function n(Z,j){if(e){var ee=Z.deletions;ee===null?(Z.deletions=[j],Z.flags|=16):ee.push(j)}}function a(Z,j){if(!e)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function s(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function u(Z,j){return Z=Ki(Z,j),Z.index=0,Z.sibling=null,Z}function f(Z,j,ee){return Z.index=ee,e?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<j?(Z.flags|=67108866,j):ee):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,j,ee,ge){return j===null||j.tag!==6?(j=pu(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function H(Z,j,ee,ge){var Qe=ee.type;return Qe===R?pe(Z,j,ee.props.children,ge,ee.key):j!==null&&(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&gr(Qe)===j.type)?(j=u(j,ee.props),io(j,ee),j.return=Z,j):(j=cl(ee.type,ee.key,ee.props,null,Z.mode,ge),io(j,ee),j.return=Z,j)}function te(Z,j,ee,ge){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=mu(ee,Z.mode,ge),j.return=Z,j):(j=u(j,ee.children||[]),j.return=Z,j)}function pe(Z,j,ee,ge,Qe){return j===null||j.tag!==7?(j=fr(ee,Z.mode,ge,Qe),j.return=Z,j):(j=u(j,ee),j.return=Z,j)}function _e(Z,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=pu(""+j,Z.mode,ee),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return ee=cl(j.type,j.key,j.props,null,Z.mode,ee),io(ee,j),ee.return=Z,ee;case M:return j=mu(j,Z.mode,ee),j.return=Z,j;case T:return j=gr(j),_e(Z,j,ee)}if(Q(j)||K(j))return j=fr(j,Z.mode,ee,null),j.return=Z,j;if(typeof j.then=="function")return _e(Z,gl(j),ee);if(j.$$typeof===B)return _e(Z,dl(Z,j),ee);vl(Z,j)}return null}function ae(Z,j,ee,ge){var Qe=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Qe!==null?null:A(Z,j,""+ee,ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===Qe?H(Z,j,ee,ge):null;case M:return ee.key===Qe?te(Z,j,ee,ge):null;case T:return ee=gr(ee),ae(Z,j,ee,ge)}if(Q(ee)||K(ee))return Qe!==null?null:pe(Z,j,ee,ge,null);if(typeof ee.then=="function")return ae(Z,j,gl(ee),ge);if(ee.$$typeof===B)return ae(Z,j,dl(Z,ee),ge);vl(Z,ee)}return null}function ce(Z,j,ee,ge,Qe){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(ee)||null,A(j,Z,""+ge,Qe);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Z=Z.get(ge.key===null?ee:ge.key)||null,H(j,Z,ge,Qe);case M:return Z=Z.get(ge.key===null?ee:ge.key)||null,te(j,Z,ge,Qe);case T:return ge=gr(ge),ce(Z,j,ee,ge,Qe)}if(Q(ge)||K(ge))return Z=Z.get(ee)||null,pe(j,Z,ge,Qe,null);if(typeof ge.then=="function")return ce(Z,j,ee,gl(ge),Qe);if(ge.$$typeof===B)return ce(Z,j,ee,dl(j,ge),Qe);vl(j,ge)}return null}function He(Z,j,ee,ge){for(var Qe=null,wt=null,qe=j,dt=j=0,bt=null;qe!==null&&dt<ee.length;dt++){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var Ct=ae(Z,qe,ee[dt],ge);if(Ct===null){qe===null&&(qe=bt);break}e&&qe&&Ct.alternate===null&&n(Z,qe),j=f(Ct,j,dt),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct,qe=bt}if(dt===ee.length)return a(Z,qe),yt&&Qi(Z,dt),Qe;if(qe===null){for(;dt<ee.length;dt++)qe=_e(Z,ee[dt],ge),qe!==null&&(j=f(qe,j,dt),wt===null?Qe=qe:wt.sibling=qe,wt=qe);return yt&&Qi(Z,dt),Qe}for(qe=s(qe);dt<ee.length;dt++)bt=ce(qe,Z,dt,ee[dt],ge),bt!==null&&(e&&bt.alternate!==null&&qe.delete(bt.key===null?dt:bt.key),j=f(bt,j,dt),wt===null?Qe=bt:wt.sibling=bt,wt=bt);return e&&qe.forEach(function(Za){return n(Z,Za)}),yt&&Qi(Z,dt),Qe}function $e(Z,j,ee,ge){if(ee==null)throw Error(r(151));for(var Qe=null,wt=null,qe=j,dt=j=0,bt=null,Ct=ee.next();qe!==null&&!Ct.done;dt++,Ct=ee.next()){qe.index>dt?(bt=qe,qe=null):bt=qe.sibling;var Za=ae(Z,qe,Ct.value,ge);if(Za===null){qe===null&&(qe=bt);break}e&&qe&&Za.alternate===null&&n(Z,qe),j=f(Za,j,dt),wt===null?Qe=Za:wt.sibling=Za,wt=Za,qe=bt}if(Ct.done)return a(Z,qe),yt&&Qi(Z,dt),Qe;if(qe===null){for(;!Ct.done;dt++,Ct=ee.next())Ct=_e(Z,Ct.value,ge),Ct!==null&&(j=f(Ct,j,dt),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct);return yt&&Qi(Z,dt),Qe}for(qe=s(qe);!Ct.done;dt++,Ct=ee.next())Ct=ce(qe,Z,dt,Ct.value,ge),Ct!==null&&(e&&Ct.alternate!==null&&qe.delete(Ct.key===null?dt:Ct.key),j=f(Ct,j,dt),wt===null?Qe=Ct:wt.sibling=Ct,wt=Ct);return e&&qe.forEach(function(gb){return n(Z,gb)}),yt&&Qi(Z,dt),Qe}function Vt(Z,j,ee,ge){if(typeof ee=="object"&&ee!==null&&ee.type===R&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var Qe=ee.key;j!==null;){if(j.key===Qe){if(Qe=ee.type,Qe===R){if(j.tag===7){a(Z,j.sibling),ge=u(j,ee.props.children),ge.return=Z,Z=ge;break e}}else if(j.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===T&&gr(Qe)===j.type){a(Z,j.sibling),ge=u(j,ee.props),io(ge,ee),ge.return=Z,Z=ge;break e}a(Z,j);break}else n(Z,j);j=j.sibling}ee.type===R?(ge=fr(ee.props.children,Z.mode,ge,ee.key),ge.return=Z,Z=ge):(ge=cl(ee.type,ee.key,ee.props,null,Z.mode,ge),io(ge,ee),ge.return=Z,Z=ge)}return v(Z);case M:e:{for(Qe=ee.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){a(Z,j.sibling),ge=u(j,ee.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,j);break}else n(Z,j);j=j.sibling}ge=mu(ee,Z.mode,ge),ge.return=Z,Z=ge}return v(Z);case T:return ee=gr(ee),Vt(Z,j,ee,ge)}if(Q(ee))return He(Z,j,ee,ge);if(K(ee)){if(Qe=K(ee),typeof Qe!="function")throw Error(r(150));return ee=Qe.call(ee),$e(Z,j,ee,ge)}if(typeof ee.then=="function")return Vt(Z,j,gl(ee),ge);if(ee.$$typeof===B)return Vt(Z,j,dl(Z,ee),ge);vl(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(a(Z,j.sibling),ge=u(j,ee),ge.return=Z,Z=ge):(a(Z,j),ge=pu(ee,Z.mode,ge),ge.return=Z,Z=ge),v(Z)):a(Z,j)}return function(Z,j,ee,ge){try{no=0;var Qe=Vt(Z,j,ee,ge);return es=null,Qe}catch(qe){if(qe===$r||qe===pl)throw qe;var wt=qn(29,qe,null,Z.mode);return wt.lanes=ge,wt.return=Z,wt}}}var _r=Fp(!0),kp=Fp(!1),Ua=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Nt&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ll(e),yp(e,null,a),n}return ol(e,s,n,a),ll(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Pr(e,a)}}function Ru(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function ro(){if(Du){var e=Jr;if(e!==null)throw e}}function so(e,n,a,s){Du=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,te=H.next;H.next=null,v===null?f=te:v.next=te,v=H;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,A=pe.lastBaseUpdate,A!==v&&(A===null?pe.firstBaseUpdate=te:A.next=te,pe.lastBaseUpdate=H))}if(f!==null){var _e=u.baseState;v=0,pe=te=H=null,A=f;do{var ae=A.lane&-536870913,ce=ae!==A.lane;if(ce?(xt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Qr&&(Du=!0),pe!==null&&(pe=pe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var He=e,$e=A;ae=n;var Vt=a;switch($e.tag){case 1:if(He=$e.payload,typeof He=="function"){_e=He.call(Vt,_e,ae);break e}_e=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=$e.payload,ae=typeof He=="function"?He.call(Vt,_e,ae):He,ae==null)break e;_e=_({},_e,ae);break e;case 2:Ua=!0}}ae=A.callback,ae!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pe===null?(te=pe=ce,H=_e):pe=pe.next=ce,v|=ae;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ce=A,A=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(H=_e),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=_e}}function Ip(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ip(a[e],n)}var ts=P(null),_l=P(0);function Hp(e,n){e=la,ve(_l,e),ve(ts,n),la=e|n.baseLanes}function Nu(){ve(_l,la),ve(ts,ts.current)}function Uu(){la=_l.current,q(ts),q(_l)}var Yn=P(null),ci=null;function Pa(e){var n=e.alternate;ve(en,en.current&1),ve(Yn,e),ci===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(ci=e)}function Lu(e){ve(en,en.current),ve(Yn,e),ci===null&&(ci=e)}function Vp(e){e.tag===22?(ve(en,en.current),ve(Yn,e),ci===null&&(ci=e)):Ba()}function Ba(){ve(en,en.current),ve(Yn,Yn.current)}function Zn(e){q(Yn),ci===e&&(ci=null),q(en)}var en=P(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zf(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,ct=null,zt=null,ln=null,bl=!1,ns=!1,xr=!1,yl=0,oo=0,is=null,sx=0;function Jt(){throw Error(r(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,s,u,f){return ea=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Tm:Ku,xr=!1,f=a(s,u),xr=!1,ns&&(f=jp(n,a,s,u)),Gp(e),f}function Gp(e){L.H=uo;var n=zt!==null&&zt.next!==null;if(ea=0,ln=zt=ct=null,bl=!1,oo=0,is=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&fl(e)&&(cn=!0))}function jp(e,n,a,s){ct=e;var u=0;do{if(ns&&(is=null),oo=0,ns=!1,25<=u)throw Error(r(301));if(u+=1,ln=zt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Am,f=n(a,s)}while(ns);return f}function ox(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?lo(n):n,e=e.useState()[0],(zt!==null?zt.memoizedState:null)!==e&&(ct.flags|=1024),n}function Bu(){var e=yl!==0;return yl=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ku(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}ea=0,ln=zt=ct=null,ns=!1,oo=yl=0,is=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ct.memoizedState=ln=e:ln=ln.next=e,ln}function tn(){if(zt===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=zt.next;var n=ln===null?ct.memoizedState:ln.next;if(n!==null)ln=n,zt=e;else{if(e===null)throw ct.alternate===null?Error(r(467)):Error(r(310));zt=e,e={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},ln===null?ct.memoizedState=ln=e:ln=ln.next=e}return ln}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var n=oo;return oo+=1,is===null&&(is=[]),e=Op(is,e,n),n=ct,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Tm:Ku),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===B)return yn(e)}throw Error(r(438,String(e)))}function Iu(e){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ct.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=ue;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=tn();return zu(n,zt,e)}function zu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,H=null,te=n,pe=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(xt&_e)===_e:(ea&_e)===_e){var ae=te.revertLane;if(ae===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===Qr&&(pe=!0);else if((ea&ae)===ae){te=te.next,ae===Qr&&(pe=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=_e,v=f):H=H.next=_e,ct.lanes|=ae,Ia|=ae;_e=te.action,xr&&a(f,_e),f=te.hasEagerState?te.eagerState:a(f,_e)}else ae={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(A=H=ae,v=f):H=H.next=ae,ct.lanes|=_e,Ia|=_e;te=te.next}while(te!==null&&te!==n);if(H===null?v=f:H.next=A,!Wn(f,e.memoizedState)&&(cn=!0,pe&&(a=Jr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=H,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Hu(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Wn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Xp(e,n,a){var s=ct,u=tn(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Wn((zt||u).memoizedState,a);if(v&&(u.memoizedState=a,cn=!0),u=u.queue,ju(Yp.bind(null,s,u,e),[e]),u.getSnapshot!==n||v||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,as(9,{destroy:void 0},qp.bind(null,s,u,a,n),null),Gt===null)throw Error(r(349));f||(ea&127)!==0||Wp(s,n,a)}return a}function Wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Sl(),ct.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function qp(e,n,a,s){n.value=a,n.getSnapshot=s,Zp(n)&&Kp(e)}function Yp(e,n,a){return a(function(){Zp(n)&&Kp(e)})}function Zp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Kp(e){var n=ur(e,2);n!==null&&Hn(n,e,2)}function Vu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),xr){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function Qp(e,n,a,s){return e.baseState=a,zu(e,zt,typeof s=="function"?s:ta)}function lx(e,n,a,s,u){if(wl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var A=a(u,s),H=L.S;H!==null&&H(v,A),$p(e,n,A)}catch(te){Gu(e,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(u,s),$p(e,n,f)}catch(te){Gu(e,n,te)}}function $p(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){em(e,n,s)},function(s){return Gu(e,n,s)}):em(e,n,a)}function em(e,n,a){n.status="fulfilled",n.value=a,tm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Jp(e,a)))}function Gu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,tm(n),n=n.next;while(n!==s)}e.action=null}function tm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function nm(e,n){return n}function im(e,n){if(yt){var a=Gt.formState;if(a!==null){e:{var s=ct;if(yt){if(jt){t:{for(var u=jt,f=li;u.nodeType!==8;){if(!f){u=null;break t}if(u=ui(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){jt=ui(u.nextSibling),s=u.data==="F!";break e}}Da(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=s,a=Sm.bind(null,ct,s),s.dispatch=a,s=Vu(!1),f=Zu.bind(null,ct,!1,s.queue),s=Ln(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=lx.bind(null,ct,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function am(e){var n=tn();return rm(n,zt,e)}function rm(e,n,a){if(n=zu(e,n,nm)[0],e=Ml(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=lo(n)}catch(v){throw v===$r?pl:v}else s=n;n=tn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,as(9,{destroy:void 0},cx.bind(null,u,a),null)),[s,f,e]}function cx(e,n){e.action=n}function sm(e){var n=tn(),a=zt;if(a!==null)return rm(n,a,e);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function as(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Sl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function om(){return tn().memoizedState}function Tl(e,n,a,s){var u=Ln();ct.flags|=e,u.memoizedState=as(1|n,{destroy:void 0},a,s===void 0?null:s)}function Al(e,n,a,s){var u=tn();s=s===void 0?null:s;var f=u.memoizedState.inst;zt!==null&&s!==null&&Ou(s,zt.memoizedState.deps)?u.memoizedState=as(n,f,a,s):(ct.flags|=e,u.memoizedState=as(1|n,f,a,s))}function lm(e,n){Tl(8390656,8,e,n)}function ju(e,n){Al(2048,8,e,n)}function ux(e){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Sl(),ct.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function cm(e){var n=tn().memoizedState;return ux({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function um(e,n){return Al(4,2,e,n)}function fm(e,n){return Al(4,4,e,n)}function dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hm(e,n,a){a=a!=null?a.concat([e]):null,Al(4,4,dm.bind(null,n,e),a)}function Xu(){}function pm(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Ou(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function mm(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Ou(n,s[1]))return s[0];if(s=e(),xr){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s}function Wu(e,n,a){return a===void 0||(ea&1073741824)!==0&&(xt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=gg(),ct.lanes|=e,Ia|=e,a)}function gm(e,n,a,s){return Wn(a,n)?a:ts.current!==null?(e=Wu(e,a,s),Wn(e,n)||(cn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(xt&261930)===0?(cn=!0,e.memoizedState=a):(e=gg(),ct.lanes|=e,Ia|=e,n)}function vm(e,n,a,s,u){var f=z.p;z.p=f!==0&&8>f?f:8;var v=L.T,A={};L.T=A,Zu(e,!1,n,a);try{var H=u(),te=L.S;if(te!==null&&te(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pe=rx(H,s);co(e,n,pe,Jn(e))}else co(e,n,s,Jn(e))}catch(_e){co(e,n,{then:function(){},status:"rejected",reason:_e},Jn())}finally{z.p=f,v!==null&&A.types!==null&&(v.types=A.types),L.T=v}}function fx(){}function qu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=_m(e).queue;vm(e,u,n,oe,a===null?fx:function(){return xm(e),a(s)})}function _m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function xm(e){var n=_m(e);n.next===null&&(n=e.alternate.memoizedState),co(e,n.next.queue,{},Jn())}function Yu(){return yn(wo)}function bm(){return tn().memoizedState}function ym(){return tn().memoizedState}function dx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=La(a);var s=Oa(n,e,a);s!==null&&(Hn(s,n,a),ao(s,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function hx(e,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?Em(n,a):(a=du(e,n,a,s),a!==null&&(Hn(a,e,s),Mm(a,n,s)))}function Sm(e,n,a){var s=Jn();co(e,n,a,s)}function co(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))Em(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Wn(A,v))return ol(e,n,u,0),Gt===null&&sl(),!1}catch{}if(a=du(e,n,u,s),a!==null)return Hn(a,e,s),Mm(a,n,s),!0}return!1}function Zu(e,n,a,s){if(s={lane:2,revertLane:Cf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(r(479))}else n=du(e,a,s,2),n!==null&&Hn(n,e,2)}function wl(e){var n=e.alternate;return e===ct||n!==null&&n===ct}function Em(e,n){ns=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Mm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Pr(e,a)}}var uo={readContext:yn,use:El,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};uo.useEffectEvent=Jt;var Tm={readContext:yn,use:El,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:lm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(xr){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var u=a(n);if(xr){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=hx.bind(null,ct,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=Sm.bind(null,ct,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Ln();return Wu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=vm.bind(null,ct,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ct,u=Ln();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Gt===null)throw Error(r(349));(xt&127)!==0||Wp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,lm(Yp.bind(null,s,f,e),[e]),s.flags|=2048,as(9,{destroy:void 0},qp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=Gt.identifierPrefix;if(yt){var a=Li,s=Ui;a=(s&~(1<<32-Le(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=sx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:im,useActionState:im,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zu.bind(null,ct,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=dx.bind(null,ct)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ku={readContext:yn,use:El,useCallback:pm,useContext:yn,useEffect:ju,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Ml,useRef:om,useState:function(){return Ml(ta)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=tn();return gm(a,zt.memoizedState,e,n)},useTransition:function(){var e=Ml(ta)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Xp,useId:bm,useHostTransitionStatus:Yu,useFormState:am,useActionState:am,useOptimistic:function(e,n){var a=tn();return Qp(a,zt,e,n)},useMemoCache:Iu,useCacheRefresh:ym};Ku.useEffectEvent=cm;var Am={readContext:yn,use:El,useCallback:pm,useContext:yn,useEffect:ju,useImperativeHandle:hm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Hu,useRef:om,useState:function(){return Hu(ta)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=tn();return zt===null?Wu(a,e,n):gm(a,zt.memoizedState,e,n)},useTransition:function(){var e=Hu(ta)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Xp,useId:bm,useHostTransitionStatus:Yu,useFormState:sm,useActionState:sm,useOptimistic:function(e,n){var a=tn();return zt!==null?Qp(a,zt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:ym};Am.useEffectEvent=cm;function Qu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=La(s);u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,s),n!==null&&(Hn(n,e,s),ao(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=La(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,s),n!==null&&(Hn(n,e,s),ao(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=La(a);s.tag=2,n!=null&&(s.callback=n),n=Oa(e,s,a),n!==null&&(Hn(n,e,a),ao(n,e,a))}};function wm(e,n,a,s,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,s)||!Ks(u,f):!0}function Cm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function br(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Rm(e){rl(e)}function Dm(e){console.error(e)}function Nm(e){rl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(e,n,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Lm(e){return e=La(e),e.tag=3,e}function Om(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Um(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,s),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function px(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Kr(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?zl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Tf(e,s,u)),!1;case 22:return a.flags|=65536,s===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Tf(e,s,u)),!1}throw Error(r(435,a.tag))}return Tf(e,s,u),zl(),!1}if(yt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==_u&&(e=Error(r(422),{cause:s}),$s(ri(e,a)))):(s!==_u&&(n=Error(r(423),{cause:s}),$s(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ri(s,a),u=$u(e.stateNode,s,u),Ru(e,u),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),xo===null?xo=[f]:xo.push(f),$t!==4&&($t=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=$u(a.stateNode,s,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Lm(u),Om(u,e,a,s),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var ef=Error(r(461)),cn=!1;function Sn(e,n,a,s){n.child=e===null?kp(n,null,a,s):_r(n,e.child,a,s)}function Pm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var A in s)A!=="ref"&&(v[A]=s[A])}else v=s;return pr(n),s=Pu(e,n,a,v,f,u),A=Bu(),e!==null&&!cn?(Fu(e,n,u),na(e,n,u)):(yt&&A&&gu(n),n.flags|=1,Sn(e,n,s,u),n.child)}function Bm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Fm(e,n,f,s,u)):(e=cl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!cf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(v,s)&&e.ref===n.ref)return na(e,n,u)}return n.flags|=1,e=Ki(f,s),e.ref=n.ref,e.return=n,n.child=e}function Fm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Ks(f,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=f,cf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,na(e,n,u)}return tf(e,n,a,s,u)}function km(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Im(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Hp(n,f):Nu(),Vp(n);else return s=n.lanes=536870912,Im(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(hl(n,f.cachePool),Hp(n,f),Ba(),n.memoizedState=null):(e!==null&&hl(n,null),Nu(),Ba());return Sn(e,n,u,a),n.child}function fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Im(e,n,a,s,u){var f=Tu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hl(n,null),Nu(),Vp(n),e!==null&&Kr(e,n,s,!0),n.childLanes=u,null}function Rl(e,n){return n=Nl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function zm(e,n,a){return _r(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function mx(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(yt){if(s.mode==="hidden")return e=Rl(n,s),n.lanes=536870912,fo(null,e);if(Lu(n),(e=jt)?(e=Jg(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,bn=n,jt=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return Rl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Lu(n),u)if(n.flags&256)n.flags&=-257,n=zm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Kr(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(s=Gt,s!==null&&(v=Yo(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ur(e,v),Hn(s,e,v),ef;zl(),n=zm(e,n,a)}else e=f.treeContext,jt=ui(v.nextSibling),bn=n,yt=!0,Ra=null,li=!1,e!==null&&Ap(n,e),n=Rl(n,s),n.flags|=4096;return n}return e=Ki(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,s,u){return pr(n),a=Pu(e,n,a,s,void 0,u),s=Bu(),e!==null&&!cn?(Fu(e,n,u),na(e,n,u)):(yt&&s&&gu(n),n.flags|=1,Sn(e,n,a,u),n.child)}function Hm(e,n,a,s,u,f){return pr(n),n.updateQueue=null,a=jp(n,s,a,u),Gp(e),s=Bu(),e!==null&&!cn?(Fu(e,n,f),na(e,n,f)):(yt&&s&&gu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Vm(e,n,a,s,u){if(pr(n),n.stateNode===null){var f=Wr,v=a.contextType;typeof v=="object"&&v!==null&&(f=yn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?yn(v):Wr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Qu(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ju.enqueueReplaceState(f,f.state,null),so(n,s,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=br(a,A);f.props=H;var te=f.context,pe=a.contextType;v=Wr,typeof pe=="object"&&pe!==null&&(v=yn(pe));var _e=a.getDerivedStateFromProps;pe=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||te!==v)&&Cm(n,f,s,v),Ua=!1;var ae=n.memoizedState;f.state=ae,so(n,s,f,u),ro(),te=n.memoizedState,A||ae!==te||Ua?(typeof _e=="function"&&(Qu(n,a,_e,s),te=n.memoizedState),(H=Ua||wm(n,a,H,s,ae,te,v))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=te),f.props=s,f.state=te,f.context=v,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Cu(e,n),v=n.memoizedProps,pe=br(a,v),f.props=pe,_e=n.pendingProps,ae=f.context,te=a.contextType,H=Wr,typeof te=="object"&&te!==null&&(H=yn(te)),A=a.getDerivedStateFromProps,(te=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_e||ae!==H)&&Cm(n,f,s,H),Ua=!1,ae=n.memoizedState,f.state=ae,so(n,s,f,u),ro();var ce=n.memoizedState;v!==_e||ae!==ce||Ua||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof A=="function"&&(Qu(n,a,A,s),ce=n.memoizedState),(pe=Ua||wm(n,a,pe,s,ae,ce,H)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ce),f.props=s,f.state=ce,f.context=H,s=pe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Dl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=_r(n,e.child,null,u),n.child=_r(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=na(e,n,u),e}function Gm(e,n,a,s){return dr(),n.flags|=256,Sn(e,n,a,s),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:Up()}}function rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function jm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(yt){if(u?Pa(n):Ba(),(e=jt)?(e=Jg(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,bn=n,jt=null)):e=null,e===null)throw Da(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,u?(Ba(),u=n.mode,A=Nl({mode:"hidden",children:A},u),s=fr(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=af(a),s.childLanes=rf(e,v,a),n.memoizedState=nf,fo(null,s)):(Pa(n),sf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),A=s.fallback,u=n.mode,s=Nl({mode:"visible",children:s.children},u),A=fr(A,u,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,_r(n,e.child,null,a),s=n.child,s.memoizedState=af(a),s.childLanes=rf(e,v,a),n.memoizedState=nf,n=fo(null,s));else if(Pa(n),Hf(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var te=v.dgst;v=te,s=Error(r(419)),s.stack="",s.digest=v,$s({value:s,source:null,stack:null}),n=of(e,n,a)}else if(cn||Kr(e,n,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=Gt,v!==null&&(s=Yo(v,a),s!==0&&s!==H.retryLane))throw H.retryLane=s,ur(e,s),Hn(v,e,s),ef;zf(A)||zl(),n=of(e,n,a)}else zf(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,jt=ui(A.nextSibling),bn=n,yt=!0,Ra=null,li=!1,e!==null&&Ap(n,e),n=sf(n,s.children),n.flags|=4096);return n}return u?(Ba(),A=s.fallback,u=n.mode,H=e.child,te=H.sibling,s=Ki(H,{mode:"hidden",children:s.children}),s.subtreeFlags=H.subtreeFlags&65011712,te!==null?A=Ki(te,A):(A=fr(A,u,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,fo(null,s),s=n.child,A=e.child.memoizedState,A===null?A=af(a):(u=A.cachePool,u!==null?(H=on._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Up(),A={baseLanes:A.baseLanes|a,cachePool:u}),s.memoizedState=A,s.childLanes=rf(e,v,a),n.memoizedState=nf,fo(e.child,s)):(Pa(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function sf(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function of(e,n,a){return _r(n,e.child,null,a),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),yu(e.return,n,a)}function lf(e,n,a,s,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Wm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=en.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,ve(en,v),Sn(e,n,s,a),s=yt?Js:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),lf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}lf(n,!0,a,null,f,s);break;case"together":lf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function gx(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Na(n,on,e.memoizedState.cache),dr();break;case 27:case 5:Ke(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?jm(e,n,a):(Pa(n),e=na(e,n,a),e!==null?e.sibling:null);Pa(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Kr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Wm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(en,en.current),s)break;return null;case 22:return n.lanes=0,km(e,n,a,n.pendingProps);case 24:Na(n,on,e.memoizedState.cache)}return na(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return cn=!1,gx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,yt&&(n.flags&1048576)!==0&&Tp(n,Js,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=gr(n.elementType),n.type=e,typeof e=="function")hu(e)?(s=br(e,s),n.tag=1,n=Vm(null,n,e,s,a)):(n.tag=0,n=tf(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Pm(null,n,e,s,a);break e}else if(u===F){n.tag=14,n=Bm(null,n,e,s,a);break e}}throw n=se(e)||e,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=br(s,n.pendingProps),Vm(e,n,s,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Cu(e,n),so(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Na(n,on,s),s!==f.cache&&Su(n,[on],a,!0),ro(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gm(e,n,s,a);break e}else if(s!==u){u=ri(Error(r(424)),n),$s(u),n=Gm(e,n,s,a);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,jt=ui(e.firstChild),bn=n,yt=!0,Ra=null,li=!0,a=kp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(dr(),s===u){n=na(e,n,a);break e}Sn(e,n,s,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=a0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,e=n.pendingProps,s=ql(ie.current).createElement(a),s[an]=n,s[hn]=e,En(s,a,e),X(s),n.stateNode=s):n.memoizedState=a0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ke(n),e===null&&yt&&(s=n.stateNode=t0(n.type,n.pendingProps,ie.current),bn=n,li=!0,u=jt,ja(n.type)?(Vf=u,jt=ui(s.firstChild)):jt=u),Sn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&yt&&((u=s=jt)&&(s=Wx(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,bn=n,jt=ui(s.firstChild),li=!1,u=!0):u=!1),u||Da(n)),Ke(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Ff(u,f)?s=null:v!==null&&Ff(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,ox,null,null,a),wo._currentValue=u),Dl(e,n),Sn(e,n,s,a),n.child;case 6:return e===null&&yt&&((e=a=jt)&&(a=qx(a,n.pendingProps,li),a!==null?(n.stateNode=a,bn=n,jt=null,e=!0):e=!1),e||Da(n)),null;case 13:return jm(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=_r(n,null,s,a):Sn(e,n,s,a),n.child;case 11:return Pm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Na(n,n.type,s.value),Sn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,pr(n),u=yn(u),s=s(u),n.flags|=1,Sn(e,n,s,a),n.child;case 14:return Bm(e,n,n.type,n.pendingProps,a);case 15:return Fm(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return mx(e,n,a);case 22:return km(e,n,a,n.pendingProps);case 24:return pr(n),s=yn(on),e===null?(u=Tu(),u===null&&(u=Gt,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},wu(n),Na(n,on,u)):((e.lanes&a)!==0&&(Cu(e,n),so(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,on,s)):(s=f.cache,Na(n,on,s),s!==u.cache&&Su(n,[on],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ia(e){e.flags|=4}function uf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(bg())e.flags|=8192;else throw vr=ml,Au}else e.flags&=-16777217}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!c0(n))if(bg())e.flags|=8192;else throw vr=ml,Au}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,ls|=n)}function ho(e,n){if(!yt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Xt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function vx(e,n,a){var s=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(n),null;case 1:return Xt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),$i(on),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xu())),Xt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(Xt(n),Ym(n,f)):(Xt(n),uf(n,u,null,s,a))):f?f!==e.memoizedState?(ia(n),Xt(n),Ym(n,f)):(Xt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ia(n),Xt(n),uf(n,u,e,s,a)),null;case 27:if(et(n),a=ie.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xt(n),null}e=Ae.current,Zr(n)?wp(n):(e=t0(u,s,a),n.stateNode=e,ia(n))}return Xt(n),null;case 5:if(et(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ia(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xt(n),null}if(f=Ae.current,Zr(n))wp(n);else{var v=ql(ie.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[an]=n,f[hn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(En(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ia(n)}}return Xt(n),uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ia(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ie.current,Zr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=bn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||jg(e.nodeValue,a)),e||Da(n,!0)}else e=ql(e).createTextNode(s),e[an]=n,n.stateNode=e}return Xt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Zr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[an]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xt(n),e=!1}else a=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xt(n),u=!1}else u=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Xt(n),null);case 4:return Ge(),e===null&&Uf(n.stateNode.containerInfo),Xt(n),null;case 10:return $i(n.type),Xt(n),null;case 19:if(q(en),s=n.memoizedState,s===null)return Xt(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ho(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,ho(s,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sp(a,e),a=a.sibling;return ve(en,en.current&1|2),yt&&Qi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>Fl&&(n.flags|=128,u=!0,ho(s,!1),n.lanes=4194304)}else{if(!u)if(e=xl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!yt)return Xt(n),null}else 2*E()-s.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,u=!0,ho(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=en.current,ve(en,u?a&1|2:a&1),yt&&Qi(n,s.treeForkCount),e):(Xt(n),null);case 22:case 23:return Zn(n),Uu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xt(n),n.subtreeFlags&6&&(n.flags|=8192)):Xt(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&q(mr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(on),Xt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function _x(e,n){switch(vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(on),Ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(en),null;case 4:return Ge(),null;case 10:return $i(n.type),null;case 22:case 23:return Zn(n),Uu(),e!==null&&q(mr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(on),null;case 25:return null;default:return null}}function Zm(e,n){switch(vu(n),n.tag){case 3:$i(on),Ge();break;case 26:case 27:case 5:et(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:q(en);break;case 10:$i(n.type);break;case 22:case 23:Zn(n),Uu(),e!==null&&q(mr);break;case 24:$i(on)}}function po(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(A){Ft(n,n.return,A)}}function Fa(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var v=s.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var H=a,te=A;try{te()}catch(pe){Ft(u,H,pe)}}}s=s.next}while(s!==f)}}catch(pe){Ft(n,n.return,pe)}}function Km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{zp(n,a)}catch(s){Ft(e,e.return,s)}}}function Qm(e,n,a){a.props=br(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ft(e,n,s)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Ft(e,n,u)}}function Oi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ft(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(e,n,u)}else a.current=null}function Jm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ft(e,e.return,u)}}function ff(e,n,a){try{var s=e.stateNode;zx(s,e.type,a,n),s[hn]=n}catch(u){Ft(e,e.return,u)}}function $m(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ja(e.type)||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(s!==4&&(s===27&&ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Ll(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function eg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,s,a),n[an]=e,n[hn]=a}catch(f){Ft(e,e.return,f)}}var aa=!1,un=!1,pf=!1,tg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function xx(e,n){if(e=e.containerInfo,Pf=ec,e=hp(e),su(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,H=-1,te=0,pe=0,_e=e,ae=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(A=v+u),_e!==f||s!==0&&_e.nodeType!==3||(H=v+s),_e.nodeType===3&&(v+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)ae=_e,_e=ce;for(;;){if(_e===e)break t;if(ae===a&&++te===u&&(A=v),ae===f&&++pe===s&&(H=v),(ce=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=ce}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},ec=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var He=br(a.type,u);e=s.getSnapshotBeforeUpdate(He,f),s.__reactInternalSnapshotBeforeUpdate=e}catch($e){Ft(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function ng(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),s&4&&po(5,a);break;case 1:if(sa(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ft(a,a.return,v)}else{var u=br(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ft(a,a.return,v)}}s&64&&Km(a),s&512&&mo(a,a.return);break;case 3:if(sa(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(e,n)}catch(v){Ft(a,a.return,v)}}break;case 27:n===null&&s&4&&eg(a);case 26:case 5:sa(e,a),n===null&&s&4&&Jm(a),s&512&&mo(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),s&4&&rg(e,a);break;case 13:sa(e,a),s&4&&sg(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Cx.bind(null,a),Yx(e,a))));break;case 22:if(s=a.memoizedState!==null||aa,!s){n=n!==null&&n.memoizedState!==null||un,u=aa;var f=un;aa=s,(un=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),aa=u,un=f}break;case 30:break;default:sa(e,a)}}function ig(e){var n=e.alternate;n!==null&&(e.alternate=null,ig(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,Fn=!1;function ra(e,n,a){for(a=a.child;a!==null;)ag(e,n,a),a=a.sibling}function ag(e,n,a){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:un||Oi(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Oi(a,n);var s=Zt,u=Fn;ja(a.type)&&(Zt=a.stateNode,Fn=!1),ra(e,n,a),Mo(a.stateNode),Zt=s,Fn=u;break;case 5:un||Oi(a,n);case 6:if(s=Zt,u=Fn,Zt=null,ra(e,n,a),Zt=s,Fn=u,Zt!==null)if(Fn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Zt!==null&&(Fn?(e=Zt,Kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gs(e)):Kg(Zt,a.stateNode));break;case 4:s=Zt,u=Fn,Zt=a.stateNode.containerInfo,Fn=!0,ra(e,n,a),Zt=s,Fn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),un||Fa(4,a,n),ra(e,n,a);break;case 1:un||(Oi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Qm(a,n,s)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,ra(e,n,a),un=s;break;default:ra(e,n,a)}}function rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gs(e)}catch(a){Ft(n,n.return,a)}}}function sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(a){Ft(n,n.return,a)}}function bx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new tg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new tg),n;default:throw Error(r(435,e.tag))}}function Ol(e,n){var a=bx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Rx.bind(null,e,s);s.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,v=n,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(ja(A.type)){Zt=A.stateNode,Fn=!1;break e}break;case 5:Zt=A.stateNode,Fn=!1;break e;case 3:case 4:Zt=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Zt===null)throw Error(r(160));ag(f,v,u),Zt=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)og(n,e),n=n.sibling}var Ei=null;function og(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),In(e),s&4&&(Fa(3,e,e.return),po(3,e),Fa(5,e,e.return));break;case 1:kn(n,e),In(e),s&512&&(un||a===null||Oi(a,a.return)),s&64&&aa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ei;if(kn(n,e),In(e),s&512&&(un||a===null||Oi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[rr]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,s,a),f[an]=e,X(f),s=f;break e;case"link":var v=o0("link","href",u).get(s+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break t}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;case"meta":if(v=o0("meta","content",u).get(s+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break t}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=e,X(f),s=f}e.stateNode=s}else l0(u,e.type,e.stateNode);else e.stateNode=s0(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?l0(u,e.type,e.stateNode):s0(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),In(e),s&512&&(un||a===null||Oi(a,a.return)),a!==null&&s&4&&ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),In(e),s&512&&(un||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{Un(u,"")}catch(He){Ft(e,e.return,He)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,ff(e,u,a!==null?a.memoizedProps:u)),s&1024&&(pf=!0);break;case 6:if(kn(n,e),In(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(He){Ft(e,e.return,He)}}break;case 3:if(Kl=null,u=Ei,Ei=Yl(n.containerInfo),kn(n,e),Ei=u,In(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch(He){Ft(e,e.return,He)}pf&&(pf=!1,lg(e));break;case 4:s=Ei,Ei=Yl(e.stateNode.containerInfo),kn(n,e),In(e),Ei=s;break;case 12:kn(n,e),In(e);break;case 31:kn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 13:kn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=aa,pe=un;if(aa=te||u,un=pe||H,kn(n,e),un=pe,aa=te,In(e),s&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||aa||un||yr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=H.stateNode;var _e=H.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(He){Ft(H,H.return,He)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(He){Ft(H,H.return,He)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?Qg(ce,!0):Qg(H.stateNode,!1)}catch(He){Ft(H,H.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ol(e,a))));break;case 19:kn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ol(e,s)));break;case 30:break;case 21:break;default:kn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if($m(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=df(e);Ll(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Un(v,""),a.flags&=-33);var A=df(e);Ll(e,A,v);break;case 3:case 4:var H=a.stateNode.containerInfo,te=df(e);hf(e,te,H);break;default:throw Error(r(161))}}catch(pe){Ft(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(e,n.alternate,n),n=n.sibling}function yr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),yr(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),yr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Oi(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),po(4,f);break;case 1:if(oa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ft(s,s.return,te)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)Ip(H[u],A)}catch(te){Ft(s,s.return,te)}}a&&v&64&&Km(f),mo(f,f.return);break;case 27:eg(f);case 26:case 5:oa(u,f,a),a&&s===null&&v&4&&Jm(f),mo(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&v&4&&rg(u,f);break;case 13:oa(u,f,a),a&&v&4&&sg(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),mo(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function Mi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(e,n,a,s),n=n.sibling}function cg(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,s),u&2048&&po(9,n);break;case 1:Mi(e,n,a,s);break;case 3:Mi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){Mi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ft(n,n.return,H)}}else Mi(e,n,a,s);break;case 31:Mi(e,n,a,s);break;case 13:Mi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,s):go(e,n):f._visibility&2?Mi(e,n,a,s):(f._visibility|=2,rs(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&mf(v,n);break;case 24:Mi(e,n,a,s),u&2048&&gf(n.alternate,n);break;default:Mi(e,n,a,s)}}function rs(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,H=s,te=v.flags;switch(v.tag){case 0:case 11:case 15:rs(f,v,A,H,u),po(8,v);break;case 23:break;case 22:var pe=v.stateNode;v.memoizedState!==null?pe._visibility&2?rs(f,v,A,H,u):go(f,v):(pe._visibility|=2,rs(f,v,A,H,u)),u&&te&2048&&mf(v.alternate,v);break;case 24:rs(f,v,A,H,u),u&&te&2048&&gf(v.alternate,v);break;default:rs(f,v,A,H,u)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:go(a,s),u&2048&&mf(s.alternate,s);break;case 24:go(a,s),u&2048&&gf(s.alternate,s);break;default:go(a,s)}n=n.sibling}}var vo=8192;function ss(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)ug(e,n,a),e=e.sibling}function ug(e,n,a){switch(e.tag){case 26:ss(e,n,a),e.flags&vo&&e.memoizedState!==null&&sb(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:ss(e,n,a);break;case 3:case 4:var s=Ei;Ei=Yl(e.stateNode.containerInfo),ss(e,n,a),Ei=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=vo,vo=16777216,ss(e,n,a),vo=s):ss(e,n,a));break;default:ss(e,n,a)}}function fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,hg(s,e)}fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):_o(e);break;default:_o(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,hg(s,e)}fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function hg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:eo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else e:for(a=e;_n!==null;){s=_n;var u=s.sibling,f=s.return;if(ig(s),s===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var yx={getCacheForType:function(e){var n=yn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return yn(on).controller.signal}},Sx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Gt=null,gt=null,xt=0,Bt=0,Kn=null,ka=!1,os=!1,vf=!1,la=0,$t=0,Ia=0,Sr=0,_f=0,Qn=0,ls=0,xo=null,zn=null,xf=!1,Bl=0,pg=0,Fl=1/0,kl=null,za=null,mn=0,Ha=null,cs=null,ca=0,bf=0,yf=null,mg=null,bo=0,Sf=null;function Jn(){return(Nt&2)!==0&&xt!==0?xt&-xt:L.T!==null?Cf():Ni()}function gg(){if(Qn===0)if((xt&536870912)===0||yt){var e=we;we<<=1,(we&3932160)===0&&(we=262144),Qn=e}else Qn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Qn}function Hn(e,n,a){(e===Gt&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)&&(us(e,0),Va(e,xt,Qn,!1)),Rn(e,a),((Nt&2)===0||e!==Gt)&&(e===Gt&&((Nt&2)===0&&(Sr|=a),$t===4&&Va(e,xt,Qn,!1)),Pi(e))}function vg(e,n,a){if((Nt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ie(e,n),u=s?Tx(e,n):Mf(e,n,!0),f=s;do{if(u===0){os&&!s&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ex(a)){u=Mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var A=e;u=xo;var H=A.current.memoizedState.isDehydrated;if(H&&(us(A,v).flags|=256),v=Mf(A,v,!1),v!==2){if(vf&&!H){A.errorRecoveryDisabledLanes|=f,Sr|=f,u=4;break e}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){us(e,0),Va(e,n,0,!0);break}e:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Va(s,n,Qn,!ka);break e;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Bl+300-E(),10<u)){if(Va(s,n,Qn,!ka),de(s,0,!0)!==0)break e;ca=n,s.timeoutHandle=Yg(_g.bind(null,s,a,zn,kl,xf,n,Qn,Sr,ls,ka,f,"Throttled",-0,0),u);break e}_g(s,a,zn,kl,xf,n,Qn,Sr,ls,ka,f,null,-0,0)}}break}while(!0);Pi(e)}function _g(e,n,a,s,u,f,v,A,H,te,pe,_e,ae,ce){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},ug(n,f,_e);var He=(f&62914560)===f?Bl-E():(f&4194048)===f?pg-E():0;if(He=ob(_e,He),He!==null){ca=f,e.cancelPendingCommit=He(Ag.bind(null,e,n,f,a,s,u,v,A,H,pe,_e,null,ae,ce)),Va(e,f,v,!te);return}}Ag(e,n,f,a,s,u,v,A,H)}function Ex(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,s){n&=~_f,n&=~Sr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Le(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&Hs(e,a,n)}function Il(){return(Nt&6)===0?(yo(0),!1):!0}function Ef(){if(gt!==null){if(Bt===0)var e=gt.return;else e=gt,Ji=hr=null,ku(e),es=null,no=0,e=gt;for(;e!==null;)Zm(e.alternate,e),e=e.return;gt=null}}function us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Ef(),Gt=e,gt=a=Ki(e.current,null),xt=n,Bt=0,Kn=null,ka=!1,os=Ie(e,n),vf=!1,ls=Qn=_f=Sr=Ia=$t=0,zn=xo=null,xf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Le(s),f=1<<u;n|=e[u],s&=~f}return la=n,sl(),a}function xg(e,n){ct=null,L.H=uo,n===$r||n===pl?(n=Pp(),Bt=3):n===Au?(n=Pp(),Bt=4):Bt=n===ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,gt===null&&($t=1,Cl(e,ri(n,e.current)))}function bg(){var e=Yn.current;return e===null?!0:(xt&4194048)===xt?ci===null:(xt&62914560)===xt||(xt&536870912)!==0?e===ci:!1}function yg(){var e=L.H;return L.H=uo,e===null?uo:e}function Sg(){var e=L.A;return L.A=yx,e}function zl(){$t=4,ka||(xt&4194048)!==xt&&Yn.current!==null||(os=!0),(Ia&134217727)===0&&(Sr&134217727)===0||Gt===null||Va(Gt,xt,Qn,!1)}function Mf(e,n,a){var s=Nt;Nt|=2;var u=yg(),f=Sg();(Gt!==e||xt!==n)&&(kl=null,us(e,n)),n=!1;var v=$t;e:do try{if(Bt!==0&&gt!==null){var A=gt,H=Kn;switch(Bt){case 8:Ef(),v=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var te=Bt;if(Bt=0,Kn=null,fs(e,A,H,te),a&&os){v=0;break e}break;default:te=Bt,Bt=0,Kn=null,fs(e,A,H,te)}}Mx(),v=$t;break}catch(pe){xg(e,pe)}while(!0);return n&&e.shellSuspendCounter++,Ji=hr=null,Nt=s,L.H=u,L.A=f,gt===null&&(Gt=null,xt=0,sl()),v}function Mx(){for(;gt!==null;)Eg(gt)}function Tx(e,n){var a=Nt;Nt|=2;var s=yg(),u=Sg();Gt!==e||xt!==n?(kl=null,Fl=E()+500,us(e,n)):os=Ie(e,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=Kn;t:switch(Bt){case 1:Bt=0,Kn=null,fs(e,n,f,1);break;case 2:case 9:if(Lp(f)){Bt=0,Kn=null,Mg(n);break}n=function(){Bt!==2&&Bt!==9||Gt!==e||(Bt=7),Pi(e)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Lp(f)?(Bt=0,Kn=null,Mg(n)):(Bt=0,Kn=null,fs(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var A=gt;if(v?c0(v):A.stateNode.complete){Bt=0,Kn=null;var H=A.sibling;if(H!==null)gt=H;else{var te=A.return;te!==null?(gt=te,Hl(te)):gt=null}break t}}Bt=0,Kn=null,fs(e,n,f,5);break;case 6:Bt=0,Kn=null,fs(e,n,f,6);break;case 8:Ef(),$t=6;break e;default:throw Error(r(462))}}Ax();break}catch(pe){xg(e,pe)}while(!0);return Ji=hr=null,L.H=s,L.A=u,Nt=a,gt!==null?0:(Gt=null,xt=0,sl(),$t)}function Ax(){for(;gt!==null&&!We();)Eg(gt)}function Eg(e){var n=qm(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?Hl(e):gt=n}function Mg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:ku(n);default:Zm(a,n),n=gt=Sp(n,la),n=qm(a,n,la)}e.memoizedProps=e.pendingProps,n===null?Hl(e):gt=n}function fs(e,n,a,s){Ji=hr=null,ku(n),es=null,no=0;var u=n.return;try{if(px(e,u,n,a,xt)){$t=1,Cl(e,ri(a,e.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;$t=1,Cl(e,ri(a,e.current)),gt=null;return}n.flags&32768?(yt||s===1?e=!0:os||(xt&536870912)!==0?e=!1:(ka=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Tg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){Tg(n,ka);return}e=n.return;var a=vx(n.alternate,n,la);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function Tg(e,n){do{var a=_x(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function Ag(e,n,a,s,u,f,v,A,H){e.cancelPendingCommit=null;do Vl();while(mn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=fu,_i(e,a,f,v,A,H),e===Gt&&(gt=Gt=null,xt=0),cs=n,Ha=e,ca=a,bf=f,yf=u,mg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dx(he,function(){return Ng(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,u=z.p,z.p=2,v=Nt,Nt|=4;try{xx(e,n,a)}finally{Nt=v,z.p=u,L.T=s}}mn=1,wg(),Cg(),Rg()}}function wg(){if(mn===1){mn=0;var e=Ha,n=cs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=z.p;z.p=2;var u=Nt;Nt|=4;try{og(n,e);var f=Bf,v=hp(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&dp(A.ownerDocument.documentElement,A)){if(H!==null&&su(A)){var te=H.start,pe=H.end;if(pe===void 0&&(pe=te),"selectionStart"in A)A.selectionStart=te,A.selectionEnd=Math.min(pe,A.value.length);else{var _e=A.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),He=A.textContent.length,$e=Math.min(H.start,He),Vt=H.end===void 0?$e:Math.min(H.end,He);!ce.extend&&$e>Vt&&(v=Vt,Vt=$e,$e=v);var Z=fp(A,$e),j=fp(A,Vt);if(Z&&j&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==j.node||ce.focusOffset!==j.offset)){var ee=_e.createRange();ee.setStart(Z.node,Z.offset),ce.removeAllRanges(),$e>Vt?(ce.addRange(ee),ce.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),ce.addRange(ee))}}}}for(_e=[],ce=A;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_e.length;A++){var ge=_e[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}ec=!!Pf,Bf=Pf=null}finally{Nt=u,z.p=s,L.T=a}}e.current=n,mn=2}}function Cg(){if(mn===2){mn=0;var e=Ha,n=cs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=z.p;z.p=2;var u=Nt;Nt|=4;try{ng(e,n.alternate,n)}finally{Nt=u,z.p=s,L.T=a}}mn=3}}function Rg(){if(mn===4||mn===3){mn=0,O();var e=Ha,n=cs,a=ca,s=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,cs=Ha=null,Dg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),Fr(a),n=n.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,u=z.p,z.p=2,L.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var A=s[v];f(A.value,{componentStack:A.stack})}}finally{L.T=n,z.p=u}}(ca&3)!==0&&Vl(),Pi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Sf?bo++:(bo=0,Sf=e):bo=0,yo(0)}}function Dg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Vl(){return wg(),Cg(),Rg(),Ng()}function Ng(){if(mn!==5)return!1;var e=Ha,n=bf;bf=0;var a=Fr(ca),s=L.T,u=z.p;try{z.p=32>a?32:a,L.T=null,a=yf,yf=null;var f=Ha,v=ca;if(mn=0,cs=Ha=null,ca=0,(Nt&6)!==0)throw Error(r(331));var A=Nt;if(Nt|=4,dg(f.current),cg(f,f.current,v,a),Nt=A,yo(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{z.p=u,L.T=s,Dg(e,n)}}function Ug(e,n,a){n=ri(a,n),n=$u(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(Rn(e,2),Pi(e))}function Ft(e,n,a){if(e.tag===3)Ug(e,e,a);else for(;n!==null;){if(n.tag===3){Ug(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))){e=ri(a,e),a=Lm(2),s=Oa(n,a,2),s!==null&&(Om(a,s,n,e),Rn(s,2),Pi(s));break}}n=n.return}}function Tf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Sx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(vf=!0,u.add(a),e=wx.bind(null,e,n,a),n.then(e,e))}function wx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Gt===e&&(xt&a)===a&&($t===4||$t===3&&(xt&62914560)===xt&&300>E()-Bl?(Nt&2)===0&&us(e,0):_f|=a,ls===xt&&(ls=0)),Pi(e)}function Lg(e,n){n===0&&(n=Pt()),e=ur(e,n),e!==null&&(Rn(e,n),Pi(e))}function Cx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Lg(e,a)}function Rx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Lg(e,a)}function Dx(e,n){return Et(e,n)}var Gl=null,ds=null,Af=!1,jl=!1,wf=!1,Ga=0;function Pi(e){e!==ds&&e.next===null&&(ds===null?Gl=ds=e:ds=ds.next=e),jl=!0,Af||(Af=!0,Ux())}function yo(e,n){if(!wf&&jl){wf=!0;do for(var a=!1,s=Gl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Le(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fg(s,f))}else f=xt,f=de(s,s===Gt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ie(s,f)||(a=!0,Fg(s,f));s=s.next}while(a);wf=!1}}function Nx(){Og()}function Og(){jl=Af=!1;var e=0;Ga!==0&&Vx()&&(e=Ga);for(var n=E(),a=null,s=Gl;s!==null;){var u=s.next,f=Pg(s,n);f===0?(s.next=null,a===null?Gl=u:a.next=u,u===null&&(ds=a)):(a=s,(e!==0||(f&3)!==0)&&(jl=!0)),s=u}mn!==0&&mn!==5||yo(e),Ga!==0&&(Ga=0)}function Pg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Le(f),A=1<<v,H=u[v];H===-1?((A&a)===0||(A&s)!==0)&&(u[v]=it(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=Gt,a=xt,a=de(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Lt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Lt(s),Fr(a)){case 2:case 8:a=be;break;case 32:a=he;break;case 268435456:a=Re;break;default:a=he}return s=Bg.bind(null,e),a=Et(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Lt(s),e.callbackPriority=2,e.callbackNode=null,2}function Bg(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var s=xt;return s=de(e,e===Gt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(vg(e,s,n),Pg(e,E()),e.callbackNode!=null&&e.callbackNode===a?Bg.bind(null,e):null)}function Fg(e,n){if(Vl())return null;vg(e,n,!0)}function Ux(){jx(function(){(Nt&6)!==0?Et(me,Nx):Og()})}function Cf(){if(Ga===0){var e=Qr;e===0&&(e=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),Ga=e}return Ga}function kg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jo(""+e)}function Ig(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Lx(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=kg((u[hn]||null).action),v=s.submitter;v&&(n=(n=v[hn]||null)?kg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new nl("action","action",null,s,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ga!==0){var H=v?Ig(u,v):new FormData(u);qu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=v?Ig(u,v):new FormData(u),qu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Rf=0;Rf<uu.length;Rf++){var Df=uu[Rf],Ox=Df.toLowerCase(),Px=Df[0].toUpperCase()+Df.slice(1);Si(Ox,"on"+Px)}Si(gp,"onAnimationEnd"),Si(vp,"onAnimationIteration"),Si(_p,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Q_,"onTransitionRun"),Si(J_,"onTransitionStart"),Si($_,"onTransitionCancel"),Si(xp,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function zg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var A=s[v],H=A.instance,te=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){rl(pe)}u.currentTarget=null,f=H}else for(v=0;v<s.length;v++){if(A=s[v],H=A.instance,te=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=te;try{f(u)}catch(pe){rl(pe)}u.currentTarget=null,f=H}}}}function vt(e,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var s=e+"__bubble";a.has(s)||(Hg(n,e,2,!1),a.add(s))}function Nf(e,n,a){var s=0;n&&(s|=4),Hg(a,e,s,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Xl]){e[Xl]=!0,le.forEach(function(a){a!=="selectionchange"&&(Bx.has(a)||Nf(a,!1,e),Nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,Nf("selectionchange",!1,n))}}function Hg(e,n,a,s){switch(g0(n)){case 2:var u=ub;break;case 8:u=fb;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Lf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var A=s.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=s.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=Ta(A),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){s=f=v;continue e}A=A.parentNode}}s=s.return}Wh(function(){var te=f,pe=Zc(a),_e=[];e:{var ae=bp.get(e);if(ae!==void 0){var ce=nl,He=e;switch(e){case"keypress":if(el(a)===0)break e;case"keydown":case"keyup":ce=R_;break;case"focusin":He="focus",ce=tu;break;case"focusout":He="blur",ce=tu;break;case"beforeblur":case"afterblur":ce=tu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=v_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=U_;break;case gp:case vp:case _p:ce=b_;break;case xp:ce=O_;break;case"scroll":case"scrollend":ce=m_;break;case"wheel":ce=B_;break;case"copy":case"cut":case"paste":ce=S_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Qh;break;case"toggle":case"beforetoggle":ce=k_}var $e=(n&4)!==0,Vt=!$e&&(e==="scroll"||e==="scrollend"),Z=$e?ae!==null?ae+"Capture":null:ae;$e=[];for(var j=te,ee;j!==null;){var ge=j;if(ee=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ee===null||Z===null||(ge=Gs(j,Z),ge!=null&&$e.push(Eo(j,ge,ee))),Vt)break;j=j.return}0<$e.length&&(ae=new ce(ae,He,null,a,pe),_e.push({event:ae,listeners:$e}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",ae&&a!==Yc&&(He=a.relatedTarget||a.fromElement)&&(Ta(He)||He[Wi]))break e;if((ce||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(He=a.relatedTarget||a.toElement,ce=te,He=He?Ta(He):null,He!==null&&(Vt=c(He),$e=He.tag,He!==Vt||$e!==5&&$e!==27&&$e!==6)&&(He=null)):(ce=null,He=te),ce!==He)){if($e=Zh,ge="onMouseLeave",Z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&($e=Qh,ge="onPointerLeave",Z="onPointerEnter",j="pointer"),Vt=ce==null?ae:sr(ce),ee=He==null?ae:sr(He),ae=new $e(ge,j+"leave",ce,a,pe),ae.target=Vt,ae.relatedTarget=ee,ge=null,Ta(pe)===te&&($e=new $e(Z,j+"enter",He,a,pe),$e.target=ee,$e.relatedTarget=Vt,ge=$e),Vt=ge,ce&&He)t:{for($e=Fx,Z=ce,j=He,ee=0,ge=Z;ge;ge=$e(ge))ee++;ge=0;for(var Qe=j;Qe;Qe=$e(Qe))ge++;for(;0<ee-ge;)Z=$e(Z),ee--;for(;0<ge-ee;)j=$e(j),ge--;for(;ee--;){if(Z===j||j!==null&&Z===j.alternate){$e=Z;break t}Z=$e(Z),j=$e(j)}$e=null}else $e=null;ce!==null&&Vg(_e,ae,ce,$e,!1),He!==null&&Vt!==null&&Vg(_e,Vt,He,$e,!0)}}e:{if(ae=te?sr(te):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var wt=rp;else if(ip(ae))if(sp)wt=Y_;else{wt=W_;var qe=X_}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Ir(te.elementType)&&(wt=rp):wt=q_;if(wt&&(wt=wt(e,te))){ap(_e,wt,a,pe);break e}qe&&qe(e,ae,te),e==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&bi(ae,"number",ae.value)}switch(qe=te?sr(te):window,e){case"focusin":(ip(qe)||qe.contentEditable==="true")&&(Gr=qe,ou=te,Qs=null);break;case"focusout":Qs=ou=Gr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,pp(_e,a,pe);break;case"selectionchange":if(K_)break;case"keydown":case"keyup":pp(_e,a,pe)}var dt;if(iu)e:{switch(e){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Vr?tp(e,a)&&(bt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Jh&&a.locale!=="ko"&&(Vr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Vr&&(dt=qh()):(wa=pe,Jc="value"in wa?wa.value:wa.textContent,Vr=!0)),qe=Wl(te,bt),0<qe.length&&(bt=new Kh(bt,e,null,a,pe),_e.push({event:bt,listeners:qe}),dt?bt.data=dt:(dt=np(a),dt!==null&&(bt.data=dt)))),(dt=z_?H_(e,a):V_(e,a))&&(bt=Wl(te,"onBeforeInput"),0<bt.length&&(qe=new Kh("onBeforeInput","beforeinput",null,a,pe),_e.push({event:qe,listeners:bt}),qe.data=dt)),Lx(_e,e,te,a,pe)}zg(_e,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Gs(e,a),u!=null&&s.unshift(Eo(e,u,f)),u=Gs(e,n),u!=null&&s.push(Eo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Fx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var A=a,H=A.alternate,te=A.stateNode;if(A=A.tag,H!==null&&H===s)break;A!==5&&A!==26&&A!==27||te===null||(H=te,u?(te=Gs(a,f),te!=null&&v.unshift(Eo(a,te,H))):u||(te=Gs(a,f),te!=null&&v.push(Eo(a,te,H)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var kx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function Gg(e){return(typeof e=="string"?e:""+e).replace(kx,`
`).replace(Ix,"")}function jg(e,n){return n=Gg(n),Gg(e)===n}function Ht(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Un(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Un(e,""+s);break;case"className":rt(e,"class",s);break;case"tabIndex":rt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(e,a,s);break;case"style":qi(e,s,f);break;case"data":if(n!=="object"){rt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",u.name,u,null),Ht(e,n,"formEncType",u.formEncType,u,null),Ht(e,n,"formMethod",u.formMethod,u,null),Ht(e,n,"formTarget",u.formTarget,u,null)):(Ht(e,n,"encType",u.encType,u,null),Ht(e,n,"method",u.method,u,null),Ht(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Jo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Yi);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Jo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":vt("beforetoggle",e),vt("toggle",e),nt(e,"popover",s);break;case"xlinkActuate":ze(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ze(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ze(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ze(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ze(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ze(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ze(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ze(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ze(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":nt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h_.get(a)||a,nt(e,a,s))}}function Of(e,n,a,s,u,f){switch(a){case"style":qi(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Un(e,s):(typeof s=="number"||typeof s=="bigint")&&Un(e,""+s);break;case"onScroll":s!=null&&vt("scroll",e);break;case"onScrollEnd":s!=null&&vt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ne.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):nt(e,a,s)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,f,v,a,null)}}u&&Ht(e,n,"srcSet",a.srcSet,a,null),s&&Ht(e,n,"src",a.src,a,null);return;case"input":vt("invalid",e);var A=f=v=u=null,H=null,te=null;for(s in a)if(a.hasOwnProperty(s)){var pe=a[s];if(pe!=null)switch(s){case"name":u=pe;break;case"type":v=pe;break;case"checked":H=pe;break;case"defaultChecked":te=pe;break;case"value":f=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Ht(e,n,s,pe,a,null)}}jn(e,f,A,H,te,v,u,!1);return;case"select":vt("invalid",e),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":s=A;default:Ht(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!s,n!=null?Xn(e,!!s,n,!1):a!=null&&Xn(e,!!s,a,!0);return;case"textarea":vt("invalid",e),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ht(e,n,v,A,a,null)}rn(e,s,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null)&&(H==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":Ht(e,n,H,s,a,null));return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(s=0;s<So.length;s++)vt(So[s],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(s=a[te],s!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ht(e,n,te,s,a,null)}return;default:if(Ir(n)){for(pe in a)a.hasOwnProperty(pe)&&(s=a[pe],s!==void 0&&Of(e,n,pe,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ht(e,n,A,s,a,null))}function zx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,H=null,te=null,pe=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=_e;default:s.hasOwnProperty(ce)||Ht(e,n,ce,null,s,_e)}}for(var ae in s){var ce=s[ae];if(_e=a[ae],s.hasOwnProperty(ae)&&(ce!=null||_e!=null))switch(ae){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":pe=ce;break;case"value":v=ce;break;case"defaultValue":A=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==_e&&Ht(e,n,ae,ce,s,_e)}}Nn(e,v,A,H,te,pe,f,u);return;case"select":ce=v=A=ae=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:s.hasOwnProperty(f)||Ht(e,n,f,null,s,H)}for(u in s)if(f=s[u],H=a[u],s.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":ae=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==H&&Ht(e,n,u,f,s,H)}n=A,a=v,s=ce,ae!=null?Xn(e,!!a,ae,!1):!!s!=!!a&&(n!=null?Xn(e,!!a,n,!0):Xn(e,!!a,a?[]:"",!1));return;case"textarea":ce=ae=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ht(e,n,A,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ae=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ht(e,n,v,u,s,f)}Ot(e,ae,ce);return;case"option":for(var He in a)ae=a[He],a.hasOwnProperty(He)&&ae!=null&&!s.hasOwnProperty(He)&&(He==="selected"?e.selected=!1:Ht(e,n,He,null,s,ae));for(H in s)ae=s[H],ce=a[H],s.hasOwnProperty(H)&&ae!==ce&&(ae!=null||ce!=null)&&(H==="selected"?e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Ht(e,n,H,ae,s,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ae=a[$e],a.hasOwnProperty($e)&&ae!=null&&!s.hasOwnProperty($e)&&Ht(e,n,$e,null,s,ae);for(te in s)if(ae=s[te],ce=a[te],s.hasOwnProperty(te)&&ae!==ce&&(ae!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Ht(e,n,te,ae,s,ce)}return;default:if(Ir(n)){for(var Vt in a)ae=a[Vt],a.hasOwnProperty(Vt)&&ae!==void 0&&!s.hasOwnProperty(Vt)&&Of(e,n,Vt,void 0,s,ae);for(pe in s)ae=s[pe],ce=a[pe],!s.hasOwnProperty(pe)||ae===ce||ae===void 0&&ce===void 0||Of(e,n,pe,ae,s,ce);return}}for(var Z in a)ae=a[Z],a.hasOwnProperty(Z)&&ae!=null&&!s.hasOwnProperty(Z)&&Ht(e,n,Z,null,s,ae);for(_e in s)ae=s[_e],ce=a[_e],!s.hasOwnProperty(_e)||ae===ce||ae==null&&ce==null||Ht(e,n,_e,ae,s,ce)}function Xg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&Xg(v)){for(v=0,A=u.responseEnd,s+=1;s<a.length;s++){var H=a[s],te=H.startTime;if(te>A)break;var pe=H.transferSize,_e=H.initiatorType;pe&&Xg(_e)&&(H=H.responseEnd,v+=pe*(H<A?1:(A-te)/(H-te)))}if(--s,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pf=null,Bf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function Vx(){var e=window.event;return e&&e.type==="popstate"?e===kf?!1:(kf=e,!0):(kf=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,Gx=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(e){return Zg.resolve(null).then(e).catch(Xx)}:Yg;function Xx(e){setTimeout(function(){throw e})}function ja(e){return e==="head"}function Kg(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),gs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[rr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Mo(e.ownerDocument.body);a=u}while(a);gs(n)}function Qg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wx(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[rr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function qx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Jg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function zf(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vf=null;function $g(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function e0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function t0(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vs(e)}var fi=new Map,n0=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=z.d;z.d={f:Zx,r:Kx,D:Qx,C:Jx,L:$x,m:eb,X:nb,S:tb,M:ib};function Zx(){var e=ua.f(),n=Il();return e||n}function Kx(e){var n=Aa(e);n!==null&&n.tag===5&&n.type==="form"?xm(n):ua.r(e)}var hs=typeof document>"u"?null:document;function i0(e,n,a){var s=hs;if(s&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),n0.has(u)||(n0.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),En(n,"link",e),X(n),s.head.appendChild(n)))}}function Qx(e){ua.D(e),i0("dns-prefetch",e,null)}function Jx(e,n){ua.C(e,n),i0("preconnect",e,n)}function $x(e,n,a){ua.L(e,n,a);var s=hs;if(s&&e&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(e)+'"]';var f=u;switch(n){case"style":f=ps(e);break;case"script":f=ms(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(Ao(f))||(n=s.createElement("link"),En(n,"link",e),X(n),s.head.appendChild(n)))}}function eb(e,n){ua.m(e,n);var a=hs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(s)+'"][href="'+at(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ms(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}s=a.createElement("link"),En(s,"link",e),X(s),a.head.appendChild(s)}}}function tb(e,n,a){ua.S(e,n,a);var s=hs;if(s&&e){var u=w(s).hoistableStyles,f=ps(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=s.querySelector(To(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Gf(e,a);var H=v=s.createElement("link");X(H),En(H,"link",e),H._p=new Promise(function(te,pe){H.onload=te,H.onerror=pe}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Zl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function nb(e,n){ua.X(e,n);var a=hs;if(a&&e){var s=w(a).hoistableScripts,u=ms(e),f=s.get(u);f||(f=a.querySelector(Ao(u)),f||(e=_({src:e,async:!0},n),(n=fi.get(u))&&jf(e,n),f=a.createElement("script"),X(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function ib(e,n){ua.M(e,n);var a=hs;if(a&&e){var s=w(a).hoistableScripts,u=ms(e),f=s.get(u);f||(f=a.querySelector(Ao(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&jf(e,n),f=a.createElement("script"),X(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function a0(e,n,a,s){var u=(u=ie.current)?Yl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=w(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var f=w(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(To(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||ab(u,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=w(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+at(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function r0(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ab(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),X(n),e.head.appendChild(n))}function ms(e){return'[src="'+at(e)+'"]'}function Ao(e){return"script[async]"+e}function s0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+at(a.href)+'"]');if(s)return n.instance=s,X(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),X(s),En(s,"style",u),Zl(s,a.precedence,e),n.instance=s;case"stylesheet":u=ps(a.href);var f=e.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;s=r0(a),(u=fi.get(u))&&Gf(s,u),f=(e.ownerDocument||e).createElement("link"),X(f);var v=f;return v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),En(f,"link",s),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=ms(a.src),(u=e.querySelector(Ao(f)))?(n.instance=u,X(u),u):(s=a,(u=fi.get(f))&&(s=_({},a),jf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),En(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zl(s,a.precedence,e));return n.instance}function Zl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var A=s[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function o0(e,n,a){if(Kl===null){var s=new Map,u=Kl=new Map;u.set(a,s)}else u=Kl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[rr]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=s.get(v);A?A.push(f):s.set(v,[f])}}return s}function l0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function rb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sb(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ps(s.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,s=r0(s),(u=fi.get(u))&&Gf(s,u),f=f.createElement("link"),X(f);var v=f;v._p=new Promise(function(A,H){v.onload=A,v.onerror=H}),En(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function ob(e,n){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*Hx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function $l(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(lb,e),Jl=null,Ql.call(e))}function lb(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var s=a.get(null);else{a=new Map,Jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=Ql.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:B,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function cb(e,n,a,s,u,f,v,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mt(0),this.hiddenUpdates=Mt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function u0(e,n,a,s,u,f,v,A,H,te,pe,_e){return e=new cb(e,n,a,v,H,te,pe,_e,A),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wu(f),e}function f0(e){return e?(e=Wr,e):Wr}function d0(e,n,a,s,u,f){u=f0(u),s.context===null?s.context=u:s.pendingContext=u,s=La(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Oa(e,s,n),a!==null&&(Hn(a,e,n),ao(a,e,n))}function h0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){h0(e,n),(e=e.alternate)&&h0(e,n)}function p0(e){if(e.tag===13||e.tag===31){var n=ur(e,67108864);n!==null&&Hn(n,e,67108864),Wf(e,67108864)}}function m0(e){if(e.tag===13||e.tag===31){var n=Jn();n=Br(n);var a=ur(e,n);a!==null&&Hn(a,e,n),Wf(e,n)}}var ec=!0;function ub(e,n,a,s){var u=L.T;L.T=null;var f=z.p;try{z.p=2,qf(e,n,a,s)}finally{z.p=f,L.T=u}}function fb(e,n,a,s){var u=L.T;L.T=null;var f=z.p;try{z.p=8,qf(e,n,a,s)}finally{z.p=f,L.T=u}}function qf(e,n,a,s){if(ec){var u=Yf(s);if(u===null)Lf(e,n,s,tc,a),v0(e,s);else if(hb(u,e,n,a,s))s.stopPropagation();else if(v0(e,s),n&4&&-1<db.indexOf(e)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ee(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var H=1<<31-Le(v);A.entanglements[1]|=H,v&=~H}Pi(f),(Nt&6)===0&&(Fl=E()+500,yo(0))}}break;case 31:case 13:A=ur(f,2),A!==null&&Hn(A,f,2),Il(),Wf(f,2)}if(f=Yf(s),f===null&&Lf(e,n,s,tc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Lf(e,n,s,null,a)}}function Yf(e){return e=Zc(e),Zf(e)}var tc=null;function Zf(e){if(tc=null,e=Ta(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function g0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case me:return 2;case be:return 8;case he:case je:return 32;case Re:return 268435456;default:return 32}default:return 32}}var Kf=!1,Xa=null,Wa=null,qa=null,Co=new Map,Ro=new Map,Ya=[],db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Do(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&p0(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function hb(e,n,a,s,u){switch(n){case"focusin":return Xa=Do(Xa,e,n,a,s,u),!0;case"dragenter":return Wa=Do(Wa,e,n,a,s,u),!0;case"mouseover":return qa=Do(qa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Do(Ro.get(f)||null,e,n,a,s,u)),!0}return!1}function _0(e){var n=Ta(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,kr(e.priority,function(){m0(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,kr(e.priority,function(){m0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Yc=s,a.target.dispatchEvent(s),Yc=null}else return n=Aa(a),n!==null&&p0(n),e.blockedOn=a,!1;n.shift()}return!0}function x0(e,n,a){nc(e)&&a.delete(n)}function pb(){Kf=!1,Xa!==null&&nc(Xa)&&(Xa=null),Wa!==null&&nc(Wa)&&(Wa=null),qa!==null&&nc(qa)&&(qa=null),Co.forEach(x0),Ro.forEach(x0)}function ic(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,pb)))}var ac=null;function b0(e){ac!==e&&(ac=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Zf(s||a)===null)continue;break}var f=Aa(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function gs(e){function n(H){return ic(H,e)}Xa!==null&&ic(Xa,e),Wa!==null&&ic(Wa,e),qa!==null&&ic(qa,e),Co.forEach(n),Ro.forEach(n);for(var a=0;a<Ya.length;a++){var s=Ya[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)_0(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[hn]||null;if(typeof f=="function")v||b0(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[hn]||null)A=v.formAction;else if(Zf(u)!==null)continue}else A=v.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),b0(a)}}}function y0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Qf(e){this._internalRoot=e}rc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();d0(a,s,e,n,null,null)},rc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;d0(e.current,2,null,e,null,null),Il(),n[Wi]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ni();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&_0(e)}};var S0=t.version;if(S0!=="19.2.4")throw Error(r(527,S0,"19.2.4"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var mb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Me=sc.inject(mb),Se=sc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Rm,f=Dm,v=Nm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=u0(e,1,!1,null,null,a,s,null,u,f,v,y0),e[Wi]=n.current,Uf(e),new Qf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Rm,v=Dm,A=Nm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=u0(e,1,!0,n,a??null,s,u,H,f,v,A,y0),n.context=f0(null),a=n.current,s=Jn(),s=Br(s),u=La(s),u.callback=null,Oa(a,u,s),a=s,n.current.lanes=a,Rn(n,a),Pi(n),e[Wi]=n.current,Uf(e),new rc(n)},Uo.version="19.2.4",Uo}var U0;function Tb(){if(U0)return ed.exports;U0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ed.exports=Mb(),ed.exports}var Ab=Tb();const Nh={genesis:{name:"Genesis",years:"2013-2015",color:"#8B4513"},frontier:{name:"Frontier",years:"2015",color:"#1B1B1B"},homestead:{name:"Homestead",years:"2016",color:"#2D5016"},metropolis:{name:"Metropolis",years:"2017-2019",color:"#4A1A7A"},istanbul:{name:"Istanbul",years:"2019-2020",color:"#6B21A8"},beacon:{name:"Beacon Chain Era",years:"2020-2022",color:"#FF6B35"},merge:{name:"The Merge",years:"2022",color:"#00D395"},shanghai:{name:"Shanghai",years:"2023",color:"#3B82F6"},cancun:{name:"Cancun-Deneb",years:"2024",color:"#06B6D4"},pectra:{name:"Pectra",years:"2025",color:"#8B5CF6"},fusaka:{name:"Fusaka",years:"2025-2026",color:"#EC4899"}},oc=[{id:"bitcoin-magazine",type:"milestone",date:"2011-09-01",title:"Bitcoin Magazine Founded",summary:"Vitalik Buterin co-founds Bitcoin Magazine with Mihai Alisie — his entry into the crypto world.",era:"genesis",importance:"significant",content:"At just 17 years old, Vitalik Buterin co-founded Bitcoin Magazine with Romanian Bitcoin enthusiast Mihai Alisie. Buterin spent 10-20 hours per week writing about Bitcoin technology, economics, and culture. This work established him as a leading voice in the crypto community and exposed him to the limitations of Bitcoin that would eventually inspire Ethereum. Bitcoin Magazine remains active today as one of the longest-running crypto publications.",tags:["social"],links:[{label:"Bitcoin Magazine",url:"https://bitcoinmagazine.com/"},{label:"Vitalik's Articles",url:"https://bitcoinmagazine.com/authors/vitalik-buterin"},{label:"Bitcoin Magazine History (Wikipedia)",url:"https://en.wikipedia.org/wiki/Bitcoin_Magazine"}]},{id:"whitepaper",type:"research",date:"2013-11-27",title:"Ethereum Whitepaper",summary:"Vitalik Buterin publishes the Ethereum whitepaper, proposing a blockchain with a Turing-complete programming language.",era:"genesis",importance:"major",content:'At 19 years old, Vitalik Buterin published "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform." The whitepaper proposed a blockchain that could run arbitrary code, not just simple transactions. This would become the foundation for DeFi, NFTs, and the entire smart contract ecosystem.',tags:["research","protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",links:[{label:"Original Whitepaper",url:"https://ethereum.org/en/whitepaper/"},{label:"Whitepaper (GitHub)",url:"https://github.com/ethereum/wiki/wiki/White-Paper"},{label:"Vitalik's Blog (2013)",url:"https://web.archive.org/web/20131228111141/http://vitalik.ca/"}]},{id:"bitcoin-miami",type:"milestone",date:"2014-01-26",title:"Bitcoin Miami Announcement",summary:"Vitalik publicly announces Ethereum at the North American Bitcoin Conference in Miami.",imageUrl:"https://i.ytimg.com/vi/l9dpjN3Mwps/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gNigbMA8=&amp;rs=AOn4CLAOwRoeSENEOCPrmpF3A7pb6Au-MQ",era:"genesis",importance:"major",content:"Vitalik Buterin took the stage at the North American Bitcoin Conference in Miami to publicly announce Ethereum. The announcement attracted early contributors including Gavin Wood, who would write the Yellow Paper, and many of the future co-founders.",tags:["social"],links:[{label:"Conference Announcement (video)",url:"https://www.youtube.com/watch?v=l9dpjN3Mwps"},{label:"Early Ethereum Blog",url:"https://web.archive.org/web/20140208030136/http://ethereum.org/"}]},{id:"yellow-paper",type:"research",date:"2014-04-01",title:"Yellow Paper Published",summary:"Gavin Wood publishes the Ethereum Yellow Paper — the formal technical specification that defines the Ethereum Virtual Machine.",imageUrl:"https://opengraph.githubassets.com/1a8c6a64f87c6c7ec155a7e91edac153246de7ef5e831fe200d26c98c1c88a1e/ethereum/yellowpaper",era:"genesis",importance:"major",content:`Dr. Gavin Wood published "Ethereum: A Secure Decentralised Generalised Transaction Ledger" — the Yellow Paper. While Vitalik's whitepaper described what Ethereum could do, the Yellow Paper specified exactly how it would work. It defined the EVM opcodes, gas costs, state transitions, and cryptographic primitives in mathematical notation. This document became the reference for all Ethereum client implementations and remains essential for anyone building at the protocol level.`,tags:["research","protocol"],links:[{label:"Yellow Paper (PDF)",url:"https://ethereum.github.io/yellowpaper/paper.pdf"},{label:"Yellow Paper (GitHub)",url:"https://github.com/ethereum/yellowpaper"},{label:"Gavin Wood announcing Yellow Paper",url:"https://blog.ethereum.org/2014/05/06/the-ethereum-project-launches"}]},{id:"the-spaceship",type:"milestone",date:"2014-06-01",title:"The Spaceship (Zug)",summary:'Ethereum co-founders gather in a rented house in Zug, Switzerland — nicknamed "The Spaceship" — to build the protocol.',era:"genesis",importance:"significant",content:`The eight Ethereum co-founders — Vitalik Buterin, Gavin Wood, Charles Hoskinson, Anthony Di Iorio, Joseph Lubin, Jeffrey Wilcke, Mihai Alisie, and Amir Chetrit — rented a house in Zug, Switzerland they called "The Spaceship." Here they worked intensively on the protocol, debated governance, and prepared for the crowdsale. The tensions and breakthroughs from this period are documented in Laura Shin's "The Cryptopians."`,tags:["social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Zug_Altstadt.jpg/1280px-Zug_Altstadt.jpg",links:[{label:"The Cryptopians (book)",url:"https://www.harpercollins.com/products/the-cryptopians-laura-shin"},{label:"Ethereum History (ethereum.org)",url:"https://ethereum.org/en/history/"}]},{id:"ethereum-foundation",type:"milestone",date:"2014-07-14",title:"Ethereum Foundation Founded",summary:"Stiftung Ethereum is established in Zug, Switzerland — a non-profit to steward Ethereum's development.",era:"genesis",importance:"significant",content:`The Ethereum Foundation (Stiftung Ethereum) was legally incorporated in Zug, Switzerland as a non-profit foundation. This gave Ethereum a legal entity to conduct the crowdsale, hold funds, and coordinate development. Switzerland's "Crypto Valley" reputation began here — Zug's friendly regulatory environment made it the natural home for blockchain organizations.`,tags:["social","protocol"],links:[{label:"Ethereum Foundation",url:"https://ethereum.foundation/"},{label:"About the EF",url:"https://ethereum.org/en/foundation/"},{label:"Crypto Valley origins",url:"https://cryptovalley.swiss/"}]},{id:"crowdsale",type:"milestone",date:"2014-07-22",title:"Ethereum Crowdsale",summary:"The 42-day crowdsale raises 31,591 BTC (~$18M), selling 60 million ETH to early believers.",era:"genesis",importance:"major",content:"Ethereum's crowdsale ran from July 22 to September 2, 2014. Contributors sent Bitcoin in exchange for ETH at a rate starting at 2000 ETH per BTC (decreasing over time). The sale raised 31,591 BTC, worth approximately $18 million at the time. 60 million ETH was allocated to crowdsale participants, with another 12 million going to the Ethereum Foundation and early contributors.",tags:["protocol","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ethereum_logo_translucent.svg/1200px-Ethereum_logo_translucent.svg.png",links:[{label:"Crowdsale Announcement",url:"https://blog.ethereum.org/2014/07/22/launching-the-ether-sale"},{label:"Terms & Conditions (archive)",url:"https://web.archive.org/web/20140722213508/https://www.ethereum.org/pdf/TermsAndConditionsOfTheEthereumGenesisSale.pdf"}]},{id:"devcon-0",type:"milestone",date:"2014-11-24",title:"DevCon 0 (Berlin)",summary:"The first Ethereum developer conference, held before mainnet launch.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"genesis",importance:"significant",content:"DevCon 0 gathered early Ethereum developers in Berlin before mainnet even launched. This intimate gathering set the tone for Ethereum's developer-first culture.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=0"}]},{id:"olympic-testnet",type:"milestone",date:"2015-05-09",title:"Olympic Testnet",summary:"Ethereum's final public testnet launches, offering 25,000 ETH in bug bounties. The stress test before mainnet.",era:"genesis",importance:"significant",content:"Olympic was Ethereum's ninth and final proof-of-concept testnet before mainnet launch. The Ethereum Foundation offered 25,000 ETH in bounties for stress testing — finding bugs, pushing transaction limits, and testing edge cases. Participants competed to break the network, helping ensure Frontier would be robust. The testnet ran for about two months before Frontier launched.",tags:["protocol"],links:[{label:"Olympic Announcement",url:"https://blog.ethereum.org/2015/05/09/olympic-frontier-pre-release"},{label:"Olympic Rewards",url:"https://blog.ethereum.org/2015/08/26/olympic-rewards-announced"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#olympic"}]},{id:"frontier-launch",type:"milestone",date:"2015-07-30",blockNumber:0,title:"Frontier Launch",summary:"Ethereum mainnet goes live. The genesis block is mined, marking the birth of the world computer.",era:"frontier",importance:"major",content:'Ethereum officially launched on July 30, 2015 with the Frontier release. This was a "beta" release intended for developers to start building and mining. The genesis block contained 8,893 transactions from the presale, distributing 72 million ETH.',tags:["protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png",links:[{label:"Genesis Block",url:"https://etherscan.io/block/0"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2015/07/30/ethereum-launches"},{label:"Vitalik's Launch Post",url:"https://web.archive.org/web/20150801011623/https://blog.ethereum.org/2015/07/30/ethereum-launches/"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#frontier"}]},{id:"frontier-thawing",type:"hard_fork",date:"2015-09-07",blockNumber:2e5,title:"Frontier Thawing",summary:"First unplanned hard fork, increased gas limit from 5,000 to enable actual transactions.",imageUrl:"https://ethereum.org/images/home/hero.png",era:"frontier",importance:"significant",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/200000"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#frontier-thawing"}]},{id:"homestead-fork",type:"hard_fork",date:"2016-03-14",blockNumber:115e4,title:"Homestead",summary:"First planned hard fork. Removed canary contracts, adjusted gas costs, enabled contract creation via transactions.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"homestead",importance:"major",relatedEips:[2,7,8],content:`The Homestead release marked Ethereum's transition from beta to a more stable platform. Key changes included:
- EIP-2: Adjusted contract creation gas
- EIP-7: Added DELEGATECALL opcode
- EIP-8: Forward compatibility for networking protocol`,tags:["protocol"],links:[{label:"Homestead Block",url:"https://etherscan.io/block/1150000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2016/02/29/homestead-release"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#homestead"},{label:"EIP-2: Homestead Gas Changes",url:"https://eips.ethereum.org/EIPS/eip-2"}]},{id:"the-dao-launch",type:"milestone",date:"2016-04-30",blockNumber:1428757,title:"The DAO Launches",summary:"Largest crowdfund in history raises $150M for a decentralized venture capital fund.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Christoph_Jentzsch.jpg/960px-Christoph_Jentzsch.jpg",era:"homestead",importance:"major",content:"The DAO (Decentralized Autonomous Organization) launched as an ambitious experiment in decentralized governance. It raised over $150 million in ETH through a 28-day crowdsale — the largest crowdfunding campaign ever at the time. Token holders would vote on which projects to fund. The experiment would end in disaster just weeks later.",tags:["defi","social"],links:[{label:"The DAO Wikipedia",url:"https://en.wikipedia.org/wiki/The_DAO_(organization)"},{label:"The DAO Site (archive)",url:"https://web.archive.org/web/20160503105427/https://daohub.org/"}]},{id:"dao-hack",type:"controversy",date:"2016-06-17",blockNumber:1718497,title:"The DAO Hack",summary:"3.6 million ETH (~$50M) drained from The DAO smart contract through a reentrancy vulnerability.",era:"homestead",importance:"major",content:"The DAO was a decentralized venture capital fund that raised $150M in ETH. A vulnerability in its code allowed an attacker to recursively call the withdraw function, draining funds before the balance was updated. This led to one of crypto's most controversial decisions.",tags:["security","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/TheDAO_Logo.svg/1200px-TheDAO_Logo.svg.png",sourceUrl:"https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability",links:[{label:"Ethereum Foundation Statement",url:"https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability"},{label:"Community Discussion (archive)",url:"https://web.archive.org/web/20160618140914/https://www.reddit.com/r/ethereum/comments/4oi2ta/i_think_thedao_is_getting_drained_right_now/"},{label:"Technical Postmortem",url:"https://hackingdistributed.com/2016/06/18/analysis-of-the-dao-exploit/"}]},{id:"dao-fork",type:"hard_fork",date:"2016-07-20",blockNumber:192e4,title:"DAO Fork",summary:"Controversial hard fork to recover DAO funds. Led to Ethereum Classic split.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"homestead",importance:"major",relatedEips:[779],content:'The Ethereum community voted to hard fork and return the stolen DAO funds. This was controversial as it violated "code is law" principles. Those who disagreed continued the original chain as Ethereum Classic (ETC).',tags:["protocol","security","social"],links:[{label:"EIP-779: DAO Fork Spec",url:"https://eips.ethereum.org/EIPS/eip-779"},{label:"Hard Fork Block",url:"https://etherscan.io/block/1920000"},{label:"Carbonvote Results",url:"https://web.archive.org/web/20160715215142/http://carbonvote.com/"},{label:"EF Blog: To Fork or Not to Fork",url:"https://blog.ethereum.org/2016/07/15/to-fork-or-not-to-fork"},{label:"EF Blog: DAO Wars (Soft Fork)",url:"https://blog.ethereum.org/en/2016/06/24/dao-wars-youre-voice-soft-fork-dilemma"}]},{id:"byzantium",type:"hard_fork",date:"2017-10-16",blockNumber:437e4,title:"Byzantium",summary:"First part of Metropolis. Added privacy features, delayed difficulty bomb, reduced block reward.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"metropolis",importance:"major",relatedEips:[100,140,196,197,198,211,214,658],content:"Byzantium introduced crucial cryptographic primitives for zkSNARKs (EIP-196, EIP-197), laying groundwork for future privacy and scaling solutions. Block rewards were reduced from 5 to 3 ETH.",tags:["protocol"],links:[{label:"Byzantium Block",url:"https://etherscan.io/block/4370000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2017/10/12/byzantium-hf-announcement"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#byzantium"},{label:"EIP-196: zkSNARK Precompiles",url:"https://eips.ethereum.org/EIPS/eip-196"},{label:"AllCoreDevs #22 (Byzantium Release)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%2022.md"},{label:"Byzantium Hard Fork Spec",url:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-609.md"}]},{id:"vitalik-pos-philosophy",type:"research",date:"2016-12-30",blockNumber:285e4,approximateBlock:!0,title:"A Proof of Stake Design Philosophy",summary:"Vitalik articulates the philosophical foundation for why Proof of Stake is superior to Proof of Work.",imageUrl:"https://miro.medium.com/v2/da:true/bc1f8416df0cad099e43cda2872716e5864f18a73bda2a7547ea082aca9b5632",era:"homestead",importance:"significant",content:`In this influential essay, Vitalik laid out why Proof of Stake was not just technically superior but philosophically aligned with Ethereum's values. Key insight: "The 'cypherpunk spirit' is fundamentally about the public good" and PoS better achieves this by making attacks expensive in human terms, not just electricity. This essay became the intellectual foundation for Ethereum's multi-year journey to The Merge.`,tags:["research","protocol"],sourceUrl:"https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51",links:[{label:"Original Essay (Medium)",url:"https://medium.com/@VitalikButerin/a-proof-of-stake-design-philosophy-506585978d51"},{label:"Archived Copy",url:"https://vitalik.eth.limo/general/2016/12/29/pos_design_philosophy.html"}]},{id:"vitalik-decentralization",type:"research",date:"2017-02-06",blockNumber:312e4,approximateBlock:!0,title:"The Meaning of Decentralization",summary:"Vitalik defines the three axes of decentralization: architectural, political, and logical.",imageUrl:"https://miro.medium.com/v2/resize:fit:547/1*WG5_xDDwHv0lMaVUYLNbVA.png",era:"homestead",importance:"significant",content:`One of Vitalik's most-cited essays, this piece dissected what "decentralization" actually means. He identified three separate axes: architectural (physical computers), political (individuals/organizations controlling them), and logical (interface and data structures). Key takeaway: "Blockchains are politically decentralized and architecturally decentralized, but they are logically centralized." This framework became foundational for evaluating decentralization claims.`,tags:["research","social"],sourceUrl:"https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274",links:[{label:"Original Essay (Medium)",url:"https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274"}]},{id:"edcon-2017",type:"milestone",date:"2017-02-17",blockNumber:315e4,approximateBlock:!0,title:"EDCON 2017 (Paris)",summary:"First Community Ethereum Development Conference in Paris. Foundation of annual dev gathering.",era:"homestead",importance:"significant",content:"The inaugural EDCON (Community Ethereum Development Conference) took place at the École Supérieure de Commerce de Paris. It established what would become an annual tradition of bringing together Ethereum developers and researchers from around the world, with a focus on protocol development and real-world applications.",tags:["social"],links:[{label:"EDCON Website",url:"https://www.edcon.io/"},{label:"About EDCON History",url:"https://www.edcon.io/en/about"}]},{id:"raiden-network",type:"scaling",date:"2017-03-01",blockNumber:335e4,approximateBlock:!0,title:"Raiden Network Development",summary:"State channels for Ethereum — like Lightning for Bitcoin. Early scaling attempt before rollups.",era:"homestead",importance:"significant",content:'Raiden Network was one of the earliest Ethereum scaling attempts, using state channels for off-chain payments. From their 2022 post-mortem: "The demand for a scalable payment solution is way lower than we and the Ethereum community originally anticipated." It got eclipsed by the more general-purpose rollup architecture.',tags:["scaling"],links:[{label:"Raiden Network",url:"https://raiden.network/"},{label:"Raiden Postmortem (2022)",url:"https://medium.com/raiden-network/raiden-has-reached-the-end-of-the-road-92f063d4f79c"}]},{id:"plasma-whitepaper",type:"scaling",date:"2017-08-11",blockNumber:415e4,approximateBlock:!0,title:"Plasma Whitepaper",summary:"Vitalik and Joseph Poon publish Plasma, proposing child chains for scaling.",era:"metropolis",importance:"major",content:"Plasma proposed a framework for creating child chains that periodically commit to Ethereum mainnet. While Plasma itself didn't achieve widespread adoption due to data availability challenges, it laid the intellectual groundwork for rollups.",tags:["scaling","research"],links:[{label:"Plasma Whitepaper",url:"https://plasma.io/plasma-deprecated.pdf"},{label:"Plasma Group",url:"https://plasma.group/"},{label:"Learn Plasma",url:"https://www.learnplasma.org/"}]},{id:"cryptopunks-launch",type:"application",date:"2017-06-23",blockNumber:3918e3,approximateBlock:!0,title:"CryptoPunks Launch",summary:"10,000 unique pixel art characters launch — among the first NFTs on Ethereum.",era:"homestead",importance:"significant",content:"Larva Labs released CryptoPunks: 10,000 algorithmically generated 24x24 pixel characters, each unique. They were claimable for free (just gas). Initially obscure, CryptoPunks later became cultural icons selling for millions. They're credited as one of the first NFT projects and inspired the ERC-721 standard.",tags:["nft"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/CryptoPunks_Alien_7804.png/220px-CryptoPunks_Alien_7804.png",links:[{label:"CryptoPunks",url:"https://www.cryptopunks.app/"},{label:"Larva Labs",url:"https://www.larvalabs.com/cryptopunks"},{label:"Early Days Documentary (NFT Now)",url:"https://nftnow.com/features/cryptopunks-documentary-larva-labs-interview/"},{label:"Sotheby's Exhibition Notes",url:"https://www.sothebys.com/en/digital-catalogues/sealed-cryptopunks-five-punks-on-paper"}]},{id:"cryptokitties",type:"application",date:"2017-11-28",blockNumber:4605e3,approximateBlock:!0,title:"CryptoKitties Congestion",summary:"CryptoKitties game congests the network, highlighting scalability challenges.",era:"metropolis",importance:"significant",content:"CryptoKitties, a game for breeding digital cats, became so popular it accounted for 25% of Ethereum traffic. Gas prices spiked and transactions backed up, making clear the urgent need for scaling solutions.",tags:["nft","scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/e/e3/CryptoKitties_logo.png",links:[{label:"CryptoKitties Site (2017 archive)",url:"https://web.archive.org/web/20171202052136/https://www.cryptokitties.co/"},{label:"CryptoKitties Current Site",url:"https://www.cryptokitties.co/"},{label:"BBC News Coverage",url:"https://www.bbc.com/news/technology-42237162"},{label:"Congestion Analysis (archive)",url:"https://web.archive.org/web/20171204144857/https://ethgasstation.info/"}]},{id:"erc-721-final",type:"eip",date:"2018-06-21",blockNumber:58e5,approximateBlock:!0,title:"ERC-721 Standard Finalized",summary:"The NFT standard is finalized, establishing how non-fungible tokens work on Ethereum.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"metropolis",importance:"major",relatedEips:[721],content:"ERC-721, proposed by William Entriken, Dieter Shirley, Jacob Evans, and Nastassia Sachs, became the official standard for non-fungible tokens. Inspired by CryptoPunks and CryptoKitties, it defined how unique tokens should be created, owned, and transferred. This standard enabled the entire NFT ecosystem that followed.",tags:["protocol","nft"],links:[{label:"EIP-721",url:"https://eips.ethereum.org/EIPS/eip-721"},{label:"ethereum.org ERC-721",url:"https://ethereum.org/developers/docs/standards/tokens/erc-721/"}]},{id:"opensea-launch",type:"application",date:"2017-12-20",blockNumber:475e4,approximateBlock:!0,title:"OpenSea Beta Launch",summary:"First open marketplace for NFTs on Ethereum launches, inspired by CryptoKitties.",imageUrl:"https://static.seadn.io/og/generic.jpg",era:"metropolis",importance:"significant",content:"Devin Finzer and Alex Atallah launched OpenSea beta after seeing the CryptoKitties phenomenon. It became the first open marketplace for any NFT on Ethereum. OpenSea would later become the dominant NFT marketplace during the 2021 boom, reaching $5B+ in monthly volume at its peak.",tags:["nft"],links:[{label:"OpenSea",url:"https://opensea.io/"},{label:"Founding Story (About)",url:"https://opensea.io/about"},{label:"Devin Finzer's Blog Posts",url:"https://opensea.io/blog/author/devin-finzer"},{label:"Devin Finzer (Wikipedia)",url:"https://en.wikipedia.org/wiki/Devin_Finzer"}]},{id:"makerdao-launch",type:"application",date:"2017-12-18",blockNumber:475e4,approximateBlock:!0,title:"MakerDAO & DAI Launch",summary:"First decentralized stablecoin launches. DAI maintains $1 peg through over-collateralization.",era:"metropolis",importance:"major",content:"MakerDAO launched DAI, a decentralized stablecoin backed by ETH collateral. Users could lock ETH in Collateralized Debt Positions (CDPs) to mint DAI. This was DeFi's first major primitive and proved smart contracts could create stable value.",tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MakerDAO_Logo.svg/1200px-MakerDAO_Logo.svg.png",links:[{label:"MakerDAO Site (2017 archive)",url:"https://web.archive.org/web/20171220161929/https://makerdao.com/"},{label:"MakerDAO Current Site",url:"https://makerdao.com/"},{label:"DAI Whitepaper",url:"https://makerdao.com/en/whitepaper/"},{label:"Launch Announcement (Reddit)",url:"https://www.reddit.com/r/MakerDAO/comments/7lhqwe/dai_is_now_live/"}]},{id:"constantinople",type:"hard_fork",date:"2019-02-28",blockNumber:728e4,title:"Constantinople/St. Petersburg",summary:"Second part of Metropolis. Cheaper gas for certain operations, delayed difficulty bomb again.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"metropolis",importance:"major",relatedEips:[145,1014,1052,1234,1283],content:"Constantinople was delayed after a reentrancy vulnerability was found in EIP-1283. It launched with St. Petersburg, which removed the problematic EIP. Block rewards reduced to 2 ETH.",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/7280000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2019/02/22/ethereum-constantinople-st-petersburg-upgrade-announcement"},{label:"EIP-1283 Vulnerability",url:"https://medium.com/chainsecurity/constantinople-enables-new-reentrancy-attack-ace4088297d9"},{label:"AllCoreDevs #53 (Constantinople Planning)",url:"https://github.com/ethereum/pm/issues/66"},{label:"AllCoreDevs #54 (St. Petersburg)",url:"https://github.com/ethereum/pm/issues/74"}]},{id:"uniswap-v1",type:"application",date:"2018-11-02",blockNumber:664e4,approximateBlock:!0,title:"Uniswap V1 Launch",summary:"Hayden Adams launches Uniswap, the first automated market maker (AMM) DEX on Ethereum.",era:"metropolis",importance:"major",content:"Uniswap introduced the x*y=k constant product formula, enabling trustless token swaps without order books. Anyone could provide liquidity and earn fees. This simple design would spark DeFi Summer and inspire countless forks.",tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1200px-Uniswap_Logo.svg.png",links:[{label:"Hayden Adams Announcement",url:"https://twitter.com/haaborlmyHadams/status/1058376395108376577"},{label:"Uniswap V1 Docs (archive)",url:"https://web.archive.org/web/20181207013118/https://docs.uniswap.io/"},{label:"Uniswap Current Site",url:"https://uniswap.org/"},{label:"Original Reddit Post",url:"https://www.reddit.com/r/ethereum/comments/9udkhy/uniswap_a_unique_exchange/"}]},{id:"mastering-ethereum",type:"milestone",date:"2018-12-01",title:"Mastering Ethereum Published",summary:'Andreas Antonopoulos and Gavin Wood publish "Mastering Ethereum", the definitive technical guide.',era:"metropolis",importance:"significant",content:'"Mastering Ethereum: Building Smart Contracts and DApps" became the go-to technical reference for Ethereum developers. Written by Andreas Antonopoulos (author of Mastering Bitcoin) and Gavin Wood (Ethereum co-founder, Yellow Paper author), it covered everything from basic concepts to advanced smart contract development.',tags:["social","research"],links:[{label:"O'Reilly Page",url:"https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/"},{label:"GitHub (Open Source)",url:"https://github.com/ethereumbook/ethereumbook"},{label:"Amazon",url:"https://www.amazon.com/Mastering-Ethereum-Building-Smart-Contracts/dp/1491971940"}]},{id:"istanbul-fork",type:"hard_fork",date:"2019-12-08",blockNumber:9069e3,title:"Istanbul",summary:"Gas cost adjustments for certain opcodes, improved SNARK efficiency, enabled layer 2 solutions.",imageUrl:"https://blog.ethereum.org/images/eth-org.jpeg",era:"istanbul",importance:"major",relatedEips:[152,1108,1344,1884,2028,2200],content:"Istanbul focused on interoperability with Zcash, cheaper precompiles for SNARKs, and more accurate gas costs for storage-heavy operations.",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/9069000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2019/11/20/ethereum-istanbul-upgrade-announcement"},{label:"ethereum.org History",url:"https://ethereum.org/en/history/#istanbul"},{label:"AllCoreDevs #66 (Istanbul Planning)",url:"https://github.com/ethereum/pm/issues/107"},{label:"AllCoreDevs #69 (Istanbul Finalization)",url:"https://github.com/ethereum/pm/issues/118"}]},{id:"rollup-research",type:"scaling",date:"2021-01-05",title:"Rollups Emerge",summary:"Vitalik publishes 'An Incomplete Guide to Rollups', establishing them as the primary L2 strategy.",era:"beacon",importance:"major",content:`Rollups execute transactions off-chain but post data on-chain, inheriting Ethereum's security. Two types emerged: Optimistic (assume valid, fraud proofs) and ZK (validity proofs). This marked the shift to a "rollup-centric roadmap."`,tags:["scaling","research"],sourceUrl:"https://vitalik.eth.limo/general/2021/01/05/rollup.html",links:[{label:"An Incomplete Guide to Rollups",url:"https://vitalik.eth.limo/general/2021/01/05/rollup.html"},{label:"Rollup-Centric Roadmap (Oct 2020)",url:"https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698"},{label:"ethereum.org: Layer 2",url:"https://ethereum.org/en/layer-2/"}]},{id:"muir-glacier",type:"hard_fork",date:"2020-01-02",blockNumber:92e5,title:"Muir Glacier",summary:"Emergency fork to delay the difficulty bomb by 4 million blocks.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"istanbul",importance:"minor",relatedEips:[2384],tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/9200000"},{label:"EIP-2384",url:"https://eips.ethereum.org/EIPS/eip-2384"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2019/12/23/ethereum-muir-glacier-upgrade-announcement"},{label:"AllCoreDevs #76 (Muir Glacier)",url:"https://github.com/ethereum/pm/issues/135"}]},{id:"uniswap-v2",type:"application",date:"2020-05-18",blockNumber:101e5,approximateBlock:!0,title:"Uniswap V2 Launch",summary:"V2 adds ERC-20/ERC-20 pairs, flash swaps, and price oracles.",imageUrl:"https://images.ctfassets.net/oc3ca6rftwdu/6J1AgG9n8TBXjiJt5hjP6X/304b442cf5f3ddfacd9aa39c74dfc06e/featured.jpeg?w=1200&amp;h=900&amp;q=100&amp;fit=crop",era:"beacon",importance:"significant",content:"Uniswap V2 enabled direct token-to-token swaps (no ETH intermediary), flash swaps for arbitrage, and time-weighted average price (TWAP) oracles. These features made Uniswap a foundational DeFi primitive.",tags:["defi"],links:[{label:"Uniswap V2 Announcement",url:"https://blog.uniswap.org/uniswap-v2"},{label:"V2 Factory Contract",url:"https://etherscan.io/address/0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"},{label:"V2 Documentation",url:"https://docs.uniswap.org/contracts/v2/overview"}]},{id:"aave-launch",type:"application",date:"2020-01-08",blockNumber:92e5,approximateBlock:!0,title:"Aave Mainnet Launch",summary:"Aave launches its liquidity pool-based lending protocol, pioneering flash loans.",era:"istanbul",importance:"significant",content:'Aave (Finnish for "ghost") relaunched from ETHLend with a revolutionary pool-based lending model. Unlike peer-to-peer matching, users deposited into shared pools and borrowed against them. Aave also introduced flash loans — uncollateralized loans repaid within a single transaction — enabling new DeFi primitives like arbitrage and liquidation bots.',tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Aave_Logo.svg/1200px-Aave_Logo.svg.png",links:[{label:"Aave",url:"https://aave.com/"},{label:"Aave Documentation",url:"https://docs.aave.com/"},{label:"ETHLend to Aave History (Wikipedia)",url:"https://en.wikipedia.org/wiki/Aave"},{label:"The Road to $3B (Finematics)",url:"https://finematics.com/aave-explained/"}]},{id:"curve-launch",type:"application",date:"2020-01-20",blockNumber:94e5,approximateBlock:!0,title:"Curve Finance Launch",summary:"Curve launches the first AMM optimized for stablecoin swaps with minimal slippage.",imageUrl:"https://cdn.jsdelivr.net/gh/curvefi/curve-assets/branding/logo.png",era:"istanbul",importance:"significant",content:'Curve Finance launched as a specialized AMM for stablecoins and pegged assets. Its bonding curve algorithm enabled swaps between stablecoins (DAI, USDC, USDT) with far less slippage than Uniswap. Curve became critical DeFi infrastructure, later adding the CRV token and "Curve Wars" for liquidity incentives.',tags:["defi"],links:[{label:"Curve Finance",url:"https://curve.fi/"},{label:"Curve Documentation",url:"https://resources.curve.fi/"},{label:"Rise of the Home of Stablecoins",url:"https://news.curve.finance/curve-finance-the-rise-of-the-home-of-stablecoins/"},{label:"How Curve Powers Stablecoin Trading (Cyfrin)",url:"https://www.cyfrin.io/blog/what-is-curve-finance-and-how-it-powers-stablecoin-trading"}]},{id:"defi-tvl-1b",type:"milestone",date:"2020-02-06",blockNumber:94e5,approximateBlock:!0,title:"DeFi TVL Hits $1 Billion",summary:"Total value locked in DeFi protocols crosses $1 billion for the first time.",era:"istanbul",importance:"major",content:"A symbolic milestone: the value locked in DeFi protocols crossed $1 billion. MakerDAO held the majority with its DAI stablecoin system. This was still early days — within months, DeFi Summer would explode this number 10x.",tags:["tvl","defi"],links:[{label:"CoinDesk: Why DeFi's Billion-Dollar Milestone Matters",url:"https://www.coindesk.com/markets/2020/02/07/why-defis-billion-dollar-milestone-matters"},{label:"DeFiLlama Historical Data",url:"https://defillama.com/"}]},{id:"compound-governance",type:"application",date:"2020-06-15",blockNumber:103e5,approximateBlock:!0,title:"Compound COMP Token & DeFi Summer",summary:'Compound distributes COMP tokens, igniting "DeFi Summer" and yield farming mania.',era:"beacon",importance:"major",content:`Compound's COMP token distribution created a new paradigm: "liquidity mining." Users earned governance tokens for providing liquidity. This sparked DeFi Summer 2020, with total value locked (TVL) exploding from $1B to $10B+ in months.`,tags:["defi"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Compound-comp-logo.svg/1200px-Compound-comp-logo.svg.png",links:[{label:"COMP Distribution Announcement",url:"https://medium.com/compound-finance/expanding-compound-governance-ce13fcd4fe36"},{label:"Compound Site",url:"https://compound.finance/"},{label:"DeFi Summer Coverage (Coindesk)",url:"https://www.coindesk.com/markets/2020/10/14/the-defi-summer-of-2020-and-what-it-means-for-ethereum/"}]},{id:"yearn-launch",type:"application",date:"2020-07-17",blockNumber:105e5,approximateBlock:!0,title:"Yearn Finance & YFI",summary:'Andre Cronje launches Yearn, with "fair launch" of YFI token — no premine, no VCs.',era:"beacon",importance:"significant",content:"Yearn automated yield optimization strategies. Its YFI token launch with zero premine, no founder allocation, and pure community distribution became legendary. YFI went from $0 to $40,000 in weeks.",tags:["defi"],links:[{label:"Andre Cronje Announcement",url:"https://medium.com/iearn/yfi-df84573db81"},{label:"Yearn Finance",url:"https://yearn.fi/"},{label:"YFI Token",url:"https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e"},{label:"Andre on Fair Launch (Unchained)",url:"https://unchainedcrypto.com/andre-cronje-of-yearn-finance-on-yfi-and-the-fair-launch-im-lazy/"},{label:"Andre Cronje Profile (CoinDesk)",url:"https://www.coindesk.com/markets/2020/12/08/andre-cronje-defi-expressionist"}]},{id:"infinite-machine-book",type:"milestone",date:"2020-07-14",blockNumber:1045e4,approximateBlock:!0,title:'"The Infinite Machine" Published',summary:"Camila Russo's definitive history of Ethereum's founding. From idea to global platform.",era:"beacon",importance:"significant",content:`Financial journalist Camila Russo published "The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum." The book traces Ethereum from Vitalik's whitepaper through the crowdsale, The DAO hack, and the rise of DeFi. It became the definitive narrative history of Ethereum's early years and introduced the story to mainstream audiences.`,tags:["social"],imageUrl:"https://m.media-amazon.com/images/I/71-RdkfkNEL._AC_UF1000,1000_QL80_.jpg",links:[{label:"The Infinite Machine (Amazon)",url:"https://www.amazon.com/Infinite-Machine-Crypto-hackers-Building-Internet/dp/0062886142"},{label:"Camila Russo (The Defiant)",url:"https://thedefiant.io/"},{label:"Infinite Machine Movie Adaptation",url:"https://variety.com/2021/film/news/ethereum-movie-ridley-scott-infinite-machine-1235052676/"}]},{id:"defi-tvl-10b",type:"milestone",date:"2020-09-20",blockNumber:109e5,approximateBlock:!0,title:"DeFi TVL Hits $10 Billion",summary:"Total value locked crosses $10 billion — a 10x increase in just 7 months.",imageUrl:"https://iq.wiki/cdn-cgi/image/width=1200,quality=95/https://ipfs.everipedia.org/ipfs/QmScvpaYXHKV2DwrZd7nRveM3Am5v8k1Pxhvvkyt2ymNzX",era:"beacon",importance:"major",content:'DeFi Summer delivered. From $1B in February to $10B in September — a 900% increase driven by yield farming mania. Uniswap ($1.98B), MakerDAO ($1.95B), and Aave ($1.5B) led the pack. The "money legos" thesis was proving out.',tags:["tvl","defi"],links:[{label:"DeFi TVL History (IQ.wiki)",url:"https://iq.wiki/wiki/tvl"},{label:"2020: Year of DeFi (Yield App)",url:"https://yield.app/blog/a-look-back-at-2020-the-year-of-defi"},{label:"DeFiLlama",url:"https://defillama.com/"}]},{id:"art-blocks-launch",type:"application",date:"2020-11-27",blockNumber:1133e4,approximateBlock:!0,title:"Art Blocks Launch",summary:"Generative art platform launches. Chromie Squiggles kicks off on-chain art movement.",era:"beacon",importance:"significant",content:"Erick Calderon (Snowfro) launched Art Blocks, a platform for generative art stored entirely on Ethereum. His first project, Chromie Squiggles, demonstrated the concept: each mint generates a unique artwork algorithmically at the moment of purchase. The platform would explode in 2021, with projects like Fidenza, Ringers, and Autoglyphs commanding millions. Art Blocks proved blockchain could be a medium for art, not just a marketplace.",tags:["nft","social"],imageUrl:"https://media.artblocks.io/0.png",links:[{label:"Art Blocks",url:"https://www.artblocks.io/"},{label:"Chromie Squiggle",url:"https://www.artblocks.io/curated/collections/chromie-squiggle-by-snowfro"},{label:"Snowfro Interview (Edge of NFT)",url:"https://edgeofnft.com/erick-calderon-of-art-blocks-the-first-interactive-nft-generative-art-platform-and-more/"}]},{id:"beacon-launch",type:"milestone",date:"2020-12-01",blockNumber:11052984,title:"Beacon Chain Launch",summary:"Ethereum 2.0 Phase 0 launches. Proof of Stake begins on a parallel chain.",era:"beacon",importance:"major",content:"The Beacon Chain launched with 21,063 validators staking 674,000 ETH. This separate chain would run PoS consensus in parallel with mainnet PoW until The Merge.",tags:["protocol"],imageUrl:"https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/9c24c/pos-consensus-layer.png",links:[{label:"Beacon Chain Genesis",url:"https://beaconscan.com/slot/0"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2020/11/27/eth2-quick-update-no-21"},{label:"Deposit Contract",url:"https://etherscan.io/address/0x00000000219ab540356cBB839Cbe05303d7705Fa"},{label:"ethereum.org Beacon Chain",url:"https://ethereum.org/en/roadmap/beacon-chain/"}]},{id:"lido-launch",type:"application",date:"2020-12-19",blockNumber:11473e3,approximateBlock:!0,title:"Lido Liquid Staking Launch",summary:"Lido launches stETH, enabling liquid staking and unlocking staked ETH liquidity.",era:"beacon",importance:"significant",content:"Lido launched just weeks after the Beacon Chain, solving a critical problem: staked ETH was locked with no withdrawals until a future upgrade. Lido issued stETH tokens representing staked ETH, allowing users to stake while maintaining liquidity. Lido would grow to hold 30%+ of all staked ETH, becoming the largest staking provider and sparking debates about centralization.",tags:["defi","protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lido_DAO_%28LDO%29_Logo.svg/1200px-Lido_DAO_%28LDO%29_Logo.svg.png",links:[{label:"Lido Finance",url:"https://lido.fi/"},{label:"Lido Blog",url:"https://blog.lido.fi/"},{label:"stETH on Etherscan",url:"https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"},{label:"Lido Deep Dive (Coin Bureau)",url:"https://coinbureau.com/review/lido-finance-review/"}]},{id:"lido-self-limit-debate",type:"controversy",date:"2022-06-24",blockNumber:1502e4,approximateBlock:!0,title:"Lido Staking Dominance Debate",summary:"Lido approaches 33% of staked ETH. Community debates self-limiting; Lido votes against.",imageUrl:"https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F10%2Flido-staked-ether-purple.jpg&amp;w=1920&amp;q=75&amp;webp=false",era:"merge",importance:"significant",content:"As Lido approached 33% of all staked ETH — a critical threshold for consensus safety — community concern grew. Danny Ryan and others warned that concentrated stake could enable censorship or attacks. A proposal to self-limit Lido's growth was put to vote, but the community voted 99.8% against limiting. The debate highlighted tensions between protocol growth and network decentralization. Lido eventually stabilized around 28-32% as competitors emerged.",tags:["protocol","security","social"],links:[{label:"Blockworks: Centralization Debate",url:"https://blockworks.co/news/lido-centralization-debate-ethereum"},{label:"Self-Limit Vote (Decrypt)",url:"https://decrypt.co/104064/lido-community-signals-intent-keep-ethereum-staking-uncapped"},{label:"CoinDesk Analysis",url:"https://www.coindesk.com/consensus-magazine/2023/09/28/does-lido-control-too-much-liquid-staking"}]},{id:"berlin",type:"hard_fork",date:"2021-04-15",blockNumber:12244e3,title:"Berlin",summary:"Gas cost optimizations for certain transactions types.",imageUrl:"https://blog.ethereum.org/images/posts/upload_dcb0937c8bd662aae368f066f588abde.jpg",era:"beacon",importance:"significant",relatedEips:[2565,2718,2929,2930],content:"Berlin introduced typed transaction envelopes (EIP-2718), which would enable EIP-1559 in London. It also adjusted gas costs for state access operations.",tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/12244000"},{label:"Ethereum Blog Announcement",url:"https://blog.ethereum.org/2021/03/08/ethereum-berlin-upgrade-announcement"},{label:"EIP-2718: Typed Transactions",url:"https://eips.ethereum.org/EIPS/eip-2718"},{label:"AllCoreDevs #104 (Berlin Planning)",url:"https://github.com/ethereum/pm/issues/228"},{label:"AllCoreDevs #107 (Berlin Finalization)",url:"https://github.com/ethereum/pm/issues/242"}]},{id:"london",type:"hard_fork",date:"2021-08-05",blockNumber:12965e3,title:"London (EIP-1559)",summary:"Revolutionary fee market change. Base fee burned, making ETH deflationary under high demand.",era:"beacon",importance:"major",relatedEips:[1559,3198,3529,3541,3554],content:"EIP-1559 was one of Ethereum's most significant economic changes. Instead of a pure auction, transactions now pay a base fee (burned) plus a priority tip. This made gas prices more predictable and introduced ETH burning.",tags:["protocol"],imageUrl:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",links:[{label:"EIP-1559 Spec",url:"https://eips.ethereum.org/EIPS/eip-1559"},{label:"London Block",url:"https://etherscan.io/block/12965000"},{label:"ultrasound.money (burn tracker)",url:"https://ultrasound.money/"},{label:"Tim Beiko Announcement",url:"https://twitter.com/TimBeiko/status/1423307662159888388"},{label:"AllCoreDevs #111 (Timeline Discussion)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20111.md"},{label:"AllCoreDevs #108 (EIP-1559 Inclusion)",url:"https://github.com/ethereum/pm/issues/254"}]},{id:"optimism-launch",type:"scaling",date:"2021-01-16",blockNumber:12686786,title:"Optimism Mainnet Alpha",summary:"First optimistic rollup launches on mainnet, bringing practical L2 scaling.",era:"beacon",importance:"major",content:"Optimism launched the first optimistic rollup on mainnet, demonstrating that rollups could provide 10-100x cost reduction while maintaining Ethereum's security guarantees.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Optimism_Logo.svg/1200px-Optimism_Logo.svg.png",links:[{label:"L2Beat: Optimism",url:"https://l2beat.com/scaling/projects/optimism"},{label:"Optimism Official",url:"https://optimism.io/"},{label:"OP Mainnet Explorer",url:"https://optimistic.etherscan.io/"}]},{id:"arbitrum-launch",type:"scaling",date:"2021-08-31",blockNumber:13133428,title:"Arbitrum One Launch",summary:"Arbitrum launches, becoming the largest L2 by TVL.",era:"beacon",importance:"major",content:"Arbitrum One launched as an optimistic rollup with a focus on EVM compatibility. It quickly grew to become the largest L2 by total value locked, attracting major DeFi protocols.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Arbitrum_Logo.svg/1200px-Arbitrum_Logo.svg.png",links:[{label:"L2Beat: Arbitrum",url:"https://l2beat.com/scaling/projects/arbitrum"},{label:"Arbitrum Official",url:"https://arbitrum.io/"},{label:"Arbiscan Explorer",url:"https://arbiscan.io/"}]},{id:"defi-tvl-100b",type:"milestone",date:"2021-10-28",blockNumber:135e5,approximateBlock:!0,title:"DeFi TVL Hits $100 Billion",summary:"Total value locked crosses $100 billion for the first time.",era:"beacon",importance:"major",content:"A landmark moment: DeFi TVL crossed $100 billion — a 100x increase from just 20 months earlier. The growth was driven by yield farming, NFT mania, and increasing institutional interest. Ethereum was no longer an experiment; it was a financial system.",tags:["tvl","defi"],links:[{label:"DeFiLlama Historical",url:"https://defillama.com/"},{label:"Forbes: Where Does DeFi Go From Here?",url:"https://www.forbes.com/sites/lawrencewintermeyer/2021/05/20/after-growing-88x-in-a-year-where-does-defi-go-from-here/"}]},{id:"defi-tvl-ath",type:"milestone",date:"2021-11-09",blockNumber:136e5,approximateBlock:!0,title:"DeFi TVL All-Time High: ~$177B",summary:"DeFi TVL peaks at approximately $177 billion, coinciding with Bitcoin's all-time high.",era:"beacon",importance:"major",content:"DeFi reached its all-time high TVL of approximately $177 billion, coinciding with the broader crypto market peak. Bitcoin hit its ATH around the same time. The subsequent crash would see TVL drop over 70%, but the infrastructure built during this period would prove durable.",tags:["tvl","defi"],links:[{label:"DeFiLlama",url:"https://defillama.com/"},{label:"DeFi TVL Approaches ATH (Currency Analytics)",url:"https://thecurrencyanalytics.com/bitcoin/defi-total-value-locked-approaches-all-time-high-of-2021-199192"}]},{id:"arrow-glacier",type:"hard_fork",date:"2021-12-09",blockNumber:13773e3,title:"Arrow Glacier",summary:"Delayed difficulty bomb to June 2022.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"beacon",importance:"minor",relatedEips:[4345],tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/13773000"},{label:"EIP-4345",url:"https://eips.ethereum.org/EIPS/eip-4345"},{label:"AllCoreDevs #124 (Arrow Glacier)",url:"https://github.com/ethereum/pm/issues/411"}]},{id:"vitalik-endgame",type:"research",date:"2021-12-06",blockNumber:1375e4,approximateBlock:!0,title:"Endgame",summary:"Vitalik describes the inevitable convergence of all blockchains toward similar architectures.",imageUrl:"http://vitalik.ca/images/icon.png",era:"beacon",importance:"significant",content:'In "Endgame," Vitalik argued that all successful blockchains converge toward similar architectures: centralized block production with trustless and highly-decentralized verification. Whether starting from monolithic chains or rollup-centric designs, the end state looks remarkably similar. Key insight: "We can have our cake and eat it too: decentralized and trustless block validation, but still with scale." This essay was prescient about the L2 ecosystem that would flourish.',tags:["research","scaling"],sourceUrl:"https://vitalik.eth.limo/general/2021/12/06/endgame.html",links:[{label:"Endgame (vitalik.eth.limo)",url:"https://vitalik.eth.limo/general/2021/12/06/endgame.html"}]},{id:"gray-glacier",type:"hard_fork",date:"2022-06-30",blockNumber:1505e4,title:"Gray Glacier",summary:"Final difficulty bomb delay before The Merge.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"merge",importance:"minor",relatedEips:[5133],tags:["protocol"],links:[{label:"Etherscan Block",url:"https://etherscan.io/block/15050000"},{label:"EIP-5133",url:"https://eips.ethereum.org/EIPS/eip-5133"},{label:"AllCoreDevs #141 (Gray Glacier Updates)",url:"https://github.com/ethereum/pm/issues/551"},{label:"AllCoreDevs #142 (Post-fork Review)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20142.md"}]},{id:"the-merge",type:"milestone",date:"2022-09-15",blockNumber:15537394,title:"The Merge",summary:"Ethereum transitions from Proof of Work to Proof of Stake, reducing energy use by 99.95%.",era:"merge",importance:"major",content:"The Merge was Ethereum's most significant upgrade, transitioning from energy-intensive Proof of Work to Proof of Stake. The execution layer (mainnet) merged with the Beacon Chain consensus layer. ETH issuance dropped ~90% and energy consumption dropped 99.95%.",tags:["protocol"],imageUrl:"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",links:[{label:"Last PoW Block",url:"https://etherscan.io/block/15537393"},{label:"First PoS Block",url:"https://etherscan.io/block/15537394"},{label:"ethereum.org Merge Page",url:"https://ethereum.org/en/roadmap/merge/"},{label:"Vitalik's Merge Thread",url:"https://twitter.com/VitalikButerin/status/1570306185391378434"},{label:"AllCoreDevs #106 (Early Merge Discussion)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20106.md"},{label:"AllCoreDevs #122 (TTD Finalization)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20122.md"},{label:"AllCoreDevs #140 (Pre-Merge Testing)",url:"https://github.com/ethereum/pm/blob/master/AllCoreDevs-EL-Meetings/Meeting%20140.md"}]},{id:"ftx-collapse",type:"controversy",date:"2022-11-11",blockNumber:1594e4,approximateBlock:!0,title:"FTX Collapse",summary:'Centralized exchange FTX collapses. DeFi protocols continue working, highlighting "not your keys, not your coins."',era:"merge",importance:"major",content:"FTX, the second-largest crypto exchange, collapsed within days due to fraud and mismanagement of customer funds. ETH dropped 20%+ and billions were lost. However, DeFi protocols like Uniswap, Aave, and MakerDAO continued operating perfectly — smart contracts don't have CEOs who can steal funds. The crisis drove renewed interest in self-custody and decentralized alternatives.",tags:["security","defi","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/FTX_logo.svg/1200px-FTX_logo.svg.png",links:[{label:"NerdWallet Timeline",url:"https://www.nerdwallet.com/article/investing/ftx-crash"},{label:"DeFi Pulse (TVL during crash)",url:"https://www.defipulse.com/"}]},{id:"eip-4337-launch",type:"milestone",date:"2023-03-01",blockNumber:167e5,approximateBlock:!0,title:"EIP-4337 Account Abstraction",summary:"Account abstraction launches, enabling smart contract wallets without protocol changes.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"shanghai",importance:"major",relatedEips:[4337],content:"EIP-4337 introduced account abstraction to Ethereum without requiring protocol changes. It enables smart contract wallets with features like social recovery, gas sponsorship, and batched transactions. Over 26 million smart wallets have been created using this standard, dramatically improving user experience.",tags:["protocol","adoption"],links:[{label:"EIP-4337",url:"https://eips.ethereum.org/EIPS/eip-4337"},{label:"ethereum.org Account Abstraction",url:"https://ethereum.org/roadmap/account-abstraction/"},{label:"Alchemy Explainer",url:"https://www.alchemy.com/overviews/what-is-account-abstraction"}]},{id:"shapella",type:"hard_fork",date:"2023-04-12",blockNumber:17034870,title:"Shanghai/Capella (Shapella)",summary:"Enables staking withdrawals. Validators can finally exit and withdraw staked ETH.",era:"shanghai",importance:"major",relatedEips:[3651,3855,3860,4895],content:"Shapella finally enabled staking withdrawals, completing the PoS transition. EIP-4895 allowed validators to withdraw their staked ETH and rewards. Contrary to fears, this didn't cause a mass exodus.",tags:["protocol"],imageUrl:"https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&q=80",links:[{label:"Forkcast: Shanghai",url:"https://forkcast.org/"},{label:"Etherscan Block",url:"https://etherscan.io/block/17034870"},{label:"ethereum.org Withdrawals",url:"https://ethereum.org/en/staking/withdrawals/"},{label:"EIP-4895 (Withdrawals)",url:"https://eips.ethereum.org/EIPS/eip-4895"},{label:"AllCoreDevs Meetings",url:"https://github.com/ethereum/pm/tree/master/AllCoreDevs-EL-Meetings"}]},{id:"vitalik-three-transitions",type:"research",date:"2023-06-09",blockNumber:1745e4,approximateBlock:!0,title:"The Three Transitions",summary:"Vitalik outlines the three major transitions Ethereum must complete: L2 scaling, wallet security, and privacy.",imageUrl:"http://vitalik.ca/images/icon.png",era:"shanghai",importance:"significant",content:`Vitalik argued that Ethereum needs to undergo three major transitions simultaneously: (1) L2 scaling — everyone moving to rollups, (2) wallet security — moving to smart contract wallets with social recovery, and (3) privacy — having privacy-preserving solutions for transfers and identity. Key insight: "Failure to address any one of these areas could severely limit Ethereum's future." This essay became a roadmap for ecosystem builders.`,tags:["research","scaling","social"],sourceUrl:"https://vitalik.eth.limo/general/2023/06/09/three_transitions.html",links:[{label:"The Three Transitions",url:"https://vitalik.eth.limo/general/2023/06/09/three_transitions.html"}]},{id:"base-launch",type:"scaling",date:"2023-08-09",blockNumber:1788e4,title:"Base Mainnet Launch",summary:"Coinbase launches Base, an OP Stack L2, bringing crypto mainstream exposure.",era:"shanghai",importance:"major",content:"Base, built on Optimism's OP Stack, marked a major exchange entering L2s. As Coinbase's onchain platform, it brought mainstream exposure and signaled institutional acceptance of Ethereum's rollup-centric future.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Base_%28blockchain%29_logo.svg/1200px-Base_%28blockchain%29_logo.svg.png",links:[{label:"L2Beat: Base",url:"https://l2beat.com/scaling/projects/base"},{label:"Base Official",url:"https://base.org/"},{label:"BaseScan Explorer",url:"https://basescan.org/"}]},{id:"zksync-era",type:"scaling",date:"2023-03-24",blockNumber:1689e4,title:"zkSync Era Launch",summary:"First zkEVM mainnet, bringing validity proofs to EVM compatibility.",era:"shanghai",importance:"major",content:"zkSync Era launched the first zkEVM — a ZK rollup with full EVM compatibility. Unlike optimistic rollups, ZK rollups provide instant finality through validity proofs. This was a major milestone for ZK technology.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/ZkSync_logo.svg/1200px-ZkSync_logo.svg.png",links:[{label:"L2Beat: zkSync Era",url:"https://l2beat.com/scaling/projects/zksync-era"},{label:"zkSync Official",url:"https://zksync.io/"},{label:"zkSync Explorer",url:"https://explorer.zksync.io/"}]},{id:"linea-launch",type:"scaling",date:"2023-07-18",blockNumber:1772e4,title:"Linea Mainnet Launch",summary:"ConsenSys launches Linea, a zkEVM rollup with focus on developer experience.",imageUrl:"https://l2beat.com/static/meta-images/scaling/projects/linea/opengraph-image.a8cbda82.png",era:"shanghai",importance:"significant",content:"Linea, developed by ConsenSys, launched as a Type 2 zkEVM rollup. It emphasized developer experience and seamless migration from Ethereum mainnet, leveraging ConsenSys's existing tooling ecosystem including MetaMask and Infura integrations.",tags:["scaling"],links:[{label:"L2Beat: Linea",url:"https://l2beat.com/scaling/projects/linea"},{label:"Linea Official",url:"https://linea.build/"},{label:"Linea Explorer",url:"https://lineascan.build/"}]},{id:"scroll-launch",type:"scaling",date:"2023-10-17",blockNumber:184e5,title:"Scroll Mainnet Launch",summary:"Scroll launches its zkEVM, focused on bytecode-level EVM equivalence.",imageUrl:"https://l2beat.com/static/meta-images/scaling/projects/scroll/opengraph-image.7734f58e.png",era:"shanghai",importance:"significant",content:"Scroll launched as a zkEVM rollup with a focus on bytecode-level EVM equivalence, meaning existing Ethereum contracts can deploy without any modifications. This approach prioritized maximum compatibility over performance optimizations.",tags:["scaling"],links:[{label:"L2Beat: Scroll",url:"https://l2beat.com/scaling/projects/scroll"},{label:"Scroll Official",url:"https://scroll.io/"},{label:"Scroll Explorer",url:"https://scrollscan.com/"}]},{id:"dencun",type:"hard_fork",date:"2024-03-13",blockNumber:19426587,title:"Cancun-Deneb (Dencun)",summary:"Proto-Danksharding (EIP-4844) introduces blob transactions, reducing L2 costs by 10-100x.",era:"cancun",importance:"major",relatedEips:[4844,1153,4788,5656,6780,7044,7045,7514,7516],content:'EIP-4844 (Proto-Danksharding) introduced "blob" transactions—a new way for L2s to post data to Ethereum at dramatically lower cost. L2 transaction fees dropped from dollars to cents. This was the first step toward full Danksharding.',tags:["protocol","scaling","blobs"],imageUrl:"https://ethereum.org/static/0657a471c15f9a31a68f5a1dbe0d40c1/4dfdf/docking.png",links:[{label:"Forkcast: Dencun",url:"https://forkcast.org/"},{label:"EIP-4844 Spec",url:"https://eips.ethereum.org/EIPS/eip-4844"},{label:"Etherscan Block",url:"https://etherscan.io/block/19426587"},{label:"Blob Explorer",url:"https://blobscan.com/"},{label:"AllCoreDevs #167 (Dencun Planning)",url:"https://github.com/ethereum/pm/issues/836"},{label:"Dencun Devnet Specs",url:"https://github.com/ethereum/execution-specs/tree/master/network-upgrades/mainnet-upgrades/cancun.md"}]},{id:"blobs-first-million",type:"milestone",date:"2024-04-15",blockNumber:1966e4,approximateBlock:!0,title:"First Million Blobs",summary:"Ethereum processes its first 1 million blob transactions, just one month after Dencun.",era:"cancun",importance:"significant",content:"Within a month of Dencun's launch, Ethereum had processed over 1 million blob transactions. L2s like Base, Arbitrum, and Optimism rapidly adopted blobs, dramatically reducing their data costs. The blob market was working as intended.",tags:["blobs","scaling"],links:[{label:"Blobscan",url:"https://blobscan.com/"},{label:"Dune: Blob Analytics",url:"https://dune.com/0xRob/blobs"}]},{id:"optimism-stage-1",type:"scaling",date:"2024-06-10",blockNumber:20065e3,approximateBlock:!0,title:"Optimism Reaches Stage 1",summary:"OP Mainnet deploys Cannon fault proofs, becoming the first major L2 to reach Stage 1 decentralization.",era:"cancun",importance:"major",content:"Optimism deployed their Cannon fault proof system, enabling permissionless challenging of invalid state roots. This moved OP Mainnet to Stage 1 on L2Beat's framework — meaning it has working fraud proofs, a Security Council for emergencies, and meaningful decentralization. A major milestone in the journey toward fully trustless L2s.",tags:["scaling","protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Optimism_Logo.svg/1200px-Optimism_Logo.svg.png",links:[{label:"L2Beat: Optimism Stage 1",url:"https://l2beat.com/scaling/projects/optimism"},{label:"Cannon Fault Proofs",url:"https://docs.optimism.io/stack/protocol/fault-proofs/cannon"},{label:"Cointelegraph Coverage",url:"https://cointelegraph.com/news/vitalik-eth-l2s-stage-1-scalability-security"}]},{id:"blobs-saturation",type:"milestone",date:"2024-10-01",blockNumber:2085e4,approximateBlock:!0,title:"Blob Space Saturation Begins",summary:"L2 growth fills available blob space, temporarily increasing L2 fees and driving demand for more blobs.",imageUrl:"https://blobs.money/social.jpg",era:"cancun",importance:"significant",content:"As L2 adoption grew, blob space began to saturate. Blocks regularly hit the 6-blob target, and the blob fee market kicked in. This validated the design and created urgency for Pectra's blob capacity increase.",tags:["blobs","scaling"],links:[{label:"Blob Saturation (blobs.money)",url:"https://blobs.money/"},{label:"Blobscan",url:"https://blobscan.com/"}]},{id:"arbitrum-stage-1",type:"scaling",date:"2025-02-12",blockNumber:21815e3,approximateBlock:!0,title:"Arbitrum Reaches Stage 1 (BoLD)",summary:"Arbitrum deploys BoLD dispute protocol on mainnet, enabling permissionless validation and reaching Stage 1.",era:"pectra",importance:"major",content:"Offchain Labs deployed BoLD (Bounded Liquidity Delay) — a dispute protocol enabling permissionless validation on Arbitrum One and Nova. Anyone can now participate in securing the network by challenging invalid state assertions. This moved Arbitrum to Stage 1 on L2Beat's framework, joining Optimism and Base in having live fraud proof systems.",tags:["scaling","protocol"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Arbitrum_Logo.svg/1200px-Arbitrum_Logo.svg.png",links:[{label:"L2Beat: Arbitrum Stage 1",url:"https://l2beat.com/scaling/projects/arbitrum"},{label:"BoLD Announcement",url:"https://www.theblock.co/post/340278/offchain-labs-releases-arbitrum-bold-on-mainnet-for-permissionless-validation"},{label:"BoLD Documentation",url:"https://docs.arbitrum.io/how-arbitrum-works/bold/gentle-introduction"}]},{id:"ens-launch",type:"application",date:"2017-05-04",blockNumber:3648571,title:"ENS Launch",summary:"Ethereum Name Service launches, bringing human-readable names to Ethereum addresses.",era:"metropolis",importance:"major",content:"ENS (Ethereum Name Service) allowed users to register .eth domains that resolve to Ethereum addresses. Instead of 0x123...abc, you could use vitalik.eth. This became the identity layer for Ethereum — the first step toward web3 identity.",tags:["defi","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Ens-logo.png",links:[{label:"ENS Official Site",url:"https://ens.domains/"},{label:"ENS Announcement",url:"https://medium.com/the-ethereum-name-service/announcing-the-ethereum-name-service-relaunch-date-4390af6dd9a2"},{label:"ENS Docs",url:"https://docs.ens.domains/"},{label:"vitalik.eth Lookup",url:"https://app.ens.domains/vitalik.eth"}]},{id:"nft-summer",type:"application",date:"2021-03-11",blockNumber:1202e4,approximateBlock:!0,title:"Beeple NFT Sells for $69M",summary:"Beeple's 'Everydays' sells at Christie's for $69M, igniting the NFT boom.",era:"beacon",importance:"major",content:"Digital artist Beeple sold an NFT at Christie's auction house for $69.3 million — the third-highest price for a living artist. This mainstream moment brought NFTs into cultural consciousness and sparked a speculative frenzy.",tags:["nft","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/0/0f/Beeple%27s_Everydays_-_The_First_5000_Days.jpg",links:[{label:"Christie's Auction Page",url:"https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924"},{label:"NYT Coverage",url:"https://www.nytimes.com/2021/03/11/arts/design/nft-auction-christies-beeple.html"},{label:"Beeple's Site",url:"https://www.beeple-crap.com/"},{label:"The Artwork (IPFS)",url:"https://ipfsgateway.makersplace.com/ipfs/QmXkxpwAHCtDXbbZHUwqtFucG1RMS6T87vi1CdvadfL7qA"}]},{id:"bayc-launch",type:"application",date:"2021-04-23",blockNumber:123e5,approximateBlock:!0,title:"Bored Ape Yacht Club Launches",summary:"10,000 apes mint for 0.08 ETH each. BAYC becomes the face of NFT culture.",era:"beacon",importance:"significant",content:"Yuga Labs launched Bored Ape Yacht Club — 10,000 algorithmically generated ape profile pictures. Initially priced at just 0.08 ETH (~$190), sales started slow but exploded. BAYC became the poster child for NFTs, with celebrity owners, exclusive community benefits, and floor prices reaching 150+ ETH. It spawned the Mutant Apes, Otherside metaverse, and the ApeCoin token.",tags:["nft","social"],imageUrl:"https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Bored_Ape_7537.png/220px-Bored_Ape_7537.png",links:[{label:"BAYC Official",url:"https://boredapeyachtclub.com/"},{label:"NFT Now Guide",url:"https://nftnow.com/guides/bored-ape-yacht-club-guide/"}]},{id:"opensea-peak",type:"application",date:"2022-01-01",blockNumber:139e5,approximateBlock:!0,title:"OpenSea Hits $5B Monthly Volume",summary:"NFT marketplace OpenSea reaches peak trading volume during the NFT boom.",imageUrl:"https://static.seadn.io/og/generic.jpg",era:"beacon",importance:"significant",content:"OpenSea, the dominant NFT marketplace, hit $5 billion in monthly trading volume. Bored Apes, CryptoPunks, and countless PFP projects traded hands. The NFT market would later cool significantly, but this peak showed the cultural moment Ethereum enabled.",tags:["nft"],links:[{label:"OpenSea",url:"https://opensea.io/"},{label:"Dune Analytics: OpenSea",url:"https://dune.com/queries/3469/6913"},{label:"The Verge Coverage",url:"https://www.theverge.com/2022/1/20/22892717/opensea-nft-marketplace-3-billion-monthly-volume"}]},{id:"nft-nyc-2019",type:"milestone",date:"2019-02-20",blockNumber:723e4,approximateBlock:!0,title:"NFT.NYC 2019 (First Edition)",summary:"The first NFT-focused conference launches in New York City with 500 attendees.",imageUrl:"https://www.nft.nyc/hubfs/nftnyc2021-eventbrite-header.png",era:"metropolis",importance:"significant",content:"The inaugural NFT.NYC conference brought together early NFT enthusiasts, artists, and builders in Times Square. With about 500 attendees, it was a small but passionate community. CryptoKitties had launched just over a year prior, and the NFT ecosystem was still nascent.",tags:["nft","social"],links:[{label:"NFT.NYC",url:"https://www.nft.nyc/"},{label:"NFT.NYC History (IQ.wiki)",url:"https://iq.wiki/wiki/nft-nyc"}]},{id:"nft-nyc-2021",type:"milestone",date:"2021-11-02",blockNumber:1354e4,approximateBlock:!0,title:"NFT.NYC 2021",summary:"NFT.NYC explodes to 5,000+ attendees as NFT mania reaches peak hype.",imageUrl:"https://www.nft.nyc/hubfs/nftnyc2021-eventbrite-header.png",era:"beacon",importance:"major",content:'"The World Has Woken Up to NFTs" — NFT.NYC 2021 was held across multiple Times Square venues during the peak of NFT mania. Bored Apes, celebrity NFTs, and speculation were everywhere. The contrast from 500 attendees in 2019 to 5,000+ captured the explosive growth.',tags:["nft","social"],links:[{label:"NFT.NYC",url:"https://www.nft.nyc/"},{label:"NFT Culture Coverage",url:"https://www.nftculture.com/nft-events/nft-event-nft-nyc/"}]},{id:"nft-nyc-2022",type:"milestone",date:"2022-06-20",blockNumber:15e6,approximateBlock:!0,title:"NFT.NYC 2022",summary:"15,000+ attendees as NFT.NYC becomes the largest NFT conference in the world.",imageUrl:"https://www.nft.nyc/hubfs/nftnyc2021-eventbrite-header.png",era:"merge",importance:"significant",content:"NFT.NYC 2022 drew over 15,000 attendees, cementing it as the premier NFT event. Despite market cooling, the conference showed the cultural staying power of NFTs beyond speculation — art, music, gaming, and identity use cases took center stage.",tags:["nft","social"],links:[{label:"NFT.NYC",url:"https://www.nft.nyc/"}]},{id:"uniswap-v3",type:"application",date:"2021-05-05",blockNumber:124e5,approximateBlock:!0,title:"Uniswap V3 Launch",summary:"Concentrated liquidity revolutionizes AMM capital efficiency.",imageUrl:"https://images.ctfassets.net/oc3ca6rftwdu/jlNDV0zqOw99wMnaOzdeT/4e6838438d905ccd05e56b4ecdecee7a/banner__1_.png?w=1200&amp;h=900&amp;q=100&amp;fit=crop",era:"beacon",importance:"major",content:"Uniswap V3 introduced concentrated liquidity — LPs could provide liquidity in specific price ranges, dramatically improving capital efficiency. This made Uniswap competitive with centralized exchange spreads for major pairs.",tags:["defi"],links:[{label:"Uniswap V3 Announcement",url:"https://blog.uniswap.org/uniswap-v3"},{label:"V3 Factory Contract",url:"https://etherscan.io/address/0x1F98431c8aD98523631AE4a59f267346ea31F984"},{label:"V3 Documentation",url:"https://docs.uniswap.org/contracts/v3/overview"}]},{id:"parity-wallet-hack",type:"controversy",date:"2017-11-06",blockNumber:4501969,title:"Parity Wallet Freeze",summary:'A user accidentally "kills" the Parity multisig library, freezing $150M in ETH forever.',era:"metropolis",importance:"major",content:"A developer accidentally called a function that made the Parity multisig wallet library self-destruct, permanently freezing ~$150M worth of ETH. The community debated whether to hard fork to recover funds (they didn't). The incident highlighted smart contract risks.",tags:["security"],links:[{label:"Parity Postmortem",url:"https://www.parity.io/blog/a-postmortem-on-the-parity-multi-sig-library-self-destruct/"},{label:"devops199 Transaction",url:"https://etherscan.io/tx/0x05f71e1b2cb4f03e547739db15d080fd30c989eda04d37ce6264c5686f0c8c29"},{label:"EIP-999 (rejected recovery)",url:"https://eips.ethereum.org/EIPS/eip-999"}]},{id:"rollup-centric-roadmap",type:"research",date:"2020-10-02",blockNumber:1095e4,approximateBlock:!0,title:"Rollup-Centric Roadmap Announced",summary:"Vitalik announces Ethereum is pivoting to a rollup-centric future for scaling.",imageUrl:"https://ethereum-magicians.org/uploads/default/original/2X/e/e5bb6bb58438e9301c987ec778ccce164c4ed3ee.png",era:"beacon",importance:"major",content:`In a pivotal blog post, Vitalik announced that Ethereum's scaling strategy would center on rollups rather than L1 sharding. "The Ethereum ecosystem is likely to be all-in on rollups as a scaling strategy for the near and mid-term future." This reshaped the entire roadmap.`,tags:["research","scaling","social"],sourceUrl:"https://vitalik.eth.limo/general/2020/10/02/scaling.html",links:[{label:"Rollup-Centric Roadmap (Vitalik)",url:"https://vitalik.eth.limo/general/2020/10/02/scaling.html"},{label:"Ethereum Magicians Discussion",url:"https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698"}]},{id:"devcon-1",type:"milestone",date:"2015-11-09",blockNumber:51e4,approximateBlock:!0,title:"DevCon 1 (London)",summary:"First post-launch DevCon. Community celebrates successful mainnet.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"frontier",importance:"significant",content:"Held just months after Frontier launch, DevCon 1 in London was a celebration and planning session for Ethereum's future.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=1"}]},{id:"devcon-2",type:"milestone",date:"2016-09-19",blockNumber:228e4,approximateBlock:!0,title:"DevCon 2 (Shanghai)",summary:"Post-DAO fork DevCon. Community rebuilds after the crisis.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"homestead",importance:"significant",content:"DevCon 2 in Shanghai was held months after the DAO fork controversy. The community came together to chart Ethereum's path forward, focusing on scalability research.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=2"}]},{id:"devcon-3",type:"milestone",date:"2017-11-01",blockNumber:448e4,approximateBlock:!0,title:"DevCon 3 (Cancún)",summary:"Peak ICO era. Ethereum ecosystem explodes in size and ambition.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"metropolis",importance:"significant",content:"DevCon 3 coincided with the ICO boom. Thousands attended as Ethereum became the platform for token launches. Vitalik presented early scaling research.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=3"}]},{id:"devcon-4",type:"milestone",date:"2018-10-30",blockNumber:663e4,approximateBlock:!0,title:"DevCon 4 (Prague)",summary:"Bear market DevCon. Focus shifts to building infrastructure.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"metropolis",importance:"significant",content:"After the 2018 crypto crash, DevCon 4 in Prague was more subdued but focused. Developers doubled down on infrastructure: ETH 2.0 research, layer 2 solutions, and developer tooling.",tags:["social"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=4"}]},{id:"devcon-5",type:"milestone",date:"2019-10-08",blockNumber:87e5,approximateBlock:!0,title:"DevCon 5 (Osaka)",summary:"DeFi emerges. Uniswap, MakerDAO, and composability take center stage.",imageUrl:"https://archive.devcon.org/archive-social.png",era:"istanbul",importance:"significant",content:'DevCon 5 in Osaka showcased the emerging DeFi ecosystem. Talks on Uniswap, MakerDAO, and "money legos" composability hinted at the DeFi summer to come.',tags:["social","defi"],links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=5"}]},{id:"devcon-6",type:"milestone",date:"2022-10-11",blockNumber:1572e4,approximateBlock:!0,title:"DevCon 6 (Bogotá)",summary:"Post-Merge celebration. First DevCon after COVID and the transition to PoS.",era:"merge",importance:"major",content:"DevCon 6 in Bogotá was a triumphant return after COVID and The Merge. The community celebrated Ethereum's successful transition to Proof of Stake and looked ahead to scaling with rollups.",tags:["social"],imageUrl:"https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&q=80",links:[{label:"DevCon Archive",url:"https://archive.devcon.org/archive/watch?edition=6"},{label:"DevCon 6 Website",url:"https://devcon.org/en/"}]},{id:"devcon-7",type:"milestone",date:"2024-11-12",blockNumber:2115e4,approximateBlock:!0,title:"DevCon 7 (Bangkok)",summary:"Southeast Asia DevCon. Focus on global adoption and L2 ecosystem.",imageUrl:"https://www.devcon.org/assets/images/og-india.jpg",era:"cancun",importance:"major",content:"DevCon 7 brought the Ethereum community to Bangkok, focusing on global adoption, the thriving L2 ecosystem post-Dencun, and Ethereum's role in emerging markets.",tags:["social"],links:[{label:"DevCon 7 Website",url:"https://devcon.org/"}]},{id:"pectra",type:"hard_fork",date:"2025-05-07",blockNumber:22045e3,title:"Pectra Upgrade",summary:"Major hard fork combining Prague (execution) and Electra (consensus). Introduces smart accounts, validator improvements, and increased blob capacity.",imageUrl:"https://eips.ethereum.org/assets/images/eip-og-image.png",era:"pectra",importance:"major",relatedEips:[7702,7251,7002,6110,2537,2935,7685,7691,7623,7840],content:`Pectra was the most significant Ethereum upgrade since The Merge. Key improvements include:
- EIP-7702: Smart accounts for EOAs (externally owned accounts can delegate to smart contracts)
- EIP-7251: Increased max effective balance for validators (from 32 to 2048 ETH)
- EIP-7002: Execution layer triggerable exits
- EIP-7691: Doubled blob capacity (6→12 blobs per block)
This upgrade marked a major step toward account abstraction and improved L2 scalability.`,tags:["protocol","scaling"],links:[{label:"Pectra Announcement",url:"https://blog.ethereum.org/2025/05/07/pectra-mainnet"},{label:"EIP-7702 Spec",url:"https://eips.ethereum.org/EIPS/eip-7702"},{label:"Forkcast: Pectra",url:"https://forkcast.org/"}]},{id:"devconnect-amsterdam",type:"milestone",date:"2022-04-18",blockNumber:1461e4,approximateBlock:!0,title:"DevConnect Amsterdam",summary:"First DevConnect event. Week-long gathering of Ethereum builders in Amsterdam.",imageUrl:"https://devconnect.org/og-argentina.png?reset=1",era:"merge",importance:"significant",content:"DevConnect Amsterdam was the inaugural DevConnect, a new format from the Ethereum Foundation. Unlike DevCon's single conference, DevConnect was a week of independent events, workshops, and hackathons across the city. Topics included The Merge preparation, L2 scaling, and MEV research. The event marked a shift toward more modular, community-driven gatherings.",tags:["social"],links:[{label:"DevConnect Website",url:"https://devconnect.org/"},{label:"Recap Blog",url:"https://blog.ethereum.org/2022/05/12/devconnect-amsterdam-recap"}]},{id:"devconnect-istanbul",type:"milestone",date:"2023-11-13",blockNumber:1856e4,approximateBlock:!0,title:"DevConnect Istanbul",summary:"Second DevConnect event. 10,000+ attendees gather in Istanbul to discuss Ethereum's future.",era:"shanghai",importance:"significant",content:"DevConnect Istanbul brought the Ethereum community to the crossroads of Europe and Asia. With over 10,000 attendees, the week featured discussions on proto-danksharding (EIP-4844), account abstraction, and the growing L2 ecosystem. The city's historic venues hosted talks on Ethereum's roadmap, with Dencun looming on the horizon.",tags:["social"],links:[{label:"DevConnect Website",url:"https://devconnect.org/"},{label:"Ethereum Foundation Recap",url:"https://blog.ethereum.org/2023/11/28/devconnect-ist-recap"}]},{id:"devconnect-arg",type:"milestone",date:"2025-11-17",title:"DevConnect Argentina",summary:"First Ethereum World's Fair at La Rural in Buenos Aires. 14,000+ attendees from 130+ countries.",era:"pectra",importance:"major",content:"DevConnect Argentina was the largest DevConnect yet, featuring the first-ever Ethereum World's Fair. Over 14,000 attendees gathered at La Rural in Palermo, Buenos Aires. Eight dedicated districts covered DeFi, Privacy, L2s, Decentralized Social, Hardware & Wallets, AI, Gaming, and Art. More than 500 community events took place across the city.",tags:["social"],links:[{label:"DevConnect Website",url:"https://devconnect.org/"}]},{id:"tornado-cash-sanctions",type:"controversy",date:"2022-08-08",blockNumber:153e5,approximateBlock:!0,title:"Tornado Cash Sanctioned",summary:"US Treasury sanctions Tornado Cash smart contracts, sparking debate about blockchain censorship.",era:"merge",importance:"major",content:'OFAC sanctioned Tornado Cash, a privacy-preserving mixer protocol on Ethereum, citing its use by North Korean hackers to launder stolen funds. This unprecedented sanctioning of smart contract addresses (not just people) raised fundamental questions: Can code be sanctioned? Must validators censor transactions? The aftermath saw block builders filtering Tornado Cash transactions, with MEV Watch tracking "OFAC-compliant" vs neutral blocks. The developer Alexey Pertsev was arrested in the Netherlands. Sanctions were eventually lifted in March 2025 after legal challenges.',tags:["security","protocol"],imageUrl:"https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80",links:[{label:"Treasury Press Release",url:"https://home.treasury.gov/news/press-releases/jy0916"},{label:"MEV Watch",url:"https://www.mevwatch.info/"},{label:"Sanctions Lifted (2025)",url:"https://home.treasury.gov/news/press-releases/sb0057"}]},{id:"paypal-pyusd",type:"milestone",date:"2023-08-07",blockNumber:1786e4,approximateBlock:!0,title:"PayPal Launches PYUSD",summary:"PayPal launches its USD stablecoin on Ethereum, bringing crypto to 430M+ users.",imageUrl:"https://newsroom.paypal-corp.com/image/PYUSD_3x2.jpg",era:"shanghai",importance:"significant",content:"PayPal launched PYUSD, a USD-backed stablecoin as an ERC-20 token on Ethereum. This marked a major milestone in mainstream adoption — one of the world's largest payment processors choosing Ethereum as its blockchain platform. PYUSD brought Ethereum access to PayPal and Venmo's hundreds of millions of users.",tags:["adoption","defi"],links:[{label:"PayPal Announcement",url:"https://newsroom.paypal-corp.com/2023-08-07-PayPal-Launches-U-S-Dollar-Stablecoin"},{label:"The Verge Coverage",url:"https://www.theverge.com/2023/8/7/23822752/paypal-pyusd-stablecoin-cryptocurrency"}]},{id:"spot-eth-etf",type:"milestone",date:"2024-07-23",blockNumber:2034e4,approximateBlock:!0,title:"Spot Ethereum ETFs Approved",summary:"SEC approves spot Ethereum ETFs. BlackRock, Fidelity, and others begin trading.",era:"cancun",importance:"major",content:"The SEC approved nine spot Ethereum ETFs, allowing traditional investors to gain ETH exposure through regulated brokerage accounts. BlackRock's iShares Ethereum Trust (ETHA), Fidelity's Ethereum Fund, and others began trading. This followed the Bitcoin spot ETF approval in January 2024 and cemented Ethereum's legitimacy as an institutional asset.",tags:["adoption"],imageUrl:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",links:[{label:"Investopedia Coverage",url:"https://www.investopedia.com/sec-approves-spot-ether-etfs-8678873"},{label:"BlackRock ETHA",url:"https://www.blackrock.com/us/individual/products/337614/ishares-ethereum-trust-etf"}]},{id:"polygon-launch",type:"scaling",date:"2020-05-31",blockNumber:102e5,approximateBlock:!0,title:"Polygon (Matic) Mainnet Launch",summary:"Matic Network launches as an Ethereum sidechain, offering fast and cheap transactions.",era:"beacon",importance:"significant",content:"Matic Network (later rebranded to Polygon) launched its PoS sidechain connected to Ethereum. It offered near-instant transactions at a fraction of mainnet gas costs. Polygon became the go-to scaling solution during the 2021 DeFi/NFT boom, onboarding millions of users who couldn't afford mainnet fees.",tags:["scaling"],imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Polygon_Blockchain_Matic_Logo.svg/1200px-Polygon_Blockchain_Matic_Logo.svg.png",links:[{label:"Polygon",url:"https://polygon.technology/"},{label:"Polygon PoS Documentation",url:"https://docs.polygon.technology/pos/"}]},{id:"uniswap-airdrop",type:"application",date:"2020-09-17",blockNumber:1086e4,approximateBlock:!0,title:"Uniswap UNI Airdrop",summary:"250,000+ addresses receive 400 UNI each. The airdrop that defined a new token distribution model.",imageUrl:"https://images.ctfassets.net/oc3ca6rftwdu/4x39D4E8beGsi71o3uBhxG/3d6286ef63706ca13fb9e5df71646bd9/banner.jpeg?w=1200&amp;h=900&amp;q=100&amp;fit=crop",era:"beacon",importance:"major",content:'Uniswap launched its governance token UNI with a historic airdrop. Every address that had used Uniswap before September 1, 2020 received at least 400 UNI tokens — worth over $1,400 at launch. Over 250,000 addresses were eligible. This "retroactive public goods funding" model inspired countless future airdrops and established a new paradigm for fair token distribution.',tags:["defi"],links:[{label:"Uniswap Announcement",url:"https://blog.uniswap.org/uni"},{label:"Dune Airdrop Analysis",url:"https://dune.com/blog/uni-airdrop-analysis"}]},{id:"flashbots-launch",type:"milestone",date:"2020-11-06",blockNumber:112e5,approximateBlock:!0,title:"Flashbots Launch",summary:'Flashbots launches MEV-geth, bringing transparency and order to the "dark forest" of MEV extraction.',era:"beacon",importance:"significant",content:"Flashbots emerged to address the chaos of MEV (Maximal Extractable Value) extraction. Before Flashbots, MEV searchers competed in the public mempool, causing gas price spikes and network congestion. MEV-geth allowed miners to accept sealed-bid bundles, moving the competition off-chain and reducing negative externalities.",tags:["protocol","defi"],links:[{label:"Flashbots",url:"https://www.flashbots.net/"},{label:"Flashbots Docs",url:"https://docs.flashbots.net/"},{label:"GitHub",url:"https://github.com/flashbots/pm"}]},{id:"mev-boost-launch",type:"milestone",date:"2022-09-15",blockNumber:15537394,title:"MEV-Boost Goes Live",summary:"With The Merge, MEV-Boost enables validators to outsource block building to a competitive marketplace.",imageUrl:"https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/354d2449-5f7a-4b06-82aa-c46aedfe81e1/page-cover_5-wide/public",era:"merge",importance:"significant",content:`MEV-Boost launched alongside The Merge, adapting Flashbots infrastructure for Proof of Stake. Validators could now receive blocks from specialized builders via relays, separating block production from block building. This "proposer-builder separation" became a cornerstone of Ethereum's post-Merge architecture, with over 90% of blocks eventually built through MEV-Boost.`,tags:["protocol"],links:[{label:"MEV-Boost Docs",url:"https://boost.flashbots.net/"},{label:"MEV Watch",url:"https://www.mevwatch.info/"},{label:"Flashbots Transparency",url:"https://transparency.flashbots.net/"}]},{id:"validators-500k",type:"milestone",date:"2023-01-13",blockNumber:164e5,approximateBlock:!0,title:"500,000 Validators",summary:"Ethereum reaches 500,000 active validators on the Beacon Chain, with 16M ETH staked.",imageUrl:"https://blockworks.co/_next/image?url=https%3A%2F%2Fblockworks-co.imgix.net%2Fwp-content%2Fuploads%2F2023%2F01%2Fethereum-eth.jpg&amp;w=1920&amp;q=75&amp;webp=false",era:"shanghai",importance:"significant",content:"Just months after The Merge, Ethereum's validator count hit 500,000 — each having staked 32 ETH. This milestone came as the community anticipated the Shanghai upgrade that would finally enable staking withdrawals. The growth demonstrated strong confidence in Ethereum's Proof of Stake future.",tags:["protocol"],links:[{label:"Blockworks Coverage",url:"https://blockworks.co/news/ethereum-to-reach-500000-validators"},{label:"BeaconScan Validators",url:"https://beaconscan.com/validators"}]},{id:"validators-1m",type:"milestone",date:"2024-03-28",blockNumber:1953e4,approximateBlock:!0,title:"1 Million Validators",summary:"Ethereum reaches 1 million active validators, with 32M ETH staked (~$114B).",era:"cancun",importance:"major",content:"Ethereum crossed 1 million validators, a remarkable milestone for network decentralization. With 32 million ETH staked (roughly 26% of total supply), the network achieved unprecedented security. The growth was driven by liquid staking protocols like Lido and institutional adoption.",tags:["protocol"],links:[{label:"Yahoo Finance Coverage",url:"https://finance.yahoo.com/news/ethereum-validator-count-passes-one-184908914.html"},{label:"Dune Staking Dashboard",url:"https://dune.com/hildobby/eth2-staking"}]},{id:"edcon-2017",type:"milestone",date:"2017-02-17",blockNumber:315e4,approximateBlock:!0,title:"EDCON 2017 (Paris)",summary:"First EDCON. European Ethereum Development Conference brings the community to Paris.",era:"homestead",importance:"significant",content:"The first EDCON (European Ethereum Development Conference) was held at ESCP Europe in Paris, February 17-18, 2017. The conference covered Ethereum technology and research including Proof of Stake, scalability, and privacy. It established a tradition of annual community-driven conferences that would circle the globe in subsequent years.",tags:["social","protocol"],links:[{label:"EDCON 2017 Website",url:"https://2017.edcon.io/"},{label:"EDCON Official",url:"https://www.edcon.io/"}]},{id:"ethcc-1",type:"milestone",date:"2018-03-08",blockNumber:52e5,approximateBlock:!0,title:"ETHCC 1 (Paris)",summary:"First Ethereum Community Conference in Paris. Beginning of a major annual tradition.",imageUrl:"https://ethcc.io/cannes-open-graph.png",era:"metropolis",importance:"significant",content:"The first ETHCC (Ethereum Community Conference) was held in Paris, establishing what would become one of the largest annual Ethereum gatherings in Europe. Organized by the Ethereum France association, it brought together developers, researchers, and enthusiasts.",tags:["social"],links:[{label:"ETHCC Website",url:"https://ethcc.io/"}]},{id:"edcon-2018",type:"milestone",date:"2018-05-03",blockNumber:555e4,approximateBlock:!0,title:"EDCON 2018 (Toronto)",summary:"EDCON goes global. Three-day conference at Ryerson University covers Casper, sharding, and Plasma.",era:"metropolis",importance:"significant",content:"EDCON 2018 was held at Ryerson University in Toronto, Canada, from May 3-5. The conference featured deep dives into Casper (Proof of Stake), sharding research, and Plasma scaling solutions. Vitalik Buterin and other core researchers presented the latest protocol developments. The event marked EDCON's expansion beyond Europe.",tags:["social","protocol","scaling"],links:[{label:"EDCON 2018 Website",url:"https://2018.edcon.io/"},{label:"EDCON Official",url:"https://www.edcon.io/"}]},{id:"eth-denver-2020",type:"milestone",date:"2020-02-14",blockNumber:945e4,approximateBlock:!0,title:"ETH Denver 2020",summary:"Last major in-person Ethereum event before COVID. Record attendance, DeFi momentum building.",imageUrl:"https://ethdenver.com/wp-content/uploads/2025/09/ETHDEN2026_SEO_v1.webp",era:"istanbul",importance:"significant",content:"ETH Denver 2020 was the last major in-person Ethereum gathering before COVID-19 shut down events worldwide. The hackathon saw record participation, and DeFi was the dominant theme. Just weeks later, the world would lock down, but the momentum built here carried through.",tags:["social","defi"],links:[{label:"ETH Denver",url:"https://www.ethdenver.com/"}]},{id:"ethcc-5",type:"milestone",date:"2022-07-19",blockNumber:1517e4,approximateBlock:!0,title:"ETHCC 5 (Paris)",summary:"Massive pre-Merge ETHCC. Anticipation for Proof of Stake transition at peak.",imageUrl:"https://ethcc.io/cannes-open-graph.png",era:"merge",importance:"significant",content:"ETHCC 5 in Paris was one of the largest Ethereum conferences ever, with The Merge just two months away. The excitement was palpable as the community anticipated the transition to Proof of Stake. Major announcements about L2s, MEV, and account abstraction dominated the talks.",tags:["social"],links:[{label:"ETHCC Website",url:"https://ethcc.io/"}]},{id:"eth-denver-2024",type:"milestone",date:"2024-02-23",blockNumber:193e5,approximateBlock:!0,title:"ETH Denver 2024",summary:"Largest ETH Denver yet. Focus on L2s, account abstraction, and real-world adoption.",imageUrl:"https://ethdenver.com/wp-content/uploads/2025/09/ETHDEN2026_SEO_v1.webp",era:"cancun",importance:"significant",content:"ETH Denver 2024 drew record crowds, with the L2 ecosystem in full bloom post-Dencun. Talks focused on account abstraction (EIP-4337), cross-L2 interoperability, and bringing crypto to mainstream users. The hackathon produced projects across DeFi, gaming, and social.",tags:["social","scaling"],links:[{label:"ETH Denver",url:"https://www.ethdenver.com/"}]},{id:"edcon-2024",type:"milestone",date:"2024-07-29",blockNumber:2035e4,approximateBlock:!0,title:"EDCON 2024 (Tokyo)",summary:"EDCON returns to Asia. Deep dives on L2 interoperability, ZK proofs, and protocol development.",era:"cancun",importance:"significant",content:"EDCON 2024 in Tokyo brought together protocol developers and researchers for deep technical discussions. With the Dencun upgrade enabling cheaper L2 data via EIP-4844, talks focused on cross-L2 communication, ZK-EVM advancements, and the roadmap toward single-slot finality. The event highlighted Ethereum's strong developer community in Asia.",tags:["social","scaling"],links:[{label:"EDCON Website",url:"https://www.edcon.io/"},{label:"EDCON 2024 Details",url:"https://www.edcon.io/en/about"}]},{id:"ethwaterloo-2017",type:"milestone",date:"2017-10-13",blockNumber:437e4,approximateBlock:!0,title:"ETHWaterloo 2017",summary:"One of the first major ETHGlobal hackathons. 400+ hackers build on Ethereum in Canada.",era:"metropolis",importance:"significant",content:"ETHWaterloo was one of the earliest large-scale Ethereum hackathons, helping establish the ETHGlobal hackathon series. Held at the University of Waterloo, it brought together developers to build on Ethereum during the ICO boom era. Winners included GoNetwork (mobile scaling) and Rufflet (smart contract analytics by Axiom Zen, the CryptoKitties team).",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethwaterloo.devpost.com/project-gallery"},{label:"ETHGlobal",url:"https://ethglobal.com/"}]},{id:"ethsanfrancisco-2018",type:"milestone",date:"2018-10-05",blockNumber:645e4,approximateBlock:!0,title:"ETHSanFrancisco 2018",summary:"Major ETHGlobal hackathon in SF. 1000+ hackers, record-breaking event.",era:"metropolis",importance:"significant",content:"ETHSanFrancisco was a massive ETHGlobal hackathon that brought over 1000 developers to the Palace of Fine Arts. It marked a high point for Ethereum developer enthusiasm before the bear market fully set in. Projects focused on scaling solutions, UX improvements, and early DeFi concepts using MakerDAO, Kyber, and atomic swaps.",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethsanfrancisco.devpost.com/project-gallery"},{label:"ETHGlobal",url:"https://ethglobal.com/"}]},{id:"ethnewyork-2019",type:"milestone",date:"2019-05-17",blockNumber:775e4,approximateBlock:!0,title:"ETHNewYork 2019",summary:"ETHGlobal hackathon in NYC during bear market. Builders stayed building.",era:"istanbul",importance:"significant",content:"ETHNewYork 2019 showed that the Ethereum developer community remained strong even in the depths of the bear market. While prices were down, hackers continued building infrastructure and applications that would later power DeFi Summer. The resilience displayed here defined Ethereum culture.",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethnewyork.devpost.com/project-gallery"},{label:"ETHGlobal",url:"https://ethglobal.com/"}]},{id:"dappcon-2018",type:"milestone",date:"2018-07-19",blockNumber:598e4,approximateBlock:!0,title:"DappCon 2018 (Berlin)",summary:"First DappCon. Developer conference focused on Ethereum dApps and infrastructure.",era:"metropolis",importance:"significant",content:"The inaugural DappCon was held July 19-20, 2018 at the Technical University of Berlin. The conference focused specifically on decentralized applications, tooling, and foundational Ethereum infrastructure. Over 600 developers attended talks covering smart contract development, scaling solutions, and the emerging dApp ecosystem. DappCon established Berlin as a major hub for Ethereum development.",tags:["social"],links:[{label:"DappCon 2018",url:"https://2018.dappcon.io/"},{label:"DappCon Official",url:"https://dappcon.io/"}]},{id:"ethberlin-2018",type:"milestone",date:"2018-09-07",blockNumber:63e5,approximateBlock:!0,title:"ETHBerlin 2018",summary:"First ETHBerlin hackathon. European developer community gathering.",era:"metropolis",importance:"significant",content:"ETHBerlin established itself as a key European Ethereum hackathon, held right before DevCon 4 in Prague. The event focused on privacy, decentralization, and cypherpunk values. It spawned the Department of Decentralization community that continued organizing events.",tags:["social"],links:[{label:"Devpost Winners",url:"https://ethberlin.devpost.com/project-gallery"},{label:"ETHBerlin",url:"https://ethberlin.org/"}]},{id:"dappcon-2019",type:"milestone",date:"2019-08-21",blockNumber:836e4,approximateBlock:!0,title:"DappCon 2019 (Berlin)",summary:"Second DappCon returns to Berlin. Deep dives into Ethereum 2.0 and layer 2.",era:"istanbul",importance:"significant",content:"DappCon 2019 ran August 21-23 at the Technical University of Berlin, followed by the ETHBerlinZwei hackathon. The conference expanded to three days with tracks covering Ethereum 2.0 beacon chain progress, state channels, Plasma implementations, and emerging layer 2 solutions. The bear market atmosphere couldn't dampen builder enthusiasm.",tags:["social"],links:[{label:"DappCon 2019",url:"https://2019.dappcon.io/"},{label:"ETHBerlinZwei",url:"https://ethberlinzwei.com/"},{label:"DappCon Official",url:"https://dappcon.io/"}]},{id:"fusaka",type:"hard_fork",date:"2025-12-03",blockNumber:2315e4,title:"Fusaka Upgrade",summary:"The Fulu (consensus) + Osaka (execution) upgrade. Introduces PeerDAS for data availability sampling and further L2 improvements.",imageUrl:"https://forkcast.org/forkcast-metacard.png",era:"fusaka",importance:"major",relatedEips:[7594,7742],content:`Fusaka combined the Fulu consensus layer and Osaka execution layer upgrades. Key features include:
- PeerDAS (EIP-7594): Peer data availability sampling, enabling nodes to verify data availability without downloading full blobs
- Further improvements to validator operations and L2 data throughput
This upgrade continued Ethereum's push toward full danksharding.`,tags:["protocol","scaling"],links:[{label:"Forkcast: Fusaka",url:"https://forkcast.org/"},{label:"PeerDAS Explainer",url:"https://ethereum.org/en/roadmap/danksharding/"}]}],wb=o=>{const t=o.reduce((i,r)=>(i[r.era]||(i[r.era]=[]),i[r.era].push(r),i),{});for(const i of Object.keys(t))t[i].sort((r,l)=>{const c=new Date(r.date).getTime(),d=new Date(l.date).getTime();return c!==d?c-d:r.blockNumber!==void 0&&l.blockNumber!==void 0?r.blockNumber-l.blockNumber:0});return t},lc={protocol:{label:"Protocol",emoji:"⛓️",accent:"var(--gruvbox-purple-bright)",tint:"rgba(211, 134, 155, 0.08)"},scaling:{label:"Scaling",emoji:"📈",accent:"var(--gruvbox-blue-bright)",tint:"rgba(131, 165, 152, 0.08)"},defi:{label:"DeFi",emoji:"💰",accent:"var(--gruvbox-green-bright)",tint:"rgba(184, 187, 38, 0.08)"},nft:{label:"NFT",emoji:"🖼️",accent:"var(--gruvbox-yellow-bright)",tint:"rgba(250, 189, 47, 0.08)"},social:{label:"Social",emoji:"💬",accent:"var(--gruvbox-purple-bright)",tint:"rgba(211, 134, 155, 0.08)"},research:{label:"Research",emoji:"🔬",accent:"var(--gruvbox-blue-bright)",tint:"rgba(131, 165, 152, 0.08)"},security:{label:"Security",emoji:"🔒",accent:"var(--gruvbox-red-bright)",tint:"rgba(251, 73, 52, 0.08)"},adoption:{label:"Adoption",emoji:"🏛️",accent:"var(--gruvbox-aqua-bright)",tint:"rgba(142, 192, 124, 0.08)"},tvl:{label:"TVL",emoji:"📊",accent:"var(--gruvbox-aqua-bright)",tint:"rgba(142, 192, 124, 0.08)"},blobs:{label:"Blobs",emoji:"🫧",accent:"var(--gruvbox-blue-bright)",tint:"rgba(131, 165, 152, 0.08)"}},Cb="rgba(168, 153, 132, 0.05)";function Rb({node:o,isSelected:t,onClick:i}){const r=o.tags||[],l=r[0],c=new Date(o.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),d=l?lc[l].accent:"var(--gruvbox-fg4)",p=l?lc[l].tint:Cb;return C.jsx("button",{onClick:i,className:`
        block w-full rounded-xl border-y border-r transition-all duration-300 text-left overflow-hidden
        bg-[var(--bg-secondary)]
        ${t?"border-[var(--eth-purple)] shadow-lg shadow-[var(--eth-purple)]/20":"border-[var(--gruvbox-bg3)] hover:border-[var(--eth-purple)]/50 hover:shadow-lg"}
      `,style:{background:`linear-gradient(${p}, ${p}), var(--bg-card)`,borderLeftWidth:"4px",borderLeftColor:d},children:C.jsxs("div",{className:"p-5",children:[C.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.length>0&&C.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium",style:{backgroundColor:"var(--bg-card-accent)",color:d},children:[lc[r[0]].emoji," ",lc[r[0]].label]}),C.jsx("span",{className:"text-sm shrink-0 ml-2",style:{color:"var(--text-muted)"},children:c})]}),C.jsx("h3",{className:"text-lg font-semibold leading-tight mb-3",style:{color:"var(--text-primary)"},children:o.title}),C.jsx("p",{className:"text-sm mb-3",style:{color:"var(--text-secondary)"},children:o.summary}),C.jsxs("div",{className:"flex items-end justify-between",children:[o.relatedEips&&o.relatedEips.length>0?C.jsx("div",{className:"flex flex-wrap gap-1",children:o.relatedEips.map(m=>C.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-mono",style:{backgroundColor:"var(--bg-card-accent)",color:"var(--text-muted)"},children:["EIP-",m]},m))}):C.jsx("div",{}),o.blockNumber!==void 0&&C.jsxs("span",{className:"text-xs font-mono shrink-0 ml-2",style:{color:"var(--text-muted)"},children:[o.approximateBlock&&"~","#",o.blockNumber.toLocaleString()]})]})]})})}function Db({era:o}){const t=Nh[o];return C.jsxs("div",{className:"relative flex justify-center mb-12",children:[C.jsx("div",{className:"absolute inset-0 blur-3xl opacity-20",style:{backgroundColor:t.color}}),C.jsxs("div",{className:"relative z-10 px-6 py-3 rounded-full border-2 bg-[var(--bg-primary)]",style:{borderColor:t.color},children:[C.jsx("div",{className:"absolute inset-0 rounded-full opacity-20 pointer-events-none",style:{backgroundColor:t.color}}),C.jsxs("div",{className:"relative text-center",children:[C.jsx("h2",{className:"text-xl font-bold uppercase tracking-wider",style:{color:t.color},children:t.name}),C.jsx("p",{className:"text-sm text-[var(--text-muted)]",children:t.years})]})]})]})}function Nb({nodes:o,onSelectNode:t,selectedNodeId:i}){const r=wb(o),l=Object.keys(Nh);return C.jsxs("section",{id:"timeline",className:"relative py-24",children:[C.jsx("div",{id:"timeline-spine",className:"absolute left-1/2 -translate-x-1/2 pointer-events-none",style:{top:"18rem",bottom:"0",width:"4px",background:"linear-gradient(to bottom, transparent 0%, var(--eth-purple) 2%, var(--eth-purple) 95%, transparent)",filter:"blur(8px)",opacity:.6}}),C.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 pointer-events-none",style:{top:"18rem",bottom:"0",width:"1px",background:"linear-gradient(to bottom, transparent 0%, var(--eth-purple) 2%, var(--eth-purple) 95%, transparent)",opacity:.3}}),l.map(c=>{const d=r[c]||[];return d.length===0?null:C.jsxs("div",{className:"relative mb-16",children:[C.jsx(Db,{era:c}),d.map((p,m)=>C.jsx(Ub,{node:p,index:m,isSelected:i===p.id,onSelect:()=>t(p)},p.id))]},c)})]})}function Ub({node:o,index:t,isSelected:i,onSelect:r}){const l=t%2===0;return C.jsxs("div",{id:`event-${o.id}`,className:"relative mb-12",children:[C.jsx("div",{className:"max-w-5xl mx-auto px-8",children:C.jsx("div",{className:`
            w-[85%] max-w-2xl
            ${l?"mr-auto":"ml-auto"}
          `,children:C.jsx(Rb,{node:o,isSelected:i,onClick:r})})}),C.jsx("button",{onClick:r,className:`
          absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 z-10
          w-4 h-4 rounded-full border-2 transition-all duration-300
          ${i?"bg-[var(--eth-purple)] border-[var(--eth-purple)] scale-150":"bg-[var(--bg-primary)] border-[var(--eth-purple)] hover:bg-[var(--eth-purple)] hover:scale-125"}
          ${o.importance==="major"?"w-5 h-5":""}
        `})]})}function Lb(){const[o,t]=Je.useState(()=>typeof window>"u"?"dark":localStorage.getItem("theme")==="light"?"light":"dark");return Je.useEffect(()=>{const r=document.documentElement;o==="dark"?(r.classList.remove("light"),r.classList.add("dark")):(r.classList.remove("dark"),r.classList.add("light"))},[o]),{theme:o,setTheme:r=>{t(r),localStorage.setItem("theme",r)}}}function Ob(){const[o,t]=Je.useState({total:0,perSecond:0}),[i,r]=Je.useState(0);Je.useEffect(()=>{const c=async()=>{try{const p=await fetch("https://ultrasound.money/api/v2/fees/burned");if(!p.ok)throw new Error("API request failed");const m=await p.json(),h=parseFloat(m.totalBurned)/1e18,x=parseFloat(m.burnRate1d)/86400;t({total:h,perSecond:x}),r(h)}catch(p){console.warn("Burned ETH API failed, using approximation:",p),t({total:45e5,perSecond:.03}),r(45e5)}};c();const d=setInterval(c,3e5);return()=>clearInterval(d)},[]),Je.useEffect(()=>{if(o.perSecond===0)return;const c=setInterval(()=>{r(d=>d+o.perSecond*10)},1e4);return()=>clearInterval(c)},[o.perSecond]);const l=c=>c>=1e6?`${(c/1e6).toFixed(2)}M`:c.toFixed(0);return C.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--bg-quaternary)] transform-gpu",title:"Total ETH burned since EIP-1559 (London fork, August 5, 2021). Burning makes ETH deflationary.",children:[C.jsx("div",{className:"w-2 h-2 rounded-full bg-orange-500 animate-pulse"}),C.jsxs("span",{className:"text-sm font-medium text-[var(--text-primary)]",children:[l(i)," ETH"]}),C.jsx("span",{className:"text-xs text-[var(--text-muted)]",children:"burned 🔥"})]})}function Pb(){const[o,t]=Je.useState({days:0,hours:0,minutes:0});return Je.useEffect(()=>{const i=new Date("2015-07-30T15:26:13Z").getTime(),r=()=>{const d=Date.now()-i,p=Math.floor(d/(1e3*60*60*24)),m=Math.floor(d%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(d%(1e3*60*60)/(1e3*60));t({days:p,hours:m,minutes:h})};r();const l=setInterval(r,6e4);return()=>clearInterval(l)},[]),C.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--bg-quaternary)] transform-gpu",title:"Ethereum has been running continuously since the genesis block on July 30, 2015",children:[C.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),C.jsxs("span",{className:"text-sm font-medium text-[var(--text-primary)]",children:[o.days.toLocaleString()," days"]}),C.jsx("span",{className:"text-xs text-[var(--text-muted)]",children:"uptime"})]})}function Bb(){const{theme:o,setTheme:t}=Lb(),i=()=>{t(o==="dark"?"light":"dark")};return C.jsx("button",{onClick:i,className:"p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors",title:`Theme: ${o}`,children:o==="dark"?C.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):C.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})}function Fb(){return C.jsx("header",{className:"sticky top-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--bg-tertiary)] shadow-sm",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between will-change-contents",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--eth-purple)] to-[var(--eth-purple-light)] flex items-center justify-center",children:C.jsx("span",{className:"text-white font-bold text-sm",children:"Ξ"})}),C.jsx("span",{className:"font-semibold text-lg",children:"The Ethereum Archive"})]}),C.jsxs("nav",{className:"flex items-center gap-4 md:gap-6",children:[C.jsx("a",{href:"#timeline",className:"hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",children:"Timeline"}),C.jsx("a",{href:"https://eips.ethereum.org",target:"_blank",rel:"noopener noreferrer",className:"hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",children:"EIPs"}),C.jsx("a",{href:"https://github.com/its-applekid/ethereum-historical-society",target:"_blank",rel:"noopener noreferrer",className:"hidden md:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors",children:"GitHub"}),C.jsx(Ob,{}),C.jsx(Pb,{}),C.jsx(Bb,{})]})]})})}const kb=[{blockNumber:1,timestamp:1438269988,gasPrice:"0.0",ethPriceUsd:1.24,typicalTxCostUsd:0},{blockNumber:115e4,timestamp:1457981393,gasPrice:"22.0",ethPriceUsd:11.5,typicalTxCostUsd:.01},{blockNumber:192e4,timestamp:1469020840,gasPrice:"25.0",ethPriceUsd:12.54,typicalTxCostUsd:.01},{blockNumber:437e4,timestamp:1508131331,gasPrice:"18.0",ethPriceUsd:340,typicalTxCostUsd:.13},{blockNumber:4605e3,timestamp:1511926523,gasPrice:"185.0",ethPriceUsd:466,typicalTxCostUsd:1.81},{blockNumber:728e4,timestamp:1551383524,gasPrice:"12.0",ethPriceUsd:136,typicalTxCostUsd:.03},{blockNumber:9069e3,timestamp:1575764709,gasPrice:"15.0",ethPriceUsd:145,typicalTxCostUsd:.05},{blockNumber:92e5,timestamp:1577953849,gasPrice:"14.0",ethPriceUsd:130,typicalTxCostUsd:.04},{blockNumber:103e5,timestamp:1592179200,gasPrice:"35.0",ethPriceUsd:235,typicalTxCostUsd:.17},{blockNumber:1202e4,timestamp:1615464e3,gasPrice:"130.0",ethPriceUsd:1850,typicalTxCostUsd:5.05},{blockNumber:12244e3,timestamp:1618481223,gasPrice:"52.0",ethPriceUsd:2500,typicalTxCostUsd:2.73},{blockNumber:12965e3,timestamp:1628166822,gasPrice:"32.1",ethPriceUsd:2890,typicalTxCostUsd:1.95},{blockNumber:13773e3,timestamp:1639076595,gasPrice:"78.0",ethPriceUsd:4100,typicalTxCostUsd:6.72},{blockNumber:1505e4,timestamp:1656586444,gasPrice:"10.2",ethPriceUsd:1070,typicalTxCostUsd:.23},{blockNumber:15537394,timestamp:1663224179,gasPrice:"14.5",ethPriceUsd:1470,typicalTxCostUsd:.45},{blockNumber:17034870,timestamp:1681338455,gasPrice:"20.3",ethPriceUsd:1920,typicalTxCostUsd:.82},{blockNumber:19426587,timestamp:1710338135,gasPrice:"32.8",ethPriceUsd:3950,typicalTxCostUsd:2.72}],Ib={protocol:{label:"Protocol",color:"#A78BFA",bg:"rgba(167, 139, 250, 0.2)",emoji:"⛓️"},scaling:{label:"Scaling",color:"#60A5FA",bg:"rgba(96, 165, 250, 0.2)",emoji:"📈"},defi:{label:"DeFi",color:"#34D399",bg:"rgba(52, 211, 153, 0.2)",emoji:"💰"},nft:{label:"NFT",color:"#FBBF24",bg:"rgba(251, 191, 36, 0.2)",emoji:"🖼️"},social:{label:"Social",color:"#F472B6",bg:"rgba(244, 114, 182, 0.2)",emoji:"💬"},research:{label:"Research",color:"#818CF8",bg:"rgba(129, 140, 248, 0.2)",emoji:"🔬"},security:{label:"Security",color:"#F87171",bg:"rgba(248, 113, 113, 0.2)",emoji:"🔒"},adoption:{label:"Adoption",color:"#10B981",bg:"rgba(16, 185, 129, 0.2)",emoji:"🏛️"},tvl:{label:"TVL",color:"#2DD4BF",bg:"rgba(45, 212, 191, 0.2)",emoji:"📊"},blobs:{label:"Blobs",color:"#06B6D4",bg:"rgba(6, 182, 212, 0.2)",emoji:"🫧"}};function zb({node:o,onClose:t}){if(!o)return null;const i=Nh[o.era],r=new Date(o.date).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),l=o.blockNumber?kb.find(c=>c.blockNumber===o.blockNumber):void 0;return C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-40",onClick:t}),C.jsxs("div",{className:"fixed right-0 top-0 bottom-0 w-full max-w-lg bg-[var(--bg-secondary)] border-l border-[var(--bg-tertiary)] z-50 overflow-y-auto",children:[C.jsxs("div",{className:"sticky top-0 bg-[var(--bg-secondary)] border-b border-[var(--bg-tertiary)] px-6 py-4 flex items-start justify-between",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-sm text-[var(--text-muted)]",children:r}),C.jsx("h2",{className:"text-2xl font-bold mt-1",children:o.title})]}),C.jsx("button",{onClick:t,className:"p-2 hover:bg-[var(--bg-tertiary)] rounded-lg transition-colors",children:C.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsxs("div",{className:"px-6 py-6 space-y-6",children:[C.jsx("div",{children:C.jsxs("span",{className:"inline-block px-3 py-1 rounded-full text-sm font-medium",style:{backgroundColor:`${i.color}20`,color:i.color},children:[i.name," Era (",i.years,")"]})}),o.tags&&o.tags.length>0&&C.jsxs("div",{children:[C.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Categories"}),C.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(c=>{const d=Ib[c];return C.jsxs("span",{className:"px-3 py-1.5 rounded-lg text-sm font-medium",style:{backgroundColor:d.bg,color:d.color},children:[d.emoji," ",d.label]},c)})})]}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-1",children:"Summary"}),C.jsx("p",{className:"text-[var(--text-secondary)]",children:o.summary})]}),l&&C.jsxs("div",{className:"bg-[var(--bg-tertiary)] rounded-lg p-4",children:[C.jsxs("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-3",children:["📊 Context at Block #",o.blockNumber?.toLocaleString()]}),C.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-xs text-[var(--text-muted)] mb-1",children:"Gas Price"}),C.jsxs("p",{className:"text-lg font-bold text-[var(--eth-purple)]",children:[l.gasPrice," gwei"]})]}),C.jsxs("div",{children:[C.jsx("p",{className:"text-xs text-[var(--text-muted)] mb-1",children:"ETH Price"}),C.jsxs("p",{className:"text-lg font-bold text-[var(--eth-green)]",children:["$",l.ethPriceUsd.toLocaleString()]})]}),C.jsxs("div",{children:[C.jsx("p",{className:"text-xs text-[var(--text-muted)] mb-1",children:"Typical TX"}),C.jsxs("p",{className:"text-lg font-bold text-[var(--text-primary)]",children:["$",l.typicalTxCostUsd]})]})]}),C.jsx("p",{className:"text-xs text-[var(--text-muted)] mt-3 italic",children:"Cost to send a simple ETH transfer (21,000 gas) at this block"})]}),o.content&&C.jsxs("div",{children:[C.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Details"}),C.jsx("div",{className:"prose prose-invert prose-sm max-w-none",children:o.content.split(`
`).map((c,d)=>c.trim()&&C.jsx("p",{className:"text-[var(--text-secondary)]",children:c},d))})]}),o.relatedEips&&o.relatedEips.length>0&&C.jsxs("div",{children:[C.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Related EIPs"}),C.jsx("div",{className:"flex flex-wrap gap-2",children:o.relatedEips.map(c=>C.jsxs("a",{href:`https://eips.ethereum.org/EIPS/eip-${c}`,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1.5 bg-[var(--bg-tertiary)] hover:bg-[var(--eth-purple)]/20 rounded-lg text-sm font-mono transition-colors",children:["EIP-",c," ↗"]},c))})]}),o.links&&o.links.length>0&&C.jsxs("div",{children:[C.jsx("h3",{className:"text-sm font-medium text-[var(--text-muted)] mb-2",children:"Primary Sources"}),C.jsx("div",{className:"space-y-2",children:o.links.map((c,d)=>C.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-[var(--eth-purple)] hover:underline",children:[C.jsx("span",{children:c.label}),C.jsx("svg",{className:"w-4 h-4 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]},d))})]}),o.blockNumber!==void 0&&C.jsx("div",{className:"flex justify-end pt-4 mt-4 border-t border-[var(--bg-tertiary)]",children:C.jsxs("a",{href:`https://etherscan.io/block/${o.blockNumber}`,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-sm text-[var(--text-muted)] hover:text-[var(--eth-purple)] transition-colors inline-flex items-center gap-1",title:o.approximateBlock?"Approximate block (based on date)":"Exact block number",children:[o.approximateBlock&&C.jsx("span",{className:"opacity-60",children:"~"}),"#",o.blockNumber.toLocaleString(),C.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})]})]})}const L0=[{id:"plasma",name:"Plasma",startBlock:437e4,color:"#666666",baseOpacity:.08,shimmerStyle:"slow",side:1,milestone:"Plasma Whitepaper"},{id:"raiden",name:"Raiden",startBlock:47e5,color:"#555555",baseOpacity:.06,shimmerStyle:"slow",side:-1,milestone:"Raiden Network"},{id:"optimism",name:"OP Mainnet",startBlock:12686786,color:"#FF0420",baseOpacity:.35,shimmerStyle:"medium",side:-1,milestone:"Optimism Mainnet Alpha"},{id:"arbitrum",name:"Arbitrum",startBlock:13133428,color:"#28A0F0",baseOpacity:.4,shimmerStyle:"fast",side:1,milestone:"Arbitrum One Launch"},{id:"zksync",name:"zkSync Era",startBlock:1689e4,color:"#4E529A",baseOpacity:.3,shimmerStyle:"pulse",side:-1,milestone:"zkSync Era Launch"},{id:"linea",name:"Linea",startBlock:1772e4,color:"#61DFFF",baseOpacity:.25,shimmerStyle:"wave",side:1,milestone:"Linea Launch"},{id:"base",name:"Base",startBlock:1788e4,color:"#0052FF",baseOpacity:.45,shimmerStyle:"fast",side:-1,milestone:"Base Mainnet Launch"},{id:"scroll",name:"Scroll",startBlock:184e5,color:"#FFEEDA",baseOpacity:.25,shimmerStyle:"wave",side:1,milestone:"Scroll Launch"}],Hb=[{id:"homestead",block:115e4,name:"Homestead"},{id:"byzantium",block:437e4,name:"Byzantium"},{id:"constantinople",block:728e4,name:"Constantinople"},{id:"istanbul",block:9069e3,name:"Istanbul"},{id:"muir-glacier",block:92e5,name:"Muir Glacier"},{id:"berlin",block:12244e3,name:"Berlin"},{id:"london",block:12965e3,name:"London"},{id:"arrow-glacier",block:13773e3,name:"Arrow Glacier"},{id:"gray-glacier",block:1505e4,name:"Gray Glacier"},{id:"shapella",block:17034870,name:"Shapella"},{id:"dencun",block:19426587,name:"Dencun"}],$n={startBlock:11052984,mergeBlock:15537394,color:"#FF6B35",baseOpacity:.55},ei={startBlock:192e4,endBlock:15537394,color:"#34D399",baseOpacity:.2},Vb=235e5;function Gb({progress:o}){const t=r=>r/Vb,i=Je.useMemo(()=>L0.filter(r=>{const l=t(r.startBlock);return o>=l}).map(r=>{const l=t(r.startBlock),c=Math.min(1,(o-l)*5),d=o>.7?1+(o-.7)*1.5:1;return{...r,startProgress:l,currentOpacity:Math.min(.8,r.baseOpacity*c*d)}}),[o]);return C.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[C.jsx("style",{children:`
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
      `}),C.jsx("style",{children:`
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
      `}),o>.85&&C.jsx("div",{className:"absolute left-1/2 w-1 live-line-shimmer",style:{top:"92%",height:"8%",transform:"translateX(-50%)",background:"linear-gradient(to bottom, var(--eth-purple-light), var(--eth-purple))",borderRadius:"2px"}}),o>=t($n.startBlock)&&(()=>{const r=t($n.startBlock),l=t($n.mergeBlock),c=40,d=o>=l,p=Math.min(1,(o-r)*3),m=$n.baseOpacity*p,h=d?(l-r)*100:(o-r)*100;return C.jsxs(C.Fragment,{children:[C.jsx("span",{className:"absolute whitespace-nowrap font-mono",style:{left:`calc(50% + ${c+8}px)`,top:`${r*100+.5}%`,color:$n.color,opacity:m*1.2,fontSize:"10px",letterSpacing:"0.5px",textTransform:"uppercase",fontWeight:500},children:"Beacon Chain"}),C.jsx("div",{className:"absolute shimmer-medium",style:{"--base-opacity":m,left:`calc(50% + ${c}px)`,top:`${r*100}%`,height:`${h}%`,width:"3px",background:`linear-gradient(to bottom, transparent 0%, ${$n.color} 2%, ${$n.color} 100%)`,opacity:m,borderRadius:"1px"}}),C.jsx("div",{style:{position:"absolute",left:"50%",top:`${r*100}%`,width:`${c}px`,height:"2px",background:`linear-gradient(to right, ${$n.color}60, ${$n.color})`,opacity:m*.7}}),d&&C.jsxs("svg",{className:"absolute pointer-events-none",style:{left:"50%",top:`${l*100}%`,transform:"translateY(-2px)",overflow:"visible"},width:c+10,height:"60",children:[C.jsx("path",{d:`M ${c} 0 Q ${c} 30 0 50`,fill:"none",stroke:$n.color,strokeWidth:"3",opacity:m,strokeLinecap:"round"}),C.jsx("path",{d:`M ${c} 0 Q ${c} 30 0 50`,fill:"none",stroke:$n.color,strokeWidth:"8",opacity:m*.3,strokeLinecap:"round",filter:"blur(4px)"})]}),C.jsx("div",{className:"absolute",style:{left:`calc(50% + ${c-3}px)`,top:`${r*100}%`,width:"6px",height:"6px",borderRadius:"50%",background:$n.color,opacity:m,boxShadow:`0 0 10px ${$n.color}80`}})]})})(),o>=t(ei.startBlock)&&(()=>{const r=t(ei.startBlock),l=t(ei.endBlock),c=-35,d=o>=l,p=Math.min(1,(o-r)*3),m=ei.baseOpacity*p,h=d?(l-r)*100:(o-r)*100;return C.jsxs(C.Fragment,{children:[C.jsx("span",{className:"absolute whitespace-nowrap font-mono",style:{left:`calc(50% + ${c-60}px)`,top:`${r*100+.5}%`,color:ei.color,opacity:m*1.2,fontSize:"10px",letterSpacing:"0.5px",textTransform:"uppercase",fontWeight:500},children:"Ethereum Classic"}),C.jsx("div",{className:"absolute shimmer-slow",style:{"--base-opacity":m,left:`calc(50% + ${c}px)`,top:`${r*100}%`,height:`${h}%`,width:"2px",background:`linear-gradient(to bottom, ${ei.color} 0%, ${ei.color} 100%)`,opacity:m,borderRadius:"1px"}}),C.jsx("div",{style:{position:"absolute",left:`calc(50% + ${c}px)`,top:`${r*100}%`,width:`${-c}px`,height:"2px",background:`linear-gradient(to right, ${ei.color}, ${ei.color}60)`,opacity:m*.7}}),d&&C.jsxs("svg",{className:"absolute pointer-events-none",style:{left:`calc(50% + ${c}px)`,top:`${l*100}%`,transform:"translateY(-2px)",overflow:"visible"},width:-c+10,height:"60",children:[C.jsx("path",{d:`M 0 0 Q 0 30 ${-c} 50`,fill:"none",stroke:ei.color,strokeWidth:"2",opacity:m,strokeLinecap:"round"}),C.jsx("path",{d:`M 0 0 Q 0 30 ${-c} 50`,fill:"none",stroke:ei.color,strokeWidth:"6",opacity:m*.3,strokeLinecap:"round",filter:"blur(3px)"})]}),C.jsx("div",{className:"absolute",style:{left:`calc(50% + ${c-3}px)`,top:`${r*100}%`,width:"6px",height:"6px",borderRadius:"50%",background:ei.color,opacity:m,boxShadow:`0 0 8px ${ei.color}60`}})]})})(),Hb.map((r,l)=>{const c=t(r.block);if(o<c)return null;const d=l%2===0?-1:1,p=20+l%3*8,h=.15*Math.min(1,(o-c)*8);return C.jsxs("svg",{className:"absolute pointer-events-none",style:{left:"50%",top:`${c*100}%`,transform:`translateX(${d===-1?`-${p+30}px`:"0"})`,overflow:"visible"},width:p+30,height:"50",children:[C.jsx("path",{d:d===1?`M 0 0 Q ${p} 15 ${p+25} 40`:`M ${p+30} 0 Q 30 15 5 40`,fill:"none",stroke:"var(--eth-purple)",strokeWidth:"2",opacity:h,strokeLinecap:"round",strokeDasharray:"4 3",style:{filter:"blur(0.5px)"}}),C.jsx("circle",{cx:d===1?p+25:5,cy:"40",r:"3",fill:"var(--eth-purple)",opacity:h*.5,style:{filter:"blur(2px)"}})]},r.id)}),i.map((r,l)=>{const c=L0.length,m=15+l/c*70,h=(r.side===1?5:-5)+l*7%10-5,x=Math.max(12,Math.min(88,m+h));return C.jsxs("div",{className:"absolute",style:{left:0,top:0,right:0,bottom:0},children:[C.jsx("div",{className:`absolute shimmer-${r.shimmerStyle}`,style:{"--base-opacity":r.currentOpacity,left:`${x}%`,top:`${r.startProgress*100}%`,transform:"translate(-50%, -50%)",width:"8px",height:"8px",borderRadius:"50%",background:r.color,opacity:r.currentOpacity,boxShadow:`0 0 6px ${r.color}60`}}),C.jsx("span",{className:"absolute whitespace-nowrap font-mono",style:{left:`${x+1.5}%`,top:`${r.startProgress*100}%`,transform:"translateY(-50%)",color:r.color,opacity:Math.min(.7,r.currentOpacity*2),fontSize:"9px",letterSpacing:"0.5px",textTransform:"uppercase"},children:r.name}),C.jsx("div",{className:`absolute shimmer-${r.shimmerStyle}`,style:{"--base-opacity":r.currentOpacity,left:`${x}%`,top:`${r.startProgress*100}%`,transform:"translateX(-50%)",height:`${(1-r.startProgress)*100}%`,width:o>.8?"3px":"2px",background:`linear-gradient(to bottom, ${r.color} 0%, ${r.color} 100%)`,opacity:r.currentOpacity,filter:"blur(0.5px)",boxShadow:o>.8?`0 0 ${8*(o-.8)*5}px ${r.color}40`:"none"}})]},r.id)}),o>=t(15537394)&&C.jsx("div",{className:"absolute animate-pulse",style:{left:"calc(50% - 6px)",top:`${t(15537394)*100}%`,width:"12px",height:"12px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,211,149,0.9) 0%, transparent 70%)",boxShadow:"0 0 20px rgba(0,211,149,0.6)"}}),o>=t(19426587)&&C.jsx("div",{className:"absolute animate-pulse",style:{left:"calc(50% - 4px)",top:`${t(19426587)*100}%`,width:"8px",height:"8px",borderRadius:"50%",background:"radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)",boxShadow:"0 0 15px rgba(6,182,212,0.5)"}}),C.jsx("style",{children:`
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
      `}),o>=t(19426587)&&(()=>{const r=t(19426587),l=Math.min(1,(o-r)*3);return[{id:1,x:20,y:85,size:12,delay:0,opacity:.25},{id:2,x:35,y:88,size:8,delay:.5,opacity:.2},{id:3,x:55,y:83,size:15,delay:1,opacity:.3},{id:4,x:70,y:90,size:10,delay:1.5,opacity:.22},{id:5,x:80,y:86,size:9,delay:2,opacity:.18},{id:6,x:25,y:92,size:14,delay:2.5,opacity:.28},{id:7,x:45,y:95,size:11,delay:3,opacity:.24},{id:8,x:65,y:93,size:7,delay:3.5,opacity:.15},{id:9,x:15,y:89,size:13,delay:4,opacity:.26},{id:10,x:75,y:84,size:10,delay:4.5,opacity:.2}].map(d=>C.jsx("div",{className:"blob-bubble absolute",style:{"--blob-opacity":d.opacity*l,left:`${d.x}%`,top:`${d.y}%`,width:`${d.size}px`,height:`${d.size}px`,background:"radial-gradient(ellipse at 30% 30%, rgba(45, 212, 191, 0.6) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(6, 182, 212, 0.1) 100%)",boxShadow:"0 0 10px rgba(6, 182, 212, 0.3), inset 0 0 5px rgba(255,255,255,0.2)",animationDelay:`${d.delay}s, ${d.delay*.7}s`,opacity:d.opacity*l}},d.id))})()]})}const ad="ja36Fe-m60k",jb=Je.forwardRef(({autoPlay:o=!1},t)=>{const[i,r]=Je.useState(o),[l,c]=Je.useState(!1),[d,p]=Je.useState(!1),m=Je.useRef(null),h=Je.useRef(null);Je.useEffect(()=>{if(window.YT){p(!0);return}const g=document.createElement("script");g.src="https://www.youtube.com/iframe_api";const y=document.getElementsByTagName("script")[0];y.parentNode?.insertBefore(g,y),window.onYouTubeIframeAPIReady=()=>{p(!0)}},[]),Je.useEffect(()=>{!d||!h.current||m.current||(m.current=new window.YT.Player("yt-player",{height:"0",width:"0",videoId:ad,playerVars:{autoplay:0,loop:1,playlist:ad},events:{onReady:()=>{m.current&&m.current.setVolume(30)},onStateChange:g=>{g.data===window.YT.PlayerState.ENDED&&m.current?.playVideo()}}}))},[d]),Je.useEffect(()=>{m.current&&(i?m.current.playVideo():m.current.pauseVideo())},[i]),Je.useImperativeHandle(t,()=>({play:()=>r(!0),pause:()=>r(!1),toggle:()=>r(g=>!g)}));const x=()=>{r(!i)},_=g=>{m.current&&m.current.setVolume(g*100)};return C.jsxs("div",{className:"relative py-2",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[C.jsx("div",{ref:h,className:"hidden",children:C.jsx("div",{id:"yt-player"})}),C.jsxs("div",{className:"flex items-center",children:[C.jsx("button",{onClick:x,className:`
            w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
            transition-all duration-300
            ${i?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-secondary)] text-[var(--text-muted)]"}
            hover:scale-110 hover:shadow-lg
            border border-[var(--bg-tertiary)]
          `,title:i?"Pause music":'Play "The Cyberpunk Runner" by Yuri Petrovski',children:i?C.jsxs("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:[C.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),C.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}):C.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})})}),C.jsxs("div",{className:`
            ml-2 bg-[var(--bg-secondary)] rounded-lg px-3 py-2
            border border-[var(--bg-tertiary)]
            shadow-xl
            flex items-center gap-3
            transition-all duration-200 origin-left
            ${l?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}
          `,children:[C.jsxs("div",{className:"whitespace-nowrap",children:[C.jsx("div",{className:"text-xs font-medium text-[var(--text-primary)]",children:"The Cyberpunk Runner"}),C.jsx("div",{className:"text-[10px] text-[var(--text-muted)]",children:"Yuri Petrovski"})]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-sm",children:"🔈"}),C.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",defaultValue:.3,onChange:g=>_(parseFloat(g.target.value)),className:"w-20 h-1 rounded-lg appearance-none bg-[var(--bg-tertiary)] cursor-pointer accent-[var(--eth-purple)]"}),C.jsx("span",{className:"text-sm",children:"🔊"})]}),C.jsx("a",{href:`https://www.youtube.com/watch?v=${ad}`,target:"_blank",rel:"noopener noreferrer",className:"text-[var(--text-muted)] hover:text-[var(--eth-purple)]",title:"Listen on YouTube",children:C.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})})]})]})]})}),Xb=500,Wb=1e4,qb=2400,Yb=Je.forwardRef(({speed:o=qb},t)=>{const[i,r]=Je.useState(!1),[l,c]=Je.useState(o),[d,p]=Je.useState(!1);Je.useImperativeHandle(t,()=>({play:()=>r(!0),pause:()=>r(!1),toggle:()=>r(g=>!g)}));const m=Je.useRef(null),h=Je.useRef(null),x=Je.useRef(l);Je.useEffect(()=>{x.current=l},[l]),Je.useEffect(()=>{if(!i){m.current&&(cancelAnimationFrame(m.current),m.current=null),h.current=null;return}const g=y=>{if(h.current===null){h.current=y,m.current=requestAnimationFrame(g);return}const M=y-h.current;h.current=y;const R=x.current*M/1e3,S=document.documentElement.scrollHeight-window.innerHeight;if(window.scrollY>=S-10){r(!1);return}window.scrollBy(0,R),m.current=requestAnimationFrame(g)};return m.current=requestAnimationFrame(g),()=>{m.current&&cancelAnimationFrame(m.current)}},[i]);const _=()=>{r(g=>!g)};return C.jsx("div",{className:"relative py-2",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:C.jsxs("div",{className:"flex items-center",children:[C.jsx("button",{onClick:_,className:`
            w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
            transition-all duration-300 shadow-lg
            ${i?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"}
          `,title:i?"Pause auto-scroll":"Auto-scroll through history",children:i?C.jsxs("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:[C.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),C.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}):C.jsx("svg",{className:"w-5 h-5 ml-0.5",fill:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{d:"M8 5v14l11-7z"})})}),C.jsxs("div",{className:`
            ml-2 bg-[var(--bg-secondary)] rounded-lg px-3 py-2 
            border border-[var(--bg-tertiary)] shadow-xl
            flex items-center gap-2
            transition-all duration-200 origin-left
            ${d?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}
          `,children:[C.jsx("span",{className:"text-sm",children:"🐢"}),C.jsx("input",{type:"range",min:Xb,max:Wb,step:100,value:l,onChange:g=>c(Number(g.target.value)),className:"w-24 h-1 rounded-lg appearance-none bg-[var(--bg-tertiary)] cursor-pointer accent-[var(--eth-purple)]"}),C.jsx("span",{className:"text-sm",children:"🚀"})]})]})})}),O0={protocol:{label:"Protocol",color:"#8B5CF6",emoji:"⛓️"},scaling:{label:"Scaling",color:"#3B82F6",emoji:"📈"},defi:{label:"DeFi",color:"#10B981",emoji:"💰"},nft:{label:"NFT",color:"#F59E0B",emoji:"🖼️"},social:{label:"Social",color:"#EC4899",emoji:"💬"},research:{label:"Research",color:"#6366F1",emoji:"🔬"},security:{label:"Security",color:"#EF4444",emoji:"🔒"},adoption:{label:"Adoption",color:"#059669",emoji:"🏛️"},tvl:{label:"TVL",color:"#14B8A6",emoji:"📊"},blobs:{label:"Blobs",color:"#06B6D4",emoji:"🫧"}},P0={all:{name:"Show Everything",tags:["protocol","scaling","defi","nft","social","research","security","adoption","tvl","blobs"]},protocol:{name:"Protocol Deep Dive",tags:["protocol","scaling","research","blobs"]},defi:{name:"DeFi Journey",tags:["defi","nft","adoption","tvl"]},highlights:{name:"Key Moments",tags:["protocol","defi","social","adoption","tvl","blobs"]}};function Zb({activeTags:o,onTagsChange:t,totalEvents:i,filteredCount:r}){const[l,c]=Je.useState(!1),d=Je.useRef(null);Je.useEffect(()=>{const g=y=>{d.current&&!d.current.contains(y.target)&&c(!1)};if(l)return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[l]);const p=g=>{o.includes(g)?t(o.filter(y=>y!==g)):t([...o,g])},m=g=>{t(P0[g].tags)},h=Object.keys(O0),_=!(o.length===h.length);return C.jsxs("div",{className:"relative",ref:d,children:[l&&C.jsxs("div",{className:"absolute bottom-14 left-0 w-72 bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-tertiary)] shadow-xl overflow-hidden animate-in slide-in-from-bottom-2 duration-200 transform-gpu",children:[C.jsxs("div",{className:"px-4 py-3 border-b border-[var(--bg-tertiary)] flex items-center justify-between",children:[C.jsx("span",{className:"font-medium text-[var(--text-primary)]",children:"Filter Timeline"}),_&&C.jsxs("span",{className:"text-xs bg-[var(--eth-purple)] text-white px-2 py-0.5 rounded-full",children:[r,"/",i]})]}),C.jsxs("div",{className:"px-4 pb-4",children:[C.jsxs("div",{className:"py-3 border-b border-[var(--bg-tertiary)]",children:[C.jsx("div",{className:"text-xs text-[var(--text-muted)] mb-2",children:"Quick Presets"}),C.jsx("div",{className:"flex flex-wrap gap-2",children:Object.entries(P0).map(([g,y])=>C.jsx("button",{onClick:()=>m(g),className:`
                      px-3 py-1.5 rounded-lg text-sm transition-colors
                      ${JSON.stringify(o.sort())===JSON.stringify(y.tags.sort())?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-primary)]"}
                    `,children:y.name},g))})]}),C.jsxs("div",{className:"pt-3",children:[C.jsx("div",{className:"text-xs text-[var(--text-muted)] mb-2",children:"Categories"}),C.jsx("div",{className:"flex flex-wrap gap-2",children:h.map(g=>{const y=O0[g],M=o.includes(g);return C.jsxs("button",{onClick:()=>p(g),className:`
                        px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 transition-all
                        ${M?"ring-2 ring-offset-2 ring-offset-[var(--bg-secondary)]":"opacity-50 hover:opacity-75"}
                      `,style:{backgroundColor:M?y.color+"30":"var(--bg-tertiary)",color:M?y.color:"var(--text-muted)","--tw-ring-color":M?y.color:"transparent"},children:[C.jsx("span",{children:y.emoji}),C.jsx("span",{children:y.label})]},g)})})]}),C.jsxs("div",{className:"pt-3 flex gap-2",children:[C.jsx("button",{onClick:()=>t(h),className:"text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]",children:"Select All"}),C.jsx("span",{className:"text-[var(--text-muted)]",children:"·"}),C.jsx("button",{onClick:()=>t([]),className:"text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)]",children:"Clear All"})]})]})]}),C.jsxs("button",{onClick:()=>c(!l),className:`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg
          ${l||_?"bg-[var(--eth-purple)] text-white":"bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"}
        `,title:"Filter timeline events",children:[C.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),_&&!l&&C.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:o.length})]})]})}const Kb=Je.forwardRef(({audioRef:o,autoPlayRef:t,activeTags:i,onTagsChange:r,totalEvents:l,filteredCount:c},d)=>C.jsxs("div",{ref:d,className:"fixed bottom-4 left-4 z-50 flex flex-col-reverse gap-2",children:[C.jsx(jb,{ref:o}),C.jsx("div",{className:"hidden md:block",children:C.jsx(Yb,{ref:t,speed:2400})}),C.jsx(Zb,{activeTags:i,onTagsChange:r,totalEvents:l,filteredCount:c})]}));function Qb({variant:o="full",maxBlocks:t=5}){const[i,r]=Je.useState([]),[l,c]=Je.useState(!1),[d,p]=Je.useState(null);Je.useEffect(()=>{const _=["https://ethereum.publicnode.com","https://rpc.ankr.com/eth","https://cloudflare-eth.com","https://eth.llamarpc.com","https://1rpc.io/eth"];let g=0;const M=(()=>{const R=async()=>{let b=null;for(let D=0;D<_.length;D++){const B=(g+D)%_.length,U=_[B];try{const k=await(await fetch(U,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",method:"eth_getBlockByNumber",params:["latest",!1],id:1})})).json();if(k.result){const F={number:parseInt(k.result.number,16),timestamp:parseInt(k.result.timestamp,16),hash:k.result.hash,gasUsed:parseInt(k.result.gasUsed,16),baseFeeGwei:k.result.baseFeePerGas?parseInt(k.result.baseFeePerGas,16)/1e9:void 0};r(T=>T.length===0||T[0].number!==F.number?[F,...T].slice(0,t):T),c(!0),p(null),g=B;return}}catch(I){b=I;continue}}b&&p("Failed to fetch blocks")};return R(),setInterval(R,12e3)})();return()=>{M&&clearInterval(M)}},[t]);const m=_=>new Date(_*1e3).toLocaleTimeString(),h=_=>(_/1e6).toFixed(1)+"M",x=_=>_?_.toFixed(1)+" gwei":"-";if(o==="ticker"){const _=i[0];return C.jsxs("div",{className:"flex items-center gap-2 text-sm text-[var(--text-muted)]",children:[C.jsx("span",{className:`w-2 h-2 rounded-full ${l?"bg-green-500 animate-pulse":"bg-gray-500"}`}),_?C.jsxs(C.Fragment,{children:[C.jsx("span",{children:"Block"}),C.jsxs("a",{href:`https://etherscan.io/block/${_.number}`,target:"_blank",rel:"noopener noreferrer",className:"font-mono text-[var(--eth-purple)] hover:underline",children:["#",_.number.toLocaleString()]}),C.jsx("span",{className:"text-xs opacity-60",children:m(_.timestamp)})]}):C.jsx("span",{children:"Connecting..."})]})}return C.jsxs("div",{className:"bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-tertiary)] overflow-hidden",children:[C.jsxs("div",{className:"px-4 py-3 border-b border-[var(--bg-tertiary)] flex items-center justify-between",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:`w-2 h-2 rounded-full ${l?"bg-green-500 animate-pulse":"bg-gray-500"}`}),C.jsx("span",{className:"font-medium text-[var(--text-primary)]",children:"Live Blocks"})]}),C.jsx("a",{href:"https://etherscan.io/blocks",target:"_blank",rel:"noopener noreferrer",className:"text-xs text-[var(--text-muted)] hover:text-[var(--eth-purple)]",children:"View on Etherscan →"})]}),C.jsxs("div",{className:"divide-y divide-[var(--bg-tertiary)]",children:[d&&C.jsx("div",{className:"px-4 py-3 text-red-400 text-sm",children:d}),i.length===0&&!d&&C.jsxs("div",{className:"px-4 py-8 text-center text-[var(--text-muted)]",children:[C.jsx("div",{className:"animate-spin w-6 h-6 border-2 border-[var(--eth-purple)] border-t-transparent rounded-full mx-auto mb-2"}),"Waiting for blocks..."]}),i.slice().reverse().map((_,g,y)=>{const M=.4+g/y.length*.6,R=g===y.length-1;return C.jsxs("div",{className:`px-4 py-3 transition-all duration-500 ${R?"bg-[var(--eth-purple)]/10":""}`,style:{opacity:M},children:[C.jsxs("div",{className:"flex items-center justify-between mb-1",children:[C.jsxs("a",{href:`https://etherscan.io/block/${_.number}`,target:"_blank",rel:"noopener noreferrer",className:"font-mono font-medium text-[var(--eth-purple)] hover:underline",children:["#",_.number.toLocaleString()]}),C.jsx("span",{className:"text-xs text-[var(--text-muted)]",children:m(_.timestamp)})]}),C.jsxs("div",{className:"flex items-center gap-4 text-xs text-[var(--text-muted)]",children:[C.jsxs("span",{children:["Gas: ",_.gasUsed?h(_.gasUsed):"-"]}),C.jsxs("span",{children:["Base: ",x(_.baseFeeGwei)]}),C.jsxs("span",{className:"font-mono truncate max-w-[120px]",title:_.hash,children:[_.hash.slice(0,10),"..."]})]})]},_.hash)})]})]})}const Jb=[{id:"pectra",name:"Pectra (Prague-Electra)",expectedDate:"Q1 2025",description:"Account abstraction (EIP-7702), validator consolidation, and execution layer improvements.",status:"testing",links:[{label:"Forkcast: Pectra",url:"https://forkcast.org/"},{label:"EIP-7702 Spec",url:"https://eips.ethereum.org/EIPS/eip-7702"}]},{id:"verkle",name:"Verkle Trees",expectedDate:"2025-2026",description:"Replace Merkle Patricia Tries with Verkle trees for stateless clients and reduced witness sizes.",status:"planning",links:[{label:"Verkle.info",url:"https://verkle.info/"},{label:"Vitalik on Verkle",url:"https://vitalik.eth.limo/general/2021/06/18/verkle.html"}]},{id:"danksharding",name:"Full Danksharding",expectedDate:"2025+",description:"Complete data availability scaling with data availability sampling (DAS). The endgame for L2 scaling.",status:"planning",links:[{label:"Danksharding FAQ",url:"https://notes.ethereum.org/@vbuterin/proto_danksharding_faq"},{label:"ethereum.org Roadmap",url:"https://ethereum.org/en/roadmap/danksharding/"}]},{id:"single-slot",name:"Single Slot Finality",expectedDate:"Research",description:"Reduce finality time from ~15 minutes to a single 12-second slot.",status:"planning",links:[{label:"SSF Research",url:"https://ethereum.org/en/roadmap/single-slot-finality/"}]}],$b={planning:{bg:"bg-yellow-500/20",text:"text-yellow-500",label:"Planning"},testing:{bg:"bg-blue-500/20",text:"text-blue-500",label:"Testing"},scheduled:{bg:"bg-green-500/20",text:"text-green-500",label:"Scheduled"}};function ey(){return C.jsx("section",{className:"px-8 py-16 relative z-10",children:C.jsxs("div",{className:"max-w-2xl mx-auto",children:[C.jsxs("div",{className:"text-center mb-8",children:[C.jsx("h2",{className:"text-3xl font-bold text-[var(--text-primary)] mb-2",children:"Future History"}),C.jsx("p",{className:"text-[var(--text-muted)]",children:"The history that hasn't happened yet. Upcoming upgrades and the road ahead."})]}),C.jsx("div",{className:"space-y-4",children:Jb.map(o=>{const t=$b[o.status];return C.jsxs("div",{className:`bg-[var(--bg-secondary)] rounded-xl border border-[var(--bg-tertiary)] p-5 
                           hover:border-[var(--eth-purple)]/50 transition-colors`,children:[C.jsxs("div",{className:"flex items-start justify-between mb-2",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"font-semibold text-[var(--text-primary)]",children:o.name}),C.jsx("span",{className:"text-sm text-[var(--text-muted)]",children:o.expectedDate})]}),C.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${t.bg} ${t.text}`,children:t.label})]}),C.jsx("p",{className:"text-sm text-[var(--text-secondary)] mb-3",children:o.description}),C.jsx("div",{className:"flex flex-wrap gap-2",children:o.links.map((i,r)=>C.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-[var(--eth-purple)] hover:underline flex items-center gap-1",children:[i.label,C.jsx("svg",{className:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]},r))})]},o.id)})}),C.jsx("div",{className:"mt-8 text-center",children:C.jsxs("a",{href:"https://forkcast.org/",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] 
                       border border-[var(--bg-tertiary)] rounded-lg
                       text-[var(--eth-purple)] hover:bg-[var(--eth-purple)]/10 transition-colors`,children:[C.jsx("span",{children:"Track all upgrades on Forkcast"}),C.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})})}const Uh="183",ty=0,B0=1,ny=2,Uc=1,iy=2,zo=3,ar=0,Gn=1,va=2,xa=0,Ns=1,F0=2,k0=3,I0=4,ay=5,Dr=100,ry=101,sy=102,oy=103,ly=104,cy=200,uy=201,fy=202,dy=203,kd=204,Id=205,hy=206,py=207,my=208,gy=209,vy=210,_y=211,xy=212,by=213,yy=214,zd=0,Hd=1,Vd=2,Ls=3,Gd=4,jd=5,Xd=6,Wd=7,Uv=0,Sy=1,Ey=2,Hi=0,Lv=1,Ov=2,Pv=3,Bv=4,Fv=5,kv=6,Iv=7,zv=300,Or=301,Os=302,rd=303,sd=304,Gc=306,qd=1e3,_a=1001,Yd=1002,Mn=1003,My=1004,cc=1005,Cn=1006,od=1007,Ur=1008,mi=1009,Hv=1010,Vv=1011,Vo=1012,Lh=1013,ji=1014,Ii=1015,ya=1016,Oh=1017,Ph=1018,Go=1020,Gv=35902,jv=35899,Xv=1021,Wv=1022,Ri=1023,Sa=1026,Lr=1027,qv=1028,Bh=1029,Ps=1030,Fh=1031,kh=1033,Lc=33776,Oc=33777,Pc=33778,Bc=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,eh=37492,th=37496,nh=37488,ih=37489,ah=37490,rh=37491,sh=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,gh=37818,vh=37819,_h=37820,xh=37821,bh=36492,yh=36494,Sh=36495,Eh=36283,Mh=36284,Th=36285,Ah=36286,Ty=3200,Ay=0,wy=1,nr="",hi="srgb",Bs="srgb-linear",kc="linear",kt="srgb",vs=7680,z0=519,Cy=512,Ry=513,Dy=514,Ih=515,Ny=516,Uy=517,zh=518,Ly=519,H0=35044,V0="300 es",zi=2e3,Ic=2001;function Oy(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Py(){const o=zc("canvas");return o.style.display="block",o}const G0={};function j0(...o){const t="THREE."+o.shift();console.log(t,...o)}function Yv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ot(...o){o=Yv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Rt(...o){o=Yv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Hc(...o){const t=o.join(" ");t in G0||(G0[t]=!0,ot(...o))}function By(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Fy={[zd]:Hd,[Vd]:Xd,[Gd]:Wd,[Ls]:jd,[Hd]:zd,[Xd]:Vd,[Wd]:Gd,[jd]:Ls};class ks{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,wh=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function St(o,t,i){return Math.max(t,Math.min(i,o))}function ky(o,t){return(o%t+t)%t}function cd(o,t,i){return(1-i)*o+i*t}function Lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,i=0){It.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],x=r[l+2],_=r[l+3],g=c[d+0],y=c[d+1],M=c[d+2],R=c[d+3];if(_!==R||m!==g||h!==y||x!==M){let S=m*g+h*y+x*M+_*R;S<0&&(g=-g,y=-y,M=-M,R=-R,S=-S);let b=1-p;if(S<.9995){const D=Math.acos(S),B=Math.sin(D);b=Math.sin(b*D)/B,p=Math.sin(p*D)/B,m=m*b+g*p,h=h*b+y*p,x=x*b+M*p,_=_*b+R*p}else{m=m*b+g*p,h=h*b+y*p,x=x*b+M*p,_=_*b+R*p;const D=1/Math.sqrt(m*m+h*h+x*x+_*_);m*=D,h*=D,x*=D,_*=D}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],x=r[l+3],_=c[d],g=c[d+1],y=c[d+2],M=c[d+3];return t[i]=p*M+x*_+m*y-h*g,t[i+1]=m*M+x*g+h*_-p*y,t[i+2]=h*M+x*y+p*g-m*_,t[i+3]=x*M-p*_-m*g-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(l/2),_=p(c/2),g=m(r/2),y=m(l/2),M=m(c/2);switch(d){case"XYZ":this._x=g*x*_+h*y*M,this._y=h*y*_-g*x*M,this._z=h*x*M+g*y*_,this._w=h*x*_-g*y*M;break;case"YXZ":this._x=g*x*_+h*y*M,this._y=h*y*_-g*x*M,this._z=h*x*M-g*y*_,this._w=h*x*_+g*y*M;break;case"ZXY":this._x=g*x*_-h*y*M,this._y=h*y*_+g*x*M,this._z=h*x*M+g*y*_,this._w=h*x*_-g*y*M;break;case"ZYX":this._x=g*x*_-h*y*M,this._y=h*y*_+g*x*M,this._z=h*x*M-g*y*_,this._w=h*x*_+g*y*M;break;case"YZX":this._x=g*x*_+h*y*M,this._y=h*y*_+g*x*M,this._z=h*x*M-g*y*_,this._w=h*x*_-g*y*M;break;case"XZY":this._x=g*x*_-h*y*M,this._y=h*y*_-g*x*M,this._z=h*x*M+g*y*_,this._w=h*x*_+g*y*M;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],_=i[10],g=r+p+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-h)*y,this._z=(d-l)*y}else if(r>p&&r>_){const y=2*Math.sqrt(1+r-p-_);this._w=(x-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+h)/y}else if(p>_){const y=2*Math.sqrt(1+p-r-_);this._w=(c-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+_-r-p);this._w=(d-l)/y,this._x=(c+h)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(St(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-r*h,this._z=c*x+d*h+r*m-l*p,this._w=d*x-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*r),x=2*(p*i-c*l),_=2*(c*r-d*i);return this.x=i+m*h+d*_-p*x,this.y=r+m*x+p*h-c*_,this.z=l+m*_+c*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ud.copy(this).projectOnVector(t),this.sub(ud)}reflect(t){return this.sub(ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(St(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new re,X0=new Is;class ht{constructor(t,i,r,l,c,d,p,m,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h)}set(t,i,r,l,c,d,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],_=r[7],g=r[2],y=r[5],M=r[8],R=l[0],S=l[3],b=l[6],D=l[1],B=l[4],U=l[7],I=l[2],k=l[5],F=l[8];return c[0]=d*R+p*D+m*I,c[3]=d*S+p*B+m*k,c[6]=d*b+p*U+m*F,c[1]=h*R+x*D+_*I,c[4]=h*S+x*B+_*k,c[7]=h*b+x*U+_*F,c[2]=g*R+y*D+M*I,c[5]=g*S+y*B+M*k,c[8]=g*b+y*U+M*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*d*x-i*p*h-r*c*x+r*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],_=x*d-p*h,g=p*m-x*c,y=h*c-d*m,M=i*_+r*g+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=_*R,t[1]=(l*h-x*r)*R,t[2]=(p*r-l*d)*R,t[3]=g*R,t[4]=(x*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=y*R,t[7]=(r*m-h*i)*R,t[8]=(d*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(fd.makeScale(t,i)),this}rotate(t){return this.premultiply(fd.makeRotation(-t)),this}translate(t,i){return this.premultiply(fd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new ht,W0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iy(){const o={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===kt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===kt&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===nr?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Hc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Hc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bs]:{primaries:t,whitePoint:r,transfer:kc,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:W0,fromXYZ:q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Tt=Iy();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Us(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _s;class zy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{_s===void 0&&(_s=zc("canvas")),_s.width=t.width,_s.height=t.height;const l=_s.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=_s}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=zc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ba(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hy=0;class Hh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(dd(l[d].image)):c.push(dd(l[d]))}else c=dd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function dd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let Vy=0;const hd=new re;class Pn extends ks{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=_a,l=_a,c=Cn,d=Ur,p=Ri,m=mi,h=Pn.DEFAULT_ANISOTROPY,x=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Xo(),this.name="",this.source=new Hh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qd:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case Yd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qd:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case Yd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=zv;Pn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,h=m[0],x=m[4],_=m[8],g=m[1],y=m[5],M=m[9],R=m[2],S=m[6],b=m[10];if(Math.abs(x-g)<.01&&Math.abs(_-R)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+g)<.1&&Math.abs(_+R)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+b-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(h+1)/2,U=(y+1)/2,I=(b+1)/2,k=(x+g)/4,F=(_+R)/4,T=(M+S)/4;return B>U&&B>I?B<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(B),l=k/r,c=F/r):U>I?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=k/l,c=T/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=F/c,l=T/c),this.set(r,l,c,i),this}let D=Math.sqrt((S-M)*(S-M)+(_-R)*(_-R)+(g-x)*(g-x));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(_-R)/D,this.z=(g-x)/D,this.w=Math.acos((h+y+b-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=St(this.x,t.x,i.x),this.y=St(this.y,t.y,i.y),this.z=St(this.z,t.z,i.z),this.w=St(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=St(this.x,t,i),this.y=St(this.y,t,i),this.z=St(this.z,t,i),this.w=St(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gy extends ks{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},c=new Pn(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Gy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Zv extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends Pn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(t,i,r,l,c,d,p,m,h,x,_,g,y,M,R,S){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h,x,_,g,y,M,R,S)}set(t,i,r,l,c,d,p,m,h,x,_,g,y,M,R,S){const b=this.elements;return b[0]=t,b[4]=i,b[8]=r,b[12]=l,b[1]=c,b[5]=d,b[9]=p,b[13]=m,b[2]=h,b[6]=x,b[10]=_,b[14]=g,b[3]=y,b[7]=M,b[11]=R,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/xs.setFromMatrixColumn(t,0).length(),c=1/xs.setFromMatrixColumn(t,1).length(),d=1/xs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const g=d*x,y=d*_,M=p*x,R=p*_;i[0]=m*x,i[4]=-m*_,i[8]=h,i[1]=y+M*h,i[5]=g-R*h,i[9]=-p*m,i[2]=R-g*h,i[6]=M+y*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*x,y=m*_,M=h*x,R=h*_;i[0]=g+R*p,i[4]=M*p-y,i[8]=d*h,i[1]=d*_,i[5]=d*x,i[9]=-p,i[2]=y*p-M,i[6]=R+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*x,y=m*_,M=h*x,R=h*_;i[0]=g-R*p,i[4]=-d*_,i[8]=M+y*p,i[1]=y+M*p,i[5]=d*x,i[9]=R-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*x,y=d*_,M=p*x,R=p*_;i[0]=m*x,i[4]=M*h-y,i[8]=g*h+R,i[1]=m*_,i[5]=R*h+g,i[9]=y*h-M,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,y=d*h,M=p*m,R=p*h;i[0]=m*x,i[4]=R-g*_,i[8]=M*_+y,i[1]=_,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=y*_+M,i[10]=g-R*_}else if(t.order==="XZY"){const g=d*m,y=d*h,M=p*m,R=p*h;i[0]=m*x,i[4]=-_,i[8]=h*x,i[1]=g*_+R,i[5]=d*x,i[9]=y*_-M,i[2]=M*_-y,i[6]=p*x,i[10]=R*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xy,t,Wy)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ka.crossVectors(r,ti),Ka.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ka.crossVectors(r,ti)),Ka.normalize(),uc.crossVectors(ti,Ka),l[0]=Ka.x,l[4]=uc.x,l[8]=ti.x,l[1]=Ka.y,l[5]=uc.y,l[9]=ti.y,l[2]=Ka.z,l[6]=uc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],_=r[5],g=r[9],y=r[13],M=r[2],R=r[6],S=r[10],b=r[14],D=r[3],B=r[7],U=r[11],I=r[15],k=l[0],F=l[4],T=l[8],N=l[12],ue=l[1],V=l[5],K=l[9],J=l[13],se=l[2],Q=l[6],L=l[10],z=l[14],oe=l[3],fe=l[7],ye=l[11],P=l[15];return c[0]=d*k+p*ue+m*se+h*oe,c[4]=d*F+p*V+m*Q+h*fe,c[8]=d*T+p*K+m*L+h*ye,c[12]=d*N+p*J+m*z+h*P,c[1]=x*k+_*ue+g*se+y*oe,c[5]=x*F+_*V+g*Q+y*fe,c[9]=x*T+_*K+g*L+y*ye,c[13]=x*N+_*J+g*z+y*P,c[2]=M*k+R*ue+S*se+b*oe,c[6]=M*F+R*V+S*Q+b*fe,c[10]=M*T+R*K+S*L+b*ye,c[14]=M*N+R*J+S*z+b*P,c[3]=D*k+B*ue+U*se+I*oe,c[7]=D*F+B*V+U*Q+I*fe,c[11]=D*T+B*K+U*L+I*ye,c[15]=D*N+B*J+U*z+I*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],x=t[2],_=t[6],g=t[10],y=t[14],M=t[3],R=t[7],S=t[11],b=t[15],D=m*y-h*g,B=p*y-h*_,U=p*g-m*_,I=d*y-h*x,k=d*g-m*x,F=d*_-p*x;return i*(R*D-S*B+b*U)-r*(M*D-S*I+b*k)+l*(M*B-R*I+b*F)-c*(M*U-R*k+S*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],_=t[9],g=t[10],y=t[11],M=t[12],R=t[13],S=t[14],b=t[15],D=i*p-r*d,B=i*m-l*d,U=i*h-c*d,I=r*m-l*p,k=r*h-c*p,F=l*h-c*m,T=x*R-_*M,N=x*S-g*M,ue=x*b-y*M,V=_*S-g*R,K=_*b-y*R,J=g*b-y*S,se=D*J-B*K+U*V+I*ue-k*N+F*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/se;return t[0]=(p*J-m*K+h*V)*Q,t[1]=(l*K-r*J-c*V)*Q,t[2]=(R*F-S*k+b*I)*Q,t[3]=(g*k-_*F-y*I)*Q,t[4]=(m*ue-d*J-h*N)*Q,t[5]=(i*J-l*ue+c*N)*Q,t[6]=(S*U-M*F-b*B)*Q,t[7]=(x*F-g*U+y*B)*Q,t[8]=(d*K-p*ue+h*T)*Q,t[9]=(r*ue-i*K-c*T)*Q,t[10]=(M*k-R*U+b*D)*Q,t[11]=(_*U-x*k-y*D)*Q,t[12]=(p*N-d*V-m*T)*Q,t[13]=(i*V-r*N+l*T)*Q,t[14]=(R*B-M*I-S*D)*Q,t[15]=(x*I-_*B+g*D)*Q,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,m=t.z,h=c*d,x=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+r,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,_=p+p,g=c*h,y=c*x,M=c*_,R=d*x,S=d*_,b=p*_,D=m*h,B=m*x,U=m*_,I=r.x,k=r.y,F=r.z;return l[0]=(1-(R+b))*I,l[1]=(y+U)*I,l[2]=(M-B)*I,l[3]=0,l[4]=(y-U)*k,l[5]=(1-(g+b))*k,l[6]=(S+D)*k,l[7]=0,l[8]=(M+B)*F,l[9]=(S-D)*F,l[10]=(1-(g+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=xs.set(l[0],l[1],l[2]).length();const p=xs.set(l[4],l[5],l[6]).length(),m=xs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ti.copy(this);const h=1/d,x=1/p,_=1/m;return Ti.elements[0]*=h,Ti.elements[1]*=h,Ti.elements[2]*=h,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,i.setFromRotationMatrix(Ti),r.x=d,r.y=p,r.z=m,this}makePerspective(t,i,r,l,c,d,p=zi,m=!1){const h=this.elements,x=2*c/(i-t),_=2*c/(r-l),g=(i+t)/(i-t),y=(r+l)/(r-l);let M,R;if(m)M=c/(d-c),R=d*c/(d-c);else if(p===zi)M=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===Ic)M=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=zi,m=!1){const h=this.elements,x=2/(i-t),_=2/(r-l),g=-(i+t)/(i-t),y=-(r+l)/(r-l);let M,R;if(m)M=1/(d-c),R=d/(d-c);else if(p===zi)M=-2/(d-c),R=-(d+c)/(d-c);else if(p===Ic)M=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const xs=new re,Ti=new dn,Xy=new re(0,0,0),Wy=new re(1,1,1),Ka=new re,uc=new re,ti=new re,Y0=new dn,Z0=new Is;class Ea{constructor(t=0,i=0,r=0,l=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],_=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Y0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qy=0;const K0=new re,bs=new Is,fa=new dn,fc=new re,Oo=new re,Yy=new re,Zy=new Is,Q0=new re(1,0,0),J0=new re(0,1,0),$0=new re(0,0,1),ev={type:"added"},Ky={type:"removed"},ys={type:"childadded",child:null},pd={type:"childremoved",child:null};class ii extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const t=new re,i=new Ea,r=new Is,l=new re(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ht}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,i){return bs.setFromAxisAngle(t,i),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Q0,t)}rotateY(t){return this.rotateOnAxis(J0,t)}rotateZ(t){return this.rotateOnAxis($0,t)}translateOnAxis(t,i){return K0.copy(t).applyQuaternion(this.quaternion),this.position.add(K0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q0,t)}translateY(t){return this.translateOnAxis(J0,t)}translateZ(t){return this.translateOnAxis($0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Oo,fc,this.up):fa.lookAt(fc,Oo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),bs.setFromRotationMatrix(fa),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ev),ys.child=t,this.dispatchEvent(ys),ys.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ky),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ev),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,Yy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Zy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const _=m[h];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),x=d(t.images),_=d(t.shapes),g=d(t.skeletons),y=d(t.animations),M=d(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=l,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ii.DEFAULT_UP=new re(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class dc extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qy={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,r),b=this._getHandJoint(h,R);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const x=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=x.position.distanceTo(_.position),y=.02,M=.005;h.inputState.pinching&&g>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new dc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},hc={h:0,s:0,l:0};function gd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ut{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Tt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Tt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Tt.workingColorSpace){if(t=ky(t,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=gd(d,c,t+1/3),this.g=gd(d,c,t),this.b=gd(d,c,t-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=Qv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Tt.workingToColorSpace(wn.copy(this),t),Math.round(St(wn.r*255,0,255))*65536+Math.round(St(wn.g*255,0,255))*256+Math.round(St(wn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Tt.workingColorSpace){Tt.workingToColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,c=wn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const _=d-p;switch(h=x<=.5?_/(d+p):_/(2-d-p),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Tt.workingColorSpace){return Tt.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=hi){Tt.workingToColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(hc);const r=cd(Qa.h,hc.h,i),l=cd(Qa.s,hc.s,i),c=cd(Qa.l,hc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ut;Ut.NAMES=Qv;class Vh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=i,this.far=r}clone(){return new Vh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jy extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new re,da=new re,vd=new re,ha=new re,Ss=new re,Es=new re,tv=new re,_d=new re,xd=new re,bd=new re,yd=new nn,Sd=new nn,Ed=new nn;class Ci{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ai.subVectors(l,i),da.subVectors(r,i),vd.subVectors(t,i);const d=Ai.dot(Ai),p=Ai.dot(da),m=Ai.dot(vd),h=da.dot(da),x=da.dot(vd),_=d*h-p*p;if(_===0)return c.set(0,0,0),null;const g=1/_,y=(h*m-p*x)*g,M=(d*x-p*m)*g;return c.set(1-y-M,M,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(t,i,r,l,c,d,p,m){return this.getBarycoord(t,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(p,ha.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return yd.setScalar(0),Sd.setScalar(0),Ed.setScalar(0),yd.fromBufferAttribute(t,i),Sd.fromBufferAttribute(t,r),Ed.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(yd,c.x),d.addScaledVector(Sd,c.y),d.addScaledVector(Ed,c.z),d}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),da.subVectors(t,i),Ai.cross(da).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;Ss.subVectors(l,r),Es.subVectors(c,r),_d.subVectors(t,r);const m=Ss.dot(_d),h=Es.dot(_d);if(m<=0&&h<=0)return i.copy(r);xd.subVectors(t,l);const x=Ss.dot(xd),_=Es.dot(xd);if(x>=0&&_<=x)return i.copy(l);const g=m*_-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Ss,d);bd.subVectors(t,c);const y=Ss.dot(bd),M=Es.dot(bd);if(M>=0&&y<=M)return i.copy(c);const R=y*h-m*M;if(R<=0&&h>=0&&M<=0)return p=h/(h-M),i.copy(r).addScaledVector(Es,p);const S=x*M-y*_;if(S<=0&&_-x>=0&&y-M>=0)return tv.subVectors(c,l),p=(_-x)/(_-x+(y-M)),i.copy(l).addScaledVector(tv,p);const b=1/(S+R+g);return d=R*b,p=g*b,i.copy(r).addScaledVector(Ss,d).addScaledVector(Es,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Wo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),mc.subVectors(this.max,Po),Ms.subVectors(t.a,Po),Ts.subVectors(t.b,Po),As.subVectors(t.c,Po),Ja.subVectors(Ts,Ms),$a.subVectors(As,Ts),Er.subVectors(Ms,As);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Er.z,Er.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Er.z,0,-Er.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Er.y,Er.x,0];return!Md(i,Ms,Ts,As,mc)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,Ms,Ts,As,mc))?!1:(gc.crossVectors(Ja,$a),i=[gc.x,gc.y,gc.z],Md(i,Ms,Ts,As,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pa=[new re,new re,new re,new re,new re,new re,new re,new re],wi=new re,pc=new Wo,Ms=new re,Ts=new re,As=new re,Ja=new re,$a=new re,Er=new re,Po=new re,mc=new re,gc=new re,Mr=new re;function Md(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){Mr.fromArray(o,c);const p=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=t.dot(Mr),h=i.dot(Mr),x=r.dot(Mr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const fn=new re,vc=new It;let $y=0;class Gi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$y++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=H0,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==H0&&(t.usage=this.usage),t}}class Jv extends Gi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class $v extends Gi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class gi extends Gi{constructor(t,i,r){super(new Float32Array(t),i,r)}}const eS=new Wo,Bo=new re,Td=new re;class Gh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):eS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Td)),this.expandByPoint(Bo.copy(t.center).sub(Td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let tS=0;const di=new dn,Ad=new ii,ws=new re,ni=new Wo,Fo=new Wo,xn=new re;class Xi extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oy(t)?$v:Jv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Fo.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ni.min,Fo.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Fo.max),ni.expandByPoint(xn)):(ni.expandByPoint(Fo.min),ni.expandByPoint(Fo.max))}ni.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)xn.fromBufferAttribute(p,h),m&&(ws.fromBufferAttribute(t,h),xn.add(ws)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<r.count;T++)p[T]=new re,m[T]=new re;const h=new re,x=new re,_=new re,g=new It,y=new It,M=new It,R=new re,S=new re;function b(T,N,ue){h.fromBufferAttribute(r,T),x.fromBufferAttribute(r,N),_.fromBufferAttribute(r,ue),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,N),M.fromBufferAttribute(c,ue),x.sub(h),_.sub(h),y.sub(g),M.sub(g);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(R.copy(x).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(V),S.copy(_).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(V),p[T].add(R),p[N].add(R),p[ue].add(R),m[T].add(S),m[N].add(S),m[ue].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,N=D.length;T<N;++T){const ue=D[T],V=ue.start,K=ue.count;for(let J=V,se=V+K;J<se;J+=3)b(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const B=new re,U=new re,I=new re,k=new re;function F(T){I.fromBufferAttribute(l,T),k.copy(I);const N=p[T];B.copy(N),B.sub(I.multiplyScalar(I.dot(N))).normalize(),U.crossVectors(k,N);const V=U.dot(m[T])<0?-1:1;d.setXYZW(T,B.x,B.y,B.z,V)}for(let T=0,N=D.length;T<N;++T){const ue=D[T],V=ue.start,K=ue.count;for(let J=V,se=V+K;J<se;J+=3)F(t.getX(J+0)),F(t.getX(J+1)),F(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const l=new re,c=new re,d=new re,p=new re,m=new re,h=new re,x=new re,_=new re;if(t)for(let g=0,y=t.count;g<y;g+=3){const M=t.getX(g+0),R=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,S),p.add(x),m.add(x),h.add(x),r.setXYZ(M,p.x,p.y,p.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),_.subVectors(l,c),x.cross(_),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,_=p.normalized,g=new h.constructor(m.length*x);let y=0,M=0;for(let R=0,S=m.length;R<S;R++){p.isInterleavedBufferAttribute?y=m[R]*p.data.stride+p.offset:y=m[R]*x;for(let b=0;b<x;b++)g[M++]=h[y++]}return new Gi(g,x,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,_=h.length;x<_;x++){const g=h[x],y=t(g,r);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let _=0,g=h.length;_<g;_++){const y=h[_];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],_=c[h];for(let g=0,y=_.length;g<y;g++)x.push(_[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const _=d[h];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nS=0;class jc extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Ns,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Id,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(r.blending=this.blending),this.side!==ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ma=new re,wd=new re,_c=new re,er=new re,Cd=new re,xc=new re,Rd=new re;class iS{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){wd.copy(t).add(i).multiplyScalar(.5),_c.copy(i).sub(t).normalize(),er.copy(this.origin).sub(wd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(_c),p=er.dot(this.direction),m=-er.dot(_c),h=er.lengthSq(),x=Math.abs(1-d*d);let _,g,y,M;if(x>0)if(_=d*m-p,g=d*p-m,M=c*x,_>=0)if(g>=-M)if(g<=M){const R=1/x;_*=R,g*=R,y=_*(_+d*g+2*p)+g*(d*_+g+2*m)+h}else g=c,_=Math.max(0,-(d*g+p)),y=-_*_+g*(g+2*m)+h;else g=-c,_=Math.max(0,-(d*g+p)),y=-_*_+g*(g+2*m)+h;else g<=-M?(_=Math.max(0,-(-d*c+p)),g=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+g*(g+2*m)+h):g<=M?(_=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+h):(_=Math.max(0,-(d*c+p)),g=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+g*(g+2*m)+h);else g=d>0?-c:c,_=Math.max(0,-(d*g+p)),y=-_*_+g*(g+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(wd).addScaledVector(_c,g),y}intersectSphere(t,i){ma.subVectors(t.center,this.origin);const r=ma.dot(this.direction),l=ma.dot(ma)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(r=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),x>=0?(c=(t.min.y-g.y)*x,d=(t.max.y-g.y)*x):(c=(t.max.y-g.y)*x,d=(t.min.y-g.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(p=(t.min.z-g.z)*_,m=(t.max.z-g.z)*_):(p=(t.max.z-g.z)*_,m=(t.min.z-g.z)*_),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ma)!==null}intersectTriangle(t,i,r,l,c){Cd.subVectors(i,t),xc.subVectors(r,t),Rd.crossVectors(Cd,xc);let d=this.direction.dot(Rd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;er.subVectors(this.origin,t);const m=p*this.direction.dot(xc.crossVectors(er,xc));if(m<0)return null;const h=p*this.direction.dot(Cd.cross(er));if(h<0||m+h>d)return null;const x=-p*er.dot(Rd);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class e_ extends jc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=Uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nv=new dn,Tr=new iS,bc=new Gh,iv=new re,yc=new re,Sc=new re,Ec=new re,Dd=new re,Mc=new re,av=new re,Tc=new re;class Di extends ii{constructor(t=new Xi,i=new e_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Mc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],_=c[m];x!==0&&(Dd.fromBufferAttribute(_,t),d?Mc.addScaledVector(Dd,x):Mc.addScaledVector(Dd.sub(i),x))}i.add(Mc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Tr.copy(t.ray).recast(t.near),!(bc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(bc,iv)===null||Tr.origin.distanceToSquared(iv)>(t.far-t.near)**2))&&(nv.copy(c).invert(),Tr.copy(t.ray).applyMatrix4(nv),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Tr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(d))for(let M=0,R=g.length;M<R;M++){const S=g[M],b=d[S.materialIndex],D=Math.max(S.start,y.start),B=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let U=D,I=B;U<I;U+=3){const k=p.getX(U),F=p.getX(U+1),T=p.getX(U+2);l=Ac(this,b,t,r,h,x,_,k,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let S=M,b=R;S<b;S+=3){const D=p.getX(S),B=p.getX(S+1),U=p.getX(S+2);l=Ac(this,d,t,r,h,x,_,D,B,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let M=0,R=g.length;M<R;M++){const S=g[M],b=d[S.materialIndex],D=Math.max(S.start,y.start),B=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let U=D,I=B;U<I;U+=3){const k=U,F=U+1,T=U+2;l=Ac(this,b,t,r,h,x,_,k,F,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let S=M,b=R;S<b;S+=3){const D=S,B=S+1,U=S+2;l=Ac(this,d,t,r,h,x,_,D,B,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function aS(o,t,i,r,l,c,d,p){let m;if(t.side===Gn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,t.side===ar,p),m===null)return null;Tc.copy(p),Tc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Tc);return h<i.near||h>i.far?null:{distance:h,point:Tc.clone(),object:o}}function Ac(o,t,i,r,l,c,d,p,m,h){o.getVertexPosition(p,yc),o.getVertexPosition(m,Sc),o.getVertexPosition(h,Ec);const x=aS(o,t,i,r,yc,Sc,Ec,av);if(x){const _=new re;Ci.getBarycoord(av,yc,Sc,Ec,_),l&&(x.uv=Ci.getInterpolatedAttribute(l,p,m,h,_,new It)),c&&(x.uv1=Ci.getInterpolatedAttribute(c,p,m,h,_,new It)),d&&(x.normal=Ci.getInterpolatedAttribute(d,p,m,h,_,new re),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new re,materialIndex:0};Ci.getNormal(yc,Sc,Ec,g.normal),x.face=g,x.barycoord=_}return x}class rS extends Pn{constructor(t=null,i=1,r=1,l,c,d,p,m,h=Mn,x=Mn,_,g){super(null,d,p,m,h,x,l,c,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new re,sS=new re,oS=new ht;class Rr{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Nd.subVectors(r,i).cross(sS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||oS.getNormalMatrix(t),l=this.coplanarPoint(Nd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Gh,lS=new It(.5,.5),wc=new re;class t_{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,d=new Rr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=zi,r=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],_=c[5],g=c[6],y=c[7],M=c[8],R=c[9],S=c[10],b=c[11],D=c[12],B=c[13],U=c[14],I=c[15];if(l[0].setComponents(h-d,y-x,b-M,I-D).normalize(),l[1].setComponents(h+d,y+x,b+M,I+D).normalize(),l[2].setComponents(h+p,y+_,b+R,I+B).normalize(),l[3].setComponents(h-p,y-_,b-R,I-B).normalize(),r)l[4].setComponents(m,g,S,U).normalize(),l[5].setComponents(h-m,y-g,b-S,I-U).normalize();else if(l[4].setComponents(h-m,y-g,b-S,I-U).normalize(),i===zi)l[5].setComponents(h+m,y+g,b+S,I+U).normalize();else if(i===Ic)l[5].setComponents(m,g,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){Ar.center.set(0,0,0);const i=lS.distanceTo(t.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class n_ extends Pn{constructor(t=[],i=Or,r,l,c,d,p,m,h,x){super(t,i,r,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jo extends Pn{constructor(t,i,r=ji,l,c,d,p=Mn,m=Mn,h,x=Sa,_=1){if(x!==Sa&&x!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,c,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cS extends jo{constructor(t,i=ji,r=Or,l,c,d=Mn,p=Mn,m,h=Sa){const x={width:t,height:t,depth:1},_=[x,x,x,x,x,x];super(t,t,i,r,l,c,d,p,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class i_ extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qo extends Xi{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],_=[];let g=0,y=0;M("z","y","x",-1,-1,r,i,t,d,c,0),M("z","y","x",1,-1,r,i,-t,d,c,1),M("x","z","y",1,1,t,r,i,l,d,2),M("x","z","y",1,-1,t,r,-i,l,d,3),M("x","y","z",1,-1,t,i,r,l,c,4),M("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new gi(h,3)),this.setAttribute("normal",new gi(x,3)),this.setAttribute("uv",new gi(_,2));function M(R,S,b,D,B,U,I,k,F,T,N){const ue=U/F,V=I/T,K=U/2,J=I/2,se=k/2,Q=F+1,L=T+1;let z=0,oe=0;const fe=new re;for(let ye=0;ye<L;ye++){const P=ye*V-J;for(let q=0;q<Q;q++){const ve=q*ue-K;fe[R]=ve*D,fe[S]=P*B,fe[b]=se,h.push(fe.x,fe.y,fe.z),fe[R]=0,fe[S]=0,fe[b]=k>0?1:-1,x.push(fe.x,fe.y,fe.z),_.push(q/F),_.push(1-ye/T),z+=1}}for(let ye=0;ye<T;ye++)for(let P=0;P<F;P++){const q=g+P+Q*ye,ve=g+P+Q*(ye+1),Ae=g+(P+1)+Q*(ye+1),Oe=g+(P+1)+Q*ye;m.push(q,ve,Oe),m.push(ve,Ae,Oe),oe+=6}p.addGroup(y,oe,N),y+=oe,g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jh extends Xi{constructor(t=1,i=1,r=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const x=[],_=[],g=[],y=[];let M=0;const R=[],S=r/2;let b=0;D(),d===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(x),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(g,3)),this.setAttribute("uv",new gi(y,2));function D(){const U=new re,I=new re;let k=0;const F=(i-t)/r;for(let T=0;T<=c;T++){const N=[],ue=T/c,V=ue*(i-t)+t;for(let K=0;K<=l;K++){const J=K/l,se=J*m+p,Q=Math.sin(se),L=Math.cos(se);I.x=V*Q,I.y=-ue*r+S,I.z=V*L,_.push(I.x,I.y,I.z),U.set(Q,F,L).normalize(),g.push(U.x,U.y,U.z),y.push(J,1-ue),N.push(M++)}R.push(N)}for(let T=0;T<l;T++)for(let N=0;N<c;N++){const ue=R[N][T],V=R[N+1][T],K=R[N+1][T+1],J=R[N][T+1];(t>0||N!==0)&&(x.push(ue,V,J),k+=3),(i>0||N!==c-1)&&(x.push(V,K,J),k+=3)}h.addGroup(b,k,0),b+=k}function B(U){const I=M,k=new It,F=new re;let T=0;const N=U===!0?t:i,ue=U===!0?1:-1;for(let K=1;K<=l;K++)_.push(0,S*ue,0),g.push(0,ue,0),y.push(.5,.5),M++;const V=M;for(let K=0;K<=l;K++){const se=K/l*m+p,Q=Math.cos(se),L=Math.sin(se);F.x=N*L,F.y=S*ue,F.z=N*Q,_.push(F.x,F.y,F.z),g.push(0,ue,0),k.x=Q*.5+.5,k.y=L*.5*ue+.5,y.push(k.x,k.y),M++}for(let K=0;K<l;K++){const J=I+K,se=V+K;U===!0?x.push(se,se+1,J):x.push(se+1,se,J),T+=3}h.addGroup(b,T,U===!0?1:2),b+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vc extends jh{constructor(t=1,i=1,r=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,t,i,r,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(t){return new Vc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xc extends Xi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,x=m+1,_=t/p,g=i/m,y=[],M=[],R=[],S=[];for(let b=0;b<x;b++){const D=b*g-d;for(let B=0;B<h;B++){const U=B*_-c;M.push(U,-D,0),R.push(0,0,1),S.push(B/p),S.push(1-b/m)}}for(let b=0;b<m;b++)for(let D=0;D<p;D++){const B=D+h*b,U=D+h*(b+1),I=D+1+h*(b+1),k=D+1+h*b;y.push(B,U,k),y.push(U,I,k)}this.setIndex(y),this.setAttribute("position",new gi(M,3)),this.setAttribute("normal",new gi(R,3)),this.setAttribute("uv",new gi(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}function Fs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const r=Fs(o[i]);for(const l in r)t[l]=r[l]}return t}function uS(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function a_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Tt.workingColorSpace}const fS={clone:Fs,merge:On};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends jc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=hS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=uS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class pS extends vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mS extends jc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gS extends jc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cc=new re,Rc=new Is,Bi=new re;class r_ extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Cc,Rc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Cc,Rc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,Rc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tr=new re,rv=new It,sv=new It;class pi extends r_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=wh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-t/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(tr.x,tr.y).multiplyScalar(-t/tr.z)}getViewSize(t,i){return this.getViewBounds(t,rv,sv),i.subVectors(sv,rv)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ld*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class s_ extends r_{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Cs=-90,Rs=1;class vS extends ii{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Cs,Rs,t,i);l.layers=this.layers,this.add(l);const c=new pi(Cs,Rs,t,i);c.layers=this.layers,this.add(c);const d=new pi(Cs,Rs,t,i);d.layers=this.layers,this.add(d);const p=new pi(Cs,Rs,t,i);p.layers=this.layers,this.add(p);const m=new pi(Cs,Rs,t,i);m.layers=this.layers,this.add(m);const h=new pi(Cs,Rs,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(r,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(r,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(_,g,y),t.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class _S extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ov(o,t,i,r){const l=xS(r);switch(i){case Xv:return o*t;case qv:return o*t/l.components*l.byteLength;case Bh:return o*t/l.components*l.byteLength;case Ps:return o*t*2/l.components*l.byteLength;case Fh:return o*t*2/l.components*l.byteLength;case Wv:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case kh:return o*t*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case Bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kd:case Jd:return Math.max(o,16)*Math.max(t,8)/4;case Zd:case Qd:return Math.max(o,8)*Math.max(t,8)/2;case $d:case eh:case nh:case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case th:case ah:case rh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case _h:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bh:case yh:case Sh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Eh:case Mh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Th:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function xS(o){switch(o){case mi:case Hv:return{byteLength:1,components:1};case Vo:case Vv:case ya:return{byteLength:2,components:1};case Oh:case Ph:return{byteLength:2,components:4};case ji:case Lh:case Ii:return{byteLength:4,components:1};case Gv:case jv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);function o_(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function bS(o){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,_=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,x),p.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,m,h){const x=m.array,_=m.updateRanges;if(o.bindBuffer(h,p),_.length===0)o.bufferSubData(h,0,x);else{_.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<_.length;y++){const M=_[g],R=_[y];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++g,_[g]=R)}_.length=g+1;for(let y=0,M=_.length;y<M;y++){const R=_[y];o.bufferSubData(h,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var yS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SS=`#ifdef USE_ALPHAHASH
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
#endif`,ES=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wS=`#ifdef USE_AOMAP
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
#endif`,CS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RS=`#ifdef USE_BATCHING
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
#endif`,DS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,US=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OS=`#ifdef USE_IRIDESCENCE
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
#endif`,PS=`#ifdef USE_BUMPMAP
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jS=`#define PI 3.141592653589793
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
} // validated`,XS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WS=`vec3 transformedNormal = objectNormal;
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
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QS="gl_FragColor = linearToOutputTexel( gl_FragColor );",JS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l1=`#ifdef USE_GRADIENTMAP
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
}`,c1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d1=`uniform bool receiveShadow;
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
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,p1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
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
#endif`,x1=`uniform sampler2D dfgLUT;
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
}`,b1=`
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
#endif`,y1=`#if defined( RE_IndirectDiffuse )
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D1=`#if defined( USE_POINTS_UV )
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
#endif`,N1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
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
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
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
#endif`,j1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,lE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#ifdef USE_TRANSMISSION
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,CE=`#define DISTANCE
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
}`,RE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,LE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,PE=`uniform vec3 diffuse;
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
}`,BE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,kE=`#define MATCAP
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
}`,IE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,HE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,GE=`#define PHONG
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
}`,jE=`#define STANDARD
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
}`,XE=`#define STANDARD
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
}`,WE=`#define TOON
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
}`,qE=`#define TOON
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
}`,YE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,QE=`uniform vec3 color;
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
}`,JE=`uniform float rotation;
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
}`,$E=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:yS,alphahash_pars_fragment:SS,alphamap_fragment:ES,alphamap_pars_fragment:MS,alphatest_fragment:TS,alphatest_pars_fragment:AS,aomap_fragment:wS,aomap_pars_fragment:CS,batching_pars_vertex:RS,batching_vertex:DS,begin_vertex:NS,beginnormal_vertex:US,bsdfs:LS,iridescence_fragment:OS,bumpmap_pars_fragment:PS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:FS,clipping_planes_pars_vertex:kS,clipping_planes_vertex:IS,color_fragment:zS,color_pars_fragment:HS,color_pars_vertex:VS,color_vertex:GS,common:jS,cube_uv_reflection_fragment:XS,defaultnormal_vertex:WS,displacementmap_pars_vertex:qS,displacementmap_vertex:YS,emissivemap_fragment:ZS,emissivemap_pars_fragment:KS,colorspace_fragment:QS,colorspace_pars_fragment:JS,envmap_fragment:$S,envmap_common_pars_fragment:e1,envmap_pars_fragment:t1,envmap_pars_vertex:n1,envmap_physical_pars_fragment:h1,envmap_vertex:i1,fog_vertex:a1,fog_pars_vertex:r1,fog_fragment:s1,fog_pars_fragment:o1,gradientmap_pars_fragment:l1,lightmap_pars_fragment:c1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:f1,lights_pars_begin:d1,lights_toon_fragment:p1,lights_toon_pars_fragment:m1,lights_phong_fragment:g1,lights_phong_pars_fragment:v1,lights_physical_fragment:_1,lights_physical_pars_fragment:x1,lights_fragment_begin:b1,lights_fragment_maps:y1,lights_fragment_end:S1,logdepthbuf_fragment:E1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:T1,logdepthbuf_vertex:A1,map_fragment:w1,map_pars_fragment:C1,map_particle_fragment:R1,map_particle_pars_fragment:D1,metalnessmap_fragment:N1,metalnessmap_pars_fragment:U1,morphinstance_vertex:L1,morphcolor_vertex:O1,morphnormal_vertex:P1,morphtarget_pars_vertex:B1,morphtarget_vertex:F1,normal_fragment_begin:k1,normal_fragment_maps:I1,normal_pars_fragment:z1,normal_pars_vertex:H1,normal_vertex:V1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:j1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:q1,opaque_fragment:Y1,packing:Z1,premultiplied_alpha_fragment:K1,project_vertex:Q1,dithering_fragment:J1,dithering_pars_fragment:$1,roughnessmap_fragment:eE,roughnessmap_pars_fragment:tE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:iE,shadowmap_vertex:aE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:lE,skinnormal_vertex:cE,specularmap_fragment:uE,specularmap_pars_fragment:fE,tonemapping_fragment:dE,tonemapping_pars_fragment:hE,transmission_fragment:pE,transmission_pars_fragment:mE,uv_pars_fragment:gE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:xE,background_vert:bE,background_frag:yE,backgroundCube_vert:SE,backgroundCube_frag:EE,cube_vert:ME,cube_frag:TE,depth_vert:AE,depth_frag:wE,distance_vert:CE,distance_frag:RE,equirect_vert:DE,equirect_frag:NE,linedashed_vert:UE,linedashed_frag:LE,meshbasic_vert:OE,meshbasic_frag:PE,meshlambert_vert:BE,meshlambert_frag:FE,meshmatcap_vert:kE,meshmatcap_frag:IE,meshnormal_vert:zE,meshnormal_frag:HE,meshphong_vert:VE,meshphong_frag:GE,meshphysical_vert:jE,meshphysical_frag:XE,meshtoon_vert:WE,meshtoon_frag:qE,points_vert:YE,points_frag:ZE,shadow_vert:KE,shadow_frag:QE,sprite_vert:JE,sprite_frag:$E},Ue={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ki={basic:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:On([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:On([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ut(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:On([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:On([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:On([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:On([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:On([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:On([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:On([Ue.common,Ue.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:On([Ue.lights,Ue.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};ki.physical={uniforms:On([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Dc={r:0,b:0,g:0},wr=new Ea,eM=new dn;function tM(o,t,i,r,l,c){const d=new Ut(0);let p=l===!0?0:1,m,h,x=null,_=0,g=null;function y(D){let B=D.isScene===!0?D.background:null;if(B&&B.isTexture){const U=D.backgroundBlurriness>0;B=t.get(B,U)}return B}function M(D){let B=!1;const U=y(D);U===null?S(d,p):U&&U.isColor&&(S(U,1),B=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function R(D,B){const U=y(B);U&&(U.isCubeTexture||U.mapping===Gc)?(h===void 0&&(h=new Di(new qo(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Fs(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,k,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),wr.copy(B.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(wr)),h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==kt,(x!==U||_!==U.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,x=U,_=U.version,g=o.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Di(new Xc(2,2),new vi({name:"BackgroundMaterial",uniforms:Fs(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==kt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||_!==U.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,x=U,_=U.version,g=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function S(D,B){D.getRGB(Dc,a_(o)),i.buffers.color.setClear(Dc.r,Dc.g,Dc.b,B,c)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,B=1){d.set(D),p=B,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,S(d,p)},render:M,addToRenderList:R,dispose:b}}function nM(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,d=!1;function p(V,K,J,se,Q){let L=!1;const z=_(V,se,J,K);c!==z&&(c=z,h(c.object)),L=y(V,se,J,Q),L&&M(V,se,J,Q),Q!==null&&t.update(Q,o.ELEMENT_ARRAY_BUFFER),(L||d)&&(d=!1,U(V,K,J,se),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return o.createVertexArray()}function h(V){return o.bindVertexArray(V)}function x(V){return o.deleteVertexArray(V)}function _(V,K,J,se){const Q=se.wireframe===!0;let L=r[K.id];L===void 0&&(L={},r[K.id]=L);const z=V.isInstancedMesh===!0?V.id:0;let oe=L[z];oe===void 0&&(oe={},L[z]=oe);let fe=oe[J.id];fe===void 0&&(fe={},oe[J.id]=fe);let ye=fe[Q];return ye===void 0&&(ye=g(m()),fe[Q]=ye),ye}function g(V){const K=[],J=[],se=[];for(let Q=0;Q<i;Q++)K[Q]=0,J[Q]=0,se[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:J,attributeDivisors:se,object:V,attributes:{},index:null}}function y(V,K,J,se){const Q=c.attributes,L=K.attributes;let z=0;const oe=J.getAttributes();for(const fe in oe)if(oe[fe].location>=0){const P=Q[fe];let q=L[fe];if(q===void 0&&(fe==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),fe==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),P===void 0||P.attribute!==q||q&&P.data!==q.data)return!0;z++}return c.attributesNum!==z||c.index!==se}function M(V,K,J,se){const Q={},L=K.attributes;let z=0;const oe=J.getAttributes();for(const fe in oe)if(oe[fe].location>=0){let P=L[fe];P===void 0&&(fe==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),fe==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const q={};q.attribute=P,P&&P.data&&(q.data=P.data),Q[fe]=q,z++}c.attributes=Q,c.attributesNum=z,c.index=se}function R(){const V=c.newAttributes;for(let K=0,J=V.length;K<J;K++)V[K]=0}function S(V){b(V,0)}function b(V,K){const J=c.newAttributes,se=c.enabledAttributes,Q=c.attributeDivisors;J[V]=1,se[V]===0&&(o.enableVertexAttribArray(V),se[V]=1),Q[V]!==K&&(o.vertexAttribDivisor(V,K),Q[V]=K)}function D(){const V=c.newAttributes,K=c.enabledAttributes;for(let J=0,se=K.length;J<se;J++)K[J]!==V[J]&&(o.disableVertexAttribArray(J),K[J]=0)}function B(V,K,J,se,Q,L,z){z===!0?o.vertexAttribIPointer(V,K,J,Q,L):o.vertexAttribPointer(V,K,J,se,Q,L)}function U(V,K,J,se){R();const Q=se.attributes,L=J.getAttributes(),z=K.defaultAttributeValues;for(const oe in L){const fe=L[oe];if(fe.location>=0){let ye=Q[oe];if(ye===void 0&&(oe==="instanceMatrix"&&V.instanceMatrix&&(ye=V.instanceMatrix),oe==="instanceColor"&&V.instanceColor&&(ye=V.instanceColor)),ye!==void 0){const P=ye.normalized,q=ye.itemSize,ve=t.get(ye);if(ve===void 0)continue;const Ae=ve.buffer,Oe=ve.type,ie=ve.bytesPerElement,xe=Oe===o.INT||Oe===o.UNSIGNED_INT||ye.gpuType===Lh;if(ye.isInterleavedBufferAttribute){const Te=ye.data,Ge=Te.stride,Ke=ye.offset;if(Te.isInstancedInterleavedBuffer){for(let et=0;et<fe.locationSize;et++)b(fe.location+et,Te.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let et=0;et<fe.locationSize;et++)S(fe.location+et);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let et=0;et<fe.locationSize;et++)B(fe.location+et,q/fe.locationSize,Oe,P,Ge*ie,(Ke+q/fe.locationSize*et)*ie,xe)}else{if(ye.isInstancedBufferAttribute){for(let Te=0;Te<fe.locationSize;Te++)b(fe.location+Te,ye.meshPerAttribute);V.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Te=0;Te<fe.locationSize;Te++)S(fe.location+Te);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Te=0;Te<fe.locationSize;Te++)B(fe.location+Te,q/fe.locationSize,Oe,P,q*ie,q/fe.locationSize*Te*ie,xe)}}else if(z!==void 0){const P=z[oe];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(fe.location,P);break;case 3:o.vertexAttrib3fv(fe.location,P);break;case 4:o.vertexAttrib4fv(fe.location,P);break;default:o.vertexAttrib1fv(fe.location,P)}}}}D()}function I(){N();for(const V in r){const K=r[V];for(const J in K){const se=K[J];for(const Q in se){const L=se[Q];for(const z in L)x(L[z].object),delete L[z];delete se[Q]}}delete r[V]}}function k(V){if(r[V.id]===void 0)return;const K=r[V.id];for(const J in K){const se=K[J];for(const Q in se){const L=se[Q];for(const z in L)x(L[z].object),delete L[z];delete se[Q]}}delete r[V.id]}function F(V){for(const K in r){const J=r[K];for(const se in J){const Q=J[se];if(Q[V.id]===void 0)continue;const L=Q[V.id];for(const z in L)x(L[z].object),delete L[z];delete Q[V.id]}}}function T(V){for(const K in r){const J=r[K],se=V.isInstancedMesh===!0?V.id:0,Q=J[se];if(Q!==void 0){for(const L in Q){const z=Q[L];for(const oe in z)x(z[oe].object),delete z[oe];delete Q[L]}delete J[se],Object.keys(J).length===0&&delete r[K]}}}function N(){ue(),d=!0,c!==l&&(c=l,h(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:ue,dispose:I,releaseStatesOfGeometry:k,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:S,disableUnusedAttributes:D}}function iM(o,t,i){let r;function l(h){r=h}function c(h,x){o.drawArrays(r,h,x),i.update(x,r,1)}function d(h,x,_){_!==0&&(o.drawArraysInstanced(r,h,x,_),i.update(x,r,_))}function p(h,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,_);let y=0;for(let M=0;M<_;M++)y+=x[M];i.update(y,r,1)}function m(h,x,_,g){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)d(h[M],x[M],g[M]);else{y.multiDrawArraysInstancedWEBGL(r,h,0,x,0,g,0,_);let M=0;for(let R=0;R<_;R++)M+=x[R]*g[R];i.update(M,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function aM(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ri&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===ya&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==mi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!T)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(ot("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),k=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:D,maxVaryings:B,maxFragmentUniforms:U,maxSamples:I,samples:k}}function rM(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Rr,p=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||r!==0||l;return l=g,r=_.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=x(_,g,0)},this.setState=function(_,g,y){const M=_.clippingPlanes,R=_.clipIntersection,S=_.clipShadows,b=o.get(_);if(!l||M===null||M.length===0||c&&!S)c?x(null):h();else{const D=c?0:r,B=D*4;let U=b.clippingState||null;m.value=U,U=x(M,g,B,y);for(let I=0;I!==B;++I)U[I]=i[I];b.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(_,g,y,M){const R=_!==null?_.length:0;let S=null;if(R!==0){if(S=m.value,M!==!0||S===null){const b=y+R*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(S===null||S.length<b)&&(S=new Float32Array(b));for(let B=0,U=y;B!==R;++B,U+=4)d.copy(_[B]).applyMatrix4(D,p),d.normal.toArray(S,U),S[U+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}const ir=4,lv=[.125,.215,.35,.446,.526,.582],Nr=20,sM=256,ko=new s_,cv=new Ut;let Ud=null,Ld=0,Od=0,Pd=!1;const oM=new re;class uv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=oM}=c;Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ud,Ld,Od),this._renderer.xr.enabled=Pd,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Or||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ud=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Od=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ya,format:Ri,colorSpace:Bs,depthBuffer:!1},l=fv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fv(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lM(c)),this._blurMaterial=uM(c,t,i),this._ggxMaterial=cM(c,t,i)}return l}_compileMaterial(t){const i=new Di(new Xi,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,r,l,c){const m=new pi(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor(cv),_.toneMapping=Hi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new qo,new e_({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let b=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,b=!0):(S.color.copy(cv),b=!0);for(let B=0;B<6;B++){const U=B%3;U===0?(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[B],c.y,c.z)):U===1?(m.up.set(0,0,h[B]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[B],c.z)):(m.up.set(0,h[B],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[B]));const I=this._cubeSize;Ds(l,U*I,B>2?I:0,I,I),_.setRenderTarget(l),b&&_.render(R,m),_.render(t,m)}_.toneMapping=y,_.autoClear=g,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Or||t.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Ds(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,ko)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(h*h-x*x),g=0+h*1.25,y=_*g,{_lodMax:M}=this,R=this._sizeLods[r],S=3*R*(r>M-ir?r-M+ir:0),b=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=M-i,Ds(c,S,b,3*R,2*R),l.setRenderTarget(c),l.render(p,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-r,Ds(t,S,b,3*R,2*R),l.setRenderTarget(t),l.render(p,ko)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=h;const g=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Nr-1),R=c/M,S=isFinite(c)?1+Math.floor(x*R):Nr;S>Nr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Nr}`);const b=[];let D=0;for(let F=0;F<Nr;++F){const T=F/R,N=Math.exp(-T*T/2);b.push(N),F===0?D+=N:F<S&&(D+=2*N)}for(let F=0;F<b.length;F++)b[F]=b[F]/D;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=b,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:B}=this;g.dTheta.value=M,g.mipInt.value=B-r;const U=this._sizeLods[l],I=3*U*(l>B-ir?l-B+ir:0),k=4*(this._cubeSize-U);Ds(i,I,k,3*U,2*U),m.setRenderTarget(i),m.render(_,ko)}}function lM(o){const t=[],i=[],r=[];let l=o;const c=o-ir+1+lv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-ir?m=lv[d-o+ir-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,_=1+h,g=[x,x,_,x,_,_,x,x,_,_,x,_],y=6,M=6,R=3,S=2,b=1,D=new Float32Array(R*M*y),B=new Float32Array(S*M*y),U=new Float32Array(b*M*y);for(let k=0;k<y;k++){const F=k%3*2/3-1,T=k>2?0:-1,N=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];D.set(N,R*M*k),B.set(g,S*M*k);const ue=[k,k,k,k,k,k];U.set(ue,b*M*k)}const I=new Xi;I.setAttribute("position",new Gi(D,R)),I.setAttribute("uv",new Gi(B,S)),I.setAttribute("faceIndex",new Gi(U,b)),r.push(new Di(I,null)),l>ir&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function fv(o,t,i){const r=new Vi(o,t,i);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ds(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function cM(o,t,i){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function uM(o,t,i){const r=new Float32Array(Nr),l=new re(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function dv(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:xa,depthTest:!1,depthWrite:!1})}function hv(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xa,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}class l_ extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new n_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qo(5,5,5),c=new vi({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:xa});c.uniforms.tEquirect.value=i;const d=new Di(l,c),p=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Cn),new vS(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}function fM(o){let t=new WeakMap,i=new WeakMap,r=null;function l(g,y=!1){return g==null?null:y?d(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===rd||y===sd)if(t.has(g)){const M=t.get(g).texture;return p(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const R=new l_(M.height);return R.fromEquirectangularTexture(o,g),t.set(g,R),g.addEventListener("dispose",h),p(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const y=g.mapping,M=y===rd||y===sd,R=y===Or||y===Os;if(M||R){let S=i.get(g);const b=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==b)return r===null&&(r=new uv(o)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const D=g.image;return M&&D&&D.height>0||R&&D&&m(D)?(r===null&&(r=new uv(o)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",x),S.texture):null}}}return g}function p(g,y){return y===rd?g.mapping=Or:y===sd&&(g.mapping=Os),g}function m(g){let y=0;const M=6;for(let R=0;R<M;R++)g[R]!==void 0&&y++;return y===M}function h(g){const y=g.target;y.removeEventListener("dispose",h);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const M=i.get(y);M!==void 0&&(i.delete(y),M.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function dM(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Hc("WebGLRenderer: "+r+" extension not supported."),l}}}function hM(o,t,i,r){const l={},c=new WeakMap;function d(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",d),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(_,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const y in g)t.update(g[y],o.ARRAY_BUFFER)}function h(_){const g=[],y=_.index,M=_.attributes.position;let R=0;if(M===void 0)return;if(y!==null){const D=y.array;R=y.version;for(let B=0,U=D.length;B<U;B+=3){const I=D[B+0],k=D[B+1],F=D[B+2];g.push(I,k,k,F,F,I)}}else{const D=M.array;R=M.version;for(let B=0,U=D.length/3-1;B<U;B+=3){const I=B+0,k=B+1,F=B+2;g.push(I,k,k,F,F,I)}}const S=new(M.count>=65535?$v:Jv)(g,1);S.version=R;const b=c.get(_);b&&t.remove(b),c.set(_,S)}function x(_){const g=c.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&h(_)}else h(_);return c.get(_)}return{get:p,update:m,getWireframeAttribute:x}}function pM(o,t,i){let r;function l(g){r=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,y){o.drawElements(r,y,c,g*d),i.update(y,r,1)}function h(g,y,M){M!==0&&(o.drawElementsInstanced(r,y,c,g*d,M),i.update(y,r,M))}function x(g,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,g,0,M);let S=0;for(let b=0;b<M;b++)S+=y[b];i.update(S,r,1)}function _(g,y,M,R){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<g.length;b++)h(g[b]/d,y[b],R[b]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,c,g,0,R,0,M);let b=0;for(let D=0;D<M;D++)b+=y[D]*R[D];i.update(b,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function mM(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function gM(o,t,i){const r=new WeakMap,l=new nn;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=x!==void 0?x.length:0;let g=r.get(p);if(g===void 0||g.count!==_){let ue=function(){T.dispose(),r.delete(p),p.removeEventListener("dispose",ue)};var y=ue;g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let U=0;M===!0&&(U=1),R===!0&&(U=2),S===!0&&(U=3);let I=p.attributes.position.count*U,k=1;I>t.maxTextureSize&&(k=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*k*4*_),T=new Zv(F,I,k,_);T.type=Ii,T.needsUpdate=!0;const N=U*4;for(let V=0;V<_;V++){const K=b[V],J=D[V],se=B[V],Q=I*k*4*V;for(let L=0;L<K.count;L++){const z=L*N;M===!0&&(l.fromBufferAttribute(K,L),F[Q+z+0]=l.x,F[Q+z+1]=l.y,F[Q+z+2]=l.z,F[Q+z+3]=0),R===!0&&(l.fromBufferAttribute(J,L),F[Q+z+4]=l.x,F[Q+z+5]=l.y,F[Q+z+6]=l.z,F[Q+z+7]=0),S===!0&&(l.fromBufferAttribute(se,L),F[Q+z+8]=l.x,F[Q+z+9]=l.y,F[Q+z+10]=l.z,F[Q+z+11]=se.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new It(I,k)},r.set(p,g),p.addEventListener("dispose",ue)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const R=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function vM(o,t,i,r,l){let c=new WeakMap;function d(h){const x=l.render.frame,_=h.geometry,g=t.get(h,_);if(c.get(g)!==x&&(t.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const _M={[Lv]:"LINEAR_TONE_MAPPING",[Ov]:"REINHARD_TONE_MAPPING",[Pv]:"CINEON_TONE_MAPPING",[Bv]:"ACES_FILMIC_TONE_MAPPING",[kv]:"AGX_TONE_MAPPING",[Iv]:"NEUTRAL_TONE_MAPPING",[Fv]:"CUSTOM_TONE_MAPPING"};function xM(o,t,i,r,l){const c=new Vi(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Vi(t,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),p=new Xi;p.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new gi([0,2,0,0,2,0],2));const m=new pS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Di(p,m),x=new s_(-1,1,1,-1,0,1);let _=null,g=null,y=!1,M,R=null,S=[],b=!1;this.setSize=function(D,B){c.setSize(D,B),d.setSize(D,B);for(let U=0;U<S.length;U++){const I=S[U];I.setSize&&I.setSize(D,B)}},this.setEffects=function(D){S=D,b=S.length>0&&S[0].isRenderPass===!0;const B=c.width,U=c.height;for(let I=0;I<S.length;I++){const k=S[I];k.setSize&&k.setSize(B,U)}},this.begin=function(D,B){if(y||D.toneMapping===Hi&&S.length===0)return!1;if(R=B,B!==null){const U=B.width,I=B.height;(c.width!==U||c.height!==I)&&this.setSize(U,I)}return b===!1&&D.setRenderTarget(c),M=D.toneMapping,D.toneMapping=Hi,!0},this.hasRenderPass=function(){return b},this.end=function(D,B){D.toneMapping=M,y=!0;let U=c,I=d;for(let k=0;k<S.length;k++){const F=S[k];if(F.enabled!==!1&&(F.render(D,I,U,B),F.needsSwap!==!1)){const T=U;U=I,I=T}}if(_!==D.outputColorSpace||g!==D.toneMapping){_=D.outputColorSpace,g=D.toneMapping,m.defines={},Tt.getTransfer(_)===kt&&(m.defines.SRGB_TRANSFER="");const k=_M[g];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(R),D.render(h,x),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const c_=new Pn,Ch=new jo(1,1),u_=new Zv,f_=new jy,d_=new n_,pv=[],mv=[],gv=new Float32Array(16),vv=new Float32Array(9),_v=new Float32Array(4);function zs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=pv[l];if(c===void 0&&(c=new Float32Array(l),pv[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function qc(o,t){let i=mv[t];i===void 0&&(i=new Int32Array(t),mv[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function bM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function yM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function SM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function EM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function MM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;_v.set(r),o.uniformMatrix2fv(this.addr,!1,_v),vn(i,r)}}function TM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;vv.set(r),o.uniformMatrix3fv(this.addr,!1,vv),vn(i,r)}}function AM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,r))return;gv.set(r),o.uniformMatrix4fv(this.addr,!1,gv),vn(i,r)}}function wM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function CM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function RM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function DM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function NM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function UM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function LM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function OM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function PM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ch.compareFunction=i.isReversedDepthBuffer()?zh:Ih,c=Ch):c=c_,i.setTexture2D(t||c,l)}function BM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||f_,l)}function FM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||d_,l)}function kM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||u_,l)}function IM(o){switch(o){case 5126:return bM;case 35664:return yM;case 35665:return SM;case 35666:return EM;case 35674:return MM;case 35675:return TM;case 35676:return AM;case 5124:case 35670:return wM;case 35667:case 35671:return CM;case 35668:case 35672:return RM;case 35669:case 35673:return DM;case 5125:return NM;case 36294:return UM;case 36295:return LM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return PM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return kM}}function zM(o,t){o.uniform1fv(this.addr,t)}function HM(o,t){const i=zs(t,this.size,2);o.uniform2fv(this.addr,i)}function VM(o,t){const i=zs(t,this.size,3);o.uniform3fv(this.addr,i)}function GM(o,t){const i=zs(t,this.size,4);o.uniform4fv(this.addr,i)}function jM(o,t){const i=zs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function XM(o,t){const i=zs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WM(o,t){const i=zs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function qM(o,t){o.uniform1iv(this.addr,t)}function YM(o,t){o.uniform2iv(this.addr,t)}function ZM(o,t){o.uniform3iv(this.addr,t)}function KM(o,t){o.uniform4iv(this.addr,t)}function QM(o,t){o.uniform1uiv(this.addr,t)}function JM(o,t){o.uniform2uiv(this.addr,t)}function $M(o,t){o.uniform3uiv(this.addr,t)}function eT(o,t){o.uniform4uiv(this.addr,t)}function tT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ch:d=c_;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function nT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||f_,c[d])}function iT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||d_,c[d])}function aT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||u_,c[d])}function rT(o){switch(o){case 5126:return zM;case 35664:return HM;case 35665:return VM;case 35666:return GM;case 35674:return jM;case 35675:return XM;case 35676:return WM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return ZM;case 35669:case 35673:return KM;case 5125:return QM;case 36294:return JM;case 36295:return $M;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return aT}}class sT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=IM(i.type)}}class oT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rT(i.type)}}class lT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function xv(o,t){o.seq.push(t),o.map[t.id]=t}function cT(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const c=Bd.exec(r),d=Bd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){xv(i,h===void 0?new sT(p,o,t):new oT(p,o,t));break}else{let _=i.map[p];_===void 0&&(_=new lT(p),xv(i,_)),i=_}}}class Fc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);cT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function bv(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const uT=37297;let fT=0;function dT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const yv=new ht;function hT(o){Tt._getMatrix(yv,Tt.workingColorSpace,o);const t=`mat3( ${yv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case kc:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Sv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+dT(o.getShaderSource(t),p)}else return c}function pT(o,t){const i=hT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const mT={[Lv]:"Linear",[Ov]:"Reinhard",[Pv]:"Cineon",[Bv]:"ACESFilmic",[kv]:"AgX",[Iv]:"Neutral",[Fv]:"Custom"};function gT(o,t){const i=mT[t];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new re;function vT(){Tt.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),t=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _T(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function xT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function bT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function Ho(o){return o!==""}function Ev(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(yT,ET)}const ST=new Map;function ET(o,t){let i=pt[t];if(i===void 0){const r=ST.get(t);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rh(i)}const MT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(o){return o.replace(MT,TT)}function TT(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Av(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const AT={[Uc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function wT(o){return AT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CT={[Or]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function RT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":CT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const DT={[Os]:"ENVMAP_MODE_REFRACTION"};function NT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":DT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UT={[Uv]:"ENVMAP_BLENDING_MULTIPLY",[Sy]:"ENVMAP_BLENDING_MIX",[Ey]:"ENVMAP_BLENDING_ADD"};function LT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":UT[o.combine]||"ENVMAP_BLENDING_NONE"}function OT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function PT(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=wT(i),h=RT(i),x=NT(i),_=LT(i),g=OT(i),y=_T(i),M=xT(c),R=l.createProgram();let S,b,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Ho).join(`
`),b.length>0&&(b+=`
`)):(S=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),b=[Av(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?gT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,pT("linearToOutputTexel",i.outputColorSpace),vT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),d=Rh(d),d=Ev(d,i),d=Mv(d,i),p=Rh(p),p=Ev(p,i),p=Mv(p,i),d=Tv(d),p=Tv(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",i.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const B=D+S+d,U=D+b+p,I=bv(l,l.VERTEX_SHADER,B),k=bv(l,l.FRAGMENT_SHADER,U);l.attachShader(R,I),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(R)||"",J=l.getShaderInfoLog(I)||"",se=l.getShaderInfoLog(k)||"",Q=K.trim(),L=J.trim(),z=se.trim();let oe=!0,fe=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(oe=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,I,k);else{const ye=Sv(l,I,"vertex"),P=Sv(l,k,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+ye+`
`+P)}else Q!==""?ot("WebGLProgram: Program Info Log:",Q):(L===""||z==="")&&(fe=!1);fe&&(V.diagnostics={runnable:oe,programLog:Q,vertexShader:{log:L,prefix:S},fragmentShader:{log:z,prefix:b}})}l.deleteShader(I),l.deleteShader(k),T=new Fc(l,R),N=bT(l,R)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let ue=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(R,uT)),ue},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=k,this}let BT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new kT(t),i.set(t,r)),r}}class kT{constructor(t){this.id=BT++,this.code=t,this.usedTimes=0}}function IT(o,t,i,r,l,c){const d=new Kv,p=new FT,m=new Set,h=[],x=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,N,ue,V,K){const J=V.fog,se=K.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=t.get(T.envMap||Q,L),oe=z&&z.mapping===Gc?z.image.height:null,fe=y[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&ot("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ye=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,P=ye!==void 0?ye.length:0;let q=0;se.morphAttributes.position!==void 0&&(q=1),se.morphAttributes.normal!==void 0&&(q=2),se.morphAttributes.color!==void 0&&(q=3);let ve,Ae,Oe,ie;if(fe){const Mt=ki[fe];ve=Mt.vertexShader,Ae=Mt.fragmentShader}else ve=T.vertexShader,Ae=T.fragmentShader,p.update(T),Oe=p.getVertexShaderID(T),ie=p.getFragmentShaderID(T);const xe=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ge=K.isInstancedMesh===!0,Ke=K.isBatchedMesh===!0,et=!!T.map,Qt=!!T.matcap,_t=!!z,mt=!!T.aoMap,Dt=!!T.lightMap,lt=!!T.bumpMap,Kt=!!T.normalMap,G=!!T.displacementMap,Wt=!!T.emissiveMap,Et=!!T.metalnessMap,Lt=!!T.roughnessMap,We=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,me=T.sheen>0,be=T.transmission>0,he=We&&!!T.anisotropyMap,je=O&&!!T.clearcoatMap,Re=O&&!!T.clearcoatNormalMap,Ze=O&&!!T.clearcoatRoughnessMap,tt=Y&&!!T.iridescenceMap,Me=Y&&!!T.iridescenceThicknessMap,Se=me&&!!T.sheenColorMap,Pe=me&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Be=!!T.specularColorMap,ut=!!T.specularIntensityMap,W=be&&!!T.transmissionMap,Ce=be&&!!T.thicknessMap,we=!!T.gradientMap,Fe=!!T.alphaMap,Ee=T.alphaTest>0,de=!!T.alphaHash,Ie=!!T.extensions;let it=Hi;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(it=o.toneMapping);const Pt={shaderID:fe,shaderType:T.type,shaderName:T.name,vertexShader:ve,fragmentShader:Ae,defines:T.defines,customVertexShaderID:Oe,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ke,batchingColor:Ke&&K._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&K.instanceColor!==null,instancingMorph:Ge&&K.morphTexture!==null,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Bs,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:Qt,envMap:_t,envMapMode:_t&&z.mapping,envMapCubeUVHeight:oe,aoMap:mt,lightMap:Dt,bumpMap:lt,normalMap:Kt,displacementMap:G,emissiveMap:Wt,normalMapObjectSpace:Kt&&T.normalMapType===wy,normalMapTangentSpace:Kt&&T.normalMapType===Ay,metalnessMap:Et,roughnessMap:Lt,anisotropy:We,anisotropyMap:he,clearcoat:O,clearcoatMap:je,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ze,dispersion:E,iridescence:Y,iridescenceMap:tt,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Pe,specularMap:Le,specularColorMap:Be,specularIntensityMap:ut,transmission:be,transmissionMap:W,thicknessMap:Ce,gradientMap:we,opaque:T.transparent===!1&&T.blending===Ns&&T.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ee,alphaHash:de,combine:T.combine,mapUv:et&&M(T.map.channel),aoMapUv:mt&&M(T.aoMap.channel),lightMapUv:Dt&&M(T.lightMap.channel),bumpMapUv:lt&&M(T.bumpMap.channel),normalMapUv:Kt&&M(T.normalMap.channel),displacementMapUv:G&&M(T.displacementMap.channel),emissiveMapUv:Wt&&M(T.emissiveMap.channel),metalnessMapUv:Et&&M(T.metalnessMap.channel),roughnessMapUv:Lt&&M(T.roughnessMap.channel),anisotropyMapUv:he&&M(T.anisotropyMap.channel),clearcoatMapUv:je&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(T.sheenRoughnessMap.channel),specularMapUv:Le&&M(T.specularMap.channel),specularColorMapUv:Be&&M(T.specularColorMap.channel),specularIntensityMapUv:ut&&M(T.specularIntensityMap.channel),transmissionMapUv:W&&M(T.transmissionMap.channel),thicknessMapUv:Ce&&M(T.thicknessMap.channel),alphaMapUv:Fe&&M(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Kt||We),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!se.attributes.uv&&(et||Fe),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||se.attributes.normal===void 0&&Kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:K.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:q,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ue.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:Wt&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===va,flipSided:T.side===Gn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function S(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ue in T.defines)N.push(ue),N.push(T.defines[ue]);return T.isRawShaderMaterial===!1&&(b(N,T),D(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function b(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function D(T,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),T.push(d.mask)}function B(T){const N=y[T.type];let ue;if(N){const V=ki[N];ue=fS.clone(V.uniforms)}else ue=T.uniforms;return ue}function U(T,N){let ue=x.get(N);return ue!==void 0?++ue.usedTimes:(ue=new PT(o,N,T,l),h.push(ue),x.set(N,ue)),ue}function I(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),x.delete(T.cacheKey),T.destroy()}}function k(T){p.remove(T)}function F(){p.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:B,acquireProgram:U,releaseProgram:I,releaseShaderCache:k,programs:h,dispose:F}}function zT(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function HT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function wv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Cv(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,M,R,S,b){let D=o[t];return D===void 0?(D={id:g.id,object:g,geometry:y,material:M,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:b},o[t]=D):(D.id=g.id,D.object=g,D.geometry=y,D.material=M,D.materialVariant=d(g),D.groupOrder=R,D.renderOrder=g.renderOrder,D.z=S,D.group=b),t++,D}function m(g,y,M,R,S,b){const D=p(g,y,M,R,S,b);M.transmission>0?r.push(D):M.transparent===!0?l.push(D):i.push(D)}function h(g,y,M,R,S,b){const D=p(g,y,M,R,S,b);M.transmission>0?r.unshift(D):M.transparent===!0?l.unshift(D):i.unshift(D)}function x(g,y){i.length>1&&i.sort(g||HT),r.length>1&&r.sort(y||wv),l.length>1&&l.sort(y||wv)}function _(){for(let g=t,y=o.length;g<y;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:_,sort:x}}function VT(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new Cv,o.set(r,[d])):l>=c.length?(d=new Cv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function GT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Ut};break;case"SpotLight":i={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function jT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let XT=0;function WT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function qT(o){const t=new GT,i=jT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const l=new re,c=new dn,d=new dn;function p(h){let x=0,_=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let y=0,M=0,R=0,S=0,b=0,D=0,B=0,U=0,I=0,k=0,F=0;h.sort(WT);for(let N=0,ue=h.length;N<ue;N++){const V=h[N],K=V.color,J=V.intensity,se=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ps?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=K.r*J,_+=K.g*J,g+=K.b*J;else if(V.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(V.sh.coefficients[L],J);F++}else if(V.isDirectionalLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const z=V.shadow,oe=i.get(V);oe.shadowIntensity=z.intensity,oe.shadowBias=z.bias,oe.shadowNormalBias=z.normalBias,oe.shadowRadius=z.radius,oe.shadowMapSize=z.mapSize,r.directionalShadow[y]=oe,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=V.shadow.matrix,D++}r.directional[y]=L,y++}else if(V.isSpotLight){const L=t.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(K).multiplyScalar(J),L.distance=se,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,r.spot[R]=L;const z=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,z.updateMatrices(V),V.castShadow&&k++),r.spotLightMatrix[R]=z.matrix,V.castShadow){const oe=i.get(V);oe.shadowIntensity=z.intensity,oe.shadowBias=z.bias,oe.shadowNormalBias=z.normalBias,oe.shadowRadius=z.radius,oe.shadowMapSize=z.mapSize,r.spotShadow[R]=oe,r.spotShadowMap[R]=Q,U++}R++}else if(V.isRectAreaLight){const L=t.get(V);L.color.copy(K).multiplyScalar(J),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=L,S++}else if(V.isPointLight){const L=t.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const z=V.shadow,oe=i.get(V);oe.shadowIntensity=z.intensity,oe.shadowBias=z.bias,oe.shadowNormalBias=z.normalBias,oe.shadowRadius=z.radius,oe.shadowMapSize=z.mapSize,oe.shadowCameraNear=z.camera.near,oe.shadowCameraFar=z.camera.far,r.pointShadow[M]=oe,r.pointShadowMap[M]=Q,r.pointShadowMatrix[M]=V.shadow.matrix,B++}r.point[M]=L,M++}else if(V.isHemisphereLight){const L=t.get(V);L.skyColor.copy(V.color).multiplyScalar(J),L.groundColor.copy(V.groundColor).multiplyScalar(J),r.hemi[b]=L,b++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==y||T.pointLength!==M||T.spotLength!==R||T.rectAreaLength!==S||T.hemiLength!==b||T.numDirectionalShadows!==D||T.numPointShadows!==B||T.numSpotShadows!==U||T.numSpotMaps!==I||T.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=S,r.point.length=M,r.hemi.length=b,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=B,r.pointShadowMap.length=B,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=B,r.spotLightMatrix.length=U+I-k,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=F,T.directionalLength=y,T.pointLength=M,T.spotLength=R,T.rectAreaLength=S,T.hemiLength=b,T.numDirectionalShadows=D,T.numPointShadows=B,T.numSpotShadows=U,T.numSpotMaps=I,T.numLightProbes=F,r.version=XT++)}function m(h,x){let _=0,g=0,y=0,M=0,R=0;const S=x.matrixWorldInverse;for(let b=0,D=h.length;b<D;b++){const B=h[b];if(B.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),_++}else if(B.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),y++}else if(B.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(S),d.identity(),c.copy(B.matrixWorld),c.premultiply(S),d.extractRotation(c),U.halfWidth.set(B.width*.5,0,0),U.halfHeight.set(0,B.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),M++}else if(B.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(B.matrixWorld),U.position.applyMatrix4(S),g++}else if(B.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(B.matrixWorld),U.direction.transformDirection(S),R++}}}return{setup:p,setupView:m,state:r}}function Rv(o){const t=new qT(o),i=[],r=[];function l(x){h.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function YT(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Rv(o),t.set(l,[p])):c>=d.length?(p=new Rv(o),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const ZT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KT=`uniform sampler2D shadow_pass;
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
}`,QT=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],JT=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Dv=new dn,Io=new re,Fd=new re;function $T(o,t,i){let r=new t_;const l=new It,c=new It,d=new nn,p=new mS,m=new gS,h={},x=i.maxTextureSize,_={[ar]:Gn,[Gn]:ar,[va]:va},g=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:ZT,fragmentShader:KT}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new Xi;M.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Di(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let b=this.type;this.render=function(k,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;this.type===iy&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Uc);const N=o.getRenderTarget(),ue=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),K=o.state;K.setBlending(xa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const J=b!==this.type;J&&F.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(Q=>Q.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,Q=k.length;se<Q;se++){const L=k[se],z=L.shadow;if(z===void 0){ot("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const oe=z.getFrameExtents();l.multiply(oe),c.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/oe.x),l.x=c.x*oe.x,z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/oe.y),l.y=c.y*oe.y,z.mapSize.y=c.y));const fe=o.state.buffers.depth.getReversed();if(z.camera._reversedDepth=fe,z.map===null||J===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===zo){if(L.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Vi(l.x,l.y,{format:Ps,type:ya,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new jo(l.x,l.y,Ii),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=Sa,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mn,z.map.depthTexture.magFilter=Mn}else L.isPointLight?(z.map=new l_(l.x),z.map.depthTexture=new cS(l.x,ji)):(z.map=new Vi(l.x,l.y),z.map.depthTexture=new jo(l.x,l.y,ji)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=Sa,this.type===Uc?(z.map.depthTexture.compareFunction=fe?zh:Ih,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Mn,z.map.depthTexture.magFilter=Mn);z.camera.updateProjectionMatrix()}const ye=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<ye;P++){if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,P),o.clear();else{P===0&&(o.setRenderTarget(z.map),o.clear());const q=z.getViewport(P);d.set(c.x*q.x,c.y*q.y,c.x*q.z,c.y*q.w),K.viewport(d)}if(L.isPointLight){const q=z.camera,ve=z.matrix,Ae=L.distance||q.far;Ae!==q.far&&(q.far=Ae,q.updateProjectionMatrix()),Io.setFromMatrixPosition(L.matrixWorld),q.position.copy(Io),Fd.copy(q.position),Fd.add(QT[P]),q.up.copy(JT[P]),q.lookAt(Fd),q.updateMatrixWorld(),ve.makeTranslation(-Io.x,-Io.y,-Io.z),Dv.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Dv,q.coordinateSystem,q.reversedDepth)}else z.updateMatrices(L);r=z.getFrustum(),U(F,T,z.camera,L,this.type)}z.isPointLightShadow!==!0&&this.type===zo&&D(z,T),z.needsUpdate=!1}b=this.type,S.needsUpdate=!1,o.setRenderTarget(N,ue,V)};function D(k,F){const T=t.update(R);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Vi(l.x,l.y,{format:Ps,type:ya})),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value=k.mapSize,g.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(F,null,T,g,R,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(F,null,T,y,R,null)}function B(k,F,T,N){let ue=null;const V=T.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)ue=V;else if(ue=T.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=ue.uuid,J=F.uuid;let se=h[K];se===void 0&&(se={},h[K]=se);let Q=se[J];Q===void 0&&(Q=ue.clone(),se[J]=Q,F.addEventListener("dispose",I)),ue=Q}if(ue.visible=F.visible,ue.wireframe=F.wireframe,N===zo?ue.side=F.shadowSide!==null?F.shadowSide:F.side:ue.side=F.shadowSide!==null?F.shadowSide:_[F.side],ue.alphaMap=F.alphaMap,ue.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,ue.map=F.map,ue.clipShadows=F.clipShadows,ue.clippingPlanes=F.clippingPlanes,ue.clipIntersection=F.clipIntersection,ue.displacementMap=F.displacementMap,ue.displacementScale=F.displacementScale,ue.displacementBias=F.displacementBias,ue.wireframeLinewidth=F.wireframeLinewidth,ue.linewidth=F.linewidth,T.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const K=o.properties.get(ue);K.light=T}return ue}function U(k,F,T,N,ue){if(k.visible===!1)return;if(k.layers.test(F.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&ue===zo)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,k.matrixWorld);const J=t.update(k),se=k.material;if(Array.isArray(se)){const Q=J.groups;for(let L=0,z=Q.length;L<z;L++){const oe=Q[L],fe=se[oe.materialIndex];if(fe&&fe.visible){const ye=B(k,fe,N,ue);k.onBeforeShadow(o,k,F,T,J,ye,oe),o.renderBufferDirect(T,null,J,ye,k,oe),k.onAfterShadow(o,k,F,T,J,ye,oe)}}}else if(se.visible){const Q=B(k,se,N,ue);k.onBeforeShadow(o,k,F,T,J,Q,null),o.renderBufferDirect(T,null,J,Q,k,null),k.onAfterShadow(o,k,F,T,J,Q,null)}}const K=k.children;for(let J=0,se=K.length;J<se;J++)U(K[J],F,T,N,ue)}function I(k){k.target.removeEventListener("dispose",I);for(const T in h){const N=h[T],ue=k.target.uuid;ue in N&&(N[ue].dispose(),delete N[ue])}}}function e2(o,t){function i(){let W=!1;const Ce=new nn;let we=null;const Fe=new nn(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!W&&(o.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,de,Ie,it,Pt){Pt===!0&&(Ee*=it,de*=it,Ie*=it),Ce.set(Ee,de,Ie,it),Fe.equals(Ce)===!1&&(o.clearColor(Ee,de,Ie,it),Fe.copy(Ce))},reset:function(){W=!1,we=null,Fe.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,we=null,Fe=null,Ee=null;return{setReversed:function(de){if(Ce!==de){const Ie=t.get("EXT_clip_control");de?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Ce=de;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return Ce},setTest:function(de){de?xe(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(de){we!==de&&!W&&(o.depthMask(de),we=de)},setFunc:function(de){if(Ce&&(de=Fy[de]),Fe!==de){switch(de){case zd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Vd:o.depthFunc(o.LESS);break;case Ls:o.depthFunc(o.LEQUAL);break;case Gd:o.depthFunc(o.EQUAL);break;case jd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Fe=de}},setLocked:function(de){W=de},setClear:function(de){Ee!==de&&(Ee=de,Ce&&(de=1-de),o.clearDepth(de))},reset:function(){W=!1,we=null,Fe=null,Ee=null,Ce=!1}}}function l(){let W=!1,Ce=null,we=null,Fe=null,Ee=null,de=null,Ie=null,it=null,Pt=null;return{setTest:function(Mt){W||(Mt?xe(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Mt){Ce!==Mt&&!W&&(o.stencilMask(Mt),Ce=Mt)},setFunc:function(Mt,Rn,_i){(we!==Mt||Fe!==Rn||Ee!==_i)&&(o.stencilFunc(Mt,Rn,_i),we=Mt,Fe=Rn,Ee=_i)},setOp:function(Mt,Rn,_i){(de!==Mt||Ie!==Rn||it!==_i)&&(o.stencilOp(Mt,Rn,_i),de=Mt,Ie=Rn,it=_i)},setLocked:function(Mt){W=Mt},setClear:function(Mt){Pt!==Mt&&(o.clearStencil(Mt),Pt=Mt)},reset:function(){W=!1,Ce=null,we=null,Fe=null,Ee=null,de=null,Ie=null,it=null,Pt=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let x={},_={},g=new WeakMap,y=[],M=null,R=!1,S=null,b=null,D=null,B=null,U=null,I=null,k=null,F=new Ut(0,0,0),T=0,N=!1,ue=null,V=null,K=null,J=null,se=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,z=0;const oe=o.getParameter(o.VERSION);oe.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(oe)[1]),L=z>=1):oe.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),L=z>=2);let fe=null,ye={};const P=o.getParameter(o.SCISSOR_BOX),q=o.getParameter(o.VIEWPORT),ve=new nn().fromArray(P),Ae=new nn().fromArray(q);function Oe(W,Ce,we,Fe){const Ee=new Uint8Array(4),de=o.createTexture();o.bindTexture(W,de),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ie=0;Ie<we;Ie++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ce,0,o.RGBA,1,1,Fe,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(Ce+Ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return de}const ie={};ie[o.TEXTURE_2D]=Oe(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=Oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=Oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=Oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),xe(o.DEPTH_TEST),d.setFunc(Ls),lt(!1),Kt(B0),xe(o.CULL_FACE),mt(xa);function xe(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function Te(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Ge(W,Ce){return _[W]!==Ce?(o.bindFramebuffer(W,Ce),_[W]=Ce,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ce),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ke(W,Ce){let we=y,Fe=!1;if(W){we=g.get(Ce),we===void 0&&(we=[],g.set(Ce,we));const Ee=W.textures;if(we.length!==Ee.length||we[0]!==o.COLOR_ATTACHMENT0){for(let de=0,Ie=Ee.length;de<Ie;de++)we[de]=o.COLOR_ATTACHMENT0+de;we.length=Ee.length,Fe=!0}}else we[0]!==o.BACK&&(we[0]=o.BACK,Fe=!0);Fe&&o.drawBuffers(we)}function et(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const Qt={[Dr]:o.FUNC_ADD,[ry]:o.FUNC_SUBTRACT,[sy]:o.FUNC_REVERSE_SUBTRACT};Qt[oy]=o.MIN,Qt[ly]=o.MAX;const _t={[cy]:o.ZERO,[uy]:o.ONE,[fy]:o.SRC_COLOR,[kd]:o.SRC_ALPHA,[vy]:o.SRC_ALPHA_SATURATE,[my]:o.DST_COLOR,[hy]:o.DST_ALPHA,[dy]:o.ONE_MINUS_SRC_COLOR,[Id]:o.ONE_MINUS_SRC_ALPHA,[gy]:o.ONE_MINUS_DST_COLOR,[py]:o.ONE_MINUS_DST_ALPHA,[_y]:o.CONSTANT_COLOR,[xy]:o.ONE_MINUS_CONSTANT_COLOR,[by]:o.CONSTANT_ALPHA,[yy]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(W,Ce,we,Fe,Ee,de,Ie,it,Pt,Mt){if(W===xa){R===!0&&(Te(o.BLEND),R=!1);return}if(R===!1&&(xe(o.BLEND),R=!0),W!==ay){if(W!==S||Mt!==N){if((b!==Dr||U!==Dr)&&(o.blendEquation(o.FUNC_ADD),b=Dr,U=Dr),Mt)switch(W){case Ns:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F0:o.blendFunc(o.ONE,o.ONE);break;case k0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case I0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ns:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case k0:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I0:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",W);break}D=null,B=null,I=null,k=null,F.set(0,0,0),T=0,S=W,N=Mt}return}Ee=Ee||Ce,de=de||we,Ie=Ie||Fe,(Ce!==b||Ee!==U)&&(o.blendEquationSeparate(Qt[Ce],Qt[Ee]),b=Ce,U=Ee),(we!==D||Fe!==B||de!==I||Ie!==k)&&(o.blendFuncSeparate(_t[we],_t[Fe],_t[de],_t[Ie]),D=we,B=Fe,I=de,k=Ie),(it.equals(F)===!1||Pt!==T)&&(o.blendColor(it.r,it.g,it.b,Pt),F.copy(it),T=Pt),S=W,N=!1}function Dt(W,Ce){W.side===va?Te(o.CULL_FACE):xe(o.CULL_FACE);let we=W.side===Gn;Ce&&(we=!we),lt(we),W.blending===Ns&&W.transparent===!1?mt(xa):mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Fe=W.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Wt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){ue!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),ue=W)}function Kt(W){W!==ty?(xe(o.CULL_FACE),W!==V&&(W===B0?o.cullFace(o.BACK):W===ny?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),V=W}function G(W){W!==K&&(L&&o.lineWidth(W),K=W)}function Wt(W,Ce,we){W?(xe(o.POLYGON_OFFSET_FILL),(J!==Ce||se!==we)&&(J=Ce,se=we,d.getReversed()&&(Ce=-Ce),o.polygonOffset(Ce,we))):Te(o.POLYGON_OFFSET_FILL)}function Et(W){W?xe(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function Lt(W){W===void 0&&(W=o.TEXTURE0+Q-1),fe!==W&&(o.activeTexture(W),fe=W)}function We(W,Ce,we){we===void 0&&(fe===null?we=o.TEXTURE0+Q-1:we=fe);let Fe=ye[we];Fe===void 0&&(Fe={type:void 0,texture:void 0},ye[we]=Fe),(Fe.type!==W||Fe.texture!==Ce)&&(fe!==we&&(o.activeTexture(we),fe=we),o.bindTexture(W,Ce||ie[W]),Fe.type=W,Fe.texture=Ce)}function O(){const W=ye[fe];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function me(){try{o.texSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function be(){try{o.texSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function he(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function je(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Re(){try{o.texStorage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Ze(){try{o.texStorage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function tt(){try{o.texImage2D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Me(){try{o.texImage3D(...arguments)}catch(W){Rt("WebGLState:",W)}}function Se(W){ve.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function Pe(W){Ae.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Ae.copy(W))}function Le(W,Ce){let we=h.get(Ce);we===void 0&&(we=new WeakMap,h.set(Ce,we));let Fe=we.get(W);Fe===void 0&&(Fe=o.getUniformBlockIndex(Ce,W.name),we.set(W,Fe))}function Be(W,Ce){const Fe=h.get(Ce).get(W);m.get(Ce)!==Fe&&(o.uniformBlockBinding(Ce,Fe,W.__bindingPointIndex),m.set(Ce,Fe))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},fe=null,ye={},_={},g=new WeakMap,y=[],M=null,R=!1,S=null,b=null,D=null,B=null,U=null,I=null,k=null,F=new Ut(0,0,0),T=0,N=!1,ue=null,V=null,K=null,J=null,se=null,ve.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:xe,disable:Te,bindFramebuffer:Ge,drawBuffers:Ke,useProgram:et,setBlending:mt,setMaterial:Dt,setFlipSided:lt,setCullFace:Kt,setLineWidth:G,setPolygonOffset:Wt,setScissorTest:Et,activeTexture:Lt,bindTexture:We,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:tt,texImage3D:Me,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:Re,texStorage3D:Ze,texSubImage2D:me,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:je,scissor:Se,viewport:Pe,reset:ut}}function t2(o,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,x=new WeakMap;let _;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,E){return y?new OffscreenCanvas(O,E):zc("canvas")}function R(O,E,Y){let me=1;const be=We(O);if((be.width>Y||be.height>Y)&&(me=Y/Math.max(be.width,be.height)),me<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(me*be.width),je=Math.floor(me*be.height);_===void 0&&(_=M(he,je));const Re=E?M(he,je):_;return Re.width=he,Re.height=je,Re.getContext("2d").drawImage(O,0,0,he,je),ot("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+he+"x"+je+")."),Re}else return"data"in O&&ot("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),O;return O}function S(O){return O.generateMipmaps}function b(O){o.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function B(O,E,Y,me,be=!1){if(O!==null){if(o[O]!==void 0)return o[O];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=E;if(E===o.RED&&(Y===o.FLOAT&&(he=o.R32F),Y===o.HALF_FLOAT&&(he=o.R16F),Y===o.UNSIGNED_BYTE&&(he=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.R8UI),Y===o.UNSIGNED_SHORT&&(he=o.R16UI),Y===o.UNSIGNED_INT&&(he=o.R32UI),Y===o.BYTE&&(he=o.R8I),Y===o.SHORT&&(he=o.R16I),Y===o.INT&&(he=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(he=o.RG32F),Y===o.HALF_FLOAT&&(he=o.RG16F),Y===o.UNSIGNED_BYTE&&(he=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RG8UI),Y===o.UNSIGNED_SHORT&&(he=o.RG16UI),Y===o.UNSIGNED_INT&&(he=o.RG32UI),Y===o.BYTE&&(he=o.RG8I),Y===o.SHORT&&(he=o.RG16I),Y===o.INT&&(he=o.RG32I)),E===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(he=o.RGB16UI),Y===o.UNSIGNED_INT&&(he=o.RGB32UI),Y===o.BYTE&&(he=o.RGB8I),Y===o.SHORT&&(he=o.RGB16I),Y===o.INT&&(he=o.RGB32I)),E===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),Y===o.UNSIGNED_INT&&(he=o.RGBA32UI),Y===o.BYTE&&(he=o.RGBA8I),Y===o.SHORT&&(he=o.RGBA16I),Y===o.INT&&(he=o.RGBA32I)),E===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(he=o.R11F_G11F_B10F)),E===o.RGBA){const je=be?kc:Tt.getTransfer(me);Y===o.FLOAT&&(he=o.RGBA32F),Y===o.HALF_FLOAT&&(he=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(he=je===kt?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&t.get("EXT_color_buffer_float"),he}function U(O,E){let Y;return O?E===null||E===ji||E===Go?Y=o.DEPTH24_STENCIL8:E===Ii?Y=o.DEPTH32F_STENCIL8:E===Vo&&(Y=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===Go?Y=o.DEPTH_COMPONENT24:E===Ii?Y=o.DEPTH_COMPONENT32F:E===Vo&&(Y=o.DEPTH_COMPONENT16),Y}function I(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Mn&&O.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function k(O){const E=O.target;E.removeEventListener("dispose",k),T(E),E.isVideoTexture&&x.delete(E)}function F(O){const E=O.target;E.removeEventListener("dispose",F),ue(E)}function T(O){const E=r.get(O);if(E.__webglInit===void 0)return;const Y=O.source,me=g.get(Y);if(me){const be=me[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&N(O),Object.keys(me).length===0&&g.delete(Y)}r.remove(O)}function N(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const Y=O.source,me=g.get(Y);delete me[E.__cacheKey],d.memory.textures--}function ue(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let be=0;be<E.__webglFramebuffer[me].length;be++)o.deleteFramebuffer(E.__webglFramebuffer[me][be]);else o.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)o.deleteFramebuffer(E.__webglFramebuffer[me]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=O.textures;for(let me=0,be=Y.length;me<be;me++){const he=r.get(Y[me]);he.__webglTexture&&(o.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(Y[me])}r.remove(O)}let V=0;function K(){V=0}function J(){const O=V;return O>=l.maxTextures&&ot("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function se(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Q(O,E){const Y=r.get(O);if(O.isVideoTexture&&Et(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){const me=O.image;if(me===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Y,O,E);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function L(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ie(Y,O,E);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function z(O,E){const Y=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ie(Y,O,E);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function oe(O,E){const Y=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){xe(Y,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const fe={[qd]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[Yd]:o.MIRRORED_REPEAT},ye={[Mn]:o.NEAREST,[My]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[od]:o.LINEAR_MIPMAP_NEAREST,[Ur]:o.LINEAR_MIPMAP_LINEAR},P={[Cy]:o.NEVER,[Ly]:o.ALWAYS,[Ry]:o.LESS,[Ih]:o.LEQUAL,[Dy]:o.EQUAL,[zh]:o.GEQUAL,[Ny]:o.GREATER,[Uy]:o.NOTEQUAL};function q(O,E){if(E.type===Ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===od||E.magFilter===cc||E.magFilter===Ur||E.minFilter===Cn||E.minFilter===od||E.minFilter===cc||E.minFilter===Ur)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,fe[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,fe[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,fe[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,ye[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==cc&&E.minFilter!==Ur||E.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(O,E){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",k));const me=E.source;let be=g.get(me);be===void 0&&(be={},g.set(me,be));const he=se(E);if(he!==O.__cacheKey){be[he]===void 0&&(be[he]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),be[he].usedTimes++;const je=be[O.__cacheKey];je!==void 0&&(be[O.__cacheKey].usedTimes--,je.usedTimes===0&&N(E)),O.__cacheKey=he,O.__webglTexture=be[he].texture}return Y}function Ae(O,E,Y){return Math.floor(Math.floor(O/Y)/E)}function Oe(O,E,Y,me){const he=O.updateRanges;if(he.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Y,me,E.data);else{he.sort((Me,Se)=>Me.start-Se.start);let je=0;for(let Me=1;Me<he.length;Me++){const Se=he[je],Pe=he[Me],Le=Se.start+Se.count,Be=Ae(Pe.start,E.width,4),ut=Ae(Se.start,E.width,4);Pe.start<=Le+1&&Be===ut&&Ae(Pe.start+Pe.count-1,E.width,4)===Be?Se.count=Math.max(Se.count,Pe.start+Pe.count-Se.start):(++je,he[je]=Pe)}he.length=je+1;const Re=o.getParameter(o.UNPACK_ROW_LENGTH),Ze=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Me=0,Se=he.length;Me<Se;Me++){const Pe=he[Me],Le=Math.floor(Pe.start/4),Be=Math.ceil(Pe.count/4),ut=Le%E.width,W=Math.floor(Le/E.width),Ce=Be,we=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,ut,W,Ce,we,Y,me,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Re),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ze),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function ie(O,E,Y){let me=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=o.TEXTURE_3D);const be=ve(O,E),he=E.source;i.bindTexture(me,O.__webglTexture,o.TEXTURE0+Y);const je=r.get(he);if(he.version!==je.__version||be===!0){i.activeTexture(o.TEXTURE0+Y);const Re=Tt.getPrimaries(Tt.workingColorSpace),Ze=E.colorSpace===nr?null:Tt.getPrimaries(E.colorSpace),tt=E.colorSpace===nr||Re===Ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Me=R(E.image,!1,l.maxTextureSize);Me=Lt(E,Me);const Se=c.convert(E.format,E.colorSpace),Pe=c.convert(E.type);let Le=B(E.internalFormat,Se,Pe,E.colorSpace,E.isVideoTexture);q(me,E);let Be;const ut=E.mipmaps,W=E.isVideoTexture!==!0,Ce=je.__version===void 0||be===!0,we=he.dataReady,Fe=I(E,Me);if(E.isDepthTexture)Le=U(E.format===Lr,E.type),Ce&&(W?i.texStorage2D(o.TEXTURE_2D,1,Le,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,Le,Me.width,Me.height,0,Se,Pe,null));else if(E.isDataTexture)if(ut.length>0){W&&Ce&&i.texStorage2D(o.TEXTURE_2D,Fe,Le,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Be=ut[Ee],W?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Be.width,Be.height,Se,Pe,Be.data):i.texImage2D(o.TEXTURE_2D,Ee,Le,Be.width,Be.height,0,Se,Pe,Be.data);E.generateMipmaps=!1}else W?(Ce&&i.texStorage2D(o.TEXTURE_2D,Fe,Le,Me.width,Me.height),we&&Oe(E,Me,Se,Pe)):i.texImage2D(o.TEXTURE_2D,0,Le,Me.width,Me.height,0,Se,Pe,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,Le,ut[0].width,ut[0].height,Me.depth);for(let Ee=0,de=ut.length;Ee<de;Ee++)if(Be=ut[Ee],E.format!==Ri)if(Se!==null)if(W){if(we)if(E.layerUpdates.size>0){const Ie=ov(Be.width,Be.height,E.format,E.type);for(const it of E.layerUpdates){const Pt=Be.data.subarray(it*Ie/Be.data.BYTES_PER_ELEMENT,(it+1)*Ie/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,it,Be.width,Be.height,1,Se,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Be.width,Be.height,Me.depth,Se,Be.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Le,Be.width,Be.height,Me.depth,0,Be.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?we&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Be.width,Be.height,Me.depth,Se,Pe,Be.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Le,Be.width,Be.height,Me.depth,0,Se,Pe,Be.data)}else{W&&Ce&&i.texStorage2D(o.TEXTURE_2D,Fe,Le,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Be=ut[Ee],E.format!==Ri?Se!==null?W?we&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,Be.width,Be.height,Se,Be.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Le,Be.width,Be.height,0,Be.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Be.width,Be.height,Se,Pe,Be.data):i.texImage2D(o.TEXTURE_2D,Ee,Le,Be.width,Be.height,0,Se,Pe,Be.data)}else if(E.isDataArrayTexture)if(W){if(Ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,Le,Me.width,Me.height,Me.depth),we)if(E.layerUpdates.size>0){const Ee=ov(Me.width,Me.height,E.format,E.type);for(const de of E.layerUpdates){const Ie=Me.data.subarray(de*Ee/Me.data.BYTES_PER_ELEMENT,(de+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,Se,Pe,Ie)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Se,Pe,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,Me.width,Me.height,Me.depth,0,Se,Pe,Me.data);else if(E.isData3DTexture)W?(Ce&&i.texStorage3D(o.TEXTURE_3D,Fe,Le,Me.width,Me.height,Me.depth),we&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Se,Pe,Me.data)):i.texImage3D(o.TEXTURE_3D,0,Le,Me.width,Me.height,Me.depth,0,Se,Pe,Me.data);else if(E.isFramebufferTexture){if(Ce)if(W)i.texStorage2D(o.TEXTURE_2D,Fe,Le,Me.width,Me.height);else{let Ee=Me.width,de=Me.height;for(let Ie=0;Ie<Fe;Ie++)i.texImage2D(o.TEXTURE_2D,Ie,Le,Ee,de,0,Se,Pe,null),Ee>>=1,de>>=1}}else if(ut.length>0){if(W&&Ce){const Ee=We(ut[0]);i.texStorage2D(o.TEXTURE_2D,Fe,Le,Ee.width,Ee.height)}for(let Ee=0,de=ut.length;Ee<de;Ee++)Be=ut[Ee],W?we&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Se,Pe,Be):i.texImage2D(o.TEXTURE_2D,Ee,Le,Se,Pe,Be);E.generateMipmaps=!1}else if(W){if(Ce){const Ee=We(Me);i.texStorage2D(o.TEXTURE_2D,Fe,Le,Ee.width,Ee.height)}we&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Se,Pe,Me)}else i.texImage2D(o.TEXTURE_2D,0,Le,Se,Pe,Me);S(E)&&b(me),je.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function xe(O,E,Y){if(E.image.length!==6)return;const me=ve(O,E),be=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Y);const he=r.get(be);if(be.version!==he.__version||me===!0){i.activeTexture(o.TEXTURE0+Y);const je=Tt.getPrimaries(Tt.workingColorSpace),Re=E.colorSpace===nr?null:Tt.getPrimaries(E.colorSpace),Ze=E.colorSpace===nr||je===Re?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let de=0;de<6;de++)!tt&&!Me?Se[de]=R(E.image[de],!0,l.maxCubemapSize):Se[de]=Me?E.image[de].image:E.image[de],Se[de]=Lt(E,Se[de]);const Pe=Se[0],Le=c.convert(E.format,E.colorSpace),Be=c.convert(E.type),ut=B(E.internalFormat,Le,Be,E.colorSpace),W=E.isVideoTexture!==!0,Ce=he.__version===void 0||me===!0,we=be.dataReady;let Fe=I(E,Pe);q(o.TEXTURE_CUBE_MAP,E);let Ee;if(tt){W&&Ce&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ut,Pe.width,Pe.height);for(let de=0;de<6;de++){Ee=Se[de].mipmaps;for(let Ie=0;Ie<Ee.length;Ie++){const it=Ee[Ie];E.format!==Ri?Le!==null?W?we&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,it.width,it.height,Le,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,ut,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,it.width,it.height,Le,Be,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,ut,it.width,it.height,0,Le,Be,it.data)}}}else{if(Ee=E.mipmaps,W&&Ce){Ee.length>0&&Fe++;const de=We(Se[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ut,de.width,de.height)}for(let de=0;de<6;de++)if(Me){W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se[de].width,Se[de].height,Le,Be,Se[de].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Se[de].width,Se[de].height,0,Le,Be,Se[de].data);for(let Ie=0;Ie<Ee.length;Ie++){const Pt=Ee[Ie].image[de].image;W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Pt.width,Pt.height,Le,Be,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,ut,Pt.width,Pt.height,0,Le,Be,Pt.data)}}else{W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Le,Be,Se[de]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Le,Be,Se[de]);for(let Ie=0;Ie<Ee.length;Ie++){const it=Ee[Ie];W?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,Le,Be,it.image[de]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,ut,Le,Be,it.image[de])}}}S(E)&&b(o.TEXTURE_CUBE_MAP),he.__version=be.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Te(O,E,Y,me,be,he){const je=c.convert(Y.format,Y.colorSpace),Re=c.convert(Y.type),Ze=B(Y.internalFormat,je,Re,Y.colorSpace),tt=r.get(E),Me=r.get(Y);if(Me.__renderTarget=E,!tt.__hasExternalTextures){const Se=Math.max(1,E.width>>he),Pe=Math.max(1,E.height>>he);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,he,Ze,Se,Pe,E.depth,0,je,Re,null):i.texImage2D(be,he,Ze,Se,Pe,0,je,Re,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Wt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,be,Me.__webglTexture,0,G(E)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,be,Me.__webglTexture,he),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(O,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const me=E.depthTexture,be=me&&me.isDepthTexture?me.type:null,he=U(E.stencilBuffer,be),je=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Wt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),he,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),he,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,he,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,je,o.RENDERBUFFER,O)}else{const me=E.textures;for(let be=0;be<me.length;be++){const he=me[be],je=c.convert(he.format,he.colorSpace),Re=c.convert(he.type),Ze=B(he.internalFormat,je,Re,he.colorSpace);Wt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Ze,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Ze,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ze,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ke(O,E,Y){const me=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),be.__webglTexture===void 0){be.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,be.__webglTexture),q(o.TEXTURE_CUBE_MAP,E.depthTexture);const tt=c.convert(E.depthTexture.format),Me=c.convert(E.depthTexture.type);let Se;E.depthTexture.format===Sa?Se=o.DEPTH_COMPONENT24:E.depthTexture.format===Lr&&(Se=o.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Se,E.width,E.height,0,tt,Me,null)}}else Q(E.depthTexture,0);const he=be.__webglTexture,je=G(E),Re=me?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,Ze=E.depthTexture.format===Lr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)Wt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ze,Re,he,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,Ze,Re,he,0);else if(E.depthTexture.format===Lr)Wt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ze,Re,he,0,je):o.framebufferTexture2D(o.FRAMEBUFFER,Ze,Re,he,0);else throw new Error("Unknown depthTexture format")}function et(O){const E=r.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const me=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",be)};me.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=me}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let me=0;me<6;me++)Ke(E.__webglFramebuffer[me],O,me);else{const me=O.texture.mipmaps;me&&me.length>0?Ke(E.__webglFramebuffer[0],O,0):Ke(E.__webglFramebuffer,O,0)}else if(Y){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=o.createRenderbuffer(),Ge(E.__webglDepthbuffer[me],O,!1);else{const be=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,he)}}else{const me=O.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ge(E.__webglDepthbuffer,O,!1);else{const be=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,he),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,he)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(O,E,Y){const me=r.get(O);E!==void 0&&Te(me.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&et(O)}function _t(O){const E=O.texture,Y=r.get(O),me=r.get(E);O.addEventListener("dispose",F);const be=O.textures,he=O.isWebGLCubeRenderTarget===!0,je=be.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=E.version,d.memory.textures++),he){Y.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Re]=[];for(let Ze=0;Ze<E.mipmaps.length;Ze++)Y.__webglFramebuffer[Re][Ze]=o.createFramebuffer()}else Y.__webglFramebuffer[Re]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Re=0;Re<E.mipmaps.length;Re++)Y.__webglFramebuffer[Re]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(je)for(let Re=0,Ze=be.length;Re<Ze;Re++){const tt=r.get(be[Re]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&Wt(O)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Re=0;Re<be.length;Re++){const Ze=be[Re];Y.__webglColorRenderbuffer[Re]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Re]);const tt=c.convert(Ze.format,Ze.colorSpace),Me=c.convert(Ze.type),Se=B(Ze.internalFormat,tt,Me,Ze.colorSpace,O.isXRRenderTarget===!0),Pe=G(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe,Se,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Re,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Re])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(he){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),q(o.TEXTURE_CUBE_MAP,E);for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)Te(Y.__webglFramebuffer[Re][Ze],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ze);else Te(Y.__webglFramebuffer[Re],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(E)&&b(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Re=0,Ze=be.length;Re<Ze;Re++){const tt=be[Re],Me=r.get(tt);let Se=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Se=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Se,Me.__webglTexture),q(Se,tt),Te(Y.__webglFramebuffer,O,tt,o.COLOR_ATTACHMENT0+Re,Se,0),S(tt)&&b(Se)}i.unbindTexture()}else{let Re=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Re,me.__webglTexture),q(Re,E),E.mipmaps&&E.mipmaps.length>0)for(let Ze=0;Ze<E.mipmaps.length;Ze++)Te(Y.__webglFramebuffer[Ze],O,E,o.COLOR_ATTACHMENT0,Re,Ze);else Te(Y.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Re,0);S(E)&&b(Re),i.unbindTexture()}O.depthBuffer&&et(O)}function mt(O){const E=O.textures;for(let Y=0,me=E.length;Y<me;Y++){const be=E[Y];if(S(be)){const he=D(O),je=r.get(be).__webglTexture;i.bindTexture(he,je),b(he),i.unbindTexture()}}}const Dt=[],lt=[];function Kt(O){if(O.samples>0){if(Wt(O)===!1){const E=O.textures,Y=O.width,me=O.height;let be=o.COLOR_BUFFER_BIT;const he=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,je=r.get(O),Re=E.length>1;if(Re)for(let tt=0;tt<E.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Ze=O.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Re){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Me=r.get(E[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,Y,me,0,0,Y,me,be,o.NEAREST),m===!0&&(Dt.length=0,lt.length=0,Dt.push(o.COLOR_ATTACHMENT0+tt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Dt.push(he),lt.push(he),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Re)for(let tt=0;tt<E.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,je.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,je.__webglColorRenderbuffer[tt]);const Me=r.get(E[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,je.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(O){return Math.min(l.maxSamples,O.samples)}function Wt(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(O){const E=d.render.frame;x.get(O)!==E&&(x.set(O,E),O.update())}function Lt(O,E){const Y=O.colorSpace,me=O.format,be=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==Bs&&Y!==nr&&(Tt.getTransfer(Y)===kt?(me!==Ri||be!==mi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",Y)),E}function We(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=oe,this.rebindTextures=Qt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function n2(o,t){function i(r,l=nr){let c;const d=Tt.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===Oh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ph)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Gv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===jv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hv)return o.BYTE;if(r===Vv)return o.SHORT;if(r===Vo)return o.UNSIGNED_SHORT;if(r===Lh)return o.INT;if(r===ji)return o.UNSIGNED_INT;if(r===Ii)return o.FLOAT;if(r===ya)return o.HALF_FLOAT;if(r===Xv)return o.ALPHA;if(r===Wv)return o.RGB;if(r===Ri)return o.RGBA;if(r===Sa)return o.DEPTH_COMPONENT;if(r===Lr)return o.DEPTH_STENCIL;if(r===qv)return o.RED;if(r===Bh)return o.RED_INTEGER;if(r===Ps)return o.RG;if(r===Fh)return o.RG_INTEGER;if(r===kh)return o.RGBA_INTEGER;if(r===Lc||r===Oc||r===Pc||r===Bc)if(d===kt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Kd||r===Qd||r===Jd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d||r===eh||r===th||r===nh||r===ih||r===ah||r===rh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===$d||r===eh)return d===kt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===th)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===nh)return c.COMPRESSED_R11_EAC;if(r===ih)return c.COMPRESSED_SIGNED_R11_EAC;if(r===ah)return c.COMPRESSED_RG11_EAC;if(r===rh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===sh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xh)return d===kt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bh||r===yh||r===Sh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===bh)return d===kt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Eh||r===Mh||r===Th||r===Ah)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Eh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Mh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Th)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ah)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const i2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a2=`
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

}`;class r2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new i_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new vi({vertexShader:i2,fragmentShader:a2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Di(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s2 extends ks{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,_=null,g=null,y=null,M=null;const R=typeof XRWebGLBinding<"u",S=new r2,b={},D=i.getContextAttributes();let B=null,U=null;const I=[],k=[],F=new It;let T=null;const N=new pi;N.viewport=new nn;const ue=new pi;ue.viewport=new nn;const V=[N,ue],K=new _S;let J=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=I[ie];return xe===void 0&&(xe=new md,I[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=I[ie];return xe===void 0&&(xe=new md,I[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=I[ie];return xe===void 0&&(xe=new md,I[ie]=xe),xe.getHandSpace()};function Q(ie){const xe=k.indexOf(ie.inputSource);if(xe===-1)return;const Te=I[xe];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,h||d),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function L(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",z);for(let ie=0;ie<I.length;ie++){const xe=k[ie];xe!==null&&(k[ie]=null,I[ie].disconnect(xe))}J=null,se=null,S.reset();for(const ie in b)delete b[ie];t.setRenderTarget(B),y=null,g=null,_=null,l=null,U=null,Oe.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){p=ie,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",L),l.addEventListener("inputsourceschange",z),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ge=null,Ke=null;D.depth&&(Ke=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=D.stencil?Lr:Sa,Ge=D.stencil?Go:ji);const et={colorFormat:i.RGBA8,depthFormat:Ke,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(et),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),U=new Vi(g.textureWidth,g.textureHeight,{format:Ri,type:mi,depthTexture:new jo(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Vi(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(ie){for(let xe=0;xe<ie.removed.length;xe++){const Te=ie.removed[xe],Ge=k.indexOf(Te);Ge>=0&&(k[Ge]=null,I[Ge].disconnect(Te))}for(let xe=0;xe<ie.added.length;xe++){const Te=ie.added[xe];let Ge=k.indexOf(Te);if(Ge===-1){for(let et=0;et<I.length;et++)if(et>=k.length){k.push(Te),Ge=et;break}else if(k[et]===null){k[et]=Te,Ge=et;break}if(Ge===-1)break}const Ke=I[Ge];Ke&&Ke.connect(Te)}}const oe=new re,fe=new re;function ye(ie,xe,Te){oe.setFromMatrixPosition(xe.matrixWorld),fe.setFromMatrixPosition(Te.matrixWorld);const Ge=oe.distanceTo(fe),Ke=xe.projectionMatrix.elements,et=Te.projectionMatrix.elements,Qt=Ke[14]/(Ke[10]-1),_t=Ke[14]/(Ke[10]+1),mt=(Ke[9]+1)/Ke[5],Dt=(Ke[9]-1)/Ke[5],lt=(Ke[8]-1)/Ke[0],Kt=(et[8]+1)/et[0],G=Qt*lt,Wt=Qt*Kt,Et=Ge/(-lt+Kt),Lt=Et*-lt;if(xe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Lt),ie.translateZ(Et),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ke[10]===-1)ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const We=Qt+Et,O=_t+Et,E=G-Lt,Y=Wt+(Ge-Lt),me=mt*_t/O*We,be=Dt*_t/O*We;ie.projectionMatrix.makePerspective(E,Y,me,be,We,O),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function P(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let xe=ie.near,Te=ie.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(Te=S.depthFar)),K.near=ue.near=N.near=xe,K.far=ue.far=N.far=Te,(J!==K.near||se!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),J=K.near,se=K.far),K.layers.mask=ie.layers.mask|6,N.layers.mask=K.layers.mask&-5,ue.layers.mask=K.layers.mask&-3;const Ge=ie.parent,Ke=K.cameras;P(K,Ge);for(let et=0;et<Ke.length;et++)P(Ke[et],Ge);Ke.length===2?ye(K,N,ue):K.projectionMatrix.copy(N.projectionMatrix),q(ie,K,Ge)};function q(ie,xe,Te){Te===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=wh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(ie){return b[ie]};let ve=null;function Ae(ie,xe){if(x=xe.getViewerPose(h||d),M=xe,x!==null){const Te=x.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Ge=!1;Te.length!==K.cameras.length&&(K.cameras.length=0,Ge=!0);for(let _t=0;_t<Te.length;_t++){const mt=Te[_t];let Dt=null;if(y!==null)Dt=y.getViewport(mt);else{const Kt=_.getViewSubImage(g,mt);Dt=Kt.viewport,_t===0&&(t.setRenderTargetTextures(U,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(U))}let lt=V[_t];lt===void 0&&(lt=new pi,lt.layers.enable(_t),lt.viewport=new nn,V[_t]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),_t===0&&(K.matrix.copy(lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ge===!0&&K.cameras.push(lt)}const Ke=l.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const _t=_.getDepthInformation(Te[0]);_t&&_t.isValid&&_t.texture&&S.init(_t,l.renderState)}if(Ke&&Ke.includes("camera-access")&&R){t.state.unbindTexture(),_=r.getBinding();for(let _t=0;_t<Te.length;_t++){const mt=Te[_t].camera;if(mt){let Dt=b[mt];Dt||(Dt=new i_,b[mt]=Dt);const lt=_.getCameraImage(mt);Dt.sourceTexture=lt}}}}for(let Te=0;Te<I.length;Te++){const Ge=k[Te],Ke=I[Te];Ge!==null&&Ke!==void 0&&Ke.update(Ge,xe,h||d)}ve&&ve(ie,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),M=null}const Oe=new o_;Oe.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}}const Cr=new Ea,o2=new dn;function l2(o,t){function i(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function r(S,b){b.color.getRGB(S.fogColor.value,a_(o)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function l(S,b,D,B,U){b.isMeshBasicMaterial?c(S,b):b.isMeshLambertMaterial?(c(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(S,b),_(S,b)):b.isMeshPhongMaterial?(c(S,b),x(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(S,b),g(S,b),b.isMeshPhysicalMaterial&&y(S,b,U)):b.isMeshMatcapMaterial?(c(S,b),M(S,b)):b.isMeshDepthMaterial?c(S,b):b.isMeshDistanceMaterial?(c(S,b),R(S,b)):b.isMeshNormalMaterial?c(S,b):b.isLineBasicMaterial?(d(S,b),b.isLineDashedMaterial&&p(S,b)):b.isPointsMaterial?m(S,b,D,B):b.isSpriteMaterial?h(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,i(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===Gn&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,i(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===Gn&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,i(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,i(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const D=t.get(b),B=D.envMap,U=D.envMapRotation;B&&(S.envMap.value=B,Cr.copy(U),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),S.envMapRotation.value.setFromMatrix4(o2.makeRotationFromEuler(Cr)),S.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,S.aoMapTransform))}function d(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform))}function p(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function m(S,b,D,B){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*D,S.scale.value=B*.5,b.map&&(S.map.value=b.map,i(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function h(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function x(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function _(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function g(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function y(S,b,D){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Gn&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,b){b.matcap&&(S.matcap.value=b.matcap)}function R(S,b){const D=t.get(b).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function c2(o,t,i,r){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,B){const U=B.program;r.uniformBlockBinding(D,U)}function h(D,B){let U=l[D.id];U===void 0&&(M(D),U=x(D),l[D.id]=U,D.addEventListener("dispose",S));const I=B.program;r.updateUBOMapping(D,I);const k=t.render.frame;c[D.id]!==k&&(g(D),c[D.id]=k)}function x(D){const B=_();D.__bindingPointIndex=B;const U=o.createBuffer(),I=D.__size,k=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,I,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,B,U),U}function _(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const B=l[D.id],U=D.uniforms,I=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,B);for(let k=0,F=U.length;k<F;k++){const T=Array.isArray(U[k])?U[k]:[U[k]];for(let N=0,ue=T.length;N<ue;N++){const V=T[N];if(y(V,k,N,I)===!0){const K=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let se=0;for(let Q=0;Q<J.length;Q++){const L=J[Q],z=R(L);typeof L=="number"||typeof L=="boolean"?(V.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,K+se,V.__data)):L.isMatrix3?(V.__data[0]=L.elements[0],V.__data[1]=L.elements[1],V.__data[2]=L.elements[2],V.__data[3]=0,V.__data[4]=L.elements[3],V.__data[5]=L.elements[4],V.__data[6]=L.elements[5],V.__data[7]=0,V.__data[8]=L.elements[6],V.__data[9]=L.elements[7],V.__data[10]=L.elements[8],V.__data[11]=0):(L.toArray(V.__data,se),se+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,B,U,I){const k=D.value,F=B+"_"+U;if(I[F]===void 0)return typeof k=="number"||typeof k=="boolean"?I[F]=k:I[F]=k.clone(),!0;{const T=I[F];if(typeof k=="number"||typeof k=="boolean"){if(T!==k)return I[F]=k,!0}else if(T.equals(k)===!1)return T.copy(k),!0}return!1}function M(D){const B=D.uniforms;let U=0;const I=16;for(let F=0,T=B.length;F<T;F++){const N=Array.isArray(B[F])?B[F]:[B[F]];for(let ue=0,V=N.length;ue<V;ue++){const K=N[ue],J=Array.isArray(K.value)?K.value:[K.value];for(let se=0,Q=J.length;se<Q;se++){const L=J[se],z=R(L),oe=U%I,fe=oe%z.boundary,ye=oe+fe;U+=fe,ye!==0&&I-ye<z.storage&&(U+=I-ye),K.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=U,U+=z.storage}}}const k=U%I;return k>0&&(U+=I-k),D.__size=U,D.__cache={},this}function R(D){const B={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(B.boundary=4,B.storage=4):D.isVector2?(B.boundary=8,B.storage=8):D.isVector3||D.isColor?(B.boundary=16,B.storage=12):D.isVector4?(B.boundary=16,B.storage=16):D.isMatrix3?(B.boundary=48,B.storage=48):D.isMatrix4?(B.boundary=64,B.storage=64):D.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",D),B}function S(D){const B=D.target;B.removeEventListener("dispose",S);const U=d.indexOf(B.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[B.id]),delete l[B.id],delete c[B.id]}function b(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:h,dispose:b}}const u2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function f2(){return Fi===null&&(Fi=new rS(u2,16,16,Ps,ya),Fi.name="DFG_LUT",Fi.minFilter=Cn,Fi.magFilter=Cn,Fi.wrapS=_a,Fi.wrapT=_a,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class d2{constructor(t={}){const{canvas:i=Py(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=mi}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const R=y,S=new Set([kh,Fh,Bh]),b=new Set([mi,ji,Vo,Go,Oh,Ph]),D=new Uint32Array(4),B=new Int32Array(4);let U=null,I=null;const k=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ue=!1;this._outputColorSpace=hi;let V=0,K=0,J=null,se=-1,Q=null;const L=new nn,z=new nn;let oe=null;const fe=new Ut(0);let ye=0,P=i.width,q=i.height,ve=1,Ae=null,Oe=null;const ie=new nn(0,0,P,q),xe=new nn(0,0,P,q);let Te=!1;const Ge=new t_;let Ke=!1,et=!1;const Qt=new dn,_t=new re,mt=new nn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return J===null?ve:1}let G=r;function Wt(w,X){return i.getContext(w,X)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Uh}`),i.addEventListener("webglcontextlost",Ie,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),G===null){const X="webgl2";if(G=Wt(X,w),G===null)throw Wt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Rt("WebGLRenderer: "+w.message),w}let Et,Lt,We,O,E,Y,me,be,he,je,Re,Ze,tt,Me,Se,Pe,Le,Be,ut,W,Ce,we,Fe;function Ee(){Et=new dM(G),Et.init(),Ce=new n2(G,Et),Lt=new aM(G,Et,t,Ce),We=new e2(G,Et),Lt.reversedDepthBuffer&&g&&We.buffers.depth.setReversed(!0),O=new mM(G),E=new zT,Y=new t2(G,Et,We,E,Lt,Ce,O),me=new fM(N),be=new bS(G),we=new nM(G,be),he=new hM(G,be,O,we),je=new vM(G,he,be,we,O),Be=new gM(G,Lt,Y),Se=new rM(E),Re=new IT(N,me,Et,Lt,we,Se),Ze=new l2(N,E),tt=new VT,Me=new YT(Et),Le=new tM(N,me,We,je,M,m),Pe=new $T(N,je,Lt),Fe=new c2(G,O,Lt,We),ut=new iM(G,Et,O),W=new pM(G,Et,O),O.programs=Re.programs,N.capabilities=Lt,N.extensions=Et,N.properties=E,N.renderLists=tt,N.shadowMap=Pe,N.state=We,N.info=O}Ee(),R!==mi&&(T=new xM(R,i.width,i.height,l,c));const de=new s2(N,G);this.xr=de,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(P,q,!1))},this.getSize=function(w){return w.set(P,q)},this.setSize=function(w,X,le=!0){if(de.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,q=X,i.width=Math.floor(w*ve),i.height=Math.floor(X*ve),le===!0&&(i.style.width=w+"px",i.style.height=X+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(P*ve,q*ve).floor()},this.setDrawingBufferSize=function(w,X,le){P=w,q=X,ve=le,i.width=Math.floor(w*le),i.height=Math.floor(X*le),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(R===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,X,le,ne){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,X,le,ne),We.viewport(L.copy(ie).multiplyScalar(ve).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,X,le,ne){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,X,le,ne),We.scissor(z.copy(xe).multiplyScalar(ve).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){We.setScissorTest(Te=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){Oe=w},this.getClearColor=function(w){return w.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,le=!0){let ne=0;if(w){let $=!1;if(J!==null){const De=J.texture.format;$=S.has(De)}if($){const De=J.texture.type,ke=b.has(De),Ne=Le.getClearColor(),Xe=Le.getClearAlpha(),Ye=Ne.r,nt=Ne.g,rt=Ne.b;ke?(D[0]=Ye,D[1]=nt,D[2]=rt,D[3]=Xe,G.clearBufferuiv(G.COLOR,0,D)):(B[0]=Ye,B[1]=nt,B[2]=rt,B[3]=Xe,G.clearBufferiv(G.COLOR,0,B))}else ne|=G.COLOR_BUFFER_BIT}X&&(ne|=G.DEPTH_BUFFER_BIT),le&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ie,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Le.dispose(),tt.dispose(),Me.dispose(),E.dispose(),me.dispose(),je.dispose(),we.dispose(),Fe.dispose(),Re.dispose(),de.dispose(),de.removeEventListener("sessionstart",Br),de.removeEventListener("sessionend",Fr),Ni.stop()};function Ie(w){w.preventDefault(),j0("WebGLRenderer: Context Lost."),ue=!0}function it(){j0("WebGLRenderer: Context Restored."),ue=!1;const w=O.autoReset,X=Pe.enabled,le=Pe.autoUpdate,ne=Pe.needsUpdate,$=Pe.type;Ee(),O.autoReset=w,Pe.enabled=X,Pe.autoUpdate=le,Pe.needsUpdate=ne,Pe.type=$}function Pt(w){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mt(w){const X=w.target;X.removeEventListener("dispose",Mt),Rn(X)}function Rn(w){_i(w),E.remove(w)}function _i(w){const X=E.get(w).programs;X!==void 0&&(X.forEach(function(le){Re.releaseProgram(le)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,le,ne,$,De){X===null&&(X=Dt);const ke=$.isMesh&&$.matrixWorld.determinant()<0,Ne=Qo(w,X,le,ne,$);We.setMaterial(ne,ke);let Xe=le.index,Ye=1;if(ne.wireframe===!0){if(Xe=he.getWireframeAttribute(le),Xe===void 0)return;Ye=2}const nt=le.drawRange,rt=le.attributes.position;let ze=nt.start*Ye,ft=(nt.start+nt.count)*Ye;De!==null&&(ze=Math.max(ze,De.start*Ye),ft=Math.min(ft,(De.start+De.count)*Ye)),Xe!==null?(ze=Math.max(ze,0),ft=Math.min(ft,Xe.count)):rt!=null&&(ze=Math.max(ze,0),ft=Math.min(ft,rt.count));const qt=ft-ze;if(qt<0||qt===1/0)return;we.setup($,ne,Ne,le,Xe);let Yt,At=ut;if(Xe!==null&&(Yt=be.get(Xe),At=W,At.setIndex(Yt)),$.isMesh)ne.wireframe===!0?(We.setLineWidth(ne.wireframeLinewidth*Kt()),At.setMode(G.LINES)):At.setMode(G.TRIANGLES);else if($.isLine){let pn=ne.linewidth;pn===void 0&&(pn=1),We.setLineWidth(pn*Kt()),$.isLineSegments?At.setMode(G.LINES):$.isLineLoop?At.setMode(G.LINE_LOOP):At.setMode(G.LINE_STRIP)}else $.isPoints?At.setMode(G.POINTS):$.isSprite&&At.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Hc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))At.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const pn=$._multiDrawStarts,Ve=$._multiDrawCounts,Dn=$._multiDrawCount,at=Xe?be.get(Xe).bytesPerElement:1,Nn=E.get(ne).currentProgram.getUniforms();for(let jn=0;jn<Dn;jn++)Nn.setValue(G,"_gl_DrawID",jn),At.render(pn[jn]/at,Ve[jn])}else if($.isInstancedMesh)At.renderInstances(ze,qt,$.count);else if(le.isInstancedBufferGeometry){const pn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ve=Math.min(le.instanceCount,pn);At.renderInstances(ze,qt,Ve)}else At.render(ze,qt)};function Hs(w,X,le){w.transparent===!0&&w.side===va&&w.forceSinglePass===!1?(w.side=Gn,w.needsUpdate=!0,Ma(w,X,le),w.side=ar,w.needsUpdate=!0,Ma(w,X,le),w.side=va):Ma(w,X,le)}this.compile=function(w,X,le=null){le===null&&(le=w),I=Me.get(le),I.init(X),F.push(I),le.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),w!==le&&w.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),I.setupLights();const ne=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const De=$.material;if(De)if(Array.isArray(De))for(let ke=0;ke<De.length;ke++){const Ne=De[ke];Hs(Ne,le,$),ne.add(Ne)}else Hs(De,le,$),ne.add(De)}),I=F.pop(),ne},this.compileAsync=function(w,X,le=null){const ne=this.compile(w,X,le);return new Promise($=>{function De(){if(ne.forEach(function(ke){E.get(ke).currentProgram.isReady()&&ne.delete(ke)}),ne.size===0){$(w);return}setTimeout(De,10)}Et.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Pr=null;function Yo(w){Pr&&Pr(w)}function Br(){Ni.stop()}function Fr(){Ni.start()}const Ni=new o_;Ni.setAnimationLoop(Yo),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(w){Pr=w,de.setAnimationLoop(w),w===null?Ni.stop():Ni.start()},de.addEventListener("sessionstart",Br),de.addEventListener("sessionend",Fr),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,ne=T!==null&&(J===null||le)&&T.begin(N,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,X,J),I=Me.get(w,F.length),I.init(X),F.push(I),Qt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ge.setFromProjectionMatrix(Qt,zi,X.reversedDepth),et=this.localClippingEnabled,Ke=Se.init(this.clippingPlanes,et),U=tt.get(w,k.length),U.init(),k.push(U),de.enabled===!0&&de.isPresenting===!0){const ke=N.xr.getDepthSensingMesh();ke!==null&&kr(ke,X,-1/0,N.sortObjects)}kr(w,X,0,N.sortObjects),U.finish(),N.sortObjects===!0&&U.sort(Ae,Oe),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&Le.addToRenderList(U,w),this.info.render.frame++,Ke===!0&&Se.beginShadows();const $=I.state.shadowsArray;if(Pe.render($,w,X),Ke===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&T.hasRenderPass())===!1){const ke=U.opaque,Ne=U.transmissive;if(I.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Ne.length>0)for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const rt=Xe[Ye];an(ke,Ne,w,rt)}lt&&Le.render(w);for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const rt=Xe[Ye];xi(U,w,rt,rt.viewport)}}else Ne.length>0&&an(ke,Ne,w,X),lt&&Le.render(w),xi(U,w,X)}J!==null&&K===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),ne&&T.end(N),w.isScene===!0&&w.onAfterRender(N,w,X),we.resetDefaultState(),se=-1,Q=null,F.pop(),F.length>0?(I=F[F.length-1],Ke===!0&&Se.setGlobalState(N.clippingPlanes,I.state.camera)):I=null,k.pop(),k.length>0?U=k[k.length-1]:U=null};function kr(w,X,le,ne){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ge.intersectsSprite(w)){ne&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Qt);const ke=je.update(w),Ne=w.material;Ne.visible&&U.push(w,ke,Ne,le,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ge.intersectsObject(w))){const ke=je.update(w),Ne=w.material;if(ne&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),mt.copy(ke.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(Qt)),Array.isArray(Ne)){const Xe=ke.groups;for(let Ye=0,nt=Xe.length;Ye<nt;Ye++){const rt=Xe[Ye],ze=Ne[rt.materialIndex];ze&&ze.visible&&U.push(w,ke,ze,le,mt.z,rt)}}else Ne.visible&&U.push(w,ke,Ne,le,mt.z,null)}}const De=w.children;for(let ke=0,Ne=De.length;ke<Ne;ke++)kr(De[ke],X,le,ne)}function xi(w,X,le,ne){const{opaque:$,transmissive:De,transparent:ke}=w;I.setupLightsView(le),Ke===!0&&Se.setGlobalState(N.clippingPlanes,le),ne&&We.viewport(L.copy(ne)),$.length>0&&hn($,X,le),De.length>0&&hn(De,X,le),ke.length>0&&hn(ke,X,le),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function an(w,X,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const ze=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new Vi(1,1,{generateMipmaps:!0,type:ze?ya:mi,minFilter:Ur,samples:Math.max(4,Lt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const De=I.state.transmissionRenderTarget[ne.id],ke=ne.viewport||L;De.setSize(ke.z*N.transmissionResolutionScale,ke.w*N.transmissionResolutionScale);const Ne=N.getRenderTarget(),Xe=N.getActiveCubeFace(),Ye=N.getActiveMipmapLevel();N.setRenderTarget(De),N.getClearColor(fe),ye=N.getClearAlpha(),ye<1&&N.setClearColor(16777215,.5),N.clear(),lt&&Le.render(le);const nt=N.toneMapping;N.toneMapping=Hi;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),Ke===!0&&Se.setGlobalState(N.clippingPlanes,ne),hn(w,le,ne),Y.updateMultisampleRenderTarget(De),Y.updateRenderTargetMipmap(De),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ft=0,qt=X.length;ft<qt;ft++){const Yt=X[ft],{object:At,geometry:pn,material:Ve,group:Dn}=Yt;if(Ve.side===va&&At.layers.test(ne.layers)){const at=Ve.side;Ve.side=Gn,Ve.needsUpdate=!0,Wi(At,le,ne,pn,Ve,Dn),Ve.side=at,Ve.needsUpdate=!0,ze=!0}}ze===!0&&(Y.updateMultisampleRenderTarget(De),Y.updateRenderTargetMipmap(De))}N.setRenderTarget(Ne,Xe,Ye),N.setClearColor(fe,ye),rt!==void 0&&(ne.viewport=rt),N.toneMapping=nt}function hn(w,X,le){const ne=X.isScene===!0?X.overrideMaterial:null;for(let $=0,De=w.length;$<De;$++){const ke=w[$],{object:Ne,geometry:Xe,group:Ye}=ke;let nt=ke.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),Ne.layers.test(le.layers)&&Wi(Ne,X,le,Xe,nt,Ye)}}function Wi(w,X,le,ne,$,De){w.onBeforeRender(N,X,le,ne,$,De),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(N,X,le,ne,w,De),$.transparent===!0&&$.side===va&&$.forceSinglePass===!1?($.side=Gn,$.needsUpdate=!0,N.renderBufferDirect(le,X,ne,$,w,De),$.side=ar,$.needsUpdate=!0,N.renderBufferDirect(le,X,ne,$,w,De),$.side=va):N.renderBufferDirect(le,X,ne,$,w,De),w.onAfterRender(N,X,le,ne,$,De)}function Ma(w,X,le){X.isScene!==!0&&(X=Dt);const ne=E.get(w),$=I.state.lights,De=I.state.shadowsArray,ke=$.state.version,Ne=Re.getParameters(w,$.state,De,X,le),Xe=Re.getProgramCacheKey(Ne);let Ye=ne.programs;ne.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const nt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ne.envMap=me.get(w.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",Mt),Ye=new Map,ne.programs=Ye);let rt=Ye.get(Xe);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===ke)return Ko(w,Ne),rt}else Ne.uniforms=Re.getUniforms(w),w.onBeforeCompile(Ne,N),rt=Re.acquireProgram(Ne,Xe),Ye.set(Xe,rt),ne.uniforms=Ne.uniforms;const ze=ne.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=Se.uniform),Ko(w,Ne),ne.needsLights=Vs(w),ne.lightsStateVersion=ke,ne.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function Zo(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=Fc.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Ko(w,X){const le=E.get(w);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function Qo(w,X,le,ne,$){X.isScene!==!0&&(X=Dt),Y.resetTextureUnits();const De=X.fog,ke=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Ne=J===null?N.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Bs,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ye=me.get(ne.envMap||ke,Xe),nt=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,rt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ze=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,qt=!!le.morphAttributes.color;let Yt=Hi;ne.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Yt=N.toneMapping);const At=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,pn=At!==void 0?At.length:0,Ve=E.get(ne),Dn=I.state.lights;if(Ke===!0&&(et===!0||w!==Q)){const sn=w===Q&&ne.id===se;Se.setState(ne,w,sn)}let at=!1;ne.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Dn.state.version||Ve.outputColorSpace!==Ne||$.isBatchedMesh&&Ve.batching===!1||!$.isBatchedMesh&&Ve.batching===!0||$.isBatchedMesh&&Ve.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ve.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||$.isInstancedMesh&&Ve.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ve.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ve.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ve.instancingMorph===!1&&$.morphTexture!==null||Ve.envMap!==Ye||ne.fog===!0&&Ve.fog!==De||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Se.numPlanes||Ve.numIntersection!==Se.numIntersection)||Ve.vertexAlphas!==nt||Ve.vertexTangents!==rt||Ve.morphTargets!==ze||Ve.morphNormals!==ft||Ve.morphColors!==qt||Ve.toneMapping!==Yt||Ve.morphTargetsCount!==pn)&&(at=!0):(at=!0,Ve.__version=ne.version);let Nn=Ve.currentProgram;at===!0&&(Nn=Ma(ne,X,$));let jn=!1,bi=!1,Xn=!1;const Ot=Nn.getUniforms(),rn=Ve.uniforms;if(We.useProgram(Nn.program)&&(jn=!0,bi=!0,Xn=!0),ne.id!==se&&(se=ne.id,bi=!0),jn||Q!==w){We.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(G,"projectionMatrix",w.projectionMatrix),Ot.setValue(G,"viewMatrix",w.matrixWorldInverse);const yi=Ot.map.cameraPosition;yi!==void 0&&yi.setValue(G,_t.setFromMatrixPosition(w.matrixWorld)),Lt.logarithmicDepthBuffer&&Ot.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ot.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,bi=!0,Xn=!0)}if(Ve.needsLights&&(Dn.state.directionalShadowMap.length>0&&Ot.setValue(G,"directionalShadowMap",Dn.state.directionalShadowMap,Y),Dn.state.spotShadowMap.length>0&&Ot.setValue(G,"spotShadowMap",Dn.state.spotShadowMap,Y),Dn.state.pointShadowMap.length>0&&Ot.setValue(G,"pointShadowMap",Dn.state.pointShadowMap,Y)),$.isSkinnedMesh){Ot.setOptional(G,$,"bindMatrix"),Ot.setOptional(G,$,"bindMatrixInverse");const sn=$.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ot.setValue(G,"boneTexture",sn.boneTexture,Y))}$.isBatchedMesh&&(Ot.setOptional(G,$,"batchingTexture"),Ot.setValue(G,"batchingTexture",$._matricesTexture,Y),Ot.setOptional(G,$,"batchingIdTexture"),Ot.setValue(G,"batchingIdTexture",$._indirectTexture,Y),Ot.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Ot.setValue(G,"batchingColorTexture",$._colorsTexture,Y));const Un=le.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Be.update($,le,Nn),(bi||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,Ot.setValue(G,"receiveShadow",$.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(rn.envMapIntensity.value=X.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=f2()),bi&&(Ot.setValue(G,"toneMappingExposure",N.toneMappingExposure),Ve.needsLights&&rr(rn,Xn),De&&ne.fog===!0&&Ze.refreshFogUniforms(rn,De),Ze.refreshMaterialUniforms(rn,ne,ve,q,I.state.transmissionRenderTarget[w.id]),Fc.upload(G,Zo(Ve),rn,Y)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Fc.upload(G,Zo(Ve),rn,Y),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ot.setValue(G,"center",$.center),Ot.setValue(G,"modelViewMatrix",$.modelViewMatrix),Ot.setValue(G,"normalMatrix",$.normalMatrix),Ot.setValue(G,"modelMatrix",$.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const sn=ne.uniformsGroups;for(let yi=0,qi=sn.length;yi<qi;yi++){const Ir=sn[yi];Fe.update(Ir,Nn),Fe.bind(Ir,Nn)}}return Nn}function rr(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Vs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,X,le){const ne=E.get(w);ne.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=X,E.get(w.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const le=E.get(w);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0};const Ta=G.createFramebuffer();this.setRenderTarget=function(w,X=0,le=0){J=w,V=X,K=le;let ne=null,$=!1,De=!1;if(w){const Ne=E.get(w);if(Ne.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(G.FRAMEBUFFER,Ne.__webglFramebuffer),L.copy(w.viewport),z.copy(w.scissor),oe=w.scissorTest,We.viewport(L),We.scissor(z),We.setScissorTest(oe),se=-1;return}else if(Ne.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Ne.__hasExternalTextures)Y.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const nt=w.depthTexture;if(Ne.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(w.width!==nt.image.width||w.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}const Xe=w.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const Ye=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ye[X])?ne=Ye[X][le]:ne=Ye[X],$=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?ne=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Ye)?ne=Ye[le]:ne=Ye,L.copy(w.viewport),z.copy(w.scissor),oe=w.scissorTest}else L.copy(ie).multiplyScalar(ve).floor(),z.copy(xe).multiplyScalar(ve).floor(),oe=Te;if(le!==0&&(ne=Ta),We.bindFramebuffer(G.FRAMEBUFFER,ne)&&We.drawBuffers(w,ne),We.viewport(L),We.scissor(z),We.setScissorTest(oe),$){const Ne=E.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,le)}else if(De){const Ne=X;for(let Xe=0;Xe<w.textures.length;Xe++){const Ye=E.get(w.textures[Xe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,le,Ne)}}else if(w!==null&&le!==0){const Ne=E.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,le)}se=-1},this.readRenderTargetPixels=function(w,X,le,ne,$,De,ke,Ne=0){if(!(w&&w.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){We.bindFramebuffer(G.FRAMEBUFFER,Xe);try{const Ye=w.textures[Ne],nt=Ye.format,rt=Ye.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!Lt.textureFormatReadable(nt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(rt)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-ne&&le>=0&&le<=w.height-$&&G.readPixels(X,le,ne,$,Ce.convert(nt),Ce.convert(rt),De)}finally{const Ye=J!==null?E.get(J).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(w,X,le,ne,$,De,ke,Ne=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(X>=0&&X<=w.width-ne&&le>=0&&le<=w.height-$){We.bindFramebuffer(G.FRAMEBUFFER,Xe);const Ye=w.textures[Ne],nt=Ye.format,rt=Ye.type;if(w.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),!Lt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.bufferData(G.PIXEL_PACK_BUFFER,De.byteLength,G.STREAM_READ),G.readPixels(X,le,ne,$,Ce.convert(nt),Ce.convert(rt),0);const ft=J!==null?E.get(J).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,ft);const qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await By(G,qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ze),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,De),G.deleteBuffer(ze),G.deleteSync(qt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,le=0){const ne=Math.pow(2,-le),$=Math.floor(w.image.width*ne),De=Math.floor(w.image.height*ne),ke=X!==null?X.x:0,Ne=X!==null?X.y:0;Y.setTexture2D(w,0),G.copyTexSubImage2D(G.TEXTURE_2D,le,0,0,ke,Ne,$,De),We.unbindTexture()};const Aa=G.createFramebuffer(),sr=G.createFramebuffer();this.copyTextureToTexture=function(w,X,le=null,ne=null,$=0,De=0){let ke,Ne,Xe,Ye,nt,rt,ze,ft,qt;const Yt=w.isCompressedTexture?w.mipmaps[De]:w.image;if(le!==null)ke=le.max.x-le.min.x,Ne=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,Ye=le.min.x,nt=le.min.y,rt=le.isBox3?le.min.z:0;else{const rn=Math.pow(2,-$);ke=Math.floor(Yt.width*rn),Ne=Math.floor(Yt.height*rn),w.isDataArrayTexture?Xe=Yt.depth:w.isData3DTexture?Xe=Math.floor(Yt.depth*rn):Xe=1,Ye=0,nt=0,rt=0}ne!==null?(ze=ne.x,ft=ne.y,qt=ne.z):(ze=0,ft=0,qt=0);const At=Ce.convert(X.format),pn=Ce.convert(X.type);let Ve;X.isData3DTexture?(Y.setTexture3D(X,0),Ve=G.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Y.setTexture2DArray(X,0),Ve=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(X,0),Ve=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Dn=G.getParameter(G.UNPACK_ROW_LENGTH),at=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Nn=G.getParameter(G.UNPACK_SKIP_PIXELS),jn=G.getParameter(G.UNPACK_SKIP_ROWS),bi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Yt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Yt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,nt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,rt);const Xn=w.isDataArrayTexture||w.isData3DTexture,Ot=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const rn=E.get(w),Un=E.get(X),sn=E.get(rn.__renderTarget),yi=E.get(Un.__renderTarget);We.bindFramebuffer(G.READ_FRAMEBUFFER,sn.__webglFramebuffer),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let qi=0;qi<Xe;qi++)Xn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(w).__webglTexture,$,rt+qi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(X).__webglTexture,De,qt+qi)),G.blitFramebuffer(Ye,nt,ke,Ne,ze,ft,ke,Ne,G.DEPTH_BUFFER_BIT,G.NEAREST);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||E.has(w)){const rn=E.get(w),Un=E.get(X);We.bindFramebuffer(G.READ_FRAMEBUFFER,Aa),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,sr);for(let sn=0;sn<Xe;sn++)Xn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,rn.__webglTexture,$,rt+sn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,rn.__webglTexture,$),Ot?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,De,qt+sn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,De),$!==0?G.blitFramebuffer(Ye,nt,ke,Ne,ze,ft,ke,Ne,G.COLOR_BUFFER_BIT,G.NEAREST):Ot?G.copyTexSubImage3D(Ve,De,ze,ft,qt+sn,Ye,nt,ke,Ne):G.copyTexSubImage2D(Ve,De,ze,ft,Ye,nt,ke,Ne);We.bindFramebuffer(G.READ_FRAMEBUFFER,null),We.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ot?w.isDataTexture||w.isData3DTexture?G.texSubImage3D(Ve,De,ze,ft,qt,ke,Ne,Xe,At,pn,Yt.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Ve,De,ze,ft,qt,ke,Ne,Xe,At,Yt.data):G.texSubImage3D(Ve,De,ze,ft,qt,ke,Ne,Xe,At,pn,Yt):w.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,De,ze,ft,ke,Ne,At,pn,Yt.data):w.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,De,ze,ft,Yt.width,Yt.height,At,Yt.data):G.texSubImage2D(G.TEXTURE_2D,De,ze,ft,ke,Ne,At,pn,Yt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Dn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,at),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Nn),G.pixelStorei(G.UNPACK_SKIP_ROWS,jn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,bi),De===0&&X.generateMipmaps&&G.generateMipmap(Ve),We.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),We.unbindTexture()},this.resetState=function(){V=0,K=0,J=null,We.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const h2="_canvas_ir7j4_1",p2={canvas:h2},m2={rotation:{x:0,y:20,z:0},topColor:"#8c8cff",bottomColor:"#4c4ccc",opacity:.8,scale:1.2,enableFog:!0,enableVertexJitter:!0,pauseRotation:!0,className:""};function g2(o){const t={...m2,...o},i=Je.useRef(null),r=Je.useRef(null);return Je.useEffect(()=>{if(!i.current)return;const l=t.enableVertexJitter?`
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
    `,d=new Jy;t.enableFog&&(d.fog=new Vh(0,10,50));const p=new pi(75,window.innerWidth/window.innerHeight,.1,1e3),m=window.innerWidth<768,h=.1;p.position.set(0,h+1.5,m?4:6),p.lookAt(0,h,0);const x=new d2({canvas:i.current,antialias:!1,alpha:!0});x.setSize(window.innerWidth,window.innerHeight),x.setPixelRatio(window.devicePixelRatio);const _=new vi({uniforms:{color:{value:new Ut(t.topColor)},time:{value:0},opacity:{value:t.opacity}},vertexShader:l,fragmentShader:c,transparent:!0}),g=new vi({uniforms:{color:{value:new Ut(t.bottomColor)},time:{value:0},opacity:{value:t.opacity}},vertexShader:l,fragmentShader:c,transparent:!0}),y=t.scale,M=new Vc(y,y*1.8,4),R=new Di(M,_);R.position.y=1.1*y,d.add(R);const S=new Vc(y,y*1.5,4),b=new Di(S,g);b.position.y=-.9*y,b.rotation.x=Math.PI,d.add(b),r.current={scene:d,camera:p,renderer:x,topPyramid:R,bottomPyramid:b,animationId:null};let D=0,B=0,U=0,I=!0,k=0;const F=2,T=Math.PI/2,N=Math.PI/4,ue=1;function V(){if(!r.current)return;const{scene:J,camera:se,renderer:Q,topPyramid:L,bottomPyramid:z}=r.current,oe=.016;if(D+=oe,t.pauseRotation)if(I)D-k>=F&&(I=!1,B=0,U=(U+Math.PI/2)%(Math.PI*2));else{B+=oe;const fe=T/N,ye=Math.min(B/fe,1);let P;const q=ue/fe;if(ye<q){const Oe=ye/q;P=q*(1-Math.cos(Oe*Math.PI/2))}else if(ye>1-q){const Oe=(ye-(1-q))/q;P=1-q+q*Math.sin(Oe*Math.PI/2)}else P=ye;const Ae=(U-T+Math.PI*4)%(Math.PI*2)+P*T;L.rotation.y=Ae,z.rotation.y=Ae,ye>=1&&(I=!0,k=D,L.rotation.y=U,z.rotation.y=U)}else{const fe={x:t.rotation.x*Math.PI/180,y:t.rotation.y*Math.PI/180,z:t.rotation.z*Math.PI/180};L.rotation.x+=fe.x*oe,L.rotation.y+=fe.y*oe,L.rotation.z+=fe.z*oe,z.rotation.x+=fe.x*oe,z.rotation.y+=fe.y*oe,z.rotation.z+=fe.z*oe}L.position.y=1.1*y+Math.sin(D)*.065,z.position.y=-.9*y-Math.sin(D)*.065,L.material.uniforms.time.value=D,z.material.uniforms.time.value=D,Q.render(J,se),r.current.animationId=requestAnimationFrame(V)}V();const K=()=>{if(!r.current)return;const{camera:J,renderer:se}=r.current;J.aspect=window.innerWidth/window.innerHeight,J.updateProjectionMatrix(),se.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",K),()=>{window.removeEventListener("resize",K),r.current&&(r.current.animationId&&cancelAnimationFrame(r.current.animationId),r.current.topPyramid.geometry.dispose(),r.current.topPyramid.material.dispose(),r.current.bottomPyramid.geometry.dispose(),r.current.bottomPyramid.material.dispose(),r.current.renderer.dispose(),r.current=null)}},[t.topColor,t.bottomColor,t.opacity,t.scale,t.enableFog,t.enableVertexJitter,t.pauseRotation,t.rotation.x,t.rotation.y,t.rotation.z]),C.jsx("canvas",{ref:i,className:`${p2.canvas} ${t.className}`})}const ga=[{blockNumber:1,date:"2015-07-30",supply:72,issuanceRate:10.3,label:"Genesis (72M pre-mine)"},{blockNumber:115e4,date:"2016-03-14",supply:78,issuanceRate:14.75,label:"Homestead (5 ETH/block)"},{blockNumber:437e4,date:"2017-10-16",supply:95,issuanceRate:7.4,label:"Byzantium (3 ETH/block)"},{blockNumber:728e4,date:"2019-02-28",supply:105,issuanceRate:4.5,label:"Constantinople (2 ETH/block)"},{blockNumber:12965e3,date:"2021-08-05",supply:117,issuanceRate:4.3,label:"London (EIP-1559 burn begins)"},{blockNumber:15537394,date:"2022-09-15",supply:120.5,issuanceRate:.2,label:"The Merge (PoS, ~90% issuance drop)"},{blockNumber:17034870,date:"2023-04-12",supply:120.1,issuanceRate:-.25,label:"Shanghai (first deflationary period)"},{blockNumber:19426587,date:"2024-03-13",supply:120,issuanceRate:-.1,label:"Dencun (sustained ultra-sound money)"}];function v2(){const o=Je.useRef(null);return Je.useEffect(()=>{const t=o.current;if(!t)return;const i=t.getContext("2d");if(!i)return;const r=window.devicePixelRatio||1,l=t.getBoundingClientRect();t.width=l.width*r,t.height=l.height*r,i.scale(r,r);const c=l.width,d=l.height,p={top:20,right:20,bottom:60,left:60},m=c-p.left-p.right,h=d-p.top-p.bottom;i.fillStyle="#0a0a0a",i.fillRect(0,0,c,d);const x=Math.floor(Math.min(...ga.map(I=>I.supply))/10)*10,_=Math.ceil(Math.max(...ga.map(I=>I.supply))/10)*10,g=ga[0].blockNumber,y=ga[ga.length-1].blockNumber,M=I=>p.left+(I-g)/(y-g)*m,R=I=>p.top+h-(I-x)/(_-x)*h;i.strokeStyle="#222",i.lineWidth=1;for(let I=x;I<=_;I+=10){const k=R(I);i.beginPath(),i.moveTo(p.left,k),i.lineTo(c-p.right,k),i.stroke(),i.fillStyle="#666",i.font="12px monospace",i.textAlign="right",i.fillText(`${I}M`,p.left-10,k+4)}const S=ga.find(I=>I.blockNumber===15537394),b=M(S.blockNumber);i.strokeStyle="#00D395",i.lineWidth=2,i.setLineDash([5,5]),i.beginPath(),i.moveTo(b,p.top),i.lineTo(b,d-p.bottom),i.stroke(),i.setLineDash([]),i.fillStyle="#00D395",i.font="bold 11px sans-serif",i.textAlign="center",i.fillText("THE MERGE",b,p.top-5),i.strokeStyle="#8B5CF6",i.lineWidth=3,i.beginPath(),ga.forEach((I,k)=>{const F=M(I.blockNumber),T=R(I.supply);k===0?i.moveTo(F,T):i.lineTo(F,T)}),i.stroke(),ga.forEach(I=>{const k=M(I.blockNumber),F=R(I.supply),T=I.issuanceRate>0?"#F87171":"#34D399";i.fillStyle=T,i.beginPath(),i.arc(k,F,5,0,Math.PI*2),i.fill(),i.strokeStyle="#000",i.lineWidth=2,i.stroke()}),i.fillStyle="#666",i.font="12px sans-serif",i.textAlign="center",["2015","2017","2019","2021","2023","2025"].forEach(I=>{const k=ga.find(F=>F.date.startsWith(I));if(k){const F=M(k.blockNumber);i.fillText(I,F,d-p.bottom+20)}}),i.fillStyle="#fff",i.font="bold 14px sans-serif",i.textAlign="left",i.fillText("Total ETH Supply Over Time",p.left,15);const B=c-p.right-150,U=p.top+10;i.fillStyle="#F87171",i.beginPath(),i.arc(B,U,5,0,Math.PI*2),i.fill(),i.fillStyle="#aaa",i.font="11px sans-serif",i.textAlign="left",i.fillText("Inflationary",B+10,U+4),i.fillStyle="#34D399",i.beginPath(),i.arc(B,U+20,5,0,Math.PI*2),i.fill(),i.fillStyle="#aaa",i.fillText("Deflationary",B+10,U+24)},[]),C.jsxs("div",{className:"bg-[var(--bg-secondary)] rounded-lg p-6 border border-[var(--bg-tertiary)]",children:[C.jsx("canvas",{ref:o,className:"w-full h-64 cursor-crosshair"}),C.jsxs("div",{className:"mt-4 text-sm text-[var(--text-muted)] space-y-2",children:[C.jsxs("p",{children:[C.jsx("span",{className:"text-[#F87171]",children:"●"})," PoW era: Block rewards decreased from 5 → 3 → 2 ETH, but supply still grew ~4.5% annually"]}),C.jsxs("p",{children:[C.jsx("span",{className:"text-[#00D395]",children:"●"})," The Merge: Issuance dropped ~90%, from ~13k ETH/day to ~1.7k ETH/day"]}),C.jsxs("p",{children:[C.jsx("span",{className:"text-[#34D399]",children:"●"}),' Post-Merge: EIP-1559 burn often exceeds issuance, making ETH deflationary ("ultra sound money")']})]})]})}const Nv=["protocol","scaling","defi","nft","social","research","security","adoption","tvl","blobs"];function _2(){const[o,t]=Je.useState(null),[i,r]=Je.useState(0),[l,c]=Je.useState(Nv),d=Je.useRef(null),p=Je.useRef(null),m=Je.useRef(null);Je.useEffect(()=>{const _=()=>{const g=window.location.hash.slice(1);if(g){const y=oc.find(M=>M.id===g);y&&(t(y),setTimeout(()=>{const M=document.getElementById(`event-${g}`);M&&M.scrollIntoView({behavior:"smooth",block:"center"})},100))}};return _(),window.addEventListener("hashchange",_),()=>window.removeEventListener("hashchange",_)},[]);const h=Je.useCallback(_=>{t(_),_?window.history.replaceState(null,"",`#${_.id}`):window.history.replaceState(null,"",window.location.pathname)},[]),x=Je.useMemo(()=>l.length===0?[]:l.length===Nv.length?oc:oc.filter(_=>!_.tags||_.tags.length===0?!1:_.tags.some(g=>l.includes(g))),[l]);return Je.useEffect(()=>{const _=()=>{if(d.current){const g=window.scrollY,y=document.documentElement.scrollHeight-window.innerHeight,M=Math.min(1,Math.max(0,g/y));r(M)}};return window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)},[]),C.jsxs("div",{className:"min-h-screen bg-[var(--bg-primary)]",children:[C.jsx(g2,{}),C.jsx(Fb,{}),C.jsx(Kb,{audioRef:p,autoPlayRef:m,activeTags:l,onTagsChange:c,totalEvents:oc.length,filteredCount:x.length}),C.jsxs("main",{className:"relative",ref:d,children:[C.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:C.jsx(Gb,{progress:i})}),C.jsx("section",{className:"flex flex-col items-center justify-center min-h-[60vh] px-8 text-center relative z-10",children:C.jsxs("div",{className:"max-w-3xl mx-auto",children:[C.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--eth-purple)] to-[var(--eth-purple-light)] bg-clip-text text-transparent",children:"The Ethereum Archive"}),C.jsx("p",{className:"text-xl md:text-2xl text-[var(--text-secondary)] mb-8",children:"A complete history of Ethereum's evolution — from genesis to the present"}),C.jsxs("div",{className:"flex items-center justify-center gap-2 text-[var(--text-muted)]",children:[C.jsx("span",{children:"Scroll through history"}),C.jsx("svg",{className:"w-5 h-5 animate-bounce",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]})}),C.jsx("section",{className:"px-8 py-12 relative z-10",children:C.jsx("div",{className:"max-w-4xl mx-auto",children:C.jsx(v2,{})})}),C.jsx(Nb,{nodes:x,onSelectNode:h,selectedNodeId:o?.id}),C.jsx("section",{className:"px-8 py-12 relative z-10",children:C.jsxs("div",{className:"max-w-2xl mx-auto",children:[C.jsx("h2",{className:"text-2xl font-bold text-[var(--text-primary)] mb-2 text-center",children:"Now"}),C.jsx("p",{className:"text-[var(--text-muted)] text-center mb-6",children:"The timeline continues... Watch live Ethereum blocks being produced."}),C.jsx(Qb,{variant:"full",maxBlocks:3})]})}),C.jsx(ey,{})]}),C.jsx(zb,{node:o,onClose:()=>h(null)}),C.jsx("footer",{className:"py-12 px-8 border-t border-[var(--bg-tertiary)]",children:C.jsxs("div",{className:"max-w-4xl mx-auto text-center text-[var(--text-muted)]",children:[C.jsxs("p",{className:"mb-2",children:["Built by"," ",C.jsx("a",{href:"https://github.com/its-applekid",className:"text-[var(--eth-purple)] hover:underline",target:"_blank",rel:"noopener noreferrer",children:"Applekid"})]}),C.jsx("p",{className:"text-sm",children:"Data sourced from EIPs, ethereum.org, and community research"})]})})]})}Ab.createRoot(document.getElementById("root")).render(C.jsx(Je.StrictMode,{children:C.jsx(_2,{})}));
