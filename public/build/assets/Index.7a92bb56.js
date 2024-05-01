import{L as u}from"./Student.5c682182.js";import{H as _,r as f,a as b,o as n,c as i,b as h,w as g,d as s,t as d,g as l,e as v,f as c,v as m,F as w,h as y}from"./app.aa0e9c6c.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const x={layout:u,components:{Head:_},props:{errors:Object},setup(){const o=f({nisn:"",password:""});return{form:o,submit:()=>{y.Inertia.post("/students/login",{nisn:o.nisn,password:o.password})}}}},N=s("title",null,"Login Siswa - Aplikasi Ujian Online",-1),V={class:"row justify-content-center mt-5"},j={class:"col-md-5"},H={class:"bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500"},L={key:0,class:"alert alert-danger mt-2"},S={key:1,class:"alert alert-danger mt-2"},B={class:"form-group mb-4"},C=s("label",{for:"email"},"Nisn",-1),I={class:"input-group"},O=s("span",{class:"input-group-text",id:"basic-addon1"},[s("i",{class:"fa fa-key"})],-1),U={key:0,class:"alert alert-danger mt-2"},D={class:"form-group"},F={class:"form-group mb-4"},M=s("label",{for:"password"},"Password",-1),P={class:"input-group"},A=s("span",{class:"input-group-text",id:"basic-addon2"},[s("i",{class:"fa fa-lock"})],-1),E={key:0,class:"alert alert-danger mt-2"},G=s("div",{class:"d-flex justify-content-between align-items-top mb-4"},[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",value:"",id:"remember"}),s("label",{class:"form-check-label mb-0",for:"remember"}," Remember me ")])],-1),R=s("div",{class:"d-grid"},[s("button",{type:"submit",class:"btn btn-gray-800"},"LOGIN")],-1);function T(o,e,t,r,q,z){const p=b("Head");return n(),i(w,null,[h(p,null,{default:g(()=>[N]),_:1}),s("div",V,[s("div",j,[s("div",H,[t.errors.message?(n(),i("div",L,d(t.errors.message),1)):l("",!0),o.$page.props.session.error?(n(),i("div",S,d(o.$page.props.session.error),1)):l("",!0),s("form",{onSubmit:e[2]||(e[2]=v((...a)=>r.submit&&r.submit(...a),["prevent"])),class:"mt-4"},[s("div",B,[C,s("div",I,[O,c(s("input",{type:"number",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=a=>r.form.nisn=a),placeholder:"Nisn"},null,512),[[m,r.form.nisn]])]),t.errors.nisn?(n(),i("div",U,d(t.errors.nisn),1)):l("",!0)]),s("div",D,[s("div",F,[M,s("div",P,[A,c(s("input",{type:"password",placeholder:"Password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=a=>r.form.password=a)},null,512),[[m,r.form.password]])]),t.errors.password?(n(),i("div",E,d(t.errors.password),1)):l("",!0)]),G]),R],32)])])])],64)}const W=k(x,[["render",T]]);export{W as default};
