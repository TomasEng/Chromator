(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const h of a)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const h={};return a.integrity&&(h.integrity=a.integrity),a.referrerPolicy&&(h.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?h.credentials="include":a.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function i(a){if(a.ep)return;a.ep=!0;const h=t(a);fetch(a.href,h)}})();const Re=e=>{const r=we(e);return Ce(r)},we=e=>{const r=xe(e.angle);return _e({...e,angle:r})},xe=e=>e*Math.PI/180,_e=e=>({x:e.radius*Math.cos(e.angle),y:e.radius*Math.sin(e.angle)}),Ce=e=>({left:(e.x+1)/2,top:1-(e.y+1)/2}),ue=e=>{const r=Se(e);return Pe(r)},Se=e=>({x:e.left*2-1,y:1-e.top*2}),Pe=e=>{const r=Ve(e);return{angle:Ee(r.angle),radius:r.radius}},Ee=e=>e*180/Math.PI,Ve=e=>({angle:We(Math.atan2(e.y,e.x),2*Math.PI),radius:Math.sqrt(e.x**2+e.y**2)}),We=(e,r)=>(e%r+r)%r,de=document.createElement("template");de.innerHTML=`
  <style>
    .point {
      --left: 0.5;
      --top: 0.5;
      --size: 1rem;
      width: var(--size);
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #000;
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
      position: relative;
      top: calc(var(--top) * 100% - var(--size) / 2);
      left: calc(var(--left) * 100% - var(--size) / 2);
      cursor: pointer;
    }
  </style>
  <div class="point" draggable="true"></div>
`;class Oe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(de.content.cloneNode(!0))}get point(){return this.shadowRoot.querySelector(".point")}get colour(){return this._colour}set colour(r){this.point.style.background=r.getHexCode();const{hue:t,saturation:i}=r.getHsl(),h=Re({angle:t,radius:i});this.point.style.setProperty("--left",`${h.left}`),this.point.style.setProperty("--top",`${h.top}`)}connectedCallback(){this.point.addEventListener("drag",r=>{this.dispatchEvent(new CustomEvent("point-drag",{detail:{left:r.x,top:r.y}}))}),this.point.addEventListener("dragstart",r=>{r.dataTransfer.setDragImage(new Image,0,0)})}}window.customElements.define("colour-circle-point",Oe);var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y={},Q={},Z={},ee={},_={},re={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.colourFormatRegex=void 0;I.colourFormatRegex={hsl:/^hsl\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*\)$/i,hsla:/^hsla\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,namedColour:/[\w-]+/i,namedTransparent:/transparent/i,rgbDecimal:/^rgb\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*\)$/i,rgbHexLongWithHash:/^#[0-9a-fA-F]{6}$/i,rgbHexLongWithoutHash:/^[0-9a-fA-F]{6}$/i,rgbHexShortWithHash:/^#[0-9a-f]{3}$/i,rgbHexShortWithoutHash:/^[0-9a-f]{3}$/i,rgbaDecimal:/^rgba\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,rgbaHexLongWithHash:/^#[0-9a-f]{8}$/i,rgbaHexLongWithoutHash:/^[0-9a-f]{8}$/i,rgbaHexShortWithHash:/^#[0-9a-fA-F]{4}$/i,rgbaHexShortWithoutHash:/^[0-9a-fA-F]{4}$/i};var se={},X={};Object.defineProperty(X,"__esModule",{value:!0});X.namedColours=void 0;X.namedColours={aliceblue:{red:240,green:248,blue:255},antiquewhite:{red:250,green:235,blue:215},aqua:{red:0,green:255,blue:255},aquamarine:{red:127,green:255,blue:212},azure:{red:240,green:255,blue:255},beige:{red:245,green:245,blue:220},bisque:{red:255,green:228,blue:196},black:{red:0,green:0,blue:0},blanchedalmond:{red:255,green:235,blue:205},blue:{red:0,green:0,blue:255},blueviolet:{red:138,green:43,blue:226},brown:{red:165,green:42,blue:42},burlywood:{red:222,green:184,blue:135},cadetblue:{red:95,green:158,blue:160},chartreuse:{red:127,green:255,blue:0},chocolate:{red:210,green:105,blue:30},coral:{red:255,green:127,blue:80},cornflowerblue:{red:100,green:149,blue:237},cornsilk:{red:255,green:248,blue:220},crimson:{red:220,green:20,blue:60},cyan:{red:0,green:255,blue:255},darkblue:{red:0,green:0,blue:139},darkcyan:{red:0,green:139,blue:139},darkgoldenrod:{red:184,green:134,blue:11},darkgray:{red:169,green:169,blue:169},darkgreen:{red:0,green:100,blue:0},darkgrey:{red:169,green:169,blue:169},darkkhaki:{red:189,green:183,blue:107},darkmagenta:{red:139,green:0,blue:139},darkolivegreen:{red:85,green:107,blue:47},darkorange:{red:255,green:140,blue:0},darkorchid:{red:153,green:50,blue:204},darkred:{red:139,green:0,blue:0},darksalmon:{red:233,green:150,blue:122},darkseagreen:{red:143,green:188,blue:143},darkslateblue:{red:72,green:61,blue:139},darkslategray:{red:47,green:79,blue:79},darkslategrey:{red:47,green:79,blue:79},darkturquoise:{red:0,green:206,blue:209},darkviolet:{red:148,green:0,blue:211},deeppink:{red:255,green:20,blue:147},deepskyblue:{red:0,green:191,blue:255},dimgray:{red:105,green:105,blue:105},dimgrey:{red:105,green:105,blue:105},dodgerblue:{red:30,green:144,blue:255},firebrick:{red:178,green:34,blue:34},floralwhite:{red:255,green:250,blue:240},forestgreen:{red:34,green:139,blue:34},fuchsia:{red:255,green:0,blue:255},gainsboro:{red:220,green:220,blue:220},ghostwhite:{red:248,green:248,blue:255},gold:{red:255,green:215,blue:0},goldenrod:{red:218,green:165,blue:32},gray:{red:128,green:128,blue:128},green:{red:0,green:128,blue:0},greenyellow:{red:173,green:255,blue:47},grey:{red:128,green:128,blue:128},honeydew:{red:240,green:255,blue:240},hotpink:{red:255,green:105,blue:180},indianred:{red:205,green:92,blue:92},indigo:{red:75,green:0,blue:130},ivory:{red:255,green:255,blue:240},khaki:{red:240,green:230,blue:140},lavender:{red:230,green:230,blue:250},lavenderblush:{red:255,green:240,blue:245},lawngreen:{red:124,green:252,blue:0},lemonchiffon:{red:255,green:250,blue:205},lightblue:{red:173,green:216,blue:230},lightcoral:{red:240,green:128,blue:128},lightcyan:{red:224,green:255,blue:255},lightgoldenrodyellow:{red:250,green:250,blue:210},lightgray:{red:211,green:211,blue:211},lightgreen:{red:144,green:238,blue:144},lightgrey:{red:211,green:211,blue:211},lightpink:{red:255,green:182,blue:193},lightsalmon:{red:255,green:160,blue:122},lightseagreen:{red:32,green:178,blue:170},lightskyblue:{red:135,green:206,blue:250},lightslategray:{red:119,green:136,blue:153},lightslategrey:{red:119,green:136,blue:153},lightsteelblue:{red:176,green:196,blue:222},lightyellow:{red:255,green:255,blue:224},lime:{red:0,green:255,blue:0},limegreen:{red:50,green:205,blue:50},linen:{red:250,green:240,blue:230},magenta:{red:255,green:0,blue:255},maroon:{red:128,green:0,blue:0},mediumaquamarine:{red:102,green:205,blue:170},mediumblue:{red:0,green:0,blue:205},mediumorchid:{red:186,green:85,blue:211},mediumpurple:{red:147,green:112,blue:219},mediumseagreen:{red:60,green:179,blue:113},mediumslateblue:{red:123,green:104,blue:238},mediumspringgreen:{red:0,green:250,blue:154},mediumturquoise:{red:72,green:209,blue:204},mediumvioletred:{red:199,green:21,blue:133},midnightblue:{red:25,green:25,blue:112},mintcream:{red:245,green:255,blue:250},mistyrose:{red:255,green:228,blue:225},moccasin:{red:255,green:228,blue:181},navajowhite:{red:255,green:222,blue:173},navy:{red:0,green:0,blue:128},oldlace:{red:253,green:245,blue:230},olive:{red:128,green:128,blue:0},olivedrab:{red:107,green:142,blue:35},orange:{red:255,green:165,blue:0},orangered:{red:255,green:69,blue:0},orchid:{red:218,green:112,blue:214},palegoldenrod:{red:238,green:232,blue:170},palegreen:{red:152,green:251,blue:152},paleturquoise:{red:175,green:238,blue:238},palevioletred:{red:219,green:112,blue:147},papayawhip:{red:255,green:239,blue:213},peachpuff:{red:255,green:218,blue:185},peru:{red:205,green:133,blue:63},pink:{red:255,green:192,blue:203},plum:{red:221,green:160,blue:221},powderblue:{red:176,green:224,blue:230},purple:{red:128,green:0,blue:128},rebeccapurple:{red:102,green:51,blue:153},red:{red:255,green:0,blue:0},rosybrown:{red:188,green:143,blue:143},royalblue:{red:65,green:105,blue:225},saddlebrown:{red:139,green:69,blue:19},salmon:{red:250,green:128,blue:114},sandybrown:{red:244,green:164,blue:96},seagreen:{red:46,green:139,blue:87},seashell:{red:255,green:245,blue:238},sienna:{red:160,green:82,blue:45},silver:{red:192,green:192,blue:192},skyblue:{red:135,green:206,blue:235},slateblue:{red:106,green:90,blue:205},slategray:{red:112,green:128,blue:144},slategrey:{red:112,green:128,blue:144},snow:{red:255,green:250,blue:250},springgreen:{red:0,green:255,blue:127},steelblue:{red:70,green:130,blue:180},tan:{red:210,green:180,blue:140},teal:{red:0,green:128,blue:128},thistle:{red:216,green:191,blue:216},tomato:{red:255,green:99,blue:71},turquoise:{red:64,green:224,blue:208},violet:{red:238,green:130,blue:238},wheat:{red:245,green:222,blue:179},white:{red:255,green:255,blue:255},whitesmoke:{red:245,green:245,blue:245},yellow:{red:255,green:255,blue:0},yellowgreen:{red:154,green:205,blue:50}};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isValidUnitIntervalOrPercentageValue=e.isValidUnitIntervalValue=e.isValid255ScaleValue=e.isValidPercentageValue=e.isValidDegreeValue=e.isValidTransparentName=e.isValidColourName=e.isValidRgba255String=e.isValidRgb255String=e.isValidHslaString=e.isValidHslString=void 0;var r=I,t=X,i=function(u){var d=r.colourFormatRegex.hsl,H=u.trim().toLowerCase(),R=d.test(H);if(!R)return!1;var v=d.exec(H).groups,V=v.hue,F=v.saturation,n=v.lightness;return(0,e.isValidDegreeValue)(V)&&(0,e.isValidUnitIntervalOrPercentageValue)(F)&&(0,e.isValidUnitIntervalOrPercentageValue)(n)};e.isValidHslString=i;var a=function(u){var d=r.colourFormatRegex.hsla,H=u.trim().toLowerCase(),R=d.test(H);if(!R)return!1;var v=d.exec(H).groups,V=v.hue,F=v.saturation,n=v.lightness,o=v.alpha;return(0,e.isValidDegreeValue)(V)&&(0,e.isValidUnitIntervalOrPercentageValue)(F)&&(0,e.isValidUnitIntervalOrPercentageValue)(n)&&(0,e.isValidUnitIntervalOrPercentageValue)(o)};e.isValidHslaString=a;var h=function(u){var d=r.colourFormatRegex.rgbDecimal,H=u.trim().toLowerCase(),R=d.test(H);if(!R)return!1;var v=d.exec(H).groups,V=v.red,F=v.green,n=v.blue;return(0,e.isValid255ScaleValue)(V)&&(0,e.isValid255ScaleValue)(F)&&(0,e.isValid255ScaleValue)(n)};e.isValidRgb255String=h;var m=function(u){var d=r.colourFormatRegex.rgbaDecimal,H=u.trim().toLowerCase(),R=d.test(H);if(!R)return!1;var v=d.exec(H).groups,V=v.red,F=v.green,n=v.blue,o=v.alpha;return(0,e.isValid255ScaleValue)(V)&&(0,e.isValid255ScaleValue)(F)&&(0,e.isValid255ScaleValue)(n)&&(0,e.isValidUnitIntervalOrPercentageValue)(o)};e.isValidRgba255String=m;var c=function(u){var d=u.trim().toLowerCase();return Object.keys(t.namedColours).includes(d)};e.isValidColourName=c;var w=function(u){var d=u.trim().toLowerCase();return d==="transparent"};e.isValidTransparentName=w;var M=function(u){return/^(((([12]?\d{1,2})|(3[012345]\d))(\.\d+)?)|360(\.0+)?|\.\d+)$/.test(u)};e.isValidDegreeValue=M;var D=function(u){return/^((((\d{1,2}(\.\d+)?)|(100(\.0+)?)|(\.\d+))%)|0)$/.test(u)};e.isValidPercentageValue=D;var N=function(u){return/^((((1?\d{1,2})|(2([01234]\d|5[01234])))(\.\d+)?)|255(\.0+)?|\.\d+)$/.test(u)};e.isValid255ScaleValue=N;var G=function(u){return/^(0|0\.\d+|\.\d+|1(\.0+)?)$/.test(u)};e.isValidUnitIntervalValue=G;var b=function(u){return(0,e.isValidUnitIntervalValue)(u)||(0,e.isValidPercentageValue)(u)};e.isValidUnitIntervalOrPercentageValue=b})(se);Object.defineProperty(re,"__esModule",{value:!0});re.isOnFormat=void 0;var ke=I,z=se,Me=function(e,r){switch(r){case"hsl":return(0,z.isValidHslString)(e);case"hsla":return(0,z.isValidHslaString)(e);case"namedColour":return(0,z.isValidColourName)(e);case"rgbDecimal":return(0,z.isValidRgb255String)(e);case"rgbaDecimal":return(0,z.isValidRgba255String)(e);default:return ke.colourFormatRegex[r].test(e)}};re.isOnFormat=Me;Object.defineProperty(_,"__esModule",{value:!0});_.evaluateFormat=_.floor=_.round=_.modulo=void 0;var Fe=re,Le=I,je=function(e,r){return(e%r+r)%r};_.modulo=je;var Ie=function(e,r){return r===void 0&&(r=0),Math.round(e*Math.pow(10,r))/Math.pow(10,r)};_.round=Ie;var De=function(e,r){return r===void 0&&(r=0),Math.floor(e*Math.pow(10,r))/Math.pow(10,r)};_.floor=De;var $e=function(e){for(var r=Object.keys(Le.colourFormatRegex),t=0,i=r;t<i.length;t++){var a=i[t];if((0,Fe.isOnFormat)(e,a))return a}};_.evaluateFormat=$e;var te={};Object.defineProperty(te,"__esModule",{value:!0});te.HueRegion=void 0;var he;(function(e){e.RedYellow="RedYellow",e.YellowGreen="YellowGreen",e.GreenCyan="GreenCyan",e.CyanBlue="CyanBlue",e.BlueMagenta="BlueMagenta",e.MagentaRed="MagentaRed"})(he||(te.HueRegion=he={}));(function(e){var r=E&&E.__assign||function(){return r=Object.assign||function(n){for(var o,s=1,l=arguments.length;s<l;s++){o=arguments[s];for(var g in o)Object.prototype.hasOwnProperty.call(o,g)&&(n[g]=o[g])}return n},r.apply(this,arguments)},t=E&&E.__rest||function(n,o){var s={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&o.indexOf(l)<0&&(s[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,l=Object.getOwnPropertySymbols(n);g<l.length;g++)o.indexOf(l[g])<0&&Object.prototype.propertyIsEnumerable.call(n,l[g])&&(s[l[g]]=n[l[g]]);return s};Object.defineProperty(e,"__esModule",{value:!0}),e.hslaToHsva=e.hslToHsv=e.hsvaToHsla=e.hsvToHsl=e.rgbToHsv=e.hsvToRgb=e.rgbaToHsla=e.rgbToHsl=e.hslaToRgba=e.hslToRgb=void 0;var i=_,a=te,h=function(n){var o=n.red,s=n.green,l=n.blue;return{red:o*255,green:s*255,blue:l*255}},m=function(n){var o=n.red,s=n.green,l=n.blue;return{red:o/255,green:s/255,blue:l/255}},c=function(n){var o=n.hue,s=n.saturation,l=n.lightness,g=(1-Math.abs(2*l-1))*s,T=o/60,C=g*(1-Math.abs(T%2-1)),S=l-g/2,W=M(o,g,C),$=N(W,S);return h($)};e.hslToRgb=c;var w=function(n){var o=n.alpha,s=t(n,["alpha"]),l=(0,e.hslToRgb)(s);return r(r({},l),{alpha:o})};e.hslaToRgba=w;var M=function(n,o,s){switch(D(n)){case a.HueRegion.RedYellow:return{red:o,green:s,blue:0};case a.HueRegion.YellowGreen:return{red:s,green:o,blue:0};case a.HueRegion.GreenCyan:return{red:0,green:o,blue:s};case a.HueRegion.CyanBlue:return{red:0,green:s,blue:o};case a.HueRegion.BlueMagenta:return{red:s,green:0,blue:o};case a.HueRegion.MagentaRed:return{red:o,green:0,blue:s}}},D=function(n){var o=(0,i.modulo)(n,360);return o>=0&&o<60?a.HueRegion.RedYellow:o>=60&&o<120?a.HueRegion.YellowGreen:o>=120&&o<180?a.HueRegion.GreenCyan:o>=180&&o<240?a.HueRegion.CyanBlue:o>=240&&o<300?a.HueRegion.BlueMagenta:a.HueRegion.MagentaRed},N=function(n,o){var s=n.red,l=n.green,g=n.blue;return{red:s+o,green:l+o,blue:g+o}},G=function(n){var o=m(n),s=o.red,l=o.green,g=o.blue,T=Math.max(s,l,g),C=Math.min(s,l,g),S=T-C,W=(T+C)/2,$=S===0?0:S/(1-Math.abs(2*W-1)),ae=S===0?0:u(s,l,g,T,S),ne=(0,i.modulo)(ae*60,360);return{hue:ne,saturation:$,lightness:W}};e.rgbToHsl=G;var b=function(n){var o=n.alpha,s=t(n,["alpha"]),l=(0,e.rgbToHsl)(s);return r(r({},l),{alpha:o})};e.rgbaToHsla=b;var u=function(n,o,s,l,g){switch(l){case n:return(o-s)/g;case o:return(s-n)/g+2;case s:return(n-o)/g+4;default:return 0}},d=function(n){var o=n.hue,s=n.saturation,l=n.value,g=l*s,T=o/60,C=g*(1-Math.abs(T%2-1)),S=l-g,W=M(o,g,C),$=N(W,S);return h($)};e.hsvToRgb=d;var H=function(n){var o=m(n),s=o.red,l=o.green,g=o.blue,T=Math.max(s,l,g),C=Math.min(s,l,g),S=T-C,W=T,$=W===0?0:S/W,ae=S===0?0:u(s,l,g,T,S),ne=(0,i.modulo)(ae*60,360);return{hue:ne,saturation:$,value:W}};e.rgbToHsv=H;var R=function(n){var o=n.hue,s=n.saturation,l=n.value,g=l*s,T=(2-s)*l/2,C=g===0?0:g/(1-Math.abs(2*T-1));return{hue:o,saturation:C,lightness:T}};e.hsvToHsl=R;var v=function(n){var o=n.alpha,s=t(n,["alpha"]),l=(0,e.hsvToHsl)(s);return r(r({},l),{alpha:o})};e.hsvaToHsla=v;var V=function(n){var o=n.hue,s=n.saturation,l=n.lightness,g=(1-Math.abs(2*l-1))*s,T=l+g/2,C=T===0?0:g/T;return{hue:o,saturation:C,value:T}};e.hslToHsv=V;var F=function(n){var o=n.alpha,s=t(n,["alpha"]),l=(0,e.hslToHsv)(s);return r(r({},l),{alpha:o})};e.hslaToHsva=F})(ee);var p={},le={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.numberFromPercentage=e.numberFromPercentageOrUnitInterval=e.shortHexToDecimal=e.hexPairToDecimal=void 0;var r=se,t=function(c){return parseInt(c,16)};e.hexPairToDecimal=t;var i=function(c){return(0,e.hexPairToDecimal)(c+c)};e.shortHexToDecimal=i;var a=function(c){return(0,r.isValidUnitIntervalValue)(c)?parseFloat(c):(0,e.numberFromPercentage)(c)};e.numberFromPercentageOrUnitInterval=a;var h=function(c){var w=m.exec(c)[0];return parseFloat(w)/100};e.numberFromPercentage=h;var m=/\d*\.?\d*(?=%)/})(le);var ce={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shortHexWithoutHashToRgba=e.shortHexWithHashToRgba=e.shortHexWithoutHashToRgb=e.shortHexWithHashToRgb=e.hexWithoutHashToRgba=e.hexWithHashToRgba=e.hexWithoutHashToRgb=e.hexWithHashToRgb=e.rgba255StringToRgba=e.rgb255StringToRgb=void 0;var r=I,t=le,i=function(b){var u=r.colourFormatRegex.rgbDecimal,d=u.exec(b).groups,H=d.red,R=d.green,v=d.blue;return{red:parseFloat(H),green:parseFloat(R),blue:parseFloat(v)}};e.rgb255StringToRgb=i;var a=function(b){var u=r.colourFormatRegex.rgbaDecimal,d=u.exec(b).groups,H=d.red,R=d.green,v=d.blue,V=d.alpha;return{red:parseFloat(H),green:parseFloat(R),blue:parseFloat(v),alpha:(0,t.numberFromPercentageOrUnitInterval)(V)}};e.rgba255StringToRgba=a;var h=function(b){return(0,e.hexWithoutHashToRgb)(b.substring(1))};e.hexWithHashToRgb=h;var m=function(b){var u=(0,t.hexPairToDecimal)(b.substring(0,2)),d=(0,t.hexPairToDecimal)(b.substring(2,4)),H=(0,t.hexPairToDecimal)(b.substring(4,6));return{red:u,green:d,blue:H}};e.hexWithoutHashToRgb=m;var c=function(b){return(0,e.hexWithoutHashToRgba)(b.substring(1))};e.hexWithHashToRgba=c;var w=function(b){var u=(0,e.hexWithoutHashToRgb)(b),d=u.red,H=u.green,R=u.blue,v=(0,t.hexPairToDecimal)(b.substring(6,8))/255;return{red:d,green:H,blue:R,alpha:v}};e.hexWithoutHashToRgba=w;var M=function(b){return(0,e.shortHexWithoutHashToRgb)(b.substring(1))};e.shortHexWithHashToRgb=M;var D=function(b){var u=(0,t.shortHexToDecimal)(b.substring(0,1)),d=(0,t.shortHexToDecimal)(b.substring(1,2)),H=(0,t.shortHexToDecimal)(b.substring(2,3));return{red:u,green:d,blue:H}};e.shortHexWithoutHashToRgb=D;var N=function(b){return(0,e.shortHexWithoutHashToRgba)(b.substring(1))};e.shortHexWithHashToRgba=N;var G=function(b){var u=(0,e.shortHexWithoutHashToRgb)(b),d=u.red,H=u.green,R=u.blue,v=(0,t.shortHexToDecimal)(b.substring(3,4))/255;return{red:d,green:H,blue:R,alpha:v}};e.shortHexWithoutHashToRgba=G})(ce);var J=E&&E.__assign||function(){return J=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},J.apply(this,arguments)},Ne=E&&E.__rest||function(e,r){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)r.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]]);return t};Object.defineProperty(p,"__esModule",{value:!0});p.shortHexWithHashToHsla=p.shortHexWithoutHashToHsla=p.shortHexWithHashToHsl=p.shortHexWithoutHashToHsl=p.hexWithHashToHsla=p.hexWithoutHashToHsla=p.hexWithHashToHsl=p.hexWithoutHashToHsl=p.rgba255StringToHsla=p.rgb255StringToHsl=p.hslaStringToHsla=p.hslStringToHsl=void 0;var be=I,K=le,O=ee,k=ce,Be=function(e){var r=be.colourFormatRegex.hsl,t=r.exec(e).groups,i=t.hue,a=t.saturation,h=t.lightness;return{hue:parseFloat(i),saturation:(0,K.numberFromPercentageOrUnitInterval)(a),lightness:(0,K.numberFromPercentageOrUnitInterval)(h)}};p.hslStringToHsl=Be;var Ue=function(e){var r=be.colourFormatRegex.hsla,t=r.exec(e).groups,i=t.hue,a=t.saturation,h=t.lightness,m=t.alpha;return{hue:parseFloat(i),saturation:(0,K.numberFromPercentageOrUnitInterval)(a),lightness:(0,K.numberFromPercentageOrUnitInterval)(h),alpha:(0,K.numberFromPercentageOrUnitInterval)(m)}};p.hslaStringToHsla=Ue;var Ae=function(e){return(0,O.rgbToHsl)((0,k.rgb255StringToRgb)(e))};p.rgb255StringToHsl=Ae;var qe=function(e){var r=(0,k.rgba255StringToRgba)(e),t=r.alpha,i=Ne(r,["alpha"]),a=(0,O.rgbToHsl)(i);return J(J({},a),{alpha:t})};p.rgba255StringToHsla=qe;var Ge=function(e){return(0,O.rgbToHsl)((0,k.hexWithoutHashToRgb)(e))};p.hexWithoutHashToHsl=Ge;var ze=function(e){return(0,O.rgbToHsl)((0,k.hexWithHashToRgb)(e))};p.hexWithHashToHsl=ze;var Ye=function(e){return(0,O.rgbaToHsla)((0,k.hexWithoutHashToRgba)(e))};p.hexWithoutHashToHsla=Ye;var Ke=function(e){return(0,O.rgbaToHsla)((0,k.hexWithHashToRgba)(e))};p.hexWithHashToHsla=Ke;var Xe=function(e){return(0,O.rgbToHsl)((0,k.shortHexWithoutHashToRgb)(e))};p.shortHexWithoutHashToHsl=Xe;var Je=function(e){return(0,O.rgbToHsl)((0,k.shortHexWithHashToRgb)(e))};p.shortHexWithHashToHsl=Je;var Qe=function(e){return(0,O.rgbaToHsla)((0,k.shortHexWithoutHashToRgba)(e))};p.shortHexWithoutHashToHsla=Qe;var Ze=function(e){return(0,O.rgbaToHsla)((0,k.shortHexWithHashToRgba)(e))};p.shortHexWithHashToHsla=Ze;var x={};Object.defineProperty(x,"__esModule",{value:!0});x.isHsva=x.isHsv=x.isHsla=x.isHsl=x.isRgba=x.isRgb=void 0;var er=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha===void 0};x.isRgb=er;var rr=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha!==void 0};x.isRgba=rr;var tr=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha===void 0};x.isHsl=tr;var ar=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha!==void 0};x.isHsla=ar;var nr=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha===void 0};x.isHsv=nr;var or=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha!==void 0};x.isHsva=or;var f=E&&E.__assign||function(){return f=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},f.apply(this,arguments)};Object.defineProperty(Z,"__esModule",{value:!0});Z.colourCodeToHsla=void 0;var Y=ee,ir=X,sr=_,P=p,B=x,lr=function(e){if(typeof e=="string")return ur(e);if((0,B.isHsla)(e))return e;if((0,B.isHsl)(e))return f(f({},e),{alpha:1});if((0,B.isRgb)(e))return f(f({},(0,Y.rgbToHsl)(e)),{alpha:1});if((0,B.isRgba)(e))return(0,Y.rgbaToHsla)(e);if((0,B.isHsv)(e))return f(f({},(0,Y.hsvToHsl)(e)),{alpha:1});if((0,B.isHsva)(e))return(0,Y.hsvaToHsla)(e);throw new Error("The passed object is not a valid colour code.")};Z.colourCodeToHsla=lr;var ur=function(e){var r=(0,sr.evaluateFormat)(e);switch(r){case"hsl":return f(f({},(0,P.hslStringToHsl)(e)),{alpha:1});case"hsla":return(0,P.hslaStringToHsla)(e);case"rgbDecimal":return f(f({},(0,P.rgb255StringToHsl)(e)),{alpha:1});case"rgbaDecimal":return(0,P.rgba255StringToHsla)(e);case"rgbHexLongWithHash":return f(f({},(0,P.hexWithHashToHsl)(e)),{alpha:1});case"rgbHexLongWithoutHash":return f(f({},(0,P.hexWithoutHashToHsl)(e)),{alpha:1});case"rgbHexShortWithHash":return f(f({},(0,P.shortHexWithHashToHsl)(e)),{alpha:1});case"rgbHexShortWithoutHash":return f(f({},(0,P.shortHexWithoutHashToHsl)(e)),{alpha:1});case"rgbaHexLongWithHash":return(0,P.hexWithHashToHsla)(e);case"rgbaHexLongWithoutHash":return(0,P.hexWithoutHashToHsla)(e);case"rgbaHexShortWithHash":return(0,P.shortHexWithHashToHsla)(e);case"rgbaHexShortWithoutHash":return(0,P.shortHexWithoutHashToHsla)(e);case"namedColour":return f(f({},(0,Y.rgbToHsl)(ir.namedColours[e])),{alpha:1});case"namedTransparent":return{hue:0,saturation:0,lightness:0,alpha:0};default:throw new Error("Invalid colour code: ".concat(e))}},j={},q={};Object.defineProperty(q,"__esModule",{value:!0});q.numberToPercentage=q.decimalToHexPair=void 0;var hr=_,gr=function(e){var r=(0,hr.round)(e).toString(16).toUpperCase();return r.length===1?"0".concat(r):r};q.decimalToHexPair=gr;var dr=function(e){return"".concat(e*100,"%")};q.numberToPercentage=dr;Object.defineProperty(j,"__esModule",{value:!0});j.rgbaObjectToRgbHexString=j.rgbaObjectToRgbDecimalString=j.hslaObjectToHslString=void 0;var U=q,L=_,cr=function(e){var r=e.hue,t=e.saturation,i=e.lightness,a=e.alpha,h=(0,L.round)(r),m=(0,L.round)(t,2),c=(0,L.round)(i,2),w=(0,U.numberToPercentage)(m),M=(0,U.numberToPercentage)(c);if(a===1)return"hsl(".concat(h,", ").concat(w,", ").concat(M,")");var D=(0,L.round)(a,2);return"hsla(".concat(h,", ").concat(w,", ").concat(M,", ").concat(D,")")};j.hslaObjectToHslString=cr;var br=function(e){var r=e.red,t=e.green,i=e.blue,a=e.alpha,h=(0,L.round)(r),m=(0,L.round)(t),c=(0,L.round)(i);if(a===1)return"rgb(".concat(h,", ").concat(m,", ").concat(c,")");var w=(0,L.round)(a,2);return"rgba(".concat(h,", ").concat(m,", ").concat(c,", ").concat(w,")")};j.rgbaObjectToRgbDecimalString=br;var vr=function(e){var r=e.red,t=e.green,i=e.blue,a=e.alpha,h=(0,U.decimalToHexPair)(r),m=(0,U.decimalToHexPair)(t),c=(0,U.decimalToHexPair)(i),w=a===1?"":(0,U.decimalToHexPair)((0,L.round)(a*255));return"#".concat(h).concat(m).concat(c).concat(w)};j.rgbaObjectToRgbHexString=vr;var A=E&&E.__assign||function(){return A=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},A.apply(this,arguments)};Object.defineProperty(Q,"__esModule",{value:!0});Q.Chromator=void 0;var mr=Z,oe=ee,ie=j,ge=_,pr=function(){function e(r){var t=(0,mr.colourCodeToHsla)(r),i=t.hue,a=t.saturation,h=t.lightness,m=t.alpha;this.hsl={hue:i,saturation:a,lightness:h},this.alpha=m}return e.prototype.copy=function(){return new e(this.getHsla())},e.prototype.getHsl=function(){return this.hsl},e.prototype.getAlpha=function(){return this.alpha},e.prototype.getHsla=function(){return A(A({},this.hsl),{alpha:this.alpha})},e.prototype.getRgb=function(){return(0,oe.hslToRgb)(this.hsl)},e.prototype.getRgba=function(){return A(A({},this.getRgb()),{alpha:this.alpha})},e.prototype.getHsv=function(){return(0,oe.hslToHsv)(this.hsl)},e.prototype.getHsva=function(){return(0,oe.hslaToHsva)(this.getHsla())},e.prototype.getRgbCode=function(){return(0,ie.rgbaObjectToRgbDecimalString)(this.getRgba())},e.prototype.getHexCode=function(){return(0,ie.rgbaObjectToRgbHexString)(this.getRgba())},e.prototype.getHslCode=function(){return(0,ie.hslaObjectToHslString)(this.getHsla())},e.prototype.lighten=function(r){var t=this.hsl.lightness,i=1-t;return this.hsl.lightness=t+i*r,this},e.prototype.darken=function(r){var t=this.hsl.lightness;return this.hsl.lightness=t*(1-r),this},e.prototype.invertLightness=function(){return this.hsl.lightness=1-this.hsl.lightness,this},e.prototype.addHue=function(r){return this.hsl.hue=(0,ge.modulo)(this.hsl.hue+r,360),this},e.prototype.subtractHue=function(r){return this.hsl.hue=(0,ge.modulo)(this.hsl.hue-r,360),this},e.prototype.complementarise=function(){return this.addHue(180),this},e.prototype.invert=function(){return this.complementarise().invertLightness(),this},e}();Q.Chromator=pr;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Chromator=void 0;var r=Q;Object.defineProperty(e,"Chromator",{enumerable:!0,get:function(){return r.Chromator}})})(y);const ve=document.createElement("template");ve.innerHTML=`
  <style>
    .circle {
      --lightness: 50%;
      aspect-ratio: 1;
      border-radius: 50%;
      width: 400px;
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
    }
  </style>
  <div class="circle">
    <colour-circle-point class="point"></colour-circle-point>
  </div>
