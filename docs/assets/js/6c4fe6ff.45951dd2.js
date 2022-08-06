"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[6330],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8570:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],u={sidebar_position:447},l="Create Private Registries",s={unversionedId:"reference/create-private-registry",id:"reference/create-private-registry",title:"Create Private Registries",description:"If your GitHub organization has in-house tools,",source:"@site/docs/reference/create-private-registry.md",sourceDirName:"reference",slug:"/reference/create-private-registry",permalink:"/docs/reference/create-private-registry",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/create-private-registry.md",tags:[],version:"current",sidebarPosition:447,frontMatter:{sidebar_position:447},sidebar:"tutorialSidebar",previous:{title:"Registry Style Guide",permalink:"/docs/reference/registry-style-guide"},next:{title:"Declarative vs Imperative",permalink:"/docs/reference/declarative-imperative"}},p={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Prepare a GitHub App or GitHub Personal Access Token for CI",id:"prepare-a-github-app-or-github-personal-access-token-for-ci",level:2},{value:"Renovate",id:"renovate",level:2},{value:"Automerge Renovate Pull Requests",id:"automerge-renovate-pull-requests",level:3}],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-private-registries"},"Create Private Registries"),(0,o.kt)("p",null,"If your GitHub organization has in-house tools,\nit is useful to create a private registry in your organization."),(0,o.kt)("p",null,"aqua provides the framework to build private registries."),(0,o.kt)("p",null,"The framework has two components."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/registry-tool"},"registry-tool"),": CLI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/template-private-aqua-registry"},"template repository"))),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/template-private-aqua-registry/generate"},"Create a repository from the template repository")),(0,o.kt)("li",{parentName:"ol"},"Replace placeholders ",(0,o.kt)("inlineCode",{parentName:"li"},"<REPO_OWNER>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<REPO_NAME>")),(0,o.kt)("li",{parentName:"ol"},"Prepare a GitHub App or GitHub Personal Access Token for CI"),(0,o.kt)("li",{parentName:"ol"},"(Optional) Install Renovate App in the repository")),(0,o.kt)("h2",{id:"prepare-a-github-app-or-github-personal-access-token-for-ci"},"Prepare a GitHub App or GitHub Personal Access Token for CI"),(0,o.kt)("p",null,"To test the registry in CI, GitHub Access Token is required to access private repositories."),(0,o.kt)("p",null,"We recommend to create a GitHub App and install it to private repositories.\nYou can also use GitHub Personal Access Token instead of GitHub App."),(0,o.kt)("h2",{id:"renovate"},"Renovate"),(0,o.kt)("p",null,"You can test tool updates in CI using Renovate.\nPlease install Renovate in repositories."),(0,o.kt)("h3",{id:"automerge-renovate-pull-requests"},"Automerge Renovate Pull Requests"),(0,o.kt)("p",null,"If you would like to automerge Renovate Pull Requests, please enable automerge."),(0,o.kt)("p",null,"ref. ",(0,o.kt)("a",{parentName:"p",href:"https://devs.quipper.com/2022/03/29/automate-handling-a-number-of-pull-requests-by-renovate-in-terraform-monorepo.html"},"2022-03-29 Automate handling a number of Pull Requests by Renovate in Terraform Monorepo")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable Automerge",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add the job ",(0,o.kt)("inlineCode",{parentName:"li"},"status-check")," to the default branch's branch protection rule's ",(0,o.kt)("inlineCode",{parentName:"li"},"Status checks that are required.")))),(0,o.kt)("li",{parentName:"ul"},"Enable platformAutomerge")))}f.isMDXComponent=!0}}]);