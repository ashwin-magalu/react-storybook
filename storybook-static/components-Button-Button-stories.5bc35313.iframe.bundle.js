"use strict";(self.webpackChunkreact_storybook=self.webpackChunkreact_storybook||[]).push([[721],{"./src/components/Button/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,LongPrimaryA:()=>LongPrimaryA,Primary:()=>Primary,PrimaryA:()=>PrimaryA,Secondary:()=>Secondary,SecondaryA:()=>SecondaryA,Success:()=>Success,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=_ref=>{let{variant="primary",children,...rest}=_ref;return(0,jsx_runtime.jsx)("button",{className:`button ${variant}`,...rest,children})},components_Button_Button=Button_Button;Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1}}};const Center_Center=props=>(0,jsx_runtime.jsx)("div",{className:"center",children:props.children});Center_Center.__docgenInfo={description:"",methods:[],displayName:"Center"};const Button_stories={title:"form/control/Button",component:components_Button_Button,args:{children:"Button"}},Primary=()=>(0,jsx_runtime.jsx)(components_Button_Button,{variant:"primary",children:"Primary"}),Secondary=()=>(0,jsx_runtime.jsx)(components_Button_Button,{variant:"secondary",children:"Secondary"}),Success=()=>(0,jsx_runtime.jsx)(components_Button_Button,{variant:"success",children:"Success"}),Danger=()=>(0,jsx_runtime.jsx)(components_Button_Button,{variant:"danger",children:"Danger"}),Template=args=>(0,jsx_runtime.jsx)(components_Button_Button,{...args}),PrimaryA=Template.bind({});PrimaryA.args={variant:"primary",children:"Primary Args"};const LongPrimaryA=Template.bind({});LongPrimaryA.args={...PrimaryA.args,children:"Long Primary Args"};const SecondaryA=Template.bind({});SecondaryA.args={variant:"secondary"};const __namedExportsOrder=["Primary","Secondary","Success","Danger","PrimaryA","LongPrimaryA","SecondaryA"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'() => <Button variant="primary">Primary</Button>',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'() => <Button variant="secondary">Secondary</Button>',...Secondary.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:'() => <Button variant="success">Success</Button>',...Success.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:'() => <Button variant="danger">Danger</Button>',...Danger.parameters?.docs?.source}}},PrimaryA.parameters={...PrimaryA.parameters,docs:{...PrimaryA.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...PrimaryA.parameters?.docs?.source}}},LongPrimaryA.parameters={...LongPrimaryA.parameters,docs:{...LongPrimaryA.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...LongPrimaryA.parameters?.docs?.source}}},SecondaryA.parameters={...SecondaryA.parameters,docs:{...SecondaryA.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...SecondaryA.parameters?.docs?.source}}}}}]);