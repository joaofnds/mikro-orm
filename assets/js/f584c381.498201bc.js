"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2597],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},p=void 0,s={unversionedId:"entity-helper",id:"version-3.6/entity-helper",title:"EntityHelper and Decorated Entities",description:"Updating Entity Values with entity.assign()",source:"@site/versioned_docs/version-3.6/entity-helper.md",sourceDirName:".",slug:"/entity-helper",permalink:"/docs/3.6/entity-helper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/entity-helper.md",tags:[],version:"3.6",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1651218003,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},sidebar:"version-3.6/docs",previous:{title:"Serializing",permalink:"/docs/3.6/serializing"},next:{title:"Property Validation",permalink:"/docs/3.6/property-validation"}},d={},c=[{value:"Updating Entity Values with <code>entity.assign()</code>",id:"updating-entity-values-with-entityassign",level:2},{value:"<code>WrappedEntity</code> and <code>wrap()</code> helper",id:"wrappedentity-and-wrap-helper",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"updating-entity-values-with-entityassign"},"Updating Entity Values with ",(0,a.kt)("inlineCode",{parentName:"h2"},"entity.assign()")),(0,a.kt)("p",null,"When you want to update entity based on user input, you will usually have just plain\nstring ids of entity relations as user input. Normally you would need to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"em.getReference()")," to create references from each id first, and then\nuse those references to update entity relations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const jon = new Author('Jon Snow', 'snow@wall.st');\nconst book = new Book('Book', jon);\nbook.author = orm.em.getReference<Author>(Author, '...id...');\n")),(0,a.kt)("p",null,"Same result can be easily achieved with ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from 'mikro-orm';\n\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n});\nconsole.log(book.title); // 'Better Book 1'\nconsole.log(book.author); // instance of Author with id: '...id...'\nconsole.log(book.author.id); // '...id...'\n")),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign()")," on not managed entities, you need to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager"),"\ninstance explicitly: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from 'mikro-orm';\n\nconst book = new Book();\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n}, { em: orm.em });\n")),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"entity.assign(data)")," behaves same way as ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.assign(entity, data)"),",\ne.g. it does not merge things recursively. To enable deep merging of object properties,\nuse second parameter to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeObjects")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { wrap } from 'mikro-orm';\n\nbook.meta = { foo: 1, bar: 2 };\n\nwrap(book).assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n\nwrap(book).assign({ meta: { foo: 4 } });\nconsole.log(book.meta); // { foo: 4 }\n")),(0,a.kt)("h2",{id:"wrappedentity-and-wrap-helper"},(0,a.kt)("inlineCode",{parentName:"h2"},"WrappedEntity")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"wrap()")," helper"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IWrappedEntity")," is interface that defines helper methods as well as some internal\nproperties provided by the ORM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IWrappedEntity<T, PK extends keyof T> {\n  isInitialized(): boolean;\n  populated(populated?: boolean): void;\n  init(populated?: boolean, lockMode?: LockMode): Promise<this>;\n  toReference(): IdentifiedReference<T, PK>;\n  toObject(ignoreFields?: string[]): Dictionary;\n  toJSON(...args: any[]): Dictionary;\n  assign(data: any, options?: AssignOptions | boolean): this;\n  __uuid: string;\n  __meta: EntityMetadata;\n  __em: EntityManager;\n  __initialized?: boolean;\n  __populated: boolean;\n  __lazyInitialized: boolean;\n  __primaryKey: T[PK] & Primary<T>;\n  __serializedPrimaryKey: string & keyof T;\n}\n")),(0,a.kt)("p",null,"Users can choose whether they are fine with polluting the entity interface with\nthose additional methods and properties, or they want to keep the interface clean\nand use the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrap(entity)")," helper method instead to access them. "),(0,a.kt)("p",null,"To keep all methods available on the entity, you can use interface merging with\n",(0,a.kt)("inlineCode",{parentName:"p"},"WrappedEntity<T, PK>")," that both extends ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyEntity<T, PK>")," and defines all those methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book { ... }\nexport interface Book extends WrappedEntity<Book, 'id'> { }\n")),(0,a.kt)("p",null,"Then you can work with those methods directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"book.meta = { foo: 1, bar: 2 };\nbook.assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n")))}m.isMDXComponent=!0}}]);