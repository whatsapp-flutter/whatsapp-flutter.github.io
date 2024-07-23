"use strict";(self.webpackChunkwhatsapp_flutter=self.webpackChunkwhatsapp_flutter||[]).push([[6500],{4636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=n(4848),s=n(8453);const d={title:"\u260e\ufe0f Send a Contact",sidebar_position:3},i=void 0,c={id:"methods/messages/send-a-contact",title:"\u260e\ufe0f Send a Contact",description:"Send a contact details to the specified phone number",source:"@site/docs/methods/messages/send-a-contact.md",sourceDirName:"methods/messages",slug:"/methods/messages/send-a-contact",permalink:"/docs/methods/messages/send-a-contact",draft:!1,unlisted:!1,editUrl:"https://github.com/whatsapp-flutter/whatsapp-flutter.github.io/tree/main/docs/methods/messages/send-a-contact.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u260e\ufe0f Send a Contact",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcac Send a template",permalink:"/docs/methods/messages/send-a-template"},next:{title:"\ud83d\udc41\u200d\ud83d\udde8 Mark as Read",permalink:"/docs/methods/messages/seen-a-message"}},a={},o=[];function h(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Send a contact details to the specified phone number"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-dart",children:'await client.sendContactDetails(\r\n    phoneNumber: phoneNumber,\r\n    dateOfBirth: "1990-01-01",\r\n    addresses: [{\r\n        "street": "Ajmer",\r\n        "city": "Ajmer",\r\n        "state": "Rajasthan",\r\n        "zip": "305001",\r\n        "country": "India",\r\n        "country_code": "in",\r\n        "type": "contact",\r\n    }],\r\n    emails: [{\r\n        "email": "me@rohitchouhan.com",\r\n        "type": "contact"\r\n    }],\r\n    organization: {\r\n        "company": "Codebrine",\r\n        "department": "IT",\r\n        "title": "Founder"\r\n    },\r\n    person: {\r\n        "formatted_name": "Rohit Chouhan",\r\n        "first_name": "Rohit",\r\n        "last_name": "Chouhan",\r\n        "middle_name": "",\r\n        "suffix": "Mr.",\r\n        "prefix": "Mr."\r\n    },\r\n    phones: [{\r\n        "phone": "+919999999999",\r\n        "type": "Home"\r\n    }],\r\n    urls: [{\r\n        "url": "https://rohitchouhan.com",\r\n        "type": "Personal Website"\r\n    }],\r\n);\n'})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"param"}),(0,r.jsx)(t.th,{children:"type"}),(0,r.jsx)(t.th,{children:"required"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"phoneNumber"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"Phone number with county code and plus."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"dateOfBirth"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsxs)(t.td,{children:["Date of Birth ",(0,r.jsx)(t.code,{children:"YYYY-MM-DD"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"addresses"})}),(0,r.jsx)(t.td,{children:"List<Map<String, dynamic>>"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"List of Address"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"emails"})}),(0,r.jsx)(t.td,{children:"List<Map<String, dynamic>>"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"List of Emails"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"organization"})}),(0,r.jsx)(t.td,{children:"Map<String, dynamic>"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"Organization Details"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"person"})}),(0,r.jsx)(t.td,{children:"Map<String, dynamic>"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"Person Information"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"phone"})}),(0,r.jsx)(t.td,{children:"List<Map<String, dynamic>>"}),(0,r.jsx)(t.td,{children:"yes"}),(0,r.jsx)(t.td,{children:"Phone Details"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"url"})}),(0,r.jsx)(t.td,{children:"List<Map<String, dynamic>>"}),(0,r.jsx)(t.td,{children:"no"}),(0,r.jsx)(t.td,{children:"List of Webpages"})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);