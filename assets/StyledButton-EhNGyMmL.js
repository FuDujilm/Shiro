import{r as d,j as n,R as l}from"./index-2q2OBrW7.js";import{c,a as i}from"./helper-DD-oFgKI.js";import{i as u}from"./index-OVDJ2T7o.js";import{m as b}from"./motion-minimal-ZKgXd32B.js";const o=d.forwardRef(({children:e,...t},a)=>n.jsx(b.button,{initial:!0,whileFocus:{scale:1.02},whileHover:{scale:1.02},whileTap:{scale:.95},...t,ref:a,children:e}));o.displayName="MotionButtonBase";const m=d.forwardRef(({className:e,children:t,...a},r)=>n.jsx(o,{ref:r,className:c("inline-flex rounded-full bg-accent p-2 text-center leading-none center hover:opacity-90",e),...a,children:t}));m.displayName="RoundedIconButton";const g=e=>l.createElement("a",e,e.children),s=u({base:"inline-flex select-none cursor-default items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none",variants:{variant:{primary:i("bg-accent text-zinc-100","active:contrast-125 hover:contrast-[1.10]","font-semibold","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed","dark:text-neutral-800"),secondary:i("group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20","disabled:bg-gray-400 disabled:opacity-30 disabled:dark:bg-gray-800 disabled:dark:text-slate-50 disabled:cursor-not-allowed")}}}),w=({variant:e="primary",className:t,href:a,...r})=>a?n.jsx(g,{href:a,className:s({variant:e,className:t}),...r}):n.jsx(o,{className:s({variant:e,className:t}),...r});export{g as L,o as M,w as S};
