import{r as y,j as o}from"./jsx-runtime-Lfnj0zCF.js";import{a as p,b as w}from"./heading-CZSKIRBN.js";import{L as j}from"./components-DXooqyZL.js";import{c as d}from"./config-AqcvRU3G.js";const k="_link_1h1qj_2",b={link:k},h=["txt","png","jpg"];function $(t){const e=h.includes(t?.split(".").pop());return t?.includes("://")||t?.[0]==="#"||e}const v=y.forwardRef(({rel:t,target:e,children:r,secondary:s,className:n,href:a,...u},_)=>{const m=a?.includes("://"),x=t||(m?"noreferrer noopener":void 0),f=e||(m?"_blank":void 0),g={className:p(b.link,n),"data-secondary":s,rel:x,href:a,target:f,ref:_,...u};return $(a)?o.jsx("a",{...g,href:a,children:r}):o.jsx(j,{unstable_viewTransition:!0,prefetch:"intent",...g,to:a,children:r})}),E="_footer_gmxrz_2",L="_link_gmxrz_16",N="_date_gmxrz_20",i={footer:E,link:L,date:N},S=({className:t})=>o.jsx("footer",{className:p(i.footer,t),children:o.jsxs(w,{size:"s",align:"center",children:[o.jsx("span",{className:i.date,children:`© ${new Date().getFullYear()} ${d.name}.`}),o.jsx(v,{secondary:!0,className:i.link,href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})}),z="_section_cvvm4_2",T={section:z},q=y.forwardRef(({as:t="div",children:e,className:r,...s},n)=>o.jsx(t,{className:p(T.section,r),ref:n,...s,children:e})),{name:c,url:l,twitter:V}=d,F=`${l}/social-image.png`;function C({title:t,description:e,prefix:r=c,ogImage:s=F}){const n=[r,t].filter(Boolean).join(" | ");return[{title:n},{name:"description",content:e},{name:"author",content:c},{property:"og:image",content:s},{property:"og:image:alt",content:"Banner for the site"},{property:"og:image:width",content:"1280"},{property:"og:image:height",content:"800"},{property:"og:title",content:n},{property:"og:site_name",content:c},{property:"og:type",content:"website"},{property:"og:url",content:l},{property:"og:description",content:e},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:description",content:e},{property:"twitter:title",content:n},{property:"twitter:site",content:l},{property:"twitter:creator",content:V},{property:"twitter:image",content:s}]}export{S as F,v as L,q as S,C as b};
