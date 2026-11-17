var Gi=Object.defineProperty;var Vi=Object.getOwnPropertyDescriptor;var l=(r,i,t,e)=>{for(var s=e>1?void 0:e?Vi(i,t):i,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(e?o(i,t,s):o(s))||s);return e&&s&&Gi(i,t,s),s};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t=globalThis,St=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),be=new WeakMap,kt=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o,t=this.t;if(St&&i===void 0){let e=t!==void 0&&t.length===1;e&&(i=be.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&be.set(t,i))}return i}toString(){return this.cssText}},b=r=>new kt(typeof r=="string"?r:r+"",void 0,ye);var xe=(r,i)=>{if(St)r.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of i){let e=document.createElement("style"),s=_t.litNonce;s!==void 0&&e.setAttribute("nonce",s),e.textContent=t.cssText,r.appendChild(e)}},Kt=St?r=>r:r=>r instanceof CSSStyleSheet?(i=>{let t="";for(let e of i.cssRules)t+=e.cssText;return b(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var{is:Yi,defineProperty:Xi,getOwnPropertyDescriptor:Zi,getOwnPropertyNames:Ji,getOwnPropertySymbols:Qi,getPrototypeOf:Li}=Object,At=globalThis,we=At.trustedTypes,ts=we?we.emptyScript:"",es=At.reactiveElementPolyfillSupport,ut=(r,i)=>r,mt={toAttribute(r,i){switch(i){case Boolean:r=r?ts:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,i){let t=r;switch(i){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ct=(r,i)=>!Yi(r,i),$e={attribute:!0,type:String,converter:mt,reflect:!1,useDefault:!1,hasChanged:Ct};Symbol.metadata??=Symbol("metadata"),At.litPropertyMetadata??=new WeakMap;var q=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,t=$e){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(i,t),!t.noAccessor){let e=Symbol(),s=this.getPropertyDescriptor(i,e,t);s!==void 0&&Xi(this.prototype,i,s)}}static getPropertyDescriptor(i,t,e){let{get:s,set:n}=Zi(this.prototype,i)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){let c=s?.call(this);n?.call(this,o),this.requestUpdate(i,c,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??$e}static _$Ei(){if(this.hasOwnProperty(ut("elementProperties")))return;let i=Li(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ut("properties"))){let t=this.properties,e=[...Ji(t),...Qi(t)];for(let s of e)this.createProperty(s,t[s])}let i=this[Symbol.metadata];if(i!==null){let t=litPropertyMetadata.get(i);if(t!==void 0)for(let[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(let[t,e]of this.elementProperties){let s=this._$Eu(t,e);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){let t=[];if(Array.isArray(i)){let e=new Set(i.flat(1/0).reverse());for(let s of e)t.unshift(Kt(s))}else i!==void 0&&t.push(Kt(i));return t}static _$Eu(i,t){let e=t.attribute;return e===!1?void 0:typeof e=="string"?e:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(i=>i(this))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){let i=new Map,t=this.constructor.elementProperties;for(let e of t.keys())this.hasOwnProperty(e)&&(i.set(e,this[e]),delete this[e]);i.size>0&&(this._$Ep=i)}createRenderRoot(){let i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(i=>i.hostConnected?.())}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach(i=>i.hostDisconnected?.())}attributeChangedCallback(i,t,e){this._$AK(i,e)}_$ET(i,t){let e=this.constructor.elementProperties.get(i),s=this.constructor._$Eu(i,e);if(s!==void 0&&e.reflect===!0){let n=(e.converter?.toAttribute!==void 0?e.converter:mt).toAttribute(t,e.type);this._$Em=i,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(i,t){let e=this.constructor,s=e._$Eh.get(i);if(s!==void 0&&this._$Em!==s){let n=e.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:mt;this._$Em=s;let c=o.fromAttribute(t,n.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(i,t,e,s=!1,n){if(i!==void 0){let o=this.constructor;if(s===!1&&(n=this[i]),e??=o.getPropertyOptions(i),!((e.hasChanged??Ct)(n,t)||e.useDefault&&e.reflect&&n===this._$Ej?.get(i)&&!this.hasAttribute(o._$Eu(i,e))))return;this.C(i,t,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,t,{useDefault:e,reflect:s,wrapped:n},o){e&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,o??t??this[i]),n!==!0||o!==void 0)||(this._$AL.has(i)||(this.hasUpdated||e||(t=void 0),this._$AL.set(i,t)),s===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[s,n]of e){let{wrapped:o}=n,c=this[s];o!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,n,c)}}let i=!1,t=this._$AL;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(e){throw i=!1,this._$EM(),e}i&&this._$AE(t)}willUpdate(i){}_$AE(i){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(i){}firstUpdated(i){}};q.elementStyles=[],q.shadowRootOptions={mode:"open"},q[ut("elementProperties")]=new Map,q[ut("finalized")]=new Map,es?.({ReactiveElement:q}),(At.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt=globalThis,_e=r=>r,Mt=Qt.trustedTypes,ke=Mt?Mt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Te="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+B,is=`<${Ee}>`,tt=document,ft=()=>tt.createComment(""),vt=r=>r===null||typeof r!="object"&&typeof r!="function",Lt=Array.isArray,ss=r=>Lt(r)||typeof r?.[Symbol.iterator]=="function",Gt=`[ 	
\f\r]`,gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ae=/>/g,Q=RegExp(`>|${Gt}(?:([^\\s"'>=/]+)(${Gt}*=${Gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ce=/'/g,Me=/"/g,Re=/^(?:script|style|textarea|title)$/i,te=r=>(i,...t)=>({_$litType$:r,strings:i,values:t}),a=te(1),x=te(2),$r=te(3),et=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),He=new WeakMap,L=tt.createTreeWalker(tt,129);function Pe(r,i){if(!Lt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(i):i}var rs=(r,i)=>{let t=r.length-1,e=[],s,n=i===2?"<svg>":i===3?"<math>":"",o=gt;for(let c=0;c<t;c++){let d=r[c],h,g,f=-1,w=0;for(;w<d.length&&(o.lastIndex=w,g=o.exec(d),g!==null);)w=o.lastIndex,o===gt?g[1]==="!--"?o=Se:g[1]!==void 0?o=Ae:g[2]!==void 0?(Re.test(g[2])&&(s=RegExp("</"+g[2],"g")),o=Q):g[3]!==void 0&&(o=Q):o===Q?g[0]===">"?(o=s??gt,f=-1):g[1]===void 0?f=-2:(f=o.lastIndex-g[2].length,h=g[1],o=g[3]===void 0?Q:g[3]==='"'?Me:Ce):o===Me||o===Ce?o=Q:o===Se||o===Ae?o=gt:(o=Q,s=void 0);let $=o===Q&&r[c+1].startsWith("/>")?" ":"";n+=o===gt?d+is:f>=0?(e.push(h),d.slice(0,f)+Te+d.slice(f)+B+$):d+B+(f===-2?c:$)}return[Pe(r,n+(r[t]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),e]},bt=class r{constructor({strings:i,_$litType$:t},e){let s;this.parts=[];let n=0,o=0,c=i.length-1,d=this.parts,[h,g]=rs(i,t);if(this.el=r.createElement(h,e),L.currentNode=this.el.content,t===2||t===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=L.nextNode())!==null&&d.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let f of s.getAttributeNames())if(f.endsWith(Te)){let w=g[o++],$=s.getAttribute(f).split(B),H=/([.?@])?(.*)/.exec(w);d.push({type:1,index:n,name:H[2],strings:$,ctor:H[1]==="."?Yt:H[1]==="?"?Xt:H[1]==="@"?Zt:nt}),s.removeAttribute(f)}else f.startsWith(B)&&(d.push({type:6,index:n}),s.removeAttribute(f));if(Re.test(s.tagName)){let f=s.textContent.split(B),w=f.length-1;if(w>0){s.textContent=Mt?Mt.emptyScript:"";for(let $=0;$<w;$++)s.append(f[$],ft()),L.nextNode(),d.push({type:2,index:++n});s.append(f[w],ft())}}}else if(s.nodeType===8)if(s.data===Ee)d.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(B,f+1))!==-1;)d.push({type:7,index:n}),f+=B.length-1}n++}}static createElement(i,t){let e=tt.createElement("template");return e.innerHTML=i,e}};function rt(r,i,t=r,e){if(i===et)return i;let s=e!==void 0?t._$Co?.[e]:t._$Cl,n=vt(i)?void 0:i._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,e)),e!==void 0?(t._$Co??=[])[e]=s:t._$Cl=s),s!==void 0&&(i=rt(r,s._$AS(r,i.values),s,e)),i}var Vt=class{constructor(i,t){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){let{el:{content:t},parts:e}=this._$AD,s=(i?.creationScope??tt).importNode(t,!0);L.currentNode=s;let n=L.nextNode(),o=0,c=0,d=e[0];for(;d!==void 0;){if(o===d.index){let h;d.type===2?h=new yt(n,n.nextSibling,this,i):d.type===1?h=new d.ctor(n,d.name,d.strings,this,i):d.type===6&&(h=new Jt(n,this,i)),this._$AV.push(h),d=e[++c]}o!==d?.index&&(n=L.nextNode(),o++)}return L.currentNode=tt,s}p(i){let t=0;for(let e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(i,e,t),t+=e.strings.length-2):e._$AI(i[t])),t++}},yt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,t,e,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=i,this._$AB=t,this._$AM=e,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode,t=this._$AM;return t!==void 0&&i?.nodeType===11&&(i=t.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,t=this){i=rt(this,i,t),vt(i)?i===p||i==null||i===""?(this._$AH!==p&&this._$AR(),this._$AH=p):i!==this._$AH&&i!==et&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):ss(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==p&&vt(this._$AH)?this._$AA.nextSibling.data=i:this.T(tt.createTextNode(i)),this._$AH=i}$(i){let{values:t,_$litType$:e}=i,s=typeof e=="number"?this._$AC(i):(e.el===void 0&&(e.el=bt.createElement(Pe(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new Vt(s,this),o=n.u(this.options);n.p(t),this.T(o),this._$AH=n}}_$AC(i){let t=He.get(i.strings);return t===void 0&&He.set(i.strings,t=new bt(i)),t}k(i){Lt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,e,s=0;for(let n of i)s===t.length?t.push(e=new r(this.O(ft()),this.O(ft()),this,this.options)):e=t[s],e._$AI(n),s++;s<t.length&&(this._$AR(e&&e._$AB.nextSibling,s),t.length=s)}_$AR(i=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);i!==this._$AB;){let e=_e(i).nextSibling;_e(i).remove(),i=e}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}},nt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,t,e,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=i,this.name=t,this._$AM=s,this.options=n,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=p}_$AI(i,t=this,e,s){let n=this.strings,o=!1;if(n===void 0)i=rt(this,i,t,0),o=!vt(i)||i!==this._$AH&&i!==et,o&&(this._$AH=i);else{let c=i,d,h;for(i=n[0],d=0;d<n.length-1;d++)h=rt(this,c[e+d],t,d),h===et&&(h=this._$AH[d]),o||=!vt(h)||h!==this._$AH[d],h===p?i=p:i!==p&&(i+=(h??"")+n[d+1]),this._$AH[d]=h}o&&!s&&this.j(i)}j(i){i===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}},Yt=class extends nt{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===p?void 0:i}},Xt=class extends nt{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==p)}},Zt=class extends nt{constructor(i,t,e,s,n){super(i,t,e,s,n),this.type=5}_$AI(i,t=this){if((i=rt(this,i,t,0)??p)===et)return;let e=this._$AH,s=i===p&&e!==p||i.capture!==e.capture||i.once!==e.once||i.passive!==e.passive,n=i!==p&&(e===p||s);s&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}},Jt=class{constructor(i,t,e){this.element=i,this.type=6,this._$AN=void 0,this._$AM=t,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(i){rt(this,i)}};var ns=Qt.litHtmlPolyfillSupport;ns?.(bt,yt),(Qt.litHtmlVersions??=[]).push("3.3.3");var ze=(r,i,t)=>{let e=t?.renderBefore??i,s=e._$litPart$;if(s===void 0){let n=t?.renderBefore??null;e._$litPart$=s=new yt(i.insertBefore(ft(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ee=globalThis,v=class extends q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return et}};v._$litElement$=!0,v.finalized=!0,ee.litElementHydrateSupport?.({LitElement:v});var os=ee.litElementPolyfillSupport;os?.({LitElement:v});(ee.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var y=r=>(i,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,i)}):customElements.define(r,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var as={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:Ct},ls=(r=as,i,t)=>{let{kind:e,metadata:s}=t,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),e==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),e==="accessor"){let{name:o}=t;return{set(c){let d=i.get.call(this);i.set.call(this,c),this.requestUpdate(o,d,r,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,r,c),c}}}if(e==="setter"){let{name:o}=t;return function(c){let d=this[o];i.call(this,c),this.requestUpdate(o,d,r,!0,c)}}throw Error("Unsupported decorator location: "+e)};function u(r){return(i,t)=>typeof t=="object"?ls(r,i,t):((e,s,n)=>{let o=s.hasOwnProperty(n);return s.constructor.createProperty(n,e),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(r){return u({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xt=12,Oe=2.2,O=100,N=100,Ne=500;function Ie(r,i){let t=Array.from({length:xt},(e,s)=>{let n=-90+360/xt*s+Oe/2,o=-90+360/xt*(s+1)-Oe/2;return ps(93,82,n,o)});return x`
    <svg viewBox="0 0 200 200" role="img" aria-label="Echo Dot">
      <defs>
        <radialGradient id="top" cx="38%" cy="30%" r="78%">
          <stop offset="0%" stop-color="var(--el-top-high)"></stop>
          <stop offset="100%" stop-color="var(--el-top)"></stop>
        </radialGradient>
        <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
        </filter>
      </defs>

      <circle cx=${O} cy=${N} r="97" fill="var(--el-shell)"></circle>
      <circle cx=${O} cy=${N} r="97" fill="none" stroke="var(--el-edge)" stroke-width="1"></circle>

      <g class="halo" filter="url(#blur)" style="opacity:${r.glow}">
        ${t.map((e,s)=>x`<path d=${e} style="fill:${r.segments[s].opacity?r.segments[s].fill:"transparent"}"></path>`)}
      </g>

      ${t.map((e,s)=>x`<path
          class="segment"
          data-picked=${String(r.picked===s)}
          data-divisible=${String(r.divisible)}
          d=${e}
          style="fill:${r.segments[s].fill};opacity:${r.segments[s].opacity}"
          @click=${r.divisible?()=>i.segment(s):i.ring}
        ></path>`)}

      <circle cx=${O} cy=${N} r="79" fill="url(#top)"></circle>
      <circle cx=${O} cy=${N} r="79" fill="none" stroke="var(--el-edge)" stroke-width="1"></circle>

      ${r.lux?x`<text
            class="lux"
            x=${O}
            y=${N+5}
            text-anchor="middle"
            style="--lit:${r.lux.lit}"
          >${Math.round(r.lux.value)}<tspan class="unit" dx="3.5">lx</tspan></text>`:""}


      ${ie(O,N-46,x`<path d="M-4.5 0h9M0 -4.5v9"></path>`,"Volume up",()=>i.volume(1))}
      <g
        class="btn"
        data-lit=${String(r.holding)}
        transform="translate(${O+46} ${N})"
        role="button"
        tabindex="0"
        aria-label=${r.holding?"Wake the second assistant":"Wake"}
        @pointerdown=${()=>i.action("down")}
        @pointerup=${()=>i.action("up")}
        @pointerleave=${()=>i.action("cancel")}
        @pointercancel=${()=>i.action("cancel")}
      >
        <circle class="face" cx="0" cy="0" r="13"></circle>
        <g class="glyph"><circle cx="0" cy="0" r="4.5"></circle></g>
      </g>
      ${ie(O,N+46,x`<path d="M-4.5 0h9"></path>`,"Volume down",()=>i.volume(-1))}
      ${ie(O-46,N,cs(r.muted),r.muted?"Microphone muted":"Microphone live",i.mute,r.muted)}
    </svg>
  `}function ie(r,i,t,e,s,n=!1){return x`<g class="btn" data-lit=${String(n)} transform="translate(${r} ${i})"
    role="button" tabindex="0" aria-label=${e} @click=${s}>
    <circle class="face" cx="0" cy="0" r="13"></circle>
    <g class="glyph">${t}</g>
  </g>`}function cs(r){return x`
    <path d="M-2.6 -5.2a2.6 2.6 0 0 1 5.2 0v4a2.6 2.6 0 0 1-5.2 0z"></path>
    <path d="M-4.6 -0.6a4.6 4.6 0 0 0 9.2 0"></path>
    <path d="M0 3.8v2.6"></path>
    ${r?x`<path d="M-6.4 6.4L6.4 -6.4"></path>`:ds()}
  `}function ds(){return x``}function ps(r,i,t,e){let s=($,H)=>{let W=H*Math.PI/180;return[(O+$*Math.cos(W)).toFixed(2),(N+$*Math.sin(W)).toFixed(2)]},[n,o]=s(r,t),[c,d]=s(r,e),[h,g]=s(i,e),[f,w]=s(i,t);return`M${n} ${o}A${r} ${r} 0 0 1 ${c} ${d}L${h} ${g}A${i} ${i} 0 0 0 ${f} ${w}Z`}var Ue=`:host{display:block}ha-card{padding:16px}.frame{position:relative;display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto auto;gap:12px;align-items:center}text.lux{fill:color-mix(in srgb,var(--el-warm) calc(var(--lit) * 100%),var(--el-read));filter:drop-shadow(0 0 calc(var(--lit) * 5px) color-mix(in srgb,var(--el-warm) calc(var(--lit) * 65%),transparent));font-family:var(--ha-font-family-body, inherit);font-size:15px;font-weight:500;letter-spacing:-.3px;pointer-events:none}text.lux .unit{font-size:9px;font-weight:400;fill:var(--el-glyph)}.art{grid-area:1 / 1;min-width:0;max-width:240px;margin:0 auto;--el-shell: #4a4d52;--el-top: #3c3f44;--el-top-high: #5a5e64;--el-edge: rgba(255, 255, 255, .13);--el-ring-off: rgba(255, 255, 255, .1);--el-glyph: rgba(255, 255, 255, .62);--el-btn: rgba(255, 255, 255, .07);--el-read: rgba(255, 255, 255, .78);--el-warm: #ffc061}.art[data-shell=black]{--el-shell: #24262a;--el-top: #191b1e;--el-top-high: #2e3237;--el-edge: rgba(255, 255, 255, .09);--el-ring-off: rgba(255, 255, 255, .07);--el-glyph: rgba(255, 255, 255, .55);--el-btn: rgba(255, 255, 255, .05);--el-read: rgba(255, 255, 255, .72);--el-warm: #ffc061}.art[data-shell=white]{--el-shell: #e7e4dd;--el-top: #f2f0ea;--el-top-high: #ffffff;--el-edge: rgba(0, 0, 0, .1);--el-ring-off: rgba(0, 0, 0, .09);--el-glyph: rgba(0, 0, 0, .45);--el-btn: rgba(0, 0, 0, .04);--el-read: rgba(0, 0, 0, .72);--el-warm: #e07b00}svg{width:100%;height:auto;display:block}.segment{transition:fill .4s ease,opacity .4s ease}.segment[data-divisible=true]{cursor:pointer}.segment[data-picked=true]{stroke:var(--primary-text-color);stroke-width:2}.plain{padding:7px 12px;border:1px solid color-mix(in srgb,var(--primary-color) 45%,transparent);border-radius:10px;background:color-mix(in srgb,var(--primary-color) 12%,transparent);color:var(--primary-color);font:inherit;font-size:.82rem;cursor:pointer;white-space:nowrap}.plain:hover{background:color-mix(in srgb,var(--primary-color) 20%,transparent)}.plain.quiet{border-color:var(--divider-color);background:none;color:var(--secondary-text-color)}.plain.quiet:hover{background:var(--secondary-background-color)}.palette{flex-direction:column;align-items:stretch;gap:10px}.palette .top{display:flex;align-items:center;justify-content:space-between;gap:12px}.palette .name{white-space:nowrap}.palette .swatches{display:grid;grid-template-columns:repeat(auto-fit,minmax(24px,1fr));gap:6px}.palette .swatch{aspect-ratio:1;min-width:0;padding:0;border:2px solid transparent;border-radius:8px;cursor:pointer}.palette .swatch:hover{border-color:var(--primary-text-color)}.palette .sq{width:30px;height:30px;border-radius:8px}.palette .sq ha-icon{--mdc-icon-size: 18px}.halo{transition:opacity .4s ease}.art[data-activity=listening] .halo{animation:breathe 2s ease-in-out infinite}@keyframes breathe{0%,to{opacity:.35}50%{opacity:.8}}.hit{cursor:pointer;pointer-events:stroke}.btn{cursor:pointer}.face{fill:var(--el-btn)}.btn .glyph path{stroke:var(--el-glyph);stroke-width:1.6;fill:none;stroke-linecap:round}.btn .glyph circle{fill:var(--el-glyph)}.btn:hover .face{fill:var(--el-edge)}.btn[data-lit=true] .glyph path{stroke:var(--error-color, #db4437)}.btn[data-lit=true] .face{fill:color-mix(in srgb,var(--error-color, #db4437) 22%,transparent)}.side{grid-area:1 / 2;display:flex;flex-direction:column;gap:8px}.foot{grid-area:2 / 1 / 3 / 3;display:flex;align-items:stretch;justify-content:space-between;gap:12px;border-top:1px solid var(--divider-color);padding-top:12px}.label{display:flex;flex-direction:column;justify-content:center;min-width:0}.name{font-size:1.05rem;font-weight:500;color:var(--primary-text-color)}.status{font-size:.8rem;color:var(--secondary-text-color)}.tail{display:flex;gap:8px;padding-left:12px;border-left:1px solid var(--divider-color)}.sq{position:relative;width:40px;height:40px;flex:0 0 auto;display:grid;place-items:center;padding:0;border:1px solid var(--divider-color);border-radius:10px;background:none;cursor:pointer;color:inherit}.sq:hover{background:var(--secondary-background-color)}.sq ha-icon{--mdc-icon-size: 22px;color:var(--secondary-text-color);display:flex}.badge{position:absolute;right:3px;bottom:1px;font-size:.62rem;line-height:1;color:var(--secondary-text-color)}.missing{color:var(--secondary-text-color)}
`;var De=`:host{display:flex;gap:18px;align-items:center;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dial{width:190px;flex:0 0 auto;touch-action:none}svg{width:100%;height:auto;display:block}.arc-bed{fill:none;stroke:color-mix(in srgb,var(--primary-text-color) 10%,transparent);stroke-width:9;stroke-linecap:round}.arc-live{fill:none;stroke:var(--primary-color);stroke-width:9;stroke-linecap:round;transition:stroke-dasharray .5s ease,stroke .3s ease}.arc-live[data-over=true]{stroke:var(--success-color, #43a047)}.notch{stroke:var(--primary-text-color);stroke-width:3;stroke-linecap:round;cursor:grab}.capsule{fill:color-mix(in srgb,var(--primary-text-color) 14%,transparent);transition:fill .3s ease}.capsule[data-on=true]{fill:var(--primary-color)}.beam{fill:color-mix(in srgb,var(--primary-color) 16%,transparent);stroke:color-mix(in srgb,var(--primary-color) 40%,transparent)}.spoke{stroke:color-mix(in srgb,var(--primary-color) 35%,transparent);stroke-width:1.2}.slash{stroke:var(--error-color, #db4437);stroke-width:3;stroke-linecap:round}.side{flex:1 1 auto;min-width:0;display:flex;flex-direction:column;gap:10px}.reading{display:flex;align-items:baseline;gap:6px}.now{font-size:1.9rem;font-weight:500;font-variant-numeric:tabular-nums;color:var(--primary-text-color);line-height:1}.unit{font-size:.8rem;color:var(--secondary-text-color)}.now.cut{color:var(--error-color, #db4437)}.caption{margin-left:auto;padding:4px 10px;border-radius:10px;font-size:.75rem;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);color:var(--secondary-text-color)}.caption[data-over=true]{background:color-mix(in srgb,var(--success-color, #43a047) 18%,transparent);color:var(--success-color, #43a047)}.modes{display:flex;flex-direction:column;gap:6px}.mode{display:flex;align-items:center;gap:10px;padding:8px 10px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.85rem;cursor:pointer;text-align:left}.mode:hover{background:color-mix(in srgb,var(--primary-text-color) 11%,transparent)}.mode[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.mode svg{width:26px;flex:0 0 auto}.gate{font-size:.78rem;color:var(--secondary-text-color)}.gate b{color:var(--primary-text-color);font-weight:500;font-variant-numeric:tabular-nums}
`;var je=26,Tt=135,Et=270,_=100,k=100,K=84,Rt=38,T=class extends v{constructor(){super(...arguments);this.level="";this.floor="";this.gate="";this.mode="";this.muted=!1;this.held=null;this.grab=t=>{let e=t.currentTarget;e.setPointerCapture(t.pointerId);let s=this.hass.states[this.gate]?.attributes??{},n=s.min??0,o=s.max??20,c=s.step??1,d=this.number(this.floor)??0,h=this.number(this.level)??0,g=Math.max(d+je,h+3),f=H=>{let W=e.getBoundingClientRect(),qi=H.clientX-W.left-W.width/2,Bi=H.clientY-W.top-W.height/2,Bt=Math.atan2(Bi,qi)*180/Math.PI-Tt;for(;Bt<0;)Bt+=360;let Ki=se(Math.min(Bt,Et)/Et);return Math.max(n,Math.min(o,Math.round(Ki*(g-d)/c)*c))},w=H=>{this.held=f(H)},$=H=>{e.removeEventListener("pointermove",w),e.removeEventListener("pointerup",$),e.removeEventListener("pointercancel",$);let W=f(H);this.held=null,this.hass.callService("number","set_value",{entity_id:this.gate,value:W})};e.addEventListener("pointermove",w),e.addEventListener("pointerup",$),e.addEventListener("pointercancel",$),this.held=f(t)}}render(){let t=this.number(this.level),e=this.number(this.floor),s=this.held??this.number(this.gate);if(t===null||e===null||s===null)return p;let n=this.hass.states[this.mode],o=Fe(n?.state),c=Math.max(e+je,t+3),d=se((t-e)/(c-e)),h=se(s/(c-e)),g=t>=e+s&&!this.muted;return a`
      <div class="dial" @pointerdown=${this.grab}>
        <svg viewBox="0 0 200 200" role="img" aria-label="Microphone array">
          <path class="arc-bed" d=${We()} pathLength="100"></path>
          ${this.muted?p:x`<path
                class="arc-live"
                data-over=${String(g)}
                d=${We()}
                pathLength="100"
                stroke-dasharray=${`${d*100} 100`}
              ></path>`}
          ${this.muted?p:bs(h)} ${o==="beam"?vs():p}
          ${o==="sum"?fs():p} ${ms(o,this.muted)}
          ${this.muted?x`<path class="slash" d="M${_-30} ${k+30}L${_+30} ${k-30}"></path>`:p}
        </svg>
      </div>

      <div class="side">
        <div class="reading">
          ${this.muted?a`<span class="now cut">Cut</span>`:a`<span class="now">${t.toFixed(1)}</span><span class="unit">dB</span>
                <span class="caption" data-over=${String(g)}>
                  ${g?"Over the gate":"Quiet"}
                </span>`}
        </div>

        <div class="modes">
          ${(n?.attributes.options??[]).map(f=>a`<button
              class="mode"
              data-on=${String(f===n?.state)}
              @click=${()=>this.hass.callService("select","select_option",{entity_id:this.mode,option:f})}
            >
              <svg viewBox="0 0 40 40">${gs(Fe(f))}</svg>
              <span>${f}</span>
            </button>`)}
        </div>

        <div class="gate">Gate <b>${s} dB</b> over a floor of <b>${e.toFixed(0)} dB</b></div>
      </div>
    `}number(t){let e=Number(this.hass?.states?.[t]?.state);return Number.isFinite(e)?e:null}};T.styles=b(De),l([u({attribute:!1})],T.prototype,"hass",2),l([u()],T.prototype,"level",2),l([u()],T.prototype,"floor",2),l([u()],T.prototype,"gate",2),l([u()],T.prototype,"mode",2),l([u({type:Boolean})],T.prototype,"muted",2),l([m()],T.prototype,"held",2),T=l([y("echolocal-array")],T);function Fe(r){let i=(r??"").toLowerCase();return i.includes("center")||i.includes("centre")?"one":i.includes("beam")?"beam":"sum"}function ms(r,i){return[[_,k],...Array.from({length:6},(e,s)=>{let n=(-90+s*60)*Math.PI/180;return[_+Rt*Math.cos(n),k+Rt*Math.sin(n)]})].map(([e,s],n)=>x`<circle class="capsule" data-on=${String(!i&&(r!=="one"||n===0))}
      cx=${e.toFixed(1)} cy=${s.toFixed(1)} r=${n===0?7:5.5}></circle>`)}function gs(r){let i=[[20,20],...Array.from({length:6},(t,e)=>{let s=(-90+e*60)*Math.PI/180;return[20+12*Math.cos(s),20+12*Math.sin(s)]})];return x`
    ${r==="beam"?x`<path class="beam" d="M20 20C9 11 13 1 20 1C27 1 31 11 20 20Z"></path>`:p}
    ${i.map(([t,e],s)=>x`<circle class="capsule" data-on=${String(r!=="one"||s===0)}
          cx=${t.toFixed(1)} cy=${e.toFixed(1)} r=${s===0?3.4:2.6}></circle>`)}`}function fs(){return Array.from({length:6},(r,i)=>{let t=(-90+i*60)*Math.PI/180;return x`<line class="spoke" x1=${_} y1=${k}
      x2=${(_+Rt*Math.cos(t)).toFixed(1)} y2=${(k+Rt*Math.sin(t)).toFixed(1)}></line>`})}function vs(){return x`<path class="beam" d="M${_} ${k}C${_-34} ${k-30} ${_-24} ${k-66} ${_} ${k-66}C${_+24} ${k-66} ${_+34} ${k-30} ${_} ${k}Z"></path>`}function We(){let r=Tt*Math.PI/180,i=(Tt+Et)*Math.PI/180;return`M${(_+K*Math.cos(r)).toFixed(2)} ${(k+K*Math.sin(r)).toFixed(2)}
    A${K} ${K} 0 1 1 ${(_+K*Math.cos(i)).toFixed(2)} ${(k+K*Math.sin(i)).toFixed(2)}`}function bs(r){let i=(Tt+r*Et)*Math.PI/180,t=K-8,e=K+8;return x`<line class="notch"
    x1=${(_+t*Math.cos(i)).toFixed(1)} y1=${(k+t*Math.sin(i)).toFixed(1)}
    x2=${(_+e*Math.cos(i)).toFixed(1)} y2=${(k+e*Math.sin(i)).toFixed(1)}></line>`}function se(r){return Math.max(0,Math.min(1,r))}var qe=`:host{display:inline-flex;flex:0 0 auto;vertical-align:middle}button{width:15px;height:15px;display:grid;place-items:center;padding:0;border:1px solid color-mix(in srgb,var(--primary-text-color) 26%,transparent);border-radius:50%;background:none;color:var(--secondary-text-color);font:inherit;font-size:9px;font-weight:700;line-height:1;cursor:help;opacity:.65}button:hover{opacity:1;color:var(--primary-color);border-color:var(--primary-color)}ha-tooltip{--max-width: min(300px, 70vw);--ha-tooltip-font-size: .79rem;--ha-tooltip-font-weight: 400;--ha-tooltip-line-height: 1.45;--ha-tooltip-padding: 11px 13px;--ha-tooltip-border-radius: 11px}
`;var xs=0,ot=class extends v{constructor(){super(...arguments);this.text="";this.anchor=`ask-${++xs}`}render(){return this.text?a`
      <button id=${this.anchor} aria-label="What this does" @click=${this.swallow}>?</button>
      <ha-tooltip for=${this.anchor} trigger="click" placement="top">${this.text}</ha-tooltip>
    `:p}swallow(t){t.stopPropagation(),t.preventDefault()}};ot.styles=b(qe),l([u()],ot.prototype,"text",2),ot=l([y("echolocal-bubble")],ot);var Be=`.sheet{transition:width .2s ease}.head{display:flex;align-items:center;gap:14px;margin-bottom:16px}.crest{width:44px;height:44px;flex:0 0 auto;display:grid;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--primary-color) 16%,transparent)}.crest ha-icon{--mdc-icon-size: 24px;color:var(--primary-color);display:flex}.titles{flex:1 1 auto;min-width:0}.crown{display:flex;align-items:center;gap:12px;flex:0 0 auto}.crown ha-control-switch{width:52px;--control-switch-thickness: 30px;--control-switch-border-radius: 15px}.crown ha-control-switch.warn{--control-switch-on-color: var(--error-color, #db4437)}.crown .lamp{max-width:168px;--control-select-thickness: 30px;--control-select-border-radius: 15px}.crown ha-icon-button{color:var(--primary-color)}.title{display:flex;align-items:center;gap:8px;font-size:1.25rem;font-weight:500;color:var(--primary-text-color);line-height:1.2}.explained{position:relative}.explained>:not(echolocal-bubble){padding-right:21px}.explained>echolocal-bubble.corner{position:absolute;top:1px;right:0;z-index:3}.subtitle{font-size:.8rem;color:var(--secondary-text-color)}.hero{margin-bottom:16px}.groups{columns:2 300px;column-gap:24px}.group{break-inside:avoid;margin-bottom:14px}.section{display:flex;align-items:center;gap:8px;margin:0 0 8px 2px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.section:before{content:"";width:3px;height:12px;border-radius:2px;background:var(--primary-color);opacity:.6}.tile{display:flex;flex-direction:column;gap:9px;padding:10px 14px;margin-bottom:5px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.top{display:flex;align-items:center;gap:12px}.icon{width:32px;height:32px;flex:0 0 auto;display:grid;place-items:center;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);transition:background .2s ease}.icon ha-icon{--mdc-icon-size: 19px;color:var(--secondary-text-color);display:flex;transition:color .2s ease}.tile[data-active=true] .icon{background:color-mix(in srgb,var(--primary-color) 20%,transparent)}.tile[data-active=true] .icon ha-icon{color:var(--primary-color)}.tile[data-alert=true] .icon{background:color-mix(in srgb,var(--error-color, #db4437) 20%,transparent)}.tile[data-alert=true] .icon ha-icon{color:var(--error-color, #db4437)}.named{flex:1 1 auto;min-width:0;display:flex;align-items:center;gap:7px}.name{flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--primary-text-color)}.trail{flex:0 0 auto;display:flex;align-items:center;gap:6px}.trail ha-control-switch{width:44px;--control-switch-thickness: 26px;--control-switch-border-radius: 13px}ha-control-select{--control-select-thickness: 34px;white-space:nowrap}.trail ha-control-select-menu{min-width:0;max-width:210px;--control-select-menu-height: 34px}ha-control-slider{--control-slider-thickness: 34px}.reading{background:none;border:none;padding:0;font:inherit;font-size:1.15rem;font-weight:500;font-variant-numeric:tabular-nums;color:var(--primary-text-color);cursor:pointer}.reading:hover{color:var(--primary-color)}.unit{font-size:.78rem;color:var(--secondary-text-color)}.reading.version{max-width:18ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.85rem;font-weight:400}.offer{display:flex;align-items:center;gap:10px}.note{flex:1 1 auto;min-width:0;font-size:.78rem;color:var(--secondary-text-color);word-break:break-all}.lines{padding:0;border:none;background:none;font:inherit;font-size:.82rem;font-variant-numeric:tabular-nums;color:var(--primary-text-color);text-align:left;cursor:pointer;line-height:1.5;overflow-wrap:anywhere}.lines:hover{color:var(--primary-color)}.empty{color:var(--secondary-text-color)}
`;var Pt=`.pills{display:flex;flex-wrap:wrap;gap:5px}.pill{padding:6px 11px;border:1px solid transparent;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.pill:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.pill[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.pill:disabled{opacity:.4;cursor:default}
`;var Ke=`:host{display:block;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dim{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-size:.85rem;color:var(--secondary-text-color)}.dim b{font-variant-numeric:tabular-nums;color:var(--primary-text-color);font-weight:500}.dim ha-control-slider{flex:1 1 auto;min-width:0;--control-slider-thickness: 28px}.hue{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-size:.85rem;color:var(--secondary-text-color)}.swatches{display:flex;flex-wrap:wrap;gap:6px}.swatch{width:24px;height:24px;padding:0;border:2px solid transparent;border-radius:50%;cursor:pointer}.swatch[data-on=true]{border-color:var(--primary-text-color)}.when{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:6px;margin-bottom:12px}.situation{display:flex;align-items:center;gap:9px;padding:9px 11px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;cursor:pointer;text-align:left;min-width:0}.situation:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.situation[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 14%,transparent)}.situation ha-icon{--mdc-icon-size: 19px;flex:0 0 auto;display:flex}.situation .text{min-width:0}.situation .label{font-size:.72rem;text-transform:uppercase;letter-spacing:.06em}.situation .shows{font-size:.88rem;color:var(--primary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.situation[data-on=true] .shows{color:var(--primary-color)}.caption{margin-bottom:8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.pills{display:grid;grid-template-columns:repeat(auto-fill,minmax(104px,1fr))}
`;var zt=[["White",[255,255,255]],["Warm",[255,190,120]],["Red",[255,40,40]],["Orange",[255,130,20]],["Yellow",[250,230,60]],["Green",[60,220,90]],["Teal",[40,220,200]],["Blue",[60,140,255]],["Violet",[150,90,255]],["Pink",[255,90,200]]];function ks(r,i){return Array.isArray(r)&&i.every((t,e)=>r[e]===t)}var R=class extends v{constructor(){super(...arguments);this.light="";this.muted="";this.failure="";this.room="";this.target="rest"}render(){let t=this.hass.states[this.light];if(!t)return p;let e=this.situations(),s=e.find(o=>o.key===this.target)??e[0],n=t.attributes.brightness??255;return a`
      <div class="dim">
        <span>Brightness</span>
        <ha-control-slider
          min="1"
          max="255"
          .value=${n}
          .disabled=${t.state!=="on"}
          @value-changed=${o=>this.hass.callService("light","turn_on",{entity_id:this.light,brightness:o.detail.value})}
        ></ha-control-slider>
        <b>${Math.round(n/255*100)}%</b>
      </div>

      <div class="hue">
        <span>Color</span>
        <div class="swatches">
          ${zt.map(([o,c])=>a`<button
              class="swatch"
              title=${o}
              aria-label=${o}
              data-on=${String(ks(t.attributes.rgb_color,c))}
              style=${`background:rgb(${c.join(",")})`}
              @click=${()=>this.hass.callService("light","turn_on",{entity_id:this.light,rgb_color:c})}
            ></button>`)}
        </div>
      </div>

      <div class="when">
        ${e.map(o=>a`<button
            class="situation"
            data-on=${String(o.key===s.key)}
            @click=${()=>this.target=o.key}
          >
            <ha-icon .icon=${o.icon}></ha-icon>
            <div class="text">
              <div class="label">${o.label}</div>
              <div class="shows">${this.showing(o)||"\u2014"}</div>
            </div>
          </button>`)}
      </div>

      <div class="caption">${s.label} shows</div>
      <div class="pills">
        ${this.options(s).map(o=>a`<button
            class="pill"
            data-on=${String(o===this.showing(s))}
            @click=${()=>this.choose(s,o)}
          >
            ${o}
          </button>`)}
      </div>
    `}situations(){return[{key:"rest",label:"At rest",icon:"mdi:record-circle-outline"},{key:"muted",label:"Muted",icon:"mdi:microphone-off",entity:this.muted},{key:"failure",label:"On failure",icon:"mdi:alert-circle-outline",entity:this.failure},{key:"room",label:"Follows the room",icon:"mdi:motion-sensor",entity:this.room}].filter(e=>e.key==="rest"||e.entity&&this.hass.states[e.entity])}showing(t){if(t.entity)return this.hass.states[t.entity]?.state??"";let e=this.hass.states[this.light];return e?.state!=="on"?"":e.attributes.effect??""}options(t){return(t.entity?this.hass.states[t.entity]?.attributes.options:this.hass.states[this.light]?.attributes.effect_list)??[]}choose(t,e){if(!t.entity){this.hass.callService("light","turn_on",{entity_id:this.light,effect:e});return}this.hass.callService("select","select_option",{entity_id:t.entity,option:e})}};R.styles=[b(Pt),b(Ke)],l([u({attribute:!1})],R.prototype,"hass",2),l([u()],R.prototype,"light",2),l([u()],R.prototype,"muted",2),l([u()],R.prototype,"failure",2),l([u()],R.prototype,"room",2),l([m()],R.prototype,"target",2),R=l([y("echolocal-appearance")],R);var Ss={mic_mute:"Cuts the microphones in hardware. The device cannot hear anything at all while this is on, including its wake word \u2014 it is a switch on the power to the capsules, not a software mute.",microphone_gain:"How much the capsules are amplified before anything else happens. Raise it in a large or quiet room; lower it if speech close to the device clips and comes out distorted.",microphone_mixing:"How the seven capsules are combined into the one channel the speech engine hears. Beamforming favours whichever direction someone is talking from and rejects the rest of the room; averaging treats every direction equally and is steadier when several people talk.",microphone_leveling:"Evens out loud and quiet talkers so a whisper across the room and a shout beside it arrive at similar volume. Helps transcription, and costs a little dynamic range.",microphone_cancel_echo:"Subtracts what the speaker is playing from what the microphones hear, so the device can be interrupted while it is talking and does not answer its own reply.",microphone_sensitivity:"How much louder than the room's own noise floor a sound has to be before the device treats it as somebody talking. Raise it in a noisy room to stop the device reacting to the room itself; lower it if quiet speech is missed.",room_level:"How loud the room is right now, in decibels below full scale. Nothing to set \u2014 it is what the sensitivity is measured against, and watching it is how you pick a sensible one.",room_floor:"The quietest the room has been recently, which is the baseline the device compares against. It drifts with the room, so a fridge switching on raises it rather than fooling the device.",mute_led_brightness:"How bright the red ring is while the microphones are cut. Dim is enough to see in a dark room without lighting it up.",stop_word_sensitivity:"How sure the device has to be before it takes an interruption as the word stop. Lower it if saying stop over a reply does not land.",ring:"The whole ring, as one light. Turning it off leaves the device working normally and silent about it.",segment:"One of the twelve segments, addressable on its own. They ship switched off in Home Assistant because twelve extra lights in every list is rarely what anyone wants \u2014 enable one and it can be coloured individually from the card.",ring_muted:"What the ring does while the microphones are cut. Something visible is worth choosing: a muted device that looks identical to a listening one is how people end up talking to a device that cannot hear them.",failure_effect:"What the ring does when a turn fails \u2014 no network, no pipeline, nothing understood. Distinct from the normal colours on purpose.",room_reaction:"Lets the ring track how loud the room is while the device is listening, so somebody can see that it is hearing them before it answers.",headphones:"Sends audio out of the jack instead of the speaker. The speaker goes quiet while this is on.",noise_layer:"Plays a generated sound the device makes itself \u2014 rain, a fan, a brook. Nothing is streamed and nothing is stored: it is synthesised as it plays, so it never loops or runs out. Two layers can overlap, so rain over a fan is one choice in each.",media_on_turn:"What happens to music when someone says the wake word. Ducking drops the volume and keeps playing, which resumes on the same note; stopping does not.",media_duck_level:"How far the volume drops while the device is listening or talking. Far enough that the microphones are not fighting the music, not so far that the room goes silent.",voice_resampling:"How the reply's audio is resampled to what the speaker wants. Better quality costs a little more work on a device that has four small cores.",wake_word:"What this assistant listens for. The list is what the device has on disk plus whatever Home Assistant is offering from its custom_wake_words directory.",wake_threshold:"How sure the device has to be before it decides it heard its wake word. Lower it if it misses you; raise it if the television sets it off.",follow_up:"Keeps listening for a moment after a reply, so a second question needs no second wake word.",max_listen:"How long the device will wait for someone to finish talking before giving up on the turn.",max_think:"How long to wait for Home Assistant's pipeline to answer. Generous is usually right \u2014 a slow answer beats a turn that dies just before it arrives.",wake_effect:"What the ring does at this point in a turn. Cosmetic, but it is how somebody knows the device heard them.",wake_tone:"A short sound at this point in a turn. Some people want the confirmation; some find it grating.",reply_buffer:"How much of a reply to collect before starting to play it. More is steadier on a poor network, at the cost of answering a beat later.",reply_delivery:"Whether a reply starts playing as it arrives or once all of it has. Streaming is faster to start and stutters on a bad connection.",update_channel:"Which releases this device is offered. Stable only, or the ones that are still being tried out.",check_for_updates:"Looks now rather than waiting for the next scheduled check. Nothing is installed by pressing it.",bluetooth_proxy:"Forwards nearby Bluetooth advertisements to Home Assistant, so this device extends Bluetooth coverage into its room. It costs some radio time it would otherwise spend on wifi.",metrics_interval:"How often the device reports its own temperature, memory and load. Often enough to be useful; every report is work the device does instead of listening.",purge_cache:"Deletes what Android's runtime has cached. It comes back on its own, so this buys disk space for a while rather than permanently.",test_playback:"Plays a short sound, which is the quickest way to find out whether the speaker, the volume and the output route are all what you think they are.",remote_adb:"Opens Android's debugging port over the network. Off by default, and worth leaving off: it is an unauthenticated way onto the device for anything on the same network.",vad_sensitivity:"How readily the device decides somebody has stopped talking. Tighter ends a turn sooner and can cut you off mid-sentence.",wifi_signal:"How strong the connection to the access point is. Above about -70 dBm is comfortable; below -80 dBm is where audio starts arriving late.",cpu_temperature:"The chip's own temperature. These run warm by design \u2014 it is a sustained climb rather than a number that matters.",load_average:"How much work is queued across the cores. Listening for a wake word is continuous work, so this is never zero.",memory_available:"How much memory is free. Wake models and the audio path are what use it.",free_space:"Disk left. Wake models and saved recordings are what fill it.",update_status:"What the last self-update did. Worth reading when a device is on an older version than the rest."},As={array:"The seven capsules and what the room sounds like to them. The arc is how loud the room is right now; the notch is how far above the room's own noise floor something has to be before the device treats it as speech. Drag the notch, then talk from where you normally would and watch whether the arc crosses it.",appearance:"Ring controls, current brighness and color, active and conditional effects.",noise:"Sounds the device generates itself, mixed live rather than played from a file, so nothing loops. Two layers overlap \u2014 pick rain in one and a fan in the other.",volume:"The speaker's volume, in the same thirty steps the buttons on the device move it through, so this dial and the device agree.",history:"What the device has been hearing. Rows rebuilt from Home Assistant's recorder show what was said; rows the device itself reported also show where the time went and can be played back."},Cs={microphone:"The seven microphones and how the room sounds to them. Everything here changes what the device hears before a word of it reaches Home Assistant, so it is the first place to look when it mishears or does not wake at all.",ring:"The twelve-segment light. None of it changes what the device does \u2014 it changes what somebody in the room can tell about it, which is why the muted and failed colours are worth setting.",playback:"The speaker: what comes out of it, how loud, and what happens to music when somebody talks to the device.",assistant:"One wake word and the turn that follows it. A device can run more than one, each with its own word, sensitivity and timings, which is how one device answers to two names.",device:"The device itself rather than anything it hears or says: which releases it takes, what else it does for the network, and the housekeeping.",diagnostics:"What the device reports about itself. Nothing here is a setting \u2014 it is the evidence, and it is what to read before changing anything else.",activity:"The last few turns: what woke the device, what it heard, and what it said back. Rows the device itself reported also show where the time went, and can be played back or saved."};function Ge(r){return Ss[r]}function Ve(r){return As[r]}function Ye(r){return Cs[r]??""}var Ze="turn_audio",Je="recordings",Ms=[{key:"listen_ms",label:"Listen"},{key:"think_ms",label:"Think"},{key:"speak_ms",label:"Reply"}];function at(r){return Ms.map(({key:i,label:t})=>({key:i,label:t,ms:Number(r[i]??0)})).filter(i=>i.ms>0)}function lt(r){return at(r).reduce((i,t)=>i+t.ms,0)}function Qe(r){let i=r;if(!i||i.version!=="1"||!i.wake_word)return null;let t={version:1,device:i.device_id??"",id:i.id??"",slot:Xe(i.slot)??1,wake_word:i.wake_word,outcome:i.outcome??"completed"};i.heard&&(t.heard=i.heard),i.reply&&(t.reply=i.reply);for(let e of["listen_ms","think_ms","speak_ms","audio_seconds"]){let s=Xe(i[e]);s!==void 0&&(t[e]=s)}return t}function Xe(r){if(r===void 0||r==="")return;let i=Number(r);return Number.isFinite(i)?i:void 0}function Ot(r,i,t,e){if(!r.connection)return Promise.resolve(()=>{});let s={type:"logbook/event_stream",start_time:i.toISOString()};return t.length&&(s.device_ids=t),r.connection.subscribeMessage(n=>{let o=[];for(let c of n.events??[]){let d=Qe(c);d&&o.push({at:c.when*1e3,turn:d})}e(o)},s)}var Le=`:host{display:block}.caption{display:flex;align-items:baseline;gap:8px;margin-bottom:8px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.caption span{margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400;font-size:.75rem}.turns{display:flex;flex-direction:column;gap:4px;max-height:300px;overflow:auto;mask-image:linear-gradient(to bottom,black calc(100% - 16px),transparent)}.turn{display:grid;grid-template-columns:auto 1fr auto;gap:4px 10px;padding:9px 12px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.when{font-size:.78rem;font-variant-numeric:tabular-nums;color:var(--secondary-text-color);white-space:nowrap}.wake{font-size:.78rem;color:var(--primary-color)}.right{grid-column:3;grid-row:1;display:flex;align-items:center;gap:8px}.outcome{font-size:.72rem;color:var(--secondary-text-color);white-space:nowrap}.outcome[data-bad=true]{color:var(--error-color, #db4437)}.said,.said-back,.bar{grid-column:2 / span 2}.said{font-size:.85rem;color:var(--primary-text-color)}.said-back{font-size:.85rem;color:var(--secondary-text-color)}.said-back:before{content:"\\21b3  ";opacity:.6}.bar{display:flex;height:20px;margin-top:6px;border-radius:5px;overflow:hidden;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.slice{min-width:2px;display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:.68rem;font-variant-numeric:tabular-nums;color:var(--text-primary-color, #fff);white-space:nowrap}.slice[data-phase=listen_ms]{background:color-mix(in srgb,var(--primary-color) 55%,transparent)}.slice[data-phase=think_ms]{background:color-mix(in srgb,var(--primary-text-color) 30%,transparent)}.slice[data-phase=speak_ms]{background:var(--success-color, #43a047)}.legend{display:flex;flex-wrap:wrap;gap:14px;margin-bottom:10px;font-size:.7rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px}.none{padding:10px 0;font-size:.82rem;color:var(--secondary-text-color)}.loading{display:flex;justify-content:center;padding:32px 0}
`;var ne=new Map;function ei(r){return ne.get(r)}var Ts=6e4,Es=6e3,ti=new Map,re=new Map;function ii(r,i){let t=ti.get(i);if(t&&Date.now()-t.at<Ts)return Promise.resolve(t.ids);let e=re.get(i);if(e)return e;let s=Ps(Rs(r,i),Es).catch(()=>new Set).then(n=>(ti.set(i,{at:Date.now(),ids:n}),n)).finally(()=>re.delete(i));return re.set(i,s),s}async function Rs(r,i){let e=(await r.callService("esphome",i,{},void 0,!0,!0))?.response;return e?.version===1&&Array.isArray(e.ids)?new Set(e.ids):new Set}function Ps(r,i){return new Promise((t,e)=>{let s=setTimeout(()=>e(new Error("timeout")),i);r.then(n=>{clearTimeout(s),t(n)},n=>{clearTimeout(s),e(n)})})}function oe(r,i,t){let s=`${i.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}_${t}`;return r?.services?.esphome?.[s]?s:void 0}async function si(r,i,t){let e=ne.get(t);if(e)return e;let s=[],n="audio/wav",o=1;for(let d=0;d<Math.min(o,64);d++){let h=await zs(r,i,t,d);if(!h)return null;o=h.pages||1,n=h.mime||n,s.push(Os(h.data))}let c=URL.createObjectURL(new Blob(s,{type:n}));return ne.set(t,c),c}async function zs(r,i,t,e){try{let n=(await r.callService("esphome",i,{id:t,page:e},void 0,!0,!0))?.response;return n?.version===1&&typeof n.data=="string"?n:null}catch{return null}}function Os(r){let i=atob(r),t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return t}var ri=`:host{display:flex;gap:6px;flex:0 0 auto}button{flex:0 0 auto;width:28px;height:28px;display:grid;place-items:center;padding:0;border:1px solid color-mix(in srgb,var(--primary-color) 40%,transparent);border-radius:50%;background:color-mix(in srgb,var(--primary-color) 12%,transparent);cursor:pointer}button.keep{border-color:color-mix(in srgb,var(--primary-text-color) 18%,transparent);background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}button ha-icon{--mdc-icon-size: 16px;color:var(--primary-color);display:flex}button.keep ha-icon{color:var(--secondary-text-color)}.gone{display:flex;opacity:.4}.gone ha-icon{--mdc-icon-size: 16px;color:var(--secondary-text-color);display:flex}
`;var ct=null,Is=5*6e4,M=class extends v{constructor(){super(...arguments);this.device="";this.turn="";this.filename="recording.wav";this.at=0;this.busy=!1;this.playing=!1;this.gone=!1;this.play=async()=>{if(this.playing){ct?.audio.pause();return}let t=await this.fetch();if(!t)return;ct?.stop();let e=new Audio(t),s=()=>{this.playing=!1,ct?.audio===e&&(ct=null)};e.addEventListener("ended",s),e.addEventListener("pause",s),ct={audio:e,stop:()=>e.pause()},this.playing=!0,e.play().catch(s)};this.save=async()=>{let t=await this.fetch();if(!t)return;let e=document.createElement("a");e.href=t,e.download=this.filename,e.click()}}disconnectedCallback(){super.disconnectedCallback(),this.playing&&ct?.audio.pause()}updated(){if(!this.hass||!this.turn||this.checkedTurn===this.turn)return;if(this.checkedTurn=this.turn,this.present=void 0,this.gone=!1,this.at&&Date.now()-this.at<Is){this.present=!0;return}let t=this.device?oe(this.hass,this.device,Je):void 0;t&&ii(this.hass,t).then(e=>{this.checkedTurn===this.turn&&(this.present=e.has(this.turn))})}render(){return!this.turn||!this.action()||this.present!==!0?p:this.gone?a`<span class="gone" title="The device no longer has this recording">
        <ha-icon icon="mdi:playlist-remove"></ha-icon>
      </span>`:a`
      <button
        aria-label=${this.playing?"Stop the recording":"Play the recording"}
        @click=${this.play}
      >
        <ha-icon
          .icon=${this.busy?"mdi:timer-outline":this.playing?"mdi:pause":"mdi:play"}
        ></ha-icon>
      </button>
      <button class="keep" aria-label="Save the recording" @click=${this.save}>
        <ha-icon icon="mdi:tray-arrow-down"></ha-icon>
      </button>
    `}action(){return this.device?oe(this.hass,this.device,Ze):void 0}async fetch(){let t=ei(this.turn);if(t)return t;let e=this.action();if(!e)return null;this.busy=!0;try{let s=await si(this.hass,e,this.turn);return this.gone=!s,s||this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:"That recording is no longer on the device."},bubbles:!0,composed:!0})),s}finally{this.busy=!1}}};M.styles=b(ri),l([u({attribute:!1})],M.prototype,"hass",2),l([u()],M.prototype,"device",2),l([u()],M.prototype,"turn",2),l([u()],M.prototype,"filename",2),l([u({type:Number})],M.prototype,"at",2),l([m()],M.prototype,"busy",2),l([m()],M.prototype,"playing",2),l([m()],M.prototype,"present",2),l([m()],M.prototype,"gone",2),M=l([y("echolocal-recording")],M);var Us=14,P=class extends v{constructor(){super(...arguments);this.device="";this.deviceId="";this.live=[];this.asked=!1;this.loading=!0}updated(){this.asked||!this.hass||!this.deviceId||(this.asked=!0,this.listen())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}render(){let t=this.merged(),e=t.some(s=>s.turn&&at(s.turn).length>0);return a`
      <div class="caption">
        Recent turns
        ${t.length?a`<span>${t.length===1?"1 turn":`${t.length} turns`}</span>`:p}
      </div>
      ${e?a`<div class="legend">
            ${[["listen_ms","Listen"],["think_ms","Think"],["speak_ms","Reply"]].map(([s,n])=>a`<span class="key"
                ><span class="dot slice" data-phase=${s}></span>${n}</span
              >`)}
          </div>`:p}
      ${t.length?a`<div class="turns">${t.map(s=>this.row(s,this.scale(t)))}</div>`:this.loading?a`<div class="loading"><ha-spinner size="medium"></ha-spinner></div>`:a`<div class="none">No recent activity found.</div>`}
    `}scale(t){return Math.max(1,...t.map(e=>e.turn?lt(e.turn):0))}row(t,e){let s=t.turn,n=s?at(s):[],o=s?lt(s):0;return a`<div class="turn">
      <div class="when">${Ds(t.at)}</div>
      <div class="wake">${t.wake}</div>
      <div class="right">
        ${s?a`<div class="outcome" data-bad=${String(s.outcome!=="completed")}>
              ${s.outcome==="completed"?`${(o/1e3).toFixed(1)}s`:s.outcome}
            </div>`:p}
        ${s?.audio_seconds?a`<echolocal-recording
              .hass=${this.hass}
              .device=${this.device}
              .turn=${s.id}
              .at=${t.at}
              .filename=${js(t)}
            ></echolocal-recording>`:p}
      </div>
      ${t.heard?a`<div class="said">${t.heard}</div>`:p}
      ${t.reply?a`<div class="said-back">${t.reply}</div>`:p}
      ${n.length?a`<div class="bar">
            ${n.map(c=>a`<div
                class="slice"
                data-phase=${c.key}
                title=${`${c.label} ${c.ms} ms`}
                style=${`flex:0 0 ${c.ms/e*100}%`}
              >
                ${(c.ms/1e3).toFixed(1)}s
              </div>`)}
          </div>`:p}
    </div>`}merged(){return[...this.live].sort((t,e)=>e.at-t.at)}async listen(){let t=new Date(Date.now()-Us*864e5),e=this.deviceId?[this.deviceId]:[];try{this.stop=await Ot(this.hass,t,e,s=>{this.loading=!1,s.length&&(this.live=[...s.map(({at:n,turn:o})=>({at:n,wake:o.wake_word,heard:o.heard,reply:o.reply,turn:o})),...this.live])})}catch{this.loading=!1}}};P.styles=b(Le),l([u({attribute:!1})],P.prototype,"hass",2),l([u()],P.prototype,"device",2),l([u()],P.prototype,"deviceId",2),l([m()],P.prototype,"live",2),l([m()],P.prototype,"asked",2),l([m()],P.prototype,"loading",2),P=l([y("echolocal-history")],P);function Ds(r){return new Date(r).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}function js(r){let i=new Date(r.at).toISOString().replace(/[:.]/g,"-").slice(0,19),t=r.wake.toLowerCase().replace(/[^a-z0-9]+/g,"-");return`${i}-${t}.wav`}var ni=`:host{display:block;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.caption{display:flex;align-items:baseline;gap:8px;margin-bottom:10px;font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.09em;color:var(--secondary-text-color)}.caption span{margin-left:auto;text-transform:none;letter-spacing:0;font-weight:400;font-size:.75rem}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(78px,1fr));gap:6px}.sound{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 6px;border:1px solid transparent;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 6%,transparent);color:var(--secondary-text-color);font:inherit;font-size:.75rem;cursor:pointer}.sound:hover{background:color-mix(in srgb,var(--primary-text-color) 12%,transparent)}.sound[data-on=true]{border-color:color-mix(in srgb,var(--primary-color) 45%,transparent);background:color-mix(in srgb,var(--primary-color) 15%,transparent);color:var(--primary-color)}.sound ha-icon{--mdc-icon-size: 22px;display:flex}.layer{position:absolute;top:4px;right:6px;font-size:.62rem;line-height:1}
`;var oi=`:host{display:flex;gap:18px;align-items:center;padding:14px;border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.dial{width:150px;flex:0 0 auto;touch-action:none}svg{width:100%;height:auto;display:block}.bed{fill:none;stroke:color-mix(in srgb,var(--primary-text-color) 10%,transparent);stroke-width:10;stroke-linecap:round}.live{fill:none;stroke:var(--primary-color);stroke-width:10;stroke-linecap:round;transition:stroke-dasharray .25s ease}.live[data-muted=true]{stroke:color-mix(in srgb,var(--primary-text-color) 20%,transparent)}.step{fill:var(--primary-text-color);font-size:26px;font-weight:500;text-anchor:middle}.of{fill:var(--secondary-text-color);font-size:10px;text-anchor:middle;text-transform:uppercase;letter-spacing:.1em}.side{flex:1 1 auto;min-width:0;display:flex;align-items:center;justify-content:space-between;gap:12px}.state{font-size:1.05rem;color:var(--primary-text-color)}.badges{display:flex;flex-wrap:wrap;gap:6px}.badge{display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:10px;background:color-mix(in srgb,var(--primary-text-color) 7%,transparent);font-size:.78rem;color:var(--secondary-text-color)}.badge ha-icon{--mdc-icon-size: 16px;display:flex}.badge[data-on=true]{background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}
`;var ae=135,le=270,Nt=100,It=100,dt=78,qs={White:"mdi:grain",Pink:"mdi:blur",Brown:"mdi:waveform",Rain:"mdi:weather-pouring",Ocean:"mdi:waves",Brook:"mdi:water",Wind:"mdi:weather-windy",Fire:"mdi:fireplace",Crickets:"mdi:bug-outline",Fan:"mdi:fan",Cabin:"mdi:airplane"},pt="None",G=class extends v{constructor(){super(...arguments);this.player="";this.jack="";this.grab=t=>{let e=t.currentTarget;e.setPointerCapture(t.pointerId);let s=d=>{let h=e.getBoundingClientRect(),g=d.clientX-h.left-h.width/2,f=d.clientY-h.top-h.height/2,w=Math.atan2(f,g)*180/Math.PI-ae;for(;w<0;)w+=360;let $=Math.max(0,Math.min(1,Math.min(w,le)/le));return Math.round($*30)/30},n=d=>this.hass.callService("media_player","volume_set",{entity_id:this.player,volume_level:s(d)}),o=d=>n(d),c=d=>{e.removeEventListener("pointermove",o),e.removeEventListener("pointerup",c),e.removeEventListener("pointercancel",c),n(d)};e.addEventListener("pointermove",o),e.addEventListener("pointerup",c),e.addEventListener("pointercancel",c),n(t)}}render(){let t=this.hass.states[this.player];if(!t)return p;let e=Number(t.attributes.volume_level??0),s=t.attributes.is_volume_muted===!0,n=this.jack?this.hass.states[this.jack]?.state==="on":!1;return a`
      <div class="dial" @pointerdown=${this.grab}>
        <svg viewBox="0 0 200 200" role="img" aria-label="Volume">
          <path class="bed" d=${ai()} pathLength="100"></path>
          ${e>0?x`<path class="live" data-muted=${String(s)} d=${ai()} pathLength="100"
                stroke-dasharray=${`${e*100} 100`}></path>`:p}
          <text class="step" x=${Nt} y=${It+4}>${Math.round(e*30)}</text>
          <text class="of" x=${Nt} y=${It+20}>of 30</text>
        </svg>
      </div>

      <div class="side">
        <div class="state">${Bs(t.state)}</div>
        <div class="badges">
          <div class="badge" data-on=${String(s)}>
            <ha-icon .icon=${s?"mdi:volume-off":"mdi:volume-high"}></ha-icon>
            ${s?"Muted":`${Math.round(e*100)}%`}
          </div>
          ${this.jack?a`<div class="badge" data-on=${String(n)}>
                <ha-icon icon="mdi:headphones"></ha-icon>
                ${n?"Headphones":"Speaker"}
              </div>`:p}
        </div>
      </div>
    `}};G.styles=b(oi),l([u({attribute:!1})],G.prototype,"hass",2),l([u()],G.prototype,"player",2),l([u()],G.prototype,"jack",2),G=l([y("echolocal-volume")],G);var V=class extends v{constructor(){super(...arguments);this.layers=[];this.busy=!1}render(){let t=this.layers.map(o=>this.hass.states[o]?.state??pt),e=(this.hass.states[this.layers[0]]?.attributes.options??[]).filter(o=>o!==pt),s=t.every(o=>o!==pt),n=o=>t.indexOf(o);return a`
      <div class="caption">
        Generated sound
        <span>${s?"Both layers in use":`${t.filter(o=>o!==pt).length} of 2`}</span>
      </div>
      <div class="grid">
        ${e.map(o=>{let c=n(o);return a`<button
            class="sound"
            data-on=${String(c>=0)}
            ?disabled=${this.busy}
            @click=${()=>this.pick(o,c,t)}
          >
            <ha-icon .icon=${qs[o]??"mdi:music-note"}></ha-icon>
            ${o}
            ${c>=0&&this.layers.length>1?a`<span class="layer">${c+1}</span>`:p}
          </button>`})}
      </div>
    `}async pick(t,e,s){let n=s.findIndex(c=>c===pt),o=e>=0?e:n>=0?n:this.layers.length-1;if(!(o<0)){this.busy=!0;try{await this.hass.callService("select","select_option",{entity_id:this.layers[o],option:e>=0?pt:t})}finally{this.busy=!1}}}};V.styles=b(ni),l([u({attribute:!1})],V.prototype,"hass",2),l([u({attribute:!1})],V.prototype,"layers",2),l([m()],V.prototype,"busy",2),V=l([y("echolocal-noise")],V);function Bs(r){return r==="playing"?"Playing":r==="paused"?"Paused":r==="unavailable"?"Unavailable":"Idle"}function ai(){let r=ae*Math.PI/180,i=(ae+le)*Math.PI/180;return`M${(Nt+dt*Math.cos(r)).toFixed(2)} ${(It+dt*Math.sin(r)).toFixed(2)}
    A${dt} ${dt} 0 1 1 ${(Nt+dt*Math.cos(i)).toFixed(2)} ${(It+dt*Math.sin(i)).toFixed(2)}`}var A=class extends v{constructor(){super(...arguments);this.heading="";this.subtitle="";this.icon="";this.sections=[];this.widgets=[];this.device="";this.deviceId="";this.help=!0;this.about="";this.held={}}render(){let t=this.sections.map(o=>({...o,rows:o.rows.filter(c=>this.hass.states?.[c.entityId])})).filter(o=>o.rows.length),n=`--ha-dialog-width-md:${t.reduce((o,c)=>o+c.rows.length,0)>3||this.widgets.some(o=>o.place!=="header")?820:460}px`;return a`
      <ha-dialog open hideActions style=${n} @closed=${this.dismiss}>
        <div class="sheet">
          <div class="head">
            <div class="crest"><ha-icon .icon=${this.icon}></ha-icon></div>
            <div class="titles">
              <div class="title">
                ${this.heading}
                ${this.help&&this.about?a`<echolocal-bubble .text=${this.about}></echolocal-bubble>`:p}
              </div>
              ${this.subtitle?a`<div class="subtitle">${this.subtitle}</div>`:p}
            </div>
            ${this.widgets.filter(o=>o.place==="header").map(o=>this.widget(o))}
          </div>
          ${this.widgets.filter(o=>o.place!=="header").map(o=>this.explained(o))}
          <div class="groups">
            ${t.length?t.map(o=>this.group(o)):this.widgets.length?p:a`<div class="empty">Nothing to show here.</div>`}
          </div>
        </div>
      </ha-dialog>
    `}widget({widget:t,roles:e,lists:s}){let n=o=>o?.[0]??"";switch(t){case"appearance":return a`<echolocal-appearance
          class="hero"
          .hass=${this.hass}
          .light=${e.light}
          .muted=${n(s.muted)}
          .failure=${n(s.failure)}
          .room=${n(s.room)}
        ></echolocal-appearance>`;case"array":return a`<echolocal-array
          class="hero"
          .hass=${this.hass}
          .level=${e.level}
          .floor=${e.floor}
          .gate=${e.gate}
          .mode=${e.mode}
          .muted=${this.muted}
        ></echolocal-array>`;case"history":return a`<echolocal-history
          class="hero"
          .hass=${this.hass}
          .device=${this.device}
          .deviceId=${this.deviceId}
        ></echolocal-history>`;case"volume":return a`<echolocal-volume
          class="hero"
          .hass=${this.hass}
          .player=${e.player}
          .jack=${n(s.jack)}
        ></echolocal-volume>`;case"noise":return a`<echolocal-noise
          class="hero"
          .hass=${this.hass}
          .layers=${s.layers??[]}
        ></echolocal-noise>`;case"player":return this.crownPlayer(e.player);case"power":return this.crownPower(e.light);case"mute":return this.crownMute(e.mute,e.lamp)}}crownPlayer(t){let e=this.hass.states[t],s=e?.state==="playing",n=e?.attributes.is_volume_muted!==!0;return a`<div class="crown">
      <ha-icon-button
        .label=${s?"Pause":"Play"}
        @click=${()=>this.hass.callService("media_player",s?"media_pause":"media_play",{entity_id:t})}
      >
        <ha-icon .icon=${s?"mdi:pause":"mdi:play"}></ha-icon>
      </ha-icon-button>
      ${this.crownSwitch(n,"Sound",o=>this.hass.callService("media_player","volume_mute",{entity_id:t,is_volume_muted:!o}))}
    </div>`}crownPower(t){return a`<div class="crown">
      ${this.crownSwitch(this.hass.states[t]?.state==="on","Ring",e=>this.hass.callService("light",e?"turn_on":"turn_off",{entity_id:t}))}
    </div>`}crownMute(t,e){let s=this.hass.states[e];return a`<div class="crown">
      ${s?a`<ha-control-select
            class="lamp"
            .options=${(s.attributes.options??[]).map(n=>({value:n,label:n}))}
            .value=${s.state}
            label="Mute indicator"
            @value-changed=${n=>this.hass.callService("select","select_option",{entity_id:e,option:n.detail.value})}
          ></ha-control-select>`:p}
      ${this.crownSwitch(this.hass.states[t]?.state==="on","Microphone mute",n=>this.hass.callService("switch",n?"turn_on":"turn_off",{entity_id:t}),"warn")}
    </div>`}crownSwitch(t,e,s,n=""){return a`<ha-control-switch
      class=${n}
      .checked=${t}
      .label=${e}
      @change=${o=>s(o.target.checked)}
    ></ha-control-switch>`}get muted(){let t=this.widgets.find(e=>e.roles.mute)?.roles.mute;return!!t&&this.hass.states[t]?.state==="on"}explained(t){let e=this.help?Ve(t.widget):void 0;return e?a`<div class="explained">
      ${this.widget(t)}
      <echolocal-bubble class="corner" .text=${e}></echolocal-bubble>
    </div>`:this.widget(t)}group(t){return a`<section class="group">
      ${t.title?a`<div class="section">${t.title}</div>`:p}
      ${t.rows.map(e=>this.row(e))}
    </section>`}row(t){if(!this.hass.states?.[t.entityId])return p;switch(t.entityId.split(".")[0]){case"switch":return this.toggle(t,"switch");case"light":return this.toggle(t,"light");case"number":return this.slider(t);case"select":return this.options(t);case"text":return this.textInput(t);case"button":return this.press(t);case"update":return this.version(t);default:return this.reading(t)}}version(t){let e=this.hass.states[t.entityId],s=e.attributes.installed_version,n=e.attributes.latest_version,o=e.state==="on"&&n&&n!==s;return e.attributes.in_progress?this.tile(t,!0,{trail:a`<ha-spinner size="tiny"></ha-spinner>`,under:a`<div class="note">Installing ${String(n)}</div>`}):this.tile(t,!1,{trail:a`<button class="reading version" @click=${()=>this.moreInfo(t.entityId)}>
        ${s?String(s):e.state}
      </button>`,under:o?a`<div class="offer">
            <div class="note">New: ${String(n)}</div>
            <ha-button
              size="small"
              @click=${()=>this.hass.callService("update","install",{entity_id:t.entityId})}
            >
              Update
            </ha-button>
          </div>`:void 0})}textInput(t){let e=this.hass.states[t.entityId],s=t.name==="clock_date_pattern";return this.tile(t,!1,{under:a`<input
        aria-label=${t.label}
        .value=${["unknown","unavailable"].includes(e.state)?"":e.state}
        placeholder=${s?"dd.MM.yyyy":""}
        maxlength=${Number(e.attributes.max??128)}
        ?disabled=${e.state==="unavailable"}
        @change=${async n=>{let o=n.target;try{await this.hass.callService("text","set_value",{entity_id:t.entityId,value:o.value}),o.setCustomValidity("")}catch{o.setCustomValidity("Could not save. Check the pattern and device connection."),o.reportValidity()}}}
      />${s?a`<div class="note">Choose Custom to apply this pattern. Use yyyy, yy, MMMM, MMM, MM, M, dd, d, EEEE or EEE; quote literal text with single quotes. Show date stays independent.</div>`:p}`})}toggle(t,e){let{entityId:s,label:n}=t,o=this.hass.states[s].state;return this.tile(t,o==="on",{trail:a`<ha-control-switch
        .checked=${o==="on"}
        .disabled=${o==="unavailable"}
        .label=${n}
        @change=${c=>this.hass.callService(e,c.target.checked?"turn_on":"turn_off",{entity_id:s})}
      ></ha-control-switch>`})}slider(t){let{entityId:e}=t,s=this.hass.states[e],n=s.attributes,o=n.min??0,c=n.max??100,d=this.held[e]??Number(s.state);return this.tile(t,!1,{trail:a`<span class="reading">${Number.isNaN(d)?"\u2014":d}</span>
        ${n.unit_of_measurement?a`<span class="unit">${n.unit_of_measurement}</span>`:p}`,under:a`<ha-control-slider
        .value=${d}
        .min=${o}
        .max=${c}
        .step=${n.step??1}
        .unit=${n.unit_of_measurement??""}
        .disabled=${s.state==="unavailable"}
        @slider-moved=${h=>{this.held={...this.held,[e]:h.detail.value}}}
        @value-changed=${h=>{let{[e]:g,...f}=this.held;this.held=f,this.hass.callService("number","set_value",{entity_id:e,value:h.detail.value})}}
      ></ha-control-slider>`})}options(t){let{entityId:e}=t,s=this.hass.states[e],n=s.attributes.options??[],o=n.map(h=>({value:h,label:h})),c=h=>{h&&h!==s.state&&this.hass.callService("select","select_option",{entity_id:e,option:h})},d=s.state==="unavailable";return this.tile(t,!1,{trail:n.length===2?a`<div class="pills">
              ${n.map(h=>a`<button
                  class="pill"
                  data-on=${String(h===s.state)}
                  ?disabled=${d}
                  @click=${()=>c(h)}
                >
                  ${h}
                </button>`)}
            </div>`:a`<ha-control-select-menu
              .options=${o}
              .value=${s.state}
              .disabled=${d}
              .label=${t.label}
              hide-label
              show-arrow
              @wa-select=${h=>c(h.detail.item?.value)}
            ></ha-control-select-menu>`})}press(t){let e=t.reading?this.hass.states[t.reading]:void 0,s=a`<ha-button
      size="small"
      @click=${()=>this.hass.callService("button","press",{entity_id:t.entityId})}
    >
      Run
    </ha-button>`;return e?this.tile(t,!1,{trail:a`<span class="reading">${e.state}</span>
        ${e.attributes.unit_of_measurement?a`<span class="unit">${e.attributes.unit_of_measurement}</span>`:p}`,under:s}):this.tile(t,!1,{trail:s})}reading(t){let e=this.hass.states[t.entityId],s=e.attributes.unit_of_measurement,n=e.state.split(", ").filter(o=>o.length);return n.length>1?this.tile(t,!1,{under:a`<button class="lines" @click=${()=>this.moreInfo(t.entityId)}>
          ${n.map(o=>a`<div>${o}</div>`)}
        </button>`}):this.tile(t,!1,{trail:a`<button class="reading" @click=${()=>this.moreInfo(t.entityId)}>
          ${e.state}
        </button>
        ${s?a`<span class="unit">${s}</span>`:p}`})}tile({entityId:t,label:e,name:s},n,o){let c=this.hass.states[t].attributes.icon,d=n&&c?.includes("mic")&&c.includes("off"),h=this.help?Ge(s):void 0;return a`<div class="tile" data-active=${String(n&&!d)} data-alert=${String(!!d)}>
      <div class="top">
        <div class="icon"><ha-icon .icon=${c??"mdi:tune"}></ha-icon></div>
        <div class="named">
          <div class="name">${e}</div>
          ${h?a`<echolocal-bubble .text=${h}></echolocal-bubble>`:p}
        </div>
        ${o.trail?a`<div class="trail">${o.trail}</div>`:p}
      </div>
      ${o.under??p}
    </div>`}moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}dismiss(){this.dispatchEvent(new CustomEvent("closed",{bubbles:!0,composed:!0}))}};A.styles=[b(Pt),b(Be)],l([u({attribute:!1})],A.prototype,"hass",2),l([u()],A.prototype,"heading",2),l([u()],A.prototype,"subtitle",2),l([u()],A.prototype,"icon",2),l([u({attribute:!1})],A.prototype,"sections",2),l([u({attribute:!1})],A.prototype,"widgets",2),l([u()],A.prototype,"device",2),l([u()],A.prototype,"deviceId",2),l([u({type:Boolean})],A.prototype,"help",2),l([u()],A.prototype,"about",2),l([m()],A.prototype,"held",2),A=l([y("echolocal-dialog")],A);function ci(r,i){let t=ce(r);return i.map(e=>{let s=t?.get(e.entity_id);return{...e,name:s?.name??"",slot:s?.slot??0}})}function Ut(r){let i=new Map;for(let t of r){let e=i.get(t.name);e?e.push(t):i.set(t.name,[t])}for(let t of i.values())t.sort((e,s)=>e.slot-s.slot);return i}var it="echolocal-keys",li=!1,di=null;function ce(r){return li||(li=!0,Ks(r)),di}function Ks(r){r.connection?.subscribeMessage(i=>{let t=new Map;for(let e of i.entities)e.device_id&&t.set(e.entity_id,{entityId:e.entity_id,deviceId:e.device_id,...Gs(e.object_id),disabled:e.disabled});di=t,window.dispatchEvent(new Event(it))},{type:"echolocal/entities"}).catch(()=>{})}function Gs(r){let i=r.lastIndexOf("_"),t=i<0?"":r.slice(i+1);return/^\d+$/.test(t)?{name:r.slice(0,i),slot:Number(t)}:{name:r,slot:0}}var jt={ring:[{title:null,rows:[["ring","Ring"]]},{title:"Segments",rows:[["segment","Segment"]]}],microphone:[{title:null,rows:[["mic_mute","Mute"]]},{title:"Capture",rows:[["microphone_gain","Gain"],["microphone_mixing","Mixing"],["microphone_leveling","Leveling"],["microphone_cancel_echo","Echo cancellation"]]},{title:"The room",rows:[["microphone_sensitivity","Sensitivity"],["room_level","Room level"],["room_floor","Room floor"],["stop_word_sensitivity","Stop word"],["vad_sensitivity","End of speech"]]},{title:"Indicator",rows:[["mute_led_brightness","Mute light"]]}],playback:[{title:null,rows:[["headphones","Headphones"]]},{title:"Generated sound",rows:[["noise_layer","Layer"]]},{title:"During a turn",rows:[["media_on_turn","Music"],["media_duck_level","Ducking"]]},{title:"Voice",rows:[["voice_resampling","Resampling"]]}],assistant:[{title:null,rows:[["wake_word","Wake word"],["pipeline","Pipeline"],["wake_threshold","Wake sensitivity"]]},{title:"Timing",rows:[["max_listen","Max listen"],["max_think","Max think"],["follow_up","Follow up"]]},{title:"Feedback",rows:[["wake_effect","Ring effect"],["wake_tone","Chime"]]},{title:"Reply",rows:[["reply_buffer","Buffer"],["reply_delivery","Delivery"]]},{title:"Recordings",rows:[["keep_recordings","Recordings kept"]]}],device:[{title:"Dashboard clock",rows:[["clock_date","Show date"],["clock_date_format","Date format"],["clock_date_pattern","Custom date pattern"]]},{title:null,rows:[["firmware","Firmware"],["update_channel","Update channel"],["check_for_updates","Check for updates"]]},{title:"Bluetooth",rows:[["bluetooth_proxy","Proxy enabled"]]},{title:"Maintenance",rows:[["metrics_interval","Metrics interval"],["purge_cache","Purge cache","cached_data"],["test_playback","Test playback"],["remote_adb","Remote adb"]]}],diagnostics:[{title:"Network",rows:[["ip_address","IP address"],["wifi_signal","Signal"],["wifi_sent","Sent"],["wifi_received","Received"],["ble_advertisements","Bluetooth advertisements"]]},{title:"Hardware",rows:[["cpu_temperature","CPU"],["radio_temperature","Radio"],["cpu_cores","Cores"],["cpu_cores_online","Cores online"],["load_average","Load"],["memory_available","Memory"],["free_space","Disk"]]},{title:"Updates",rows:[["update_status","Update status"],["update_outcome","Last update"]]}]},Vs={ring:[{widget:"power",place:"header",roles:{light:"ring"}},{widget:"appearance",roles:{light:"ring"},lists:{segments:"segment",muted:"ring_muted",failure:"failure_effect",room:"room_reaction"}}],playback:[{widget:"player",place:"header",roles:{player:"speaker"}},{widget:"volume",roles:{player:"speaker"},lists:{jack:"headphones"}},{widget:"noise",roles:{first:"noise_layer"},lists:{layers:"noise_layer"}}],activity:[{widget:"history",roles:{}}],microphone:[{widget:"mute",place:"header",roles:{mute:"mic_mute",lamp:"mute_led_brightness"}},{widget:"array",roles:{level:"room_level",floor:"room_floor",gate:"microphone_sensitivity",mode:"microphone_mixing"}}]},Ys=[["ring","ring"],["microphone","mic_mute"],["playback","speaker"]];function pi(r){let i=Ys.filter(([,t])=>r.by.has(t)).map(([t])=>({kind:t,slot:0}));for(let t of r.by.get("wake_threshold")??[])i.push({kind:"assistant",slot:t.slot});return i}function hi(r,i,t=0){let e=[],s=new Set;for(let n of Vs[r]??[]){let o={};for(let[d,h]of Object.entries(n.roles)){let g=Dt(i.by,h,t)[0];g&&(o[d]=g.entity_id)}if(Object.keys(o).length!==Object.keys(n.roles).length)continue;let c={};for(let[d,h]of Object.entries(n.lists??{}))c[d]=Dt(i.by,h,t).map(g=>g.entity_id);e.push({widget:n.widget,place:n.place??"body",roles:o,lists:c}),[...Object.values(o),...Object.values(c).flat()].forEach(d=>s.add(d))}return{widgets:e,sections:gi(jt[r]??[],i.by,t,s)}}var Xs=new Set(["switch","select","number","button","text","time","update"]);function ui(r){return fi(jt.device??[],r.entities.filter(i=>(i.device_id===r.device.id||["clock_date","clock_date_format","clock_date_pattern"].includes(i.name))&&Xs.has(i.entity_id.split(".")[0])),new Set)}function mi(r){let i=r.entities.filter(t=>t.entity_category==="diagnostic");return{widgets:[],sections:fi(jt.diagnostics??[],i,new Set)}}function Dt(r,i,t){let e=r.get(i)??[];return t?e.filter(s=>(s.slot||1)===t):e}function gi(r,i,t,e){let s=[];for(let n of r){let o=[];for(let[c,d,h]of n.rows){let g=Dt(i,c,t);for(let f of g)e.has(f.entity_id)||o.push({entityId:f.entity_id,name:c,label:g.length>1?`${d} ${f.slot}`:d,reading:h?Dt(i,h,t)[0]?.entity_id:void 0})}o.length&&s.push({title:n.title,rows:o})}return s}var Zs=new Set(Object.values(jt).flatMap(r=>(r??[]).flatMap(i=>i.rows.flatMap(([t,,e])=>e?[t,e]:[t]))));function fi(r,i,t){let e=gi(r,Ut(i),0,t),s=new Set(e.flatMap(o=>o.rows.flatMap(c=>[c.entityId,c.reading??""]))),n=i.filter(o=>!s.has(o.entity_id)&&!t.has(o.entity_id)&&!Zs.has(o.name));return n.length?[...e,{title:e.length?"More":null,rows:n.map(o=>({entityId:o.entity_id,name:o.name,label:o.name||o.entity_id})).sort((o,c)=>o.label.localeCompare(c.label))}]:e}var Js="EchoLocal",Qs="esphome",wt=12;function Ls(r){return!!r?.identifiers?.some(([i])=>i===Qs)}function vi(r,i){return Object.values(r.devices??{}).filter(t=>t.via_device_id===i&&!t.disabled_by).sort((t,e)=>S(t).localeCompare(S(e)))}function C(r){return r?Object.values(r.devices??{}).filter(i=>tr(r,i.id)&&!i.via_device_id&&!i.disabled_by).sort((i,t)=>S(i).localeCompare(S(t))):[]}function S(r){return r?.name_by_user||r?.name||""}function tr(r,i){return r?.devices?.[i]?.manufacturer!==Js?!1:vi(r,i).some(Ls)}function Y(r,i){if(!r||!i)return null;let t=r.devices?.[i];if(!t)return null;let e=new Set([i,...vi(r,i).map(d=>d.id)]),s=ci(r,Object.values(r.entities??{}).filter(d=>d.device_id&&e.has(d.device_id)&&!d.hidden)),n=Ut(s),o=d=>n.get(d)?.[0]?.entity_id,c=new Array(wt).fill(void 0);for(let d of n.get("segment")??[]){let h=d.slot-1;h>=0&&h<wt&&(c[h]=d.entity_id)}return{device:t,entities:s,by:n,satellite:o("assist_satellite"),player:o("speaker"),update:o("firmware"),ring:o("ring"),segments:c,mute:o("mic_mute")}}function bi(r){return(r.by.get("wake_assistant")??[]).map(i=>i.entity_id)}function $t(r,i){let t=i?r?.states?.[i]:void 0;return!t||t.state!=="on"?null:{rgb:t.attributes.rgb_color??[255,255,255],level:(t.attributes.brightness??255)/255}}function yi(r,i){return!!i&&r?.states?.[i]?.state==="on"}function xi(r,i){return(i?r?.states?.[i]?.state:void 0)??"unavailable"}function wi(r,i){let t=new Array(wt).fill(void 0),e=ce(r);if(!e)return t;let s=new Set(i.entities.map(n=>n.device_id));for(let n of e.values())!n.disabled||n.name!=="segment"||s.has(n.deviceId)&&n.slot>=1&&n.slot<=wt&&(t[n.slot-1]=n.entityId);return t}async function $i(r,i){await r.callWS({type:"config/entity_registry/update",entity_id:i,disabled_by:null})}var er={device_id:"Device",shell:"Shell",help:"Explain each setting"},st={ring:"mdi:record-circle-outline",microphone:"mdi:microphone",playback:"mdi:speaker",assistant:"mdi:account-voice",device:"mdi:cog-outline",diagnostics:"mdi:stethoscope",activity:"mdi:timeline-text-outline",follow:"mdi:backup-restore",close:"mdi:check"},ir={idle:"Idle",listening:"Listening",processing:"Thinking",responding:"Speaking",unavailable:"Unavailable",unknown:"Unknown"},sr=2500;function rr(r){let i=Math.log10(Math.max(r,1))/Math.log10(sr);return Math.min(1,Math.max(0,i))}var z=class extends v{constructor(){super(...arguments);this.opened=null;this.picked=null;this.holding=!1;this.timer=0;this.offering=null;this.again=()=>this.requestUpdate()}static getConfigElement(){return document.createElement("echolocal-satellite-card-editor")}static getStubConfig(t){return{device_id:C(t)[0]?.id??""}}setConfig(t){if(!t?.device_id)throw new Error("Choose an EchoLocal device");this.config={...t}}getCardSize(){return 6}connectedCallback(){super.connectedCallback(),window.addEventListener(it,this.again)}disconnectedCallback(){window.removeEventListener(it,this.again),super.disconnectedCallback()}shellFor(t){let e=this.config?.shell;if(e&&e!=="auto")return e;let s=t.by.get("hardware_color")?.[0]?.entity_id,n=s?this.hass.states[s]?.state:void 0;return n==="black"||n==="white"?n:"grey"}lux(t){let e=t.by.get("lux")?.[0]?.entity_id,s=e?Number(this.hass.states[e]?.state):NaN;return Number.isNaN(s)?null:{value:s,lit:rr(s)}}render(){if(!this.hass||!this.config)return p;let t=Y(this.hass,this.config.device_id);if(!t)return a`<ha-card><div class="missing">Device not found</div></ha-card>`;let e=xi(this.hass,t.satellite);return a`
      <ha-card>
        <div class="frame">
          <div class="art" data-shell=${this.shellFor(t)} data-activity=${e}>
            ${Ie({segments:this.segments(t),glow:this.glow(t),muted:yi(this.hass,t.mute),holding:this.holding,picked:this.picked,divisible:[...t.segments,...this.switchedOff(t)].some(Boolean),lux:this.lux(t)},{ring:()=>this.open({kind:"ring",slot:0}),segment:s=>this.tapped(t,s),action:s=>this.pressed(t,s),mute:()=>this.toggle("switch",t.mute),volume:s=>this.volume(t,s)})}
          </div>

          <div class="side">${this.side(t)}</div>

          ${this.offering!==null?this.offer(t,this.offering):this.picked===null?this.foot(t,e):this.palette(t)}
        </div>
      </ha-card>

      ${this.popup(t)}
    `}foot(t,e){return a`<div class="foot">
      <div class="label">
        <div class="name">${S(t.device)}</div>
        <div class="status">${ir[e]??e}</div>
      </div>
      <div class="tail">
        ${this.square(st.activity,"Activity",()=>this.open({kind:"activity",slot:0}))}
        ${this.square(st.device,"Settings",()=>this.open({kind:"device",slot:0}))}
        ${this.square(st.diagnostics,"Diagnostics",()=>this.open({kind:"diagnostics",slot:0}))}
      </div>
    </div>`}tapped(t,e){if(t.segments[e]){this.picked=this.picked===e?null:e;return}if(this.switchedOff(t)[e]){this.offering=e;return}this.open({kind:"ring",slot:0})}switchedOff(t){return wi(this.hass,t)}offer(t,e){let s=this.switchedOff(t),n=async o=>{for(let c of o)c&&await $i(this.hass,c);this.offering=null,this.picked=e};return a`<div class="foot">
      <div class="label">
        <div class="name">Segment ${e+1} disabled</div>
      </div>
      <div class="tail">
        <button class="plain" @click=${()=>n([s[e]])}>Enable</button>
        <button class="plain" @click=${()=>n(s)}>Enable all</button>
        <button class="plain quiet" @click=${()=>this.offering=null}>Cancel</button>
      </div>
    </div>`}palette(t){let e=t.segments[this.picked];return a`<div class="foot palette">
      <div class="top">
        <div class="name">Segment ${this.picked+1}</div>
        <div class="tail">
          ${this.square(st.follow,"Follow the ring",()=>{this.hass.callService("light","turn_off",{entity_id:e}),this.picked=null})}
          ${this.square(st.close,"Done",()=>this.picked=null)}
        </div>
      </div>
      <div class="swatches">
        ${zt.map(([s,n])=>a`<button
            class="swatch"
            title=${s}
            aria-label=${s}
            style=${`background:rgb(${n.join(",")})`}
            @click=${()=>this.hass.callService("light","turn_on",{entity_id:e,rgb_color:n})}
          ></button>`)}
      </div>
    </div>`}segments(t){let e=$t(this.hass,t.ring);return Array.from({length:xt},(s,n)=>{let o=$t(this.hass,t.segments[n])??e;return{fill:o?`rgb(${o.rgb.join(",")})`:"var(--el-ring-off)",opacity:o?.25+.75*o.level:1}})}glow(t){return $t(this.hass,t.ring)||t.segments.some(s=>$t(this.hass,s))?.55:0}side(t){let e=pi(t),s=e.filter(n=>n.kind==="assistant").length>1;return e.map(({kind:n,slot:o})=>this.square(st[n],this.titled(n,o),()=>this.open({kind:n,slot:o}),s&&n==="assistant"?o:null))}titled(t,e){let s={ring:"Ring",microphone:"Microphone",playback:"Playback",assistant:"Assistant",device:"Settings",diagnostics:"Diagnostics",activity:"Activity"}[t];return e?`${s} ${e}`:s}square(t,e,s,n=null){return a`<button class="sq" title=${e} aria-label=${e} @click=${s}>
      <ha-icon .icon=${t}></ha-icon>
      ${n?a`<span class="badge">${n}</span>`:p}
    </button>`}popup(t){if(!this.opened)return p;let{kind:e,slot:s}=this.opened,n,o=[];return e==="device"?n=ui(t):e==="diagnostics"?{widgets:o,sections:n}=mi(t):{widgets:o,sections:n}=hi(e,t,s),a`<echolocal-dialog
      .hass=${this.hass}
      .heading=${this.titled(e,s)}
      .subtitle=${S(t.device)}
      .icon=${st[e]}
      .sections=${n}
      .widgets=${o}
      .device=${t.device.name??""}
      .deviceId=${t.device.id}
      .help=${this.config.help!==!1}
      .about=${Ye(e)}
      @closed=${()=>this.opened=null}
    ></echolocal-dialog>`}open(t){this.opened=t}pressed(t,e){if(e==="down"){this.holding=!1,this.timer=window.setTimeout(()=>this.holding=!0,Ne);return}clearTimeout(this.timer);let s=this.holding;if(this.holding=!1,e==="cancel")return;let n=bi(t),o=n[s&&n.length>1?1:0];o?this.hass.callService("button","press",{entity_id:o}):this.moreInfo(t.satellite)}toggle(t,e){e&&this.hass.callService(t,"toggle",{entity_id:e})}volume(t,e){t.player&&this.hass.callService("media_player",e>0?"volume_up":"volume_down",{entity_id:t.player})}moreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}};z.styles=b(Ue),l([u({attribute:!1})],z.prototype,"hass",2),l([m()],z.prototype,"config",2),l([m()],z.prototype,"opened",2),l([m()],z.prototype,"picked",2),l([m()],z.prototype,"holding",2),l([m()],z.prototype,"offering",2),z=l([y("echolocal-satellite-card")],z);var ht=class extends v{setConfig(i){this.config={...i}}render(){if(!this.hass||!this.config)return p;let i=[{name:"device_id",required:!0,selector:{select:{mode:"dropdown",options:C(this.hass).map(t=>({value:t.id,label:S(t)}))}}},{name:"shell",selector:{select:{mode:"dropdown",options:[{value:"auto",label:"Auto (from device)"},{value:"black",label:"Black"},{value:"white",label:"White"},{value:"grey",label:"Grey"}]}}},{name:"help",selector:{boolean:{}}}];return a`<ha-form
      .hass=${this.hass}
      .data=${{help:!0,shell:"auto",...this.config}}
      .schema=${i}
      .computeLabel=${t=>er[t.name]??t.name}
      @value-changed=${t=>this.emit(t.detail.value)}
    ></ha-form>`}emit(i){this.config={...this.config,...i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}};l([u({attribute:!1})],ht.prototype,"hass",2),l([m()],ht.prototype,"config",2),ht=l([y("echolocal-satellite-card-editor")],ht);var de=[];function I(r){de.push(r),de.sort((i,t)=>i.order-t.order||i.title.localeCompare(t.title))}function he(r){return de.filter(i=>r||!i.admin)}function _i(r,i){let t=pe(r),e=he(i);return e.find(s=>s.path===t)??e[0]}function ki(r,i){let t=i?`${r}/${i}`:r;location.pathname!==t&&history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}function ue(r,i){if(i!==void 0)return pe(i);let t=location.pathname;return pe(t.startsWith(r)?t.slice(r.length):"")}function pe(r){return r.replace(/^\/+|\/+$/g,"")}var Si=`:host{display:block;height:100%;overflow:auto;background:var(--primary-background-color);color:var(--primary-text-color)}header{position:sticky;top:0;z-index:2;background:var(--primary-background-color);border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent)}.bar{max-width:1280px;margin:0 auto;padding:0 16px;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}.bar::-webkit-scrollbar{display:none}button{display:flex;align-items:center;gap:7px;flex:0 0 auto;padding:14px 14px 12px;border:none;border-bottom:2px solid transparent;background:none;color:var(--secondary-text-color);font:inherit;font-size:.88rem;cursor:pointer}button:hover{color:var(--primary-text-color)}button[data-here=true]{color:var(--primary-color);border-bottom-color:var(--primary-color)}button ha-icon{--mdc-icon-size: 19px;display:flex}.page{max-width:1280px;margin:0 auto;padding:20px 16px 48px;box-sizing:border-box}@media(max-width:600px){button span{display:none}button{padding:14px 16px 12px}}
`;var me="";async function Ft(r){try{return await r.callWS({type:"config/label_registry/list"})??[]}catch{return[]}}function Wt(r,i){let t=new Map,e=[];for(let n of r){let o=n.labels??[];if(!o.length){e.push(n);continue}for(let c of o){let d=i.find(g=>g.label_id===c),h=t.get(c);h?h.devices.push(n):t.set(c,{id:c,name:d?.name??c,icon:d?.icon,devices:[n]})}}let s=[...t.values()].sort((n,o)=>n.name.localeCompare(o.name));return e.length&&s.push({id:me,name:"Ungrouped",devices:e}),s}async function Ai(r,i){try{return await r.callWS({type:"config/label_registry/create",name:i})}catch{return null}}async function Ci(r,i,t){await r.callWS({type:"config/label_registry/update",label_id:i,name:t})}async function Mi(r,i){await r.callWS({type:"config/label_registry/delete",label_id:i})}async function Hi(r,i,t){await r.callWS({type:"config/device_registry/update",device_id:i,labels:[...new Set(t)]})}async function Ti(r,i,t,e){let s=0,n=0,o=0;return await Promise.all(i.map(async c=>{let d=Ei(r,c,t);if(!d){o+=1;return}try{await e(d),s+=1}catch{n+=1}})),{done:s,failed:n,missing:o}}function qt(r,i,t){let e=i.map(n=>Ei(r,n,t)).filter(n=>!!n),s=[...new Set(e.map(n=>r.states[n]?.state).filter(Boolean))];return{value:s.length===1?s[0]:null,mixed:s.length>1,entities:e}}function Ei(r,i,t){return Y(r,i.id)?.by.get(t)?.[0]?.entity_id}var Ri=`:host{display:block;margin-bottom:10px}.bar{display:flex;align-items:center;gap:12px;padding:8px 4px 8px 2px;border-bottom:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent)}.name{font-size:1.05rem;color:var(--primary-text-color)}.count{font-size:.78rem;color:var(--secondary-text-color)}.spacer{flex:1}button{display:flex;align-items:center;gap:6px;padding:5px 11px;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}button:hover{color:var(--primary-text-color);border-color:color-mix(in srgb,var(--primary-text-color) 34%,transparent)}button[data-on=true]{color:var(--primary-color);border-color:color-mix(in srgb,var(--primary-color) 50%,transparent);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}button ha-icon{--mdc-icon-size: 16px;display:flex}.mixed{font-size:.7rem;opacity:.75}
`;var Pi="mic_mute",zi="ring",Oi="speaker",X=class extends v{constructor(){super(...arguments);this.said=""}render(){if(!this.hass||!this.group)return p;let t=this.group.devices,e=qt(this.hass,t,Pi),s=qt(this.hass,t,zi);return a`<div class="bar">
      ${this.group.icon?a`<ha-icon .icon=${this.group.icon}></ha-icon>`:p}
      <div class="name">${this.group.name}</div>
      <div class="count">${t.length} ${t.length===1?"device":"devices"}</div>
      <div class="spacer"></div>
      ${this.said?a`<div class="short">${this.said}</div>`:p}

      ${e.entities.length?this.toggle("mdi:microphone-off","Mute all",e,()=>this.write(Pi,"switch",e.value==="on"?"turn_off":"turn_on")):p}
      ${s.entities.length?this.toggle("mdi:lightbulb-outline","Ring",s,()=>this.write(zi,"light",s.value==="on"?"turn_off":"turn_on")):p}
      ${this.has(Oi)?a`<button title="Stop whatever is playing" @click=${()=>this.write(Oi,"media_player","media_stop")}>
            <ha-icon icon="mdi:stop"></ha-icon>Stop
          </button>`:p}
    </div>`}toggle(t,e,s,n){return a`<button data-on=${String(s.value==="on")} @click=${n}>
      <ha-icon .icon=${t}></ha-icon>${e}
      ${s.mixed?a`<span class="mixed">mixed</span>`:p}
    </button>`}has(t){return qt(this.hass,this.group.devices,t).entities.length>0}async write(t,e,s){let{done:n,failed:o,missing:c}=await Ti(this.hass,this.group.devices,t,h=>this.hass.callService(e,s,{entity_id:h})),d=o+c;this.said=d?`${n} of ${n+d}`:"",this.said&&setTimeout(()=>this.said="",4e3)}};X.styles=b(Ri),l([u({attribute:!1})],X.prototype,"hass",2),l([u({attribute:!1})],X.prototype,"group",2),l([m()],X.prototype,"said",2),X=l([y("echolocal-groupbar")],X);var Ni=`:host{display:block}.group{margin-bottom:26px}.view{display:flex;justify-content:flex-end;margin-bottom:14px}.pair{display:flex;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;overflow:hidden}.pair button{display:flex;align-items:center;gap:6px;padding:5px 13px;border:none;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}.pair button:hover{color:var(--primary-text-color)}.pair button[data-on=true]{color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 14%,transparent)}.pair button ha-icon{--mdc-icon-size: 16px;display:flex}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:16px;align-items:start}.empty{color:var(--secondary-text-color);max-width:46ch;line-height:1.5}
`;I({path:"",title:"Home",icon:"mdi:view-grid-outline",element:"echolocal-home",order:0});var Ii="echolocal:home:grouped",U=class extends v{constructor(){super(...arguments);this.narrow=!1;this.known=[];this.asked=!1;this.grouped=localStorage.getItem(Ii)!=="no";this.cards=new Map}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let t=C(this.hass);if(!t.length)return a`<div class="empty">
        No EchoLocal devices yet. One appears here once Home Assistant has adopted it over the ESPHome
        integration.
      </div>`;let e=Wt(t,this.known),s=e.some(o=>o.id!==me),n=this.grouped&&s?e:[{id:"all",name:"All devices",devices:t}];return a`
      ${s?a`<div class="view">
            <div class="pair">
              ${this.button(!0,"mdi:group","Grouped")}${this.button(!1,"mdi:view-grid-outline","All")}
            </div>
          </div>`:p}
      ${n.map(o=>this.group(o))}
    `}button(t,e,s){return a`<button
      data-on=${String(this.grouped===t)}
      @click=${()=>{this.grouped=t,localStorage.setItem(Ii,t?"yes":"no")}}
    >
      <ha-icon .icon=${e}></ha-icon>${s}
    </button>`}group(t){return a`<div class="group">
      <echolocal-groupbar .hass=${this.hass} .group=${t}></echolocal-groupbar>
      <div class="grid">${t.devices.map(e=>this.card(t.id,e.id))}</div>
    </div>`}card(t,e){let s=`${t}/${e}`,n=this.cards.get(s);return n||(n=document.createElement("echolocal-satellite-card"),n.setConfig({device_id:e}),this.cards.set(s,n)),n.hass=this.hass,n}async load(){this.known=await Ft(this.hass)}};U.styles=b(Ni),l([u({attribute:!1})],U.prototype,"hass",2),l([u({type:Boolean})],U.prototype,"narrow",2),l([m()],U.prototype,"known",2),l([m()],U.prototype,"asked",2),l([m()],U.prototype,"grouped",2),U=l([y("echolocal-home")],U);var Ui=`:host{display:block}.make{display:flex;gap:8px;margin-bottom:20px}ha-input.new{flex:1;max-width:280px}table{width:100%;border-collapse:collapse;font-size:.9rem}th{padding:8px 10px;text-align:center;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);white-space:nowrap}th.who{text-align:left}th .label{display:flex;align-items:center;justify-content:center;gap:4px}th ha-input{--ha-input-text-align: center}th ha-icon-button{--mdc-icon-size: 15px;color:var(--secondary-text-color)}th ha-icon-button:hover{color:var(--error-color, #db4437)}td{padding:10px;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);text-align:center}td.who{text-align:left;color:var(--primary-text-color)}.none{color:var(--secondary-text-color);max-width:52ch;line-height:1.5}
`;I({path:"groups",title:"Groups",icon:"mdi:group",element:"echolocal-groups",order:30,admin:!0});var D=class extends v{constructor(){super(...arguments);this.known=[];this.asked=!1;this.naming="";this.busy=!1}connectedCallback(){super.connectedCallback(),this.hass?.connection?.subscribeEvents(()=>this.load(),"label_registry_updated").then(t=>this.stop=t).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let t=C(this.hass),e=this.known;return a`
      <div class="make">
        <ha-input
          class="new"
          placeholder="New group"
          .value=${this.naming}
          @input=${s=>this.naming=s.target.value}
          @keydown=${s=>s.key==="Enter"&&this.make()}
        ></ha-input>
        <ha-button
          .disabled=${!this.naming.trim()||this.busy}
          .loading=${this.busy}
          @click=${this.make}
        >
          Add
        </ha-button>
      </div>

      ${t.length?a`<table>
            <thead>
              <tr>
                <th class="who">Device</th>
                ${e.map(s=>this.head(s))}
              </tr>
            </thead>
            <tbody>
              ${t.map(s=>this.row(s,e))}
            </tbody>
          </table>`:a`<div class="none">
            No EchoLocal devices yet, so there is nothing to group.
          </div>`}
    `}head(t){let e=Wt(C(this.hass),this.known).find(s=>s.id===t.label_id)?.devices.length;return a`<th>
      <div class="label">
        <ha-input
          .value=${t.name}
          style=${`width:${Math.max(8,t.name.length+2)}ch`}
          @change=${s=>this.rename(t,s.target.value)}
        ></ha-input>
        <ha-icon-button
          .label=${e?`Delete ${t.name}, ${e} still in it`:`Delete ${t.name}`}
          @click=${()=>this.discard(t)}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
      </div>
    </th>`}row(t,e){let s=t.labels??[];return a`<tr>
      <td class="who">${S(t)}</td>
      ${e.map(n=>a`<td>
          <ha-checkbox
            aria-label="${S(t)} in ${n.name}"
            .checked=${s.includes(n.label_id)}
            @change=${o=>this.set(t,n.label_id,o.target.checked)}
          ></ha-checkbox>
        </td>`)}
    </tr>`}async make(){let t=this.naming.trim();if(!t||this.busy)return;this.busy=!0,this.naming="";let e=await Ai(this.hass,t);e&&(this.known=[...this.known,e].sort((s,n)=>s.name.localeCompare(n.name))),this.busy=!1,e||await this.load()}async rename(t,e){!e.trim()||e===t.name||(this.known=this.known.map(s=>s.label_id===t.label_id?{...s,name:e.trim()}:s),await Ci(this.hass,t.label_id,e.trim()))}async discard(t){this.known=this.known.filter(e=>e.label_id!==t.label_id),await Mi(this.hass,t.label_id)}async set(t,e,s){let n=new Set(t.labels??[]);s?n.add(e):n.delete(e),await Hi(this.hass,t.id,[...n])}async load(){this.known=await Ft(this.hass)}};D.styles=b(Ui),l([u({attribute:!1})],D.prototype,"hass",2),l([m()],D.prototype,"known",2),l([m()],D.prototype,"asked",2),l([m()],D.prototype,"naming",2),l([m()],D.prototype,"busy",2),D=l([y("echolocal-groups")],D);var Di=`:host{display:block}.filters{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px}.filters button{padding:5px 12px;border:1px solid color-mix(in srgb,var(--primary-text-color) 16%,transparent);border-radius:999px;background:none;color:var(--secondary-text-color);font:inherit;font-size:.8rem;cursor:pointer}.filters button[data-on=true]{color:var(--primary-color);border-color:color-mix(in srgb,var(--primary-color) 50%,transparent);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.turns{display:grid;gap:8px}.turn{display:grid;grid-template-columns:auto 9ch 1fr auto;gap:3px 12px;align-items:center;padding:11px 14px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent)}.right{display:flex;align-items:center;gap:10px;justify-content:flex-end}.when{font-size:.78rem;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}.who{font-size:.88rem;color:var(--primary-text-color);overflow:hidden;text-overflow:ellipsis}.content{display:flex;flex-direction:column;gap:2px;min-width:0}.wake{font-size:.8rem;color:var(--primary-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.said,.said-back{font-size:.88rem;color:var(--secondary-text-color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.said-back:before{content:"\\21b3  ";opacity:.6}.took{font-size:.8rem;color:var(--secondary-text-color);font-variant-numeric:tabular-nums}.took[data-bad=true]{color:var(--error-color, #db4437)}.bar{grid-column:2 / -1;display:flex;height:20px;margin-top:5px;border-radius:5px;overflow:hidden;background:color-mix(in srgb,var(--primary-text-color) 8%,transparent)}.slice{display:flex;align-items:center;justify-content:center;overflow:hidden;font-size:.68rem;font-variant-numeric:tabular-nums;color:var(--text-primary-color, #fff);white-space:nowrap}.slice[data-phase=listen_ms]{background:color-mix(in srgb,var(--info-color, #039be5) 55%,var(--primary-text-color))}.slice[data-phase=think_ms]{background:var(--secondary-text-color)}.slice[data-phase=speak_ms]{background:var(--success-color, #43a047)}.none{color:var(--secondary-text-color);max-width:56ch;line-height:1.5}.loading{display:flex;justify-content:center;padding:48px 0}.legend{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:14px;font-size:.72rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px}
`;I({path:"activity",title:"Activity",icon:"mdi:timeline-text-outline",element:"echolocal-activity",order:20});var dr=14,j=class extends v{constructor(){super(...arguments);this.seen=[];this.only="";this.asked=!1;this.loading=!0}updated(){this.asked||!this.hass||(this.asked=!0,this.listen())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}render(){if(!this.hass)return p;let t=this.names(),e=this.only?this.seen.filter(n=>n.turn.device===this.only):this.seen,s=Math.max(1,...e.map(n=>lt(n.turn)));return a`
      ${this.seen.length>0&&Object.keys(t).length>1?a`<div class="filters">
            <button data-on=${String(!this.only)} @click=${()=>this.only=""}>Everything</button>
            ${[...new Set(this.seen.map(n=>n.turn.device))].map(n=>a`<button
                data-on=${String(this.only===n)}
                @click=${()=>this.only=n}
              >
                ${t[n]?.label??n}
              </button>`)}
          </div>`:p}

      ${e.length?a`<div class="legend">
              ${[["listen_ms","Listen"],["think_ms","Think"],["speak_ms","Reply"]].map(([n,o])=>a`<span class="key"
                  ><span class="dot slice" data-phase=${n}></span>${o}</span
                >`)}
            </div>
            <div class="turns">${e.map(n=>this.row(n,t,s))}</div>`:this.loading?a`<div class="loading"><ha-spinner size="large"></ha-spinner></div>`:a`<div class="none">No recent activity found.</div>`}
    `}row(t,e,s){let n=at(t.turn),o=lt(t.turn),c=t.turn.outcome!=="completed",d=e[t.turn.device],h=d?.label??"elsewhere";return a`<div class="turn">
      <div class="when">${hr(t.at)}</div>
      <div class="who">${h}</div>
      <div class="content">
        <div class="wake">${t.turn.wake_word}</div>
        ${t.turn.heard?a`<div class="said">${t.turn.heard}</div>`:p}
        ${t.turn.reply?a`<div class="said-back">${t.turn.reply}</div>`:p}
      </div>
      <div class="right">
        <div class="took" data-bad=${String(c)}>
          ${c?t.turn.outcome:`${(o/1e3).toFixed(1)}s`}
        </div>
        ${t.turn.audio_seconds?a`<echolocal-recording
              .hass=${this.hass}
              .device=${d?.node??""}
              .turn=${t.turn.id}
              .at=${t.at}
              .filename=${pr(t,h)}
            ></echolocal-recording>`:p}
      </div>
      ${n.length?a`<div class="bar">
            ${n.map(g=>a`<div
                class="slice"
                data-phase=${g.key}
                title=${`${g.label} ${g.ms} ms`}
                style=${`flex:0 0 ${g.ms/s*100}%`}
              >
                ${(g.ms/1e3).toFixed(1)}s
              </div>`)}
          </div>`:p}
    </div>`}names(){let t={};for(let e of C(this.hass))t[e.id]={label:S(e),node:e.name??""};return t}async listen(){let t=new Date(Date.now()-dr*864e5),e=C(this.hass).map(s=>s.id);if(!e.length){this.asked=!1;return}try{this.stop=await Ot(this.hass,t,e,s=>{this.loading=!1,s.length&&(this.seen=[...s,...this.seen].sort((n,o)=>o.at-n.at))})}catch{this.loading=!1}}};j.styles=b(Di),l([u({attribute:!1})],j.prototype,"hass",2),l([m()],j.prototype,"seen",2),l([m()],j.prototype,"only",2),l([m()],j.prototype,"asked",2),l([m()],j.prototype,"loading",2),j=l([y("echolocal-activity")],j);function pr(r,i){let t=new Date(r.at).toISOString().replace(/[:.]/g,"-").slice(0,19),e=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,"-");return`${t}-${e(i)}-${e(r.turn.wake_word)}.wav`}function hr(r){return new Date(r).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}var ji=`:host{display:block}.scroll{overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:.88rem}th{padding:8px 12px;text-align:right;white-space:nowrap;font-weight:600;font-size:.71rem;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);cursor:pointer;user-select:none}th:first-child{text-align:left}th:hover{color:var(--primary-text-color)}th[data-by=true]{color:var(--primary-color)}td{padding:11px 12px;text-align:right;white-space:nowrap;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 10%,transparent);font-variant-numeric:tabular-nums;color:var(--secondary-text-color)}td.who{text-align:left;color:var(--primary-text-color)}td.who button{padding:0;border:none;background:none;color:inherit;font:inherit;cursor:pointer;text-align:left}td.who button:hover{color:var(--primary-color)}td[data-wrong=warn]{color:var(--warning-color, #ffa600)}td[data-wrong=bad]{color:var(--error-color, #db4437);font-weight:600}tr[data-off=true] td{opacity:.5}.none{color:var(--secondary-text-color)}
`;I({path:"health",title:"Health",icon:"mdi:heart-pulse",element:"echolocal-health",order:40});function ge(r){let i=Number(r.state);return r.attributes.unit_of_measurement==="\xB0F"?(i-32)*5/9:i}var fe=[{title:"Version",name:"firmware",show:r=>String(r.attributes.installed_version??"\u2014"),sort:r=>String(r.attributes.installed_version??"")},{title:"Update",name:"firmware",show:r=>r.state==="on"?"waiting":r.state==="off"?"current":r.state,wrong:r=>r.state==="on"?"warn":void 0,sort:r=>r.state},{title:"Wifi",name:"wifi_signal",show:r=>`${Math.round(Number(r.state))} ${r.attributes.unit_of_measurement||"dBm"}`,wrong:r=>Number(r.state)<-80?"bad":Number(r.state)<-70?"warn":void 0},{title:"CPU",name:"cpu_temperature",show:r=>`${Math.round(Number(r.state))}${r.attributes.unit_of_measurement||"\xB0C"}`,wrong:r=>ge(r)>85?"bad":ge(r)>70?"warn":void 0,sort:ge},{title:"Load",name:"load_average",show:r=>Number(r.state).toFixed(2)},{title:"Memory",name:"memory_available",show:r=>`${Math.round(Number(r.state))} ${r.attributes.unit_of_measurement||"MB"}`,wrong:r=>Number(r.state)<40?"bad":Number(r.state)<80?"warn":void 0},{title:"Disk",name:"free_space",show:r=>`${Math.round(Number(r.state))} ${r.attributes.unit_of_measurement||"MB"}`,wrong:r=>Number(r.state)<50?"bad":Number(r.state)<150?"warn":void 0},{title:"Address",name:"ip_address",show:r=>r.state.split(", ")[0]??r.state}],Z=class extends v{constructor(){super(...arguments);this.by="";this.down=!1}render(){if(!this.hass)return p;let t=C(this.hass);if(!t.length)return a`<div class="none">No EchoLocal devices yet.</div>`;let e=t.map(n=>this.read(n)),s=this.sort(e);return a`<div class="scroll">
      <table>
        <thead>
          <tr>
            ${this.head("Device")}${fe.map(n=>this.head(n.title))}
          </tr>
        </thead>
        <tbody>
          ${s.map(n=>a`<tr data-off=${String(!n.up)}>
              <td class="who">
                <button @click=${()=>this.open(n.device)}>${n.name}</button>
              </td>
              ${fe.map(o=>{let c=n.cells[o.title];return a`<td data-wrong=${c?.wrong??""}>${c?.text??"\u2014"}</td>`})}
            </tr>`)}
        </tbody>
      </table>
    </div>`}head(t){return a`<th
      data-by=${String(this.by===t)}
      @click=${()=>{this.down=this.by===t?!this.down:!1,this.by=t}}
    >
      ${t}
    </th>`}read(t){let e=Y(this.hass,t.id),s={},n=!1;for(let o of fe){let c=e?.by.get(o.name)?.[0]?.entity_id,d=c?this.hass.states[c]:void 0;if(!d||d.state==="unavailable"||d.state==="unknown")continue;n=!0;let h=Number(d.state),g=d.attributes.unit_of_measurement??"";s[o.title]={text:o.show?o.show(d):g?`${d.state} ${g}`:d.state,sort:o.sort?o.sort(d):Number.isFinite(h)&&d.state!==""?h:d.state,wrong:o.wrong?.(d)}}return{device:t,name:S(t),cells:s,up:n}}sort(t){if(!this.by)return t;let e=s=>this.by==="Device"?s.name:s.cells[this.by]?.sort??"";return[...t].sort((s,n)=>{let o=e(s),c=e(n),d=typeof o=="number"&&typeof c=="number"?o-c:String(o).localeCompare(String(c));return this.down?-d:d})}open(t){history.pushState(null,"",`/config/devices/device/${t.id}`),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}};Z.styles=b(ji),l([u({attribute:!1})],Z.prototype,"hass",2),l([m()],Z.prototype,"by",2),l([m()],Z.prototype,"down",2),Z=l([y("echolocal-health")],Z);var Fi=`:host{display:block}.zone{display:flex;align-items:center;gap:12px;padding:16px;margin-bottom:16px;border:1px dashed color-mix(in srgb,var(--primary-text-color) 22%,transparent);border-radius:14px;background:color-mix(in srgb,var(--primary-text-color) 4%,transparent);cursor:pointer;transition:border-color .15s ease,background .15s ease}.zone[data-over=true]{border-color:var(--primary-color);background:color-mix(in srgb,var(--primary-color) 12%,transparent)}.zone ha-icon{--mdc-icon-size: 24px;color:var(--secondary-text-color);display:flex;flex:0 0 auto}.zone[data-over=true] ha-icon{color:var(--primary-color)}.lead{font-size:.95rem;color:var(--primary-text-color)}.sub{font-size:.78rem;color:var(--secondary-text-color)}.scroll{overflow-x:auto}table{width:100%;border-collapse:collapse;font-size:.85rem}th{padding:0 10px 6px;text-align:left;font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.07em;color:var(--secondary-text-color);white-space:nowrap}td{padding:4px 10px;border-top:1px solid color-mix(in srgb,var(--primary-text-color) 8%,transparent);vertical-align:middle}tbody tr[data-used=true] td:first-child{box-shadow:inset 3px 0 0 var(--success-color, #43a047)}tbody tr[data-used=false] td:first-child{box-shadow:inset 3px 0 0 var(--info-color, #039be5)}tbody tr[data-bad=true] td:first-child{box-shadow:inset 3px 0 0 var(--error-color, #db4437)}tbody tr:hover td{background:color-mix(in srgb,var(--primary-text-color) 4%,transparent)}.say{width:22ch}.say ha-input{--ha-input-padding-top: 0;--ha-input-padding-bottom: 0}.say ha-input::part(wa-base){border-color:transparent;background:none;min-height:34px}.say ha-input:hover::part(wa-base){border-color:color-mix(in srgb,var(--primary-text-color) 22%,transparent)}.say ha-input:focus-within::part(wa-base){border-color:var(--primary-color)}.say ha-input::part(wa-input){font-size:.9rem;padding-inline:8px}.id{font-family:var(--ha-font-family-code, monospace);font-size:.78rem;color:var(--secondary-text-color);word-break:break-all}.facts{color:var(--secondary-text-color);font-size:.78rem;font-variant-numeric:tabular-nums;white-space:nowrap}.end{text-align:right}.acts{display:flex;gap:2px;justify-content:flex-end}.act{width:30px;height:30px;display:grid;place-items:center;padding:0;border:none;border-radius:50%;background:none;color:var(--secondary-text-color);cursor:pointer}.act:hover{background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}.act.bin:hover{background:color-mix(in srgb,var(--error-color, #db4437) 16%,transparent);color:var(--error-color, #db4437)}.act ha-icon{--mdc-icon-size: 18px;display:flex}tr.wrong td{border-top:none;padding-top:0;font-size:.76rem;color:var(--error-color, #db4437)}.none{padding:4px 0;font-size:.85rem;color:var(--secondary-text-color)}input[type=file]{display:none}
`;async function ve(r){try{return(await r.callWS({type:"echolocal/wake_words/list"}))?.wake_words??[]}catch{return[]}}var E=class extends v{constructor(){super(...arguments);this.inUse=new Set;this.words=[];this.over=!1;this.busy=!1;this.said="";this.asked=!1;this.dropped=t=>{t.preventDefault(),this.over=!1,this.add(t.dataTransfer?.files??null)}}updated(){this.asked||!this.hass||(this.asked=!0,this.refresh())}render(){return a`
      <div
        class="zone"
        data-over=${String(this.over)}
        @click=${()=>this.shadowRoot?.querySelector("input[type=file]")?.click()}
        @dragover=${t=>{t.preventDefault(),this.over=!0}}
        @dragleave=${()=>this.over=!1}
        @drop=${this.dropped}
      >
        ${this.busy?a`<ha-spinner></ha-spinner>`:a`<ha-icon icon="mdi:tray-arrow-up"></ha-icon>`}
        <div>
          <div class="lead">${this.busy?"Adding\u2026":"Drop a .tflite wake model here"}</div>
          <div class="sub">
            ${this.said||"Every satellite is offered the whole set and downloads what it is told to listen for"}
          </div>
        </div>
        <input
          type="file"
          accept=".tflite"
          multiple
          @change=${t=>this.add(t.target.files)}
        />
      </div>

      ${this.words.length?a`<div class="scroll">
            <table>
              <thead>
                <tr>
                  <th class="say">Wake word</th>
                  <th>File</th>
                  <th>Model</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${this.words.map(t=>this.row(t))}
              </tbody>
            </table>
          </div>`:a`<div class="none">
            Nothing in custom_wake_words yet. Whatever the firmware ships with is unaffected.
          </div>`}
    `}row(t){let e=[t.type||"no type",t.size?`${Math.round(t.size/1024)} KB`:"no model",...t.trained_languages.length?[t.trained_languages.join(", ")]:[]],s=this.inUse.has(t.wake_word);return a`<tr data-bad=${String(t.problems.length>0)} data-used=${String(s)}>
      <td class="say">
        <ha-input
          appearance="outlined"
          .value=${t.wake_word}
          placeholder="what wakes it"
          @change=${n=>this.rename(t,n.target.value)}
        ></ha-input>
      </td>
      <td class="id">${t.id}</td>
      <td class="facts">${e.join(" \xB7 ")}</td>
      <td class="end">
        <div class="acts">
          ${t.model_url?a`<a class="act" href=${t.model_url} download title=${`${t.id}.tflite`}>
                <ha-icon icon="mdi:waveform"></ha-icon>
              </a>`:p}
          ${t.config_url?a`<a class="act" href=${t.config_url} download title=${`${t.id}.json`}>
                <ha-icon icon="mdi:code-json"></ha-icon>
              </a>`:p}
          <button class="act bin" title=${`Remove ${t.id}`} @click=${()=>this.discard(t)}>
            <ha-icon icon="mdi:trash-can-outline"></ha-icon>
          </button>
        </div>
      </td>
    </tr>
    ${t.problems.length?a`<tr class="wrong" data-bad="true">
          <td colspan="4">${t.problems.join(". ")}.</td>
        </tr>`:p}`}async add(t){let e=[...t??[]].filter(s=>s.name.endsWith(".tflite"));if(!e.length){this.said="A wake model is a .tflite file.";return}this.busy=!0,this.said="";for(let s of e){let n=new FormData;n.append("file",s);try{let o=await fetch("/api/echolocal/wake_words",{method:"POST",body:n,headers:this.credentials()});if(!o.ok){let c=await o.json().catch(()=>({}));this.said=c.error??`Home Assistant refused ${s.name}.`;break}}catch(o){this.said=`That did not reach Home Assistant: ${o}`;break}}this.busy=!1,await this.refresh()}async rename(t,e){e!==t.wake_word&&(await this.hass.callWS({type:"echolocal/wake_words/update",wake_word_id:t.id,wake_word:e}),await this.refresh())}async discard(t){await this.hass.callWS({type:"echolocal/wake_words/delete",wake_word_id:t.id}),await this.refresh()}async refresh(){this.words=await ve(this.hass)}credentials(){let t=this.hass.auth?.data?.access_token;return t?{authorization:`Bearer ${t}`}:{}}};E.styles=b(Fi),l([u({attribute:!1})],E.prototype,"hass",2),l([u({attribute:!1})],E.prototype,"inUse",2),l([m()],E.prototype,"words",2),l([m()],E.prototype,"over",2),l([m()],E.prototype,"busy",2),l([m()],E.prototype,"said",2),l([m()],E.prototype,"asked",2),E=l([y("echolocal-wake-words")],E);var Wi=`:host{display:block}h2.first{margin-top:0}h2{margin:26px 0 10px;font-size:.72rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--secondary-text-color)}.listening{display:grid;gap:8px}.who{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;padding:10px 14px;border-radius:12px;background:color-mix(in srgb,var(--primary-text-color) 5%,transparent);font-size:.9rem}.who .name{color:var(--primary-text-color);min-width:8ch}.word{padding:2px 9px;border-radius:999px;font-size:.78rem;background:color-mix(in srgb,var(--primary-color) 16%,transparent);color:var(--primary-color)}.word[data-gone=true]{background:color-mix(in srgb,var(--error-color, #db4437) 16%,transparent);color:var(--error-color, #db4437)}.spare{font-size:.85rem;color:var(--secondary-text-color);line-height:1.5}.heading{display:flex;align-items:baseline;gap:14px;flex-wrap:wrap}.legend{display:flex;gap:14px;flex-wrap:wrap;margin-left:auto;font-size:.72rem;color:var(--secondary-text-color)}.key{display:flex;align-items:center;gap:5px}.dot{width:9px;height:9px;border-radius:2px;background:var(--info-color, #039be5)}.dot[data-used=true]{background:var(--success-color, #43a047)}
`;I({path:"wake-words",title:"Wake words",icon:"mdi:waveform",element:"echolocal-words",order:10,admin:!0});var J=class extends v{constructor(){super(...arguments);this.words=[];this.asked=!1;this.again=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener(it,this.again)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(it,this.again)}updated(){this.asked||!this.hass||(this.asked=!0,this.load())}render(){if(!this.hass)return p;let t=this.chosen(),e=new Set(this.words.filter(n=>n.problems.length&&n.wake_word).map(n=>n.wake_word)),s=new Set(t.flatMap(n=>n.words));return a`
      <h2 class="first">Listening for</h2>
      ${t.length?a`<div class="listening">
            ${t.map(n=>a`<div class="who">
                <span class="name">${n.name}</span>
                ${n.words.map(o=>a`<span
                      class="word"
                      data-gone=${String(e.has(o))}
                      title=${e.has(o)?"Its library entry is broken, so it is not offered":""}
                      >${o}</span
                    >`)}
              </div>`)}
          </div>`:a`<div class="spare">No devices have picked a wake word yet.</div>`}

      <div class="heading">
        <h2>The library</h2>
        <div class="legend">
          <span class="key"><span class="dot" data-used="true"></span>Used</span>
          <span class="key"><span class="dot" data-used="false"></span>Unused</span>
        </div>
      </div>
      <echolocal-wake-words .hass=${this.hass} .inUse=${s}></echolocal-wake-words>
    `}chosen(){return C(this.hass).map(t=>{let s=(Y(this.hass,t.id)?.by.get("wake_word")??[]).map(n=>this.hass.states[n.entity_id]?.state).filter(n=>n!=="no_wake_word").filter(n=>!!n&&n!=="unknown"&&n!=="None");return{name:S(t),words:s}}).filter(t=>t.words.length)}async load(){this.words=await ve(this.hass)}};J.styles=b(Wi),l([u({attribute:!1})],J.prototype,"hass",2),l([m()],J.prototype,"words",2),l([m()],J.prototype,"asked",2),J=l([y("echolocal-words")],J);var F=class extends v{constructor(){super(...arguments);this.narrow=!1;this.at="";this.made=new Map;this.moved=()=>{this.at=ue(this.base(),void 0),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),window.addEventListener("location-changed",this.moved),window.addEventListener("popstate",this.moved)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("location-changed",this.moved),window.removeEventListener("popstate",this.moved)}render(){if(!this.hass)return p;let t=!!this.hass.user?.is_admin,e=he(t),s=_i(this.where(),t);return a`
      <header>
        <div class="bar">${e.map(n=>this.button(n,n===s))}</div>
      </header>
      <div class="page">${s?this.body(s):p}</div>
    `}button(t,e){return a`<button
      data-here=${String(e)}
      @click=${()=>{this.at=t.path,ki(this.base(),t.path)}}
    >
      <ha-icon .icon=${t.icon}></ha-icon><span>${t.title}</span>
    </button>`}body(t){let e=this.made.get(t.path);return e||(e=document.createElement(t.element),this.made.set(t.path,e)),e.hass=this.hass,e.narrow=this.narrow,e}where(){return this.route?ue(this.base(),this.route.path):this.at}base(){return this.route?.prefix??"/echolocal"}};F.styles=b(Si),l([u({attribute:!1})],F.prototype,"hass",2),l([u({type:Boolean})],F.prototype,"narrow",2),l([u({attribute:!1})],F.prototype,"route",2),l([u({attribute:!1})],F.prototype,"panel",2),l([m()],F.prototype,"at",2),F=l([y("echolocal-panel")],F);window.customCards=window.customCards??[];window.customCards.some(r=>r.type==="echolocal-satellite-card")||window.customCards.push({type:"echolocal-satellite-card",name:"EchoLocal Satellite",description:"An EchoLocal satellite, drawn as itself, with its ring and mute live.",preview:!0,documentationURL:"https://github.com/ygelfand/echolocal-hacs"});
