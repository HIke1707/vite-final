import{o as g,r as p,a as d,b as v,c as m,d as a,e as s,w as i,f as _,g as c}from"./index-ZyHefE6V.js";import{a as l}from"./axios-G2rPRu76.js";const b={class:"home"},f={class:"position-relative"},k=a("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":`url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?
      ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)`,"background-position":"center center",opacity:"0.1"}},null,-1),x={class:"container d-flex flex-column",style:{"min-height":"20vh"}},B={class:"navbar navbar-expand-lg navbar-light"},y=a("img",{style:{height:"50px"},src:"https://storage.googleapis.com/vue-course-api.appspot.com/yangapi/1710167769200.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2BP4%2BD13kdkZ8%2Bg9eeCZ5yNGQVElb6Wbi%2BLbIMeMm6ADxKgpd%2FK8qyCaz%2BILAfaCInt6%2Ft8Bjip3%2FQMxX1Z6fxpzaqdXTgjtBSWpInXrWfmDVqeUKxS7GNcpRBYVW0KvORXyyDLebAL2kC5H0zzXjhQolYK4VUVLTCHGt82vPRNBZITxleKTIlYdvic7xgDV4KVyTS%2F70ZnwqiELuD8Jtb1ZCqJklvjHF3kW5iNz1469a7%2FmV%2BRbHlN7XWl%2F4hqPj47tGBuJzwG3tYt%2BfDtp4DwB%2BtB5JpQaLINSwVQWXg%2F%2FOCWY9v5WHpXSSD8L3osCWMZ%2Fe3cwBqv%2F6Srd2%2BVX9g%3D%3D"},null,-1),V=a("a",{class:"navbar-brand",href:"./index.html",style:{"margin-left":"5px"}},"ToysLand",-1),w=a("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),C={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},D={class:"navbar-nav"},F={__name:"Admin_Layout",setup(L){const r="https://ec-course-api.hexschool.io/v2",u=async()=>{const o=`${r}/api/user/check`;let e=!1;return await l.post(o).then(t=>{const{success:n}=t.data;e=n}).catch(t=>{alert(t.message)}),e},h=()=>{const o=`${r}/logout`;l.post(o).then(e=>{document.cookie="hextoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",alert("登出成功"),p.push("/login")}).catch(()=>{alert("登出失敗")})};return g(()=>{var e;const o=(e=document.cookie.split("; ").find(t=>t.startsWith("hextoken=")))==null?void 0:e.split("=")[1];l.defaults.headers.common.Authorization=o,u().then(t=>{t||(alert("請登入"),p.push("/login"))})}),(o,e)=>{const t=d("RouterLink"),n=d("RouterView");return v(),m("div",b,[a("div",f,[k,a("div",x,[a("nav",B,[y,V,w,a("div",C,[a("div",D,[s(t,{class:"nav-link",to:"/admin/products"},{default:i(()=>[c("商品管理")]),_:1}),s(t,{class:"nav-link",to:"/admin/order"},{default:i(()=>[c("訂單管理")]),_:1}),s(t,{class:"nav-link",to:"/admin/coupon"},{default:i(()=>[c("優惠券管理")]),_:1}),a("a",{href:"#",onClick:_(h,["prevent"]),class:"nav-link"},"登出")])])])])]),s(n)])}}};export{F as default};