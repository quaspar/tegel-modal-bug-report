"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[8479],{7279:(e,a,d)=>{function t(){const e=new Date,a=6e4*e.getMinutes()+1e3*e.getSeconds()+e.getMilliseconds(),d=Math.floor(1e6*Math.random()),t=Math.floor(1e6*Math.random());return d.toString(36).substring(2)+a.toString(36)+t.toString(36).substring(2)}d.d(a,{g:()=>t})},9995:(e,a,d)=>{d.d(a,{h:()=>t});const t=(e,a)=>!!a.querySelector('[slot="'.concat(e,'"]'))},8479:(e,a,d)=>{d.r(a),d.d(a,{tds_card:()=>i});var t=d(3768),r=d(7279),s=d(9995);const i=class{constructor(e){(0,t.r)(this,e),this.tdsClick=(0,t.c)(this,"tdsClick",6),this.handleClick=()=>{this.tdsClick.emit({cardId:this.cardId})},this.getCardHeader=()=>{const e=(0,s.h)("header",this.host),a=(0,s.h)("subheader",this.host),d=(0,s.h)("thumbnail",this.host);return(0,t.h)("div",{class:"card-header"},d&&(0,t.h)("slot",{name:"thumbnail"}),(0,t.h)("div",{class:"header-subheader"},this.header&&(0,t.h)("span",{class:"header"},this.header),e&&(0,t.h)("slot",{name:"header"}),this.subheader&&(0,t.h)("span",{class:"subheader"},this.subheader),a&&(0,t.h)("slot",{name:"subheader"})))},this.getCardContent=()=>{const e=(0,s.h)("body",this.host),a=(0,s.h)("body-image",this.host),d=(0,s.h)("actions",this.host);return(0,t.h)("div",null,"below-header"===this.imagePlacement&&this.getCardHeader(),(0,t.h)("div",{class:"card-body"},a&&(0,t.h)("slot",{name:"body-image"}),this.bodyImg&&(0,t.h)("img",{class:"card-body-img",src:this.bodyImg,alt:this.bodyImgAlt}),"above-header"===this.imagePlacement&&this.getCardHeader(),this.bodyDivider&&(0,t.h)("tds-divider",null),e&&(0,t.h)("slot",{name:"body"})),d&&(0,t.h)("slot",{name:"actions"}))},this.modeVariant=null,this.imagePlacement="below-header",this.header=void 0,this.subheader=void 0,this.bodyImg=void 0,this.bodyImgAlt=void 0,this.bodyDivider=!1,this.clickable=!1,this.cardId=(0,r.g)()}render(){return(0,t.h)(t.H,{key:"9c5083535652428bb360891eea04a41bf49d1f01",class:this.modeVariant&&"tds-mode-variant-".concat(this.modeVariant)},this.clickable?(0,t.h)("button",{class:"card ".concat(this.clickable?"clickable":""," ").concat(this.imagePlacement),onClick:()=>{this.clickable&&this.handleClick()}},this.getCardContent()):(0,t.h)("div",{class:"card ".concat(this.clickable?"clickable":""," ").concat(this.imagePlacement)},this.getCardContent()))}get host(){return(0,t.g)(this)}};i.style=".card{box-sizing:border-box;box-shadow:var(--tds-card-box);background-color:var(--tds-card-background);display:block;border-radius:4px;overflow:hidden}.card *{box-sizing:border-box}.card.clickable:hover{box-shadow:var(--tds-card-box-hover);cursor:pointer}.card .card-header{font:var(--tds-headline-06);letter-spacing:var(--tds-headline-06-ls);padding:16px;display:flex;align-items:center}.card .card-header slot[name=thumbnail]::slotted(*){width:36px;height:36px;border-radius:100%;margin-right:16px}.card .card-header .card-top-header{padding-left:16px;display:flex;flex-direction:column}.card .card-header .card-top-header.no-header-img{padding-left:0}.card .card-header.below{padding-top:16px}.card .header-subheader{display:flex;flex-direction:column;gap:4px}.card .header-subheader .header,.card .header-subheader slot[name=header]{color:var(--tds-card-headline)}.card .header-subheader .subheader,.card .header-subheader slot[name=subheader]{color:var(--tds-card-sub-headline)}.card .card-body-img{width:100%}.card .tds-divider{margin:16px 16px 0;background-color:var(--tds-card-divider);height:1px}.card .card-body{display:block;word-wrap:break-word}.card slot[name=body]::slotted(*){font:var(--tds-detail-03) !important;letter-spacing:var(--tds-detail-03-ls) !important;color:var(--tds-card-body-color);padding:0 16px;margin-bottom:16px;margin-top:16px;max-width:336px}.card slot[name=actions]::slotted(*){display:flex;padding:16px;color:var(--tds-card-icon-color)}button{width:100%;border:none;text-align:left;padding:0}button:focus-visible{outline:2px solid var(--tds-blue-400);outline-offset:-2px}button:active{box-shadow:var(--tds-card-box-pressed)}"}}]);
//# sourceMappingURL=8479.56c5c6cb.chunk.js.map