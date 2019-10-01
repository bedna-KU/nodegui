(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=o(n),b=a,m=s[c+"."+b]||s[b]||p[b]||i;return n?r.a.createElement(m,Object.assign({},{ref:t},l,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));n(0);var a=n(161);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={sidebar_label:"QIcon",title:"QIcon"},c=[{value:"Example",id:"example",children:[]},{value:"new QIcon(imageUrl?)",id:"new-qiconimageurl",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Instance Properties",id:"instance-properties",children:[]},{value:"Instance Methods",id:"instance-methods",children:[{value:"icon.pixmap(width, height, mode?, state?) (v0.1.10 & up)",id:"iconpixmapwidth-height-mode-state-v0110--up",children:[]}]}],l={rightToc:c},p="wrapper";function s(e){var t=e.components,n=i(e,["components"]);return Object(a.b)(p,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The QIcon class provides scalable icons in different modes and states.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(a.b)("a",r({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qicon.html"}),"QIcon class"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"QIcon inherits from ",Object(a.b)("a",r({parentName:"strong"},{href:"/docs/api/Component"}),"Component"))),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-javascript"}),'const { QIcon } = require("@nodegui/nodegui");\n\nconst imageUrl = "path/to/png";\nconst icon = new QIcon(imageUrl);\n')),Object(a.b)("h3",{id:"new-qiconimageurl"},Object(a.b)("inlineCode",{parentName:"h3"},"new QIcon(imageUrl?)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"imageUrl")," string (",Object(a.b)("em",{parentName:"li"},"optional"),"). Absolute path of the image that needs to be loaded in the memory.")),Object(a.b)("h2",{id:"static-methods"},"Static Methods"),Object(a.b)("p",null,"QIcon can access all the static methods defined in ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/api/Component"}),"Component")),Object(a.b)("h2",{id:"instance-properties"},"Instance Properties"),Object(a.b)("p",null,"QIcon can access all the instance properties defined in ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/api/Component"}),"Component")),Object(a.b)("h2",{id:"instance-methods"},"Instance Methods"),Object(a.b)("p",null,"QIcon can access all the instance methods defined in ",Object(a.b)("a",r({parentName:"p"},{href:"/docs/api/Component"}),"Component"),"\nAdditionally it also has the following instance methods:"),Object(a.b)("h3",{id:"iconpixmapwidth-height-mode-state-v0110--up"},Object(a.b)("inlineCode",{parentName:"h3"},"icon.pixmap(width, height, mode?, state?)")," (v0.1.10 & up)"),Object(a.b)("p",null,"Returns a pixmap with the requested size, mode, and state, generating one if necessary. The pixmap might be smaller than requested, but never larger.\n. It calls the native method ",Object(a.b)("a",r({parentName:"p"},{href:"https://doc.qt.io/qt-5/qicon.html#pixmap-3"}),"QIcon: pixmap"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"width"),": number,"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"height"),": number"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"mode?"),": QIconMode"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"state?"),": QIconState")))}s.isMDXComponent=!0}}]);