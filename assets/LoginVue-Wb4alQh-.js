import{e as r,o as u,a as p,b as e,y as _,s as i,v as l,f as h}from"./index-1KU6goa1.js";import{a as f}from"./axios-G2rPRu76.js";const v={class:"container"},w={class:"row justify-content-center text-center"},b=e("h1",{class:"h3 mb-3 mt-5 font-weight-normal"}," 請先登入 ",-1),x={class:"col-8"},g={class:"form-floating mb-3"},y=e("label",{for:"username"},"Email address",-1),k={class:"form-floating"},V=e("label",{for:"password"},"Password",-1),B=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1),U=e("p",{class:"mt-5 mb-3 text-muted text-center"}," © 2021~∞ - 六角學院 ",-1),E={__name:"LoginVue",setup($){const c="https://ec-course-api.hexschool.io/v2",o=r(null),a=r(null),d=async()=>{const n={username:o.value,password:a.value};await f.post(`${c}/admin/signin`,n).then(s=>{const{token:t,expired:m}=s.data;document.cookie=`hextoken=${t}; expires=${new Date(m)}; path=/`,h.push("admin/products")}).catch(()=>{alert("登入失敗")})};return(n,s)=>(u(),p("div",v,[e("div",w,[b,e("div",x,[e("form",{id:"form",class:"form-signin",onSubmit:_(d,["prevent"])},[e("div",g,[i(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),required:"",autofocus:""},null,512),[[l,o.value]]),y]),e("div",k,[i(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=t=>a.value=t),required:""},null,512),[[l,a.value]]),V]),B],32)])]),U]))}};export{E as default};