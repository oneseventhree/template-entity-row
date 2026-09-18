function t(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new o(i,t,n)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",g=_.reactiveElementPolyfillSupport,y=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&h(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=n;const o=s.fromAttribute(e,t.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(void 0!==t){const o=this.constructor;if(!1===n&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??$)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,g?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");const A=globalThis,E=t=>t,S=A.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+P,R=`<${O}>`,T=document,U=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ \t\n\f\r]",k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,j=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,I=/"/g,V=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),G=new WeakMap,F=T.createTreeWalker(T,129);function J(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":3===e?"<math>":"",r=k;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,l=0;for(;l<i.length&&(r.lastIndex=l,c=r.exec(i),null!==c);)l=r.lastIndex,r===k?"!--"===c[1]?r=W:void 0!==c[1]?r=j:void 0!==c[2]?(V.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=L):void 0!==c[3]&&(r=L):r===L?">"===c[0]?(r=s??k,h=-1):void 0===c[1]?h=-2:(h=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?L:'"'===c[3]?I:D):r===I||r===D?r=L:r===W||r===j?r=k:(r=L,s=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";o+=r===k?i+R:h>=0?(n.push(a),i.slice(0,h)+C+i.slice(h)+P+d):i+P+(-2===h?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[c,h]=K(t,e);if(this.el=Z.createElement(c,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=F.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=h[o++],i=n.getAttribute(t).split(P),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:s}),n.removeAttribute(t));if(V.test(n.tagName)){const t=n.textContent.split(P),e=t.length-1;if(e>0){n.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],U()),F.nextNode(),a.push({type:2,index:++s});n.append(t[e],U())}}}else if(8===n.nodeType)if(n.data===O)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(P,t+1));)a.push({type:7,index:s}),t+=P.length-1}s++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,n){if(e===q)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=M(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=Y(t,s._$AS(t,e.values),s,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??T).importNode(e,!0);F.currentNode=n;let s=F.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new X(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new st(s,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(s=F.nextNode(),o++)}return F.currentNode=T,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),M(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Z(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new X(this.O(U()),this.O(U()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=Y(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=Y(this,n[i+r],e,r),a===q&&(a=this._$AH[r]),o||=!M(a)||a!==this._$AH[r],a===B?t=B:t!==B&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class nt extends tt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??B)===q)return;const i=this._$AH,n=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==B&&(i===B||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(Z,X),(A.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new X(e.insertBefore(U(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$},lt=(t=ht,e,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(void 0===o&&globalThis.litPropertyMetadata.set(s,o=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,s,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const s=this[n];e.call(this,i),this.requestUpdate(n,s,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};function dt(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return dt({...t,state:!0,attribute:!1})}const ut=1;class _t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const mt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends _t{constructor(t){if(super(t),t.type!==ut||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return q}});var ft="1.1.0-beta-02";async function gt(){const t=await async function(){await Promise.race([customElements.whenDefined("home-assistant"),customElements.whenDefined("hc-main")]);const t=customElements.get("home-assistant")?"home-assistant":"hc-main";let e=document.querySelector(t);for(;!e;)await new Promise(t=>window.setTimeout(t,100)),e=document.querySelector(t);return e}();for(;!t.hass;)await new Promise(t=>window.setTimeout(t,100));return t.hass}function yt(t){return"string"==typeof t&&(t.includes("{{")||t.includes("{%")||t.includes("{#"))}const vt={entity:"Entity",name:"Name template",icon:"Icon template",state:"State template",secondary:"Secondary information template",secondary_multiline:"Multiline secondary information",image:"Image template",color:"Icon colour template",active:"Icon appearance",condition:"Visibility condition template",toggle:"Show entity toggle",native_icon:"Weather icon style",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double-tap action"};class $t extends at{constructor(){super(...arguments),this._config={},this._moreOptionsExpanded=!1,this._interactionsExpanded=!1,this._computeLabel=t=>["active","condition","toggle","secondary_multiline"].includes(t.name)&&"string"==typeof this._config[t.name]?"active"===t.name?"Active template":"toggle"===t.name?"Toggle template":"secondary_multiline"===t.name?"Multiline secondary template":vt[t.name]:vt[t.name]??t.name}setConfig(t){const e={...t};!0===e.condition?delete e.condition:!1===e.condition&&(e.condition="{{ false }}"),this._config=e}get _primarySchema(){return[{name:"entity",selector:yt(this._config.entity)?{template:{}}:{entity:{}}},{name:"name",selector:{template:{}}},{name:"state",selector:{template:{}}},{name:"secondary",selector:{template:{}}},{name:"icon",selector:{template:{}}},{name:"color",selector:{template:{}}}]}get _moreOptionsSchema(){const t="string"==typeof this._config.active?{template:{}}:{select:{mode:"dropdown",options:[{value:"automatic",label:"Automatic"},{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}]}},e=[{name:"toggle",selector:{boolean:{}}}];return this._showWeatherIconStyle&&e.push({name:"native_icon",selector:{select:{mode:"dropdown",options:[{value:"layered",label:"Layered artwork"},{value:"standard",label:"Standard icon"}]}}}),e.push({name:"active",selector:t},{name:"condition",selector:{template:{}}},{name:"image",selector:{template:{}}},{name:"secondary_multiline",selector:"string"==typeof this._config.secondary_multiline?{template:{}}:{boolean:{}}}),e}get _showWeatherIconStyle(){const t=this._config.entity,e=void 0!==this._config.icon&&""!==String(this._config.icon).trim(),i=void 0!==this._config.image&&""!==String(this._config.image).trim();return"string"==typeof t&&!yt(t)&&t.trim().startsWith("weather.")&&!yt(this._config.native_icon)&&!e&&!i}get _moreOptionsData(){const t={...this._config,active:"string"==typeof this._config.active?this._config.active:void 0===this._config.active?"automatic":this._config.active?"active":"inactive"};return this._showWeatherIconStyle&&(t.native_icon=!1===this._config.native_icon?"standard":"layered"),t}get _interactionSchema(){const t=t=>"string"==typeof this._config[t]?((t=!1)=>({text:t?{multiline:!0}:{}}))(!0):{ui_action:{}};return[{name:"tap_action",selector:t("tap_action")},{name:"hold_action",selector:t("hold_action")},{name:"double_tap_action",selector:t("double_tap_action")}]}render(){return this.hass?z`
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
    `:z``}_expandedChanged(t){this._moreOptionsExpanded=Boolean(t.detail?.expanded??t.target.expanded)}_interactionsExpandedChanged(t){t.stopPropagation(),this._interactionsExpanded=Boolean(t.detail?.expanded??t.target.expanded)}_moreOptionsValueChanged(t){const e={...t.detail.value},i=[];this._showWeatherIconStyle&&("standard"===e.native_icon?e.native_icon=!1:"layered"===e.native_icon&&(delete e.native_icon,i.push("native_icon"))),"string"!=typeof this._config.active&&("automatic"===e.active?(delete e.active,i.push("active")):e.active="active"===e.active),this._applyValue(e,i)}_valueChanged(t){this._applyValue(t.detail.value)}_applyValue(t,e=[]){const i={...this._config,...t,type:"custom:template-entity-row"};e.forEach(t=>delete i[t]),this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}static{this.styles=r`
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
      --expansion-panel-content-padding: 0;
    }
    .interactions-content {
      padding: 0 0 16px;
    }
  `}}function bt(t,e={}){t&&(customElements.whenDefined("long-press").then(()=>{const e=document.body.querySelector("long-press");e?.bind?.(t)}),customElements.whenDefined("action-handler").then(()=>{const i=document.body.querySelector("action-handler");i?.bind?.(t,e)}))}t([dt({attribute:!1})],$t.prototype,"hass",void 0),t([pt()],$t.prototype,"_config",void 0),t([pt()],$t.prototype,"_moreOptionsExpanded",void 0),t([pt()],$t.prototype,"_interactionsExpanded",void 0),customElements.get("template-entity-row-editor")||customElements.define("template-entity-row-editor",$t);const wt=["icon","active","name","secondary","secondary_multiline","state","condition","image","entity","native_icon","state_color","color","toggle","tap_action","hold_action","double_tap_action"],At=new Set(["icon","entity","image","color","active","condition","native_icon","state_color","toggle","secondary_multiline"]),Et=/_\([^)]*\)/g;function St(t){return!0===t||"true"===String(t).trim().toLowerCase()}function xt(t,e,i){if("string"!=typeof e)return e;const n=function(t,e){return e.replace(Et,e=>{const i=e.substring(2,e.length-1).split(/\s*,\s*/);return t.localize(...i)||e})}(i,e);return At.has(t)?n.trim():n}const Ct=Symbol("omit-template");function Pt(t,e=[]){return yt(t)?[{path:e,template:t}]:Array.isArray(t)?t.flatMap((t,i)=>Pt(t,[...e,i])):t&&"object"==typeof t?Object.entries(t).flatMap(([t,i])=>Pt(i,[...e,t])):[]}function Ot(t){if(yt(t))return Ct;if(Array.isArray(t))return t.map(t=>{const e=Ot(t);return e===Ct?void 0:e});if(t&&"object"==typeof t){const e={};for(const[i,n]of Object.entries(t)){const t=Ot(n);t!==Ct&&(e[i]=t)}return e}return t}function Rt(t,e,i){if(!e.length)return i;const[n,...s]=e,o="number"==typeof n?Array.isArray(t)?[...t]:[]:t&&"object"==typeof t&&!Array.isArray(t)?{...t}:{},r=o[n];return o[n]=Rt(r,s,i),o}class Tt extends at{constructor(){super(...arguments),this._sourceConfig={},this._renderedConfig={},this.hidden=!1,this._subscriptions=[],this._bindGeneration=0,this._conditionPending=!1,this._nativeWeatherGeneration=0,this._handleAction=t=>{const e=t.detail?.action;e&&this.dispatchEvent(new CustomEvent("hass-action",{detail:{config:this._renderedConfig,action:e},bubbles:!0,composed:!0}))}}static async getConfigElement(){return await customElements.whenDefined("template-entity-row-editor"),document.createElement("template-entity-row-editor")}setConfig(t){if(!t||"object"!=typeof t)throw new Error("Invalid template-entity-row configuration");this._sourceConfig={...t},this._renderedConfig=function(t){const e={...t};for(const i of wt){if(!(i in t))continue;const n=Ot(t[i]);n===Ct?delete e[i]:e[i]=n}return e}(t),this._conditionPending=yt(t.condition),this._updateVisibility(this._renderedConfig.condition),this._reportVisibility(),this._bindTemplates()}connectedCallback(){super.connectedCallback(),queueMicrotask(()=>this._reportVisibility()),Object.keys(this._sourceConfig).length&&!this._subscriptions.length&&this._bindTemplates()}disconnectedCallback(){super.disconnectedCallback(),this._bindGeneration++,this._lastReportedVisibility=void 0,this._clearSubscriptions()}updated(t){t.has("hidden")&&this._reportVisibility(),t.has("hass")&&this._nativeWeatherRow&&(this._nativeWeatherRow.hass=this.hass),t.has("_renderedConfig")&&this._ensureNativeWeatherRow(),this._bindActionElements()}async _ensureNativeWeatherRow(){const t=this._renderedConfig,e=t.entity;if(!((void 0===t.native_icon||St(t.native_icon))&&"string"==typeof e&&e.startsWith("weather.")&&void 0===t.icon&&void 0===t.image))return this._nativeWeatherGeneration++,this._nativeWeatherEntity=void 0,void(this._nativeWeatherRow=void 0);if(this._nativeWeatherRow&&this._nativeWeatherEntity===e)return void(this._nativeWeatherRow.hass=this.hass);const i=++this._nativeWeatherGeneration;try{const t=await window.loadCardHelpers(),n=await t.createRowElement({entity:e});if(i!==this._nativeWeatherGeneration)return;n.hass=this.hass,this._nativeWeatherEntity=e,this._nativeWeatherRow=n}catch(t){if(i!==this._nativeWeatherGeneration)return;console.warn("Unable to load Home Assistant's native weather row",t)}}async _clearSubscriptions(){const t=this._subscriptions.splice(0);await Promise.allSettled(t.map(t=>t()))}async _bindTemplates(){const t=++this._bindGeneration;if(await this._clearSubscriptions(),!this.isConnected)return;const e=await gt();if(t!==this._bindGeneration||!this.isConnected)return;const i=wt.flatMap(t=>{const i=this._sourceConfig[t];return"string"!=typeof i||yt(i)||this._setRenderedValue(t,xt(t,i,e)),Pt(i).map(e=>({key:t,...e}))}),n=await Promise.all(i.map(async({key:i,path:n,template:s})=>{try{return await async function(t,e,i){const n=await gt();return await n.connection.subscribeMessage(t=>i(t.result),{type:"render_template",template:t,variables:{user:n.user?.name??"",browser:document.querySelector("hc-main")?"CAST":localStorage.getItem("browser_mod-browser-id")??"",hash:location.hash.substring(1),...e}})}(s,{config:this._sourceConfig},s=>{if(t!==this._bindGeneration)return;const o=xt(i,s,e);this._setRenderedPath(i,n,n.length&&"string"==typeof o?o.trim():o)})}catch(e){return void(t===this._bindGeneration&&console.warn(`Unable to render template-entity-row ${i}`,e))}})),s=n.filter(t=>void 0!==t);t!==this._bindGeneration?await Promise.allSettled(s.map(t=>t())):this._subscriptions.push(...s)}_setRenderedValue(t,e){this._renderedConfig={...this._renderedConfig,[t]:e},"condition"===t&&(this._conditionPending=!1,this._updateVisibility(e),this._reportVisibility())}_setRenderedPath(t,e,i){e.length?this._renderedConfig={...this._renderedConfig,[t]:Rt(this._renderedConfig[t],e,i)}:this._setRenderedValue(t,i)}_updateVisibility(t){const e=void 0!==t&&""!==String(t).trim();this.hidden=e&&!St(t)}_reportVisibility(){if(!this.isConnected)return;const t=!this.hidden&&!this._conditionPending;t!==this._lastReportedVisibility&&(this._lastReportedVisibility=t,this.dispatchEvent(new CustomEvent("row-visibility-changed",{detail:{row:this,value:t},bubbles:!0,composed:!0})))}_bindActionElements(){const t=this._renderedConfig,e=this._hasAction(t),i={hasHold:this._actionEnabled(t.hold_action),hasDoubleClick:this._actionEnabled(t.double_tap_action),disabled:!e};bt(this.shadowRoot?.querySelector(".icon")??null,i),bt(this.shadowRoot?.querySelector(".info")??null,i),bt(this.shadowRoot?.querySelector(".state")??null,{...i,disabled:!e||St(t.toggle)})}_actionEnabled(t,e=!1){if(void 0===t)return e;if(t&&"object"==typeof t){const e=t.action;return void 0!==e&&"none"!==String(e).trim().toLowerCase()}return"none"!==String(t).trim().toLowerCase()}_hasAction(t){return this._actionEnabled(t.tap_action,Boolean(t.entity))||this._actionEnabled(t.hold_action)||this._actionEnabled(t.double_tap_action)}render(){if(!this.hass||!this._renderedConfig)return B;const t=this._renderedConfig,e=this.hass.states?.[t.entity],i=e?{...e,attributes:{...e.attributes}}:{entity_id:"binary_sensor.template_entity_row",attributes:{icon:"no:icon",friendly_name:""},state:"off"},n=void 0!==t.icon?t.icon||"no:icon":void 0,s=t.name??i.attributes?.friendly_name??i.entity_id,o=void 0!==t.state,r=St(t.active),a=void 0!==t.active?r:void 0===t.state_color||St(t.state_color);r?(i.attributes.brightness=255,i.state="on"):void 0!==t.active&&(i.state="off");const c=St(t.toggle)&&Boolean(t.entity),h=void 0===t.icon&&void 0===t.image,l=h&&"string"==typeof t.entity&&t.entity.startsWith("weather.")&&(void 0===t.native_icon||St(t.native_icon)),d=t.color??(h&&a?"state":void 0),p=this._hasAction(t);return z`
      <div id="wrapper">
        ${l&&this._nativeWeatherRow?z`
              <div
                class=${mt({icon:!0,"native-weather-icon":!0,pointer:p})}
                @action=${this._handleAction}
              >
                ${this._nativeWeatherRow??B}
              </div>
            `:z`
              <state-badge
                .hass=${this.hass}
                .stateObj=${i}
                @action=${this._handleAction}
                .overrideIcon=${h?void 0:n}
                .overrideImage=${h?void 0:t.image}
                .color=${d}
                class=${mt({icon:!0,pointer:p})}
                .stateColor=${a}
              ></state-badge>
            `}
        <div
          class=${mt({info:!0,pointer:p})}
          @action=${this._handleAction}
        >
          ${s}
          ${void 0!==t.secondary?z`<div
                class=${mt({secondary:!0,multiline:St(t.secondary_multiline)})}
              >
                ${t.secondary}
              </div>`:B}
        </div>
        <div
          class=${mt({state:!0,pointer:p&&!c})}
          @action=${c?B:this._handleAction}
        >
          ${c?z`
                <ha-entity-toggle .hass=${this.hass} .stateObj=${i}>
                </ha-entity-toggle>
              `:o?t.state:e?z`
                    <state-display
                      .hass=${this.hass}
                      .stateObj=${e}
                      .content=${"state"}
                      .timeFormat=${t.time_format??t.format}
                      timestamp-tooltip
                    ></state-display>
                  `:B}
        </div>
      </div>
    `}static{this.styles=r`
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
      .secondary.multiline {
        text-overflow: clip;
        white-space: pre-line;
      }
      .state {
        text-align: var(--float-end, right);
        white-space: nowrap;
      }
      .pointer {
        cursor: pointer;
      }
    `}}t([dt({attribute:!1})],Tt.prototype,"hass",void 0),t([pt()],Tt.prototype,"_sourceConfig",void 0),t([pt()],Tt.prototype,"_renderedConfig",void 0),t([dt({type:Boolean,reflect:!0})],Tt.prototype,"hidden",void 0),t([pt()],Tt.prototype,"_nativeWeatherRow",void 0),customElements.get("template-entity-row")||(customElements.define("template-entity-row",Tt),console.info(`%cTEMPLATE-ENTITY-ROW ${ft} IS INSTALLED`,"color: green; font-weight: bold"));
