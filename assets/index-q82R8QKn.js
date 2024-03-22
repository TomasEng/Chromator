(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const b of u.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&o(b)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();const $e=e=>{const t=De(e);return Ue(t)},De=e=>{const t=Xe(e.angle);return Ne({...e,angle:t})},Xe=e=>e*Math.PI/180,Ne=e=>({x:e.radius*Math.cos(e.angle),y:e.radius*Math.sin(e.angle)}),Ue=e=>({left:(e.x+1)/2,top:1-(e.y+1)/2}),be=e=>{const t=Be(e);return qe(t)},Be=e=>({x:e.left*2-1,y:1-e.top*2}),qe=e=>{const t=Ge(e);return{angle:Ae(t.angle),radius:t.radius}},Ae=e=>e*180/Math.PI,Ge=e=>({angle:Ye(Math.atan2(e.y,e.x),2*Math.PI),radius:Math.sqrt(e.x**2+e.y**2)}),Ye=(e,t)=>(e%t+t)%t,ve=document.createElement("template");ve.innerHTML=`
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
`;class Ke extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ve.content.cloneNode(!0))}get point(){return this.shadowRoot.querySelector(".point")}get colour(){return this._colour}set colour(t){this.point.style.background=t.getHexCode();const{hue:r,saturation:o}=t.getHsl(),u=$e({angle:r,radius:o});this.point.style.setProperty("--left",`${u.left}`),this.point.style.setProperty("--top",`${u.top}`)}connectedCallback(){this.point.addEventListener("drag",t=>{this.dispatchEvent(new CustomEvent("point-drag",{detail:{left:t.x,top:t.y}}))}),this.point.addEventListener("dragstart",t=>{t.dataTransfer.setDragImage(new Image,0,0)}),this.getAttribute("base")===""&&(this.point.setAttribute("draggable","true"),this.point.setAttribute("class","point base"))}}window.customElements.define("colour-circle-point",Ke);var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y={},re={},ne={},ae={},O={},oe={},N={};Object.defineProperty(N,"__esModule",{value:!0});N.colourFormatRegex=void 0;N.colourFormatRegex={hsl:/^hsl\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*\)$/i,hsla:/^hsla\s*\(\s*(?<hue>\d*\.?\d*)\s*,\s*(?<saturation>\d*\.?\d*%?)\s*,\s*(?<lightness>\d*\.?\d*%?)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,namedColour:/[\w-]+/i,namedTransparent:/transparent/i,rgbDecimal:/^rgb\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*\)$/i,rgbHexLongWithHash:/^#[0-9a-fA-F]{6}$/i,rgbHexLongWithoutHash:/^[0-9a-fA-F]{6}$/i,rgbHexShortWithHash:/^#[0-9a-f]{3}$/i,rgbHexShortWithoutHash:/^[0-9a-f]{3}$/i,rgbaDecimal:/^rgba\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,rgbaHexLongWithHash:/^#[0-9a-f]{8}$/i,rgbaHexLongWithoutHash:/^[0-9a-f]{8}$/i,rgbaHexShortWithHash:/^#[0-9a-fA-F]{4}$/i,rgbaHexShortWithoutHash:/^[0-9a-fA-F]{4}$/i};var ge={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.namedColours=void 0;Z.namedColours={aliceblue:{red:240,green:248,blue:255},antiquewhite:{red:250,green:235,blue:215},aqua:{red:0,green:255,blue:255},aquamarine:{red:127,green:255,blue:212},azure:{red:240,green:255,blue:255},beige:{red:245,green:245,blue:220},bisque:{red:255,green:228,blue:196},black:{red:0,green:0,blue:0},blanchedalmond:{red:255,green:235,blue:205},blue:{red:0,green:0,blue:255},blueviolet:{red:138,green:43,blue:226},brown:{red:165,green:42,blue:42},burlywood:{red:222,green:184,blue:135},cadetblue:{red:95,green:158,blue:160},chartreuse:{red:127,green:255,blue:0},chocolate:{red:210,green:105,blue:30},coral:{red:255,green:127,blue:80},cornflowerblue:{red:100,green:149,blue:237},cornsilk:{red:255,green:248,blue:220},crimson:{red:220,green:20,blue:60},cyan:{red:0,green:255,blue:255},darkblue:{red:0,green:0,blue:139},darkcyan:{red:0,green:139,blue:139},darkgoldenrod:{red:184,green:134,blue:11},darkgray:{red:169,green:169,blue:169},darkgreen:{red:0,green:100,blue:0},darkgrey:{red:169,green:169,blue:169},darkkhaki:{red:189,green:183,blue:107},darkmagenta:{red:139,green:0,blue:139},darkolivegreen:{red:85,green:107,blue:47},darkorange:{red:255,green:140,blue:0},darkorchid:{red:153,green:50,blue:204},darkred:{red:139,green:0,blue:0},darksalmon:{red:233,green:150,blue:122},darkseagreen:{red:143,green:188,blue:143},darkslateblue:{red:72,green:61,blue:139},darkslategray:{red:47,green:79,blue:79},darkslategrey:{red:47,green:79,blue:79},darkturquoise:{red:0,green:206,blue:209},darkviolet:{red:148,green:0,blue:211},deeppink:{red:255,green:20,blue:147},deepskyblue:{red:0,green:191,blue:255},dimgray:{red:105,green:105,blue:105},dimgrey:{red:105,green:105,blue:105},dodgerblue:{red:30,green:144,blue:255},firebrick:{red:178,green:34,blue:34},floralwhite:{red:255,green:250,blue:240},forestgreen:{red:34,green:139,blue:34},fuchsia:{red:255,green:0,blue:255},gainsboro:{red:220,green:220,blue:220},ghostwhite:{red:248,green:248,blue:255},gold:{red:255,green:215,blue:0},goldenrod:{red:218,green:165,blue:32},gray:{red:128,green:128,blue:128},green:{red:0,green:128,blue:0},greenyellow:{red:173,green:255,blue:47},grey:{red:128,green:128,blue:128},honeydew:{red:240,green:255,blue:240},hotpink:{red:255,green:105,blue:180},indianred:{red:205,green:92,blue:92},indigo:{red:75,green:0,blue:130},ivory:{red:255,green:255,blue:240},khaki:{red:240,green:230,blue:140},lavender:{red:230,green:230,blue:250},lavenderblush:{red:255,green:240,blue:245},lawngreen:{red:124,green:252,blue:0},lemonchiffon:{red:255,green:250,blue:205},lightblue:{red:173,green:216,blue:230},lightcoral:{red:240,green:128,blue:128},lightcyan:{red:224,green:255,blue:255},lightgoldenrodyellow:{red:250,green:250,blue:210},lightgray:{red:211,green:211,blue:211},lightgreen:{red:144,green:238,blue:144},lightgrey:{red:211,green:211,blue:211},lightpink:{red:255,green:182,blue:193},lightsalmon:{red:255,green:160,blue:122},lightseagreen:{red:32,green:178,blue:170},lightskyblue:{red:135,green:206,blue:250},lightslategray:{red:119,green:136,blue:153},lightslategrey:{red:119,green:136,blue:153},lightsteelblue:{red:176,green:196,blue:222},lightyellow:{red:255,green:255,blue:224},lime:{red:0,green:255,blue:0},limegreen:{red:50,green:205,blue:50},linen:{red:250,green:240,blue:230},magenta:{red:255,green:0,blue:255},maroon:{red:128,green:0,blue:0},mediumaquamarine:{red:102,green:205,blue:170},mediumblue:{red:0,green:0,blue:205},mediumorchid:{red:186,green:85,blue:211},mediumpurple:{red:147,green:112,blue:219},mediumseagreen:{red:60,green:179,blue:113},mediumslateblue:{red:123,green:104,blue:238},mediumspringgreen:{red:0,green:250,blue:154},mediumturquoise:{red:72,green:209,blue:204},mediumvioletred:{red:199,green:21,blue:133},midnightblue:{red:25,green:25,blue:112},mintcream:{red:245,green:255,blue:250},mistyrose:{red:255,green:228,blue:225},moccasin:{red:255,green:228,blue:181},navajowhite:{red:255,green:222,blue:173},navy:{red:0,green:0,blue:128},oldlace:{red:253,green:245,blue:230},olive:{red:128,green:128,blue:0},olivedrab:{red:107,green:142,blue:35},orange:{red:255,green:165,blue:0},orangered:{red:255,green:69,blue:0},orchid:{red:218,green:112,blue:214},palegoldenrod:{red:238,green:232,blue:170},palegreen:{red:152,green:251,blue:152},paleturquoise:{red:175,green:238,blue:238},palevioletred:{red:219,green:112,blue:147},papayawhip:{red:255,green:239,blue:213},peachpuff:{red:255,green:218,blue:185},peru:{red:205,green:133,blue:63},pink:{red:255,green:192,blue:203},plum:{red:221,green:160,blue:221},powderblue:{red:176,green:224,blue:230},purple:{red:128,green:0,blue:128},rebeccapurple:{red:102,green:51,blue:153},red:{red:255,green:0,blue:0},rosybrown:{red:188,green:143,blue:143},royalblue:{red:65,green:105,blue:225},saddlebrown:{red:139,green:69,blue:19},salmon:{red:250,green:128,blue:114},sandybrown:{red:244,green:164,blue:96},seagreen:{red:46,green:139,blue:87},seashell:{red:255,green:245,blue:238},sienna:{red:160,green:82,blue:45},silver:{red:192,green:192,blue:192},skyblue:{red:135,green:206,blue:235},slateblue:{red:106,green:90,blue:205},slategray:{red:112,green:128,blue:144},slategrey:{red:112,green:128,blue:144},snow:{red:255,green:250,blue:250},springgreen:{red:0,green:255,blue:127},steelblue:{red:70,green:130,blue:180},tan:{red:210,green:180,blue:140},teal:{red:0,green:128,blue:128},thistle:{red:216,green:191,blue:216},tomato:{red:255,green:99,blue:71},turquoise:{red:64,green:224,blue:208},violet:{red:238,green:130,blue:238},wheat:{red:245,green:222,blue:179},white:{red:255,green:255,blue:255},whitesmoke:{red:245,green:245,blue:245},yellow:{red:255,green:255,blue:0},yellowgreen:{red:154,green:205,blue:50}};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isValidUnitIntervalOrPercentageValue=e.isValidUnitIntervalValue=e.isValid255ScaleValue=e.isValidPercentageValue=e.isValidDegreeValue=e.isValidTransparentName=e.isValidColourName=e.isValidRgba255String=e.isValidRgb255String=e.isValidHslaString=e.isValidHslString=void 0;var t=N,r=Z,o=function(d){var g=t.colourFormatRegex.hsl,H=d.trim().toLowerCase(),C=g.test(H);if(!C)return!1;var v=g.exec(H).groups,W=v.hue,F=v.saturation,I=v.lightness;return(0,e.isValidDegreeValue)(W)&&(0,e.isValidUnitIntervalOrPercentageValue)(F)&&(0,e.isValidUnitIntervalOrPercentageValue)(I)};e.isValidHslString=o;var a=function(d){var g=t.colourFormatRegex.hsla,H=d.trim().toLowerCase(),C=g.test(H);if(!C)return!1;var v=g.exec(H).groups,W=v.hue,F=v.saturation,I=v.lightness,Y=v.alpha;return(0,e.isValidDegreeValue)(W)&&(0,e.isValidUnitIntervalOrPercentageValue)(F)&&(0,e.isValidUnitIntervalOrPercentageValue)(I)&&(0,e.isValidUnitIntervalOrPercentageValue)(Y)};e.isValidHslaString=a;var u=function(d){var g=t.colourFormatRegex.rgbDecimal,H=d.trim().toLowerCase(),C=g.test(H);if(!C)return!1;var v=g.exec(H).groups,W=v.red,F=v.green,I=v.blue;return(0,e.isValid255ScaleValue)(W)&&(0,e.isValid255ScaleValue)(F)&&(0,e.isValid255ScaleValue)(I)};e.isValidRgb255String=u;var b=function(d){var g=t.colourFormatRegex.rgbaDecimal,H=d.trim().toLowerCase(),C=g.test(H);if(!C)return!1;var v=g.exec(H).groups,W=v.red,F=v.green,I=v.blue,Y=v.alpha;return(0,e.isValid255ScaleValue)(W)&&(0,e.isValid255ScaleValue)(F)&&(0,e.isValid255ScaleValue)(I)&&(0,e.isValidUnitIntervalOrPercentageValue)(Y)};e.isValidRgba255String=b;var c=function(d){var g=d.trim().toLowerCase();return Object.keys(r.namedColours).includes(g)};e.isValidColourName=c;var x=function(d){var g=d.trim().toLowerCase();return g==="transparent"};e.isValidTransparentName=x;var V=function(d){return/^(((([12]?\d{1,2})|(3[012345]\d))(\.\d+)?)|360(\.0+)?|\.\d+)$/.test(d)};e.isValidDegreeValue=V;var k=function(d){return/^((((\d{1,2}(\.\d+)?)|(100(\.0+)?)|(\.\d+))%)|0)$/.test(d)};e.isValidPercentageValue=k;var z=function(d){return/^((((1?\d{1,2})|(2([01234]\d|5[01234])))(\.\d+)?)|255(\.0+)?|\.\d+)$/.test(d)};e.isValid255ScaleValue=z;var U=function(d){return/^(0|0\.\d+|\.\d+|1(\.0+)?)$/.test(d)};e.isValidUnitIntervalValue=U;var m=function(d){return(0,e.isValidUnitIntervalValue)(d)||(0,e.isValidPercentageValue)(d)};e.isValidUnitIntervalOrPercentageValue=m})(ge);Object.defineProperty(oe,"__esModule",{value:!0});oe.isOnFormat=void 0;var Je=N,K=ge,Qe=function(e,t){switch(t){case"hsl":return(0,K.isValidHslString)(e);case"hsla":return(0,K.isValidHslaString)(e);case"namedColour":return(0,K.isValidColourName)(e);case"rgbDecimal":return(0,K.isValidRgb255String)(e);case"rgbaDecimal":return(0,K.isValidRgba255String)(e);default:return Je.colourFormatRegex[t].test(e)}};oe.isOnFormat=Qe;Object.defineProperty(O,"__esModule",{value:!0});O.ensureWithinUnitInterval=O.evaluateFormat=O.floor=J=O.round=O.modulo=void 0;var Ze=oe,et=N,tt=function(e,t){return(e%t+t)%t};O.modulo=tt;var rt=function(e,t){return t===void 0&&(t=0),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},J=O.round=rt,nt=function(e,t){return t===void 0&&(t=0),Math.floor(e*Math.pow(10,t))/Math.pow(10,t)};O.floor=nt;var at=function(e){for(var t=Object.keys(et.colourFormatRegex),r=0,o=t;r<o.length;r++){var a=o[r];if((0,Ze.isOnFormat)(e,a))return a}};O.evaluateFormat=at;var ot=function(e){return e<0?0:e>1?1:e};O.ensureWithinUnitInterval=ot;var se={};Object.defineProperty(se,"__esModule",{value:!0});se.HueRegion=void 0;var me;(function(e){e.RedYellow="RedYellow",e.YellowGreen="YellowGreen",e.GreenCyan="GreenCyan",e.CyanBlue="CyanBlue",e.BlueMagenta="BlueMagenta",e.MagentaRed="MagentaRed"})(me||(se.HueRegion=me={}));(function(e){var t=P&&P.__assign||function(){return t=Object.assign||function(n){for(var s,i=1,l=arguments.length;i<l;i++){s=arguments[i];for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&(n[h]=s[h])}return n},t.apply(this,arguments)},r=P&&P.__rest||function(n,s){var i={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&s.indexOf(l)<0&&(i[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,l=Object.getOwnPropertySymbols(n);h<l.length;h++)s.indexOf(l[h])<0&&Object.prototype.propertyIsEnumerable.call(n,l[h])&&(i[l[h]]=n[l[h]]);return i};Object.defineProperty(e,"__esModule",{value:!0}),e.cieXyzToRgb=e.cieXyzToHsl=e.cieXyzaToHsla=e.rgbToCieXyz=e.hslToCieXyz=e.cieHslaToXyza=e.hslaToHsva=e.hslToHsv=e.hsvaToHsla=e.hsvToHsl=e.rgbToHsv=e.hsvToRgb=e.rgbaToHsla=e.rgbToHsl=e.hslaToRgba=e.hslToRgb=void 0;var o=O,a=se,u=function(n){var s=n.red,i=n.green,l=n.blue;return{red:s*255,green:i*255,blue:l*255}},b=function(n){var s=n.red,i=n.green,l=n.blue;return{red:s/255,green:i/255,blue:l/255}},c=function(n){var s=n.hue,i=n.saturation,l=n.lightness,h=(1-Math.abs(2*l-1))*i,p=s/60,w=h*(1-Math.abs(p%2-1)),_=l-h/2,S=V(s,h,w),B=z(S,_);return u(B)};e.hslToRgb=c;var x=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.hslToRgb)(i);return t(t({},l),{alpha:s})};e.hslaToRgba=x;var V=function(n,s,i){switch(k(n)){case a.HueRegion.RedYellow:return{red:s,green:i,blue:0};case a.HueRegion.YellowGreen:return{red:i,green:s,blue:0};case a.HueRegion.GreenCyan:return{red:0,green:s,blue:i};case a.HueRegion.CyanBlue:return{red:0,green:i,blue:s};case a.HueRegion.BlueMagenta:return{red:i,green:0,blue:s};case a.HueRegion.MagentaRed:return{red:s,green:0,blue:i}}},k=function(n){var s=(0,o.modulo)(n,360);return s>=0&&s<60?a.HueRegion.RedYellow:s>=60&&s<120?a.HueRegion.YellowGreen:s>=120&&s<180?a.HueRegion.GreenCyan:s>=180&&s<240?a.HueRegion.CyanBlue:s>=240&&s<300?a.HueRegion.BlueMagenta:a.HueRegion.MagentaRed},z=function(n,s){var i=n.red,l=n.green,h=n.blue;return{red:i+s,green:l+s,blue:h+s}},U=function(n){var s=b(n),i=s.red,l=s.green,h=s.blue,p=Math.max(i,l,h),w=Math.min(i,l,h),_=p-w,S=(p+w)/2,B=_===0?0:_/(1-Math.abs(2*S-1)),ue=_===0?0:d(i,l,h,p,_),he=(0,o.modulo)(ue*60,360);return{hue:he,saturation:B,lightness:S}};e.rgbToHsl=U;var m=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.rgbToHsl)(i);return t(t({},l),{alpha:s})};e.rgbaToHsla=m;var d=function(n,s,i,l,h){switch(l){case n:return(s-i)/h;case s:return(i-n)/h+2;case i:return(n-s)/h+4;default:return 0}},g=function(n){var s=n.hue,i=n.saturation,l=n.value,h=l*i,p=s/60,w=h*(1-Math.abs(p%2-1)),_=l-h,S=V(s,h,w),B=z(S,_);return u(B)};e.hsvToRgb=g;var H=function(n){var s=b(n),i=s.red,l=s.green,h=s.blue,p=Math.max(i,l,h),w=Math.min(i,l,h),_=p-w,S=p,B=S===0?0:_/S,ue=_===0?0:d(i,l,h,p,_),he=(0,o.modulo)(ue*60,360);return{hue:he,saturation:B,value:S}};e.rgbToHsv=H;var C=function(n){var s=n.hue,i=n.saturation,l=n.value,h=l*i,p=(2-i)*l/2,w=h===0?0:h/(1-Math.abs(2*p-1));return{hue:s,saturation:w,lightness:p}};e.hsvToHsl=C;var v=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.hsvToHsl)(i);return t(t({},l),{alpha:s})};e.hsvaToHsla=v;var W=function(n){var s=n.hue,i=n.saturation,l=n.lightness,h=(1-Math.abs(2*l-1))*i,p=l+h/2,w=p===0?0:h/p;return{hue:s,saturation:w,value:p}};e.hslToHsv=W;var F=function(n){var s=n.alpha,i=r(n,["alpha"]),l=(0,e.hslToHsv)(i);return t(t({},l),{alpha:s})};e.hslaToHsva=F;var I=function(n){var s=n.hue,i=n.saturation,l=n.lightness,h=n.alpha,p={hue:s,saturation:i,lightness:l},w=(0,e.hslToCieXyz)(p);return t(t({},w),{alpha:h})};e.cieHslaToXyza=I;var Y=function(n){var s=(0,e.hslToRgb)(n);return(0,e.rgbToCieXyz)(s)};e.hslToCieXyz=Y;var Le=function(n){var s=b(n),i=Me(s),l=i.red,h=i.green,p=i.blue,w=l*.4124564+h*.3575761+p*.1804375,_=l*.2126729+h*.7151522+p*.072175,S=l*.0193339+h*.119192+p*.9503041;return{x:w,y:_,z:S}};e.rgbToCieXyz=Le;var Me=function(n){var s=n.red,i=n.green,l=n.blue;return{red:ie(s),green:ie(i),blue:ie(l)}},ie=function(n){return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)},ke=function(n){var s=n.x,i=n.y,l=n.z,h=n.alpha,p=(0,e.cieXyzToHsl)({x:s,y:i,z:l});return t(t({},p),{alpha:h})};e.cieXyzaToHsla=ke;var Fe=function(n){var s=(0,e.cieXyzToRgb)(n);return(0,e.rgbToHsl)(s)};e.cieXyzToHsl=Fe;var Ie=function(n){var s=n.x,i=n.y,l=n.z,h=s*3.2404542+i*-1.5371385+l*-.4985314,p=s*-.969266+i*1.8760108+l*.041556,w=s*.0556434+i*-.2040259+l*1.0572252,_=ze({red:h,green:p,blue:w}),S=je(_);return u(S)};e.cieXyzToRgb=Ie;var je=function(n){var s=n.red,i=n.green,l=n.blue;return{red:(0,o.ensureWithinUnitInterval)(s),green:(0,o.ensureWithinUnitInterval)(i),blue:(0,o.ensureWithinUnitInterval)(l)}},ze=function(n){var s=n.red,i=n.green,l=n.blue;return{red:le(s),green:le(i),blue:le(l)}},le=function(n){return n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055}})(ae);var f={},ce={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.numberFromPercentage=e.numberFromPercentageOrUnitInterval=e.shortHexToDecimal=e.hexPairToDecimal=void 0;var t=ge,r=function(c){return parseInt(c,16)};e.hexPairToDecimal=r;var o=function(c){return(0,e.hexPairToDecimal)(c+c)};e.shortHexToDecimal=o;var a=function(c){return(0,t.isValidUnitIntervalValue)(c)?parseFloat(c):(0,e.numberFromPercentage)(c)};e.numberFromPercentageOrUnitInterval=a;var u=function(c){var x=b.exec(c)[0];return parseFloat(x)/100};e.numberFromPercentage=u;var b=/\d*\.?\d*(?=%)/})(ce);var fe={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shortHexWithoutHashToRgba=e.shortHexWithHashToRgba=e.shortHexWithoutHashToRgb=e.shortHexWithHashToRgb=e.hexWithoutHashToRgba=e.hexWithHashToRgba=e.hexWithoutHashToRgb=e.hexWithHashToRgb=e.rgba255StringToRgba=e.rgb255StringToRgb=void 0;var t=N,r=ce,o=function(m){var d=t.colourFormatRegex.rgbDecimal,g=d.exec(m).groups,H=g.red,C=g.green,v=g.blue;return{red:parseFloat(H),green:parseFloat(C),blue:parseFloat(v)}};e.rgb255StringToRgb=o;var a=function(m){var d=t.colourFormatRegex.rgbaDecimal,g=d.exec(m).groups,H=g.red,C=g.green,v=g.blue,W=g.alpha;return{red:parseFloat(H),green:parseFloat(C),blue:parseFloat(v),alpha:(0,r.numberFromPercentageOrUnitInterval)(W)}};e.rgba255StringToRgba=a;var u=function(m){return(0,e.hexWithoutHashToRgb)(m.substring(1))};e.hexWithHashToRgb=u;var b=function(m){var d=(0,r.hexPairToDecimal)(m.substring(0,2)),g=(0,r.hexPairToDecimal)(m.substring(2,4)),H=(0,r.hexPairToDecimal)(m.substring(4,6));return{red:d,green:g,blue:H}};e.hexWithoutHashToRgb=b;var c=function(m){return(0,e.hexWithoutHashToRgba)(m.substring(1))};e.hexWithHashToRgba=c;var x=function(m){var d=(0,e.hexWithoutHashToRgb)(m),g=d.red,H=d.green,C=d.blue,v=(0,r.hexPairToDecimal)(m.substring(6,8))/255;return{red:g,green:H,blue:C,alpha:v}};e.hexWithoutHashToRgba=x;var V=function(m){return(0,e.shortHexWithoutHashToRgb)(m.substring(1))};e.shortHexWithHashToRgb=V;var k=function(m){var d=(0,r.shortHexToDecimal)(m.substring(0,1)),g=(0,r.shortHexToDecimal)(m.substring(1,2)),H=(0,r.shortHexToDecimal)(m.substring(2,3));return{red:d,green:g,blue:H}};e.shortHexWithoutHashToRgb=k;var z=function(m){return(0,e.shortHexWithoutHashToRgba)(m.substring(1))};e.shortHexWithHashToRgba=z;var U=function(m){var d=(0,e.shortHexWithoutHashToRgb)(m),g=d.red,H=d.green,C=d.blue,v=(0,r.shortHexToDecimal)(m.substring(3,4))/255;return{red:g,green:H,blue:C,alpha:v}};e.shortHexWithoutHashToRgba=U})(fe);var te=P&&P.__assign||function(){return te=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},te.apply(this,arguments)},st=P&&P.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};Object.defineProperty(f,"__esModule",{value:!0});f.shortHexWithHashToHsla=f.shortHexWithoutHashToHsla=f.shortHexWithHashToHsl=f.shortHexWithoutHashToHsl=f.hexWithHashToHsla=f.hexWithoutHashToHsla=f.hexWithHashToHsl=f.hexWithoutHashToHsl=f.rgba255StringToHsla=f.rgb255StringToHsl=f.hslaStringToHsla=f.hslStringToHsl=void 0;var He=N,Q=ce,L=ae,M=fe,it=function(e){var t=He.colourFormatRegex.hsl,r=t.exec(e).groups,o=r.hue,a=r.saturation,u=r.lightness;return{hue:parseFloat(o),saturation:(0,Q.numberFromPercentageOrUnitInterval)(a),lightness:(0,Q.numberFromPercentageOrUnitInterval)(u)}};f.hslStringToHsl=it;var lt=function(e){var t=He.colourFormatRegex.hsla,r=t.exec(e).groups,o=r.hue,a=r.saturation,u=r.lightness,b=r.alpha;return{hue:parseFloat(o),saturation:(0,Q.numberFromPercentageOrUnitInterval)(a),lightness:(0,Q.numberFromPercentageOrUnitInterval)(u),alpha:(0,Q.numberFromPercentageOrUnitInterval)(b)}};f.hslaStringToHsla=lt;var ut=function(e){return(0,L.rgbToHsl)((0,M.rgb255StringToRgb)(e))};f.rgb255StringToHsl=ut;var ht=function(e){var t=(0,M.rgba255StringToRgba)(e),r=t.alpha,o=st(t,["alpha"]),a=(0,L.rgbToHsl)(o);return te(te({},a),{alpha:r})};f.rgba255StringToHsla=ht;var dt=function(e){return(0,L.rgbToHsl)((0,M.hexWithoutHashToRgb)(e))};f.hexWithoutHashToHsl=dt;var gt=function(e){return(0,L.rgbToHsl)((0,M.hexWithHashToRgb)(e))};f.hexWithHashToHsl=gt;var ct=function(e){return(0,L.rgbaToHsla)((0,M.hexWithoutHashToRgba)(e))};f.hexWithoutHashToHsla=ct;var bt=function(e){return(0,L.rgbaToHsla)((0,M.hexWithHashToRgba)(e))};f.hexWithHashToHsla=bt;var mt=function(e){return(0,L.rgbToHsl)((0,M.shortHexWithoutHashToRgb)(e))};f.shortHexWithoutHashToHsl=mt;var pt=function(e){return(0,L.rgbToHsl)((0,M.shortHexWithHashToRgb)(e))};f.shortHexWithHashToHsl=pt;var vt=function(e){return(0,L.rgbaToHsla)((0,M.shortHexWithoutHashToRgba)(e))};f.shortHexWithoutHashToHsla=vt;var ft=function(e){return(0,L.rgbaToHsla)((0,M.shortHexWithHashToRgba)(e))};f.shortHexWithHashToHsla=ft;var R={};Object.defineProperty(R,"__esModule",{value:!0});R.isXyza=R.isXyz=R.isHsva=R.isHsv=R.isHsla=R.isHsl=R.isRgba=R.isRgb=void 0;var Ht=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha===void 0};R.isRgb=Ht;var yt=function(e){return e.red!==void 0&&e.green!==void 0&&e.blue!==void 0&&e.alpha!==void 0};R.isRgba=yt;var Tt=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha===void 0};R.isHsl=Tt;var wt=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.lightness!==void 0&&e.alpha!==void 0};R.isHsla=wt;var Rt=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha===void 0};R.isHsv=Rt;var Ct=function(e){return e.hue!==void 0&&e.saturation!==void 0&&e.value!==void 0&&e.alpha!==void 0};R.isHsva=Ct;var xt=function(e){return e.x!==void 0&&e.y!==void 0&&e.z!==void 0&&e.alpha===void 0};R.isXyz=xt;var _t=function(e){return e.x!==void 0&&e.y!==void 0&&e.z!==void 0&&e.alpha!==void 0};R.isXyza=_t;var T=P&&P.__assign||function(){return T=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},T.apply(this,arguments)};Object.defineProperty(ne,"__esModule",{value:!0});ne.colourCodeToHsla=void 0;var q=ae,Ot=Z,St=O,E=f,$=R,Et=function(e){if(typeof e=="string")return Pt(e);if((0,$.isHsla)(e))return e;if((0,$.isHsl)(e))return T(T({},e),{alpha:1});if((0,$.isRgb)(e))return T(T({},(0,q.rgbToHsl)(e)),{alpha:1});if((0,$.isRgba)(e))return(0,q.rgbaToHsla)(e);if((0,$.isHsv)(e))return T(T({},(0,q.hsvToHsl)(e)),{alpha:1});if((0,$.isHsva)(e))return(0,q.hsvaToHsla)(e);if((0,$.isXyz)(e))return T(T({},(0,q.cieXyzToHsl)(e)),{alpha:1});if((0,$.isXyza)(e))return(0,q.cieXyzaToHsla)(e);throw new Error("The passed object is not a valid colour code.")};ne.colourCodeToHsla=Et;var Pt=function(e){var t=(0,St.evaluateFormat)(e);switch(t){case"hsl":return T(T({},(0,E.hslStringToHsl)(e)),{alpha:1});case"hsla":return(0,E.hslaStringToHsla)(e);case"rgbDecimal":return T(T({},(0,E.rgb255StringToHsl)(e)),{alpha:1});case"rgbaDecimal":return(0,E.rgba255StringToHsla)(e);case"rgbHexLongWithHash":return T(T({},(0,E.hexWithHashToHsl)(e)),{alpha:1});case"rgbHexLongWithoutHash":return T(T({},(0,E.hexWithoutHashToHsl)(e)),{alpha:1});case"rgbHexShortWithHash":return T(T({},(0,E.shortHexWithHashToHsl)(e)),{alpha:1});case"rgbHexShortWithoutHash":return T(T({},(0,E.shortHexWithoutHashToHsl)(e)),{alpha:1});case"rgbaHexLongWithHash":return(0,E.hexWithHashToHsla)(e);case"rgbaHexLongWithoutHash":return(0,E.hexWithoutHashToHsla)(e);case"rgbaHexShortWithHash":return(0,E.shortHexWithHashToHsla)(e);case"rgbaHexShortWithoutHash":return(0,E.shortHexWithoutHashToHsla)(e);case"namedColour":return T(T({},(0,q.rgbToHsl)(Ot.namedColours[e])),{alpha:1});case"namedTransparent":return{hue:0,saturation:0,lightness:0,alpha:0};default:throw new Error("Invalid colour code: ".concat(e))}},X={},G={};Object.defineProperty(G,"__esModule",{value:!0});G.numberToPercentage=G.decimalToHexPair=void 0;var Vt=O,Wt=function(e){var t=(0,Vt.round)(e).toString(16).toUpperCase();return t.length===1?"0".concat(t):t};G.decimalToHexPair=Wt;var Lt=function(e){return"".concat(e*100,"%")};G.numberToPercentage=Lt;Object.defineProperty(X,"__esModule",{value:!0});X.rgbaObjectToRgbHexString=X.rgbaObjectToRgbDecimalString=X.hslaObjectToHslString=void 0;var A=G,j=O,Mt=function(e){var t=e.hue,r=e.saturation,o=e.lightness,a=e.alpha,u=(0,j.round)(t),b=(0,j.round)(r,2),c=(0,j.round)(o,2),x=(0,A.numberToPercentage)(b),V=(0,A.numberToPercentage)(c);if(a===1)return"hsl(".concat(u,", ").concat(x,", ").concat(V,")");var k=(0,j.round)(a,2);return"hsla(".concat(u,", ").concat(x,", ").concat(V,", ").concat(k,")")};X.hslaObjectToHslString=Mt;var kt=function(e){var t=e.red,r=e.green,o=e.blue,a=e.alpha,u=(0,j.round)(t),b=(0,j.round)(r),c=(0,j.round)(o);if(a===1)return"rgb(".concat(u,", ").concat(b,", ").concat(c,")");var x=(0,j.round)(a,2);return"rgba(".concat(u,", ").concat(b,", ").concat(c,", ").concat(x,")")};X.rgbaObjectToRgbDecimalString=kt;var Ft=function(e){var t=e.red,r=e.green,o=e.blue,a=e.alpha,u=(0,A.decimalToHexPair)(t),b=(0,A.decimalToHexPair)(r),c=(0,A.decimalToHexPair)(o),x=a===1?"":(0,A.decimalToHexPair)((0,j.round)(a*255));return"#".concat(u).concat(b).concat(c).concat(x)};X.rgbaObjectToRgbHexString=Ft;var D=P&&P.__assign||function(){return D=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},D.apply(this,arguments)};Object.defineProperty(re,"__esModule",{value:!0});re.Chromator=void 0;var It=ne,ee=ae,de=X,pe=O,jt=function(){function e(t){var r=(0,It.colourCodeToHsla)(t),o=r.hue,a=r.saturation,u=r.lightness,b=r.alpha;this.hsl={hue:o,saturation:a,lightness:u},this.alpha=b}return e.prototype.copy=function(){return new e(this.getHsla())},e.prototype.getHsl=function(){return this.hsl},e.prototype.getAlpha=function(){return this.alpha},e.prototype.getHsla=function(){return D(D({},this.hsl),{alpha:this.alpha})},e.prototype.getRgb=function(){return(0,ee.hslToRgb)(this.hsl)},e.prototype.getRgba=function(){return D(D({},this.getRgb()),{alpha:this.alpha})},e.prototype.getHsv=function(){return(0,ee.hslToHsv)(this.hsl)},e.prototype.getHsva=function(){return(0,ee.hslaToHsva)(this.getHsla())},e.prototype.getCieXyz=function(){return(0,ee.hslToCieXyz)(this.hsl)},e.prototype.getCieXyza=function(){return D(D({},this.getCieXyz()),{alpha:this.alpha})},e.prototype.getRgbCode=function(){return(0,de.rgbaObjectToRgbDecimalString)(this.getRgba())},e.prototype.getHexCode=function(){return(0,de.rgbaObjectToRgbHexString)(this.getRgba())},e.prototype.getHslCode=function(){return(0,de.hslaObjectToHslString)(this.getHsla())},e.prototype.lighten=function(t){var r=this.hsl.lightness,o=1-r;return this.hsl.lightness=r+o*t,this},e.prototype.darken=function(t){var r=this.hsl.lightness;return this.hsl.lightness=r*(1-t),this},e.prototype.invertLightness=function(){return this.hsl.lightness=1-this.hsl.lightness,this},e.prototype.addHue=function(t){return this.hsl.hue=(0,pe.modulo)(this.hsl.hue+t,360),this},e.prototype.subtractHue=function(t){return this.hsl.hue=(0,pe.modulo)(this.hsl.hue-t,360),this},e.prototype.complementarise=function(){return this.addHue(180),this},e.prototype.invert=function(){return this.complementarise().invertLightness(),this},e.prototype.getRelativeLuminance=function(){var t=this.getCieXyz();return t.y},e}();re.Chromator=jt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Chromator=void 0;var t=re;Object.defineProperty(e,"Chromator",{enumerable:!0,get:function(){return t.Chromator}})})(y);const ye=(e,t)=>{const r=360/e,o=[];for(let a=0;a<e;a++){const u=t.copy();u.addHue(a*r),o.push(u)}return o},zt=(e,t)=>{const r=1/(e+1),o=t.getHsl(),a=[];for(let u=1;u<=e;u++){const b=u*r,c=new y.Chromator({...o,lightness:b});a.push(c)}return a},Te=document.createElement("template");Te.innerHTML=`
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
`;class $t extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this.otherPoints=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Te.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t,this.pointElement.colour=t;const{hue:r,saturation:o,lightness:a}=t.getHsl();this.circle.style.setProperty("--lightness",`${a*100}%`),this.pointElement.colour=t,this.setOpposites()}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.setOpposites()}get lightness(){return this.colour.getHsl().lightness}set lightness(t){this.colour=new y.Chromator({...this.colour.getHsl(),lightness:t})}get point(){const{hue:t,saturation:r}=this.colour.getHsl();return{hue:t,saturation:r}}set point(t){const{lightness:r}=this.colour.getHsl();this.colour=new y.Chromator({...t,lightness:r})}get circle(){return this.shadowRoot.querySelector(".circle")}get pointElement(){return this.shadowRoot.querySelector(".point")}setOpposites(){const t=ye(this.numberOfOpposites,this.colour);t.splice(0,1),this.otherPoints.forEach(r=>r.remove()),this.otherPoints=t.map(r=>{const o=document.createElement("colour-circle-point");return o.colour=r,this.circle.appendChild(o),o})}connectedCallback(){const t=this.getAttribute("size");t&&(this.circle.style.width=t),this.setOpposites(),this.addEventListener("dragover",r=>{r.preventDefault()}),this.addEventListener("click",r=>{const o=this.getPositionWithinCircle({top:r.clientY,left:r.clientX}),a=be(o);a.radius<=1&&(this.point={hue:a.angle,saturation:a.radius},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point})))}),this.pointElement.addEventListener("point-drag",r=>{const o=this.getPositionWithinCircle(r.detail),a=be(o);this.point={hue:a.angle,saturation:Math.min(a.radius,1)},this.dispatchEvent(new CustomEvent("point-change",{detail:this.point}))})}getPositionWithinCircle(t){const r=this.circle.getBoundingClientRect();return{top:(t.top-r.top)/r.height,left:(t.left-r.left)/r.width}}}window.customElements.define("colour-circle",$t);const we=document.createElement("template");we.innerHTML=`
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
`;class Dt extends HTMLElement{constructor(){super(),this._value=.5,this._max=1,this._min=0,this._step=.01,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(we.content.cloneNode(!0))}get slider(){return this.shadowRoot.getElementById("slider")}get label(){return this.shadowRoot.getElementById("label")}get valueElement(){return this.shadowRoot.getElementById("value")}get value(){return this._value}set value(t){this._value=t;const r=Math.round(t/this.step)*this.step,o=Intl.NumberFormat().format(r);this.slider.value=String(r),this.valueElement.textContent=o}get max(){return this._max}set max(t){this._max=t,this.slider.max=String(t)}get min(){return this._min}set min(t){this._min=t,this.slider.min=String(t)}get step(){return this._step}set step(t){this._step=t,this.slider.step=String(t)}connectedCallback(){const t=this.getAttribute("value");t&&(this.value=Number(t));const r=this.getAttribute("label");r&&(this.label.innerHTML=r);const o=this.getAttribute("max")||"1";this.max=Number(o);const a=this.getAttribute("min")||"0";this.min=Number(a);const u=this.getAttribute("step")||"0.01";this.step=Number(u);const b=this.getAttribute("background");b&&(this.slider.style.background=b),this.slider.addEventListener("input",()=>{const c=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:c})),this.value=c}),this.slider.addEventListener("change",()=>{const c=Number(this.slider.value);this.dispatchEvent(new CustomEvent("slider-change",{detail:c})),this.value=c})}}window.customElements.define("slider-input",Dt);const Re=document.createElement("template");Re.innerHTML=`
  <style>
    :host {
      display: block;
      padding: 1em;
      border-radius: 0.5em;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
  </style>
  <slot></slot>
`;class Xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Re.content.cloneNode(!0))}}window.customElements.define("shadow-box",Xt);const Ce=document.createElement("template");Ce.innerHTML=`
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
`;class Nt extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ce.content.cloneNode(!0))}get hueRange(){return this.shadowRoot.getElementById("hue")}get saturationRange(){return this.shadowRoot.getElementById("saturation")}get lightnessRange(){return this.shadowRoot.getElementById("lightness")}get colour(){return this._colour}set colour(t){this._colour=t,this.hueRange.value=t.getHsl().hue,this.saturationRange.value=t.getHsl().saturation,this.lightnessRange.value=t.getHsl().lightness,this.style.setProperty("--hue",t.getHsl().hue.toString()),this.style.setProperty("--saturation",(t.getHsl().saturation*100).toString()+"%"),this.style.setProperty("--lightness",(t.getHsl().lightness*100).toString()+"%")}connectedCallback(){const t=this.getAttribute("value");t&&(this.colour=new y.Chromator(t)),this.hueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new y.Chromator({...this.colour.getHsl(),hue:this.hueRange.value})}))}),this.saturationRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new y.Chromator({...this.colour.getHsl(),saturation:this.saturationRange.value})}))}),this.lightnessRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("hsl-change",{detail:new y.Chromator({...this.colour.getHsl(),lightness:this.lightnessRange.value})}))}),this.addEventListener("hsl-change",r=>{this.colour=r.detail})}}window.customElements.define("colour-picker-hsl",Nt);const xe=document.createElement("template");xe.innerHTML=`
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
`;class Ut extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(xe.content.cloneNode(!0))}get redRange(){return this.shadowRoot.getElementById("red")}get greenRange(){return this.shadowRoot.getElementById("green")}get blueRange(){return this.shadowRoot.getElementById("blue")}get colour(){return this._colour}set colour(t){this._colour=t;const r=t.getRgb();this.redRange.value=r.red,this.greenRange.value=r.green,this.blueRange.value=r.blue,this.style.setProperty("--red",r.red.toString()),this.style.setProperty("--green",r.green.toString()),this.style.setProperty("--blue",r.blue.toString())}connectedCallback(){const t=this.getAttribute("value");t&&(this.colour=new y.Chromator(t)),this.redRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new y.Chromator({...this.colour.getRgb(),red:this.redRange.value})}))}),this.greenRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new y.Chromator({...this.colour.getRgb(),green:this.greenRange.value})}))}),this.blueRange.addEventListener("slider-change",()=>{this.dispatchEvent(new CustomEvent("rgb-change",{detail:new y.Chromator({...this.colour.getRgb(),blue:this.blueRange.value})}))}),this.addEventListener("rgb-change",r=>{this.colour=r.detail})}}window.customElements.define("colour-picker-rgb",Ut);const _e=document.createElement("template");_e.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;class Bt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(_e.content.cloneNode(!0))}}window.customElements.define("layout-row",Bt);const Oe=document.createElement("template");Oe.innerHTML=`
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
`;class qt extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:0,lightness:.5}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Oe.content.cloneNode(!0))}get input(){return this.shadowRoot.getElementById("input")}get hexcode(){return this.shadowRoot.getElementById("hexcode")}get hsl(){return this.shadowRoot.getElementById("hsl")}get rgb(){return this.shadowRoot.getElementById("rgb")}get colour(){return this._colour}set colour(t){this._colour=t,this.input.value=t.getHexCode(),this.hsl.colour=t,this.rgb.colour=t,this.hexcode.textContent=t.getHexCode()}connectedCallback(){this.input.addEventListener("input",()=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:new y.Chromator(this.input.value)}))}),this.hsl.addEventListener("hsl-change",t=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:t.detail}))}),this.rgb.addEventListener("rgb-change",t=>{this.dispatchEvent(new CustomEvent("colour-change",{detail:t.detail}))}),this.addEventListener("colour-change",t=>{this.colour=t.detail})}}window.customElements.define("colour-picker",qt);const Se=document.createElement("template");Se.innerHTML=`
  <style>
    :host {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
  <slot></slot>
`;class At extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Se.content.cloneNode(!0))}}window.customElements.define("layout-column",At);const Ee=document.createElement("template");Ee.innerHTML=`
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
`;class Gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ee.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t;const r=t.getHexCode(),{hue:o,saturation:a,lightness:u}=t.getHsl(),b=t.getRelativeLuminance(),c=J(o,0),x=J(a,2),V=J(u,2),k=J(b,2),z=Intl.NumberFormat().format(c),U=Intl.NumberFormat().format(x),m=Intl.NumberFormat().format(V),d=Intl.NumberFormat().format(k);this.style.backgroundColor=r,this.style.color=b>1/3?"black":"white",this.title=`Hue: ${z}°; Saturation: ${U}; Lightness: ${m}; Relative luminance: ${d}`,this.hexElement.textContent=r}get hexElement(){return this.shadowRoot.querySelector("#hex")}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new y.Chromator(t))}}window.customElements.define("colour-box",Gt);const Pe=document.createElement("template");Pe.innerHTML=`
  <layout-column id="wrapper"></layout-column>
`;class Yt extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfShades=8,this.boxes=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Pe.content.cloneNode(!0))}get wrapper(){return this.shadowRoot.querySelector("#wrapper")}get colour(){return this._colour}set colour(t){this._colour=t,this.setBoxes()}get numberOfShades(){return this._numberOfShades}set numberOfShades(t){this._numberOfShades=t,this.setBoxes()}setBoxes(){const t=zt(this.numberOfShades,this.colour);this.boxes.length!==t.length?(this.boxes.forEach(r=>{r.remove()}),t.forEach(r=>{const o=document.createElement("colour-box");o.colour=r,this.wrapper.appendChild(o),this.boxes.push(o)})):this.boxes.forEach((r,o)=>{r.colour=t[o]})}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new y.Chromator(t)),this.setBoxes()}}window.customElements.define("colour-row",Yt);const Ve=document.createElement("template");Ve.innerHTML=`
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
`;class Kt extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this._numberOfShades=8,this.otherColourRows=[],this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ve.content.cloneNode(!0))}get mainColourRow(){return this.shadowRoot.querySelector("#maincolour")}get oppositesInput(){return this.shadowRoot.querySelector("#opposites")}get shadesInput(){return this.shadowRoot.querySelector("#shades")}get boxes(){return this.shadowRoot.querySelector("#boxes")}get colour(){return this._colour}set colour(t){this._colour=t,this.mainColourRow.colour=t,this.setOpposites()}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.setOpposites()}get numberOfShades(){return this._numberOfShades}set numberOfShades(t){this._numberOfShades=t,this.mainColourRow.numberOfShades=t,this.otherColourRows.forEach(r=>r.numberOfShades=t)}setOpposites(){const t=ye(this.numberOfOpposites,this.colour);t.splice(0,1),this.otherColourRows.length!==t.length?(this.otherColourRows.forEach(r=>r.remove()),t.forEach(r=>{const o=document.createElement("colour-row");o.colour=r,o.numberOfShades=this.numberOfShades,this.boxes.appendChild(o),this.otherColourRows.push(o)})):t.forEach((r,o)=>{const a=this.otherColourRows[o];a.colour=r,a.numberOfShades=this.numberOfShades})}connectedCallback(){const t=this.getAttribute("value");t!=null&&(this.colour=new y.Chromator(t)),this.setOpposites(),this.oppositesInput.addEventListener("input",()=>{this.numberOfOpposites=parseInt(this.oppositesInput.value),this.dispatchEvent(new CustomEvent("oppositeschange",{detail:this.numberOfOpposites}))}),this.shadesInput.addEventListener("input",()=>{this.numberOfShades=parseInt(this.shadesInput.value)})}}window.customElements.define("colour-properties",Kt);const We=document.createElement("template");We.innerHTML=`
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
`;class Jt extends HTMLElement{constructor(){super(),this._colour=new y.Chromator({hue:0,saturation:1,lightness:.5}),this._numberOfOpposites=3,this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(We.content.cloneNode(!0))}get colour(){return this._colour}set colour(t){this._colour=t,this.colourPicker.colour=t,this.colourCircle.colour=t,this.colourProperties.colour=t}get numberOfOpposites(){return this._numberOfOpposites}set numberOfOpposites(t){this._numberOfOpposites=t,this.colourCircle.numberOfOpposites=t}get colourPicker(){return this.shadowRoot.querySelector("#colour-picker")}get colourCircle(){return this.shadowRoot.querySelector("#colour-circle")}get colourProperties(){return this.shadowRoot.querySelector("#properties")}getHsl(){return this.colour.getHsl()}connectedCallback(){this.colour=new y.Chromator("#39C6BC"),this.colourPicker.addEventListener("colour-change",t=>{this.colour=t.detail}),this.colourCircle.addEventListener("point-change",t=>{this.colour=new y.Chromator({...t.detail,lightness:this.colour.getHsl().lightness})}),this.colourProperties.addEventListener("oppositeschange",t=>{this.numberOfOpposites=t.detail})}}window.customElements.define("main-component",Jt);document.querySelector("#app").innerHTML=`
  <main-component></main-component>
`;
