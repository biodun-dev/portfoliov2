import{j as e,r as g}from"./jsx-runtime-Lfnj0zCF.js";import{a as i,T as z,m as N,c as l,t as k,H as j,b as x,B as f,n as _}from"./heading-BjRlKi4B.js";import{I as h}from"./image-DFroI6Pm.js";import{S as w}from"./meta-BEqd2dZY.js";import{u as I}from"./useParallax-BpL6gIpP.js";const b="_project_7xwsz_20",v="_section_7xwsz_29",y="_sectionInner_7xwsz_44",C="_sectionBackground_7xwsz_89",P="_backgroundImage_7xwsz_138",S="_backgroundImageElement_7xwsz_157",B="_backgroundScrim_7xwsz_176",T="_header_7xwsz_192",H="_headerContent_7xwsz_212",R="_details_7xwsz_250",E="_title_7xwsz_262",D="_description_7xwsz_272",M="_linkButton_7xwsz_282",V="_meta_7xwsz_292",$="_metaItem_7xwsz_307",q="_image_7xwsz_327",A="_sectionContent_7xwsz_335",F="_sectionHeading_7xwsz_358",G="_sectionText_7xwsz_362",J="_textRow_7xwsz_369",K="_sectionColumns_7xwsz_425",t={project:b,section:v,sectionInner:y,sectionBackground:C,backgroundImage:P,backgroundImageElement:S,backgroundScrim:B,header:T,headerContent:H,details:R,title:E,description:D,linkButton:M,meta:V,metaItem:$,image:q,sectionContent:A,sectionHeading:F,sectionText:G,textRow:J,sectionColumns:K},u=300;function Y({title:s,description:n,linkLabel:a="Visit website",url:o,roles:c,className:r}){return e.jsx(w,{className:i(t.header,r),as:"section",children:e.jsxs("div",{className:t.headerContent,style:l({initDelay:_(u)}),children:[e.jsxs("div",{className:t.details,children:[e.jsx(j,{className:t.title,level:2,as:"h1",children:s}),e.jsx(x,{className:t.description,size:"xl",as:"p",children:n}),!!o&&e.jsx(f,{secondary:!0,iconHoverShift:!0,className:t.linkButton,icon:"chevron-right",href:o,children:a})]}),!!(c!=null&&c.length)&&e.jsx("ul",{className:t.meta,children:c==null?void 0:c.map((d,m)=>e.jsx("li",{className:t.metaItem,style:l({delay:_(u+300+m*140)}),children:e.jsx(x,{secondary:!0,children:d})},d))})]})})}const Z=({className:s,...n})=>e.jsx("article",{className:i(t.project,s),...n}),ee=g.forwardRef(({className:s,light:n,padding:a="both",fullHeight:o,backgroundOverlayOpacity:c=.9,backgroundElement:r,children:d,...m},p)=>e.jsxs("section",{className:i(t.section,s),"data-light":n,"data-full-height":o,ref:p,...m,children:[!!r&&e.jsx("div",{className:t.sectionBackground,style:l({opacity:c}),children:r}),e.jsx(w,{className:t.sectionInner,"data-padding":a,children:d})]})),te=({opacity:s=.7,className:n,...a})=>{const o=g.useRef();return I(.6,c=>{o.current&&o.current.style.setProperty("--offset",`${c}px`)}),e.jsx(z,{in:!0,timeout:N(k.base.durationM),children:({visible:c,nodeRef:r})=>e.jsxs("div",{className:i(t.backgroundImage,n),"data-visible":c,ref:r,children:[e.jsx("div",{className:t.backgroundImageElement,ref:o,children:e.jsx(h,{cover:!0,alt:"",role:"presentation",...a})}),e.jsx("div",{className:t.backgroundScrim,style:l({opacity:s})})]})})},se=({className:s,alt:n,...a})=>e.jsx("div",{className:i(t.image,s),children:e.jsx(h,{reveal:!0,alt:n,delay:300,...a})}),L=({className:s,width:n="l",...a})=>e.jsx("div",{className:i(t.sectionContent,s),"data-width":n,...a}),ne=({className:s,level:n=3,as:a="h2",...o})=>e.jsx(j,{className:i(t.sectionHeading,s),as:a,level:n,align:"auto",...o}),ae=({className:s,...n})=>e.jsx(x,{className:i(t.sectionText,s),size:"l",as:"p",...n}),ce=({center:s,stretch:n,justify:a="center",width:o="m",noMargin:c,className:r,centerMobile:d,...m})=>e.jsx("div",{className:i(t.textRow,r),"data-center":s,"data-stretch":n,"data-center-mobile":d,"data-no-margin":c,"data-width":o,"data-justify":a,...m}),oe=({className:s,centered:n,...a})=>e.jsx(L,{className:i(t.sectionColumns,s),"data-centered":n,...a});export{Z as P,te as a,Y as b,ee as c,L as d,ce as e,ne as f,ae as g,se as h,oe as i};
