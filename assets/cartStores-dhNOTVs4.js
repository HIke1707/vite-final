import{q as e,e as o}from"./index-3to8NFAF.js";import{a as r}from"./axios-G2rPRu76.js";const s="https://ec-course-api.hexschool.io/v2",c="yangapi",p=e("counterStore",{state:()=>({cart:o({})}),actions:{getCart(){const a=`${s}/api/${c}/cart`;r.get(a).then(t=>{this.cart=t.data.data}).catch(t=>{alert(t.response.data.message)})}}});export{p as u};