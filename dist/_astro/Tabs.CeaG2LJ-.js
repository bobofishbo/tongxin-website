import{j as l}from"./jsx-runtime.BqEXxvvU.js";import{m}from"./marked.esm.B2Hk75Mh.js";import{r as n}from"./index.DHQ29l5n.js";m.use({mangle:!1,headerIds:!1});const k=({children:f})=>{const[a,r]=n.useState(0),[i,u]=n.useState(!1),c=n.useRef([]);n.useEffect(()=>{i?c.current[a]?.focus():u(!0)},[a]);const t=Array.from(f.props.value.matchAll(/<div\s+data-name="([^"]+)"[^>]*>(.*?)<\/div>/gs),e=>({name:e[1],children:e[0]})),d=(e,s)=>{e.key==="Enter"||e.key===" "?r(s):e.key==="ArrowRight"?r((a+1)%t.length):e.key==="ArrowLeft"&&r((a-1+t.length)%t.length)};return l.jsxs("div",{className:"tab",children:[l.jsx("ul",{className:"tab-nav",children:t.map((e,s)=>l.jsx("li",{className:`tab-nav-item ${s===a&&"active"}`,role:"tab",tabIndex:s===a?0:-1,onKeyDown:o=>d(o,s),onClick:()=>r(s),ref:o=>c.current[s]=o,children:e.name},s))}),t.map((e,s)=>l.jsx("div",{className:a===s?"tab-content block px-5":"hidden",dangerouslySetInnerHTML:{__html:m.parse(e.children)}},s))]})};export{k as default};
