"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[7955],{9995:(t,e,d)=>{d.d(e,{h:()=>i});const i=(t,e)=>!!e.querySelector('[slot="'.concat(t,'"]'))},7955:(t,e,d)=>{d.r(e),d.d(e,{tds_text_field:()=>s});var i=d(3768),l=d(9995);const s=class{constructor(t){(0,i.r)(this,t),this.tdsChange=(0,i.c)(this,"tdsChange",6),this.tdsInput=(0,i.c)(this,"tdsInput",6),this.tdsFocus=(0,i.c)(this,"tdsFocus",6),this.tdsBlur=(0,i.c)(this,"tdsBlur",6),this.type="text",this.labelPosition="no-label",this.label="",this.min=void 0,this.max=void 0,this.helper=void 0,this.placeholder="",this.value="",this.disabled=!1,this.readOnly=!1,this.size="lg",this.modeVariant=null,this.noMinWidth=!1,this.name="",this.state="default",this.maxLength=void 0,this.autofocus=!1,this.focusInput=void 0}handleChange(t){this.tdsChange.emit(t)}handleInput(t){this.tdsInput.emit(t),this.value=t.target.value}handleFocus(t){this.textInput.focus(),this.focusInput=!0,this.tdsFocus.emit(t)}handleBlur(t){this.focusInput=!1,this.tdsBlur.emit(t)}render(){var t;const e=(0,l.h)("prefix",this.host),d=(0,l.h)("suffix",this.host);return(0,i.h)("div",{key:"2b312cea422545b69a06408597cc8acdb2e1b571",class:{"form-text-field-nomin":this.noMinWidth,"form-text-field":!this.focusInput||this.disabled,"text-field-focus":this.focusInput&&!this.disabled,"text-field-data":""!==this.value&&null!==this.value,"text-field-container-label-inside":"inside"===this.labelPosition&&"sm"!==this.size,"form-text-field-disabled":this.disabled,"form-text-field-readonly":this.readOnly,"tds-mode-variant-primary":"primary"===this.modeVariant,"tds-mode-variant-secondary":"secondary"===this.modeVariant,"form-text-field-md":"md"===this.size,"form-text-field-sm":"sm"===this.size,"form-text-field-error":"error"===this.state,"form-text-field-success":"success"===this.state}},"outside"===this.labelPosition&&(0,i.h)("div",{class:"text-field-label-outside"},(0,i.h)("div",null,this.label)),(0,i.h)("div",{key:"23c59920fa3c06b9677e06b1c8413b9938c731eb",onClick:()=>this.textInput.focus(),class:"text-field-container"},e&&(0,i.h)("div",{class:{"text-field-slot-wrap-prefix":!0,"text-field-error":"error"===this.state,"text-field-success":"success"===this.state,"text-field-default":"default"===this.state}},(0,i.h)("slot",{name:"prefix"})),(0,i.h)("div",{key:"aea27bc666bf486c46b9fe07bf0fb7290addf5ad",class:"text-field-input-container"},(0,i.h)("input",{key:"6b2cb5c19fdac8280806cf70d0ebbc4aefc80e8a",ref:t=>this.textInput=t,class:{"text-field-input":!0,"text-field-input-sm":"sm"===this.size,"text-field-input-md":"md"===this.size,"text-field-input-lg":"lg"===this.size},type:this.type,disabled:this.disabled,readonly:this.readOnly,placeholder:this.placeholder,value:this.value,autofocus:this.autofocus,maxlength:this.maxLength,name:this.name,min:this.min,max:this.max,onInput:t=>this.handleInput(t),onChange:t=>this.handleChange(t),onFocus:t=>{this.readOnly||this.handleFocus(t)},onBlur:t=>{this.readOnly||this.handleBlur(t)}}),"inside"===this.labelPosition&&"sm"!==this.size&&(0,i.h)("label",{class:"text-field-label-inside"},this.label)),(0,i.h)("div",{key:"d51f4eb1d1b8afeae3375d8111bcaf5f322e7382",class:"text-field-bar"}),d&&(0,i.h)("div",{class:{"text-field-slot-wrap-suffix":!0,"text-field-error":"error"===this.state,"text-field-success":"success"===this.state,"text-field-default":"default"===this.state,"tds-u-display-none":this.readOnly}},(0,i.h)("slot",{name:"suffix"})),(0,i.h)("span",{key:"ebf4dc9b5aba18087491a01d0619eea334dc0b93",class:"text-field-icon__readonly"},(0,i.h)("tds-icon",{key:"0c346e4bc4835081b3cf85dcf09b641dec1f6127",name:"edit_inactive",size:"20px"})),(0,i.h)("span",{key:"637c5b8941df13c39b0eda219c775f552253b15e",class:"text-field-icon__readonly-label"},"This field is non-editable")),(this.helper||this.maxLength>0)&&(0,i.h)("div",{class:"text-field-helper"},"error"===this.state&&(0,i.h)("div",{class:"text-field-helper-error-state"},(0,i.h)("tds-icon",{name:"error",size:"16px"}),this.helper),"error"!==this.state&&this.helper,this.maxLength>0&&(0,i.h)("div",{class:"text-field-textcounter"},null===this.value?0:null===(t=this.value)||void 0===t?void 0:t.length,(0,i.h)("span",{class:"text-field-textcounter-divider"}," / "),this.maxLength)))}get host(){return(0,i.g)(this)}};s.style='.text-field-input-lg.sc-tds-text-field{all:unset;border-radius:4px 4px 0 0;width:100%;box-sizing:border-box;margin:0;border:none;outline:none;height:100%;color:var(--tds-text-field-color);background-color:var(--tds-text-field-background);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);padding:var(--tds-spacing-element-20) var(--tds-spacing-element-16)}.text-field-input-lg.sc-tds-text-field::placeholder{color:var(--tds-text-field-color)}.text-field-input-lg.sc-tds-text-field:focus::placeholder{color:var(--tds-text-field-placeholder-focus-color)}.text-field-input-lg.sc-tds-text-field:disabled{cursor:not-allowed;background-color:var(--tds-text-field-background-disabled);color:var(--tds-text-field-color-disabled)}.text-field-input-lg.sc-tds-text-field:disabled::placeholder{color:var(--tds-text-field-placeholder-disabled)}.text-field-input-lg.sc-tds-text-field:disabled~.text-field-label-inside.sc-tds-text-field{color:var(--tds-text-field-label-disabled)}.text-field-input-md.sc-tds-text-field{all:unset;border-radius:4px 4px 0 0;width:100%;box-sizing:border-box;margin:0;border:none;outline:none;height:100%;color:var(--tds-text-field-color);background-color:var(--tds-text-field-background);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);padding:var(--tds-spacing-element-16)}.text-field-input-md.sc-tds-text-field::placeholder{color:var(--tds-text-field-color)}.text-field-input-md.sc-tds-text-field:focus::placeholder{color:var(--tds-text-field-placeholder-focus-color)}.text-field-input-md.sc-tds-text-field:disabled{cursor:not-allowed;background-color:var(--tds-text-field-background-disabled);color:var(--tds-text-field-color-disabled)}.text-field-input-md.sc-tds-text-field:disabled::placeholder{color:var(--tds-text-field-placeholder-disabled)}.text-field-input-md.sc-tds-text-field:disabled~.text-field-label-inside.sc-tds-text-field{color:var(--tds-text-field-label-disabled)}.text-field-input-sm.sc-tds-text-field{all:unset;border-radius:4px 4px 0 0;width:100%;box-sizing:border-box;margin:0;border:none;outline:none;height:100%;color:var(--tds-text-field-color);background-color:var(--tds-text-field-background);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);padding:var(--tds-spacing-element-16)}.text-field-input-sm.sc-tds-text-field::placeholder{color:var(--tds-text-field-color)}.text-field-input-sm.sc-tds-text-field:focus::placeholder{color:var(--tds-text-field-placeholder-focus-color)}.text-field-input-sm.sc-tds-text-field:disabled{cursor:not-allowed;background-color:var(--tds-text-field-background-disabled);color:var(--tds-text-field-color-disabled)}.text-field-input-sm.sc-tds-text-field:disabled::placeholder{color:var(--tds-text-field-placeholder-disabled)}.text-field-input-sm.sc-tds-text-field:disabled~.text-field-label-inside.sc-tds-text-field{color:var(--tds-text-field-label-disabled)}.text-field-container.sc-tds-text-field{border-radius:4px 4px 0 0;display:flex;position:relative;height:56px;box-sizing:border-box;background-color:var(--tds-text-field-background);border-bottom:1px solid var(--tds-text-field-border-bottom);transition:border-bottom-color 200ms ease}.text-field-container.sc-tds-text-field:hover{border-bottom-color:var(--tds-text-field-border-bottom-hover)}.form-text-field-md.sc-tds-text-field .text-field-container.sc-tds-text-field{height:48px}.form-text-field-sm.sc-tds-text-field .text-field-container.sc-tds-text-field{height:40px}.text-field-input-container.sc-tds-text-field{position:relative;width:100%}.text-field-data.sc-tds-text-field,.text-field-input.sc-tds-text-field{color:var(--tds-text-field-data-color)}.text-field-label-outside.sc-tds-text-field>*.sc-tds-text-field{font:var(--tds-detail-05);letter-spacing:var(--tds-detail-05-ls);display:block;margin-bottom:var(--tds-spacing-element-8);color:var(--tds-text-field-label-color)}.text-field-label-inside.sc-tds-text-field{font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);position:absolute;pointer-events:none;color:var(--tds-text-field-label-inside-color);left:16px}.form-text-field.sc-tds-text-field{display:block;min-width:208px}.form-text-field-nomin.sc-tds-text-field{min-width:auto}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-lg.sc-tds-text-field{padding-top:var(--tds-spacing-element-24);padding-bottom:15px}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-lg.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field{top:20px}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-lg.sc-tds-text-field::placeholder{color:transparent}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-lg.sc-tds-text-field .sc-tds-text-field::placeholder{color:transparent}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-lg.sc-tds-text-field:focus::placeholder{transition:color 0.35s ease;color:var(--tds-text-field-placeholder-focus-color)}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-md.sc-tds-text-field{padding-top:var(--tds-spacing-element-20);padding-bottom:11px}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-md.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field{top:16px}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-md.sc-tds-text-field::placeholder{color:transparent}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-md.sc-tds-text-field .sc-tds-text-field::placeholder{color:transparent}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-md.sc-tds-text-field:focus::placeholder{transition:color 0.35s ease;color:var(--tds-text-field-placeholder-focus-color)}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-sm.sc-tds-text-field{padding-top:var(--tds-spacing-element-20);padding-bottom:11px}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-sm.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field{top:16px}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-sm.sc-tds-text-field::placeholder{color:transparent}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-sm.sc-tds-text-field .sc-tds-text-field::placeholder{color:transparent}.form-text-field.text-field-container-label-inside.sc-tds-text-field .text-field-input-sm.sc-tds-text-field:focus::placeholder{transition:color 0.35s ease;color:var(--tds-text-field-placeholder-focus-color)}.form-text-field.text-field-container-label-inside.text-field-focus.sc-tds-text-field .text-field-input-sm.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field,.form-text-field.text-field-container-label-inside.text-field-data.sc-tds-text-field .text-field-input-sm.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field{font:var(--tds-detail-07);letter-spacing:var(--tds-detail-07-ls);transition:0.1s ease all;top:8px}.form-text-field.text-field-container-label-inside.text-field-focus.sc-tds-text-field .text-field-input-md.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field,.form-text-field.text-field-container-label-inside.text-field-data.sc-tds-text-field .text-field-input-md.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field{font:var(--tds-detail-07);letter-spacing:var(--tds-detail-07-ls);transition:0.1s ease all;top:8px}.form-text-field.text-field-container-label-inside.text-field-focus.sc-tds-text-field .text-field-input-lg.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field,.form-text-field.text-field-container-label-inside.text-field-data.sc-tds-text-field .text-field-input-lg.sc-tds-text-field~.text-field-label-inside.sc-tds-text-field{font:var(--tds-detail-07);letter-spacing:var(--tds-detail-07-ls);transition:0.1s ease all;top:12px}.text-field-bar.sc-tds-text-field{position:absolute;width:100%}.text-field-bar.sc-tds-text-field::before,.text-field-bar.sc-tds-text-field::after{content:"";height:2px;top:54px;width:0;position:absolute;background:var(--tds-text-field-bar);transition:0.35s ease all}.form-text-field-md.sc-tds-text-field .text-field-bar.sc-tds-text-field::before,.form-text-field-md.sc-tds-text-field .text-field-bar.sc-tds-text-field::after{top:46px}.form-text-field-sm.sc-tds-text-field .text-field-bar.sc-tds-text-field::before,.form-text-field-sm.sc-tds-text-field .text-field-bar.sc-tds-text-field::after{top:40px}.text-field-bar.sc-tds-text-field::before{left:50%}.text-field-bar.sc-tds-text-field::after{right:50%}.text-field-focus.sc-tds-text-field .text-field-bar.sc-tds-text-field::before,.text-field-focus.sc-tds-text-field .text-field-bar.sc-tds-text-field::after{width:50%}.text-field-helper.sc-tds-text-field{font:var(--tds-detail-05);letter-spacing:var(--tds-detail-05-ls);display:flex;gap:8px;justify-content:space-between;flex-basis:100%;padding-top:var(--tds-spacing-element-4);color:var(--tds-text-field-helper)}.text-field-helper.sc-tds-text-field .text-field-textcounter.sc-tds-text-field{margin-left:auto}.form-text-field-disabled.sc-tds-text-field .text-field-container.sc-tds-text-field{border-bottom-color:transparent}.form-text-field-disabled.sc-tds-text-field .text-field-slot-wrap-prefix.sc-tds-text-field>*.sc-tds-text-field,.form-text-field-disabled.sc-tds-text-field .text-field-slot-wrap-suffix.sc-tds-text-field>*.sc-tds-text-field{color:var(--tds-text-field-ps-color-disabled)}.form-text-field-disabled.sc-tds-text-field .text-field-label-outside.sc-tds-text-field>*.sc-tds-text-field{color:var(--tds-text-field-label-disabled)}.text-field-icon__readonly.sc-tds-text-field{display:none;position:absolute;right:18px;top:50%;transform:translateY(-50%);color:var(--tds-text-field-icon-read-only-label-color)}.text-field-icon__readonly-label.sc-tds-text-field{display:none;position:absolute;right:18px;top:48px;font:var(--tds-detail-05);letter-spacing:var(--tds-detail-05-ls);padding:8px;white-space:nowrap;border-radius:4px 0 4px 4px;background-color:var(--tds-text-field-icon-read-only-label-background)}.form-text-field-readonly.sc-tds-text-field{pointer-events:none}.form-text-field-readonly.sc-tds-text-field .text-field-icon__readonly.sc-tds-text-field{display:block}.form-text-field-readonly.sc-tds-text-field .text-field-icon__readonly.sc-tds-text-field:hover~.text-field-icon__readonly-label.sc-tds-text-field{display:block}.form-text-field-readonly.sc-tds-text-field .text-field-input.sc-tds-text-field{padding-right:54px;background-color:transparent}.form-text-field-success.sc-tds-text-field .text-field-container.sc-tds-text-field{border-bottom-color:var(--tds-text-field-border-bottom-success)}.form-text-field-error.sc-tds-text-field .text-field-helper.sc-tds-text-field{color:var(--tds-text-field-helper-error)}.form-text-field-error.sc-tds-text-field .text-field-container.sc-tds-text-field{border-bottom-color:var(--tds-text-field-border-bottom-error)}.form-text-field-error.sc-tds-text-field .text-field-bar.sc-tds-text-field::before,.form-text-field-error.sc-tds-text-field .text-field-bar.sc-tds-text-field::after{background:var(--tds-text-field-bar-error)}.text-field-helper-error-state.sc-tds-text-field{display:flex;gap:8px;flex-wrap:nowrap}.text-field-textcounter.sc-tds-text-field{font:var(--tds-detail-05);letter-spacing:var(--tds-detail-05-ls);color:var(--tds-text-field-textcounter);float:right}.text-field-textcounter.sc-tds-text-field .text-field-textcounter-divider.sc-tds-text-field{color:var(--tds-text-field-textcounter-divider)}.text-field-slot-wrap-prefix.sc-tds-text-field,.text-field-slot-wrap-suffix.sc-tds-text-field{align-self:center;font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);margin:0 0 0 14px;color:var(--tds-text-field-ps-color)}.text-field-slot-wrap-prefix.sc-tds-text-field-s>:not(tds-icon),.text-field-slot-wrap-suffix.sc-tds-text-field-s>:not(tds-icon){margin:0 0 0 2px}.text-field-slot-wrap-prefix.text-field-error.sc-tds-text-field,.text-field-slot-wrap-suffix.text-field-error.sc-tds-text-field{color:var(--tds-text-field-ps-color-error)}.text-field-slot-wrap-suffix.sc-tds-text-field{margin:0 14px 0 0}.text-field-slot-wrap-suffix.sc-tds-text-field-s>:not(tds-icon){margin:0 2px 0 0}'}}]);
//# sourceMappingURL=7955.39021801.chunk.js.map