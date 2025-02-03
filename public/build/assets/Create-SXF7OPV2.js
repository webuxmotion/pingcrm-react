import{X as u,G as h,j as e,x}from"./app-B0E2HKya.js";import{M as p}from"./MainLayout-DzRx1gdO.js";import{L as j}from"./LoadingButton-CMfpK445.js";import{F as o,T as s}from"./FieldGroup-ByT6-SUL.js";import{S as i}from"./SelectInput-BParOk81.js";import"./index-EEeLZrY6.js";const v=()=>{const{organizations:l}=u().props,{data:n,setData:t,errors:r,post:d,processing:m}=h({first_name:"",last_name:"",organization_id:"",email:"",phone:"",address:"",city:"",region:"",country:"",postal_code:""});function c(a){a.preventDefault(),d(route("contacts.store"))}return e.jsxs("div",{children:[e.jsxs("h1",{className:"mb-8 text-3xl font-bold",children:[e.jsx(x,{href:route("contacts"),className:"text-indigo-600 hover:text-indigo-700",children:"Contacts"}),e.jsx("span",{className:"font-medium text-indigo-600",children:" /"})," Create"]}),e.jsx("div",{className:"max-w-3xl overflow-hidden bg-white rounded shadow",children:e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{className:"grid gap-8 p-8 lg:grid-cols-2",children:[e.jsx(o,{label:"First Name",name:"first_name",error:r.first_name,children:e.jsx(s,{name:"first_name",error:r.first_name,value:n.first_name,onChange:a=>t("first_name",a.target.value)})}),e.jsx(o,{label:"Last Name",name:"last_name",error:r.last_name,children:e.jsx(s,{name:"last_name",error:r.last_name,value:n.last_name,onChange:a=>t("last_name",a.target.value)})}),e.jsx(o,{label:"Organization",name:"organization_id",error:r==null?void 0:r.organization_id,children:e.jsx(i,{name:"organization_id",error:r.organization_id,value:n.organization_id,onChange:a=>t("organization_id",a.target.value),options:l==null?void 0:l.map(({id:a,name:g})=>({value:String(a),label:g}))})}),e.jsx(o,{label:"Email",name:"email",error:r.email,children:e.jsx(s,{name:"email",type:"email",error:r.email,value:n.email,onChange:a=>t("email",a.target.value)})}),e.jsx(o,{label:"Phone",name:"phone",error:r.phone,children:e.jsx(s,{name:"phone",error:r.phone,value:n.phone,onChange:a=>t("phone",a.target.value)})}),e.jsx(o,{label:"Address",name:"address",error:r.address,children:e.jsx(s,{name:"address",error:r.address,value:n.address,onChange:a=>t("address",a.target.value)})}),e.jsx(o,{label:"City",name:"city",error:r.city,children:e.jsx(s,{name:"city",error:r.city,value:n.city,onChange:a=>t("city",a.target.value)})}),e.jsx(o,{label:"Region",name:"region",error:r.region,children:e.jsx(s,{name:"region",error:r.region,value:n.region,onChange:a=>t("region",a.target.value)})}),e.jsx(o,{label:"Country",name:"country",error:r.country,children:e.jsx(i,{name:"country",error:r.country,value:n.country,onChange:a=>t("country",a.target.value),options:[{value:"CA",label:"Canada"},{value:"US",label:"United States"}]})}),e.jsx(o,{label:"Postal Code",name:"postal_code",error:r.postal_code,children:e.jsx(s,{name:"postal_code",error:r.postal_code,value:n.postal_code,onChange:a=>t("postal_code",a.target.value)})})]}),e.jsx("div",{className:"flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200",children:e.jsx(j,{loading:m,type:"submit",className:"btn-indigo",children:"Create Contact"})})]})})]})};v.layout=l=>e.jsx(p,{title:"Create Contact",children:l});export{v as default};
