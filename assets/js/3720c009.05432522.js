"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84787],{55092:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(62540);r(63696);var a=r(11750),l=r(37554),s=r(12653),c=r(79618),i=r(38111),o=r(3113),u=r(37425);function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function j({title:e}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.be,{title:e}),(0,n.jsx)(o.A,{tag:"doc_tags_list"})]})}function f({tags:e,title:t}){return(0,n.jsx)(l.e3,{className:(0,a.A)(s.G.page.docsTagsListPage),children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,n.jsx)(u.A,{as:"h1",children:t}),(0,n.jsx)(i.A,{tags:e})]})})})})}function p(e){let t=(0,c.b)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j,b(g({},e),{title:t})),(0,n.jsx)(f,b(g({},e),{title:t}))]})}},82499:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(62540);r(63696);var a=r(11750),l=r(36372);let s={tag:"tag_Nd8t",tagRegular:"tagRegular_TiLs",tagWithCount:"tagWithCount_AQg7"};function c({permalink:e,label:t,count:r,description:c}){return(0,n.jsxs)(l.A,{href:e,title:c,className:(0,a.A)(s.tag,r?s.tagWithCount:s.tagRegular),children:[t,r&&(0,n.jsx)("span",{children:r})]})}},38111:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(62540);r(63696);var a=r(79618),l=r(82499),s=r(37425);function c({letterEntry:e}){return(0,n.jsxs)("article",{children:[(0,n.jsx)(s.A,{as:"h2",id:e.letter,children:e.letter}),(0,n.jsx)("ul",{className:"padding--none",children:e.tags.map(e=>(0,n.jsx)("li",{className:"tag_SyQ5",children:(0,n.jsx)(l.A,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},e))},e.permalink))}),(0,n.jsx)("hr",{})]})}function i({tags:e}){let t=(0,a.Q)(e);return(0,n.jsx)("section",{className:"margin-vert--lg",children:t.map(e=>(0,n.jsx)(c,{letterEntry:e},e.letter))})}},79618:(e,t,r)=>{r.d(t,{Q:()=>l,b:()=>a});var n=r(81912);let a=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){let t={};return Object.values(e).forEach(e=>{var r;let n=e.label[0].toUpperCase();null!==(r=t[n])&&void 0!==r||(t[n]=[]),t[n].push(e)}),Object.entries(t).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>({letter:e,tags:t.sort((e,t)=>e.label.localeCompare(t.label))}))}}}]);