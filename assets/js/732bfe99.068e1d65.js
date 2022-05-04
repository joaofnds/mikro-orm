"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2257,4608,9514],{88138:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(67294),r=n(24608),l=n(58060),i=n(86010),o=n(95999),c=n(2730),s=n(35281),d="backToTopButton_RiI4",u="backToTopButtonShow_ssHd";function m(){var e=(0,c.a)({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",s.k.common.backToTopButton,d,t&&u),type:"button",onClick:n})}var f=n(87524),p=n(86668),b=n(18487),v=n(83117);function h(e){return a.createElement("svg",(0,v.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var E="collapseSidebarButton_FykI",g="collapseSidebarButtonIcon_DTRl";function _(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,o.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",E),onClick:t},a.createElement(h,{className:g}))}var k=n(59689),C=n(12466),I=n(80102),y=n(44700),N=n(24575),S=n(48596),Z=n(86043),x=n(14353),T=n(39960),A=n(72389),L=["item","onItemClick","activePath","level","index"];function w(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,o.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=e.index,c=(0,I.Z)(e,L),d=t.items,u=t.label,m=t.collapsible,f=t.className,b=t.href,h=function(e){var t=(0,A.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,N.Wl)(e):void 0}),[e,t])}(t),E=(0,N._F)(t,r),g=(0,S.Mg)(b,r),_=(0,Z.u)({initialState:function(){return!!m&&(!E&&t.collapsed)}}),k=_.collapsed,C=_.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,l=(0,y.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:k,setCollapsed:C});var P=(0,x.f)(),M=P.expandedItem,F=P.setExpandedItem;function H(e){void 0===e&&(e=!k),F(e?null:o),C(e)}var B=(0,p.L)().docs.sidebar.autoCollapseCategories;return(0,a.useEffect)((function(){m&&M&&M!==o&&B&&C(!0)}),[m,M,o,C,B]),a.createElement("li",{className:(0,i.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},f)},a.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(T.default,(0,v.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!b&&m,"menu__link--active":E}),onClick:m?function(e){null==n||n(t),b?H(!1):(e.preventDefault(),H())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":m?!k:void 0,href:m?null!=h?h:"#":h},c),u),b&&m&&a.createElement(w,{categoryLabel:u,onClick:function(e){e.preventDefault(),H()}})),a.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(V,{items:d,tabIndex:k?-1:0,onItemClick:n,activePath:r,level:l+1})))}var M=n(13919),F=n(90541),H="menuExternalLink_KU1_",B=["item","onItemClick","activePath","level","index"];function D(e){var t=e.item,n=e.onItemClick,r=e.activePath,l=e.level,o=(e.index,(0,I.Z)(e,B)),c=t.href,d=t.label,u=t.className,m=(0,N._F)(t,r),f=(0,M.Z)(c);return a.createElement("li",{className:(0,i.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:d},a.createElement(T.default,(0,v.Z)({className:(0,i.Z)("menu__link",!f&&H,{"menu__link--active":m}),"aria-current":m?"page":void 0,to:c},f&&{onClick:n?function(){return n(t)}:void 0},o),d,!f&&a.createElement(F.Z,null)))}var O="menuHtmlItem_hP_2";function R(e){var t=e.item,n=e.level,r=e.index,l=t.value,o=t.defaultStyle,c=t.className;return a.createElement("li",{className:(0,i.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),o&&O+" menu__list-item",c),key:r,dangerouslySetInnerHTML:{__html:l}})}var W=["item"];function j(e){var t=e.item,n=(0,I.Z)(e,W);switch(t.type){case"category":return a.createElement(P,(0,v.Z)({item:t},n));case"html":return a.createElement(R,(0,v.Z)({item:t},n));default:return a.createElement(D,(0,v.Z)({item:t},n))}}var z=["items"];function U(e){var t=e.items,n=(0,I.Z)(e,z);return a.createElement(x.D,null,t.map((function(e,t){return a.createElement(j,(0,v.Z)({key:t,item:e,index:t},n))})))}var V=(0,a.memo)(U),Y="menu_izAj",K="menuWithAnnouncementBar_l2a_";function Q(e){var t=e.path,n=e.sidebar,r=e.className,l=function(){var e=(0,k.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,C.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",Y,l&&K,r)},a.createElement("ul",{className:(0,i.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(V,{items:n,activePath:t,level:1})))}var q="sidebar_RiAD",X="sidebarWithHideableNavbar_d0QC",G="sidebarHidden_Lg_2",J="sidebarLogo_YUvz";function $(e){var t=e.path,n=e.sidebar,r=e.onCollapse,l=e.isHidden,o=(0,p.L)(),c=o.navbar.hideOnScroll,s=o.docs.sidebar.hideable;return a.createElement("div",{className:(0,i.Z)(q,c&&X,l&&G)},c&&a.createElement(b.Z,{tabIndex:-1,className:J}),a.createElement(Q,{path:t,sidebar:n}),s&&a.createElement(_,{onClick:r}))}var ee=a.memo($),te=n(93163),ne=n(13102),ae=function(e){var t=e.sidebar,n=e.path,r=(0,te.e)();return a.createElement("ul",{className:(0,i.Z)(s.k.docs.docSidebarMenu,"menu__list")},a.createElement(V,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return a.createElement(ne.Zo,{component:ae,props:e})}var le=a.memo(re);function ie(e){var t=(0,f.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ee,e),r&&a.createElement(le,e))}var oe=n(76775),ce="expandButton__5cy",se="expandButtonIcon_FlNX";function de(e){var t=e.toggleSidebar;return a.createElement("div",{className:ce,title:(0,o.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(h,{className:se}))}var ue="docSidebarContainer_UQUJ",me="docSidebarContainerHidden_f7XD",fe=n(1116);function pe(e){var t,n=e.children,r=(0,fe.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function be(e){var t=e.sidebar,n=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,l=(0,oe.TH)().pathname,o=(0,a.useState)(!1),c=o[0],d=o[1],u=(0,a.useCallback)((function(){c&&d(!1),r((function(e){return!e}))}),[r,c]);return a.createElement("aside",{className:(0,i.Z)(s.k.docs.docSidebarContainer,ue,n&&me),onTransitionEnd:function(e){e.currentTarget.classList.contains(ue)&&n&&d(!0)}},a.createElement(pe,null,a.createElement(ie,{sidebar:t,path:l,onCollapse:u,isHidden:c})),c&&a.createElement(de,{toggleSidebar:u}))}var ve={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function he(e){var t=e.hiddenSidebarContainer,n=e.children,r=(0,fe.V)();return a.createElement("main",{className:(0,i.Z)(ve.docMainContainer,(t||!r)&&ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,t&&ve.docItemWrapperEnhanced)},n))}var Ee="docPage_ualW",ge="docsWrapper_mKqt";function _e(e){var t=e.children,n=(0,fe.V)(),r=(0,a.useState)(!1),i=r[0],o=r[1];return a.createElement(l.Z,{wrapperClassName:ge},a.createElement(m,null),a.createElement("div",{className:Ee},n&&a.createElement(be,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),a.createElement(he,{hiddenSidebarContainer:i},t)))}var ke=n(43320),Ce=n(10833),Ie=n(74477),ye=n(14739);function Ne(e){var t=e.versionMetadata,n=(0,N.hI)(e);if(!n)return a.createElement(r.default,null);var l=n.docElement,o=n.sidebarName,c=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(ye.Z,{version:t.version,tag:(0,ke.os)(t.pluginId,t.version)}),a.createElement(Ce.FG,{className:(0,i.Z)(s.k.wrapper.docsPages,s.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(Ie.q,{version:t},a.createElement(fe.b,{name:o,items:c},a.createElement(_e,null,l)))))}},24608:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(67294),r=n(58060),l=n(95999),i=n(10833);function o(){return a.createElement(a.Fragment,null,a.createElement(i.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},14353:function(e,t,n){n.d(t,{D:function(){return o},f:function(){return c}});var a=n(67294),r=n(44700),l=Symbol("EmptyContext"),i=a.createContext(l);function o(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(i.Provider,{value:o},t)}function c(){var e=(0,a.useContext)(i);if(e===l)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:function(e,t,n){n.d(t,{a:function(){return i}});var a=n(67294),r=n(12466),l=n(85936);function i(e){var t=e.threshold,n=(0,a.useState)(!1),i=n[0],o=n[1],c=(0,a.useRef)(!1),s=(0,r.Ct)(),d=s.startScroll,u=s.cancelScroll;return(0,r.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(c.current?c.current=!1:a>=r?(u(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,l.S)((function(e){e.location.hash&&(c.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}},3660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294).createContext({options:{banner:"",breadcrumbs:!0,minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},36454:function(e,t,n){var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(20060),n(98878);var l=n(67294),i=n(88138),o=n(3660),c=function(e){return e&&e.__esModule?e:{default:e}},s=c(l),d=c(i);function u(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function m(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],l=a[1];if("id"===r){var i="type"in e;(!i||i&&"reference"!==e.type)&&(t[Number(l)]=e,n&&(e.parentId=n.id))}else Array.isArray(l)?l.forEach((function(n){u(n)&&m(n,t,e)})):u(l)&&m(l,t,e)})),t}function f(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){m(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,i=r(e,a),c=l.useMemo((function(){return{options:t,reflections:f(n)}}),[t,n]);return s.default.createElement(o.ApiDataContext.Provider,{value:c},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,i)))}},20060:function(e,t,n){n.r(t)},98878:function(e,t,n){n.r(t)}}]);