"use strict";(self.webpackChunkwhatsapp_flutter=self.webpackChunkwhatsapp_flutter||[]).push([[6481],{7506:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=n(4848),i=n(8453);const r={title:"\u270f\ufe0f Update Business Profile",sidebar_position:2},d=void 0,l={id:"methods/account/update-business-profile",title:"\u270f\ufe0f Update Business Profile",description:"Update your whatsapp business profile details",source:"@site/docs/methods/account/update-business-profile.md",sourceDirName:"methods/account",slug:"/methods/account/update-business-profile",permalink:"/docs/methods/account/update-business-profile",draft:!1,unlisted:!1,editUrl:"https://github.com/whatsapp-flutter/whatsapp-flutter.github.io/tree/main/docs/methods/account/update-business-profile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u270f\ufe0f Update Business Profile",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbb Get Business Profile",permalink:"/docs/methods/account/get-busniess-profile"},next:{title:"\ud83e\udd1d Account Migration",permalink:"/docs/methods/account/account-migration"}},c={},o=[{value:"Supported Industry",id:"supported-industry",level:2}];function h(e){const s={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Update your whatsapp business profile details"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-dart",children:'await whatsapp.updateBusinessProfile(\r\n    about: "Welcome to my shop.",\r\n    address: "Ajmer, Rajasthan",\r\n    description: "We sell any kind of toys.",\r\n    industry: "OTHER",\r\n    email: "buy@example.com",\r\n    websites: [\r\n        "https://example.com",\r\n        "https://demo.com"\r\n    ],\r\n    profilePictureHandle: "profilePictureHandle",\r\n);\n'})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"param"}),(0,t.jsx)(s.th,{children:"type"}),(0,t.jsx)(s.th,{children:"required"}),(0,t.jsx)(s.th,{children:"description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"about"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"About Status"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"address"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"Your Business Address"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"description"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"Your Business Details"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"industry"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"Your Business Category"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"email"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"Your Business Email Address"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"website"})}),(0,t.jsx)(s.td,{children:"List<String>"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"Your Business Websites"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"profilePictureHandle"})}),(0,t.jsx)(s.td,{children:"String"}),(0,t.jsx)(s.td,{children:"no"}),(0,t.jsx)(s.td,{children:"Business Profile Pic"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"supported-industry",children:"Supported Industry"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"OTHER"}),"\n",(0,t.jsx)(s.li,{children:"AUTO"}),"\n",(0,t.jsx)(s.li,{children:"BEAUTY"}),"\n",(0,t.jsx)(s.li,{children:"APPAREL"}),"\n",(0,t.jsx)(s.li,{children:"EDU"}),"\n",(0,t.jsx)(s.li,{children:"ENTERTAIN"}),"\n",(0,t.jsx)(s.li,{children:"EVENT_PLAN"}),"\n",(0,t.jsx)(s.li,{children:"FINANCE"}),"\n",(0,t.jsx)(s.li,{children:"GROCERY"}),"\n",(0,t.jsx)(s.li,{children:"GOVT"}),"\n",(0,t.jsx)(s.li,{children:"HOTEL"}),"\n",(0,t.jsx)(s.li,{children:"HEALTH"}),"\n",(0,t.jsx)(s.li,{children:"NONPROFIT"}),"\n",(0,t.jsx)(s.li,{children:"PROF_SERVICES"}),"\n",(0,t.jsx)(s.li,{children:"RETAIL"}),"\n",(0,t.jsx)(s.li,{children:"TRAVEL"}),"\n",(0,t.jsx)(s.li,{children:"RESTAURANT"}),"\n",(0,t.jsx)(s.li,{children:"ALCOHOL"}),"\n",(0,t.jsx)(s.li,{children:"ONLINE_GAMBLING"}),"\n",(0,t.jsx)(s.li,{children:"PHYSICAL_GAMBLING"}),"\n",(0,t.jsx)(s.li,{children:"OTC_DRUGS"}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var t=n(6540);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);