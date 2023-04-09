"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={title:"Radarr"},i=void 0,l={unversionedId:"applications/download-tools/radarr",id:"applications/download-tools/radarr",title:"Radarr",description:"Homepage: radarr",source:"@site/docs/applications/download-tools/radarr.md",sourceDirName:"applications/download-tools",slug:"/applications/download-tools/radarr",permalink:"/docs/applications/download-tools/radarr",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/download-tools/radarr.md",tags:[],version:"current",frontMatter:{title:"Radarr"},sidebar:"tutorialSidebar",previous:{title:"pyLoad",permalink:"/docs/applications/download-tools/pyload"},next:{title:"Sabnzbd",permalink:"/docs/applications/download-tools/sabnzbd"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://radarr.video/"},"radarr")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Radarr")," is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"radarr_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"/inventories/[my inventory]/group_vars/nas.yml")," file."),(0,a.kt)("p",null,"The Radarr web interface can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://ansible_nas_host_or_ip:7878")," by default"),(0,a.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"First make sure Radarr has permissions to write and read the ",(0,a.kt)("inlineCode",{parentName:"strong"},"/download"),", and ",(0,a.kt)("inlineCode",{parentName:"strong"},"/movies")," folders"),". Do this by ensuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"radarr_movies_directory:")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"radarr_download_directory")," settings are correct."),(0,a.kt)("p",null,"Radarr will get the file path from the Download client. On default settings with Transmission the path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/storage/downloads/complete"),". You will need to create a path mapping in the ",(0,a.kt)("strong",{parentName:"p"},"Remote Path Mappings")," settings under ",(0,a.kt)("strong",{parentName:"p"},"Download Client"),"  to point to your internal path that is by default ",(0,a.kt)("inlineCode",{parentName:"p"},"/downloads"),".  ",(0,a.kt)("em",{parentName:"p"},"If you have difficulties with the path mapping you could also just add a new volume path for the Transmission container and use ",(0,a.kt)("inlineCode",{parentName:"em"},"/downloads")," as the download directory.")),(0,a.kt)("p",null,"For Radarr to understand that the ",(0,a.kt)("inlineCode",{parentName:"p"},"/movies")," folder is a folder, you'll need to add a new subfolder into it.\nYou can also do this by adding a random movie to the folder. Keep in mind to have the internal setting ",(0,a.kt)("strong",{parentName:"p"},"Create empty movie folders")," on ",(0,a.kt)("strong",{parentName:"p"},"yes")),(0,a.kt)("p",null,"Comprehensive setup information can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Radarr/Radarr/wiki/Setup-Guide"},"Radarr GitHub wiki")))}c.isMDXComponent=!0}}]);