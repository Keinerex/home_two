(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[727],{7531:(n,t,e)=>{"use strict";e.d(t,{lX:()=>w,q_:()=>O,ob:()=>p,PP:()=>k,Ep:()=>f});var r=e(7462);function o(n){return"/"===n.charAt(0)}function i(n,t){for(var e=t,r=e+1,o=n.length;r<o;e+=1,r+=1)n[e]=n[r];n.pop()}var a=e(8776);function c(n){return"/"===n.charAt(0)?n:"/"+n}function u(n){return"/"===n.charAt(0)?n.substr(1):n}function s(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function l(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function f(n){var t=n.pathname,e=n.search,r=n.hash,o=t||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function p(n,t,e,a){var c;"string"==typeof n?(c=function(n){var t=n||"/",e="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===r?"":r}}(n),c.state=t):(void 0===(c=(0,r.Z)({},n)).pathname&&(c.pathname=""),c.search?"?"!==c.search.charAt(0)&&(c.search="?"+c.search):c.search="",c.hash?"#"!==c.hash.charAt(0)&&(c.hash="#"+c.hash):c.hash="",void 0!==t&&void 0===c.state&&(c.state=t));try{c.pathname=decodeURI(c.pathname)}catch(n){throw n instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):n}return e&&(c.key=e),a?c.pathname?"/"!==c.pathname.charAt(0)&&(c.pathname=function(n,t){void 0===t&&(t="");var e,r=n&&n.split("/")||[],a=t&&t.split("/")||[],c=n&&o(n),u=t&&o(t),s=c||u;if(n&&o(n)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var l=a[a.length-1];e="."===l||".."===l||""===l}else e=!1;for(var f=0,p=a.length;p>=0;p--){var h=a[p];"."===h?i(a,p):".."===h?(i(a,p),f++):f&&(i(a,p),f--)}if(!s)for(;f--;f)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var d=a.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(c.pathname,a.pathname)):c.pathname=a.pathname:c.pathname||(c.pathname="/"),c}function h(){var n=null,t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,r,o){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(n){var e=!0;function r(){e&&n.apply(void 0,arguments)}return t.push(r),function(){e=!1,t=t.filter((function(n){return n!==r}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];t.forEach((function(n){return n.apply(void 0,e)}))}}}var d=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(n,t){t(window.confirm(n))}var m="popstate",y="hashchange";function g(){try{return window.history.state||{}}catch(n){return{}}}function w(n){void 0===n&&(n={}),d||(0,a.Z)(!1);var t,e=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),u=n,w=u.forceRefresh,x=void 0!==w&&w,b=u.getUserConfirmation,E=void 0===b?v:b,P=u.keyLength,C=void 0===P?6:P,O=n.basename?l(c(n.basename)):"";function T(n){var t=n||{},e=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return O&&(i=s(i,O)),p(i,r,e)}function k(){return Math.random().toString(36).substr(2,C)}var A=h();function R(n){(0,r.Z)(N,n),N.length=e.length,A.notifyListeners(N.location,N.action)}function _(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||S(T(n.state))}function L(){S(T(g()))}var Z=!1;function S(n){Z?(Z=!1,R()):A.confirmTransitionTo(n,"POP",E,(function(t){t?R({action:"POP",location:n}):function(n){var t=N.location,e=M.indexOf(t.key);-1===e&&(e=0);var r=M.indexOf(n.key);-1===r&&(r=0);var o=e-r;o&&(Z=!0,j(o))}(n)}))}var U=T(g()),M=[U.key];function I(n){return O+f(n)}function j(n){e.go(n)}var B=0;function $(n){1===(B+=n)&&1===n?(window.addEventListener(m,_),i&&window.addEventListener(y,L)):0===B&&(window.removeEventListener(m,_),i&&window.removeEventListener(y,L))}var H=!1,N={length:e.length,action:"POP",location:U,createHref:I,push:function(n,t){var r="PUSH",i=p(n,t,k(),N.location);A.confirmTransitionTo(i,r,E,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(o)if(e.pushState({key:a,state:c},null,t),x)window.location.href=t;else{var u=M.indexOf(N.location.key),s=M.slice(0,u+1);s.push(i.key),M=s,R({action:r,location:i})}else window.location.href=t}}))},replace:function(n,t){var r="REPLACE",i=p(n,t,k(),N.location);A.confirmTransitionTo(i,r,E,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(o)if(e.replaceState({key:a,state:c},null,t),x)window.location.replace(t);else{var u=M.indexOf(N.location.key);-1!==u&&(M[u]=i.key),R({action:r,location:i})}else window.location.replace(t)}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(n){void 0===n&&(n=!1);var t=A.setPrompt(n);return H||($(1),H=!0),function(){return H&&(H=!1,$(-1)),t()}},listen:function(n){var t=A.appendListener(n);return $(1),function(){$(-1),t()}}};return N}var x="hashchange",b={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+u(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:u,decodePath:c},slash:{encodePath:c,decodePath:c}};function E(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function P(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function C(n){window.location.replace(E(window.location.href)+"#"+n)}function O(n){void 0===n&&(n={}),d||(0,a.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),o=e.getUserConfirmation,i=void 0===o?v:o,u=e.hashType,m=void 0===u?"slash":u,y=n.basename?l(c(n.basename)):"",g=b[m],w=g.encodePath,O=g.decodePath;function T(){var n=O(P());return y&&(n=s(n,y)),p(n)}var k=h();function A(n){(0,r.Z)(H,n),H.length=t.length,k.notifyListeners(H.location,H.action)}var R=!1,_=null;function L(){var n,t,e=P(),r=w(e);if(e!==r)C(r);else{var o=T(),a=H.location;if(!R&&(t=o,(n=a).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(_===f(o))return;_=null,function(n){if(R)R=!1,A();else{k.confirmTransitionTo(n,"POP",i,(function(t){t?A({action:"POP",location:n}):function(n){var t=H.location,e=M.lastIndexOf(f(t));-1===e&&(e=0);var r=M.lastIndexOf(f(n));-1===r&&(r=0);var o=e-r;o&&(R=!0,I(o))}(n)}))}}(o)}}var Z=P(),S=w(Z);Z!==S&&C(S);var U=T(),M=[f(U)];function I(n){t.go(n)}var j=0;function B(n){1===(j+=n)&&1===n?window.addEventListener(x,L):0===j&&window.removeEventListener(x,L)}var $=!1,H={length:t.length,action:"POP",location:U,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=E(window.location.href)),e+"#"+w(y+f(n))},push:function(n,t){var e="PUSH",r=p(n,void 0,void 0,H.location);k.confirmTransitionTo(r,e,i,(function(n){if(n){var t=f(r),o=w(y+t);if(P()!==o){_=t,function(n){window.location.hash=n}(o);var i=M.lastIndexOf(f(H.location)),a=M.slice(0,i+1);a.push(t),M=a,A({action:e,location:r})}else A()}}))},replace:function(n,t){var e="REPLACE",r=p(n,void 0,void 0,H.location);k.confirmTransitionTo(r,e,i,(function(n){if(n){var t=f(r),o=w(y+t);P()!==o&&(_=t,C(o));var i=M.indexOf(f(H.location));-1!==i&&(M[i]=t),A({action:e,location:r})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(n){void 0===n&&(n=!1);var t=k.setPrompt(n);return $||(B(1),$=!0),function(){return $&&($=!1,B(-1)),t()}},listen:function(n){var t=k.appendListener(n);return B(1),function(){B(-1),t()}}};return H}function T(n,t,e){return Math.min(Math.max(n,t),e)}function k(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,o=t.initialEntries,i=void 0===o?["/"]:o,a=t.initialIndex,c=void 0===a?0:a,u=t.keyLength,s=void 0===u?6:u,l=h();function d(n){(0,r.Z)(x,n),x.length=x.entries.length,l.notifyListeners(x.location,x.action)}function v(){return Math.random().toString(36).substr(2,s)}var m=T(c,0,i.length-1),y=i.map((function(n){return p(n,void 0,"string"==typeof n?v():n.key||v())})),g=f;function w(n){var t=T(x.index+n,0,x.entries.length-1),r=x.entries[t];l.confirmTransitionTo(r,"POP",e,(function(n){n?d({action:"POP",location:r,index:t}):d()}))}var x={length:y.length,action:"POP",location:y[m],index:m,entries:y,createHref:g,push:function(n,t){var r="PUSH",o=p(n,t,v(),x.location);l.confirmTransitionTo(o,r,e,(function(n){if(n){var t=x.index+1,e=x.entries.slice(0);e.length>t?e.splice(t,e.length-t,o):e.push(o),d({action:r,location:o,index:t,entries:e})}}))},replace:function(n,t){var r="REPLACE",o=p(n,t,v(),x.location);l.confirmTransitionTo(o,r,e,(function(n){n&&(x.entries[x.index]=o,d({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(n){var t=x.index+n;return t>=0&&t<x.entries.length},block:function(n){return void 0===n&&(n=!1),l.setPrompt(n)},listen:function(n){return l.appendListener(n)}};return x}},4779:(n,t,e)=>{var r=e(5826);n.exports=function n(t,e,o){return r(e)||(o=e||o,e=[]),o=o||{},t instanceof RegExp?function(n,t){var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(n,t)}(t,e):r(t)?function(t,e,r){for(var o=[],i=0;i<t.length;i++)o.push(n(t[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",f(r)),e)}(t,e,o):function(n,t,e){return p(i(n,e),t,e)}(t,e,o)},n.exports.parse=i,n.exports.compile=function(n,t){return c(i(n,t),t)},n.exports.tokensToFunction=c,n.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(n,t){for(var e,r=[],i=0,a=0,c="",l=t&&t.delimiter||"/";null!=(e=o.exec(n));){var f=e[0],p=e[1],h=e.index;if(c+=n.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=n[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,E="+"===w||"*"===w,P="?"===w||"*"===w,C=e[2]||l,O=y||g;r.push({name:m||i++,prefix:v||"",delimiter:C,optional:P,repeat:E,partial:b,asterisk:!!x,pattern:O?s(O):x?".*":"[^"+u(C)+"]+?"})}}return a<n.length&&(c+=n.substr(a)),c&&r.push(c),r}function a(n){return encodeURI(n).replace(/[\/?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()}))}function c(n,t){for(var e=new Array(n.length),o=0;o<n.length;o++)"object"==typeof n[o]&&(e[o]=new RegExp("^(?:"+n[o].pattern+")$",f(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<n.length;s++){var l=n[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(n){return"%"+n.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(n){return n.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(n){return n.replace(/([=!:$\/()])/g,"\\$1")}function l(n,t){return n.keys=t,n}function f(n){return n&&n.sensitive?"":"i"}function p(n,t,e){r(t)||(e=t||e,t=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<n.length;c++){var s=n[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),t)}},2703:(n,t,e)=>{"use strict";var r=e(414);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},5697:(n,t,e)=>{n.exports=e(2703)()},414:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3727:(n,t,e)=>{"use strict";e.d(t,{VK:()=>l,rU:()=>m});var r=e(6550),o=e(1721),i=e(7294),a=e(7531),c=e(7462),u=e(3366),s=e(8776),l=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).history=(0,a.lX)(t.props),t}return(0,o.Z)(t,n),t.prototype.render=function(){return i.createElement(r.F0,{history:this.history,children:this.props.children})},t}(i.Component);i.Component;var f=function(n,t){return"function"==typeof n?n(t):n},p=function(n,t){return"string"==typeof n?(0,a.ob)(n,null,null,t):n},h=function(n){return n},d=i.forwardRef;void 0===d&&(d=h);var v=d((function(n,t){var e=n.innerRef,r=n.navigate,o=n.onClick,a=(0,u.Z)(n,["innerRef","navigate","onClick"]),s=a.target,l=(0,c.Z)({},a,{onClick:function(n){try{o&&o(n)}catch(t){throw n.preventDefault(),t}n.defaultPrevented||0!==n.button||s&&"_self"!==s||function(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}(n)||(n.preventDefault(),r())}});return l.ref=h!==d&&t||e,i.createElement("a",l)})),m=d((function(n,t){var e=n.component,o=void 0===e?v:e,l=n.replace,m=n.to,y=n.innerRef,g=(0,u.Z)(n,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(n){n||(0,s.Z)(!1);var e=n.history,r=p(f(m,n.location),n.location),u=r?e.createHref(r):"",v=(0,c.Z)({},g,{href:u,navigate:function(){var t=f(m,n.location),r=(0,a.Ep)(n.location)===(0,a.Ep)(p(t));(l||r?e.replace:e.push)(t)}});return h!==d?v.ref=t||y:v.innerRef=y,i.createElement(o,v)}))})),y=function(n){return n},g=i.forwardRef;void 0===g&&(g=y),g((function(n,t){var e=n["aria-current"],o=void 0===e?"page":e,a=n.activeClassName,l=void 0===a?"active":a,h=n.activeStyle,d=n.className,v=n.exact,w=n.isActive,x=n.location,b=n.sensitive,E=n.strict,P=n.style,C=n.to,O=n.innerRef,T=(0,u.Z)(n,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(n){n||(0,s.Z)(!1);var e=x||n.location,a=p(f(C,e),e),u=a.pathname,k=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=k?(0,r.LX)(e.pathname,{path:k,exact:v,sensitive:b,strict:E}):null,R=!!(w?w(A,e):A),_="function"==typeof d?d(R):d,L="function"==typeof P?P(R):P;R&&(_=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.filter((function(n){return n})).join(" ")}(_,l),L=(0,c.Z)({},L,h));var Z=(0,c.Z)({"aria-current":R&&o||null,className:_,style:L,to:a},T);return y!==g?Z.ref=t||O:Z.innerRef=O,i.createElement(m,Z)}))}))},6550:(n,t,e)=>{"use strict";e.d(t,{AW:()=>E,F0:()=>g,LX:()=>b,rs:()=>P,s6:()=>y});var r=e(1721),o=e(7294),i=e(5697),a=e.n(i),c=(e(7531),e(8776)),u=e(7462),s=e(4779),l=e.n(s),f=(e(9864),e(3366),e(8679),1073741823),p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function h(n){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter((function(t){return t!==n}))},get:function(){return n},set:function(e,r){n=e,t.forEach((function(t){return t(n,r)}))}}}var d=o.createContext||function(n,t){var e,i,c,u="__create-react-context-"+((p[c="__global_unique_id__"]=(p[c]||0)+1)+"__"),s=function(n){function e(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).emitter=h(t.props.value),t}(0,r.Z)(e,n);var o=e.prototype;return o.getChildContext=function(){var n;return(n={})[u]=this.emitter,n},o.componentWillReceiveProps=function(n){if(this.props.value!==n.value){var e,r=this.props.value,o=n.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof t?t(r,o):f,0!=(e|=0)&&this.emitter.set(n.value,e))}var i,a},o.render=function(){return this.props.children},e}(o.Component);s.childContextTypes=((e={})[u]=a().object.isRequired,e);var l=function(t){function e(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).observedBits=void 0,n.state={value:n.getValue()},n.onUpdate=function(t,e){0!=((0|n.observedBits)&e)&&n.setState({value:n.getValue()})},n}(0,r.Z)(e,t);var o=e.prototype;return o.componentWillReceiveProps=function(n){var t=n.observedBits;this.observedBits=null==t?f:t},o.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var n=this.props.observedBits;this.observedBits=null==n?f:n},o.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},o.getValue=function(){return this.context[u]?this.context[u].get():n},o.render=function(){return(n=this.props.children,Array.isArray(n)?n[0]:n)(this.state.value);var n},e}(o.Component);return l.contextTypes=((i={})[u]=a().object,i),{Provider:s,Consumer:l}},v=function(n){var t=d();return t.displayName=n,t},m=v("Router-History"),y=v("Router"),g=function(n){function t(t){var e;return(e=n.call(this,t)||this).state={location:t.history.location},e._isMounted=!1,e._pendingLocation=null,t.staticContext||(e.unlisten=t.history.listen((function(n){e._pendingLocation=n}))),e}(0,r.Z)(t,n),t.computeRootMatch=function(n){return{path:"/",url:"/",params:{},isExact:"/"===n}};var e=t.prototype;return e.componentDidMount=function(){var n=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(t){n._isMounted&&n.setState({location:t})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return o.createElement(y.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(m.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.Component);o.Component,o.Component;var w={},x=0;function b(n,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var e=t,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,e){if(!e&&""!==e)return null;if(t)return t;var r=function(n,t){var e=""+t.end+t.strict+t.sensitive,r=w[e]||(w[e]={});if(r[n])return r[n];var o=[],i={regexp:l()(n,o,t),keys:o};return x<1e4&&(r[n]=i,x++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(n);if(!u)return null;var f=u[0],p=u.slice(1),h=n===f;return i&&!h?null:{path:e,url:"/"===e&&""===f?"/":f,isExact:h,params:a.reduce((function(n,t,e){return n[t.name]=p[e],n}),{})}}),null)}var E=function(n){function t(){return n.apply(this,arguments)||this}return(0,r.Z)(t,n),t.prototype.render=function(){var n=this;return o.createElement(y.Consumer,null,(function(t){t||(0,c.Z)(!1);var e=n.props.location||t.location,r=n.props.computedMatch?n.props.computedMatch:n.props.path?b(e.pathname,n.props):t.match,i=(0,u.Z)({},t,{location:e,match:r}),a=n.props,s=a.children,l=a.component,f=a.render;return Array.isArray(s)&&function(n){return 0===o.Children.count(n)}(s)&&(s=null),o.createElement(y.Provider,{value:i},i.match?s?"function"==typeof s?s(i):s:l?o.createElement(l,i):f?f(i):null:"function"==typeof s?s(i):null)}))},t}(o.Component);o.Component;var P=function(n){function t(){return n.apply(this,arguments)||this}return(0,r.Z)(t,n),t.prototype.render=function(){var n=this;return o.createElement(y.Consumer,null,(function(t){t||(0,c.Z)(!1);var e,r,i=n.props.location||t.location;return o.Children.forEach(n.props.children,(function(n){if(null==r&&o.isValidElement(n)){e=n;var a=n.props.path||n.props.from;r=a?b(i.pathname,(0,u.Z)({},n.props,{path:a})):t.match}})),r?o.cloneElement(e,{location:i,computedMatch:r}):null}))},t}(o.Component);o.useContext},1721:(n,t,e)=>{"use strict";function r(n,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},r(n,t)}function o(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,r(n,t)}e.d(t,{Z:()=>o})},3366:(n,t,e)=>{"use strict";function r(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}e.d(t,{Z:()=>r})},8776:(n,t,e)=>{"use strict";e.d(t,{Z:()=>r});function r(n,t){if(!n)throw new Error("Invariant failed")}}}]);