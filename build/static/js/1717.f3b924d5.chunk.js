"use strict";(self.webpackChunktegel_modal_bug_report=self.webpackChunktegel_modal_bug_report||[]).push([[1717],{7279:(e,t,a)=>{function s(){const e=new Date,t=6e4*e.getMinutes()+1e3*e.getSeconds()+e.getMilliseconds(),a=Math.floor(1e6*Math.random()),s=Math.floor(1e6*Math.random());return a.toString(36).substring(2)+t.toString(36)+s.toString(36).substring(2)}a.d(t,{g:()=>s})},1717:(e,t,a)=>{a.r(t),a.d(t,{tds_table:()=>i});var s=a(3768),n=a(7279);const i=class{constructor(e){(0,s.r)(this,e),this.internalTdsTablePropChange=(0,s.c)(this,"internalTdsTablePropChange",6),this.verticalDividers=!1,this.compactDesign=!1,this.noMinWidth=void 0,this.multiselect=!1,this.expandableRows=!1,this.responsive=!1,this.modeVariant=null,this.tableId=(0,n.g)()}emitInternalTdsPropChange(e,t){this.internalTdsTablePropChange.emit({tableId:this.tableId,changed:[e],[e]:t})}async getSelectedRows(){let e=[];const t=this.host.querySelector("tds-table-body");return Array.from(t.querySelectorAll("tds-table-body-row")).filter((e=>e.selected)).forEach((t=>{let a=[];Array.from(t.getElementsByTagName("tds-body-cell")).forEach((e=>{var t;const s={cellKey:null,cellValue:null};s.cellKey=e.cellKey,s.cellValue=null!==(t=e.cellValue)&&void 0!==t?t:e.innerText,a=[...a,s]})),e=[...e,a]})),e}multiselectChanged(e){this.emitInternalTdsPropChange("multiselect",e)}enableExpandableRowsChanged(e){this.emitInternalTdsPropChange("expandableRows",e)}compactDesignChanged(e){this.emitInternalTdsPropChange("compactDesign",e)}verticalDividersChanged(e){this.emitInternalTdsPropChange("verticalDividers",e)}noMinWidthChanged(e){this.emitInternalTdsPropChange("noMinWidth",e)}modeVariantChanged(e){this.emitInternalTdsPropChange("modeVariant",e)}render(){return(0,s.h)(s.H,{key:"e90429bc887c2a3a24eaf3acf0bba7748fd291ed",class:{"tds-table--responsive":this.responsive,"tds-mode-variant-primary":"primary"===this.modeVariant,"tds-mode-variant-secondary":"secondary"===this.modeVariant}},(0,s.h)("table",{key:"0ab17fb64542a59745bf6b5a8dee0fc365adecf3",class:{"tds-table":!0,"tds-table--compact":this.compactDesign,"tds-table--divider":this.verticalDividers,"tds-table--no-min-width":this.noMinWidth,"tds-table--responsive":this.responsive}},(0,s.h)("slot",{key:"855c9d02a5564e5ac5cba37c92b87e19e6fba919"})))}get host(){return(0,s.g)(this)}static get watchers(){return{multiselect:["multiselectChanged"],expandableRows:["enableExpandableRowsChanged"],compactDesign:["compactDesignChanged"],verticalDividers:["verticalDividersChanged"],noMinWidth:["noMinWidthChanged"],modeVariant:["modeVariantChanged"]}}};i.style=":host,.tds-table{border-collapse:collapse;display:table;box-sizing:border-box}:host *,.tds-table *{box-sizing:border-box}:host(.tds-table--responsive),.tds-table--responsive{width:100%}"}}]);
//# sourceMappingURL=1717.f3b924d5.chunk.js.map