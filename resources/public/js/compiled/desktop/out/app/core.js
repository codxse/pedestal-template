// Compiled by ClojureScript 1.9.562 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof app.core.app_state !== 'undefined'){
} else {
app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Chestnut!"], null));
}
/**
 * @constructor
 */
app.core.RootComponent = (function app$core$RootComponent(){
var this__47951__auto__ = this;
React.Component.apply(this__47951__auto__,arguments);

if(!((this__47951__auto__.initLocalState == null))){
this__47951__auto__.state = this__47951__auto__.initLocalState();
} else {
this__47951__auto__.state = {};
}

return this__47951__auto__;
});

app.core.RootComponent.prototype = goog.object.clone(React.Component.prototype);

var x54071_54081 = app.core.RootComponent.prototype;
x54071_54081.componentWillUpdate = ((function (x54071_54081){
return (function (next_props__47795__auto__,next_state__47796__auto__){
var this__47794__auto__ = this;
if(((!((this__47794__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__47794__auto__.om$next$Ident$)))?true:false):false)){
var ident__47798__auto___54082 = om.next.ident.call(null,this__47794__auto__,om.next.props.call(null,this__47794__auto__));
var next_ident__47799__auto___54083 = om.next.ident.call(null,this__47794__auto__,om.next._next_props.call(null,next_props__47795__auto__,this__47794__auto__));
if(cljs.core.not_EQ_.call(null,ident__47798__auto___54082,next_ident__47799__auto___54083)){
var idxr__47800__auto___54084 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__47794__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__47800__auto___54084 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__47800__auto___54084),((function (idxr__47800__auto___54084,ident__47798__auto___54082,next_ident__47799__auto___54083,this__47794__auto__,x54071_54081){
return (function (indexes__47801__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__47801__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__47798__auto___54082], null),cljs.core.disj,this__47794__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__47799__auto___54083], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__47794__auto__);
});})(idxr__47800__auto___54084,ident__47798__auto___54082,next_ident__47799__auto___54083,this__47794__auto__,x54071_54081))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__47794__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__47794__auto__);
});})(x54071_54081))
;

x54071_54081.shouldComponentUpdate = ((function (x54071_54081){
return (function (next_props__47795__auto__,next_state__47796__auto__){
var this__47794__auto__ = this;
var next_children__47797__auto__ = next_props__47795__auto__.children;
var next_props__47795__auto____$1 = goog.object.get(next_props__47795__auto__,"omcljs$value");
var next_props__47795__auto____$2 = (function (){var G__54073 = next_props__47795__auto____$1;
if((next_props__47795__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__54073);
} else {
return G__54073;
}
})();
var or__45643__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__47794__auto__),next_props__47795__auto____$2);
if(or__45643__auto__){
return or__45643__auto__;
} else {
var or__45643__auto____$1 = (function (){var and__45631__auto__ = this__47794__auto__.state;
if(cljs.core.truth_(and__45631__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__47794__auto__.state,"omcljs$state"),goog.object.get(next_state__47796__auto__,"omcljs$state"));
} else {
return and__45631__auto__;
}
})();
if(cljs.core.truth_(or__45643__auto____$1)){
return or__45643__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__47794__auto__.props.children,next_children__47797__auto__);
}
}
});})(x54071_54081))
;

x54071_54081.componentWillUnmount = ((function (x54071_54081){
return (function (){
var this__47794__auto__ = this;
var r__47805__auto__ = om.next.get_reconciler.call(null,this__47794__auto__);
var cfg__47806__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__47805__auto__);
var st__47807__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__47806__auto__);
var indexer__47804__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__47806__auto__);
if(cljs.core.truth_((function (){var and__45631__auto__ = !((st__47807__auto__ == null));
if(and__45631__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__47807__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__47794__auto__], null));
} else {
return and__45631__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__47807__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__47794__auto__);
} else {
}

if((indexer__47804__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__47804__auto__,this__47794__auto__);
}
});})(x54071_54081))
;

x54071_54081.componentDidUpdate = ((function (x54071_54081){
return (function (prev_props__47802__auto__,prev_state__47803__auto__){
var this__47794__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__47794__auto__);
});})(x54071_54081))
;

x54071_54081.isMounted = ((function (x54071_54081){
return (function (){
var this__47794__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__47794__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x54071_54081))
;

x54071_54081.componentWillMount = ((function (x54071_54081){
return (function (){
var this__47794__auto__ = this;
var indexer__47804__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__47794__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__47804__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__47804__auto__,this__47794__auto__);
}
});})(x54071_54081))
;

x54071_54081.render = ((function (x54071_54081){
return (function (){
var this__47793__auto__ = this;
var this$ = this__47793__auto__;
var _STAR_reconciler_STAR_54074 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_54075 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_54076 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_54077 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_54078 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__47793__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__47793__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__47793__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__47793__auto__);

om.next._STAR_parent_STAR_ = this__47793__auto__;

try{return om.dom.div.call(null,null,om.dom.h1.call(null,null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state))),om.dom.h5.call(null,null,"THIS IS FROM PEDESTAL!"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_54078;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_54077;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_54076;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_54075;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_54074;
}});})(x54071_54081))
;


app.core.RootComponent.prototype.constructor = app.core.RootComponent;

app.core.RootComponent.prototype.constructor.displayName = "app.core/RootComponent";

app.core.RootComponent.prototype.om$isComponent = true;

var x54079_54085 = app.core.RootComponent;


var x54080_54086 = app.core.RootComponent.prototype;


app.core.RootComponent.cljs$lang$type = true;

app.core.RootComponent.cljs$lang$ctorStr = "app.core/RootComponent";

app.core.RootComponent.cljs$lang$ctorPrWriter = (function (this__47954__auto__,writer__47955__auto__,opt__47956__auto__){
return cljs.core._write.call(null,writer__47955__auto__,"app.core/RootComponent");
});
app.core.root = om.next.factory.call(null,app.core.RootComponent);
app.core.render = (function app$core$render(){
return ReactDOM.render(app.core.root.call(null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map?rel=1498062435340