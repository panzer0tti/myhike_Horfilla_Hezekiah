(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const Zh=()=>{};var Zo={};/**
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
 */const Sc=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},tu=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=n[e++];t[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=n[e++],l=n[e++],u=n[e++],g=((r&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const a=n[e++],l=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|l&63)}}return t.join("")},Cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const a=n[r],l=r+1<n.length,u=l?n[r+1]:0,g=r+2<n.length,y=g?n[r+2]:0,b=a>>2,S=(a&3)<<4|u>>4;let A=(u&15)<<2|y>>6,O=y&63;g||(O=64,l||(A=64)),s.push(e[b],e[S],e[A],e[O])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Sc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):tu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const a=e[n.charAt(r++)],u=r<n.length?e[n.charAt(r)]:0;++r;const y=r<n.length?e[n.charAt(r)]:64;++r;const S=r<n.length?e[n.charAt(r)]:64;if(++r,a==null||u==null||y==null||S==null)throw new eu;const A=a<<2|u>>4;if(s.push(A),y!==64){const O=u<<4&240|y>>2;if(s.push(O),S!==64){const R=y<<6&192|S;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nu=function(n){const t=Sc(n);return Cc.encodeByteArray(t,!0)},Ji=function(n){return nu(n).replace(/\./g,"")},Oc=function(n){try{return Cc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const su=()=>iu().__FIREBASE_DEFAULTS__,ru=()=>{if(typeof process>"u"||typeof Zo>"u")return;const n=Zo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ou=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Oc(n[1]);return t&&JSON.parse(t)},Cr=()=>{try{return Zh()||su()||ru()||ou()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nc=n=>Cr()?.emulatorHosts?.[n],au=n=>{const t=Nc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Dc=()=>Cr()?.config,Pc=n=>Cr()?.[`_${n}`];/**
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
 */class cu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ci(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function lu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ji(JSON.stringify(e)),Ji(JSON.stringify(l)),""].join(".")}const Jn={};function hu(){const n={prod:[],emulator:[]};for(const t of Object.keys(Jn))Jn[t]?n.emulator.push(t):n.prod.push(t);return n}function uu(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ta=!1;function kc(n,t){if(typeof window>"u"||typeof document>"u"||!ci(window.location.host)||Jn[n]===t||Jn[n]||ta)return;Jn[n]=t;function e(A){return`__firebase__banner__${A}`}const s="__firebase__banner",a=hu().prod.length>0;function l(){const A=document.getElementById(s);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,O){A.setAttribute("width","24"),A.setAttribute("id",O),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{ta=!0,l()},A}function b(A,O){A.setAttribute("id",O),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function S(){const A=uu(s),O=e("text"),R=document.getElementById(O)||document.createElement("span"),N=e("learnmore"),D=document.getElementById(N)||document.createElement("a"),$=e("preprendIcon"),U=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const F=A.element;u(F),b(D,N);const L=y();g(U,$),F.append(U,R,D,L),document.body.appendChild(F)}a?(R.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function du(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function fu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function gu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mu(){const n=ot();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _u(){try{return typeof indexedDB=="object"}catch{return!1}}function Eu(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{t(r.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const vu="FirebaseError";class qt extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=vu,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,a=this.errors[t],l=a?yu(a,s):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new qt(r,u,s)}}function yu(n,t){return n.replace(Tu,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Tu=/\{\$([^}]+)}/g;function wu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function xe(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const a=n[r],l=t[r];if(ea(a)&&ea(l)){if(!xe(a,l))return!1}else if(a!==l)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function ea(n){return n!==null&&typeof n=="object"}/**
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
 */function hi(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function bu(n,t){const e=new Au(n,t);return e.subscribe.bind(e)}class Au{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let r;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Iu(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:s},r.next===void 0&&(r.next=Fs),r.error===void 0&&(r.error=Fs),r.complete===void 0&&(r.complete=Fs);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Iu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Fs(){}/**
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
 */function Ee(n){return n&&n._delegate?n._delegate:n}class $e{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ce="[DEFAULT]";/**
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
 */class Su{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new cu;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ou(t))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(t=Ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ce){return this.instances.has(t)}getOptions(t=Ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[a,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);s===u&&l.resolve(r)}return r}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(s)??new Set;r.add(t),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&t(a,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cu(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ce){return this.component?this.component.multipleInstances?t:Ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cu(n){return n===Ce?void 0:n}function Ou(n){return n.instantiationMode==="EAGER"}/**
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
 */class Nu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Su(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Du={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Pu=W.INFO,Ru={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},ku=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=Ru[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Or{constructor(t){this.name=t,this._logLevel=Pu,this._logHandler=ku,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Du[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const Lu=(n,t)=>t.some(e=>n instanceof e);let na,ia;function Mu(){return na||(na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xu(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lc=new WeakMap,ur=new WeakMap,Mc=new WeakMap,js=new WeakMap,Nr=new WeakMap;function $u(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{e(ue(n.result)),r()},l=()=>{s(n.error),r()};n.addEventListener("success",a),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Lc.set(e,n)}).catch(()=>{}),Nr.set(t,n),t}function Vu(n){if(ur.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{e(),r()},l=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});ur.set(n,t)}let dr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ur.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Mc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ue(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Uu(n){dr=n(dr)}function Fu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Hs(this),t,...e);return Mc.set(s,t.sort?t.sort():[t]),ue(s)}:xu().includes(n)?function(...t){return n.apply(Hs(this),t),ue(Lc.get(this))}:function(...t){return ue(n.apply(Hs(this),t))}}function ju(n){return typeof n=="function"?Fu(n):(n instanceof IDBTransaction&&Vu(n),Lu(n,Mu())?new Proxy(n,dr):n)}function ue(n){if(n instanceof IDBRequest)return $u(n);if(js.has(n))return js.get(n);const t=ju(n);return t!==n&&(js.set(n,t),Nr.set(t,n)),t}const Hs=n=>Nr.get(n);function Hu(n,t,{blocked:e,upgrade:s,blocking:r,terminated:a}={}){const l=indexedDB.open(n,t),u=ue(l);return s&&l.addEventListener("upgradeneeded",g=>{s(ue(l.result),g.oldVersion,g.newVersion,ue(l.transaction),g)}),e&&l.addEventListener("blocked",g=>e(g.oldVersion,g.newVersion,g)),u.then(g=>{a&&g.addEventListener("close",()=>a()),r&&g.addEventListener("versionchange",y=>r(y.oldVersion,y.newVersion,y))}).catch(()=>{}),u}const Bu=["get","getKey","getAll","getAllKeys","count"],Wu=["put","add","delete","clear"],Bs=new Map;function sa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Bs.get(t))return Bs.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=Wu.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Bu.includes(e)))return;const a=async function(l,...u){const g=this.transaction(l,r?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(u.shift())),(await Promise.all([y[e](...u),r&&g.done]))[0]};return Bs.set(t,a),a}Uu(n=>({...n,get:(t,e,s)=>sa(t,e)||n.get(t,e,s),has:(t,e)=>!!sa(t,e)||n.has(t,e)}));/**
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
 */class zu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ku(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function Ku(n){return n.getComponent()?.type==="VERSION"}const fr="@firebase/app",ra="0.14.4";/**
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
 */const Wt=new Or("@firebase/app"),Gu="@firebase/app-compat",qu="@firebase/analytics-compat",Yu="@firebase/analytics",Xu="@firebase/app-check-compat",Ju="@firebase/app-check",Qu="@firebase/auth",Zu="@firebase/auth-compat",td="@firebase/database",ed="@firebase/data-connect",nd="@firebase/database-compat",id="@firebase/functions",sd="@firebase/functions-compat",rd="@firebase/installations",od="@firebase/installations-compat",ad="@firebase/messaging",cd="@firebase/messaging-compat",ld="@firebase/performance",hd="@firebase/performance-compat",ud="@firebase/remote-config",dd="@firebase/remote-config-compat",fd="@firebase/storage",pd="@firebase/storage-compat",gd="@firebase/firestore",md="@firebase/ai",_d="@firebase/firestore-compat",Ed="firebase",vd="12.4.0";/**
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
 */const pr="[DEFAULT]",yd={[fr]:"fire-core",[Gu]:"fire-core-compat",[Yu]:"fire-analytics",[qu]:"fire-analytics-compat",[Ju]:"fire-app-check",[Xu]:"fire-app-check-compat",[Qu]:"fire-auth",[Zu]:"fire-auth-compat",[td]:"fire-rtdb",[ed]:"fire-data-connect",[nd]:"fire-rtdb-compat",[id]:"fire-fn",[sd]:"fire-fn-compat",[rd]:"fire-iid",[od]:"fire-iid-compat",[ad]:"fire-fcm",[cd]:"fire-fcm-compat",[ld]:"fire-perf",[hd]:"fire-perf-compat",[ud]:"fire-rc",[dd]:"fire-rc-compat",[fd]:"fire-gcs",[pd]:"fire-gcs-compat",[gd]:"fire-fst",[_d]:"fire-fst-compat",[md]:"fire-vertex","fire-js":"fire-js",[Ed]:"fire-js-all"};/**
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
 */const Qi=new Map,Td=new Map,gr=new Map;function oa(n,t){try{n.container.addComponent(t)}catch(e){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function fn(n){const t=n.name;if(gr.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;gr.set(t,n);for(const e of Qi.values())oa(e,n);for(const e of Td.values())oa(e,n);return!0}function Dr(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Nt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const wd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},de=new li("app","Firebase",wd);/**
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
 */class bd{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw de.create("app-deleted",{appName:this._name})}}/**
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
 */const bn=vd;function xc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:pr,automaticDataCollectionEnabled:!0,...t},r=s.name;if(typeof r!="string"||!r)throw de.create("bad-app-name",{appName:String(r)});if(e||(e=Dc()),!e)throw de.create("no-options");const a=Qi.get(r);if(a){if(xe(e,a.options)&&xe(s,a.config))return a;throw de.create("duplicate-app",{appName:r})}const l=new Nu(r);for(const g of gr.values())l.addComponent(g);const u=new bd(e,s,l);return Qi.set(r,u),u}function $c(n=pr){const t=Qi.get(n);if(!t&&n===pr&&Dc())return xc();if(!t)throw de.create("no-app",{appName:n});return t}function fe(n,t,e){let s=yd[n]??n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),a=t.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${t}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(l.join(" "));return}fn(new $e(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Ad="firebase-heartbeat-database",Id=1,si="firebase-heartbeat-store";let Ws=null;function Vc(){return Ws||(Ws=Hu(Ad,Id,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(si)}catch(e){console.warn(e)}}}}).catch(n=>{throw de.create("idb-open",{originalErrorMessage:n.message})})),Ws}async function Sd(n){try{const e=(await Vc()).transaction(si),s=await e.objectStore(si).get(Uc(n));return await e.done,s}catch(t){if(t instanceof qt)Wt.warn(t.message);else{const e=de.create("idb-get",{originalErrorMessage:t?.message});Wt.warn(e.message)}}}async function aa(n,t){try{const s=(await Vc()).transaction(si,"readwrite");await s.objectStore(si).put(t,Uc(n)),await s.done}catch(e){if(e instanceof qt)Wt.warn(e.message);else{const s=de.create("idb-set",{originalErrorMessage:e?.message});Wt.warn(s.message)}}}function Uc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Cd=1024,Od=30;class Nd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pd(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ca();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:e}),this._heartbeatsCache.heartbeats.length>Od){const r=Rd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Wt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ca(),{heartbeatsToSend:e,unsentEntries:s}=Dd(this._heartbeatsCache.heartbeats),r=Ji(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Wt.warn(t),""}}}function ca(){return new Date().toISOString().substring(0,10)}function Dd(n,t=Cd){const e=[];let s=n.slice();for(const r of n){const a=e.find(l=>l.agent===r.agent);if(a){if(a.dates.push(r.date),la(e)>t){a.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),la(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class Pd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _u()?Eu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sd(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return aa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return aa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function la(n){return Ji(JSON.stringify({version:2,heartbeats:n})).length}function Rd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
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
 */function kd(n){fn(new $e("platform-logger",t=>new zu(t),"PRIVATE")),fn(new $e("heartbeat",t=>new Nd(t),"PRIVATE")),fe(fr,ra,n),fe(fr,ra,"esm2020"),fe("fire-js","")}kd("");function Fc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ld=Fc,jc=new li("auth","Firebase",Fc());/**
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
 */const Zi=new Or("@firebase/auth");function Md(n,...t){Zi.logLevel<=W.WARN&&Zi.warn(`Auth (${bn}): ${n}`,...t)}function Bi(n,...t){Zi.logLevel<=W.ERROR&&Zi.error(`Auth (${bn}): ${n}`,...t)}/**
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
 */function zt(n,...t){throw Pr(n,...t)}function Pt(n,...t){return Pr(n,...t)}function Hc(n,t,e){const s={...Ld(),[t]:e};return new li("auth","Firebase",s).create(t,{appName:n.name})}function Re(n){return Hc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pr(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return jc.create(n,...t)}function k(n,t,...e){if(!n)throw Pr(t,...e)}function Ft(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Bi(t),new Error(t)}function Kt(n,t){n||Ft(t)}/**
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
 */function mr(){return typeof self<"u"&&self.location?.href||""}function xd(){return ha()==="http:"||ha()==="https:"}function ha(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function $d(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xd()||pu()||"connection"in navigator)?navigator.onLine:!0}function Vd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ui{constructor(t,e){this.shortDelay=t,this.longDelay=e,Kt(e>t,"Short delay should be less than long delay!"),this.isMobile=du()||gu()}get(){return $d()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rr(n,t){Kt(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Bc{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ud={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jd=new ui(3e4,6e4);function kr(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function An(n,t,e,s,r={}){return Wc(n,r,async()=>{let a={},l={};s&&(t==="GET"?l=s:a={body:JSON.stringify(s)});const u=hi({key:n.config.apiKey,...l}).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y={method:t,headers:g,...a};return fu()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&ci(n.emulatorConfig.host)&&(y.credentials="include"),Bc.fetch()(await zc(n,n.config.apiHost,e,u),y)})}async function Wc(n,t,e){n._canInitEmulator=!1;const s={...Ud,...t};try{const r=new Bd(n),a=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw ki(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const u=a.ok?l.errorMessage:l.error.message,[g,y]=u.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(n,"credential-already-in-use",l);if(g==="EMAIL_EXISTS")throw ki(n,"email-already-in-use",l);if(g==="USER_DISABLED")throw ki(n,"user-disabled",l);const b=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Hc(n,b,y);zt(n,b)}}catch(r){if(r instanceof qt)throw r;zt(n,"network-request-failed",{message:String(r)})}}async function Hd(n,t,e,s,r={}){const a=await An(n,t,e,s,r);return"mfaPendingCredential"in a&&zt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function zc(n,t,e,s){const r=`${t}${e}?${s}`,a=n,l=a.config.emulator?Rr(n.config,r):`${n.config.apiScheme}://${r}`;return Fd.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class Bd{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Pt(this.auth,"network-request-failed")),jd.get())})}}function ki(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const r=Pt(n,t,s);return r.customData._tokenResponse=e,r}/**
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
 */async function Wd(n,t){return An(n,"POST","/v1/accounts:delete",t)}async function ts(n,t){return An(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Qn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zd(n,t=!1){const e=Ee(n),s=await e.getIdToken(t),r=Lr(s);k(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,l=a?.sign_in_provider;return{claims:r,token:s,authTime:Qn(zs(r.auth_time)),issuedAtTime:Qn(zs(r.iat)),expirationTime:Qn(zs(r.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function zs(n){return Number(n)*1e3}function Lr(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Oc(e);return r?JSON.parse(r):(Bi("Failed to decode base64 JWT payload"),null)}catch(r){return Bi("Caught error parsing JWT payload as JSON",r?.toString()),null}}function ua(n){const t=Lr(n);return k(t,"internal-error"),k(typeof t.exp<"u","internal-error"),k(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ri(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof qt&&Kd(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Kd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Gd{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _r{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function es(n){const t=n.auth,e=await n.getIdToken(),s=await ri(n,ts(t,{idToken:e}));k(s?.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=r.providerUserInfo?.length?Kc(r.providerUserInfo):[],l=Yd(n.providerData,a),u=n.isAnonymous,g=!(n.email&&r.passwordHash)&&!l?.length,y=u?g:!1,b={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new _r(r.createdAt,r.lastLoginAt),isAnonymous:y};Object.assign(n,b)}async function qd(n){const t=Ee(n);await es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Yd(n,t){return[...n.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function Kc(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function Xd(n,t){const e=await Wc(n,{},async()=>{const s=hi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=n.config,l=await zc(n,r,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:u,body:s};return n.emulatorConfig&&ci(n.emulatorConfig.host)&&(g.credentials="include"),Bc.fetch()(l,g)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Jd(n,t){return An(n,"POST","/v2/accounts:revokeToken",kr(n,t))}/**
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
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){k(t.idToken,"internal-error"),k(typeof t.idToken<"u","internal-error"),k(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ua(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){k(t.length!==0,"internal-error");const e=ua(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(k(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:r,expiresIn:a}=await Xd(t,e);this.updateTokensAndExpiration(s,r,Number(a))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:r,expirationTime:a}=e,l=new ln;return s&&(k(typeof s=="string","internal-error",{appName:t}),l.refreshToken=s),r&&(k(typeof r=="string","internal-error",{appName:t}),l.accessToken=r),a&&(k(typeof a=="number","internal-error",{appName:t}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function re(n,t){k(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class wt{constructor({uid:t,auth:e,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Gd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _r(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await ri(this,this.stsTokenManager.getToken(this.auth,t));return k(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return zd(this,t)}reload(){return qd(this)}_assign(t){this!==t&&(k(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new wt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await es(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Re(this.auth));const t=await this.getIdToken();return await ri(this,Wd(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const s=e.displayName??void 0,r=e.email??void 0,a=e.phoneNumber??void 0,l=e.photoURL??void 0,u=e.tenantId??void 0,g=e._redirectEventId??void 0,y=e.createdAt??void 0,b=e.lastLoginAt??void 0,{uid:S,emailVerified:A,isAnonymous:O,providerData:R,stsTokenManager:N}=e;k(S&&N,t,"internal-error");const D=ln.fromJSON(this.name,N);k(typeof S=="string",t,"internal-error"),re(s,t.name),re(r,t.name),k(typeof A=="boolean",t,"internal-error"),k(typeof O=="boolean",t,"internal-error"),re(a,t.name),re(l,t.name),re(u,t.name),re(g,t.name),re(y,t.name),re(b,t.name);const $=new wt({uid:S,auth:t,email:r,emailVerified:A,displayName:s,isAnonymous:O,photoURL:l,phoneNumber:a,tenantId:u,stsTokenManager:D,createdAt:y,lastLoginAt:b});return R&&Array.isArray(R)&&($.providerData=R.map(U=>({...U}))),g&&($._redirectEventId=g),$}static async _fromIdTokenResponse(t,e,s=!1){const r=new ln;r.updateFromServerResponse(e);const a=new wt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await es(a),a}static async _fromGetAccountInfoResponse(t,e,s){const r=e.users[0];k(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?Kc(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!a?.length,u=new ln;u.updateFromIdToken(s);const g=new wt({uid:r.localId,auth:t,stsTokenManager:u,isAnonymous:l}),y={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _r(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!a?.length};return Object.assign(g,y),g}}/**
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
 */const da=new Map;function jt(n){Kt(n instanceof Function,"Expected a class definition");let t=da.get(n);return t?(Kt(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,da.set(n,t),t)}/**
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
 */class Gc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Gc.type="NONE";const fa=Gc;/**
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
 */function Wi(n,t,e){return`firebase:${n}:${t}:${e}`}class hn{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:r,name:a}=this.auth;this.fullUserKey=Wi(this.userKey,r.apiKey,a),this.fullPersistenceKey=Wi("persistence",r.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ts(this.auth,{idToken:t}).catch(()=>{});return e?wt._fromGetAccountInfoResponse(this.auth,e,t):null}return wt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new hn(jt(fa),t,s);const r=(await Promise.all(e.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let a=r[0]||jt(fa);const l=Wi(s,t.config.apiKey,t.name);let u=null;for(const y of e)try{const b=await y._get(l);if(b){let S;if(typeof b=="string"){const A=await ts(t,{idToken:b}).catch(()=>{});if(!A)break;S=await wt._fromGetAccountInfoResponse(t,A,b)}else S=wt._fromJSON(t,b);y!==a&&(u=S),a=y;break}}catch{}const g=r.filter(y=>y._shouldAllowMigration);return!a._shouldAllowMigration||!g.length?new hn(a,t,s):(a=g[0],u&&await a._set(l,u.toJSON()),await Promise.all(e.map(async y=>{if(y!==a)try{await y._remove(l)}catch{}})),new hn(a,t,s))}}/**
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
 */function pa(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Jc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zc(t))return"Blackberry";if(tl(t))return"Webos";if(Yc(t))return"Safari";if((t.includes("chrome/")||Xc(t))&&!t.includes("edge/"))return"Chrome";if(Qc(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if(s?.length===2)return s[1]}return"Other"}function qc(n=ot()){return/firefox\//i.test(n)}function Yc(n=ot()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xc(n=ot()){return/crios\//i.test(n)}function Jc(n=ot()){return/iemobile/i.test(n)}function Qc(n=ot()){return/android/i.test(n)}function Zc(n=ot()){return/blackberry/i.test(n)}function tl(n=ot()){return/webos/i.test(n)}function Mr(n=ot()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qd(n=ot()){return Mr(n)&&!!window.navigator?.standalone}function Zd(){return mu()&&document.documentMode===10}function el(n=ot()){return Mr(n)||Qc(n)||tl(n)||Zc(n)||/windows phone/i.test(n)||Jc(n)}/**
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
 */function nl(n,t=[]){let e;switch(n){case"Browser":e=pa(ot());break;case"Worker":e=`${pa(ot())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${bn}/${s}`}/**
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
 */class tf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=a=>new Promise((l,u)=>{try{const g=t(a);l(g)}catch(g){u(g)}});s.onAbort=e,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function ef(n,t={}){return An(n,"GET","/v2/passwordPolicy",kr(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const nf=6;class sf{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??nf,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,r,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class rf{constructor(t,e,s,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ga(this),this.idTokenSubscription=new ga(this),this.beforeStateQueue=new tf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=jt(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await hn.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ts(this,{idToken:t}),s=await wt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let s=e,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&u?.user&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await es(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Vd()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nt(this.app))return Promise.reject(Re(this));const e=t?Ee(t):null;return e&&k(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&k(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nt(this.app)?Promise.reject(Re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ef(this),e=new sf(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new li("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await Jd(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&jt(t)||this._popupRedirectResolver;k(e,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[jt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,r){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(u,this,"internal-error"),u.then(()=>{l||a(this.currentUser)}),typeof e=="function"){const g=t.addObserver(e,s,r);return()=>{l=!0,g()}}else{const g=t.addObserver(e);return()=>{l=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Md(`Error while retrieving App Check token: ${t.error}`),t?.token}}function xr(n){return Ee(n)}class ga{constructor(t){this.auth=t,this.observer=null,this.addObserver=bu(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $r={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function of(n){$r=n}function af(n){return $r.loadJS(n)}function cf(){return $r.gapiScript}function lf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function hf(n,t){const e=Dr(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),a=e.getOptions();if(xe(a,t??{}))return r;zt(r,"already-initialized")}return e.initialize({options:t})}function uf(n,t){const e=t?.persistence||[],s=(Array.isArray(e)?e:[e]).map(jt);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t?.popupRedirectResolver)}function df(n,t,e){const s=xr(n);k(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!1,a=il(t),{host:l,port:u}=ff(t),g=u===null?"":`:${u}`,y={url:`${a}//${l}${g}/`},b=Object.freeze({host:l,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){k(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),k(xe(y,s.config.emulator)&&xe(b,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=b,s.settings.appVerificationDisabledForTesting=!0,ci(l)?(Rc(`${a}//${l}${g}`),kc("Auth",!0)):pf()}function il(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function ff(n){const t=il(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const a=r[1];return{host:a,port:ma(s.substr(a.length+1))}}else{const[a,l]=s.split(":");return{host:a,port:ma(l)}}}function ma(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function pf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class sl{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ft("not implemented")}_getIdTokenResponse(t){return Ft("not implemented")}_linkToIdToken(t,e){return Ft("not implemented")}_getReauthenticationResolver(t){return Ft("not implemented")}}/**
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
 */async function un(n,t){return Hd(n,"POST","/v1/accounts:signInWithIdp",kr(n,t))}/**
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
 */const gf="http://localhost";class Ve extends sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ve(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):zt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r,...a}=e;if(!s||!r)return null;const l=new Ve(s,r);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(t){const e=this.buildRequest();return un(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,un(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,un(t,e)}buildRequest(){const t={requestUri:gf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=hi(e)}return t}}/**
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
 */class rl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class di extends rl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ae extends di{constructor(){super("facebook.com")}static credential(t){return Ve._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ae.credentialFromTaggedObject(t)}static credentialFromError(t){return ae.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ae.credential(t.oauthAccessToken)}catch{return null}}}ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";ae.PROVIDER_ID="facebook.com";/**
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
 */class ce extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ve._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ce.credentialFromTaggedObject(t)}static credentialFromError(t){return ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return ce.credential(e,s)}catch{return null}}}ce.GOOGLE_SIGN_IN_METHOD="google.com";ce.PROVIDER_ID="google.com";/**
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
 */class le extends di{constructor(){super("github.com")}static credential(t){return Ve._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return le.credentialFromTaggedObject(t)}static credentialFromError(t){return le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return le.credential(t.oauthAccessToken)}catch{return null}}}le.GITHUB_SIGN_IN_METHOD="github.com";le.PROVIDER_ID="github.com";/**
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
 */class he extends di{constructor(){super("twitter.com")}static credential(t,e){return Ve._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return he.credentialFromTaggedObject(t)}static credentialFromError(t){return he.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return he.credential(e,s)}catch{return null}}}he.TWITTER_SIGN_IN_METHOD="twitter.com";he.PROVIDER_ID="twitter.com";/**
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
 */class pn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,r=!1){const a=await wt._fromIdTokenResponse(t,s,r),l=_a(s);return new pn({user:a,providerId:l,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const r=_a(s);return new pn({user:t,providerId:r,_tokenResponse:s,operationType:e})}}function _a(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ns extends qt{constructor(t,e,s,r){super(e.code,e.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,r){return new ns(t,e,s,r)}}function ol(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(n,a,t,s):a})}async function mf(n,t,e=!1){const s=await ri(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return pn._forOperation(n,"link",s)}/**
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
 */async function _f(n,t,e=!1){const{auth:s}=n;if(Nt(s.app))return Promise.reject(Re(s));const r="reauthenticate";try{const a=await ri(n,ol(s,r,t,n),e);k(a.idToken,s,"internal-error");const l=Lr(a.idToken);k(l,s,"internal-error");const{sub:u}=l;return k(n.uid===u,s,"user-mismatch"),pn._forOperation(n,r,a)}catch(a){throw a?.code==="auth/user-not-found"&&zt(s,"user-mismatch"),a}}/**
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
 */async function Ef(n,t,e=!1){if(Nt(n.app))return Promise.reject(Re(n));const s="signIn",r=await ol(n,s,t),a=await pn._fromIdTokenResponse(n,s,r);return e||await n._updateCurrentUser(a.user),a}function vf(n,t,e,s){return Ee(n).onIdTokenChanged(t,e,s)}function yf(n,t,e){return Ee(n).beforeAuthStateChanged(t,e)}function Tf(n,t,e,s){return Ee(n).onAuthStateChanged(t,e,s)}function wf(n){return Ee(n).signOut()}const is="__sak";/**
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
 */class al{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(is,"1"),this.storage.removeItem(is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bf=1e3,Af=10;class cl extends al{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=el(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),r=this.localCache[e];s!==r&&t(e,r,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((l,u,g)=>{this.notifyListeners(l,g)});return}const s=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(s);!e&&this.localCache[s]===l||this.notifyListeners(s,l)},a=this.storage.getItem(s);Zd()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Af):r()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},bf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}cl.type="LOCAL";const If=cl;/**
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
 */class ll extends al{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ll.type="SESSION";const hl=ll;/**
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
 */function Sf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class hs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const s=new hs(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:r,data:a}=e.data,l=this.handlersMap[r];if(!l?.size)return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const u=Array.from(l).map(async y=>y(e.origin,a)),g=await Sf(u);e.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:g})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hs.receivers=[];/**
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
 */function Vr(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Cf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,l;return new Promise((u,g)=>{const y=Vr("",20);r.port1.start();const b=setTimeout(()=>{g(new Error("unsupported_event"))},s);l={messageChannel:r,onMessage(S){const A=S;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(b),a=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(A.data.response);break;default:clearTimeout(b),clearTimeout(a),g(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:y,data:e},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Rt(){return window}function Of(n){Rt().location.href=n}/**
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
 */function ul(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function Nf(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Df(){return navigator?.serviceWorker?.controller||null}function Pf(){return ul()?self:null}/**
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
 */const dl="firebaseLocalStorageDb",Rf=1,ss="firebaseLocalStorage",fl="fbase_key";class fi{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function us(n,t){return n.transaction([ss],t?"readwrite":"readonly").objectStore(ss)}function kf(){const n=indexedDB.deleteDatabase(dl);return new fi(n).toPromise()}function Er(){const n=indexedDB.open(dl,Rf);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ss,{keyPath:fl})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ss)?t(s):(s.close(),await kf(),t(await Er()))})})}async function Ea(n,t,e){const s=us(n,!0).put({[fl]:t,value:e});return new fi(s).toPromise()}async function Lf(n,t){const e=us(n,!1).get(t),s=await new fi(e).toPromise();return s===void 0?null:s.value}function va(n,t){const e=us(n,!0).delete(t);return new fi(e).toPromise()}const Mf=800,xf=3;class pl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Er(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>xf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ul()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hs._getInstance(Pf()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Nf(),!this.activeServiceWorker)return;this.sender=new Cf(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Df()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Er();return await Ea(t,is,"1"),await va(t,is),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ea(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>Lf(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>va(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const a=us(r,!1).getAll();return new fi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:r,value:a}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pl.type="LOCAL";const $f=pl;new ui(3e4,6e4);/**
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
 */function Vf(n,t){return t?jt(t):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ur extends sl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return un(t,this._buildIdpRequest())}_linkToIdToken(t,e){return un(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return un(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Uf(n){return Ef(n.auth,new Ur(n),n.bypassAuthState)}function Ff(n){const{auth:t,user:e}=n;return k(e,t,"internal-error"),_f(e,new Ur(n),n.bypassAuthState)}async function jf(n){const{auth:t,user:e}=n;return k(e,t,"internal-error"),mf(e,new Ur(n),n.bypassAuthState)}/**
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
 */class gl{constructor(t,e,s,r,a=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:r,tenantId:a,error:l,type:u}=t;if(l){this.reject(l);return}const g={auth:this.auth,requestUri:e,sessionId:s,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Uf;case"linkViaPopup":case"linkViaRedirect":return jf;case"reauthViaPopup":case"reauthViaRedirect":return Ff;default:zt(this.auth,"internal-error")}}resolve(t){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hf=new ui(2e3,1e4);class an extends gl{constructor(t,e,s,r,a){super(t,e,r,a),this.provider=s,this.authWindow=null,this.pollId=null,an.currentPopupAction&&an.currentPopupAction.cancel(),an.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return k(t,this.auth,"internal-error"),t}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const t=Vr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,an.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Hf.get())};t()}}an.currentPopupAction=null;/**
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
 */const Bf="pendingRedirect",zi=new Map;class Wf extends gl{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=zi.get(this.auth._key());if(!t){try{const s=await zf(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}zi.set(this.auth._key(),t)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zf(n,t){const e=qf(t),s=Gf(n);if(!await s._isAvailable())return!1;const r=await s._get(e)==="true";return await s._remove(e),r}function Kf(n,t){zi.set(n._key(),t)}function Gf(n){return jt(n._redirectPersistence)}function qf(n){return Wi(Bf,n.config.apiKey,n.name)}async function Yf(n,t,e=!1){if(Nt(n.app))return Promise.reject(Re(n));const s=xr(n),r=Vf(s,t),l=await new Wf(s,r,e).execute();return l&&!e&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,t)),l}/**
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
 */const Xf=600*1e3;class Jf{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Qf(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!ml(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";e.onError(Pt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Xf&&this.cachedEventUids.clear(),this.cachedEventUids.has(ya(t))}saveEventToCache(t){this.cachedEventUids.add(ya(t)),this.lastProcessedEventTime=Date.now()}}function ya(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function ml({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function Qf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ml(n);default:return!1}}/**
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
 */async function Zf(n,t={}){return An(n,"GET","/v1/projects",t)}/**
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
 */const tp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ep=/^https?/;async function np(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Zf(n);for(const e of t)try{if(ip(e))return}catch{}zt(n,"unauthorized-domain")}function ip(n){const t=mr(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&l.hostname===s}if(!ep.test(e))return!1;if(tp.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const sp=new ui(3e4,6e4);function Ta(){const n=Rt().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function rp(n){return new Promise((t,e)=>{function s(){Ta(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ta(),e(Pt(n,"network-request-failed"))},timeout:sp.get()})}if(Rt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Rt().gapi?.load)s();else{const r=lf("iframefcb");return Rt()[r]=()=>{gapi.load?s():e(Pt(n,"network-request-failed"))},af(`${cf()}?onload=${r}`).catch(a=>e(a))}}).catch(t=>{throw Ki=null,t})}let Ki=null;function op(n){return Ki=Ki||rp(n),Ki}/**
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
 */const ap=new ui(5e3,15e3),cp="__/auth/iframe",lp="emulator/auth/iframe",hp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},up=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dp(n){const t=n.config;k(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Rr(t,lp):`https://${n.config.authDomain}/${cp}`,s={apiKey:t.apiKey,appName:n.name,v:bn},r=up.get(n.config.apiHost);r&&(s.eid=r);const a=n._getFrameworks();return a.length&&(s.fw=a.join(",")),`${e}?${hi(s).slice(1)}`}async function fp(n){const t=await op(n),e=Rt().gapi;return k(e,n,"internal-error"),t.open({where:document.body,url:dp(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hp,dontclear:!0},s=>new Promise(async(r,a)=>{await s.restyle({setHideOnLeave:!1});const l=Pt(n,"network-request-failed"),u=Rt().setTimeout(()=>{a(l)},ap.get());function g(){Rt().clearTimeout(u),r(s)}s.ping(g).then(g,()=>{a(l)})}))}/**
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
 */const pp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gp=500,mp=600,_p="_blank",Ep="http://localhost";class wa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vp(n,t,e,s=gp,r=mp){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let u="";const g={...pp,width:s.toString(),height:r.toString(),top:a,left:l},y=ot().toLowerCase();e&&(u=Xc(y)?_p:e),qc(y)&&(t=t||Ep,g.scrollbars="yes");const b=Object.entries(g).reduce((A,[O,R])=>`${A}${O}=${R},`,"");if(Qd(y)&&u!=="_self")return yp(t||"",u),new wa(null);const S=window.open(t||"",u,b);k(S,n,"popup-blocked");try{S.focus()}catch{}return new wa(S)}function yp(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
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
 */const Tp="__/auth/handler",wp="emulator/auth/handler",bp=encodeURIComponent("fac");async function ba(n,t,e,s,r,a){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:bn,eventId:r};if(t instanceof rl){t.setDefaultLanguage(n.languageCode),l.providerId=t.providerId||"",wu(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[b,S]of Object.entries({}))l[b]=S}if(t instanceof di){const b=t.getScopes().filter(S=>S!=="");b.length>0&&(l.scopes=b.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const b of Object.keys(u))u[b]===void 0&&delete u[b];const g=await n._getAppCheckToken(),y=g?`#${bp}=${encodeURIComponent(g)}`:"";return`${Ap(n)}?${hi(u).slice(1)}${y}`}function Ap({config:n}){return n.emulator?Rr(n,wp):`https://${n.authDomain}/${Tp}`}/**
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
 */const Ks="webStorageSupport";class Ip{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hl,this._completeRedirectFn=Yf,this._overrideRedirectResult=Kf}async _openPopup(t,e,s,r){Kt(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const a=await ba(t,e,s,mr(),r);return vp(t,a,Vr())}async _openRedirect(t,e,s,r){await this._originValidation(t);const a=await ba(t,e,s,mr(),r);return Of(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:a}=this.eventManagers[e];return r?Promise.resolve(r):(Kt(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await fp(t),s=new Jf(t);return e.register("authEvent",r=>(k(r?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ks,{type:Ks},r=>{const a=r?.[0]?.[Ks];a!==void 0&&e(!!a),zt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=np(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return el()||Yc()||Mr()}}const Sp=Ip;var Aa="@firebase/auth",Ia="1.11.0";/**
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
 */class Cp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Op(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Np(n){fn(new $e("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=s.options;k(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nl(n)},y=new rf(s,r,a,g);return uf(y,e),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),fn(new $e("auth-internal",t=>{const e=xr(t.getProvider("auth").getImmediate());return(s=>new Cp(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe(Aa,Ia,Op(n)),fe(Aa,Ia,"esm2020")}/**
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
 */const Dp=300,Pp=Pc("authIdTokenMaxAge")||Dp;let Sa=null;const Rp=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>Pp)return;const r=e?.token;Sa!==r&&(Sa=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function kp(n=$c()){const t=Dr(n,"auth");if(t.isInitialized())return t.getImmediate();const e=hf(n,{popupRedirectResolver:Sp,persistence:[$f,If,hl]}),s=Pc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const l=Rp(a.toString());yf(e,l,()=>l(e.currentUser)),vf(e,u=>l(u))}}const r=Nc("auth");return r&&df(e,`http://${r}`),e}function Lp(){return document.getElementsByTagName("head")?.[0]??document}of({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=r=>{const a=Pt("internal-error");a.customData=r,e(a)},s.type="text/javascript",s.charset="UTF-8",Lp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Np("Browser");var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,d){function p(){}p.prototype=d.prototype,_.F=d.prototype,_.prototype=new p,_.prototype.constructor=_,_.D=function(E,m,v){for(var f=Array(arguments.length-2),q=2;q<arguments.length;q++)f[q-2]=arguments[q];return d.prototype[m].apply(E,f)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(_,d,p){p||(p=0);const E=Array(16);if(typeof d=="string")for(var m=0;m<16;++m)E[m]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(m=0;m<16;++m)E[m]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=_.g[0],p=_.g[1],m=_.g[2];let v=_.g[3],f;f=d+(v^p&(m^v))+E[0]+3614090360&4294967295,d=p+(f<<7&4294967295|f>>>25),f=v+(m^d&(p^m))+E[1]+3905402710&4294967295,v=d+(f<<12&4294967295|f>>>20),f=m+(p^v&(d^p))+E[2]+606105819&4294967295,m=v+(f<<17&4294967295|f>>>15),f=p+(d^m&(v^d))+E[3]+3250441966&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(v^p&(m^v))+E[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=v+(m^d&(p^m))+E[5]+1200080426&4294967295,v=d+(f<<12&4294967295|f>>>20),f=m+(p^v&(d^p))+E[6]+2821735955&4294967295,m=v+(f<<17&4294967295|f>>>15),f=p+(d^m&(v^d))+E[7]+4249261313&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(v^p&(m^v))+E[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=v+(m^d&(p^m))+E[9]+2336552879&4294967295,v=d+(f<<12&4294967295|f>>>20),f=m+(p^v&(d^p))+E[10]+4294925233&4294967295,m=v+(f<<17&4294967295|f>>>15),f=p+(d^m&(v^d))+E[11]+2304563134&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(v^p&(m^v))+E[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=v+(m^d&(p^m))+E[13]+4254626195&4294967295,v=d+(f<<12&4294967295|f>>>20),f=m+(p^v&(d^p))+E[14]+2792965006&4294967295,m=v+(f<<17&4294967295|f>>>15),f=p+(d^m&(v^d))+E[15]+1236535329&4294967295,p=m+(f<<22&4294967295|f>>>10),f=d+(m^v&(p^m))+E[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=v+(p^m&(d^p))+E[6]+3225465664&4294967295,v=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(v^d))+E[11]+643717713&4294967295,m=v+(f<<14&4294967295|f>>>18),f=p+(v^d&(m^v))+E[0]+3921069994&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^v&(p^m))+E[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=v+(p^m&(d^p))+E[10]+38016083&4294967295,v=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(v^d))+E[15]+3634488961&4294967295,m=v+(f<<14&4294967295|f>>>18),f=p+(v^d&(m^v))+E[4]+3889429448&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^v&(p^m))+E[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=v+(p^m&(d^p))+E[14]+3275163606&4294967295,v=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(v^d))+E[3]+4107603335&4294967295,m=v+(f<<14&4294967295|f>>>18),f=p+(v^d&(m^v))+E[8]+1163531501&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(m^v&(p^m))+E[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=v+(p^m&(d^p))+E[2]+4243563512&4294967295,v=d+(f<<9&4294967295|f>>>23),f=m+(d^p&(v^d))+E[7]+1735328473&4294967295,m=v+(f<<14&4294967295|f>>>18),f=p+(v^d&(m^v))+E[12]+2368359562&4294967295,p=m+(f<<20&4294967295|f>>>12),f=d+(p^m^v)+E[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=v+(d^p^m)+E[8]+2272392833&4294967295,v=d+(f<<11&4294967295|f>>>21),f=m+(v^d^p)+E[11]+1839030562&4294967295,m=v+(f<<16&4294967295|f>>>16),f=p+(m^v^d)+E[14]+4259657740&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^v)+E[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=v+(d^p^m)+E[4]+1272893353&4294967295,v=d+(f<<11&4294967295|f>>>21),f=m+(v^d^p)+E[7]+4139469664&4294967295,m=v+(f<<16&4294967295|f>>>16),f=p+(m^v^d)+E[10]+3200236656&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^v)+E[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=v+(d^p^m)+E[0]+3936430074&4294967295,v=d+(f<<11&4294967295|f>>>21),f=m+(v^d^p)+E[3]+3572445317&4294967295,m=v+(f<<16&4294967295|f>>>16),f=p+(m^v^d)+E[6]+76029189&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(p^m^v)+E[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=v+(d^p^m)+E[12]+3873151461&4294967295,v=d+(f<<11&4294967295|f>>>21),f=m+(v^d^p)+E[15]+530742520&4294967295,m=v+(f<<16&4294967295|f>>>16),f=p+(m^v^d)+E[2]+3299628645&4294967295,p=m+(f<<23&4294967295|f>>>9),f=d+(m^(p|~v))+E[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=v+(p^(d|~m))+E[7]+1126891415&4294967295,v=d+(f<<10&4294967295|f>>>22),f=m+(d^(v|~p))+E[14]+2878612391&4294967295,m=v+(f<<15&4294967295|f>>>17),f=p+(v^(m|~d))+E[5]+4237533241&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~v))+E[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=v+(p^(d|~m))+E[3]+2399980690&4294967295,v=d+(f<<10&4294967295|f>>>22),f=m+(d^(v|~p))+E[10]+4293915773&4294967295,m=v+(f<<15&4294967295|f>>>17),f=p+(v^(m|~d))+E[1]+2240044497&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~v))+E[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=v+(p^(d|~m))+E[15]+4264355552&4294967295,v=d+(f<<10&4294967295|f>>>22),f=m+(d^(v|~p))+E[6]+2734768916&4294967295,m=v+(f<<15&4294967295|f>>>17),f=p+(v^(m|~d))+E[13]+1309151649&4294967295,p=m+(f<<21&4294967295|f>>>11),f=d+(m^(p|~v))+E[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=v+(p^(d|~m))+E[11]+3174756917&4294967295,v=d+(f<<10&4294967295|f>>>22),f=m+(d^(v|~p))+E[2]+718787259&4294967295,m=v+(f<<15&4294967295|f>>>17),f=p+(v^(m|~d))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+d&4294967295,_.g[1]=_.g[1]+(m+(f<<21&4294967295|f>>>11))&4294967295,_.g[2]=_.g[2]+m&4294967295,_.g[3]=_.g[3]+v&4294967295}s.prototype.v=function(_,d){d===void 0&&(d=_.length);const p=d-this.blockSize,E=this.C;let m=this.h,v=0;for(;v<d;){if(m==0)for(;v<=p;)r(this,_,v),v+=this.blockSize;if(typeof _=="string"){for(;v<d;)if(E[m++]=_.charCodeAt(v++),m==this.blockSize){r(this,E),m=0;break}}else for(;v<d;)if(E[m++]=_[v++],m==this.blockSize){r(this,E),m=0;break}}this.h=m,this.o+=d},s.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var d=1;d<_.length-8;++d)_[d]=0;d=this.o*8;for(var p=_.length-8;p<_.length;++p)_[p]=d&255,d/=256;for(this.v(_),_=Array(16),d=0,p=0;p<4;++p)for(let E=0;E<32;E+=8)_[d++]=this.g[p]>>>E&255;return _};function a(_,d){var p=u;return Object.prototype.hasOwnProperty.call(p,_)?p[_]:p[_]=d(_)}function l(_,d){this.h=d;const p=[];let E=!0;for(let m=_.length-1;m>=0;m--){const v=_[m]|0;E&&v==d||(p[m]=v,E=!1)}this.g=p}var u={};function g(_){return-128<=_&&_<128?a(_,function(d){return new l([d|0],d<0?-1:0)}):new l([_|0],_<0?-1:0)}function y(_){if(isNaN(_)||!isFinite(_))return S;if(_<0)return D(y(-_));const d=[];let p=1;for(let E=0;_>=p;E++)d[E]=_/p|0,p*=4294967296;return new l(d,0)}function b(_,d){if(_.length==0)throw Error("number format error: empty string");if(d=d||10,d<2||36<d)throw Error("radix out of range: "+d);if(_.charAt(0)=="-")return D(b(_.substring(1),d));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=y(Math.pow(d,8));let E=S;for(let v=0;v<_.length;v+=8){var m=Math.min(8,_.length-v);const f=parseInt(_.substring(v,v+m),d);m<8?(m=y(Math.pow(d,m)),E=E.j(m).add(y(f))):(E=E.j(p),E=E.add(y(f)))}return E}var S=g(0),A=g(1),O=g(16777216);n=l.prototype,n.m=function(){if(N(this))return-D(this).m();let _=0,d=1;for(let p=0;p<this.g.length;p++){const E=this.i(p);_+=(E>=0?E:4294967296+E)*d,d*=4294967296}return _},n.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(N(this))return"-"+D(this).toString(_);const d=y(Math.pow(_,6));var p=this;let E="";for(;;){const m=L(p,d).g;p=$(p,m.j(d));let v=((p.g.length>0?p.g[0]:p.h)>>>0).toString(_);if(p=m,R(p))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(let d=0;d<_.g.length;d++)if(_.g[d]!=0)return!1;return!0}function N(_){return _.h==-1}n.l=function(_){return _=$(this,_),N(_)?-1:R(_)?0:1};function D(_){const d=_.g.length,p=[];for(let E=0;E<d;E++)p[E]=~_.g[E];return new l(p,~_.h).add(A)}n.abs=function(){return N(this)?D(this):this},n.add=function(_){const d=Math.max(this.g.length,_.g.length),p=[];let E=0;for(let m=0;m<=d;m++){let v=E+(this.i(m)&65535)+(_.i(m)&65535),f=(v>>>16)+(this.i(m)>>>16)+(_.i(m)>>>16);E=f>>>16,v&=65535,f&=65535,p[m]=f<<16|v}return new l(p,p[p.length-1]&-2147483648?-1:0)};function $(_,d){return _.add(D(d))}n.j=function(_){if(R(this)||R(_))return S;if(N(this))return N(_)?D(this).j(D(_)):D(D(this).j(_));if(N(_))return D(this.j(D(_)));if(this.l(O)<0&&_.l(O)<0)return y(this.m()*_.m());const d=this.g.length+_.g.length,p=[];for(var E=0;E<2*d;E++)p[E]=0;for(E=0;E<this.g.length;E++)for(let m=0;m<_.g.length;m++){const v=this.i(E)>>>16,f=this.i(E)&65535,q=_.i(m)>>>16,tt=_.i(m)&65535;p[2*E+2*m]+=f*tt,U(p,2*E+2*m),p[2*E+2*m+1]+=v*tt,U(p,2*E+2*m+1),p[2*E+2*m+1]+=f*q,U(p,2*E+2*m+1),p[2*E+2*m+2]+=v*q,U(p,2*E+2*m+2)}for(_=0;_<d;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=d;_<2*d;_++)p[_]=0;return new l(p,0)};function U(_,d){for(;(_[d]&65535)!=_[d];)_[d+1]+=_[d]>>>16,_[d]&=65535,d++}function F(_,d){this.g=_,this.h=d}function L(_,d){if(R(d))throw Error("division by zero");if(R(_))return new F(S,S);if(N(_))return d=L(D(_),d),new F(D(d.g),D(d.h));if(N(d))return d=L(_,D(d)),new F(D(d.g),d.h);if(_.g.length>30){if(N(_)||N(d))throw Error("slowDivide_ only works with positive integers.");for(var p=A,E=d;E.l(_)<=0;)p=V(p),E=V(E);var m=M(p,1),v=M(E,1);for(E=M(E,2),p=M(p,2);!R(E);){var f=v.add(E);f.l(_)<=0&&(m=m.add(p),v=f),E=M(E,1),p=M(p,1)}return d=$(_,m.j(d)),new F(m,d)}for(m=S;_.l(d)>=0;){for(p=Math.max(1,Math.floor(_.m()/d.m())),E=Math.ceil(Math.log(p)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=y(p),f=v.j(d);N(f)||f.l(_)>0;)p-=E,v=y(p),f=v.j(d);R(v)&&(v=A),m=m.add(v),_=$(_,f)}return new F(m,_)}n.B=function(_){return L(this,_).h},n.and=function(_){const d=Math.max(this.g.length,_.g.length),p=[];for(let E=0;E<d;E++)p[E]=this.i(E)&_.i(E);return new l(p,this.h&_.h)},n.or=function(_){const d=Math.max(this.g.length,_.g.length),p=[];for(let E=0;E<d;E++)p[E]=this.i(E)|_.i(E);return new l(p,this.h|_.h)},n.xor=function(_){const d=Math.max(this.g.length,_.g.length),p=[];for(let E=0;E<d;E++)p[E]=this.i(E)^_.i(E);return new l(p,this.h^_.h)};function V(_){const d=_.g.length+1,p=[];for(let E=0;E<d;E++)p[E]=_.i(E)<<1|_.i(E-1)>>>31;return new l(p,_.h)}function M(_,d){const p=d>>5;d%=32;const E=_.g.length-p,m=[];for(let v=0;v<E;v++)m[v]=d>0?_.i(v+p)>>>d|_.i(v+p+1)<<32-d:_.i(v+p);return new l(m,_.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=y,l.fromString=b,Fr=l}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Li=="object"&&Li];for(var o=0;o<i.length;++o){var c=i[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var s=e(this);function r(i,o){if(o)t:{var c=s;i=i.split(".");for(var h=0;h<i.length-1;h++){var T=i[h];if(!(T in c))break t;c=c[T]}i=i[i.length-1],h=c[i],o=o(h),o!=h&&o!=null&&t(c,i,{configurable:!0,writable:!0,value:o})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(o){var c=[],h;for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&c.push([h,o[h]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(i){var o=typeof i;return o=="object"&&i!=null||o=="function"}function g(i,o,c){return i.call.apply(i.bind,arguments)}function y(i,o,c){return y=g,y.apply(null,arguments)}function b(i,o){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function S(i,o){function c(){}c.prototype=o.prototype,i.Z=o.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(h,T,w){for(var C=Array(arguments.length-2),x=2;x<arguments.length;x++)C[x-2]=arguments[x];return o.prototype[T].apply(h,C)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function O(i){const o=i.length;if(o>0){const c=Array(o);for(let h=0;h<o;h++)c[h]=i[h];return c}return[]}function R(i,o){for(let h=1;h<arguments.length;h++){const T=arguments[h];var c=typeof T;if(c=c!="object"?c:T?Array.isArray(T)?"array":c:"null",c=="array"||c=="object"&&typeof T.length=="number"){c=i.length||0;const w=T.length||0;i.length=c+w;for(let C=0;C<w;C++)i[c+C]=T[C]}else i.push(T)}}class N{constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return this.h>0?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function D(i){l.setTimeout(()=>{throw i},0)}function $(){var i=_;let o=null;return i.g&&(o=i.g,i.g=i.g.next,i.g||(i.h=null),o.next=null),o}class U{constructor(){this.h=this.g=null}add(o,c){const h=F.get();h.set(o,c),this.h?this.h.next=h:this.g=h,this.h=h}}var F=new N(()=>new L,i=>i.reset());class L{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let V,M=!1,_=new U,d=()=>{const i=Promise.resolve(void 0);V=()=>{i.then(p)}};function p(){for(var i;i=$();){try{i.h.call(i.g)}catch(c){D(c)}var o=F;o.j(i),o.h<100&&(o.h++,i.next=o.g,o.g=i)}M=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function m(i,o){this.type=i,this.g=this.target=o,this.defaultPrevented=!1}m.prototype.h=function(){this.defaultPrevented=!0};var v=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,o=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,o),l.removeEventListener("test",c,o)}catch{}return i})();function f(i){return/^[\s\xa0]*$/.test(i)}function q(i,o){m.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,o)}S(q,m),q.prototype.init=function(i,o){const c=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=o,o=i.relatedTarget,o||(c=="mouseover"?o=i.fromElement:c=="mouseout"&&(o=i.toElement)),this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var tt="closure_listenable_"+(Math.random()*1e6|0),et=0;function ct(i,o,c,h,T){this.listener=i,this.proxy=null,this.src=o,this.type=c,this.capture=!!h,this.ha=T,this.key=++et,this.da=this.fa=!1}function xt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function dt(i,o,c){for(const h in i)o.call(c,i[h],h,i)}function We(i,o){for(const c in i)o.call(void 0,i[c],c,i)}function ze(i){const o={};for(const c in i)o[c]=i[c];return o}const Xt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(i,o){let c,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(c in h)i[c]=h[c];for(let w=0;w<Xt.length;w++)c=Xt[w],Object.prototype.hasOwnProperty.call(h,c)&&(i[c]=h[c])}}function vt(i){this.src=i,this.g={},this.h=0}vt.prototype.add=function(i,o,c,h,T){const w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);const C=$t(i,o,h,T);return C>-1?(o=i[C],c||(o.fa=!1)):(o=new ct(o,this.src,w,!!h,T),o.fa=c,i.push(o)),o};function ft(i,o){const c=o.type;if(c in i.g){var h=i.g[c],T=Array.prototype.indexOf.call(h,o,void 0),w;(w=T>=0)&&Array.prototype.splice.call(h,T,1),w&&(xt(o),i.g[c].length==0&&(delete i.g[c],i.h--))}}function $t(i,o,c,h){for(let T=0;T<i.length;++T){const w=i[T];if(!w.da&&w.listener==o&&w.capture==!!c&&w.ha==h)return T}return-1}var Jt="closure_lm_"+(Math.random()*1e6|0),yt={};function Ke(i,o,c,h,T){if(Array.isArray(o)){for(let w=0;w<o.length;w++)Ke(i,o[w],c,h,T);return null}return c=bi(c),i&&i[tt]?i.J(o,c,u(h)?!!h.capture:!1,T):ys(i,o,c,!1,h,T)}function ys(i,o,c,h,T,w){if(!o)throw Error("Invalid event type");const C=u(T)?!!T.capture:!!T;let x=qe(i);if(x||(i[Jt]=x=new vt(i)),c=x.add(o,c,h,C,w),c.proxy)return c;if(h=Nn(),c.proxy=h,h.src=i,h.listener=c,i.addEventListener)v||(T=C),T===void 0&&(T=!1),i.addEventListener(o.toString(),h,T);else if(i.attachEvent)i.attachEvent(wi(o.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Nn(){function i(c){return o.call(i.src,i.listener,c)}const o=Ts;return i}function Ti(i,o,c,h,T){if(Array.isArray(o))for(var w=0;w<o.length;w++)Ti(i,o[w],c,h,T);else h=u(h)?!!h.capture:!!h,c=bi(c),i&&i[tt]?(i=i.i,w=String(o).toString(),w in i.g&&(o=i.g[w],c=$t(o,c,h,T),c>-1&&(xt(o[c]),Array.prototype.splice.call(o,c,1),o.length==0&&(delete i.g[w],i.h--)))):i&&(i=qe(i))&&(o=i.g[o.toString()],i=-1,o&&(i=$t(o,c,h,T)),(c=i>-1?o[i]:null)&&Ge(c))}function Ge(i){if(typeof i!="number"&&i&&!i.da){var o=i.src;if(o&&o[tt])ft(o.i,i);else{var c=i.type,h=i.proxy;o.removeEventListener?o.removeEventListener(c,h,i.capture):o.detachEvent?o.detachEvent(wi(c),h):o.addListener&&o.removeListener&&o.removeListener(h),(c=qe(o))?(ft(c,i),c.h==0&&(c.src=null,o[Jt]=null)):xt(i)}}}function wi(i){return i in yt?yt[i]:yt[i]="on"+i}function Ts(i,o){if(i.da)i=!0;else{o=new q(o,this);const c=i.listener,h=i.ha||i.src;i.fa&&Ge(i),i=c.call(h,o)}return i}function qe(i){return i=i[Jt],i instanceof vt?i:null}var Ye="__closure_events_fn_"+(Math.random()*1e9>>>0);function bi(i){return typeof i=="function"?i:(i[Ye]||(i[Ye]=function(o){return i.handleEvent(o)}),i[Ye])}function Q(){E.call(this),this.i=new vt(this),this.M=this,this.G=null}S(Q,E),Q.prototype[tt]=!0,Q.prototype.removeEventListener=function(i,o,c,h){Ti(this,i,o,c,h)};function G(i,o){var c,h=i.G;if(h)for(c=[];h;h=h.G)c.push(h);if(i=i.M,h=o.type||o,typeof o=="string")o=new m(o,i);else if(o instanceof m)o.target=o.target||i;else{var T=o;o=new m(h,i),we(o,T)}T=!0;let w,C;if(c)for(C=c.length-1;C>=0;C--)w=o.g=c[C],T=Vt(w,h,!0,o)&&T;if(w=o.g=i,T=Vt(w,h,!0,o)&&T,T=Vt(w,h,!1,o)&&T,c)for(C=0;C<c.length;C++)w=o.g=c[C],T=Vt(w,h,!1,o)&&T}Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var i=this.i;for(const o in i.g){const c=i.g[o];for(let h=0;h<c.length;h++)xt(c[h]);delete i.g[o],i.h--}}this.G=null},Q.prototype.J=function(i,o,c,h){return this.i.add(String(i),o,!1,c,h)},Q.prototype.K=function(i,o,c,h){return this.i.add(String(i),o,!0,c,h)};function Vt(i,o,c,h){if(o=i.i.g[String(o)],!o)return!0;o=o.concat();let T=!0;for(let w=0;w<o.length;++w){const C=o[w];if(C&&!C.da&&C.capture==c){const x=C.listener,J=C.ha||C.src;C.fa&&ft(i.i,C),T=x.call(J,h)!==!1&&T}}return T&&!h.defaultPrevented}function Ai(i,o){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=y(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(o)>2147483647?-1:l.setTimeout(i,o||0)}function Dn(i){i.g=Ai(()=>{i.g=null,i.i&&(i.i=!1,Dn(i))},i.l);const o=i.h;i.h=null,i.m.apply(null,o)}class Pn extends E{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Dn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qt(i){E.call(this),this.h=i,this.g={}}S(Qt,E);var Rn=[];function kn(i){dt(i.g,function(o,c){this.g.hasOwnProperty(c)&&Ge(o)},i),i.g={}}Qt.prototype.N=function(){Qt.Z.N.call(this),kn(this)},Qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=l.JSON.stringify,Ch=l.JSON.parse,Oh=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function lo(){}function Nh(){}var Ln={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ws(){m.call(this,"d")}S(ws,m);function bs(){m.call(this,"c")}S(bs,m);var Je={},ho=null;function As(){return ho=ho||new Q}Je.Ia="serverreachability";function uo(i){m.call(this,Je.Ia,i)}S(uo,m);function Mn(i){const o=As();G(o,new uo(o))}Je.STAT_EVENT="statevent";function fo(i,o){m.call(this,Je.STAT_EVENT,i),this.stat=o}S(fo,m);function nt(i){const o=As();G(o,new fo(o,i))}Je.Ja="timingevent";function po(i,o){m.call(this,Je.Ja,i),this.size=o}S(po,m);function xn(i,o){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},o)}function $n(){this.g=!0}$n.prototype.ua=function(){this.g=!1};function Dh(i,o,c,h,T,w){i.info(function(){if(i.g)if(w){var C="",x=w.split("&");for(let z=0;z<x.length;z++){var J=x[z].split("=");if(J.length>1){const Z=J[0];J=J[1];const St=Z.split("_");C=St.length>=2&&St[1]=="type"?C+(Z+"="+J+"&"):C+(Z+"=redacted&")}}}else C=null;else C=w;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+o+`
`+c+`
`+C})}function Ph(i,o,c,h,T,w,C){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+o+`
`+c+`
`+w+" "+C})}function Qe(i,o,c,h){i.info(function(){return"XMLHTTP TEXT ("+o+"): "+kh(i,c)+(h?" "+h:"")})}function Rh(i,o){i.info(function(){return"TIMEOUT: "+o})}$n.prototype.info=function(){};function kh(i,o){if(!i.g)return o;if(!o)return null;try{const w=JSON.parse(o);if(w){for(i=0;i<w.length;i++)if(Array.isArray(w[i])){var c=w[i];if(!(c.length<2)){var h=c[1];if(Array.isArray(h)&&!(h.length<1)){var T=h[0];if(T!="noop"&&T!="stop"&&T!="close")for(let C=1;C<h.length;C++)h[C]=""}}}}return Xe(w)}catch{return o}}var Is={NO_ERROR:0,TIMEOUT:8},Lh={},go;function Ss(){}S(Ss,lo),Ss.prototype.g=function(){return new XMLHttpRequest},go=new Ss;function Vn(i){return encodeURIComponent(String(i))}function Mh(i){var o=1;i=i.split(":");const c=[];for(;o>0&&i.length;)c.push(i.shift()),o--;return i.length&&c.push(i.join(":")),c}function Zt(i,o,c,h){this.j=i,this.i=o,this.l=c,this.S=h||1,this.V=new Qt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mo}function mo(){this.i=null,this.g="",this.h=!1}var _o={},Cs={};function Os(i,o,c){i.M=1,i.A=Si(It(o)),i.u=c,i.R=!0,Eo(i,null)}function Eo(i,o){i.F=Date.now(),Ii(i),i.B=It(i.A);var c=i.B,h=i.S;Array.isArray(h)||(h=[String(h)]),Po(c.i,"t",h),i.C=0,c=i.j.L,i.h=new mo,i.g=Yo(i.j,c?o:null,!i.u),i.P>0&&(i.O=new Pn(y(i.Y,i,i.g),i.P)),o=i.V,c=i.g,h=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(Rn[0]=T.toString()),T=Rn);for(let w=0;w<T.length;w++){const C=Ke(c,T[w],h||o.handleEvent,!1,o.h||o);if(!C)break;o.g[C.key]=C}o=i.J?ze(i.J):{},i.u?(i.v||(i.v="POST"),o["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,o)):(i.v="GET",i.g.ea(i.B,i.v,null,o)),Mn(),Dh(i.i,i.v,i.B,i.l,i.S,i.u)}Zt.prototype.ba=function(i){i=i.target;const o=this.O;o&&ne(i)==3?o.j():this.Y(i)},Zt.prototype.Y=function(i){try{if(i==this.g)t:{const x=ne(this.g),J=this.g.ya(),z=this.g.ca();if(!(x<3)&&(x!=3||this.g&&(this.h.h||this.g.la()||Vo(this.g)))){this.K||x!=4||J==7||(J==8||z<=0?Mn(3):Mn(2)),Ns(this);var o=this.g.ca();this.X=o;var c=xh(this);if(this.o=o==200,Ph(this.i,this.v,this.B,this.l,this.S,x,o),this.o){if(this.U&&!this.L){e:{if(this.g){var h,T=this.g;if((h=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(h)){var w=h;break e}}w=null}if(i=w)Qe(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ds(this,i);else{this.o=!1,this.m=3,nt(12),be(this),Un(this);break t}}if(this.R){i=!0;let Z;for(;!this.K&&this.C<c.length;)if(Z=$h(this,c),Z==Cs){x==4&&(this.m=4,nt(14),i=!1),Qe(this.i,this.l,null,"[Incomplete Response]");break}else if(Z==_o){this.m=4,nt(15),Qe(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else Qe(this.i,this.l,Z,null),Ds(this,Z);if(vo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),x!=4||c.length!=0||this.h.h||(this.m=1,nt(16),i=!1),this.o=this.o&&i,!i)Qe(this.i,this.l,c,"[Invalid Chunked Response]"),be(this),Un(this);else if(c.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Vs(C),C.P=!0,nt(11))}}else Qe(this.i,this.l,c,null),Ds(this,c);x==4&&be(this),this.o&&!this.K&&(x==4?zo(this.j,this):(this.o=!1,Ii(this)))}else Jh(this.g),o==400&&c.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),be(this),Un(this)}}}catch{}finally{}};function xh(i){if(!vo(i))return i.g.la();const o=Vo(i.g);if(o==="")return"";let c="";const h=o.length,T=ne(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return be(i),Un(i),"";i.h.i=new l.TextDecoder}for(let w=0;w<h;w++)i.h.h=!0,c+=i.h.i.decode(o[w],{stream:!(T&&w==h-1)});return o.length=0,i.h.g+=c,i.C=0,i.h.g}function vo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function $h(i,o){var c=i.C,h=o.indexOf(`
`,c);return h==-1?Cs:(c=Number(o.substring(c,h)),isNaN(c)?_o:(h+=1,h+c>o.length?Cs:(o=o.slice(h,h+c),i.C=h+c,o)))}Zt.prototype.cancel=function(){this.K=!0,be(this)};function Ii(i){i.T=Date.now()+i.H,yo(i,i.H)}function yo(i,o){if(i.D!=null)throw Error("WatchDog timer not null");i.D=xn(y(i.aa,i),o)}function Ns(i){i.D&&(l.clearTimeout(i.D),i.D=null)}Zt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Rh(this.i,this.B),this.M!=2&&(Mn(),nt(17)),be(this),this.m=2,Un(this)):yo(this,this.T-i)};function Un(i){i.j.I==0||i.K||zo(i.j,i)}function be(i){Ns(i);var o=i.O;o&&typeof o.dispose=="function"&&o.dispose(),i.O=null,kn(i.V),i.g&&(o=i.g,i.g=null,o.abort(),o.dispose())}function Ds(i,o){try{var c=i.j;if(c.I!=0&&(c.g==i||Ps(c.h,i))){if(!i.L&&Ps(c.h,i)&&c.I==3){try{var h=c.Ba.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Pi(c),Ni(c);else break t;$s(c),nt(18)}}else c.xa=T[1],0<c.xa-c.K&&T[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=xn(y(c.Va,c),6e3));bo(c.h)<=1&&c.ta&&(c.ta=void 0)}else Ie(c,11)}else if((i.L||c.g==i)&&Pi(c),!f(o))for(T=c.Ba.g.parse(o),o=0;o<T.length;o++){let z=T[o];const Z=z[0];if(!(Z<=c.K))if(c.K=Z,z=z[1],c.I==2)if(z[0]=="c"){c.M=z[1],c.ba=z[2];const St=z[3];St!=null&&(c.ka=St,c.j.info("VER="+c.ka));const Se=z[4];Se!=null&&(c.za=Se,c.j.info("SVER="+c.za));const ie=z[5];ie!=null&&typeof ie=="number"&&ie>0&&(h=1.5*ie,c.O=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const se=i.g;if(se){const Ri=se.g?se.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var w=h.h;w.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Rs(w,w.h),w.h=null))}if(h.G){const Us=se.g?se.g.getResponseHeader("X-HTTP-Session-Id"):null;Us&&(h.wa=Us,K(h.J,h.G,Us))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),h=c;var C=i;if(h.na=qo(h,h.L?h.ba:null,h.W),C.L){Ao(h.h,C);var x=C,J=h.O;J&&(x.H=J),x.D&&(Ns(x),Ii(x)),h.g=C}else Bo(h);c.i.length>0&&Di(c)}else z[0]!="stop"&&z[0]!="close"||Ie(c,7);else c.I==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?Ie(c,7):xs(c):z[0]!="noop"&&c.l&&c.l.qa(z),c.A=0)}}Mn(4)}catch{}}var Vh=class{constructor(i,o){this.g=i,this.map=o}};function To(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function bo(i){return i.h?1:i.g?i.g.size:0}function Ps(i,o){return i.h?i.h==o:i.g?i.g.has(o):!1}function Rs(i,o){i.g?i.g.add(o):i.h=o}function Ao(i,o){i.h&&i.h==o?i.h=null:i.g&&i.g.has(o)&&i.g.delete(o)}To.prototype.cancel=function(){if(this.i=Io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Io(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let o=i.i;for(const c of i.g.values())o=o.concat(c.G);return o}return O(i.i)}var So=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uh(i,o){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const h=i[c].indexOf("=");let T,w=null;h>=0?(T=i[c].substring(0,h),w=i[c].substring(h+1)):T=i[c],o(T,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function te(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let o;i instanceof te?(this.l=i.l,Fn(this,i.j),this.o=i.o,this.g=i.g,jn(this,i.u),this.h=i.h,ks(this,Ro(i.i)),this.m=i.m):i&&(o=String(i).match(So))?(this.l=!1,Fn(this,o[1]||"",!0),this.o=Hn(o[2]||""),this.g=Hn(o[3]||"",!0),jn(this,o[4]),this.h=Hn(o[5]||"",!0),ks(this,o[6]||"",!0),this.m=Hn(o[7]||"")):(this.l=!1,this.i=new Wn(null,this.l))}te.prototype.toString=function(){const i=[];var o=this.j;o&&i.push(Bn(o,Co,!0),":");var c=this.g;return(c||o=="file")&&(i.push("//"),(o=this.o)&&i.push(Bn(o,Co,!0),"@"),i.push(Vn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Bn(c,c.charAt(0)=="/"?Hh:jh,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Bn(c,Wh)),i.join("")},te.prototype.resolve=function(i){const o=It(this);let c=!!i.j;c?Fn(o,i.j):c=!!i.o,c?o.o=i.o:c=!!i.g,c?o.g=i.g:c=i.u!=null;var h=i.h;if(c)jn(o,i.u);else if(c=!!i.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var T=o.h.lastIndexOf("/");T!=-1&&(h=o.h.slice(0,T+1)+h)}if(T=h,T==".."||T==".")h="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){h=T.lastIndexOf("/",0)==0,T=T.split("/");const w=[];for(let C=0;C<T.length;){const x=T[C++];x=="."?h&&C==T.length&&w.push(""):x==".."?((w.length>1||w.length==1&&w[0]!="")&&w.pop(),h&&C==T.length&&w.push("")):(w.push(x),h=!0)}h=w.join("/")}else h=T}return c?o.h=h:c=i.i.toString()!=="",c?ks(o,Ro(i.i)):c=!!i.m,c&&(o.m=i.m),o};function It(i){return new te(i)}function Fn(i,o,c){i.j=c?Hn(o,!0):o,i.j&&(i.j=i.j.replace(/:$/,""))}function jn(i,o){if(o){if(o=Number(o),isNaN(o)||o<0)throw Error("Bad port number "+o);i.u=o}else i.u=null}function ks(i,o,c){o instanceof Wn?(i.i=o,zh(i.i,i.l)):(c||(o=Bn(o,Bh)),i.i=new Wn(o,i.l))}function K(i,o,c){i.i.set(o,c)}function Si(i){return K(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Hn(i,o){return i?o?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Bn(i,o,c){return typeof i=="string"?(i=encodeURI(i).replace(o,Fh),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Fh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Co=/[#\/\?@]/g,jh=/[#\?:]/g,Hh=/[#\?]/g,Bh=/[#\?@]/g,Wh=/#/g;function Wn(i,o){this.h=this.g=null,this.i=i||null,this.j=!!o}function Ae(i){i.g||(i.g=new Map,i.h=0,i.i&&Uh(i.i,function(o,c){i.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}n=Wn.prototype,n.add=function(i,o){Ae(this),this.i=null,i=Ze(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(o),this.h+=1,this};function Oo(i,o){Ae(i),o=Ze(i,o),i.g.has(o)&&(i.i=null,i.h-=i.g.get(o).length,i.g.delete(o))}function No(i,o){return Ae(i),o=Ze(i,o),i.g.has(o)}n.forEach=function(i,o){Ae(this),this.g.forEach(function(c,h){c.forEach(function(T){i.call(o,T,h,this)},this)},this)};function Do(i,o){Ae(i);let c=[];if(typeof o=="string")No(i,o)&&(c=c.concat(i.g.get(Ze(i,o))));else for(i=Array.from(i.g.values()),o=0;o<i.length;o++)c=c.concat(i[o]);return c}n.set=function(i,o){return Ae(this),this.i=null,i=Ze(this,i),No(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[o]),this.h+=1,this},n.get=function(i,o){return i?(i=Do(this,i),i.length>0?String(i[0]):o):o};function Po(i,o,c){Oo(i,o),c.length>0&&(i.i=null,i.g.set(Ze(i,o),O(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],o=Array.from(this.g.keys());for(let h=0;h<o.length;h++){var c=o[h];const T=Vn(c);c=Do(this,c);for(let w=0;w<c.length;w++){let C=T;c[w]!==""&&(C+="="+Vn(c[w])),i.push(C)}}return this.i=i.join("&")};function Ro(i){const o=new Wn;return o.i=i.i,i.g&&(o.g=new Map(i.g),o.h=i.h),o}function Ze(i,o){return o=String(o),i.j&&(o=o.toLowerCase()),o}function zh(i,o){o&&!i.j&&(Ae(i),i.i=null,i.g.forEach(function(c,h){const T=h.toLowerCase();h!=T&&(Oo(this,h),Po(this,T,c))},i)),i.j=o}function Kh(i,o){const c=new $n;if(l.Image){const h=new Image;h.onload=b(ee,c,"TestLoadImage: loaded",!0,o,h),h.onerror=b(ee,c,"TestLoadImage: error",!1,o,h),h.onabort=b(ee,c,"TestLoadImage: abort",!1,o,h),h.ontimeout=b(ee,c,"TestLoadImage: timeout",!1,o,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else o(!1)}function Gh(i,o){const c=new $n,h=new AbortController,T=setTimeout(()=>{h.abort(),ee(c,"TestPingServer: timeout",!1,o)},1e4);fetch(i,{signal:h.signal}).then(w=>{clearTimeout(T),w.ok?ee(c,"TestPingServer: ok",!0,o):ee(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(T),ee(c,"TestPingServer: error",!1,o)})}function ee(i,o,c,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(c)}catch{}}function qh(){this.g=new Oh}function Ls(i){this.i=i.Sb||null,this.h=i.ab||!1}S(Ls,lo),Ls.prototype.g=function(){return new Ci(this.i,this.h)};function Ci(i,o){Q.call(this),this.H=i,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ci,Q),n=Ci.prototype,n.open=function(i,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=o,this.readyState=1,Kn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const o={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(o.body=i),(this.H||l).fetch(new Request(this.D,o)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ko(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ko(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var o=i.value?i.value:new Uint8Array(0);(o=this.B.decode(o,{stream:!i.done}))&&(this.response=this.responseText+=o)}i.done?zn(this):Kn(this),this.readyState==3&&ko(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,zn(this))},n.Na=function(i){this.g&&(this.response=i,zn(this))},n.ga=function(){this.g&&zn(this)};function zn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Kn(i)}n.setRequestHeader=function(i,o){this.A.append(i,o)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=o.next();return i.join(`\r
`)};function Kn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Lo(i){let o="";return dt(i,function(c,h){o+=h,o+=":",o+=c,o+=`\r
`}),o}function Ms(i,o,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=Lo(c),typeof i=="string"?c!=null&&Vn(c):K(i,o,c))}function Y(i){Q.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Y,Q);var Yh=/^https?$/i,Xh=["POST","PUT"];n=Y.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,o,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);o=o?o.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():go.g(),this.g.onreadystatechange=A(y(this.Ca,this));try{this.B=!0,this.g.open(o,String(i),!0),this.B=!1}catch(w){Mo(this,w);return}if(i=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)c.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())c.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(w=>w.toLowerCase()=="content-type"),T=l.FormData&&i instanceof l.FormData,!(Array.prototype.indexOf.call(Xh,o,void 0)>=0)||h||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of c)this.g.setRequestHeader(w,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(w){Mo(this,w)}};function Mo(i,o){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=o,i.o=5,xo(i),Oi(i)}function xo(i){i.A||(i.A=!0,G(i,"complete"),G(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,G(this,"complete"),G(this,"abort"),Oi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Oi(this,!0)),Y.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?$o(this):this.Xa())},n.Xa=function(){$o(this)};function $o(i){if(i.h&&typeof a<"u"){if(i.v&&ne(i)==4)setTimeout(i.Ca.bind(i),0);else if(G(i,"readystatechange"),ne(i)==4){i.h=!1;try{const w=i.ca();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var c;if(!(c=o)){var h;if(h=w===0){let C=String(i.D).match(So)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),h=!Yh.test(C?C.toLowerCase():"")}c=h}if(c)G(i,"complete"),G(i,"success");else{i.o=6;try{var T=ne(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",xo(i)}}finally{Oi(i)}}}}function Oi(i,o){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,o||G(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function ne(i){return i.g?i.g.readyState:0}n.ca=function(){try{return ne(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var o=this.g.responseText;return i&&o.indexOf(i)==0&&(o=o.substring(i.length)),Ch(o)}};function Vo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Jh(i){const o={};i=(i.g&&ne(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(f(i[h]))continue;var c=Mh(i[h]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const w=o[T]||[];o[T]=w,w.push(c)}We(o,function(h){return h.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(i,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||o}function Uo(i){this.za=0,this.i=[],this.j=new $n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gn("baseRetryDelayMs",5e3,i),this.Za=Gn("retryDelaySeedMs",1e4,i),this.Ta=Gn("forwardChannelMaxRetries",2,i),this.va=Gn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new To(i&&i.concurrentRequestLimit),this.Ba=new qh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Uo.prototype,n.ka=8,n.I=1,n.connect=function(i,o,c,h){nt(0),this.W=i,this.H=o||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.J=qo(this,null,this.W),Di(this)};function xs(i){if(Fo(i),i.I==3){var o=i.V++,c=It(i.J);if(K(c,"SID",i.M),K(c,"RID",o),K(c,"TYPE","terminate"),qn(i,c),o=new Zt(i,i.j,o),o.M=2,o.A=Si(It(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(o.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=o.A,c=!0),c||(o.g=Yo(o.j,null),o.g.ea(o.A)),o.F=Date.now(),Ii(o)}Go(i)}function Ni(i){i.g&&(Vs(i),i.g.cancel(),i.g=null)}function Fo(i){Ni(i),i.v&&(l.clearTimeout(i.v),i.v=null),Pi(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&l.clearTimeout(i.m),i.m=null)}function Di(i){if(!wo(i.h)&&!i.m){i.m=!0;var o=i.Ea;V||d(),M||(V(),M=!0),_.add(o,i),i.D=0}}function Qh(i,o){return bo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=o.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=xn(y(i.Ea,i,o),Ko(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new Zt(this,this.j,i);let w=this.o;if(this.U&&(w?(w=ze(w),we(w,this.U)):w=this.U),this.u!==null||this.R||(T.J=w,w=null),this.S)t:{for(var o=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(o+=h,o>4096){o=c;break t}if(o===4096||c===this.i.length-1){o=c+1;break t}}o=1e3}else o=1e3;o=Ho(this,T,o),c=It(this.J),K(c,"RID",i),K(c,"CVER",22),this.G&&K(c,"X-HTTP-Session-Id",this.G),qn(this,c),w&&(this.R?o="headers="+Vn(Lo(w))+"&"+o:this.u&&Ms(c,this.u,w)),Rs(this.h,T),this.Ra&&K(c,"TYPE","init"),this.S?(K(c,"$req",o),K(c,"SID","null"),T.U=!0,Os(T,c,null)):Os(T,c,o),this.I=2}}else this.I==3&&(i?jo(this,i):this.i.length==0||wo(this.h)||jo(this))};function jo(i,o){var c;o?c=o.l:c=i.V++;const h=It(i.J);K(h,"SID",i.M),K(h,"RID",c),K(h,"AID",i.K),qn(i,h),i.u&&i.o&&Ms(h,i.u,i.o),c=new Zt(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),o&&(i.i=o.G.concat(i.i)),o=Ho(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Rs(i.h,c),Os(c,h,o)}function qn(i,o){i.H&&dt(i.H,function(c,h){K(o,h,c)}),i.l&&dt({},function(c,h){K(o,h,c)})}function Ho(i,o,c){c=Math.min(i.i.length,c);const h=i.l?y(i.l.Ka,i.l,i):null;t:{var T=i.i;let x=-1;for(;;){const J=["count="+c];x==-1?c>0?(x=T[0].g,J.push("ofs="+x)):x=0:J.push("ofs="+x);let z=!0;for(let Z=0;Z<c;Z++){var w=T[Z].g;const St=T[Z].map;if(w-=x,w<0)x=Math.max(0,T[Z].g-100),z=!1;else try{w="req"+w+"_"||"";try{var C=St instanceof Map?St:Object.entries(St);for(const[Se,ie]of C){let se=ie;u(ie)&&(se=Xe(ie)),J.push(w+Se+"="+encodeURIComponent(se))}}catch(Se){throw J.push(w+"type="+encodeURIComponent("_badmap")),Se}}catch{h&&h(St)}}if(z){C=J.join("&");break t}}C=void 0}return i=i.i.splice(0,c),o.G=i,C}function Bo(i){if(!i.g&&!i.v){i.Y=1;var o=i.Da;V||d(),M||(V(),M=!0),_.add(o,i),i.A=0}}function $s(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=xn(y(i.Da,i),Ko(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Wo(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=xn(y(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Ni(this),Wo(this))};function Vs(i){i.B!=null&&(l.clearTimeout(i.B),i.B=null)}function Wo(i){i.g=new Zt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var o=It(i.na);K(o,"RID","rpc"),K(o,"SID",i.M),K(o,"AID",i.K),K(o,"CI",i.F?"0":"1"),!i.F&&i.ia&&K(o,"TO",i.ia),K(o,"TYPE","xmlhttp"),qn(i,o),i.u&&i.o&&Ms(o,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=Si(It(o)),c.u=null,c.R=!0,Eo(c,i)}n.Va=function(){this.C!=null&&(this.C=null,Ni(this),$s(this),nt(19))};function Pi(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function zo(i,o){var c=null;if(i.g==o){Pi(i),Vs(i),i.g=null;var h=2}else if(Ps(i.h,o))c=o.G,Ao(i.h,o),h=1;else return;if(i.I!=0){if(o.o)if(h==1){c=o.u?o.u.length:0,o=Date.now()-o.F;var T=i.D;h=As(),G(h,new po(h,c)),Di(i)}else Bo(i);else if(T=o.m,T==3||T==0&&o.X>0||!(h==1&&Qh(i,o)||h==2&&$s(i)))switch(c&&c.length>0&&(o=i.h,o.i=o.i.concat(c)),T){case 1:Ie(i,5);break;case 4:Ie(i,10);break;case 3:Ie(i,6);break;default:Ie(i,2)}}}function Ko(i,o){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*o}function Ie(i,o){if(i.j.info("Error code "+o),o==2){var c=y(i.bb,i),h=i.Ua;const T=!h;h=new te(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Fn(h,"https"),Si(h),T?Kh(h.toString(),c):Gh(h.toString(),c)}else nt(2);i.I=0,i.l&&i.l.pa(o),Go(i),Fo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Go(i){if(i.I=0,i.ja=[],i.l){const o=Io(i.h);(o.length!=0||i.i.length!=0)&&(R(i.ja,o),R(i.ja,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.oa()}}function qo(i,o,c){var h=c instanceof te?It(c):new te(c);if(h.g!="")o&&(h.g=o+"."+h.g),jn(h,h.u);else{var T=l.location;h=T.protocol,o=o?o+"."+T.hostname:T.hostname,T=+T.port;const w=new te(null);h&&Fn(w,h),o&&(w.g=o),T&&jn(w,T),c&&(w.h=c),h=w}return c=i.G,o=i.wa,c&&o&&K(h,c,o),K(h,"VER",i.ka),qn(i,h),h}function Yo(i,o,c){if(o&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return o=i.Aa&&!i.ma?new Y(new Ls({ab:c})):new Y(i.ma),o.Fa(i.L),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}n=Xo.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function pt(i,o){Q.call(this),this.g=new Uo(o),this.l=i,this.h=o&&o.messageUrlParams||null,i=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(i?i["X-WebChannel-Content-Type"]=o.messageContentType:i={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.sa&&(i?i["X-WebChannel-Client-Profile"]=o.sa:i={"X-WebChannel-Client-Profile":o.sa}),this.g.U=i,(i=o&&o.Qb)&&!f(i)&&(this.g.u=i),this.A=o&&o.supportsCrossDomainXhr||!1,this.v=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!f(o)&&(this.g.G=o,i=this.h,i!==null&&o in i&&(i=this.h,o in i&&delete i[o])),this.j=new tn(this)}S(pt,Q),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){xs(this.g)},pt.prototype.o=function(i){var o=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=Xe(i),i=c);o.i.push(new Vh(o.Ya++,i)),o.I==3&&Di(o)},pt.prototype.N=function(){this.g.l=null,delete this.j,xs(this.g),delete this.g,pt.Z.N.call(this)};function Jo(i){ws.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var o=i.__sm__;if(o){t:{for(const c in o){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,o=o!==null&&i in o?o[i]:void 0),this.data=o}else this.data=i}S(Jo,ws);function Qo(){bs.call(this),this.status=1}S(Qo,bs);function tn(i){this.g=i}S(tn,Xo),tn.prototype.ra=function(){G(this.g,"a")},tn.prototype.qa=function(i){G(this.g,new Jo(i))},tn.prototype.pa=function(i){G(this.g,new Qo)},tn.prototype.oa=function(){G(this.g,"b")},pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,Lh.COMPLETE="complete",Nh.EventType=Ln,Ln.OPEN="a",Ln.CLOSE="b",Ln.ERROR="c",Ln.MESSAGE="d",Q.prototype.listen=Q.prototype.J,Y.prototype.listenOnce=Y.prototype.K,Y.prototype.getLastError=Y.prototype.Ha,Y.prototype.getLastErrorCode=Y.prototype.ya,Y.prototype.getStatus=Y.prototype.ca,Y.prototype.getResponseJson=Y.prototype.La,Y.prototype.getResponseText=Y.prototype.la,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Fa}).apply(typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{});const Oa="@firebase/firestore",Na="4.9.2";/**
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
 */class it{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let pi="12.3.0";/**
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
 */const gn=new Or("@firebase/firestore");function bt(n,...t){if(gn.logLevel<=W.DEBUG){const e=t.map(jr);gn.debug(`Firestore (${pi}): ${n}`,...e)}}function _l(n,...t){if(gn.logLevel<=W.ERROR){const e=t.map(jr);gn.error(`Firestore (${pi}): ${n}`,...e)}}function Mp(n,...t){if(gn.logLevel<=W.WARN){const e=t.map(jr);gn.warn(`Firestore (${pi}): ${n}`,...e)}}function jr(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function oi(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,El(n,s,e)}function El(n,t,e){let s=`FIRESTORE (${pi}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw _l(s),new Error(s)}function Zn(n,t,e,s){let r="Unexpected state";typeof e=="string"?r=e:s=e,n||El(t,r,s)}/**
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
 */const H={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class B extends qt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ti{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class vl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(it.UNAUTHENTICATED)))}shutdown(){}}class $p{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Vp{constructor(t){this.t=t,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Zn(this.o===void 0,42304);let s=this.i;const r=g=>this.i!==s?(s=this.i,e(g)):Promise.resolve();let a=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ti,t.enqueueRetryable((()=>r(this.currentUser)))};const l=()=>{const g=a;t.enqueueRetryable((async()=>{await g.promise,await r(this.currentUser)}))},u=g=>{bt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((g=>u(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?u(g):(bt("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ti)}}),0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((s=>this.i!==t?(bt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Zn(typeof s.accessToken=="string",31837,{l:s}),new vl(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Zn(t===null||typeof t=="string",2055,{h:t}),new it(t)}}class Up{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Fp{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new Up(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(it.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Da{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jp{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Zn(this.o===void 0,3512);const s=a=>{a.error!=null&&bt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,bt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable((()=>s(a)))};const r=a=>{bt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>r(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?r(a):bt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Da(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Zn(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Da(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Hp(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class Bp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Hp(40);for(let a=0;a<r.length;++a)s.length<20&&r[a]<e&&(s+=t.charAt(r[a]%62))}return s}}function pe(n,t){return n<t?-1:n>t?1:0}function Wp(n,t){const e=Math.min(n.length,t.length);for(let s=0;s<e;s++){const r=n.charAt(s),a=t.charAt(s);if(r!==a)return Gs(r)===Gs(a)?pe(r,a):Gs(r)?1:-1}return pe(n.length,t.length)}const zp=55296,Kp=57343;function Gs(n){const t=n.charCodeAt(0);return t>=zp&&t<=Kp}/**
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
 */const Pa="__name__";class Ct{constructor(t,e,s){e===void 0?e=0:e>t.length&&oi(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&oi(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach((s=>{e.push(s)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const a=Ct.compareSegments(t.get(r),e.get(r));if(a!==0)return a}return pe(t.length,e.length)}static compareSegments(t,e){const s=Ct.isNumericId(t),r=Ct.isNumericId(e);return s&&!r?-1:!s&&r?1:s&&r?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):Wp(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Fr.fromString(t.substring(4,t.length-2))}}class Tt extends Ct{construct(t,e,s){return new Tt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new B(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter((r=>r.length>0)))}return new Tt(e)}static emptyPath(){return new Tt([])}}const Gp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Ct{construct(t,e,s){return new Oe(t,e,s)}static isValidIdentifier(t){return Gp.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pa}static keyField(){return new Oe([Pa])}static fromServerFormat(t){const e=[];let s="",r=0;const a=()=>{if(s.length===0)throw new B(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let l=!1;for(;r<t.length;){const u=t[r];if(u==="\\"){if(r+1===t.length)throw new B(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[r+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new B(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,r+=2}else u==="`"?(l=!l,r++):u!=="."||l?(s+=u,r++):(a(),r++)}if(a(),l)throw new B(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Oe(e)}static emptyPath(){return new Oe([])}}/**
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
 */class Ne{constructor(t){this.path=t}static fromPath(t){return new Ne(Tt.fromString(t))}static fromName(t){return new Ne(Tt.fromString(t).popFirst(5))}static empty(){return new Ne(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ne(new Tt(t.slice()))}}function qp(n,t,e,s){if(t===!0&&s===!0)throw new B(H.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Yp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Xp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":oi(12329,{type:typeof n})}function Jp(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Xp(n);throw new B(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function X(n,t){const e={typeString:n};return t&&(e.value=t),e}function gi(n,t){if(!Yp(n))throw new B(H.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const r=t[s].typeString,a="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){e=`JSON missing required field: '${s}'`;break}const l=n[s];if(r&&typeof l!==r){e=`JSON field '${s}' must be a ${r}.`;break}if(a!==void 0&&l!==a.value){e=`Expected '${s}' field to equal '${a.value}'`;break}}if(e)throw new B(H.INVALID_ARGUMENT,e);return!0}/**
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
 */const Ra=-62135596800,ka=1e6;class Ot{static now(){return Ot.fromMillis(Date.now())}static fromDate(t){return Ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*ka);return new Ot(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ra)throw new B(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ka}_compareTo(t){return this.seconds===t.seconds?pe(this.nanoseconds,t.nanoseconds):pe(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gi(t,Ot._jsonSchema))return new Ot(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ra;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ot._jsonSchemaVersion="firestore/timestamp/1.0",Ot._jsonSchema={type:X("string",Ot._jsonSchemaVersion),seconds:X("number"),nanoseconds:X("number")};function Qp(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Zp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(r){try{return atob(r)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Zp("Invalid base64 string: "+a):a}})(t);return new Ue(e)}static fromUint8Array(t){const e=(function(r){let a="";for(let l=0;l<r.length;++l)a+=String.fromCharCode(r[l]);return a})(t);return new Ue(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pe(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const vr="(default)";class rs{constructor(t,e){this.projectId=t,this.database=e||vr}static empty(){return new rs("","")}get isDefaultDatabase(){return this.database===vr}isEqual(t){return t instanceof rs&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */class tg{constructor(t,e=null,s=[],r=[],a=null,l="F",u=null,g=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=a,this.limitType=l,this.startAt=u,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function eg(n){return new tg(n)}/**
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
 */var La,j;(j=La||(La={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Fr([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ng=41943040;/**
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
 */const ig=1048576;function qs(){return typeof document<"u"?document:null}/**
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
 */class sg{constructor(t,e,s=1e3,r=1.5,a=6e4){this.Mi=t,this.timerId=e,this.d_=s,this.A_=r,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-s);r>0&&bt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class Hr{constructor(t,e,s,r,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=a,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,a){const l=Date.now()+s,u=new Hr(t,e,l,r,a);return u.start(s),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ma,xa;(xa=Ma||(Ma={})).Ma="default",xa.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function rg(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const $a=new Map;/**
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
 */const yl="firestore.googleapis.com",Va=!0;class Ua{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new B(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yl,this.ssl=Va}else this.host=t.host,this.ssl=t.ssl??Va;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ng;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ig)throw new B(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rg(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Tl{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ua({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new B(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ua(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new xp;switch(s.type){case"firstParty":return new Fp(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const s=$a.get(e);s&&(bt("ComponentProvider","Removing Datastore"),$a.delete(e),s.terminate())})(this),Promise.resolve()}}function og(n,t,e,s={}){n=Jp(n,Tl);const r=ci(t),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;r&&(Rc(`https://${u}`),kc("Firestore",!0)),a.host!==yl&&a.host!==u&&Mp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...a,host:u,ssl:r,emulatorOptions:s};if(!xe(g,l)&&(n._setSettings(g),s.mockUserToken)){let y,b;if(typeof s.mockUserToken=="string")y=s.mockUserToken,b=it.MOCK_USER;else{y=lu(s.mockUserToken,n._app?.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new B(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new it(S)}n._authCredentials=new $p(new vl(y,b))}}/**
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
 */class Br{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Br(this.firestore,t,this._query)}}class Dt{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}toJSON(){return{type:Dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(gi(e,Dt._jsonSchema))return new Dt(t,s||null,new Ne(Tt.fromString(e.referencePath)))}}Dt._jsonSchemaVersion="firestore/documentReference/1.0",Dt._jsonSchema={type:X("string",Dt._jsonSchemaVersion),referencePath:X("string")};class Wr extends Br{constructor(t,e,s){super(t,e,eg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new Ne(t))}withConverter(t){return new Wr(this.firestore,t,this._path)}}/**
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
 */const Fa="AsyncQueue";class ja{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sg(this,"async_queue_retry"),this._c=()=>{const s=qs();s&&bt(Fa,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=qs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=qs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new ti;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Qp(t))throw t;bt(Fa,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,_l("INTERNAL UNHANDLED ERROR: ",Ha(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Hr.createAndSchedule(this,t,e,s,(a=>this.hc(a)));return this.tc.push(r),r}uc(){this.nc&&oi(47125,{Pc:Ha(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,s)=>e.targetTimeMs-s.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ha(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ag extends Tl{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new ja,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ja(t),this._firestoreClient=void 0,await t}}}function cg(n,t){const e=typeof n=="object"?n:$c(),s=typeof n=="string"?n:vr,r=Dr(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const a=au("firestore");a&&og(r,...a)}return r}/**
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
 */class Ut{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ut(Ue.fromBase64String(t))}catch(e){throw new B(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ut(Ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gi(t,Ut._jsonSchema))return Ut.fromBase64String(t.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:X("string",Ut._jsonSchemaVersion),bytes:X("string")};/**
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
 */class wl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ke{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return pe(this._lat,t._lat)||pe(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ke._jsonSchemaVersion}}static fromJSON(t){if(gi(t,ke._jsonSchema))return new ke(t.latitude,t.longitude)}}ke._jsonSchemaVersion="firestore/geoPoint/1.0",ke._jsonSchema={type:X("string",ke._jsonSchemaVersion),latitude:X("number"),longitude:X("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Le{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,r){if(s.length!==r.length)return!1;for(let a=0;a<s.length;++a)if(s[a]!==r[a])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Le._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gi(t,Le._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Le(t.vectorValues);throw new B(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Le._jsonSchemaVersion="firestore/vectorValue/1.0",Le._jsonSchema={type:X("string",Le._jsonSchemaVersion),vectorValues:X("object")};const lg=new RegExp("[~\\*/\\[\\]]");function hg(n,t,e){if(t.search(lg)>=0)throw Ba(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new wl(...t.split("."))._internalPath}catch{throw Ba(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ba(n,t,e,s,r){let a=`Function ${t}() called with invalid data`;a+=". ";let l="";return new B(H.INVALID_ARGUMENT,a+n+l)}/**
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
 */class bl{constructor(t,e,s,r,a){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ug(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Al("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ug extends bl{data(){return super.data()}}function Al(n,t){return typeof t=="string"?hg(n,t):t instanceof wl?t._internalPath:t._delegate._internalPath}class Mi{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class dn extends bl{constructor(t,e,s,r,a,l){super(t,e,s,r,l),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Al("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=dn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",dn._jsonSchema={type:X("string",dn._jsonSchemaVersion),bundleSource:X("string","DocumentSnapshot"),bundleName:X("string"),bundle:X("string")};class Gi extends dn{data(t={}){return super.data(t)}}class ei{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Mi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((s=>{t.call(e,new Gi(this._firestore,this._userDataWriter,s.key,s,new Mi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(r,a){if(r._snapshot.oldDocs.isEmpty()){let l=0;return r._snapshot.docChanges.map((u=>{const g=new Gi(r._firestore,r._userDataWriter,u.doc.key,u.doc,new Mi(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);return u.doc,{type:"added",doc:g,oldIndex:-1,newIndex:l++}}))}{let l=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((u=>a||u.type!==3)).map((u=>{const g=new Gi(r._firestore,r._userDataWriter,u.doc.key,u.doc,new Mi(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);let y=-1,b=-1;return u.type!==0&&(y=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),b=l.indexOf(u.doc.key)),{type:dg(u.type),doc:g,oldIndex:y,newIndex:b}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ei._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Bp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],r=[];return this.docs.forEach((a=>{a._document!==null&&(e.push(a._document),s.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),r.push(a.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function dg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oi(61501,{type:n})}}ei._jsonSchemaVersion="firestore/querySnapshot/1.0",ei._jsonSchema={type:X("string",ei._jsonSchemaVersion),bundleSource:X("string","QuerySnapshot"),bundleName:X("string"),bundle:X("string")};(function(t,e=!0){(function(r){pi=r})(bn),fn(new $e("firestore",((s,{instanceIdentifier:r,options:a})=>{const l=s.getProvider("app").getImmediate(),u=new ag(new Vp(s.getProvider("auth-internal")),new jp(l,s.getProvider("app-check-internal")),(function(y,b){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new B(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rs(y.options.projectId,b)})(l,r),l);return a={useFetchStreams:e,...a},u._setSettings(a),u}),"PUBLIC").setMultipleInstances(!0)),fe(Oa,Na,t),fe(Oa,Na,"esm2020")})();var fg="firebase",pg="12.4.0";/**
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
 */fe(fg,pg,"app");const gg={apiKey:"AIzaSyCdWZoZL9VHqIzCWpbrlq7wIDMi_8KBnJo",authDomain:"fir-990c1.firebaseapp.com",projectId:"fir-990c1",appId:"1:912390311939:web:6f3988a6a85f72b352be36"},Il=xc(gg),Sl=kp(Il);cg(Il);async function mg(){await wf(Sl),window.location.href="index.html"}class _g extends HTMLElement{constructor(){super(),this.renderNavbar(),this.renderAuthControls()}renderNavbar(){this.innerHTML=`
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="/main.html">
          <img src="/images/image.jpg" height="36">
          HezeHikes
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/main.html">Home</a>
            </li>
            
            <!-- NEW: Saved Hikes link -->
            <li class="nav-item">
              <a class="nav-link" href="/saved.html">Saved</a>
            </li>
            
          </ul>
          <div class="d-flex align-items-center gap-2 ms-lg-2" id="rightControls">
            <form class="d-flex align-items-center gap-2 my-2 my-lg-0" id="navSearch" role="search">
              <input class="form-control d-none d-sm-block w-auto" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-light d-none d-sm-inline-block" type="submit">Search</button>
            </form>
            <div id="authControls" class="auth-controls d-flex align-items-center gap-2 my-2 my-lg-0">
              <!-- populated by JS -->
            </div>
          </div>
        </div>
      </div>
    </nav>
  `}renderAuthControls(){const t=this.querySelector("#authControls"),e=this.querySelector("ul");t.innerHTML='<div class="btn btn-outline-light" style="visibility: hidden; min-width: 80px;">Log out</div>',Tf(Sl,s=>{let r;const a=e?.querySelector("#profileLink");if(a&&a.remove(),s){if(e){const u=document.createElement("li");u.classList.add("nav-item"),u.innerHTML='<a class="nav-link" id="profileLink" href="/profile.html">Profile</a>',e.appendChild(u)}r='<button class="btn btn-outline-light" id="signOutBtn" type="button" style="min-width: 80px;">Log out</button>',t.innerHTML=r,t.querySelector("#signOutBtn")?.addEventListener("click",mg)}else a&&a.remove(),r='<a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>',t.innerHTML=r})}}customElements.define("site-navbar",_g);class Eg extends HTMLElement{connectedCallback(){this.innerHTML=`
            <!-- Footer: single source of truth -->
            <footer class="py-3 my-4 border-top text-center">
                <p class="mb-0 text-muted">&copy; 2025 BCIT COMP1800</p>
            </footer>
        `}}customElements.define("site-footer",Eg);var st="top",lt="bottom",ht="right",rt="left",ds="auto",In=[st,lt,ht,rt],Fe="start",mn="end",Cl="clippingParents",zr="viewport",sn="popper",Ol="reference",yr=In.reduce(function(n,t){return n.concat([t+"-"+Fe,t+"-"+mn])},[]),Kr=[].concat(In,[ds]).reduce(function(n,t){return n.concat([t,t+"-"+Fe,t+"-"+mn])},[]),Nl="beforeRead",Dl="read",Pl="afterRead",Rl="beforeMain",kl="main",Ll="afterMain",Ml="beforeWrite",xl="write",$l="afterWrite",Vl=[Nl,Dl,Pl,Rl,kl,Ll,Ml,xl,$l];function Mt(n){return n?(n.nodeName||"").toLowerCase():null}function ut(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function je(n){var t=ut(n).Element;return n instanceof t||n instanceof Element}function gt(n){var t=ut(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function Gr(n){if(typeof ShadowRoot>"u")return!1;var t=ut(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function vg(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var s=t.styles[e]||{},r=t.attributes[e]||{},a=t.elements[e];!gt(a)||!Mt(a)||(Object.assign(a.style,s),Object.keys(r).forEach(function(l){var u=r[l];u===!1?a.removeAttribute(l):a.setAttribute(l,u===!0?"":u)}))})}function yg(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(s){var r=t.elements[s],a=t.attributes[s]||{},l=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:e[s]),u=l.reduce(function(g,y){return g[y]="",g},{});!gt(r)||!Mt(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(g){r.removeAttribute(g)}))})}}const qr={name:"applyStyles",enabled:!0,phase:"write",fn:vg,effect:yg,requires:["computeStyles"]};function kt(n){return n.split("-")[0]}var Me=Math.max,os=Math.min,_n=Math.round;function Tr(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Ul(){return!/^((?!chrome|android).)*safari/i.test(Tr())}function En(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var s=n.getBoundingClientRect(),r=1,a=1;t&&gt(n)&&(r=n.offsetWidth>0&&_n(s.width)/n.offsetWidth||1,a=n.offsetHeight>0&&_n(s.height)/n.offsetHeight||1);var l=je(n)?ut(n):window,u=l.visualViewport,g=!Ul()&&e,y=(s.left+(g&&u?u.offsetLeft:0))/r,b=(s.top+(g&&u?u.offsetTop:0))/a,S=s.width/r,A=s.height/a;return{width:S,height:A,top:b,right:y+S,bottom:b+A,left:y,x:y,y:b}}function Yr(n){var t=En(n),e=n.offsetWidth,s=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:s}}function Fl(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&Gr(e)){var s=t;do{if(s&&n.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function Gt(n){return ut(n).getComputedStyle(n)}function Tg(n){return["table","td","th"].indexOf(Mt(n))>=0}function ve(n){return((je(n)?n.ownerDocument:n.document)||window.document).documentElement}function fs(n){return Mt(n)==="html"?n:n.assignedSlot||n.parentNode||(Gr(n)?n.host:null)||ve(n)}function Wa(n){return!gt(n)||Gt(n).position==="fixed"?null:n.offsetParent}function wg(n){var t=/firefox/i.test(Tr()),e=/Trident/i.test(Tr());if(e&&gt(n)){var s=Gt(n);if(s.position==="fixed")return null}var r=fs(n);for(Gr(r)&&(r=r.host);gt(r)&&["html","body"].indexOf(Mt(r))<0;){var a=Gt(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function mi(n){for(var t=ut(n),e=Wa(n);e&&Tg(e)&&Gt(e).position==="static";)e=Wa(e);return e&&(Mt(e)==="html"||Mt(e)==="body"&&Gt(e).position==="static")?t:e||wg(n)||t}function Xr(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function ni(n,t,e){return Me(n,os(t,e))}function bg(n,t,e){var s=ni(n,t,e);return s>e?e:s}function jl(){return{top:0,right:0,bottom:0,left:0}}function Hl(n){return Object.assign({},jl(),n)}function Bl(n,t){return t.reduce(function(e,s){return e[s]=n,e},{})}var Ag=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Hl(typeof t!="number"?t:Bl(t,In))};function Ig(n){var t,e=n.state,s=n.name,r=n.options,a=e.elements.arrow,l=e.modifiersData.popperOffsets,u=kt(e.placement),g=Xr(u),y=[rt,ht].indexOf(u)>=0,b=y?"height":"width";if(!(!a||!l)){var S=Ag(r.padding,e),A=Yr(a),O=g==="y"?st:rt,R=g==="y"?lt:ht,N=e.rects.reference[b]+e.rects.reference[g]-l[g]-e.rects.popper[b],D=l[g]-e.rects.reference[g],$=mi(a),U=$?g==="y"?$.clientHeight||0:$.clientWidth||0:0,F=N/2-D/2,L=S[O],V=U-A[b]-S[R],M=U/2-A[b]/2+F,_=ni(L,M,V),d=g;e.modifiersData[s]=(t={},t[d]=_,t.centerOffset=_-M,t)}}function Sg(n){var t=n.state,e=n.options,s=e.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||Fl(t.elements.popper,r)&&(t.elements.arrow=r))}const Wl={name:"arrow",enabled:!0,phase:"main",fn:Ig,effect:Sg,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vn(n){return n.split("-")[1]}var Cg={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Og(n,t){var e=n.x,s=n.y,r=t.devicePixelRatio||1;return{x:_n(e*r)/r||0,y:_n(s*r)/r||0}}function za(n){var t,e=n.popper,s=n.popperRect,r=n.placement,a=n.variation,l=n.offsets,u=n.position,g=n.gpuAcceleration,y=n.adaptive,b=n.roundOffsets,S=n.isFixed,A=l.x,O=A===void 0?0:A,R=l.y,N=R===void 0?0:R,D=typeof b=="function"?b({x:O,y:N}):{x:O,y:N};O=D.x,N=D.y;var $=l.hasOwnProperty("x"),U=l.hasOwnProperty("y"),F=rt,L=st,V=window;if(y){var M=mi(e),_="clientHeight",d="clientWidth";if(M===ut(e)&&(M=ve(e),Gt(M).position!=="static"&&u==="absolute"&&(_="scrollHeight",d="scrollWidth")),M=M,r===st||(r===rt||r===ht)&&a===mn){L=lt;var p=S&&M===V&&V.visualViewport?V.visualViewport.height:M[_];N-=p-s.height,N*=g?1:-1}if(r===rt||(r===st||r===lt)&&a===mn){F=ht;var E=S&&M===V&&V.visualViewport?V.visualViewport.width:M[d];O-=E-s.width,O*=g?1:-1}}var m=Object.assign({position:u},y&&Cg),v=b===!0?Og({x:O,y:N},ut(e)):{x:O,y:N};if(O=v.x,N=v.y,g){var f;return Object.assign({},m,(f={},f[L]=U?"0":"",f[F]=$?"0":"",f.transform=(V.devicePixelRatio||1)<=1?"translate("+O+"px, "+N+"px)":"translate3d("+O+"px, "+N+"px, 0)",f))}return Object.assign({},m,(t={},t[L]=U?N+"px":"",t[F]=$?O+"px":"",t.transform="",t))}function Ng(n){var t=n.state,e=n.options,s=e.gpuAcceleration,r=s===void 0?!0:s,a=e.adaptive,l=a===void 0?!0:a,u=e.roundOffsets,g=u===void 0?!0:u,y={placement:kt(t.placement),variation:vn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,za(Object.assign({},y,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:g})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,za(Object.assign({},y,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:g})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Jr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ng,data:{}};var xi={passive:!0};function Dg(n){var t=n.state,e=n.instance,s=n.options,r=s.scroll,a=r===void 0?!0:r,l=s.resize,u=l===void 0?!0:l,g=ut(t.elements.popper),y=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&y.forEach(function(b){b.addEventListener("scroll",e.update,xi)}),u&&g.addEventListener("resize",e.update,xi),function(){a&&y.forEach(function(b){b.removeEventListener("scroll",e.update,xi)}),u&&g.removeEventListener("resize",e.update,xi)}}const Qr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Dg,data:{}};var Pg={left:"right",right:"left",bottom:"top",top:"bottom"};function qi(n){return n.replace(/left|right|bottom|top/g,function(t){return Pg[t]})}var Rg={start:"end",end:"start"};function Ka(n){return n.replace(/start|end/g,function(t){return Rg[t]})}function Zr(n){var t=ut(n),e=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:e,scrollTop:s}}function to(n){return En(ve(n)).left+Zr(n).scrollLeft}function kg(n,t){var e=ut(n),s=ve(n),r=e.visualViewport,a=s.clientWidth,l=s.clientHeight,u=0,g=0;if(r){a=r.width,l=r.height;var y=Ul();(y||!y&&t==="fixed")&&(u=r.offsetLeft,g=r.offsetTop)}return{width:a,height:l,x:u+to(n),y:g}}function Lg(n){var t,e=ve(n),s=Zr(n),r=(t=n.ownerDocument)==null?void 0:t.body,a=Me(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),l=Me(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-s.scrollLeft+to(n),g=-s.scrollTop;return Gt(r||e).direction==="rtl"&&(u+=Me(e.clientWidth,r?r.clientWidth:0)-a),{width:a,height:l,x:u,y:g}}function eo(n){var t=Gt(n),e=t.overflow,s=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+r+s)}function zl(n){return["html","body","#document"].indexOf(Mt(n))>=0?n.ownerDocument.body:gt(n)&&eo(n)?n:zl(fs(n))}function ii(n,t){var e;t===void 0&&(t=[]);var s=zl(n),r=s===((e=n.ownerDocument)==null?void 0:e.body),a=ut(s),l=r?[a].concat(a.visualViewport||[],eo(s)?s:[]):s,u=t.concat(l);return r?u:u.concat(ii(fs(l)))}function wr(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function Mg(n,t){var e=En(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Ga(n,t,e){return t===zr?wr(kg(n,e)):je(t)?Mg(t,e):wr(Lg(ve(n)))}function xg(n){var t=ii(fs(n)),e=["absolute","fixed"].indexOf(Gt(n).position)>=0,s=e&&gt(n)?mi(n):n;return je(s)?t.filter(function(r){return je(r)&&Fl(r,s)&&Mt(r)!=="body"}):[]}function $g(n,t,e,s){var r=t==="clippingParents"?xg(n):[].concat(t),a=[].concat(r,[e]),l=a[0],u=a.reduce(function(g,y){var b=Ga(n,y,s);return g.top=Me(b.top,g.top),g.right=os(b.right,g.right),g.bottom=os(b.bottom,g.bottom),g.left=Me(b.left,g.left),g},Ga(n,l,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function Kl(n){var t=n.reference,e=n.element,s=n.placement,r=s?kt(s):null,a=s?vn(s):null,l=t.x+t.width/2-e.width/2,u=t.y+t.height/2-e.height/2,g;switch(r){case st:g={x:l,y:t.y-e.height};break;case lt:g={x:l,y:t.y+t.height};break;case ht:g={x:t.x+t.width,y:u};break;case rt:g={x:t.x-e.width,y:u};break;default:g={x:t.x,y:t.y}}var y=r?Xr(r):null;if(y!=null){var b=y==="y"?"height":"width";switch(a){case Fe:g[y]=g[y]-(t[b]/2-e[b]/2);break;case mn:g[y]=g[y]+(t[b]/2-e[b]/2);break}}return g}function yn(n,t){t===void 0&&(t={});var e=t,s=e.placement,r=s===void 0?n.placement:s,a=e.strategy,l=a===void 0?n.strategy:a,u=e.boundary,g=u===void 0?Cl:u,y=e.rootBoundary,b=y===void 0?zr:y,S=e.elementContext,A=S===void 0?sn:S,O=e.altBoundary,R=O===void 0?!1:O,N=e.padding,D=N===void 0?0:N,$=Hl(typeof D!="number"?D:Bl(D,In)),U=A===sn?Ol:sn,F=n.rects.popper,L=n.elements[R?U:A],V=$g(je(L)?L:L.contextElement||ve(n.elements.popper),g,b,l),M=En(n.elements.reference),_=Kl({reference:M,element:F,placement:r}),d=wr(Object.assign({},F,_)),p=A===sn?d:M,E={top:V.top-p.top+$.top,bottom:p.bottom-V.bottom+$.bottom,left:V.left-p.left+$.left,right:p.right-V.right+$.right},m=n.modifiersData.offset;if(A===sn&&m){var v=m[r];Object.keys(E).forEach(function(f){var q=[ht,lt].indexOf(f)>=0?1:-1,tt=[st,lt].indexOf(f)>=0?"y":"x";E[f]+=v[tt]*q})}return E}function Vg(n,t){t===void 0&&(t={});var e=t,s=e.placement,r=e.boundary,a=e.rootBoundary,l=e.padding,u=e.flipVariations,g=e.allowedAutoPlacements,y=g===void 0?Kr:g,b=vn(s),S=b?u?yr:yr.filter(function(R){return vn(R)===b}):In,A=S.filter(function(R){return y.indexOf(R)>=0});A.length===0&&(A=S);var O=A.reduce(function(R,N){return R[N]=yn(n,{placement:N,boundary:r,rootBoundary:a,padding:l})[kt(N)],R},{});return Object.keys(O).sort(function(R,N){return O[R]-O[N]})}function Ug(n){if(kt(n)===ds)return[];var t=qi(n);return[Ka(n),t,Ka(t)]}function Fg(n){var t=n.state,e=n.options,s=n.name;if(!t.modifiersData[s]._skip){for(var r=e.mainAxis,a=r===void 0?!0:r,l=e.altAxis,u=l===void 0?!0:l,g=e.fallbackPlacements,y=e.padding,b=e.boundary,S=e.rootBoundary,A=e.altBoundary,O=e.flipVariations,R=O===void 0?!0:O,N=e.allowedAutoPlacements,D=t.options.placement,$=kt(D),U=$===D,F=g||(U||!R?[qi(D)]:Ug(D)),L=[D].concat(F).reduce(function(vt,ft){return vt.concat(kt(ft)===ds?Vg(t,{placement:ft,boundary:b,rootBoundary:S,padding:y,flipVariations:R,allowedAutoPlacements:N}):ft)},[]),V=t.rects.reference,M=t.rects.popper,_=new Map,d=!0,p=L[0],E=0;E<L.length;E++){var m=L[E],v=kt(m),f=vn(m)===Fe,q=[st,lt].indexOf(v)>=0,tt=q?"width":"height",et=yn(t,{placement:m,boundary:b,rootBoundary:S,altBoundary:A,padding:y}),ct=q?f?ht:rt:f?lt:st;V[tt]>M[tt]&&(ct=qi(ct));var xt=qi(ct),dt=[];if(a&&dt.push(et[v]<=0),u&&dt.push(et[ct]<=0,et[xt]<=0),dt.every(function(vt){return vt})){p=m,d=!1;break}_.set(m,dt)}if(d)for(var We=R?3:1,ze=function(ft){var $t=L.find(function(Jt){var yt=_.get(Jt);if(yt)return yt.slice(0,ft).every(function(Ke){return Ke})});if($t)return p=$t,"break"},Xt=We;Xt>0;Xt--){var we=ze(Xt);if(we==="break")break}t.placement!==p&&(t.modifiersData[s]._skip=!0,t.placement=p,t.reset=!0)}}const Gl={name:"flip",enabled:!0,phase:"main",fn:Fg,requiresIfExists:["offset"],data:{_skip:!1}};function qa(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function Ya(n){return[st,ht,lt,rt].some(function(t){return n[t]>=0})}function jg(n){var t=n.state,e=n.name,s=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,l=yn(t,{elementContext:"reference"}),u=yn(t,{altBoundary:!0}),g=qa(l,s),y=qa(u,r,a),b=Ya(g),S=Ya(y);t.modifiersData[e]={referenceClippingOffsets:g,popperEscapeOffsets:y,isReferenceHidden:b,hasPopperEscaped:S},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":b,"data-popper-escaped":S})}const ql={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:jg};function Hg(n,t,e){var s=kt(n),r=[rt,st].indexOf(s)>=0?-1:1,a=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=a[0],u=a[1];return l=l||0,u=(u||0)*r,[rt,ht].indexOf(s)>=0?{x:u,y:l}:{x:l,y:u}}function Bg(n){var t=n.state,e=n.options,s=n.name,r=e.offset,a=r===void 0?[0,0]:r,l=Kr.reduce(function(b,S){return b[S]=Hg(S,t.rects,a),b},{}),u=l[t.placement],g=u.x,y=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=g,t.modifiersData.popperOffsets.y+=y),t.modifiersData[s]=l}const Yl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Bg};function Wg(n){var t=n.state,e=n.name;t.modifiersData[e]=Kl({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const no={name:"popperOffsets",enabled:!0,phase:"read",fn:Wg,data:{}};function zg(n){return n==="x"?"y":"x"}function Kg(n){var t=n.state,e=n.options,s=n.name,r=e.mainAxis,a=r===void 0?!0:r,l=e.altAxis,u=l===void 0?!1:l,g=e.boundary,y=e.rootBoundary,b=e.altBoundary,S=e.padding,A=e.tether,O=A===void 0?!0:A,R=e.tetherOffset,N=R===void 0?0:R,D=yn(t,{boundary:g,rootBoundary:y,padding:S,altBoundary:b}),$=kt(t.placement),U=vn(t.placement),F=!U,L=Xr($),V=zg(L),M=t.modifiersData.popperOffsets,_=t.rects.reference,d=t.rects.popper,p=typeof N=="function"?N(Object.assign({},t.rects,{placement:t.placement})):N,E=typeof p=="number"?{mainAxis:p,altAxis:p}:Object.assign({mainAxis:0,altAxis:0},p),m=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,v={x:0,y:0};if(M){if(a){var f,q=L==="y"?st:rt,tt=L==="y"?lt:ht,et=L==="y"?"height":"width",ct=M[L],xt=ct+D[q],dt=ct-D[tt],We=O?-d[et]/2:0,ze=U===Fe?_[et]:d[et],Xt=U===Fe?-d[et]:-_[et],we=t.elements.arrow,vt=O&&we?Yr(we):{width:0,height:0},ft=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:jl(),$t=ft[q],Jt=ft[tt],yt=ni(0,_[et],vt[et]),Ke=F?_[et]/2-We-yt-$t-E.mainAxis:ze-yt-$t-E.mainAxis,ys=F?-_[et]/2+We+yt+Jt+E.mainAxis:Xt+yt+Jt+E.mainAxis,Nn=t.elements.arrow&&mi(t.elements.arrow),Ti=Nn?L==="y"?Nn.clientTop||0:Nn.clientLeft||0:0,Ge=(f=m?.[L])!=null?f:0,wi=ct+Ke-Ge-Ti,Ts=ct+ys-Ge,qe=ni(O?os(xt,wi):xt,ct,O?Me(dt,Ts):dt);M[L]=qe,v[L]=qe-ct}if(u){var Ye,bi=L==="x"?st:rt,Q=L==="x"?lt:ht,G=M[V],Vt=V==="y"?"height":"width",Ai=G+D[bi],Dn=G-D[Q],Pn=[st,rt].indexOf($)!==-1,Qt=(Ye=m?.[V])!=null?Ye:0,Rn=Pn?Ai:G-_[Vt]-d[Vt]-Qt+E.altAxis,kn=Pn?G+_[Vt]+d[Vt]-Qt-E.altAxis:Dn,Xe=O&&Pn?bg(Rn,G,kn):ni(O?Rn:Ai,G,O?kn:Dn);M[V]=Xe,v[V]=Xe-G}t.modifiersData[s]=v}}const Xl={name:"preventOverflow",enabled:!0,phase:"main",fn:Kg,requiresIfExists:["offset"]};function Gg(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function qg(n){return n===ut(n)||!gt(n)?Zr(n):Gg(n)}function Yg(n){var t=n.getBoundingClientRect(),e=_n(t.width)/n.offsetWidth||1,s=_n(t.height)/n.offsetHeight||1;return e!==1||s!==1}function Xg(n,t,e){e===void 0&&(e=!1);var s=gt(t),r=gt(t)&&Yg(t),a=ve(t),l=En(n,r,e),u={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(s||!s&&!e)&&((Mt(t)!=="body"||eo(a))&&(u=qg(t)),gt(t)?(g=En(t,!0),g.x+=t.clientLeft,g.y+=t.clientTop):a&&(g.x=to(a))),{x:l.left+u.scrollLeft-g.x,y:l.top+u.scrollTop-g.y,width:l.width,height:l.height}}function Jg(n){var t=new Map,e=new Set,s=[];n.forEach(function(a){t.set(a.name,a)});function r(a){e.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(u){if(!e.has(u)){var g=t.get(u);g&&r(g)}}),s.push(a)}return n.forEach(function(a){e.has(a.name)||r(a)}),s}function Qg(n){var t=Jg(n);return Vl.reduce(function(e,s){return e.concat(t.filter(function(r){return r.phase===s}))},[])}function Zg(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function tm(n){var t=n.reduce(function(e,s){var r=e[s.name];return e[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,e},{});return Object.keys(t).map(function(e){return t[e]})}var Xa={placement:"bottom",modifiers:[],strategy:"absolute"};function Ja(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function ps(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,s=e===void 0?[]:e,r=t.defaultOptions,a=r===void 0?Xa:r;return function(u,g,y){y===void 0&&(y=a);var b={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xa,a),modifiersData:{},elements:{reference:u,popper:g},attributes:{},styles:{}},S=[],A=!1,O={state:b,setOptions:function($){var U=typeof $=="function"?$(b.options):$;N(),b.options=Object.assign({},a,b.options,U),b.scrollParents={reference:je(u)?ii(u):u.contextElement?ii(u.contextElement):[],popper:ii(g)};var F=Qg(tm([].concat(s,b.options.modifiers)));return b.orderedModifiers=F.filter(function(L){return L.enabled}),R(),O.update()},forceUpdate:function(){if(!A){var $=b.elements,U=$.reference,F=$.popper;if(Ja(U,F)){b.rects={reference:Xg(U,mi(F),b.options.strategy==="fixed"),popper:Yr(F)},b.reset=!1,b.placement=b.options.placement,b.orderedModifiers.forEach(function(E){return b.modifiersData[E.name]=Object.assign({},E.data)});for(var L=0;L<b.orderedModifiers.length;L++){if(b.reset===!0){b.reset=!1,L=-1;continue}var V=b.orderedModifiers[L],M=V.fn,_=V.options,d=_===void 0?{}:_,p=V.name;typeof M=="function"&&(b=M({state:b,options:d,name:p,instance:O})||b)}}}},update:Zg(function(){return new Promise(function(D){O.forceUpdate(),D(b)})}),destroy:function(){N(),A=!0}};if(!Ja(u,g))return O;O.setOptions(y).then(function(D){!A&&y.onFirstUpdate&&y.onFirstUpdate(D)});function R(){b.orderedModifiers.forEach(function(D){var $=D.name,U=D.options,F=U===void 0?{}:U,L=D.effect;if(typeof L=="function"){var V=L({state:b,name:$,instance:O,options:F}),M=function(){};S.push(V||M)}})}function N(){S.forEach(function(D){return D()}),S=[]}return O}}var em=ps(),nm=[Qr,no,Jr,qr],im=ps({defaultModifiers:nm}),sm=[Qr,no,Jr,qr,Yl,Gl,Xl,Wl,ql],io=ps({defaultModifiers:sm});const Jl=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ll,afterRead:Pl,afterWrite:$l,applyStyles:qr,arrow:Wl,auto:ds,basePlacements:In,beforeMain:Rl,beforeRead:Nl,beforeWrite:Ml,bottom:lt,clippingParents:Cl,computeStyles:Jr,createPopper:io,createPopperBase:em,createPopperLite:im,detectOverflow:yn,end:mn,eventListeners:Qr,flip:Gl,hide:ql,left:rt,main:kl,modifierPhases:Vl,offset:Yl,placements:Kr,popper:sn,popperGenerator:ps,popperOffsets:no,preventOverflow:Xl,read:Dl,reference:Ol,right:ht,start:Fe,top:st,variationPlacements:yr,viewport:zr,write:xl},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const oe=new Map,Ys={set(n,t,e){oe.has(n)||oe.set(n,new Map);const s=oe.get(n);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,e)},get(n,t){return oe.has(n)&&oe.get(n).get(t)||null},remove(n,t){if(!oe.has(n))return;const e=oe.get(n);e.delete(t),e.size===0&&oe.delete(n)}},rm=1e6,om=1e3,br="transitionend",Ql=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),am=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),cm=n=>{do n+=Math.floor(Math.random()*rm);while(document.getElementById(n));return n},lm=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const s=Number.parseFloat(t),r=Number.parseFloat(e);return!s&&!r?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*om)},Zl=n=>{n.dispatchEvent(new Event(br))},Ht=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),ge=n=>Ht(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Ql(n)):null,Sn=n=>{if(!Ht(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const s=n.closest("summary");if(s&&s.parentNode!==e||s===null)return!1}return t},me=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",th=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?th(n.parentNode):null},as=()=>{},_i=n=>{n.offsetHeight},eh=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Xs=[],hm=n=>{document.readyState==="loading"?(Xs.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Xs)t()}),Xs.push(n)):n()},mt=()=>document.documentElement.dir==="rtl",Et=n=>{hm(()=>{const t=eh();if(t){const e=n.NAME,s=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=s,n.jQueryInterface)}})},at=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,nh=(n,t,e=!0)=>{if(!e){at(n);return}const r=lm(t)+5;let a=!1;const l=({target:u})=>{u===t&&(a=!0,t.removeEventListener(br,l),at(n))};t.addEventListener(br,l),setTimeout(()=>{a||Zl(t)},r)},so=(n,t,e,s)=>{const r=n.length;let a=n.indexOf(t);return a===-1?!e&&s?n[r-1]:n[0]:(a+=e?1:-1,s&&(a=(a+r)%r),n[Math.max(0,Math.min(a,r-1))])},um=/[^.]*(?=\..*)\.|.*/,dm=/\..*/,fm=/::\d+$/,Js={};let Qa=1;const ih={mouseenter:"mouseover",mouseleave:"mouseout"},pm=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function sh(n,t){return t&&`${t}::${Qa++}`||n.uidEvent||Qa++}function rh(n){const t=sh(n);return n.uidEvent=t,Js[t]=Js[t]||{},Js[t]}function gm(n,t){return function e(s){return ro(s,{delegateTarget:n}),e.oneOff&&I.off(n,s.type,t),t.apply(n,[s])}}function mm(n,t,e){return function s(r){const a=n.querySelectorAll(t);for(let{target:l}=r;l&&l!==this;l=l.parentNode)for(const u of a)if(u===l)return ro(r,{delegateTarget:l}),s.oneOff&&I.off(n,r.type,t,e),e.apply(l,[r])}}function oh(n,t,e=null){return Object.values(n).find(s=>s.callable===t&&s.delegationSelector===e)}function ah(n,t,e){const s=typeof t=="string",r=s?e:t||e;let a=ch(n);return pm.has(a)||(a=n),[s,r,a]}function Za(n,t,e,s,r){if(typeof t!="string"||!n)return;let[a,l,u]=ah(t,e,s);t in ih&&(l=(R=>function(N){if(!N.relatedTarget||N.relatedTarget!==N.delegateTarget&&!N.delegateTarget.contains(N.relatedTarget))return R.call(this,N)})(l));const g=rh(n),y=g[u]||(g[u]={}),b=oh(y,l,a?e:null);if(b){b.oneOff=b.oneOff&&r;return}const S=sh(l,t.replace(um,"")),A=a?mm(n,e,l):gm(n,l);A.delegationSelector=a?e:null,A.callable=l,A.oneOff=r,A.uidEvent=S,y[S]=A,n.addEventListener(u,A,a)}function Ar(n,t,e,s,r){const a=oh(t[e],s,r);a&&(n.removeEventListener(e,a,!!r),delete t[e][a.uidEvent])}function _m(n,t,e,s){const r=t[e]||{};for(const[a,l]of Object.entries(r))a.includes(s)&&Ar(n,t,e,l.callable,l.delegationSelector)}function ch(n){return n=n.replace(dm,""),ih[n]||n}const I={on(n,t,e,s){Za(n,t,e,s,!1)},one(n,t,e,s){Za(n,t,e,s,!0)},off(n,t,e,s){if(typeof t!="string"||!n)return;const[r,a,l]=ah(t,e,s),u=l!==t,g=rh(n),y=g[l]||{},b=t.startsWith(".");if(typeof a<"u"){if(!Object.keys(y).length)return;Ar(n,g,l,a,r?e:null);return}if(b)for(const S of Object.keys(g))_m(n,g,S,t.slice(1));for(const[S,A]of Object.entries(y)){const O=S.replace(fm,"");(!u||t.includes(O))&&Ar(n,g,l,A.callable,A.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const s=eh(),r=ch(t),a=t!==r;let l=null,u=!0,g=!0,y=!1;a&&s&&(l=s.Event(t,e),s(n).trigger(l),u=!l.isPropagationStopped(),g=!l.isImmediatePropagationStopped(),y=l.isDefaultPrevented());const b=ro(new Event(t,{bubbles:u,cancelable:!0}),e);return y&&b.preventDefault(),g&&n.dispatchEvent(b),b.defaultPrevented&&l&&l.preventDefault(),b}};function ro(n,t={}){for(const[e,s]of Object.entries(t))try{n[e]=s}catch{Object.defineProperty(n,e,{configurable:!0,get(){return s}})}return n}function tc(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Qs(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Bt={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Qs(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Qs(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of e){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),t[r]=tc(n.dataset[s])}return t},getDataAttribute(n,t){return tc(n.getAttribute(`data-bs-${Qs(t)}`))}};class Ei{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const s=Ht(e)?Bt.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Ht(e)?Bt.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,r]of Object.entries(e)){const a=t[s],l=Ht(a)?"element":am(a);if(!new RegExp(r).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${l}" but expected type "${r}".`)}}}const Em="5.3.8";class At extends Ei{constructor(t,e){super(),t=ge(t),t&&(this._element=t,this._config=this._getConfig(e),Ys.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Ys.remove(this._element,this.constructor.DATA_KEY),I.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,s=!0){nh(t,e,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Ys.get(ge(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Em}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const Zs=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Ql(e)).join(","):null},P={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let s=n.parentNode.closest(t);for(;s;)e.push(s),s=s.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!me(e)&&Sn(e))},getSelectorFromElement(n){const t=Zs(n);return t&&P.findOne(t)?t:null},getElementFromSelector(n){const t=Zs(n);return t?P.findOne(t):null},getMultipleElementsFromSelector(n){const t=Zs(n);return t?P.find(t):[]}},gs=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,s=n.NAME;I.on(document,e,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),me(this))return;const a=P.getElementFromSelector(this)||this.closest(`.${s}`);n.getOrCreateInstance(a)[t]()})},vm="alert",ym="bs.alert",lh=`.${ym}`,Tm=`close${lh}`,wm=`closed${lh}`,bm="fade",Am="show";class ms extends At{static get NAME(){return vm}close(){if(I.trigger(this._element,Tm).defaultPrevented)return;this._element.classList.remove(Am);const e=this._element.classList.contains(bm);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),I.trigger(this._element,wm),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=ms.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}gs(ms,"close");Et(ms);const Im="button",Sm="bs.button",Cm=`.${Sm}`,Om=".data-api",Nm="active",ec='[data-bs-toggle="button"]',Dm=`click${Cm}${Om}`;class _s extends At{static get NAME(){return Im}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Nm))}static jQueryInterface(t){return this.each(function(){const e=_s.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}I.on(document,Dm,ec,n=>{n.preventDefault();const t=n.target.closest(ec);_s.getOrCreateInstance(t).toggle()});Et(_s);const Pm="swipe",Cn=".bs.swipe",Rm=`touchstart${Cn}`,km=`touchmove${Cn}`,Lm=`touchend${Cn}`,Mm=`pointerdown${Cn}`,xm=`pointerup${Cn}`,$m="touch",Vm="pen",Um="pointer-event",Fm=40,jm={endCallback:null,leftCallback:null,rightCallback:null},Hm={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class cs extends Ei{constructor(t,e){super(),this._element=t,!(!t||!cs.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return jm}static get DefaultType(){return Hm}static get NAME(){return Pm}dispose(){I.off(this._element,Cn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),at(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=Fm)return;const e=t/this._deltaX;this._deltaX=0,e&&at(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(I.on(this._element,Mm,t=>this._start(t)),I.on(this._element,xm,t=>this._end(t)),this._element.classList.add(Um)):(I.on(this._element,Rm,t=>this._start(t)),I.on(this._element,km,t=>this._move(t)),I.on(this._element,Lm,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===Vm||t.pointerType===$m)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Bm="carousel",Wm="bs.carousel",ye=`.${Wm}`,hh=".data-api",zm="ArrowLeft",Km="ArrowRight",Gm=500,Yn="next",en="prev",rn="left",Yi="right",qm=`slide${ye}`,tr=`slid${ye}`,Ym=`keydown${ye}`,Xm=`mouseenter${ye}`,Jm=`mouseleave${ye}`,Qm=`dragstart${ye}`,Zm=`load${ye}${hh}`,t_=`click${ye}${hh}`,uh="carousel",$i="active",e_="slide",n_="carousel-item-end",i_="carousel-item-start",s_="carousel-item-next",r_="carousel-item-prev",dh=".active",fh=".carousel-item",o_=dh+fh,a_=".carousel-item img",c_=".carousel-indicators",l_="[data-bs-slide], [data-bs-slide-to]",h_='[data-bs-ride="carousel"]',u_={[zm]:Yi,[Km]:rn},d_={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},f_={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class vi extends At{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=P.findOne(c_,this._element),this._addEventListeners(),this._config.ride===uh&&this.cycle()}static get Default(){return d_}static get DefaultType(){return f_}static get NAME(){return Bm}next(){this._slide(Yn)}nextWhenVisible(){!document.hidden&&Sn(this._element)&&this.next()}prev(){this._slide(en)}pause(){this._isSliding&&Zl(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){I.one(this._element,tr,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){I.one(this._element,tr,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const r=t>s?Yn:en;this._slide(r,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&I.on(this._element,Ym,t=>this._keydown(t)),this._config.pause==="hover"&&(I.on(this._element,Xm,()=>this.pause()),I.on(this._element,Jm,()=>this._maybeEnableCycle())),this._config.touch&&cs.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of P.find(a_,this._element))I.on(s,Qm,r=>r.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(rn)),rightCallback:()=>this._slide(this._directionToOrder(Yi)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Gm+this._config.interval))}};this._swipeHelper=new cs(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=u_[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=P.findOne(dh,this._indicatorsElement);e.classList.remove($i),e.removeAttribute("aria-current");const s=P.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add($i),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const s=this._getActive(),r=t===Yn,a=e||so(this._getItems(),s,r,this._config.wrap);if(a===s)return;const l=this._getItemIndex(a),u=O=>I.trigger(this._element,O,{relatedTarget:a,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:l});if(u(qm).defaultPrevented||!s||!a)return;const y=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=a;const b=r?i_:n_,S=r?s_:r_;a.classList.add(S),_i(a),s.classList.add(b),a.classList.add(b);const A=()=>{a.classList.remove(b,S),a.classList.add($i),s.classList.remove($i,S,b),this._isSliding=!1,u(tr)};this._queueCallback(A,s,this._isAnimated()),y&&this.cycle()}_isAnimated(){return this._element.classList.contains(e_)}_getActive(){return P.findOne(o_,this._element)}_getItems(){return P.find(fh,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return mt()?t===rn?en:Yn:t===rn?Yn:en}_orderToDirection(t){return mt()?t===en?rn:Yi:t===en?Yi:rn}static jQueryInterface(t){return this.each(function(){const e=vi.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}I.on(document,t_,l_,function(n){const t=P.getElementFromSelector(this);if(!t||!t.classList.contains(uh))return;n.preventDefault();const e=vi.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){e.to(s),e._maybeEnableCycle();return}if(Bt.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});I.on(window,Zm,()=>{const n=P.find(h_);for(const t of n)vi.getOrCreateInstance(t)});Et(vi);const p_="collapse",g_="bs.collapse",yi=`.${g_}`,m_=".data-api",__=`show${yi}`,E_=`shown${yi}`,v_=`hide${yi}`,y_=`hidden${yi}`,T_=`click${yi}${m_}`,er="show",cn="collapse",Vi="collapsing",w_="collapsed",b_=`:scope .${cn} .${cn}`,A_="collapse-horizontal",I_="width",S_="height",C_=".collapse.show, .collapse.collapsing",Ir='[data-bs-toggle="collapse"]',O_={parent:null,toggle:!0},N_={parent:"(null|element)",toggle:"boolean"};class ai extends At{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const s=P.find(Ir);for(const r of s){const a=P.getSelectorFromElement(r),l=P.find(a).filter(u=>u===this._element);a!==null&&l.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return O_}static get DefaultType(){return N_}static get NAME(){return p_}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(C_).filter(u=>u!==this._element).map(u=>ai.getOrCreateInstance(u,{toggle:!1}))),t.length&&t[0]._isTransitioning||I.trigger(this._element,__).defaultPrevented)return;for(const u of t)u.hide();const s=this._getDimension();this._element.classList.remove(cn),this._element.classList.add(Vi),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Vi),this._element.classList.add(cn,er),this._element.style[s]="",I.trigger(this._element,E_)},l=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||I.trigger(this._element,v_).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,_i(this._element),this._element.classList.add(Vi),this._element.classList.remove(cn,er);for(const r of this._triggerArray){const a=P.getElementFromSelector(r);a&&!this._isShown(a)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Vi),this._element.classList.add(cn),I.trigger(this._element,y_)};this._element.style[e]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(er)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=ge(t.parent),t}_getDimension(){return this._element.classList.contains(A_)?I_:S_}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Ir);for(const e of t){const s=P.getElementFromSelector(e);s&&this._addAriaAndCollapsedClass([e],this._isShown(s))}}_getFirstLevelChildren(t){const e=P.find(b_,this._config.parent);return P.find(t,this._config.parent).filter(s=>!e.includes(s))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle(w_,!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const s=ai.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}I.on(document,T_,Ir,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of P.getMultipleElementsFromSelector(this))ai.getOrCreateInstance(t,{toggle:!1}).toggle()});Et(ai);const nc="dropdown",D_="bs.dropdown",He=`.${D_}`,oo=".data-api",P_="Escape",ic="Tab",R_="ArrowUp",sc="ArrowDown",k_=2,L_=`hide${He}`,M_=`hidden${He}`,x_=`show${He}`,$_=`shown${He}`,ph=`click${He}${oo}`,gh=`keydown${He}${oo}`,V_=`keyup${He}${oo}`,on="show",U_="dropup",F_="dropend",j_="dropstart",H_="dropup-center",B_="dropdown-center",De='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',W_=`${De}.${on}`,Xi=".dropdown-menu",z_=".navbar",K_=".navbar-nav",G_=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",q_=mt()?"top-end":"top-start",Y_=mt()?"top-start":"top-end",X_=mt()?"bottom-end":"bottom-start",J_=mt()?"bottom-start":"bottom-end",Q_=mt()?"left-start":"right-start",Z_=mt()?"right-start":"left-start",tE="top",eE="bottom",nE={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},iE={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Lt extends At{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=P.next(this._element,Xi)[0]||P.prev(this._element,Xi)[0]||P.findOne(Xi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return nE}static get DefaultType(){return iE}static get NAME(){return nc}toggle(){return this._isShown()?this.hide():this.show()}show(){if(me(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!I.trigger(this._element,x_,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(K_))for(const s of[].concat(...document.body.children))I.on(s,"mouseover",as);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(on),this._element.classList.add(on),I.trigger(this._element,$_,t)}}hide(){if(me(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!I.trigger(this._element,L_,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))I.off(s,"mouseover",as);this._popper&&this._popper.destroy(),this._menu.classList.remove(on),this._element.classList.remove(on),this._element.setAttribute("aria-expanded","false"),Bt.removeDataAttribute(this._menu,"popper"),I.trigger(this._element,M_,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Ht(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${nc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof Jl>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Ht(this._config.reference)?t=ge(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=io(t,this._menu,e)}_isShown(){return this._menu.classList.contains(on)}_getPlacement(){const t=this._parent;if(t.classList.contains(F_))return Q_;if(t.classList.contains(j_))return Z_;if(t.classList.contains(H_))return tE;if(t.classList.contains(B_))return eE;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(U_)?e?Y_:q_:e?J_:X_}_detectNavbar(){return this._element.closest(z_)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Bt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...at(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const s=P.find(G_,this._menu).filter(r=>Sn(r));s.length&&so(s,e,t===sc,!s.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Lt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===k_||t.type==="keyup"&&t.key!==ic)return;const e=P.find(W_);for(const s of e){const r=Lt.getInstance(s);if(!r||r._config.autoClose===!1)continue;const a=t.composedPath(),l=a.includes(r._menu);if(a.includes(r._element)||r._config.autoClose==="inside"&&!l||r._config.autoClose==="outside"&&l||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===ic||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const u={relatedTarget:r._element};t.type==="click"&&(u.clickEvent=t),r._completeHide(u)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),s=t.key===P_,r=[R_,sc].includes(t.key);if(!r&&!s||e&&!s)return;t.preventDefault();const a=this.matches(De)?this:P.prev(this,De)[0]||P.next(this,De)[0]||P.findOne(De,t.delegateTarget.parentNode),l=Lt.getOrCreateInstance(a);if(r){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),a.focus())}}I.on(document,gh,De,Lt.dataApiKeydownHandler);I.on(document,gh,Xi,Lt.dataApiKeydownHandler);I.on(document,ph,Lt.clearMenus);I.on(document,V_,Lt.clearMenus);I.on(document,ph,De,function(n){n.preventDefault(),Lt.getOrCreateInstance(this).toggle()});Et(Lt);const mh="backdrop",sE="fade",rc="show",oc=`mousedown.bs.${mh}`,rE={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},oE={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class _h extends Ei{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return rE}static get DefaultType(){return oE}static get NAME(){return mh}show(t){if(!this._config.isVisible){at(t);return}this._append();const e=this._getElement();this._config.isAnimated&&_i(e),e.classList.add(rc),this._emulateAnimation(()=>{at(t)})}hide(t){if(!this._config.isVisible){at(t);return}this._getElement().classList.remove(rc),this._emulateAnimation(()=>{this.dispose(),at(t)})}dispose(){this._isAppended&&(I.off(this._element,oc),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(sE),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=ge(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),I.on(t,oc,()=>{at(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){nh(t,this._getElement(),this._config.isAnimated)}}const aE="focustrap",cE="bs.focustrap",ls=`.${cE}`,lE=`focusin${ls}`,hE=`keydown.tab${ls}`,uE="Tab",dE="forward",ac="backward",fE={autofocus:!0,trapElement:null},pE={autofocus:"boolean",trapElement:"element"};class Eh extends Ei{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return fE}static get DefaultType(){return pE}static get NAME(){return aE}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),I.off(document,ls),I.on(document,lE,t=>this._handleFocusin(t)),I.on(document,hE,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,I.off(document,ls))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const s=P.focusableChildren(e);s.length===0?e.focus():this._lastTabNavDirection===ac?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===uE&&(this._lastTabNavDirection=t.shiftKey?ac:dE)}}const cc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",lc=".sticky-top",Ui="padding-right",hc="margin-right";class Sr{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ui,e=>e+t),this._setElementAttributes(cc,Ui,e=>e+t),this._setElementAttributes(lc,hc,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ui),this._resetElementAttributes(cc,Ui),this._resetElementAttributes(lc,hc)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const r=this.getWidth(),a=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+r)return;this._saveInitialAttribute(l,e);const u=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${s(Number.parseFloat(u))}px`)};this._applyManipulationCallback(t,a)}_saveInitialAttribute(t,e){const s=t.style.getPropertyValue(e);s&&Bt.setDataAttribute(t,e,s)}_resetElementAttributes(t,e){const s=r=>{const a=Bt.getDataAttribute(r,e);if(a===null){r.style.removeProperty(e);return}Bt.removeDataAttribute(r,e),r.style.setProperty(e,a)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,e){if(Ht(t)){e(t);return}for(const s of P.find(t,this._element))e(s)}}const gE="modal",mE="bs.modal",_t=`.${mE}`,_E=".data-api",EE="Escape",vE=`hide${_t}`,yE=`hidePrevented${_t}`,vh=`hidden${_t}`,yh=`show${_t}`,TE=`shown${_t}`,wE=`resize${_t}`,bE=`click.dismiss${_t}`,AE=`mousedown.dismiss${_t}`,IE=`keydown.dismiss${_t}`,SE=`click${_t}${_E}`,uc="modal-open",CE="fade",dc="show",nr="modal-static",OE=".modal.show",NE=".modal-dialog",DE=".modal-body",PE='[data-bs-toggle="modal"]',RE={backdrop:!0,focus:!0,keyboard:!0},kE={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Tn extends At{constructor(t,e){super(t,e),this._dialog=P.findOne(NE,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Sr,this._addEventListeners()}static get Default(){return RE}static get DefaultType(){return kE}static get NAME(){return gE}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||I.trigger(this._element,yh,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(uc),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||I.trigger(this._element,vE).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(dc),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){I.off(window,_t),I.off(this._dialog,_t),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new _h({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Eh({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=P.findOne(DE,this._dialog);e&&(e.scrollTop=0),_i(this._element),this._element.classList.add(dc);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,I.trigger(this._element,TE,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){I.on(this._element,IE,t=>{if(t.key===EE){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),I.on(window,wE,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),I.on(this._element,AE,t=>{I.one(this._element,bE,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(uc),this._resetAdjustments(),this._scrollBar.reset(),I.trigger(this._element,vh)})}_isAnimated(){return this._element.classList.contains(CE)}_triggerBackdropTransition(){if(I.trigger(this._element,yE).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(nr)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(nr),this._queueCallback(()=>{this._element.classList.remove(nr),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),s=e>0;if(s&&!t){const r=mt()?"paddingLeft":"paddingRight";this._element.style[r]=`${e}px`}if(!s&&t){const r=mt()?"paddingRight":"paddingLeft";this._element.style[r]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const s=Tn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](e)}})}}I.on(document,SE,PE,function(n){const t=P.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),I.one(t,yh,r=>{r.defaultPrevented||I.one(t,vh,()=>{Sn(this)&&this.focus()})});const e=P.findOne(OE);e&&Tn.getInstance(e).hide(),Tn.getOrCreateInstance(t).toggle(this)});gs(Tn);Et(Tn);const LE="offcanvas",ME="bs.offcanvas",Yt=`.${ME}`,Th=".data-api",xE=`load${Yt}${Th}`,$E="Escape",fc="show",pc="showing",gc="hiding",VE="offcanvas-backdrop",wh=".offcanvas.show",UE=`show${Yt}`,FE=`shown${Yt}`,jE=`hide${Yt}`,mc=`hidePrevented${Yt}`,bh=`hidden${Yt}`,HE=`resize${Yt}`,BE=`click${Yt}${Th}`,WE=`keydown.dismiss${Yt}`,zE='[data-bs-toggle="offcanvas"]',KE={backdrop:!0,keyboard:!0,scroll:!1},GE={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class _e extends At{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return KE}static get DefaultType(){return GE}static get NAME(){return LE}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||I.trigger(this._element,UE,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Sr().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(pc);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(fc),this._element.classList.remove(pc),I.trigger(this._element,FE,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||I.trigger(this._element,jE).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(gc),this._backdrop.hide();const e=()=>{this._element.classList.remove(fc,gc),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Sr().reset(),I.trigger(this._element,bh)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){I.trigger(this._element,mc);return}this.hide()},e=!!this._config.backdrop;return new _h({className:VE,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Eh({trapElement:this._element})}_addEventListeners(){I.on(this._element,WE,t=>{if(t.key===$E){if(this._config.keyboard){this.hide();return}I.trigger(this._element,mc)}})}static jQueryInterface(t){return this.each(function(){const e=_e.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}I.on(document,BE,zE,function(n){const t=P.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),me(this))return;I.one(t,bh,()=>{Sn(this)&&this.focus()});const e=P.findOne(wh);e&&e!==t&&_e.getInstance(e).hide(),_e.getOrCreateInstance(t).toggle(this)});I.on(window,xE,()=>{for(const n of P.find(wh))_e.getOrCreateInstance(n).show()});I.on(window,HE,()=>{for(const n of P.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&_e.getOrCreateInstance(n).hide()});gs(_e);Et(_e);const qE=/^aria-[\w-]*$/i,Ah={"*":["class","dir","id","lang","role",qE],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},YE=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),XE=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,JE=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?YE.has(e)?!!XE.test(n.nodeValue):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(e))};function QE(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const r=new window.DOMParser().parseFromString(n,"text/html"),a=[].concat(...r.body.querySelectorAll("*"));for(const l of a){const u=l.nodeName.toLowerCase();if(!Object.keys(t).includes(u)){l.remove();continue}const g=[].concat(...l.attributes),y=[].concat(t["*"]||[],t[u]||[]);for(const b of g)JE(b,y)||l.removeAttribute(b.nodeName)}return r.body.innerHTML}const ZE="TemplateFactory",tv={allowList:Ah,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},ev={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},nv={entry:"(string|element|function|null)",selector:"(string|element)"};class iv extends Ei{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return tv}static get DefaultType(){return ev}static get NAME(){return ZE}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,a]of Object.entries(this._config.content))this._setContent(t,a,r);const e=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&e.classList.add(...s.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,s]of Object.entries(t))super._typeCheckConfig({selector:e,entry:s},nv)}_setContent(t,e,s){const r=P.findOne(s,t);if(r){if(e=this._resolvePossibleFunction(e),!e){r.remove();return}if(Ht(e)){this._putElementInTemplate(ge(e),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(e);return}r.textContent=e}}_maybeSanitize(t){return this._config.sanitize?QE(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return at(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const sv="tooltip",rv=new Set(["sanitize","allowList","sanitizeFn"]),ir="fade",ov="modal",Fi="show",av=".tooltip-inner",_c=`.${ov}`,Ec="hide.bs.modal",Xn="hover",sr="focus",rr="click",cv="manual",lv="hide",hv="hidden",uv="show",dv="shown",fv="inserted",pv="click",gv="focusin",mv="focusout",_v="mouseenter",Ev="mouseleave",vv={AUTO:"auto",TOP:"top",RIGHT:mt()?"left":"right",BOTTOM:"bottom",LEFT:mt()?"right":"left"},yv={allowList:Ah,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Tv={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class On extends At{constructor(t,e){if(typeof Jl>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return yv}static get DefaultType(){return Tv}static get NAME(){return sv}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),I.off(this._element.closest(_c),Ec,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=I.trigger(this._element,this.constructor.eventName(uv)),s=(th(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:a}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),I.trigger(this._element,this.constructor.eventName(fv))),this._popper=this._createPopper(r),r.classList.add(Fi),"ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))I.on(u,"mouseover",as);const l=()=>{I.trigger(this._element,this.constructor.eventName(dv)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||I.trigger(this._element,this.constructor.eventName(lv)).defaultPrevented)return;if(this._getTipElement().classList.remove(Fi),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))I.off(r,"mouseover",as);this._activeTrigger[rr]=!1,this._activeTrigger[sr]=!1,this._activeTrigger[Xn]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),I.trigger(this._element,this.constructor.eventName(hv)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ir,Fi),e.classList.add(`bs-${this.constructor.NAME}-auto`);const s=cm(this.constructor.NAME).toString();return e.setAttribute("id",s),this._isAnimated()&&e.classList.add(ir),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new iv({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[av]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ir)}_isShown(){return this.tip&&this.tip.classList.contains(Fi)}_createPopper(t){const e=at(this._config.placement,[this,t,this._element]),s=vv[e.toUpperCase()];return io(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return at(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...e,...at(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")I.on(this._element,this.constructor.eventName(pv),this._config.selector,s=>{const r=this._initializeOnDelegatedTarget(s);r._activeTrigger[rr]=!(r._isShown()&&r._activeTrigger[rr]),r.toggle()});else if(e!==cv){const s=e===Xn?this.constructor.eventName(_v):this.constructor.eventName(gv),r=e===Xn?this.constructor.eventName(Ev):this.constructor.eventName(mv);I.on(this._element,s,this._config.selector,a=>{const l=this._initializeOnDelegatedTarget(a);l._activeTrigger[a.type==="focusin"?sr:Xn]=!0,l._enter()}),I.on(this._element,r,this._config.selector,a=>{const l=this._initializeOnDelegatedTarget(a);l._activeTrigger[a.type==="focusout"?sr:Xn]=l._element.contains(a.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},I.on(this._element.closest(_c),Ec,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Bt.getDataAttributes(this._element);for(const s of Object.keys(e))rv.has(s)&&delete e[s];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:ge(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,s]of Object.entries(this._config))this.constructor.Default[e]!==s&&(t[e]=s);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=On.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Et(On);const wv="popover",bv=".popover-header",Av=".popover-body",Iv={...On.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Sv={...On.DefaultType,content:"(null|string|element|function)"};class ao extends On{static get Default(){return Iv}static get DefaultType(){return Sv}static get NAME(){return wv}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[bv]:this._getTitle(),[Av]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=ao.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Et(ao);const Cv="scrollspy",Ov="bs.scrollspy",co=`.${Ov}`,Nv=".data-api",Dv=`activate${co}`,vc=`click${co}`,Pv=`load${co}${Nv}`,Rv="dropdown-item",nn="active",kv='[data-bs-spy="scroll"]',or="[href]",Lv=".nav, .list-group",yc=".nav-link",Mv=".nav-item",xv=".list-group-item",$v=`${yc}, ${Mv} > ${yc}, ${xv}`,Vv=".dropdown",Uv=".dropdown-toggle",Fv={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},jv={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Es extends At{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Fv}static get DefaultType(){return jv}static get NAME(){return Cv}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=ge(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(I.off(this._config.target,vc),I.on(this._config.target,vc,or,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const s=this._rootElement||window,r=e.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),s=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},r=(this._rootElement||document.documentElement).scrollTop,a=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const u=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(a&&u){if(s(l),!r)return;continue}!a&&!u&&s(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=P.find(or,this._config.target);for(const e of t){if(!e.hash||me(e))continue;const s=P.findOne(decodeURI(e.hash),this._element);Sn(s)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(nn),this._activateParents(t),I.trigger(this._element,Dv,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(Rv)){P.findOne(Uv,t.closest(Vv)).classList.add(nn);return}for(const e of P.parents(t,Lv))for(const s of P.prev(e,$v))s.classList.add(nn)}_clearActiveClass(t){t.classList.remove(nn);const e=P.find(`${or}.${nn}`,t);for(const s of e)s.classList.remove(nn)}static jQueryInterface(t){return this.each(function(){const e=Es.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}I.on(window,Pv,()=>{for(const n of P.find(kv))Es.getOrCreateInstance(n)});Et(Es);const Hv="tab",Bv="bs.tab",Be=`.${Bv}`,Wv=`hide${Be}`,zv=`hidden${Be}`,Kv=`show${Be}`,Gv=`shown${Be}`,qv=`click${Be}`,Yv=`keydown${Be}`,Xv=`load${Be}`,Jv="ArrowLeft",Tc="ArrowRight",Qv="ArrowUp",wc="ArrowDown",ar="Home",bc="End",Pe="active",Ac="fade",cr="show",Zv="dropdown",Ih=".dropdown-toggle",ty=".dropdown-menu",lr=`:not(${Ih})`,ey='.list-group, .nav, [role="tablist"]',ny=".nav-item, .list-group-item",iy=`.nav-link${lr}, .list-group-item${lr}, [role="tab"]${lr}`,Sh='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',hr=`${iy}, ${Sh}`,sy=`.${Pe}[data-bs-toggle="tab"], .${Pe}[data-bs-toggle="pill"], .${Pe}[data-bs-toggle="list"]`;class wn extends At{constructor(t){super(t),this._parent=this._element.closest(ey),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),I.on(this._element,Yv,e=>this._keydown(e)))}static get NAME(){return Hv}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),s=e?I.trigger(e,Wv,{relatedTarget:t}):null;I.trigger(t,Kv,{relatedTarget:e}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Pe),this._activate(P.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(cr);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),I.trigger(t,Gv,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(Ac))}_deactivate(t,e){if(!t)return;t.classList.remove(Pe),t.blur(),this._deactivate(P.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(cr);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),I.trigger(t,zv,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(Ac))}_keydown(t){if(![Jv,Tc,Qv,wc,ar,bc].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(r=>!me(r));let s;if([ar,bc].includes(t.key))s=e[t.key===ar?0:e.length-1];else{const r=[Tc,wc].includes(t.key);s=so(e,t.target,r,!0)}s&&(s.focus({preventScroll:!0}),wn.getOrCreateInstance(s).show())}_getChildren(){return P.find(hr,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const s of e)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",e),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=P.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const s=this._getOuterElement(t);if(!s.classList.contains(Zv))return;const r=(a,l)=>{const u=P.findOne(a,s);u&&u.classList.toggle(l,e)};r(Ih,Pe),r(ty,cr),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,s){t.hasAttribute(e)||t.setAttribute(e,s)}_elemIsActive(t){return t.classList.contains(Pe)}_getInnerElement(t){return t.matches(hr)?t:P.findOne(hr,t)}_getOuterElement(t){return t.closest(ny)||t}static jQueryInterface(t){return this.each(function(){const e=wn.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}I.on(document,qv,Sh,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!me(this)&&wn.getOrCreateInstance(this).show()});I.on(window,Xv,()=>{for(const n of P.find(sy))wn.getOrCreateInstance(n)});Et(wn);const ry="toast",oy="bs.toast",Te=`.${oy}`,ay=`mouseover${Te}`,cy=`mouseout${Te}`,ly=`focusin${Te}`,hy=`focusout${Te}`,uy=`hide${Te}`,dy=`hidden${Te}`,fy=`show${Te}`,py=`shown${Te}`,gy="fade",Ic="hide",ji="show",Hi="showing",my={animation:"boolean",autohide:"boolean",delay:"number"},_y={animation:!0,autohide:!0,delay:5e3};class vs extends At{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return _y}static get DefaultType(){return my}static get NAME(){return ry}show(){if(I.trigger(this._element,fy).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(gy);const e=()=>{this._element.classList.remove(Hi),I.trigger(this._element,py),this._maybeScheduleHide()};this._element.classList.remove(Ic),_i(this._element),this._element.classList.add(ji,Hi),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||I.trigger(this._element,uy).defaultPrevented)return;const e=()=>{this._element.classList.add(Ic),this._element.classList.remove(Hi,ji),I.trigger(this._element,dy)};this._element.classList.add(Hi),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ji),super.dispose()}isShown(){return this._element.classList.contains(ji)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){I.on(this._element,ay,t=>this._onInteraction(t,!0)),I.on(this._element,cy,t=>this._onInteraction(t,!1)),I.on(this._element,ly,t=>this._onInteraction(t,!0)),I.on(this._element,hy,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=vs.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}gs(vs);Et(vs);function Ey(){}document.addEventListener("DOMContentLoaded",Ey);
