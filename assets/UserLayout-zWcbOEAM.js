import{u as k}from"./toastMessage-0GFOzgRD.js";import{c as m,o as i,a as l,F as b,r as M,n as g,b as t,t as c,u as y,d as V,e as H,f as S,g as _,h as a,i as x,w as n,j as d}from"./index-3to8NFAF.js";import{u as C}from"./loveStores-lgHbZZQ3.js";import{u as L}from"./cartStores-dhNOTVs4.js";import"./axios-G2rPRu76.js";const j={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},A={class:"toast-header"},F={class:"me-auto"},N=["onClick"],T={key:0,class:"toast-body"},W={__name:"ToastMessage",setup(w){const r=k(),{clearToast:u}=r,p=m(()=>r.messages);return(h,f)=>(i(),l("div",j,[(i(!0),l(b,null,M(p.value,(e,s)=>(i(),l("div",{key:`toast${s}`,class:g(["toast show",`toast${s}`]),role:"alert"},[t("div",A,[t("span",{class:g([`bg-${e.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),t("strong",F,c(e.title),1),t("button",{type:"button",class:"btn-close",onClick:B=>y(u)(s),"aria-label":"Close"},null,8,N)]),e.content?(i(),l("div",T,c(e.content),1)):V("",!0)],2))),128))]))}},G={class:"position-relative"},z={class:"navbar px-0 navbar-expand-lg navbar-light"},$=t("img",{style:{height:"50px"},src:"https://storage.googleapis.com/vue-course-api.appspot.com/yangapi/1710167769200.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2BP4%2BD13kdkZ8%2Bg9eeCZ5yNGQVElb6Wbi%2BLbIMeMm6ADxKgpd%2FK8qyCaz%2BILAfaCInt6%2Ft8Bjip3%2FQMxX1Z6fxpzaqdXTgjtBSWpInXrWfmDVqeUKxS7GNcpRBYVW0KvORXyyDLebAL2kC5H0zzXjhQolYK4VUVLTCHGt82vPRNBZITxleKTIlYdvic7xgDV4KVyTS%2F70ZnwqiELuD8Jtb1ZCqJklvjHF3kW5iNz1469a7%2FmV%2BRbHlN7XWl%2F4hqPj47tGBuJzwG3tYt%2BfDtp4DwB%2BtB5JpQaLINSwVQWXg%2F%2FOCWY9v5WHpXSSD8L3osCWMZ%2Fe3cwBqv%2F6Srd2%2BVX9g%3D%3D"},null,-1),q=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),I={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},R={class:"navbar-nav"},X=t("span",{class:"sr-only"},"(current)",-1),Y=t("i",{class:"fa-regular fa-heart fa-xl"},null,-1),K={class:"d-flex justify-content-center align-items-center rounded-circle text-white bg-primary h7",style:{width:"20px",position:"relative",top:"-37px",right:"-15px",height:"20px"}},Z=t("i",{class:"fas fa-shopping-cart fa-xl"},null,-1),P={class:"d-flex justify-content-center align-items-center rounded-circle text-white bg-primary h7",style:{width:"20px",position:"relative",top:"-37px",right:"-15px",height:"20px"}},J={class:"row justify-content-center my-auto"},Q=["innerHTML"],at={__name:"UserLayout",setup(w){const r=C(),{loveProducts:u}=r,p=L(),h=m({get(){return p.cart}}),f=H(S.currentRoute),e={UserHome:{url:"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",content:`<h2>探索無限可能性的玩具世界</h2>
          <p class="text-muted mb-0">
            歡迎來到我們的玩具天地！您將發現無盡的驚喜與樂趣。
          </p>
          <p class="text-muted mb-0">
            我們相信，玩具不僅是娛樂，更是啟發創意和夢想的工具。讓我們一同啟動夢想，探索未知的世界！
          </p>`,minheight:"100vh"},UserProducts:{url:"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",content:"<h2>Products</h2>",minheight:"50vh"},default:{url:"https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",content:`<h2>探索無限可能性的玩具世界</h2>
          <p class="text-muted mb-0">
            歡迎來到我們的玩具天地！您將發現無盡的驚喜與樂趣。
          </p>
          <p class="text-muted mb-0">
            我們相信，玩具不僅是娛樂，更是啟發創意和夢想的工具。讓我們一同啟動夢想，探索未知的世界！
          </p>`,minheight:"50vh"}},s=m(()=>e[f.value.name]??e.default);return(B,U)=>{const o=_("RouterLink"),D=_("RouterView");return i(),l(b,null,[a(W),t("div",G,[t("div",{class:"position-absolute",style:x([{top:"0",bottom:"0",left:"0",right:"0","background-position":"center center",opacity:"0.3"},{backgroundImage:`url( ${s.value.url} )`}])},null,4),t("div",{class:"container d-flex flex-column",style:x({"min-height":s.value.minheight})},[t("nav",z,[a(o,{to:"/",class:"navbar-brand"},{default:n(()=>[$,d(" ToysLand ")]),_:1}),q,t("div",I,[t("div",R,[a(o,{class:"nav-item nav-link me-4 active",to:"/"},{default:n(()=>[d("Home "),X]),_:1}),a(o,{class:"nav-item nav-link me-4",to:"/products"},{default:n(()=>[d("所有商品")]),_:1}),a(o,{class:"nav-item nav-link me-4",to:"/love"},{default:n(()=>[Y,t("span",K,c(y(u).length),1)]),_:1}),a(o,{class:"nav-item nav-link me-4",to:"/cart"},{default:n(()=>{var v;return[Z,t("span",P,c(((v=h.value.carts)==null?void 0:v.length)??0),1)]}),_:1})])])]),t("div",J,[t("div",{class:"col-md-4 text-center",innerHTML:s.value.content},null,8,Q)])],4)]),a(D)],64)}}};export{at as default};
