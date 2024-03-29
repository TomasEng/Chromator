(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();const Ze=e=>{const t=Ke(e);return et(t)},Ke=e=>{const t=Je(e.angle);return Qe({...e,angle:t})},Je=e=>e*Math.PI/180,Qe=e=>({x:e.radius*Math.cos(e.angle),y:e.radius*Math.sin(e.angle)}),et=e=>({left:(e.x+1)/2,top:1-(e.y+1)/2}),me=e=>{const t=tt(e);return rt(t)},tt=e=>({x:e.left*2-1,y:1-e.top*2}),rt=e=>{const t=at(e);return{angle:nt(t.angle),radius:t.radius}},nt=e=>e*180/Math.PI,at=e=>({angle:ot(Math.atan2(e.y,e.x),2*Math.PI),radius:Math.sqrt(e.x**2+e.y**2)}),ot=(e,t)=>(e%t+t)%t,ve=document.createElement("template");ve.innerHTML=`
  <style>
    .point {
      --left: 0.5;
      --top: 0.5;
      --size: 1rem;
      width: var(--size);
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #000;
      box-shadow: 0 0 0 1px #fff, 0 0 0 2px #000;
      position: absolute;
      top: calc(var(--top) * 100% - var(--size) / 2);
      left: calc(var(--left) * 100% - var(--size) / 2);
    }
    
    .point.base {
        cursor: pointer;
        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
    }
    
    .point:not(.base) {
        pointer-events: none;
    }
  </style>
  <div class="point"></div>
`;class st extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ve.content.cloneNode(!0))}get point(){return this.shadowRoot.querySelector(".point")}get colour(){return this._colour}set colour(t){this.point.style.background=t.getHexCode();const{hue:r,saturation:o}=t.getHsl(),u=Ze({angle:r,radius:o});this.point.style.setProperty("--left",`${u.left}`),this.point.style.setProperty("--top",`${u.top}`)}connectedCallback(){this.point.addEventListener("drag",t=>{this.dispatchEvent(new CustomEvent("point-drag",{detail:{left:t.x,top:t.y}}))}),this.point.addEventListener("dragstart",t=>{t.dataTransfer.setDragImage(new Image,0,0)}),this.getAttribute("base")===""&&(this.point.setAttribute("draggable","true"),this.point.setAttribute("class","point base"))}}window.customElements.define("colour-circle-point",st);var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w={},te={},re={},ne={},k={},ae={},B={};Object.defineProperty(B,"__esModule",{value:!0});B.colourFormatRegex=void 0;B.colourFormatRegex={hsl:/^hsl\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*\)$/i,hsla:/^hsla\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,namedColour:/[\w-]+/i,namedTransparent:/transparent/i,rgbDecimal:/^rgb\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*\)$/i,rgbHexLongWithHash:/^#[0-9a-fA-F]{6}$/i,rgbHexLongWithoutHash:/^[0-9a-fA-F]{6}$/i,rgbHexShortWithHash:/^#[0-9a-f]{3}$/i,rgbHexShortWithoutHash:/^[0-9a-f]{3}$/i,rgbaDecimal:/^rgba\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,rgbaHexLongWithHash:/^#[0-9a-f]{8}$/i,rgbaHexLongWithoutHash:/^[0-9a-f]{8}$/i,rgbaHexShortWithHash:/^#[0-9a-fA-F]{4}$/i,rgbaHexShortWithoutHash:/^[0-9a-fA-F]{4}$/i};var ge={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.namedColours=void 0;Q.namedColours={aliceblue:{red:240,green:248,blue:255},antiquewhite:{red:250,green:235,blue:215},aqua:{red:0,green:255,blue:255},aquamarine:{red:127,green:255,blue:212},azure:{red:240,green:255,blue:255},beige:{red:245,green:245,blue:220},bisque:{red:255,green:228,blue:196},black:{red:0,green:0,blue:0},blanchedalmond:{red:255,green:235,blue:205},blue:{red:0,green:0,blue:255},blueviolet:{red:138,green:43,blue:226},brown:{red:165,green:42,blue:42},burlywood:{red:222,green:184,blue:135},cadetblue:{red:95,green:158,blue:160},chartreuse:{red:127,green:255,blue:0},chocolate:{red:210,green:105,blue:30},coral:{red:255,green:127,blue:80},cornflowerblue:{red:100,green:149,blue:237},cornsilk:{red:255,green:248,blue:220},crimson:{red:220,green:20,blue:60},cyan:{red:0,green:255,blue:255},darkblue:{red:0,green:0,blue:139},darkcyan:{red:0,green:139,blue:139},darkgoldenrod:{red:184,green:134,blue:11},darkgray:{red:169,green:169,blue:169},darkgreen:{red:0,green:100,blue:0},darkgrey:{red:169,green:169,blue:169},darkkhaki:{red:189,green:183,blue:107},darkmagenta:{red:139,green:0,blue:139},darkolivegreen:{red:85,green:107,blue:47},darkorange:{red:255,green:140,blue:0},darkorchid:{red:153,green:50,blue:204},darkred:{red:139,green:0,blue:0},darksalmon:{red:233,green:150,blue:122},darkseagreen:{red:143,green:188,blue:143},darkslateblue:{red:72,green:61,blue:139},darkslategray:{red:47,green:79,blue:79},darkslategrey:{red:47,green:79,blue:79},darkturquoise:{red:0,green:206,blue:209},darkviolet:{red:148,green:0,blue:211},deeppink:{red:255,green:20,blue:147},deepskyblue:{red:0,green:191,blue:255},dimgray:{red:105,green:105,blue:105},dimgrey:{red:105,green:105,blue:105},dodgerblue:{red:30,green:144,blue:255},firebrick:{red:178,green:34,blue:34},floralwhite:{red:255,green:250,blue:240},forestgreen:{red:34,green:139,blue:34},fuchsia:{red:255,green:0,blue:255},gainsboro:{red:220,green:220,blue:220},ghostwhite:{red:248,green:248,blue:255},gold:{red:255,green:215,blue:0},goldenrod:{red:218,green:165,blue:32},gray:{red:128,green:128,blue:128},green:{red:0,green:128,blue:0},greenyellow:{red:173,green:255,blue:47},grey:{red:128,green:128,blue:128},honeydew:{red:240,green:255,blue:240},hotpink:{red:255,green:105,blue:180},indianred:{red:205,green:92,blue:92},indigo:{red:75,green:0,blue:130},ivory:{red:255,green:255,blue:240},khaki:{red:240,green:230,blue:140},lavender:{red:230,green:230,blue:250},lavenderblush:{red:255,green:240,blue:245},lawngreen:{red:124,green:252,blue:0},lemonchiffon:{red:255,green:250,blue:205},lightblue:{red:173,green:216,blue:230},lightcoral:{red:240,green:128,blue:128},lightcyan:{red:224,green:255,blue:255},lightgoldenrodyellow:{red:250,green:250,blue:210},lightgray:{red:211,green:211,blue:211},lightgreen:{red:144,green:238,blue:144},lightgrey:{red:211,green:211,blue:211},lightpink:{red:255,green:182,blue:193},lightsalmon:{red:255,green:160,blue:122},lightseagreen:{red:32,green:178,blue:170},lightskyblue:{red:135,green:206,blue:250},lightslategray:{red:119,green:136,blue:153},lightslategrey:{red:119,green:136,blue:153},lightsteelblue:{red:176,green:196,blue:222},lightyellow:{red:255,green:255,blue:224},lime:{red:0,green:255,blue:0},limegreen:{red:50,green:205,blue:50},linen:{red:250,green:240,blue:230},magenta:{red:255,green:0,blue:255},maroon:{red:128,green:0,blue:0},mediumaquamarine:{red:102,green:205,blue:170},mediumblue:{red:0,green:0,blue:205},mediumorchid:{red:186,green:85,blue:211},mediumpurple:{red:147,green:112,blue:219},mediumseagreen:{red:60,green:179,blue:113},mediumslateblue:{red:123,green:104,blue:238},mediumspringgreen:{red:0,green:250,blue:154},mediumturquoise:{red:72,green:209,blue:204},mediumvioletred:{red:199,green:21,blue:133},midnightblue:{red:25,green:25,blue:112},mintcream:{red:245,green:255,blue:250},mistyrose:{red:255,green:228,blue:225},moccasin:{red:255,green:228,blue:181},navajowhite:{red:255,green:222,blue:173},navy:{red:0,green:0,blue:128},oldlace:{red:253,green:245,blue:230},olive:{red:128,green:128,blue:0},olivedrab:{red:107,green:142,blue:35},orange:{red:255,green:165,blue:0},orangered:{red:255,green:69,blue:0},orchid:{red:218,green:112,blue:214},palegoldenrod:{red:238,green:232,blue:170},palegreen:{red:152,green:251,blue:152},paleturquoise:{red:175,green:238,blue:238},palevioletred:{red:219,green:112,blue:147},papayawhip:{red:255,green:239,blue:213},peachpuff:{red:255,green:218,blue:185},peru:{red:205,green:133,blue:63},pink:{red:255,green:192,blue:203},plum:{red:221,green:160,blue:221},powderblue:{red:176,green:224,blue:230},purple:{red:128,green:0,blue:128},rebeccapurple:{red:102,green:51,blue:153},red:{red:255,green:0,blue:0},rosybrown:{red:188,green:143,blue:143},royalblue:{red:65,green:105,blue:225},saddlebrown:{red:139,green:69,blue:19},salmon:{red:250,green:128,blue:114},sandybrown:{red:244,green:164,blue:96},seagreen:{red:46,green:139,blue:87},seashell:{red:255,green:245,blue:238},sienna:{red:160,green:82,blue:45},silver:{red:192,green:192,blue:192},skyblue:{red:135,green:206,blue:235},slateblue:{red:106,green:90,blue:205},slategray:{red:112,green:128,blue:144},slategrey:{red:112,green:128,blue:144},snow:{red:255,green:250,blue:250},springgreen:{red:0,green:255,blue:127},steelblue:{red:70,green:130,blue:180},tan:{red:210,green:180,blue:140},teal:{red:0,green:128,blue:128},thistle:{red:216,green:191,blue:216},tomato:{red:255,green:99,blue:71},turquoise:{red:64,green:224,blue:208},violet:{red:238,green:130,blue:238},wheat:{red:245,green:222,blue:179},white:{red:255,green:255,blue:255},whitesmoke:{red:245,green:245,blue:245},yellow:{red:255,green:255,blue:0},yellowgreen:{red:154,green:205,blue:50}};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isValidUnitIntervalOrPercentageValue=e.isValidUnitIntervalValue=e.isValid255ScaleValue=e.isValidPercentageValue=e.isValidDegreeValue=e.isValidTransparentName=e.isValidColourName=e.isValidRgba255String=e.isValidRgb255String=e.isValidHslaString=e.isValidHslString=void 0;var t=B,r=Q,o=function(h){var m=t.colourFormatRegex.hsl,T=h.trim().toLowerCase(),O=m.test(T);if(!O)return!1;var H=m.exec(T).groups,M=H.hue,z=H.saturation,j=H.lightness;return(0,e.isValidDegreeValue)(M)&&(0,e.isValidUnitIntervalOrPercentageValue)(z)&&(0,e.isValidUnitIntervalOrPercentageValue)(j)};e.isValidHslString=o;var a=function(h){var m=t.colourFormatRegex.hsla,T=h.trim().toLowerCase(),O=m.test(T);if(!O)return!1;var H=m.exec(T).groups,M=H.hue,z=H.saturation,j=H.lightness,Z=H.alpha;return(0,e.isValidDegreeValue)(M)&&(0,e.isValidUnitIntervalOrPercentageValue)(z)&&(0,e.isValidUnitIntervalOrPercentageValue)(j)&&(0,e.isValidUnitIntervalOrPercentageValue)(Z)};e.isValidHslaString=a;var u=function(h){var m=t.colourFormatRegex.rgbDecimal,T=h.trim().toLowerCase(),O=m.test(T);if(!O)return!1;var H=m.exec(T).groups,M=H.red,z=H.green,j=H.blue;return(0,e.isValid255ScaleValue)(M)&&(0,e.isValid255ScaleValue)(z)&&(0,e.isValid255ScaleValue)(j)};e.isValidRgb255String=u;var c=function(h){var m=t.colourFormatRegex.rgbaDecimal,T=h.trim().toLowerCase(),O=m.test(T);if(!O)return!1;var H=m.exec(T).groups,M=H.red,z=H.green,j=H.blue,Z=H.alpha;return(0,e.isValid255ScaleValue)(M)&&(0,e.isValid255ScaleValue)(z)&&(0,e.isValid255ScaleValue)(j)&&(0,e.isValidUnitIntervalOrPercentageValue)(Z)};e.isValidRgba255String=c;var b=function(h){var m=h.trim().toLowerCase();return Object.keys(r.namedColours).includes(m)};e.isValidColourName=b;var C=function(h){var m=h.trim().toLowerCase();return m==="transparent"};e.isValidTransparentName=C;var V=function(h){return/^(((([12]?\d{1,2})|(3[012345]\d))(\.\d+)?)|360(\.0+)?|\.\d+)$/.test(h)};e.isValidDegreeValue=V;var v=function(h){return/^((((\d{1,2}(\.\d+)?)|(100(\.0+)?)|(\.\d+))%)|0)$/.test(h)};e.isValidPercentageValue=v;var f=function(h){return/^((((1?\d{1,2})|(2([01234]\d|5[01234])))(\.\d+)?)|255(\.0+)?|\.\d+)$/.test(h)};e.isValid255ScaleValue=f;var E=function(h){return/^(0|0\.\d+|\.\d+|1(\.0+)?)$/.test(h)};e.isValidUnitIntervalValue=E;var g=function(h){return(0,e.isValidUnitIntervalValue)(h)||(0,e.isValidPercentageValue)(h)};e.isValidUnitIntervalOrPercentageValue=g})(ge);Object.defineProperty(ae,"__esModule",{value:!0});ae.isOnFormat=void 0;var it=B,K=ge,lt=function(e,t){switch(t){case"hsl":return(0,K.isValidHslString)(e);case"hsla":return(0,K.isValidHslaString)(e);case"namedColour":return(0,K.isValidColourName)(e);case"rgbDecimal":return(0,K.isValidRgb255String)(e);case"rgbaDecimal":return(0,K.isValidRgba255String)(e);default:return it.colourFormatRegex[t].test(e)}};ae.isOnFormat=lt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.findInputToAlwaysIncreasingFunc=e.ensureWithinUnitInterval=e.evaluateFormat=e.floor=e.round=e.modulo=void 0;var t=ae,r=B,o=function(v,f){return(v%f+f)%f};e.modulo=o;var a=function(v,f){return f===void 0&&(f=0),Math.round(v*Math.pow(10,f))/Math.pow(10,f)};e.round=a;var u=function(v,f){return f===void 0&&(f=0),Math.floor(v*Math.pow(10,f))/Math.pow(10,f)};e.floor=u;var c=function(v){for(var f=Object.keys(r.colourFormatRegex),E=0,g=f;E<g.length;E++){var h=g[E];if((0,t.isOnFormat)(v,h))return h}};e.evaluateFormat=c;var b=function(v){return v<0?0:v>1?1:v};e.ensureWithinUnitInterval=b;var C=function(v,f,E,g){g===void 0&&(g={start:0,end:1});var h=V(g);return Math.abs(v(h)-f)<=E?h:(v(h)<f?g.start=h:g.end=h,(0,e.findInputToAlwaysIncreasingFunc)(v,f,E,g))};e.findInputToAlwaysIncreasingFunc=C;var V=function(v){return(v.start+v.end)/2}})(k);var oe={};Object.defineProperty(oe,"__esModule",{value:!0});oe.HueRegion=void 0;var pe;(function(e){e.RedYellow="RedYellow",e.YellowGreen="YellowGreen",e.GreenCyan="GreenCyan",e.CyanBlue="CyanBlue",e.BlueMagenta="BlueMagenta",e.MagentaRed="MagentaRed"})(pe||(oe.HueRegion=pe={}));(function(e){var t=L&&L.__assign||function(){return t=Object.assign||function(n){for(var s,i=1,l=arguments.length;i<l;i++){s=arguments[i];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(n[d]=s[d])}return n},t.apply(this,arguments)},r=L&&L.__rest||function(n,s){var i={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&s.indexOf(l)<0&&(i[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(n);d<l.length;d++)s.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(n,l[d])&&(i[l[d]]=n[l[d]]);return i};Object.defineProperty(e,"__esModule",{value:!0}),e.cieXyzToRgb=e.cieXyzToHsl=e.cieXyzaToHsla=e.relativeLuminanceFromHsl=e.rgbToCieXyz=e.hslToCieXyz=e.hslaToCieXyza=e.hslaToHsva=e.hslToHsv=e.hsvaToHsla=e.hsvToHsl=e.rgbToHsv=e.hsvToRgb=e.rgbaToHsla=e.rgbToHsl=e.hslaToRgba=e.hslToRgb=void 0;var o=k,a=oe,u=function(n){var s=n.red,i=n.green,l=n.blue;return{red:s*255,green:i*255,blue:l*255}},c=function(n){var s=n.red,i=n.green,l=n.blue;return{red:s/255,green:i/255,blue:l/255}},b=function(n){var s=n.hue,i=n.saturation,l=n.lightness,d=(1-Math.abs(2*l-1))*i,p=s/60,x=d*(1-Math.abs(p%2-1)),S=l-d/2,P=V(s,d,x),U=f(P,S);return u(U)};e.hslToRgb=b;var C=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.hslToRgb)(i);return t(t({},l),{alpha:s})};e.hslaToRgba=C;var V=function(n,s,i){switch(v(n)){case a.HueRegion.RedYellow:return{red:s,green:i,blue:0};case a.HueRegion.YellowGreen:return{red:i,green:s,blue:0};case a.HueRegion.GreenCyan:return{red:0,green:s,blue:i};case a.HueRegion.CyanBlue:return{red:0,green:i,blue:s};case a.HueRegion.BlueMagenta:return{red:i,green:0,blue:s};case a.HueRegion.MagentaRed:return{red:s,green:0,blue:i}}},v=function(n){var s=(0,o.modulo)(n,360);return s>=0&&s<60?a.HueRegion.RedYellow:s>=60&&s<120?a.HueRegion.YellowGreen:s>=120&&s<180?a.HueRegion.GreenCyan:s>=180&&s<240?a.HueRegion.CyanBlue:s>=240&&s<300?a.HueRegion.BlueMagenta:a.HueRegion.MagentaRed},f=function(n,s){var i=n.red,l=n.green,d=n.blue;return{red:i+s,green:l+s,blue:d+s}},E=function(n){var s=c(n),i=s.red,l=s.green,d=s.blue,p=Math.max(i,l,d),x=Math.min(i,l,d),S=p-x,P=(p+x)/2,U=S===0?0:S/(1-Math.abs(2*P-1)),le=S===0?0:h(i,l,d,p,S),ue=(0,o.modulo)(le*60,360);return{hue:ue,saturation:U,lightness:P}};e.rgbToHsl=E;var g=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.rgbToHsl)(i);return t(t({},l),{alpha:s})};e.rgbaToHsla=g;var h=function(n,s,i,l,d){switch(l){case n:return(s-i)/d;case s:return(i-n)/d+2;case i:return(n-s)/d+4;default:return 0}},m=function(n){var s=n.hue,i=n.saturation,l=n.value,d=l*i,p=s/60,x=d*(1-Math.abs(p%2-1)),S=l-d,P=V(s,d,x),U=f(P,S);return u(U)};e.hsvToRgb=m;var T=function(n){var s=c(n),i=s.red,l=s.green,d=s.blue,p=Math.max(i,l,d),x=Math.min(i,l,d),S=p-x,P=p,U=P===0?0:S/P,le=S===0?0:h(i,l,d,p,S),ue=(0,o.modulo)(le*60,360);return{hue:ue,saturation:U,value:P}};e.rgbToHsv=T;var O=function(n){var s=n.hue,i=n.saturation,l=n.value,d=l*i,p=(2-i)*l/2,x=d===0?0:d/(1-Math.abs(2*p-1));return{hue:s,saturation:x,lightness:p}};e.hsvToHsl=O;var H=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.hsvToHsl)(i);return t(t({},l),{alpha:s})};e.hsvaToHsla=H;var M=function(n){var s=n.hue,i=n.saturation,l=n.lightness,d=(1-Math.abs(2*l-1))*i,p=l+d/2,x=p===0?0:d/p;return{hue:s,saturation:x,value:p}};e.hslToHsv=M;var z=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.hslToHsv)(i);return t(t({},l),{alpha:s})};e.hslaToHsva=z;var j=function(n){var s=n.hue,i=n.saturation,l=n.lightness,d=n.alpha,p={hue:s,saturation:i,lightness:l},x=(0,e.hslToCieXyz)(p);return t(t({},x),{alpha:d})};e.hslaToCieXyza=j;var Z=function(n){var s=(0,e.hslToRgb)(n);return(0,e.rgbToCieXyz)(s)};e.hslToCieXyz=Z;var Le=function(n){var s=c(n),i=be(s),l=i.red,d=i.green,p=i.blue,x=l*.4124564+d*.3575761+p*.1804375,S=l*.2126729+d*.7151522+p*.072175,P=l*.0193339+d*.119192+p*.9503041;return{x,y:S,z:P}};e.rgbToCieXyz=Le;var Me=function(n){var s=(0,e.hslToRgb)(n);return ke(s)};e.relativeLuminanceFromHsl=Me;var ke=function(n){var s=c(n),i=be(s),l=i.red,d=i.green,p=i.blue;return l*.2126729+d*.7151522+p*.072175},be=function(n){var s=n.red,i=n.green,l=n.blue;return{red:se(s),green:se(i),blue:se(l)}},se=function(n){return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)},Fe=function(n){var s=n.x,i=n.y,l=n.z,d=n.alpha,p=(0,e.cieXyzToHsl)({x:s,y:i,z:l});return t(t({},p),{alpha:d})};e.cieXyzaToHsla=Fe;var Ie=function(n){var s=(0,e.cieXyzToRgb)(n);return(0,e.rgbToHsl)(s)};e.cieXyzToHsl=Ie;var ze=function(n){var s=n.x,i=n.y,l=n.z,d=s*Xe+i*De+l*Ne,p=s*Be+i*Ue+l*Ae,x=s*qe+i*Ge+l*Ye,S=$e({red:d,green:p,blue:x}),P=je(S);return u(P)};e.cieXyzToRgb=ze;var je=function(n){var s=n.red,i=n.green,l=n.blue;return{red:(0,o.ensureWithinUnitInterval)(s),green:(0,o.ensureWithinUnitInterval)(i),blue:(0,o.ensureWithinUnitInterval)(l)}},$e=function(n){var s=n.red,i=n.green,l=n.blue;return{red:ie(s),green:ie(i),blue:ie(l)}},ie=function(n){return n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055},Xe=3.2404542,De=-1.5371385,Ne=-.4985314,Be=-.969266,Ue=1.8760108,Ae=.041556,qe=.0556434,Ge=-.2040259,Ye=1.0572252})(ne);var y={},ce={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.numberFromPercentage=e.numberFromPercentageOrUnitInterval=e.shortHexToDecimal=e.hexPairToDecimal=void 0;var t=ge,r=function(b){return parseInt(b,16)};e.hexPairToDecimal=r;var o=function(b){return(0,e.hexPairToDecimal)(b+b)};e.shortHexToDecimal=o;var a=function(b){return(0,t.isValidUnitIntervalValue)(b)?parseFloat(b):(0,e.numberFromPercentage)(b)};e.numberFromPercentageOrUnitInterval=a;var u=function(b){var C=c.exec(b)[0];return parseFloat(C)/100};e.numberFromPercentage=u;var c=/\d*\.?\d*(?=%)/})(ce);var fe={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shortHexWithoutHashToRgba=e.shortHexWithHashToRgba=e.shortHexWithoutHashToRgb=e.shortHexWithHashToRgb=e.hexWithoutHashToRgba=e.hexWithHashToRgba=e.hexWithoutHashToRgb=e.hexWithHashToRgb=e.rgba255StringToRgba=e.rgb255StringToRgb=void 0;var t=B,r=ce,o=function(g){var h=t.colourFormatRegex.rgbDecimal,m=h.exec(g).groups,T=m.red,O=m.green,H=m.blue;return{red:parseFloat(T),green:parseFloat(O),blue:parseFloat(H)}};e.rgb255StringToRgb=o;var a=function(g){var h=t.colourFormatRegex.rgbaDecimal,m=h.exec(g).groups,T=m.red,O=m.green,H=m.blue,M=m.alpha;return{red:parseFloat(T),green:parseFloat(O),blue:parseFloat(H),alpha:(0,r.numberFromPercentageOrUnitInterval)(M)}};e.rgba255StringToRgba=a;var u=function(g){return(0,e.hexWithoutHashToRgb)(g.substring(1))};e.hexWithHashToRgb=u;var c=function(g){var h=(0,r.hexPairToDecimal)(g.substring(0,2)),m=(0,r.hexPairToDecimal)(g.substring(2,4)),T=(0,r.hexPairToDecimal)(g.substring(4,6));return{red:h,green:m,blue:T}};e.hexWithoutHashToRgb=c;var b=function(g){return(0,e.hexWithoutHashToRgba)(g.substring(1))};e.hexWithHashToRgba=b;var C=function(g){var h=(0,e.hexWithoutHashToRgb)(g),m=h.red,T=h.green,O=h.blue,H=(0,r.hexPairToDecimal)(g.substring(6,8))/255;return{red:m,green:T,blue:O,alpha:H}};e.hexWithoutHashToRgba=C;var V=function(g){return(0,e.shortHexWithoutHashToRgb)(g.substring(1))};e.shortHexWithHashToRgb=V;var v=function(g){var h=(0,r.shortHexToDecimal)(g.substring(0,1)),m=(0,r.shortHexToDecimal)(g.substring(1,2)),T=(0,r.shortHexToDecimal)(g.substring(2,3));return{red:h,green:m,blue:T}};e.shortHexWithoutHashToRgb=v;var f=function(g){return(0,e.shortHexWithoutHashToRgba)(g.substring(1))};e.shortHexWithHashToRgba=f;var E=function(g){var h=(0,e.shortHexWithoutHashToRgb)(g),m=h.red,T=h.green,O=h.blue,H=(0,r.shortHexToDecimal)(g.substring(3,4))/255;return{red:m,green:T,blue:O,alpha:H}};e.shortHexWithoutHashToRgba=E})(fe);var ee=L&&L.__assign||function(){return ee=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ee.apply(this,arguments)},ut=L&&L.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};Object.defineProperty(y,"__esModule",{value:!0});y.shortHexWithHashToHsla=y.shortHexWithoutHashToHsla=y.shortHexWithHashToHsl=y.shortHexWithoutHashToHsl=y.hexWithHashToHsla=y.hexWithoutHashToHsla=y.hexWithHashToHsl=y.hexWithoutHashToHsl=y.rgba255StringToHsla=y.rgb255StringToHsl=y.hslaStringToHsla=y.hslStringToHsl=void 0;var He=B,J=ce,F=ne,I=fe,ht=function(e){var t=He.colourFormatRegex.hsl,r=t.exec(e).groups,o=r.hue,a=r.saturation,u=r.lightness;return{hue:parseFloat(o),saturation:(0,J.numberFromPercentageOrUnitInterval)(a),lightness:(0,J.numberFromPercentageOrUnitInterval)(u)}};y.hslStringToHsl=ht;var dt=function(e){var t=He.colourFormatRegex.hsla,r=t.exec(e).groups,o=r.hue,a=r.saturation,u=r.lightness,c=r.alpha;return{hue:parseFloat(o),saturation:(0,J.numberFromPercentageOrUnitInterval)(a),lightness:(0,J.numberFromPercentageOrUnitInterval)(u),alpha:(0,J.numberFromPercentageOrUnitInterval)(c)}};y.hslaStringToHsla=dt;var gt=function(e){return(0,F.rgbToHsl)((0,I.rgb255StringToRgb)(e))};y.rgb255StringToHsl=gt;var ct=function(e){var t=(0,I.rgba255StringToRgba)(e),r=t.alpha,o=ut(t,["alpha"]),a=(0,F.rgbToHsl)(o);return ee(ee({},a),{alpha:r})};y.rgba255StringToHsla=ct;var bt=function(e){return(0,F.rgbToHsl)((0,I.hexWithoutHashToRgb)(e))};y.hexWithoutHashToHsl=bt;var mt=function(e){return(0,F.rgbToHsl)((0,I.hexWithHashToRgb)(e))};y.hexWithHashToHsl=mt;var pt=function(e){return(0,F.rgbaToHsla)((0,I.hexWithoutHashToRgba)(e))};y.hexWithoutHashToHsla=pt;var vt=function(e){return(0,F.rgbaToHsla)((0,I.hexWithHashToRgba)(e))};y.hexWithHashToHsla=vt;var ft=function(e){return(0,F.rgbToHsl)((0,I.shortHexWithoutHashToRgb)(e))};y.shortHexWithoutHashToHsl=ft;var Ht=function(e){return(0,F.rgbToHsl)((0,I.shortHexWithHashToRgb)(e))};y.shortHexWithHashToHsl=Ht;var yt=function(e){return(0,F.rgbaToHsla)((0,I.shortHexWithoutHashToRgba)(e))};y.shortHexWithoutHashToHsla=yt;var Tt=function(e){return(0,F.rgbaToHsla)((0,I.shortHexWithHashToRgba)(e))};y.shortHexWithHashToHsla=Tt;var _={};Object.defineProperty(_,"__esModule",{value:!0});_.isXyza=_.isXyz=_.isHsva=_.isHsv=_.isHsla=_.isHsl=_.isRgba=_.isRgb=void 0;var wt=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha===void 0};_.isRgb=wt;var Rt=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha!==void 0};_.isRgba=Rt;var Ct=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha===void 0};_.isHsl=Ct;var xt=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha!==void 0};_.isHsla=xt;var _t=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha===void 0};_.isHsv=_t;var Ot=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha!==void 0};_.isHsva=Ot;var St=function(e){return e.x!==void 0&&e.y!==void 0&&e.z!==void 0&&e.alpha===void 0};_.isXyz=St;var Et=function(e){return e.x!==void 0&&e.y!==void 0&&e.z!==void 0&&e.alpha!==void 0};_.isXyza=Et;var R=L&&L.__assign||function(){return R=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},R.apply(this,arguments)};Object.defineProperty(re,"__esModule",{value:!0});re.colourCodeToHsla=void 0;var A=ne,Pt=Q,Vt=k,W=y,X=_,Wt=function(e){if(typeof e=="string")return Lt(e);if((0,X.isHsla)(e))return e;if((0,X.isHsl)(e))return R(R({},e),{alpha:1});if((0,X.isRgb)(e))return R(R({},(0,A.rgbToHsl)(e)),{alpha:1});if((0,X.isRgba)(e))return(0,A.rgbaToHsla)(e);if((0,X.isHsv)(e))return R(R({},(0,A.hsvToHsl)(e)),{alpha:1});if((0,X.isHsva)(e))return(0,A.hsvaToHsla)(e);if((0,X.isXyz)(e))return R(R({},(0,A.cieXyzToHsl)(e)),{alpha:1});if((0,X.isXyza)(e))return(0,A.cieXyzaToHsla)(e);throw new Error("The passed object is not a valid colour code.")};re.colourCodeToHsla=Wt;var Lt=function(e){var t=(0,Vt.evaluateFormat)(e);switch(t){case"hsl":return R(R({},(0,W.hslStringToHsl)(e)),{alpha:1});case"hsla":return(0,W.hslaStringToHsla)(e);case"rgbDecimal":return R(R({},(0,W.rgb255StringToHsl)(e)),{alpha:1});case"rgbaDecimal":return(0,W.rgba255StringToHsla)(e);case"rgbHexLongWithHash":return R(R({},(0,W.hexWithHashToHsl)(e)),{alpha:1});case"rgbHexLongWithoutHash":return R(R({},(0,W.hexWithoutHashToHsl)(e)),{alpha:1});case"rgbHexShortWithHash":return R(R({},(0,W.shortHexWithHashToHsl)(e)),{alpha:1});case"rgbHexShortWithoutHash":return R(R({},(0,W.shortHexWithoutHashToHsl)(e)),{alpha:1});case"rgbaHexLongWithHash":return(0,W.hexWithHashToHsla)(e);case"rgbaHexLongWithoutHash":return(0,W.hexWithoutHashToHsla)(e);case"rgbaHexShortWithHash":return(0,W.shortHexWithHashToHsla)(e);case"rgbaHexShortWithoutHash":return(0,W.shortHexWithoutHashToHsla)(e);case"namedColour":return R(R({},(0,A.rgbToHsl)(Pt.namedColours[e])),{alpha:1});case"namedTransparent":return{hue:0,saturation:0,lightness:0,alpha:0};default:throw new Error("Invalid colour code: ".concat(e))}},N={},Y={};Object.defineProperty(Y,"__esModule",{value:!0});Y.numberToPercentage=Y.decimalToHexPair=void 0;var Mt=k,kt=function(e){var t=(0,Mt.round)(e).toString(16).toUpperCase();return t.length===1?"0".concat(t):t};Y.decimalToHexPair=kt;var Ft=function(e){return"".concat(e*100,"%")};Y.numberToPercentage=Ft;Object.defineProperty(N,"__esModule",{value:!0});N.rgbaObjectToRgbHexString=N.rgbaObjectToRgbDecimalString=N.hslaObjectToHslString=void 0;var G=Y,$=k,It=function(e){var t=e.hue,r=e.saturation,o=e.lightness,a=e.alpha,u=(0,$.round)(t),c=(0,$.round)(r,2),b=(0,$.round)(o,2),C=(0,G.numberToPercentage)(c),V=(0,G.numberToPercentage)(b);if(a===1)return"hsl(".concat(u,", ").concat(C,", ").concat(V,")");var v=(0,$.round)(a,2);return"hsla(".concat(u,", ").concat(C,", ").concat(V,", ").concat(v,")")};N.hslaObjectToHslString=It;var zt=function(e){var t=e.red,r=e.green,o=e.blue,a=e.alpha,u=(0,$.round)(t),c=(0,$.round)(r),b=(0,$.round)(o);if(a===1)return"rgb(".concat(u,", ").concat(c,", ").concat(b,")");var C=(0,$.round)(a,2);return"rgba(".concat(u,", ").concat(c,", ").concat(b,", ").concat(C,")")};N.rgbaObjectToRgbDecimalString=zt;var jt=function(e){var t=e.red,r=e.green,o=e.blue,a=e.alpha,u=(0,G.decimalToHexPair)(t),c=(0,G.decimalToHexPair)(r),b=(0,G.decimalToHexPair)(o),C=a===1?"":(0,G.decimalToHexPair)((0,$.round)(a*255));return"#".concat(u).concat(c).concat(b).concat(C)};N.rgbaObjectToRgbHexString=jt;var D=L&&L.__assign||function(){return D=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},D.apply(this,arguments)};Object.defineProperty(te,"__esModule",{value:!0});te.Chromator=void 0;var $t=re,q=ne,he=N,de=k,Xt=function(){function e(t){var r=(0,$t.colourCodeToHsla)(t),o=r.hue,a=r.saturation,u=r.lightness,c=r.alpha;this.hsl={hue:o,saturation:a,lightness:u},this.alpha=c}return e.prototype.copy=function(){return new e(this.getHsla())},e.prototype.getHsl=function(){return this.hsl},e.prototype.getAlpha=function(){return this.alpha},e.prototype.getHsla=function(){return D(D({},this.hsl),{alpha:this.alpha})},e.prototype.getRgb=function(){return(0,q.hslToRgb)(this.hsl)},e.prototype.getRgba=function(){return D(D({},this.getRgb()),{alpha:this.alpha})},e.prototype.getHsv=function(){return(0,q.hslToHsv)(this.hsl)},e.prototype.getHsva=function(){return(0,q.hslaToHsva)(this.getHsla())},e.prototype.getCieXyz=function(){return(0,q.hslToCieXyz)(this.hsl)},e.prototype.getCieXyza=function(){return(0,q.hslaToCieXyza)(this.getHsla())},e.prototype.getRgbCode=function(){return(0,he.rgbaObjectToRgbDecimalString)(this.getRgba())},e.prototype.getHexCode=function(){return(0,he.rgbaObjectToRgbHexString)(this.getRgba())},e.prototype.getHslCode=function(){return(0,he.hslaObjectToHslString)(this.getHsla())},e.prototype.lighten=function(t){var r=this.hsl.lightness,o=1-r;return this.hsl.lightness=r+o*t,this},e.prototype.darken=function(t){var r=this.hsl.lightness;return this.hsl.lightness=r*(1-t),this},e.prototype.invertLightness=function(){return this.hsl.lightness=1-this.hsl.lightness,this},e.prototype.addHue=function(t){return this.hsl.hue=(0,de.modulo)(this.hsl.hue+t,360),this},e.prototype.subtractHue=function(t){return this.hsl.hue=(0,de.modulo)(this.hsl.hue-t,360),this},e.prototype.complementarise=function(){return this.addHue(180),this},e.prototype.invert=function(){return this.complementarise().invertLightness(),this},e.prototype.getRelativeLuminance=function(){var t=this.getCieXyz();return t.y},e.prototype.setRelativeLuminance=function(t){var r=this;if(t<0||t>1)throw new Error("Relative luminance must be between 0 and 1. Received "+t+".");var o=function(a){var u=D(D({},r.hsl),{lightness:a});return(0,q.relativeLuminanceFromHsl)(u)};return this.hsl.lightness=(0,de.findInputToAlwaysIncreasingFunc)(o,t,1e-5),this},e}();te.Chromator=Xt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Chromator=void 0;var t=te;Object.defineProperty(e,"Chromator",{enumerable:!0,get:function(){return t.Chromator}})})(w);const ye=(e,t)=>{const r=360/e,o=[];for(let a=0;a<e;a++){const u=t.copy();u.addHue(a*r),o.push(u)}return o},Dt=(e,t)=>{const r=1/(e+1),o=t.getHsl(),a=[];for(let u=1;u<=e;u++){const c=u*r,b=new w.Chromator({...o,lightness:c});a.push(b)}return a},Te=document.createElement("template");Te.innerHTML=`
  <style>
    .circle {
      --lightness: 50%;
      aspect-ratio: 1;
      border-radius: 50%;
      background: radial-gradient(hsl(0, 0%, var(--lightness)), transparent 71%), conic-gradient(
        hsl(90, 100%, var(--lightness)) 0deg,
        hsl(60, 100%, var(--lightness)) 30deg,
        hsl(30, 100%, var(--lightness)) 60deg,
        hsl(0, 100%, var(--lightness)) 90deg,
        hsl(330, 100%, var(--lightness)) 120deg,
        hsl(300, 100%, var(--lightness)) 150deg,
        hsl(270, 100%, var(--lightness)) 180deg,
        hsl(240, 100%, var(--lightness)) 210deg,
        hsl(210, 100%, var(--lightness)) 240deg,
        hsl(180, 100%, var(--lightness)) 270deg,
        hsl(150, 100%, var(--lightness)) 300deg,
        hsl(120, 100%, var(--lightness)) 330deg,
        hsl(90, 100%, var(--lightness))
      );
      position: relative;
    }
  </style>
  <div class="circle">
    <colour-circle-point class="point" base></colour-circle-point>
  </div>
