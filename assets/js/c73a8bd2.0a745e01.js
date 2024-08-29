"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95417],{15995:(e,r,n)=>{n.d(r,{A:()=>i});var t=n(62540);n(63696);var a=n(11750);function i({children:e,hidden:r,className:n}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)("tabItem_pnkT",n),hidden:r,children:e})}},27446:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(62540),a=n(63696),i=n(11750),s=n(7846),o=n(49519),l=n(96439),d=n(19739),c=n(66904),u=n(79244);function m(e){var r,n;return null!==(n=null===(r=a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==n?n:[]}function h({value:e,tabValues:r}){return r.some(r=>r.value===e)}var p=n(10709);function f(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}function g(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}),e}function b({className:e,block:r,selectedValue:n,selectValue:a,tabValues:o}){let l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{let r=e.currentTarget,t=o[l.indexOf(r)].value;t!==n&&(d(r),a(t))},u=e=>{var r,n;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let n=l.indexOf(e.currentTarget)+1;t=null!==(r=l[n])&&void 0!==r?r:l[0];break}case"ArrowLeft":{let r=l.indexOf(e.currentTarget)-1;t=null!==(n=l[r])&&void 0!==n?n:l[l.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},e),children:o.map(({value:e,label:r,attributes:a})=>(0,t.jsx)("li",g(f({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:e=>l.push(e),onKeyDown:u,onClick:c},a),{className:(0,i.A)("tabs__item","tabItem_AQgk",null==a?void 0:a.className,{"tabs__item--active":n===e}),children:null!=r?r:e}),e))})}function j({lazy:e,children:r,selectedValue:n}){let s=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=s.find(e=>e.props.value===n);return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))})}function x(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:t}=e,i=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=null!=r?r:m(n).map(({props:{value:e,label:r,attributes:n,default:t}})=>({value:e,label:r,attributes:n,default:t}));return!function(e){let r=(0,c.XI)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[s,p]=(0,a.useState)(()=>(function({defaultValue:e,tabValues:r}){var n;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!h({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(n=r.find(e=>e.default))&&void 0!==n?n:r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:r,tabValues:i})),[f,g]=function({queryString:e=!1,groupId:r}){let n=(0,o.W6)(),t=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,d.aZ)(t),(0,a.useCallback)(e=>{var r,a;if(!t)return;let i=new URLSearchParams(n.location.search);i.set(t,e),n.replace((r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},n.location),a=a={search:i.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}),r))},[t,n])]}({queryString:n,groupId:t}),[b,j]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[n,t]=(0,u.Dv)(r);return[n,(0,a.useCallback)(e=>{r&&t.set(e)},[r,t])]}({groupId:t}),x=(()=>{let e=null!=f?f:b;return h({value:e,tabValues:i})?e:null})();return(0,l.A)(()=>{x&&p(x)},[x]),{selectedValue:s,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error(`Can't select invalid tab value=${e}`);p(e),g(e),j(e)},[g,j,i]),tabValues:i}}(e);return(0,t.jsxs)("div",{className:(0,i.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(b,f({},r,e)),(0,t.jsx)(j,f({},r,e))]})}function v(e){let r=(0,p.A)();return(0,t.jsx)(x,g(f({},e),{children:m(e.children)}),String(r))}},76419:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=n(62540),a=n(43023),i=n(27446),s=n(15995);let o={id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},l="Diagrams",d={id:"guides/markdown-features/diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",source:"@site/docs/guides/markdown-features/markdown-features-diagrams.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/diagrams",permalink:"/docs/markdown-features/diagrams",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-diagrams.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1724941734e3,frontMatter:{id:"diagrams",title:"Diagrams",description:"Writing diagrams with Mermaid",slug:"/markdown-features/diagrams"},sidebar:"docs",previous:{title:"Math Equations",permalink:"/docs/markdown-features/math-equations"},next:{title:"Head metadata",permalink:"/docs/markdown-features/head-metadata"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Theming",id:"theming",level:2},{value:"Mermaid Config",id:"configuration",level:2},{value:"Dynamic Mermaid Component",id:"component",level:2}];function m(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"diagrams",children:"Diagrams"})}),"\n",(0,t.jsxs)(r.p,{children:["Diagrams can be rendered using ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/",children:"Mermaid"})," in a code block."]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,t.jsx)(s.A,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,t.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["Enable Mermaid functionality by adding plugin ",(0,t.jsx)(r.code,{children:"@docusaurus/theme-mermaid"})," and setting ",(0,t.jsx)(r.code,{children:"markdown.mermaid"})," to ",(0,t.jsx)(r.code,{children:"true"})," in your ",(0,t.jsx)(r.code,{children:"docusaurus.config.js"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  markdown: {\n    mermaid: true,\n  },\n  themes: ['@docusaurus/theme-mermaid'],\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["Add a code block with language ",(0,t.jsx)(r.code,{children:"mermaid"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-md",metastring:'title="Example Mermaid diagram"',children:"```mermaid\ngraph TD;\n    A-->B;\n    A-->C;\n    B-->D;\n    C-->D;\n```\n"})}),"\n",(0,t.jsx)(r.mermaid,{value:"graph TD;\n    A-->B;\n    A-->C;\n    B-->D;\n    C-->D;"}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/#/./n00b-syntaxReference",children:"Mermaid syntax documentation"})," for more information on the Mermaid syntax."]}),"\n",(0,t.jsx)(r.h2,{id:"theming",children:"Theming"}),"\n",(0,t.jsxs)(r.p,{children:["The diagram dark and light themes can be changed by setting ",(0,t.jsx)(r.code,{children:"mermaid.theme"})," values in the ",(0,t.jsx)(r.code,{children:"themeConfig"})," in your ",(0,t.jsx)(r.code,{children:"docusaurus.config.js"}),". You can set themes for both light and dark mode."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      theme: {light: 'neutral', dark: 'forest'},\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/#/theming",children:"Mermaid theme documentation"})," for more information on theming Mermaid diagrams."]}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Mermaid Config"}),"\n",(0,t.jsxs)(r.p,{children:["Options in ",(0,t.jsx)(r.code,{children:"mermaid.options"})," will be passed directly to ",(0,t.jsx)(r.code,{children:"mermaid.initialize"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    mermaid: {\n      options: {\n        maxTextSize: 50,\n      },\n    },\n  },\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://mermaid-js.github.io/mermaid/#/./Setup?id=configuration",children:"Mermaid config documentation"})," and the ",(0,t.jsx)(r.a,{href:"https://github.com/mermaid-js/mermaid/blob/master/packages/mermaid/src/config.type.ts",children:"Mermaid config types"})," for the available config options."]}),"\n",(0,t.jsx)(r.h2,{id:"component",children:"Dynamic Mermaid Component"}),"\n",(0,t.jsxs)(r.p,{children:["To generate dynamic diagrams, you can use the ",(0,t.jsx)(r.code,{children:"Mermaid"})," component:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-mdx",metastring:'title="Example of dynamic Mermaid component"',children:"import Mermaid from '@theme/Mermaid';\n\n<Mermaid\n  value={`graph TD;\n    A-->B;\n    A-->C;\n    B-->D;\n    C-->D;`}\n/>\n"})})]})}function h(e={}){let{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},43023:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>o});var t=n(63696);let a={},i=t.createContext(a);function s(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);