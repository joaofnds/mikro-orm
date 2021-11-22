"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99258],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,y=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22504:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),o=["components"],l={title:"Upgrading from v2 to v3"},d=void 0,s={unversionedId:"upgrading-v2-to-v3",id:"upgrading-v2-to-v3",isDocsHomePage:!1,title:"Upgrading from v2 to v3",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/docs/upgrading-v2-to-v3.md",sourceDirName:".",slug:"/upgrading-v2-to-v3",permalink:"/docs/next/upgrading-v2-to-v3",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/upgrading-v2-to-v3.md",tags:[],version:"current",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1637568869,formattedLastUpdatedAt:"11/22/2021",frontMatter:{title:"Upgrading from v2 to v3"}},p=[{value:"Default value of autoFlush has changed to false",id:"default-value-of-autoflush-has-changed-to-false",children:[],level:2},{value:"Reworked entity definition",id:"reworked-entity-definition",children:[],level:2},{value:"Integrated Knex.js as query builder and runner",id:"integrated-knexjs-as-query-builder-and-runner",children:[],level:2},{value:"ManyToMany now uses composite primary key",id:"manytomany-now-uses-composite-primary-key",children:[],level:2},{value:"Entity references now don&#39;t have instantiated collections",id:"entity-references-now-dont-have-instantiated-collections",children:[],level:2},{value:"EntityAssigner.assign() requires EM for new entities",id:"entityassignerassign-requires-em-for-new-entities",children:[],level:2},{value:"Strict FilterQuery and smart query conditions",id:"strict-filterquery-and-smart-query-conditions",children:[],level:2},{value:"Logging configuration",id:"logging-configuration",children:[],level:2},{value:"Removed deprecated fk option from 1:m and m:1 decorators",id:"removed-deprecated-fk-option-from-1m-and-m1-decorators",children:[],level:2},{value:"SchemaGenerator.generate() is now async",id:"schemageneratorgenerate-is-now-async",children:[],level:2},{value:"New method on NamingStrategy interface",id:"new-method-on-namingstrategy-interface",children:[],level:2},{value:"TypescriptMetadataProvider has been renamed",id:"typescriptmetadataprovider-has-been-renamed",children:[],level:2},{value:"Updated mongodb driver",id:"updated-mongodb-driver",children:[],level:2},{value:"EntityManager.find() now requires where parameter",id:"entitymanagerfind-now-requires-where-parameter",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed."),(0,r.kt)("h2",{id:"default-value-of-autoflush-has-changed-to-false"},"Default value of autoFlush has changed to false"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you had ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush: false")," in your ORM configuration before, you can now remove\nthis line, no changes are needed in your app. ")),(0,r.kt)("p",null,"Default value for ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," is now ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". That means you need to call\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()")," yourself to persist changes into database. You can still change this via ORM's\noptions to ease the transition but generally it is not recommended as it can cause unwanted\nsmall transactions being created around each ",(0,r.kt)("inlineCode",{parentName:"p"},"persist"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"orm.em.persist(new Entity()); // no auto-flushing by default\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),(0,r.kt)("h2",{id:"reworked-entity-definition"},"Reworked entity definition"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Implementing those interfaces is optional.  ")),(0,r.kt)("p",null,"Now it is no longer needed to merge entities with ",(0,r.kt)("inlineCode",{parentName:"p"},"IEntity")," interface, that was polluting entity's\ninterface with internal methods. New interfaces ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifiedEntity<T>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UuidEntity<T>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MongoEntity<T>"),"\nare introduced, that can be implemented by entities. They are not adding any new properties or methods,\nkeeping the entity's interface clean. This is also the reason why they can be omitted."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IEntity")," interface has been renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyEntity<T, PK>")," and it no longer has public methods\nlike ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"toObject()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"init()"),". One can use ",(0,r.kt)("inlineCode",{parentName:"p"},"wrap()")," method provided by ORM that\nwill enhance property type when needed with those methods (",(0,r.kt)("inlineCode",{parentName:"p"},"await wrap(book.author).init()"),").\nTo keep all methods available on the entity, you can still use interface merging with\n",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity<T, PK>")," that both extends ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyEntity<T, PK>")," and defines all those methods."),(0,r.kt)("p",null,"You can mark the entity by implementing one of ",(0,r.kt)("inlineCode",{parentName:"p"},"*Entity")," interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IdEntity<T>")," for numeric/string PK on ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," property (",(0,r.kt)("inlineCode",{parentName:"li"},"id: number"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UuidEntity<T>")," for string PK on ",(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," property (",(0,r.kt)("inlineCode",{parentName:"li"},"uuid: string"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MongoEntity<T>")," for mongo, where ",(0,r.kt)("inlineCode",{parentName:"li"},"id: string")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"_id: ObjectId")," are required"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AnyEntity<T, PK>")," for other possible properties (fill the PK property name to ",(0,r.kt)("inlineCode",{parentName:"li"},"PK"),"\nparameter, e.g.: ",(0,r.kt)("inlineCode",{parentName:"li"},"AnyEntity<Book, 'myPrimaryProperty'>'"),")")),(0,r.kt)("p",null,"To keep all public methods that were part of ",(0,r.kt)("inlineCode",{parentName:"p"},"IEntity")," interface in v2, you can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"WrappedEntity<T, PK>")," via interface merging:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book { ... }\nexport interface Book extends WrappedEntity<Book, 'id'> { }\n")),(0,r.kt)("p",null,"For more examples, take a look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/defining-entities"},"defining entities section"),"."),(0,r.kt)("h2",{id:"integrated-knexjs-as-query-builder-and-runner"},"Integrated Knex.js as query builder and runner"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," now internally uses knex to run all queries. As knex already supports connection\npooling, this feature comes without any effort. New configuration for pooling is now available"),(0,r.kt)("p",null,"Transactions now require using ",(0,r.kt)("inlineCode",{parentName:"p"},"em.transactional()")," method, previous helpers\n",(0,r.kt)("inlineCode",{parentName:"p"},"beginTransaction"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"rollback")," are now removed."),(0,r.kt)("p",null,"All transaction management has been removed from ",(0,r.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface, now EM handles\nthis, passing the transaction context (carried by EM, and created by ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection"),") to all\ndriver methods. New methods on EM exists: ",(0,r.kt)("inlineCode",{parentName:"p"},"isInTransaction()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getTransactionContext()"),"."),(0,r.kt)("p",null,"In postgres driver, it used to be required to pass parameters as indexed dollar sign\n($1, $2, ...), while now knex requires the placeholder to be simple question mark (",(0,r.kt)("inlineCode",{parentName:"p"},"?"),"),\nlike in other dialects, so this is now unified with other drivers."),(0,r.kt)("h2",{id:"manytomany-now-uses-composite-primary-key"},"ManyToMany now uses composite primary key"),(0,r.kt)("p",null,"Previously it was required to have autoincrement primary key for m:n pivot tables. Now this\nhas changed. By default, only foreign columns are required and composite key over both of them\nis used as primary key."),(0,r.kt)("p",null,"To preserve stable order of collections, you can force previous behaviour by defining the\nm:n property as ",(0,r.kt)("inlineCode",{parentName:"p"},"fixedOrder: true"),", which will start ordering by ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column. You can also\noverride the order column name via ",(0,r.kt)("inlineCode",{parentName:"p"},"fixedOrderColumn: 'order'"),". "),(0,r.kt)("p",null,"You can also specify default ordering via ",(0,r.kt)("inlineCode",{parentName:"p"},"orderBy: { ... }")," attribute."),(0,r.kt)("h2",{id:"entity-references-now-dont-have-instantiated-collections"},"Entity references now don't have instantiated collections"),(0,r.kt)("p",null,"Previously all entity instances, including entity references (not fully loaded entities where\nwe know only the primary key), had instantiated collection classes. Now only initialized entities\nhave them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = em.getReference(Book, 1);\nconsole.log(book.tags); // undefined\nawait book.init();\nconsole.log(book.tags); // instance of Collection (not initialized)\n")),(0,r.kt)("h2",{id:"entityassignerassign-requires-em-for-new-entities"},"EntityAssigner.assign() requires EM for new entities"),(0,r.kt)("p",null,"Previously all entities had internal reference to the root EM - the one created when\ninitializing the ORM. Now only managed entities (those merged to the EM, e.g. loaded\nfrom the database) have this internal reference. "),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"assign()")," method on new (not managed) entities, you need to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"em"),"\nparameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = new Book();\nwrap(book).assign(data, { em: orm.em });\n")),(0,r.kt)("h2",{id:"strict-filterquery-and-smart-query-conditions"},"Strict FilterQuery and smart query conditions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FilterQuery")," now does not allow using smart query operators. You can either cast your condition\nas any or use object syntax instead (instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"{ 'age:gte': 18 }")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"{ age: { $gte: 18 } }"),")."),(0,r.kt)("h2",{id:"logging-configuration"},"Logging configuration"),(0,r.kt)("p",null,"Previously to start logging it was required to provide your custom logger. Logger now defaults\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()"),", and users can specify what namespaces are they interested in via ",(0,r.kt)("inlineCode",{parentName:"p"},"debug"),"\noption. ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"false")," will enable/disable all namespaces."),(0,r.kt)("p",null,"Available logger namespaces: ",(0,r.kt)("inlineCode",{parentName:"p"},"'query' | 'query-params' | 'discovery' | 'info'"),"."),(0,r.kt)("h2",{id:"removed-deprecated-fk-option-from-1m-and-m1-decorators"},"Removed deprecated fk option from 1:m and m:1 decorators"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"inversedBy")," instead."),(0,r.kt)("h2",{id:"schemageneratorgenerate-is-now-async"},"SchemaGenerator.generate() is now async"),(0,r.kt)("p",null,"If you used ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGenerator"),", now there is CLI tool you can use instead. Learn more\nin ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/schema-generator"},"SchemaGenerator docs"),". To setup CLI, take a look at\n",(0,r.kt)("a",{parentName:"p",href:"/docs/next/installation"},"installation section"),"."),(0,r.kt)("h2",{id:"new-method-on-namingstrategy-interface"},"New method on NamingStrategy interface"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getClassName()")," is used to find entity class name based on its file name. Now users can\noverride the default implementation to accommodate their specific needs."),(0,r.kt)("p",null,"If you used custom naming strategy, you will either need to implement this method yourself,\nor extend ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractNamingStrategy"),"."),(0,r.kt)("h2",{id:"typescriptmetadataprovider-has-been-renamed"},"TypescriptMetadataProvider has been renamed"),(0,r.kt)("p",null,"The name is now ",(0,r.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),", there is also newly added ",(0,r.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),"\nthat uses ",(0,r.kt)("inlineCode",{parentName:"p"},"reflect-metadata")," instead. As ",(0,r.kt)("inlineCode",{parentName:"p"},"TypescriptMetadataProvider")," was the default, no\nchanges should be required. "),(0,r.kt)("h2",{id:"updated-mongodb-driver"},"Updated mongodb driver"),(0,r.kt)("p",null,"MongoDB driver version 3.3.4 or higher is now required."),(0,r.kt)("h2",{id:"entitymanagerfind-now-requires-where-parameter"},"EntityManager.find() now requires where parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," has now same ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," method interface aligned with ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"where")," parameter is now required. To select all entities, use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.find(Entity, {})"),"\nas value."))}m.isMDXComponent=!0}}]);