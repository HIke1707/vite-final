import{c as z,h as J,i as K,a as w,b as e,F as Q,r as Y,t as x,k as Z,l as q,v as M,d as tt,e as R,w as G,f as et,o as C}from"./index-kTR-d31H.js";import{u as ot}from"./cartStores-UEsP8mV9.js";import{a as E}from"./axios-G2rPRu76.js";import{c as O,g as nt}from"./commonjsHelpers-5-cIlDoe.js";import{u as st}from"./toastMessage-HIeEhVV_.js";function rt(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var A=rt,at=typeof O=="object"&&O&&O.Object===Object&&O,ct=at,it=ct,dt=typeof self=="object"&&self&&self.Object===Object&&self,lt=it||dt||Function("return this")(),D=lt,ut=D,bt=function(){return ut.Date.now()},pt=bt,_t=/\s/;function ft(t){for(var n=t.length;n--&&_t.test(t.charAt(n)););return n}var ht=ft,mt=ht,gt=/^\s+/;function vt(t){return t&&t.slice(0,mt(t)+1).replace(gt,"")}var yt=vt,Tt=D,xt=Tt.Symbol,H=xt,P=H,X=Object.prototype,$t=X.hasOwnProperty,jt=X.toString,S=P?P.toStringTag:void 0;function St(t){var n=$t.call(t,S),c=t[S];try{t[S]=void 0;var d=!0}catch{}var u=jt.call(t);return d&&(n?t[S]=c:delete t[S]),u}var kt=St,wt=Object.prototype,Ct=wt.toString;function Ot(t){return Ct.call(t)}var It=Ot,U=H,Et=kt,Nt=It,Lt="[object Null]",qt="[object Undefined]",V=U?U.toStringTag:void 0;function Mt(t){return t==null?t===void 0?qt:Lt:V&&V in Object(t)?Et(t):Nt(t)}var Rt=Mt;function Gt(t){return t!=null&&typeof t=="object"}var Pt=Gt,Ut=Rt,Vt=Pt,Bt="[object Symbol]";function Ft(t){return typeof t=="symbol"||Vt(t)&&Ut(t)==Bt}var Wt=Ft,At=yt,B=A,Dt=Wt,F=NaN,Ht=/^[-+]0x[0-9a-f]+$/i,Xt=/^0b[01]+$/i,zt=/^0o[0-7]+$/i,Jt=parseInt;function Kt(t){if(typeof t=="number")return t;if(Dt(t))return F;if(B(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=B(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=At(t);var c=Xt.test(t);return c||zt.test(t)?Jt(t.slice(2),c?2:8):Ht.test(t)?F:+t}var Qt=Kt,Yt=A,N=pt,W=Qt,Zt="Expected a function",te=Math.max,ee=Math.min;function oe(t,n,c){var d,u,b,l,i,_,h=0,v=!1,m=!1,s=!0;if(typeof t!="function")throw new TypeError(Zt);n=W(n)||0,Yt(c)&&(v=!!c.leading,m="maxWait"in c,b=m?te(W(c.maxWait)||0,n):b,s="trailing"in c?!!c.trailing:s);function r(a){var f=d,j=u;return d=u=void 0,h=a,l=t.apply(j,f),l}function p(a){return h=a,i=setTimeout(o,n),v?r(a):l}function y(a){var f=a-_,j=a-h,L=n-f;return m?ee(L,b-j):L}function g(a){var f=a-_,j=a-h;return _===void 0||f>=n||f<0||m&&j>=b}function o(){var a=N();if(g(a))return $(a);i=setTimeout(o,y(a))}function $(a){return i=void 0,s&&d?r(a):(d=u=void 0,l)}function k(){i!==void 0&&clearTimeout(i),h=0,d=_=u=i=void 0}function T(){return i===void 0?l:$(N())}function I(){var a=N(),f=g(a);if(d=arguments,u=this,_=a,f){if(i===void 0)return p(_);if(m)return clearTimeout(i),i=setTimeout(o,n),r(_)}return i===void 0&&(i=setTimeout(o,n)),l}return I.cancel=k,I.flush=T,I}var ne=oe;const se=nt(ne),re={class:"container"},ae={class:"row mt-3"},ce={class:"col-8"},ie=e("h3",null,"購物車明細",-1),de={class:"table",style:{width:"100%"}},le=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"border-0 ps-0"},"商品名稱"),e("th",{scope:"col",class:"border-0"},"單件價格"),e("th",{scope:"col",class:"border-0"},"數量"),e("th",{scope:"col",class:"border-0"},"小計"),e("th",{scope:"col",class:"border-0"})])],-1),ue={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},be=["src"],pe={class:"mb-0 fw-bold ms-3 d-inline-block"},_e={class:"border-0 align-middle"},fe={class:"mb-0 ms-auto"},he={class:"border-0 align-middle",style:{"max-width":"160px"}},me={class:"input-group pe-5"},ge={class:"input-group-prepend"},ve=["onClick"],ye=e("i",{class:"fas fa-minus"},null,-1),Te=[ye],xe=["onUpdate:modelValue"],$e={class:"input-group-append"},je=["onClick"],Se=e("i",{class:"fas fa-plus"},null,-1),ke=[Se],we={class:"border-0 align-middle"},Ce={class:"mb-0 ms-auto"},Oe={class:"border-0 align-middle"},Ie=["onClick"],Ee=e("i",{class:"fas fa-times"},null,-1),Ne=[Ee],Le={class:"col-md-4"},qe={class:"border p-4 mb-4"},Me=e("h4",{class:"fw-bold mb-4"},"訂單資訊",-1),Re={class:"table text-muted border-bottom"},Ge=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"總計",-1),Pe={class:"text-end border-0 px-0 pt-4"},Ue=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"運費"),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"NT$0")],-1),Ve={colspan:"2"},Be={key:0},Fe=e("span",null,"已套用優惠券",-1),We={class:"color-danger"},Ae={class:"d-flex justify-content-between mt-4"},De=e("p",{class:"mb-0 h4 fw-bold"},"Total",-1),He={class:"mb-0 h4 fw-bold"},Xe=e("a",{class:"btn btn-dark w-50 mt-4"},"返回購物",-1),ze=e("a",{class:"btn btn-dark w-50 mt-4"},"前往結賬",-1),to={__name:"CartPage",setup(t){const n=st(),{pushMessage:c}=n,d="https://ec-course-api.hexschool.io/v2",u="yangapi",b=ot(),l=z({get(){return b.cart}}),i=(s,r)=>{if(r==="+")s.qty=s.qty+1;else if(s.qty>1&&r==="-")s.qty=s.qty-1;else return!1;_(s.id,s.product.id,s.qty)},_=se((s,r,p=1)=>{const y=`${d}/api/${u}/cart/${s}`,g={product_id:r,qty:p};E.put(y,{data:g}).then(o=>{c({style:"success",title:"系統訊息",content:o.data.message}),b.getCart()}).catch(o=>{c({style:"error",title:"發生錯誤",content:o.response.data.message})})},500),h=s=>{const r=`${d}/api/${u}/cart/${s}`;E.delete(r).then(p=>{c({style:"success",title:"系統訊息",content:p.data.message}),b.getCart()}).catch(p=>{c({style:"error",title:"發生錯誤",content:p.response.data.message})})},v=J(""),m=()=>{const s=`${d}/api/${u}/coupon`;E.post(s,{data:{code:v.value}}).then(r=>{c({style:"success",title:"系統訊息",content:r.data.message}),b.getCart()}).catch(r=>{c({style:"error",title:"發生錯誤",content:r.response.data.message})})};return K(()=>{b.getCart()}),(s,r)=>{var y,g;const p=et("RouterLink");return C(),w("div",re,[e("div",ae,[e("div",ce,[ie,e("table",de,[le,e("tbody",null,[(C(!0),w(Q,null,Y(l.value.carts,o=>{var $,k;return C(),w("tr",{class:"border-bottom border-top",key:o.id},[e("th",ue,[e("img",{src:o==null?void 0:o.product.imageUrl,alt:"",style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,be),e("p",pe,x(($=o==null?void 0:o.product)==null?void 0:$.title),1)]),e("td",_e,[e("p",fe,x((k=o==null?void 0:o.product)==null?void 0:k.price),1)]),e("td",he,[e("div",me,[e("div",ge,[e("button",{onClick:T=>i(o,"-"),class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1"},Te,8,ve)]),q(e("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":T=>o.qty=T},null,8,xe),[[M,o.qty]]),e("div",$e,[e("button",{onClick:T=>i(o,"+"),class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2"},ke,8,je)])])]),e("td",we,[e("p",Ce,x(o==null?void 0:o.total),1)]),e("td",Oe,[e("button",{onClick:T=>h(o.id),class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2"},Ne,8,Ie)])])}),128))])])]),e("div",Le,[e("div",qe,[Me,e("table",Re,[e("tbody",null,[e("tr",null,[Ge,e("td",Pe,x(l.value.total),1)]),Ue,e("tr",null,[e("td",Ve,[Z(" 優惠碼 : "),q(e("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>v.value=o),onChange:r[1]||(r[1]=o=>m())},null,544),[[M,v.value]]),(y=l.value)!=null&&y.carts?(C(),w("p",Be,[Fe,e("span",We,x((g=l.value.carts[0])==null?void 0:g.coupon.code),1)])):tt("",!0)])])])]),e("div",Ae,[De,e("p",He,x(l.value.final_total),1)]),R(p,{to:"/products"},{default:G(()=>[Xe]),_:1}),R(p,{to:"/checkout"},{default:G(()=>[ze]),_:1})])])])])}}};export{to as default};
