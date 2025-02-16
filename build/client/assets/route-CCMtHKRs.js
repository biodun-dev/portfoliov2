import{r as b,j as m,b as Ke}from"./jsx-runtime-Lfnj0zCF.js";import{c as $,a as xe,T as N,m as U,I as ve,t as v,H as oe,n as ie,B as le,b as Je}from"./heading-CZSKIRBN.js";import{D as Ge}from"./decoder-text-Cfz0554w.js";import{D as We}from"./divider-PRELGclo.js";import{S as Ye,F as Qe,b as Ze}from"./meta-DskA_ls7.js";import{m as et,z as A,A as C,B as tt,C as rt,D as Re,F as G,G as nt,H as P,I as at,J as O,K as st,N as z,U as W,P as ot,Q as Ee,T as Z,V as it,W as lt,X as ut,Y as ct,Z as ue,$ as ce,E as dt,a0 as ft,a1 as Ce,a2 as ht,a3 as mt,a4 as pt,a5 as gt,a6 as yt,a7 as wt,w as _t,a8 as St}from"./components-DXooqyZL.js";import"./visually-hidden-UiEg1yYX.js";import"./use-spring-BzNdqae3.js";import"./index-B75Puh6V.js";import"./config-AqcvRU3G.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var bt=Rt,xt=Et,vt=Object.prototype.toString,F=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Rt(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var n={},r=t||{},a=r.decode||Ct,s=0;s<e.length;){var i=e.indexOf("=",s);if(i===-1)break;var o=e.indexOf(";",s);if(o===-1)o=e.length;else if(o<i){s=e.lastIndexOf(";",i-1)+1;continue}var l=e.slice(s,i).trim();if(n[l]===void 0){var c=e.slice(i+1,o).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1)),n[l]=Dt(c,a)}s=o+1}return n}function Et(e,t,n){var r=n||{},a=r.encode||kt;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!F.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!F.test(s))throw new TypeError("argument val is invalid");var i=e+"="+s;if(r.maxAge!=null){var o=r.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(o)}if(r.domain){if(!F.test(r.domain))throw new TypeError("option domain is invalid");i+="; Domain="+r.domain}if(r.path){if(!F.test(r.path))throw new TypeError("option path is invalid");i+="; Path="+r.path}if(r.expires){var l=r.expires;if(!Tt(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+l.toUTCString()}if(r.httpOnly&&(i+="; HttpOnly"),r.secure&&(i+="; Secure"),r.partitioned&&(i+="; Partitioned"),r.priority){var c=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(c){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var u=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(u){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function Ct(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function kt(e){return encodeURIComponent(e)}function Tt(e){return vt.call(e)==="[object Date]"||e instanceof Date}function Dt(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const de={};function ke(e,t){!e&&!de[t]&&(de[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const jt=({sign:e,unsign:t})=>(n,r={})=>{let{secrets:a=[],...s}={path:"/",sameSite:"lax",...r};return Nt(n,s.expires),{get name(){return n},get isSigned(){return a.length>0},get expires(){return typeof s.maxAge<"u"?new Date(Date.now()+s.maxAge*1e3):s.expires},async parse(i,o){if(!i)return null;let l=bt(i,{...s,...o});return n in l?l[n]===""?"":await Ot(t,l[n],a):null},async serialize(i,o){return xt(n,i===""?"":await Mt(e,i,a),{...s,...o})}}},ee=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function Mt(e,t,n){let r=At(t);return n.length>0&&(r=await e(r,n[0])),r}async function Ot(e,t,n){if(n.length>0){for(let r of n){let a=await e(t,r);if(a!==!1)return fe(a)}return null}return fe(t)}function At(e){return btoa(Ft(encodeURIComponent(JSON.stringify(e))))}function fe(e){try{return JSON.parse(decodeURIComponent(Ht(atob(e))))}catch{return{}}}function Ht(e){let t=e.toString(),n="",r=0,a,s;for(;r<t.length;)a=t.charAt(r++),/[\w*+\-./@]/.exec(a)?n+=a:(s=a.charCodeAt(0),s<256?n+="%"+he(s,2):n+="%u"+he(s,4).toUpperCase());return n}function he(e,t){let n=e.toString(16);for(;n.length<t;)n="0"+n;return n}function Ft(e){let t=e.toString(),n="",r=0,a,s;for(;r<t.length;){if(a=t.charAt(r++),a==="%"){if(t.charAt(r)==="u"){if(s=t.slice(r+1,r+5),/^[\da-f]{4}$/i.exec(s)){n+=String.fromCharCode(parseInt(s,16)),r+=5;continue}}else if(s=t.slice(r,r+2),/^[\da-f]{2}$/i.exec(s)){n+=String.fromCharCode(parseInt(s,16)),r+=2;continue}}n+=a}return n}function Nt(e,t){ke(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function q(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(n,r)=>t.charCodeAt(r))}function Ut(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function I(...e){const t=new Uint8Array(e.reduce((r,a)=>r+a.length,0));let n=0;for(const r of e)t.set(r,n),n+=r.length;return t}function Pt(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function me(e){return e instanceof Uint8Array?t=>e[t]:e}function V(e,t,n,r,a){const s=me(e),i=me(n);for(let o=0;o<a;++o)if(s(t+o)!==i(r+o))return!1;return!0}function It(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let n=0;n<e.length-1;n++)t[e[n]]=e.length-1-n;return t}const E=Symbol("Match");class te{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=q(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=It(t)}feed(t){let n=0,r;const a=[];for(;n!==t.length;)[n,...r]=this._feed(t,n),a.push(...r);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,n){const r=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const s=this._charAt(t,a+this._needle.length-1);if(s===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&r.push(this._lookbehind.slice(0,this._lookbehind.length+a)),r.push(E),this._lookbehind=new Uint8Array,[a+this._needle.length,...r];a+=this._occ[s]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)r.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const s=this._lookbehind.length+a;return s>0&&(r.push(this._lookbehind.slice(0,s)),this._lookbehind=this._lookbehind.slice(s)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(i,o)=>this._charAt(t,o-this._lookbehind.length)),[t.length,...r]}}for(a+=n;a<=t.length-this._needle.length;){const s=t[a+this._needle.length-1];if(s===this._lastChar&&t[a]===this._needle[0]&&V(this._needle,0,t,a,this._needle.length-1))return a>n&&r.push(t.slice(n,a)),r.push(E),[a+this._needle.length,...r];a+=this._occ[s]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!V(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&r.push(t.slice(n,a<t.length?a:t.length)),[t.length,...r]}_charAt(t,n){return n<0?this._lookbehind[this._lookbehind.length+n]:t[n]}_memcmp(t,n,r){return V(this._charAt.bind(this,t),n,this._needle,0,r)}}class Lt{constructor(t,n){this._readableStream=n,this._search=new te(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const r=await t.read();if(r.done)break;yield*this._search.feed(r.value)}const n=this._search.end();n.length&&(yield n)}finally{t.releaseLock()}}}const $t=Function.prototype.apply.bind(I,void 0),Te=q("--"),M=q(`\r
`);function zt(e){const t=e.split(";").map(r=>r.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const n={};for(const r of t){const a=r.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+r+" in `"+e+"`");const[s,i]=a;if(i[0]==='"'&&i[i.length-1]==='"')n[s]=i.slice(1,-1).replace(/\\"/g,'"');else if(i[0]!=='"'&&i[i.length-1]!=='"')n[s]=i;else if(i[0]==='"'&&i[i.length-1]!=='"'||i[0]!=='"'&&i[i.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!n.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return n}function qt(e){const t=[];let n=!1,r;for(;typeof(r=e.shift())<"u";){const a=r.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const s=r.slice(0,a).trim().toLowerCase(),i=r.slice(a+1).trim();switch(s){case"content-disposition":n=!0,t.push(...Object.entries(zt(i)));break;case"content-type":t.push(["contentType",i])}}if(!n)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function Bt(e,t){let n=!0,r=!1;const a=[[]],s=new te(M);for(;;){const i=await e.next();if(i.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(n&&i.value!==E&&Pt(i.value.slice(0,2),Te))return[void 0,new Uint8Array];let o;if(i.value!==E)o=i.value;else if(!r)o=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!o.length)continue;n&&(n=!1);const l=s.feed(o);for(const[c,u]of l.entries()){const y=u===E;if(!(!y&&!u.length)){if(r&&y)return l.push(s.end()),[a.filter(h=>h.length).map($t).map(Ut),I(...l.slice(c+1).map(h=>h===E?M:h))];(r=y)?a.push([]):a[a.length-1].push(u)}}}}async function*Xt(e,t){const n=I(Te,q(t)),r=new Lt(n,e)[Symbol.asyncIterator]();for(;;){const s=await r.next();if(s.done)return;if(s.value===E)break}const a=new te(M);for(;;){let c=function(f){const g=[];for(const d of a.feed(f))l&&g.push(M),(l=d===E)||g.push(d);return I(...g)};const[s,i]=await Bt(r,n);if(!s)return;async function o(){const f=await r.next();if(f.done)throw new Error("malformed multipart-form data: unexpected end of stream");return f}let l=!1,u=!1;async function y(){const f=await o();let g;if(f.value!==E)g=f.value;else if(!l)g=M;else return u=!0,{value:a.end()};return{value:c(g)}}const h=[{value:c(i)}];for(yield{...qt(s),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const f=h.shift();if(!f)break;if(f.value.length>0)return f}for(;;){if(u)return{done:u,value:void 0};const f=await y();if(f.value.length>0)return f}}}};!u;)h.push(await y())}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vt(...e){return async t=>{for(let n of e){let r=await n(t);if(typeof r<"u"&&r!==null)return r}}}async function Kt(e,t){let n=e.headers.get("Content-Type")||"",[r,a]=n.split(/\s*;\s*boundary=/);if(!e.body||!a||r!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let s=new FormData,i=Xt(e.body,a);for await(let o of i){if(o.done)break;typeof o.filename=="string"&&(o.filename=o.filename.split(/[/\\]/).pop());let l=await t(o);typeof l<"u"&&l!==null&&s.append(o.name,l)}return s}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jt(e){return Object.keys(e).reduce((t,n)=>(t[n]=e[n].module,t),{})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Y(e,t,n){let r=et(e,t,n);return r?r.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function Gt({loadContext:e,action:t,params:n,request:r,routeId:a,singleFetch:s}){let i=await t({request:s?je(L(r)):De(L(r)),context:e,params:n});if(i===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return s||C(i)?i:A(i)}async function Wt({loadContext:e,loader:t,params:n,request:r,routeId:a,singleFetch:s}){let i=await t({request:s?je(L(r)):De(L(r)),context:e,params:n});if(i===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return tt(i)?i.init&&rt(i.init.status||200)?Re(new Headers(i.init.headers).get("Location"),i.init):i:s||C(i)?i:A(i)}function L(e){let t=new URL(e.url),n=t.searchParams.getAll("index");t.searchParams.delete("index");let r=[];for(let s of n)s&&r.push(s);for(let s of r)t.searchParams.append("index",s);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function De(e){let t=new URL(e.url);t.searchParams.delete("_data");let n={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return n.body&&(n.duplex="half"),new Request(t.href,n)}function je(e){let t=new URL(e.url);t.searchParams.delete("_routes");let n={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return n.body&&(n.duplex="half"),new Request(t.href,n)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Me(e){let t={};return Object.values(e).forEach(n=>{let r=n.parentId||"";t[r]||(t[r]=[]),t[r].push(n)}),t}function Oe(e,t="",n=Me(e)){return(n[t]||[]).map(r=>({...r,children:Oe(e,r.id,n)}))}function Ae(e,t,n="",r=Me(e)){return(r[n]||[]).map(a=>{let s={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?(i,o)=>Wt({request:i.request,params:i.params,loadContext:i.context,loader:a.module.loader,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,action:a.module.action?(i,o)=>Gt({request:i.request,params:i.params,loadContext:i.context,action:a.module.action,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,handle:a.module.handle};return a.index?{index:!0,...s}:{caseSensitive:a.caseSensitive,children:Ae(e,t,a.id,r),...s}})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Yt={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Qt=/[&><\u2028\u2029]/g;function Zt(e){return e.replace(Qt,t=>Yt[t])}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ge(e){return Zt(JSON.stringify(e))}var er={};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function tr(e,t){if(t??=er.REMIX_DEV_ORIGIN,!t)throw Error("Dev server origin not set");let n=new URL(t);n.pathname="ping";let r=await fetch(n.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${n}`),a});if(!r.ok)throw console.error(`Could not reach Remix dev server at ${n} (${r.status})`),Error(await r.text())}function rr(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const He="__remix_devServerHooks";function nr(e){globalThis[He]=e}function ye(){return globalThis[He]}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(e,t){return`⚠️ REMIX FUTURE CHANGE: Externally-accessed resource routes will no longer be able to return raw JavaScript objects or \`null\` in React Router v7 when Single Fetch becomes the default. You can prepare for this change at your convenience by wrapping the data returned from your \`${e}\` function in the \`${t}\` route with \`json()\`.  For instructions on making this change, see https://remix.run/docs/en/v2.13.1/guides/single-fetch#resource-routes`}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Fe=new Set([100,101,204,205,304]);function we(e,t){var n,r;let a=Oe(e.routes),s=Ae(e.routes,e.future),i=ht(t)?t:O.Production,o=st(s,{basename:e.basename,future:{v7_relativeSplatPath:((n=e.future)===null||n===void 0?void 0:n.v3_relativeSplatPath)===!0,v7_throwAbortReason:((r=e.future)===null||r===void 0?void 0:r.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((c,{request:u})=>{i!==O.Test&&!u.signal.aborted&&console.error(z(c)&&c.error?c.error:c)});return{routes:a,dataRoutes:s,serverMode:i,staticHandler:o,errorHandler:l}}const sr=(e,t)=>{let n,r,a,s,i;return async function(l,c={}){if(n=typeof e=="function"?await e():e,t??=n.mode,typeof e=="function"){let p=we(n,t);r=p.routes,a=p.serverMode,s=p.staticHandler,i=p.errorHandler}else if(!r||!a||!s||!i){let p=we(n,t);r=p.routes,a=p.serverMode,s=p.staticHandler,i=p.errorHandler}let u=new URL(l.url),y={},h=p=>{if(t===O.Development){var _,x;(_=ye())===null||_===void 0||(x=_.processRequestError)===null||x===void 0||x.call(_,p)}i(p,{context:c,params:y,request:l})},f=`${n.basename??"/"}/__manifest`.replace(/\/+/g,"/");if(u.pathname===f)try{return await or(n,r,u)}catch(p){return h(p),new Response("Unknown Server Error",{status:500})}let g=Y(r,u.pathname,n.basename);g&&g.length>0&&Object.assign(y,g[0].params);let d;if(u.searchParams.has("_data")){n.future.v3_singleFetch&&h(new Error("Warning: Single fetch-enabled apps should not be making ?_data requests, this is likely to break in the future"));let p=u.searchParams.get("_data");d=await ir(a,n,s,p,l,c,h),n.entry.module.handleDataRequest&&(d=await n.entry.module.handleDataRequest(d,{context:c,params:y,request:l}),G(d)&&(d=Pe(d,n.basename)))}else if(n.future.v3_singleFetch&&u.pathname.endsWith(".data")){let p=new URL(l.url);p.pathname=p.pathname.replace(/\.data$/,"").replace(/^\/_root$/,"/");let _=Y(r,p.pathname,n.basename);if(d=await lr(a,n,s,l,p,c,h),n.entry.module.handleDataRequest&&(d=await n.entry.module.handleDataRequest(d,{context:c,params:_?_[0].params:{},request:l}),G(d))){let x=nt(d.status,d.headers,n.basename);l.method==="GET"&&(x={[Ce]:x});let j=new Headers(d.headers);return j.set("Content-Type","text/x-script"),new Response(P(x,l.signal,n.entry.module.streamTimeout,a),{status:at,headers:j})}}else if(g&&g[g.length-1].route.module.default==null&&g[g.length-1].route.module.ErrorBoundary==null)d=await cr(a,n,s,g.slice(-1)[0].route.id,l,c,h);else{var R,S;let p=t===O.Development?await((R=ye())===null||R===void 0||(S=R.getCriticalCss)===null||S===void 0?void 0:S.call(R,n,u.pathname)):void 0;d=await ur(a,n,s,l,c,h,p)}return l.method==="HEAD"?new Response(null,{headers:d.headers,status:d.status,statusText:d.statusText}):d}};async function or(e,t,n){let r={};if(n.searchParams.has("p")){for(let a of n.searchParams.getAll("p")){let s=Y(t,a,e.basename);if(s)for(let i of s){let o=i.route.id;r[o]=e.assets.routes[o]}}return A(r,{headers:{"Cache-Control":"public, max-age=31536000, immutable"}})}return new Response("Invalid Request",{status:400})}async function ir(e,t,n,r,a,s,i){try{let o=await n.queryRoute(a,{routeId:r,requestContext:s});if(G(o))return Pe(o,t.basename);if(W in o){let l=o[W],c=ot(l,a.signal,e),u=l.init||{},y=new Headers(u.headers);return y.set("Content-Type","text/remix-deferred"),y.set("X-Remix-Response","yes"),u.headers=y,new Response(c,u)}return o=Q(o,"X-Remix-Response","yes"),o}catch(o){if(C(o))return Q(o,"X-Remix-Catch","yes");if(z(o))return i(o),Ne(o,e);let l=o instanceof Error||o instanceof DOMException?o:new Error("Unexpected Server Error");return i(l),Ee(Z(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function lr(e,t,n,r,a,s,i){let{result:o,headers:l,status:c}=r.method!=="GET"?await lt(t,e,n,r,a,s,i):await ut(t,e,n,r,a,s,i),u=new Headers(l);return u.set("X-Remix-Response","yes"),Fe.has(c)?new Response(null,{status:c,headers:u}):(u.set("Content-Type","text/x-script"),new Response(P(o,r.signal,t.entry.module.streamTimeout,e),{status:c||200,headers:u}))}async function ur(e,t,n,r,a,s,i){let o;try{o=await n.query(r,{requestContext:a})}catch(h){return s(h),new Response(null,{status:500})}if(C(o))return o;let l=ct(t,o);if(Fe.has(o.statusCode))return new Response(null,{status:o.statusCode,headers:l});o.errors&&(Object.values(o.errors).forEach(h=>{(!z(h)||h.error)&&s(h)}),o.errors=ue(o.errors,e));let c={loaderData:o.loaderData,actionData:o.actionData,errors:ce(o.errors,e)},u={manifest:t.assets,routeModules:Jt(t.routes),staticHandlerContext:o,criticalCss:i,serverHandoffString:ge({basename:t.basename,criticalCss:i,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:c}}),...t.future.v3_singleFetch?{serverHandoffStream:P(c,r.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null,future:t.future,isSpaMode:t.isSpaMode,serializeError:h=>Z(h,e)},y=t.entry.module.default;try{return await y(r,o.statusCode,l,u,a)}catch(h){s(h);let f=h;if(C(h))try{let d=await dr(h);f=new dt(h.status,h.statusText,d)}catch{}o=ft(n.dataRoutes,o,f),o.errors&&(o.errors=ue(o.errors,e));let g={loaderData:o.loaderData,actionData:o.actionData,errors:ce(o.errors,e)};u={...u,staticHandlerContext:o,serverHandoffString:ge({basename:t.basename,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:g}}),...t.future.v3_singleFetch?{serverHandoffStream:P(g,r.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null};try{return await y(r,o.statusCode,l,u,a)}catch(d){return s(d),Ue(d,e)}}}async function cr(e,t,n,r,a,s,i){try{let o=await n.queryRoute(a,{routeId:r,requestContext:s});return typeof o=="object"&&o!==null&&pe(!(W in o),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`),t.future.v3_singleFetch&&!C(o)&&(console.warn(ar(a.method==="GET"?"loader":"action",r)),o=A(o)),pe(C(o),"Expected a Response to be returned from queryRoute"),o}catch(o){return C(o)?Q(o,"X-Remix-Catch","yes"):z(o)?(o&&i(o),Ne(o,e)):(i(o),Ue(o,e))}}function Ne(e,t){return Ee(Z(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Ue(e,t){let n="Unexpected Server Error";return t!==O.Production&&(n+=`

${String(e)}`),new Response(n,{status:500,headers:{"Content-Type":"text/plain"}})}function dr(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}function Pe(e,t){let n=new Headers(e.headers),r=n.get("Location");return n.set("X-Remix-Redirect",t&&it(r,t)||r),n.set("X-Remix-Status",String(e.status)),n.delete("Location"),e.headers.get("Set-Cookie")!==null&&n.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:n})}function Q(e,t,n){let r=new Headers(e.headers);return r.set(t,n),new Response(e.body,{status:e.status,statusText:e.statusText,headers:r,duplex:e.body?"half":void 0})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function K(e){return`__flash_${e}__`}const re=(e={},t="")=>{let n=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(n)},has(r){return n.has(r)||n.has(K(r))},get(r){if(n.has(r))return n.get(r);let a=K(r);if(n.has(a)){let s=n.get(a);return n.delete(a),s}},set(r,a){n.set(r,a)},flash(r,a){n.set(K(r),a)},unset(r){n.delete(r)}}},fr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",hr=e=>({cookie:t,createData:n,readData:r,updateData:a,deleteData:s})=>{let i=ee(t)?t:e(t?.name||"__session",t);return Ie(i),{async getSession(o,l){let c=o&&await i.parse(o,l),u=c&&await r(c);return re(u||{},c||"")},async commitSession(o,l){let{id:c,data:u}=o,y=l?.maxAge!=null?new Date(Date.now()+l.maxAge*1e3):l?.expires!=null?l.expires:i.expires;return c?await a(c,u,y):c=await n(u,y),i.serialize(c,l)},async destroySession(o,l){return await s(o.id),i.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function Ie(e){ke(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mr=e=>({cookie:t}={})=>{let n=ee(t)?t:e(t?.name||"__session",t);return Ie(n),{async getSession(r,a){return re(r&&await n.parse(r,a)||{})},async commitSession(r,a){let s=await n.serialize(r.data,a);if(s.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+s.length);return s},async destroySession(r,a){return n.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pr=e=>({cookie:t}={})=>{let n=new Map;return e({cookie:t,async createData(r,a){let s=Math.random().toString(36).substring(2,10);return n.set(s,{data:r,expires:a}),s},async readData(r){if(n.has(r)){let{data:a,expires:s}=n.get(r);if(!s||s>new Date)return a;s&&n.delete(r)}return null},async updateData(r,a,s){n.set(r,{data:a,expires:s})},async deleteData(r){n.delete(r)}})};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class Le extends Error{constructor(t,n){super(`Field "${t}" exceeded upload size of ${n} bytes.`),this.field=t,this.maxBytes=n}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gr({filter:e,maxPartSize:t=3e6}={}){return async({filename:n,contentType:r,name:a,data:s})=>{if(e&&!await e({filename:n,contentType:r,name:a}))return;let i=0,o=[];for await(let l of s){if(i+=l.byteLength,i>t)throw new Le(a,t);o.push(l)}return typeof n=="string"?new File(o,n,{type:r}):await new Blob(o,{type:r}).text()}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const yr=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:Le,UNSAFE_SingleFetchRedirectSymbol:Ce,broadcastDevReady:tr,createCookieFactory:jt,createCookieSessionStorageFactory:mr,createMemorySessionStorageFactory:pr,createRequestHandler:sr,createSession:re,createSessionStorageFactory:hr,data:mt,defer:pt,isCookie:ee,isSession:fr,json:A,logDevReady:rr,redirect:Re,redirectDocument:gt,replace:yt,unstable_composeUploadHandlers:Vt,unstable_createMemoryUploadHandler:gr,unstable_parseMultipartFormData:Kt,unstable_setDevServerHooks:nr},Symbol.toStringTag,{value:"Module"}));function _e(e=""){const[t,n]=b.useState(e),[r,a]=b.useState(),[s,i]=b.useState(!1);return{value:t,error:r,onChange:u=>{n(u.target.value),i(!0),r&&u.target.checkValidity()&&a(null)},onBlur:u=>{s&&u.target.checkValidity()},onInvalid:u=>{u.preventDefault(),a(u.target.validationMessage)}}}const wr="_textarea_1ly3z_2",_r={textarea:wr},Sr=({className:e,resize:t="none",value:n,onChange:r,minRows:a=1,maxRows:s,...i})=>{const[o,l]=b.useState(a),[c,u]=b.useState(),y=b.useRef();b.useEffect(()=>{const f=getComputedStyle(y.current),g=parseInt(f.lineHeight,10),d=parseInt(f.paddingTop,10)+parseInt(f.paddingBottom,10);u({lineHeight:g,paddingHeight:d})},[]);const h=f=>{r(f);const{lineHeight:g,paddingHeight:d}=c,R=f.target.rows;f.target.rows=a;const S=~~((f.target.scrollHeight-d)/g);S===R&&(f.target.rows=S),s&&S>=s&&(f.target.rows=s,f.target.scrollTop=f.target.scrollHeight),l(s&&S>s?s:S)};return m.jsx("textarea",{className:xe(_r.textarea,e),ref:y,onChange:h,style:$({resize:t}),rows:o,value:n,...i})},br="_container_1ukhq_2",xr="_content_1ukhq_16",vr="_input_1ukhq_21",Rr="_underline_1ukhq_55",Er="_label_1ukhq_73",Cr="_error_1ukhq_95",kr="_errorMessage_1ukhq_111",k={container:br,content:xr,input:vr,underline:Rr,label:Er,error:Cr,errorMessage:kr},J=({id:e,label:t,value:n,multiline:r,className:a,style:s,error:i,onBlur:o,autoComplete:l,required:c,maxLength:u,type:y,onChange:h,name:f,...g})=>{const[d,R]=b.useState(!1),S=b.useId(),p=b.useRef(),_=e||`${S}input`,x=`${_}-label`,j=`${_}-error`,Be=r?Sr:"input",Xe=H=>{R(!1),o&&o(H)};return m.jsxs("div",{className:xe(k.container,a),"data-error":!!i,style:s,...g,children:[m.jsxs("div",{className:k.content,children:[m.jsx("label",{className:k.label,"data-focused":d,"data-filled":!!n,id:x,htmlFor:_,children:t}),m.jsx(Be,{className:k.input,id:_,"aria-labelledby":x,"aria-describedby":i?j:void 0,onFocus:()=>R(!0),onBlur:Xe,value:n,onChange:h,autoComplete:l,required:c,maxLength:u,type:y,name:f}),m.jsx("div",{className:k.underline,"data-focused":d})]}),m.jsx(N,{unmount:!0,in:i,timeout:U(v.base.durationM),children:({visible:H,nodeRef:Ve})=>m.jsx("div",{ref:Ve,className:k.error,"data-visible":H,id:j,role:"alert",style:$({height:H?p.current?.getBoundingClientRect().height:0}),children:m.jsxs("div",{className:k.errorMessage,ref:p,children:[m.jsx(ve,{icon:"error"}),i]})})})]})};var Tr={},ne={},D={};const $e=Ke(yr);var B={};/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(B,"__esModule",{value:!0});const ae=new TextEncoder,Dr=async(e,t)=>{let n=await ze(t,["sign"]),r=ae.encode(e),a=await crypto.subtle.sign("HMAC",n,r),s=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+s},jr=async(e,t)=>{let n=e.lastIndexOf("."),r=e.slice(0,n),a=e.slice(n+1),s=await ze(t,["verify"]),i=ae.encode(r),o=Mr(atob(a));return await crypto.subtle.verify("HMAC",s,o,i)?r:!1};async function ze(e,t){return await crypto.subtle.importKey("raw",ae.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function Mr(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}B.sign=Dr;B.unsign=jr;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(D,"__esModule",{value:!0});var X=$e,Se=B;const se=X.createCookieFactory({sign:Se.sign,unsign:Se.unsign}),Or=X.createCookieSessionStorageFactory(se),qe=X.createSessionStorageFactory(se),Ar=X.createMemorySessionStorageFactory(qe);D.createCookie=se;D.createCookieSessionStorage=Or;D.createMemorySessionStorage=Ar;D.createSessionStorage=qe;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(ne,"__esModule",{value:!0});var Hr=D;function Fr({cookie:e,kv:t}){return Hr.createSessionStorage({cookie:e,async createData(n,r){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let s=[...a].map(i=>i.toString(16).padStart(2,"0")).join("");if(!await t.get(s,"json"))return await t.put(s,JSON.stringify(n),{expiration:r?Math.round(r.getTime()/1e3):void 0}),s}},async readData(n){let r=await t.get(n);return r?JSON.parse(r):null},async updateData(n,r,a){await t.put(n,JSON.stringify(r),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(n){await t.delete(n)}})}ne.createWorkersKVSessionStorage=Fr;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ne,n=D,r=$e;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=n.createCookie,e.createCookieSessionStorage=n.createCookieSessionStorage,e.createMemorySessionStorage=n.createMemorySessionStorage,e.createSessionStorage=n.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return r.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return r.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return r.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return r.createSession}}),Object.defineProperty(e,"data",{enumerable:!0,get:function(){return r.data}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return r.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return r.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return r.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return r.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return r.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return r.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return r.redirectDocument}}),Object.defineProperty(e,"replace",{enumerable:!0,get:function(){return r.replace}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return r.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return r.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return r.unstable_parseMultipartFormData}})})(Tr);const Nr="_contact_xvg9q_1",Ur="_form_xvg9q_18",Pr="_title_xvg9q_30",Ir="_divider_xvg9q_60",Lr="_input_xvg9q_98",$r="_botkiller_xvg9q_140",zr="_button_xvg9q_144",qr="_complete_xvg9q_204",Br="_completeTitle_xvg9q_215",Xr="_completeText_xvg9q_234",Vr="_completeButton_xvg9q_253",Kr="_formError_xvg9q_279",Jr="_formErrorContent_xvg9q_291",Gr="_formErrorMessage_xvg9q_295",Wr="_formErrorIcon_xvg9q_303",Yr="_footer_xvg9q_308",w={contact:Nr,form:Ur,title:Pr,divider:Ir,input:Lr,botkiller:$r,button:zr,complete:qr,completeTitle:Br,completeText:Xr,completeButton:Vr,formError:Kr,formErrorContent:Jr,formErrorMessage:Gr,formErrorIcon:Wr,footer:Yr},cn=()=>Ze({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),be=512,Qr=4096,dn=()=>{const e=b.useRef(),t=_e(""),n=_e(""),r=v.base.durationS,a=wt(),{state:s}=_t(),i=s==="submitting";return m.jsxs(Ye,{className:w.contact,children:[m.jsx(N,{unmount:!0,in:!a?.success,timeout:1600,children:({status:o,nodeRef:l})=>m.jsxs(St,{unstable_viewTransition:!0,className:w.form,method:"post",ref:l,children:[m.jsx(oe,{className:w.title,"data-status":o,level:3,as:"h1",style:T(v.base.durationXS,r,.3),children:m.jsx(Ge,{text:"Say hello",start:o!=="exited",delay:300})}),m.jsx(We,{className:w.divider,"data-status":o,style:T(v.base.durationXS,r,.4)}),m.jsx(J,{className:w.botkiller,label:"Name",name:"name",maxLength:be}),m.jsx(J,{required:!0,className:w.input,"data-status":o,style:T(v.base.durationXS,r),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:be,...t}),m.jsx(J,{required:!0,multiline:!0,className:w.input,"data-status":o,style:T(v.base.durationS,r),autoComplete:"off",label:"Message",name:"message",maxLength:Qr,...n}),m.jsx(N,{unmount:!0,in:!i&&a?.errors,timeout:U(v.base.durationM),children:({status:c,nodeRef:u})=>m.jsx("div",{className:w.formError,ref:u,"data-status":c,style:$({height:c?e.current?.offsetHeight:0}),children:m.jsx("div",{className:w.formErrorContent,ref:e,children:m.jsxs("div",{className:w.formErrorMessage,children:[m.jsx(ve,{className:w.formErrorIcon,icon:"error"}),a?.errors?.email,a?.errors?.message]})})})}),m.jsx(le,{className:w.button,"data-status":o,"data-sending":i,style:T(v.base.durationM,r),disabled:i,loading:i,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),m.jsx(N,{unmount:!0,in:a?.success,children:({status:o,nodeRef:l})=>m.jsxs("div",{className:w.complete,"aria-live":"polite",ref:l,children:[m.jsx(oe,{level:3,as:"h3",className:w.completeTitle,"data-status":o,children:"Message Sent"}),m.jsx(Je,{size:"l",as:"p",className:w.completeText,"data-status":o,style:T(v.base.durationXS),children:"I’ll get back to you within a couple days, sit tight"}),m.jsx(le,{secondary:!0,iconHoverShift:!0,className:w.completeButton,"data-status":o,style:T(v.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})}),m.jsx(Qe,{className:w.footer})]})};function T(e,t=ie(0),n=1){const r=U(e)*n;return $({delay:ie((U(t)+r).toFixed(0))})}export{dn as default,cn as meta};
