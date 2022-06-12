"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[5470],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return g}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=p(t),g=i,m=s["".concat(u,".").concat(g)]||s[g]||l[g]||a;return t?n.createElement(m,o(o({ref:r},f),{},{components:t})):n.createElement(m,o({ref:r},f))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},956:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],c={sidebar_position:1100},u="`github_archive` Package",p={unversionedId:"reference/registry-config/github-archive-package",id:"reference/registry-config/github-archive-package",title:"`github_archive` Package",description:"The package is downloaded from GitHub Archive.",source:"@site/docs/reference/registry-config/github-archive-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/github-archive-package",permalink:"/docs/reference/registry-config/github-archive-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/github-archive-package.md",tags:[],version:"current",sidebarPosition:1100,frontMatter:{sidebar_position:1100},sidebar:"tutorialSidebar",previous:{title:"`github_content` Package",permalink:"/docs/reference/registry-config/github-content-package"},next:{title:"`go` Package",permalink:"/docs/reference/registry-config/go-package"}},f={},l=[{value:"Required fields",id:"required-fields",level:2}],s={toc:l};function g(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github_archive-package"},(0,a.kt)("inlineCode",{parentName:"h1"},"github_archive")," Package"),(0,a.kt)("p",null,"The package is downloaded from GitHub Archive."),(0,a.kt)("p",null,"e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua-registry/blob/main/pkgs/tfutils/tfenv/registry.yaml"},"tfutils/tfenv")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: github_archive\n    repo_owner: tfutils\n    repo_name: tfenv\n    description: Terraform version manager\n    files:\n      - name: tfenv\n        src: tfenv-{{trimV .Version}}/bin/tfenv\n      - name: terraform\n        src: tfenv-{{trimV .Version}}/bin/terraform\n")),(0,a.kt)("h2",{id:"required-fields"},"Required fields"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type"),(0,a.kt)("li",{parentName:"ul"},"repo_owner"),(0,a.kt)("li",{parentName:"ul"},"repo_name")))}g.isMDXComponent=!0}}]);