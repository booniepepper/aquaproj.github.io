"use strict";(self.webpackChunkaqua_docusaurus=self.webpackChunkaqua_docusaurus||[]).push([[7071],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>d});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||r;return n?t.createElement(d,o(o({ref:a},c),{},{components:n})):t.createElement(d,o({ref:a},c))}));function d(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9271:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1310},o="cargo Package",l={unversionedId:"reference/registry-config/cargo-package",id:"reference/registry-config/cargo-package",title:"cargo Package",description:"#2016 #2019, aqua >= v2.8.0",source:"@site/docs/reference/registry-config/cargo-package.md",sourceDirName:"reference/registry-config",slug:"/reference/registry-config/cargo-package",permalink:"/docs/reference/registry-config/cargo-package",draft:!1,editUrl:"https://github.com/aquaproj/aquaproj.github.io/edit/main/docs/reference/registry-config/cargo-package.md",tags:[],version:"current",sidebarPosition:1310,frontMatter:{sidebar_position:1310},sidebar:"tutorialSidebar",previous:{title:"go_install Package",permalink:"/docs/reference/registry-config/go-install-package"},next:{title:"replacements",permalink:"/docs/reference/registry-config/replacements"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Fields",id:"fields",level:2},{value:"Try <code>cargo</code> package quickly",id:"try-cargo-package-quickly",level:2},{value:"Example",id:"example",level:2},{value:"aqua i",id:"aqua-i",level:3},{value:"aqua g",id:"aqua-g",level:3},{value:"aqua gr",id:"aqua-gr",level:3},{value:"\ud83d\udca1 Package name",id:"-package-name",level:3}],c={toc:s},m="wrapper";function g(e){let{components:a,...n}=e;return(0,i.kt)(m,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cargo-package"},(0,i.kt)("inlineCode",{parentName:"h1"},"cargo")," Package"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/discussions/2016"},"#2016")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/pull/2019"},"#2019"),", aqua >= ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aquaproj/aqua/releases/tag/v2.8.0"},"v2.8.0")),(0,i.kt)("p",null,"The package is installed by ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/commands/cargo-install.html"},"cargo install")," command."),(0,i.kt)("p",null,"You can manage tools written in Rust with aqua, which means you can manage them and their versions declaratively in the consistent way. You can switch tool versions per project and update them continuously by Renovate!"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We aren't familiar with Rust and Cargo, so your contribution is welcome!")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Please install these tools in advance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/"},"Cargo"))),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"crate")," (required): Crate name. e.g. ",(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/skim"},"skim")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cargo"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"cargo install")," command options",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all_features")," (boolean): ",(0,i.kt)("inlineCode",{parentName:"li"},"--all-features")," option"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"features")," ([]string): ",(0,i.kt)("inlineCode",{parentName:"li"},"--features")," option")))),(0,i.kt)("h2",{id:"try-cargo-package-quickly"},"Try ",(0,i.kt)("inlineCode",{parentName:"h2"},"cargo")," package quickly"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua init\n$ aqua g -i crates.io/skim\n$ aqua i -l\n$ sk -V\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"registry.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: crates.io/skim\n    type: cargo\n    crate: skim\n    files:\n      - name: sk\n  - name: crates.io/broot\n    type: cargo\n    crate: broot\n    cargo:\n      all_features: true\n      # features:\n      #   - clipboard\n")),(0,i.kt)("p",null,"aqua.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n  - name: local\n    type: local\n    path: registry.yaml\npackages:\n  - name: crates.io/skim@0.10.4\n    registry: local\n")),(0,i.kt)("h3",{id:"aqua-i"},"aqua i"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"cargo outputs the following warning, but there is no problem. Please ignore it."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"warning: be sure to add `/home/foo/.local/share/aquaproj-aqua/pkgs/cargo/crates.io/skim/0.10.4/bin` to your PATH to be able to run the installed binaries\n"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo install")," fails, please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/codes/005"},"here"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"$ aqua i"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua i\nINFO[0000] Installing a crate                            aqua_version= env=darwin/arm64 package_name=crates.io/skim package_version=0.10.4 program=aqua registry=local\n    Updating crates.io index\n  Installing skim v0.10.4\n   Compiling autocfg v1.1.0\n   Compiling cfg-if v1.0.0\n   Compiling libc v0.2.144\n   Compiling proc-macro2 v1.0.58\n   Compiling unicode-ident v1.0.8\n   Compiling quote v1.0.27\n   Compiling crossbeam-utils v0.8.15\n   Compiling syn v1.0.109\n   Compiling fnv v1.0.7\n   Compiling strsim v0.10.0\n   Compiling ident_case v1.0.1\n   Compiling memchr v2.5.0\n   Compiling memoffset v0.8.0\n   Compiling crossbeam-epoch v0.9.14\n   Compiling num-traits v0.2.15\n   Compiling scopeguard v1.1.0\n   Compiling crossbeam-channel v0.5.8\n   Compiling num-integer v0.1.45\n   Compiling log v0.4.17\n   Compiling once_cell v1.17.1\n   Compiling bitflags v1.3.2\n   Compiling memoffset v0.6.5\n   Compiling indexmap v1.9.3\n   Compiling dirs-sys-next v0.1.2\n   Compiling crossbeam-deque v0.8.3\n   Compiling rayon-core v1.11.0\n   Compiling core-foundation-sys v0.8.4\n   Compiling crossbeam-queue v0.3.8\n   Compiling iana-time-zone v0.1.56\n   Compiling aho-corasick v1.0.1\n   Compiling dirs-next v2.0.0\n   Compiling atty v0.2.14\n   Compiling num_cpus v1.15.0\n   Compiling time v0.1.45\n   Compiling regex-syntax v0.7.1\n   Compiling os_str_bytes v6.5.0\n   Compiling hashbrown v0.12.3\n   Compiling termcolor v1.2.0\n   Compiling clap_lex v0.2.4\n   Compiling chrono v0.4.24\n   Compiling darling_core v0.14.4\n   Compiling term v0.7.0\n   Compiling nix v0.24.3\n   Compiling regex v1.8.1\n   Compiling thread_local v1.1.7\n   Compiling vte_generate_state_changes v0.1.1\n   Compiling textwrap v0.16.0\n   Compiling lazy_static v1.4.0\n   Compiling either v1.8.1\n   Compiling pin-utils v0.1.0\n   Compiling arrayvec v0.7.2\n   Compiling unicode-width v0.1.10\n   Compiling utf8parse v0.2.1\n   Compiling humantime v2.1.0\n   Compiling darling_macro v0.14.4\n   Compiling time-core v0.1.1\n   Compiling vte v0.11.0\n   Compiling env_logger v0.9.3\n   Compiling time v0.3.21\n   Compiling tuikit v0.5.0\n   Compiling darling v0.14.4\n   Compiling clap v3.2.25\n   Compiling derive_builder_core v0.11.2\n   Compiling nix v0.25.1\n   Compiling rayon v1.7.0\n   Compiling fuzzy-matcher v0.3.7\n   Compiling timer v0.2.0\n   Compiling derive_builder_macro v0.11.2\n   Compiling derive_builder v0.11.2\n   Compiling crossbeam v0.8.2\n   Compiling defer-drop v1.3.0\n   Compiling shlex v1.1.0\n   Compiling beef v0.5.2\n   Compiling skim v0.10.4\n    Finished release [optimized] target(s) in 32.46s\n  Installing /home/foo/.local/share/aquaproj-aqua/pkgs/cargo/crates.io/skim/0.10.4/bin/sk\n   Installed package `skim v0.10.4` (executable `sk`)\nwarning: be sure to add `/home/foo/.local/share/aquaproj-aqua/pkgs/cargo/crates.io/skim/0.10.4/bin` to your PATH to be able to run the installed binaries\n"))),(0,i.kt)("h3",{id:"aqua-g"},"aqua g"),(0,i.kt)("p",null,"aqua gets versions by crates.io API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua g local,crates.io/skim\n- name: crates.io/skim@0.10.4\n  registry: local\n")),(0,i.kt)("h3",{id:"aqua-gr"},"aqua gr"),(0,i.kt)("p",null,"If the package name starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"crates.io/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"aqua gr")," command treats the package as ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo")," type package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ aqua gr crates.io/skim\npackages:\n  - name: crates.io/skim\n    type: cargo\n    repo_owner: lotabout\n    repo_name: skim\n    description: Fuzzy Finder in rust!\n    crate: skim\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In case of the package type ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo"),", you don't have to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"--deep")," option.")),(0,i.kt)("p",null,"You have to set ",(0,i.kt)("inlineCode",{parentName:"p"},"files")," if necessary. This is same with other package types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - name: crates.io/skim\n    type: cargo\n    repo_owner: lotabout\n    repo_name: skim\n    description: Fuzzy Finder in rust!\n    crate: skim\n    files: # Set files manually\n      - name: sk\n")),(0,i.kt)("h3",{id:"-package-name"},"\ud83d\udca1 Package name"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you add a crate hosted at ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/"},"crates.io"),", we recommend the package name is ",(0,i.kt)("inlineCode",{parentName:"p"},"crates.io/<crate name>")," such as ",(0,i.kt)("inlineCode",{parentName:"p"},"crates.io/skim")," because"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"aqua gr")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"aqua-registry gr")," command can treat the package as ",(0,i.kt)("inlineCode",{parentName:"li"},"cargo")," package"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/products/aqua-renovate-config"},"aqua-renovate-config")," can update the package"))))}g.isMDXComponent=!0}}]);