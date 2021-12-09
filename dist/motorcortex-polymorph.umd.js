!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],t):(e="undefined"!=typeof globalThis?globalThis:e||self)["@donkeyclip/motorcortex-polymorph"]=t(e.MotorCortex)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var o=i(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}var l={},c={},f={},p={},v={};Object.defineProperty(v,"__esModule",{value:!0}),v._=void 0,v.SPACE=" ",v.FILL="fill",v.NONE="none",v.DRAW_LINE_VERTICAL="V",v.DRAW_LINE_HORIZONTAL="H",v.DRAW_LINE="L",v.CLOSE_PATH="Z",v.MOVE_CURSOR="M",v.DRAW_CURVE_CUBIC_BEZIER="C",v.DRAW_CURVE_SMOOTH="S",v.DRAW_CURVE_QUADRATIC="Q",v.DRAW_CURVE_QUADRATIC_CONTINUATION="T",v.DRAW_ARC="A";var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.isString=function(e){return"string"==typeof e};var d={};!function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Math;e.abs=t.abs,e.min=t.min,e.max=t.max,e.floor=t.floor,e.round=t.round,e.sqrt=t.sqrt,e.pow=t.pow,e.cos=t.cos,e.asin=t.asin,e.sin=t.sin,e.tan=t.tan,e.PI=t.PI,e.QUADRATIC_RATIO=2/3,e.EPSILON=e.pow(2,-52)}(d),Object.defineProperty(p,"__esModule",{value:!0});var y=v,A=_,h=d;p.renderPath=function(e,t){if(void 0===t&&(t=h.round),A.isString(e))return e;for(var r=[],n=0;n<e.length;n++){var o=e[n];r.push(y.MOVE_CURSOR,t(o[0]),t(o[1]),y.DRAW_CURVE_CUBIC_BEZIER);for(var i=void 0,a=2;a<o.length;a+=6){var u=t(o[a]),s=t(o[a+1]),l=t(o[a+2]),c=t(o[a+3]),f=t(o[a+4]),p=t(o[a+5]);u==f&&l==f&&s==p&&c==p&&i==(i=""+u+s+l+c+f+p)||r.push(u,s,l,c,f,p)}}return r.join(y.SPACE)};var g={};Object.defineProperty(g,"__esModule",{value:!0});var R=v;g.raiseError=function(){throw new Error(Array.prototype.join.call(arguments,R.SPACE))};var m={},O={},P={},b={};Object.defineProperty(b,"__esModule",{value:!0});var I="undefined"!=typeof window&&window.navigator.userAgent;b.isEdge=/(MSIE |Trident\/|Edge\/)/i.test(I),Object.defineProperty(P,"__esModule",{value:!0});var C=b.isEdge?Array:Float32Array;P.createNumberArray=function(e){return new C(e)};var E={};Object.defineProperty(E,"__esModule",{value:!0});var D=d;E.computeAbsoluteOrigin=function(e,t,r){var n=function(e){for(var t=e[0],r=e[1],n=r,o=t,i=2;i<e.length;i+=6){var a=e[i+4],u=e[i+5];t=D.min(t,a),o=D.max(o,a),r=D.min(r,u),n=D.max(n,u)}return{x:t,w:o-t,y:r,h:n-r}}(r);return{x:n.x+n.w*e,y:n.y+n.h*t}},Object.defineProperty(O,"__esModule",{value:!0});var T=P,x=E;O.fillSegments=function e(t,r,n){var o=t.length,i=r.length;if(o<i)return e(r,t,n);r.length=o;for(var a=i;a<o;a++){var u=t[a],s=n.x,l=n.y;if(!n.absolute){var c=x.computeAbsoluteOrigin(s,l,u);s=c.x,l=c.y}for(var f=T.createNumberArray(u.length),p=0;p<u.length;p+=2)f[p]=s,f[p+1]=l;r[a]=f}};var U={},j={};Object.defineProperty(j,"__esModule",{value:!0});var M=P;j.rotatePoints=function(e,t){var r,n=e.length,o=n-t,i=M.createNumberArray(t);for(r=0;r<t;r++)i[r]=e[r];for(r=t;r<n;r++)e[r-t]=e[r];for(r=0;r<t;r++)e[o+r]=i[r]};var S={};Object.defineProperty(S,"__esModule",{value:!0});var L=d;S.distance=function(e,t,r,n){return L.sqrt((e-r)*(e-r)+(t-n)*(t-n))},Object.defineProperty(U,"__esModule",{value:!0});var N=j,V=v,w=S,W=E;U.normalizePoints=function(e,t,r,n){var o=n.length;if(n[o-2]===n[0]&&n[o-1]===n[1]){if(!e){var i=W.computeAbsoluteOrigin(t,r,n);t=i.x,r=i.y}var a,u,s=n.slice(2);o=s.length;for(var l=0;l<o;l+=6){var c=w.distance(t,t,s[l],s[l+1]);(u===V._||c<u)&&(u=c,a=l)}N.rotatePoints(s,a),n[0]=s[o-2],n[1]=s[o-1];for(l=0;l<s.length;l++)n[l+2]=s[l]}};var Q={};Object.defineProperty(Q,"__esModule",{value:!0});var z=d,B=P;function H(e,t){var r=t-e.length,n=Math.ceil(t/e.length),o=B.createNumberArray(t);o[0]=e[0],o[1]=e[1];for(var i=1,a=1;a<t-1;){o[++a]=e[++i],o[++a]=e[++i],o[++a]=e[++i],o[++a]=e[++i];var u=o[++a]=e[++i],s=o[++a]=e[++i];if(r)for(var l=0;l<n&&r;l++)o[a+5]=o[a+3]=o[a+1]=u,o[a+6]=o[a+4]=o[a+2]=s,a+=6,r-=6}return o}Q.fillPoints=function(e,t){for(var r=e[0].length,n=0;n<r;n++){var o=e[0][n],i=e[1][n],a=z.max(o.length+t,i.length+t);e[0][n]=H(o,a),e[1][n]=H(i,a)}},Q.fillSubpath=H;var q={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});var k=d,F=S;Z.perimeterPoints=function(e){for(var t=e.length,r=e[t-2],n=e[t-1],o=0,i=0;i<t;i+=6)o+=F.distance(e[i],e[i+1],r,n),r=e[i],n=e[i+1];return k.floor(o)},Object.defineProperty(q,"__esModule",{value:!0});var $=Z;q.getSortedSegments=function(e){return e.map((function(e){return{points:e,perimeter:$.perimeterPoints(e)}})).sort((function(e,t){return t.perimeter-e.perimeter})).map((function(e){return e.points}))},Object.defineProperty(m,"__esModule",{value:!0});var X=O,Y=U,G=Q,J=v,K=g,ee=q;m.normalizePaths=function(e,t,r){r.optimize===J.FILL&&(e=ee.getSortedSegments(e),t=ee.getSortedSegments(t)),e.length!==t.length&&(r.optimize===J.FILL?X.fillSegments(e,t,r.origin):K.raiseError("optimize:none requires equal lengths"));var n=Array(2);if(n[0]=e,n[1]=t,r.optimize===J.FILL){for(var o=r.origin,i=o.x,a=o.y,u=o.absolute,s=0;s<e.length;s++)Y.normalizePoints(u,i,a,n[0][s]),Y.normalizePoints(u,i,a,n[1][s]);G.fillPoints(n,6*r.addPoints)}return n};var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.fillObject=function(e,t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r]);return e},Object.defineProperty(f,"__esModule",{value:!0});var re=p,ne=d,oe=g,ie=m,ae=te,ue=P,se=v,le={addPoints:0,optimize:se.FILL,origin:{x:0,y:0},precision:0};function ce(e,t,r){var n=ie.normalizePaths(e.getData(),t.getData(),r),o=n[0].length;return function(r){if(ne.abs(r-0)<ne.EPSILON)return e.getStringData();if(ne.abs(r-1)<ne.EPSILON)return t.getStringData();for(var i=Array(o),a=0;a<o;a++)i[a]=fe(n[0][a],n[1][a],r);return i}}function fe(e,t,r){for(var n=e.length,o=ue.createNumberArray(n),i=0;i<n;i++)o[i]=e[i]+(t[i]-e[i])*r;return o}f.interpolatePath=function(e,t){t=ae.fillObject(t,le),(!e||e.length<2)&&oe.raiseError("invalid arguments");for(var r=e.length-1,n=Array(r),o=0;o<r;o++)n[o]=ce(e[o],e[o+1],t);var i=t.precision?function(e){return e.toFixed(t.precision)}:se._;return function(e){var t=r*e,o=ne.min(ne.floor(t),r-1);return re.renderPath(n[o]((t-o)/(o+1)),i)}},f.mixPoints=fe;var pe={},ve={},_e={},de={};Object.defineProperty(de,"__esModule",{value:!0});var ye=v;de.coalesce=function(e,t){return e===ye._?t:e};var Ae={};Object.defineProperty(Ae,"__esModule",{value:!0});var he=d,ge=120*he.PI/180,Re=2*he.PI;Ae.arcToCurve=function e(t,r,n,o,i,a,u,s,l,c,f,p,v){if(n<=0||o<=0)return[t,r,s,l,s,l];var _,d=he.PI/180*(+i||0),y=he.cos(d),A=he.sin(d),h=!!c;if(!h){var g=t,R=s,m=((t=g*y-r*-A)-(s=R*y-l*-A))/2,O=((r=g*-A+r*y)-(l=R*-A+l*y))/2,P=m*m/(n*n)+O*O/(o*o);P>1&&(n*=P=he.sqrt(P),o*=P);var b=(a===u?-1:1)*he.sqrt(he.abs((n*n*o*o-n*n*O*O-o*o*m*m)/(n*n*O*O+o*o*m*m)));p=b*n*O/o+(t+s)/2,v=b*-o*m/n+(r+l)/2,c=he.asin((r-v)/o),f=he.asin((l-v)/o),t<p&&(c=he.PI-c),s<p&&(f=he.PI-f),c<0&&(c+=Re),f<0&&(f+=Re),u&&c>f&&(c-=Re),!u&&f>c&&(f-=Re)}if(he.abs(f-c)>ge){var I=f,C=s,E=l;f=c+ge*(u&&f>c?1:-1),_=e(s=p+n*he.cos(f),l=v+o*he.sin(f),n,o,i,0,u,C,E,f,I,p,v)}else _=[];var D=4/3*he.tan((f-c)/4);if(_.splice(0,0,2*t-(t+D*n*he.sin(c)),2*r-(r-D*o*he.cos(c)),s+D*n*he.sin(f),l-D*o*he.cos(f),s,l),!h)for(var T=0,x=_.length;T<x;T+=2){var U=_[T],j=_[T+1];_[T]=U*y-j*A,_[T+1]=U*A+j*y}return _},Object.defineProperty(_e,"__esModule",{value:!0});var me=v,Oe=de,Pe=g,be=d,Ie=Ae,Ce={M:2,H:1,V:1,L:2,Z:0,C:6,S:4,Q:4,T:2,A:7};function Ee(e,t,r,n,o,i,a){var u=e.x,s=e.y;e.x=Oe.coalesce(i,u),e.y=Oe.coalesce(a,s),e.current.push(Oe.coalesce(t,u),r=Oe.coalesce(r,s),n=Oe.coalesce(n,u),o=Oe.coalesce(o,s),e.x,e.y),e.lc=e.c}function De(e){var t=e.c,r=e.t,n=e.x,o=e.y;if(t===me.DRAW_LINE_VERTICAL)r[0]+=o;else if(t===me.DRAW_LINE_HORIZONTAL)r[0]+=n;else if(t===me.DRAW_ARC)r[5]+=n,r[6]+=o;else for(var i=0;i<r.length;i+=2)r[i]+=n,r[i+1]+=o}function Te(e){return e.split(me.SPACE).map(xe)}function xe(e,t){return 0===t?e:+e}_e.parsePoints=function(e){for(var t={x:0,y:0,segments:[]},r=function(e){return e.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi," $1").replace(/([mhvlzcsqta])/gi," $1").trim().split("  ").map(Te)}(e),n=0;n<r.length;n++){var o=r[n],i=o[0],a=i.toUpperCase(),u=a!==me.CLOSE_PATH&&a!==i;t.c=a;var s=Ce[a],l=o,c=1;do{t.t=1===l.length?l:l.slice(c,c+s),u&&De(t);var f=t.t,p=t.x,v=t.y,_=void 0,d=void 0,y=void 0,A=void 0,h=void 0,g=void 0;if(a===me.MOVE_CURSOR)t.segments.push(t.current=[t.x=f[0],t.y=f[1]]);else if(a===me.DRAW_LINE_HORIZONTAL)Ee(t,me._,me._,me._,me._,f[0],me._);else if(a===me.DRAW_LINE_VERTICAL)Ee(t,me._,me._,me._,me._,me._,f[0]);else if(a===me.DRAW_LINE)Ee(t,me._,me._,me._,me._,f[0],f[1]);else if(a===me.CLOSE_PATH)Ee(t,me._,me._,me._,me._,t.current[0],t.current[1]);else if(a===me.DRAW_CURVE_CUBIC_BEZIER)Ee(t,f[0],f[1],f[2],f[3],f[4],f[5]),t.cx=f[2],t.cy=f[3];else if(a===me.DRAW_CURVE_SMOOTH){var R=t.lc!==me.DRAW_CURVE_SMOOTH&&t.lc!==me.DRAW_CURVE_CUBIC_BEZIER;Ee(t,_=R?me._:2*p-t.cx,d=R?me._:2*v-t.cy,f[0],f[1],f[2],f[3]),t.cx=f[0],t.cy=f[1]}else if(a===me.DRAW_CURVE_QUADRATIC){var m=f[0],O=f[1];y=f[2],A=f[3],Ee(t,p+(m-p)*be.QUADRATIC_RATIO,v+(O-v)*be.QUADRATIC_RATIO,y+(m-y)*be.QUADRATIC_RATIO,A+(O-A)*be.QUADRATIC_RATIO,y,A),t.cx=m,t.cy=O}else if(a===me.DRAW_CURVE_QUADRATIC_CONTINUATION)y=f[0],A=f[1],t.lc===me.DRAW_CURVE_QUADRATIC||t.lc===me.DRAW_CURVE_QUADRATIC_CONTINUATION?(_=p+(2*p-t.cx-p)*be.QUADRATIC_RATIO,d=v+(2*v-t.cy-v)*be.QUADRATIC_RATIO,h=y+(2*p-t.cx-y)*be.QUADRATIC_RATIO,g=A+(2*v-t.cy-A)*be.QUADRATIC_RATIO):(_=h=p,d=g=v),Ee(t,_,d,h,g,y,A),t.cx=h,t.cy=g;else if(a===me.DRAW_ARC)for(var P=Ie.arcToCurve(p,v,f[0],f[1],f[2],f[3],f[4],f[5],f[6]),b=0;b<P.length;b+=6)Ee(t,P[b],P[b+1],P[b+2],P[b+3],P[b+4],P[b+5]);else Pe.raiseError(t.c," is not supported");c+=s}while(c<l.length)}return t.segments},Object.defineProperty(ve,"__esModule",{value:!0});var Ue=g,je=_e,Me=v,Se=/^([#|\.]|path)/i;ve.convertToPathData=function(e){if(Array.isArray(e))return{data:e,stringData:Me._};var t;if("string"==typeof e&&Se.test(e)?e=document.querySelector(e):t=e,"string"==typeof e)return{data:je.parsePoints(e),stringData:t};var r=e;return"PATH"===r.tagName.toUpperCase()?(t=r.getAttribute("d"),{data:je.parsePoints(t),stringData:t}):Ue.raiseError("Unsupported element ",r.tagName)},Object.defineProperty(pe,"__esModule",{value:!0});var Le=ve,Ne=d,Ve=v,we=function(){function e(e){var t=Le.convertToPathData(e),r=t.data,n=t.stringData;this.data=r,this.stringData=n}return e.prototype.getData=function(){return this.data},e.prototype.getStringData=function(){return this.stringData||(this.stringData=this.render())},e.prototype.render=function(e){void 0===e&&(e=Ne.round);for(var t=this.data,r=[],n=0;n<t.length;n++){var o=t[n];r.push(Ve.MOVE_CURSOR,e(o[0]),e(o[1]),Ve.DRAW_CURVE_CUBIC_BEZIER);for(var i=void 0,a=2;a<o.length;a+=6){var u=e(o[a]),s=e(o[a+1]),l=e(o[a+2]),c=e(o[a+3]),f=e(o[a+4]),p=e(o[a+5]);u==f&&l==f&&s==p&&c==p&&i==(i=""+u+s+l+c+f+p)||r.push(u,s,l,c,f,p)}}return r.join(Ve.SPACE)},e}();pe.Path=we,Object.defineProperty(c,"__esModule",{value:!0});var We=f,Qe=pe;c.interpolate=function(e,t){return We.interpolatePath(e.map((function(e){return new Qe.Path(e)})),t||{})},Object.defineProperty(l,"__esModule",{value:!0});var ze=c,Be=l.interpolate=ze.interpolate,He=pe;l.Path=He.Path;var qe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(l,e);var t,r,i,u=s(l);function l(){return n(this,l),u.apply(this,arguments)}return t=l,(r=[{key:"onGetContext",value:function(){this.interpolator=Be([this.initialValue,this.animAttributes.d],{addPoints:this.attrs.addPoints||0,origin:{x:this.attrs.originX||0,y:this.attrs.originY||0},precision:this.attrs.precision||"fill"})}},{key:"getScratchValue",value:function(){return this.element.getAttribute("d")}},{key:"onProgress",value:function(e){this.element.setAttribute("d",this.interpolator(e))}}])&&o(t.prototype,r),i&&o(t,i),l}(r.default.Effect);return{npm_name:"@donkeyclip/motorcortex-polymorph",version:"1.0.1",incidents:[{exportable:qe,name:"Polymorph",attributesValidationRules:{animatedAttrs:{type:"object",props:{d:{optional:!1,type:"string"}}},addPoints:{optional:!0,type:"number",min:0},originX:{optional:!0,type:"number",min:0,max:1},originY:{optional:!0,type:"number",min:0,max:1},precision:{optional:!0,type:"number",min:0,max:100}}}]}}));
