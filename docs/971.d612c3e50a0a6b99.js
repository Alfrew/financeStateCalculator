"use strict";(self.webpackChunkfsCalculator=self.webpackChunkfsCalculator||[]).push([[971],{7971:(yt,E,c)=>{c.r(E),c.d(E,{FscInsightsModule:()=>b});var m=c(6895),f=c(4463),L=c(3060),t=c(4650),U=c(4067),H=c(5017),y=c(1281),S=c(7579),O=c(727);let X=0;const T=new t.OlP("CdkAccordion");let j=(()=>{class s{constructor(){this._stateChanges=new S.x,this._openCloseAllActions=new S.x,this.id="cdk-accordion-"+X++,this._multi=!1}get multi(){return this._multi}set multi(e){this._multi=(0,y.Ig)(e)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275dir=t.lG2({type:s,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[t._Bn([{provide:T,useExisting:s}]),t.TTD]}),s})(),q=0,z=(()=>{class s{get expanded(){return this._expanded}set expanded(e){e=(0,y.Ig)(e),this._expanded!==e&&(this._expanded=e,this.expandedChange.emit(e),e?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,y.Ig)(e)}constructor(e,i,a){this.accordion=e,this._changeDetectorRef=i,this._expansionDispatcher=a,this._openCloseAllSubscription=O.w0.EMPTY,this.closed=new t.vpe,this.opened=new t.vpe,this.destroyed=new t.vpe,this.expandedChange=new t.vpe,this.id="cdk-accordion-child-"+q++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=a.listen((o,l)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===l&&this.id!==o&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(T,12),t.Y36(t.sBO),t.Y36(H.A8))},s.\u0275dir=t.lG2({type:s,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[t._Bn([{provide:T,useValue:void 0}])]}),s})(),$=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({}),s})();var P=c(4080),F=c(3238),Z=c(2687),G=c(1884),B=c(8675),C=c(9300),K=c(5698),k=c(9521),W=c(515),tt=c(6451),d=c(7340);const et=["body"];function nt(s,n){}const it=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],st=["mat-expansion-panel-header","*","mat-action-row"];function at(s,n){if(1&s&&t._UZ(0,"span",2),2&s){const e=t.oxw();t.Q6J("@indicatorRotate",e._getExpandedState())}}const ot=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],ct=["mat-panel-title","mat-panel-description","*"],w=new t.OlP("MAT_ACCORDION"),R="225ms cubic-bezier(0.4,0.0,0.2,1)",N={indicatorRotate:(0,d.X$)("indicatorRotate",[(0,d.SB)("collapsed, void",(0,d.oB)({transform:"rotate(0deg)"})),(0,d.SB)("expanded",(0,d.oB)({transform:"rotate(180deg)"})),(0,d.eR)("expanded <=> collapsed, void => collapsed",(0,d.jt)(R))]),bodyExpansion:(0,d.X$)("bodyExpansion",[(0,d.SB)("collapsed, void",(0,d.oB)({height:"0px",visibility:"hidden"})),(0,d.SB)("expanded",(0,d.oB)({height:"*",visibility:"visible"})),(0,d.eR)("expanded <=> collapsed, void => collapsed",(0,d.jt)(R))])},J=new t.OlP("MAT_EXPANSION_PANEL");let lt=(()=>{class s{constructor(e,i){this._template=e,this._expansionPanel=i}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(t.Rgc),t.Y36(J,8))},s.\u0275dir=t.lG2({type:s,selectors:[["ng-template","matExpansionPanelContent",""]]}),s})(),rt=0;const V=new t.OlP("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let Q=(()=>{class s extends z{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=(0,y.Ig)(e)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}constructor(e,i,a,o,l,r,M){super(e,i,a),this._viewContainerRef=o,this._animationMode=r,this._hideToggle=!1,this.afterExpand=new t.vpe,this.afterCollapse=new t.vpe,this._inputChanges=new S.x,this._headerId="mat-expansion-panel-header-"+rt++,this._bodyAnimationDone=new S.x,this.accordion=e,this._document=l,this._bodyAnimationDone.pipe((0,G.x)((g,p)=>g.fromState===p.fromState&&g.toState===p.toState)).subscribe(g=>{"void"!==g.fromState&&("expanded"===g.toState?this.afterExpand.emit():"collapsed"===g.toState&&this.afterCollapse.emit())}),M&&(this.hideToggle=M.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,B.O)(null),(0,C.h)(()=>this.expanded&&!this._portal),(0,K.q)(1)).subscribe(()=>{this._portal=new P.UE(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(w,12),t.Y36(t.sBO),t.Y36(H.A8),t.Y36(t.s_b),t.Y36(m.K0),t.Y36(t.QbO,8),t.Y36(V,8))},s.\u0275cmp=t.Xpm({type:s,selectors:[["mat-expansion-panel"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,lt,5),2&e){let o;t.iGM(o=t.CRH())&&(i._lazyContent=o.first)}},viewQuery:function(e,i){if(1&e&&t.Gf(et,5),2&e){let a;t.iGM(a=t.CRH())&&(i._body=a.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(e,i){2&e&&t.ekj("mat-expanded",i.expanded)("_mat-animation-noopable","NoopAnimations"===i._animationMode)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[t._Bn([{provide:w,useValue:void 0},{provide:J,useExisting:s}]),t.qOj,t.TTD],ngContentSelectors:st,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(e,i){1&e&&(t.F$t(it),t.Hsn(0),t.TgZ(1,"div",0,1),t.NdJ("@bodyExpansion.done",function(o){return i._bodyAnimationDone.next(o)}),t.TgZ(3,"div",2),t.Hsn(4,1),t.YNc(5,nt,0,0,"ng-template",3),t.qZA(),t.Hsn(6,2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("@bodyExpansion",i._getExpandedState())("id",i.id),t.uIk("aria-labelledby",i._headerId),t.xp6(4),t.Q6J("cdkPortalOutlet",i._portal))},dependencies:[P.Pl],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[N.bodyExpansion]},changeDetection:0}),s})();class dt{}const pt=(0,F.sb)(dt);let Y=(()=>{class s extends pt{constructor(e,i,a,o,l,r,M){super(),this.panel=e,this._element=i,this._focusMonitor=a,this._changeDetectorRef=o,this._animationMode=r,this._parentChangeSubscription=O.w0.EMPTY;const g=e.accordion?e.accordion._stateChanges.pipe((0,C.h)(p=>!(!p.hideToggle&&!p.togglePosition))):W.E;this.tabIndex=parseInt(M||"")||0,this._parentChangeSubscription=(0,tt.T)(e.opened,e.closed,g,e._inputChanges.pipe((0,C.h)(p=>!!(p.hideToggle||p.disabled||p.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe((0,C.h)(()=>e._containsFocus())).subscribe(()=>a.focusVia(i,"program")),l&&(this.expandedHeight=l.expandedHeight,this.collapsedHeight=l.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case k.L_:case k.K5:(0,k.Vb)(e)||(e.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e))}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(Q,1),t.Y36(t.SBq),t.Y36(Z.tE),t.Y36(t.sBO),t.Y36(V,8),t.Y36(t.QbO,8),t.$8M("tabindex"))},s.\u0275cmp=t.Xpm({type:s,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(e,i){1&e&&t.NdJ("click",function(){return i._toggle()})("keydown",function(o){return i._keydown(o)}),2&e&&(t.uIk("id",i.panel._headerId)("tabindex",i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),t.Udp("height",i._getHeaderHeight()),t.ekj("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after","after"===i._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===i._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===i._animationMode))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[t.qOj],ngContentSelectors:ct,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator",4,"ngIf"],[1,"mat-expansion-indicator"]],template:function(e,i){1&e&&(t.F$t(ot),t.TgZ(0,"span",0),t.Hsn(1),t.Hsn(2,1),t.Hsn(3,2),t.qZA(),t.YNc(4,at,1,1,"span",1)),2&e&&(t.ekj("mat-content-hide-toggle",!i._showToggle()),t.xp6(4),t.Q6J("ngIf",i._showToggle()))},dependencies:[m.O5],styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[N.indicatorRotate]},changeDetection:0}),s})(),ht=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275dir=t.lG2({type:s,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]}),s})(),gt=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275dir=t.lG2({type:s,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]}),s})(),mt=(()=>{class s extends j{constructor(){super(...arguments),this._ownHeaders=new t.n_E,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(e){this._hideToggle=(0,y.Ig)(e)}ngAfterContentInit(){this._headers.changes.pipe((0,B.O)(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Z.Em(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}}return s.\u0275fac=function(){let n;return function(i){return(n||(n=t.n5z(s)))(i||s)}}(),s.\u0275dir=t.lG2({type:s,selectors:[["mat-accordion"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,Y,5),2&e){let o;t.iGM(o=t.CRH())&&(i._headers=o)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(e,i){2&e&&t.ekj("mat-accordion-multi",i.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[t._Bn([{provide:w,useExisting:s}]),t.qOj]}),s})(),ft=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[m.ez,F.BQ,$,P.eL]}),s})();function ut(s,n){if(1&s&&(t.TgZ(0,"mat-expansion-panel")(1,"mat-expansion-panel-header"),t._UZ(2,"mat-panel-title",1),t.ALo(3,"translate"),t._UZ(4,"mat-panel-description",2),t.ALo(5,"translate"),t.qZA(),t._UZ(6,"mat-panel-description",3),t.ALo(7,"translate"),t._UZ(8,"p",1),t.ALo(9,"translate"),t.qZA()),2&s){const e=n.$implicit;t.xp6(2),t.Q6J("innerHTML",t.lcZ(3,4,e.title),t.oJD),t.xp6(2),t.Q6J("innerHTML",t.lcZ(5,6,e.intro),t.oJD),t.xp6(2),t.Q6J("innerHTML",t.lcZ(7,8,e.intro),t.oJD),t.xp6(2),t.Q6J("innerHTML",t.lcZ(9,10,e.text),t.oJD)}}class h{constructor(){this.panelList=[]}}h.\u0275fac=function(n){return new(n||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["sm-accordion"]],inputs:{panelList:"panelList"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"innerHTML"],[1,"panel-description-md",3,"innerHTML"],[1,"panel-description-mobile",3,"innerHTML"]],template:function(n,e){1&n&&(t.TgZ(0,"mat-accordion"),t.YNc(1,ut,10,12,"mat-expansion-panel",0),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",e.panelList))},dependencies:[m.sg,mt,Q,Y,gt,ht,f.X$],styles:[".panel-description-md[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 768px){.panel-description-md[_ngcontent-%COMP%]{display:block}.panel-description-mobile[_ngcontent-%COMP%]{display:none}}"]});class v{constructor(){this.panelList=[],this.netIncomePercentageList=[-100,-40,-20,0,10,20,40,60,80]}ngOnInit(){this.returnPrioritiesInsights()}checkLevel1(){let n=this.financeStateData.incomes.employment+this.financeStateData.incomes.investment+this.financeStateData.incomes.other,e=(n-this.financeStateData.incomes.expenses)/n*100,i=0;do{i++}while(e>=this.netIncomePercentageList[i-1]);this.panelList.push({title:"fscInsights.priorities.l1.title",intro:"fscInsights.priorities.l1.intro"+i,text:"fscInsights.priorities.l1.text"+i})}checkLevel2(n){let e=2;for(let i in n)n[i].changeRate>7&&(e=1);this.panelList.push({title:"fscInsights.priorities.l2.title",intro:"fscInsights.priorities.l2.intro"+e,text:"fscInsights.priorities.l2.text"+e})}checkLevel3(n,e){let a=1;n>0&&(a=2,n>e/12*3&&(a=3)),this.panelList.push({title:"fscInsights.priorities.l3.title",intro:"fscInsights.priorities.l3.intro"+a,text:"fscInsights.priorities.l3.text"+a})}checkLevel4(n){let e=0;for(let a in n)e+=n[a].assetValue;let i=1;e>0&&(i=2),this.panelList.push({title:"fscInsights.priorities.l4.title",intro:"fscInsights.priorities.l4.intro"+i,text:"fscInsights.priorities.l4.text"+i})}checkLevel5(){let n=this.financeStateData.liabilities,e=0,i=1;for(let a in n)n[a].changeRate>0&&n[a].changeRate<7&&(e+=n[a].assetValue);0===e&&(i=2),this.panelList.push({title:"fscInsights.priorities.l5.title",intro:"fscInsights.priorities.l5.intro"+i,text:"fscInsights.priorities.l5.text"+i})}returnPrioritiesInsights(){this.checkLevel1(),this.checkLevel2(this.financeStateData.liabilities),this.checkLevel3(this.financeStateData.financialAssets.emergencyFund.assetValue,this.financeStateData.incomes.expenses),this.checkLevel4(this.financeStateData.financialAssets),this.checkLevel5()}}v.\u0275fac=function(n){return new(n||v)},v.\u0275cmp=t.Xpm({type:v,selectors:[["fsc-priority-insights"]],inputs:{financeStateData:"financeStateData"},decls:4,vars:4,consts:[[3,"panelList"]],template:function(n,e){1&n&&(t.TgZ(0,"h2"),t._uU(1),t.ALo(2,"translate"),t.qZA(),t._UZ(3,"sm-accordion",0)),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,2,"fscInsights.priorities.title")),t.xp6(2),t.Q6J("panelList",e.panelList))},dependencies:[h,f.X$],styles:["h2[_ngcontent-%COMP%]{color:#8bc34a}"]});class I{constructor(){this.panelList=[],this.ageList=[18,25,35,45,55,65],this.incomeToHousingCostList=[30,20,10,0],this.liquidityToDebtList=[10,25,50,75,90,100,101]}ngOnInit(){this.returnFinancialPositionInsights()}checkAge(n){let e=0;do{e++}while(n>=this.ageList[e-1]);this.panelList.push({title:"fscInsights.position.age.title",intro:"fscInsights.position.age.intro"+e,text:"fscInsights.position.age.text"+e})}checkHousingCosts(){let i=0;this.financeStateData.liabilities.mortgage.assetValue>0?i=this.financeStateData.liabilities.mortgage.assetValue:this.financeStateData.incomes.rent&&this.financeStateData.incomes.rent>0&&(i=this.financeStateData.incomes.rent);let a=i/((this.financeStateData.incomes.employment+this.financeStateData.incomes.investment+this.financeStateData.incomes.other)/12)*100,o=0;do{o++}while(a<=this.incomeToHousingCostList[o-1]);this.panelList.push({title:"fscInsights.position.housingCost.title",intro:"fscInsights.position.housingCost.intro"+o,text:"fscInsights.position.housingCost.text"+o})}checkHousingSituation(n){let e=1;"true"===n&&(e=2),this.panelList.push({title:"fscInsights.position.housingSituation.title",intro:"fscInsights.position.housingSituation.intro"+e,text:"fscInsights.position.housingSituation.text"+e})}checkLiquidityToDebt(n,e){let i=0;for(let r in e)("cash"===r||"bank"===r||"emergencyFund"===r||"savings"===r)&&(i+=e[r].assetValue);let a=0;for(let r in n)"mortgage"!==r&&(a+=n[r].assetValue);let o=i/a*100,l=0;do{l++}while(o>=this.liquidityToDebtList[l-1]);this.panelList.push({title:"fscInsights.position.liquidity.title",intro:"fscInsights.position.liquidity.intro"+l,text:"fscInsights.position.liquidity.text"+l})}returnFinancialPositionInsights(){this.checkAge(this.financeStateData.incomes.age),this.checkLiquidityToDebt(this.financeStateData.liabilities,this.financeStateData.financialAssets),this.checkHousingCosts(),this.checkHousingSituation(this.financeStateData.incomes.homeOwner)}}I.\u0275fac=function(n){return new(n||I)},I.\u0275cmp=t.Xpm({type:I,selectors:[["fsc-financial-position-insights"]],inputs:{financeStateData:"financeStateData"},decls:4,vars:4,consts:[[3,"panelList"]],template:function(n,e){1&n&&(t.TgZ(0,"h2"),t._uU(1),t.ALo(2,"translate"),t.qZA(),t._UZ(3,"sm-accordion",0)),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,2,"fscInsights.position.title")),t.xp6(2),t.Q6J("panelList",e.panelList))},dependencies:[h,f.X$],styles:["h2[_ngcontent-%COMP%]{color:#8bc34a}"]});class _{constructor(){this.panelList=[],this.carLoanToIncomeList=[20,10,0],this.monthlyDebtToIncomeList=[100,50,25,15,0],this.monthlyIncomeToDebtList=[100,50,25,15,0]}ngOnInit(){this.returnDebtsInsights()}checkCarLoanToIncome(n,e){let i=e/n*100,a=0;do{a++}while(i<=this.carLoanToIncomeList[a-1]);this.panelList.push({title:"fscInsights.debt.carLoan.title",intro:"fscInsights.debt.carLoan.intro"+a,text:"fscInsights.debt.carLoan.text"+a})}checkCreditCardToIncome(n){let e=this.financeStateData.liabilities.creditCard.assetValue/n*100,i=0;do{i++}while(e<=this.monthlyIncomeToDebtList[i-1]);this.panelList.push({title:"fscInsights.debt.income.title",intro:"fscInsights.debt.income.intro"+i,text:"fscInsights.debt.income.text"+i})}checkCreditCardToSavings(n){let i=this.financeStateData.liabilities.creditCard.assetValue/((n-this.financeStateData.incomes.expenses)/12),a=0;switch(!0){case i<0:a=1;break;case 0===this.financeStateData.liabilities.creditCard.assetValue:a=4;break;case i<=1:a=3;break;case i>1:a=2;break;default:a=4}this.panelList.push({title:"fscInsights.debt.savings.title",intro:"fscInsights.debt.savings.intro"+a,text:"fscInsights.debt.savings.text"+a})}checkDebtServiceToIncome(n,e){let i=0;for(let l in e)i+=e[l].monthlyPayment;let a=i/n*100,o=0;do{o++}while(a<=this.monthlyDebtToIncomeList[o-1]);this.panelList.push({title:"fscInsights.debt.debtService.title",intro:"fscInsights.debt.debtService.intro"+o,text:"fscInsights.debt.debtService.text"+o})}returnDebtsInsights(){let n=this.financeStateData.incomes.employment+this.financeStateData.incomes.investment+this.financeStateData.incomes.other,e=n/12;this.checkCreditCardToSavings(n),this.checkCreditCardToIncome(e),this.checkDebtServiceToIncome(e,this.financeStateData.liabilities),this.checkCarLoanToIncome(e,this.financeStateData.liabilities.carLoan.monthlyPayment)}}_.\u0275fac=function(n){return new(n||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["fsc-debt-insights"]],inputs:{financeStateData:"financeStateData"},decls:4,vars:4,consts:[[3,"panelList"]],template:function(n,e){1&n&&(t.TgZ(0,"h2"),t._uU(1),t.ALo(2,"translate"),t.qZA(),t._UZ(3,"sm-accordion",0)),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,2,"fscInsights.debt.title")),t.xp6(2),t.Q6J("panelList",e.panelList))},dependencies:[h,f.X$],styles:["h2[_ngcontent-%COMP%]{color:#8bc34a}"]});class D{constructor(){this.panelList=[],this.cryptoToTotalAssetsList=[50,25,15,5,0]}ngOnInit(){this.returnInvestmentsInsights()}checkCrypto(n){let i=1;n>0&&(i=2),this.panelList.push({title:"fscInsights.investments.crypto.title",intro:"fscInsights.investments.crypto.intro"+i,text:"fscInsights.investments.crypto.text"+i})}checkCryptoPercentage(n,e,i){if(n<=0)return;let a=0;for(let r in e)a+=e[r].assetValue;for(let r in i)a+=i[r].assetValue;let o=n/a*100,l=0;do{l++}while(o<=this.cryptoToTotalAssetsList[l-1]);this.panelList.push({title:"fscInsights.investments.cryptoPercentage.title",intro:"fscInsights.investments.cryptoPercentage.intro"+l,text:"fscInsights.investments.cryptoPercentage.text"+l})}checkStocksAndEmergencyFund(n){let i=this.financeStateData.incomes.expenses/12*3,a=0;switch(!0){case!(this.financeStateData.financialAssets.stocks.assetValue>0):a=1;break;case n<i:a=2;break;case n>=i:a=3}this.panelList.push({title:"fscInsights.investments.emergencyFund.title",intro:"fscInsights.investments.emergencyFund.intro"+a,text:"fscInsights.investments.emergencyFund.text"+a})}checkStocksAndDebt(n){let e=this.financeStateData.financialAssets.stocks.assetValue>0,i=!1;for(let o in n)n[o].changeRate>7&&(i=!0);let a=0;switch(!0){case!e:a=1;break;case e&&i:a=2;break;case e&&!i:a=3}this.panelList.push({title:"fscInsights.investments.stocksDebt.title",intro:"fscInsights.investments.stocksDebt.intro"+a,text:"fscInsights.investments.stocksDebt.text"+a})}checkStocksDuration(n){let e=0;switch(n){case"1":e=1;break;case"2":e=2;break;case"3":e=3;break;case"4":e=4}this.panelList.push({title:"fscInsights.investments.stocksDuration.title",intro:"fscInsights.investments.stocksDuration.intro"+e,text:"fscInsights.investments.stocksDuration.text"+e})}returnInvestmentsInsights(){this.checkStocksAndEmergencyFund(this.financeStateData.financialAssets.emergencyFund.assetValue),this.checkStocksAndDebt(this.financeStateData.liabilities),this.checkStocksDuration(this.financeStateData.financialAssets.stocks.duration),this.checkCrypto(this.financeStateData.financialAssets.crypto.assetValue),this.checkCryptoPercentage(this.financeStateData.financialAssets.crypto.assetValue,this.financeStateData.financialAssets,this.financeStateData.physicalAssets)}}function xt(s,n){if(1&s&&(t.ynx(0),t.TgZ(1,"div",2),t._UZ(2,"fsc-priority-insights",3),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"fsc-financial-position-insights",3),t.qZA(),t.TgZ(5,"div",2),t._UZ(6,"fsc-debt-insights",3),t.qZA(),t.TgZ(7,"div",2),t._UZ(8,"fsc-investment-insights",3),t.qZA(),t.BQk()),2&s){const e=t.oxw();t.xp6(2),t.Q6J("financeStateData",e.financeStateData),t.xp6(2),t.Q6J("financeStateData",e.financeStateData),t.xp6(2),t.Q6J("financeStateData",e.financeStateData),t.xp6(2),t.Q6J("financeStateData",e.financeStateData)}}D.\u0275fac=function(n){return new(n||D)},D.\u0275cmp=t.Xpm({type:D,selectors:[["fsc-investment-insights"]],inputs:{financeStateData:"financeStateData"},decls:4,vars:4,consts:[[3,"panelList"]],template:function(n,e){1&n&&(t.TgZ(0,"h2"),t._uU(1),t.ALo(2,"translate"),t.qZA(),t._UZ(3,"sm-accordion",0)),2&n&&(t.xp6(1),t.Oqu(t.lcZ(2,2,"fscInsights.investments.title")),t.xp6(2),t.Q6J("panelList",e.panelList))},dependencies:[h,f.X$],styles:["h2[_ngcontent-%COMP%]{color:#8bc34a}"]});class A{constructor(n,e){this.financeStateDataSRV=n,this.router=e}ngOnInit(){this.getFSDfromService()}getFSDfromService(){this.financeStateDataSRV.financeStateData?this.financeStateData=this.financeStateDataSRV.financeStateData:(console.error("The finance state data service is empty"),this.router.navigate([""]))}}A.\u0275fac=function(n){return new(n||A)(t.Y36(U.L),t.Y36(L.F0))},A.\u0275cmp=t.Xpm({type:A,selectors:[["ng-component"]],decls:2,vars:1,consts:[[1,"page-wrapper"],[4,"ngIf"],[1,"pb-4"],[3,"financeStateData"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.YNc(1,xt,9,4,"ng-container",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.financeStateData))},dependencies:[m.O5,v,I,_,D],styles:[".page-wrapper[_ngcontent-%COMP%]{max-height:100%;padding:0 16px}@media screen and (min-width: 992px){.page-wrapper[_ngcontent-%COMP%]{padding:0 20vw}}.pb-4[_ngcontent-%COMP%]{padding-bottom:32px}"]});const bt=[{path:"",component:A}];class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[L.Bz.forChild(bt),L.Bz]});class x{}x.\u0275fac=function(n){return new(n||x)},x.\u0275mod=t.oAB({type:x}),x.\u0275inj=t.cJS({imports:[m.ez,ft,f.aw]});class b{}b.\u0275fac=function(n){return new(n||b)},b.\u0275mod=t.oAB({type:b}),b.\u0275inj=t.cJS({imports:[m.ez,u,x,f.aw]})}}]);