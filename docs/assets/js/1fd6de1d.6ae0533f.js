"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[40],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||r;return t?n.createElement(d,i(i({ref:a},p),{},{components:t})):n.createElement(d,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=f;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3244:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={sidebar_position:1},u="Share aqua configuration for teams and organizations",c={unversionedId:"tutorial-extras/team-config",id:"tutorial-extras/team-config",isDocsHomePage:!1,title:"Share aqua configuration for teams and organizations",description:"#321 #322",source:"@site/docs/tutorial-extras/team-config.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/team-config",permalink:"/docs/tutorial-extras/team-config",editUrl:"https://github.com/aquaproj/aquaproj.github.io/docs/tutorial-extras/team-config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Global Configuration",permalink:"/docs/tutorial-basics/global-config"},next:{title:"Install",permalink:"/docs/reference/install"}},p=[{value:"How to share aqua configuration for teams and organizations",id:"how-to-share-aqua-configuration-for-teams-and-organizations",children:[],level:2}],s={toc:p};function f(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"share-aqua-configuration-for-teams-and-organizations"},"Share aqua configuration for teams and organizations"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua/issues/321"},"#321")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua/pull/322"},"#322")),(0,r.kt)("p",null,"aqua reads configuration from the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG")," is configuration file paths separated with semicolons ",(0,r.kt)("inlineCode",{parentName:"p"},":"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml\n")),(0,r.kt)("p",null,"The priority of configuration is the following."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"configuration file specified by ",(0,r.kt)("inlineCode",{parentName:"li"},"-c")," option or configuration file which found from the current directory to the root directory"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$AQUA_GLOBAL_CONFIG")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$AQUA_ROOT_DIR/global/[.]aqua.y[a]ml")," (",(0,r.kt)("inlineCode",{parentName:"li"},"~/.aqua/global/[.]aqua.y[a]ml"),")")),(0,r.kt)("p",null,"The option ",(0,r.kt)("inlineCode",{parentName:"p"},"--all (-a)")," is added to the command ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua install"),".\nBy default ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua install")," ignores ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_GLOBAL_CONFIG")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/global/[.]aqua.y[a]ml")," (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aqua/global/[.]aqua.y[a]ml"),").\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"--all (-a)")," is set, aqua installs all packages including ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_GLOBAL_CONFIG")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$AQUA_ROOT_DIR/global/[.]aqua.y[a]ml")," (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aqua/global/[.]aqua.y[a]ml"),")."),(0,r.kt)("h2",{id:"how-to-share-aqua-configuration-for-teams-and-organizations"},"How to share aqua configuration for teams and organizations"),(0,r.kt)("p",null,"I'll introduce one idea to share aqua configuration for teams and organizations."),(0,r.kt)("p",null,"Let's create the repository ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua-config")," in your GitHub Organization, and add aqua configuration files for your teams and organization into the repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aqua-config/\n  all.yaml # aqua configuration for all developers in your organization\n  sre.yaml # aqua configuration for your SRE team\n")),(0,r.kt)("p",null,"Then checkout the repository and set the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_GLOBAL_CONFIG"),".\nIf you belong to SRE team,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/sre.yaml:/home/foo/aqua-config/all.yaml\n")),(0,r.kt)("p",null,"Otherwise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_GLOBAL_CONFIG=/home/foo/aqua-config/all.yaml\n")))}f.isMDXComponent=!0}}]);