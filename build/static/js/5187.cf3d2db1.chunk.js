"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[5187],{7279:(c,s,t)=>{function i(){const c=new Date,s=6e4*c.getMinutes()+1e3*c.getSeconds()+c.getMilliseconds(),t=Math.floor(1e6*Math.random()),i=Math.floor(1e6*Math.random());return t.toString(36).substring(2)+s.toString(36)+i.toString(36).substring(2)}t.d(s,{g:()=>i})},9995:(c,s,t)=>{t.d(s,{h:()=>i});const i=(c,s)=>!!s.querySelector('[slot="'.concat(c,'"]'))},5187:(c,s,t)=>{t.r(s),t.d(s,{tds_chip:()=>h});var i=t(3768),e=t(7279),p=t(9995);const h=class{constructor(c){(0,i.r)(this,c),this.tdsChange=(0,i.c)(this,"tdsChange",6),this.tdsClick=(0,i.c)(this,"tdsClick",6),this.handleChange=()=>{"checkbox"===this.type?this.checked=!this.checked:"radio"===this.type?this.checked=!0:console.error("Unsupported type in Chip component!"),this.tdsChange.emit({chipId:this.chipId,checked:this.checked,value:this.value})},this.handleClick=()=>{this.tdsClick.emit({chipId:this.chipId})},this.type="button",this.size="lg",this.chipId=(0,e.g)(),this.checked=!1,this.name=void 0,this.value=void 0}renderInputAttributes(){return"button"!==this.type?{value:this.value,checked:this.checked,name:this.name,onChange:()=>this.handleChange()}:{onClick:()=>this.handleClick()}}render(){const c=this.renderInputAttributes(),s=(0,p.h)("prefix",this.host),t=(0,p.h)("label",this.host),e=(0,p.h)("suffix",this.host);return(0,i.h)(i.H,{key:"9bbcbc750f70b6644985fab7c3e480d626c77e02"},(0,i.h)("div",{key:"37633a4897ae7a657e65474a4aa1525ec1d3ee85",class:"component"},(0,i.h)("div",{key:"89239d3f8f0e215f91154927b65ae054eacfcbd2",class:{"tds-chip-component":!0,sm:"sm"===this.size,lg:"lg"===this.size,prefix:s,suffix:e}},(0,i.h)("input",Object.assign({key:"09f4aa0094cababe19a96e1a3c33d96d75bb97fc",type:this.type,id:this.chipId},c)),(0,i.h)("label",{key:"2a45508bf2ae0dcf28d02d049815022154c17cb0",onClick:c=>c.stopPropagation(),htmlFor:this.chipId},s&&(0,i.h)("slot",{name:"prefix"}),t&&(0,i.h)("slot",{name:"label"}),e&&(0,i.h)("slot",{name:"suffix"})))))}get host(){return(0,i.g)(this)}};h.style=".sc-tds-chip-s>*{display:inline-flex;align-items:center}.sc-tds-chip-h.sc-tds-chip-s>[slot=label],.sc-tds-chip-h .sc-tds-chip-s>[slot=label]{padding-top:2px}.component.sc-tds-chip .tds-chip-component.sc-tds-chip{display:inline-flex}.component.sc-tds-chip .tds-chip-component.sc-tds-chip label.sc-tds-chip{background-color:var(--tds-chips-background);color:var(--tds-chips-color);font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);display:inline-flex;align-items:center;border-radius:16px;cursor:pointer;white-space:nowrap}.component.sc-tds-chip .tds-chip-component.sc-tds-chip label.sc-tds-chip:hover{background-color:var(--tds-chips-background-hover)}.component.sc-tds-chip .tds-chip-component.lg.sc-tds-chip label.sc-tds-chip{height:32px;padding:0 16px;gap:8px}.component.sc-tds-chip .tds-chip-component.sm.sc-tds-chip label.sc-tds-chip{height:24px;padding:0 12px;gap:6px}.component.sc-tds-chip .tds-chip-component.sm.prefix.sc-tds-chip label.sc-tds-chip{padding:0 12px 0 6px}.component.sc-tds-chip .tds-chip-component.sm.suffix.sc-tds-chip label.sc-tds-chip{padding:0 6px 0 12px}.component.sc-tds-chip .tds-chip-component.lg.prefix.sc-tds-chip label.sc-tds-chip{padding:0 16px 0 8px}.component.sc-tds-chip .tds-chip-component.lg.suffix.sc-tds-chip label.sc-tds-chip{padding:0 8px 0 16px}.component.sc-tds-chip .tds-chip-component.lg.prefix.suffix.sc-tds-chip label.sc-tds-chip{padding:0 8px}.component.sc-tds-chip .tds-chip-component.sm.prefix.suffix.sc-tds-chip label.sc-tds-chip{padding:0 6px}.component.sc-tds-chip .tds-chip-component.sc-tds-chip input.sc-tds-chip{opacity:0;position:absolute;z-index:-1}.component.sc-tds-chip .tds-chip-component.sc-tds-chip input.sc-tds-chip:focus-visible+label.sc-tds-chip{outline:2px solid var(--tds-blue-400);outline-offset:-2px;background-color:var(--tds-chips-background-focus)}.component.sc-tds-chip .tds-chip-component.sc-tds-chip input.sc-tds-chip:checked+label.sc-tds-chip{background-color:var(--tds-chips-background-active);color:var(--tds-chips-color-active)}.component.sc-tds-chip .tds-chip-component.sc-tds-chip input.sc-tds-chip:checked+label.sc-tds-chip:hover{background-color:var(--tds-chips-background-active-hover)}"}}]);
//# sourceMappingURL=5187.cf3d2db1.chunk.js.map