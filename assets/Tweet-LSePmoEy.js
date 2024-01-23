import{_ as m,j as e}from"./index-2q2OBrW7.js";import{I as a}from"./Gallery-zzCHNjwo.js";import"./Divider-k72C6mVS.js";import"./helper-DD-oFgKI.js";import"./store-9afvYnvD.js";import"./index-OVDJ2T7o.js";import"./env-y9k74Ds6.js";const o={AvatarImg:t=>e.jsx(a,{...t,alt:"avatar",className:"!m-0"}),MediaImg:t=>e.jsx(a,{...t,fill:!0,unoptimized:!0,alt:"tweet-media",className:"!m-0 object-cover"})};async function j({id:t}){const{Tweet:r}=await m(()=>import("./index.client-m2MkgpRv.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return e.jsx("span",{className:"flex justify-center",children:e.jsx(r,{id:t,components:o})})}export{j as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index.client-m2MkgpRv.js","./index-2q2OBrW7.js","./index-YWpo0GQ6.css","./index-Ro6URL4g.js","./helper-DD-oFgKI.js","./index-75n5Qq-a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
