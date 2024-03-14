(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const b of u.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function r(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerPolicy&&(u.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?u.credentials="include":n.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(n){if(n.ep)return;n.ep=!0;const u=r(n);fetch(n.href,u)}})();const Se=e=>{const t=Ee(e);return We(t)},Ee=e=>{const t=Pe(e.angle);return Ve({...e,angle:t})},Pe=e=>e*Math.PI/180,Ve=e=>({x:e.radius*Math.cos(e.angle),y:e.radius*Math.sin(e.angle)}),We=e=>({left:(e.x+1)/2,top:1-(e.y+1)/2}),ue=e=>{const t=ke(e);return Me(t)},ke=e=>({x:e.left*2-1,y:1-e.top*2}),Me=e=>{const t=Fe(e);return{angle:Le(t.angle),radius:t.radius}},Le=e=>e*180/Math.PI,Fe=e=>({angle:je(Math.atan2(e.y,e.x),2*Math.PI),radius:Math.sqrt(e.x**2+e.y**2)}),je=(e,t)=>(e%t+t)%t,ge=document.createElement("template");ge.innerHTML=`
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
`;class Ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ge.content.cloneNode(!0))}get point(){return this.shadowRoot.querySelector(".point")}get colour(){return this._colour}set colour(t){this.point.style.background=t.getHexCode();const{hue:r,saturation:a}=t.getHsl(),u=Se({angle:r,radius:a});this.point.style.setProperty("--left",`${u.left}`),this.point.style.setProperty("--top",`${u.top}`)}connectedCallback(){this.point.addEventListener("drag",t=>{this.dispatchEvent(new CustomEvent("point-drag",{detail:{left:t.x,top:t.y}}))}),this.point.addEventListener("dragstart",t=>{t.dataTransfer.setDragImage(new Image,0,0)}),this.getAttribute("base")===""&&(this.point.setAttribute("draggable","true"),this.point.setAttribute("class","point base"))}}window.customElements.define("colour-circle-point",Ie);var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H={},Q={},Z={},ee={},C={},te={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.colourFormatRegex=void 0;I.colourFormatRegex={hsl:/^hsl\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*\)$/i,hsla:/^hsla\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,namedColour:/[\w-]+/i,namedTransparent:/transparent/i,rgbDecimal:/^rgb\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*\)$/i,rgbHexLongWithHash:/^#[0-9a-fA-F]{6}$/i,rgbHexLongWithoutHash:/^[0-9a-fA-F]{6}$/i,rgbHexShortWithHash:/^#[0-9a-f]{3}$/i,rgbHexShortWithoutHash:/^[0-9a-f]{3}$/i,rgbaDecimal:/^rgba\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,rgbaHexLongWithHash:/^#[0-9a-f]{8}$/i,rgbaHexLongWithoutHash:/^[0-9a-f]{8}$/i,rgbaHexShortWithHash:/^#[0-9a-fA-F]{4}$/i,rgbaHexShortWithoutHash:/^[0-9a-fA-F]{4}$/i};var ie={},X={};Object.defineProperty(X,"__esModule",{value:!0});X.namedColours=void 0;X.namedColours={aliceblue:{red:240,green:248,blue:255},antiquewhite:{red:250,green:235,blue:215},aqua:{red:0,green:255,blue:255},aquamarine:{red:127,green:255,blue:212},azure:{red:240,green:255,blue:255},beige:{red:245,green:245,blue:220},bisque:{red:255,green:228,blue:196},black:{red:0,green:0,blue:0},blanchedalmond:{red:255,green:235,blue:205},blue:{red:0,green:0,blue:255},blueviolet:{red:138,green:43,blue:226},brown:{red:165,green:42,blue:42},burlywood:{red:222,green:184,blue:135},cadetblue:{red:95,green:158,blue:160},chartreuse:{red:127,green:255,blue:0},chocolate:{red:210,green:105,blue:30},coral:{red:255,green:127,blue:80},cornflowerblue:{red:100,green:149,blue:237},cornsilk:{red:255,green:248,blue:220},crimson:{red:220,green:20,blue:60},cyan:{red:0,green:255,blue:255},darkblue:{red:0,green:0,blue:139},darkcyan:{red:0,green:139,blue:139},darkgoldenrod:{red:184,green:134,blue:11},darkgray:{red:169,green:169,blue:169},darkgreen:{red:0,green:100,blue:0},darkgrey:{red:169,green:169,blue:169},darkkhaki:{red:189,green:183,blue:107},darkmagenta:{red:139,green:0,blue:139},darkolivegreen:{red:85,green:107,blue:47},darkorange:{red:255,green:140,blue:0},darkorchid:{red:153,green:50,blue:204},darkred:{red:139,green:0,blue:0},darksalmon:{red:233,green:150,blue:122},darkseagreen:{red:143,green:188,blue:143},darkslateblue:{red:72,green:61,blue:139},darkslategray:{red:47,green:79,blue:79},darkslategrey:{red:47,green:79,blue:79},darkturquoise:{red:0,green:206,blue:209},darkviolet:{red:148,green:0,blue:211},deeppink:{red:255,green:20,blue:147},deepskyblue:{red:0,green:191,blue:255},dimgray:{red:105,green:105,blue:105},dimgrey:{red:105,green:105,blue:105},dodgerblue:{red:30,green:144,blue:255},firebrick:{red:178,green:34,blue:34},floralwhite:{red:255,green:250,blue:240},forestgreen:{red:34,green:139,blue:34},fuchsia:{red:255,green:0,blue:255},gainsboro:{red:220,green:220,blue:220},ghostwhite:{red:248,green:248,blue:255},gold:{red:255,green:215,blue:0},goldenrod:{red:218,green:165,blue:32},gray:{red:128,green:128,blue:128},green:{red:0,green:128,blue:0},greenyellow:{red:173,green:255,blue:47},grey:{red:128,green:128,blue:128},honeydew:{red:240,green:255,blue:240},hotpink:{red:255,green:105,blue:180},indianred:{red:205,green:92,blue:92},indigo:{red:75,green:0,blue:130},ivory:{red:255,green:255,blue:240},khaki:{red:240,green:230,blue:140},lavender:{red:230,green:230,blue:250},lavenderblush:{red:255,green:240,blue:245},lawngreen:{red:124,green:252,blue:0},lemonchiffon:{red:255,green:250,blue:205},lightblue:{red:173,green:216,blue:230},lightcoral:{red:240,green:128,blue:128},lightcyan:{red:224,green:255,blue:255},lightgoldenrodyellow:{red:250,green:250,blue:210},lightgray:{red:211,green:211,blue:211},lightgreen:{red:144,green:238,blue:144},lightgrey:{red:211,green:211,blue:211},lightpink:{red:255,green:182,blue:193},lightsalmon:{red:255,green:160,blue:122},lightseagreen:{red:32,green:178,blue:170},lightskyblue:{red:135,green:206,blue:250},lightslategray:{red:119,green:136,blue:153},lightslategrey:{red:119,green:136,blue:153},lightsteelblue:{red:176,green:196,blue:222},lightyellow:{red:255,green:255,blue:224},lime:{red:0,green:255,blue:0},limegreen:{red:50,green:205,blue:50},linen:{red:250,green:240,blue:230},magenta:{red:255,green:0,blue:255},maroon:{red:128,green:0,blue:0},mediumaquamarine:{red:102,green:205,blue:170},mediumblue:{red:0,green:0,blue:205},mediumorchid:{red:186,green:85,blue:211},mediumpurple:{red:147,green:112,blue:219},mediumseagreen:{red:60,green:179,blue:113},mediumslateblue:{red:123,green:104,blue:238},mediumspringgreen:{red:0,green:250,blue:154},mediumturquoise:{red:72,green:209,blue:204},mediumvioletred:{red:199,green:21,blue:133},midnightblue:{red:25,green:25,blue:112},mintcream:{red:245,green:255,blue:250},mistyrose:{red:255,green:228,blue:225},moccasin:{red:255,green:228,blue:181},navajowhite:{red:255,green:222,blue:173},navy:{red:0,green:0,blue:128},oldlace:{red:253,green:245,blue:230},olive:{red:128,green:128,blue:0},olivedrab:{red:107,green:142,blue:35},orange:{red:255,green:165,blue:0},orangered:{red:255,green:69,blue:0},orchid:{red:218,green:112,blue:214},palegoldenrod:{red:238,green:232,blue:170},palegreen:{red:152,green:251,blue:152},paleturquoise:{red:175,green:238,blue:238},palevioletred:{red:219,green:112,blue:147},papayawhip:{red:255,green:239,blue:213},peachpuff:{red:255,green:218,blue:185},peru:{red:205,green:133,blue:63},pink:{red:255,green:192,blue:203},plum:{red:221,green:160,blue:221},powderblue:{red:176,green:224,blue:230},purple:{red:128,green:0,blue:128},rebeccapurple:{red:102,green:51,blue:153},red:{red:255,green:0,blue:0},rosybrown:{red:188,green:143,blue:143},royalblue:{red:65,green:105,blue:225},saddlebrown:{red:139,green:69,blue:19},salmon:{red:250,green:128,blue:114},sandybrown:{red:244,green:164,blue:96},seagreen:{red:46,green:139,blue:87},seashell:{red:255,green:245,blue:238},sienna:{red:160,green:82,blue:45},silver:{red:192,green:192,blue:192},skyblue:{red:135,green:206,blue:235},slateblue:{red:106,green:90,blue:205},slategray:{red:112,green:128,blue:144},slategrey:{red:112,green:128,blue:144},snow:{red:255,green:250,blue:250},springgreen:{red:0,green:255,blue:127},steelblue:{red:70,green:130,blue:180},tan:{red:210,green:180,blue:140},teal:{red:0,green:128,blue:128},thistle:{red:216,green:191,blue:216},tomato:{red:255,green:99,blue:71},turquoise:{red:64,green:224,blue:208},violet:{red:238,green:130,blue:238},wheat:{red:245,green:222,blue:179},white:{red:255,green:255,blue:255},whitesmoke:{red:245,green:245,blue:245},yellow:{red:255,green:255,blue:0},yellowgreen:{red:154,green:205,blue:50}};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isValidUnitIntervalOrPercentageValue=e.isValidUnitIntervalValue=e.isValid255ScaleValue=e.isValidPercentageValue=e.isValidDegreeValue=e.isValidTransparentName=e.isValidColourName=e.isValidRgba255String=e.isValidRgb255String=e.isValidHslaString=e.isValidHslString=void 0;var t=I,r=X,a=function(h){var g=t.colourFormatRegex.hsl,f=h.trim().toLowerCase(),y=g.test(f);if(!y)return!1;var m=g.exec(f).groups,P=m.hue,L=m.saturation,o=m.lightness;return(0,e.isValidDegreeValue)(P)&&(0,e.isValidUnitIntervalOrPercentageValue)(L)&&(0,e.isValidUnitIntervalOrPercentageValue)(o)};e.isValidHslString=a;var n=function(h){var g=t.colourFormatRegex.hsla,f=h.trim().toLowerCase(),y=g.test(f);if(!y)return!1;var m=g.exec(f).groups,P=m.hue,L=m.saturation,o=m.lightness,s=m.alpha;return(0,e.isValidDegreeValue)(P)&&(0,e.isValidUnitIntervalOrPercentageValue)(L)&&(0,e.isValidUnitIntervalOrPercentageValue)(o)&&(0,e.isValidUnitIntervalOrPercentageValue)(s)};e.isValidHslaString=n;var u=function(h){var g=t.colourFormatRegex.rgbDecimal,f=h.trim().toLowerCase(),y=g.test(f);if(!y)return!1;var m=g.exec(f).groups,P=m.red,L=m.green,o=m.blue;return(0,e.isValid255ScaleValue)(P)&&(0,e.isValid255ScaleValue)(L)&&(0,e.isValid255ScaleValue)(o)};e.isValidRgb255String=u;var b=function(h){var g=t.colourFormatRegex.rgbaDecimal,f=h.trim().toLowerCase(),y=g.test(f);if(!y)return!1;var m=g.exec(f).groups,P=m.red,L=m.green,o=m.blue,s=m.alpha;return(0,e.isValid255ScaleValue)(P)&&(0,e.isValid255ScaleValue)(L)&&(0,e.isValid255ScaleValue)(o)&&(0,e.isValidUnitIntervalOrPercentageValue)(s)};e.isValidRgba255String=b;var c=function(h){var g=h.trim().toLowerCase();return Object.keys(r.namedColours).includes(g)};e.isValidColourName=c;var R=function(h){var g=h.trim().toLowerCase();return g==="transparent"};e.isValidTransparentName=R;var M=function(h){return/^(((([12]?\d{1,2})|(3[012345]\d))(\.\d+)?)|360(\.0+)?|\.\d+)$/.test(h)};e.isValidDegreeValue=M;var $=function(h){return/^((((\d{1,2}(\.\d+)?)|(100(\.0+)?)|(\.\d+))%)|0)$/.test(h)};e.isValidPercentageValue=$;var N=function(h){return/^((((1?\d{1,2})|(2([01234]\d|5[01234])))(\.\d+)?)|255(\.0+)?|\.\d+)$/.test(h)};e.isValid255ScaleValue=N;var G=function(h){return/^(0|0\.\d+|\.\d+|1(\.0+)?)$/.test(h)};e.isValidUnitIntervalValue=G;var p=function(h){return(0,e.isValidUnitIntervalValue)(h)||(0,e.isValidPercentageValue)(h)};e.isValidUnitIntervalOrPercentageValue=p})(ie);Object.defineProperty(te,"__esModule",{value:!0});te.isOnFormat=void 0;var $e=I,z=ie,De=function(e,t){switch(t){case"hsl":return(0,z.isValidHslString)(e);case"hsla":return(0,z.isValidHslaString)(e);case"namedColour":return(0,z.isValidColourName)(e);case"rgbDecimal":return(0,z.isValidRgb255String)(e);case"rgbaDecimal":return(0,z.isValidRgba255String)(e);default:return $e.colourFormatRegex[t].test(e)}};te.isOnFormat=De;Object.defineProperty(C,"__esModule",{value:!0});C.evaluateFormat=C.floor=C.round=C.modulo=void 0;var Ne=te,Be=I,Ae=function(e,t){return(e%t+t)%t};C.modulo=Ae;var Ue=function(e,t){return t===void 0&&(t=0),Math.round(e*Math.pow(10,t))/Math.pow(10,t)};C.round=Ue;var qe=function(e,t){return t===void 0&&(t=0),Math.floor(e*Math.pow(10,t))/Math.pow(10,t)};C.floor=qe;var Ge=function(e){for(var t=Object.keys(Be.colourFormatRegex),r=0,a=t;r<a.length;r++){var n=a[r];if((0,Ne.isOnFormat)(e,n))return n}};C.evaluateFormat=Ge;var re={};Object.defineProperty(re,"__esModule",{value:!0});re.HueRegion=void 0;var he;(function(e){e.RedYellow="RedYellow",e.YellowGreen="YellowGreen",e.GreenCyan="GreenCyan",e.CyanBlue="CyanBlue",e.BlueMagenta="BlueMagenta",e.MagentaRed="MagentaRed"})(he||(re.HueRegion=he={}));(function(e){var t=E&&E.__assign||function(){return t=Object.assign||function(o){for(var s,i=1,l=arguments.length;i<l;i++){s=arguments[i];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},t.apply(this,arguments)},r=E&&E.__rest||function(o,s){var i={};for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&s.indexOf(l)<0&&(i[l]=o[l]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(o);d<l.length;d++)s.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(o,l[d])&&(i[l[d]]=o[l[d]]);return i};Object.defineProperty(e,"__esModule",{value:!0}),e.hslaToHsva=e.hslToHsv=e.hsvaToHsla=e.hsvToHsl=e.rgbToHsv=e.hsvToRgb=e.rgbaToHsla=e.rgbToHsl=e.hslaToRgba=e.hslToRgb=void 0;var a=C,n=re,u=function(o){var s=o.red,i=o.green,l=o.blue;return{red:s*255,green:i*255,blue:l*255}},b=function(o){var s=o.red,i=o.green,l=o.blue;return{red:s/255,green:i/255,blue:l/255}},c=function(o){var s=o.hue,i=o.saturation,l=o.lightness,d=(1-Math.abs(2*l-1))*i,w=s/60,_=d*(1-Math.abs(w%2-1)),O=l-d/2,V=M(s,d,_),D=N(V,O);return u(D)};e.hslToRgb=c;var R=function(o){var s=o.alpha,i=r(o,["alpha"]),l=(0,e.hslToRgb)(i);return t(t({},l),{alpha:s})};e.hslaToRgba=R;var M=function(o,s,i){switch($(o)){case n.HueRegion.RedYellow:return{red:s,green:i,blue:0};case n.HueRegion.YellowGreen:return{red:i,green:s,blue:0};case n.HueRegion.GreenCyan:return{red:0,green:s,blue:i};case n.HueRegion.CyanBlue:return{red:0,green:i,blue:s};case n.HueRegion.BlueMagenta:return{red:i,green:0,blue:s};case n.HueRegion.MagentaRed:return{red:s,green:0,blue:i}}},$=function(o){var s=(0,a.modulo)(o,360);return s>=0&&s<60?n.HueRegion.RedYellow:s>=60&&s<120?n.HueRegion.YellowGreen:s>=120&&s<180?n.HueRegion.GreenCyan:s>=180&&s<240?n.HueRegion.CyanBlue:s>=240&&s<300?n.HueRegion.BlueMagenta:n.HueRegion.MagentaRed},N=function(o,s){var i=o.red,l=o.green,d=o.blue;return{red:i+s,green:l+s,blue:d+s}},G=function(o){var s=b(o),i=s.red,l=s.green,d=s.blue,w=Math.max(i,l,d),_=Math.min(i,l,d),O=w-_,V=(w+_)/2,D=O===0?0:O/(1-Math.abs(2*V-1)),ne=O===0?0:h(i,l,d,w,O),ae=(0,a.modulo)(ne*60,360);return{hue:ae,saturation:D,lightness:V}};e.rgbToHsl=G;var p=function(o){var s=o.alpha,i=r(o,["alpha"]),l=(0,e.rgbToHsl)(i);return t(t({},l),{alpha:s})};e.rgbaToHsla=p;var h=function(o,s,i,l,d){switch(l){case o:return(s-i)/d;case s:return(i-o)/d+2;case i:return(o-s)/d+4;default:return 0}},g=function(o){var s=o.hue,i=o.saturation,l=o.value,d=l*i,w=s/60,_=d*(1-Math.abs(w%2-1)),O=l-d,V=M(s,d,_),D=N(V,O);return u(D)};e.hsvToRgb=g;var f=function(o){var s=b(o),i=s.red,l=s.green,d=s.blue,w=Math.max(i,l,d),_=Math.min(i,l,d),O=w-_,V=w,D=V===0?0:O/V,ne=O===0?0:h(i,l,d,w,O),ae=(0,a.modulo)(ne*60,360);return{hue:ae,saturation:D,value:V}};e.rgbToHsv=f;var y=function(o){var s=o.hue,i=o.saturation,l=o.value,d=l*i,w=(2-i)*l/2,_=d===0?0:d/(1-Math.abs(2*w-1));return{hue:s,saturation:_,lightness:w}};e.hsvToHsl=y;var m=function(o){var s=o.alpha,i=r(o,["alpha"]),l=(0,e.hsvToHsl)(i);return t(t({},l),{alpha:s})};e.hsvaToHsla=m;var P=function(o){var s=o.hue,i=o.saturation,l=o.lightness,d=(1-Math.abs(2*l-1))*i,w=l+d/2,_=w===0?0:d/w;return{hue:s,saturation:_,value:w}};e.hslToHsv=P;var L=function(o){var s=o.alpha,i=r(o,["alpha"]),l=(0,e.hslToHsv)(i);return t(t({},l),{alpha:s})};e.hslaToHsva=L})(ee);var v={},le={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.numberFromPercentage=e.numberFromPercentageOrUnitInterval=e.shortHexToDecimal=e.hexPairToDecimal=void 0;var t=ie,r=function(c){return parseInt(c,16)};e.hexPairToDecimal=r;var a=function(c){return(0,e.hexPairToDecimal)(c+c)};e.shortHexToDecimal=a;var n=function(c){return(0,t.isValidUnitIntervalValue)(c)?parseFloat(c):(0,e.numberFromPercentage)(c)};e.numberFromPercentageOrUnitInterval=n;var u=function(c){var R=b.exec(c)[0];return parseFloat(R)/100};e.numberFromPercentage=u;var b=/\d*\.?\d*(?=%)/})(le);var ce={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shortHexWithoutHashToRgba=e.shortHexWithHashToRgba=e.shortHexWithoutHashToRgb=e.shortHexWithHashToRgb=e.hexWithoutHashToRgba=e.hexWithHashToRgba=e.hexWithoutHashToRgb=e.hexWithHashToRgb=e.rgba255StringToRgba=e.rgb255StringToRgb=void 0;var t=I,r=le,a=function(p){var h=t.colourFormatRegex.rgbDecimal,g=h.exec(p).groups,f=g.red,y=g.green,m=g.blue;return{red:parseFloat(f),green:parseFloat(y),blue:parseFloat(m)}};e.rgb255StringToRgb=a;var n=function(p){var h=t.colourFormatRegex.rgbaDecimal,g=h.exec(p).groups,f=g.red,y=g.green,m=g.blue,P=g.alpha;return{red:parseFloat(f),green:parseFloat(y),blue:parseFloat(m),alpha:(0,r.numberFromPercentageOrUnitInterval)(P)}};e.rgba255StringToRgba=n;var u=function(p){return(0,e.hexWithoutHashToRgb)(p.substring(1))};e.hexWithHashToRgb=u;var b=function(p){var h=(0,r.hexPairToDecimal)(p.substring(0,2)),g=(0,r.hexPairToDecimal)(p.substring(2,4)),f=(0,r.hexPairToDecimal)(p.substring(4,6));return{red:h,green:g,blue:f}};e.hexWithoutHashToRgb=b;var c=function(p){return(0,e.hexWithoutHashToRgba)(p.substring(1))};e.hexWithHashToRgba=c;var R=function(p){var h=(0,e.hexWithoutHashToRgb)(p),g=h.red,f=h.green,y=h.blue,m=(0,r.hexPairToDecimal)(p.substring(6,8))/255;return{red:g,green:f,blue:y,alpha:m}};e.hexWithoutHashToRgba=R;var M=function(p){return(0,e.shortHexWithoutHashToRgb)(p.substring(1))};e.shortHexWithHashToRgb=M;var $=function(p){var h=(0,r.shortHexToDecimal)(p.substring(0,1)),g=(0,r.shortHexToDecimal)(p.substring(1,2)),f=(0,r.shortHexToDecimal)(p.substring(2,3));return{red:h,green:g,blue:f}};e.shortHexWithoutHashToRgb=$;var N=function(p){return(0,e.shortHexWithoutHashToRgba)(p.substring(1))};e.shortHexWithHashToRgba=N;var G=function(p){var h=(0,e.shortHexWithoutHashToRgb)(p),g=h.red,f=h.green,y=h.blue,m=(0,r.shortHexToDecimal)(p.substring(3,4))/255;return{red:g,green:f,blue:y,alpha:m}};e.shortHexWithoutHashToRgba=G})(ce);var J=E&&E.__assign||function(){return J=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},J.apply(this,arguments)},ze=E&&E.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};Object.defineProperty(v,"__esModule",{value:!0});v.shortHexWithHashToHsla=v.shortHexWithoutHashToHsla=v.shortHexWithHashToHsl=v.shortHexWithoutHashToHsl=v.hexWithHashToHsla=v.hexWithoutHashToHsla=v.hexWithHashToHsl=v.hexWithoutHashToHsl=v.rgba255StringToHsla=v.rgb255StringToHsl=v.hslaStringToHsla=v.hslStringToHsl=void 0;var be=I,K=le,W=ee,k=ce,Ye=function(e){var t=be.colourFormatRegex.hsl,r=t.exec(e).groups,a=r.hue,n=r.saturation,u=r.lightness;return{hue:parseFloat(a),saturation:(0,K.numberFromPercentageOrUnitInterval)(n),lightness:(0,K.numberFromPercentageOrUnitInterval)(u)}};v.hslStringToHsl=Ye;var Ke=function(e){var t=be.colourFormatRegex.hsla,r=t.exec(e).groups,a=r.hue,n=r.saturation,u=r.lightness,b=r.alpha;return{hue:parseFloat(a),saturation:(0,K.numberFromPercentageOrUnitInterval)(n),lightness:(0,K.numberFromPercentageOrUnitInterval)(u),alpha:(0,K.numberFromPercentageOrUnitInterval)(b)}};v.hslaStringToHsla=Ke;var Xe=function(e){return(0,W.rgbToHsl)((0,k.rgb255StringToRgb)(e))};v.rgb255StringToHsl=Xe;var Je=function(e){var t=(0,k.rgba255StringToRgba)(e),r=t.alpha,a=ze(t,["alpha"]),n=(0,W.rgbToHsl)(a);return J(J({},n),{alpha:r})};v.rgba255StringToHsla=Je;var Qe=function(e){return(0,W.rgbToHsl)((0,k.hexWithoutHashToRgb)(e))};v.hexWithoutHashToHsl=Qe;var Ze=function(e){return(0,W.rgbToHsl)((0,k.hexWithHashToRgb)(e))};v.hexWithHashToHsl=Ze;var et=function(e){return(0,W.rgbaToHsla)((0,k.hexWithoutHashToRgba)(e))};v.hexWithoutHashToHsla=et;var tt=function(e){return(0,W.rgbaToHsla)((0,k.hexWithHashToRgba)(e))};v.hexWithHashToHsla=tt;var rt=function(e){return(0,W.rgbToHsl)((0,k.shortHexWithoutHashToRgb)(e))};v.shortHexWithoutHashToHsl=rt;var nt=function(e){return(0,W.rgbToHsl)((0,k.shortHexWithHashToRgb)(e))};v.shortHexWithHashToHsl=nt;var at=function(e){return(0,W.rgbaToHsla)((0,k.shortHexWithoutHashToRgba)(e))};v.shortHexWithoutHashToHsla=at;var ot=function(e){return(0,W.rgbaToHsla)((0,k.shortHexWithHashToRgba)(e))};v.shortHexWithHashToHsla=ot;var x={};Object.defineProperty(x,"__esModule",{value:!0});x.isHsva=x.isHsv=x.isHsla=x.isHsl=x.isRgba=x.isRgb=void 0;var st=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha===void 0};x.isRgb=st;var it=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha!==void 0};x.isRgba=it;var lt=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha===void 0};x.isHsl=lt;var ut=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha!==void 0};x.isHsla=ut;var ht=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha===void 0};x.isHsv=ht;var dt=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha!==void 0};x.isHsva=dt;var T=E&&E.__assign||function(){return T=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},T.apply(this,arguments)};Object.defineProperty(Z,"__esModule",{value:!0});Z.colourCodeToHsla=void 0;var Y=ee,gt=X,ct=C,S=v,B=x,bt=function(e){if(typeof e=="string")return pt(e);if((0,B.isHsla)(e))return e;if((0,B.isHsl)(e))return T(T({},e),{alpha:1});if((0,B.isRgb)(e))return T(T({},(0,Y.rgbToHsl)(e)),{alpha:1});if((0,B.isRgba)(e))return(0,Y.rgbaToHsla)(e);if((0,B.isHsv)(e))return T(T({},(0,Y.hsvToHsl)(e)),{alpha:1});if((0,B.isHsva)(e))return(0,Y.hsvaToHsla)(e);throw new Error("The passed object is not a valid colour code.")};Z.colourCodeToHsla=bt;var pt=function(e){var t=(0,ct.evaluateFormat)(e);switch(t){case"hsl":return T(T({},(0,S.hslStringToHsl)(e)),{alpha:1});case"hsla":return(0,S.hslaStringToHsla)(e);case"rgbDecimal":return T(T({},(0,S.rgb255StringToHsl)(e)),{alpha:1});case"rgbaDecimal":return(0,S.rgba255StringToHsla)(e);case"rgbHexLongWithHash":return T(T({},(0,S.hexWithHashToHsl)(e)),{alpha:1});case"rgbHexLongWithoutHash":return T(T({},(0,S.hexWithoutHashToHsl)(e)),{alpha:1});case"rgbHexShortWithHash":return T(T({},(0,S.shortHexWithHashToHsl)(e)),{alpha:1});case"rgbHexShortWithoutHash":return T(T({},(0,S.shortHexWithoutHashToHsl)(e)),{alpha:1});case"rgbaHexLongWithHash":return(0,S.hexWithHashToHsla)(e);case"rgbaHexLongWithoutHash":return(0,S.hexWithoutHashToHsla)(e);case"rgbaHexShortWithHash":return(0,S.shortHexWithHashToHsla)(e);case"rgbaHexShortWithoutHash":return(0,S.shortHexWithoutHashToHsla)(e);case"namedColour":return T(T({},(0,Y.rgbToHsl)(gt.namedColours[e])),{alpha:1});case"namedTransparent":return{hue:0,saturation:0,lightness:0,alpha:0};default:throw new Error("Invalid colour code: ".concat(e))}},j={},q={};Object.defineProperty(q,"__esModule",{value:!0});q.numberToPercentage=q.decimalToHexPair=void 0;var mt=C,vt=function(e){var t=(0,mt.round)(e).toString(16).toUpperCase();return t.length===1?"0".concat(t):t};q.decimalToHexPair=vt;var ft=function(e){return"".concat(e*100,"%")};q.numberToPercentage=ft;Object.defineProperty(j,"__esModule",{value:!0});j.rgbaObjectToRgbHexString=j.rgbaObjectToRgbDecimalString=j.hslaObjectToHslString=void 0;var A=q,F=C,Ht=function(e){var t=e.hue,r=e.saturation,a=e.lightness,n=e.alpha,u=(0,F.round)(t),b=(0,F.round)(r,2),c=(0,F.round)(a,2),R=(0,A.numberToPercentage)(b),M=(0,A.numberToPercentage)(c);if(n===1)return"hsl(".concat(u,", ").concat(R,", ").concat(M,")");var $=(0,F.round)(n,2);return"hsla(".concat(u,", ").concat(R,", ").concat(M,", ").concat($,")")};j.hslaObjectToHslString=Ht;var Tt=function(e){var t=e.red,r=e.green,a=e.blue,n=e.alpha,u=(0,F.round)(t),b=(0,F.round)(r),c=(0,F.round)(a);if(n===1)return"rgb(".concat(u,", ").concat(b,", ").concat(c,")");var R=(0,F.round)(n,2);return"rgba(".concat(u,", ").concat(b,", ").concat(c,", ").concat(R,")")};j.rgbaObjectToRgbDecimalString=Tt;var wt=function(e){var t=e.red,r=e.green,a=e.blue,n=e.alpha,u=(0,A.decimalToHexPair)(t),b=(0,A.decimalToHexPair)(r),c=(0,A.decimalToHexPair)(a),R=n===1?"":(0,A.decimalToHexPair)((0,F.round)(n*255));return"#".concat(u).concat(b).concat(c).concat(R)};j.rgbaObjectToRgbHexString=wt;var U=E&&E.__assign||function(){return U=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},U.apply(this,arguments)};Object.defineProperty(Q,"__esModule",{value:!0});Q.Chromator=void 0;var yt=Z,oe=ee,se=j,de=C,Rt=function(){function e(t){var r=(0,yt.colourCodeToHsla)(t),a=r.hue,n=r.saturation,u=r.lightness,b=r.alpha;this.hsl={hue:a,saturation:n,lightness:u},this.alpha=b}return e.prototype.copy=function(){return new e(this.getHsla())},e.prototype.getHsl=function(){return this.hsl},e.prototype.getAlpha=function(){return this.alpha},e.prototype.getHsla=function(){return U(U({},this.hsl),{alpha:this.alpha})},e.prototype.getRgb=function(){return(0,oe.hslToRgb)(this.hsl)},e.prototype.getRgba=function(){return U(U({},this.getRgb()),{alpha:this.alpha})},e.prototype.getHsv=function(){return(0,oe.hslToHsv)(this.hsl)},e.prototype.getHsva=function(){return(0,oe.hslaToHsva)(this.getHsla())},e.prototype.getRgbCode=function(){return(0,se.rgbaObjectToRgbDecimalString)(this.getRgba())},e.prototype.getHexCode=function(){return(0,se.rgbaObjectToRgbHexString)(this.getRgba())},e.prototype.getHslCode=function(){return(0,se.hslaObjectToHslString)(this.getHsla())},e.prototype.lighten=function(t){var r=this.hsl.lightness,a=1-r;return this.hsl.lightness=r+a*t,this},e.prototype.darken=function(t){var r=this.hsl.lightness;return this.hsl.lightness=r*(1-t),this},e.prototype.invertLightness=function(){return this.hsl.lightness=1-this.hsl.lightness,this},e.prototype.addHue=function(t){return this.hsl.hue=(0,de.modulo)(this.hsl.hue+t,360),this},e.prototype.subtractHue=function(t){return this.hsl.hue=(0,de.modulo)(this.hsl.hue-t,360),this},e.prototype.complementarise=function(){return this.addHue(180),this},e.prototype.invert=function(){return this.complementarise().invertLightness(),this},e}();Q.Chromator=Rt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Chromator=void 0;var t=Q;Object.defineProperty(e,"Chromator",{enumerable:!0,get:function(){return t.Chromator}})})(H);const pe=(e,t)=>{const r=360/e,a=[];for(let n=0;n<e;n++){const u=t.copy();u.addHue(n*r),a.push(u)}return a},xt=(e,t)=>{const r=1/e,a=t.getHsl(),n=a.lightness,u=[];for(let b=0;b<e;b++){const c=(n+b*r)%1,R=new H.Chromator({...a,lightness:c});u.push(R)}return u.sort((b,c)=>b.getHsl().lightness-c.getHsl().lightness)},me=document.createElement("template");me.innerHTML=`
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
      position: relative;
    }
  </style>
  <div class="circle">
    <colour-circle-point class="point" base></colour-circle-point>
  </div>
