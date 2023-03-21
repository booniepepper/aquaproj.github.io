"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[8980],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return t?n.createElement(k,l(l({ref:a},p),{},{components:t})):n.createElement(k,l({ref:a},p))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9448:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:700},l="Trouble Shooting",s={unversionedId:"trouble-shooting",id:"trouble-shooting",title:"Trouble Shooting",description:"Use the latest aqua and aqua-registry",source:"@site/docs/trouble-shooting.md",sourceDirName:".",slug:"/trouble-shooting",permalink:"/docs/trouble-shooting",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/trouble-shooting.md",tags:[],version:"current",sidebarPosition:700,frontMatter:{sidebar_position:700},sidebar:"tutorialSidebar",previous:{title:"install: Deprecate --test option and change the default behaviour same as one with --test option",permalink:"/docs/reference/upgrade-guide/v2/deprecate-install-test-option"},next:{title:"FAQ",permalink:"/docs/faq"}},o={},u=[{value:"Use the latest aqua and aqua-registry",id:"use-the-latest-aqua-and-aqua-registry",level:2},{value:"Set AQUA_LOG_LEVEL=debug",id:"set-aqua_log_leveldebug",level:2},{value:"Tracing and CPU Profiling",id:"tracing-and-cpu-profiling",level:2},{value:"check file_src is correct",id:"check-file_src-is-correct",level:2},{value:"the asset isn&#39;t found",id:"the-asset-isnt-found",level:2},{value:"GitHub API Rate Limit, 403 error",id:"github-api-rate-limit-403-error",level:2},{value:"Packages aren&#39;t installed",id:"packages-arent-installed",level:2},{value:"Command is not found",id:"command-is-not-found",level:2},{value:"gopls doesn&#39;t work well",id:"gopls-doesnt-work-well",level:2}],p={toc:u},c="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trouble-shooting"},"Trouble Shooting"),(0,r.kt)("h2",{id:"use-the-latest-aqua-and-aqua-registry"},"Use the latest aqua and aqua-registry"),(0,r.kt)("p",null,"If aqua and aqua-registry are old, please update them."),(0,r.kt)("h2",{id:"set-aqua_log_leveldebug"},"Set AQUA_LOG_LEVEL=debug"),(0,r.kt)("p",null,"When aqua doesn't work, the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_LOG_LEVEL")," is helpful for the debug."),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ AQUA_LOG_LEVEL=debug kind --help\nDEBU[0000] CLI args                                      config= log_level=debug program=aqua\nDEBU[0000] install the package                           package_name=kubernetes-sigs/kind package_version=v0.11.1 program=aqua registry=standard\nDEBU[0000] check if the package is already installed     package_name=kubernetes-sigs/kind package_version=v0.11.1 program=aqua registry=standard\nDEBU[0000] check the permission                          file_name=kind\nDEBU[0000] execute the command                           exe_path=/Users/shunsuke-suzuki/.aqua/pkgs/http/kind.sigs.k8s.io/dl/v0.11.1/kind-darwin-amd64/kind-darwin-amd64 program=aqua\nDEBU[0000] command was executed but it failed            error="fork/exec /Users/shunsuke-suzuki/.aqua/pkgs/http/kind.sigs.k8s.io/dl/v0.11.1/kind-darwin-amd64/kind-darwin-amd64: exec format error" exe_path=/Users/shunsuke-suzuki/.aqua/pkgs/http/kind.sigs.k8s.io/dl/v0.11.1/kind-darwin-amd64/kind-darwin-amd64 exit_code=-1 program=aqua\nDEBU[0000] command failed                                error="fork/exec /Users/shunsuke-suzuki/.aqua/pkgs/http/kind.sigs.k8s.io/dl/v0.11.1/kind-darwin-amd64/kind-darwin-amd64: exec format error" exit_code=-1 program=aqua\n')),(0,r.kt)("p",null,"In the above case, kind is already installed but the ",(0,r.kt)("inlineCode",{parentName:"p"},"exec format error")," occurred. I reinstalled kind then the problem has been solved."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"# uninstall kind\n$ rm -R /Users/shunsuke-suzuki/.aqua/pkgs/http/kind.sigs.k8s.io/dl/v0.11.1/kind-darwin-amd64\n# kind is reinstalled by Lazy Install\n$ kind --help\n")),(0,r.kt)("h2",{id:"tracing-and-cpu-profiling"},"Tracing and CPU Profiling"),(0,r.kt)("p",null,"If you encounter any performance issue, please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/config/trace-profile"},"Tracing and CPU Profiling"),"."),(0,r.kt)("h2",{id:"check-file_src-is-correct"},"check file_src is correct"),(0,r.kt)("p",null,"If aqua outputs the warning or error ",(0,r.kt)("inlineCode",{parentName:"p"},"check file_src is correct"),",\nthis means that the asset was downloaded and unarchived but the executable file wasn't found.\nProbably this is the problem of the Registry, so please update the Registry."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ aqua i\nWARN[0000] check file_src is correct                     aqua_version=1.15.1 env=darwin/arm64 error="exe_path isn\'t found: stat /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/neovim/neovim/v0.7.2/nvim-macos.tar.gz/nvim-osx64/bin/nvim: no such file or directory" exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/neovim/neovim/v0.7.2/nvim-macos.tar.gz/nvim-osx64/bin/nvim file_name=nvim package=neovim/neovim package_name=neovim/neovim package_version=v0.7.2 program=aqua registry=standard\n')),(0,r.kt)("p",null,"In this case, the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/neovim/neovim/v0.7.2/nvim-macos.tar.gz/nvim-osx64/bin/nvim")," wasn't found."),(0,r.kt)("p",null,"Please check the correct path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ ls /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/neovim/neovim/v0.7.2/nvim-macos.tar.gz\nnvim-macos\n")),(0,r.kt)("p",null,"The directory name was not ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim-osx")," but ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim-macos"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ ls /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/neovim/neovim/v0.7.2/nvim-macos.tar.gz/nvim-macos/bin \nnvim\n")),(0,r.kt)("p",null,"So we fixed the Standard Registry."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/970#issuecomment-1171726476"},"https://github.com/aquaproj/aqua/issues/970#issuecomment-1171726476")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua-registry/pull/4419"},"https://github.com/aquaproj/aqua-registry/pull/4419"))),(0,r.kt)("h2",{id:"the-asset-isnt-found"},"the asset isn't found"),(0,r.kt)("p",null,"If aqua outputs the error ",(0,r.kt)("inlineCode",{parentName:"p"},"the asset isn't found"),", the following are possible causes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The release doesn't exist",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please fix the version"))),(0,r.kt)("li",{parentName:"ul"},"GitHub Releases has no assets yet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please wait for uploading assets. This isn't a problem of aqua"),(0,r.kt)("li",{parentName:"ul"},"Renovate's ",(0,r.kt)("a",{parentName:"li",href:"https://docs.renovatebot.com/configuration-options/#stabilitydays"},"stabilitydays")," may be useful to decrease this kind of issues"))),(0,r.kt)("li",{parentName:"ul"},"Assets for only specific pair of OS and Arch aren't uploaded",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maybe you can request to release assets to the tool owner"),(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gsamokovarov/jump/issues/72"},"https://github.com/gsamokovarov/jump/issues/72")))),(0,r.kt)("li",{parentName:"ul"},"Asset name format was changed from the specific version",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You have to fix the Registry"),(0,r.kt)("li",{parentName:"ul"},"In case of the Standard Registry, please create an issue or a pull request")))),(0,r.kt)("h2",{id:"github-api-rate-limit-403-error"},"GitHub API Rate Limit, 403 error"),(0,r.kt)("p",null,"Please set GitHub Access Token to the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AQUA_GITHUB_TOKEN"),"."),(0,r.kt)("h2",{id:"packages-arent-installed"},"Packages aren't installed"),(0,r.kt)("p",null,"Maybe your OS and Arch isn't supported by the package's ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/registry-config/supported-envs"},"supported_envs"),".\nPlease check the Registry Configuration."),(0,r.kt)("h2",{id:"command-is-not-found"},"Command is not found"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"command -v <command>")," exits with non zero, the following are possible causes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_ROOT_DIR/bin")," (",(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_ROOT_DIR/bat")," in case of PowerShell) isn't added to the environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"PATH"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"$ export PATH=$HOME/.local/share/aquaproj-aqua/bin:$PATH")))),(0,r.kt)("li",{parentName:"ul"},"the symbolic link isn't created in ",(0,r.kt)("inlineCode",{parentName:"li"},"AQUA_ROOT_DIR/bin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please run ",(0,r.kt)("inlineCode",{parentName:"li"},"aqua i -l")))),(0,r.kt)("li",{parentName:"ul"},"the command name is wrong")),(0,r.kt)("p",null,"You can check the package's command names by ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua g")," command.\nFor example, the command name of the package ",(0,r.kt)("inlineCode",{parentName:"p"},"cli/cli")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"gh"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  docker-slim/docker-slim [docker-slim, docker-slim-sensor]\n  corneliusweig/rakkess/access-matrix [kubectl-access_matrix]\n  CircleCI-Public/circleci-cli [circleci]\n> cli/cli [gh]: github\n  4/660\n> cli/cli\n")),(0,r.kt)("p",null,"If the symbolic link isn't created by ",(0,r.kt)("inlineCode",{parentName:"p"},"aqua i -l"),", the following are possible causes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your OS and Arch isn't supported by the package's ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/registry-config/supported-envs"},"supported_envs")),(0,r.kt)("li",{parentName:"ul"},"the package isn't added in configuration files")),(0,r.kt)("p",null,"aqua finds the configuration files and packages according to the rule."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial/config-path"},"Configuration file path | Tutorial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/config#configuration-file-path"},"Configuration file paths | Reference"))),(0,r.kt)("p",null,"Please check configuration files and your current directory."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"command -v <command>")," exits with zero but command can't executed by the error ",(0,r.kt)("inlineCode",{parentName:"p"},'error="command is not found"'),", the following are possible causes."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'$ gh version\nFATA[0000] aqua failed                                   aqua_version=1.19.2 error="command is not found" exe_name=gh program=aqua\n')),(0,r.kt)("p",null,"aqua finds the configuration files and packages according to the rule."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorial/config-path"},"Configuration file path | Tutorial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/config#configuration-file-path"},"Configuration file paths | Reference"))),(0,r.kt)("p",null,"Please check configuration files and your current directory."),(0,r.kt)("h2",{id:"gopls-doesnt-work-well"},"gopls doesn't work well"),(0,r.kt)("p",null,"This is a known issues."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/1597"},"https://github.com/aquaproj/aqua/issues/1597")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquaproj/aqua/issues/710"},"https://github.com/aquaproj/aqua/issues/710"))),(0,r.kt)("p",null,"If you use Linux, please set the environment variable ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/config/experimental-feature/#aqua_experimental_x_sys_exec"},"AQUA_EXPERIMENTAL_X_SYS_EXEC"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export AQUA_EXPERIMENTAL_X_SYS_EXEC=true\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/config/experimental-feature/#aqua_experimental_x_sys_exec"},"AQUA_EXPERIMENTAL_X_SYS_EXEC")," has an issue in macOS."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/issues/729"},"https://github.com/aquaproj/aqua/issues/729")),(0,r.kt)("p",null,"In macOS please try one of the following alias, shell function, and shell script."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"alias")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'alias gopls="$(aqua which gopls)"\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"shell function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'gopls() {\n  "$(aqua which gopls)" "$@"\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"shell script")),(0,r.kt)("p",null,"Add the following script ",(0,r.kt)("inlineCode",{parentName:"p"},"gopls")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'#!/usr/bin/env bash\n\nexec "$(aqua which gopls)" "$@"\n')))}m.isMDXComponent=!0}}]);