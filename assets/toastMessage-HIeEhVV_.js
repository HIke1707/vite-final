import{p as o}from"./index-kTR-d31H.js";const h=o("toastMessage",{state:()=>({messages:[]}),actions:{toastShow(){setTimeout(()=>{this.messages.shift()},6e3)},clearToast(s){this.messages.splice(s,1)},pushMessage(s){const{style:e="success",title:t,content:a}=s;this.messages.push({style:e,title:t,content:a}),this.toastShow()}}});export{h as u};
