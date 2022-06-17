"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7857,6923],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){return function(t){var r=p(t.components);return n.createElement(e,i({},t,{components:r}))}},p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16319:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>m});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),s=r(44996),o=["components"],u={},l=void 0,c={type:"mdx",permalink:"/docs/plugins/databases/overview",source:"@site/src/embedded-pages/docs/plugins/databases/overview.mdx"},p=[{value:"Plugin functionality",id:"plugin-functionality",children:[{value:"Examine table structure",id:"examine-table-structure",children:[],level:3},{value:"Execute queries",id:"execute-queries",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The Databases plugin provides Developers with read-write access to databases."),(0,i.mdx)("h2",{id:"plugin-functionality"},"Plugin functionality"),(0,i.mdx)("p",null,"The plugin provides the following functionality:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Browse table data."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#examine-table-structure"},"Examine table structure"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#execute-queries"},"Execute queries"),"."),(0,i.mdx)("li",{parentName:"ul"},"Mark queries as favorites."),(0,i.mdx)("li",{parentName:"ul"},"Read the logs of previously executed queries.")),(0,i.mdx)("h3",{id:"examine-table-structure"},"Examine table structure"),(0,i.mdx)("p",null,"The following screenshot shows the structure of the 'ranking' table."),(0,i.mdx)("img",{alt:"Databases Plugin 1",src:(0,s.default)("img/databases-plugin-1.png")}),(0,i.mdx)("h3",{id:"execute-queries"},"Execute queries"),(0,i.mdx)("p",null,"The following screenshot shows the recordset resulting from execution of the 'statusranking' query."),(0,i.mdx)("img",{alt:"Databases Plugin 2",src:(0,s.default)("img/databases-plugin-2.png")}))}m.isMDXComponent=!0},13919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>s});var n=r(52263),a=r(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,o=void 0!==s&&s,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+c:c}(i,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},54946:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>m});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),s=r(16319),o=["components"],u={id:"databases",title:"Databases Plugin",sidebar_label:"Databases",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/overview.mdx"},l=void 0,c={unversionedId:"features/plugins/databases",id:"features/plugins/databases",isDocsHomePage:!1,title:"Databases Plugin",description:"\u2192 See setup instructions for the Databases plugin",source:"@site/../docs/features/plugins/databases.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/databases",permalink:"/docs/features/plugins/databases",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"databases",title:"Databases Plugin",sidebar_label:"Databases",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/databases/docs/overview.mdx"},sidebar:"main",previous:{title:"Crash Reporter",permalink:"/docs/features/plugins/crash-reporter"},next:{title:"Logs",permalink:"/docs/features/plugins/device-logs"}},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"\u2192 ",(0,i.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/databases"},"See setup instructions for the Databases plugin")),(0,i.mdx)(s.default,{mdxType:"Article"}))}m.isMDXComponent=!0}}]);