(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{5837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MyRequests",function(){return n(8973)}])},8973:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return s}});var i=n(5893),o=n(4211),s=!0;t.default=e=>{let{url:t}=e;return(0,i.jsx)(o.Z,{children:(0,i.jsxs)("div",{className:"grid justify-center items-center",children:[(0,i.jsx)("h1",{className:"text-3xl font-extrabold",children:"My Requests"}),(0,i.jsx)("div",{children:(0,i.jsxs)("form",{onSubmit:async e=>{var n;e.preventDefault();let i=null===(n=e.target.file.files)||void 0===n?void 0:n[0];if(!i){console.error("No file selected");return}let o=encodeURIComponent(i.name),s=await fetch(t,{method:"PUT",headers:{"Content-Type":i.type,"Content-Disposition":"attachment; filename*=UTF-8''".concat(o)},body:i});if(!s.ok){console.error("Upload failed:",s.statusText);return}let l=s.headers.get("Location")||t.split("?")[0];window.location.href=l,console.log("Upload successful:",l)},children:[(0,i.jsx)("input",{name:"file",type:"file",accept:"image/jpeg, image/png, video/mp4"}),(0,i.jsx)("button",{type:"submit",children:"Upload"})]})})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5837)}),_N_E=e.O()}]);