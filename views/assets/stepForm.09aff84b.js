import m from"./Step1.286415f4.js";import v from"./Step2.f5de1652.js";import x from"./Step3.3441f7cb.js";import{_ as S}from"./index.8d035c2e.js";import{e as u,o as s,c as b,a as h,X as t,Y as n,a0 as a,$ as _,bj as j,aA as y,aY as g,aX as k,aw as N}from"./vendor.21d60ab8.js";const B={class:"n-layout-page-header"},V=j(" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002 "),C={setup(F){const e=u(1),i=u("process");function r(){e.value<3&&(e.value+=1)}function c(){e.value>1&&(e.value-=1)}function l(){e.value=1}return($,w)=>{const p=y,o=g,d=k,f=N;return s(),b("div",null,[h("div",B,[t(p,{bordered:!1,title:"\u5206\u6B65\u8868\u5355"},{default:n(()=>[V]),_:1})]),t(p,{bordered:!1,class:"mt-4 proCard"},{default:n(()=>[t(f,{vertical:"",class:"steps",justify:"center"},{default:n(()=>[t(d,{current:e.value,status:i.value},{default:n(()=>[t(o,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",description:"\u786E\u4FDD\u586B\u5199\u6B63\u786E"}),t(o,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",description:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),t(o,{title:"\u5B8C\u6210\u8F6C\u8D26",description:"\u606D\u559C\u60A8\uFF0C\u8F6C\u8D26\u6210\u529F"})]),_:1},8,["current","status"]),e.value===1?(s(),a(m,{key:0,onNextStep:r})):_("",!0),e.value===2?(s(),a(v,{key:1,onNextStep:r,onPrevStep:c})):_("",!0),e.value===3?(s(),a(x,{key:2,onPrevStep:c,onFinish:l})):_("",!0)]),_:1})]),_:1})])}}};var E=S(C,[["__scopeId","data-v-a228b7f8"]]);export{E as default};
