"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[978],{978:(t,e,i)=>{i.r(e),i.d(e,{tds_body_cell:()=>a});var s=i(3768);const l=["verticalDividers","compactDesign","noMinWidth"],a=class{constructor(t){(0,s.r)(this,t),this.cellValue=void 0,this.cellKey=void 0,this.disablePadding=!1,this.textAlign=void 0,this.textAlignState=void 0,this.activeSorting=!1,this.verticalDividers=!1,this.compactDesign=!1,this.noMinWidth=!1,this.whiteBackground=!1,this.tableId=""}internalTdsPropChangeListener(t){this.tableId===t.detail.tableId&&t.detail.changed.filter((t=>l.includes(t))).forEach((e=>{if("undefined"===typeof this[e])throw new Error("Table prop is not supported: ".concat(e));this[e]=t.detail[e]}))}internalTdsHoverListener(t){const{tableId:e,key:i}=t.detail;e===this.tableId&&(this.activeSorting=this.cellKey===i)}internalTdsTextAlignListener(t){const[e,i,s]=t.detail;this.tableId===e&&this.cellKey===i&&(this.textAlign?this.textAlignState=this.textAlign:this.textAlignState=["left","start","center","right","end"].includes(s)?s:"left")}connectedCallback(){this.tableEl=this.host.closest("tds-table"),this.tableId=this.tableEl.tableId}componentWillLoad(){l.forEach((t=>{this[t]=this.tableEl[t]})),this.textAlign&&(this.textAlignState=this.textAlign)}render(){let t="var(--tds-spacing-element-16)";this.disablePadding?t="0":this.compactDesign&&(t="var(--tds-spacing-element-8) var(--tds-spacing-element-16)");const e={textAlign:this.textAlignState,padding:t};return(0,s.h)(s.H,{key:"56fe770734dd720139eb614489283e2ec81cc596",class:{"tds-table__body-cell":!0,"tds-table__body-cell--hover":this.activeSorting,"tds-table__compact":this.compactDesign,"tds-table--divider":this.verticalDividers,"tds-table--no-min-width":this.noMinWidth},style:e},this.cellValue,(0,s.h)("slot",{key:"490a5caabb4a2ae94769875edb0743b474716e42"}))}get host(){return(0,s.g)(this)}};a.style=":host(.tds-table__body-cell){box-sizing:border-box;font:var(--tds-detail-02);letter-spacing:var(--tds-detail-02-ls);display:table-cell;box-sizing:border-box;color:var(--tds-table-color);padding:var(--tds-spacing-element-16);min-width:192px;vertical-align:top;background-color:transparent;transition:background-color 200ms ease}:host(.tds-table__body-cell) *{box-sizing:border-box}:host(.tds-table__body-cell--hover){background-color:var(--tds-table-body-cell-background-hover)}:host(.tds-table__compact){padding:var(--tds-spacing-element-8) var(--tds-spacing-element-16)}:host(.tds-table--divider){border-right:1px solid var(--tds-table-divider)}:host(.tds-table--divider:last-of-type){border-right:none}:host(.tds-table--no-min-width){min-width:unset}"}}]);
//# sourceMappingURL=978.20a458af.chunk.js.map