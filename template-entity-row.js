function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:h,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!h(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const o=n.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const o=this.constructor;if(!1===s&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??$)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,g?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,E=t=>t,S=A.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+P,R=`<${O}>`,T=document,U=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,D=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,z=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,J=T.createTreeWalker(T,129);function K(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=W;for(let e=0;e<i;e++){const i=t[e];let a,h,c=-1,l=0;for(;l<i.length&&(r.lastIndex=l,h=r.exec(i),null!==h);)l=r.lastIndex,r===W?"!--"===h[1]?r=k:void 0!==h[1]?r=D:void 0!==h[2]?(z.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=I):void 0!==h[3]&&(r=I):r===I?">"===h[0]?(r=n??W,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?I:'"'===h[3]?j:L):r===j||r===L?r=I:r===k||r===D?r=W:(r=I,n=void 0);const d=r===I&&t[e+1].startsWith("/>")?" ":"";o+=r===W?i+R:c>=0?(s.push(a),i.slice(0,c)+C+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[K(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[h,c]=Z(t,e);if(this.el=F.createElement(h,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[o++],i=s.getAttribute(t).split(P),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(z.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),J.nextNode(),a.push({type:2,index:++n});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:n}),t+=P.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===q)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);J.currentNode=s;let n=J.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=J.nextNode(),o++)}return J.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),M(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new F(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new X(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Y(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Y(this,s[i+r],e,r),a===q&&(a=this._$AH[r]),o||=!M(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??V)===q)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(F,X),(A.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new X(e.insertBefore(U(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ht=rt.litElementPolyfillSupport;ht?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},lt=(t=ct,e,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return dt({...t,state:!0,attribute:!1})}const ut=1;class _t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const mt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends _t{constructor(t){if(super(t),t.type!==ut||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return q}});var ft="1.0.1-beta-03";async function gt(){const t=await async function(){await Promise.race([customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main")]);const t=customElements.get("home-assistant")?"home-assistant":"hc-main";let e=document.querySelector(t);for(;!e;)await new Promise(t=>window.setTimeout(t,100)),e=document.querySelector(t);return e}();for(;!t.hass;)await new Promise(t=>window.setTimeout(t,100));return t.hass}function vt(t){return"string"==typeof t&&(t.includes("{{")||t.includes("{%")||t.includes("{#"))}const yt={entity:"Entity",name:"Name template",icon:"Icon template",state:"State template",secondary:"Secondary information template",image:"Image template",color:"Icon colour template",active:"Icon appearance",condition:"Visibility condition template",toggle:"Show entity toggle",native_icon:"Weather icon style",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double-tap action"};class $t extends at{constructor(){super(...arguments),this._config={},this._moreOptionsExpanded=!1,this._interactionsExpanded=!1,this._computeLabel=t=>["active","condition","toggle"].includes(t.name)&&"string"==typeof this._config[t.name]?"active"===t.name?"Active template":"toggle"===t.name?"Toggle template":yt[t.name]:yt[t.name]??t.name}setConfig(t){const e={...t};!0===e.condition?delete e.condition:!1===e.condition&&(e.condition="{{ false }}"),this._config=e}get _primarySchema(){return[{name:"entity",selector:vt(this._config.entity)?{template:{}}:{entity:{}}},{name:"name",selector:{template:{}}},{name:"state",selector:{template:{}}},{name:"secondary",selector:{template:{}}},{name:"icon",selector:{template:{}}},{name:"color",selector:{template:{}}}]}get _moreOptionsSchema(){const t="string"==typeof this._config.active?{template:{}}:{select:{mode:"dropdown",options:[{value:"automatic",label:"Automatic"},{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}]}},e=[{name:"toggle",selector:{boolean:{}}}];return this._showWeatherIconStyle&&e.push({name:"native_icon",selector:{select:{mode:"dropdown",options:[{value:"layered",label:"Layered artwork"},{value:"standard",label:"Standard icon"}]}}}),e.push({name:"active",selector:t},{name:"condition",selector:{template:{}}},{name:"image",selector:{template:{}}}),e}get _showWeatherIconStyle(){const t=this._config.entity,e=void 0!==this._config.icon&&""!==String(this._config.icon).trim(),i=void 0!==this._config.image&&""!==String(this._config.image).trim();return"string"==typeof t&&!vt(t)&&t.trim().startsWith("weather.")&&!vt(this._config.native_icon)&&!e&&!i}get _moreOptionsData(){const t={...this._config,active:"string"==typeof this._config.active?this._config.active:void 0===this._config.active?"automatic":this._config.active?"active":"inactive"};return this._showWeatherIconStyle&&(t.native_icon=!1===this._config.native_icon?"standard":"layered"),t}get _interactionSchema(){const t=t=>"string"==typeof this._config[t]?((t=!1)=>({text:t?{multiline:!0}:{}}))(!0):{ui_action:{}};return[{name:"tap_action",selector:t("tap_action")},{name:"hold_action",selector:t("hold_action")},{name:"double_tap_action",selector:t("double_tap_action")}]}render(){return this.hass?B`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._primarySchema}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      <ha-expansion-panel
        outlined
        .expanded=${this._moreOptionsExpanded}
        @expanded-changed=${this._expandedChanged}
      >
        <div slot="header" class="expansion-header">
          <ha-icon icon="mdi:tune"></ha-icon>
          <span>More options</span>
        </div>
        <div class="more-options-content">
          <ha-form
            .hass=${this.hass}
            .data=${this._moreOptionsData}
            .schema=${this._moreOptionsSchema}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._moreOptionsValueChanged}
          ></ha-form>
          <ha-expansion-panel
            class="nested-panel"
            outlined
            .expanded=${this._interactionsExpanded}
            @expanded-changed=${this._interactionsExpandedChanged}
          >
            <div slot="header" class="expansion-header">
              <ha-icon icon="mdi:gesture-tap"></ha-icon>
              <span>Interactions</span>
            </div>
            <div class="interactions-content">
              <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${this._interactionSchema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
              ></ha-form>
            </div>
          </ha-expansion-panel>
        </div>
      </ha-expansion-panel>
    `:B``}_expandedChanged(t){this._moreOptionsExpanded=Boolean(t.detail?.expanded??t.target.expanded)}_interactionsExpandedChanged(t){t.stopPropagation(),this._interactionsExpanded=Boolean(t.detail?.expanded??t.target.expanded)}_moreOptionsValueChanged(t){const e={...t.detail.value},i=[];this._showWeatherIconStyle&&("standard"===e.native_icon?e.native_icon=!1:"layered"===e.native_icon&&(delete e.native_icon,i.push("native_icon"))),"string"!=typeof this._config.active&&("automatic"===e.active?(delete e.active,i.push("active")):e.active="active"===e.active),this._applyValue(e,i)}_valueChanged(t){this._applyValue(t.detail.value)}_applyValue(t,e=[]){const i={...this._config,...t,type:"custom:template-entity-row"};e.forEach(t=>delete i[t]),this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static{this.styles=r`
    :host {
      box-sizing: border-box;
      display: block;
      max-width: 100%;
      padding-inline-end: 12px;
    }
    ha-form {
      box-sizing: border-box;
      display: block;
      max-width: 100%;
      overflow: visible;
      width: 100%;
    }
    ha-expansion-panel {
      box-sizing: border-box;
      display: block;
      max-width: 100%;
      margin-top: 16px;
    }
    .expansion-header {
      align-items: center;
      display: flex;
      font-weight: 500;
      gap: 12px;
    }
    .more-options-content {
      padding: 0 16px 16px;
    }
    .nested-panel {
      margin-top: 20px;
    }
    .interactions-content {
      padding: 0 16px 16px;
    }
  `}}function bt(t,e={}){t&&(customElements.whenDefined("long-press").then(()=>{const e=document.body.querySelector("long-press");e?.bind?.(t)}),customElements.whenDefined("action-handler").then(()=>{const i=document.body.querySelector("action-handler");i?.bind?.(t,e)}))}t([dt({attribute:!1})],$t.prototype,"hass",void 0),t([pt()],$t.prototype,"_config",void 0),t([pt()],$t.prototype,"_moreOptionsExpanded",void 0),t([pt()],$t.prototype,"_interactionsExpanded",void 0),customElements.get("template-entity-row-editor")||customElements.define("template-entity-row-editor",$t);const wt=["icon","active","name","secondary","state","condition","image","entity","native_icon","color","toggle","tap_action","hold_action","double_tap_action"],At=new Set(["icon","entity","image","color","active","condition","native_icon","toggle"]),Et=/_\([^)]*\)/g;function St(t){return!0===t||"true"===String(t).trim().toLowerCase()}function xt(t,e,i){if("string"!=typeof e)return e;const s=function(t,e){return e.replace(Et,e=>{const i=e.substring(2,e.length-1).split(/\s*,\s*/);return t.localize(...i)||e})}(i,e);return At.has(t)?s.trim():s}class Ct extends at{constructor(){super(...arguments),this._sourceConfig={},this._renderedConfig={},this.hidden=!1,this._subscriptions=[],this._bindGeneration=0,this._nativeWeatherGeneration=0,this._handleAction=t=>{this._actionHandler?.(t)}}static async getConfigElement(){return await customElements.whenDefined("template-entity-row-editor"),document.createElement("template-entity-row-editor")}setConfig(t){if(!t||"object"!=typeof t)throw new Error("Invalid template-entity-row configuration");this._sourceConfig={...t},this._renderedConfig=function(t){const e={...t};for(const i of wt)vt(t[i])&&delete e[i];return vt(t.condition)&&(e.condition=!1),e}(t),this._bindTemplates()}connectedCallback(){super.connectedCallback(),Object.keys(this._sourceConfig).length&&!this._subscriptions.length&&this._bindTemplates()}disconnectedCallback(){super.disconnectedCallback(),this._clearSubscriptions()}updated(t){if(t.has("_renderedConfig")){const t=this._renderedConfig.condition,e=void 0!==t&&""!==String(t).trim();this.hidden=e&&!St(t)}t.has("hass")&&this._nativeWeatherRow&&(this._nativeWeatherRow.hass=this.hass),t.has("_renderedConfig")&&this._ensureNativeWeatherRow(),this._bindActionElements()}async _ensureNativeWeatherRow(){const t=this._renderedConfig,e=t.entity;if(!((void 0===t.native_icon||St(t.native_icon))&&"string"==typeof e&&e.startsWith("weather.")&&void 0===t.icon&&void 0===t.image))return this._nativeWeatherGeneration++,this._nativeWeatherEntity=void 0,void(this._nativeWeatherRow=void 0);if(this._nativeWeatherRow&&this._nativeWeatherEntity===e)return void(this._nativeWeatherRow.hass=this.hass);const i=++this._nativeWeatherGeneration;try{const t=await window.loadCardHelpers(),s=await t.createRowElement({entity:e});if(i!==this._nativeWeatherGeneration)return;s.hass=this.hass,this._nativeWeatherEntity=e,this._nativeWeatherRow=s}catch(t){if(i!==this._nativeWeatherGeneration)return;console.warn("Unable to load Home Assistant's native weather row",t)}}async firstUpdated(){const t=this.shadowRoot?.querySelector("#staging hui-generic-entity-row");t&&(await t.updateComplete,this._actionHandler=t._handleAction?.bind(t))}async _clearSubscriptions(){const t=this._subscriptions.splice(0);await Promise.allSettled(t.map(t=>t()))}async _bindTemplates(){const t=++this._bindGeneration;await this._clearSubscriptions();const e=await gt();if(t!==this._bindGeneration)return;const i=await Promise.all(wt.map(async i=>{const s=this._sourceConfig[i];if(vt(s))return async function(t,e,i){const s=await gt();return await s.connection.subscribeMessage(t=>i(t.result),{type:"render_template",template:t,variables:{user:s.user?.name??"",browser:document.querySelector("hc-main")?"CAST":localStorage.getItem("browser_mod-browser-id")??"",hash:location.hash.substring(1),...e}})}(s,{config:this._sourceConfig},s=>{t===this._bindGeneration&&this._setRenderedValue(i,xt(i,s,e))});"string"==typeof s&&this._setRenderedValue(i,xt(i,s,e))})),s=i.filter(t=>void 0!==t);t!==this._bindGeneration?await Promise.allSettled(s.map(t=>t())):this._subscriptions.push(...s)}_setRenderedValue(t,e){this._renderedConfig={...this._renderedConfig,[t]:e}}_bindActionElements(){const t=this._renderedConfig;if(!(t.entity||t.tap_action||t.hold_action||t.double_tap_action))return;const e={hasHold:void 0!==t.hold_action,hasDoubleClick:void 0!==t.double_tap_action};bt(this.shadowRoot?.querySelector(".icon")??null,e),bt(this.shadowRoot?.querySelector(".info")??null,e)}render(){if(!this.hass||!this._renderedConfig)return V;const t=this._renderedConfig,e=this.hass.states?.[t.entity],i=e?{...e,attributes:{...e.attributes}}:{entity_id:"binary_sensor.template_entity_row",attributes:{icon:"no:icon",friendly_name:""},state:"off"},s=void 0!==t.icon?t.icon||"no:icon":void 0,n=t.name??i.attributes?.friendly_name??i.entity_id,o=t.state??e?.state,r=St(t.active),a=void 0===t.active||r;r?(i.attributes.brightness=255,i.state="on"):void 0!==t.active&&(i.state="off");const h=St(t.toggle)&&Boolean(t.entity),c=void 0===t.icon&&void 0===t.image,l=c&&"string"==typeof t.entity&&t.entity.startsWith("weather.")&&(void 0===t.native_icon||St(t.native_icon)),d=t.color??(c&&a?"state":void 0),p=Boolean(t.entity||t.tap_action||t.hold_action||t.double_tap_action);return B`
      <div id="wrapper">
        ${l&&this._nativeWeatherRow?B`
              <div
                class=${mt({icon:!0,"native-weather-icon":!0,pointer:p})}
                @action=${this._handleAction}
              >
                ${this._nativeWeatherRow??V}
              </div>
            `:B`
              <state-badge
                .hass=${this.hass}
                .stateObj=${i}
                @action=${this._handleAction}
                .overrideIcon=${c?void 0:s}
                .overrideImage=${c?void 0:t.image}
                .color=${d}
                class=${mt({icon:!0,pointer:p})}
                .stateColor=${a}
              ></state-badge>
            `}
        <div
          class=${mt({info:!0,pointer:p})}
          @action=${this._handleAction}
        >
          ${n}
          ${void 0!==t.secondary?B`<div class="secondary">${t.secondary}</div>`:V}
        </div>
        <div class="state">
          ${h?B`
                <ha-entity-toggle .hass=${this.hass} .stateObj=${i}>
                </ha-entity-toggle>
              `:o}
        </div>
      </div>
      <div id="staging">
        <hui-generic-entity-row .hass=${this.hass} .config=${t}>
        </hui-generic-entity-row>
      </div>
    `}static{this.styles=[customElements.get("hui-generic-entity-row")?.styles,r`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none !important;
      }
      #wrapper {
        display: flex;
        align-items: center;
        flex-direction: row;
        min-height: 40px;
      }
      .icon {
        flex: 0 0 40px;
      }
      .native-weather-icon {
        height: 40px;
        overflow: hidden;
        width: 40px;
      }
      .native-weather-icon hui-weather-entity-row {
        display: block;
        min-width: 320px;
        pointer-events: none;
        width: 320px;
      }
      .info {
        flex: 1 1 30%;
        min-width: 0;
        padding-inline: 16px 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .secondary {
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .state {
        text-align: var(--float-end, right);
      }
      .pointer {
        cursor: pointer;
      }
      #staging {
        display: none;
      }
    `]}}t([dt({attribute:!1})],Ct.prototype,"hass",void 0),t([pt()],Ct.prototype,"_sourceConfig",void 0),t([pt()],Ct.prototype,"_renderedConfig",void 0),t([dt({type:Boolean,reflect:!0})],Ct.prototype,"hidden",void 0),t([pt()],Ct.prototype,"_nativeWeatherRow",void 0),customElements.get("template-entity-row")||(customElements.define("template-entity-row",Ct),console.info(`%cTEMPLATE-ENTITY-ROW ${ft} IS INSTALLED`,"color: green; font-weight: bold"));
