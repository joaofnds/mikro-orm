"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22325],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Naming strategy"},s=void 0,c={unversionedId:"naming-strategy",id:"version-2.7/naming-strategy",title:"Naming strategy",description:"When mapping your entities to database tables and columns, their names will be defined by naming",source:"@site/versioned_docs/version-2.7/naming-strategy.md",sourceDirName:".",slug:"/naming-strategy",permalink:"/docs/2.7/naming-strategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/naming-strategy.md",tags:[],version:"2.7",lastUpdatedBy:"itsame-luigi",lastUpdatedAt:1643875051,formattedLastUpdatedAt:"2/3/2022",frontMatter:{title:"Naming strategy"},sidebar:"version-2.7/docs",previous:{title:"Lifecycle hooks",permalink:"/docs/2.7/lifecycle-hooks"},next:{title:"Metadata cache",permalink:"/docs/2.7/metadata-cache"}},m=[{value:"Naming strategy in mongo driver",id:"naming-strategy-in-mongo-driver",children:[],level:2},{value:"Naming strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",children:[],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 2 basic naming strategies you can choose from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of ",(0,i.kt)("inlineCode",{parentName:"li"},"MySqlDriver")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SqliteDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDriver"))),(0,i.kt)("p",null,"You can override this when initializing ORM. You can also provide your own naming strategy, just\nimplement ",(0,i.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide your implementation when bootstrapping ORM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class YourCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: YourCustomNamingStrategy,\n  ...\n});\n")),(0,i.kt)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming strategy in mongo driver"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",(0,i.kt)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),(0,i.kt)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming strategy in SQL drivers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means your all your database tables and\ncolumns will be lower-cased and words divided by underscored:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/2.7/#table-of-contents"},"\u2190"," Back to table of contents")))}u.isMDXComponent=!0}}]);