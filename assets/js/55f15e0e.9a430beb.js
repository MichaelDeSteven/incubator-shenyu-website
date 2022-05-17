"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[62691],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1519:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"2.4.3",sidebar_position:1,keywords:["release-notes"],description:"release-notes"},p="2.4.3",u={unversionedId:"2.4.3-release",id:"2.4.3-release",isDocsHomePage:!1,title:"2.4.3",description:"release-notes",source:"@site/event/2.4.3-release.md",sourceDirName:".",slug:"/2.4.3-release",permalink:"/event/2.4.3-release",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/event/2.4.3-release.md",version:"current",lastUpdatedBy:"moremind",lastUpdatedAt:1652759658,formattedLastUpdatedAt:"5/17/2022",sidebarPosition:1,frontMatter:{title:"2.4.3",sidebar_position:1,keywords:["release-notes"],description:"release-notes"},sidebar:"community",next:{title:"2.4.2",permalink:"/event/2.4.2-release"}},c=[{value:"New Features",id:"new-features",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"243"},"2.4.3"),(0,a.kt)("h3",{id:"new-features"},"New Features"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add http register client retry."),(0,a.kt)("li",{parentName:"ol"},"Support octet-stream context-type."),(0,a.kt)("li",{parentName:"ol"},"Support redirecting to URIs outside of bootstrap and refactoring code."),(0,a.kt)("li",{parentName:"ol"},"Add local API authorization."),(0,a.kt)("li",{parentName:"ol"},"Support config dubbo consumer pool."),(0,a.kt)("li",{parentName:"ol"},"Support DividePlugin failover retry."),(0,a.kt)("li",{parentName:"ol"},"Support websocket client configuration."),(0,a.kt)("li",{parentName:"ol"},"Support config netty thread pool in HttpClient."),(0,a.kt)("li",{parentName:"ol"},"Support MemoryLimitedLinkedBlockingQueue."),(0,a.kt)("li",{parentName:"ol"},"Support alibaba dubbo plugin shared thread pool."),(0,a.kt)("li",{parentName:"ol"},"Support grpc plugin shared thread pool."),(0,a.kt)("li",{parentName:"ol"},"Add Metrics Plugin."),(0,a.kt)("li",{parentName:"ol"},"Add Cache Plugin."),(0,a.kt)("li",{parentName:"ol"},"Add logging rocketmq plugin.")),(0,a.kt)("h3",{id:"enhancement"},"Enhancement"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Test combination of Param mapping, Rewrite plugin,"),(0,a.kt)("li",{parentName:"ol"},"Test combination of Param mapping and Redirect plugin."),(0,a.kt)("li",{parentName:"ol"},"Test combination of RateLimiter and Rewrite plugin."),(0,a.kt)("li",{parentName:"ol"},"Test combination of RateLimiter and Redirect plugin."),(0,a.kt)("li",{parentName:"ol"},"Test combination of Request and Redirect plugin."),(0,a.kt)("li",{parentName:"ol"},"Test combination of Request and Rewrite plugin."),(0,a.kt)("li",{parentName:"ol"},"Test combination of JWT and RateLimiter plugin."),(0,a.kt)("li",{parentName:"ol"},"Test combination of JWT and Redirect plugin."),(0,a.kt)("li",{parentName:"ol"},"Test combination of JWT and Rewrite plugin."),(0,a.kt)("li",{parentName:"ol"},"Add integrated test of Resilience4j plugin."),(0,a.kt)("li",{parentName:"ol"},"Add integrated test of Hystrix plugin."),(0,a.kt)("li",{parentName:"ol"},"Update junit4 to junit5."),(0,a.kt)("li",{parentName:"ol"},"Add shenyu-examples-springmvc-tomcat."),(0,a.kt)("li",{parentName:"ol"},"Optimize the password encryption."),(0,a.kt)("li",{parentName:"ol"},"Optimize and verify shenyu-admin module interface parameters."),(0,a.kt)("li",{parentName:"ol"},"Optimize the configurable Shenyu agent log collection."),(0,a.kt)("li",{parentName:"ol"},"Optimize code about data init when sync data."),(0,a.kt)("li",{parentName:"ol"},"Add unit test for LoggingRocketMQPlugin")),(0,a.kt)("h3",{id:"refactor"},"Refactor"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Used Wheel-Timer instead of ScheduledExecutorService class."),(0,a.kt)("li",{parentName:"ol"},"Remove DisruptorProvider#onData(final Consumer<DataEvent",">"," function )"),(0,a.kt)("li",{parentName:"ol"},"Synchronized instance rather than class in MetadataExecutorSubscriber."),(0,a.kt)("li",{parentName:"ol"},"Refactor admin buildHandle about register uri."),(0,a.kt)("li",{parentName:"ol"},"Spring cloud client auto set port."),(0,a.kt)("li",{parentName:"ol"},"Refactor jwt support multi-level tokens."),(0,a.kt)("li",{parentName:"ol"},"Remove monitor plugin."),(0,a.kt)("li",{parentName:"ol"},"Change logback theme."),(0,a.kt)("li",{parentName:"ol"},"remove shenyu-agent.")),(0,a.kt)("h3",{id:"bug-fix"},"Bug Fix"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fix init CommonUpstreamUtils NPE."),(0,a.kt)("li",{parentName:"ol"},"Make a judgment on the failure of Nacos registration."),(0,a.kt)("li",{parentName:"ol"},"Fix NPE when login with non-existent user."),(0,a.kt)("li",{parentName:"ol"},"Fix double log."),(0,a.kt)("li",{parentName:"ol"},"Fix misspelled token."),(0,a.kt)("li",{parentName:"ol"},"Fix retryCount not work bug."),(0,a.kt)("li",{parentName:"ol"},"Fix token parse error."),(0,a.kt)("li",{parentName:"ol"},"Fix the trouble of big data in Websocket."),(0,a.kt)("li",{parentName:"ol"},"Fix NettyHttpClientPlugin did not retry when failed."),(0,a.kt)("li",{parentName:"ol"},"Fix CVE-2021-41303."),(0,a.kt)("li",{parentName:"ol"},"Fix judgment of the contains condition of all plugins does not work."),(0,a.kt)("li",{parentName:"ol"},"Fix http headers lose bug."),(0,a.kt)("li",{parentName:"ol"},"Fix Bug The Rewrite Plugin should support {PathVariable} request."),(0,a.kt)("li",{parentName:"ol"},"Fix Bug about data sync with Nacos."),(0,a.kt)("li",{parentName:"ol"},"Fix Nacos namespace config."),(0,a.kt)("li",{parentName:"ol"},"Fix NPE or websocket proxy fails when the context-path plug-in is opened."),(0,a.kt)("li",{parentName:"ol"},"Fix http registers the client plug-in port occupancy detection.")))}m.isMDXComponent=!0}}]);