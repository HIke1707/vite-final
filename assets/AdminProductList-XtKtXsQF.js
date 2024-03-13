import{b as n,c as i,d as t,n as B,f as D,F as C,h as L,t as c,g as V,i as A,j as p,v as O,k as h,o as S,l as I,m as g,p as J,e as N}from"./index-ZyHefE6V.js";import{a as F}from"./axios-G2rPRu76.js";import{M as E}from"./modal-8GjLtis6.js";const R={"aria-label":"Page navigation example"},T={class:"pagination"},z=t("span",{"aria-hidden":"true"},"«",-1),q=[z],G={key:0,class:"page-link"},H=["onClick"],K=t("span",{"aria-hidden":"true"},"»",-1),Q=[K],W={__name:"PaginationVue",props:{pages:Number,default:()=>1},emits:["emit-pages"],setup(l,{emit:f}){const y=f,r=m=>{y("emit-pages",m)};return(m,u)=>(n(),i("nav",R,[t("ul",T,[t("li",{class:B(["page-item",{disabled:l.pages.current_page===1}])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:u[0]||(u[0]=D(e=>r(l.pages.current_page-1),["prevent"]))},q)],2),(n(!0),i(C,null,L(l.pages.total_pages,(e,b)=>(n(),i("li",{key:b,class:B(["page-item",{active:e===l.pages.current_page}])},[e===l.pages.current_page?(n(),i("span",G,c(e),1)):(n(),i("a",{key:1,class:"page-link",href:"#",onClick:D(_=>r(e),["prevent"])},c(e),9,H))],2))),128)),t("li",{class:B(["page-item",{disabled:l.pages.current_page===l.pages.total_pages}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:u[1]||(u[1]=D(e=>r(l.pages.current_page+1),["prevent"]))},Q)],2)])]))}},X={id:"detail"},Y=t("h2",null,"單一產品細節",-1),Z={class:"card mb-3"},tt=["src"],et={class:"card-body"},st={class:"card-title"},ot={class:"badge bg-primary ms-2"},lt={class:"card-text"},at={class:"card-text"},nt={class:"d-flex"},it={class:"card-text me-2"},dt={class:"card-text text-secondary"},ct=["src"],rt={class:"text-secondary"},ut={__name:"ProductDetail",props:{product:{type:Object,default:()=>{}},hasFocus:{type:Boolean,default:()=>!1}},setup(l){return(f,y)=>(n(),i("div",X,[Y,l.hasFocus?(n(),i(C,{key:0},[t("div",Z,[t("img",{src:l.product.imageUrl,class:"card-img-top primary-image",alt:"主圖"},null,8,tt),t("div",et,[t("h5",st,[V(c(l.product.title)+" ",1),t("span",ot,c(l.product.category),1)]),t("p",lt,"商品描述："+c(l.product.description),1),t("p",at,"商品內容："+c(l.product.content),1),t("div",nt,[t("p",it,c(l.product.price),1),t("p",dt,[t("del",null,c(l.product.origin_price),1)]),V(" 元 / "+c(l.product.unit),1)])])]),(n(!0),i(C,null,L(l.product.imagesUrl,(r,m)=>(n(),i("img",{key:m,src:r,alt:"",class:"images m-2"},null,8,ct))),128))],64)):A("",!0),p(t("p",rt,"請選擇一個商品查看",512),[[O,!l.hasFocus]])]))}},pt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},mt={class:"modal-dialog"},_t={class:"modal-content border-0"},ht=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),bt={class:"modal-body"},vt=t("strong",{class:"text-danger"},null,-1),gt={class:"modal-footer"},ft=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),yt={__name:"DeleteProductModal",props:{propitem:null},emits:["close"],setup(l,{expose:f,emit:y}){const r="https://ec-course-api.hexschool.io/v2",m="yangapi",u=l,e=y,b=h(null),_=()=>{b.value.show()},M=()=>{b.value.hide()},$=async()=>{const w=u.propitem.id,k=`${r}/api/${m}/admin/product/${w}`;let v=!1;return await F.delete(k).then(x=>{const{success:U}=x.data;v=U,alert("已刪除商品"),M(),e("close")}).catch(x=>{alert(JSON.stringify(x))}),v};return S(async()=>{b.value=new E(document.getElementById("delProductModal"),{keyboard:!1})}),f({openModal:_,hideModal:M}),(w,k)=>(n(),i("div",pt,[t("div",mt,[t("div",_t,[ht,t("div",bt,[V(" 是否刪除 "),vt,V(" 商品"+c(l.propitem.title)+"(刪除後將無法恢復)。 ",1)]),t("div",gt,[ft,t("button",{type:"button",class:"btn btn-danger",onClick:k[0]||(k[0]=v=>$())}," 確認刪除 ")])])])],512))}},$t={id:"product-modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},wt={class:"modal-dialog modal-xl"},kt={class:"modal-content border-0"},xt={class:"modal-header bg-dark text-white"},Mt={id:"productModalLabel",class:"modal-title"},Ut=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Pt={class:"modal-body"},Ct={class:"row"},Vt={class:"col-sm-4"},Nt={class:"mb-2"},Bt={class:"mb-3"},Ft=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Lt=["src"],Dt={key:0},Ot=["src"],St=["onUpdate:modelValue"],Et={key:1},jt={class:"col-sm-8"},At={class:"mb-3"},It=t("label",{for:"title",class:"form-label"},"標題",-1),Jt={class:"row"},Rt={class:"mb-3 col-md-6"},Tt=t("label",{for:"category",class:"form-label"},"分類",-1),zt={class:"mb-3 col-md-6"},qt=t("label",{for:"price",class:"form-label"},"單位",-1),Gt={class:"row"},Ht={class:"mb-3 col-md-6"},Kt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Qt={class:"mb-3 col-md-6"},Wt=t("label",{for:"price",class:"form-label"},"售價",-1),Xt=t("hr",null,null,-1),Yt={class:"mb-3"},Zt=t("label",{for:"description",class:"form-label"},"產品描述",-1),te={class:"mb-3"},ee=t("label",{for:"content",class:"form-label"},"說明內容",-1),se={class:"mb-3"},oe={class:"form-check"},le=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ae={__name:"ProductModal",props:["isopen","isnew","propitem"],emits:["close"],setup(l,{expose:f,emit:y}){const r="https://ec-course-api.hexschool.io/v2",m="yangapi",u=l,e=h(u.propitem),b=y,_=h(null),M=()=>{_.value.show()},$=()=>{_.value.hide()},w=async()=>{const a=`${r}/api/${m}/admin/product`;let o=!1;const s={data:e.value};return await F.post(a,s).then(d=>{const{success:P}=d.data;o=P}).catch(d=>{alert(JSON.stringify(d))}),o},k=async()=>{const a=`${r}/api/${m}/admin/product/${e.value.id}`;let o=!1;const s={data:e.value};return await F.put(a,s).then(d=>{const{success:P}=d.data;o=P}).catch(d=>{alert(JSON.stringify(d))}),o},v=async()=>{let a=!1;return a=u.isnew?await w():await k(),b("close"),$(),a},x=()=>{$()},U=()=>{e.value.imagesUrl=[],e.value.imagesUrl.push("")};return I(()=>u.propitem,a=>{e.value=a}),S(async()=>{_.value=new E(document.getElementById("product-modal"),{keyboard:!1})}),f({openModal:M,hideModal:$}),(a,o)=>(n(),i("div",$t,[t("div",wt,[t("div",kt,[t("div",xt,[t("h5",Mt,[t("span",null,c(l.isnew?"新增產品":"編輯產品"),1)]),Ut]),t("div",Pt,[t("div",Ct,[t("div",Vt,[t("div",Nt,[t("div",Bt,[Ft,p(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":o[0]||(o[0]=s=>e.value.imageUrl=s)},null,512),[[g,e.value.imageUrl]])]),t("img",{class:"img-fluid",src:e.value.imageUrl,alt:""},null,8,Lt)]),Array.isArray(e.value.imagesUrl)?(n(),i("div",Dt,[(n(!0),i(C,null,L(e.value.imagesUrl,(s,d)=>(n(),i("div",{key:d},[t("img",{class:"img-fluid",src:s,alt:""},null,8,Ot),p(t("input",{type:"text",class:"form-control","onUpdate:modelValue":P=>e.value.imagesUrl[d]=P},null,8,St),[[g,e.value.imagesUrl[d]]])]))),128)),t("div",null,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=s=>e.value.imagesUrl.push(""))}," 新增圖片 ")]),t("div",null,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.value.imagesUrl.pop())}," 刪除圖片 ")])])):(n(),i("div",Et,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:U}," 新增圖片 ")]))]),t("div",jt,[t("div",At,[It,p(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=s=>e.value.title=s)},null,512),[[g,e.value.title]])]),t("div",Jt,[t("div",Rt,[Tt,p(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[4]||(o[4]=s=>e.value.category=s)},null,512),[[g,e.value.category]])]),t("div",zt,[qt,p(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[5]||(o[5]=s=>e.value.unit=s)},null,512),[[g,e.value.unit]])])]),t("div",Gt,[t("div",Ht,[Kt,p(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[6]||(o[6]=s=>e.value.origin_price=s)},null,512),[[g,e.value.origin_price,void 0,{number:!0}]])]),t("div",Qt,[Wt,p(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[7]||(o[7]=s=>e.value.price=s)},null,512),[[g,e.value.price,void 0,{number:!0}]])])]),Xt,t("div",Yt,[Zt,p(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=s=>e.value.content=s)},`
                `,512),[[g,e.value.content]])]),t("div",te,[ee,p(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[9]||(o[9]=s=>e.value.description=s)},`
                `,512),[[g,e.value.description]])]),t("div",se,[t("div",oe,[p(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[10]||(o[10]=s=>e.value.is_enabled=s)},null,512),[[J,e.value.is_enabled]]),le])])])])]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:x}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:v}," 確認 ")])])])]))}},ne={class:"container"},ie={class:"row py-3"},de={class:"col-md-6"},ce={class:"row"},re=t("div",{class:"col-md-6"},[t("h2",{class:"w50"},"產品列表")],-1),ue={class:"col-md-6"},pe={class:"table table-hover mt-4"},me=t("thead",null,[t("tr",null,[t("th",{width:"150"},"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"140"}," 是否啟用 "),t("th",{width:"140"}," 查看細節 "),t("th",{width:"180"}," 動作 ")])],-1),_e={width:"150"},he={width:"120"},be={width:"120"},ve={width:"140"},ge={class:"text-success"},fe={width:"140"},ye=["onClick"],$e={width:"200"},we=["onClick"],ke=["onClick"],xe={class:"col-md-6"},Ce={__name:"AdminProductList",setup(l){const f="https://ec-course-api.hexschool.io/v2",y="yangapi",r=h([]),m=h(null),u=h(!1),e=h(!1),b=h(!1),_=h({imagesUrl:[]}),M=h({}),$=h(null),w=h(null),k=a=>{m.value=a,u.value=!0},v=async(a=1)=>{const o=`${f}/api/${y}/admin/products?page=${a}`;await F.get(o).then(s=>{const d=s.data.products;r.value=Object.entries(d).map(([P,j])=>({id:P,...j})),M.value=s.data.pagination}).catch(s=>{console.debug(s)})},x=()=>{e.value=!1,v()},U=(a,o)=>{a==="new"?(_.value={imagesUrl:[]},b.value=!0,w.value.openModal()):a==="edit"?(_.value={...o},b.value=!1,w.value.openModal()):a==="delete"&&(_.value={...o},$.value.openModal())};return S(()=>{v()}),(a,o)=>(n(),i(C,null,[t("div",ne,[t("div",ie,[t("div",de,[t("div",ce,[re,t("div",ue,[t("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#product-modal",style:{float:"right"},onClick:o[0]||(o[0]=s=>U("new",null))},"新增項目")])]),t("table",pe,[me,t("tbody",null,[(n(!0),i(C,null,L(r.value,s=>(n(),i("tr",{key:s.id,class:B([{"table-secondary":!s.is_enabled}])},[t("td",_e,c(s.title),1),t("td",he,c(s.origin_price),1),t("td",be,c(s.price),1),t("td",ve,[p(t("span",ge,"啟用",512),[[O,s.is_enabled]]),p(t("span",null,"未啟用",512),[[O,!s.is_enabled]])]),t("td",fe,[t("button",{type:"button",class:"btn btn-primary",onClick:d=>k(s)},"查看細節",8,ye)]),t("td",$e,[t("button",{type:"button",class:"btn btn-primary",onClick:d=>U("delete",s)},"刪除",8,we),t("button",{type:"button",class:"btn btn-primary",onClick:d=>U("edit",s)},"編輯",8,ke)])],2))),128))])]),N(W,{pages:M.value,onEmitPages:v},null,8,["pages"]),t("p",null,[V("目前有 "),t("span",null,c(r.value.length),1),V(" 項產品")])]),t("div",xe,[N(ut,{product:m.value,"has-focus":u.value},null,8,["product","has-focus"])])])]),N(ae,{isnew:b.value,propitem:_.value,onClose:x,ref_key:"productModalRef",ref:w},null,8,["isnew","propitem"]),N(yt,{propitem:_.value,onClose:x,ref_key:"delProductModal",ref:$},null,8,["propitem"])],64))}};export{Ce as default};