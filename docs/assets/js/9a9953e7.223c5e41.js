"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[546],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:200},s="Configuration",p={unversionedId:"reference/config",id:"reference/config",title:"Configuration",description:"e.g. suzuki-shunsuke/my-aqua-config",source:"@site/docs/reference/config.md",sourceDirName:"reference",slug:"/reference/config",permalink:"/docs/reference/config",editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/config.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Registry",permalink:"/docs/reference/registry"},next:{title:"Registry Configuration",permalink:"/docs/reference/registry-config"}},u=[{value:"Configuration File Path",id:"configuration-file-path",children:[],level:2},{value:"Environment variables",id:"environment-variables",children:[],level:2},{value:"Configuration attributes",id:"configuration-attributes",children:[],level:2},{value:"<code>registries</code>",id:"registries",children:[{value:"<code>standard</code> registry",id:"standard-registry",children:[],level:3},{value:"<code>local</code> registry",id:"local-registry",children:[],level:3},{value:"<code>github_content</code> registry",id:"github_content-registry",children:[],level:3}],level:2},{value:"<code>packages</code>",id:"packages",children:[],level:2},{value:"<code>inline_registry</code>",id:"inline_registry",children:[],level:2}],c={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/my-aqua-config/blob/main/aqua.yaml"},"suzuki-shunsuke/my-aqua-config")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.11.2 # renovate: depName=aquaproj/aqua-registry\n\npackages:\n- name: helm/helm@v3.7.0\n- name: golangci/golangci-lint@v1.42.1\n")),(0,i.kt)("h2",{id:"configuration-file-path"},"Configuration File Path"),(0,i.kt)("p",null,"aqua searches the following configuration files."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"--config (-c)")," option (environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_CONFIG")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\\.?aqua\\.ya?ml")," from the current directory to the root directory. If configuration files are found in the multiple directories, aqua read all of them"),(0,i.kt)("li",{parentName:"ol"},"global configuration: environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_GLOBAL_CONFIG")),(0,i.kt)("li",{parentName:"ol"},"global configuration: ",(0,i.kt)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/global/\\.?aqua\\.ya?ml"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aqua exec")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua install -a")," reads global configuration files, but otherwise aqua doesn't read global configuration files."),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_LOG_LEVEL"),": (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"info"),") Log level"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_CONFIG"),": configuration file path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_GLOBAL_CONFIG"),": global configuration file paths separated by semicolon ",(0,i.kt)("inlineCode",{parentName:"li"},":")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_ROOT_DIR"),": (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.aqua"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_MAX_PARALLELISM"),": (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"5"),") The maximum number of packages which are installed in parallel at the same time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AQUA_GITHUB_TOKEN"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN"),": GitHub Access Token. This is required to install private repository's package")),(0,i.kt)("h2",{id:"configuration-attributes"},"Configuration attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#registries"},"registries"),": The list of registries"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#packages"},"packages"),": The list of installed packages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inline_registry"},"inline_registry"),": The inline registry")),(0,i.kt)("h2",{id:"registries"},(0,i.kt)("inlineCode",{parentName:"h2"},"registries")),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.11.2 # renovate: depName=aquaproj/aqua-registry\n")),(0,i.kt)("p",null,"Registry types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#standard-registry"},"standard"),": aqua's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry"},"Standard Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#local-registry"},"local"),": local file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#github_content-registry"},"github_content"),": Get the registry by GitHub Repository Content API")),(0,i.kt)("h3",{id:"standard-registry"},(0,i.kt)("inlineCode",{parentName:"h3"},"standard")," registry"),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.11.2 # renovate: depName=aquaproj/aqua-registry\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref"),": the Registry Version. Please check ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/releases"},"Releases"))),(0,i.kt)("p",null,"This is equivalent to the following definition."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: standard\n  type: github_content\n  repo_owner: aquaproj\n  repo_name: aqua-registry\n  ref: v0.11.2 # renovate: depName=aquaproj/aqua-registry\n  path: registry.yaml\n")),(0,i.kt)("h3",{id:"local-registry"},(0,i.kt)("inlineCode",{parentName:"h3"},"local")," registry"),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: local\n  type: local\n  path: registry.yaml\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": Registry name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": The file path. Either absolute path or relative path from ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua.yaml"))),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"registry-config"},"Configuration (registry.yaml)"),"."),(0,i.kt)("h3",{id:"github_content-registry"},(0,i.kt)("inlineCode",{parentName:"h3"},"github_content")," registry"),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- name: foo\n  type: github_content\n  repo_owner: aquaproj\n  repo_name: aqua-registry\n  ref: v0.11.2 # renovate: depName=aquaproj/aqua-registry\n  path: registry.yaml\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": Registry Name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo_owner"),": Repository Owner name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repo_name"),": Repository name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ref"),": Repository tag or revision"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": file path from the repository root directory")),(0,i.kt)("h2",{id:"packages"},(0,i.kt)("inlineCode",{parentName:"h2"},"packages")),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n- name: helm/helm\n  version: v3.7.0 # renovate: depName=helm/helm\n- name: golangci/golangci-lint@v1.42.1\n  registry: standard\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": (string, optional) package name. If ",(0,i.kt)("inlineCode",{parentName:"li"},"import")," isn't set, this is required",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"format: ",(0,i.kt)("inlineCode",{parentName:"li"},"<package name>[@<package version>]")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"registry"),": (string, optional) registry name",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"standard")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": (string, optional) package version"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"import"),": (string, optional) glob pattern of package files. This is relative path from the configuration file. This is parsed with ",(0,i.kt)("a",{parentName:"li",href:"https://pkg.go.dev/path/filepath#Glob"},"filepath.Glob"),". Please see ",(0,i.kt)("a",{parentName:"li",href:"../tutorial-extras/split-config"},"Split the list of packages")," too")),(0,i.kt)("p",null,"The following two configuration is equivalent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint@v1.42.1\n  registry: standard\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint\n  registry: standard\n  version: v1.42.1\n")),(0,i.kt)("p",null,"When you want to update the package with Renovate,\nthe first style is better because you don't have to write code comments for Renovate's Regex Manager."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint\n  registry: standard\n  version: v1.43.0 # renovate: depName=golangci/golangci-lint\n")),(0,i.kt)("p",null,"If the package name in the code comment is wrong, the package version is changed wrongly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: golangci/golangci-lint\n  registry: standard\n  # depName is wrong!\n  version: v1.42.1 # renovate: depName=helm/helm\n")),(0,i.kt)("p",null,"On the other hand, you can prevent such a mis configuration by the first style."),(0,i.kt)("h2",{id:"inline_registry"},(0,i.kt)("inlineCode",{parentName:"h2"},"inline_registry")),(0,i.kt)("p",null,"e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"inline_registry:\n  packages:\n  - type: github_release\n    repo_owner: suzuki-shunsuke\n    repo_name: cmdx\n    asset: 'cmdx_{{trimV .Version}}_{{.OS}}_{{.Arch}}.tar.gz'\n")),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"registry-config"},"Configuration (registry.yaml)"),"."))}g.isMDXComponent=!0}}]);