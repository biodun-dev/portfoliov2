import{r as e,j as H}from"./jsx-runtime-Lfnj0zCF.js";import{u as he,r as ge}from"./image-Ccztj2IB.js";import{W as xe,h as ce,e as ye,S as De,G as J,A as we,D as $,i as q,P as Ue,j as K,M as V,O as Me,k as Se,d as Q,r as Re,c as be,a as Te,t as ee,m as Ce,C as te,l as j,n as Le}from"./three-BQxyRQWG.js";import{u as ie,c as Pe,a as Ae,n as ke}from"./heading-CZSKIRBN.js";import{M as re}from"./route-DD5kvw9z.js";import{t as ze}from"./throttle-BgiUmwhn.js";import{u as ne}from"./use-spring-BzNdqae3.js";import{a as X}from"./animate-uD7o0SaS.js";import"./components-DXooqyZL.js";import"./BC-1llT3Oc7.js";import"./sawl-CVL3aAIR.js";import"./meta-DskA_ls7.js";import"./config-AqcvRU3G.js";import"./preload-helper-CLcXU_4U.js";import"./decoder-text-Cfz0554w.js";import"./visually-hidden-UiEg1yYX.js";import"./useScrollToHash-BHuEttXc.js";import"./divider-PRELGclo.js";import"./useWindowSize-B_qBlBYD.js";import"./index-B75Puh6V.js";const Ee={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},_e={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},je="_model_fphsv_2",Be="_canvas_fphsv_11",ae={model:je,canvas:Be},se={Frame:"Frame",Screen:"Screen"},oe={stiffness:40,damping:20,mass:1.4,restSpeed:.001},st=({models:L,show:w=!0,showDelay:P=0,cameraPosition:h={x:0,y:0,z:8},style:A,className:k,onLoad:B,alt:G,...z})=>{const[U,F]=e.useState(!1),p=e.useRef(),l=e.useRef(),i=e.useRef(),g=e.useRef(),r=e.useRef(),t=e.useRef(),v=e.useRef(),f=e.useRef(),d=e.useRef(),x=e.useRef(),o=e.useRef(),u=e.useRef(),n=e.useRef(),m=e.useRef(),y=e.useRef(),a=e.useRef(),E=e.useRef(),O=he(p,!1,{threshold:.2}),N=ie(),M=ne(0,oe),S=ne(0,oe);e.useEffect(()=>{const{clientWidth:s,clientHeight:c}=p.current;t.current=new xe({canvas:l.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(s,c),t.current.outputColorSpace=ce,i.current=new ye(36,s/c,.1,100),i.current.position.set(h.x,h.y,h.z),r.current=new De,g.current=new J,r.current.add(g.current);const D=new we(16777215,1.2),b=new $(16777215,1.1),T=new $(16777215,.8);T.position.set(-6,2,2),b.position.set(.5,0,.866),y.current=[D,b,T],y.current.forEach(C=>r.current.add(C)),v.current=new J,r.current.add(v.current),v.current.position.set(0,0,-.8),v.current.rotateX(Math.PI/2);const _=512,Y=8,Z=8,ue=1.5,le=.8,ve=3;f.current=new q(_,_),f.current.texture.generateMipmaps=!1,d.current=new q(_,_),d.current.texture.generateMipmaps=!1;const I=new Ue(Y,Z).rotateX(Math.PI/2),fe=new K({map:f.current.texture,opacity:le,transparent:!0});m.current=new V(I,fe),m.current.scale.y=-1,v.current.add(m.current),a.current=new V(I),a.current.visible=!1,v.current.add(a.current);const me=new K({color:16777215,opacity:0,transparent:!0});E.current=new V(I,me),E.current.rotateX(Math.PI),E.current.position.y-=1e-5,v.current.add(E.current),x.current=new Me(-8/2,Y/2,Z/2,-8/2,0,ue),x.current.rotation.x=Math.PI/2,v.current.add(x.current),o.current=new Se,o.current.userData.darkness={value:ve},o.current.onBeforeCompile=C=>{C.uniforms.darkness=o.current.userData.darkness,C.fragmentShader=`
        uniform float darkness;
        ${C.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},o.current.depthTest=!1,o.current.depthWrite=!1,u.current=new Q(Ee),u.current.depthTest=!1,n.current=new Q(_e),n.current.depthTest=!1;const pe=M.on("change",R),de=S.on("change",R);return()=>{f.current.dispose(),d.current.dispose(),Re(y.current),be(r.current),Te(t.current),pe(),de()}},[]);const W=e.useCallback(s=>{a.current.visible=!0,a.current.material=u.current,a.current.material.uniforms.tDiffuse.value=f.current.texture,u.current.uniforms.h.value=s*(1/256),t.current.setRenderTarget(d.current),t.current.render(a.current,x.current),a.current.material=n.current,a.current.material.uniforms.tDiffuse.value=d.current.texture,n.current.uniforms.v.value=s*(1/256),t.current.setRenderTarget(f.current),t.current.render(a.current,x.current),a.current.visible=!1},[]),R=e.useCallback(()=>{const c=r.current.background;r.current.background=null,r.current.overrideMaterial=o.current,t.current.setRenderTarget(f.current),t.current.render(r.current,x.current),r.current.overrideMaterial=null,W(5),W(5*.4),t.current.setRenderTarget(null),r.current.background=c,g.current.rotation.x=M.get(),g.current.rotation.y=S.get(),t.current.render(r.current,i.current)},[W,M,S]);return e.useEffect(()=>{const s=ze(c=>{const{innerWidth:D,innerHeight:b}=window,T={x:(c.clientX-D/2)/D,y:(c.clientY-b/2)/b};S.set(T.x/2),M.set(T.y/2)},100);return O&&!N&&window.addEventListener("mousemove",s),()=>{window.removeEventListener("mousemove",s)}},[O,N,M,S]),e.useEffect(()=>{const s=()=>{if(!p.current)return;const{clientWidth:c,clientHeight:D}=p.current;t.current.setSize(c,D),i.current.aspect=c/D,i.current.updateProjectionMatrix(),R()};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[R]),H.jsxs("div",{className:Ae(ae.model,k),"data-loaded":U,style:Pe({delay:ke(P)},A),ref:p,role:"img","aria-label":G,...z,children:[H.jsx("canvas",{className:ae.canvas,ref:l}),L.map((s,c)=>H.jsx(Ge,{renderer:t,modelGroup:g,show:w,showDelay:P,renderFrame:R,index:c,setLoaded:F,onLoad:B,model:s},JSON.stringify(s.position)))]})},Ge=({renderer:L,model:w,modelGroup:P,renderFrame:h,index:A,showDelay:k,setLoaded:B,onLoad:G,show:z})=>{const[U,F]=e.useState(),p=ie(),l=e.createRef();e.useEffect(()=>{const i=async(r,t)=>{r.colorSpace=ce,r.flipY=!1,r.anisotropy=L.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await L.current.initTexture(r),t.material.color=new te(16777215),t.material.transparent=!0,t.material.map=r};F({start:async()=>{const{texture:r,position:t,url:v}=w;let f,d;const[x,o]=await Promise.all([await ee.loadAsync(r.placeholder),await Ce.loadAsync(v)]);P.current.add(o.scene),o.scene.traverse(async n=>{n.material&&(n.material.color=new te(2039845)),n.name===se.Screen&&(l.current=n.clone(),l.current.material=n.material.clone(),n.parent.add(l.current),l.current.material.opacity=1,l.current.position.z+=.001,i(x,l.current),f=async()=>{const m=await ge(r),y=await ee.loadAsync(m);await i(y,n),X(1,0,{onUpdate:a=>{l.current.material.opacity=a,h()}})})});const u=new j(t.x,t.y,t.z);return p&&o.scene.position.set(...u.toArray()),w.animation===re.SpringUp&&(d=()=>{const n=new j(u.x,u.y-1,u.z);o.scene.position.set(...n.toArray()),X(n.y,u.y,{type:"spring",delay:(300*A+k)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:m=>{o.scene.position.y=m,h()}})}),w.animation===re.LaptopOpen&&(d=()=>{const n=o.scene.children.find(a=>a.name===se.Frame),m=new j(Le.degToRad(90),0,0),y=new j(0,0,0);return o.scene.position.set(...u.toArray()),n.rotation.set(...m.toArray()),X(m.x,y.x,{type:"spring",delay:(300*A+k+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:a=>{n.rotation.x=a,h()}})}),{loadFullResTexture:f,playAnimation:d}}})},[]),e.useEffect(()=>{if(!U||!z)return;let i;const g=async()=>{const{loadFullResTexture:r,playAnimation:t}=await U.start();B(!0),G?.(),p||(i=t()),await r(),p&&h()};return e.startTransition(()=>{g()}),()=>{i?.stop()}},[U,z])};export{st as Model};