`;class Ct extends HTMLElement{constructor(){super(),this._colour=new H.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this.otherPoints=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(me.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t,this.pointElement.colour=t;const{hue:r,saturation:a,lightness:n}=t.getHsl();this.circle.style.setProperty("--lightness",`${n*100}%`),this.pointElement.colour=t,this.setOpposites()}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.setOpposites()}get lightness(){return this.colour.getHsl().lightness}set lightness(t){this.colour=new H.Chromator({...this.colour.getHsl(),lightness:t})}get point(){const{hue:t,saturation:r}=this.colour.getHsl();return{hue:t,saturation:r}}set point(t){const{lightness:r}=this.colour.getHsl();this.colour=new H.Chromator({...t,lightness:r})}get circle(){return this.shadowRoot.querySelector(".circle")}get pointElement(){return this.shadowRoot.querySelector(".point")}setOpposites(){const t=pe(this.numberOfOpposites,this.colour);t.splice(0,1),this.otherPoints.forEach(r=>r.remove()),this.otherPoints=t.map(r=>{const a=document.createElement("colour-circle-point");return a.colour=r,this.circle.appendChild(a),a})}connectedCallback(){const t=this.getAttribute("size");t&&(this.circle.style.width=t),this.setOpposites(),this.addEventListener("dragover",r=>{r.preventDefault()}),this.addEventListener("click",r=>{const a=this.getPositionWithinCircle({top:r.clientY,left:r.clientX}),n=ue(a);n.radius<=1&&(this.point={hue:n.angle,saturation:n.radius},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point})))}),this.pointElement.addEventListener("point-drag",r=>{const a=this.getPositionWithinCircle(r.detail),n=ue(a);this.point={hue:n.angle,saturation:Math.min(n.radius,1)},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point}))})}getPositionWithinCircle(t){const r=this.circle.getBoundingClientRect();return{top:(t.top-r.top)/r.height,left:(t.left-r.left)/r.width}}}window.customElements.define("colour-circle",Ct);const ve=document.createElement("template");ve.innerHTML=`
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
`;class _t extends HTMLElement{constructor(){super(),this._value=.5,this._max=1,this._min=0,this._step=.01,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ve.content.cloneNode(!0))}get slider(){return this.shadowRoot.getElementById("slider")}get label(){return this.shadowRoot.getElementById("label")}get valueElement(){return this.shadowRoot.getElementById("value")}get value(){return this._value}set value(t){this._value=t;const r=Math.round(t/this.step)*this.step,a=Intl.NumberFormat().format(r);this.slider.value=String(r),this.valueElement.textContent=a}get max(){return this._max}set max(t){this._max=t,this.slider.max=String(t)}get min(){return this._min}set min(t){this._min=t,this.slider.min=String(t)}get step(){return this._step}set step(t){this._step=t,this.slider.step=String(t)}connectedCallback(){const t=this.getAttribute("value");t&&(this.value=Number(t));const r=this.getAttribute("label");r&&(this.label.innerHTML=r);const a=this.getAttribute("max")||"1";this.max=Number(a);const n=this.getAttribute("min")||"0";this.min=Number(n);const u=this.getAttribute("step")||"0.01";this.step=Number(u);const b=this.getAttribute("background");b&&(this.slider.style.background=b),this.slider.addEventListener("input",()=>{const c=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:c})),this.value=c}),this.slider.addEventListener("change",()=>{const c=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:c})),this.value=c})}}window.customElements.define("slider-input",_t);const fe=document.createElement("template");fe.innerHTML=`
  <style>
    :host {
      display: block;
      padding: 1em;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  </style>
  <slot></slot>
`;class Ot extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(fe.content.cloneNode(!0))}}window.customElements.define("shadow-box",Ot);const He=document.createElement("template");He.innerHTML=`
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
`;class St extends HTMLElement{constructor(){super(),this._colour=new H.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(He.content.cloneNode(!0))}get hueRange(){return this.shadowRoot.getElementById("hue")}get saturationRange(){return this.shadowRoot.getElementById("saturation")}get lightnessRange(){return this.shadowRoot.getElementById("lightness")}get colour(){return this._colour}set colour(t){this._colour=t,this.hueRange.value=t.getHsl().hue,this.saturationRange.value=t.getHsl().saturation,this.lightnessRange.value=t.getHsl().lightness,this.style.setProperty("--hue",t.getHsl().hue.toString()),this.style.setProperty("--saturation",(t.getHsl().saturation*100).toString()+"%"),this.style.setProperty("--lightness",(t.getHsl().lightness*100).toString()+"%")}connectedCallback(){const t=this.getAttribute("value");t&&(this.colour=new H.Chromator(t)),this.hueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new H.Chromator({...this.colour.getHsl(),hue:this.hueRange.value})}))}),this.saturationRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new H.Chromator({...this.colour.getHsl(),saturation:this.saturationRange.value})}))}),this.lightnessRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new H.Chromator({...this.colour.getHsl(),lightness:this.lightnessRange.value})}))}),this.addEventListener("hsl-change",r=>{this.colour=r.detail})}}window.customElements.define("colour-picker-hsl",St);const Te=document.createElement("template");Te.innerHTML=`
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
`;class Et extends HTMLElement{constructor(){super(),this._colour=new H.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Te.content.cloneNode(!0))}get redRange(){return this.shadowRoot.getElementById("red")}get greenRange(){return this.shadowRoot.getElementById("green")}get blueRange(){return this.shadowRoot.getElementById("blue")}get colour(){return this._colour}set colour(t){this._colour=t;const r=t.getRgb();this.redRange.value=r.red,this.greenRange.value=r.green,this.blueRange.value=r.blue,this.style.setProperty("--red",r.red.toString()),this.style.setProperty("--green",r.green.toString()),this.style.setProperty("--blue",r.blue.toString())}connectedCallback(){const t=this.getAttribute("value");t&&(this.colour=new H.Chromator(t)),this.redRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new H.Chromator({...this.colour.getRgb(),red:this.redRange.value})}))}),this.greenRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new H.Chromator({...this.colour.getRgb(),green:this.greenRange.value})}))}),this.blueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new H.Chromator({...this.colour.getRgb(),blue:this.blueRange.value})}))}),this.addEventListener("rgb-change",r=>{this.colour=r.detail})}}window.customElements.define("colour-picker-rgb",Et);const we=document.createElement("template");we.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(we.content.cloneNode(!0))}}window.customElements.define("layout-row",Pt);const ye=document.createElement("template");ye.innerHTML=`
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
`;class Vt extends HTMLElement{constructor(){super(),this._colour=new H.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ye.content.cloneNode(!0))}get input(){return this.shadowRoot.getElementById("input")}get hexcode(){return this.shadowRoot.getElementById("hexcode")}get hsl(){return this.shadowRoot.getElementById("hsl")}get rgb(){return this.shadowRoot.getElementById("rgb")}get colour(){return this._colour}set colour(t){this._colour=t,this.input.value=t.getHexCode(),this.hsl.colour=t,this.rgb.colour=t,this.hexcode.textContent=t.getHexCode()}connectedCallback(){this.input.addEventListener("input",()=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:new H.Chromator(this.input.value)}))}),this.hsl.addEventListener("hsl-change",t=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:t.detail}))}),this.rgb.addEventListener("rgb-change",t=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:t.detail}))}),this.addEventListener("colour-change",t=>{this.colour=t.detail})}}window.customElements.define("colour-picker",Vt);const Re=document.createElement("template");Re.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Re.content.cloneNode(!0))}}window.customElements.define("layout-column",Wt);const xe=document.createElement("template");xe.innerHTML=`
  <style>
    :host {
      display: block;
      width: 4rem;
      aspect-ratio: 1;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  </style>
  <slot></slot>
`;class kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(xe.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t,this.style.backgroundColor=t.getHexCode()}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new H.Chromator(t))}}window.customElements.define("colour-box",kt);const Ce=document.createElement("template");Ce.innerHTML=`
  <layout-column id="wrapper"></layout-column>
`;class Mt extends HTMLElement{constructor(){super(),this._colour=new H.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfShades=8,this.boxes=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ce.content.cloneNode(!0))}get wrapper(){return this.shadowRoot.querySelector("#wrapper")}get colour(){return this._colour}set colour(t){this._colour=t,this.setBoxes()}get numberOfShades(){return this._numberOfShades}set numberOfShades(t){this._numberOfShades=t,this.setBoxes()}setBoxes(){const t=xt(this.numberOfShades,this.colour);this.boxes.forEach(r=>{r.remove()}),t.forEach(r=>{const a=document.createElement("colour-box");a.colour=r,this.wrapper.appendChild(a),this.boxes.push(a)})}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new H.Chromator(t)),this.setBoxes()}}window.customElements.define("colour-row",Mt);const _e=document.createElement("template");_e.innerHTML=`
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
`;class Lt extends HTMLElement{constructor(){super(),this._colour=new H.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this._numberOfShades=8,this.otherColourRows=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(_e.content.cloneNode(!0))}get mainColourRow(){return this.shadowRoot.querySelector("#maincolour")}get oppositesInput(){return this.shadowRoot.querySelector("#opposites")}get shadesInput(){return this.shadowRoot.querySelector("#shades")}get boxes(){return this.shadowRoot.querySelector("#boxes")}get colour(){return this._colour}set colour(t){this._colour=t,this.mainColourRow.colour=t,this.setOpposites()}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.setOpposites()}get numberOfShades(){return this._numberOfShades}set numberOfShades(t){this._numberOfShades=t,this.mainColourRow.numberOfShades=t,this.otherColourRows.forEach(r=>r.numberOfShades=t)}setOpposites(){const t=pe(this.numberOfOpposites,this.colour);t.splice(0,1),this.otherColourRows.forEach(r=>r.remove()),t.forEach(r=>{const a=document.createElement("colour-row");a.colour=r,a.numberOfShades=this.numberOfShades,this.boxes.appendChild(a),this.otherColourRows.push(a)})}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new H.Chromator(t)),this.setOpposites(),this.oppositesInput.addEventListener("input",()=>{this.numberOfOpposites=parseInt(this.oppositesInput.value),this.dispatchEvent(new CustomEvent("oppositeschange",{detail:this.numberOfOpposites}))}),this.shadesInput.addEventListener("input",()=>{this.numberOfShades=parseInt(this.shadesInput.value)})}}window.customElements.define("colour-properties",Lt);const Oe=document.createElement("template");Oe.innerHTML=`
  <style>
    h1 {
      margin: 0;
    }
  
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
`;class Ft extends HTMLElement{constructor(){super(),this._colour=new H.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Oe.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t,this.colourPicker.colour=t,this.colourCircle.colour=t,this.colourProperties.colour=t}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.colourCircle.numberOfOpposites=t}get colourPicker(){return this.shadowRoot.querySelector("#colour-picker")}get colourCircle(){return this.shadowRoot.querySelector("#colour-circle")}get colourProperties(){return this.shadowRoot.querySelector("#properties")}getHsl(){return this.colour.getHsl()}connectedCallback(){this.colour=new H.Chromator("#39C6BC"),this.colourPicker.addEventListener("colour-change",t=>{this.colour=t.detail}),this.colourCircle.addEventListener("point-change",t=>{this.colour=new H.Chromator({...t.detail,lightness:this.colour.getHsl().lightness})}),this.colourProperties.addEventListener("oppositeschange",t=>{this.numberOfOpposites=t.detail})}}window.customElements.define("main-component",Ft);document.querySelector("#app").innerHTML=`
  <main-component></main-component>
`;
