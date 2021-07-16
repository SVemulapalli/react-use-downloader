/*! For license information please see main.833ab6d9.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-use-downloader-example"]=this["webpackJsonpreact-use-downloader-example"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var r=n(10),o=n.n(r),a=n(54),c=n(60),i=n(56),l=n(57),s=n(61),u=n(58),d=n(59),b=n(0);function f(e,t,n,r){return new(n||(n=Promise))((function(o,a){function c(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}l((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var j=function(e){var t=e.setSize,n=e.setControllerCallback,r=e.setPercentageCallback,o=e.setErrorCallback;return function(e){if(!e.ok)throw Error(e.status+" "+e.type+" "+e.statusText);if(!e.body)throw Error("ReadableStream not yet supported in this browser.");var a=e.body,c=e.headers.get("content-encoding"),i=e.headers.get(c?"x-file-size":"content-length"),l=parseInt(i||"0",10);t((function(){return l}));var s=0,u=new ReadableStream({start:function(e){n(e);var t=a.getReader();return function n(){return f(this,void 0,void 0,(function(){return h(this,(function(a){return[2,t.read().then((function(t){var o=t.done,a=t.value;return o?e.close():(s+=(null==a?void 0:a.byteLength)||0,a&&e.enqueue(a),r({loaded:s,total:l}),n())})).catch((function(n){return o(n),t.cancel("Cancelled"),e.error(n)}))]}))}))}()}});return new Response(u)}};var p=function(){var e=this,t=Object({NODE_ENV:"production",PUBLIC_URL:"/react-use-downloader",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DEBUG_MODE,n=Object(b.useState)(0),r=n[0],o=n[1],a=Object(b.useState)(0),c=a[0],i=a[1],l=Object(b.useState)(0),s=l[0],u=l[1],d=Object(b.useState)(null),p=d[0],v=d[1],O=Object(b.useState)(!1),D=O[0],m=O[1],w=Object(b.useRef)(null),x=Object(b.useCallback)((function(e){var t=e.loaded,n=e.total,r=Math.round(t/n*100);i((function(){return r}))}),[]),y=Object(b.useCallback)((function(e){var t={"Failed to execute 'enqueue' on 'ReadableStreamDefaultController': Cannot enqueue a chunk into an errored readable stream":"Download canceled"};v((function(){return{errorMessage:t[e.message]?t[e.message]:e.message}}))}),[]),g=Object(b.useCallback)((function(e){w.current=e}),[]),S=Object(b.useCallback)((function(){w.current&&w.current.error()}),[]),C=Object(b.useCallback)((function(){g(null),o((function(){return 0})),i((function(){return 0})),u((function(){return 0})),m((function(){return!1}))}),[g]),B=Object(b.useCallback)((function(n,r){return f(e,void 0,void 0,(function(){var e,a;return h(this,(function(c){return D?[2,null]:(C(),v((function(){return null})),m((function(){return!0})),e=setInterval((function(){return o((function(e){return e+1}))}),t?1:1e3),a=j({setSize:u,setControllerCallback:g,setPercentageCallback:x,setErrorCallback:y}),[2,fetch(n,{method:"GET"}).then(a).then((function(e){return e.blob()})).then((function(e){return function(e,t,n){var r=new Blob([e],{type:n||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)return window.navigator.msSaveBlob(r,t);var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(r):window.webkitURL.createObjectURL(r),a=document.createElement("a");return a.style.display="none",a.href=o,a.setAttribute("download",t),void 0===a.download&&a.setAttribute("target","_blank"),document.body.appendChild(a),a.click(),setTimeout((function(){document.body.removeChild(a),window.URL.revokeObjectURL(o)}),200)}(e,r)})).then((function(){return C(),clearInterval(e)})).catch((function(t){return C(),v((function(e){return"Failed to fetch"!==t.message?{errorMessage:t.message}:e})),clearInterval(e)}))])}))}))}),[D,C,t,g,x,y]);return Object(b.useMemo)((function(){return{elapsed:r,percentage:c,size:s,download:B,cancel:S,error:p,isInProgress:D}}),[r,c,s,B,S,p,D])},v=n(3),O=Object(a.a)({root:{maxWidth:390,margin:"4rem auto"},list:{padding:"0 1.5rem"}});function D(){var e=O(),t=p(),n=t.size,r=t.elapsed,o=t.percentage,a=t.download,b=t.cancel,f=t.error,h=t.isInProgress;return Object(v.jsxs)(c.a,{className:e.root,elevation:2,children:[Object(v.jsxs)(i.a,{children:[Object(v.jsx)(l.a,{gutterBottom:!0,variant:"h5",component:"h1",children:"react-use-downloader"}),Object(v.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"h2",paragraph:!0,children:"Creates a download handler function and gives progress information"}),Object(v.jsx)(s.a,{variant:"determinate",value:o})]}),Object(v.jsx)(i.a,{children:Object(v.jsxs)("ul",{className:e.list,children:[Object(v.jsx)("li",{children:Object(v.jsxs)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:["size: ",Object(v.jsxs)("b",{children:[n," bytes"]})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:["elapsed: ",Object(v.jsxs)("b",{children:[r,"s"]})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:["percentage: ",Object(v.jsxs)("b",{children:[o,"%"]})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:["error: ",Object(v.jsx)("b",{children:JSON.stringify(f)})]})}),Object(v.jsx)("li",{children:Object(v.jsxs)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:["isInProgress: ",Object(v.jsx)("b",{children:h.toString()})]})})]})}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)(d.a,{disabled:h,size:"small",color:"primary",onClick:function(){return a("https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg","beautiful-carpathia.jpg")},children:"Download file"}),Object(v.jsx)(d.a,{disabled:!h,size:"small",color:"primary",onClick:function(){return b()},children:"Cancel the download"})]})]})}o.a.render(Object(v.jsx)(D,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.833ab6d9.chunk.js.map