`;class Hr extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ve.content.cloneNode(!0))}get colour(){return this._colour}set colour(r){this._colour=r,this.pointElement.colour=r;const{hue:t,saturation:i,lightness:a}=r.getHsl();this.circle.style.setProperty("--lightness",`${a*100}%`),this.pointElement.colour=r}get lightness(){return this.colour.getHsl().lightness}set lightness(r){this.colour=new y.Chromator({...this.colour.getHsl(),lightness:r})}get point(){const{hue:r,saturation:t}=this.colour.getHsl();return{hue:r,saturation:t}}set point(r){const{lightness:t}=this.colour.getHsl();this.colour=new y.Chromator({...r,lightness:t})}get circle(){return this.shadowRoot.querySelector(".circle")}get pointElement(){return this.shadowRoot.querySelector(".point")}connectedCallback(){const r=this.getAttribute("size");r&&(this.circle.style.width=r),this.addEventListener("dragover",t=>{t.preventDefault()}),this.addEventListener("click",t=>{const i=this.getPositionWithinCircle({top:t.clientY,left:t.clientX}),a=ue(i);a.radius<=1&&(this.point={hue:a.angle,saturation:a.radius},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point})))}),this.pointElement.addEventListener("point-drag",t=>{const i=this.getPositionWithinCircle(t.detail),a=ue(i);this.point={hue:a.angle,saturation:Math.min(a.radius,1)},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point}))})}getPositionWithinCircle(r){const t=this.circle.getBoundingClientRect();return{top:(r.top-t.top)/t.height,left:(r.left-t.left)/t.width}}}window.customElements.define("colour-circle",Hr);const me=document.createElement("template");me.innerHTML=`
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
`;class fr extends HTMLElement{constructor(){super(),this._value=.5,this._max=1,this._min=0,this._step=.01,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(me.content.cloneNode(!0))}get slider(){return this.shadowRoot.getElementById("slider")}get label(){return this.shadowRoot.getElementById("label")}get valueElement(){return this.shadowRoot.getElementById("value")}get value(){return this._value}set value(r){this._value=r;const t=Math.round(r/this.step)*this.step,i=Intl.NumberFormat().format(t);this.slider.value=String(t),this.valueElement.textContent=i}get max(){return this._max}set max(r){this._max=r,this.slider.max=String(r)}get min(){return this._min}set min(r){this._min=r,this.slider.min=String(r)}get step(){return this._step}set step(r){this._step=r,this.slider.step=String(r)}connectedCallback(){const r=this.getAttribute("value");r&&(this.value=Number(r));const t=this.getAttribute("label");t&&(this.label.innerHTML=t);const i=this.getAttribute("max")||"1";this.max=Number(i);const a=this.getAttribute("min")||"0";this.min=Number(a);const h=this.getAttribute("step")||"0.01";this.step=Number(h);const m=this.getAttribute("background");m&&(this.slider.style.background=m),this.slider.addEventListener("input",()=>{const c=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:c})),this.value=c}),this.slider.addEventListener("change",()=>{const c=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:c})),this.value=c})}}window.customElements.define("slider-input",fr);const pe=document.createElement("template");pe.innerHTML=`
  <style>
    :host {
      display: block;
      padding: 1em;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  </style>
  <slot></slot>
`;class Tr extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(pe.content.cloneNode(!0))}}window.customElements.define("shadow-box",Tr);const He=document.createElement("template");He.innerHTML=`
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
`;class yr extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(He.content.cloneNode(!0))}get hueRange(){return this.shadowRoot.getElementById("hue")}get saturationRange(){return this.shadowRoot.getElementById("saturation")}get lightnessRange(){return this.shadowRoot.getElementById("lightness")}get colour(){return this._colour}set colour(r){this._colour=r,this.hueRange.value=r.getHsl().hue,this.saturationRange.value=r.getHsl().saturation,this.lightnessRange.value=r.getHsl().lightness,this.style.setProperty("--hue",r.getHsl().hue.toString()),this.style.setProperty("--saturation",(r.getHsl().saturation*100).toString()+"%"),this.style.setProperty("--lightness",(r.getHsl().lightness*100).toString()+"%")}connectedCallback(){const r=this.getAttribute("value");r&&(this.colour=new y.Chromator(r)),this.hueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new y.Chromator({...this.colour.getHsl(),hue:this.hueRange.value})}))}),this.saturationRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new y.Chromator({...this.colour.getHsl(),saturation:this.saturationRange.value})}))}),this.lightnessRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new y.Chromator({...this.colour.getHsl(),lightness:this.lightnessRange.value})}))}),this.addEventListener("hsl-change",t=>{this.colour=t.detail})}}window.customElements.define("colour-picker-hsl",yr);const fe=document.createElement("template");fe.innerHTML=`
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
`;class Rr extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(fe.content.cloneNode(!0))}get redRange(){return this.shadowRoot.getElementById("red")}get greenRange(){return this.shadowRoot.getElementById("green")}get blueRange(){return this.shadowRoot.getElementById("blue")}get colour(){return this._colour}set colour(r){this._colour=r;const t=r.getRgb();this.redRange.value=t.red,this.greenRange.value=t.green,this.blueRange.value=t.blue,this.style.setProperty("--red",t.red.toString()),this.style.setProperty("--green",t.green.toString()),this.style.setProperty("--blue",t.blue.toString())}connectedCallback(){const r=this.getAttribute("value");r&&(this.colour=new y.Chromator(r)),this.redRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new y.Chromator({...this.colour.getRgb(),red:this.redRange.value})}))}),this.greenRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new y.Chromator({...this.colour.getRgb(),green:this.greenRange.value})}))}),this.blueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new y.Chromator({...this.colour.getRgb(),blue:this.blueRange.value})}))}),this.addEventListener("rgb-change",t=>{this.colour=t.detail})}}window.customElements.define("colour-picker-rgb",Rr);const Te=document.createElement("template");Te.innerHTML=`
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
  
    .sliders {
      display: flex;
      gap: 1em;
      width: 100%;
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
  <div class="sliders">
    <colour-picker-hsl id="hsl" class="slider"></colour-picker-hsl>
    <colour-picker-rgb id="rgb" class="slider"></colour-picker-rgb>
  </div>
`;class wr extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Te.content.cloneNode(!0))}get input(){return this.shadowRoot.getElementById("input")}get hexcode(){return this.shadowRoot.getElementById("hexcode")}get hsl(){return this.shadowRoot.getElementById("hsl")}get rgb(){return this.shadowRoot.getElementById("rgb")}get colour(){return this._colour}set colour(r){this._colour=r,this.input.value=r.getHexCode(),this.hsl.colour=r,this.rgb.colour=r,this.hexcode.textContent=r.getHexCode()}connectedCallback(){this.input.addEventListener("input",()=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:new y.Chromator(this.input.value)}))}),this.hsl.addEventListener("hsl-change",r=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:r.detail}))}),this.rgb.addEventListener("rgb-change",r=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:r.detail}))}),this.addEventListener("colour-change",r=>{this.colour=r.detail})}}window.customElements.define("colour-picker",wr);const ye=document.createElement("template");ye.innerHTML=`
  <style>
    .root {
      width: 600px;
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
  <div class="root">
    <h1>Colour picker</h1>
    <div class="colour-pickers">
      <colour-picker id="colour-picker"></colour-picker>
      <colour-circle id="colour-circle" size="100%"></colour-circle>
    </div>
    <p>&copy; Tomas Engebretsen | <a href="https://github.com/TomasEng/Chromator">See repository on Github</a></p>
  </div>
`;class xr extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:1,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ye.content.cloneNode(!0))}get colour(){return this._colour}set colour(r){this._colour=r,this.colourPicker.colour=r,this.colourCircle.colour=r}get colourPicker(){return this.shadowRoot.querySelector("#colour-picker")}get colourCircle(){return this.shadowRoot.querySelector("#colour-circle")}getHsl(){return this.colour.getHsl()}connectedCallback(){this.colour=new y.Chromator("#39C6BC"),this.colourPicker.addEventListener("colour-change",r=>{this.colour=r.detail}),this.colourCircle.addEventListener("point-change",r=>{this.colour=new y.Chromator({...r.detail,lightness:this.colour.getHsl().lightness})})}}window.customElements.define("main-component",xr);document.querySelector("#app").innerHTML=`
  <main-component></main-component>
`;
