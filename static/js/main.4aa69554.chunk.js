(this.webpackJsonpfeedapp=this.webpackJsonpfeedapp||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),r=a.n(c),o=(a(88),a(89)),s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))},l=a(4);r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o.a,{})}),document.getElementById("root")),s()},72:function(e,t,a){"use strict";a.d(t,"b",(function(){return Se})),a.d(t,"a",(function(){return Ie}));var n=a(14),i=a(0),c=a.n(i),r=a(21),o=a(22),s=a(197),l=a(95),d=a(3),u=a(190),j=a(192),b=a(194),p=a(195),h=a.p+"static/media/logo.6a64c39c.png",m=a(4),f=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(l.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"#24b877",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1,width:"20%",textalign:"right"},caption:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"0 8px",flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{paddingTop:50,height:"100vh",overflow:"auto"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column",color:"#fff"},addIcon:{height:45,width:45}}})),g=function(e){var t=e.children,a=f();return Object(m.jsxs)("div",{children:[Object(m.jsx)(j.a,{}),Object(m.jsx)(b.a,{position:"absolute",className:Object(d.a)(a.appBar),children:Object(m.jsx)(p.a,{className:a.toolbar,children:Object(m.jsx)("img",{src:h,style:{height:90,width:230},alt:"logo 1"})})}),Object(m.jsx)("main",{className:a.content,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:a.appBarSpacer}),t]})})]})},O=a(44),x=a(198),v=a(199),y=a(200),w=a(201),C=a(202),S=a(203),I=a(220),E=a(196),M=a(59),k=a(103),D=a.n(k),N=a(104),F=a.n(N),z=a(102),B=a.n(z),U=a.p+"static/media/event.21efc98c.jpeg",_=a(100),T=a.n(_),q=function(e){e.id;var t=Object(i.useState)(!1),a=Object(n.a)(t,2),c=a[0],r=a[1];Object(i.useEffect)((function(){}),[c]);return Object(m.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-end"},children:Object(m.jsxs)(E.a,{"aria-label":"add to favorites",onClick:function(){r(!c)},children:[Object(m.jsx)(T.a,{style:{color:c?"red":"gray"}}),Object(m.jsx)(M.a,{variant:"caption",component:"p",children:"1k"})]})})},A=a(101),L=(a(139),function(e){var t=e.feedImages;return Object(m.jsx)("div",{children:Object(m.jsx)(A.Slide,{easing:"ease",children:t.map((function(e,t){return Object(m.jsx)("div",{className:"each-slide",children:Object(m.jsx)("div",{className:"image-container",children:Object(m.jsx)("img",{src:e.imageUrl,style:{width:"100%",height:350},alt:"slide"})})})}))})})}),R=a(214),H=a.p+"static/media/avatar.c062ad6d.png",P=function(e){var t=Math.floor(((new Date).valueOf()-new Date(e).valueOf())/1e3);return Math.round(t/31557600)>=2?Math.round(t/31557600)+" years ago":Math.round(t/31557600)>=1?"1 year ago":Math.round(t/2626560)>=2?Math.round(t/2626560)+" months ago":Math.round(t/2626560)>=1?"1 month ago":Math.round(t/604800)>=2?Math.round(t/604800)+" weeks ago":Math.round(t/604800)>=1?"1 week ago":Math.round(t/86400)>=2?Math.round(t/86400)+" days ago":Math.round(t/86400)>=1?"1 day ago":Math.round(t/3600)>=2?Math.round(t/3600)+" hours ago":Math.round(t/3600)>=1?"1 hour ago":Math.round(t/60)>=2?Math.round(t/60)+" minutes ago":Math.round(t/60)>=1?"1 minute ago":t>=2?t+" seconds ago":t+"1 second ago"},W=Object(u.a)((function(e){return{root:{maxWidth:"100%"},conatainer:{marginBottom:30},media:{height:0,padding:15,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"#000"},image:{width:"100%",height:"100%"}}})),J=function(e){var t=e.data,a=e.index,r=W(),o=c.a.useState(!1),l=Object(n.a)(o,2),u=l[0],j=l[1];Object(i.useEffect)((function(){0===a&&j(!0)}),[a]);var b=JSON.parse(t.object_urls)[0],p="",h=[];return b?b.imageUrl.indexOf("png")>0||b.imageUrl.indexOf("jpg")>0||b.imageUrl.indexOf("jpeg")>0?(p=b.imageUrl,h=JSON.parse(t.object_urls)):h=[]:p=U,Object(m.jsx)(s.a,{className:r.conatainer,children:Object(m.jsx)(R.a,{boxShadow:15,bgcolor:"background.paper",children:Object(m.jsxs)(x.a,{className:r.root,children:[Object(m.jsx)(v.a,{avatar:Object(m.jsx)(I.a,{"aria-label":"recipe",className:r.avatar,children:Object(m.jsx)("img",{src:H,alt:"event",className:r.image})}),action:Object(m.jsx)(E.a,{"aria-label":"settings",children:Object(m.jsx)(B.a,{})}),title:t.compiagn_title,subheader:P(t.createAt)}),h.length>1?Object(m.jsx)(L,{feedImages:h}):p&&Object(m.jsx)(y.a,{className:r.media,image:p,title:"Event"}),Object(m.jsx)(w.a,{children:Object(m.jsx)(M.a,{variant:"body2",color:"textSecondary",component:"p",children:t.compiagn_title})}),Object(m.jsxs)(C.a,{disableSpacing:!0,children:[Object(m.jsx)(E.a,{"aria-label":"add to favorites",children:Object(m.jsx)(q,{})}),Object(m.jsx)(E.a,{"aria-label":"share",children:Object(m.jsx)(D.a,{})}),Object(m.jsx)(E.a,{className:Object(d.a)(r.expand,Object(O.a)({},r.expandOpen,u)),onClick:function(){j(!u)},"aria-expanded":u,"aria-label":"show more",children:Object(m.jsx)(F.a,{})})]}),Object(m.jsx)(S.a,{in:u,timeout:"auto",unmountOnExit:!0,children:Object(m.jsx)(w.a,{children:Object(m.jsx)(M.a,{paragraph:!0,children:t.description})})})]})})})},G=a(17),V=a.n(G),Q=a(27),Y=a(109),K=a(205),X=a(218),Z=a(207),$=a(206),ee=a(224),te=a(219),ae=a(217),ne=a(71),ie=a(107),ce=a.n(ie),re=a(106),oe=a.n(re),se=a(105),le=a.n(se),de=a(204),ue=function(e){var t=e.uploadedImages,a=e.addOne,c=e.setFilecomponents,s=e.index,l=Object(o.b)(),d=Object(i.useState)(""),u=Object(n.a)(d,2),j=u[0],b=u[1],p=Object(i.useState)(""),h=Object(n.a)(p,2),f=h[0],g=h[1],O=Object(i.useState)(""),x=Object(n.a)(O,2),v=x[0],y=x[1],w=Object(i.useState)(!1),C=Object(n.a)(w,2),S=C[0],I=C[1],E=function(){var e=Object(Q.a)(V.a.mark((function e(){var a,n,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j.split(";"),n={image:a[1],mime:v,name:f},e.next=4,l(Object(r.h)(n));case 4:"feed/uploadImage/fulfilled"===(i=e.sent).type&&(I(!0),t(i.payload.imageURL));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{children:j?Object(m.jsx)(de.a,{conatainer:!0,spacing:2,children:Object(m.jsxs)(de.a,{item:!0,xs:6,children:[Object(m.jsx)("img",{src:j,style:{height:100,width:"100%"},alt:"feed"}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[S?Object(m.jsx)(le.a,{style:{fontSize:35}}):Object(m.jsxs)("div",{style:{width:150,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(m.jsx)(oe.a,{style:{fontSize:35},onClick:function(){E(c[s],s)}}),Object(m.jsx)(M.a,{component:"p",variant:"p",children:"Upload to S3"})]}),Object(m.jsxs)("div",{style:{width:150,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(m.jsx)(ce.a,{style:{color:ne.a[500],fontSize:35},onClick:a}),Object(m.jsx)(M.a,{component:"p",variant:"p",children:"Add More"})]})]})]})}):Object(m.jsx)(K.a,{containerElement:"label",label:"My Label",children:Object(m.jsx)("input",{accept:"image/png, image/gif, image/jpeg",type:"file",onChange:function(e){if(e.target.files[0]){var t=e.target.files[0].name;g(t),y(e.target.files[0].type);var a=new FileReader;a.readAsDataURL(e.target.files[0]),a.onloadend=function(e){b(e.target.result)}}}})})})},je=a(221),be=a(223),pe=a(208),he=a(215),me=Object(u.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},formControl:{width:"100%"},selectEmpty:{marginTop:e.spacing(2)},dialog:{width:"100%"}}})),fe=[{compiagntitle:"Build a proper shelter for children studying at Quran and Hifdh school in Chad.",compiagnId:"1234"},{compiagntitle:"Qurbani Udhiyah for Orphans, Widows and Needy in Africa.",compiagnId:"78612"}],ge=function(){var e=me(),t=Object(o.c)(r.d),a=Object(o.b)(),s=Object(i.useState)(""),l=Object(n.a)(s,2),d=l[0],u=l[1],j=Object(i.useState)(""),b=Object(n.a)(j,2),p=b[0],h=b[1],f=Object(i.useState)(""),g=Object(n.a)(f,2),O=g[0],x=g[1],v=c.a.useState(!1),y=Object(n.a)(v,2),w=y[0],C=y[1],S=c.a.useState(!1),I=Object(n.a)(S,2),E=I[0],k=I[1],D=Object(i.useState)([]),N=Object(n.a)(D,2),F=N[0],z=N[1],B=Object(i.useState)(1),U=Object(n.a)(B,2),_=U[0],T=U[1],q=function(e,t){"clickaway"!==t&&C(!1)},A=function(e,t){"clickaway"!==t&&k(!1)};function L(e){z([].concat(Object(Y.a)(F),[e]))}for(var R=function(){var e=Object(Q.a)(V.a.mark((function e(t){var n,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=[],F.map((function(e,t){return n.push({type:"image",imageUrl:e}),0})),i={compiagn_id:d,compiagn_title:p,description:O,object_urls:n},e.next=7,a(Object(r.b)(i));case 7:"feed/createFeed/fulfilled"===e.sent.type?(C(!0),H(),T(1)):k(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){T(1),a(Object(r.g)({isVisible:!1}))},P=[],W=function(){T(_+1)},J=function(e,t){t>-1&&(P.splice(t,1),T(P.length))},G=function(){},ne=0;ne<_;ne++)P.push(Object(m.jsx)(ue,{index:ne,uploadedImages:L,addOne:W,removeOne:J,setFilecomponents:P,uploadImage:G}));return Object(m.jsxs)(X.a,{open:t,onClose:H,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:e.dialog,children:[Object(m.jsx)($.a,{id:"alert-dialog-title",children:Object(m.jsx)(M.a,{component:"h1",variant:"h5",children:"Create New Feed"})}),Object(m.jsxs)(Z.a,{style:{width:"500px"},children:[Object(m.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(m.jsxs)(pe.a,{variant:"outlined",className:e.formControl,children:[Object(m.jsx)(je.a,{id:"demo-simple-select-outlined-label",children:"Compiagn"}),Object(m.jsx)(he.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:d,onChange:function(e){var t=fe.find((function(t){return t.compiagnId===e.target.value}));u(e.target.value),h(t.compiagntitle)},label:"compiagn",children:fe.map((function(e,t){return Object(m.jsx)(be.a,{value:e.compiagnId,children:e.compiagntitle})}))})]}),Object(m.jsx)(ee.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,multiline:!0,rows:5,name:"feedDescription",label:"Feed Description",id:"feedDescription",onChange:function(e){return x(e.target.value)}}),P,Object(m.jsx)(K.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:e.submit,onClick:R,children:"POST"})]}),Object(m.jsx)(te.a,{open:E,autoHideDuration:6e3,onClose:A,children:Object(m.jsx)(ae.a,{onClose:A,severity:"error",children:"Something went wrong!"})}),Object(m.jsx)(te.a,{open:w,autoHideDuration:6e3,onClose:q,children:Object(m.jsx)(ae.a,{onClose:q,severity:"success",children:"Created Successfully!"})})]})]})},Oe=a(212),xe=a(108),ve=a.n(xe),ye=function(){var e=Object(o.b)();return Object(m.jsx)("div",{style:{position:"fixed",bottom:50,right:50},children:Object(m.jsx)(Oe.a,{onClick:function(){e(Object(r.g)({isVisible:!0}))},style:{backgroundColor:"#24b877"},"aria-label":"add",children:Object(m.jsx)(ve.a,{style:{color:"#fff"}})})})},we=a(213),Ce=Object(u.a)((function(e){return{title:{marginLeft:20,marginBottom:10}}})),Se=function(){var e=Ce(),t=Object(o.b)(),a=Object(i.useState)([]),c=Object(n.a)(a,2),l=c[0],d=c[1],u=Object(i.useState)(!1),j=Object(n.a)(u,2),b=j[0],p=j[1],h=Object(o.c)((function(e){return e.feedReducer.isCreated}));return Object(i.useEffect)((function(){p(!1);Promise.resolve().then((function(){return t(Object(r.e)())})).then((function(e){e.payload&&d(e.payload.items)})).then((function(){p(!0)})).catch((function(e){return console.log(e)}))}),[t,h]),Object(m.jsxs)(g,{children:[Object(m.jsxs)(s.a,{maxWidth:"md",children:[Object(m.jsx)(M.a,{component:"h1",variant:"h4",color:"inherit",noWrap:!0,className:e.title,children:"Feeds"}),b?l&&l.map((function(e,t){return Object(m.jsx)(J,{index:t,data:e},t)})):Object(m.jsx)(we.a,{})]}),Object(m.jsx)(ge,{}),Object(m.jsx)(ye,{})]})},Ie=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"create feed"})})}},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={BASE_URL:"https://api.github.com/",FETCH_FEED:"https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/get-all-feeds",CREATE_FEED:"https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/create-feed",UPLOAD_IMAGE:"https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/image-upload",UPDATE_FEED:"https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/update-feed-by-Id/",FETCH_FEEDBYID:"https://elm9wzmqq4.execute-api.ap-south-1.amazonaws.com/dev/get-feed-by-Id/"}},88:function(e,t,a){},89:function(e,t,a){"use strict";(function(e){var n=a(0),i=a(90),c=a(22),r=a(21),o=a(92),s=a.n(o),l=a(80),d=a(93),u=(a(88),a(4)),j=Object(r.c)(s.a),b=j.persistor,p=j.store;t.a=function(){return Object(n.useEffect)((function(){e.locales=r.a,e.config=l.a,Object(r.f)(l.a)}),[]),Object(u.jsx)(c.a,{store:p,children:Object(u.jsx)(i.a,{loading:null,persistor:b,children:Object(u.jsx)("div",{className:"back",children:Object(u.jsx)(d.a,{})})})})}}).call(this,a(76))},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(0);var n=a(79),i=a(94),c=a(4),r=function(){return Object(c.jsx)(n.a,{children:Object(c.jsx)(i.a,{})})}},94:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return r}));a(0);var n=a(12),i=a(72),c=a(4),r=function(){return Object(c.jsxs)(n.c,{children:[Object(c.jsx)(n.a,{exact:!0,path:e.locales.pages.createFeed,component:i.a}),Object(c.jsx)(n.a,{exact:!0,path:e.locales.pages.feed,component:i.b}),Object(c.jsx)(n.a,{exact:!0,path:"/",component:i.b})]})}}).call(this,a(76))}},[[142,1,2]]]);
//# sourceMappingURL=main.4aa69554.chunk.js.map