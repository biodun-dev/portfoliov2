import{r as b,j as m,b as Je}from"./jsx-runtime-Lfnj0zCF.js";import{c as $,a as ve,T as N,m as U,I as Re,t as v,H as ie,n as le,B as ue,b as Ge}from"./heading-BjRlKi4B.js";import{D as We}from"./decoder-text-CfSnXSKQ.js";import{D as Ye}from"./divider-CqDENsnb.js";import{S as Qe,F as Ze,b as et}from"./meta-BEqd2dZY.js";import{m as tt,z as A,A as C,B as rt,C as nt,D as Ee,F as G,G as at,H as P,I as st,J as O,K as ot,N as z,U as W,P as it,Q as Ce,T as Z,V as lt,W as ut,X as ct,Y as dt,Z as ce,$ as de,E as ft,a0 as ht,a1 as ke,a2 as mt,a3 as pt,a4 as gt,a5 as yt,a6 as wt,a7 as _t,w as St,a8 as bt}from"./components-CIeRpJJx.js";import"./visually-hidden-D7ghLMuh.js";import"./use-spring-CcZhP75e.js";import"./index-C6rh08dF.js";import"./config-AqcvRU3G.js";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var xt=Et,vt=Ct,Rt=Object.prototype.toString,F=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function Et(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var n={},r=t||{},a=r.decode||kt,s=0;s<e.length;){var i=e.indexOf("=",s);if(i===-1)break;var o=e.indexOf(";",s);if(o===-1)o=e.length;else if(o<i){s=e.lastIndexOf(";",i-1)+1;continue}var l=e.slice(s,i).trim();if(n[l]===void 0){var c=e.slice(i+1,o).trim();c.charCodeAt(0)===34&&(c=c.slice(1,-1)),n[l]=jt(c,a)}s=o+1}return n}function Ct(e,t,n){var r=n||{},a=r.encode||Tt;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!F.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!F.test(s))throw new TypeError("argument val is invalid");var i=e+"="+s;if(r.maxAge!=null){var o=r.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(o)}if(r.domain){if(!F.test(r.domain))throw new TypeError("option domain is invalid");i+="; Domain="+r.domain}if(r.path){if(!F.test(r.path))throw new TypeError("option path is invalid");i+="; Path="+r.path}if(r.expires){var l=r.expires;if(!Dt(l)||isNaN(l.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+l.toUTCString()}if(r.httpOnly&&(i+="; HttpOnly"),r.secure&&(i+="; Secure"),r.partitioned&&(i+="; Partitioned"),r.priority){var c=typeof r.priority=="string"?r.priority.toLowerCase():r.priority;switch(c){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(r.sameSite){var u=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(u){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function kt(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Tt(e){return encodeURIComponent(e)}function Dt(e){return Rt.call(e)==="[object Date]"||e instanceof Date}function jt(e,t){try{return t(e)}catch{return e}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fe={};function Te(e,t){!e&&!fe[t]&&(fe[t]=!0,console.warn(t))}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Mt=({sign:e,unsign:t})=>(n,r={})=>{let{secrets:a=[],...s}={path:"/",sameSite:"lax",...r};return Ut(n,s.expires),{get name(){return n},get isSigned(){return a.length>0},get expires(){return typeof s.maxAge<"u"?new Date(Date.now()+s.maxAge*1e3):s.expires},async parse(i,o){if(!i)return null;let l=xt(i,{...s,...o});return n in l?l[n]===""?"":await At(t,l[n],a):null},async serialize(i,o){return vt(n,i===""?"":await Ot(e,i,a),{...s,...o})}}},ee=e=>e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function";async function Ot(e,t,n){let r=Ht(t);return n.length>0&&(r=await e(r,n[0])),r}async function At(e,t,n){if(n.length>0){for(let r of n){let a=await e(t,r);if(a!==!1)return he(a)}return null}return he(t)}function Ht(e){return btoa(Nt(encodeURIComponent(JSON.stringify(e))))}function he(e){try{return JSON.parse(decodeURIComponent(Ft(atob(e))))}catch{return{}}}function Ft(e){let t=e.toString(),n="",r=0,a,s;for(;r<t.length;)a=t.charAt(r++),/[\w*+\-./@]/.exec(a)?n+=a:(s=a.charCodeAt(0),s<256?n+="%"+me(s,2):n+="%u"+me(s,4).toUpperCase());return n}function me(e,t){let n=e.toString(16);for(;n.length<t;)n="0"+n;return n}function Nt(e){let t=e.toString(),n="",r=0,a,s;for(;r<t.length;){if(a=t.charAt(r++),a==="%"){if(t.charAt(r)==="u"){if(s=t.slice(r+1,r+5),/^[\da-f]{4}$/i.exec(s)){n+=String.fromCharCode(parseInt(s,16)),r+=5;continue}}else if(s=t.slice(r,r+2),/^[\da-f]{2}$/i.exec(s)){n+=String.fromCharCode(parseInt(s,16)),r+=2;continue}}n+=a}return n}function Ut(e,t){Te(!t,`The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`)}function q(e){const t=unescape(encodeURIComponent(e));return Uint8Array.from(t,(n,r)=>t.charCodeAt(r))}function Pt(e){const t=String.fromCharCode.apply(null,e);return decodeURIComponent(escape(t))}function I(...e){const t=new Uint8Array(e.reduce((r,a)=>r+a.length,0));let n=0;for(const r of e)t.set(r,n),n+=r.length;return t}function It(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function pe(e){return e instanceof Uint8Array?t=>e[t]:e}function V(e,t,n,r,a){const s=pe(e),i=pe(n);for(let o=0;o<a;++o)if(s(t+o)!==i(r+o))return!1;return!0}function Lt(e){const t=new Array(256).fill(e.length);if(e.length>1)for(let n=0;n<e.length-1;n++)t[e[n]]=e.length-1-n;return t}const E=Symbol("Match");class te{constructor(t){this._lookbehind=new Uint8Array,typeof t=="string"?this._needle=t=q(t):this._needle=t,this._lastChar=t[t.length-1],this._occ=Lt(t)}feed(t){let n=0,r;const a=[];for(;n!==t.length;)[n,...r]=this._feed(t,n),a.push(...r);return a}end(){const t=this._lookbehind;return this._lookbehind=new Uint8Array,t}_feed(t,n){const r=[];let a=-this._lookbehind.length;if(a<0){for(;a<0&&a<=t.length-this._needle.length;){const s=this._charAt(t,a+this._needle.length-1);if(s===this._lastChar&&this._memcmp(t,a,this._needle.length-1))return a>-this._lookbehind.length&&r.push(this._lookbehind.slice(0,this._lookbehind.length+a)),r.push(E),this._lookbehind=new Uint8Array,[a+this._needle.length,...r];a+=this._occ[s]}if(a<0)for(;a<0&&!this._memcmp(t,a,t.length-a);)a++;if(a>=0)r.push(this._lookbehind),this._lookbehind=new Uint8Array;else{const s=this._lookbehind.length+a;return s>0&&(r.push(this._lookbehind.slice(0,s)),this._lookbehind=this._lookbehind.slice(s)),this._lookbehind=Uint8Array.from(new Array(this._lookbehind.length+t.length),(i,o)=>this._charAt(t,o-this._lookbehind.length)),[t.length,...r]}}for(a+=n;a<=t.length-this._needle.length;){const s=t[a+this._needle.length-1];if(s===this._lastChar&&t[a]===this._needle[0]&&V(this._needle,0,t,a,this._needle.length-1))return a>n&&r.push(t.slice(n,a)),r.push(E),[a+this._needle.length,...r];a+=this._occ[s]}if(a<t.length){for(;a<t.length&&(t[a]!==this._needle[0]||!V(t,a,this._needle,0,t.length-a));)++a;a<t.length&&(this._lookbehind=t.slice(a))}return a>0&&r.push(t.slice(n,a<t.length?a:t.length)),[t.length,...r]}_charAt(t,n){return n<0?this._lookbehind[this._lookbehind.length+n]:t[n]}_memcmp(t,n,r){return V(this._charAt.bind(this,t),n,this._needle,0,r)}}class $t{constructor(t,n){this._readableStream=n,this._search=new te(t)}async*[Symbol.asyncIterator](){const t=this._readableStream.getReader();try{for(;;){const r=await t.read();if(r.done)break;yield*this._search.feed(r.value)}const n=this._search.end();n.length&&(yield n)}finally{t.releaseLock()}}}const zt=Function.prototype.apply.bind(I,void 0),De=q("--"),M=q(`\r
`);function qt(e){const t=e.split(";").map(r=>r.trim());if(t.shift()!=="form-data")throw new Error('malformed content-disposition header: missing "form-data" in `'+JSON.stringify(t)+"`");const n={};for(const r of t){const a=r.split("=",2);if(a.length!==2)throw new Error("malformed content-disposition header: key-value pair not found - "+r+" in `"+e+"`");const[s,i]=a;if(i[0]==='"'&&i[i.length-1]==='"')n[s]=i.slice(1,-1).replace(/\\"/g,'"');else if(i[0]!=='"'&&i[i.length-1]!=='"')n[s]=i;else if(i[0]==='"'&&i[i.length-1]!=='"'||i[0]!=='"'&&i[i.length-1]==='"')throw new Error("malformed content-disposition header: mismatched quotations in `"+e+"`")}if(!n.name)throw new Error("malformed content-disposition header: missing field name in `"+e+"`");return n}function Bt(e){const t=[];let n=!1,r;for(;typeof(r=e.shift())<"u";){const a=r.indexOf(":");if(a===-1)throw new Error("malformed multipart-form header: missing colon");const s=r.slice(0,a).trim().toLowerCase(),i=r.slice(a+1).trim();switch(s){case"content-disposition":n=!0,t.push(...Object.entries(qt(i)));break;case"content-type":t.push(["contentType",i])}}if(!n)throw new Error("malformed multipart-form header: missing content-disposition");return Object.fromEntries(t)}async function Xt(e,t){let n=!0,r=!1;const a=[[]],s=new te(M);for(;;){const i=await e.next();if(i.done)throw new Error("malformed multipart-form data: unexpected end of stream");if(n&&i.value!==E&&It(i.value.slice(0,2),De))return[void 0,new Uint8Array];let o;if(i.value!==E)o=i.value;else if(!r)o=t;else throw new Error("malformed multipart-form data: unexpected boundary");if(!o.length)continue;n&&(n=!1);const l=s.feed(o);for(const[c,u]of l.entries()){const p=u===E;if(!(!p&&!u.length)){if(r&&p)return l.push(s.end()),[a.filter(f=>f.length).map(zt).map(Pt),I(...l.slice(c+1).map(f=>f===E?M:f))];(r=p)?a.push([]):a[a.length-1].push(u)}}}}async function*Vt(e,t){const n=I(De,q(t)),r=new $t(n,e)[Symbol.asyncIterator]();for(;;){const s=await r.next();if(s.done)return;if(s.value===E)break}const a=new te(M);for(;;){let c=function(d){const y=[];for(const h of a.feed(d))l&&y.push(M),(l=h===E)||y.push(h);return I(...y)};const[s,i]=await Xt(r,n);if(!s)return;async function o(){const d=await r.next();if(d.done)throw new Error("malformed multipart-form data: unexpected end of stream");return d}let l=!1,u=!1;async function p(){const d=await o();let y;if(d.value!==E)y=d.value;else if(!l)y=M;else return u=!0,{value:a.end()};return{value:c(y)}}const f=[{value:c(i)}];for(yield{...Bt(s),data:{[Symbol.asyncIterator](){return this},async next(){for(;;){const d=f.shift();if(!d)break;if(d.value.length>0)return d}for(;;){if(u)return{done:u,value:void 0};const d=await p();if(d.value.length>0)return d}}}};!u;)f.push(await p())}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kt(...e){return async t=>{for(let n of e){let r=await n(t);if(typeof r<"u"&&r!==null)return r}}}async function Jt(e,t){let n=e.headers.get("Content-Type")||"",[r,a]=n.split(/\s*;\s*boundary=/);if(!e.body||!a||r!=="multipart/form-data")throw new TypeError("Could not parse content as FormData.");let s=new FormData,i=Vt(e.body,a);for await(let o of i){if(o.done)break;typeof o.filename=="string"&&(o.filename=o.filename.split(/[/\\]/).pop());let l=await t(o);typeof l<"u"&&l!==null&&s.append(o.name,l)}return s}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gt(e){return Object.keys(e).reduce((t,n)=>(t[n]=e[n].module,t),{})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ge(e,t){if(e===!1||e===null||typeof e>"u")throw console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new"),new Error(t)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Y(e,t,n){let r=tt(e,t,n);return r?r.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function Wt({loadContext:e,action:t,params:n,request:r,routeId:a,singleFetch:s}){let i=await t({request:s?Me(L(r)):je(L(r)),context:e,params:n});if(i===void 0)throw new Error(`You defined an action for route "${a}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return s||C(i)?i:A(i)}async function Yt({loadContext:e,loader:t,params:n,request:r,routeId:a,singleFetch:s}){let i=await t({request:s?Me(L(r)):je(L(r)),context:e,params:n});if(i===void 0)throw new Error(`You defined a loader for route "${a}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return rt(i)?i.init&&nt(i.init.status||200)?Ee(new Headers(i.init.headers).get("Location"),i.init):i:s||C(i)?i:A(i)}function L(e){let t=new URL(e.url),n=t.searchParams.getAll("index");t.searchParams.delete("index");let r=[];for(let s of n)s&&r.push(s);for(let s of r)t.searchParams.append("index",s);let a={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return a.body&&(a.duplex="half"),new Request(t.href,a)}function je(e){let t=new URL(e.url);t.searchParams.delete("_data");let n={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return n.body&&(n.duplex="half"),new Request(t.href,n)}function Me(e){let t=new URL(e.url);t.searchParams.delete("_routes");let n={method:e.method,body:e.body,headers:e.headers,signal:e.signal};return n.body&&(n.duplex="half"),new Request(t.href,n)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oe(e){let t={};return Object.values(e).forEach(n=>{let r=n.parentId||"";t[r]||(t[r]=[]),t[r].push(n)}),t}function Ae(e,t="",n=Oe(e)){return(n[t]||[]).map(r=>({...r,children:Ae(e,r.id,n)}))}function He(e,t,n="",r=Oe(e)){return(r[n]||[]).map(a=>{let s={hasErrorBoundary:a.id==="root"||a.module.ErrorBoundary!=null,id:a.id,path:a.path,loader:a.module.loader?(i,o)=>Yt({request:i.request,params:i.params,loadContext:i.context,loader:a.module.loader,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,action:a.module.action?(i,o)=>Wt({request:i.request,params:i.params,loadContext:i.context,action:a.module.action,routeId:a.id,singleFetch:t.v3_singleFetch===!0}):void 0,handle:a.module.handle};return a.index?{index:!0,...s}:{caseSensitive:a.caseSensitive,children:He(e,t,a.id,r),...s}})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Qt={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},Zt=/[&><\u2028\u2029]/g;function er(e){return e.replace(Zt,t=>Qt[t])}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ye(e){return er(JSON.stringify(e))}var tr={};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */async function rr(e,t){if(t??(t=tr.REMIX_DEV_ORIGIN),!t)throw Error("Dev server origin not set");let n=new URL(t);n.pathname="ping";let r=await fetch(n.href,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({buildHash:e.assets.version})}).catch(a=>{throw console.error(`Could not reach Remix dev server at ${n}`),a});if(!r.ok)throw console.error(`Could not reach Remix dev server at ${n} (${r.status})`),Error(await r.text())}function nr(e){console.log(`[REMIX DEV] ${e.assets.version} ready`)}const Fe="__remix_devServerHooks";function ar(e){globalThis[Fe]=e}function we(){return globalThis[Fe]}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(e,t){return`⚠️ REMIX FUTURE CHANGE: Externally-accessed resource routes will no longer be able to return raw JavaScript objects or \`null\` in React Router v7 when Single Fetch becomes the default. You can prepare for this change at your convenience by wrapping the data returned from your \`${e}\` function in the \`${t}\` route with \`json()\`.  For instructions on making this change, see https://remix.run/docs/en/v2.13.1/guides/single-fetch#resource-routes`}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ne=new Set([100,101,204,205,304]);function _e(e,t){var n,r;let a=Ae(e.routes),s=He(e.routes,e.future),i=mt(t)?t:O.Production,o=ot(s,{basename:e.basename,future:{v7_relativeSplatPath:((n=e.future)===null||n===void 0?void 0:n.v3_relativeSplatPath)===!0,v7_throwAbortReason:((r=e.future)===null||r===void 0?void 0:r.v3_throwAbortReason)===!0}}),l=e.entry.module.handleError||((c,{request:u})=>{i!==O.Test&&!u.signal.aborted&&console.error(z(c)&&c.error?c.error:c)});return{routes:a,dataRoutes:s,serverMode:i,staticHandler:o,errorHandler:l}}const or=(e,t)=>{let n,r,a,s,i;return async function(l,c={}){if(n=typeof e=="function"?await e():e,t??(t=n.mode),typeof e=="function"){let g=_e(n,t);r=g.routes,a=g.serverMode,s=g.staticHandler,i=g.errorHandler}else if(!r||!a||!s||!i){let g=_e(n,t);r=g.routes,a=g.serverMode,s=g.staticHandler,i=g.errorHandler}let u=new URL(l.url),p={},f=g=>{if(t===O.Development){var _,x;(_=we())===null||_===void 0||(x=_.processRequestError)===null||x===void 0||x.call(_,g)}i(g,{context:c,params:p,request:l})},d=`${n.basename??"/"}/__manifest`.replace(/\/+/g,"/");if(u.pathname===d)try{return await ir(n,r,u)}catch(g){return f(g),new Response("Unknown Server Error",{status:500})}let y=Y(r,u.pathname,n.basename);y&&y.length>0&&Object.assign(p,y[0].params);let h;if(u.searchParams.has("_data")){n.future.v3_singleFetch&&f(new Error("Warning: Single fetch-enabled apps should not be making ?_data requests, this is likely to break in the future"));let g=u.searchParams.get("_data");h=await lr(a,n,s,g,l,c,f),n.entry.module.handleDataRequest&&(h=await n.entry.module.handleDataRequest(h,{context:c,params:p,request:l}),G(h)&&(h=Ie(h,n.basename)))}else if(n.future.v3_singleFetch&&u.pathname.endsWith(".data")){let g=new URL(l.url);g.pathname=g.pathname.replace(/\.data$/,"").replace(/^\/_root$/,"/");let _=Y(r,g.pathname,n.basename);if(h=await ur(a,n,s,l,g,c,f),n.entry.module.handleDataRequest&&(h=await n.entry.module.handleDataRequest(h,{context:c,params:_?_[0].params:{},request:l}),G(h))){let x=at(h.status,h.headers,n.basename);l.method==="GET"&&(x={[ke]:x});let j=new Headers(h.headers);return j.set("Content-Type","text/x-script"),new Response(P(x,l.signal,n.entry.module.streamTimeout,a),{status:st,headers:j})}}else if(y&&y[y.length-1].route.module.default==null&&y[y.length-1].route.module.ErrorBoundary==null)h=await dr(a,n,s,y.slice(-1)[0].route.id,l,c,f);else{var R,S;let g=t===O.Development?await((R=we())===null||R===void 0||(S=R.getCriticalCss)===null||S===void 0?void 0:S.call(R,n,u.pathname)):void 0;h=await cr(a,n,s,l,c,f,g)}return l.method==="HEAD"?new Response(null,{headers:h.headers,status:h.status,statusText:h.statusText}):h}};async function ir(e,t,n){let r={};if(n.searchParams.has("p")){for(let a of n.searchParams.getAll("p")){let s=Y(t,a,e.basename);if(s)for(let i of s){let o=i.route.id;r[o]=e.assets.routes[o]}}return A(r,{headers:{"Cache-Control":"public, max-age=31536000, immutable"}})}return new Response("Invalid Request",{status:400})}async function lr(e,t,n,r,a,s,i){try{let o=await n.queryRoute(a,{routeId:r,requestContext:s});if(G(o))return Ie(o,t.basename);if(W in o){let l=o[W],c=it(l,a.signal,e),u=l.init||{},p=new Headers(u.headers);return p.set("Content-Type","text/remix-deferred"),p.set("X-Remix-Response","yes"),u.headers=p,new Response(c,u)}return o=Q(o,"X-Remix-Response","yes"),o}catch(o){if(C(o))return Q(o,"X-Remix-Catch","yes");if(z(o))return i(o),Ue(o,e);let l=o instanceof Error||o instanceof DOMException?o:new Error("Unexpected Server Error");return i(l),Ce(Z(l,e),{status:500,headers:{"X-Remix-Error":"yes"}})}}async function ur(e,t,n,r,a,s,i){let{result:o,headers:l,status:c}=r.method!=="GET"?await ut(t,e,n,r,a,s,i):await ct(t,e,n,r,a,s,i),u=new Headers(l);return u.set("X-Remix-Response","yes"),Ne.has(c)?new Response(null,{status:c,headers:u}):(u.set("Content-Type","text/x-script"),new Response(P(o,r.signal,t.entry.module.streamTimeout,e),{status:c||200,headers:u}))}async function cr(e,t,n,r,a,s,i){let o;try{o=await n.query(r,{requestContext:a})}catch(f){return s(f),new Response(null,{status:500})}if(C(o))return o;let l=dt(t,o);if(Ne.has(o.statusCode))return new Response(null,{status:o.statusCode,headers:l});o.errors&&(Object.values(o.errors).forEach(f=>{(!z(f)||f.error)&&s(f)}),o.errors=ce(o.errors,e));let c={loaderData:o.loaderData,actionData:o.actionData,errors:de(o.errors,e)},u={manifest:t.assets,routeModules:Gt(t.routes),staticHandlerContext:o,criticalCss:i,serverHandoffString:ye({basename:t.basename,criticalCss:i,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:c}}),...t.future.v3_singleFetch?{serverHandoffStream:P(c,r.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null,future:t.future,isSpaMode:t.isSpaMode,serializeError:f=>Z(f,e)},p=t.entry.module.default;try{return await p(r,o.statusCode,l,u,a)}catch(f){s(f);let d=f;if(C(f))try{let h=await fr(f);d=new ft(f.status,f.statusText,h)}catch{}o=ht(n.dataRoutes,o,d),o.errors&&(o.errors=ce(o.errors,e));let y={loaderData:o.loaderData,actionData:o.actionData,errors:de(o.errors,e)};u={...u,staticHandlerContext:o,serverHandoffString:ye({basename:t.basename,future:t.future,isSpaMode:t.isSpaMode,...t.future.v3_singleFetch?null:{state:y}}),...t.future.v3_singleFetch?{serverHandoffStream:P(y,r.signal,t.entry.module.streamTimeout,e),renderMeta:{}}:null};try{return await p(r,o.statusCode,l,u,a)}catch(h){return s(h),Pe(h,e)}}}async function dr(e,t,n,r,a,s,i){try{let o=await n.queryRoute(a,{routeId:r,requestContext:s});return typeof o=="object"&&o!==null&&ge(!(W in o),`You cannot return a \`defer()\` response from a Resource Route.  Did you forget to export a default UI component from the "${r}" route?`),t.future.v3_singleFetch&&!C(o)&&(console.warn(sr(a.method==="GET"?"loader":"action",r)),o=A(o)),ge(C(o),"Expected a Response to be returned from queryRoute"),o}catch(o){return C(o)?Q(o,"X-Remix-Catch","yes"):z(o)?(o&&i(o),Ue(o,e)):(i(o),Pe(o,e))}}function Ue(e,t){return Ce(Z(e.error||new Error("Unexpected Server Error"),t),{status:e.status,statusText:e.statusText,headers:{"X-Remix-Error":"yes"}})}function Pe(e,t){let n="Unexpected Server Error";return t!==O.Production&&(n+=`

${String(e)}`),new Response(n,{status:500,headers:{"Content-Type":"text/plain"}})}function fr(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}function Ie(e,t){let n=new Headers(e.headers),r=n.get("Location");return n.set("X-Remix-Redirect",t&&lt(r,t)||r),n.set("X-Remix-Status",String(e.status)),n.delete("Location"),e.headers.get("Set-Cookie")!==null&&n.set("X-Remix-Revalidate","yes"),new Response(null,{status:204,headers:n})}function Q(e,t,n){let r=new Headers(e.headers);return r.set(t,n),new Response(e.body,{status:e.status,statusText:e.statusText,headers:r,duplex:e.body?"half":void 0})}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function K(e){return`__flash_${e}__`}const re=(e={},t="")=>{let n=new Map(Object.entries(e));return{get id(){return t},get data(){return Object.fromEntries(n)},has(r){return n.has(r)||n.has(K(r))},get(r){if(n.has(r))return n.get(r);let a=K(r);if(n.has(a)){let s=n.get(a);return n.delete(a),s}},set(r,a){n.set(r,a)},flash(r,a){n.set(K(r),a)},unset(r){n.delete(r)}}},hr=e=>e!=null&&typeof e.id=="string"&&typeof e.data<"u"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function",mr=e=>({cookie:t,createData:n,readData:r,updateData:a,deleteData:s})=>{let i=ee(t)?t:e((t==null?void 0:t.name)||"__session",t);return Le(i),{async getSession(o,l){let c=o&&await i.parse(o,l),u=c&&await r(c);return re(u||{},c||"")},async commitSession(o,l){let{id:c,data:u}=o,p=(l==null?void 0:l.maxAge)!=null?new Date(Date.now()+l.maxAge*1e3):(l==null?void 0:l.expires)!=null?l.expires:i.expires;return c?await a(c,u,p):c=await n(u,p),i.serialize(c,l)},async destroySession(o,l){return await s(o.id),i.serialize("",{...l,maxAge:void 0,expires:new Date(0)})}}};function Le(e){Te(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`)}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pr=e=>({cookie:t}={})=>{let n=ee(t)?t:e((t==null?void 0:t.name)||"__session",t);return Le(n),{async getSession(r,a){return re(r&&await n.parse(r,a)||{})},async commitSession(r,a){let s=await n.serialize(r.data,a);if(s.length>4096)throw new Error("Cookie length will exceed browser maximum. Length: "+s.length);return s},async destroySession(r,a){return n.serialize("",{...a,maxAge:void 0,expires:new Date(0)})}}};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const gr=e=>({cookie:t}={})=>{let n=new Map;return e({cookie:t,async createData(r,a){let s=Math.random().toString(36).substring(2,10);return n.set(s,{data:r,expires:a}),s},async readData(r){if(n.has(r)){let{data:a,expires:s}=n.get(r);if(!s||s>new Date)return a;s&&n.delete(r)}return null},async updateData(r,a,s){n.set(r,{data:a,expires:s})},async deleteData(r){n.delete(r)}})};/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class $e extends Error{constructor(t,n){super(`Field "${t}" exceeded upload size of ${n} bytes.`),this.field=t,this.maxBytes=n}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yr({filter:e,maxPartSize:t=3e6}={}){return async({filename:n,contentType:r,name:a,data:s})=>{if(e&&!await e({filename:n,contentType:r,name:a}))return;let i=0,o=[];for await(let l of s){if(i+=l.byteLength,i>t)throw new $e(a,t);o.push(l)}return typeof n=="string"?new File(o,n,{type:r}):await new Blob(o,{type:r}).text()}}/**
 * @remix-run/server-runtime v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const wr=Object.freeze(Object.defineProperty({__proto__:null,MaxPartSizeExceededError:$e,UNSAFE_SingleFetchRedirectSymbol:ke,broadcastDevReady:rr,createCookieFactory:Mt,createCookieSessionStorageFactory:pr,createMemorySessionStorageFactory:gr,createRequestHandler:or,createSession:re,createSessionStorageFactory:mr,data:pt,defer:gt,isCookie:ee,isSession:hr,json:A,logDevReady:nr,redirect:Ee,redirectDocument:yt,replace:wt,unstable_composeUploadHandlers:Kt,unstable_createMemoryUploadHandler:yr,unstable_parseMultipartFormData:Jt,unstable_setDevServerHooks:ar},Symbol.toStringTag,{value:"Module"}));function Se(e=""){const[t,n]=b.useState(e),[r,a]=b.useState(),[s,i]=b.useState(!1);return{value:t,error:r,onChange:u=>{n(u.target.value),i(!0),r&&u.target.checkValidity()&&a(null)},onBlur:u=>{s&&u.target.checkValidity()},onInvalid:u=>{u.preventDefault(),a(u.target.validationMessage)}}}const _r="_textarea_1ly3z_2",Sr={textarea:_r},br=({className:e,resize:t="none",value:n,onChange:r,minRows:a=1,maxRows:s,...i})=>{const[o,l]=b.useState(a),[c,u]=b.useState(),p=b.useRef();b.useEffect(()=>{const d=getComputedStyle(p.current),y=parseInt(d.lineHeight,10),h=parseInt(d.paddingTop,10)+parseInt(d.paddingBottom,10);u({lineHeight:y,paddingHeight:h})},[]);const f=d=>{r(d);const{lineHeight:y,paddingHeight:h}=c,R=d.target.rows;d.target.rows=a;const S=~~((d.target.scrollHeight-h)/y);S===R&&(d.target.rows=S),s&&S>=s&&(d.target.rows=s,d.target.scrollTop=d.target.scrollHeight),l(s&&S>s?s:S)};return m.jsx("textarea",{className:ve(Sr.textarea,e),ref:p,onChange:f,style:$({resize:t}),rows:o,value:n,...i})},xr="_container_1ukhq_2",vr="_content_1ukhq_16",Rr="_input_1ukhq_21",Er="_underline_1ukhq_55",Cr="_label_1ukhq_73",kr="_error_1ukhq_95",Tr="_errorMessage_1ukhq_111",k={container:xr,content:vr,input:Rr,underline:Er,label:Cr,error:kr,errorMessage:Tr},J=({id:e,label:t,value:n,multiline:r,className:a,style:s,error:i,onBlur:o,autoComplete:l,required:c,maxLength:u,type:p,onChange:f,name:d,...y})=>{const[h,R]=b.useState(!1),S=b.useId(),g=b.useRef(),_=e||`${S}input`,x=`${_}-label`,j=`${_}-error`,Xe=r?br:"input",Ve=H=>{R(!1),o&&o(H)};return m.jsxs("div",{className:ve(k.container,a),"data-error":!!i,style:s,...y,children:[m.jsxs("div",{className:k.content,children:[m.jsx("label",{className:k.label,"data-focused":h,"data-filled":!!n,id:x,htmlFor:_,children:t}),m.jsx(Xe,{className:k.input,id:_,"aria-labelledby":x,"aria-describedby":i?j:void 0,onFocus:()=>R(!0),onBlur:Ve,value:n,onChange:f,autoComplete:l,required:c,maxLength:u,type:p,name:d}),m.jsx("div",{className:k.underline,"data-focused":h})]}),m.jsx(N,{unmount:!0,in:i,timeout:U(v.base.durationM),children:({visible:H,nodeRef:Ke})=>{var oe;return m.jsx("div",{ref:Ke,className:k.error,"data-visible":H,id:j,role:"alert",style:$({height:H?(oe=g.current)==null?void 0:oe.getBoundingClientRect().height:0}),children:m.jsxs("div",{className:k.errorMessage,ref:g,children:[m.jsx(Re,{icon:"error"}),i]})})}})]})};var Dr={},ne={},D={};const ze=Je(wr);var B={};/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(B,"__esModule",{value:!0});const ae=new TextEncoder,jr=async(e,t)=>{let n=await qe(t,["sign"]),r=ae.encode(e),a=await crypto.subtle.sign("HMAC",n,r),s=btoa(String.fromCharCode(...new Uint8Array(a))).replace(/=+$/,"");return e+"."+s},Mr=async(e,t)=>{let n=e.lastIndexOf("."),r=e.slice(0,n),a=e.slice(n+1),s=await qe(t,["verify"]),i=ae.encode(r),o=Or(atob(a));return await crypto.subtle.verify("HMAC",s,o,i)?r:!1};async function qe(e,t){return await crypto.subtle.importKey("raw",ae.encode(e),{name:"HMAC",hash:"SHA-256"},!1,t)}function Or(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}B.sign=jr;B.unsign=Mr;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(D,"__esModule",{value:!0});var X=ze,be=B;const se=X.createCookieFactory({sign:be.sign,unsign:be.unsign}),Ar=X.createCookieSessionStorageFactory(se),Be=X.createSessionStorageFactory(se),Hr=X.createMemorySessionStorageFactory(Be);D.createCookie=se;D.createCookieSessionStorage=Ar;D.createMemorySessionStorage=Hr;D.createSessionStorage=Be;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */Object.defineProperty(ne,"__esModule",{value:!0});var Fr=D;function Nr({cookie:e,kv:t}){return Fr.createSessionStorage({cookie:e,async createData(n,r){for(;;){let a=new Uint8Array(8);crypto.getRandomValues(a);let s=[...a].map(i=>i.toString(16).padStart(2,"0")).join("");if(!await t.get(s,"json"))return await t.put(s,JSON.stringify(n),{expiration:r?Math.round(r.getTime()/1e3):void 0}),s}},async readData(n){let r=await t.get(n);return r?JSON.parse(r):null},async updateData(n,r,a){await t.put(n,JSON.stringify(r),{expiration:a?Math.round(a.getTime()/1e3):void 0})},async deleteData(n){await t.delete(n)}})}ne.createWorkersKVSessionStorage=Nr;/**
 * @remix-run/cloudflare v2.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ne,n=D,r=ze;e.createWorkersKVSessionStorage=t.createWorkersKVSessionStorage,e.createCookie=n.createCookie,e.createCookieSessionStorage=n.createCookieSessionStorage,e.createMemorySessionStorage=n.createMemorySessionStorage,e.createSessionStorage=n.createSessionStorage,Object.defineProperty(e,"MaxPartSizeExceededError",{enumerable:!0,get:function(){return r.MaxPartSizeExceededError}}),Object.defineProperty(e,"broadcastDevReady",{enumerable:!0,get:function(){return r.broadcastDevReady}}),Object.defineProperty(e,"createRequestHandler",{enumerable:!0,get:function(){return r.createRequestHandler}}),Object.defineProperty(e,"createSession",{enumerable:!0,get:function(){return r.createSession}}),Object.defineProperty(e,"data",{enumerable:!0,get:function(){return r.data}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return r.defer}}),Object.defineProperty(e,"isCookie",{enumerable:!0,get:function(){return r.isCookie}}),Object.defineProperty(e,"isSession",{enumerable:!0,get:function(){return r.isSession}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return r.json}}),Object.defineProperty(e,"logDevReady",{enumerable:!0,get:function(){return r.logDevReady}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return r.redirect}}),Object.defineProperty(e,"redirectDocument",{enumerable:!0,get:function(){return r.redirectDocument}}),Object.defineProperty(e,"replace",{enumerable:!0,get:function(){return r.replace}}),Object.defineProperty(e,"unstable_composeUploadHandlers",{enumerable:!0,get:function(){return r.unstable_composeUploadHandlers}}),Object.defineProperty(e,"unstable_createMemoryUploadHandler",{enumerable:!0,get:function(){return r.unstable_createMemoryUploadHandler}}),Object.defineProperty(e,"unstable_parseMultipartFormData",{enumerable:!0,get:function(){return r.unstable_parseMultipartFormData}})})(Dr);const Ur="_contact_xvg9q_1",Pr="_form_xvg9q_18",Ir="_title_xvg9q_30",Lr="_divider_xvg9q_60",$r="_input_xvg9q_98",zr="_botkiller_xvg9q_140",qr="_button_xvg9q_144",Br="_complete_xvg9q_204",Xr="_completeTitle_xvg9q_215",Vr="_completeText_xvg9q_234",Kr="_completeButton_xvg9q_253",Jr="_formError_xvg9q_279",Gr="_formErrorContent_xvg9q_291",Wr="_formErrorMessage_xvg9q_295",Yr="_formErrorIcon_xvg9q_303",Qr="_footer_xvg9q_308",w={contact:Ur,form:Pr,title:Ir,divider:Lr,input:$r,botkiller:zr,button:qr,complete:Br,completeTitle:Xr,completeText:Vr,completeButton:Kr,formError:Jr,formErrorContent:Gr,formErrorMessage:Wr,formErrorIcon:Yr,footer:Qr},dn=()=>et({title:"Contact",description:"Send me a message if you’re interested in discussing a project or if you just want to say hi"}),xe=512,Zr=4096,fn=()=>{const e=b.useRef(),t=Se(""),n=Se(""),r=v.base.durationS,a=_t(),{state:s}=St(),i=s==="submitting";return m.jsxs(Qe,{className:w.contact,children:[m.jsx(N,{unmount:!0,in:!(a!=null&&a.success),timeout:1600,children:({status:o,nodeRef:l})=>m.jsxs(bt,{unstable_viewTransition:!0,className:w.form,method:"post",ref:l,children:[m.jsx(ie,{className:w.title,"data-status":o,level:3,as:"h1",style:T(v.base.durationXS,r,.3),children:m.jsx(We,{text:"Say hello",start:o!=="exited",delay:300})}),m.jsx(Ye,{className:w.divider,"data-status":o,style:T(v.base.durationXS,r,.4)}),m.jsx(J,{className:w.botkiller,label:"Name",name:"name",maxLength:xe}),m.jsx(J,{required:!0,className:w.input,"data-status":o,style:T(v.base.durationXS,r),autoComplete:"email",label:"Your email",type:"email",name:"email",maxLength:xe,...t}),m.jsx(J,{required:!0,multiline:!0,className:w.input,"data-status":o,style:T(v.base.durationS,r),autoComplete:"off",label:"Message",name:"message",maxLength:Zr,...n}),m.jsx(N,{unmount:!0,in:!i&&(a==null?void 0:a.errors),timeout:U(v.base.durationM),children:({status:c,nodeRef:u})=>{var p,f,d;return m.jsx("div",{className:w.formError,ref:u,"data-status":c,style:$({height:c?(p=e.current)==null?void 0:p.offsetHeight:0}),children:m.jsx("div",{className:w.formErrorContent,ref:e,children:m.jsxs("div",{className:w.formErrorMessage,children:[m.jsx(Re,{className:w.formErrorIcon,icon:"error"}),(f=a==null?void 0:a.errors)==null?void 0:f.email,(d=a==null?void 0:a.errors)==null?void 0:d.message]})})})}}),m.jsx(ue,{className:w.button,"data-status":o,"data-sending":i,style:T(v.base.durationM,r),disabled:i,loading:i,loadingText:"Sending...",icon:"send",type:"submit",children:"Send message"})]})}),m.jsx(N,{unmount:!0,in:a==null?void 0:a.success,children:({status:o,nodeRef:l})=>m.jsxs("div",{className:w.complete,"aria-live":"polite",ref:l,children:[m.jsx(ie,{level:3,as:"h3",className:w.completeTitle,"data-status":o,children:"Message Sent"}),m.jsx(Ge,{size:"l",as:"p",className:w.completeText,"data-status":o,style:T(v.base.durationXS),children:"I’ll get back to you within a couple days, sit tight"}),m.jsx(ue,{secondary:!0,iconHoverShift:!0,className:w.completeButton,"data-status":o,style:T(v.base.durationM),href:"/",icon:"chevron-right",children:"Back to homepage"})]})}),m.jsx(Ze,{className:w.footer})]})};function T(e,t=le(0),n=1){const r=U(e)*n;return $({delay:le((U(t)+r).toFixed(0))})}export{fn as default,dn as meta};
