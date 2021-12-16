import{B as R}from"./BasicUpload.0faab125.js";import{n as S}from"./index.8d035c2e.js";import{d as M,e as v,a5 as P,i as b,o as T,c as W,a as B,X as u,Y as e,u as t,bj as s,aA as $,a4 as G,ak as H,aL as J,aU as Q,aW as Z,aw as z,aV as I,ai as K,aj as O,aN as X,aM as Y}from"./vendor.21d60ab8.js";import"./componentSetting.df76d574.js";const uu={class:"n-layout-page-header"},eu=s(" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002\u8868\u5355\u57DF\u6807\u7B7E\u4E5F\u53EF\u652F\u6301\u54CD\u5E94\u5F0F\u3002 "),tu=s("\u7537"),au=s("\u5973"),lu={style:{"margin-left":"80px"}},nu=s("\u63D0\u4EA4\u9884\u7EA6"),ou=s("\u91CD\u7F6E"),iu=M({setup(su){const A=S(),C=[{label:"\u79CD\u7259",value:1},{label:"\u8865\u7259",value:2},{label:"\u6839\u7BA1",value:3}],h=[{label:"\u674E\u533B\u751F",value:1},{label:"\u9EC4\u533B\u751F",value:2},{label:"\u5F20\u533B\u751F",value:3}],D={name:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u59D3\u540D",trigger:"blur"},remark:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8",trigger:"blur"},mobile:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u7535\u8BDD\u53F7\u7801",trigger:["input"]},datetime:{required:!0,type:"number",message:"\u8BF7\u9009\u62E9\u9884\u7EA6\u65F6\u95F4",trigger:["blur","change"]},doctor:{required:!0,type:"number",message:"\u8BF7\u9009\u62E9\u9884\u7EA6\u533B\u751F",trigger:"change"}},_=v(null),p=P(),{uploadUrl:x}=A,i=()=>({name:"",mobile:"",remark:"",sex:1,matter:null,doctor:null,datetime:[]});let a=b(i());const m=v(["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]),k=b({platform:"miniPrograms",timestamp:new Date().getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="});function U(){_.value.validate(r=>{r?p.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):p.success("\u9A8C\u8BC1\u6210\u529F")})}function y(){_.value.restoreValidation(),a=Object.assign(t(a),i())}function j(r){console.log(r)}return(r,l)=>{const c=$,d=G,o=H,V=J,f=Q,F=Z,g=z,q=I,E=K,L=O,w=X,N=Y;return T(),W("div",null,[B("div",uu,[u(c,{bordered:!1,title:"\u57FA\u7840\u8868\u5355"},{default:e(()=>[eu]),_:1})]),u(c,{bordered:!1,class:"mt-4 proCard"},{default:e(()=>[u(N,{cols:"1 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:e(()=>[u(w,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:e(()=>[u(L,{"label-width":80,model:t(a),rules:D,"label-placement":"left",ref_key:"formRef",ref:_,class:"py-8"},{default:e(()=>[u(o,{label:"\u9884\u7EA6\u59D3\u540D1",path:"name"},{default:e(()=>[u(d,{value:t(a).name,"onUpdate:value":l[0]||(l[0]=n=>t(a).name=n),placeholder:"\u8F93\u5165\u59D3\u540D"},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u53F7\u7801",path:"mobile"},{default:e(()=>[u(d,{placeholder:"\u7535\u8BDD\u53F7\u7801",value:t(a).mobile,"onUpdate:value":l[1]||(l[1]=n=>t(a).mobile=n)},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u65F6\u95F4",path:"datetime"},{default:e(()=>[u(V,{type:"datetime",value:t(a).datetime,"onUpdate:value":l[2]||(l[2]=n=>t(a).datetime=n)},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u533B\u751F",path:"doctor"},{default:e(()=>[u(f,{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u533B\u751F",options:h,value:t(a).doctor,"onUpdate:value":l[3]||(l[3]=n=>t(a).doctor=n)},null,8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u4E8B\u9879",path:"matter"},{default:e(()=>[u(f,{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u4E8B\u9879",options:C,value:t(a).matter,"onUpdate:value":l[4]||(l[4]=n=>t(a).matter=n),multiple:""},null,8,["value"])]),_:1}),u(o,{label:"\u6027\u522B",path:"sex"},{default:e(()=>[u(q,{value:t(a).sex,"onUpdate:value":l[5]||(l[5]=n=>t(a).sex=n),name:"sex"},{default:e(()=>[u(g,null,{default:e(()=>[u(F,{value:1},{default:e(()=>[tu]),_:1}),u(F,{value:2},{default:e(()=>[au]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),u(o,{label:"\u9884\u7EA6\u5907\u6CE8",path:"remark"},{default:e(()=>[u(d,{value:t(a).remark,"onUpdate:value":l[6]||(l[6]=n=>t(a).remark=n),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8"},null,8,["value"])]),_:1}),u(o,{label:"\u56FE\u7247",path:"img"},{default:e(()=>[u(t(R),{action:`${t(x)}/v1.0/files`,headers:t(k),data:{type:0},name:"files",width:100,height:100,onUploadChange:j,value:m.value,"onUpdate:value":l[7]||(l[7]=n=>m.value=n),helpText:"\u5355\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC720MB\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F2010\u4E2A\u6587\u4EF6"},null,8,["action","headers","value"])]),_:1}),B("div",lu,[u(g,null,{default:e(()=>[u(E,{type:"primary",onClick:U},{default:e(()=>[nu]),_:1}),u(E,{onClick:y},{default:e(()=>[ou]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{iu as default};
