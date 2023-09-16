"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7951],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,d=s["".concat(c,".").concat(m)]||s[m]||g[m]||i;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3746:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1250},o="go_build Package",l={unversionedId:"reference/registry-config/go-build-package",id:"reference/registry-config/go-build-package",title:"go_build Package",description:"#2131 #2065",source:"@site/docs/reference/registry-config/go-build-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/go-build-package",permalink:"/docs/reference/registry-config/go-build-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/go-build-package.md",tags:[],version:"current",sidebarPosition:1250,frontMatter:{sidebar_position:1250},sidebar:"tutorialSidebar",previous:{title:"go Package",permalink:"/docs/reference/registry-config/go-package"},next:{title:"go_install Package",permalink:"/docs/reference/registry-config/go-install-package"}},c={},p=[{value:"File parameter",id:"file-parameter",level:2}],u={toc:p},s="wrapper";function g(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go_build-package"},(0,a.kt)("inlineCode",{parentName:"h1"},"go_build")," Package"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/2131"},"#2131")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2065"},"#2065")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo_owner"),": The repository owner name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repo_name"),": The repository name")),(0,a.kt)("p",null,"The repository archive is downloaded from GitHub and the package is built by command ",(0,a.kt)("inlineCode",{parentName:"p"},"go build")," when it is installed.\nSo the command ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," is required.\naqua is a CLI Version Manager, you have to specify the version. Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"go install")," command, you can't specify the head of the default branch."),(0,a.kt)("p",null,"e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/wire"},"https://github.com/google/wire")),(0,a.kt)("p",null,"registry.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - type: go_build\n    repo_owner: google\n    repo_name: wire\n    description: Compile-time Dependency Injection for Go\n    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: wire-{{trimV .Version}}\n")),(0,a.kt)("p",null,"aqua.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - name: local\n    type: local\n    path: registry.yaml\npackages:\n  - name: google/wire@v0.5.0\n    registry: local\n")),(0,a.kt)("h2",{id:"file-parameter"},"File parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    files:\n      - name: wire\n        src: ./cmd/wire\n        dir: wire-{{trimV .Version}}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name: command name"),(0,a.kt)("li",{parentName:"ul"},"dir: Directory path where ",(0,a.kt)("inlineCode",{parentName:"li"},"go build")," is run"),(0,a.kt)("li",{parentName:"ul"},"src: go build's target path")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${AQUA_ROOT_DIR}/pkgs/go_build/github.com/google/wire/v0.5.0/\n  bin/wire\n  src/ # GitHub Repository Archive\n    wire-0.5.0/ # `go build` is run on this directory\n      cmd/wire # build target\n")))}g.isMDXComponent=!0}}]);