"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7552],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},l=void 0,p={unversionedId:"usage-with-nestjs",id:"version-5.0/usage-with-nestjs",title:"Using MikroORM with NestJS framework",description:"Installation",source:"@site/versioned_docs/version-5.0/usage-with-nestjs.md",sourceDirName:".",slug:"/usage-with-nestjs",permalink:"/docs/5.0/usage-with-nestjs",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/usage-with-nestjs.md",tags:[],version:"5.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1650611023,formattedLastUpdatedAt:"4/22/2022",frontMatter:{title:"Using MikroORM with NestJS framework",sidebar_label:"Usage with NestJS"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/5.0/quick-start"},next:{title:"Usage with Vanilla JS",permalink:"/docs/5.0/usage-with-js"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Repositories",id:"repositories",level:2},{value:"Using custom repositories",id:"using-custom-repositories",level:2},{value:"Load entities automatically",id:"load-entities-automatically",level:2},{value:"Request scoped handlers in queues",id:"request-scoped-handlers-in-queues",level:2},{value:"Request scoping when using GraphQL",id:"request-scoping-when-using-graphql",level:2},{value:"App shutdown and cleanup",id:"app-shutdown-and-cleanup",level:2},{value:"Multiple Database Connections",id:"multiple-database-connections",level:2},{value:"Testing",id:"testing",level:2},{value:"Serialization caveat",id:"serialization-caveat",level:2},{value:"Testing",id:"testing-1",level:2},{value:"Using <code>AsyncLocalStorage</code> for request context",id:"using-asynclocalstorage-for-request-context",level:2},{value:"Example",id:"example",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Easiest way to integrate MikroORM to Nest is via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/nestjs"},(0,a.kt)("inlineCode",{parentName:"a"},"@mikro-orm/nestjs")," module"),". Simply install it next to Nest, MikroORM and underlying driver:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mongodb     # for mongo\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mysql       # for mysql/mariadb\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mariadb     # for mysql/mariadb\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql  # for postgresql\n$ yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mongodb     # for mongo\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mysql       # for mysql/mariadb\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/mariadb     # for mysql/mariadb\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql  # for postgresql\n$ npm i -s @mikro-orm/core @mikro-orm/nestjs @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"Once the installation process is completed, we can import the ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroOrmModule")," into the root ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      entities: ['./dist/entities'],\n      entitiesTs: ['./src/entities'],\n      dbName: 'my-db-name.sqlite3',\n      type: 'sqlite',\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," method accepts the same configuration object as ",(0,a.kt)("inlineCode",{parentName:"p"},"init()")," from the MikroORM package. Check ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/configuration"},"this page")," for the complete configuration documentation."),(0,a.kt)("p",null,"Alternatively we can ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/installation#setting-up-the-commandline-tool"},"configure the CLI")," by creating a configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"mikro-orm.config.ts")," and then call the ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," without any arguments. This won't work when you use a build tools that use tree shaking."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot(),\n  ],\n  ...\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"Afterward, the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," will be available to inject across entire project (without importing any module elsewhere)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MikroORM } from '@mikro-orm/core';\nimport { EntityManager } from '@mikro-orm/mysql'; // Import EntityManager from your driver package or `@mikro-orm/knex`\n\n@Injectable()\nexport class MyService {\n\n  constructor(private readonly orm: MikroORM,\n              private readonly em: EntityManager) {\n  }\n\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," is imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/driver")," package, where driver is ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sqlite"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres")," or whatever driver you are using."),(0,a.kt)("p",{parentName:"blockquote"},"In case you have ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/knex")," installed as a dependency, you can also import the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," from there.")),(0,a.kt)("h2",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,"MikroORM supports the repository design pattern. For every entity we can create a repository. Read the complete ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/repositories"},"documentation on repositories here"),". To define which repositories shall be registered in the current scope you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()")," method. For example, in this way:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You should ",(0,a.kt)("strong",{parentName:"p"},"not")," register your base entities via ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()"),", as there are no repositories for those. On the other hand, base entities need to be part of the list in ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," (or in the ORM config in general).")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// photo.module.ts\n\n@Module({\n  imports: [MikroOrmModule.forFeature([Photo])],\n  providers: [PhotoService],\n  controllers: [PhotoController],\n})\nexport class PhotoModule {}\n")),(0,a.kt)("p",null,"and import it into the root ",(0,a.kt)("inlineCode",{parentName:"p"},"AppModule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// app.module.ts\n@Module({\n  imports: [MikroOrmModule.forRoot(...), PhotoModule],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"In this way we can inject the ",(0,a.kt)("inlineCode",{parentName:"p"},"PhotoRepository")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PhotoService")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class PhotoService {\n  constructor(\n    @InjectRepository(Photo)\n    private readonly photoRepository: EntityRepository<Photo>\n  ) {}\n\n  // ...\n}\n")),(0,a.kt)("h2",{id:"using-custom-repositories"},"Using custom repositories"),(0,a.kt)("p",null,"When using custom repositories, we can get around the need for ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator by naming our repositories the same way as ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()")," method do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const getRepositoryToken = <T> (entity: EntityName<T>) => `${Utils.className(entity)}Repository`;\n")),(0,a.kt)("p",null,"In other words, as long as we name the repository same was as the entity is called, appending ",(0,a.kt)("inlineCode",{parentName:"p"},"Repository")," suffix, the repository will be registered automatically in the Nest.js DI container."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"**./author.entity.ts**")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({ customRepository: () => AuthorRepository })\nexport class Author {\n\n  // to allow inference in `em.getRepository()`\n  [EntityRepositoryType]?: AuthorRepository;\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"**./author.repository.ts**")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityRepository } from '@mikro-orm/mysql'; // Import EntityManager from your driver package or `@mikro-orm/knex`\n\nexport class AuthorRepository extends EntityRepository<Author> {\n\n  // your custom methods...\n\n}\n")),(0,a.kt)("p",null,"As the custom repository name is the same as what ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()")," would return, we do not need the ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository()")," decorator anymore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly repo: AuthorRepository) { }\n\n}\n")),(0,a.kt)("h2",{id:"load-entities-automatically"},"Load entities automatically"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," option was added in v4.1.0")),(0,a.kt)("p",null,"Manually adding entities to the entities array of the connection options can be tedious. In addition, referencing entities from the root module breaks application domain boundaries and causes leaking implementation details to other parts of the  application. To solve this issue, static glob paths can be used."),(0,a.kt)("p",null,"Note, however, that glob paths are not supported by webpack, so if you are building your application within a monorepo, you won't be able to use them. To address this issue, an alternative solution is provided. To automatically load entities, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," property of the configuration object (passed into the ",(0,a.kt)("inlineCode",{parentName:"p"},"forRoot()")," method) to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      ...\n        autoLoadEntities: true,\n}),\n],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"With that option specified, every entity registered through the ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()"),"\nmethod will be automatically added to the entities array of the configuration\nobject."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that entities that aren't registered through the ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()")," method, but\nare only referenced from the entity (via a relationship), won't be included by\nway of the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," setting.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"autoLoadEntities")," also has no effect on the MikroORM CLI - for that we\nstill need CLI config with the full list of entities. On the other hand, we can\nuse globs there, as the CLI won't go through webpack.")),(0,a.kt)("h2",{id:"request-scoped-handlers-in-queues"},"Request scoped handlers in queues"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator was added in v4.1.0")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Since v5, ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator is available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core"),"\npackage. It is valid approach not just for nestjs projects.")),(0,a.kt)("p",null,"As mentioned in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/identity-map"},"docs"),", we need a clean state for each request. That is handled automatically thanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper registered via middleware."),(0,a.kt)("p",null,"But middlewares are executed only for regular HTTP request handles, what if we need\na request scoped method outside of that? One example of that is queue handlers or\nscheduled tasks."),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," decorator. It requires you to first inject the\n",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM")," instance to current context, it will be then used to create the context\nfor you. Under the hood, the decorator will register new request context for your\nmethod and execute it inside the context."),(0,a.kt)("p",null,"Keep in mind, that all handlers that are decorated with @UseRequestContext(), should NOT return anything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(private readonly orm: MikroORM) { }\n\n  @UseRequestContext()\n  async doSomething() {\n    // this will be executed in a separate context\n  }\n\n}\n")),(0,a.kt)("p",null,"Alternatively we can provide a callback that will return the ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { DI } from '..';\n\nexport class MyService {\n\n  @UseRequestContext(() => DI.orm)\n  async doSomething() {\n    // this will be executed in a separate context\n  }\n\n}\n")),(0,a.kt)("p",null,"Another thing to look out for how you combine them with other decorators.\nFor example if you use it in combination with NestJS's \"",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/queues"},"BullJS queues module"),'", a safe bet is to extract the part of the code that needs a clean ',(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/identity-map"},"docs"),",\neither in a new method or inject a separate service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Processor({\n  name: 'example-queue',\n})\nexport class MyConsumer {\n  constructor(private readonly orm: MikroORM) { }\n\n  @Process()\n  async doSomething(job: Job<any>) {\n    await this.doSomethingWithMikro();\n  }\n\n  @UseRequestContext()\n  async doSomethingWithMikro() {\n    // this will be executed in a separate context\n  }\n}\n")),(0,a.kt)("p",null,"As in this case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Process()")," decorator expects to receive an executable function, but if we add ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," to the handler as well, if ",(0,a.kt)("inlineCode",{parentName:"p"},"@UseRequestContext()")," is executed before ",(0,a.kt)("inlineCode",{parentName:"p"},"@Process()"),", the later will receive ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"."),(0,a.kt)("h2",{id:"request-scoping-when-using-graphql"},"Request scoping when using GraphQL"),(0,a.kt)("p",null,"The GraphQL module in NestJS uses ",(0,a.kt)("inlineCode",{parentName:"p"},"apollo-server-express")," which enables ",(0,a.kt)("inlineCode",{parentName:"p"},"bodyparser")," by default. (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/issues/696#issuecomment-669846919"},"source"),') As mentioned in "',(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/identity-map/#requestcontext-helper-for-di-containers"},"RequestContext helper for DI containers"),'" this causes issues as the Middleware the NestJS MikroORM module installs needs to be loaded after ',(0,a.kt)("inlineCode",{parentName:"p"},"bodyparser"),". At the same time make sure to disable body-parser in NestJs itself as well."),(0,a.kt)("p",null,"This can be done by adding bodyparser to your main.ts file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NestFactory } from '@nestjs/core';\nimport express from 'express';\nasync function bootstrap() {\n const app = await NestFactory.create(AppModule,{ bodyParser: false });\n app.use(express.json());\n await app.listen(5555);\n}\n")),(0,a.kt)("p",null,"And at the same time disabling the bodyparser in the GraphQL Module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n imports: [\n   GraphQLModule.forRoot({\n     bodyParserConfig: false,\n   }),\n ],\n})\n")),(0,a.kt)("h2",{id:"app-shutdown-and-cleanup"},"App shutdown and cleanup"),(0,a.kt)("p",null,"By default, NestJS does not listen for system process termination signals (for example SIGTERM). Because of this, the MikroORM shutdown logic will never executed if the process is terminated, which could lead to database connections remaining open and consuming resources. To enable this, the ",(0,a.kt)("inlineCode",{parentName:"p"},"enableShutdownHooks")," function needs to be called when starting up the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n\n  // Starts listening for shutdown hooks\n  app.enableShutdownHooks();\n\n  await app.listen(3000);\n}\n")),(0,a.kt)("p",null,"More information about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/fundamentals/lifecycle-events#application-shutdown"},"enableShutdownHooks")),(0,a.kt)("h2",{id:"multiple-database-connections"},"Multiple Database Connections"),(0,a.kt)("p",null,"You can define multiple database connections by registering multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroOrmModule")," and setting their ",(0,a.kt)("inlineCode",{parentName:"p"},"contextName"),". If you want to use middleware request context you must disable automatic middleware and register ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroOrmModule")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"forMiddleware()")," or use NestJS ",(0,a.kt)("inlineCode",{parentName:"p"},"Injection Scope")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      contextName: 'db1',\n      registerRequestContext: false, // disable automatatic middleware\n      ...\n    }),\n    MikroOrmModule.forRoot({\n      contextName: 'db2',\n      registerRequestContext: false, // disable automatatic middleware\n      ...\n    }),\n    MikroOrmModule.forMiddleware()\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"To access different ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," connections you have to use the new injection tokens ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectMikroORM()"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectEntityManager()")," where you are required to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"contextName")," in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MyService {\n\n  constructor(@InjectMikroORM('db1') private readonly orm1: MikroORM,\n              @InjectMikroORM('db2') private readonly orm2: MikroORM,\n              @InjectEntityManager('db1') private readonly em1: EntityManager,\n              @InjectEntityManager('db2') private readonly em2: EntityManager) { }\n\n}\n")),(0,a.kt)("p",null,"When defining your repositories with ",(0,a.kt)("inlineCode",{parentName:"p"},"forFeature()")," method you will need to set which ",(0,a.kt)("inlineCode",{parentName:"p"},"contextName")," you want it registered against:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// photo.module.ts\n\n@Module({\n  imports: [MikroOrmModule.forFeature([Photo], 'db1')],\n  providers: [PhotoService],\n  controllers: [PhotoController],\n})\nexport class PhotoModule {}\n")),(0,a.kt)("p",null,"When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository")," decorator you will also need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"contextName")," you want to get it from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Injectable()\nexport class PhotoService {\n  constructor(\n    @InjectRepository(Photo, 'db1')\n    private readonly photoRepository: EntityRepository<Photo>\n  ) {}\n\n  // ...\n\n}\n")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-mikro-orm")," package exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()")," function that returns prepared token based on a given entity to allow mocking the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Module({\n  providers: [\n    PhotoService,\n    {\n      provide: getRepositoryToken(Photo),\n      useValue: mockedRepository,\n    },\n  ],\n})\nexport class PhotoModule {}\n")),(0,a.kt)("h2",{id:"serialization-caveat"},"Serialization caveat"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/serialization"},"NestJS built-in serialization")," relies on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer"),". Since MikroORM wraps every single entity relation in a ",(0,a.kt)("inlineCode",{parentName:"p"},"Reference")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," instance (for type-safety), this will make the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassSerializerInterceptor")," blind to any wrapped relations. In other words, if you return MikroORM entities from your HTTP or WebSocket handlers, all of their relations will NOT be serialized."),(0,a.kt)("p",null,"Luckily, MikroORM provides a ",(0,a.kt)("a",{parentName:"p",href:"https://mikro-orm.io/docs/serializing"},"serialization API")," which can be used in lieu of ",(0,a.kt)("inlineCode",{parentName:"p"},"ClassSerializerInterceptor"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n  @Property({ hidden: true })   // --\x3e Equivalent of class-transformer's `@Exclude`\n  hiddenField: number = Date.now();\n\n  @Property({ persist: false }) // --\x3e Will only exist in memory (and will be serialized). Similar to class-transformer's `@Expose()`\n  count?: number;\n\n  @ManyToOne({ serializer: value => value.name, serializedName: 'authorName' })   // Equivalent of class-transformer's `@Transform()`\n  author: Author;\n}\n")),(0,a.kt)("h2",{id:"testing-1"},"Testing"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/nestjs")," package exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()")," function that returns prepared token based on a given entity to allow mocking the repository."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If we register the provider only via ",(0,a.kt)("inlineCode",{parentName:"p"},"getRepositoryToken()"),", we need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectRepository")," decorator. To be able to use custom repository without this decorator, we need to register it with ",(0,a.kt)("inlineCode",{parentName:"p"},"provide: PhotoRepository"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"provide"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  providers: [\n    PhotoService,\n    // required for `@InjectRepository` decorator\n    {\n      provide: getRepositoryToken(Photo),\n      useValue: mockedRepository,\n    },\n\n    // required for custom repositories if we don't want to use `@InjectRepository`\n    {\n      provide: PhotoRepository,\n      useValue: mockedRepository,\n    },\n  ],\n})\nexport class PhotoModule {}\n")),(0,a.kt)("h2",{id:"using-asynclocalstorage-for-request-context"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"AsyncLocalStorage")," for request context"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Since v5 ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," is used inside ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper so this section\nis no longer valid."))),(0,a.kt)("p",null,"In older versions, the ",(0,a.kt)("inlineCode",{parentName:"p"},"domain")," api was used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestContext")," helper. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core@4.0.3"),", we can use the new ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," too, if you are on up to date node version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// create new (global) storage instance\nconst storage = new AsyncLocalStorage<EntityManager>();\n\n@Module({\n  imports: [\n    MikroOrmModule.forRoot({\n      // ...\n      registerRequestContext: false, // disable automatic middleware\n      context: () => storage.getStore(), // use our AsyncLocalStorage instance\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n// register the request context middleware\nconst app = await NestFactory.create(AppModule, { ... });\n\nconst orm = app.get(MikroORM);\napp.use((req, res, next) => {\n  storage.run(orm.em.fork({ useContext: true }), next);\n});\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"A real world example of NestJS with MikroORM can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/nestjs-realworld-example-app"},"here")))}m.isMDXComponent=!0}}]);