"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[2571],{7279:(t,o,d)=>{function r(){const t=new Date,o=6e4*t.getMinutes()+1e3*t.getSeconds()+t.getMilliseconds(),d=Math.floor(1e6*Math.random()),r=Math.floor(1e6*Math.random());return d.toString(36).substring(2)+o.toString(36)+r.toString(36).substring(2)}d.d(o,{g:()=>r})},2571:(t,o,d)=>{d.r(o),d.d(o,{tds_radio_button:()=>a});var r=d(3768),s=d(7279);const a=class{constructor(t){(0,r.r)(this,t),this.tdsChange=(0,r.c)(this,"tdsChange",6),this.handleChange=()=>{this.tdsChange.emit({radioId:this.radioId,value:this.value})},this.name=void 0,this.value=void 0,this.radioId=(0,s.g)(),this.checked=!1,this.required=!1,this.disabled=!1}render(){return(0,r.h)("div",{key:"94a76d67c971bcc9d5e45cd64ad49f87267ec584",class:"tds-radio-button"},(0,r.h)("input",{key:"73bb8fa6fabede809f55ea63d956efb6f776bd68",class:"tds-form-input",type:"radio",name:this.name,id:this.radioId,value:this.value,checked:this.checked,"aria-checked":this.checked,required:this.required,disabled:this.disabled,onChange:()=>this.handleChange()}),(0,r.h)("label",{key:"2bc4fb9747aa4207f0082680b9c2ab720f802844",htmlFor:this.radioId},(0,r.h)("slot",{key:"0b0c2bb6e2cbd67e307a4bc603dc48a699aa2202",name:"label"})))}get host(){return(0,r.g)(this)}};a.style='.sc-tds-radio-button:root,.tds-mode-light.sc-tds-radio-button{--tds-radio-button-color:var(--tds-grey-958);--tds-radio-button-interaction-01:var(--tds-blue-800);--tds-radio-button-interaction-02:var(--tds-white);--tds-radio-button-background-hover:var(--tds-blue-800);--tds-radio-button-background-focus:var(--tds-blue-800);--tds-radio-button-disabled:var(--tds-grey-600);--tds-radio-button-border-color-disabled-after:var(--tds-grey-500);--tds-radio-button-color-disabled-after:var(--tds-grey-700);--tds-radio-button-color-disabled-before:var(--tds-grey-700)}.tds-mode-dark.sc-tds-radio-button{--tds-radio-button-color:var(--tds-white);--tds-radio-button-interaction-01:var(--tds-white);--tds-radio-button-interaction-02:var(--tds-grey-958);--tds-radio-button-background-hover:var(--tds-white);--tds-radio-button-background-focus:var(--tds-white);--tds-radio-button-disabled:var(--tds-grey-600);--tds-radio-button-border-color-disabled-after:var(--tds-grey-700);--tds-radio-button-color-disabled-after:var(--tds-grey-700)}.tds-radio-button.sc-tds-radio-button{box-sizing:border-box;display:flex;align-items:center;margin-left:-4px;font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);color:var(--tds-radio-button-color)}.tds-radio-button.sc-tds-radio-button *.sc-tds-radio-button{box-sizing:border-box}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button{appearance:none;outline:none;margin:0;border:0;width:24px;height:24px;border-radius:50%;position:relative;cursor:pointer;flex-shrink:0;align-self:flex-start}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button+label.sc-tds-radio-button{padding:var(--tds-spacing-element-4) 0 var(--tds-spacing-element-4) var(--tds-spacing-element-4);cursor:pointer}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button::before,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button::after{content:"";position:absolute;border-radius:50%;box-sizing:border-box}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button::before{width:24px;height:24px;left:0;top:0}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button::after{border:1px solid var(--tds-radio-button-interaction-01);background-color:var(--tds-radio-button-interaction-02);width:16px;height:16px;left:4px;top:4px}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:hover::before{background-color:var(--tds-radio-button-background-hover);opacity:0.12}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:focus::before{background-color:var(--tds-radio-button-background-focus);opacity:0.24;animation:rb-focus 0.4s cubic-bezier(0.65, 0.05, 0.38, 0.95) forwards}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:disabled,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].disabled.sc-tds-radio-button{cursor:not-allowed}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:disabled::after,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].disabled.sc-tds-radio-button::after{border-color:var(--tds-radio-button-border-color-disabled-after);background-color:var(--tds-radio-button-interaction-02)}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:disabled+label.sc-tds-radio-button,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].disabled.sc-tds-radio-button+label.sc-tds-radio-button{color:var(--tds-radio-button-disabled);cursor:not-allowed}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:disabled:hover::before,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].disabled.sc-tds-radio-button:hover::before{display:none;opacity:1}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:checked::after{border:4px solid var(--tds-radio-button-interaction-01)}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:checked:disabled:hover::before,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:checked:disabled::before,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:checked.disabled:hover::before,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:checked.disabled::before{display:block;width:16px;height:16px;left:4px;top:4px;border:1px solid var(--tds-radio-button-color-disabled-before);box-sizing:content-box}.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:checked:disabled::after,.tds-radio-button.sc-tds-radio-button .tds-form-input[type=radio].sc-tds-radio-button:checked.disabled::after{border:4px solid var(--tds-radio-button-interaction-02);background-color:var(--tds-radio-button-color-disabled-after);left:5px;top:5px}@keyframes rb-focus{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:0.24}}'}}]);
//# sourceMappingURL=2571.1c3b9704.chunk.js.map