`;class Nt extends HTMLElement{constructor(){super(),this._colour=new w.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this.otherPoints=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Te.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t,this.pointElement.colour=t;const{hue:r,saturation:o,lightness:a}=t.getHsl();this.circle.style.setProperty("--lightness",`${a*100}%`),this.pointElement.colour=t,this.setOpposites()}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.setOpposites()}get lightness(){return this.colour.getHsl().lightness}set lightness(t){this.colour=new w.Chromator({...this.colour.getHsl(),lightness:t})}get point(){const{hue:t,saturation:r}=this.colour.getHsl();return{hue:t,saturation:r}}set point(t){const{lightness:r}=this.colour.getHsl();this.colour=new w.Chromator({...t,lightness:r})}get circle(){return this.shadowRoot.querySelector(".circle")}get pointElement(){return this.shadowRoot.querySelector(".point")}setOpposites(){const t=ye(this.numberOfOpposites,this.colour);t.splice(0,1),this.otherPoints.forEach(r=>r.remove()),this.otherPoints=t.map(r=>{const o=document.createElement("colour-circle-point");return o.colour=r,this.circle.appendChild(o),o})}connectedCallback(){const t=this.getAttribute("size");t&&(this.circle.style.width=t),this.setOpposites(),this.addEventListener("dragover",r=>{r.preventDefault()}),this.addEventListener("click",r=>{const o=this.getPositionWithinCircle({top:r.clientY,left:r.clientX}),a=me(o);a.radius<=1&&(this.point={hue:a.angle,saturation:a.radius},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point})))}),this.pointElement.addEventListener("point-drag",r=>{const o=this.getPositionWithinCircle(r.detail),a=me(o);this.point={hue:a.angle,saturation:Math.min(a.radius,1)},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point}))})}getPositionWithinCircle(t){const r=this.circle.getBoundingClientRect();return{top:(t.top-r.top)/r.height,left:(t.left-r.left)/r.width}}}window.customElements.define("colour-circle",Nt);const we=document.createElement("template");we.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: column;
    }
    
    .label-wrapper {
      display: flex;
      gap: 1em;
      align-items: center;
      margin-bottom: .5rem;
    }
    
    .label-wrapper > * {
      padding: 0;
      margin: 0;
    }
    
    label {
      font-weight: bold;
    }
    
    input {
      --height: 1rem;
      -webkit-appearance: none;
      appearance: none;
      height: var(--height);
      background-color: grey;
      border-radius: calc(var(--height) / 2);
    }
    
    input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: var(--height);
      aspect-ratio: 1;
      background-color: transparent;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
    }
  </style>
  <div class="label-wrapper">
    <label for="slider" id="label"></label>
    <p id="value"></p>
  </div>
  <input type="range" id="slider" min="0" max="1" step="0.01"/>
`;class Bt extends HTMLElement{constructor(){super(),this._value=.5,this._max=1,this._min=0,this._step=.01,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(we.content.cloneNode(!0))}get slider(){return this.shadowRoot.getElementById("slider")}get label(){return this.shadowRoot.getElementById("label")}get valueElement(){return this.shadowRoot.getElementById("value")}get value(){return this._value}set value(t){this._value=t;const r=Math.round(t/this.step)*this.step,o=Intl.NumberFormat().format(r);this.slider.value=String(r),this.valueElement.textContent=o}get max(){return this._max}set max(t){this._max=t,this.slider.max=String(t)}get min(){return this._min}set min(t){this._min=t,this.slider.min=String(t)}get step(){return this._step}set step(t){this._step=t,this.slider.step=String(t)}connectedCallback(){const t=this.getAttribute("value");t&&(this.value=Number(t));const r=this.getAttribute("label");r&&(this.label.innerHTML=r);const o=this.getAttribute("max")||"1";this.max=Number(o);const a=this.getAttribute("min")||"0";this.min=Number(a);const u=this.getAttribute("step")||"0.01";this.step=Number(u);const c=this.getAttribute("background");c&&(this.slider.style.background=c),this.slider.addEventListener("input",()=>{const b=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:b})),this.value=b}),this.slider.addEventListener("change",()=>{const b=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:b})),this.value=b})}}window.customElements.define("slider-input",Bt);const Re=document.createElement("template");Re.innerHTML=`
  <style>
    :host {
      display: block;
      padding: 1em;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  </style>
  <slot></slot>
`;class Ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Re.content.cloneNode(!0))}}window.customElements.define("shadow-box",Ut);const Ce=document.createElement("template");Ce.innerHTML=`
   <style>
      :host {
        --hue: 180;
        --saturation: 1;
        --lightness: 0.5;
      }
      
      shadow-box {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
  </style>
  <shadow-box>
    <slider-input
      id="hue"
      label="Hue"
      min="0"
      max="360"
      step="1"
      value="0"
      background="
        linear-gradient(
          to right,
          hsl(0, var(--saturation), var(--lightness)),
          hsl(60, var(--saturation), var(--lightness)),
          hsl(120, var(--saturation), var(--lightness)),
          hsl(180, var(--saturation), var(--lightness)),
          hsl(240, var(--saturation), var(--lightness)),
          hsl(300, var(--saturation), var(--lightness)),
          hsl(360, var(--saturation), var(--lightness))
        )
      "
     ></slider-input>
    <slider-input
      id="saturation"
      label="Saturation"
      value="0"
      background="linear-gradient(to right, hsl(var(--hue), 0%, var(--lightness)), hsl(var(--hue), 100%, var(--lightness)))"
    ></slider-input>
    <slider-input
      id="lightness"
      label="Lightness"
      value="0.5"
      background="linear-gradient(to right, #000, hsl(var(--hue), var(--saturation), 50%), #fff)"
    ></slider-input>
  </shadow-box>
`;class At extends HTMLElement{constructor(){super(),this._colour=new w.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ce.content.cloneNode(!0))}get hueRange(){return this.shadowRoot.getElementById("hue")}get saturationRange(){return this.shadowRoot.getElementById("saturation")}get lightnessRange(){return this.shadowRoot.getElementById("lightness")}get colour(){return this._colour}set colour(t){this._colour=t,this.hueRange.value=t.getHsl().hue,this.saturationRange.value=t.getHsl().saturation,this.lightnessRange.value=t.getHsl().lightness,this.style.setProperty("--hue",t.getHsl().hue.toString()),this.style.setProperty("--saturation",(t.getHsl().saturation*100).toString()+"%"),this.style.setProperty("--lightness",(t.getHsl().lightness*100).toString()+"%")}connectedCallback(){const t=this.getAttribute("value");t&&(this.colour=new w.Chromator(t)),this.hueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new w.Chromator({...this.colour.getHsl(),hue:this.hueRange.value})}))}),this.saturationRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new w.Chromator({...this.colour.getHsl(),saturation:this.saturationRange.value})}))}),this.lightnessRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new w.Chromator({...this.colour.getHsl(),lightness:this.lightnessRange.value})}))}),this.addEventListener("hsl-change",r=>{this.colour=r.detail})}}window.customElements.define("colour-picker-hsl",At);const xe=document.createElement("template");xe.innerHTML=`
   <style>
      :host {
        --red: 64;
        --green: 191;
        --blue: 191;
      }
      shadow-box {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
  </style>
  <shadow-box>
    <slider-input
      id="red"
      label="Red"
      min="0"
      max="255"
      step="1"
      value="0"
      background="linear-gradient(to right, rgb(0, var(--green), var(--blue)), rgb(255, var(--green), var(--blue)))"
     ></slider-input>
    <slider-input
      id="green"
      label="Green"
      min="0"
      max="255"
      step="1"
      value="0"
      background="linear-gradient(to right, rgb(var(--red), 0, var(--blue)), rgb(var(--red), 255, var(--blue)))"
    ></slider-input>
    <slider-input
      id="blue"
      label="Blue"
      min="0"
      max="255"
      step="1"
      value="0"
      background="linear-gradient(to right, rgb(var(--red), var(--green), 0), rgb(var(--red), var(--green), 255))"
    ></slider-input>
  </shadow-box>
`;class qt extends HTMLElement{constructor(){super(),this._colour=new w.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(xe.content.cloneNode(!0))}get redRange(){return this.shadowRoot.getElementById("red")}get greenRange(){return this.shadowRoot.getElementById("green")}get blueRange(){return this.shadowRoot.getElementById("blue")}get colour(){return this._colour}set colour(t){this._colour=t;const r=t.getRgb();this.redRange.value=r.red,this.greenRange.value=r.green,this.blueRange.value=r.blue,this.style.setProperty("--red",r.red.toString()),this.style.setProperty("--green",r.green.toString()),this.style.setProperty("--blue",r.blue.toString())}connectedCallback(){const t=this.getAttribute("value");t&&(this.colour=new w.Chromator(t)),this.redRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new w.Chromator({...this.colour.getRgb(),red:this.redRange.value})}))}),this.greenRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new w.Chromator({...this.colour.getRgb(),green:this.greenRange.value})}))}),this.blueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new w.Chromator({...this.colour.getRgb(),blue:this.blueRange.value})}))}),this.addEventListener("rgb-change",r=>{this.colour=r.detail})}}window.customElements.define("colour-picker-rgb",qt);const _e=document.createElement("template");_e.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;class Gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(_e.content.cloneNode(!0))}}window.customElements.define("layout-row",Gt);const Oe=document.createElement("template");Oe.innerHTML=`
  <style>
    :host {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 1em;
    }
    
    .input-wrapper {
      display: flex;
      gap: 1em;
      align-items: center;
    }
    
    label, p {
      font-size: 1.5em;
      padding: 0;
      margin: 0;
    }
    
    .slider {
      flex: 1;
    }
  </style>
  <shadow-box class="input-wrapper">
    <label for="input">Colour:</label>
    <input type="color" id="input"/>
    <p id="hexcode"></p>
  </shadow-box>
  <layout-row>
    <colour-picker-hsl id="hsl" class="slider"></colour-picker-hsl>
    <colour-picker-rgb id="rgb" class="slider"></colour-picker-rgb>
  </layout-row>
`;class Yt extends HTMLElement{constructor(){super(),this._colour=new w.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Oe.content.cloneNode(!0))}get input(){return this.shadowRoot.getElementById("input")}get hexcode(){return this.shadowRoot.getElementById("hexcode")}get hsl(){return this.shadowRoot.getElementById("hsl")}get rgb(){return this.shadowRoot.getElementById("rgb")}get colour(){return this._colour}set colour(t){this._colour=t,this.input.value=t.getHexCode(),this.hsl.colour=t,this.rgb.colour=t,this.hexcode.textContent=t.getHexCode()}connectedCallback(){this.input.addEventListener("input",()=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:new w.Chromator(this.input.value)}))}),this.hsl.addEventListener("hsl-change",t=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:t.detail}))}),this.rgb.addEventListener("rgb-change",t=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:t.detail}))}),this.addEventListener("colour-change",t=>{this.colour=t.detail})}}window.customElements.define("colour-picker",Yt);const Se=document.createElement("template");Se.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Se.content.cloneNode(!0))}}window.customElements.define("layout-column",Zt);const Ee=document.createElement("template");Ee.innerHTML=`
  <style>
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      aspect-ratio: 1;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;
    }
  </style>
  <span id="hex"></span>
`;class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ee.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t;const r=t.getHexCode(),{hue:o,saturation:a,lightness:u}=t.getHsl(),c=t.getRelativeLuminance(),b=k.round(o,0),C=k.round(a,2),V=k.round(u,2),v=k.round(c,2),f=Intl.NumberFormat().format(b),E=Intl.NumberFormat().format(C),g=Intl.NumberFormat().format(V),h=Intl.NumberFormat().format(v);this.style.backgroundColor=r,this.style.color=c>1/3?"black":"white",this.title=`Hue: ${f}°; Saturation: ${E}; Lightness: ${g}; Relative luminance: ${h}`,this.hexElement.textContent=r}get hexElement(){return this.shadowRoot.querySelector("#hex")}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new w.Chromator(t))}}window.customElements.define("colour-box",Kt);const Pe=document.createElement("template");Pe.innerHTML=`
  <layout-column id="wrapper"></layout-column>
`;class Jt extends HTMLElement{constructor(){super(),this._colour=new w.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfShades=8,this.boxes=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Pe.content.cloneNode(!0))}get wrapper(){return this.shadowRoot.querySelector("#wrapper")}get colour(){return this._colour}set colour(t){this._colour=t,this.setBoxes()}get numberOfShades(){return this._numberOfShades}set numberOfShades(t){this._numberOfShades=t,this.setBoxes()}setBoxes(){const t=Dt(this.numberOfShades,this.colour);this.boxes.length!==t.length?(this.boxes.forEach(r=>{r.remove()}),t.forEach(r=>{const o=document.createElement("colour-box");o.colour=r,this.wrapper.appendChild(o),this.boxes.push(o)})):this.boxes.forEach((r,o)=>{r.colour=t[o]})}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new w.Chromator(t)),this.setBoxes()}}window.customElements.define("colour-row",Jt);const Ve=document.createElement("template");Ve.innerHTML=`
  <shadow-box>
    <layout-column>
        <div>
          <label for="opposites">Number of opposites:</label>
          <input type="number" id="opposites" value="3" min="1" max="144"/>
        </div>
        <div>
          <label for="shades">Number of shades:</label>
          <input type="number" id="shades" value="8" min="1" max="144"/>
        </div>
        <layout-row id="boxes">
          <colour-row id="maincolour"></colour-row>
        </layout-row>
    </layout-column>
  </shadow-box>
`;class Qt extends HTMLElement{constructor(){super(),this._colour=new w.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this._numberOfShades=8,this.otherColourRows=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ve.content.cloneNode(!0))}get mainColourRow(){return this.shadowRoot.querySelector("#maincolour")}get oppositesInput(){return this.shadowRoot.querySelector("#opposites")}get shadesInput(){return this.shadowRoot.querySelector("#shades")}get boxes(){return this.shadowRoot.querySelector("#boxes")}get colour(){return this._colour}set colour(t){this._colour=t,this.mainColourRow.colour=t,this.setOpposites()}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.setOpposites()}get numberOfShades(){return this._numberOfShades}set numberOfShades(t){this._numberOfShades=t,this.mainColourRow.numberOfShades=t,this.otherColourRows.forEach(r=>r.numberOfShades=t)}setOpposites(){const t=ye(this.numberOfOpposites,this.colour);t.splice(0,1),this.otherColourRows.length!==t.length?(this.otherColourRows.forEach(r=>r.remove()),t.forEach(r=>{const o=document.createElement("colour-row");o.colour=r,o.numberOfShades=this.numberOfShades,this.boxes.appendChild(o),this.otherColourRows.push(o)})):t.forEach((r,o)=>{const a=this.otherColourRows[o];a.colour=r,a.numberOfShades=this.numberOfShades})}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new w.Chromator(t)),this.setOpposites(),this.oppositesInput.addEventListener("input",()=>{this.numberOfOpposites=parseInt(this.oppositesInput.value),this.dispatchEvent(new CustomEvent("oppositeschange",{detail:this.numberOfOpposites}))}),this.shadesInput.addEventListener("input",()=>{this.numberOfShades=parseInt(this.shadesInput.value)})}}window.customElements.define("colour-properties",Qt);const We=document.createElement("template");We.innerHTML=`
  <style>
    h1 {
      margin: 0;
    }
  
    .root {
      width: fit-content;
      margin: auto;
      font-family: Calibri, Arial, sans-serif;
      font-size: 1rem;
    }
  
    .colour-pickers {
      display: flex;
      gap: 1em;
      flex-direction: column;
      width: 100%;
    }
  </style>
  <layout-column class="root">
    <h1>Colour picker</h1>
    <layout-row>
      <layout-column>
        <colour-picker id="colour-picker"></colour-picker>
        <colour-circle id="colour-circle" size="100%"></colour-circle>
      </layout-column>
      <colour-properties id="properties"></colour-properties>
    </layout-row>
    <p>&copy; Tomas Engebretsen | <a href="https://github.com/TomasEng/Chromator">See repository on Github</a></p>
  </div>
`;class er extends HTMLElement{constructor(){super(),this._colour=new w.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(We.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t,this.colourPicker.colour=t,this.colourCircle.colour=t,this.colourProperties.colour=t}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.colourCircle.numberOfOpposites=t}get colourPicker(){return this.shadowRoot.querySelector("#colour-picker")}get colourCircle(){return this.shadowRoot.querySelector("#colour-circle")}get colourProperties(){return this.shadowRoot.querySelector("#properties")}getHsl(){return this.colour.getHsl()}connectedCallback(){this.colour=new w.Chromator("#39C6BC"),this.colourPicker.addEventListener("colour-change",t=>{this.colour=t.detail}),this.colourCircle.addEventListener("point-change",t=>{this.colour=new w.Chromator({...t.detail,lightness:this.colour.getHsl().lightness})}),this.colourProperties.addEventListener("oppositeschange",t=>{this.numberOfOpposites=t.detail})}}window.customElements.define("main-component",er);document.querySelector("#app").innerHTML=`
  <main-component></main-component>
`;
