"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1457],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74670:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Defining Entities via EntitySchema"},l=void 0,p={unversionedId:"entity-schema",id:"version-5.0/entity-schema",title:"Defining Entities via EntitySchema",description:"With EntitySchema helper we define the schema programmatically.",source:"@site/versioned_docs/version-5.0/entity-schema.md",sourceDirName:".",slug:"/entity-schema",permalink:"/docs/5.0/entity-schema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/entity-schema.md",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1651218003,formattedLastUpdatedAt:"4/29/2022",frontMatter:{title:"Defining Entities via EntitySchema"},sidebar:"docs",previous:{title:"Embeddables",permalink:"/docs/5.0/embeddables"},next:{title:"Using JSON properties",permalink:"/docs/5.0/json-properties"}},u={},c=[{value:"Using custom entity classes",id:"using-custom-entity-classes",level:2},{value:"Using custom base entity",id:"using-custom-base-entity",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"MongoDB example",id:"mongodb-example",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"EntitySchema")," helper we define the schema programmatically. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface Book extends CustomBaseEntity {\n  title: string;\n  author: Author;\n  publisher: Publisher;\n  tags: Collection<BookTag>;\n}\n\n// The second type argument is optional, and should be used only with custom\n// base entities, not with the `BaseEntity` class exported from `@mikro-orm/core`. \nexport const schema = new EntitySchema<Book, CustomBaseEntity>({\n  // name should be used only with interfaces\n  name: 'Book',\n  // if we use actual class, we need this instead:\n  // class: Book,\n  extends: 'CustomBaseEntity', // only if we extend custom base entity\n  properties: {\n    title: { type: 'string' },\n    author: { reference: 'm:1', entity: 'Author', inversedBy: 'books' },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n  },\n});\n")),(0,a.kt)("p",null,"When creating new entity instances, you will need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"em.create()")," method that will\ncreate instance of internally created class. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const repo = em.getRepository<Author>('Author');\nconst author = repo.create('Author', { name: 'name', email: 'email' }); // instance of internal Author class\nawait repo.persistAndFlush(author);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Using this approach, metadata caching is automatically disabled as it is not needed.")),(0,a.kt)("h2",{id:"using-custom-entity-classes"},"Using custom entity classes"),(0,a.kt)("p",null,"You can optionally use custom class for entity instances.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'},"export class Author extends CustomBaseEntity {\n  name: string;\n  email: string;\n  age?: number;\n  termsAccepted?: boolean;\n  identities?: string[];\n  born?: Date;\n  books = new Collection<Book>(this);\n  favouriteBook?: Book;\n  version?: number;\n  \n  constructor(name: string, email: string) {\n    super();\n    this.name = name;\n    this.email = email;\n  }\n}\n\nexport const schema = new EntitySchema<Author, CustomBaseEntity>({\n  class: Author,\n  properties: {\n    name: { type: 'string' },\n    email: { type: 'string', unique: true },\n    age: { type: 'number', nullable: true },\n    termsAccepted: { type: 'boolean', default: 0, onCreate: () => false },\n    identities: { type: 'string[]', nullable: true },\n    born: { type: DateType, nullable: true, length: 3 },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    favouriteBook: { reference: 'm:1', type: 'Book' },\n    version: { type: 'number', persist: false },\n  },\n});\n")),(0,a.kt)("p",null,"Then you can use the entity class as usual:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const repo = em.getRepository(Author);\nconst author = new Author('name', 'email');\nawait repo.persistAndFlush(author);\n")),(0,a.kt)("h2",{id:"using-custom-base-entity"},"Using custom base entity"),(0,a.kt)("p",null,"Do not forget that base entities needs to be discovered just like normal entities. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'},"export interface CustomBaseEntity {\n  id: number;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\nexport const schema = new EntitySchema<CustomBaseEntity>({\n  name: 'CustomBaseEntity',\n  abstract: true,\n  properties: {\n    id: { type: 'number', primary: true },\n    createdAt: { type: 'Date', onCreate: () => new Date(), nullable: true },\n    updatedAt: { type: 'Date', onCreate: () => new Date(), onUpdate: () => new Date(), nullable: true },\n  },\n});\n")),(0,a.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,a.kt)("p",null,"The parameter of ",(0,a.kt)("inlineCode",{parentName:"p"},"EntitySchema")," requires to provide either ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," parameters.\nWhen using ",(0,a.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"extends")," will be automatically inferred. You can optionally pass\nthese additional parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"name: string;\nclass: Constructor<T>;\nextends: string;\ntableName: string; // alias for `collection: string`\nproperties: { [K in keyof T & string]: EntityProperty<T[K]> };\nindexes: { properties: string | string[]; name?: string; type?: string }[];\nuniques: { properties: string | string[]; name?: string }[];\ncustomRepository: () => Constructor<EntityRepository<T>>;\nhooks: Partial<Record<HookType, (string & keyof T)[]>>;\nabstract: boolean;\n")),(0,a.kt)("p",null,"Every property then needs to contain a type specification - one of ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"customType"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"entity"),".\nHere are some examples of various property types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export enum MyEnum {\n  LOCAL = 'local',\n  GLOBAL = 'global',\n}\n\nexport const schema = new EntitySchema<FooBar>({\n  name: 'FooBar',\n  tableName: 'tbl_foo_bar',\n  indexes: [{ name: 'idx1', properties: 'name' }],\n  uniques: [{ name: 'unq1', properties: ['name', 'email'] }],\n  customRepository: () => FooBarRepository,\n  properties: {\n    id: { type: 'number', primary: true },\n    name: { type: 'string' },\n    baz: { reference: '1:1', entity: 'FooBaz', orphanRemoval: true, nullable: true },\n    fooBar: { reference: '1:1', entity: 'FooBar', nullable: true },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n    version: { type: 'Date', version: true, length: 0 },\n    type: { enum: true, items: () => MyEnum, default: MyEnum.LOCAL },\n  },\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As a value for ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," you can also use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),".")),(0,a.kt)("h2",{id:"mongodb-example"},"MongoDB example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class BookTag {\n  _id!: ObjectId;\n  id!: string;\n  name: string;\n  books = new Collection<Book>(this);\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\nexport const schema = new EntitySchema<BookTag>({\n  class: BookTag,\n  properties: {\n    _id: { type: 'ObjectId', primary: true },\n    id: { type: 'string', serializedPrimaryKey: true },\n    name: { type: 'string' },\n    books: { reference: 'm:n', entity: () => Book, mappedBy: book => book.tags },\n  },\n});\n")))}d.isMDXComponent=!0}}]);