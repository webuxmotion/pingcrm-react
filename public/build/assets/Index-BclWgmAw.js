import{X as i,j as e,x as r}from"./app-B0E2HKya.js";import{M as o}from"./MainLayout-DzRx1gdO.js";import{F as l,P as m}from"./FilterBar-CnrWuzsb.js";import{T as d}from"./Table-DeUGupid.js";import{T as c}from"./trash-2-DF02vzBG.js";import"./index-EEeLZrY6.js";import"./SelectInput-BParOk81.js";import"./FieldGroup-ByT6-SUL.js";function x(){const{organizations:n}=i().props,{data:s,meta:{links:t}}=n;return e.jsxs("div",{children:[e.jsx("h1",{className:"mb-8 text-3xl font-bold",children:"Organizations"}),e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx(l,{}),e.jsxs(r,{className:"btn-indigo focus:outline-none",href:route("organizations.create"),children:[e.jsx("span",{children:"Create"}),e.jsx("span",{className:"hidden md:inline",children:" Organization"})]})]}),e.jsx(d,{columns:[{label:"Name",name:"name",renderCell:a=>e.jsxs(e.Fragment,{children:[a.name,a.deleted_at&&e.jsx(c,{size:16,className:"ml-2 text-gray-400"})]})},{label:"City",name:"city"},{label:"Phone",name:"phone",colSpan:2}],rows:s,getRowDetailsUrl:a=>route("organizations.edit",a.id)}),e.jsx(m,{links:t})]})}x.layout=n=>e.jsx(o,{title:"Organizations",children:n});export{x as default};
